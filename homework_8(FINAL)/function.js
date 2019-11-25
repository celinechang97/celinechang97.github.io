/* FIRST SECTION ANIMATION */
$(function(){
	setTimeout(function(){
		$('.title').removeClass('hidden');
	}, 900);
});

$(function(){
	setTimeout(function(){
		$('.threeSectionsGroup').removeClass('hidden');
	}, 2000);
});

$(function(){
	setTimeout(function(){
		$('#flower1').removeClass('hidden');
	}, 100);
});


// $(function(){
// 	setTimeout(function(){
// 		$('.horizontalHR').removeClass('hidden');
// 	}, 200);
// });

// $(function(){
// 	setTimeout(function(){
// 		$('.roatedHR').removeClass('hidden');
// 	}, 200);
// });



/* FOR SMOOTH SCROLL */
$('.centerGroup a').on('click', function(e) {
	if(this.hash !== ''){
		e.preventDefault();

		const hash = this.hash;

		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 
		1500
		);
	}
});




/* FOR BACK TO TOP BUTTON*/
//Get the button
var mybutton = document.getElementById("top_btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  console.log("scroll");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }





/* FOR ANIMATION */
var tl = new TimelineMax({onUpdate:updatePercentage});
var tl2 = new TimelineMax({onUpdate:updatePercentage});
var tl3 = new TimelineMax({onUpdate:updatePercentage});
var tl4 = new TimelineMax({onUpdate:updatePercentage});
var tl5 = new TimelineMax({onUpdate:updatePercentage});
var tl6 = new TimelineMax({onUpdate:updatePercentage});
var tl7 = new TimelineMax({onUpdate:updatePercentage});
var tl8 = new TimelineMax({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();

tl.from('#typesofyogaHeading', 30, {x:-100, opacity: 0});
tl.from('#typesofyogaBG', 10, {x:50, opacity: 0});

tl2.from('#benefitsofyogaHeading', 9000, {x:-300, opacity: 0});
tl2.from('#benefitsofyogaBG', 2000, {x:50, opacity: 0});
tl2.from('#leftDescription', 4000, {y:-100, opacity: 0});
tl2.from('#rightDescription', 4000, {x:100, opacity: 0});

tl3.from('#posturesofyogaHeading', 180, {x:-100, opacity: 0});
tl3.from('#posturesofyogaBG', 180, {x:50, opacity: 0});

tl4.from('.scrolling-wrapper', 180, {y:500, opacity: 0});

tl5.from('#ashtangaDescription', 180, {y:500, opacity: 0});

tl6.from('#ashtangaTitle', 30, {x:500, opacity: 0});

tl7.to('.centerGroup', 120, {x:-100, opacity: 0});



const scene = new ScrollMagic.Scene({
  triggerElement: "#secondSection",
            triggerHook: "onEnter",
            duration: "100%"
})
  .setTween(tl)
    .addTo(controller);


const scene2 = new ScrollMagic.Scene({
  triggerElement: "#thirdSection",
            triggerHook: "onEnter",
            duration: "100%"
})
  .setTween(tl2)
    .addTo(controller);


const scene3 = new ScrollMagic.Scene({
  triggerElement: "#fourthSection",
            triggerHook: "onEnter",
            duration: "100%"
})
  .setTween(tl3)
    .addTo(controller);

const scene4 = new ScrollMagic.Scene({
  triggerElement: "#posturesofyogaHeading",
            triggerHook: "onEnter",
            duration: "100%"
})
  .setTween(tl4)
    .addTo(controller);

const scene5 = new ScrollMagic.Scene({
  triggerElement: "#secondSection",
            triggerHook: "onEnter",
            duration: "100%"
})
  .setTween(tl5)
    .addTo(controller);

const scene6 = new ScrollMagic.Scene({
  triggerElement: "#secondSection",
            triggerHook: "onEnter",
            duration: "100%"
})
  .setTween(tl6)
    .addTo(controller);


const scene7 = new ScrollMagic.Scene({
  triggerElement: "#firstSection",
            triggerHook: "onLeave",
            duration: "100%"
})
  .setTween(tl7)
    .addTo(controller);


function updatePercentage() {
  //percent.innerHTML = (tl.progress() *100 ).toFixed();
  tl.progress();
}