// //----------------------
console.log("popup.js");


window.onload = function(){
  chrome.tabs.getSelected(null, function(tab) {
    console.log(tab);
    var textTitle = tab.title;
    var textUrl = tab.url;
    var div = document.getElementById('textView');
    var url = document.getElementById('textUrl');
    var shortCode = document.getElementById('shortCode');
    div.textContent = textTitle;
    url.textContent = textUrl;
    // ショートコードに値を埋め込む
    shortCode.textContent = '[oblink_comment url="'+textUrl+'" title="'+textTitle+'"][/oblink_comment]';
  });
}

// コピー用関数
function copy() {
  let range = document.createRange();
  var copyTarget = document.getElementById("shortCode");// コピー対象の要素を取得
  range.selectNodeContents(copyTarget);
  let selection = document.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand("copy");
}
document.getElementById("shortCode").addEventListener("click", copy);