$(document).ready(function(){
    $('.hamburger-toggler').on('click', function(){
        $('.side-menu').css({
            transform: 'translate(350px)',
            transitionDuration: '0.3s',
        })
    })
    $('.hamburger-toggler-2').on('click', function(){
        $('.side-menu').css({
            transform: 'translate(-350px)',
            transitionDuration: '0.3s'
        })
    })
    $('.searchbar').find('input').on('')
    
    
});
