(()=>{
const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
// word reveal
$$('[data-words]').forEach(h=>{let i=0;const f=n=>[...n.childNodes].forEach(c=>{if(c.nodeType===3){const fr=document.createDocumentFragment();c.textContent.split(/(\s+)/).forEach(t=>{if(!t)return;if(/^\s+$/.test(t)){fr.append(' ');return}const w=document.createElement('span');w.className='w';const s=document.createElement('span');s.style.setProperty('--i',i++);s.textContent=t;w.append(s);fr.append(w)});c.replaceWith(fr)}else if(c.nodeType===1)f(c)});f(h)});
requestAnimationFrame(()=>setTimeout(()=>$('.hero').classList.add('go'),80));
// reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-in');io.unobserve(e.target)}}),{threshold:.15,rootMargin:'0px 0px -6% 0px'});
$$('.rv').forEach((el,i)=>{if(el.parentElement.classList.contains('bento'))el.style.setProperty('--d',(i%4)*.08+'s');io.observe(el)});
$$('.clip').forEach(el=>{const o=new IntersectionObserver(es=>{if(es[0].isIntersecting){el.classList.add('is-in');o.disconnect()}},{threshold:.25});o.observe(el.parentElement)});
// counters
const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;co.unobserve(e.target);const el=e.target,to=+el.dataset.to,t0=performance.now();const st=n=>{const p=Math.min(1,(n-t0)/1600),v=Math.round(to*(1-Math.pow(1-p,3)));el.textContent=v;if(p<1)requestAnimationFrame(st)};requestAnimationFrame(st)}),{threshold:.6});
$$('[data-to]').forEach(el=>co.observe(el));
// parallax
const px=$$('[data-px]');let tick=false;
const upd=()=>{tick=false;const vh=innerHeight;px.forEach(el=>{const r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>vh)return;const p=(r.top+r.height/2-vh/2)/vh;el.style.transform=`translate3d(0,${(-p*(+el.dataset.px)).toFixed(1)}px,0)`})};
addEventListener('scroll',()=>{if(!tick){tick=true;requestAnimationFrame(upd)}},{passive:true});upd();
// nav
const b=$('#burger'),m=$('#menu');
b.addEventListener('click',()=>{const o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
$$('a',m).forEach(a=>a.addEventListener('click',()=>{m.classList.remove('open');b.setAttribute('aria-expanded',false)}));
// lightbox
const lb=$('#lb'),li=$('#lbimg');
$$('.bi').forEach(f=>f.addEventListener('click',()=>{li.src=f.dataset.full;li.alt=$('b',f).textContent;lb.hidden=false}));
const cl=()=>{lb.hidden=true;li.src=''};
$('#lbx').addEventListener('click',cl);lb.addEventListener('click',e=>{if(e.target===lb)cl()});
addEventListener('keydown',e=>{if(e.key==='Escape')cl()});
// form
$('#dopyt').addEventListener('submit',e=>{e.preventDefault();$('#formok').hidden=false});
})();
