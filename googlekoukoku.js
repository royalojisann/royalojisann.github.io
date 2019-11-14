window.addEventListener('DOMContentLoaded', function() {
    if(document.getElementById("koukoku_setlist") != null){
    var koukoku_width = "<ins class='adsbygoogle'style='display:block'data-ad-client='ca-pub-1820058722476319'data-ad-slot='8302844276'data-ad-format='auto'data-full-width-responsive='true'></ins>";
    var koukoku_textlink = "<ins class='adsbygoogle'style='display:block'data-ad-client='ca-pub-1820058722476319'data-ad-slot='6195555686'data-ad-format='link'data-full-width-responsive='true'></ins>";
    
    var setlist_text = document.getElementById("koukoku_setlist");
    var setlist_hairetu = setlist_text.value.split('/');
    var h2deta = document.getElementsByClassName("entry-content")[0].getElementsByTagName("h2");
    for(var i = 0; i<setlist_hairetu.length; i++){
        switch(i){
            case 0:
                //下の広告
                if(setlist_hairetu[0] != 0){
                    document.getElementsByClassName("entry-content")[0].insertAdjacentHTML('beforeend',koukoku_width);
                    (adsbygoogle = window.adsbygoogle || []).push({});
                }
            break;
            case 1:
                //上のリンク
                if(setlist_hairetu[1] != 0){
                    h2deta[0].insertAdjacentHTML('beforebegin',koukoku_textlink);
                    (adsbygoogle = window.adsbygoogle || []).push({});
                }
            break;
            case 2:
                //中
                if(setlist_hairetu[2] != 0){
                    h2deta[setlist_hairetu[2]].insertAdjacentHTML('beforebegin',koukoku_width);
                    (adsbygoogle = window.adsbygoogle || []).push({});
                }
            break;
            default:
                //その他
                if(setlist_hairetu[i] != 0){
                    h2deta[setlist_hairetu[i]].insertAdjacentHTML('beforebegin',koukoku_width);
                    (adsbygoogle = window.adsbygoogle || []).push({});
                }
            break;
        }
    }
    }
});
