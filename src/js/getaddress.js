export function getAddress() {
  // 郵便番号を取得
  var zipcode = document.getElementById("zipcode").value;

  // 郵便番号が7桁の場合に処理を実行
  if (zipcode.length === 7) {
    // 郵便番号APIのエンドポイントにリクエストを送信
    var url = "https://api.zipaddress.net/?zipcode=" + zipcode;

    fetch(url, {
      mode: "cors" // CORSの問題を回避
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.code === 200) {
          // 取得した住所情報を住所フィールドにセット
          document.getElementById("address").value = data.data.fullAddress;
        } else {
          // エラー処理: 郵便番号に該当する住所がない場合等
          document.getElementById("address").value =
            "住所が見つかりませんでした。";
        }
      })
      .catch(function (error) {
        // ネットワークエラーやその他のエラー処理
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  } else {
    document.getElementById("address").value =
      "7桁の郵便番号を上記に入力してください";
  }
}
