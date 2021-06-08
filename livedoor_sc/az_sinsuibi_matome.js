var kansen_nouryoku = [];
var kensaku_list = [];
var BirthdayList = {noname:[],January:[],February:[],March:[],April:[],May:[],June:[],July:[],August:[],September:[],October:[],November:[],December:[],prkansenn:[],colabo:[]};
window.addEventListener('DOMContentLoaded', function() {
    for(var i=0;i<kan_profile.length; i++){
        var inputstatus_deta = {
            陣営:kan_profile[i][0],
            艦種:kan_profile[i][1],
            正規名:kan_profile[i][2],
            レア:kan_profile[i][3],
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

        kansen_nouryoku[i].修正レア = kansen_nouryoku[i].レア.indexOf('→')!= -1 ? kansen_nouryoku[i].レア.substring(0,kansen_nouryoku[i].レア.indexOf('→')) : kansen_nouryoku[i].レア;

        kansen_nouryoku[i].ソート = i;
        kansen_nouryoku[i].正式名称 = kan_profile[i][12] === '改有り' ? kan_profile[i][2].substring(0,kan_profile[i][2].indexOf('改')):kan_profile[i][2];

        if(kansen_nouryoku[i].除外[0] === '除外'){
            ;
        }else if(kansen_nouryoku[i].除外[0] === '未完成'){
            BirthdayList.prkansenn.push(kansen_nouryoku[i]);
        }else if(kansen_nouryoku[i].除外[0] === 'コラボ'){
            BirthdayList.colabo.push(kansen_nouryoku[i]);
        }else{
            if(kansen_nouryoku[i].進水日.indexOf('月') != -1){
                kansen_nouryoku[i].進水日まとめ = kan_profile[i][7].match(/(\d+)月(\d+)日/);//[0]=月日、[1]=月、[2]=日
                BirthdayList[Object.keys(BirthdayList)[kansen_nouryoku[i].進水日まとめ[1]]].push(kansen_nouryoku[i]);
            }else{
                BirthdayList.prkansenn.push(kansen_nouryoku[i]);
            }
        }
    }

    //1~12月
    for(var d=1; d<Object.keys(BirthdayList).length;d++){
        type = d==Object.keys(BirthdayList).length-1 ? '' : '進水日：';

        if(d<13){
            BirthdayList[Object.keys(BirthdayList)[d]].sort(function(a,b){
                return (a.進水日まとめ[2]*1 < b.進水日まとめ[2]*1 ? -1 : 1);
            });
        }

        var utuwa = "";
        for(var san = 0; san<BirthdayList[Object.keys(BirthdayList)[d]].length; san++){
            if(san == 0){
                utuwa = '<table class="table_sinsui_box" border="1" cellpadding="0"><tbody>';
            }

            url = ("https://pasokau.com/"+BirthdayList[Object.keys(BirthdayList)[d]][san].接頭辞+'_'+BirthdayList[Object.keys(BirthdayList)[d]][san].リンク);

            utuwa += (
                '<tr>'+
                    '<td>'+
                        '<a href="'+url+'" target="_blank">'+
                        '<img class="lozad" data-echo="'+BirthdayList[Object.keys(BirthdayList)[d]][san]['live'][2]+'"></a></td>'+
                    '<td>'+
                        BirthdayList[Object.keys(BirthdayList)[d]][san].陣営+BirthdayList[Object.keys(BirthdayList)[d]][san].修正レア+BirthdayList[Object.keys(BirthdayList)[d]][san].艦種+'<br>'+
                        '「'+BirthdayList[Object.keys(BirthdayList)[d]][san].正式名称+']<br>'+
                        type+BirthdayList[Object.keys(BirthdayList)[d]][san].進水日+
                    '</td>'+
                '</tr>'
                )

            if(san == BirthdayList[Object.keys(BirthdayList)[d]].length-1){
                utuwa += '</tbody></table>';
                document.getElementById(Object.keys(BirthdayList)[d]).insertAdjacentHTML("beforeend",utuwa);
            }
            kensaku_list.push(BirthdayList[Object.keys(BirthdayList)[d]][san]);
        }
    }
});

function button_select_sort(){
    var sort_type = {kunilist:[],typelist:[],rarelist:[]},list = ['kuni','type','rare'],kan = ['陣営','艦種','修正レア'];

    for(var i=0;i<Object.keys(sort_type).length;i++){
        for (var d = 0; d < document.getElementsByName(list[i]).length; d++) {
            if (document.getElementsByName(list[i])[d].checked) {
                sort_type[Object.keys(sort_type)[i]].push(document.getElementsByName(list[i])[d].value)
            }
        }
    }

    for(var i = 0; i<kensaku_list.length; i++){
        countup = 0;
        for(var up = 0; up<Object.keys(sort_type).length;up++){
            if(sort_type[Object.keys(sort_type)[up]].length == 0){
                countup++;
            }else{
                for(var j=0; j<sort_type[Object.keys(sort_type)[up]].length; j++){
                    if(sort_type[Object.keys(sort_type)[up]][j]==kensaku_list[i][kan[up]]){
                        countup++;
                        break;
                    }
                }
            }
        }
        document.getElementById('table_sinsui_area').getElementsByTagName('tr')[i].style.display = countup==3 ? "table-row" : "none";
    }
}

var　box = {macthng:[],purasu:[],minus:[]};
var tweetset = {text1:'',text2:'',text3:''};
function macthbirthday(){
    var tosi = [0,31,29,31,30,31,30,31,31,30,31,30,31];
    var moon = document.getElementById("moon").value*1,sun = document.getElementById("sun").value*1;
    box = {macthng:[],purasu:[],minus:[]};
    for(var p=0; p<BirthdayList[Object.keys(BirthdayList)[moon]].length;p++){
        if(BirthdayList[Object.keys(BirthdayList)[moon]][p].進水日まとめ[2] == sun){
            box.macthng.push(BirthdayList[Object.keys(BirthdayList)[moon]][p]);
        }
    }

    var purasu = {月:moon,日:sun};
    var minus = {月:moon,日:sun};
    for(var i=1;i<5;i++){
        purasu.月 = purasu.日+i > tosi[purasu.月] ? (purasu.月+1 == 13) ? 1 : purasu.月+1 : purasu.月;
        purasu.日 = purasu.日+i > tosi[purasu.月] ? 1 : purasu.日+1;

        minus.月 = minus.日-i <= 0 ? (minus.月-1 == 0) ? 12 : minus.月-1 : minus.月;
        minus.日 = minus.日-i <= 0 ? tosi[minus.月] : minus.日-1;

        for(var p=0; p<kensaku_list.length;p++){
            if(kensaku_list[p].進水日まとめ){
                if(kensaku_list[p].進水日まとめ[1] == purasu.月 && kensaku_list[p].進水日まとめ[2] == purasu.日){
                    box.purasu.push(kensaku_list[p]);
                }
                if(kensaku_list[p].進水日まとめ[1] == minus.月 && kensaku_list[p].進水日まとめ[2] == minus.日){
                    box.minus.push(kensaku_list[p]);
                }
            }
        }
    }

    dammset = {damm0:[],damm1:[],damm2:[]};
    texta = "",textb = "",textc = "";
    if(box.macthng.length){
        aaa="",twi="",icount=0;
        for(var i=0;i<box.macthng.length;i++){
            dammset.damm0.push(box.macthng[i].正式名称);
            url = ("https://pasokau.com/"+box.macthng[i].接頭辞+'_'+box.macthng[i].リンク);
            aaa += ('☆<a href="'+url+'" target="_blank" >'+dammset.damm0[i]+'</a><br>');
            if(icount!=2){
                twi += ('☆'+dammset.damm0[i]+'\n');
                icount++;
            }
        }
        texta = '進水日「'+moon+'月'+sun+'日」の艦船は<br>'+aaa+'…です！';
        tweetset.text1 = '進水日「'+moon+'月'+sun+'日」の艦船を探しました！\n'+twi;
    }else{
        texta = '進水日「'+moon+'月'+sun+'日」の艦船は見つかりませんでした…';
        tweetset.text1 = '進水日「'+moon+'月'+sun+'日」の艦船は見つかりませんでした…\n';
    }

    if(box.minus.length){
        twi="",icount=0;
        box.minus.reverse();
        for(var i=0;i<box.minus.length;i++){
            dammset.damm1.push(box.minus[i].正式名称+'('+box.minus[i].進水日まとめ[0]+')');
            url = ("https://pasokau.com/"+box.minus[i].接頭辞+'_'+box.minus[i].リンク);
            textb += ('☆<a href="'+url+'" target="_blank" >'+dammset.damm1[i]+'</a><br>');
            if(box.minus.length-1 == i || box.minus.length-2 == i){
                twi += '☆'+dammset.damm1[i]+'\n';
                icount++;
            }
        }
        tweetset.text2 = twi;
    }

    if(box.purasu.length){
        twi="",icount=0;
        for(var i=0;i<box.purasu.length;i++){
            dammset.damm2.push(box.purasu[i].正式名称+'('+box.purasu[i].進水日まとめ[0]+')');
            url = ("https://pasokau.com/"+box.purasu[i].接頭辞+'_'+box.purasu[i].リンク);
            textc +=  ('☆<a href="'+url+'" target="_blank" >'+dammset.damm2[i]+'</a><br>');
            if(icount!=2){
                twi += '☆'+dammset.damm2[i]+'\n';
                icount++;
            }
        }
        tweetset.text3 = twi;
    }

    document.getElementById("match_birthday").textContent ="";
    document.getElementById("match_birthday").insertAdjacentHTML('beforeend',
    texta+'<br><br>'+'近いところだと、<br>'+textb+textc+'…などがいます<br><br>結果をツイートできます。<br>ボタンが現れない時は⇒<span onclick="twion();"  style="background: #f3a93d;border-radius: 3px;color: white;padding: 2px 8px;font-size: 16px;cursor: pointer;display: inline-block;vertical-align: top;">タッチ</span>'
    )
    twion();
}

// Twitterの初期化
var js, fjs = document.getElementsByTagName('script')[0];
if (!document.getElementById('twitter-wjs')) {
 js = document.createElement('script');
 js.id = 'twitter-wjs';
 js.src = 'https://platform.twitter.com/widgets.js';
 fjs.parentNode.insertBefore(js, fjs);
}
function twion(){
    // twttrが使えるようになったらシェアボタンを作る。
    document.getElementById("tweet1").innerHTML = '';
    twttr.widgets.createShareButton(
        location.href,
        document.getElementById("tweet1"),{
            count: 'none',
            text: tweetset.text1+'\n近いところだと…\n'+tweetset.text2+tweetset.text3+'…などがいます\n\n'+'#アズールレーン'+'\n'+'#アズレン進水日'+'\n',
            size: "large",
            hashtags: "",
        });
}
