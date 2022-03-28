var sticky = document.getElementById('sticky');
var altura = (sticky.offsetTop);


window.addEventListener('scroll',function(){
    if (window.pageYOffset > altura) {
        sticky.classList.add('fixed');
    } else {
        sticky.classList.remove('fixed')
    }

})  
