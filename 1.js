'use strict';
let L=localStorage, o={}, v, b=document.lastChild,st0=document.createElement('style'),st1=document.createElement('style'),st2=document.createElement('style'),cpw=document.createElement('div'),
r=(p,h,x)=>{x=new XMLHttpRequest();x.onreadystatechange=()=>x.readyState==4&&h(x.response);x.open('get',p,!0);x.send()},
a=e=>{(e?(a=0,document.body):b).append(cpw);b.append(st0,st1,st2);if(v)for(let e of document.querySelectorAll('audio'))e.remove()},
l=l=>{
	let e = Object.assign({},l); Object.assign(o,l); delete e.C;
	v = e.e||e.vp>0;
	e.m = !/(^|\.)m\./.test(location.host);
	e.l = chrome.runtime.getURL('');
	e.s = ['38.2,9.4,18.8,100|41.7,60,55,50','=Lobster, =Pacifico, =Marck+Script, =Bad+Script, =Caveat, =Lora, =Cormorant+Infant, =El+Messiri, =Neucha, =Kelly+Slab, =Gabriela, =PT+Mono, =Bellota, =Play, =Nunito, =Jost, =Didact+Gothic, =Rubik:wght@300, =Tenor+Sans, =Exo+2:wght@300, =Poiret+One, =Montserrat+Alternates, =Jura, =Open+Sans, =Montserrat, =Comfortaa','vk.com/video-168874636_456243146&thumb=Pc852124/v852124734/b4e17/_IXXYXYzUPY.jpg, vk.com/video-168874636_456239041&thumb=Pc847120/v847120686/ea6c3/4yIWbSc68J0.jpg, vk.com/video-168874636_456241281&thumb=Pc850528/v850528193/ae168/CujaozzK99w.jpg, vk.com/video-168874636_456239528&thumb=Pc846524/v846524980/14394b/BRCd7b3FIfM.jpg, vk.com/video-168874636_456239028&thumb=Pc850228/v850228207/1120b/y1HaK_xmsrM.jpg, vk.com/video-168874636_456241335'];
	e.hsl = e.hsl||e.s[0];
	e.fa = e.fa!=undefined?e.fa:e.s[1];
	e.ia = e.ia!=undefined?e.ia:e.s[2];
	cpw.dataset.s=JSON.stringify(e);a&&a();
	if(L._st||typeof l.C != 'object'){
		let C={}, g=3, s=(i,x)=>{
			if(i>1)C.C=x.replace(/\t\/\/[^\n]+\n/g,'').replace(/\t/g,'').replace(/\n/g,'').replace(/'\+ '/g,'').replace(/\}if/g,'};if').replace(/\(\{\}\)$/,'');
			if(i<2)x=x.split('**'), C[i?'I':'i']=x[0].replace(/\n\/\/[^\n]+/g,'').replace(/[^\S ]/g,''), C[i?'S':'s']=(/firefox/i.test(navigator.userAgent)?x[1].replace(/-webkit-mask/g,'mask').replace(/-webkit-slider-thumb/g,'-moz-range-thumb').replace(/-webkit-/g,'-moz-'):x[1]).replace(/[^\S ]/g,'');
			if(!--g)st1.textContent=e.m?C.I:C.i, cpw.dataset.c=C.C, st2.textContent=e.m?C.S:C.s, e.C=C, sync(e)
		};
		r(e.l+'2.js',x=>s(2,x));r(e.l+'css',x=>s(1,x));r(e.l+'mcss',x=>s(0,x))
	}else st1.textContent=e.m?l.C.I:l.C.i, cpw.dataset.c=l.C.C, st2.textContent=e.m?l.C.S:l.C.s
},
db={
	o:h=>new Promise(r=>{let i=indexedDB.open('st');i.onsuccess=()=>r(i.result);i.onupgradeneeded=()=>i.result.createObjectStore('db',{keyPath:'key'})}).then(h),
	t:o=>o.transaction('db','readwrite').objectStore('db'),
	g:(k,h)=>db.o(o=>new Promise(r=>{let t=db.t(o).get(k);t.onsuccess=()=>r(t.result&&t.result.val)}).then(h)),
	s:(k,v)=>db.o(o=>db.t(o).put({key:k,val:v}))
},
sync=e=>{
	e=e||JSON.parse(L.st_||'{}');
	try{
		db.s('sync',Object.assign(o,e));
		chrome.storage.local.set(e);
		if(e.ia && new TextEncoder().encode(e.ia).length>8188)e.ia=new TextDecoder().decode(new TextEncoder().encode(e.ia).slice(-8188)).split(', ').slice(1).join(', ');
		delete e.C;delete e.v;
		chrome.storage.sync.set(e);
	}catch(a){L.st_reload=1;location.reload()}
};
st0.textContent=L.st_bgc&&`:root{background:${L.st_bgc}!important}body,.cp_fg{display:none}`;
cpw.id='cpw';st0.id='st0';st1.id='st1';st2.id='st2';b.append(st0);document.readyState=='complete'?a(1):document.addEventListener('DOMContentLoaded',a);cpw.addEventListener('sync',()=>sync());
chrome.storage.local.get(null,(a={})=>a.z?l(a):chrome.storage.sync.get(null,(b={})=>Object.assign(b,a).z?l(b):db.g('sync',(c={})=>{l(Object.assign(c,b));sync(c)})))