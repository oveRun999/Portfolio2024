export function menuBtn() {
  // スマホメニュー操作
  const menubtn = document.querySelector("[data-menuBtn]");
  const navBtn = document.querySelectorAll(".l-header__nav__list a");
  const navArea = document.querySelector(".l-header__nav");
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  const anchorLinksArr = Array.prototype.slice.call(anchorLinks);
  // const fixedBack = document.querySelector(".l-header .l-header__inner");
  navBtn.forEach((element) => {
    element.addEventListener("click", () => {
      navArea.classList.toggle("panelactive");
      menubtn.classList.toggle("active");
      // fixedBack.classList.toggle("back");
    });
  });
  menubtn.addEventListener("click", () => {
    menubtn.classList.toggle("active");
    navArea.classList.toggle("panelactive");
    if (menubtn.classList.contains("active")) {
      document.addEventListener("touchmove", disableScroll, { passive: false });
      document.body.classList.add("overflow-hidden");
      // fixedBack.classList.add("back");
    } else {
      document.removeEventListener("touchmove", disableScroll, {
        passive: false
      });
      document.body.classList.remove("overflow-hidden");
      // fixedBack.classList.remove("back");
    }
  });

  anchorLinksArr.forEach((link) => {
    link.addEventListener("click", (e) => {
      const headerHeight = document.querySelector(".l-header").clientHeight;
      e.preventDefault();
      if (menubtn.classList.contains("active")) {
        document.addEventListener("touchmove", disableScroll, {
          passive: false
        });
        document.body.classList.add("overflow-hidden");
        // fixedBack.classList.add("back");
      } else {
        document.removeEventListener("touchmove", disableScroll, {
          passive: true
        });
        document.body.classList.remove("overflow-hidden");
        // fixedBack.classList.remove("back");
      }
      const targetId = link.hash;
      const targetElement = document.querySelector(targetId);
      const targetOffsetTop =
        window.pageYOffset + targetElement.getBoundingClientRect().top;
      window.scrollTo({
        top: targetOffsetTop - headerHeight,
        behavior: "smooth"
      });
    });
  });
  // スクロールを禁止にする関数
  function disableScroll(event) {
    event.preventDefault();
  }
}
