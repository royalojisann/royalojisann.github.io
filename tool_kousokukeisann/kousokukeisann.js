function herupuopen(Nbutton,Nlist,atai) {
    var click = document.getElementsByClassName(Nbutton); //コンテンツに対応するボタン名
    var content = document.getElementsByClassName(Nlist); //コンテンツの数
    if(content[atai].style.height=="auto"){
        for(var i=0; i<content.length; i++){
            content[i].style.height="0";
            content[i].style.opacity="0"; //コンテンツを全て閉じる
        }
        click[atai].style.opacity="1";
    }else{
        for(var i=0; i<content.length; i++){
            content[i].style.height="0";
            content[i].style.opacity="0"; //コンテンツを全て閉じる
            click[i].style.opacity="1";
        }
        content[atai].style.height="auto";
        content[atai].style.opacity="1";
        click[atai].style.opacity="0.5"; //指定のコンテンツを開く
    }
}

    //コンテンツ開閉
function contentopen(Nbutton,Nlist,atai) {
  var open_hantei = document.getElementById("soubi_pic_box");
    var click = document.getElementsByClassName('weponname'); //コンテンツに対応するボタン名
    var content = document.getElementsByClassName(Nlist); //コンテンツの数
    if(click[Nbutton].style.opacity!="1"){
        open_hantei.style.height="0";
        open_hantei.style.opacity="0"; //コンテンツを全て閉じる
        click[Nbutton].style.opacity="1";
    }else{
      open_hantei.style.height="0";
      open_hantei.style.opacity="0"; //コンテンツを全て閉じる
            for(var i=0; i<click.length; i++){
            click[i].style.opacity="1";
            }
      open_hantei.textContent="";
      setpng(open_hantei,atai);
      open_hantei.style.height="auto";
      open_hantei.style.opacity="1";
      click[Nbutton].style.opacity="0.5"; //指定のコンテンツを開く
    }
}
var testgo = [];
function setpng(area,type){
   for(var i=0; i<soubi_list_deta.length; i++){
        if(i==0){
          var create_span = document.createElement('span');
          create_span.classList.add ("pngdeta");
            var Create_src = document.createElement('img');
          	Create_src.src = soubi_list_deta[0][1];
			Create_src.id=0;
          	create_span.appendChild(Create_src);
            area.appendChild(create_span);

        	var clickElement = document.getElementById(i);
        	clickElement.addEventListener("click", function(event) {
			document.getElementById("mtspeed").value=soubi_list_deta[0][2].攻速*1;
			document.getElementById("weponname").textContent=soubi_list_deta[0][2].name;
            mtvalue();
        	},false);
        }

     	if(soubi_list_deta[i][0]==type){
          var create_span = document.createElement('span');
          create_span.classList.add ("pngdeta");
            var Create_src = document.createElement('img');
            Create_src.src = soubi_list_deta[i][1];
          	Create_src.id=i;
          	create_span.appendChild(Create_src);
            area.appendChild(create_span);

        	var clickElement = document.getElementById(i);
        	clickElement.addEventListener("click", function(event) {
			document.getElementById("mtspeed").value=soubi_list_deta[event.target.id*1][2].攻速*1;
			document.getElementById("weponname").textContent=soubi_list_deta[event.target.id*1][2].name;
            mtvalue();
        	},false);
        }
    }
}

function updown(atai) {
var mtreload = document.getElementById("mtreload").value;
var data = mtreload*1+atai;
if(data>1000){
    data=1000;
}else if (data<0){
    data=0;
}
document.getElementById("mtreload").value=data;
sou('mtreload','souB')
}

function sou(dataA,dataB) {
    var souten=document.getElementById(dataA).value;
    document.getElementById(dataB).value=souten;
    mtvalue();
}

function mtvalue(){
var mtreload = document.getElementById("mtreload").value;
var mtspeed = document.getElementById("mtspeed").value;
var sabdata = document.getElementById("sumwepon").value;
var sklldata = document.getElementById("skllsum").value;
var slipdata = document.getElementById("slipsum").value;

var sumsouten = Math.floor((mtreload*1+sabdata*1)*(1+(sklldata/100)));

var mtbase = 200/(100+((mtreload*1+sabdata*1)*(1+(sklldata/100))));
var mtps = Math.pow(mtbase,0.5);
var ps = Math.ceil(((mtps*mtspeed)*(1-slipdata*0.01))*1000)/1000;
document.getElementById("sumsouten").textContent=sumsouten;
document.getElementById("mtresult").textContent=ps;
}

function push(buttonsum,atai) {
if(atai==0){
    document.getElementById(buttonsum).value=0;
}else if(atai==1){
    document.getElementById(buttonsum).value="";
    document.getElementById("fleename").value="";
}else{
var button=document.getElementById(buttonsum).value;
button=button*1+atai;
document.getElementById(buttonsum).value=button;
}
mtvalue();
}

function sevebutton(sevebox) {
    var obj=document.getElementById(sevebox).value;
    var flee = document.getElementById("fleename").value;
    var name = document.getElementById("weponname").textContent;
    var speed = document.getElementById("mtspeed").value;
    var sumsouten = document.getElementById("sumsouten").textContent;
    var mtresult = document.getElementById("mtresult").textContent;
    obj = obj+"\n"+flee+"\n"+name+"\n攻速："+speed+"秒"+"\n合計装填："+sumsouten+"\n計算結果："+mtresult+"秒\n";
    document.getElementById(sevebox).value=obj;
}

function oneopen(buttonid,listid){
    var button = document.getElementById(buttonid);
    var list = document.getElementById(listid);
    if(list.style.height=="auto"){
        button.style.opacity="1";
        list.style.height="0";
        list.style.opacity="0";
    }else{
        button.style.opacity="0.5";
        list.style.height="auto";
        list.style.opacity="1";
    }
}