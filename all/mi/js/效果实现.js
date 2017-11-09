    //选项卡
    {
        let boxs=document.querySelectorAll("#capacity");    //获取全部的大盒子
            for(let i=0;i<boxs.length;i++){         //遍历每一个元素
                fn(box[i]);                   //函数调用
            }

        let wenzis = document.querySelectorAll(".capacity-right-wenzi");    //获取全部右侧文字
        let xuans = document.querySelectorAll(".capacity-bottom-list-box"); //获取全部内容
            wenzis.forEach(function(val,index){     //方法:forEach遍历
                val.onmouseover=function(){         //事件:鼠标移入事件
                    for(let i=0;i<wenzis.length;i++){
                        wenzis[i].classList.remove("active");   //让第i个文字删除active这个类名
                    }
                }
            })
    }