(() => {
  const PORTAL_URL = "https://ebp2ichimizu-cell.github.io/Ichimizu-portal/";
  const KEY = "ichimizu-portal-view";
  const logo = document.querySelector(".logo-btn.portal");
  if (!logo) return;

  // ビジュアル版の中央「Portal Site」ロゴを通常表示への切替に使う。
  logo.setAttribute("href", PORTAL_URL);
  logo.setAttribute("aria-label", "通常表示に切り替える");

  // 既存のロゴ選択アニメーションはそのまま使い、
  // 遷移先だけ通常ポータルにする。
  logo.addEventListener("click", () => {
    localStorage.setItem(KEY, "portal");
  }, true);
})();