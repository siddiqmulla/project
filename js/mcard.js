$.scrollUp({
    scrollText: '<span><i class="fa fa-angle-up"></i></span>',
    easingType: 'easeInOutExpo',
    scrollSpeed: 900,
    animation: 'fade'
}); 

/*=======================
    Animate Scroll JS
=========================*/
$('.scroll').on("click", function (e) {
    var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 100
        }, 1000);
    e.preventDefault();
});
const whbtn = document.querySelector(".whp");

	window.addEventListener("scroll" , () =>{
		if (window.scrollY > 220) {
			whbtn.classList.add("active");
		}else{
			whbtn.classList.remove("active");
		}
	});