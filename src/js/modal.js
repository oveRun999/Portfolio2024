// export function modal() {
//   const modal = document.querySelector(".js-modal"),
//     open = document.querySelector(".js-modal-open"),
//     close = document.querySelector(".js-modal-close"),
//     body = document.body;

//   //「開くボタン」をクリックしてモーダルを開く
//   if (open) {
//     open.addEventListener("click", modalOpen);
//     close.addEventListener("click", modalClose);
//     //「閉じるボタン」をクリックしてモーダルを閉じる
//     function modalClose() {
//       modal.classList.remove("is-active");
//       body.classList.remove("modalout");
//     }

//     //「モーダルの外側」をクリックしてモーダルを閉じる
//     function modalOut(e) {
//       if (e.target == modal) {
//         modal.classList.remove("is-active");
//         body.classList.remove("modalout");
//       }
//     }
//     addEventListener("click", modalOut);
//     function modalOpen() {
//       modal.classList.add("is-active");
//       body.classList.add("modalout");
//     }
//   }
// }

export function modal() {
  const modals = document.querySelectorAll(".js-modal"),
    opens = document.querySelectorAll(".js-modal-open"),
    closes = document.querySelectorAll(".js-modal-close"),
    body = document.body;

  // モーダルを開く
  opens.forEach((open) => {
    open.addEventListener("click", function () {
      const modalId = open.getAttribute("data-modal-target");
      const modal = document.querySelector(modalId);
      modal.classList.add("is-active");
      body.classList.add("modalout");
    });
  });

  // モーダルを閉じる
  closes.forEach((close) => {
    close.addEventListener("click", function () {
      const modal = close.closest(".js-modal");
      modal.classList.remove("is-active");
      body.classList.remove("modalout");
    });
  });

  // モーダルの外側をクリックして閉じる
  modals.forEach((modal) => {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.classList.remove("is-active");
        body.classList.remove("modalout");
      }
    });
  });

  // Escキーを押してモーダルを閉じる
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      modals.forEach((modal) => {
        modal.classList.remove("is-active");
        body.classList.remove("modalout");
      });
    }
  });
}
