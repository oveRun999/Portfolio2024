export function profileBtn() {
  // スマホメニュー操作
  const profilebtn = document.querySelector("[data-profile]");
  const menubtn = document.querySelector("[data-menuBtn]");
  const navArea = document.querySelector("[data-navArea]");

  profilebtn.addEventListener("click", () => {
    menubtn.classList.remove("active");
    navArea.classList.remove("panelactive");
  });
}
