const nav = document.getElementsByClassName("navBawah")
nav[0].addEventListener("click",(e)=>{
    window.location.href="index.html";
e.preventDefault()
})
nav[1].addEventListener("click",(e)=>{
    window.location.href="report.html"
    e.preventDefault()
})
nav[2].onclick = (e)=>{
    window.location.href="user.html"
    e.preventDefault();
}