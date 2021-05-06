document.addEventListener("DOMContentLoaded", () => {

	const text = document.getElementById("text");
	text.style.display = "none";

	const button = document.getElementById("button");
	button.addEventListener("click", changeText);

	const imageButton = document.getElementById("imageButton");
	imageButton.addEventListener("click", changeImage);

	var index = 0;


	function changeText(){
		text.style.display = "block";
		text.innerHTML = "Text Has Changed";
	}

	function changeImage(){
		const image = document.getElementById("img");

		if(index == 0){
		//apple 1
		image.src = "https://sc04.alicdn.com/kf/HTB1HHDUbinrK1RjSsziq6xptpXa2.jpg";
		//index = index + 1
		//index += 1;
		index++;
	}else if(index == 1){
		//kiwi 2
		image.src = "https://upload.wikimedia.org/wikipedia/commons/d/d3/Kiwi_aka.jpg";
		index++;
	}else if (index == 2){
		//banana 0
		image.src = "https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1200-80.jpg";
		index = 0;
	}

}

});










