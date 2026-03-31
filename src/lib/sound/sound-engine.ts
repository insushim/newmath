// ============================================================
// Web Audio API Sound Engine (Programmatic Synthesis)
// ============================================================
//
// All sounds are generated using oscillators and gain envelopes.
// No external audio files needed. Singleton pattern with lazy
// AudioContext initialization (to respect browser autoplay policy).
// ============================================================

type OscillatorType = 'sine' | 'square' | 'triangle' | 'sawtooth';

interface NoteParams {
  frequency: number;
  duration: number;
  type?: OscillatorType;
  gain?: number;
  delay?: number;
  detune?: number;
}

let instance: SoundEngine | null = null;

export class SoundEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private _enabled = true;
  private _volume = 0.5;

  private constructor() {}

  static getInstance(): SoundEngine {
    if (!instance) {
      instance = new SoundEngine();
    }
    return instance;
  }

  /**
   * Lazily initialize the AudioContext.
   * Must be called after a user gesture on mobile browsers.
   */
  private ensureContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;

    if (!this.ctx) {
      try {
        this.ctx = new AudioContext();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.value = this._volume;
        this.masterGain.connect(this.ctx.destination);
      } catch {
        return null;
      }
    }

    // Resume if suspended (autoplay policy)
    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }

    return this.ctx;
  }

  get enabled(): boolean {
    return this._enabled;
  }

  set enabled(value: boolean) {
    this._enabled = value;
  }

  get volume(): number {
    return this._volume;
  }

  set volume(value: number) {
    this._volume = Math.max(0, Math.min(1, value));
    if (this.masterGain) {
      this.masterGain.gain.value = this._volume;
    }
  }

  /**
   * Play a single synthesized note.
   */
  private playNote(params: NoteParams): void {
    if (!this._enabled) return;

    const ctx = this.ensureContext();
    if (!ctx || !this.masterGain) return;

    const {
      frequency,
      duration,
      type = 'sine',
      gain = 0.3,
      delay = 0,
      detune = 0,
    } = params;

    const startTime = ctx.currentTime + delay;

    const osc = ctx.createOscillator();
    osc.type = type;
    osc.frequency.value = frequency;
    osc.detune.value = detune;

    const gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0, startTime);
    gainNode.gain.linearRampToValueAtTime(gain, startTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

    osc.connect(gainNode);
    gainNode.connect(this.masterGain);

    osc.start(startTime);
    osc.stop(startTime + duration + 0.05);
  }

  /**
   * Play a sequence of notes.
   */
  private playSequence(notes: NoteParams[]): void {
    for (const note of notes) {
      this.playNote(note);
    }
  }

  /**
   * Play a noise burst (for percussion-like sounds).
   */
  private playNoise(duration: number, gain: number, delay: number = 0): void {
    if (!this._enabled) return;

    const ctx = this.ensureContext();
    if (!ctx || !this.masterGain) return;

    const startTime = ctx.currentTime + delay;
    const bufferSize = ctx.sampleRate * duration;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.5;
    }

    const source = ctx.createBufferSource();
    source.buffer = buffer;

    const gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(gain, startTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

    const filter = ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 3000;

    source.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(this.masterGain);

    source.start(startTime);
    source.stop(startTime + duration + 0.05);
  }

  // ─── Sound Effects ──────────────────────────────────────────

  /**
   * Correct answer sound: ascending major third (happy, bright).
   */
  correct(): void {
    this.playSequence([
      { frequency: 523.25, duration: 0.12, type: 'triangle', gain: 0.25 },
      { frequency: 659.25, duration: 0.12, type: 'triangle', gain: 0.25, delay: 0.08 },
      { frequency: 783.99, duration: 0.2, type: 'triangle', gain: 0.2, delay: 0.16 },
    ]);
  }

  /**
   * Wrong answer sound: descending minor second (soft, non-punishing).
   */
  wrong(): void {
    this.playSequence([
      { frequency: 330, duration: 0.15, type: 'sine', gain: 0.15 },
      { frequency: 277, duration: 0.25, type: 'sine', gain: 0.12, delay: 0.12 },
    ]);
  }

  /**
   * Level up sound: triumphant ascending arpeggio.
   */
  levelUp(): void {
    this.playSequence([
      { frequency: 523.25, duration: 0.1, type: 'square', gain: 0.15 },
      { frequency: 659.25, duration: 0.1, type: 'square', gain: 0.15, delay: 0.1 },
      { frequency: 783.99, duration: 0.1, type: 'square', gain: 0.15, delay: 0.2 },
      { frequency: 1046.5, duration: 0.3, type: 'square', gain: 0.2, delay: 0.3 },
      { frequency: 1046.5, duration: 0.3, type: 'sine', gain: 0.15, delay: 0.3, detune: 5 },
    ]);
  }

  /**
   * Badge unlock sound: magical sparkle.
   */
  badgeUnlock(): void {
    this.playSequence([
      { frequency: 880, duration: 0.08, type: 'sine', gain: 0.2 },
      { frequency: 1108.73, duration: 0.08, type: 'sine', gain: 0.2, delay: 0.06 },
      { frequency: 1318.51, duration: 0.08, type: 'sine', gain: 0.2, delay: 0.12 },
      { frequency: 1760, duration: 0.4, type: 'sine', gain: 0.15, delay: 0.18 },
      { frequency: 1760, duration: 0.4, type: 'triangle', gain: 0.1, delay: 0.18, detune: 7 },
    ]);
    this.playNoise(0.08, 0.05, 0.18);
  }

  /**
   * Coin earned sound: short metallic ping.
   */
  coinEarned(): void {
    this.playSequence([
      { frequency: 1500, duration: 0.06, type: 'square', gain: 0.1 },
      { frequency: 2000, duration: 0.1, type: 'square', gain: 0.08, delay: 0.05 },
    ]);
  }

  /**
   * Streak milestone sound: drum-like celebration.
   */
  streakMilestone(): void {
    this.playSequence([
      { frequency: 200, duration: 0.08, type: 'sine', gain: 0.3 },
      { frequency: 400, duration: 0.08, type: 'triangle', gain: 0.2, delay: 0.1 },
      { frequency: 600, duration: 0.08, type: 'triangle', gain: 0.2, delay: 0.2 },
      { frequency: 800, duration: 0.08, type: 'triangle', gain: 0.2, delay: 0.3 },
      { frequency: 1000, duration: 0.15, type: 'sine', gain: 0.25, delay: 0.4 },
      { frequency: 1200, duration: 0.3, type: 'sine', gain: 0.2, delay: 0.45 },
    ]);
    this.playNoise(0.05, 0.08, 0.1);
    this.playNoise(0.05, 0.08, 0.3);
  }

  /**
   * Button click sound: subtle UI feedback.
   */
  buttonClick(): void {
    this.playNote({
      frequency: 800,
      duration: 0.04,
      type: 'sine',
      gain: 0.08,
    });
  }

  /**
   * Session start sound: gentle readiness indicator.
   */
  sessionStart(): void {
    this.playSequence([
      { frequency: 440, duration: 0.15, type: 'triangle', gain: 0.15 },
      { frequency: 554.37, duration: 0.15, type: 'triangle', gain: 0.15, delay: 0.15 },
      { frequency: 659.25, duration: 0.25, type: 'triangle', gain: 0.2, delay: 0.3 },
    ]);
  }

  /**
   * Session complete sound: victorious fanfare.
   */
  sessionComplete(): void {
    this.playSequence([
      { frequency: 523.25, duration: 0.12, type: 'square', gain: 0.15 },
      { frequency: 659.25, duration: 0.12, type: 'square', gain: 0.15, delay: 0.12 },
      { frequency: 783.99, duration: 0.12, type: 'square', gain: 0.15, delay: 0.24 },
      { frequency: 1046.5, duration: 0.12, type: 'square', gain: 0.2, delay: 0.36 },
      { frequency: 783.99, duration: 0.12, type: 'square', gain: 0.15, delay: 0.48 },
      { frequency: 1046.5, duration: 0.4, type: 'sine', gain: 0.25, delay: 0.6 },
      { frequency: 1046.5, duration: 0.4, type: 'triangle', gain: 0.15, delay: 0.6, detune: 3 },
    ]);
  }

  /**
   * Hint reveal sound: soft notification.
   */
  hintReveal(): void {
    this.playSequence([
      { frequency: 600, duration: 0.1, type: 'sine', gain: 0.1 },
      { frequency: 500, duration: 0.15, type: 'sine', gain: 0.08, delay: 0.08 },
    ]);
  }

  /**
   * Timer warning sound: gentle urgency.
   */
  timerWarning(): void {
    this.playSequence([
      { frequency: 440, duration: 0.08, type: 'square', gain: 0.1 },
      { frequency: 440, duration: 0.08, type: 'square', gain: 0.1, delay: 0.2 },
      { frequency: 440, duration: 0.08, type: 'square', gain: 0.1, delay: 0.4 },
    ]);
  }

  /**
   * Dispose of the AudioContext.
   */
  dispose(): void {
    if (this.ctx) {
      this.ctx.close().catch(() => {});
      this.ctx = null;
      this.masterGain = null;
    }
  }
}
