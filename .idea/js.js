let h2=document.querySelector("h2")
h2.textContent="靳朋永123";

function add(a,b) {
    return a+b;
}

let result=add(1,3);
alert(result);

let html=document.querySelector("html");
html.onclick=function () {
    alert('别戳我，我怕疼。');
}