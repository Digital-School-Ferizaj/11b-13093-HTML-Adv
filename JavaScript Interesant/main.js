var slideIndex = 1;

function showSlides(n) {
	
	var i;
	var slides = document.getElementsByClassName('slide');

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}

	slides[slideIndex-1].style.display = "block";
}

showSlides(1);

function plusSlides(n){
	slideIndex += n;
	showSlides(slideIndex);
}

setInterval(plusSlides, 2000, 1);


function openMenu(){
	var menu = document.getElementById("myLinks");
	if (menu.style.display === "block") {
		menu.style.display = "none";
	}else{
		menu.style.display = "block";
	}
}



function search() {
    var input, filter, ul, li, a, i, txtValue;
    
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myList");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        a = li[i];
        txtValue = a.textContent;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }
}