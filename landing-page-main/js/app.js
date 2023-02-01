/**
 * Define Global Variables
 * 
*/
// too reduce reflow and rebuild

let allsection=document.querySelectorAll('section'); 
let ul =document.getElementById("navbar__list");

// end


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


 
// Navigation is built dynamically as an unordered list



  allsection.forEach(function section(section){ 
   
     let li = document.createElement('li');
     
   
      let name=section.getAttribute('data-nav'); 
      let id=section.getAttribute('id'); 
    
      li.innerHTML= `<a  class="menu__link id= "#${id}">${name}</a>`;   
      
      ul.appendChild(li); 
// When clicking an item from the navigation menu, the link should scroll to the appropriate section.
       li.addEventListener("click", function(event){
        event.preventDefault();
        section.scrollIntoView({behavior: "smooth",})
        
      })
    })
    
    

 

// creating add and remove function


const add =(conditional, section) => {
  if(conditional){
      section.classList.add('your-active-class');
      
  };
};

const remove = (section) => {
  section.classList.remove('your-active-class')}

// https://youtu.be/bvbgZ1DZeQM
// https://udacity.zoom.us/rec/play/tWUbT_RYEhJ037QfYbmigP_3BhcDYlrw4qF5FOsnuaExBLJX3MuOHXzcR4OXL9ZtFOQMd-Xo_sg1ikKo.-Lhbk5k1OLJ3ko2K?continueMode=true&_x_zm_rtaid=wz9udDcfR6ur08fvL14sLQ.1674145092402.934116eb430e2c8f5bdbe0fb8d4265c5&_x_zm_rhtaid=276
// https://www.w3schools.com/jsref/prop_style_csstext.asp


function offset(el) {return el.getBoundingClientRect().top+(document.documentElement.scrollTop)}


// which section is being viewed while scrolling through the page
// https://youtu.be/bvbgZ1DZeQM

  window.addEventListener("scroll",function activeclasssection(){
    allsection.forEach(section=>{
      const set = offset(section)
  
      
      inviewport = () => set < 150 && set >= -150;
      remove(section);
      add(inviewport(),section);
  });
    })



// Set nav as active


// can you help me in this part

const addnav =(conditional, nav) => {
  if(conditional){
      nav.classList.add('active');
      
  };
};
const removenav = (nav) => {
  nav.classList.remove('active')}

  let a =document.querySelectorAll('a')


  window.addEventListener("click",activeclassnav=>{
    a.forEach(nav=>{
      const set = offset(nav)
      inviewport = () => set < 150 && set >= -150;
      removenav(nav);
      addnav(inviewport(),nav);

    }

   )
  })


//  * End Main Functions
//  * Begin Events
//  * 
// */

