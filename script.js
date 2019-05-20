// Fonctionnalité 1 :
function footer() {
	let footerClick = document.getElementsByTagName('footer')[0];
	footerClick.addEventListener("click", function() {
		console.log(`Click`);
	 });
};
footer()

// Fonctionnalité 1bis :
function footer_bis() {
	let footerClick = document.getElementsByTagName('footer')[0];
	let clickNr = 1;

	footerClick.addEventListener("click", function() {
		console.log(`Click nr : ${clickNr++}`);
	 });
};
footer_bis()

// Fonctionnalité 2 :

function menu_Toggler() {
	let navBarClick = document.getElementsByClassName('navbar-toggler')[0];
	let navBar = document.getElementById('navbarHeader');

	navBarClick.addEventListener("click", function() {
		navBar.classList.toggle("collapse");
		console.log(`Click navbar`);
	 });
};
menu_Toggler()


// Fonctionnalité 3 :

function text_Card_Red() {
	let btn_edit_card0 = document.getElementsByClassName('btn-group')[0];
	let txt_edit_card0 = document.getElementsByClassName('card-text')[0];

	//pour l'exo - mais code pas nécessaire par la suite
	txt_edit_card0.addEventListener("click", function() {
		console.log(`Click a text has been selected`);
	 });
	//----- fin code pour l'exo
	btn_edit_card0.addEventListener("click", function() {
		console.log(`Click edit btn`);		
		txt_edit_card0.style.color ="red"
	 });

};
text_Card_Red()

// Fonctionnalité 4 :

function text_Card_Green() {
	let btn_edit_card1 = document.getElementsByClassName('btn-group')[1];
	let txt_edit_card1 = document.getElementsByClassName('card-text')[1];
	let color_txt_edit_card1 = "grey"

	btn_edit_card1.addEventListener("click", function() {
		console.log(`Click edit btn`);
		if (txt_edit_card1.style.color === '' ){
			txt_edit_card1.style.color = 'green'
		}
		else if (txt_edit_card1.style.color === 'green') {
			txt_edit_card1.style.color =''
		}
	 });
};
text_Card_Green()


// Fonctionnalité 5 :

function disable_Bootrap() {
	let boostrapClick = document.getElementsByTagName('header')[0];	

	boostrapClick.addEventListener('dblclick', function() {

		let child =	document.styleSheets[0]

		if(child.disabled === false) {
			child.disabled = true;
		} else {
			child.disabled = false;
}
	 });
};
disable_Bootrap()




function fonction6() {

	let viewBtnOver = document.getElementsByClassName('btn-group')[0];	
	let textCardOver = document.getElementsByClassName('card-text')[0];	
	let imgCardOver = document.getElementsByClassName('card-img-top')[0];	
	var imgCardOverCurrWidth = imgCardOver.clientWidth;
	var test = true
	viewBtnOver.addEventListener('mouseover', function() {
		if(test ===true) {
		textCardOver.style.display = 'none';
		imgCardOver.style.width = (imgCardOverCurrWidth * 0.2) + "px";
		test = false
		} 
		else {
		textCardOver.style.display = 'block';
		imgCardOver.style.width = (imgCardOverCurrWidth) + "px";
		test = true
		} 
	 });
};
fonction6()

function fonction6b() {
	const allTextCard = document.querySelectorAll('card-text');
	const allImgCard = document.querySelectorAll('card-img-top');
	var imgCardOverCurrWidth = allImgCard.clientWidth;
	var test = true

	let viewBtnOver = document.getElementsByClassName('btn-group')[0];	
		console.log(`coucou0`);

	viewBtnOver.addEventListener('mouseover', function() {
		console.log(`coucou1`);

		if(test ===true) {
		console.log(allTextCard);
			allTextCard.forEach(a => {
		console.log(`coucou3`);

				a.style.display = 'none';
			});

		test = false
		} 
		else {
			allTextCard.forEach(a => {
				a.style.display = 'block';
			});
		test = true
		} 
	 });
};
fonction6b()