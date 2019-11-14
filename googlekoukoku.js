window.addEventListener('DOMContentLoaded', function() {
    var koukoku_width = "<ins class='adsbygoogle'style='display:block'data-ad-client='ca-pub-1820058722476319'data-ad-slot='8302844276'data-ad-format='auto'data-full-width-responsive='true'></ins>";
    var koukoku_textlink = "<ins class='adsbygoogle'style='display:block'data-ad-client='ca-pub-1820058722476319'data-ad-slot='6195555686'data-ad-format='link'data-full-width-responsive='true'></ins>";

    if(document.getElementsByClassName("entry-content")[0] != null){
        document.getElementsByClassName("entry-content")[0].insertAdjacentHTML('beforeend',koukoku_width);
        (adsbygoogle = window.adsbygoogle || []).push({});

        var h2deta = document.getElementsByClassName("entry-content")[0].getElementsByTagName("h2");
        if(h2deta[0] != null){
            h2deta[0].insertAdjacentHTML('beforebegin',koukoku_textlink);
        (adsbygoogle = window.adsbygoogle || []).push({});
        }
        if(h2deta[2] != null){
            h2deta[2].insertAdjacentHTML('afterend',koukoku_width);
        (adsbygoogle = window.adsbygoogle || []).push({});
        }
    }
});
