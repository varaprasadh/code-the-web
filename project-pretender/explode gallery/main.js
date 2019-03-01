
var images;
var gridimages;
window.onload=function(){
    console.log("kjssek");
   var imgstack=document.querySelector('.imgstack');
     images = document.querySelectorAll('img');
    var grid = document.querySelector('.grid');
    images.forEach((image, index) => {
        var placeholder = document.createElement('div');
        placeholder.setAttribute('class', 'img');
        placeholder.style = {
            width: image.width+"px",
            height: image.height+"px"
        };
        
        console.log(placeholder);
        grid.appendChild(placeholder);

    });
    gridimages = document.querySelectorAll('.img');
    
   imgstack.addEventListener('click',translateImages);
}
function translateImages(e){
    // console.log(images);
    // console.log(gridimages);
    images.forEach((image,index)=>{  
        var imageprops=image.getBoundingClientRect();
        var destprops=gridimages[index].getBoundingClientRect();
        console.log(imageprops);
        imageXtranslate=destprops.left-imageprops.left;
        imageYtranslate=destprops.top-imageprops.top;
        console.log(imageXtranslate, imageYtranslate,"\n");

        //because we know that our image size is 250 px so we need to decrese 125px
        //from original value to prevent overflow caused by css translate(-50%);
        image.style.transform = `translate(${imageXtranslate-125}px,${imageYtranslate}px)`;
        image.style.transitionDelay=index/images.length+"s";
    })  
}