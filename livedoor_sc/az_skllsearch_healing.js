//検索絞り込み
function search_kansen(pid,divid,open,blocktype){
    var teams = document.getElementById(pid).querySelectorAll('select')[0].value,type = document.getElementById(pid).querySelectorAll('select')[1].value,reality = document.getElementById(pid).querySelectorAll('select')[2].value;
    var div = document.getElementById(divid).querySelectorAll(open);
    for(var i=0;i<div.length;i++){
        div[i].dataset.display = 'none';
        if((teams == '全て' || teams == div[i].dataset.jin) && (type == '全て' || type == div[i].dataset.heel) && (reality == '全て' || reality == div[i].dataset.kyouka)){
            div[i].dataset.display = blocktype;
        }
    }
}
