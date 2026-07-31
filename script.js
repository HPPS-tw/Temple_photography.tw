// Temple Photography.tw

window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>50){

nav.style.background="rgba(0,0,0,.75)";

nav.style.backdropFilter="blur(40px)";

nav.style.boxShadow="0 15px 35px rgba(0,0,0,.35)";

}else{

nav.style.background="rgba(255,255,255,.08)";

nav.style.backdropFilter="blur(30px)";

nav.style.boxShadow="none";

}

});

document.querySelectorAll("a").forEach(link=>{

link.addEventListener("click",function(e){

const href=this.getAttribute("href");

if(href.startsWith("#")){

e.preventDefault();

document.querySelector(href).scrollIntoView({

behavior:"smooth"

});

}

});

});

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});
