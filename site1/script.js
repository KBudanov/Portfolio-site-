$("#ready").on("click", function() {
    let tgId = 961172191;
    let tgIdT = 567796338;
    let botToken = '8065866963:AAFgFjjeasxH8euVZ0zB8HtSbRaWZRlyCcE';

    let firstN = $("#firsName").val()
    let lastN = $("#lastName").val()
    let mail = $("#mail").val()

    let orderText = `
NEW ORDER %0A
Name: ${firstN}%0A
Last name: ${lastN}%0A
Mail: ${mail}%0A
`;



    let botUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${tgId}&text=${orderText}`;
    let botUrl2 = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${tgIdT}&text=${orderText}`;
    $.post(botUrl)
    $.post(botUrl2)

    $("#firsName").val("")
    $("#lastName").val("")
    $("#mail").val("")
})



// scroll bar 1 code

var container = document.getElementById('container')
var slider = document.getElementById('slider');
var slides = 9;
var buttons = document.getElementsByClassName('btn');


var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
    containerWidth = container.offsetWidth;
    setParams(containerWidth);
}

function setParams(w) {
    if (w < 551) {
        slidesPerPage = 1;
    } else {
        if (w < 901) {
            slidesPerPage = 2;
        } else {
            if (w < 1101) {
                slidesPerPage = 3;
            } else {
                slidesPerPage = 4;
            }
        }
    }
    slidesCount = slides - slidesPerPage;
    if (currentPosition > slidesCount) {
        currentPosition -= slidesPerPage;
    };
    currentMargin = -currentPosition * (100 / slidesPerPage);
    slider.style.marginLeft = currentMargin + '%';
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
    if (currentPosition >= slidesCount) {
        buttons[1].classList.add('inactive');
    }
}

setParams();

function slideRight() {
    if (currentPosition != 0) {
        slider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
        currentMargin += (100 / slidesPerPage);
        currentPosition--;
    };
    if (currentPosition === 0) {
        buttons[0].classList.add('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
};

function slideLeft() {
    if (currentPosition != slidesCount) {
        slider.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
        currentMargin -= (100 / slidesPerPage);
        currentPosition++;
    };
    if (currentPosition == slidesCount) {
        buttons[1].classList.add('inactive');
    }
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
};

let addreviewDiv = $(".addReviews");
addreviewDiv.hide();
$("#addReview").on("click", function() {
    addreviewDiv.show();
})

$("#hideAR").on("click", function() {
    addreviewDiv.hide();
    $("#addRinp1").val("")
    $("#addRinp2").val("")
})


$("#hideARR").on("click", function() {
    addreviewDiv.hide();
    $("#addRinp1").val("")
    $("#addRinp2").val("")
})

//slider for screen 4 
let slidesPerScreenV;
if (innerWidth >= 760) {
    slidesPerScreenV = 3.8;

    const swiper = new Swiper('.swiper-container', {
        slidesPerView: slidesPerScreenV,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {

            slideChangeTransitionEnd: function() {
                const slides = document.querySelectorAll('.swiper-slide');
                slides.forEach((slide) => {

                });

                const activeSlide = document.querySelector('.swiper-slide-active');
                if (activeSlide) {

                }


                slides.forEach((slide) => {
                    const textElements = slide.querySelectorAll('h3, p');
                    if (slide.classList.contains('swiper-slide-active')) {
                        textElements.forEach((el) => (el.style.opacity = '1'));

                    } else {
                        textElements.forEach((el) => (el.style.opacity = '0'));
                    }
                });
            },
        },
    });

} else {
    slidesPerScreenV = 1.6;

    const swiper = new Swiper('.swiper-container', {
        slidesPerView: slidesPerScreenV,
        spaceBetween: 5,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {

            slideChangeTransitionEnd: function() {
                const slides = document.querySelectorAll('.swiper-slide');
                slides.forEach((slide) => {

                });

                const activeSlide = document.querySelector('.swiper-slide-active');
                if (activeSlide) {

                }


                slides.forEach((slide) => {
                    const textElements = slide.querySelectorAll('h3, p');
                    if (slide.classList.contains('swiper-slide-active')) {
                        textElements.forEach((el) => (el.style.opacity = '1'));

                    } else {
                        textElements.forEach((el) => (el.style.opacity = '0'));
                    }
                });
            },
        },
    });

}




const swiper = new Swiper('.swiper-container', {
    slidesPerView: slidesPerScreenV,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {

        slideChangeTransitionEnd: function() {
            const slides = document.querySelectorAll('.swiper-slide');
            slides.forEach((slide) => {

            });

            const activeSlide = document.querySelector('.swiper-slide-active');
            if (activeSlide) {

            }


            slides.forEach((slide) => {
                const textElements = slide.querySelectorAll('h3, p');
                if (slide.classList.contains('swiper-slide-active')) {
                    textElements.forEach((el) => (el.style.opacity = '1'));

                } else {
                    textElements.forEach((el) => (el.style.opacity = '0'));
                }
            });
        },
    },
});




//phone adaptivity
let burgerBtn = $("#burgerMenu")

$(".headerListMobile").toggle()

$(burgerBtn).on("click", function() {
    $(".headerListMobile").toggle()
})