var title_list =[
    ['指揮官着任','旅立ちの日','始まりの日','偽りの平和','ジャベリン大地に立つ','風を呼ぶ少女','結成！アズールレーン','私たちKAN-SENです！','建造、建造、また建造','運命の出会い','はじめての建造','終わる日常','桜舞い散る坂道で','はじめての出撃','セイレーン、襲来'],

    ['鉄と血と','Zの鼓動','二人のジュノー','水中下の戦い','王家同盟','沈まぬ幸運艦','姉妹の絆','暁の光','爆熱ミリオンヘッドスマッシュ！','メイド隊参上！','ソードフィッシュ発進！','海上騎士団','鮮烈！ビーバーズ隊！','翔べ！艦載機！','限界突破','瞬間、心、重ねて','何も考えずに走れ！','スクランブル!!','モクモク作戦始動…！','強襲、レッドアクシズ','ダブルレキシントン','はじめてのがったい','聖なる光をあなたに','明石の秘策','ジャベリン突撃！','ニーミの秘密','伝説のKAN-SEN達','ソロモンの戦神','激突する空母対空母','夜を切り裂いて','孤独なる北欧の女王','激情のBIGSEVEN','メンタルキューブ','燃える海','青き翼','クロスウェーブ','ツインドライヴ','輝け☆バトルスター','レジェンドオブロイヤル','嵐の中で輝いて','帰還'],

    ['さよならフッドさん','もう何も怖くない','黒鉄の楽章、誓いの海','早すぎる『さよなら』！','怒れる女王','ビスマルクの一撃！','アリゾナの涙','強襲！高雄型４姉妹','謎のセイレーン','セイレーン鹵獲作戦','セイレーン攻略戦','全てを憎むもの','グレイゴースト','一航戦来襲！','ストライクフレーム','はじめての改造'],//3話
    ['最後のワルツ','ヨークタウン散る','ハムマン涙の全弾発射','シュペー閃光に散る','自由のために…！','ビスマルク、追撃！','運命の5分間','赤城と加賀','進化するセイレーン','ピュリファイアーを討て！','鉄血の翼','大海の支配者','自由と正義と','鬼神演舞'],//6話
    ['びそくぜんしんっ！','総集編','なぜなにアズレン','不知火の1日','ニーミ先生の艦船講座',"Queen's Orders",'ラフィーの航海日誌','おさらいする…です！','ジャベリンリポート','オフニャの1日','サマーバケーション'],//9話
    ['オブザーバー','不屈の神通','鬼神覚醒','認識覚醒','紅染の来訪者','衝撃！グレイゴースト敗れたり','後悔なんてあるわけない','洞くつの恐怖','ホーネット堕つ…！','約束','コードＧ','五航戦の栄光ここにあり！','逆襲の一航戦','重桜の誇り','飛龍ハ健在ナリ','王家のお茶会','駆逐艦の妹たちはいるか？','最後の反撃'],//11話
    ['長き旅の終わり','アズールレーン大勝利!!','アズールレーン','碧蓝航线','虹の彼方に','理想の果て','全て遠き理想郷','さらば愛しき艦船よ','永遠への回帰','明日の『指揮官』は君だ！','天の光は全て星','海はいつもそこにある','最後の勝利者','終わらない明日へ','世界のはじまりの日','脱出','いつか逢う貴女のために'],
];

var text_area01 = document.getElementById("name_area01");

function random(array, num) {
    var a = array;
    var t = [];
    var r = [];
    var l = a.length;
    var n = num < l ? num : l;
    while (n-- > 0) {
      var i = Math.random() * l | 0;
      r[n] = t[i] || a[i];
      --l;
      t[i] = t[l] || a[l];
    }
    return r;
  }

function shuffle(array){
    for (var i = array.length - 1; i >= 0; i--){

        // 0~iのランダムな数値を取得
        var rand = Math.floor( Math.random() * ( i + 1 ) );

        // 配列の数値を入れ替える
        [array[i], array[rand]] = [array[rand], array[i]]
      }
}
var title_hairetu = [];
var subtitle = '';
function kaitouset(){
    title_hairetu = [];
    title_hairetu.push('1 '+random(title_list[0],1));

    subtitle = "";
    subtitle = random(title_list[1],6);
    var i=0;
    title_hairetu.push('2 '+subtitle[i]);i++;

    title_hairetu.push('3 '+random(title_list[2],1));

    title_hairetu.push('4 '+subtitle[i]);i++;
    title_hairetu.push('5 '+subtitle[i]);i++;

    title_hairetu.push('6 '+random(title_list[3],1));

    title_hairetu.push('7 '+subtitle[i]);i++;
    title_hairetu.push('8 '+subtitle[i]);i++;

    title_hairetu.push('9 '+random(title_list[4],1));

    title_hairetu.push('10 '+subtitle[i]);

    title_hairetu.push('11 '+random(title_list[5],1));
    title_hairetu.push('12 '+random(title_list[6],1));
    resultset();
}

var rankdeta = "";
function resultset(){
    rankdeta = "";
    for(var d=0; d<title_hairetu.length; d++){
        rankdeta = rankdeta+title_hairetu[d]+'<br>';
    }
    document.getElementById("result_box").textContent = "";
    document.getElementById("result_box").insertAdjacentHTML('afterbegin','<strong>覇権取れるかな？</strong>'+'<br>'+rankdeta);
    document.getElementById("az_content").style.display="none";
    document.getElementById("result_area").style.display="block";
    twion();
}

var shareUrl = "https://az-royalojisann.hatenablog.com/entry/";
var targetId = "tweet1";
//var message = 'アズレンマッチング！'+'\n'+'\n'+'マッチした艦船'+'\n'+'１位：'+hantei[0][0]+'\n'+'２位：'+hantei[1][0]+'\n'+'３位：'+hantei[2][0]+'\n'+'４位：'+hantei[3][0]+'\n'+'５位：'+hantei[4][0]+'\n'+'アズールレーン'+'\n';
var hashtag = "アズールレーン";

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
   text: '#アズレンサブタイ予想'+'\n'+title_hairetu[0]+'\n'+title_hairetu[1]+'\n'+title_hairetu[2]+'\n'+title_hairetu[3]+'\n'+title_hairetu[4]+'\n'+title_hairetu[5]+'\n'+title_hairetu[6]+'\n'+title_hairetu[7]+'\n'+title_hairetu[8]+'\n'+title_hairetu[9]+'\n'+title_hairetu[10]+'\n'+title_hairetu[11]+'\n',
   size: "large",
   hashtags: "",
 });
});
}

function retry(){
    document.getElementById("az_content").style.display="block";
    document.getElementById("result_area").style.display="none";
}