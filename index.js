
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

