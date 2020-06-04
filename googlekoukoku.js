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
//                 if(setlist_hairetu[1] != 0){
//                     h2deta[0].insertAdjacentHTML('beforebegin',koukoku_width);
//                     (adsbygoogle = window.adsbygoogle || []).push({});
//                 }
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
var host=$(location).attr("host");function remapBreadcrumb(breadcrumb){new_breadcrumb_html="";for(var i=0;i<breadcrumb.length;i++){url_category=[];for(var j=0;j<=i;j++)url_category[j]=breadcrumb[j];var category_url="https://"+host+"/archive/category/"+url_category.join("-");new_breadcrumb_html+='<span class="breadcrumb-child""><a class="breadcrumb-child-link" href="'+category_url+'"><span>'+breadcrumb[i]+"</span></a></span>",i+1<breadcrumb.length&&(new_breadcrumb_html+='<span class="breadcrumb-gt"> &gt;</span>')}""!=new_breadcrumb_html&&$("#top-box > div.breadcrumb > div.breadcrumb-inner > span.breadcrumb-child:first").prop("outerHTML",new_breadcrumb_html)}function remapArticleCategory(categories){for(var index=0;void 0!==categories[index+1]&&categories[index+1].text.includes("-");)index+=1;breadcrumb_array=categories[index].text.split("-"),remapBreadcrumb(breadcrumb_array),category_num=categories.length;for(var i=0;i<category_num;i++)category_branch=categories[i].text.split("-"),categories[i].text=category_branch[category_branch.length-1]}function remapCategoryBreadcrumb(breadcrumb){new_breadcrumb_html="";for(var i=0;i<breadcrumb.length;i++)if(i+1<breadcrumb.length){url_category=[];for(var j=0;j<=i;j++)url_category[j]=breadcrumb[j];var category_url="https://"+host+"/archive/category/"+url_category.join("-");new_breadcrumb_html+='<span class="breadcrumb-child"><a class="breadcrumb-child-link" href="'+category_url+'">'+breadcrumb[i]+"</span></a></span>",new_breadcrumb_html+='<span class="breadcrumb-gt"> &gt;</span>'}else new_breadcrumb_html+='<span class="breadcrumb-child">'+breadcrumb[i]+"</span>";""!=new_breadcrumb_html&&$("#top-box > div.breadcrumb > div.breadcrumb-inner > span.breadcrumb-child:first").prop("outerHTML",new_breadcrumb_html)}function remapArchiveCategory(categories){for(var i=0;i<categories.length;i++)category_branch=categories[i].text.split("-"),categories[i].text=category_branch[category_branch.length-1]}$(document).ready(function(){var $entry_categories=$("#main-inner > article.entry > div.entry-inner > header > div.entry-categories > a");0<$entry_categories.length&&remapArticleCategory($entry_categories);var $archive_entries=$("#main-inner > div.archive-entries");0<$archive_entries.length&&($breadcrumb_child=$("#top-box > div.breadcrumb > div.breadcrumb-inner > span.breadcrumb-child:first"),breadcrumbs=$breadcrumb_child.find("span").text().split("-"),remapCategoryBreadcrumb(breadcrumbs),$archive_entries.each(function(){remapArchiveCategory($(this).find("section > div.categories > a"))}))});
function processArchive(a,b,c){for(flag=!0;a<$all_li.length;){if($li=$($all_li[a]),$a=$li.find("a"),category_name=$a.text(),breadcrumb=category_name.split("-"),level=breadcrumb.length,1==level&&a>0&&$li.attr("class","on-border"),level<b)return b>2&&$($all_li[a-1]).css("padding-bottom","0px"),a-1;level==b?($a.text(breadcrumb[level-1]),null!=c?$li.appendTo(c):($opend_span=$('<span class="hatena-breadcrumb-plus-toggle-button" id="opend-'+a+'">▼</span>'),$closed_span=$('<span class="hatena-breadcrumb-plus-toggle-button" id="closed-'+a+'">▶</span>'),$closed_span.css("visibility","hidden"),$opend_span.css("display","none"),$li.prepend($closed_span),$li.prepend($opend_span))):(id=a-1,ulid="hatena-breadcrumb-plus-toggle-"+id,$new_ul=$('<ul id="'+ulid+'" type="square"></ul>'),level>2?$new_ul.attr("class","hatena-breadcrumb-plus-child2"):($new_ul.attr("class","hatena-breadcrumb-plus-child1"),$new_ul.css("display","inline")),$($all_li[id]).append($new_ul),$("#closed-"+id).css({visibility:"visible",display:"block"}),$("#opend-"+id).on("click",{_id:id,_toggle:"close"},toggleCategory),$("#closed-"+id).on("click",{_id:id,_toggle:"open"},toggleCategory),a=processArchive(a,level,$new_ul)),a+=1}return a}function toggleCategory(a){"close"==a.data._toggle?($("#hatena-breadcrumb-plus-toggle-"+a.data._id).toggle(),$("#closed-"+a.data._id).toggle(),$("#opend-"+a.data._id).toggle()):"open"==a.data._toggle&&($("#hatena-breadcrumb-plus-toggle-"+a.data._id).toggle(),$("#opend-"+a.data._id).toggle(),$("#closed-"+a.data._id).toggle())}var $hatena_module_category=$("div.hatena-module-category"),parent_level=1;$all_li=$hatena_module_category.find("li"),$(document).ready(function(){"undefined"!=typeof $hatena_module_category&&processArchive(0,1,null)});

