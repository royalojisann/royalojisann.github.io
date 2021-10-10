
var zepan = [];
var kansen_nouryoku = [];
var kensaku_kansen = {除外:[],新規:[],META:[],計画艦:[],コラボ:[],通常:[]};
window.addEventListener('DOMContentLoaded', function() {
  document.getElementsByClassName("kan_list_div")[0].textContent = "";
  for(var i=0;i<kan_profile.length; i++){
      var inputstatus_deta = {
          陣営:kan_list[i][0],
          艦種:kan_list[i][1],
          正規名:kan_list[i][2],
          レア:kan_profile[i][3],
          装甲:kan_list[i][66],
          耐久:"",
          装填:"",
          回避:"",
          命中:"",
          火力:"",
          雷装:"",
          航空:"",
          対空:"",
          対潜:"",
          速力:"",
          幸運:"",
          消費:kan_list[i][77]*1,
          主砲装備:kan_list[i][67],
          主砲補正:kan_list[i][70],
          主砲砲座:kan_list[i][73],
          副砲装備:kan_list[i][68],
          副砲補正:kan_list[i][71],
          副砲砲座:kan_list[i][74],
          対空装備:kan_list[i][69],
          対空補正:kan_list[i][72],
          対空砲座:kan_list[i][75],
          硬直:kan_list[i][76],
          設備:'設備',
          画像:kan_profile[i][10],
          スキル:kan_profile[i][11],
          記事:kan_profile[i][12],
          声優:kan_profile[i][8],
          絵師:kan_profile[i][9],
          入手:kan_profile[i][4],
          実装日:kan_profile[i][5],
          改造日:kan_profile[i][6],
          進水日:kan_profile[i][7],
          起工日:kan_profile[i][13],
          竣工日:kan_profile[i][14],
          艦級:kan_profile[i][15],
          除外:kan_profile[i][16],
          live:kan_profile[i][17],
          評価:kan_profile[i][18],
          建造:kan_profile[i][19],
          突破:kan_profile[i][20],
          表記:kan_profile[i][21],
          接頭辞:kan_profile[i][22],
          リンク:kan_profile[i][23],
          番号:kan_profile[i][24],
      };
      kansen_nouryoku.push(inputstatus_deta);        

      if(kansen_nouryoku[i].記事.indexOf('改有り')!= -1){
          //改造後のレアを表示
          rarecolor = kansen_nouryoku[i].レア.substring(kansen_nouryoku[i].レア.indexOf('→')+1);
      }else if(kansen_nouryoku[i].レア.indexOf('→')!= -1){
          //初期レアを表示
          rarecolor = kansen_nouryoku[i].レア.substring(0,kansen_nouryoku[i].レア.indexOf('→'));
      }else{
          rarecolor =kansen_nouryoku[i].レア;
      }
      kansen_nouryoku[i].修正レア = rarecolor;
      kansen_nouryoku[i].ソート = i;
      kansen_nouryoku[i].正式名称 = kan_profile[i][12] === '改有り' ? kan_list[i][2].substring(0,kan_list[i][2].indexOf('改')):kan_list[i][2];
      //hokan += '<tr id="'+kansen_nouryoku[i].ソート+'" class="chara_list"><td class="'+kansen_nouryoku[i].修正レア+'" onclick="status_check(this);">'+kansen_nouryoku[i].名前+'</td><td>'+kansen_nouryoku[i].陣営+'</td><td>'+kansen_nouryoku[i].艦種+'</td><td></td></tr>';
      

      if(kansen_nouryoku[i].除外[1] === '除外'){
          kensaku_kansen.除外.push(kansen_nouryoku[i]);
      }else if(kansen_nouryoku[i].除外[1] === '新規'){
          kensaku_kansen.新規.push(kansen_nouryoku[i]);
      }else if(kansen_nouryoku[i].除外[1] === 'META'){
          kensaku_kansen['META'].push(kansen_nouryoku[i]);
      }else if(kansen_nouryoku[i].除外[1] === '計画艦'){
          kensaku_kansen.計画艦.push(kansen_nouryoku[i]);
      }else if(kansen_nouryoku[i].除外[1] === 'コラボ'){
          kensaku_kansen.コラボ.push(kansen_nouryoku[i]);
      }else{
          kensaku_kansen.通常.push(kansen_nouryoku[i]);
      }
    
      if(kansen_nouryoku[i].除外[3] === '' || kansen_nouryoku[i].除外[3] === '除外'){
        ;
      }else{      
        var str = kansen_nouryoku[i].除外[3].replace( '年', '/' );
            str =　str.replace( '月', '/' );
            str =　str.replace( '日', '' );
        kansen_nouryoku[i].ソート用進水日 = str;
        zepan.push(kansen_nouryoku[i]);
      }
  }

zepan = [...zepan].sort((a, b) => new Date(a['ソート用進水日']) - new Date(b['ソート用進水日']));
  
  kansen_kakunouko = "";
  for(var t = 0; t<zepan.length; t++){
            urldeta = "https://pasokau.com/"+zepan[t].接頭辞+'_'+zepan[t].リンク;
            adeta = '<img class="kanpic '+zepan[t]['修正レア']+'" src="'+zepan[t]['live'][2]+'" alt="'+zepan[t]['正式名称']+'"/><a href="'+urldeta+'" target="_blank" ><img src="https://livedoor.blogimg.jp/kojinn00home/imgs/c/5/c5d69403.png"/>'+zepan[t]['正式名称']+'</a>';
            kansen_kakunouko+=('<div style="display: inline-block;" class="sort_class">'+adeta+'</div>');
  }
  document.getElementsByClassName("kan_list_div")[0].insertAdjacentHTML("beforeend",kansen_kakunouko);
});


