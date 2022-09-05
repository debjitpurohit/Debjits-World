
document.querySelector('#cross').style.display = 'none' ;
document.querySelector('.hamberger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo')
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('#ham').style.display ='inline'
        document.querySelector('#cross').style.display ='none'

    }else{
        setTimeout(() =>
{        document.querySelector('#cross').style.display ='inline'}, 400);
        document.querySelector('#ham').style.display ='none'

    }

} )
var loader= document.getElementById('preloader');
window.addEventListener('load',function(){
    loader.style.display='none';
})
// var icon = document.getElementById("icon");
// icon.onclick= function(){
//     document.body.classList.toggle("dark-theme")
//     if(document.body.classList.contains("dark-theme")){
//         icon.src ="img/sun.png";
//     }else{
//         icon.src = "img/moon.png";
//     }
// }

