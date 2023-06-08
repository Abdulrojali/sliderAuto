let img=document.getElementsByClassName('slider')
let index=0
function sliderAuto(){
    index++
    if(index>=3){
        index=0
    }
    for(let i=0; i<img.length; i++){
        img[i].style.display='none'
    }
    img[index].style.display='block'
}
setInterval(sliderAuto,900);


