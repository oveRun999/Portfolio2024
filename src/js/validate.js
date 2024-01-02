export function validateForm() {
  /*
   * フォーム入力補助処理
   *
   */
  const checkRequired = [false, false, false, false, false];
  // 重複するバリデーション処理を一つの関数にまとめる
  function validateInput(inputElement, inputIndex) {
    const value = inputElement.value.trim();
    const isValid =
      value !== "" && (inputIndex !== 2 || value.match(/\S+@\S+\.\S+/)); // inputIndex === 2 (email) の場合、簡易的なメールアドレスのバリデーションを行う

    checkRequired[inputIndex] = isValid;
    inputElement.classList.toggle("errorStatus", !isValid);

    // ボタンの状態を更新
    updateSubmitButtonState();
  }

  // 'disabled' 属性を設定・解除する処理を一つの関数にまとめる
  function updateSubmitButtonState() {
    const isAllValid = !checkRequired.includes(false);
    const checkbtn = getElement("#checkBtn");
    if (checkbtn) {
      // checkbtn 存在確認
      checkbtn.disabled = !isAllValid;
    }
  }

  // 要素が存在しない場合のハンドリングを追加する関数
  function getElement(selector) {
    const element = document.querySelector(selector);
    if (!element) {
      console.warn(
        `The element "${selector}" was not found in your html. Some functionalities have been disabled.`
      );
      // 必要に応じて、ここにエラーメッセージを表示するなどの処理を追加できます。
      return null;
    }
    return element;
  }

  // テキストエリアのHTML要素を取得 (存在しない場合は null を返す)
  let form = getElement("form");
  if (form) {
    let inputname = getElement("input.fullname");
    let inputkananame = getElement("input.kananame");
    let inputemail = getElement("input.email");
    let inputquestion = getElement("textarea.question");
    let privacycheck = getElement(".privacycheck");

    // 各入力エレメントに 'change' イベントリスナーを登録
    [inputname, inputkananame, inputemail, inputquestion].forEach(
      (element, index) => {
        if (element === null) return;
        element.addEventListener("change", () => validateInput(element, index));
      }
    );

    // プライバシーチェックボックス用の特別なバリデーション処理
    if (privacycheck !== null) {
      privacycheck.addEventListener("change", function () {
        checkRequired[4] = this.checked;
        if (this.checked) {
          let formTypeVal = form.querySelector(
            'input[name="entry.390311721"]:checked'
          )
            ? form.querySelector('input[name="entry.390311721"]:checked').value
            : "未選択";
          let fullNameVal =
            form.querySelector('input[name="entry.1576228141"]').value ||
            "未入力";
          let kanaNameVal =
            form.querySelector('input[name="entry.2091007520"]').value ||
            "未入力";
          let emailVal =
            form.querySelector('input[name="entry.1142419056"]').value ||
            "未入力";
          let zipCodeVal =
            form.querySelector('input[name="entry.1661691680"]').value ||
            "未入力";
          let addressVal =
            form.querySelector('input[name="entry.551901256"]').value ||
            "未入力";
          let questionVal =
            form.querySelector('textarea[name="entry.1235755608"]').value ||
            "未入力";

          let modalContent = `
            <span>お問い合わせ種別：<strong>${formTypeVal}</strong></span>
            <span>お名前：<strong> ${fullNameVal}</strong></span>
            <span>お名前（フリガナ）：<strong> ${kanaNameVal}</strong></span>
            <span>メールアドレス：<strong> ${emailVal}</strong></span>
            <span>郵便番号：<strong> ${zipCodeVal}</strong></span>
            <span>ご住所：<strong> ${addressVal}</strong></span>
            <span>お問い合わせ内容：<strong> ${questionVal}</strong></span>
          `;

          let modalTarget = document.querySelector(
            'div[data-modal-target="formItem"]'
          );
          if (modalTarget) {
            modalTarget.innerHTML = modalContent;
          }
        }
        updateSubmitButtonState();
      });
    }
  }
}
