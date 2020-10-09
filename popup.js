var user1 = document.querySelector("#name");
var password = document.querySelector("#password");
var input = document.querySelector(".btn");
var aa = document.querySelector("#aa");
// console.log(password);
// setting before loaded
chrome.storage.local.get(["user1", "password1"], function(store){
	if(store.user1 && store.password1){
		user1.value = store.user1;
		password.value = store.password1;
		aa.innerText = "Success. Automatic is actived!!";
		chrome.browserAction.setBadgeBackgroundColor("red")
		chrome.browserAction.setBadgeText({text: "ok!"})

	}
})

input.onclick = function(e){	
	if(user1.value.length>0 && password.value.length>0){
		chrome.storage.local.set({user1: user1.value});
		chrome.storage.local.set({password1: password.value});
		aa.innerText = "Success. Automatic is actived!!"

	}else{
		aa.innerText = "Vui lòng nhập đúng mssv và password"
	}
}