#!/bin/bash
# ============================================================
# 배포 후 자동 런타임 검증 스크립트
# cf:deploy 후 자동 실행하여 API 엔드포인트 + 페이지 상태 확인
# ============================================================

BASE_URL="https://mathverse.simssijjang.workers.dev"
ERRORS=0
TESTS=0

echo "🔍 배포 후 런타임 검증 시작..."
echo "   URL: $BASE_URL"
echo ""

# Helper: test an endpoint
check_url() {
  local url="$1"
  local expected_status="$2"
  local description="$3"
  TESTS=$((TESTS + 1))

  status=$(curl -s -o /tmp/mv_test_body.txt -w "%{http_code}" "$url" 2>/dev/null)

  if [ "$status" = "$expected_status" ]; then
    echo "  ✅ [$status] $description"
  else
    ERRORS=$((ERRORS + 1))
    body=$(cat /tmp/mv_test_body.txt 2>/dev/null | head -c 200)
    echo "  ❌ [$status] $description (expected $expected_status)"
    echo "     Body: $body"
  fi
}

# Helper: test POST endpoint
check_post() {
  local url="$1"
  local data="$2"
  local expected_status="$3"
  local description="$4"
  TESTS=$((TESTS + 1))

  status=$(curl -s -o /tmp/mv_test_body.txt -w "%{http_code}" \
    -X POST "$url" \
    -H "Content-Type: application/json" \
    -d "$data" 2>/dev/null)

  if [ "$status" = "$expected_status" ]; then
    echo "  ✅ [$status] $description"
  else
    ERRORS=$((ERRORS + 1))
    body=$(cat /tmp/mv_test_body.txt 2>/dev/null | head -c 300)
    echo "  ❌ [$status] $description (expected $expected_status)"
    echo "     Body: $body"
  fi
}

echo "── 공개 페이지 (200 기대) ──"
check_url "$BASE_URL/" "200" "랜딩 페이지"
check_url "$BASE_URL/login" "200" "로그인 페이지"
check_url "$BASE_URL/register" "200" "회원가입 페이지"

echo ""
echo "── 보호된 페이지 (307 리다이렉트 = 정상) ──"
check_url "$BASE_URL/home" "307" "학생 홈 (인증 필요→리다이렉트)"
check_url "$BASE_URL/learn" "307" "학습 페이지 (인증 필요→리다이렉트)"
check_url "$BASE_URL/teacher-dashboard" "307" "교사 대시보드 (인증 필요→리다이렉트)"

echo ""
echo "── API 엔드포인트 테스트 ──"
check_post "$BASE_URL/api/auth/login" '{"email":"test@test.com","password":"wrong"}' "401" "POST /api/auth/login (잘못된 인증→401)"
check_post "$BASE_URL/api/lesson" '{"grade":3,"sessionType":"daily_quest","count":5}' "200" "POST /api/lesson (일일퀘스트 생성)"
check_post "$BASE_URL/api/teacher/classroom" '{"name":"test","grade":5,"studentCount":1}' "401" "POST /api/teacher/classroom (인증 없이→401)"
check_url "$BASE_URL/api/teacher/classroom" "200" "GET /api/teacher/classroom (빈 목록)"

echo ""
echo "── 결과 ──"
if [ $ERRORS -eq 0 ]; then
  echo "✅ 전체 $TESTS개 테스트 통과!"
else
  echo "❌ $TESTS개 중 $ERRORS개 실패!"
  echo ""
  echo "실패한 테스트를 확인하고 수정하세요."
fi

rm -f /tmp/mv_test_body.txt
exit $ERRORS
