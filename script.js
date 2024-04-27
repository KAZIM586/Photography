 /* section information part btn read more  */

 const northwest = document.getElementById('northwest')
 let display1 = 0;
function hideShowing(){
    if(display1 == 1){
        northwest.style.display = 'block';
        display1 = 0;
    }
    else{
        northwest.style.display = 'none';
        display1 = 1;
    }
}

//only  image crousel section

const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const cimage = document.querySelectorAll('.cimage');

let slideNumber = 1;
const length = cimage.length;


const nextSlide = ()=>{
    slider.style.transform = `translateX(-${slideNumber*468}px)`;
    slideNumber++;
}

const prevSlide = ()=>{
    slider.style.transform = `translateX(-${(slideNumber-2)*468}px)`;
    slideNumber--;
}

const getFirstSlide = ()=>{
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
}

const getLastSlide = ()=>{
    slider.style.transform = `translateX(-${(length-1)*468}px)`;
    slideNumber = length;
}

right.addEventListener('click',() => {
    if(slideNumber < length){
        nextSlide();
    }else{
        getFirstSlide();
    }   
});

left.addEventListener('click',() => {
    // ternary operator use here
    slideNumber > 1 ? prevSlide() : getLastSlide();
   
});

//only  image crousel section end here

//  golden temple info section

const btntext = document.getElementsByClassName('btntext')
 const templeinfo = document.getElementById('templeinfo')
 let display = 0;
function hideShow(){
    if(display == 1){
        templeinfo.style.display = 'block';
        display = 0;
       
    }
    else{
        templeinfo.style.display = 'none';
        display = 1;
        

    }
}

//  golden temple info section
