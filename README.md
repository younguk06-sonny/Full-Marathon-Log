# 대회기록 상세 분석 자료

러너별 풀마라톤(김선진 7회, 박지현 6회, 황인우 7회, 손영욱 9회, 김지훈 4회)과 10K·하프 기록 대시보드. 공식 기록은 기록증 기준, 구간·심박·다이내믹스는 Garmin 기준.

- `index.html` — 화면과 분석 로직
- `data/races.json` — 대회별 기록·지표·장소. 새 대회는 배열 끝에 추가
- `data/laps.json` — 대회별 1km 랩
- `data/korea_sido.json` — 시·도 경계 (vuski/admdongkor 기반, 단순화)
- `vendor/d3.min.js` — d3 v7.9.0 (ISC)
- `fonts/` — Pretendard (SIL OFL 1.1, LICENSE 포함)
- `manifest.webmanifest`, `sw.js`, `icons/` — 홈 화면 설치·오프라인
