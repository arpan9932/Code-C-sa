let manu=document.querySelector('#manu');
let navbar=document.querySelector('.nav');

manu.onclick=() =>{
    manu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}



const sr=ScrollReveal({
    distance:'40px',
    duration:2500,
    reset:true
});
sr.reveal('.icon',{delay:200,origin:'left'});
sr.reveal('.nav',{delay:400,origin:'top'});
sr.reveal('#manu',{delay:500,origin:'top'});
sr.reveal('.bx bx-menu',{delay:520,origin:'right'});
sr.reveal('.home-text h1',{delay:600,origin:'left'});
sr.reveal('.home-text p',{delay:750,origin:'right'});
sr.reveal('.home-text span',{delay:800,origin:'left'});
sr.reveal('.share',{delay:850,origin:'bottom'});
sr.reveal('.home-img',{delay:900,origin:'right'}); 
sr.reveal('.maincontant',{delay:1000,origin:'right'});
sr.reveal('.contacts',{delay:1050,origin:'right'});
sr.reveal('.pcontent',{delay:1050,origin:'right'});
sr.reveal('.sm',{delay:1050,origin:'right'});