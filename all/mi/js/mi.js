{
// function xxk(parent){
    let wenzi = document.querySelectorAll(".home-right-wenzi");
    let xuan = document.querySelectorAll(".home-bottom-right");
    console.log(wenzi, xuan);
    wenzi.forEach(function (val, index) {
        val.onmouseover = function () {
            for (let i = 0; i < wenzi.length; i++) {
                wenzi[i].classList.remove("active");
                xuan[i].style.display = "none";
            }
            val.classList.add("active");
            xuan[index].style.display = "block";
        }
    });

// let floors=document.querySelectorAll(".floors");
// for(let i=0;i<floors.length;i++){
// 	xxk(floors[i]);
// }
// xxk();

// 方法二
    /*for(var i=0;i<wenzi.length;i++){
        wenzi[i].index=i;
        wenzi[i].onmouseover=function(){
            for(var i=0;i<wenzi.length;i++){
                wenzi[i].classList.remove("active");
                biao[i].classList.remove("active");
            }
            this.classList.add("active");
            biao[this,index].classList.add("active");
        }
    }*/
}
{
// 选项卡
    function fn(dar) {
        let wenzis = dar.querySelectorAll(".capacity-right-wenzi");
        let xuans = dar.querySelectorAll(".capacity-bottom-list-box");
        // console.log(wenzis,xuans);
        wenzis.forEach(function (val, index) {
            val.onmouseover = function () {
                for (let i = 0; i < wenzis.length; i++) {
                    wenzis[i].classList.remove("active");
                    xuans[i].classList.remove("active");
                }
                val.classList.add("active");
                xuans[index].classList.add("active");
            }
        });
    }

    let box = document.querySelectorAll("#capacity");
    for (let i = 0; i < box.length; i++) {
        fn(box[i]);
    };
}

{
//轮播图
    let dians = document.querySelectorAll(".banner-circle-box li");
    let imgs = document.querySelectorAll(".banner-img-box li");
    let l = dians.length;
    // console.log(dians,imgs);
    dians.forEach(function (val, index) {
        val.onclick = function () {
            for (let i = 0; i < l; i++) {
                dians[i].classList.remove("active");
                imgs[i].classList.remove("active");
            }
            val.classList.add("active");
            imgs[index].classList.add("active");
            now = index;
        }
    });
    let now = 0;
    let st = window.setInterval(fn, 2000);

    function fn(dir="r") {
        if (dir === "r") {
            now++;
            if (now === l) {
                now = 0;
            }
        } else if (dir === "l") {
            now--;
            if (now === -1) {
                now = l - 1;
            }
        }
        for (let i = 0; i < dians.length; i++) {
            dians[i].classList.remove("active");
            imgs[i].classList.remove("active");
        }
        dians[now].classList.add("active");
        imgs[now].classList.add("active");
    }

//clearInterval()	清除某个时间函数
    let bannerobj = document.querySelector("#banner");
    bannerobj.onmouseover = function () {
        clearInterval(st);
    };
    bannerobj.onmouseout = function () {
        st = window.setInterval(fn, 2000);
    };
//箭头点击事件轮播
    let upward = document.querySelector(".arrows-left");
    let next = document.querySelector(".arrows-right");
    console.log(next, upward);
    upward.onclick = function () {
        fn("l");
    };
    next.onclick = function () {
        fn("r");
        //fn();
    };
}

{
	//明星选项卡效果
	let prev=document.querySelector(".star-zuoanniu");
	let next=document.querySelector(".star-youanniu");
	let nrs=document.querySelector(".star-bottom");
	let arrows=document.querySelector(".star-anniu");
	// console.log(prev,next,nrs);
	prev.onclick=prevFn;
        function prevFn(){
		prev.classList.remove("star-active");
		next.classList.add("star-active");
		nrs.style.marginLeft="-1240px";
		i=1;
	};
    next.onclick=nextFn;
        function nextFn(){
        next.classList.remove("star-active");
        prev.classList.add("star-active");
        nrs.style.marginLeft="0";
        i=0;
    };
    let i=1;
    let t=setInterval(fn,2000);
        function fn(){
            i++;
            if(i%2===0){
                nextFn();
            }
            else{
                prevFn();
            }
        };
    arrows.onmouseover=function(){
        clearInterval(t);
    };
    arrows.onmouseout=function () {
        t=setInterval(fn,2000);
    };

}

