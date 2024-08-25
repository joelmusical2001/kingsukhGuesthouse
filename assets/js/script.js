'use strict';

// navbar toggle mobile

const $navbar = document.querySelector("[data-navbar]");
const $navToggler = document.querySelector("[data-nav-toggler]");

$navToggler.addEventListener("click", () => $navbar.classList.toggle("active"));

const $header = document.querySelector("[data-header]");

window.addEventListener("scroll", e => {
    $header.classList[window.scrollY > 50 ? "add" : "remove"]("active")
})

// Add to favorite toggle button

const $toggleBtns=document.querySelectorAll("[data-toggle-btn]");

$toggleBtns.forEach($toggleBtn => {
    $toggleBtn.addEventListener("click", () => {
        $toggleBtn.classList.toggle("active");
    });
});

// Counters

const counters = document.querySelectorAll(".counters span")
const container = document.querySelector(".counters")

let activated = false;

window.addEventListener("scroll", () =>{

    if(
        pageYOffset > container.offsetTop - container.offsetHeight - 200 && activated === false
    ){
        counters.forEach(counter => {
            counter.innerText = 0;
            let count = 0;

            function updateCount(){

                const target = parseInt(counter.dataset.count);

                if(count < target){
                    count++;
                    counter.innerText = count;
                    setTimeout(updateCount,20);
                }else{
                    counter.innerText = target;
                }
            }

            updateCount();

            activated = true;
        });

    }else if(
        pageYOffset < container.offsetTop - container.offsetHeight - 500 || pageYOffset ===0 && activated === true
    ){

        counters.forEach(counter => {
            counter.innerText = 0;
        });

        activated = false;

    }

});

