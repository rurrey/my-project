

$(document).ready(function(){

	//menyn droppar ner när den hovras över och droppas upp när användaren inte längre hovrar
	$("#navig li").hover(function(){
		$("ul", this).stop().slideDown(500);
	},function(){
		$("ul", this).stop().slideUp(500); 
	});

	
let slideIndex = 0;
showSlides();

function showSlides() {
  	let i;
  	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");
  	for (i = 0; i < slides.length; i++) {
    		slides[i].style.display = "none";
  }
  	slideIndex++;
  	if (slideIndex > slides.length) {slideIndex = 1}
	for (i = 0; i < dots.length; i++) {
    	dots[i].className = dots[i].className.replace(" active", "");
  	}
	
  	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
  	setTimeout(showSlides, 7000); // Change image every 7 seconds
}

});

