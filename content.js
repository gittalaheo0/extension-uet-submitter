// get the name input
var name1 = document.querySelector("input[name=auth_user]");
// get the password input
var password1 = document.querySelector("input[name=auth_pass]");
// get the button to send
var btn = document.querySelector("input[name=accept]");

chrome.storage.local.get(["user1", "password1"], function(store){
	if(store.user1 && store.password1){
		name1.value = store.user1;
		password1.value = store.password1;
		btn.click();
	}
})
