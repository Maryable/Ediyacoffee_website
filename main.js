var count=0;
var next=0;
window.onload=function() {
    btn_left=document.querySelector("#left__btn");
    btn_left.addEventListener("click", function(){
        if(count>=1) {
            count--;
            next=1500*count;
            // width 값이 80%이므로 max-width 값을 재서 수치를 넣었습니다.
        }
        imgs.style.left= -next+"px";
        slider__num.innerHTML=(count+1)+ " / 7";
    });

    btn_right=document.querySelector("#right__btn");
    btn_right.addEventListener("click",function(){
        imgs=document.querySelector("#slider_big")
        if(count<6)
        { 
        count++;
        next=1500*count;
        } else 
            ;
        imgs.style.left=-next+"px";
        slider__num.innerHTML=(count+1)+" / 7";
    })

   var login = document.getElementById('login_btn');
   login.onclick = function() {
    alert("로그인 페이지로 이동합니다. ");

    document.getElementById("slider").style.display="none";
    document.getElementById("beanist").style.display="none";
    document.getElementById("menu__page").style.display="none"
    document.getElementById("login").style.display="block";

    // section.style.display="none";
    // slider.style.display="none";
    // beanist.style.display="none";
    // this["login"+(js)].style.display="block";
   }

   var menu = document.getElementById('menu_btn');
   menu.onclick = function() {
    document.getElementById("slider").style.display="none";
    document.getElementById("beanist").style.display="none"
    document.getElementById("login").style.display="none"
       document.getElementById("menu__page").style.display="block";
   }

}
