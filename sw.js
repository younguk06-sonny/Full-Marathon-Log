const CACHE = "fm-log-v18";
const ASSETS = ["./", "index.html", "manifest.webmanifest", "vendor/d3.min.js",
  "data/races.json", "data/laps.json", "data/korea_sido.json", "data/other_pbs.json", "data/elevation.json", "data/short_races.json", "data/short_laps.json", "data/short_elevation.json",
  "fonts/Pretendard-Regular.subset.woff2", "fonts/Pretendard-SemiBold.subset.woff2", "fonts/Pretendard-Bold.subset.woff2",
  "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png", "icons/favicon-64.png"];
self.addEventListener("install", (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS))); self.skipWaiting(); });
self.addEventListener("activate", (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k))))); self.clients.claim(); });
// 네트워크 우선, 실패하면 캐시 (새 기록을 올리면 바로 반영)
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(fetch(e.request).then((r) => { const c = r.clone(); caches.open(CACHE).then((x) => x.put(e.request, c)); return r; }).catch(() => caches.match(e.request)));
});
