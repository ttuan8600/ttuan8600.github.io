/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = documet.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

/*=============== SERVICES MODAL ===============*/
const modelViews = document.querySelectorAll('.services__model'),
        modelBtns = document.querySelectorAll('.services__button'),
        modelClose = document.querySelectorAll('.services__model-close')

let model = function(modelClick){
    modelViews[modelClick].classList.add('active-model')
}
modelBtns.forEach((mb, i)=>{
    mb.addEventListener('click', () =>{
        model(i)
    })
})

modelClose.forEach((mc)=>{
    mc.addEventListener('click', () =>{
        modelViews.forEach((mv)=>{
            mv.classList.remove('active-model')
        })
    })
})   
/*=============== MIXITUP FILTER PORTFOLIO ===============*/


/* Link active work */ 


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== LIGHT DARK THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/

