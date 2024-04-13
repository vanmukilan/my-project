

    


/*==================== scroll reveal ====================*/
ScrollReveal({ 
    // reset: true,
    distance:'80px',
    duration:2000,
    delay:200
 });

 ScrollReveal().reveal('.home-content, .heading', {origin:'top'});
 ScrollReveal().reveal('.home-img, .services-container, .portfolio, .contact form', {origin:'bottom'});
 ScrollReveal().reveal('.home-content h1, .about-img', {origin:'left'});
 ScrollReveal().reveal('.home-content p, .about-content', {origin:'right'});

/*==================== typed js ====================*/
const typed = new Typed('.multiple-text',{
     strings: ['Frontend Developer'],
     typeSpeed:100,
     backSpeed:100,
     backdelay:1000,
     loop:true
});
