
var page = 0;
var root = 0;
var toi = 0;
var kaitou = 0;
var timerId = NaN;
var timersec = 0;
var timermin = 0;
var lebel = 0;
var moodtype = 0;
var seikaisu = 0;
var seikairitu = 0;
var timedeta = 0;
var tweetdeta1 = 0;
var tweetdeta2 = 0;
function startnow(){
  document.getElementsByClassName("text_deta")[0].onclick = rootdeta;
  document.getElementById("sentakuA").onclick = detakaitou;
  document.getElementById("sentakuB").onclick = detakaitou;
  document.getElementById("sentakuC").onclick = detakaitou;
      // 画像プリロード
      for (i = 0; i < quizdeta.length; i++){
        var img = document.createElement('img');
        if(quizdeta[i][5] != 0){
          img.src = quizdeta[i][5];
        }
        if(quizdeta[i][6] != 0){
          img.src = quizdeta[i][6];
        }
        if(quizdeta[i][7] != 0){
          img.src = quizdeta[i][7];
        }
    }
  titledeta();
  document.getElementById("startpic").style.display="none";
  document.getElementById("haikei").style.opacity=1;
  document.getElementById("senntaku").style.display="block";
}

// window.onload = function (){
//   document.getElementsByClassName("text_deta")[0].onclick = rootdeta;
//   document.getElementById("sentakuA").onclick = detakaitou;
//   document.getElementById("sentakuB").onclick = detakaitou;
//   document.getElementById("sentakuC").onclick = detakaitou;
//       // 画像プリロード
//       for (i = 0; i < quizdeta.length; i++){
//         var img = document.createElement('img');
//         if(quizdeta[i][5] != 0){
//           img.src = quizdeta[i][5];
//         }
//         if(quizdeta[i][6] != 0){
//           img.src = quizdeta[i][6];
//         }
//         if(quizdeta[i][7] != 0){
//           img.src = quizdeta[i][7];
//         }
//     }
// }

function rootdeta(){
    switch(root){
        case 0:
            document.getElementById("QEdeta").style.opacity=1;
            document.getElementById("texton").innerText = 'アズレンクイズ検定！'+"\n"+"挑戦する難易度を選ぼう！"+"\n"+"EXは制限時間5分";
            document.getElementById("sentakuA").style.color = document.getElementById("sentakuB").style.color = document.getElementById("sentakuC").style.color = "#444";
          	document.getElementById("clickhantei").style.display="none";
            document.getElementById("set").style.display="block";
            document.getElementById("sentakuA").textContent="ノーマル(全10問)";
            document.getElementById("sentakuB").textContent="ハード(全30問)";
            document.getElementById("sentakuC").textContent="ＥＸ(全50問ＲＴＡ)";
            root++;
     break;
     case 1:
            document.getElementById("Qdeta").style.display="block";
            document.getElementById("Qdeta").textContent = '第'+(toi+1)+'問';
        	  document.getElementById("sentakuA").style.color = document.getElementById("sentakuB").style.color = document.getElementById("sentakuC").style.color = "#444";
            document.getElementById("clickhantei").style.display="none";
            document.getElementById("set").style.display="block";
            document.getElementById("texton").textContent=quizdeta[toi][0];
            document.getElementById("sentakuA").textContent=quizdeta[toi][1];
            document.getElementById("sentakuB").textContent=quizdeta[toi][2];
            document.getElementById("sentakuC").textContent=quizdeta[toi][3];
            kaitou = quizdeta[toi][4];
        	  document.getElementById("QEdeta").src = (quizdeta[toi][5] == 0) ? 'http://azroyal.bakufu.org/azgamedeta/azkenteihaikei.png':quizdeta[toi][5];
        	if(toi == 0 && lebel == "ＥＸ(全50問ＲＴＡ)"){
                document.getElementById("timertext").style.display="block";
                clearInterval(timerId);
                timerId = setInterval(function(){
                    timersec++;
                    if(timersec == 60){
                      timersec = 0;
                      timermin++;
                    }
                    //document.getElementById("timer_msec").textContent = ("00" + ctd).slice(-2);
                    document.getElementById("timer_sec").textContent = ("00" + timersec).slice(-2);
                    document.getElementById("timer_min").textContent = timermin+":";
                    if(timermin == 5){
                        clearInterval(timerId);
                        document.getElementById("clickhantei").style.display="block";
                        document.getElementById("texton").innerText = "時間切れです！"+'\n'+'残念ですが記録になりません';
                        root=3;
                    }
                },1000);
            }
     break;
     case 2:
        page++;
        switch(page){
            case 1:
            document.getElementById("QEdeta").src = 'http://azroyal.bakufu.org/azgamedeta/azkenteihaikei.png';
            document.getElementById("set").style.display="none";
            document.getElementById("texton").innerText = '終了～～！'+"\n"+"結果を見てみましょう。";
            break;
            case 2:
            if(lebel=="ノーマル(全10問)"){
              lebel = "ノーマル";
              timedeta = "タイム無し";
    		}else if(lebel=="ハード(全30問)"){
              lebel = "ハード";
              timedeta = "タイム無し";
    		}else if(lebel=="ＥＸ(全50問ＲＴＡ)"){
              lebel = "ＥＸ";
              timedeta = timermin+"分"+timersec+"秒";
    		}
            seikairitu = Math.floor(seikaisu/(moodtype+1)*100);
            tweetdeta1 = lebel+":"+timedeta+"\n"+(moodtype+1)+"問中"+seikaisu+"問正解"+"\n"+"正解率"+seikairitu+"%です！";
            document.getElementById("texton").innerText = tweetdeta1;
            break;
            case 3:
                switch(lebel){
                    case "ノーマル":
                        document.getElementById("texton").innerText = '慣れてきたら問題数の多いハードモードに挑戦してみよう！'
                        break;
                    case "ハード":
                        if(seikairitu >= 90){
                            document.getElementById("texton").innerText ='称号『アズレン博士』を獲得した！';
                        }else if(seikairitu >= 80){
                            document.getElementById("texton").innerText ='称号『アズレン好き』を獲得した！';
                        }else if(seikairitu >= 60){
                            document.getElementById("texton").innerText ='称号『エンジョイ勢』を獲得した！';
                        }else if(seikairitu >= 40){
                            document.getElementById("texton").innerText ='称号『駆け出し指揮官』を獲得した！';
                        }else if(seikairitu >= 20){
                            document.getElementById("texton").innerText ='称号『新米指揮官』を獲得した！';
                        }else if(seikairitu != 0){
                            document.getElementById("texton").innerText ='称号『半端者』を獲得した！';
                        }else if(seikairitu == 0){
                            document.getElementById("texton").innerText ='称号『あまのじゃく(？)』を獲得した！';
                    }
                        break;
                    case "ＥＸ":
                        if(seikairitu == 100){
                          document.getElementById("texton").innerText ='称号『これが君の望んでいる海戦』を獲得した！';
                        }else if(seikairitu >= 90){
                          document.getElementById("texton").innerText ='称号『アズレン博士』を獲得した！';
                        }else if(seikairitu >= 80){
                          document.getElementById("texton").innerText ='称号『アズレン好き』を獲得した！';
                        }else if(seikairitu >= 60){
                          document.getElementById("texton").innerText ='称号『エンジョイ勢』を獲得した！';
                        }else if(seikairitu >= 40){
                          document.getElementById("texton").innerText ='称号『駆け出し指揮官』を獲得した！';
                        }else if(seikairitu >= 20){
                          document.getElementById("texton").innerText ='称号『新米指揮官』を獲得した！';
                        }else if(seikairitu != 0){
                          document.getElementById("texton").innerText ='称号『半端者』を獲得した！';
                        }else if(seikairitu == 0){
                          document.getElementById("texton").innerText ='称号『あまのじゃく(？)』を獲得した！';
                        }
                        break;
                }
            tweetdeta2 = document.getElementById("texton").innerText;
            break;
            case 4:
            document.getElementById("texton").innerText = '次のページで結果をツイートできます。';
            root=10;
            break;
        }
     break;
     case 3:
		titledeta();
     break;
     case 10:
        document.getElementById("gameover").style.display="block";
        twion();
     break;
    }
}

