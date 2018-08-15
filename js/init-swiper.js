!function(){

    var view=document.querySelector('#slide-wrap')
    var controler={
        view:null,
        init:function(view){
            this.view=view;
            this.bindEvent();
        },
        bindEvent:function(){
            var mySwiper = new Swiper('.swiper-container', {
                // Optional parameters
            
                loop: true,
            
                // If we need pagination
                pagination: {
                    el: '.swiper-pagination',
                },
            
                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            })
        }

    }
    controler.init(view);
    
}.call()