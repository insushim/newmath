'use client';

import { useEffect, useState } from 'react';
import { toast } from 'sonner';

const GITHUB_REPO = 'insushim/newmath';
const CHECK_INTERVAL = 1000 * 60 * 60; // 1시간마다 체크
const CURRENT_VERSION = process.env.NEXT_PUBLIC_APP_VERSION ?? '1.0.0';

export function UpdateChecker() {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Android WebView/TWA 환경에서만 활성화
    const isAndroid = /android/i.test(navigator.userAgent);
    const isTWA = document.referrer.includes('android-app://') ||
      (window.matchMedia?.('(display-mode: standalone)').matches && isAndroid);

    if (!isAndroid && !isTWA) return;

    async function checkUpdate() {
      try {
        const res = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/releases/latest`, {
          headers: { Accept: 'application/vnd.github.v3+json' },
        });
        if (!res.ok) return;

        const release = await res.json();
        const latestVersion = release.tag_name?.replace(/^v/, '') ?? '';

        if (latestVersion && latestVersion !== CURRENT_VERSION && !dismissed) {
          const apkAsset = release.assets?.find(
            (a: { name: string }) => a.name.endsWith('.apk')
          );
          const downloadUrl = apkAsset?.browser_download_url ?? release.html_url;

          toast.info('새 버전이 있어요!', {
            description: `v${latestVersion} 업데이트가 가능합니다.`,
            duration: 15000,
            action: {
              label: '업데이트',
              onClick: () => window.open(downloadUrl, '_blank'),
            },
            onDismiss: () => setDismissed(true),
          });
        }
      } catch {
        // 네트워크 에러 무시
      }
    }

    checkUpdate();
    const interval = setInterval(checkUpdate, CHECK_INTERVAL);
    return () => clearInterval(interval);
  }, [dismissed]);

  return null;
}
