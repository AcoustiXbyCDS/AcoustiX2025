 document.getElementById('year').textContent = new Date().getFullYear();

    const header = document.getElementById('mainHeader');
    const setHeader = () => header.classList.toggle('transparent', window.scrollY > 60);
    setHeader(); window.addEventListener('scroll', setHeader);

    const revealables = document.querySelectorAll('.reveal, .info-card');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          if (e.target.classList.contains('slide-in-left') || e.target.classList.contains('slide-in-right')) {
            e.target.classList.add('slide-active');
          } else { e.target.classList.add('in'); }
          io.unobserve(e.target);
        }
      });
    }, { threshold: .35 });
    revealables.forEach(el => io.observe(el));

    const slides = document.querySelectorAll('.hero-slide');
    let current = 0;
    setInterval(() => {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, 4000);

    
window.addEventListener("load", function(){

  const loader = document.getElementById("page-loader");

  setTimeout(function(){

    loader.style.opacity = "0";

    setTimeout(function(){
      loader.style.display = "none";
    }, 600);

  },800);
  // ////////////about page/////////////
// Year
    document.getElementById('year').textContent = new Date().getFullYear();
  const header = document.getElementById('mainHeader');
    const setHeader = () => header.classList.toggle('transparent', window.scrollY > 60);
    setHeader(); window.addEventListener('scroll', setHeader);

    // Scroll reveal
    const revealables = document.querySelectorAll(
      '.section-title, .content-text, .content-section img, .team-card, footer .reveal'
    );
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          if(e.target.classList.contains('slide-in-left') || e.target.classList.contains('slide-in-right')){
            e.target.classList.add('slide-active');
          } else {
            e.target.classList.add('in');
          }
          io.unobserve(e.target);
        }
      });
    }, {threshold:.35});
    revealables.forEach(el => io.observe(el));

    if(document.getElementById('typed-text')){
new Typed('#typed-text', {
strings:[
"Where Sound Meets Design",
"Innovation in Every Detail",
"Acoustic Solutions for Modern Spaces"
],
typeSpeed:50,
backSpeed:25,
loop:true
});
}


});
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

if(hamburger){

hamburger.addEventListener("click", function(){

hamburger.classList.toggle("active");
mobileMenu.classList.toggle("active");

});

}