shareUrl = "https://az-royalojisann.hatenablog.com/entry/";
targetId = "tweet1";
message = 'アズールレーン';
hashtag = "アズールレーン";

// Twitterの初期化
var d = document;
var s = 'script';
var id = 'twitter-wjs';
var js, fjs = d.getElementsByTagName(s)[0];
if (!d.getElementById(id)) {
 js = d.createElement(s);
 js.id = id;
 js.src = 'https://platform.twitter.com/widgets.js';
 fjs.parentNode.insertBefore(js, fjs);
}
function twion(){
// twttrの初期化(platform.twitter.com/widgets.jsの完了)が未だなら待つ。
function callAfterTwitterInitialization(callback){
if(typeof twttr !== "undefined"){
 callback();
} else {
 setTimeout(function(){
     callAfterTwitterInitialization(callback);
 }, 100);
}
}
 
// twttrが使えるようになったらシェアボタンを作る。
callAfterTwitterInitialization(function(){
$('#' + targetId).empty();
twttr.widgets.createShareButton(
 shareUrl,
 document.getElementById(targetId),
 {
   count: 'none',
   text: message,
   size: "large",
   hashtags: hashtag,
 });
});
}

function retry(){
    document.getElementById("az_content").style.display="block";
    document.getElementById("result_area").style.display="none";
    toi_n = 0;
    kaitou = [];
    hantei = [];
    toiset();
}
