
//无缝轮播之横向轮播
//!!！注意 函数名一定不能重复  获取焦点失去焦点也是一样不能重复
{
    let boxObj = document.querySelector(".sale-box");   //最外面的盒子
    let smbox = document.querySelector(".sale");        //长盒子
    let prev = document.querySelector(".sale-left-arrow");      //左键
    let next = document.querySelector(".sale-right-arrow");     //右键

    let num = 4;
    let t=setInterval(moveFn,2000);
    function moveFn(){
        if (dir == "r") {
            num++;
        }
        if (dir == "l") {
            num--;
        }
        smbox.style.transition = "all 1s";
        smbox.style.marginLeft=-295*num+"px"
    }

    smbox.addEventListener("transitionend",function(){
        // console.log(num)
        flag = true;
        if(num==12){
            smbox.style.transition="none";
            smbox.style.marginLeft=-1180+"px";
            // setTimeout(function(){
            //     smbox.style.transition="all 1s"
            // },0)

            num=4
        }
        if(num==0){
            smbox.style.transition="none";
            smbox.style.marginLeft=-2360+"px";
            // setTimeout(function(){
            //     smbox.style.transition="all 1s"
            // },0)
            num=8;
        }
    })

        boxObj.onmouseover = function () {
               clearInterval(t);
        }
        window.addEventListener("blur",function(){
               clearInterval(t);
        })
        boxObj.onmouseout = function () {
            t = setInterval(moveFn, 2000);
        }
        window.addEventListener("focus",function(){
            t = setInterval(moveFn, 2000);
        })

        let flag = true;
        let dir="r";
        next.onclick = function () {
            dir = "r";
            if (flag) {
                flag = false;
                moveFn();
            }
        }
        prev.onclick = function () {
            dir = "l";
            if (flag) {
                flag = false;
                moveFn();
            }
        }


}




//公告
{
	let bigbox=document.querySelector(".gonger");
	let prev=document.querySelector(".gonggao-left");
	let next=document.querySelector(".gonggao-right");
	let arrows=document.querySelector(".gonggao-jiantou");
	console.log(bigbox,prev,next,arrows);

	let dir="r";
	next.onclick=function(){
		if(dir==="r"){
			bigbox.style.marginTop=-36+"px";
		}
	}
	prev.onclick=function(){
		// if(.){
			bigbox.style.marginTop="0";
		// }
	}
}

//轮播
{
    let banner=document.querySelectorAll(".banner-img li");
    let circles=document.querySelectorAll(".lunbo .lunbodian");
    let box=document.querySelector(".banner-middle");
    console.log(banner,circles,box);

    let now=0;
    let z=10;
    let flag=true;
    //自动轮播
    let t=setInterval(lunboFn,2000);
    function lunboFn(dir="r"){
        circles[now].classList.remove("active");
        if(dir==="r"){
            banner[now].classList.add("leftout");
            now++;
            if(now===banner.length){
                now=0;
            }
            banner[now].classList.add("rightin");
        }else if(dir==="l"){
            banner[now].classList.add("rightout");
            now--;
            if(now===-1){
                now=banner.length-1;
            }
            banner[now].classList.add("leftin")
        }

        banner[now].style.zIndex=z++;
        circles[now].classList.add("active");
    }
    banner.forEach(function(val){
        val.addEventListener("animationend",function(){
            val.className="";
            flag=true;
        })
    });
    //鼠标移入移出+获取失去焦点
    box.onmouseover=window.onblur=function(){
        clearInterval(t);
    };
    box.onmouseout=window.onfocus=function(){
        t=setInterval(lunboFn,2000);
    };

    //点击事件
    circles.forEach(function(val,index){
        val.onclick=function(){
            if(flag){
                flag=false;
                if(index > now){
                    banner[now].classList.add("leftout");
                    banner[index].classList.add("rightin");
                }else if(index < now){
                    banner[now].classList.add("rightout");
                    banner[index].classList.add("leftin");
                }
                banner[index].style.zIndex=z++;
                circles[index].classList.add("active");
                circles[now].classList.remove("active");
                now=index;
            }

        }
    })
    //左右箭头
    let prev=document.querySelector(".left-arrow");
    let next=document.querySelector(".right-arrow");

    let dir="r";
    next.onclick=function(){
        if(flag){
            flag=false;
            lunboFn(dir="r");
        }
    }
    prev.onclick=function(){
        if(flag){
            flag=false;
            lunboFn(dir="l");
        }
    }

}