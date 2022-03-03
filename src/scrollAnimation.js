const animatedScrollObserver =
new IntersectionObserver
((entries , animatedScrollObserver)=>{
  entries.forEach(entry =>{
    if(entry.isIntersecting) {
      entry.target.classList.add('enter');
      animatedScrollObserver.unobserve(entry.target)//pause the element
    }
  })//if entry is inside the dom
})


export default{
  bind(el){
    el.classList.add('before-enter');
    animatedScrollObserver.observe(el);
  },

}//then we should import it in main.js

//intersectionObserver method observe each entry differenciation related to its parent which here is dom




