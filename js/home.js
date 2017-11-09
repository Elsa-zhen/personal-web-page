    $('#personal').fullpage({
        verticalCentered:true,
        navigation:true,
        slidesNavigation:true,
        slidesNavPosition:"bottom",
        controlArrowColor:"#84d8d1",
    });

    //自动（屏幕）轮播
    // setInterval(function(){
    //     $.fn.fullpage.moveSectionDown();
    // },9000);

    //技能条
    {
        function circle(canvas, max, color) {
            let cobj = canvas.getContext("2d");
            cobj.lineWidth = 20;
            cobj.strokeStyle = color;
            cobj.fillStyle = "#fff";
            cobj.lineCap = "round";
            cobj.textAlign = 'center';
            cobj.textBaseline = "middle";
            cobj.font = "20px 微软雅黑";

            let num = 0;

            function pro() {
                cobj.save();
                cobj.translate(100, 100);
                num++;
                let angle = num * Math.PI / 50;
                cobj.clearRect(-100, -100, 200, 200);//清除之前的文字,显示最新数字
                cobj.save();
                cobj.beginPath();   //绘制圆弧
                cobj.rotate(-Math.PI / 2);
                cobj.arc(0, 0, 70, 0, angle);
                cobj.shadowColor = color;
                cobj.shadowOffsetY = 0;
                cobj.shadowOffsetX = 0;
                cobj.stroke();
                cobj.restore();//恢复
                cobj.fillText(num + "%", 0, 0);
                cobj.restore();//恢复
                if (num < max) {
                    requestAnimationFrame(pro);//调用自己
                }
            }

            pro();
        }

        let box=document.querySelector(".content");
        let can1=document.querySelector("#canvas1");
        let can2=document.querySelector("#canvas2");
        let can3=document.querySelector("#canvas3");
        let flag=true;

        box.onclick=function(){
            circle(can1,89,"lightpink");
            circle(can2,89,"skyblue");
            circle(can3,75,"gold");
        };
    }


    //横向轮播
    {
        let boxObj=document.querySelector(".fifth");   //最外面的盒子
        let long=document.querySelector(".container5");     //长盒子
        let prev=document.querySelector(".prev");
        let next=document.querySelector(".next");

        let num=4;
        let t=setInterval(moveFn,2000);
        function moveFn() {
            if (dir == 'r') {
                num++;
            } else if (dir == 'l') {
                num--;
            }
            long.style.transition="all 1s";
            long.style.marginLeft= -316 * num + 'px';

        }

        long.addEventListener('transitionend', function () {
            flag = true;
            if (num == 12) {
                long.style.transition = 'none';
                long.style.marginLeft = -1264 + 'px';
                num = 4;
            }
            if (num == 0) {
                long.style.transition = 'none';
                long.style.marginLeft = -2528 + 'px';
                num = 8;
            }
        })

        boxObj.onmouseover = window.onblur = function () {
            clearInterval(t);
        }
        boxObj.onmouseout = window.onfocus = function () {
            t = setInterval(moveFn, 2000);
        }
        let flag = true;
        let dir = 'r';
        next.onclick = function () {
            dir = 'r';
            if (flag) {
                flag = false;
                moveFn();
            }
        }
        prev.onclick = function () {
            dir = 'l';
            if (flag) {
                flag = false;
                moveFn();
            }
        }

    }