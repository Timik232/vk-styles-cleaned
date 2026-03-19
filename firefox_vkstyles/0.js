'use strict';
let mf=browser.runtime.getManifest(),
vk={url:mf.permissions?.filter(p=>p.includes('vk.com'))||['https://vk.com/*']},
menu=t=>browser.menus.create({id:t,title:browser.i18n.getMessage(t),contexts:['action']}),
icon=e=>{
	browser.action.setTitle({title:mf.short_name+': '+browser.i18n.getMessage(['on','off','err'][e])});
	let c=new OffscreenCanvas(48,48),c2=new OffscreenCanvas(48,48),x=c.getContext('2d'),g=x.createConicGradient(0,24,24);g.addColorStop(0,'#F70000');g.addColorStop(0.12,'#FF6A00');g.addColorStop(0.25,'#FFFF00');g.addColorStop(0.37,'#00EF33');g.addColorStop(0.5,'#00F9F9');g.addColorStop(0.62,'#0038F2');g.addColorStop(0.75,'#7A00F4');g.addColorStop(0.87,'#EA00A8');g.addColorStop(1,'#F70000');
	x.fillStyle=e?g:'#2787F5';x.arc(24,24,24,0,Math.PI*2);x.fill();
	if(e)x.beginPath(),x.fillStyle='#222222',x.arc(24,24,21,0,Math.PI*2),x.fill();
	if(e<2)x.fillStyle='white',x.fill(new Path2D('M7.6 18.2a2.9 2.4 70 0 1 4.6-1.9c1.8 4.5 5 14.5 11.2 14.7a2.9 2.4 0 0 1 0 5c-2.8 0-9.4.3-15.8-17.8m13.9-.9a2.5 3 0 0 1 5 0v5c.2 1.4 2 1.1 7.7-6.6a2.9 2.4-60 0 1 4 3c-5.5 7.8-9 9.8-11.7 9.8q-5 0-5-6m10.8 9.9a2.9 2.4 40 0 1 4-3q1 1 1.9 2.3a2.9 2.4 50 0 1-4 3l-1.9-2.3'));
	else x.strokeStyle='white',x.lineWidth=4,x.stroke(new Path2D('M18 16h-8v18h8m-6-9h5m12-1h-6v12m17-12h-6v12'));
	browser.action.setIcon({imageData:x.getImageData(0,0,48,48)})
},
j=async(e,a=0,k)=>{
	let t=await browser.tabs.query(vk).catch(()=>[]);
	t=(k==1?[t[0]]:k?t.filter(t=>k==t.id):t).filter(Boolean);
	await Promise.all(t.map(t=>browser.scripting.executeScript({target:{tabId:t.id},func:e,args:[a],world:'MAIN'}).catch(()=>{})))
},
t=async(e,a)=>{
	let o={mode:e?+!a.mode:a.mode!=void 0?a.mode:1,n:mf.short_name,url:mf.permissions?.filter(p=>p.includes('vk.com'))||mf.homepage_url}, c=(a='',b='')=>{a=a.split('.');b=b.split('.');for(let i=0,m=Math.max(a.length,b.length);i<m;i++){let n=+a[i]||0,o=+b[i]||0;if(o>n)return 0;if(n>o)return 1}return 0};
	e?await j(e=>window.st?st.m(e):location.reload(),o.mode):c(mf.version,a.v)&&(o.v=mf.version,o.C=0,await j(()=>location.reload()));
	icon(o.mode),await browser.storage.local.set(o),await browser.storage.local.set(o)
},
s=async e=>{
	let a=await browser.storage.local.get(['mode','v']).catch(()=>null);
	if(a?.v)return t(e,a);
	let b=await browser.storage.local.get(null).catch(()=>null);
	if(a&&b)return t(e,b);
	if(!e)browser.action.onClicked.addListener(()=>browser.tabs.create({url:'https://vk.com'})),icon(2)
};s();
browser.action.onClicked.addListener(async()=>{
	let e=await browser.tabs.query(vk).catch(()=>[]);
	return e[0]?e.find(e=>e.active)?s(1):browser.tabs.update(e[0].id,{active:true}):browser.tabs.create({url:'https://vk.com',index:0})
});
browser.menus.removeAll();menu('reset');menu('appReset');
browser.menus.onClicked.addListener(e=>{
	if(e.menuItemId=='reset')void j(()=>{window.st?st.ss():(localStorage.clear(),sessionStorage.clear(),location.reload())});
	if(e.menuItemId=='appReset')void j(()=>{localStorage.clear(),sessionStorage.clear(),indexedDB.deleteDatabase('st')},0,1),setTimeout(()=>{browser.storage.local.clear(),browser.runtime.reload()},100);
});
browser.commands.onCommand.addListener(async(e,t)=>{
	if(e=='eye'){
		let a=await browser.permissions.request({permissions:['activeTab']}).catch(()=>!1);
		if(!a)return;
		let i=await browser.tabs.captureVisibleTab().catch(()=>null);
		if(i)await j(a=>{st.eye(a)},i,t?.id||1)
	}else await j(a=>{st.k(a)},e,1)
});
void browser.runtime.setUninstallURL('');
browser.runtime.onStartup.addListener(()=>{})
