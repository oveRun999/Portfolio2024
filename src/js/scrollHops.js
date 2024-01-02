export function scrollHops() {
  /**
   * スクロールした際に特定の要素にクラスを付与するイベント
   */
  // 今回の交差を監視する要素
  const clmns = document.querySelectorAll(".js-hops");
  const options = {
    root: null, // 今回はビューポートをルート要素とする
    rootMargin: "-10% 0px", // ビューポートの中心を判定基準にする
    threshold: 0 // 閾値は0
  };
  const observer = new IntersectionObserver(doWhenIntersect, options);
  // それぞれのboxを監視する
  clmns.forEach((clm) => {
    observer.observe(clm);
  });

  /**
   * 交差したときに呼び出す関数
   * @param entries
   */
  function doWhenIntersect(entries) {
    // 交差検知をしたもののなかで、isIntersectingがtrueのDOMを関数に渡す
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activateIndex(entry.target);
      }
    });
  }

  /**
   * 交差検知した要素にクラスを付与する
   * @param element
   */
  function activateIndex(element) {
    element.classList.add("is-active");
  }
}
