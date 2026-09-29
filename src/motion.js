const root=document.documentElement;
let lastY=window.scrollY;
window.addEventListener('pointermove',e=>{root.style.setProperty('--mx',e.clientX+'px');root.style.setProperty('--my',e.clientY+'px')},{passive:true});
window.addEventListener('scroll',()=>{const y=window.scrollY;document.body.classList.toggle('past-hero',y>window.innerHeight*.7);lastY=y},{passive:true});
document.addEventListener('DOMContentLoaded',()=>{document.querySelectorAll('.round-arrow,.contact-button').forEach(el=>{el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();el.style.transform='translate('+((e.clientX-r.left-r.width/2)*.12)+'px,'+((e.clientY-r.top-r.height/2)*.12)+'px)'});el.addEventListener('pointerleave',()=>{el.style.transform=''})})});