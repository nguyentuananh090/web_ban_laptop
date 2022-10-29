let items = document.querySelectorAll('.carousel .carousel-item.item1')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})
let Scroll=document.querySelector('#ontop');
Scroll.addEventListener('click',()=>{
    window.scrollTo(0,0);
})

let doimau=document.querySelector('.bg-dark');
window.addEventListener('scroll',()=>{
    console.log(window.pageYOffset);
    if(window.pageYOffset>=200){
        doimau.classList.add('active');
        Scroll.classList.add('active');
    }
    else if(window.pageYOffset<200){
        doimau.classList.remove('active');
        Scroll.classList.remove('active');
    }
})


let click_logo=document.querySelector('.navbar-brand');
let left=document.querySelector('.left');
let Close=document.querySelector('.close');
let right=document.querySelector('.right');
let side_bar=document.querySelector('#side_bar');
let login=document.querySelector('#login');
let click_nhap=document.querySelector('.click_nhap');
let close_login=document.querySelector('.close_login');


click_nhap.addEventListener('click',()=>{
    // login.style.display="block";
    login.style.transform="scale(1)";
    login.style.zIndex = "222";
})
close_login.addEventListener('click',()=>{
    // login.style.display="none";
    login.style.transform="scale(0)";
    login.style.zIndex = "-1";
})
click_logo.addEventListener('click',()=>{
    left.style.transform='translateX(0%)'
    right.style.transform='translateX(0%)'
   
    side_bar.style.zIndex = "22222";
    
})
right.addEventListener('click',()=>{
    left.style.transform='translateX(-100%)'
    right.style.transform='translateX(100%)'
    side_bar.style.zIndex = "-1"
   
    
})
Close.addEventListener('click',()=>{
    left.style.transform='translateX(-100%)'
    right.style.transform='translateX(100%)'
    side_bar.style.zIndex = "-1";
    // particles.style.zIndex = "0";
})