function detakaitou(e){
    document.getElementById("clickhantei").style.display="block";
  if(kaitou==0){
    moodtype = 0;
    lebel = 0;
    lebel = (lebel == 0) ? e.target.textContent:lebel;
    if(lebel=="ノーマル(全10問)"){
        moodtype = 10-1;
        shuffle();
    }else if(lebel=="ハード(全30問)"){
      moodtype = 30-1;
        shuffle();
    }else if(lebel=="ＥＸ(全50問ＲＴＡ)"){
        moodtype = 50-1;
        shuffle();
    }
    document.getElementById("texton").textContent = "クイズＳＴＡＲＴ！";
  }else{
    document.getElementById("QEdeta").src = (quizdeta[toi][6] == 0) ? 'http://azroyal.bakufu.org/azgamedeta/azkenteihaikei.png':quizdeta[toi][6];
    if(e.target.textContent == kaitou){
    	seikaisu++;
    	document.getElementById("texton").innerText = "正解！"+"\n"+"このくらい当然ですよね？";
  	}else{
    	document.getElementById("texton").innerText = "ハズレ…！"+"\n"+"答えは"+kaitou+"です";
  	}
    if(document.getElementById("sentakuA").textContent == kaitou){
    		document.getElementById("sentakuA").style.color = "red";
  	}else if(document.getElementById("sentakuB").textContent == kaitou){
    		document.getElementById("sentakuB").style.color = "red";
  	}else{
   			document.getElementById("sentakuC").style.color = "red";
  	}
    if(toi++ == moodtype){
      clearInterval(timerId);
      root++;
    }
  }
}

function shuffle() {
    for (var i = quizdeta.length - 1; i > 0; i = 0 | i - 1) {
        var r = Math.floor(Math.random() * (i + 1));
    var tmp = quizdeta[i];
    quizdeta[i] = quizdeta[r];
    quizdeta[r] = tmp;
    }
}

function titledeta(){
    page = 0,root = 0,toi = 0;
    kaitou = 0;
    seikaisu = 0;
    lebel = 0;
	  timerId = NaN;
  	timersec = 0;
	  timermin = 0;
    document.getElementById("QEdeta").src = 'http://azroyal.bakufu.org/azgamedeta/azkenteihaikei.png';
    document.getElementById("texton").textContent="ＳＴＡＲＴ！";
    document.getElementById("gameover").style.display="none";
  	document.getElementById("senntaku").style.display="none";
  	document.getElementById("Qdeta").style.display="none";
  	document.getElementById("timertext").style.display="none";
  	document.getElementById("set").style.display="none";
    document.getElementById("QEdeta").style.opacity=0;
    document.getElementById("haikei").style.opacity=0;
    document.getElementById("startpic").style.display="block";
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
   text: "#アズレンクイズ検定 結果…"+"\n"+tweetdeta1+"\n"+tweetdeta2+"\n"+"\n"+'#アズールレーン',
   size: "large",
   hashtags: "",
 });
});
}
