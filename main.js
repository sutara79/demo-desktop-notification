/**
 * デスクトップ通知を表示する
 */
function displayNotification() {
  // ブラウザの設定で通知の設定を消去しない限り、再び許可を求めることはできない。
  Notification.requestPermission();
  var n = new Notification('Title', {
    icon: 'icon.png',
    tag: 'n1',
    body: 'An example of desktop notification using <b>Notification API</b>'
  });
  n.onclick = function(ev) {
    $('#result').text('Clicked!');
    ev.target.close();
  };
}

$(function() {
  $('#notify').on('click', function() {
    displayNotification();
  });
});