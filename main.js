var button = document.querySelector('.btn-animated');
button.addEventListener('click', function() {
  var duration = 0.3,
      delay = 0.08;
  TweenMax.to(button, duration, {scaleY: 1.6, ease: Expo.easeOut});
  TweenMax.to(button, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay});
  TweenMax.to(button, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });
});

let loginIn = document.querySelector('.nav__log-in');
let modal = document.querySelector('.modal');
loginIn.addEventListener('click', () => {
    modal.style.display = "flex";
})

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Main
TweenMax.from(".container", 1, {
    delay: 0.3,
    opacity: 0,
    ease: Expo.easeInOut
});

TweenMax.from(".container__right", 1, {
    delay: 1,
    opacity: 0,
    width: 0,
    x: 1515,
    ease: Expo.easeInOut
});

TweenMax.from(".container__left", 1, {
    delay: 1,
    opacity: 0,
    width: 0,
    ease: Expo.easeInOut
});

TweenMax.from(".heading-primary", 1, {
    delay: 1,
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.from(".product", 1, {
    delay: 2,
    opacity: 0,
    ease: Expo.easeInOut
})

// nav
TweenMax.from(".nav__logo__container", 2, {
    delay: 1,
    opacity: 0,
    y: -20,
    ease: Expo.easeInOut
});

TweenMax.from(".nav__logo", 1, {
    delay: 1.2,
    opacity: 0,
    y: -20,
    ease: Expo.easeInOut
})


TweenMax.from(".nav__log-in", 2, {
    delay: 1,
    opacity: 0,
    y: -20,
    ease: Expo.easeInOut
});


// Left sidebar 

TweenMax.from(".left-sidebar__title", 1, {
    delay: 1.8,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".left-sidebar__description", 1, {
    delay: 1.8,
    opacity: 0,
    y: 10,
    ease: Expo.easeInOut
});

TweenMax.from(".btn-animated", 2, {
    delay: 2.2,
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.from("#price", 2, {
    delay: 2.0,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.staggerFrom(".right-sidebar ul li", 1, {
    delay: 1.8,
    opacity: 0,
    y: 20,
    ease: Power3.easeInOut
}, 0.08);

TweenMax.from(".left-bottom", 2, {
    delay: 2.8,
    opacity: 0,
    y: 20,
    ease: Power3.easeInOut
}, 0.08);

TweenMax.staggerFrom(".media ul li", 2, {
    delay: 2.8,
    opacity: 0,
    y: 20,
    ease: Power3.easeInOut
}, 0.08);

TweenMax.from(".main", 2, {
    delay: 3,
    opacity: 0,
    y: -20,
    ease: Power3.easeInOut
}, 0.08);