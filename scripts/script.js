  // Toggle mobile menu visibility
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

//   Accordion 
const mountain1 = document.getElementById('mountain1');
mountain1.classList.add('bg-[#b0b4be]','text-[#414f6b]')
const mountain2 = document.getElementById('mountain2');
mountain2.classList.add('text-[#b0b4be]')
const schedule = document.getElementById('schedule');
function changeMountainToOne(element){
    schedule.innerText = "Moutain 1"
    if (mountain2.classList.contains('bg-[#b0b4be]','text-[#414f6b]')) {
        mountain2.classList.remove('bg-[#b0b4be]','text-[#414f6b]');
        mountain2.classList.add('text-[#b0b4be]');
        mountain1.classList.remove('text-[#b0b4be]');
         mountain1.classList.add('bg-[#b0b4be]','text-[#414f6b]');
      } 
      else{
        console.log("Nothing to do");
      }
}
function changeMountainToTwo(element){
    schedule.innerText = "Moutain 2"

    if (mountain1.classList.contains('bg-[#b0b4be]','text-[#414f6b]')) {
        mountain1.classList.remove('bg-[#b0b4be]','text-[#414f6b]');
        mountain1.classList.add('text-[#b0b4be]');
        mountain2.classList.remove('text-[#b0b4be]');
        

        mountain2.classList.add('bg-[#b0b4be]','text-[#414f6b]');
      } 
}

 // Get the "Go to Top" button element
 const goToTopBtn = document.getElementById("goToTopBtn");

 // Show or hide the button based on the scroll position
 window.addEventListener("scroll", () => {
   if (window.pageYOffset > 300) {
     goToTopBtn.style.display = "block";
   } else {
     goToTopBtn.style.display = "none";
   }
 });

 // Scroll to the top of the page when the button is clicked
 goToTopBtn.addEventListener("click", () => {
   window.scrollTo({ top: 0, behavior: "smooth" });
 });
