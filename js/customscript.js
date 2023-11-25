
// /////////////////////////////////////////////////////////////////////////

var typed = new Typed('#element', {
    strings: ['Larry Daniels', 'Developer' , 'Designer'],
    typeSpeed: 30, // Adjust typing speed
  backSpeed: 30, // Adjust backspacing speed
  startDelay: 100, // Delay before typing starts
  backDelay: 2500, // Delay before backspacing
  showCursor: true, // Show the typing cursor
  cursorChar: '|', // Customize cursor character
  
  smartbackspace:false,
  fadeIn:true,
  loop: true ,
     autoInsertCss: false,

    loop: true ,
  });
// ///////////////////////////////////////////////////////////////////////
const targetNumber1 = 850;
const targetNumber2 = 230;
const targetNumber3 = 9450;
const targetNumber4 = 780;


const counterElement1 = document.getElementById('counter1');
const counterElement2 = document.getElementById('counter2');
const counterElement3 = document.getElementById('counter3');
const counterElement4 = document.getElementById('counter4');

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;

function updateCount1() {
  if (count1 <= targetNumber1) {
    counterElement1.textContent = `${count1}`;
    count1++;
    setTimeout(updateCount1, 5);
  }
}

function updateCount2() {
  if (count2 <= targetNumber2) {
    counterElement2.textContent = `${count2}`;
    count2++;
    setTimeout(updateCount2, 16); // Adjust timing for the second counter
  }
}
function updateCount3() {
  if (count3 <= targetNumber3) {
    counterElement3.textContent = `${count3}`;
    count3++;
    setTimeout(updateCount3, .05); // Adjust timing for the second counter
  }
}
function updateCount4() {
  if (count4 <= targetNumber4) {
    counterElement4.textContent = `${count4}`;
    count4++;
    setTimeout(updateCount4, 5); // Adjust timing for the second counter
  }
}

updateCount1();
updateCount2();
updateCount3();
updateCount4();

// ///////////////////////////////
$(document).ready(function () {
    $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh');
    });

    $(window).on('scroll', function () {
        $('[data-spy="scroll"]').each(function () {
            var $spy = $(this).scrollspy('refresh');
        });
    });

    
});
function handleNavScroll() {
    const homeSection = document.getElementById('home');
    const navbar = document.querySelector('.navbar');
  
    if (window.scrollY >= homeSection.offsetTop + homeSection.offsetHeight) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  
  // Event listener for scroll
  window.addEventListener('scroll', handleNavScroll);
