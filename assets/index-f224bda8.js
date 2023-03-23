(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const g of t.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&d(g)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f=[{name:"Flatiron",location:"USA",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsa adipisci dolorum necessitatibus nostrum quod!",img:"./images/flatiron.jpg"},{name:"Ollantaytambo",location:"Peru",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsa adipisci dolorum necessitatibus nostrum quod!",img:"./images/ollantaytambo.jpg"},{name:"Antelope Canyon",location:"USA",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsa adipisci dolorum necessitatibus nostrum quod!",img:"./images/antelope-canyon.jpg"},{name:"Lake Louise",location:"Canada",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsa adipisci dolorum necessitatibus nostrum quod!",img:"./images/lake-louise.jpg"},{name:"The Walchen Lake",location:"Germany",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsa adipisci dolorum necessitatibus nostrum quod!",img:"./images/walchen.jpg"},{name:"Niagara",location:"USA",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsa adipisci dolorum necessitatibus nostrum quod!",img:"./images/niagara.jpg"},{name:"Maldives",location:"Asia",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsa adipisci dolorum necessitatibus nostrum quod!",img:"./images/maldives.jpg"},{name:"Eiffel Tower",location:"France",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsa adipisci dolorum necessitatibus nostrum quod!",img:"./images/eiffel.jpg"},{name:"Venice",location:"Italy",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsa adipisci dolorum necessitatibus nostrum quod!",img:"./images/venice.jpg"},{name:"Colliseum",location:"Italy",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsa adipisci dolorum necessitatibus nostrum quod!",img:"./images/colliseum.jpg"},{name:"Pisa",location:"Italy",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsa adipisci dolorum necessitatibus nostrum quod!",img:"./images/pisa.jpg"},{name:"Le Mont-Saint-Michel",location:"Italy",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsa adipisci dolorum necessitatibus nostrum quod!",img:"./images/sant-mishel.jpg"}];function q(){const i=document.querySelector(".pick__viewport"),a=5;let o=1;const d=Math.ceil(f.length/a),e=document.querySelector(".pick__count");e.textContent=`${o}/${d}`;let t=[...f];r(),l();const g=document.querySelector(".pick__next"),v=document.querySelector(".pick__prev");g.addEventListener("click",()=>{o=o<d?o+=1:d,r(),l()}),v.addEventListener("click",()=>{o=o>1?o-=1:1,r(),l()});const L=document.querySelector(".pick__filter-button"),_=document.querySelector(".pick__select");L.addEventListener("click",()=>{_.classList.toggle("filter__select--visible")}),_.addEventListener("click",s=>{if(s.target.tagName!=="LI")return;const n=s.target;document.querySelectorAll(".pick__option").forEach(u=>{u.classList.remove("filter__option--selected")}),n.classList.add("filter__option--selected");const c=n.dataset.value;f.sort((u,p)=>u[c].localeCompare(p[c])),_.classList.remove("filter__select--visible"),r(),l()});function b(s){const n=document.createElement("div");n.classList="place pick__item",n.dataset.name=s.name;const m=document.createElement("img");m.classList="place__image",m.setAttribute("alt","place"),m.setAttribute("src",s.img),n.append(m);const c=document.createElement("div");c.classList="place__details";const u=document.createElement("h2");u.classList="title__t2",u.innerText=s.name,c.append(u);const p=document.createElement("h4");p.classList="place__location title__t3",p.innerText=s.location,c.append(p);const y=document.createElement("p");return y.classList="place__description",y.innerText=s.description,c.append(y),n.append(c),n}function r(){t=f.slice((o-1)*a,o*a)}function l(){e.textContent=`${o}/${d}`,i.innerHTML="";for(let s of t){const n=b(s);n.addEventListener("click",m=>{const c=t.indexOf(s),u={...t[c]};t[c]={...t[0]},t[0]=u,l()}),i.append(n)}}}function E(){const i=document.querySelector(".recommendation__viewport"),a=document.querySelector(".recommendation__prev"),o=document.querySelector(".recommendation__next"),d=document.querySelectorAll(".recommendation__count");let e=1;const t=3,g=Math.ceil(f.length/t);let v=[...f];_(),L(),a.addEventListener("click",()=>{e=e>1?e-=1:1,_(),L()}),o.addEventListener("click",()=>{e=e<g?e+=1:g,_(),L()});function L(){d.forEach(r=>{r.innerText=`${e}/${g}`}),i.innerHTML="";for(const r of v)i.append(b(r))}function _(){v=f.slice((e-1)*t,e*t)}function b(r){const l=document.createElement("div");l.classList="spot";const s=document.createElement("div");s.classList="spot__photo";const n=document.createElement("img");n.classList="spot__image",n.setAttribute("alt",r.name),n.setAttribute("src",r.img),s.append(n),l.append(s);const m=document.createElement("h3");m.classList="spot__name title__t2",m.innerText=r.name,l.append(m);const c=document.createElement("h4");c.classList="spot__country title__t3",c.innerText=r.location,l.append(c);const u=document.createElement("p");u.classList="spot__description",u.innerText=r.description,l.append(u);const p=document.createElement("a");return p.classList="spot__link",p.setAttribute("href","/"),p.innerText="read more",l.append(p),l}}function S(){const i=document.querySelector(".nav-mobile"),a=document.querySelector(".header__burger"),o=document.querySelector(".nav-mobile__close");a.addEventListener("click",()=>{i.classList.add("nav-mobile--opened")}),o.addEventListener("click",()=>{i.classList.remove("nav-mobile--opened")}),i.addEventListener("click",()=>{i.classList.remove("nav-mobile--opened")})}function h(){const i=document.querySelector(".sub-form__input"),a=document.querySelector(".sub-form__button"),o=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;a.addEventListener("click",e=>{if(e.preventDefault(),console.log(i.value),!d(i.value)){i.classList.add("sub-form__input--error");return}i.value=""}),i.addEventListener("input",()=>{i.classList.contains("sub-form__input--error")&&i.classList.remove("sub-form__input--error")});function d(e){return!!o.test(i.value)}}q();E();S();h();
