const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");


function onLoginSubmit(event){
    event.preventDefault(); // 페이지가 새로고침되지 않도록 막아줌
    console.log(loginInput.value);
}

function handleLinkClick(event){
    event.preventDefault();
    alert("clicked!");
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);