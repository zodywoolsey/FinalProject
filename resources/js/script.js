'use strict';

let userPanel_element = document.getElementById('userPanel');
let username = userPanel_element.firstChild.firstChild.innerHTML.toString();


let loginButton = ()=>{
	window.location='/auth/twitter';
};
let logoutButton = ()=>{
	window.location='/logout';
};

let userPanel = ()=>{
	// userPanel_element = document.getElementById('userPanel');
	// username = userPanel_element[0].innerHTML.toString();
	if( username.includes('Login') ){
		userPanel_element.onclick = ()=>loginButton();
	}else{
		userPanel_element.onclick = ()=>logoutButton();
		userPanel_element.title = 'Click here to logout';
	}
};
userPanel();

let robo = document.getElementById('roboImage');
let roboText = document.getElementById('roboText');
let generateRobo = ()=>{
	if(roboText.value === ''){
		roboText.value = 'example';
	}
	robo.setAttribute('src',`https://robohash.org/${document.title.includes('monster') ? roboText.value+'?set=set2' : roboText.value }`);
	document.querySelector('.twitter-share-button').setAttribute('data-url',roboText);
};
roboText.addEventListener('change',generateRobo);


let choices = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890';
let choice;


let randomRobo = ()=>{
	choice = '';
	for (let i = 0 ; i < 10 ; i++){
		choice += choices[Math.floor( Math.random()*choices.length )];
	}
	robo.setAttribute('src',`https://robohash.org/${choice}`);
	roboText.setAttribute('value',choice);
	setTimeout(randomRobo,1000*2);
};
if(document.title.includes('Login')){
	randomRobo();
}

