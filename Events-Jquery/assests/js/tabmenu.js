"use strict";
$(function () {
    $(".tab-header .item");
    $(".tab-content .item");
    let tabContents = document.querySelectorAll(".tab-content .item");


    $(".tab-header .item").click(function () {
        $(".active-tab").removeClass("active-tab");
        $(this).addClass("active-tab");


        tabContents.forEach(content => {
            if (content.getAttribute("data-id") == this.getAttribute("data-id")) {
                content.classList.remove("d-none")
            }
            else {
                content.classList.add("d-none")
            }
        });
    });




})








