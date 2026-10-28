
const hamburger = document.getElementById('hamburger')
const navlink = document.getElementById('navlinks')
const hamburger1 = document.createElement('img')
hamburger.appendChild(hamburger1)
hamburger1.src = 'images/icon-hamburger.svg'

hamburger.addEventListener('click', function(){
    if (navlink.classList.contains('active')) {
        navlink.classList.toggle('active')
         hamburger1.style.backgroundColor = 'white'
        hamburger1.src = 'images/icon-hamburger.svg'
    } else{
        hamburger1.src = 'images/icon-close.svg'
        navlink.classList.add('active')
         hamburger1.style.backgroundColor = 'black'
    }
})


const answers = document.querySelector('.answer')

// const question = document.querySelector('.point')
// answers.addEventListener('click', function(){
//     question.classList.toggle('active')
// })
const arrows = document.querySelectorAll(".answer");

arrows.forEach(function(arrow) {

    arrow.addEventListener("click", function() {

        const faqItem = arrow.closest(".faq-item");

        faqItem.classList.toggle("active");

        const isOpen = faqItem.classList.contains("active");

        arrow.setAttribute("aria-expanded", isOpen);

        arrow.setAttribute(
            "aria-label",
            isOpen ? "Hide answer" : "Show answer"
        );

    });

});