function kanlist_setbutton(){
    kensaku_kunilist = [];
    kensaku_typelist = [];
    kensaku_rarelist = [];
    
    for (var i = 0; i < document.querySelectorAll("#kennsaku_check input[name='kensaku_kuni']").length; i++) {
        if (document.querySelectorAll("#kennsaku_check input[name='kensaku_kuni']")[i].checked) {
            kensaku_kunilist.push(document.querySelectorAll("#kennsaku_check input[name='kensaku_kuni']")[i].value);
        }
    }
    for (var i = 0; i < document.querySelectorAll("#kennsaku_check input[name='kensaku_type']").length; i++) {
        if (document.querySelectorAll("#kennsaku_check input[name='kensaku_type']")[i].checked) {
            kensaku_typelist.push(document.querySelectorAll("#kennsaku_check input[name='kensaku_type']")[i].value);
        }
      }
    for (var i = 0; i < document.querySelectorAll("#kennsaku_check input[name='kensaku_rare']").length; i++) {
        if (document.querySelectorAll("#kennsaku_check input[name='kensaku_rare']")[i].checked) {
            kensaku_rarelist.push(document.querySelectorAll("#kennsaku_check input[name='kensaku_rare']")[i].value);
        }
    }

    var rarehanntei = function(i){    
        if(Object.keys(kensaku_rarelist).length == 0){
            //rare指定なし
            document.getElementsByClassName("sort_class")[i].style.display = "inline-block";
        }else{
            for(var y=0; y<kensaku_rarelist.length; y++){
                if(kensaku_rarelist[y] == zepan[i].修正レア){
                    //rare指定
                    document.getElementsByClassName("sort_class")[i].style.display = "inline-block";
                }
            }
        }
    }

    var typehantei = function(i){
        if(Object.keys(kensaku_typelist).length == 0){
            //艦種指定なし
            rarehanntei(i);
        }else{
            //艦種指定
            for(var r=0; r<kensaku_typelist.length; r++){
                if(kensaku_typelist[r]==zepan[i].艦種){
                    rarehanntei(i);
                }
            }
        }
    }

    for(var i = 0; i<zepan.length; i++){
        document.getElementsByClassName("sort_class")[i].style.display = "none";
        //陣営
        if(Object.keys(kensaku_kunilist).length == 0){
            //陣営指定なし
            typehantei(i);
        }else{
            //陣営指定
            for(var j=0; j<kensaku_kunilist.length; j++){
                if(kensaku_kunilist[j]==zepan[i].陣営){
                    typehantei(i);
                }
            }
        }
    }
}
