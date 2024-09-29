const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
 
// JavaScript to add 'animated' class to About section elements when scrolled into view
document.addEventListener('DOMContentLoaded', function() {
    var aboutSection = document.querySelector('#about');
    var colLeft = aboutSection.querySelector('.col-left');
    var colRight = aboutSection.querySelector('.col-right');

    var options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Trigger animation when 50% of the section is visible
    };

    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                colLeft.classList.add('animated');
                colRight.classList.add('animated');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, options);

    observer.observe(aboutSection);
});

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
    // Pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  });
  // skill
  let currentPage = 0;
const pages = document.querySelectorAll('.page');

pages[currentPage].classList.add('active');

function togglePage() {
    pages[currentPage].classList.remove('active');
    currentPage = (currentPage + 1) % pages.length;
    pages[currentPage].classList.add('active');
}

function showPercentage(element, percentage) {
    const iconWrapper = element.querySelector('.icon-wrapper');
    iconWrapper.parentElement.classList.toggle('flipped');

    const percentageText = iconWrapper.querySelector('.percentage');
    percentageText.textContent = `${percentage}%`;
}

  
// end skill
//project 
document.addEventListener('DOMContentLoaded', function () {
    const descriptionButtons = document.querySelectorAll('.description-btn');
    const popup = document.getElementById('description-popup');
    const popupDescription = document.getElementById('popup-description');
    const closePopup = document.getElementById('close-popup');

    descriptionButtons.forEach(button => {
        button.addEventListener('click', function () {
            const description = button.getAttribute('data-description');

            // Create a bouncing ball effect
            const bounceBall = document.createElement('div');
            bounceBall.className = 'bounce';
            document.body.appendChild(bounceBall);

            // Position ball initially above the button
            const rect = button.getBoundingClientRect();
            bounceBall.style.left = `${rect.left + window.scrollX + rect.width / 2 - 10}px`; // Center the ball over the button
            bounceBall.style.top = `${rect.top + window.scrollY}px`;

            // Get the project card's top position
            const cardRect = button.closest('.project-card').getBoundingClientRect();
            const targetTop = cardRect.top + window.scrollY; // Top of the project card

            // Update animation to target the top of the card
            bounceBall.style.transition = `top 1.5s ease-in-out`;
            setTimeout(() => {
                bounceBall.style.top = `${targetTop}px`;
            }, 0); // Set the target position after the initial render

            // After animation, show popup with description
            bounceBall.addEventListener('animationend', function () {
                document.body.removeChild(bounceBall);

                // Clear existing description content
                popupDescription.innerHTML = '';

                // Wrap each letter of the description in a span and add it to the popup
                const letters = description.split('');
                letters.forEach((letter, index) => {
                    const span = document.createElement('span');
                    span.textContent = letter;
                    span.style.setProperty('--index', index);
                    popupDescription.appendChild(span);
                });

                // Show the pop-up with description
                popup.classList.add('show');
            });
        });
    });

    // Close the popup
    closePopup.addEventListener('click', function () {
        popup.classList.remove('show');
    });

    // Close popup by clicking outside of the popup content
    window.addEventListener('click', function (e) {
        if (e.target === popup) {
            popup.classList.remove('show');
        }
    });

    // Close the popup with the Escape key
    window.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            popup.classList.remove('show');
        }
    });
});

// end project
 
