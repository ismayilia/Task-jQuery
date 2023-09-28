"use strict";


$(function(){


    let rightIcon = $(".slider-area .slider .icons i:nth-child(2)")
    let leftIcon = $(".slider-area .slider .icons i:nth-child(1)")
    
    
    leftIcon.click(leftSlider)
    
    
    rightIcon.click(rightSlider)
    
    


    
    
    function rightSlider(){
        let activeSlider = $(".active-slider");
        if (activeSlider.next().length != 0) {
            activeSlider.removeClass("active-slider");
            activeSlider.next().addClass("active-slider")
        }
        else{
            activeSlider.removeClass("active-slider");
            activeSlider.parent().children().first().addClass("active-slider")
        }
    }
    
    function leftSlider(){
        let activeSlider = $(".active-slider");
        if (activeSlider.prev().length != 0) {
            activeSlider.removeClass("active-slider");
            activeSlider.prev().addClass("active-slider")
        }
        else{
            activeSlider.removeClass("active-slider");
            activeSlider.parent().children().last().addClass("active-slider")
        }
    }

    
    setInterval(() => {
        rightSlider();
    }, 1000);


















})



