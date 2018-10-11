var gender = 1;
var skin = 0;
var glasses = 0;
var hair = 0;

function changeSkin1() {
	skin = 0;
	showAvatar();
}

function changeSkin2() {
	skin = 1;
	showAvatar();
}

function changeSkin3() {
	skin = 2;
	showAvatar();
}

function changeHair1(){
	hair = 0;
	showAvatar();
}

function changeHair2(){
	hair = 1;
	showAvatar();
}

function changeHair3(){
	hair = 2;
	showAvatar();
}

function changeHair4(){
	hair = 3;
	showAvatar();
}

function changeGlasses1(){
	glasses = 0;
	showAvatar();
}

function changeGlasses2(){
	glasses = 1;
	showAvatar();
}

function changeGenderW(){
	gender = 1;
	showAvatar();
}

function changeGenderM(){
	gender = 0;
	showAvatar();
}



function showAvatar(){
	if(gender == 1){
		if(skin == 0){
			if(hair == 0){
				if(glasses == 0){
					$("#imgAvatarCustom").attr('src','img/custom/customWoman/MP1ASL.png');
				}else{
					$("#imgAvatarCustom").attr('src','img/custom/customWoman/MP1AL.png');
				}
			}else if(hair == 1){
				if(glasses == 0){
					$("#imgAvatarCustom").attr('src','img/custom/customWoman/MP1RSL.png');
				}else{
					$("#imgAvatarCustom").attr('src','img/custom/customWoman/MP1RL.png');
				}
			}else if(hair == 2){
				if(glasses == 0){
					$("#imgAvatarCustom").attr('src','img/custom/customWoman/MP1CSL.png');
				}else{
					$("#imgAvatarCustom").attr('src','img/custom/customWoman/MP1CL.png');
				}
			}else if(hair == 3){
				if(glasses == 0){
					$("#imgAvatarCustom").attr('src','img/custom/customWoman/MP1NSL.png');
				}else{
					$("#imgAvatarCustom").attr('src','img/custom/customWoman/MP1NL.png');
				}
			}
		} else if(skin == 1){
			if(hair == 0){
				if(glasses == 0){
					$("#imgAvatarCustom").attr('src','img/custom/customWoman/MP2ASL.png');
				}else{
					$("#imgAvatarCustom").attr('src','img/custom/customWoman/MP2AL.png');
				}
			}else if(hair == 1){
				if(glasses == 0){
					$("#imgAvatarCustom").attr('src','img/custom/customWoman/MP2RSL.png');
				}else{
					$("#imgAvatarCustom").attr('src','img/custom/customWoman/MP2RL.png');
				}
			}else if(hair == 2){
				if(glasses == 0){
					$("#imgAvatarCustom").attr('src','img/custom/customWoman/MP2CSL.png');
				}else{
					$("#imgAvatarCustom").attr('src','img/custom/customWoman/MP2CL.png');
				}
			}else if(hair == 3){
				if(glasses == 0){
					$("#imgAvatarCustom").attr('src','img/custom/customWoman/MP2NSL.png');
				}else{
					$("#imgAvatarCustom").attr('src','img/custom/customWoman/MP2NL.png');
				}
			}
		} else if(skin == 2){
			if(hair == 0){
				if(glasses == 0){
					$("#imgAvatarCustom").attr('src','img/custom/customWoman/MP3ASL.png');
				}else{
					$("#imgAvatarCustom").attr('src','img/custom/customWoman/MP3AL.png');
				}
			}else if(hair == 1){
				if(glasses == 0){
					$("#imgAvatarCustom").attr('src','img/custom/customWoman/MP3RSL.png');
				}else{
					$("#imgAvatarCustom").attr('src','img/custom/customWoman/MP3RL.png');
				}
			}else if(hair == 2){
				if(glasses == 0){
					$("#imgAvatarCustom").attr('src','img/custom/customWoman/MP3CSL.png');
				}else{
					$("#imgAvatarCustom").attr('src','img/custom/customWoman/MP3CL.png');
				}
			}else if(hair == 3){
				if(glasses == 0){
					$("#imgAvatarCustom").attr('src','img/custom/customWoman/MP3NSL.png');
				}else{
					$("#imgAvatarCustom").attr('src','img/custom/customWoman/MP3NL.png');
				}
			}
		}
	}else if (gender == 0){
		if(skin == 0){
			if(hair == 0){
				if(glasses == 0){
					$("#imgAvatarCustom").attr('src','img/custom/customMan/P1ASL.png');
				}else{
					$("#imgAvatarCustom").attr('src','img/custom/customMan/P1AL.png');
				}
			}else if(hair == 1){
				if(glasses == 0){
					$("#imgAvatarCustom").attr('src','img/custom/customMan/P1RSL.png');
				}else{
					$("#imgAvatarCustom").attr('src','img/custom/customMan/P1RL.png');
				}
			}else if(hair == 2){
				if(glasses == 0){
					$("#imgAvatarCustom").attr('src','img/custom/customMan/P1CSL.png');
				}else{
					$("#imgAvatarCustom").attr('src','img/custom/customMan/P1CL.png');
				}
			}else if(hair == 3){
				if(glasses == 0){
					$("#imgAvatarCustom").attr('src','img/custom/customMan/P1NSL.png');
				}else{
					$("#imgAvatarCustom").attr('src','img/custom/customMan/P1NL.png');
				}
			}
		} else if(skin == 1){
			if(hair == 0){
				if(glasses == 0){
					$("#imgAvatarCustom").attr('src','img/custom/customMan/P2ASL.png');
				}else{
					$("#imgAvatarCustom").attr('src','img/custom/customMan/P2AL.png');
				}
			}else if(hair == 1){
				if(glasses == 0){
					$("#imgAvatarCustom").attr('src','img/custom/customMan/P2RSL.png');
				}else{
					$("#imgAvatarCustom").attr('src','img/custom/customMan/P2RL.png');
				}
			}else if(hair == 2){
				if(glasses == 0){
					$("#imgAvatarCustom").attr('src','img/custom/customMan/P2CSL.png');
				}else{
					$("#imgAvatarCustom").attr('src','img/custom/customMan/P2CL.png');
				}
			}else if(hair == 3){
				if(glasses == 0){
					$("#imgAvatarCustom").attr('src','img/custom/customMan/P2NSL.png');
				}else{
					$("#imgAvatarCustom").attr('src','img/custom/customMan/P2NL.png');
				}
			}
		} else if(skin == 2){
			if(hair == 0){
				if(glasses == 0){
					$("#imgAvatarCustom").attr('src','img/custom/customMan/P3ASL.png');
				}else{
					$("#imgAvatarCustom").attr('src','img/custom/customMan/P3AL.png');
				}
			}else if(hair == 1){
				if(glasses == 0){
					$("#imgAvatarCustom").attr('src','img/custom/customMan/P3RSL.png');
				}else{
					$("#imgAvatarCustom").attr('src','img/custom/customMan/P3RL.png');
				}
			}else if(hair == 2){
				if(glasses == 0){
					$("#imgAvatarCustom").attr('src','img/custom/customMan/P3CSL.png');
				}else{
					$("#imgAvatarCustom").attr('src','img/custom/customMan/P3CL.png');
				}
			}else if(hair == 3){
				if(glasses == 0){
					$("#imgAvatarCustom").attr('src','img/custom/customMan/P3NSL.png');
				}else{
					$("#imgAvatarCustom").attr('src','img/custom/customMan/P3NL.png');
				}
			}
		}
	}
	
}