//底部内容
{
    let boxs=document.querySelectorAll(".content-list");
    for(let i=0;i<boxs.length;i++){
        nrxg(boxs[i]);
    }
    function nrxg(parent){
        let neiObj=parent.querySelector(".content-list-nei");
        let circles=parent.querySelectorAll(".content-circle li");
        let left=parent.querySelector(".content-zuojiantou");
        let right=parent.querySelector(".content-youjiantou");
            // console.log(neiObj,circles,left,right);
        circles.forEach(function(val,index){
            val.onclick=function(){
                for(let i=0;i<circles.length;i++){
                    circles[i].classList.remove("active");
                }
                    val.classList.add("active");
                    neiObj.style.marginLeft=-296*index+"px";
                    num=index;
            }
        });

        let num=0;
        right.onclick=function(){
            moveFn("r");
        };
        left.onclick=function(){
            moveFn("l");
        };
            function moveFn(dir="r"){
                if(dir==="r"){
                    num++;
                    if(num===circles.length){
                        num=circles.length-1;
                    }
                }else if(dir==="l"){
                    num--;
                    if(num===-1){
                        num=0;
                    }
                }
                for(let i=0;i<circles.length;i++){
                    circles[i].classList.remove("active");
                }
                    circles[num].classList.add("active");
                    neiObj.style.marginLeft=-296*num+"px";
        };

    }
}

//为你推荐效果
{
  let left=document.querySelector(".recommend-zuoanniu");
  let right=document.querySelector(".recommend-youanniu");
  let nrbox=document.querySelector(".recommend-bottom");
  let arrows=document.querySelector(".recommend-anniu");
  // console.log(left,right,nrbox,arrows);
    let num=0;
    let dir="r";
  right.onclick=rightFn;
      function rightFn(){
          right.classList.remove(".recommend-active");
          left.classList.add(".recommend-active");
          if(dir==="r"){
              num++;
              if(num==1){
                  nrbox.style.marginLeft=-1226+"px";
              }else if(num==2){
                  nrbox.style.marginLeft=-1226*num+"px";
              }
          }
          i=1;
      }
    let dirr="l";
  left.onclick=leftFn;
      function leftFn(){
          left.classList.remove(".recommend-active");
          right.classList.add(".recommend-active");
          if(dirr==="l"){
              num--;
              if(num==0){
                  nrbox.style.marginLeft=-1226+"px";
              }else if(num==-1){
                  nrbox.style.marginLeft="0";
              }
          }
          i=0;
      }
}

//banner左侧隐藏栏
{
    let banner=document.querySelector("#banner");
    let title=document.querySelectorAll(".banner-list-li");
    let listObj=document.querySelectorAll(".banner-left-yc");
    // console.log(banner);console.log(title);console.log(listObj);

    title.forEach(function(val,index){
        val.onmouseover=function(){
            for(let i=0;i<title.length;i++){
                listObj[i].style.display="none";
            }
            listObj[index].style.display="block";
        };
        val.onmouseout=function(e){
            e.stopPropagation();
        };
        listObj[index].onmouseover=function(){
            listObj[index].style.display="block";
        };
        listObj[index].onmouseout=function(){
            listObj[index].style.display="none";
        };
        banner.onmouseleave=function(){
            for(let i=0;i<listObj.length;i++){
                listObj[index].style.display="none";
            }
        }
    });
}







/*let now=0;
window.setInterval(function(){
    now++;
    if(now===l){
        now=0;
    }
    for(let i=0;i<l;i++){
        dians[i].classList.remove("active");
        imgs[i].classList.remove("active");
    }
    dians[now].classList.add("active");
    imgs[now].classList.add("active");
},2000);*/