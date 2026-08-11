//検索絞り込み
function search_kansen(search,setid,open,blo){
    const select=document.getElementById(search).querySelectorAll('select');
    const teams=select[0].value;
    const type=select[1].value;
    const reality=select[2].value;
    const div=document.getElementById(setid).querySelectorAll(open);
    for(const el of div){
        const d=el.dataset;
        el.dataset.display=(
            (teams=='全て'||teams==d.jin)&&
            (type=='全て'||type==d.heel)&&
            (reality=='全て'||reality==d.kyouka)
        )?blo:'none';
    }
}
