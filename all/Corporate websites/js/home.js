    let name=document.querySelectorAll(".head-nav li");
    let pull=document.querySelectorAll(".head-pull");
    console.log(pull);
    console.log(name);
    name.forEach(function (ele,index) {
        ele.onmouseover=function () {
            for(let i=0;i<name.length;i++){
                pull[i].style.display="none";
            }
            pull[index].style.display="block";
        }
        ele.onmouseout=function () {
            pull[index].style.display="none";
        }
        pull[index].onmouseover=function(){
            pull[index].style.display="block";
        }
        pull[index].onmouseout=function(){
            pull[index].style.display="none";
        }
    })