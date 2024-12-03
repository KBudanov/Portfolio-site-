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
var slides = 5;
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

function updateSlideClasses() {
    // Get all slide elements (assuming they are direct children of the slider)
    const slideElements = slider.children;

    for (let i = 0; i < slideElements.length; i++) {
        if (i === currentPosition) {
            // Apply styles for the selected slider
            slideElements[i].classList.add('selectedSlider');
            slideElements[i].classList.remove('unSelectedSlider');
        } else {
            // Apply styles for the unselected sliders
            slideElements[i].classList.add('unSelectedSlider');
            slideElements[i].classList.remove('selectedSlider');
        }
    }
}

function slideRight() {
    if (currentPosition > 0) {
        currentPosition--;
        currentMargin += (100 / slidesPerPage);
        slider.style.marginLeft = currentMargin + '%';
        updateSlideClasses();
    }
    updateButtonStates();
}

function slideLeft() {
    if (currentPosition < slidesCount) {
        currentPosition++;
        currentMargin -= (100 / slidesPerPage);
        slider.style.marginLeft = currentMargin + '%';
        updateSlideClasses();
    }
    updateButtonStates();
}

function updateButtonStates() {
    buttons[0].classList.toggle('inactive', currentPosition === 0);
    buttons[1].classList.toggle('inactive', currentPosition === slidesCount);
}

setParams(containerWidth);
updateSlideClasses();




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
        // buttons[0].classList.add('#unSelectedSlider');
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