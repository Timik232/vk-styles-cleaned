'use strict';(async st_=>{
let L=localStorage,
w=window,
setTimeout=w.setTimeout,
setInterval=w.setInterval,
utoa=e=>btoa(unescape(encodeURIComponent(e))),
atou=e=>decodeURIComponent(escape(atob(decodeURIComponent(e)))),
Lg=(a,b,c)=>(c=Object.keys(L),c=c[c.findIndex(e=>new RegExp('audio\\w+'+a+'_'+id).test(e))],b?c:c&&L[c]),
Ls=(a,b,c)=>(c=Lg(a,1),c?(L[c]=b):b),
n=(a,b)=>b?Object.is(+a,Math.abs(a)):a||'',
S=(s,v)=>w[s]==void 0&&Object.defineProperty(w,s,{value:v}),
M=e=>lastMouse={x:e.x,y:e.y},
forEach=(s,h,e,c)=>{for(let i=0,a=(e||document)[c?'getElementsByClassName':'querySelectorAll'](s),l=a.length,w;i<l;i++)h(a[i],i)},
fe=e=>{e.target.tabIndex=-1;e.target.focus()},
ie=e=>[...e.parentNode.children].indexOf(e),
ce=e=>document.createElement(e||'div'),
ge=e=>document.getElementById(e),
gec=(e,p)=>(p||document).getElementsByClassName(e)[0],
fix=(e,d=2)=>Math.round(e*10**d)/10**d,
rnd=(max,min=0,t)=>{let r=Math.floor(min+Math.random()*(max+1-min));return t?[...Array(r)].map((e,i)=>(~~(Math.random()*(i?35:25)+(i?0:10))).toString(36)[Math.random()>.4?'toLowerCase':'toUpperCase']()).join(''):r},
clamp=(n,max=100,min=0,f=0)=>Math.min(max,Math.max(min,fix(n,f))),
hsl2rgb=(h,s,l)=>{let r,g,b,m,c,x;h/=60;if(h<0)h=6-(-h%6);h%=6;s=Math.max(0,Math.min(1,s/100));l=Math.max(0,Math.min(1,l/100));c=(1-Math.abs((2*l)-1))*s;x=c*(1-Math.abs((h%2)-1));if(h<1){r=c;g=x;b=0}else if(h<2){r=x;g=c;b=0}else if(h<3){r=0;g=c;b=x}else if(h<4){r=0;g=x;b=c}else if(h<5){r=x;g=0;b=c}else{r=c;g=0;b=x}m=l-c/2;return [r+m,g+m,b+m]},
rgb2hsl=(r,g,b,a)=>{if(typeof r=='object')[r,g,b]=r;else{a=/([.\d]+)[,\s]+([.\d]+)[,\s]+([.\d]+)[,\/\s]*([.\d]*)(%?)/.exec(r);if(a){if(a[4])a[4]*=a[5]?2.55:255}else{if(r[0]=='#')r=r.slice(1);if(r.length<6)r=r[0]+r[0]+r[1]+r[1]+r[2]+r[2]+(r[3]?r[3]+r[3]:'');a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{0,2})/i.exec(r);if(a)a=a.map(e=>parseInt(e,16));else return}r=a[1]/255;g=a[2]/255;b=a[3]/255;a=a[4]?a[4]/2.55:100}let n=Math.min(r,g,b),m=Math.max(r,g,b),d=m-n,h=0,s=0,l=(n+m)/2;if(d){s=l<.5?d/(m+n):d/(2-m-n);h=(r==m?(g-b)/d+(g<b?6:0):g==m?(b-r)/d+2:(r-g)/d+4)*60}return [fix(h,1),fix(s*100,1),fix(l*100,1)].concat(a?fix(a,1):[])},
dhtml=(e,h={'amp;':'&','#38;':'&','lt;':'<','#60;':'<','gt;':'>','#62;':'>','apos;':"'",'#39;':"'",'quot;':'"','#34;':'"','copy;':'©'},u={0:65533,128:8364,130:8218,131:402,132:8222,133:8230,134:8224,135:8225,136:710,137:8240,138:352,139:8249,140:338,142:381,145:8216,146:8217,147:8220,148:8221,149:8226,150:8211,151:8212,152:732,153:8482,154:353,155:8250,156:339,158:382,159:376})=>(e||'').replace(/&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,(e,n)=>e[1]=='#'?e.length<=3?e:(n=e[2].toLowerCase()=='x'?parseInt(e.slice(3),16):parseInt(e.slice(2)))>=1114111?'�':n>65535?String.fromCodePoint(n):String.fromCharCode(u[n]||n):h[e.slice(1)]||e),
d1251=(e,d)=>(d=new TextDecoder('windows-1251'),e.replace(/%[A-F][0-9A-F]/g,s=>d.decode(new Uint8Array([s.replace(/%/g,'0x')])))),
docTT=(e,t=1e3,a=docTT,d=document)=>{a.T?clearTimeout(a.T):a.t=d.title;d.title=e;a.T=setTimeout(()=>{a.T=0;d.title==e&&(d.title=a.t)},t)},
inpEr=(e,t=500)=>{e.setCustomValidity(1),setTimeout(()=>e.setCustomValidity(''),t)},
peer=()=>location.href.match(/(?:\/write|\/g?im.*?[?&]sel=|\/im\/convo\/)([-c]?\d+)/)?.at(1).replace(/^c(\d+)/,(e,d)=>2e9+ +d),
lang=()=>/^ru|^uk/.test(navigator.language),
Jc=(e,k)=>k?e.replace(/,0(?=,|\])/g,',').replace(/,+]$/,']'):e.replace(/,(?=,|\])/g,',0'),
Dc=e=>e.replace(/^I([\w-]+[A-Z][\w-]+)$/,'/s/v1/doc/$1?api=1').replace(/^V([\w-]+[A-Z][\w-]+)$/,'/s/v1/doc/$1').replace(/^I([\d-_]+)$/,'/doc$1?api=1').replace(/^V([\d-_]+)$/,'/doc$1').replace(/^P/,'//pp.userapi.com/'),
End=e=>{e.preventDefault(),e.stopPropagation()},
r=(m,p,a,h,s,e)=>{
	let x=new XMLHttpRequest();
	x.open(m?'post':'get',m?p:p+'?'+a,!h||s?true:false);
	h&&(x.onreadystatechange=()=>s==2?x.readyState==2&&h(x):x.readyState==4&&h(x.response));
	e&&(x.onerror=e);
	m&&x.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	m==2&&x.setRequestHeader('x-requested-with','XMLHttpRequest');
	x.send(a)
},
hue=e=>{				//log('hue('+e+')');
	if(T2)clearTimeout(T2);T2=(T2?setTimeout:f=>(f(),-1))(()=>{
	let t=st_.t!=void 0?+st_.t:0,hsl=[],h=[],s=[],l=[],a=[],x=n(st_.hsl).split('|');
	if(!x[t])x[t]='';for(let i=0,c=x.length;i<c;i++){let y=(x[i]||',,50,').split(',');h[i]=+y[0];s[i]=+y[1];l[i]=+y[2];a[i]=+y[3]}
	if(e){
		hh=h[t]=+cp_hh.value;
		hs=s[t]=+cp_hs.value;
		hl=l[t]=+cp_hl.value;
		ha=a[t]=+cp_ha.value;
		blb=+cp_blb.value;
		bfc=+cp_bfc.value;
		bfs=+cp_bfs.value;
		bfl=+cp_bfl.value;
		bfb=+cp_bfb.value;
		bfh=+cp_bfh.value;
		bfha=cp_bfha.classList.contains('a');
		bfi=+cp_bfi.value;
		bfp=+cp_bfp.value;
		bgmi=+cp_bgmi.classList.contains('a');
		bgm=+cp_bgm.value;
		bgv=+cp_bgv.value;
		bgn=+cp_bgn.value;
		for(let i=0,c=x.length;i<c;i++)hsl[i]=[h[i]||'',s[i]||'',l[i]||'',a[i]||''].join();
		st_.hsl=hsl.join('|');
		st_.bge=[blb||'',bfc!=50?bfc:'',bfs!=50?bfs:'',bfl!=50?bfl:'',bfb||'',bfha?'-'+bfh:bfh||'',bfi||'',bfp||'',bgmi?'-'+bgm:bgm||'',bgv||'',btr||'',bgn||''].join('|').replace(/\|+$/,'');
		//log(st_.hsl);
		sync(e,'hsl,bge')
	}
	//log({'hh':hh,'hs':hs,'hl':hl,'ha':ha,'blb':blb,'bfc':bfc,'bfs':bfs,'bfl':bfl,'bfb':bfb,'bfh':bfh,'bfha':bfha,'bfi':bfi,'bfp':bfp,'bgm':bgm,'bgmi':bgmi,'bgv':bgv,'btr':btr,'bgn':bgn});

	cp_cp.textContent=hsl2rgb(360-hh*3.6,hs,hl).map(e=>Math.round(e*255).toString(16)).map(e=>e[1]?e:'0'+e).join('');
	vch=1;

	if(bmf)cancelAnimationFrame(bmf),cpb.firstElementChild.style.cssText='';
	if(bgm){w.addEventListener('mousemove',M);let m=bgmi?-bgm:bgm,X=()=>m/10-m/5/innerWidth*lastMouse.x,Y=()=>m/10-m/5/innerHeight*lastMouse.y,x=X(),y=Y(),f=()=>{bmf=AF(f);x+=(X()-x)/20;y+=(Y()-y)/20;cpb.firstElementChild.style.cssText='transform:perspective(80vw) rotateY('+fix(-x/2.2)+'deg) rotateX('+fix(y/2)+'deg) translate('+fix(x)+'vw,'+fix(y)+'vh) scale('+fix(1+bgm/350)+')'};f()}else w.removeEventListener('mousemove',M),bmf=0;

	for(let i=0,c=h.length;i<c;i++)h[i]=(360-h[i]*3.6)|0;
	function ac(h,s,l){return hsl2rgb(h<180&&h>75?180:h,s,h<180&&h>60?l:l*.8).reduce((a,b)=>a+b)>=1.4};
	function wb(e,i=0){
		let n=st_.bgc||isNaN(h[6])?0:6,A=a[i]/100,B=hsl2rgb(h[n],s[n],n?l[n]:l[n]-5),C=hsl2rgb(h[i],s[i],l[i]),D=rgb2hsl(B.map((a,b)=>(1-A)*a+C[b]*A));
		e&&(A=a[e]/100,B=hsl2rgb(D[0],D[1],D[2]),C=hsl2rgb(h[e],s[e],l[e]),D=rgb2hsl(B.map((a,b)=>(1-A)*a+C[b]*A)));
		return ac(D[0],D[1],D[2])
	};

	let h0=(360-hh*3.6)|0
	,	l0=10+hl*.9
	,	a0=(100-a[0])/2
	,	a2=(100-a[2])/2
	,	avc=wb()
	,	toL=n=>avc?l[0]-n:l[0]+n
	,	g1='hsl('+h[1]+','+s[1]+'%,'+(l[1]+5)+'%)'
	,	g2='hsl('+h[1]+','+s[1]+'%,'+l[1]+'%)'
	,	g3='hsl('+h[1]+','+s[1]+'%,'+(l[1]-5)+'%)'
	,	g4='hsl('+h[1]+','+s[1]+'%,'+(l[1]-10)+'%)'
	,	g2f='hsl('+h[1]+','+s[1]+'%,'+l[1]+'%,'+fix((a[0]<75)?.5+a[0]/300:a[0]/100)+')'
	,	g3f='hsl('+h[1]+','+s[1]+'%,'+(l[1]-5)+'%,'+fix((a[0]<75)?.5+a[0]/300:a[0]/100)+')'
	,	lh=wb(0,2)?l[2]-80-a2:l[2]+80+a2
	,	l2=avc?l[0]-80-a0:l[0]+80+a0
	,	l3=avc?l[0]-65-a0:l[0]+65+a0
	,	l4=avc?l[0]-50-a0:l[0]+50+a0
	,	l5=avc?l[0]-40-a0:l[0]+40+a0
	,	lf='hsl(0,0%,'+clamp(ac(h[1],s[1],l[1])?l[1]-90:l[1]+90)+'%)'
	,	le='hsl(0,0%,'+clamp(l[1]>75?l2+10:l[1]<25?l2-10:l2)+'%)'
	,	lc='hsl(0,0%,'+clamp(l[1]>75?l3+10:l[1]<25?l3-10:l3)+'%)'
	,	l9='hsl(0,0%,'+clamp(l[1]>75?l4+10:l[1]<25?l4-10:l4)+'%)'
	,	l7='hsl(0,0%,'+clamp(l[1]>75?l5+10:l[1]<25?l5-10:l5)+'%)'
	,	n00=st_.bgc||isNaN(h[6])?'hsl('+h[0]+','+s[0]+'%,'+toL(-5)+'%)':'hsl('+h[6]+','+s[6]+'%,'+l[6]+'%)'
	,	n15='hsl('+h[0]+','+s[0]+'%,'+l[0]+'%)'
	,	n158='hsl('+h[0]+','+s[0]+'%,'+l[0]+'%,.5)'
	,	n15f='hsl('+h[0]+','+s[0]+'%,'+l[0]+'%,'+fix(a[0]<50?.5:a[0]/100)+')'
	,	n15b=blb?n15f:'hsl('+h[0]+','+s[0]+'%,'+l[0]+'%,'+fix(a[0]<90?.9:a[0]/100)+')'
	,	n15e='hsl('+h[0]+','+s[0]+'%,'+l[0]+'%,'+a[0]/100+')'
	,	n228='hsl('+h[0]+','+s[0]+'%,'+toL(5)+'%,'+a[0]/200+')'
	,	n22e='hsl('+h[0]+','+s[0]+'%,'+toL(5)+'%,'+a[0]/100+')'
	,	n22f='hsl('+h[0]+','+s[0]+'%,'+toL(5)+'%,'+fix(a[0]<75?.5+a[0]/300:a[0]/100)+')'
	,	n29e='hsl('+h[0]+','+s[0]+'%,'+toL(8)+'%,'+a[0]/100+')'
	,	n29f='hsl('+h[0]+','+s[0]+'%,'+toL(8)+'%,'+fix((a[0]<75)?.5+a[0]/300:a[0]/100)+')'
	,	n33f='hsl('+h[0]+','+s[0]+'%,'+toL(12)+'%,'+fix(a[0]<75?.5+a[0]/300:a[0]/100)+')'
	,	n333='hsl(0,0%,'+toL(20)+'%)'
	,	n444='hsl(0,0%,'+toL(27)+'%)'
	,	m15=hsl2rgb(h[0],s[0],l[0]).map(e=>fix(e,3))
	,	mg2=hsl2rgb(h[1],s[1],l[1]).map(e=>fix(e,3))
	,	mcc=hsl2rgb(0,0,clamp(l[1]>75?l4+10:l[1]<25?l4-10:l4)).map(e=>fix(e,3))
	,	vc='hsl('+h[4]+','+s[4]+'%,'+l[4]+'%)'
	,	bc=st_.bc?st_.bc==1?'hsl('+h[5]+','+s[5]+'%,'+l[5]+'%,'+a[5]/100+')':g2:'hsl('+h[0]+','+s[0]+'%,'+toL(8)+'%,'+a[0]/100+')'
	,	bs=1+st_.bt%2
	,	bsh=st_.hc==0?bc:st_.hc==1?g3f:'hsl('+h[2]+','+s[2]+'%,'+(l[2]-5)+'%,'+(a[2]/100)+')'
	,	bsa=n(st_.bs).split(' ')
	,	bsc=bsa[0]>1?'hsl('+h[9]+','+s[9]+'%,'+l[9]+'%,'+a[9]/100+')':bc
	,	bss=(bsa[2]-20)+'px '+(bsa[3]-20)+'px '+(bsa[4])+'px '+(bsa[5]-10)+'px '+bsc
	,	bssh=(bsa[2]-20)+'px '+(bsa[3]-20)+'px '+(bsa[4])+'px '+(bsa[5]-10)+'px '+(bsa[0]>1?'hsl('+h[9]+','+s[9]+'%,'+l[9]+'%,'+(st_.hc==2?a[2]/100:1)*a[9]/100+')':+bsa[0]?bsh:bc)
	,	em=n(st_.em).split('.')
	,	ra=n(st_.ra,1)?st_.ra/2:50
	,	k1=st_.kc==0?n29f:st_.kc<3?g3:'hsl('+h[10]+','+s[10]+'%,'+(l[10]-5)+'%,'+(a[10]/100)+')'
	,	k1h=st_.kc==0?n33f:st_.kc<3?g2:'hsl('+h[10]+','+s[10]+'%,'+l[10]+'%,'+(a[10]/100)+')'
	,	k2=st_.kc==1||st_.kc==3?n29f:k1
	,	k2h=st_.kc==1||st_.kc==3?n33f:k1h
	,	oc=st_.oc?'hsl('+h[11]+','+s[11]+'%,'+l[11]+'%)':g1
	,	Lc=st_.lc?'hsl('+h[12]+','+s[12]+'%,'+l[12]+'%)':g2
	,	uc=st_.uc?'hsl('+h[14]+','+s[14]+'%,'+l[14]+'%,'+(a[14]/100)+')':n33f;

	favColor=Math.abs(st_.fc)==0?['black','white']:Math.abs(st_.fc)==1?[g2,lf]:['hsl('+h[13]+','+s[13]+'%,'+l[13]+'%,'+(a[13]/100)+')','hsl(0,0%,'+clamp(ac(h[13],s[13],l[13])?l[13]-100:l[13]+100)+'%)'];fav();
	bsh=`0 0 0 ${bs}px ${bsh+(+bsa[0]?(bsa[1]==2?',inset '+bssh+','+bssh:(+bsa[1]?',inset ':',')+bssh):'')}`;
	bs=st_.bt<4?`0 0 0 ${bs}px ${bc+(+bsa[0]?(bsa[1]==2?',inset '+bss+','+bss:(+bsa[1]?',inset ':',')+bss):'')}`:'none';

	if(st_.tc==1){
		le='hsl('+h[1]+','+s[1]+'%,'+(avc?l[1]*.9:l[1]*1.05)+'%)';
		lc='hsl('+h[1]+','+s[1]+'%,'+l[1]+'%)';
		l9='hsl('+h[1]+','+(s[1]*.75)+'%,'+(avc?l[1]+10:l[1]*.9)+'%)';
		l7='hsl('+h[1]+','+(s[1]*.5)+'%,'+(avc?l[1]+20:l[1]*.8)+'%)';
		n333='hsl('+h[1]+','+(s[1]/4)+'%,'+toL(20)+'%)';
		n444='hsl('+h[1]+','+(s[1]/4)+'%,'+toL(27)+'%)';
		mcc=hsl2rgb(h[1],s[1]*.75,avc?l[1]+10:l[1]*.9).map(e=>fix(e,3))
	}
	if(st_.tc==2){
		le='hsl('+h[3]+','+s[3]+'%,'+(avc?l[3]*.9:l[3]*1.05)+'%)';
		lc='hsl('+h[3]+','+s[3]+'%,'+l[3]+'%)';
		l9='hsl('+h[3]+','+(s[3]*.75)+'%,'+(avc?l[3]+10:l[3]*.9)+'%)';
		l7='hsl('+h[3]+','+(s[3]*.5)+'%,'+(avc?l[3]+20:l[3]*.8)+'%)';
		n333='hsl('+h[3]+','+(s[3]/4)+'%,'+toL(20)+'%)';
		n444='hsl('+h[3]+','+(s[3]/4)+'%,'+toL(27)+'%)';
		mcc=hsl2rgb(h[3],(s[3]*.75),(avc?l[3]+10:l[3]*.9)).map(e=>fix(e,3))
	}
	let hc=st_.hc==0?blb?n15e:n15f:st_.hc==1?g2f:'hsl('+h[2]+','+s[2]+'%,'+l[2]+'%,'+(a[2]/100)+')'
	,	hc2=st_.hc==0?blb?n22e:n22f:st_.hc==1?g3f:'hsl('+h[2]+','+s[2]+'%,'+(l[2]+(wb(0,2)?-5:5))+'%,'+(a[2]/100)+')'
	,	ht=st_.ht==1?g2:st_.ht==2?'hsl('+h[8]+','+s[8]+'%,'+l[8]+'%)':st_.hc==2?'hsl(0,0%,'+clamp(l[1]>75?lh+10:l[1]<25?lh-10:lh)+'%)':st_.hc==1?lf:le
	,	mc=st_.mc?st_.mc==1?g2:st_.mc==2?'hsl('+h[7]+','+s[7]+'%,'+l[7]+'%)':lc:'hsl(0,0%,100%)'
	,	md=mc.replace(')',',.2)')
	,	ms=!st_.mc?' filter="drop-shadow(1px 1px 0 black) drop-shadow(0 0 1px black)"':''
	,	tsc=st_.ts==2?'hsl('+h[16]+','+s[16]+'%,'+l[16]+'%,'+(a[16]/100)+')':'hsl('+h[0]+','+s[0]+'%,'+toL(-5)+'%)'
	,	ts=st_.ts?'0 0 2px '+tsc+',0 0 5px '+tsc+',0 0 10px '+tsc:'none'
	,	ds=st_.ts?'drop-shadow(0 0 1px '+tsc+') drop-shadow(0 0 3px '+tsc+')':'none'
	,	k1t=st_.kc==0?le:st_.kc<3?lf:'hsl(0,0%,'+clamp(wb(10)?l[10]-90:l[10]+90)+'%)'
	,	k2t=st_.kc==1||st_.kc==3?le:k1t
	,	cc=st_.c?st_.c[st_.c[0]=='-'?1:0]==1?g2:st_.c[st_.c[0]=='-'?1:0]==2?'hsl('+h[15]+','+s[15]+'%,'+l[15]+'%,'+(a[15]/100)+')':le:''
	,	cs=cc.replace(/((%)|,)\d*\)$/,'$2,'+n(st_.c).split("'")[15]/100+')')
	,	bgp=['center','top','bottom','left top','left','left bottom','right top','right','right bottom'][st_.ip]+'/'+['cover','contain no-repeat','auto no-repeat','100% 100%','auto'][st_.ir]
	,	obf=['cover','contain','none','fill','cover'][st_.ir]
	,	obp=['center','top','bottom','left top','left','left bottom','right top','right','right bottom'][st_.ip]
	,	bgt=[0,'-1,1','-1,-1','1,-1'][btr]
	,	o={ms:ms,ds:ds,mc:mc,oc:oc,ht:ht,k1t:k1t,lc:lc,l9:l9,g1:g1,g2:g2,g3:g3,g4:g4,le:le,l7:l7,Lc:Lc,n15:n15,n15b:n15b,n15e:n15e,n15f:n15f,n22e:n22e,k2t:k2t,n29e:n29e,n333:n333,n22f:n22f,n444:n444,ra:ra};

	for(let [e,a] of [['n15',m15],['hue',mg2],['ccc',mcc]])e=ge(e).firstChild.values.baseVal,e[4].value=a[0],e[9].value=a[1],e[14].value=a[2];

	st0.textContent=':root{'
	+ '--obf:'+obf+';'
	+ '--obp:'+obp+';'
	+ '--bg:'+(st_.iv==0&&st_.i?'url('+Dc(st_.i)+') '+bgp:'none')+';'
	+ '--blb:'+(blb?'blur('+blb+'px)':'none')+';'
	+ '--bfc:hsl(0,0%,'+(50-bfc/2)+'%);'
	+ '--bfh:hsl('+((360-bfh*3.6)|0)+',100%,50%);'
	+ '--bfha:'+(bfha?fix(15-bfh*.14)+'s linear infinite hue':'none')+';'
	+ '--bfs:hsl('+((360-bfh*3.6)|0)+','+bfs+'%,50%);'
	+ '--bfp:hsl(34,'+(bfp/2)+'%,69%);'
	+ '--bfl:hsl(0,0%,'+bfl+'%);'
	+ '--bfi:hsl(0,0%,'+bfi+'%);'
	+ '--bgt:'+(bgt?'scale('+bgt+')':'none')+';'
	+ '--bgf:'+((bfb?' blur('+bfb+'px) url(#na)':'')+(bfi?' invert('+(bfi/100)+')':'')+(bfp?' sepia('+(bfp/100)+')':'')+(bfs!=50?' saturate('+(bfs<50?bfs/50:1+(bfs-50)*.18)+')':'')+(bfc!=50?' contrast('+(bfc?bfc/50:.01)+')':'')+(bfl!=50?' brightness('+(bfl<50?bfl?bfl/50:.01:1+(bfl-50)*.08)+')':'')+(!bfha&&bfh?' hue-rotate('+((360-bfh*3.6)|0)+'deg)':'')||'none')+';'
	+ '--bgn:'+(bgn?`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512"><filter id="a"><feTurbulence type="fractalNoise" baseFrequency="1.5" seed="412"/><feColorMatrix values="0 .75 0 -.3 .1 0 .75 0 -.3 .1 0 .75 0 -.3 .1 0 0 0 0 1"/><feBlend mode="hard-light"/></filter><rect opacity="${fix(bgn/100,3)}" filter="url(%23a)" width="100%" height="100%"/></svg>')`:'none')+';'
	+ '--bgna:'+(bgn?fix(1-bgn*.005)+'s step-end infinite bgn':'none')+';'
	+ '--bgv:'+(bgv?'inset 0 0 '+clamp(5+bgv*.95,30,0,2)+'vmin '+fix(bgv*.3)+'vmin rgba(0,0,0,'+fix(.75+bgv/400)+')':'none')+';'
	+ '--eee:'+le+';'
	+ '--ccc:'+lc+';'
	+ '--n999:'+l9+';'
	+ '--n777:'+l7+';'
	+ '--n00:'+n00+';'
	+ '--n15:'+n15+';'
	+ '--n158:'+n158+';'
	+ '--n15f:'+n15f+';'
	+ '--n15b:'+n15b+';'
	+ '--n15e:'+n15e+';'
	+ '--n228:'+n228+';'
	+ '--n22e:'+n22e+';'
	+ '--n22f:'+n22f+';'
	+ '--n29e:'+n29e+';'
	+ '--n29f:'+n29f+';'
	+ '--n33e:hsl('+h[0]+','+s[0]+'%,'+toL(12)+'%,'+a[0]/100+');'
	+ '--n33f:'+n33f+';'
	+ '--n333:'+n333+';'
	+ '--n39e:hsl('+h[0]+','+s[0]+'%,'+toL(14)+'%,'+a[0]/100+');'
	+ '--n44f:hsl('+h[0]+','+s[0]+'%,'+toL(27)+'%,'+fix(a[0]<75?.5+a[0]/300:a[0]/100)+');'
	+ '--n444:'+n444+';'
	+ '--ha:hsl(0,0%,'+(50-ha/2)+'%);'
	+ '--h:hsl('+h0+',100%,50%);'
	+ '--s:hsl(0,0%,'+l0+'%);'
	+ '--s2:hsl('+h0+','+hs+'%,'+l0+'%);'
	+ '--vc:'+vc+';'
	+ '--bc:'+bc+';'
	+ '--bs:'+bs+';'
	+ '--bsc:'+bsc+';'
	+ '--tsc:'+tsc+';'
	+ '--ts:'+ts+';'
	+ '--ds:'+ds+';'
	+ '--icon:url(#ccc)'+(st_.ts?' '+ds:'')+';'
	+ '--hue:url(#hue)'+(st_.ts?' '+ds:'')+';'
	+ '--emoji_size:'+(n(em[0],1)?1+em[0]/10:1)+';'
	+ '--emoji_tt_size:'+(n(em[0],1)?1+em[1]/40:1)+';'
	+ '--stiсker_size:'+(n(em[0],1)?.8+(em[2]||5)/10:1.3)+';'
	+ '--ra:'+ra+'%;'
	+ '--mc:'+mc+';'
	+ '--md:'+md+';'
	+ '--hc:'+hc+';'
	+ '--hc2:'+hc2+';'
	+ '--hbs:'+bsh+';'
	+ '--ht:'+ht+';'
	+ '--oc:'+oc+';'
	+ '--lc:'+Lc+';'
	+ '--fc:'+favColor[0]+';'
	+ '--uc:'+uc+';'
	+ '--cc:'+cc+';'
	+ '--cs:'+cs+';'
	+ '--g:hsl('+h0+',100%,75%);'
	+ '--g0:hsl('+h0+',100%,'+l0+'%);'
	+ '--g1:'+g1+';'
	+ '--g2:'+g2+';'
	+ '--g3:'+g3+';'
	+ '--g4:'+g4+';'
	+ '--k1:'+k1+';'
	+ '--k1h:'+k1h+';'
	+ '--k2:'+k2+';'
	+ '--k2h:'+k2h+';'
	+ '--k1t:'+k1t+';'
	+ '--k2t:'+k2t+'}'+(st_.fs?'*{font-size:'+st_.fs+'px!important}':'');
	if(!st1.A)st1.A=st1.textContent;if(st1.A)st1.textContent=st1.A.replace(/\${([^}]+)}/g,(a,b)=>o[b]);L.st_bgc=st_.mode?n00:'';D&&(CSS.registerProperty=null)
	},0)
},
fav=e=>{				//log('fav('+e+')');
	if(!favColor)return;
	let o=document.querySelector('link[rel="shortcut icon"]'), m=n(e?fav.i=e:fav.i||o&&(o.i||o.href)).match(/fav_(vk_|)([^._]+)/i), p={
		logo:'M10 11.6q1 0 1.2 1 2.3 6.5 4.3 7.8.8.3.8-.7V15q0-1.3-.6-2.2-.5-.5-.3-1 .3-.3.5-.3h4.4q.8 0 .8.8v6q0 1.2.7.8 2-1.4 4.3-6.7.3-.8 1.2-.9h3q.9 0 .7.8-.4 2.1-3.8 7-.4.6 0 1.2 4 4 4.4 5.8.2 1-1.1 1h-2.9q-.5 0-1.2-.8-3.4-4-4.6-4-.7 0-.7.9v2.9q0 1.1-2.4 1-7.5-.6-12.1-13.4-.8-2.4.4-2.4',
		play:'M13.5 8.5c0-1 .8-1.5 2-.5l12 10q1 1 0 2l-12 10c-1.2 1-2 .5-2-.5',
		pause:'M14.5 8.5q2 0 2 2v17q0 2-2 2h-1q-2 0-2-2v-17q0-2 2-2M24.5 8.5q2 0 2 2v17q0 2-2 2h-1q-2 0-2-2v-17q0-2 2-2',
		video:'M15 11.6a1 1 0 0 0-1.4.8 30 30 0 0 0 0 13 1 1 0 0 0 1.4.8 30 30 0 0 0 10.8-6.5 1 1 0 0 0 0-1.6A30 30 0 0 0 15 11.6m-6.3-.2a6 6 0 0 1 7.9-4.5 35 35 0 0 1 12.6 7.6 6 6 0 0 1 0 8.9A35 35 0 0 1 16.7 31a6 6 0 0 1-7.9-4.5 35 35 0 0 1-.3-14',
		testers:'M19 6.5a5.5 4 0 10 .01 0m-7 5a1.5 1 0 0014 0v12a1 1 0 01-14 0m1 2l-3 1a1 1 0 01-1-2l3-1m0-4h-4a1 1 0 010-2h4m0-3.2l-3-2a1 1 0 011-2l2 1.2m14 0l2-1.2a1 1 0 011 2l-3 2m0 3.2h4a1 1 0 010 2h-4m0 4l3 1a1 1 0 01-1 2l-3-1m-7-6v9a1 1 0 002 0v-10a1 1 0 00-2 0',
		im:'M25.5 9q6 0 6 6v6q0 6-6 6h-4c-9 7-8 7-7 0h-2q-6 0-6-6v-6q0-6 6-6',
		im1:'M17.5 7.5q3 0 3 3v18.5a1 1 0 01-3 0v-17q0-1.5-1.5-1.5a1 1 0 010-3',
		im2:'M19.5 7.5q6 0 6 6v1q0 6-6 6h-2q-3 0-3 3v1q0 3 3 3h6a1 1 0 010 3h-6q-6 0-6-6v-1q0-6 6-6h2q3 0 3-3v-1q0-3-3-3h-5a1 1 0 010-3',
		im3:'M15 7.5h5q6 0 6 6v1.5q0 3-2 4 2 1 2 4v1.5q0 6-6 6h-6a1 1 0 010-3h6q3 0 3-3v-1q0-3-3-3h-3a1 1 0 010-3h3q3 0 3-3v-1q0-3-3-3h-6a1 1 0 010-3',
		im4:'M21.5 9a1 1 0 013 0v20a1 1 0 01-3 0v-12q1.5 3-3 3h-1q-6 0-6-6v-5a1 1 0 013 0v5q0 3 3 3h1q3 0 3-3',
		im5:'M19.5 30.5q6 0 6-6v-1q0-6-6-6h-2q-3 0-3-3v-1q0-3 3-3h6a1.5 1.5 0 000-3h-6q-6 0-6 6v1q0 6 6 6h2q3 0 3 3v1q0 3-3 3h-5a1.5 1.5 0 000 3',
		im6:'M22.5 30.5h-5q-6 0-6-6v-11q0-6 6-6h6a1 1 0 010 3h-6.5q-2.5 0-2.5 2.5v3.5q1-1 4-1h1.5q6 0 6 6v3q0 6-6 6m0-3q3 0 3-3v-3q0-3-3-3H18q-3 0-3 3v3q0 3 3 3',
		im7:'M21.5 7.5q3 0 3 3v18.5a1 1 0 01-3 0v-17q0-1.5-1.5-1.5h-6a1 1 0 010-3',
		im8:'M15 7.5h5q6 0 6 6v1.5q0 3-2 4 2 1 2 4v1.5q0 6-6 6h-2q-6 0-6-6v-1.5q0-3 2-4-2-1-2-4v-1.5q0-6 6-6m0 3q-3 0-3 3v1q0 3 3 3h2q3 0 3-3v-1q0-3-3-3m-2 10q-3 0-3 3v1q0 3 3 3h2q3 0 3-3v-1q0-3-3-3',
		im9:'M15 7.5h5q6 0 6 6v11q0 6-6 6h-6a1 1 0 010-3h6.5a1 1 0 000-5h-3q-6 0-6-6v-3q0-6 6-6m0 3q-3 0-3 3v3q0 3 3 3H20q2 0 3 1v-7q0-3-3-3',
		im10:'M16.5 10a1 1 0 015 0v6.5h6.5a1 1 0 010 5h-6.5v6.5a1 1 0 01-5 0v-6.5h-6.5a1 1 0 010-5h6.5'
	};
	if(!o)o=ce('link'),o.rel='shortcut icon';document.head&&document.head.append(o);m&&(o.i='fav_'+m[2]);w.icoNode=o;
	o.href=`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38"><rect fill="${st_.mode?favColor[0]:'%232787F5'}" width="38" height="38" rx="${n(st_.fc,1)?10:19}"/><path fill="${st_.mode?favColor[1]:'white'}" d="${p[m?m[2]:'logo']}"/></svg>`
},
plus=e=>{
	if(e==1)return false;
},
less=e=>{},
copy=e=>{
	navigator.clipboard.writeText(e)
},
sync=(e,k,s)=>{	//log('sync('+e+','+k+','+s+')');
	switch(e){
		case 1:let a=sync.a||{},T=sync.T;k.split(',').forEach(e=>{a[e]=(o.st?o.st:st_)[e],o.st&&(o.st[e]=a[e])});sync.a=a;if(T)clearTimeout(T);sync.T=setTimeout(()=>{try{L.st_=JSON.stringify(a)}catch(e){L.clear();L.st_=JSON.stringify(a)};sync(4);sync.a={};!s&&h(e)},200);break;
		case 2:o.st?(o.st=Object.assign(o.st,JSON.parse(L.st_))):(st_=Object.assign(st_,JSON.parse(L.st_)));
		case 3:st.ap();st.pt();st.io();st.q();st.sl();st.ol();st.op();st.em();st.po();st.ra();st.pc();st.rm();st.imn();st.ima();st.imr();st.imu();st.nl();st.ab();st.fc();st.oc(),st.lc(),st.kc();st.uc();st.vp();st.ar();st.e();st.es();st.vc();st.fs();st.bgs();st.bgr();st.bgp();st.bga();st.bt();st.bc();st.bs();st.ts();st.tc();st.hc();st.ht();st.mc();st.mb();st.mm();st.mf();st.bgc();st.bg(0,n(st_.i));st.fn(0,n(st_.f));c();st.t();st.btr();st.aw();h();break;
		case 4:cpw.dispatchEvent(new CustomEvent('sync'))
	}
},
opt=(e,k,t,c,o,f)=>{
	let l=opt.l;if(l&&l.className)l.className='',l.textContent=gec('a',l).textContent;
	return c?e==1&&k==void 0?
	(opt.l=c,c.style.setProperty('--l',c.offsetLeft+'px'),c.className='o',c.textContent='',o.forEach((e,i)=>{let b=ce();b.textContent=e;b.k=i;c.append(b);if(i==t)b.className='a',c.style.setProperty('--t',b.offsetTop+'px')}),0)
	:(c.removeAttribute('class'),c.removeAttribute('style'),c.textContent=o[Math.abs(l=(k==void 0?t:k))],f(+l),l!=t||e>1):0
},
st={
s:()=>{
	let X = getComputedStyle(cp).width;
	if(cp.a){
		cp.a=0;setTimeout(()=>{w.cp_video&&cp_video.remove();b.classList.remove('s')},225);
		cp.animate([{transform:'none'},{transform:`translateX(${X})`}],250)
	}else{
		cp.a=1;b.classList.add('s');
		cp.animate([{transform:`translateX(${X})`},{transform:'none'}],250);
		forEach('.hba video[preload="none"]',e=>e.preload='metadata');
		forEach('.cp_hb[img]',e=>{e.removeAttribute('img');e.style.backgroundImage='url('+Dc(e.dataset.b.replace(/^.*&thumb=/,'')).replace(/^(y+).{2}(t+).{3}(.{5})(.*)$/,'//i1.$1$2img$3vi/$4/hqdefault.jpg').replace(/^(.{5})(.{5})\d+\/([^/]+)$/,'//i.$1cdn$2video/$3-d_200x150').replace(/^(c[mcbou\.]{7}\/)(\w+\/)(.+)$/,'//$3')+')'})
	}
	if(!st.s.b){
		st.s.b=1;let g=e=>(End(e),e.clipboardData||w.clipboardData).getData('text');
		cp.addEventListener('click',e=>{
			let a,s=0,k,E=e.target,A=e=>E.classList.toggle('a');
			if(!E.id){
				if(E.closest('span'))s=1,k=E.k;
				if(a=E.closest('.cp_hf,.cp_hb'))a=a.dataset.b;
				E=E.closest('[id]')
			}
			if(k==void 0)opt();
			if(E)switch(E.id){
				case 'cp_hp':h(0,-1);break;
				case 'cp_hn':h(0,1);break;
				case 'cp_bl':st_.t=0;st.t(cp_bl);break;
				case 'cp_ac':st_.t=1;st.t(cp_ac);break;
				case 'cp_oc':st.oc(s,k);break;
				case 'cp_lc':st.lc(s,k);break;
				case 'cp_fc':st.fc(s,k);break;
				case 'cp_fr':A();st.fc(2);break;
				case 'cp_hc':st.hc(s,k);break;
				case 'cp_ht':st.ht(s,k);break;
				case 'cp_tc':st.tc(s,k);break;
				case 'cp_bgc':st.bgc(s,k);break;
				case 'cp_mc':st.mc(s,k);break;
				case 'cp_mb':st.mb(1);break;
				case 'cp_mm':st.mm(1);break;
				case 'cp_mf':st.mf(1);break;
				case 'cp_bt':st.bt(s,k);break;
				case 'cp_bc':st.bc(s,k);break;
				case 'cp_bgf':A()&&E.nextElementSibling.scrollIntoView({behavior:'smooth'});break;
				case 'cp_ts':st.ts(s,k);break;
				case 'cp_bs':e.target.closest('.cp_s')?(A(),st.t()):st.bs(s,1,k);break;
				case 'cp_kc':st.kc(s,k);break;
				case 'cp_uc':st.uc(s,k);break;
				case 'cp_bst':st.bs(1,2,k);break;
				case 'cp_u':End(e);st.u(1);break;

				case 'cp_v':if(E!=e.target)s?st_.vp>0&&st.vo(-1):st.v();break;
				case 'cp_vp':E!=e.target&&st.vp([].indexOf.call(E.children,e.target)+1);break;
				case 'cp_va':A();st.vb(1);sync(1,'vb');break;
				case 'cp_vc':st.vc(s,k);break;

				case 'cp_f':e.target.closest('.w')&&st.f();break;
				case 'cp_fhb':e.target.closest('.c')?copy(a.replace(/^F([\w-]+[A-Z][\w-]+).*/,'vk.com/s/v1/doc/$1').replace(/^F([\d-_]+).*/,'vk.com/doc$1').replace(/^(=.*)/,'fonts.google.com/share?selection.family$1')):a&&st.fn(1,a,e.target.closest('.x')?1:0);break;

				case 'cp_b':e.target.closest('.w')&&st.b();break;
				case 'cp_bfha':case 'cp_bgmi':A();hue(1);break;
				case 'cp_bgs':st.bgs(s,k);break;
				case 'cp_bgsr':st.bgs(2);break;
				case 'cp_bgr':st.bgr(s,k);break;
				case 'cp_bgp':st.bgp(s,k);break;
				case 'cp_btr':st.btr(s,k);break;
				case 'cp_bga':A();st.bga(1);sync(1,'bga');break;
				case 'cp_bhb':e.target.closest('.c')?copy(a.replace(/^[IV]([\w-]+[A-Z][\w-]+)$/,'vk.com/s/v1/doc/$1').replace(/^[IV]([\d-_]+)$/,'vk.com/doc$1').replace(/^P/,'pp.userapi.com/').replace(/&thumb=.+/,'').replace(/^([uyot]+)[.mobce]+/,'$1.be').replace(/^(c[mcbou\.]{7}\/)(\w+).*$/,'$1view/$2').replace(/^(v[ceiom\.]{8}\/\w+).*$/,'$1')):a&&st.bg(1,a,e.target.closest('.x')?1:0);break;

				case 'cp_c':e.target.closest('.w')&&c(1,0);break;
				case 'cp_c0':c(s,-1,k);break;
				case 'cp_c6':c(s,6,k);break;
				case 'cp_c7':c(s,7,k);break;
				case 'cp_c8':c(s,8,k);break;
				case 'cp_c9':c(1,9);break;
				case 'cp_ca':c(s,10,k);break;
				case 'cp_cc':c(s,12,k);break;
				case 'cp_ce':c(1,13);break;

				case 'cp_gs':st.gs();break;
				case 'cp_af':st.t(),A();break;
				case 'cp_q':st.q(1);break;
				case 'cp_ap':st.ap(1);break;
				case 'cp_pt':st.pt(1);break;
				case 'cp_is':A();st.is(()=>E.className='',()=>E.className='e');break;
				case 'cp_io':st.io(1);break;
				case 'cp_sl':st.sl(1);break;
				case 'cp_ol':st.ol(1);break;
				case 'cp_op':st.op(1);break;
				case 'cp_em':st.em(1,1);break;
				case 'cp_po':st.po(1,1);break;
				case 'cp_ra':st.ra(1,1);break;
				case 'cp_pc':st.pc(1);break;
				case 'cp_rm':st.rm(1);break;
				case 'cp_imn':st.imn(1);break;
				case 'cp_ima':st.ima(1);break;
				case 'cp_imr':st.imr(1);break;
				case 'cp_imub':st.imu(1);break;
				case 'cp_aw':st.aw(1);break;
				case 'cp_nl':st.nl(1);break;
				case 'cp_ed':st.eye();break;

				case 'cp_ab':case 'cp_abf':case 'cp_abg':case 'cp_abp':case 'cp_abh':case 'cp_aba':case 'cp_abr':case 'cp_abc':case 'cp_abm':case 'cp_abm1':case 'cp_abm2':case 'cp_abm3':case 'cp_abm4':case 'cp_abim':case 'cp_abs':A(),st.ab(1)
			}
		});
		cp.addEventListener('keydown',e=>{
			let E=e.target,x,y,xy=()=>{switch(e.keyCode){case 37:x=-1;y=0;break;case 38:x=0;y=-1;break;case 39:x=1;y=0;break;case 40:x=0;y=1};return x||y};
			switch(E.id){
				case 'cp_cp':/[a-f\d]/i.test(e.key)&&(E.textContent.length<8||getSelection().type=='Range'||e.key.length>1)||e.ctrlKey&&/86|67|65/.test(e.keyCode)?e:End(e);e.keyCode==13&&st.t(0,rgb2hsl(E.textContent));break;
				case 'cp_bsc':xy()&&st.bs(1,-1,x,y);End(e);break;
				case 'cp_c4':xy()&&c(1,2,x,y);End(e);break;
				default:E.type=='range'&&E.setAttribute('step',e.ctrlKey?25:e.shiftKey?10:e.altKey?.1:1)
			}
		});
		cp.addEventListener('keyup',e=>{
			let E=e.target;
			switch(E.id){
				case 'cp_fi':if(e.keyCode==13)st.fn(1,E.value),E.value='';break;
				case 'cp_bi':if(e.keyCode==13)st.bg(1,E.value),E.value='';break;
				case 'cp_cb':if(e.keyCode==13)st.fn(2,E.value);break;
				default:E.type=='range'&&E.value==Math.floor(E.value)&&E.removeAttribute('step')
			}
		});
		cp.addEventListener('input',e=>{
			switch(e.target.id){
				case 'cp_vg':case 'cp_vvb':case 'cp_vbs':case 'cp_vbr':case 'cp_vbR':case 'cp_vbt':case 'cp_vba':case 'cp_vbb':st.vb(1);break;
				case 'cp_bsb':case 'cp_bss':st.bs(1);break;
				case 'cp_bgav':cp_bga.classList.add('a');st.bga(1);break;
				case 'cp_es':case 'cp_et':case 'cp_ek':st.em(1);break;
				case 'cp_ps':st.po(1);break;
				case 'cp_rav':st.ra(1);break;
				case 'cp_c1':case 'cp_c2':case 'cp_c3':case 'cp_cd':c(1,1);break;
				case 'cp_fs':T1&&clearTimeout(T1);T1=setTimeout(()=>st.fs(1,+cp_fs.value),50);break;
				case 'cp_cp':break;
				case 'cp_imuc':st.imuc(cp_imuc.value+'33');break;
				default:hue(-1)
			}
		});
		cp.addEventListener('change',e=>setTimeout(()=>{
			switch(e.target.id){
				case 'cp_vg':case 'cp_vvb':case 'cp_vbs':case 'cp_vbr':case 'cp_vbR':case 'cp_vbt':case 'cp_vba':case 'cp_vbb':sync(1,'vb');break;
				case 'cp_bsb':case 'cp_bss':sync(1,'bs');break;
				case 'cp_bgav':sync(1,'bga');break;
				case 'cp_es':case 'cp_et':case 'cp_ek':sync(1,'em');break;
				case 'cp_ps':sync(1,'po');break;
				case 'cp_rav':sync(1,'ra');break;
				case 'cp_c1':case 'cp_c2':case 'cp_c3':case 'cp_cd':sync(1,'c');break;
				case 'cp_fs':break;
				default:sync(1,'hsl,bge')
			}
		},0));
		cp.addEventListener('contextmenu',e=>{
			switch(e.target.id){
				case 'cp_bsc':case 'cp_c4':End(e);break;
				case 'cp_u':End(e);D&&log(L.st_)
			}
		});
		cp.addEventListener('mousedown',e=>{
			let a=(a,b,c)=>{let x=e.x-e.offsetX, y=e.y-e.offsetY, p=e=>a(1,b,e.shiftKey?-1:clamp(e.x-x-8,24),e.ctrlKey?-1:clamp(e.y-y-8,24)), m=e=>e.button==0&&p(e), s=e=>{sync(1,c);w.removeEventListener('mousemove',m)};w.addEventListener('mousemove',m);w.addEventListener('mouseup',s,{once:1});p(e.button==0?e:{x:x+20,y:y+20})};
			switch(e.target.id){
				case 'cp_bsc':a(st.bs,0,'bs');break;
				case 'cp_c4':a(c,3,'c')
			}
		});
		cp.addEventListener('mouseenter',fe);
		cpo.addEventListener('mouseenter',fe);
		cp_u.addEventListener('mouseenter',e=>st.tt(cp_u.parentElement,l.u,-5));
		cp_gs.addEventListener('mouseenter',e=>e.target.focus());
		cp_gs.addEventListener('paste',e=>st.ss(g(e)));
		cp_cp.addEventListener('paste',e=>st.t(0,rgb2hsl(g(e))));
		cp_fi.addEventListener('paste',e=>st.fn(1,g(e)));
		cp_cb.addEventListener('paste',e=>st.fn(2,g(e)));
		cp_bi.addEventListener('paste',e=>st.bg(1,g(e)));
		cp.addEventListener('dragenter',e=>{let f=(el,h)=>{let a=el.getBoundingClientRect(),b=el.nextElementSibling.getBoundingClientRect(),x1=a.x+a.width-e.x,y1=a.y+a.height+b.height-e.y;if(!plus(1)&&x1>=0&&x1<=a.width&&y1>=0&&y1<=a.height+b.height)el.classList.add('o'),!el.classList.contains('a')&&h();else if(el.classList.contains('o'))el.classList.remove('o'),h(-1)};f(cp_b,st.b);f(cp_f,st.f)});
		cp.addEventListener('drop',e=>{let a=e.target,b=e.dataTransfer.getData('text');a.closest('#cp_gs')&&st.ss(b);a.closest('#cp_b,#cp_bi')&&st.bg(1,b);a.closest('#cp_f,#cp_fi')&&st.fn(1,b);forEach('.cp_t.o',e=>e.classList.remove('o'),cp);End(e)});
		forEach('[data-tt]',e=>{e.setAttribute('onmouseenter',e.dataset.tt);e.removeAttribute('data-tt')},cp)
	}
},
t:(e,c)=>{			//log('st.t('+e+','+c+')');
	let t=st_.t||0;
	let h=[],s=[],li=[],a=[],x=n(st_.hsl).split('|'),b=n(st_.bge).split('|');if(!x[t])x[t]='';
	for(let i=0,c=x.length;i<c;i++){let y=(x[i]||',,50,').split(',');h[i]=+y[0];s[i]=+y[1];li[i]=+y[2];a[i]=+y[3]}
	if(e){cp_t.a=cp_t.a&&cp_t.e==e?0:1;cp_t.e=e;cp_t.style.top=(cp_t.a?e.offsetTop+e.offsetHeight+5:-500)+'px';e=0;cp_t.animate([{opacity:0},{opacity:1}],150)}else if(!c)cp_t.a=0,cp_t.removeAttribute('style');
	if(c)h[t]=(360-c[0])/3.6,s[t]=c[1],li[t]=c[2],a[t]=t==1?a[t]:c[3],e=1;
	if(h[t]==Math.floor(h[t]))cp_hh.removeAttribute('step');else cp_hh.setAttribute('step',.1);hh=cp_hh.value=h[t];cp_hh.dataset.title=l.Hue;
	if(s[t]==Math.floor(s[t]))cp_hs.removeAttribute('step');else cp_hs.setAttribute('step',.1);hs=cp_hs.value=s[t];cp_hs.dataset.title=l.Saturation;
	if(li[t]==Math.floor(li[t]))cp_hl.removeAttribute('step');else cp_hl.setAttribute('step',.1);hl=cp_hl.value=li[t];cp_hl.dataset.title=l.Brightness;
	if(a[t]==Math.floor(a[t]))cp_ha.removeAttribute('step');else cp_ha.setAttribute('step',.1);ha=cp_ha.value=a[t];cp_ha.dataset.title=['off',l.Transparent][[1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1][t]];
	blb=cp_blb.value=+b[0]||0;
	bfc=cp_bfc.value=n(b[1])!=''?+b[1]:50;
	bfs=cp_bfs.value=n(b[2])!=''?+b[2]:50;
	bfl=cp_bfl.value=n(b[3])!=''?+b[3]:50;
	bfb=cp_bfb.value=+b[4]||0;
	bfha=!n(b[5],1);cp_bfha.classList[bfha?'add':'remove']('a');
	bfh=cp_bfh.value=Math.abs(b[5])||0;
	bfi=cp_bfi.value=+b[6]||0;
	bfp=cp_bfp.value=+b[7]||0;
	bgmi=!n(b[8],1);cp_bgmi.classList[bgmi?'add':'remove']('a');
	bgm=cp_bgm.value=Math.abs(b[8])||0;
	bgv=cp_bgv.value=+b[9]||0;
	btr=+b[10]||0;
	bgn=cp_bgn.value=+b[11]||0;
	hue(e)
},
hc:(e,k)=>{			//log('st.hc('+e+','+k+')');
	opt(e,k,st_.hc||0,cp_hc.lastElementChild,[l.Auto,l.FromAccent,l.YourColor],t=>{
		st_.hc=t;cp_hc.classList[t==2?'add':'remove']('p');
		if(e!=void 0)st_.t=t,st.t(t==2&&cp_hc)
	})&&sync(e,'hc')
},
tc:(e,k)=>{			//log('st.tc('+e+','+k+')');
	opt(e,k,st_.tc||0,cp_tc.lastElementChild,[l.Auto,l.FromAccent,l.YourColor],t=>{
		st_.tc=t;cp_tc.classList[t==2?'add':'remove']('p');
		if(e!=void 0)st_.t=[0,1,3][t],st.t(t==2&&cp_tc)
	})&&sync(e,'tc')
},
vc:(e,k)=>{			//log('st.vc('+e+','+k+')');
	opt(e,k,st_.vc||0,cp_vc.lastElementChild,[l.FromAccent,l.YourColor,l.RainbowColor,l.RgbColor],t=>{
		st_.vc=t;cp_vc.classList[t==1?'add':'remove']('p');
		if(e!=void 0)st_.t=[1,4,0,0][t],st.t(t==1&&cp_vc)
	})&&sync(e,'vc')
},
bc:(e,k)=>{			//log('st.bc('+e+','+k+')');
	opt(e,k,st_.bc||0,cp_bc.lastElementChild,[l.Auto,l.YourColor,l.FromAccent],t=>{
		st_.bc=t;cp_bc.classList[t==1?'add':'remove']('p');
		if(e!=void 0)st_.t=[0,5,1][t],st.t(t==1&&cp_bc)
	})&&sync(e,'bc')
},
bgc:(e,k)=>{		//log('st.bgc('+e+','+k+')');
	opt(e,k,st_.bgc==void 0?1:st_.bgc||0,cp_bgc.lastElementChild,[l.YourColor,l.Auto],t=>{
		st_.bgc=t;cp_bgc.classList[t==0?'add':'remove']('p');
		if(e!=void 0)st_.t=[6,0][t],st.t(t==0&&cp_bgc)
	})&&sync(e,'bgc')
},
mc:(e,k)=>{			//log('st.mc('+e+')');
	if(st_.mc==void 0||st_.mc>3)st_.mc=3;
	opt(e,k,st_.mc,cp_mc.lastElementChild,[l.Contrasting,l.FromAccent,l.YourColor,l.FromText],t=>{
		st_.mc=t;cp_mc.classList[t==2?'add':'remove']('p');
		b.classList.remove('mc','mg','me');
		t&&b.classList.add(['mc','mg','me'][t-1]);
		if(e!=void 0)st_.t=[0,1,7,[0,1,3][st_.tc]][t],st.t(t==2&&cp_mc)
	})&&sync(e,'mc')
},
ht:(e,k)=>{			//log('st.ht('+e+','+k+')');
	opt(e,k,st_.ht||0,cp_ht.lastElementChild,[l.Auto,l.FromAccent,l.YourColor],t=>{
		st_.ht=t;cp_ht.classList[t==2?'add':'remove']('p');
		if(e!=void 0)st_.t=[0,1,8][t],st.t(t==2&&cp_ht)
	})&&sync(e,'ht')
},
kc:(e,k)=>{			//log('st.kc('+e+','+k+')');
	opt(e,k,st_.kc||0,cp_kc.lastElementChild,[l.Auto,l.part+l.FromAccent,l.all+l.FromAccent,l.part+l.in+l.YourColor,l.all+l.in+l.YourColor],t=>{
		st_.kc=t;cp_kc.classList[t>2?'add':'remove']('p');
		if(e!=void 0)st_.t=[0,1,1,10,10][t],st.t(t>2&&cp_kc)
	})&&sync(e,'kc')
},
oc:(e,k)=>{			//log('st.oc('+e+','+k+')');
	opt(e,k,st_.oc||0,cp_oc.lastElementChild,[l.FromAccent,l.YourColor],t=>{
		st_.oc=t;cp_oc.classList[t==1?'add':'remove']('p');
		if(e!=void 0)st_.t=[1,11][t],st.t(t==1&&cp_oc)
	})&&sync(e,'oc')
},
lc:(e,k)=>{			//log('st.lc('+e+','+k+')');
	opt(e,k,st_.lc||0,cp_lc.lastElementChild,[l.FromAccent,l.YourColor],t=>{
		st_.lc=t;cp_lc.classList[t==1?'add':'remove']('p');
		if(e!=void 0)st_.t=[1,12][t],st.t(t==1&&cp_lc)
	})&&sync(e,'lc')
},
fc:(e,k)=>{			//log('st.fc('+e+','+k+')');
	opt(e,k,Math.abs(st_.fc)||0,cp_fc.lastElementChild,[l.Standard,l.FromAccent,l.YourColor],t=>{
		if(e!=2)cp_fr.classList[n(st_.fc,1)?'remove':'add']('a');
		st_.fc=cp_fr.classList.contains('a')?'-'+t:t;
		cp_fc.classList[t==2?'add':'remove']('p');
		if(e!=void 0)st_.t=[0,1,13][t],e==2?fav():st.t(t==2&&cp_fc)
	})&&sync(1,'fc')
},
uc:(e,k)=>{			//log('st.uc('+e+','+k+')');
	opt(e,k,st_.uc||0,cp_uc.lastElementChild,[l.Auto,l.YourColor],t=>{
		st_.uc=t;cp_uc.classList[t==1?'add':'remove']('p');
		if(e!=void 0)st_.t=[0,14][t],st.t(t==1&&cp_uc)
	})&&sync(e,'uc')
},
mb:e=>{				//log('st.mb('+e+')');
	let t=st_.mb=e?st_.mb<1?++st_.mb:0:st_.mb||0;
	b.classList[t?'add':'remove']('mb');
	cp_mb.classList[t?'add':'remove']('a');
	sync(e,'mb')
},
mm:e=>{				//log('st.mm('+e+')');
	let t=st_.mm=e?st_.mm<1?++st_.mm:0:st_.mm||0;
	b.classList[t?'add':'remove']('mm');
	cp_mm.classList[t?'add':'remove']('a');
	sync(e,'mm')
},
mf:e=>{				//log('st.mb('+e+')');
	let t=st_.mf=e?st_.mf<1?++st_.mf:0:st_.mf||0;
	b.classList[t?'add':'remove']('mf');
	cp_mf.classList[t?'add':'remove']('a');
	sync(e,'mf')
},
m:e=>{				//log('st.m('+e+')');
	st_.mode=e;[st0,st1,st2].forEach(s=>(st_.less>0?0:e)?s.removeAttribute('media'):s.media='none');
	fav();w.cur&&o();L.st_bgc=getComputedStyle(b).getPropertyValue('--n00');
	forEach('#page_header_wrap,#page_wrap>div>.scroll_fix',e=>e.style.width=b.clientWidth+'px');
	if(st_.vo)st.vo(0);if(st_.bo)st.bo(0)
},
bt:(e,k)=>{			//log('st.bt('+e+','+k+')');
	opt(e,k,st_.bt==void 0?2:+st_.bt,cp_bt.lastElementChild,[l.Standard+' 1',l.Standard+' 2',l.Rounded+' 1',l.Rounded+' 2',l.WithoutSpaces],t=>{
		st_.bt=t;b.classList.remove('ns','rb');t>1&&b.classList.add([0,0,'rb','rb','ns'][t]);cp_bc.classList[t<4?'add':'remove']('a')
	})&&(st.t(),sync(e,'bt'))
},
bs:(e,k,x,y)=>{	//log('st.bs('+e+','+k+','+x+','+y+')');
	let a=(st_.bs=n(st_.bs)).split(' '), el=cp_bs, o=[l.off,l.FromBorder,l.YourColor];
	if(a[0]>2)a[0]=0;
	if(k==1)opt(e,x,+a[0]||0,el.lastElementChild,o,t=>{a[0]=t;st_.t=[0,[0,5,1][st_.bc],9][t],st.t(t==2&&el)});
	if(k==-1)a[2]=clamp(+a[2]+x,40),a[3]=clamp(+a[3]+y,40);
	if(k==0)a[2]=~x?Math.round(x/.6):a[2],a[3]=~y?Math.round(y/.6):a[3];else if(isNaN(a[2]+a[3]))a[2]=a[3]=20;
	if(k==2)opt(e,x,a[1]||0,cp_bst,l.Inset,t=>a[1]=t);
	if(e){
		a[4]=Math.round(cp_bsb.value);
		a[5]=Math.round(cp_bss.value/5);
		st_.bs=a.join(' ');
		hue();sync(+!!k,'bs')
	}else{
		el.lastElementChild.textContent=o[+a[0]];
		cp_bst.textContent=l.Inset[a[1]||0];
		cp_bsb.value=a[4]||0;
		cp_bss.value=(a[5]||10)*5
	}
	el.classList[a[0]==2?'add':'remove']('p');
	cp_bsc.style.setProperty('--p',(a[2]*.6)+'px '+(a[3]*.6)+'px')
},
ts:(e,k)=>{			//log('st.ts('+e+','+k+')');
	opt(e,k,st_.ts||0,cp_ts.lastElementChild,[l.off,l.FromBlock,l.YourColor],t=>{
		st_.ts=t;cp_ts.classList[t==2?'add':'remove']('p');
		if(e!=void 0)st_.t=[0,6,16][t],st.t(t==2&&cp_ts)
	})&&sync(e,'ts')
},
f:e=>{
	if(e<0&&st_.fa)return;
	if(e||cp_f.classList.contains('a')){
		cp_f.classList.remove('a');
		st.fn(1,'')
	}else{
		if(plus(1))return plus();
		cp_f.classList.add('a');
		document.querySelectorAll('#cp_f+.w .cp_ht')[1].classList[st_.fa==''?'add':'remove']('hidden');
		st.fn(1,n(st_.fa).split(', ').splice(-1)[0])
	}
},
fn:(e,f,x)=>{		//log('st.fn('+e+','+f+','+x+')');
	let fa=n(st_.fa), u='', s=0, fr=/([^/]+)\.(ttf|otf|woff2|woff)/, err=()=>{inpEr(cp_fi),w.topError&&topError(l.DocError,{dt:5})}, doc=(d,i)=>r(0,d+i,'',r=>{let o=r.responseURL.match(fr);o?st.fn(e,'F'+i+'/'+o[1].replace(/_/g,' ')+'.'+o[2]):err();r.abort()},2,err);
	if(f!=void 0){
		try{f=f.match('fonts.google')?'='+f.match(/(\/specimen\/|family=)([\w+:@,.]+)/)[2]:f.trim().replace(/^https?:/,'').replace(/['"<>]/g,'').replace(/\s+/g,' ').replace(/, /g,',').slice(0,255)}catch(r){return inpEr(cp_fi)}
		if(e==1&&!x&&st_.F==f)return;
		if(f||e==2){
			if(f.match('vk.com\/doc'))return doc('/doc',f.match(/^.*(?:vk\.com\/doc)([\w-]+).*/)[1]);
			if(f.match('vk.com\/s\/v1\/doc'))return doc('/s/v1/doc/',f.match(/^.*(?:vk\.com\/s\/v1\/doc\/)([\w-]+).*/)[1]);
			if(f[0]=='=')f=f.replace(/(:ital.*@)\d/,'$11').replace(/:(\d+)[,\d]*$/,':wght@$1');
			if(e==2)return c(1,11,f);
			let ma=50, a=fa?fa.split(', '):[], al=a.length;
			for(let i=0;i<al;i++){
				if(a[i].match(/fonts.google.*family=/))a[i]=a[i].match(/family(=[\w+:@,.]*)/)[1];
				if(a[i][0]=='=')a[i]=a[i].replace(/:(\d+)[,\d]*$/,':wght@$1');
				if(a[i].split(':')[0]==f.split(':')[0])s=a[i];
				if(s)a[i]=a[i+1]
			}
			if(!s&&al>=ma)a=a.slice(1);
			a[(s||al>=ma)?al-1:al]=f;
			if(x)a.splice(-1,1);
			st_.fa=a.join(', ');
			if(st_.fa==''){
				document.querySelectorAll('#cp_f+.w .cp_ht')[1].classList.add('hidden')
			}else{
				document.querySelectorAll('#cp_f+.w .cp_ht')[1].classList.remove('hidden');
				cp_f.classList.add('a')
			}
			if(w.cp_fhb){
				let h='', ft, fw, ff;
				for(let i=0,c=a.length;i<c;i++){
					if(a[i][0]=='='){
						ft=(u+=(u?'&family=':'')+a[i].replace(/^[^=]*=/,''),a[i].match(/^[^=]*=([^&"':?\s|]*).*/)[1].replace(/\+/g,' '));
						fw=a[i].match(/\d{3}$/)?a[i].match(/\d{3}$/)[0]:0
					}else if(fr.test(a[i])){
						ft=a[i].match(fr)[1];
						ff=`<style>@font-face{font-family:'${ft}';src:local('${ft}'),url(${a[i].replace(/^F([\w-]+[A-Z][\w-]+).*/,'/s/v1/doc/$1').replace(/^F([\d-_]+).*/,'/doc$1')});font-display:swap}</style><div class="f">${a[i].match(fr)[2]}</div>`
					}
					h=`<div class="cp_hf" data-b="${a[i]}" style="--f:${ft?"'"+ft+"'"+(fw?';--w:'+fw:''):a[i]}">${n(ff)}<div class="c"></div><div class="x"></div>${ft?ft+(fw?'<div class="w">'+fw+'</div>':''):a[i]}</div>`+h;
					ft=fw=ff=0
				}
				cp_fhb.innerHTML=h
			}
			if(x)f=st_.f==f?'':st_.f
		}else cp_f.classList.remove('a');

		for(let i=st3.sheet.cssRules.length;i--;)st3.sheet.cssRules[i].selectorText==':root'&&st3.sheet.removeRule(i);
		if(u&&(!s&&f[0]=='='||u.length>n(st.fn.u).length)&&st3.sheet.cssRules.length)st3.sheet.removeRule();
		if(u&&(!s&&f[0]=='='||u.length>n(st.fn.u).length||!st3.sheet.cssRules.length))st.fn.u=u,st3.sheet.insertRule('@import url(//fonts.googleapis.com/css2?display=swap&family='+u+')',0);
		if(f)st3.sheet.insertRule(':root{'+('--f:'+(f[0]=='='?'"'+f.match(/^(?:[^=]*=([^"|&:?\s]*)).*/)[1].replace(/\+/g,' ')+'"'+(f.match(/\d{3}$/)?';--w:'+f.match(/\d{3}$/)[0]:''):fr.test(f)?'"'+f.match(fr)[1]+'"':f))+'}',st3.sheet.cssRules.length);
		st_.F=st_.f=f;
		sync(e,'f,fa')
	}
},
fs:(e,k)=>{			//log('st.fs('+e+')');
	let t=st_.fs=e?k?clamp(k,24,8,1):'':st_.fs;
	cp_fs.value=k?k:t?t:'';cp_fs.className=t?'a':'';
	if(e)hue(),sync(1,'fs')
},
v:e=>{
	if(!e&&plus(1))return plus();
	let t=Math.abs(st_.vp)||4;
	st.vp(e||cp_v.classList.contains('a')?(st.t(),-t):t)
},
vo:e=>{				//log('st.vo('+e+')');
	if(st_.bo||e==void 0&&!cpo.isConnected)return;
	st_.vo=e=e<0?!cpo.isConnected:e==void 0?st_.vo:e;
	e?cpv.append(cpo):cpo.remove();
	b.style.height=e?b.offsetHeight+'px':'';
	if(IO)e?IO.disconnect():(o.M=0,o());
	b.classList[e?'add':'remove']('vo');
	cp_v.firstChild.textContent=l.Visualizer+(e?'+':'');

	let a=w.ap?ap._currentAudio:audio.getCurrent(), svg=e=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">${e}</svg>`;
	if(a){cpo.textContent=dhtml(w.ap?a[4]?a[4]+' — '+a[3]:a[3]:a.performer+' — '+a.title);
		(a=ce());a.innerHTML=svg('<path fill="currentColor" d="M10 10.8V7.5a1 1 0 10-2 0v9a1 1 0 002 0v-3.3l8.1 4.6a1.25 1.25 0 001.9-1V7.2a1.25 1.25 0 00-1.9-1z"/>')
		+svg(`<path fill="currentColor" d="${(w.ap?ap._isPlaying:audio.playing())?'M6 6.2Q6 5 7.2 5H8.9Q10 5 10 6.2V17.8Q10 19 8.8 19H7.2Q6 19 6 17.8Zm8 0Q14 5 15.2 5h1.7Q18 5 18 6.2v11.6q0 1.2-1.2 1.2h-1.6Q14 19 14 17.8z':'M18.5 11.13a1 1 0 010 1.74l-9 5.2A1 1 0 018 17.2V6.8a1 1 0 011.5-.86z'}"/>`)
		+svg('<path fill="currentColor" d="M14 10.8V7.5a1 1 0 112 0v9a1 1 0 01-2 0v-3.3l-8.1 4.6a1.25 1.25 0 01-1.9-1V7.2a1.25 1.25 0 011.9-1z"/>');cpo.append(a)
	}else cpo.innerHTML=svg('<path fill="none" stroke="currentColor" stroke-width="1.8" d="M8 7.6v9.2q0 4.5-3 4.7c-1.3 0-2.5-1-2.5-2.5q.2-3.2 5.5-3m0-8.4c0-1.8.1-2.7 2.4-3.1l6.8-1.4c2.1-.5 2.8.4 2.8 2.1v9.6q0 4.5-3 4.7c-1.3 0-2.5-1-2.5-2.5q.2-3.2 5.5-3M8 9.3l12-2.5"/>')
},
vp:e=>{				//log('st.vp('+e+')');
	if(e&&e==st_.vp)return;
	e?(st_.vp=e,sync(1,'vp')):st_.vp=e=st_.vp||-4;
	st.vb();
	if(e>0){
		cp_v.classList.add('a');
		for(let e of cp_vp.children)e.classList.remove('a');
		cp_vp.children[e-1].classList.add('a');
		st_.vo&&st.vo(1);
		!ac&&w.ap?._isPlaying&&(ap._impl.pause(),st.eq(),ap._implPlay());
		ac&&st.eq()
	}else cp_v.classList.remove('a'), st_.vo&&(st.vo(0),st_.vo=1)
},
vb:e=>{
	let v=n(st_.vb).split('|');
	if(e){
		vg=(cp_va.classList.contains('a')?'-':'')+cp_vg.value;
		vvb=+cp_vvb.value;
		vbs=+cp_vbs.value;
		vbr=+cp_vbr.value;
		vbR=+cp_vbR.value;
		vbt=+cp_vbt.value;
		vba=+cp_vba.value;
		vbb=+cp_vbb.value;
		st_.vb=[vg||'',vvb||'',vbs||'',vbr||'',vbR||'',vbt||'',vba||'',vbb||''].join('|').replace(/\|+$/,'')
	}else{
		cp_va.classList[n(v[0],1)?'remove':'add']('a');
		cp_vg.value=Math.abs(v[0]||50);
		vg=(cp_va.classList.contains('a')?'-':'')+cp_vg.value;
		vvb=cp_vvb.value=+v[1]||0;
		vbs=cp_vbs.value=+v[2]||0;
		vbr=cp_vbr.value=+v[3]||0;
		vbR=cp_vbR.value=+v[4]||0;
		vbt=cp_vbt.value=+v[5]||0;
		vba=cp_vba.value=+v[6]||0;
		vbb=cp_vbb.value=+v[7]||0
	}
	let f=rgb.firstChild.values.baseVal,s=.8-(vbR*.008);f[0].value=1.2;f[6].value=s;f[12].value=s;
	if(ac)ac.a.c&&(ac.a.c.disconnect(ac.a), ac.a.c=!1),st_.vp>0&&(cp_va.classList.contains('a')?(ac.ag.connect(ac.a),ac.c&&(st_.e?ac.f[9]:ac.s).connect(ac.ag),ac.a.c=ac.ag):(ac.g.connect(ac.a),ac.a.c=ac.g)),ac.ag.gain.value=(Math.exp(cp_vg.value/100 * Math.log(35))-1)/34
},
ar:(e,k)=>{			//log('st.ar('+e+','+k+')');
	let a=st_.ar||-1,b=Math.abs(a);
	if(e)a=st_.ar=k?clamp(b+(b-k<0?k-b:k),10,.1,1):-a;

	forEach('.cp_ar',e=>e.textContent=Math.abs(a));
	forEach('.cp_ar+p',e=>e.classList[a>0?'add':'remove']('a'));
	w.ap&&ap._updatePlaybackRate&&ap._updatePlaybackRate();
	sync(e,'ar')
},
e:e=>{				//log('st.e('+e+')');
	let t=st_.e=e?st_.e<1?++st_.e:0:st_.e||0;
	forEach('.cp_e',e=>e.classList[t?'add':'remove']('a'));
	if(e&&w.ap?._isPlaying)ap._impl.pause(),ap._implPlay();
	if(ac&&ac.c)ac.s.disconnect(), t?(ac.f.c=!0, ac.s.connect(ac.f[0]), ac.f[9].connect(ac.b), ac.f[9].connect(ac.g)) : (ac.f.c&&(ac.f.c=!1, ac.f[9].disconnect()), ac.s.connect(ac.b), ac.s.connect(ac.g));
	st.ec();	st.vb();
	sync(e,'e')
},
ec:e=>{				//log('st.ec('+e+')');
	let t=st_.ec=e?st_.ec<1?++st_.ec:0:st_.ec||0;
	forEach('.cp_ec+p',e=>e.classList[t?'add':'remove']('a'));

	if(ac&&ac.c)t?(ac.g.c&&(ac.g.c=!1, ac.g.disconnect(ac.destination)), ac.l.c=!0, ac.g.connect(ac.l), ac.l.connect(ac.destination)):(ac.l.c&&(ac.l.c=!1, ac.g.disconnect(ac.l), ac.l.disconnect(ac.destination)), ac.g.c=!0, ac.g.connect(ac.destination));
	sync(e,'ec')
},
es:(e,i,v,k)=>{	//log('st.es('+e+','+i+','+v+','+k+')');
	let a={'Manual':0,'Manual 2':0,'Party':[4,4,0,0,0,0,0,0,4,4],'Club':[0,0,5,3,3,3,2,0,0,0],'Dance':[6,4,1,0,0,-3,-4,-4,0,0],'Deep':[5,4,2,1,3,2,2,-2,-3,-4],'Techno':[5,3,0,-3,-3,0,5,6,6,5],'Electronic':[4,4,1,0,-2,2,1,1,4,5],'Bass Reducer':[-4,-4,-3,-2,-1,0,0,2,3,4],'Bass Booster':[5,4,3,2,1,0,0,0,0,0],'Full Bass':[5,6,6,3,1,-2,-5,-6,-7,-7],'Treble Reducer':[0,0,0,0,0,-1,-2,-4,-4,-5],'Treble Booster':[0,0,0,0,0,1,2,4,4,5],'Full Treble':[-6,-6,-6,-2,1,7,10,10,10,10],'Full Bass & Treble':[4,3,0,-4,-3,1,5,7,7,7],'Headphones':[3,7,3,-2,-1,1,3,6,8,9],'Laptop':[5,4,4,2,1,0,-1,-3,-3,-4],'Loudness':[6,4,0,0,-2,0,-1,-5,5,1],'Lounge':[-3,-1,-1,1,4,1,0,-1,2,1],'Large Hall':[6,6,3,3,0,-3,-3,-3,0,0],'Acoustic':[5,5,3,1,2,2,3,4,3,2],'Speech':[-2,0,0,1,4,5,5,4,2,0],'Vocal':[-1,-3,-3,1,4,4,3,2,0,-1],'Piano':[3,2,0,3,3,2,3,5,3,3],'Classic':[0,0,0,0,0,0,-4,-4,-4,-6],'Live':[-3,0,2,3,3,3,2,1,1,1],'Pop':[1,3,4,5,3,0,-1,-1,1,1],'R&B':[3,7,6,1,-2,-1,2,3,3,4],'Soft':[3,1,0,-1,0,2,5,6,7,7],'Soft Rock':[2,2,1,0,-2,-3,-2,0,1,5],'Rock':[5,3,-3,-5,-2,2,5,7,7,7],'Alternative':[2,2,5,0,-5,-5,0,0,2,5],'Metal':[0,0,2,2,-2,-5,-2,0,2,0],'Indie':[-2,-2,-2,-2,-2,0,2,5,2,0],'Jazz':[4,3,1,2,-1,-1,0,1,3,4],'Ska':[-1,-3,-2,0,2,3,5,6,7,6],'Reggae':[0,0,0,-3,0,4,4,0,0,0],'Hip-hop':[5,4,1,3,-1,-1,1,-1,2,3],'Latin':[3,2,0,0,-1,-1,-1,0,3,5]},
	b=Object.keys(a),
	c=st_.ep=st_.ep>=b.length?0:st_.ep<0?b.length-1:st_.ep||0,
	d=c>1?a[b[c]]:n(st_['eq'+n(st_.ep)]).split(',');
	for(let i=0;i<10;i++)d[i]=d[i]||0;

	if(e){if(!st_.e)st.e(1);if(c>1)st_.ep=c=0;if(e==-1)d=d.map(e=>Math.max(-12,Math.min(12,i?v:+e+v)));else d[i]=v;st_['eq'+n(st_.ep)]=d.join()}
	if(ac)for(let i=0;i<10;i++)ac.f[i].gain.value=d[i]||0;

	forEach('.cp_eq',e=>{
		e.classList[e.querySelector('input:active')&&!k?'add':'remove']('n');
		let p='',r='',m='M-3-3h120v30H-3';
		forEach('input',(e,i)=>{
			e.value=+d[i]+12;
			let a=12-(d[i-1]||0),b=12-(d[i]||0),c=i<2?a:12-(d[i-2]||0),n=i>8?b:12-(d[+i+1]||0),ab=Math.abs(a-b),ac=Math.abs(a-c),bn=Math.abs(b-n),x=i*12;
			p+=+i?(x+ab/6-8)+' '+((a-(a*2-c-b)/(9+Math.abs(12-a)*3.25))-(c-b)/((a<8||a>16?Math.abs(12-a)/1.3:3)*(ab<3&&bn<4?2-bn/4:1)))+' '+(x-ab/6-4)+' '+((b-(b*2-a-n)/(9+Math.abs(12-b)*3.25))+(a-n)/((b<8||b>16?Math.abs(12-b)/1.3:3)*(ab<3&&ac<4?2-ac/4:1)))+' '+x+' '+(b-(b*2-a-n)/(24+Math.abs(12-b)*2))+' ':'M0'+' '+b+'C';
			//p+=+i?(x-12)+' '+a+' '+(x-6)+' '+(a+b)/2+' '+(i>8?'L'+x+' '+b:''):'M0'+' '+b+'.01Q';
			//p+=+i?(x-12-ac/12+ab/12)+' '+(a+(a*2-c-b)/8)+' '+(x-6)+' '+((a+(a*2-c-b)/8)+(b+(b*2-a-n)/8))/2+' '+(i>8?'L'+x+' '+b:''):'M0'+' '+b+'.01Q';
			r+='M'+(x-1.9)+' '+b+'a1 1 0 103.8 0 1 1 0 10-3.8 0';
			m+='M'+(x-1.5)+' '+b+'a1 1 0 103 0 1 1 0 10-3 0'
		},e);
		forEach('svg>path',(e,i)=>e.setAttribute('d',i?r:p+'v2'),e);
		e.querySelector('svg>mask>path').setAttribute('d',m);
		e.querySelector('.cp_ep').innerHTML=(c-3<0?[...b.slice(c-3),...b.slice(0,c+4)]:c+4>b.length?[...b.slice(c-3),...b.slice(0,4-(b.length-c))]:b.slice(c-3,c+4)).reduce((a,b)=>{return a+'<p>'+b+'</p>'},'')
	})
},
eq:()=>{				//log('EQ start');
	if(!st_.e&&st_.vp<0)return;
	if(!ac){			//log('ac create');
		ac=new AudioContext({sampleRate:44100});if(D)w.ac=ac;
		ac.a=ac.createAnalyser();
		ac.b=ac.createAnalyser();ac.b.smoothingTimeConstant=.4;
		ac.f=createFilters();
		ac.g=ac.createGain();ac.g.gain.value=+!st_.m;
		ac.l=ac.createDynamicsCompressor();
		ac.ag=ac.createGain();st.e();st.es()
	}
	if((w.ap?ap._impl._currentAudioEl.audioElement:audioEl)!=ac.e){
		if(ac.s&&ac.c)ac.s.disconnect();
		ac.e=(w.ap?ap._impl._currentAudioEl.audioElement:audioEl);
		ac.s=ac.createMediaElementSource(ac.e);
		ac.e.addEventListener('playing',()=>{if(!ac.c)ac.c=!0, st.e()});
		ac.e.addEventListener('emptied',()=>{if(ac.s&&ac.c)ac.c=!1,ac.s.disconnect()})
	}

	if(st_.vp<0||!(w.ap?ap._isPlaying:audio.playing()))return;

	let c=0,r=0,x,h,s,l,grd,gr=0,WIDTH,HEIGHT,row,bars,af,at,barHeight,barWidth,barSpace,barSkip,smoothHeight,bass,dsc=1,vbrc=0,vbrt=+new Date,ctx=cpc.getContext('2d'),cpu=navigator.hardwareConcurrency;vch=1;

	vf&&cancelAnimationFrame(vf);renderFrame();

	function createFilter(e,index){
		let f=ac.createBiquadFilter();
		f.type='peaking';
		f.frequency.value=e;
		f.Q.value=1;
		f.gain.value=n(st_['eq'+n(st_.ep)]).split(',')[index]||0;
		return f
	};
	function createFilters(){
		let f=ff.map(createFilter);
		f.reduce((a,b)=>a.connect(b));
		return f
	};

	function renderFrame(){
		vf=AF(renderFrame,cpc);
		if((!(w.ap?ap._isPlaying:audio.playing())||st_.vp<0)&&c++==15){	//log('EQ stop');
			cpb.style.cssText='';cpc.width=0;cpc.height=0;
			cancelAnimationFrame(vf);vf=0;return
		}
		WIDTH=innerWidth;
		HEIGHT=innerHeight;

		if(vch){
			vch=0;
			x=n(st_.hsl).split('|');
			let y=x[x.length>=5&&st_.vc==1?4:1].split(',');
			h=360-+y[0]*3.6;s=+y[1]||0;l=+y[2]||0
		}

		if(vg!='-0'){
			switch(Math.abs(st_.vp)){
				case 1:flat_c();break;
				case 2:flat_b();break;
				case 3:flatwave_b();break;
				case 4:flat_x();break;
				case 5:wave();break;
				case 6:circle();break;
				case 7:circle_wave()
			}
			if(vvb&&cpc.width&&cpc.height){
				ctx.resetTransform();
				ctx.filter='blur('+(10+Math.floor(vvb/5))+'px)';
				ctx.globalCompositeOperation='lighter';
				ctx.globalAlpha=vvb/100;
				for(let i=0;i<3;i++)ctx.drawImage(cpc,0,0)
			}
		}else cpc.width=0,cpc.height=0;

		if(vbs||vbr||vbt||vba||vbb){
			let average=0,af=new Uint8Array(1),at=new Uint8Array(1024);ac.b.getByteFrequencyData(af);ac.b.getByteTimeDomainData(at);dsc=1;for(let i=0;i<1024;i++)average+=Math.abs(at[i]-128);average/=1024;
			if(vbr){let t=+new Date;if(vbrt<t-(151-vbr)*20||vbrt<t-(150-vbr)&&average>64-vbr/2){let f=rgb.firstChild.values.baseVal,s=.8-(vbR*.008),v=[[1.2,s,s],[1,s,1],[s,s,1.2],[s,1,1],[s,1.2,s],[1,1,s]],a=v[vbrc+=vbrc>4?-5:1];vbrt=t;f[0].value=a[0];f[6].value=a[1];f[12].value=a[2]}}
			cpb.style.cssText=(vba||vbt?'transform:'+(vba?' scale('+(1+af[0]/2048*vba/100)+')':' scale(1.01)')+(vbt?' rotateZ('+(rnd(-average,average)/25*vbt/100)+'deg)':'')+';':'')+(vbs||vbr||vbb?'filter:'+(vbr?'url(#rgb)':'')+(vbs?' brightness('+(1-vbs/300+average/5000*vbs)+') contrast('+(1+average/20000*vbs)+')':'')+(vbb?' blur('+(Math.exp(Math.max(0,af[0]-225+vbb/2,average-50+vbb/4)/30)-1)+'px)':''):'')
		}else if(dsc){
			dsc=0;cpb.style.cssText=''
		}
	};
	function set(st,fs,bw,bs,cw,ch,cs){
		ac.a.smoothingTimeConstant=st;
		ac.a.fftSize=fs;
		row=cw/(bw+bs)/3;
		bars=bw+bs?fs*.4:fs/2;
		af=new Uint8Array(bars);
		at=new Uint8Array(bars);
		ac.a.getByteFrequencyData(af);
		ac.a.getByteTimeDomainData(at);
		bass=Math.floor(af[1]);x=0;
		barWidth=bw;
		barSpace=bs;
		cpc.width=cw;
		cpc.height=ch;
		cpc.style.cssText=cs
	};
	function flat_c(){		//1
		set(.4,4096,2,6,WIDTH,HEIGHT*.6,`top:${HEIGHT*.2}px`);
		// ctx.translate(0,cpc.height/2);ctx.lineWidth=barWidth;x=barWidth/2;
		if(st_.vc==2){
			grd=ctx.createLinearGradient(0,0,cpc.width,0);
			for(let i=0; i<20; i++)grd.addColorStop(i/20,`hsl(${-18*i},100%,50%)`);
			ctx.fillStyle=grd;
			// ctx.strokeStyle=grd
		}else if(st_.vc==3){
			grd=ctx.createLinearGradient(0,0,cpc.width,0);
			if(gr++>360)gr=0;
			for(let i=0; i<10; i++)grd.addColorStop(i/10,`hsl(${18*i-gr},100%,50%)`);
			ctx.fillStyle=grd;
			// ctx.strokeStyle=grd
		}

		for(let i=0; i<bars; i=i+barSkip){
			barSkip = i<row*2 ? 1 : Math.floor((bars-row*2)/row);

			// smoothHeight=0;
			// for(let s=0;s<barSkip;s++)smoothHeight+=af[i+s]/barSkip;

			barHeight=2+(barSkip>1?(af[i-1]+af[i]+af[i+1])/768:af[i]/256)*(HEIGHT*.4-102+bass/2.5)||2;
			if(st_.vc<2){
				grd=ctx.createLinearGradient(0,(cpc.height-barHeight)/2,0,(cpc.height+barHeight)/2);
				// grd=ctx.createLinearGradient(0,-barHeight/2,0,barHeight/2);
				grd.addColorStop(0,`hsl(${h},${s}%,${l}%,0.75)`);
				grd.addColorStop(0.5-bass/512,`hsl(${h},${s}%,${l+bass/24}%)`);
				grd.addColorStop(0.5+bass/512,`hsl(${h},${s}%,${l+bass/24}%)`);
				grd.addColorStop(1,`hsl(${h},${s}%,${l}%,0.75)`);
				ctx.fillStyle=grd;
				// ctx.strokeStyle=grd
			}
			// ctx.moveTo(x,-barHeight/2);ctx.lineTo(x,barHeight/2);ctx.stroke();ctx.beginPath();
			ctx.fillRect(x, (cpc.height+barHeight)/2-barHeight, barWidth, barHeight);
			x+=barWidth+barSpace;
			if(x>cpc.width)break
		}
	};
	function flat_b(){		//2
		set(.4,4096,7,1,WIDTH,HEIGHT*.6,'bottom:0');
		// ctx.translate(0,cpc.height);ctx.lineWidth=barWidth;x=barWidth/2;
		if(st_.vc<2){
			// grd=ctx.createLinearGradient(0,-cpc.height,0,0);
			// grd.addColorStop(0.4,`hsl(${h},${s}%,${l}%)`);
			// grd.addColorStop(0.6,`hsl(${h},${s}%,${l}%,0.6)`);
			grd=ctx.createLinearGradient(0,cpc.height,0,0);
			grd.addColorStop(0.4,`hsl(${h},${s}%,${l}%,0.6)`);
			grd.addColorStop(0.6,`hsl(${h},${s}%,${l}%)`)
		}else if(st_.vc==2){
			grd=ctx.createLinearGradient(0,0,cpc.width,0);
			for(let i=0; i<20; i++)grd.addColorStop(i/20,`hsl(${-18*i},100%,50%)`)
		}else if(st_.vc==3){
			grd=ctx.createLinearGradient(0,0,cpc.width,0);
			if(gr++>360)gr=0;
			for(let i=0; i<10; i++)grd.addColorStop(i/10,`hsl(${18*i-gr},100%,50%)`)
		}
		ctx.fillStyle=grd;
		// ctx.strokeStyle=grd;
		// let Round=0,Dash=0;
		// if(Round)ctx.lineCap='round';
		// if(Dash){
			// if(Round){
				// ctx.setLineDash([0, barWidth+barSpace]);
				// ctx.lineDashOffset = barSpace;
			// }else{
				// ctx.setLineDash([barWidth, barSpace*2]);
				// ctx.lineDashOffset = -barWidth;
			// }
		// }
		for(let i=0; i<bars; i+=barSkip){
			barSkip = i<row*2 ? 1 : Math.floor((bars-row*2)/row);
			barHeight=1+(barSkip>1?(af[i-1]+af[i]+af[i+1])/768:af[i]/256)*(HEIGHT*.4-102+bass/2.5);
			// ctx.moveTo(x,barWidth/2);
			// if(Round)ctx.lineTo(x,Dash?-barHeight-barWidth:-barHeight);
			// else ctx.lineTo(x,-barHeight-barSpace);
			ctx.fillRect(x, cpc.height-barHeight, barWidth, barHeight);
			x+=barWidth+barSpace;
			if(x>cpc.width)break
		}
		// ctx.stroke()
	};
	function flatwave_b(){	//3
		set(.4,4096,0,WIDTH/150,WIDTH,HEIGHT*.6,'bottom:0');
		ctx.lineWidth=2;
		if(st_.vc<2){
			grd=ctx.createLinearGradient(0,cpc.height,0,0);
			grd.addColorStop(0,`hsl(${h},${s}%,${l}%,0.25)`);
			grd.addColorStop(1,`hsl(${h},${s}%,${l}%)`);
			ctx.fillStyle=grd;
			ctx.strokeStyle=`hsl(${h},${s}%,${l+bass/10}%)`
		}else if(st_.vc==2){
			grd=ctx.createLinearGradient(0,0,cpc.width,0);
			for(let i=0; i<20; i++)grd.addColorStop(i/20,`hsl(${-18*i},100%,50%,.75)`);
			ctx.fillStyle=grd;
			ctx.strokeStyle=grd
		}else if(st_.vc==3){
			grd=ctx.createLinearGradient(0,0,cpc.width,0);
			if(gr++>360)gr=0;
			for(let i=0; i<10; i++)grd.addColorStop(i/10,`hsl(${18*i-gr},100%,50%,.75)`);
			ctx.fillStyle=grd;ctx.strokeStyle=grd
		}
		for(let i=0; i<bars; i+=barSkip){
			barSkip = i<row*2 ? 1 : Math.floor((bars-row*2)/row);
			smoothHeight=af[i]/256*(HEIGHT*.4-102+bass/2.5);
			i ? ctx.quadraticCurveTo(x, cpc.height-barHeight, x+barSpace/2, cpc.height-(smoothHeight+barHeight)/2) : ctx.moveTo(x, cpc.height-smoothHeight);
			barHeight=smoothHeight;
			if(x>cpc.width){
				ctx.lineTo(cpc.width, cpc.height+ctx.lineWidth);
				ctx.lineTo(0, cpc.height+ctx.lineWidth);
				break
			}
			x+=barSpace
		}
		ctx.fill();ctx.stroke()
	};
	function flat_x(){		//4
		set(.4,2048,2,6,WIDTH,HEIGHT*.6,`top:${HEIGHT*.2}px`);
		// ctx.translate(0,cpc.height/2);ctx.lineWidth=barWidth;x=barWidth/2;
		grd=ctx.createLinearGradient(0,0,cpc.width,0);
		if(st_.vc<2){
			for(let i=0; i<6; i++)grd.addColorStop(i/5,`hsl(${h},${s}%,${l}%,${i%5?.6:.9})`)
		}else if(st_.vc==2){
			for(let i=0; i<20; i++)grd.addColorStop(i/20,`hsl(${-18*i},100%,50%,.6)`)
		}else if(st_.vc==3){
			if(gr++>360)gr=0;
			for(let i=0; i<10; i++)grd.addColorStop(i/10,`hsl(${18*i-gr},100%,50%,.6)`)
		}
		ctx.fillStyle=grd;
		// ctx.strokeStyle=grd;
		for(let i=0; i<bars; i++){
			barHeight=2+af[i]/256*(HEIGHT*.4-102+bass/2.5);

			ctx.fillRect(x, (cpc.height+barHeight)/2-barHeight, barWidth, barHeight);

			// ctx.moveTo(x,-barHeight/2);ctx.lineTo(x,barHeight/2);
			// if(!(i%cpu))ctx.stroke(),ctx.beginPath();

			x+=barWidth+barSpace;
			if(x>cpc.width/2)
				for(let y=i; y>0; y--){
					barHeight=2+af[y]/256*(HEIGHT*.4-102+bass/2.5);
					// if(st_.vc<2){ctx.fillStyle=`hsl(${h},${s}%,${l}%,${y<30?0.9-y/100:'.6'})`}

					ctx.fillRect(x, (cpc.height+barHeight)/2-barHeight, barWidth, barHeight);

					// ctx.moveTo(x,-barHeight/2);ctx.lineTo(x,barHeight/2);
					// if(!(y%cpu))ctx.stroke(),ctx.beginPath();

					x+=barWidth+barSpace
				}
			if(x>cpc.width)x=0,bass*=.75
			// if(x>cpc.width)x=barWidth/2,bass*=.75
		}
	};
	function wave(){			//5
		set(0,2048,0,0,WIDTH,HEIGHT*.6,`top:${HEIGHT*.2}px`);
		ctx.lineWidth=2;
		grd=ctx.createLinearGradient(0,0,cpc.width,0);
		if(st_.vc<2){
			grd.addColorStop(0,`hsl(${h+70-at[0]/2},${s}%,${l}%)`)
		}else if(st_.vc==2){
			for(let i=0; i<20; i++)grd.addColorStop(i/20,`hsl(${-18*i},100%,50%)`)
		}else if(st_.vc==3){
			if(gr++>360)gr=0;
			for(let i=0; i<10; i++)grd.addColorStop(i/10,`hsl(${18*i-gr},100%,50%)`)
		}
		for(let i=0; i<bars; i++)
			ctx.lineTo(x+=cpc.width/bars, HEIGHT*.1+HEIGHT*.4*at[i]/256);
		ctx.strokeStyle=grd;
		ctx.stroke()
	};
	function circle(){		//6
		let w=(st_.vo||st_.bo)&&st_.mode?HEIGHT/1.5:Math.max(HEIGHT/2,vk.width-165||WIDTH/2), radius=bass/8+w/2, gc=0, deg=360/128;
		set(.4,2048,0,0,Math.min(WIDTH, w*1.8),HEIGHT,`top:${(HEIGHT-cpc.height)/2}px;left:${(WIDTH-cpc.width+(!st_.m||(st_.vo||st_.bo)&&st_.mode?0:157))/2}px`);
		ctx.translate(cpc.width/2, cpc.height/2);
		for(let i=0; i < 128; i++){
			if(st_.vc<2){
				ctx.fillStyle=`hsl(${h},${s}%,${l}%)`
			}else if(st_.vc==2){
				ctx.fillStyle=`hsl(${(deg*gc++)/2},100%,50%)`
			}else if(st_.vc==3){
				if(gr++>256)gr=0;
				ctx.fillStyle=`hsl(${(deg*gr)/2},100%,50%)`
			}
			ctx.fillRect(0, -radius, 2, -2-Math.max(af[i],af[i+128],af[i+256],af[i+384],af[i+512],af[i+640],af[i+768],af[i+896])*HEIGHT/4/256/2);
			ctx.rotate(deg*Math.PI/360)
		}
		for(let i=128; i > 0; i--){
			if(st_.vc<2){
				ctx.fillStyle=`hsl(${h},${s}%,${l}%)`
			}else if(st_.vc==2){
				ctx.fillStyle=`hsl(${(deg*gc++)/2},100%,50%)`
			}else if(st_.vc==3){
				if(gr++>256)gr=0;
				ctx.fillStyle=`hsl(${(deg*gr)/2},100%,50%)`
			}
			ctx.fillRect(0, -radius, 2, -2-Math.max(af[i],af[i+127],af[i+255],af[i+383],af[i+511],af[i+639],af[i+767],af[i+895])*HEIGHT/4/256/2);
			ctx.rotate(deg*Math.PI/360)
		}
	};
	function circle_wave(){	//7
		let w=(st_.vo||st_.bo)&&st_.mode?HEIGHT/1.5:Math.max(HEIGHT/2,vk.width-165||WIDTH/2), r=bars/2, data;
		set(0,2048,0,0,Math.min(WIDTH, w*1.8),HEIGHT,`top:${(HEIGHT-cpc.height)/2}px;left:${(WIDTH-cpc.width+(!st_.m||(st_.vo||st_.bo)&&st_.mode?0:157))/2}px`);
		ctx.translate(cpc.width/2, cpc.height/2);
		gr=st_.vc>1?gr++<360?gr:0:0;
		grd=grd<360?grd+.25:0;
		ctx.lineWidth=3;
		ctx.rotate(grd * Math.PI/180);
		for(let i=0; i<bars; i++){
			data=i<r ? Math.max(0,Math.min(at[i]+(at[bars-1]-at[0])*(r-i)/r,256)) : at[i];
			ctx.lineTo(0, -(w/2-HEIGHT/8+(data+bass/2)*HEIGHT/8/256*1.5));
			ctx.rotate(360/bars * Math.PI/180)
		}
		ctx.strokeStyle=`hsl(${gr+h+96-data*.75},${gr?100:s}%,${gr?50:l}%)`;
		ctx.closePath();
		ctx.stroke()
	}
},
b:e=>{
	if(e<0&&st_.ia)return;
	if(e||cp_b.classList.contains('a')){
		cp_b.classList.remove('a');
		st.bg(1,'')
	}else{
		if(plus(1))return plus();
		cp_b.classList.add('a');
		cp_bn.parentElement.classList[!st_.ia?'add':'remove']('hidden');
		st.bg(1,n(st_.ia).split(', ').splice(-1)[0])
	}
},
bo:e=>{				//log('st.bo('+e+')');
	if(!st_.m)return;
	e=e==void 0?st_.bo:!e;
	b.style.height=e?'':b.offsetHeight+'px';
	if(IO)e?(o.M=0,o()):IO.disconnect();
	b.classList[e?'remove':'add']('bo');
	st_.bo=+!e;
	if(w.onBodyResize)w.lastWindowWidth=0,onBodyResize()
},
bg:(e,u,x)=>{		//log('st.bg('+e+','+u+','+x+')');
	if(u==void 0)return;
	if(plus(1)&&u&&e)return plus();
	let ia=n(st_.ia), is=n(st_.is,1), f=cpf, err=e=>{inpEr(cp_bi),w.topError&&topError(e||l.DocError,{dt:5})}, doc=(d,i,s)=>r(0,d+i,'api=1',h=>{let t=h.getResponseHeader('Content-Type'),f=t=>s?s(/docUrl|userapi/.test(t)?t[0].split('"').pop().replace(/\\/g,''):d):st.bg(e,(/mp4$|webm$/.test(t)?'V':'I')+i);h.abort();/^text/.test(t)?r(0,d+i,'',h=>/docUrl|userapi/.test(h)?(d!='/doc'&&/docOwnerId[\\": ]+-?\d+/.test(h)&&/docId[\\": ]+\d+/.test(h)&&(d='/doc',i=h.match(/docOwnerId[\\": ]+(-?\d+)/)[1]+'_'+h.match(/docId[\\": ]+(\d+)/)[1]),f(h.match(/(docUrl[\\": ]+|href="[^"]+userapi)[^?"]+/g))):err()):f(t)},2,()=>err());
	u=u.replace(/['"<>\{\}\(\);]/g,'').replace(/\s+/g,' ').replace(/, /g,',').trim().replace(/&amp;/g,'&'); st.bg.T=+new Date;
	if(!x&&u.length>4&&st_.u!=u){
		if(u.match('vk(|video)(.com|.ru)[^ ]+video')){
			let t={},h,o=u.match(/(?:oid=|[deiov]{5})(\-?\d+)(?:&id=|_)(\d+)(&src=|)/),T=st.bg.T;
			if(o&&!o[3])return st_.iv=4, r(2,'/video'+(st_.m?'':o[1]+'_'+o[2]), (st_.m?'act=video_box&al=1&video='+o[1]+'_'+o[2]:''), d=>{	//act=show
				if(st_.m){let a=JSON.parse(d).payload[1];if(a[1]=='false'){err(JSON.parse(a[0]));return st.bg(e,u,1)}}
				if(h=d.match(/<iframe[^>]+allowfullscreen[^>]*>/)){
					h=h[0].match(/src=\\?['"]([^'"]+)/);D&&log('video',h);
					u=h?h[1].replace(/&amp;/g,'&').replace(/\\/g,''):''
				}else{
					let v=d.match(/(?:[_ewvisah]{9})[":]+([^"]+)/), s=[], f=h=>h.find(e=>~e.indexOf('type='+(outerHeight>1100?7:outerHeight>1000?6:5)))||h.pop();
					h=/[^.](jpg|_1024|_1280|poster)[\\=":]+([^"]+)/g;
					while((u=h.exec(d))!=null){t[u[1]]=u[2]}
					// log(d);log('data',JSON.parse(d));log('thumb',t);
					h=d.match(/BaseURL>[^<]+/g),D&&log('BaseURL',h);h=h&&f(h).split('>')[1],h&&s.push(h);
					h=d.match(/url\d+[\\":]+[^"]+/g),D&&log('url',h);h=h&&f(h).split('"')[2],h&&s.push(h);
					h=d.match(/"current_video\\?":{[^}]*\\?("files\\?":{[^}]+)/),h=h&&h[1].match(/mp4_\d+[\\":]+[^"]+/g),D&&log('mp4',h);h=h&&f(h).split('"')[2],h&&s.push(h);
					h=d.match(/cache\d+[\\":]+[^"]+/g),D&&log('cache',h);h=h&&f(h).split('"')[2],h&&s.push(h);
					h=d.match(/hls\w*[\\":]+[^"]+/),D&&log('hls',h);h=h&&h[0].split('"')[2].replace(/https:/,'hls'),h&&s.push(h);
					h=d.match(/source src=\\?['"]([^'"]+)/g),D&&log('source',h);h=h&&f(h).split('"')[1],h&&s.push(h);
					s=s.map(e=>e.replace(/\\/g,'').replace(/&amp;/g,'|').replace(/&/g,'|'));
					t=n(t.jpg||t._1024||t._1280||t.poster).replace(/\\/g,'').replace(/https:/,'');
					u='vk.com/video'+o[1]+'_'+o[2]+'&src='+(s[0]?s.shift():'')+'&thumb='+(/userapi.com/.test(t)?t.replace(/.+\userapi.com\//,'P'):t);
					st.bg.s=s;
					if(v&&e)r(1,'/video','act=video_view_started&al=1&hash='+v[1]+'&oid='+o[1]+'&vid='+o[2])
				}st.bg.T==T&&st.bg(e,u)
			},1)
		}else if(u.match('(userapi.com|vkuserphoto.ru)/')){
			// u=u.replace(/.+\.com\/([a-z]+\/|)/,'P').replace(/\?.*/,'')
			// u=u.replace(/.+\.userapi.com\/(\w+\d+-\d+\/|)/,'P')
			u=u.replace(/.+\.(?:userapi.com|vkuserphoto.ru)\/(\w+\d+-\d+\/|im\w{2}\/([^?]*).*|)/,'P$2').replace('&type=album','')
		}
		if(u.match('vk.(com|ru)[^ ]+photo')){
			let o=u.match(/(?:photo)(\-?\d+)(?:_)(\d+)/);
			if(o&&o[2])return r(2,(st_.m?'/al_photos.php':'/photo'+o[1]+'_'+o[2]), (st_.m?'act=show&al=1&dmcah=true&photo='+o[1]+'_'+o[2]:''), d=>{
				d=d.replace(/\\/g,'').match(o[1]+'_'+o[2]+'.*?'+(st_.m?'(?:orig_url|w_src)':'img src')+'[":=]+([^"]+)');
				d&&st.bg(e,d[1])
			},1)
		}
		if(u.match('vk.(com|ru)\/doc'))return doc('/doc',u.match(/^.*(?:vk\.\w+\/doc)([\w-]+).*/)[1]);
		if(u.match('vk.(com|ru)\/s\/v1\/doc'))return doc('/s/v1/doc/',u.match(/^.*(?:vk\.\w+\/s\/v1\/doc\/)([\w-]+).*/)[1]);
		if(u.match('vk.cc\/\\w+'))return st.cc(u.replace(/.*vk.cc\/(\w+).*/,'$1'),u=>st.bg(e,u));
		if(u.match('v[ceiom\.]{8}\/')&&!u.match(/^v[ceiom\.]{8}\/\d+\/\d+/)){
			let d=u.match(/(v[ceiom\.]{8}\/)(?:[deiov]{5}\/|)([\d]+)/),t;
			r(0,'//'+d[1]+'api/v2/video/'+d[2]+'.json','',e=>{t=e.match(/(?:[deiov]{5}\\?\/)(\d+-\w+)/)});
			u=d[1]+d[2]+'/'+t[1]
		}
		if(u.match('[otyu]{5}[bceom\.]{3,6}\/')){
			let d=u.match(/^.*(?:(?:y[bcetomu\.]{7,10}\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#&?\s/]+).*/);
			u=u.match('[otyu]{5}[bceom\.]{3,6}\/')[0].replace(/\.(be)/,'$1.com')+d[1]
		}
		if(u.match('c[mcbou\.]{7}\/')&&!u.match(/\.jpg/)){
			let d=u.match(/(c[mcbou\.]{7}\/)(?:[^/]+\/|)([\w]+)/);
			return r(2,'/video','act=upload_box&al=1&oid='+id,e=>{
				let h=ce();h.innerHTML=JSON.parse(d).payload[1][1];b.append(h);h.querySelector('#video_external_link').value='https://'+d[1]+'view/'+d[2];h.querySelector('#video_share_form').submit();
				w.onParseDone=e=>{h.remove();st.bg(1,d[1]+d[2]+'/'+e.images[0].replace(/https:\/\//,'').replace(/#[^#]+$/,''))}
			})
		}
	}
	if(u){
		if(u=='err')return st_.u=0,st.bg(0,st_.i.replace('&thumb','&src='+st.bg.s.shift()+'&thumb'));
		let t=u, s=0, a=ia?ia.split(', '):[], al=a.length;u=u.replace(/&src=[^&]*/,'');
		if(u=='prev')return st.bg(2,a[is?0:rnd(Math.floor(al/3))]);
		if(u=='next'){a.unshift(a.pop());st_.ia=a.join(', ');return st.bg(2,a[is?al-1:rnd(al-1,Math.ceil(al/(al<6?2:1.5)))])}
		for(let i=0;i<al;i++){
			if(a[i].replace(/&thumb=.*/,'')==u.replace(/&thumb=.*/,'')||a[i].match('userapi.com/')&&~a[i].indexOf(u.slice(1)))s=u;
			if(s)a[i]=a[i+1]
		}
		if(!s&&al&&e)st_.bge=((blb||'')+'||||||||'+(bgmi?'-'+bgm:bgm||'')).replace(/\|+$/,''),st.t(),e=3;
		a[s?al-1:al]=u;
		if(x)a.splice(-1,1);
		st_.ia=a.join(', ');
		if(st_.ia=='')cp_bn.parentElement.classList.add('hidden'); else{
			cp_bn.textContent=a.length;
			cp_bn.parentElement.classList.remove('hidden');
			cp_b.classList.add('a')
		}
		if(w.cp_bhb && cp_bhb.a!=st_.ia){
			let h='';a.reverse();cp_bhb.a=st_.ia;
			for(let i=0,c=a.length;i<c;i++){
				let c=' hba',il='',v='',l=a[i];
				if(l.match('^y[bcetomu\.]{10}\/')){
					il=l.replace(/^(y+).{2}(t+).{3}(.{5})(.*)$/,'//i1.$1$2img$3vi/$4/hqdefault.jpg')
				}else if(l.match('^v[ceiom\.]{8}\/')){
					il=l.replace(/^(.{5})(.{5})\d+\/([^/]+)$/,'//i.$1cdn$2video/$3-d_200x150')
				}else if(l.match('^c[mcbou\.]{7}\/')){
					il=l.replace(/^(c[mcbou\.]{7}\/)(\w+\/)(.+)$/,'//$3')
				}else if(l.match('vk.com\/video[^&]+&thumb=')){
					il=Dc(l.replace(/^.*&thumb=/,''))
				}else if(/^V[\w-]+$|\.mp4$|\.webm$/.test(l)){
					v='<video preload="'+(cp.a?'metadata':'none')+'" muted src="'+Dc(l)+'"></video>'
				}else{
					il=Dc(l);c=''
				}
				h+='<div class="cp_hb'+c+'" data-b="'+l+'"'+(cp.a?il?' style="background-image:url('+il+')"':'':il?'img':'')+'>'+v+'<div class="c"></div><div class="x"></div></div>'
			}
			cp_bhb.innerHTML=h
		}
		if(x&&u==st_.i){u='';x=0}
		if(!x&&st_.u!=u){
			let s=!n(st_.bga,1), v=Math.abs(st_.bga)/100, c=`<style>video,iframe{all:inherit;transform:initial;filter:initial}@media (min-aspect-ratio:16/9){iframe{height:300%;top:-100%}}@media (max-aspect-ratio:1600/901){iframe{width:300%;left:-100%}}</style>`,
			l=e=>(e?'loop pip="false" disablePictureInPicture onloadstart="st.bga();st.bgv()" onloadeddata="':'allow="autoplay" onload="st.bga();st.bgv();')+`this.animate([{opacity:0},{opacity:1}],1000);this.removeAttribute('style')" style="opacity:0"`,
			hls=e=>{
				if(!w.Hls)r(0,'/dist/'+Object.keys(w.stVersions||{}).filter(e=>/\/hls/.test(e))[0],'',E),Object.keys(w).filter(e=>/webpack/.test(e)&&Array.isArray(w[e])).map(e=>w[e]).flat().forEach(e=>{if(e[1])for(let i in e[1])~e[1][i].toString().indexOf('hls.js config')&&(e[1][i](e,i,{d:(a,t)=>e=t,r:e=>e}),e.default&&(w.Hls=e.default()))});if(Hls.isSupported()){let v=f.lastElementChild,h=new Hls();h.loadSource(e);h.attachMedia(v);h.on(Hls.Events.MANIFEST_PARSED,()=>{h.currentLevel=h.maxAutoLevel,!st_.bgv&&v.play()})}
			};if(e)st_.bgv=0;
			if(u.match('^y[bcetomu\.]{10}\/')){
				st_.iv=1;f.innerHTML=c+u.replace(/^(y[bcetomu\.]{10}\/)(.*)$/,`<iframe src="//www.$1embed/$2?controls=0&showinfo=0&rel=0&enablejsapi=1&playlist=$2&loop=1&autoplay=${!st_.bgv}&mute=${s}" ${l()}/></iframe>`)
			}else if(u.match('^v[ceiom\.]{8}\/')){
				st_.iv=2;f.innerHTML=c+`<iframe src="//player.${u.match(/^v[ceiom\.]{8}\//)[0]}video/${u.match(/^v[ceiom\.]{8}\/(\d+)/)[1]}?loop=1&autoplay=${!st_.bgv}&mute=${!s}" ${l()}></iframe>`
			}else if(u.match('^c[mcbou\.]{7}\/')){
				st_.iv=3;f.innerHTML=c+u.replace(/^(c[mcbou\.]{7}\/)(\w+).*$/,`<iframe src="//$1embed/$2?startWithHD=1&mute=${s}" ${l()}></iframe>`)
			}else if(u.match('vk.com\/video[^&]+&thumb=')){
				t=t.match(/&src=([^&]*)/)[1].replace(/\|/g,'&');
				st_.iv=4;f.innerHTML=t?c+`<video src="${t}" onerror="navigator.onLine&&st.bg(0,'err')" crossorigin ${l(1)}></video>`:'';if(/^hls/.test(t))st.bg.s.push(t.replace(/&/g,'|')),hls(t.slice(3))
			}else if(/\.mp4$|\.webm$|\.m3u8$/.test(u)){
				st_.iv=4;f.innerHTML=c+`<video src="${Dc(u)}" onerror="this.crossOrigin=this.onerror='';this.load()" ${l(1)}></video>`;if(/\.m3u8/.test(u))hls(u)
			}else if(/^V[\w-]+$/.test(u)){
				st_.iv=4;doc(Dc(u),'',e=>f.innerHTML=c+`<video src="${e}" onerror="this.crossOrigin=this.onerror='';this.load()" ${l(1)}></video>`)
			}else{
				st_.iv=0;f.textContent=''
			}
			if(st_.iv){let f=()=>st.bgv(),o={once:1};w.addEventListener('mousemove',f,o);w.addEventListener('mousedown',f,o);w.addEventListener('wheel',f,o)}
		}else if(!x)st.bgv(e),e=0;else st.bgv()
	}else{
		st_.iv=0;f.textContent='';
		if(!ia)cp_bhb.textContent=cp_bhb.a='';
		!e&&cp_b.classList.remove('a');
		st_.is=(is?'':'-')+0;st.bgs()
	}
	if(!x)st_.u=st_.i=u;
	if(e)hue(),sync(1,'i,ia,is,bgv'+(e==3?',bge':''),e==2)
},
bgs:(e,k)=>{		//log('st.bgs('+e+','+k+')');
	let a=st_.is||0, d, p=L.st_is, u=e=>T3=setTimeout(()=>{if(new Date>L.st_is||e)L.st_is=+new Date+d,st.bg(1,'next');u()},e>0?e:d);
	opt(e,k,Math.abs(a),cp_bgs.lastElementChild,[l.off,'1 '+l.sec,'5 '+l.sec,'30 '+l.sec,'1 '+l.min,'5 '+l.min,'30 '+l.min,'1 '+l.hour,l.ChangeAudiotrack],t=>{
		st_.is=(n(e==2?-a:a,1)?'':'-')+t, cp_bgsr.classList[n(st_.is,1)?'remove':'add']('a'),
		clearTimeout(T3), d=[0,1e3,5e3,3e4,6e4,3e5,18e5,36e5,0][t], L.st_is=+new Date+d, d&&u(e?d:p-new Date)
	})&&sync(1,'is')
},
bgr:(e,k)=>{		//log('st.bgr('+e+','+k+')');
	opt(e,k,st_.ir||0,cp_bgr.lastElementChild,l.bgr,t=>st_.ir=t)&&(hue(),sync(e,'ir'))
},
bgp:(e,k)=>{		//log('st.bgp('+e+','+k+')');
	opt(e,k,st_.ip||0,cp_bgp.lastElementChild,l.bgp,t=>st_.ip=t)&&(hue(),sync(e,'ip'))
},
btr:(e,k)=>{		//log('st.btr('+e+','+k+')');
	opt(e,k,btr||0,cp_btr.lastElementChild,l.btr,t=>btr=t)&&hue(e)
},
bga:e=>{				//log('st.bga('+e+')');
	let a=st_.bga=st_.bga||'-50',v=Math.abs(a),o=cpf.querySelector('video,iframe');
	if(e){
		a=st_.bga=(cp_bga.classList.contains('a')?'':'-')+cp_bgav.value
	}else{
		cp_bga.classList[n(a,1)?'add':'remove']('a');
		cp_bgav.value=v
	}
	if(o)switch(st_.iv){
		case 1:o.contentWindow.postMessage('{"event":"command","func":"'+(n(a,1)?'unMute':'mute')+'"}', '*');o.contentWindow.postMessage('{"event":"command","func":"setVolume","args":['+(n(a,1)?Math.abs(st_.bga):0)+']}', '*');break;
		case 2:o.contentWindow.postMessage('{"method":"setVolume","value":'+(n(a,1)?Math.abs(st_.bga)/100:0)+'}','*');break;
		case 3:o.contentWindow.postMessage(n(a,1)?'unmute':'mute','*');break;
		case 4:o.muted=!n(a,1);o.volume=Math.abs(st_.bga)/100
	}
},
bgv:e=>{				//log('st.bgv('+e+')');
	let t=st_.bgv=e?st_.bgv<1?++st_.bgv:0:st_.bgv||0,o=cpf.querySelector('video,iframe');
	if(!t&&document.visibilityState=='hidden')t=1;
	if(o)switch(st_.iv){
		case 1:o.contentWindow.postMessage('{"event":"command","func":"'+(t?'pause':'play')+'Video","args":[]}','*');break;
		case 2:o.contentWindow.postMessage('{"method":"'+(t?'pause':'play')+'"}','*');break;
		case 3:o.contentWindow.postMessage(t?'stop':'play','*');break;
		case 4:o[t?'pause':'play']()
	}
	st_.iv&&w.cp_bhb&&cp_bhb.firstElementChild&&cp_bhb.firstElementChild.classList[t?'remove':'add']('a');
	if(e)sync(1,'bgv',1)
},
ai:i=>{},
dh:(m,p,h,e)=>{	//log('st.dh('+m+','+p+')');
	w.vkApi?vkApi.api(m,p).then(h).catch(e):e&&e()
},
pc:e=>{				//log('st.pc('+e+')');
	let t=st_.pc=e?st_.pc<1?++st_.pc:0:st_.pc||0;
	cp_pc.classList[t?'remove':'add']('a');b.classList[t?'remove':'add']('pc');
	sync(e,'pc')
},
ap:e=>{				//log('st.ap('+e+')');
	let t=st_.ap=e?st_.ap<1?++st_.ap:0:st_.ap||0;
	cp_ap.classList[t?'add':'remove']('a');
	sync(e,'ap')
},
sl:e=>{				//log('st.sl('+e+')');
	let t=st_.sl=e?st_.sl<1?++st_.sl:0:st_.sl||0;
	b.classList[t?'remove':'add']('sl');cp_sl.classList[t?'remove':'add']('a');
	sync(e,'sl')
},
ol:e=>{				//log('st.ol('+e+')');
	let t=st_.ol=e?st_.ol<1?++st_.ol:0:st_.ol||0;
	b.classList[t?'add':'remove']('ol');cp_ol.classList[t?'add':'remove']('a');
	sync(e,'ol')
},
op:e=>{				//log('st.op('+e+')');
	let t=st_.op=e?st_.op<1?++st_.op:0:st_.op==void 0?1:st_.op;
	b.classList[t?'add':'remove']('op');cp_op.classList[t?'add':'remove']('a');
	sync(e,'op')
},
em:(e,k)=>{			//log('st.em('+e+')');
	let a=(st_.em=st_.em||'2.4.5').split('.');
	k&&cp_em.classList.toggle('a');
	if(e){
		a[0]=Math.round(cp_es.value/10);
		a[1]=Math.round(cp_et.value/10);
		a[2]=Math.round(cp_ek.value/10);
		st_.em=(cp_em.classList.contains('a')?'':'-')+a.join('.');
		hue();sync(k,'em')
	}else{
		cp_em.classList[n(a[0],1)?(devicePixelRatio=2,'add'):'remove']('a');
		cp_es.value=Math.abs(a[0]*10);
		cp_et.value=+a[1]*10;
		cp_ek.value=+a[2]*10
	}
},
po:(e,k)=>{			//log('st.po('+e+','+k+')');
	let a=st_.po=st_.po||'-50', f=e=>(e=Math.round((innerWidth-((w.page_layout?.offsetWidth||w.vk?.width||960)+(st_.bt==4?0:30)))/100*(a<50?a:100-a)),e>0?e+'px':0);
	if(e){
		k&&cp_po.classList.toggle('a');
		a=cp_ps.value;
		st_.po=(+cp_po.classList.contains('a')?'':'-')+a;
		sync(+!!k,'po')
	}else{
		cp_po.classList[n(a,1)?'add':'remove']('a');
		cp_ps.value=Math.abs(a)
	}
	n(st_.po,1)?(a<50?(b.style.setProperty('--Pl',f()),b.style.removeProperty('--Pr')):(b.style.setProperty('--Pr',f()),b.style.removeProperty('--Pl')),b.classList[a<25?'add':'remove']('Pl'),b.classList[a>75?'add':'remove']('Pr')):(b.classList.remove('Pl','Pr'),b.style.removeProperty('--Pl'),b.style.removeProperty('--Pr'))
},
ra:(e,k)=>{			//log('st.ra('+e+','+k+')');
	let a=st_.ra=st_.ra||'-100';
	if(e){
		k&&cp_ra.classList.toggle('a');
		a=cp_rav.value;
		st_.ra=(+cp_ra.classList.contains('a')?'':'-')+a;
		hue();sync(+!!k,'ra')
	}else{
		cp_ra.classList[n(a,1)?'add':'remove']('a');
		cp_rav.value=Math.abs(a)
	}
},
rm:e=>{				//log('st.rm('+e+')');
	let t=st_.rm=e?st_.rm<1?++st_.rm:0:st_.rm||0;
	b.classList[t?'add':'remove']('rm');cp_rm.classList[t?'add':'remove']('a');
	sync(e,'rm')
},
imn:e=>{				//log('st.imn('+e+')');
	let t=st_.imn=e?st_.imn<1?++st_.imn:0:st_.imn||0;
	cp_imn.classList[t?'add':'remove']('a');
	sync(e,'imn')
},
ima:e=>{				//log('st.ima('+e+')');
	let t=st_.ima=e?st_.ima<1?++st_.ima:0:st_.ima??1;
	if(!st.ima.s){st.ima.s=ce('style');b.append(st.ima.s)}
	st.ima.s.textContent=t?'.ConvoMessage__actions--withoutBubbles{bottom:calc(100% - 30px)}':'';
	cp_ima.classList[t?'add':'remove']('a');
	sync(e,'ima')
},
imr:e=>{				//log('st.imr('+e+')');
	let t=st_.imr=e?st_.imr<1?++st_.imr:0:st_.imr??1;
	if(!st.imr.s){st.imr.s=ce('style');b.append(st.imr.s)}
	st.imr.s.textContent=t?'.MessageActionsContent__wrapper,.MessageActionsContent__content{transition:none!important;animation:none!important}.MessageReactionPickerExpandableContainer__reactions,.MessageReactionPickerExpandableContainer__reactions.MessageReactionPickerExpandableContainer__reactions--visible{transition:opacity 10ms ease-in 7ms,visibility 10ms linear 7ms!important;will-change:visibility,opacity!important}.MessageReactionPickerExtended{transition:max-height 2ms!important;will-change:max-height,border-radius!important}':'';
	cp_imr.classList[t?'add':'remove']('a');
	sync(e,'imr')
},
imu:e=>{				//log('st.imu('+e+')');
	let t=st_.imu=e?st_.imu<1?++st_.imu:0:st_.imu||0;
	cp_imub.classList[t?'add':'remove']('a');
	let col=st_.imuc||'#cce4ff33';
	// Update color picker value (strip alpha for color input)
	if(cp_imuc)cp_imuc.value=col.slice(0,7);
	if(t){
		let check=()=>{
			document.querySelectorAll('div.ConvoListItemWrapper').forEach(wrapper=>{
				let btn=wrapper.querySelector('button.ConvoListItem');
				if(!btn)return;
				let svg=btn.querySelector('svg.vkuiIcon--check_outline_16');
				let unread=btn.querySelector('div.UnreadCounter');
				if(svg||unread)wrapper.style.backgroundColor=col;
				else wrapper.style.backgroundColor='';
				wrapper.dataset.imu='1';
			});
		};
		if(!st.imu.mo){
			st.imu.mo=new MutationObserver(check);
		}
		body&&st.imu.mo.observe(body,{childList:true,subtree:true});
		if(!body)document.addEventListener('DOMContentLoaded',()=>{st.imu.mo.observe(document.body,{childList:true,subtree:true})},{once:true});
		check();
	}else{
		st.imu.mo&&st.imu.mo.disconnect();
		document.querySelectorAll('div.ConvoListItemWrapper[data-imu]').forEach(m=>{m.style.backgroundColor='';delete m.dataset.imu});
	}
	sync(e,'imu')
},
imuc:e=>{			//log('st.imuc('+e+')');
	st_.imuc=e;
	sync(1,'imuc');
	// Reset all highlighted items so they get the new color
	document.querySelectorAll('div.ConvoListItemWrapper[data-imu]').forEach(m=>{delete m.dataset.imu});
	if(st_.imu)st.imu();
},
nl:e=>{				//log('st.nl('+e+')');
	let t=st_.nl=e?st_.nl<1?++st_.nl:0:st_.nl||0;
	b.classList[t?'add':'remove']('nl');cp_nl.classList[t?'add':'remove']('a');
	sync(e,'nl')
},
ab:e=>{				//log('st.ab('+e+')');
	let a=n(st_.ab).split('');
	if(e){
		a[0]=+!cp_ab.classList.contains('a');
		a[1]=+cp_abf.classList.contains('a');
		a[2]=+cp_abg.classList.contains('a');
		a[3]=+cp_abh.classList.contains('a');
		a[4]=+cp_aba.classList.contains('a');
		a[5]=+cp_abc.classList.contains('a');
		a[6]=+cp_abr.classList.contains('a');
		a[7]=+cp_abp.classList.contains('a');
		a[8]=+cp_abm.classList.contains('a');
		a[9]=+cp_abm1.classList.contains('a');
		a[10]=+cp_abm2.classList.contains('a');
		a[11]=+cp_abm3.classList.contains('a');
		a[12]=+cp_abm4.classList.contains('a');
		a[13]=+cp_abim.classList.contains('a');
		a[14]=+cp_abs.classList.contains('a')
	}else{
		cp_ab.classList[+a[0]?'remove':'add']('a');
		cp_abf.classList[+a[1]?'add':'remove']('a');
		cp_abg.classList[+a[2]?'add':'remove']('a');
		cp_abh.classList[+a[3]?'add':'remove']('a');
		cp_aba.classList[+a[4]?'add':'remove']('a');
		cp_abc.classList[+a[5]?'add':'remove']('a');
		cp_abr.classList[+a[6]?'add':'remove']('a');
		cp_abp.classList[+a[7]?'add':'remove']('a');
		cp_abm.classList[+a[8]?'add':'remove']('a');
		cp_abm1.classList[+a[9]?'add':'remove']('a');
		cp_abm2.classList[+a[10]?'add':'remove']('a');
		cp_abm3.classList[+a[11]?'add':'remove']('a');
		cp_abm4.classList[+a[12]?'add':'remove']('a');
		cp_abim.classList[+a[13]?'add':'remove']('a');
		cp_abs.classList[+a[14]?'add':'remove']('a')
	}
	st_.ab=a.join('');
	st9.textContent=`#cp,.cp_e,.cp_z,#cp_s,#cp_bc,#cp_bs,#cp_bs+.w,#mv_bg,.VideoCard__action_bg,.cp_bg,#cp .hidden,.audio-msg-track--rate{display:none}
		.page_block.ION{box-sizing:border-box!important;background:none!important;box-shadow:none!important}.ION>*,.ION:before,.IO [data-id=showMoreButton],.pv_bg,.pv_find{display:none!important}.IO .PostContentContainer,.ION>.photos_period_delimiter{display:block!important}.IO .ReactEntryRootClone{max-height:0}.IO .vkuiInternalShowMoreTextTextClamp{display:inline!important;mask:unset!important;max-height:unset!important}
		${(+a[0]?'':(S('noAdsAtAll',1),S('AdmanHTML',0),'.feed_row>:not(.page_block):has(.post),.page_block[data-ad],.post[data-ad],.post[data-post-author-id*="_"],.FeedBlockWrap:has([class*="Recommendation"]),.MarketItemsFeedBlock,.EcommFeedItemsBlock,.PostHeaderActions__action>a,.side_bar [id$=_left],.wall_item[data-ad-view],[data-notification_type=feed_promo],.AppsCatalogPromoBanner,.CatalogSection:has(.audio_promo)'
		+(+a[1]?',#feed_recommends,#profile_friends_recomm,#friends_right_blocks_root,#friends_possible_block,.feed_friends_recomm,.FriendsSuggestionsBlock':'')
		+(+a[2]?',#group_recom_wrap,#groups_filters_wrap,#feed_right_blocks_root,.feed_groups_recomm,.similar_groups_block':'')
		+(+a[3]?',#recommended_narratives,.stories_feed_wrap':'')
		+(+a[4]?',#bookmark_game,#achievement_game,#feed_mini_apps_recomm,.ads_ads_news_wrap,#feed_blog_reminder,#feed_filters>[class*="pps"],.apps_similarApps,.GamesCatalog--apps .GamesCatalogContent,.GamesCatalogPromoContent,.GamesCatalogFullWidthBanner':'')
		+(+a[5]?',#fastchat-reforged,#chat_onl_wrap,#rb_box_fc_clist,.rb_box_wrap':'')
		+(+a[6]?',.post:not(.closed_comments):not([showreply]) .replies,.post:not([showreply]) .post_replies_header':'')
		+(+a[7]?',#main_feed .PostingReactBlock__root':'')
		+(+a[8]?',.left_menu_nav_wrap,.side_bar_nav_wrap~div,#l_combo'+(+a[9]?',#l_pr':'')+(+a[10]?',#l_nwsf':'')+(+a[11]?',#l_msg':'')+(+a[12]?',#l_fr':''):'')
		+(+a[13]&&st_.imh?st_.imh.split(',').reduce((a,b)=>a+',._im_dialog_'+b+',._im_sugg_'+b+',#ui_rmenu_peer_'+b+',#fc_contact'+b+',#chat_tab_icon_'+b+',#rb_box_fc_peer'+b+',#wddi'+b+'_like_mail_dd,#wddi'+b+'_share_friend_dd'+',.FCThumb__link[href*="'+b+'"],.im-mess-stack[data-peer="'+(b!=id&&b)+'"],li[data-id="'+b+'"],[data-itemkey="convo_'+b+'"],[id="'+b+'"]',''):'')
		+(+a[14]?',.ShortVideoFeedBlock,.BlockVideosForYou':'')+'{display:none!important}'))}
		#cpv{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:-98}#cpv>canvas{position:absolute;pointer-events:none}#cp+svg{display:block;width:0;height:0;color-interpolation-filters:srgb}`;
	sync(e,'ab')
},
gs:e=>{
	let ia,h=st_.hsl.split('|'),n=e=>isNaN(+e)?e||0:+e;
	if(st_.i)ia=st_.ia.split(', ').slice(0,-1).join(', ');
	if(st_.hc!=2)delete h[2];
	if(st_.tc!=2)delete h[3];
	if(st_.vc!=1)delete h[4];
	if(st_.bc!=1)delete h[5];
	if(st_.bgc!=0)delete h[6];
	if(st_.mc!=2)delete h[7];
	if(st_.ht!=2)delete h[8];
	if(st_.bs[0]!=2)delete h[9];
	delete h[10];delete h[11];delete h[12];delete h[13];delete h[14];delete h[15];
	if(st_.ts!=2)delete h[16];
	return (e?n:copy)('vk.com/2style#'+utoa(Jc(JSON.stringify([
		n(h.join('|').replace(/\|+$/,'')),
		n(st_.i.replace(/&thumb=.*/,'')),
		n(ia),
		n(st_.f),
		n(st_.hc),
		n(st_.mc),
		n(st_.tc),
		n(st_.bge),
		n(st_.is),
		n(st_.fs),
		n(st_.bt),
		n(st_.bc),
		n(st_.bgc),
		n(st_.ir),
		n(st_.ip),
		n(st_.mb),
		n(st_.mm),
		n(st_.mf),
		n(st_.ht),
		n(+st_.bs[0]&&st_.bs),
		n(st_.ts)
	]),1)).replace(/=+$/,''))
},
ss:(e,k)=>{
	if(e&&plus(1))return plus();
	if(e&&~e.indexOf('#'))e=e.match(/#([\w\d\/\+]*)/)[1];
	let a=e?JSON.parse(Jc(atou(e))):[st_.s[0]],b=n(st_.hsl).split('|');D&&log(a);
	n(a[0]).split('|').forEach((e,i)=>e&&(b[i]=e));
	st_.hsl=b.join('|');
	st_.i=n(a[1]);
	st_.ia=n(a[2]);
	st_.f=n(a[3]);
	st_.hc=+n(a[4]);
	st_.mc=+n(a[5]);
	st_.tc=+n(a[6]);
	st_.bge=n(a[7]==1?10:a[7])+'';
	st_.is=+n(a[8]);
	st_.fs=n(a[9]);
	st_.bt=n(a[10]);
	st_.bc=n(a[11]);
	st_.bgc=n(a[12]);
	st_.ir=n(a[13]);
	st_.ip=n(a[14]);
	st_.mb=n(a[15]);
	st_.mm=n(a[16]);
	st_.mf=n(a[17]);
	st_.ht=n(a[18]);
	st_.bs=n(a[19])+'';
	st_.ts=n(a[20]);
	if(!e){
		st_.t=0;
		st_.bgc=void 0;
		st_.bt=void 0;
		st_.mc=void 0;
		st_.fc=0;
		st_.oc=0;
		st_.lc=0;
		st_.kc=0;
		st_.uc=0;
		st_.fa=st_.s[1];
		st_.ia=st_.s[2];
		location.reload()
	}
	st.fs();st.hc();st.ht();st.tc();st.mc();st.mb();st.mm();st.mf();st.bt();st.bc();st.bs();st.ts();st.kc();st.bgc();st.vp();st.bgs();st.bgr();st.bgp();st.bg(0,st_.i);st.fn(0,st_.f);st.t();st.btr();

	if(!k){
		if(e&&!cp.a&&!o.st){
			let a=gec('cp_a',cpw), r=t=>{a.T&&clearTimeout(a.T);a.T=setTimeout(()=>{setTimeout(()=>a.remove(),450);a.style.opacity=0;t==2&&(a.style.zIndex=1500)},t)};
			!a&&[a=ce(),ce(),ce()].forEach((e,i)=>{e.textContent=[l.ThemeIns,l.undo,l.set][i];(i?a:cpw).append(e);e.addEventListener('click',e=>{End(e);r(i);i==1&&h(0,-1);i==2&&st.s()})});
			a.className='cp_a';setTimeout(()=>a.style.top='6px');r(3e4)
		}
		sync(1,'hsl,i,ia,f,fa,hc,mc,tc,bge,is,fs,bt,bc,bgc,ir,ip,mb,mm,mf,ht,bs,uc,fc,oc,lc,kc,ts')
	}
},
is:(a,b)=>{
	confirm('\n'+l.is+'?\n\n'+l.isInfo)?r(2,'/edit','act=interests',d=>{
		let t=ce('textarea'), h=d.match(/options[^}]+hash":"([^"]+)/), i='';
		for(let v of d.matchAll(/<[^"]+"\w*_?interests_(\w+)[^>]+>([^<]*)/g))
			i+='&'+v[1]+'='+encodeURIComponent((t.innerHTML=(v[1]=='about'?st.gs(1):v[2]),t.value));
		h&&i?r(2,'/edit','al=1&act=a_save_interests&hash='+h[1]+i,a,1,b):b()
	},1,b):a()
},
k:e=>{				//log('st.k('+e+')');
	switch(e){
		case 'pause':w.ap?ap._isPlaying?ap.pause():ap.getCurrentAudio()?ap.play():ap.playPlaylist(vk.id,-1):audio.playing()?audio.pause():audio.play();break;
		case 'prev':w.ap?ap.playPrev():audio.prev();break;
		case 'next':w.ap?ap.playNext():audio.next();break;
		case 'stop':w.ap?(ap.seek(0),ap.pause()):(audio.seek(0),audio.pause());break;
		default:if(e.keyCode==32)
				st.k('pause'),End(e);
			else if(e.ctrlKey&&e.keyCode==37)
				st.k('prev'),End(e);
			else if(e.ctrlKey&&e.keyCode==39)
				st.k('next'),End(e);
			else if(e.shiftKey&&e.deltaY>0||e.shiftKey&&e.deltaY<0||e.deltaX>0||e.deltaX<0||e.keyCode==37||e.keyCode==39)
				w.ap?.seekCurrentAudio(e.shiftKey&&e.deltaY>0||e.deltaX>0||e.keyCode==39),End(e);
			else if(e.deltaY>0||e.deltaY<0||e.keyCode==38||e.keyCode==40)
				w.ap?.set_volume(e),End(e)
	}
},
q:e=>{				//log('st.q()');
	if(e<0){
		let E=document.activeElement,t=E.isContentEditable,S=t?getSelection():{s:E.selectionStart,e:E.selectionEnd},T=t?S.type=='Range':S.s==S.e,R=t&&S.getRangeAt(0),s=t?T?S.toString():E.innerText:T?E.value:E.value.slice(S.s,S.e),l=s&&s.replace(/[а-я]/gi,'').length>=s.replace(/[a-z]/gi,'').length,m={},r={},c=s=>s.replace(/./g,c=>e==-2?c===c.toUpperCase()?c.toLowerCase():c.toUpperCase():(l?m[c]||r[c]:r[c]||m[c])||c),en='`qwertyuiop[]asdfghjkl;\'zxcvbnm,./~@#$%^&QWERTYUIOP{}ASDFGHJKL:"|ZXCVBNM<>?',ru='ёйцукенгшщзхъфывапролджэячсмитьбю.Ё"№;%:?ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭ/ЯЧСМИТЬБЮ,',x=(e,m)=>document.execCommand(m||'insertHTML',0,e);
		for(let i=0;i<75;i++)m[en[i]]=ru[i],r[ru[i]]=en[i];
		if(s)t?T?(s=R.cloneContents(),s.childNodes.forEach(e=>e.data&&(e.data=c(e.data))),R=ce(),R.append(s),x(R.innerHTML)):(T=R.endOffset,R=[].indexOf.call(E.childNodes,R.endContainer),s=E.cloneNode(1),s.childNodes.forEach(e=>e.data&&(e.data=c(e.data))),S.selectAllChildren(E),x(s.innerHTML),t=document.createRange(),t.setStart(~R?E.childNodes[R]:E,T),S.removeAllRanges(),S.addRange(t)):(T&&E.setSelectionRange(0,s.length),x(c(s),'insertText'),E.setSelectionRange(S.s,S.e))
	}else{
		let t=st_.q=e?st_.q<1?++st_.q:0:st_.q||0;
		cp_q.classList[t?'remove':'add']('a');
		sync(e,'q')
	}
},
u:e=>{},
cc:(e,h)=>{
	r(2,'/cc','al=1&act=go&key='+e,d=>{
		d=JSON.parse(d).payload[1][0];
		if(d[0]=='"')d=JSON.parse(d);
		if(d[0]=='/')d=location.origin+d;
		if(~d.indexOf(e))d=d.match(/&to=([^&]*)/)[1];
		if(d)h(decodeURIComponent(decodeURIComponent(d1251(d))))
	})
},
aw:e=>{
	let t=st_.aw=e?st_.aw<1?++st_.aw:0:st_.aw||0; st.aw.c=t&&(e=>{let a=e.target.closest('a'),q;if(a && /^\/away/.test(a.pathname) && (q=new URLSearchParams(a.search),q=new URL(q.get('utf')?q.get('to'):d1251(q.get('to')))))End(e),b.addEventListener('click',e=>e.target.closest('a')==a&&(End(e),open(q,'','noopener,noreferrer')),{once:1,capture:1})});
	cp_aw.classList[t?'add':'remove']('a');
	sync(e,'aw')
},
tt:(e,c,y=-10,x=0,w='100%',f,s=150)=>{
	if(!st_.m)return;
	let t=e.tt=e.tt||ce(), p=e.offsetParent||e.parentElement, cp=e.closest('#cp'), sY=cp?0:scrollY, sX=cp?0:scrollX, ep=cp?{top:e.offsetTop,left:e.offsetLeft}:e.getBoundingClientRect();clearTimeout(t.T);
	if(!t.hasChildNodes()){t.className=c?'tt':'tt_w tt_black';t.innerHTML=`<div class="tt_text">${c?c:e.dataset.title}</div>`;e.addEventListener('mouseleave',()=>{t.T=setTimeout(()=>t.remove(),s*.9);t.animate([{opacity:1},{opacity:0}],s)})}
	(cp?p:body).append(t);if(c&&w)t.style.width=w;t.style.cssText=`${f>0?'position:fixed;':''}${c&&w?'width:'+w+';':''}left:${(c?f||c&&w!='100%'?ep.left+x:x:Math.min((cp?p.offsetWidth:innerWidth)-t.offsetWidth,Math.max(ep.left+e.offsetWidth/2-t.offsetWidth/2,0)))+sX}px;top:${(ep.top+sY-t.offsetHeight<sY+(cp?0:48)?ep.top+e.offsetHeight-y:ep.top-t.offsetHeight+y)+sY}px`;t.animate([{opacity:0},{opacity:1}],s)
},
eye:s=>{
	if(cp.a||D){
		if(!D&&w.EyeDropper)
			(new EyeDropper).open().then(e=>{e=rgb2hsl(e.sRGBHex);copy(hsl2rgb(...e).map(e=>Math.round(e*255).toString(16)).map(e=>e[1]?e:'0'+e).join(''));st.t(0,e)}).catch(e=>{});
		else if(!w.cp_eye&&s[9]){
			let i=new Image(), c=ce('canvas'), x=c.getContext('2d',{willReadFrequently:true}), R, F, S, W, H, X, Y,
			m=e=>{X=e.x;Y=e.y;F=x.getImageData(X,Y,1,1).data;S=F.reduce((a,b)=>(b=255-b,a+(b<16?'0':'')+b.toString(16)),'').slice(0,6);F=F.reduce((a,b)=>a+(b<16?'0':'')+b.toString(16),'').slice(0,6);R=x.getImageData(X-2,Y-2,5,5).data.reduce((a,b,i)=>a+((i+1)%4?(b<16?'0':'')+b.toString(16):i<99?`'/><path d='M${3+(Math.floor((i+1)/4)%5*6)}.5 ${3+(Math.floor((i+1)/20)*6)}.5h6v6h-6z' fill='%23`:`'/>`),`<path d='M3.5 3.5h6v6h-6z' fill='%23`);i.style.cursor=`url("data:image/svg+xml,<svg width='32' height='32' xmlns='http://www.w3.org/2000/svg'><mask id='m'><circle cx='18.5' cy='18.5' r='12' fill='%23fff'/></mask><pattern id='p' x='.113' y='.138' width='.25' height='.25'><path stroke='%23777' d='M.1-.1v6h6H0'/></pattern><path fill='%23${F}' stroke='%23${S}' stroke-width='1.5' d='M1.1 1.1L21 6A12.75 12.75 0 116 21z'/><g mask='url(%23m)'>${R}<circle cx='18.5' cy='18.5' r='12' fill='url(%23p)'/></g><path d='M15.5 15.5h6v6h-6z' stroke-width='.5' stroke='%23f008' fill='none'/></svg>") 0 0, auto`},
			r=e=>{End(e);i.remove();b.classList.remove('eye')},t=e=>e.keyCode==27&&r(e),p=e=>{m(e);copy('#'+F);st.t(0,rgb2hsl(F));r(e)};
			i.src=s;i.id='cp_eye';b.append(i);b.classList.add('eye');i.onload=()=>{W=c.width=i.width;H=c.height=i.height;x.drawImage(i,0,0,W,H)};
			i.setAttribute('tabindex','-1');i.focus();i.addEventListener('dragend',r);i.addEventListener('mousemove',m);i.addEventListener('click',p);i.addEventListener('keydown',t)
		}
	}
},
pt:e=>{				//log('st.pt('+e+')');
	let k=st_.pt, t=st_.pt=e?st_.pt<1?++st_.pt:0:st_.pt==void 0?1:o.st?o.st.pt:st_.pt;
	if(k!=(o.st||e?t:0)&&w.cur)cur.SS=0,o(),o.st&&(o.st.pt=t);
	cp_pt.classList[t?'add':'remove']('a');
	sync(e,'pt')
},
io:e=>{				//log('st.io('+e+')');
	let t=st_.io=e?st_.io<1?++st_.io:0:st_.io==void 0?0:st_.io;
	cp_io.classList[t?'add':'remove']('a');
	sync(e,'io');
	if(t)IO=IO||new IntersectionObserver(e=>e.forEach(e=>e.isIntersecting?(e.target.className=e.target.className.replace(/(?<=\s|^)ION(?=\s|$)/,'IO'),e.target.removeAttribute('style')):(e.target.setAttribute('style','height:'+Math.round(e.boundingClientRect.height)+'px'),e.target.className=e.target.className.replace(/(?<=\s|^)IO(?=\s|$)/,'ION'))),{rootMargin:'50% 0px'}),e&&o();
	else if(IO)IO.disconnect(),IO=o.M=0,forEach('.ION',e=>{e.removeAttribute('style'),e.className=e.className.replace(/(?<=\s|^)ION(?=\s|$)/,'IO')})
}
},
h=(e,k)=>{			//log('h('+e+','+k+')');
	let s=sessionStorage, h=JSON.parse(s.st_h||'[]'), ch=JSON.parse(s.st_ch||'{}'), c=s.st_hс=+s.st_hс||0;
	if(e||!s.st_ch){
		let n=JSON.parse(L.st_||'{}'), p={};
		if(!e){let a=Object.assign({},st_);['m','t','z','r','v','u','s','n','l','G','C','S','Y','A','U','mode','lang','url','sync','plus'].forEach(e=>delete a[e]);s.st_h='[{}]';s.st_ch=JSON.stringify(a);return}
		for(let i in n)p[i]=ch[i];if(JSON.stringify(p)==L.st_)return;
		h=h.slice(0,c+1);Object.assign(h[h.length-1],p);h.push(n);
		c=s.st_hс=h.length-1;s.st_h=JSON.stringify(h);s.st_ch=JSON.stringify(Object.assign(ch,n))
	}
	if(k<0&&c||k>0&&c<h.length-1){
		document.activeElement.removeAttribute('step');document.activeElement.blur();
		c = k<0&&c ? --s.st_hс : k>0? c<h.length-1 ? ++s.st_hс : c : 0;
		s.st_ch=JSON.stringify(Object.assign(ch,h[c]));L.st_=JSON.stringify(h[c]);
		sync(2);sync(1,Object.keys(h[c]).join(),1)
	}
	cp_hp.classList[c>0?'add':'remove']('a');
	cp_hn.classList[c<h.length-1?'add':'remove']('a')
},
o=()=>{				//log('st.o()');
	if(T0)clearTimeout(T0);T0=setTimeout(()=>{
		if(o.st&&!cur.SS)st_=o.st,o.st=0,sync(3);
		// console.time('performance');
		if(IO&&o.M!=cur.module)o.M=cur.module,IO.disconnect(),o.M&&forEach('.IO,.ION',e=>IO.observe(e),ge('page_body'));
		let e,y='yaContextCb',
		Pr=(p=cur.module=='feed'?'.feed_row>*':'.page_block',f='.PostHeaderSubtitle,.ads_ad_snippet,.ads_light_container,.post_marked_as_ads,.ads_wall_text,.wall_marked_as_ads,.wall_text_name_explain_promoted_post')=>{
			o.Pc=(o.Pc||[]).filter(e=>e.isConnected&&(gec('PostContentDumbSkeleton',e)||e.textContent.match(/erid[:\s=-]+\w+/i)&&e.remove()));
			(!+st_.ab[0]||IO)&&forEach(`${p}:not(.${Prnd})`,e=>{
				e.className+=' '+Prnd;
				if(!+st_.ab[0])o.Pc.push(e),forEach(f,a=>(a.closest(f.split(',')[0])?(e.setAttribute('style','display:block!important'),/(^|\P{L})(рекл|ad)/iu.test(a.innerText)||e.removeAttribute('style')):1)&&e.remove(),e);
				if(IO)e.className+=' IO',IO.observe(e)
			},ge('page_body'))
		},
		R=()=>{},
		A=()=>forEach(':is(.audio_page_layout,#spa_root) [class*="__userButtonsContainer"]:not([data-cp])',e=>{
			if(!o.A&&w.audio_layer_tt)o.A=1;if(!cur.A&&cur.module=='audio')cur.A=1;e.dataset.cp='';
			let t=+new Date,el=ce();
			el.className='cp_e';el.addEventListener('click',e=>!e.target.closest('.cp_eq')&&st.e(1));
			el.innerHTML=`<button class="vkuiIconButton__host"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path opacity=".7" d="M3 10v9m4-7v7m4-12v12m4-8v8m4-5v5"/><path d="M3 19v0m4-0v0m4-0v0m4-0v0m4-0v0"/></svg></button><div class="cp_eq eltt eltt_arrow_size_normal eltt_bottom">${ff.reduce((a,b)=>{return a+'<input type="range" max="24"><p>'+(b>999?b/1e3+'k':b)+'</p>'},'')}<svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -3 120 30" width="320" height="80" fill="none"><mask id="m${t}"><path fill="white"/></mask><path stroke-width=".7" stroke="var(--g2)" mask="url(#m${t})"/><path stroke="var(--g4)" stroke-width=".8" mask="url(#m${t})" style="filter:drop-shadow(0 0 .7px var(--n15))"/></svg><div class="eltt_arrow_back" style="margin-left:306px"><div class="eltt_arrow"></div></div><div class="cp_ep"></div><p class="cp_ar">1</p><p onclick="st.ar(1)">RATE</p><p class="cp_ec">0</p><p onclick="st.ec(1)">LIM</p></div>`;
			e.append(el);
			st.ar();st.e();
			let a=gec('cp_eq',e)
			,	b=gec('cp_ep',e)
			,	c=e.parentElement.querySelector('[class*="__volumeSlider"],.audio_page_player_volume_wrap')
			,	h=()=>forEach('body>div .vkuiTooltipBase__host .vkuiTooltipBase__content .vkuiSubhead__host',e=>e.childNodes.forEach(e=>e.data=Math.round(Math.log(1+34*ap.getVolume())/Math.log(35)*100)+'%'))
			,	v=e=>{if(e.deltaY||e.keyCode==38||e.keyCode==40)ap.set_volume(e),h(),End(e)};
			if(a)a.remove(),a.addEventListener('input',e=>{st.es(1,ie(e.target)/2,e.target.value-12,e.target.k);e.target.k=0}),
				a.addEventListener('contextmenu',End),
				a.addEventListener('mousedown',e=>{if(e.target.className=='cp_ar'){let a=e.target.offsetHeight,b=Math.floor(a/3),c=e.offsetY,d=c<=b?.5:a-b<=c?-.5:0;d&&st.ar(1,d)}if(e.target.className=='cp_ec'){let a=e.target.offsetHeight,b=Math.floor(a/4),c=e.offsetY,d=c<=b?12:a-b<=c?-12:c>=(a-b)/2&&c<=(a+b)/2?0:1;if(d!=1)st_.ep>1&&(st_.ep=0),st.es(-1,1,d)}if(e.target.type=='range'){if(e.button==0)e.target.k=1;else st.es(1,ie(e.target)/2,0,1),End(e)}}),
				a.addEventListener('wheel',e=>{if(e.target.className=='cp_ar'){st.ar(1,e.deltaY>0?-.1:.1)}if(e.target.className=='cp_ec'){st.es(-1,0,e.deltaY>0?-1:1)}if(e.target.type=='range')st.es(1,ie(e.target)/2,Math.max(-12,Math.min(12,e.target.value-12+(e.deltaY>0?-1:1))));End(e)},{passive:false}),
				el.addEventListener('mouseenter',()=>{clearTimeout(el.T);el.T1=setTimeout(()=>{if(!a.isConnected)el.append(a),st.es(),st.ar(),st.ec()},150)}),
				el.addEventListener('mouseleave',()=>{clearTimeout(el.T1);el.T=setTimeout(()=>{a.remove();sync(1,'eq,eq1,ep')},200)});
			if(b)b.addEventListener('mouseenter',fe),
				b.addEventListener('wheel',e=>{st_.ep+=(e.deltaY<0?-1:1);st.es()},{passive:false}),
				b.addEventListener('click',e=>{st_.ep+=(e.offsetY<Math.floor(e.target.offsetHeight/2)?-1:1);st.es()}),
				b.addEventListener('contextmenu',e=>{st_.ep=0;st.es()}),
				b.addEventListener('keydown',e=>{if(e.keyCode==38)--st_.ep,st.es();if(e.keyCode==40)++st_.ep,st.es();End(e)});
			if(c)c.addEventListener('mouseenter',fe),
				c.addEventListener('contextmenu',e=>{End(e);ap.set_volume(.14459058185587104);h()}),
				c.addEventListener('keydown',v),
				c.addEventListener('wheel',v,{passive:false})
		}),
		M=()=>{
			let a={'\/albums?':'photos'};
			for(let b in a){if(new RegExp(b).test(location.pathname))return a[b]}
		};
		if(st_.mode){
			forEach('a[href*="/2style#WyI"]',e=>{
				if(e.parentElement){
					let h=e.hash.slice(1);
					[...e.attributes].forEach(a=>e.removeAttribute(a.name));e.className='cp_ss';e.id='cp_ss';
					try{
						e.textContent=l.Slt+(/^y[bcetomu\.]{10}\/|^v[ceiom\.]{8}\/|^c[mcbou\.]{7}\/|vk.com\/video|^V|\.mp4$|\.webm$/.test(JSON.parse(Jc(atou(h)))[1])?' '+l.sLt+' ':' ')+l.slT;e.addEventListener('click',e=>{End(e);st.ss(h)},{capture:1});e.dataset.h=h
					}catch(r){
						e.textContent=l.ThemeErr;e.addEventListener('mouseenter',()=>st.tt(e,h.length>=(e.parentElement.classList.contains('pv_desc_cont')?1900:3900)?l.ThemeErrCut:l.ThemeErrInfo,-10,-10,'300px'))
					}
				}
			});
			if(cur.pvImageAreaWrap&&!cur.pvImageAreaWrap.A)cur.pvImageAreaWrap.A=1,cur.pvImageAreaWrap.addEventListener('wheel',e=>!e.altKey&&!e.ctrlKey&&!e.shiftKey&&cur.pvData[cur.pvListId].length>1&&Photoview.show(false,cur.pvIndex+(e.deltaY>0?1:-1)),{passive:true})
		}
		if(!st_.m)return body&&body.classList.remove('vk_tabbar_top'),Pr('.wall_item','.PostHeader__description,.ads_mark,.pia_item[href*="/ad_"]');
		if(!o.A)A();
		if(!w.mv_bg&&(w.mvcur?.mvShown&&w.mv_main_info||w.react_rootVideo_page)){
			let m=document.querySelector('#mv_main_info [class*="PostFooter__actions"],#react_rootVideo_page [class*="PostFooter__actions"],#mv_main_info .like_btns'), a=ce();
			a.id='mv_bg';a.dataset.title=l.Set_bg;a.addEventListener('mouseenter',e=>st.tt(a));
			a.addEventListener('click',()=>st.bg(1,location.href));
			m&&m.append(a)
		}
		if(st_.nl)o.Mo?!o.Mo.isConnected&&(o.Mo=0,w.postMessage({actionType:'ModalClose'})):body&&!body.classList.contains('layers_shown')&&(o.Mo=body.querySelector('[class*=ModalBox]'))&&w.postMessage({actionType:'ModalOpen'});
		switch(cur.module||M()){
			case 'im':
				if(!w.cp_imc){
					let c=document.querySelector('.im-page--dialogs-extra-menu,#burger-menu,.im-page--dialogs-search');
					if(c){
						let a=ce(), b=ce(), s=c.querySelectorAll('[class*="_sep"]'), l=lang()?['Удалить','Отмена','Удаление диалогов','Удалить все сообщения','Количество диалогов','все','Количество последних диалогов, которые будут проверены','Количество сообщений','число','Диалоги с выбранным числом сообщений или менее будут удалены. Укажите <b>0</b> если хотите удалить все диалоги','Не удалять','важные','неотвеченные','непрочитанные','Вы действительно хотите <b>удалить всю переписку</b> в диалогах?<br><br>Отменить это действие будет <b>невозможно</b>','Диалоги для удаления не найдены','. Попробуйте изменить настройки','Найдены диалоги для удаления 0. Подождите, удаление в фоновом режиме','Удалено 0 диалогов из 1','Процесс удаления завершен. ','Подробнее']:['Delete','Cancel','Delete dialogs','Delete all messages','Number of dialogs','all','Number of recent dialogs to be checked','Number of messages','number','Dialogs with the selected number of messages or less will be deleted. Enter <b>0</b> if you want to delete all dialogs','Do not delete','starred','unanswered','unread','Do you really want to <b>delete all correspondence</b> in the dialogs?<br><br>Undo this action will be <b>impossible</b>','Dialogs for deletion not found','. Try changing the settings','Found dialogs to delete 0. Wait deleting in the background','Removed 0 dialogs from 1','The removal process is completed. ','More info'];
						if(c.id=='burger-menu')
							a.className='ActionsMenuAction ActionsMenuAction--danger ActionsMenuAction--size-regular',
							a.innerHTML='<i class="ActionsMenuAction__icon"><svg width="20" height="20" viewBox="0 0 14 14"><path stroke="currentcolor" fill="none" d="M11 5q1 0 1-1 0-1-1-1h-1.6c-.2 0-.2-.8-1.4-.8h-2c-1.2 0-1.2.8-1.4.8h-1.6q-1 0-1 1 0 1 1 1zM3 5.1v4.9q0 2 2 2h4q2 0 2-2v-4.9"/></svg></i><span class="ActionsMenuAction__title">'+l[2]+'</span>';
						else if(cur.imClassicInterface && /\/im/.test(location.pathname))
							a.textContent=l[2],a.className='ui_actions_menu_item im-action im-action_clear';
						a.id='cp_imc';(s.length?s[s.length-1]:c).before(a);
						a.addEventListener('click',e=>{
							function imc(o){
								let s=0, smi=0, a=[], c=0, h,d,p, t=cp_imcf1.value, u=cp_imcf2.classList.contains('on'), v=cp_imcf3.classList.contains('on'), k=cp_imcf4.classList.contains('on'), x=cp_imcf0.value;
								if(t=='')return inpEr(cp_imcf1);
								if(!o)return new MessageBox({title:l[3]}).content(l[14]).addButton(l[0],()=>{curBox().hide();imc(1)},'ok').addButton(l[1],()=>curBox().hide(),'no').show();
								for(;;){
									r(2,'/im','act=a_get_dialogs&al=1&gid='+cur.gid+'&start_message_id='+smi+'&tab=all',e=>{
										e=JSON.parse(e).payload[1];d=[];p=e[1];
										for(let i in p){d[p[i].lastmsg_meta[0]]=p[i]}
										d.reverse();
										for(let i in d){a[c++]=d[i];if(x!=0&&c>=x)break}
										smi=a[a.length-1].lastmsg_meta[0];
										h=e[0].has_more
									});
									if(!h||x!=0&&c>=x)break
								}
								a=a.filter(e=>(t==0||e.in_up_to_cmid<=t||e.lastmsg_meta[8]<=t)&&!(u&&(e.folders==1||e.isDonutChat||e.peerId==id||e.major_sort_id>0||e.adminIds&&e.adminIds.find(e=>e==id||e==-cur.gid)))&&!(v&&e.folders==2)&&!(!cur.gid&&k&&e.unread>0));
								if(!a.length){a=b.firstChild;a.className='box_error';a.textContent=l[15]+(c?l[16]:'')}else curBox().hide(), showDoneBox(l[17].replace(/\d/g,a.length));
								for(let i=0;i<a.length;i++)
									setTimeout(()=>{
										st.dh('messages.deleteConversation',{group_id:cur.gid,peer_id:a[i].peerId});
										let p=l[18].replace(/\d/g,n=>+n?a.length:i+1);
										if(i==a.length-1)showDoneBox(l[19]+p,{out:5000});else topMsg(p,5)
									},1005*s++)
							}
							b.innerHTML=`<div></div><label for="cp_imcf0">${l[4]} </label><input id="cp_imcf0" type="number" class="dark c" placeholder="${l[5]}"><div for="cp_imcf0">${l[6]}</div><br><label for="cp_imcf1">${l[7]} </label><input id="cp_imcf1" type="number" class="dark" placeholder="${l[8]}"><div for="cp_imcf1">${l[9]}</div><br>${l[10]} <div id="cp_imcf2" class="checkbox on">${l[11]}</div><div id="cp_imcf3" class="checkbox on">${l[12]}</div><div id="cp_imcf4" class="checkbox on">${l[13]}</div><style>#cp_imcf0+div,#cp_imcf1+div{font-size:12px;line-height:14px;color:var(--text_secondary);margin-top:4px}#cp_imcf2,#cp_imcf3,#cp_imcf4{display:inline-block;padding:10px 5px 5px}${cur.gid?'':'#cp_imcf3{display:none}'}</style>`;
							w.MessageBox&&(new MessageBox({title:l[2]}).content(b).addButton(l[0],()=>imc(0),'ok').addButton(l[1],()=>curBox().hide(),'no').show())
						});
						b.addEventListener('click',e=>{
							e=e.target;
							if(e.closest('.checkbox'))e.classList.toggle('on');
							if(e.closest('.c')&&!e.value)st.dh('messages.getConversations',{count:0,group_id:cur.gid},d=>e.value=d.count)
						})
					}
				}
				if(!w.cp_imh){
					let a=document.querySelector('.im-page--header-more .ui_actions_menu,.ConvoMainActionsMenu');
					if(a){
						let b=ce(), c=st_.imh?st_.imh.split(','):[], p=peer(), d=c.findIndex(e=>e==p), e=d>-1, f=e=>{
							let t=' '+(lang()?(e?'Показать':'Скрыть')+' беседу':(e?'Show':'Hide')+' conversation');
							if(a.classList.contains('ui_actions_menu')){
								b.className='ui_actions_menu_item im-action im-action_pin_'+(e?'un':'')+'hide';b.textContent=t
							}else{
								b.className='ActionsMenuAction ActionsMenuAction--danger ActionsMenuAction--size-regular';
								b.innerHTML='<i class="ActionsMenuAction__icon"><svg width="20" height="20" viewBox="0 0 13 13"><path stroke="currentcolor" fill="none" stroke-linecap="round" d="M3.2 2.5 10.9 10.2M3.7 3.8a1.55 1 0 1 0 5.8 5.8M6.6 3.2c4 0 6.8 2.6 5 4.9M5.6 5.6a1 1 0 1 0 2.2 2.1"/></svg></i><span class="ActionsMenuAction__title">'+t+'</span>'
							}
						};
						b.id='cp_imh';f(e);
						b.addEventListener('click',()=>{
							e?(c.splice(d,1),!c[0]&&cp_abim.classList.remove('a')):(cp_abim.classList.add('a'),c.push(p));
							f(e=!e);st_.imh=c.join();
							sync(1,'imh',1);st.ab(1)
						});a.append(b)
					}
				}
				if(!o.Amr){
					let t=w.Audio,r=o.Amr=1;
					w.Audio=function(){
						let n=new t(...arguments);
						return n.addEventListener('play',()=>{
							let w=gec('audio-msg-player'),e=gec('audio-msg-track_player-attached');
							if(w&&!w.a&&e&&(e.dataset.mp3==n.src||e.dataset.ogg==n.src)){
								let a=ce(),f=(a,b)=>a.textContent=(n.playbackRate=r=fix(b<.1||b>3?1:b,1))+'x';
								f(w.a=a,r);a.className='audio-msg-track--rate';w.append(a);
								a.addEventListener('click',e=>{f(a,r+.5);End(e)});
								a.addEventListener('contextmenu',e=>{f(a,1);End(e)});
								a.addEventListener('wheel',e=>{f(a,r+(e.deltaY<0?.1:-.1));End(e)},{passive:false})
							}
						}),n
					}
				}
			break;
			case 'feed':Pr();
			break;
			case 'search':
			case 'wall':Pr();
			break;
			case 'public':
			case 'groups':cur.wallTab!='postponed'&&Pr();
				if(!cur.G){
					if(e=document.querySelector('.redesigned-group-cover')){
						{
							let v=ce();v.classList.add('v');e.append(v);v.addEventListener('click',()=>st.pc(1));st.pc()
						}
					}

					cur.G=1;

				}
			break;
			case 'profile':
			case 'wall_archive':Pr();
				if(st_.pt&&!cur.SS&&cur.oid){
					cur.SS=1;st.dh('users.get',{user_ids:cur.oid,fields:'about'},d=>{
						if(d=(d.users?d.users:d)[0].about)
							try{
								let e=d.match(/\/2style#(\S+)/);
								e&&e[1]&&JSON.parse(Jc(atou(e[1])))&&(st_.u=0,o.st=Object.assign({},st_),st_.adb=0,st.ss(e[1],1),st_.adb=o.st.adb)
							}catch(e){}
					})
				}
			break;
			case 'photos':
				forEach('.photos_album_intro_desc:not([data-cp])',e=>{e.dataset.cp='';e.innerHTML=e.innerHTML.replace(/([^>\s]*vk.com(\/[^<\s]+))/,'<a href="$2">$1</a>')});
			break;
			case 'audio':
				if(!cur.A)A();
				if(IO){
					let r=gec('audio_page__audio_rows_list');
					r&&(IO.w?.nextElementSibling||r.querySelectorAll('.audio_page__audio_rows_list>div').length>500)&&forEach('.audio_page__audio_rows_list>div',(e,i)=>{
						if(i%20==0){
							IO.w=ce('section');
							e.before(IO.w);
							IO.w.className='IO';
							setTimeout(()=>IO.observe(IO.w),5e3)
						}
						IO.w.append(e)
					},r)
				}
			break;
			case 'video':
				if(!cur.V&&ge('content')){
					cur.V=ge('content');
					cur.V.addEventListener('mouseover',e=>{
						let t=e.target.closest('.video_item:not([data-cp]),.VideoCard:not([data-cp]),a[data-testid="video_card_thumb"]:not([data-cp])');
						if(t){
							t.dataset.cp='';
							let a=gec('video_thumb_actions',t)||gec('VideoCard__actions',t)||t.href&&t.nextSibling, b=ce();
							if(a)b.className='VideoCard__action_bg',
								t.href&&(b.style.marginRight=b.style.padding='4px'),
								b.addEventListener('click',e=>{st.bg(1,t.href?t.href:'vk.com/video'+t.dataset.id);End(e)}),
								a.append(b)
						}
					});
				}
				break;
			case 'docs':
				forEach('a[class*="FileCell"]:not([data-cp])',e=>{
					e.dataset.cp='';
					let a=e.querySelector('[class*="vkuiButtonGroup"]'), b=a.firstElementChild.cloneNode(!0), c=b.querySelector('svg'), d=e.querySelector('[class*="typeVideo"],[class*="vkuiImageBase"]')?'bg':'fn';
					if(d=='bg'||/\.(ttf|otf|woff2|woff)/.test(e.textContent)){
						c.classList.add('docs_'+d);c.style.display='none';
						b.setAttribute('onmouseenter','st.tt(this)');b.dataset.title=l['Set_'+d];
						b.addEventListener('click',a=>{st[d](1,e.href);End(a)});
						a&&a.prepend(b)
					}
				});
			break
		}
		// console.timeEnd('performance')
	},400/navigator.hardwareConcurrency)
},
u=(h,v,e,c)=>{		//log('u('+v+','+e+','+c+')',h);
	h&&h()
},
c=(e,k,x,y)=>{		//log('c('+e+','+k+','+x+','+y+')');
	if(!st_.m)return;
	let a=n(st_.c).split("'"), C=c.C=c.C||ce(), T=c.T=c.T||ce(), fr=/([^/]+)\.(ttf|otf|woff2|woff)/, ft=e=>e[0]=='='?e.match(/^[^=]*=([^&"':?\s\|]*).*/)[1].replace(/\+/g,' '):fr.test(e)?e.match(fr)[1]:e;
	if(e){
		k==0&&(a[0]=(cp_c.classList.toggle('a')?'':(st.t(),'-'))+Math.abs(a[0]));
		k==1&&(a[1]=+cp_c1.value,a[2]=+cp_c2.value,a[3]=+cp_c3.value,a[15]=+cp_cd.value);
		k==2&&(a[4]=clamp(+a[4]+x,40),a[5]=clamp(+a[5]+y,40));
		k==3&&(a[4]=~x?Math.round(x/.6):a[4],a[5]=~y?Math.round(y/.6):a[5]);
		k==4&&(a[10]=x,a[11]=y);
		k==9&&(a[9]=+cp_c9.classList.toggle('a'));
		k==11&&(x.match('@')||x!=ft(a[13]))&&(a[13]=x,cp_cb.style.setProperty('--f',`'${cp_cb.value=ft(x)}'`));
		k==13&&(a[16]=+cp_ce.classList.toggle('a'))
	}else{
		for(let i=0;i<16;i++)a[i]=a[i]||['-0',15,10,10,22,22,0,0,0,0,5,90,0,'',0,100,0][i];
		cp_c.classList[n(a[0],1)?'add':'remove']('a');
		cp_c1.value=+a[1];
		cp_c2.value=+a[2];
		cp_c3.value=+a[3];
		cp_c9.classList[+a[9]?'add':'remove']('a');
		cp_cb.style.setProperty('--f',`'${cp_cb.value=ft(a[13])}'`);
		cp_cd.value=+a[15];
		cp_ce.classList[+a[16]?'add':'remove']('a')
	}
	if(!e||k==-1)opt(e,x,a[0],cp_c0.lastElementChild,[l.FromText,l.FromAccent,l.YourColor],t=>{cp_c0.classList[t==2?'add':'remove']('p');if(k==-1)st_.t=[[0,1,3][st_.tc],1,15][a[0]=t],st.t(t==2&&cp_c0)});
	if(!e||k==6)opt(e,x,a[6],cp_c6.lastElementChild,l.ClockDate,t=>cp_c6.classList[(t>1?t>2?(c.d=0):(c.d=l.day,c.m=l.month.map(e=>e.slice(0,3))):(c.d=l.dayFull,c.m=l.month),a[6]=t)?'add':'remove']('a'));
	if(!e||k==7)opt(e,x,a[7],cp_c7.lastElementChild,l.ClockSec,t=>T.textContent=(a[7]=t)==1?':':'');
	if(!e||k==8)opt(e,x,a[8],cp_c8.lastElementChild,l.ClockEffect,t=>cp_c8.classList[(a[8]=t)?'add':'remove']('a'));
	if(!e||k==10)opt(e,x,a[12],cp_ca.firstElementChild,l.ClockFont,t=>cp_ca.classList[(a[12]=t)>1?'add':'remove']('a'));
	if(!e||k==12)opt(e,x,a[14],cp_cc.lastElementChild,l.ClockFormat,t=>a[14]=t);
	if(!e&&!k||k==10||k==11){
		let f=a[12]<1||a[12]>1&&a[13][0]=='='?`@import url("//fonts.googleapis.com/css2?display=swap&family${a[12]<1?'=Montserrat:wght@100':a[13]}");`:
				a[12]>1&&fr.test(a[13])?`@font-face { font-family: "${a[13].match(fr)[1]}"; src: local("${a[13].match(fr)[1]}"), url("${a[13].replace(/^F([\w-]+[A-Z][\w-]+).*/,'/s/v1/doc/$1').replace(/^F([\d-_]+).*/,'/doc$1')}"); font-display: swap; }`:''
		, s=st4.sheet, c=s.cssRules;
		c[0]&&c[0].cssText!=f&&s.removeRule(); !c[0]&&f&&s.insertRule(f,0)
	}

	C.className='cp_c '+(+a[6]?'d ':'')+(+a[7]?['s','s0','s1','s2'][a[7]-1]+' ':'')+(+a[9]?'m ':'')+'p'+((a[10]>50?1:0)+(a[11]>50?2:0));
	C.style.setProperty('--s',fix(8+(Math.min(a[1],26)+Math.pow(Math.max(a[1]-24,0),1.5)/2)*2)+'px');
	C.style.setProperty('--d',fix(8+(Math.min(a[2],26)+Math.pow(Math.max(a[2]-24,0),1.5)/2)*2)+'px');
	C.style.setProperty('--ds',+a[8]?a[8]<2?'drop-shadow('+(a[4]/40-.5)+'em '+(a[5]/40-.5)+'em '+(a[3]/200)+'em rgba(0,0,0,'+(a[15]/100)+'))'+(a[3]>50?' drop-shadow(0 0 '+(a[3]/400)+'em rgba(0,0,0,'+((a[3]-50)/50*a[15]/100)+'))':''):(hue(),'drop-shadow('+(a[4]/40-.5)+'em '+(a[5]/40-.5)+'em '+(a[3]/200)+'em var(--cs)) drop-shadow(0 0 '+(a[3]/400)+'em var(--cs))'):'none');
	C.style.setProperty('--x',(a[10]>50?100-a[10]:a[10])+'vw');
	C.style.setProperty('--y',(a[11]>50?100-a[11]:a[11])+'vh');
	C.style.setProperty('--f',(a[12]<1?`'Montserrat'`:a[12]<2?'':`'${ft(a[13])}'`));
	C.style.setProperty('--w',(a[12]<1?100:a[12]>1&&a[13].match(/\d{3}$/)?a[13].match(/\d{3}$/)[0]:'var(--w)'));
	cp_c4.style.setProperty('--p',(a[4]*.6)+'px '+(a[5]*.6)+'px');
	c.s=+a[7];c.f=+a[14];n(a[0],1)?+a[16]?cpb.firstElementChild.append(C):cpw.append(C):C.remove();

	c.U&&c.U();st_.c=a.join("'");
	if(k<1||k>3)sync(1,'c');

	if(c.U||!n(a[0],1))return;
	C.append(T);c.U=e=>setTimeout(()=>{	//log('clock update('+e+')');
		let z=e=>e<10?'0'+e:e, t=new Date, h=z(t.getHours()), m=z(t.getMinutes()), s=z(t.getSeconds()), d=t.getDay(), D=t.getDate(), M=t.getMonth();
		T.dataset.m=(c.f?h%12||12:h)+(c.s==1?'':':'+m);
		T.dataset.s=c.s?(c.s==1?m:(c.s==2?':':'')+s):'';
		C.dataset.d=c.d?c.d[d]+', '+D+' '+c.m[M]:z(D)+'.'+z(M+1)+'.'+t.getFullYear();
		e&&c.U(1e3-t.getMilliseconds())
	},e);c.U(1);
	C.addEventListener('mousedown',e=>{
		let A, X=e.offsetX, Y=e.offsetY, x, y, m=e=>(x=clamp((e.x+(e.x>innerWidth/2?C.offsetWidth-X+(innerWidth-b.clientWidth):-X))/innerWidth*100,100,0,1), y=clamp((e.y+(e.y>innerHeight/2?C.offsetHeight-Y+(innerHeight-b.clientHeight):-Y))/innerHeight*100,100,0,1)),
		f=()=>{A=AF(f);if(x==void 0)return C.classList.add('a');C.classList.remove('p0','p1','p2','p3');C.classList.add('p'+((x>50?1:0)+(y>50?2:0)));C.style.setProperty('--x',(x>50?100-x:x)+'vw');C.style.setProperty('--y',(y>50?100-y:y)+'vh')},
		s=e=>{w.removeEventListener('mousemove',m);cancelAnimationFrame(A);(x!=void 0)&&c(1,4,x,y)};f();
		w.addEventListener('mousemove',m);
		w.addEventListener('mouseup',s,{once:1})
	})
},
l=lang()?{
	installed:' установлен',
	rate:'Оценить это расширение',
	gs:'Скопируйте ссылку на ваши настройки и свободно делитесь вашей темой с друзьями и подписчиками у кого установлено это расширение',
	copy:'Скопировать',
	open:'Открыть',
	AdditionalFeatures:'Дополнительные возможности',
	pc:'Компактная обложка групп',
	pcInfo:'Сдвигает блок с основной информацией на обложку',
	pt:'Тема страницы профиля',
	ptInfo:'Применять к страницам пользователей их темы, сохраненные в информации профиля.<br>При просмотре страницы с темой все изменения кроме этого, не сохраняются',
	is:'Установить текущую тему на свою страницу',
	isInfo:'В личной информации будет перезаписано поле «О себе», сохранение других полей не гарантируется',
	io:'Оптимизатор скролла',
	ioInfo:'Скрывает блоки постов за видимой частью экрана, уменьшая нагрузку на процессор для страниц с «бесконечной прокруткой»',
	ap:'Авто включение музыки',
	apInfo:'Сохранить активность проигрывателя для автоматического включения музыки при обновлении вкладки браузера<br><br>При сбоях в работе функции:<br>кликните на настройки в адресной строке и разрешите сайту vk.com использовать звук или авто воспроизведение',
	q:'Смена раскладки клавиатуры',
	qInfo:'Функция смены раскладки RUS / ENG<br>в полях ввода, нажатием <b>Ctrl</b> + <b>Q</b><br>Инвертировать регистр <b>Alt</b> + <b>Q</b>',
	aw:'Отключить away.php',
	awInfo:'Облегчает переход на другие сайты, но вы не будете знать о подозрительных ссылках',
	sl:'Уменьшить размер лайков',
	slInfo:'Классический размер иконок лайков, еще как до увеличения',
	ol:'Классический стиль лайков',
	olInfo:'Скрывает реакции и смещает счетчик',
	op:'Классический стиль постов',
	opInfo:'Возвращает текст поста наверх и добавляет отступы',
	ab:'Сборщик мусора',
	abInfo:'Эта функция заменяет <b>Adb</b> с меньшей загрузкой процессора.',
	abf:'Возможные друзья',
	abg:'Рекомендуемые сообщества',
	aba:'Рекомендуемые игры',
	abp:'Добавление поста из ленты',
	abpInfo:'Скрывает из ленты блок отправки поста, продублированный с вашей стены',
	abh:'Блок историй',
	abs:'Рекомендуемые видео',
	abr:'Комментарии в постах',
	abrInfo:'Скрывает комментарии под постами, сосредотачивая внимание на контенте.<br>Комментарии будут показаны / скрыты по нажатию <b>кнопки комментариев</b>',
	abc:'Мини чат',
	abm:'Заблокированные пункты меню',
	abm1:'Профиль',
	abm2:'Лента',
	abm3:'Мессенджер',
	abm4:'Друзья',
	abim:'Скрытые беседы',
	abimInfo:'Функция активна пока расширение включено, даже если тема отключена !!!<br><br>Показать / Скрыть: <b>Alt</b> + <b>I</b>',
	plus:'',
	plusInfo:'',
	plusMore:'',
	u:'Нажмите на версию чтобы проверить наличие горячих обновлений',
	e:'ошибка',
	h:'Скрыть',
	s:'Показать',
	em:'Изменение размера стикеров и эмодзи',
	ek:'Стикеры',
	es:'Эмодзи',
	et:'Окно выбора',
	ra:'Уменьшить округление аватарок',
	nl:'Скрыть задний слой',
	nlInfo:'Скрывать задний слой при открытии всплывающих окон',
	Color:'Цвет',
	ColorInfo:'Нажмите клавишу для регулировки шага:<br><b>Ctrl</b> - шаг в 1/4 диапазона<br><b>Shift</b> - шаг в 1/10 диапазона<br><b>Alt</b> - шаг в 1/1000 диапазона',
	pasteColor:'Вставьте или впишите цвет в шестнадцатеричном виде и нажмите <b>Enter</b><br>Для активации пипетки, нажмите: <b>Alt</b> + <b>Z</b>',
	BlockColor:'Цвет блоков',
	FromBlock:'от блоков',
	BorderColor:'Цвет окантовки',
	AccentColor:'Цвет акцента',
	FromAccent:'от акцента',
	Contrasting:'контрастный',
	YourColor:'свой',
	TextColor:'Цвет текста',
	TextShadow:'Тень текста',
	BackColor:'Цвет фона',
	Header:'Цвет шапки',
	HeaderText:'Текст шапки',
	MenuColor:'Цвет меню',
	favColor:'Цвет фавикона',
	favInfo:'Закруглить фавикон',
	OnlineColor:'Цвет онлайна',
	LikeColor:'Цвет лайков',
	ButtonColor:'Цвет кнопок',
	UnreadColor:'Цвет непрочитанных',
	Brightness:'Яркость',
	Transparent:'Прозрачность',
	Contrast:'Контрастность',
	Saturation:'Насыщенность',
	Hue:'Оттенок',
	HueRotation:'Поворот оттенка',
	AutoHueRotation:'Автоматический поворот оттенка, ползунок регулирует скорость',
	BackgroundMove:'Параллакс',
	BackgroundMoveInfo:'Перемещение фона при движении мыши',
	BackgroundMoveInvert:'Перемещение в том же направлении',
	Sepia:'Сепия',
	Invert:'Инвертировать',
	Vignette:'Виньетка',
	Noise:'Добавить шум',
	BlurBackground:'Размытие фона',
	BlurBlock:'Размытие блоков',
	PerformanceInfo:'Ресурсоемкая функция - не рекомендуется на слабых графических устройствах !!!',
	FromText:'от текста',
	Standard:'стандартный',
	Rounded:'закругленный',
	FromBorder:'от окантовки',
	BlockShadow:'Тень блоков',
	bsc:'Смещение тени. Удерживая клавиши, фиксируется направление:<br>- <b>Ctrl</b> горизонтальное <br>- <b>Shift</b> вертикальное<br> - <b>Правый клик</b> сброс<br>',
	Inset:['снаружи','внутри','везде'],
	Blur:'Размытие',
	Glow:'Свечение',
	Spread:'Распространение',
	part:'часть ',
	in:'в ',
	all:'все ',
	WithoutSpaces:'без отступов',
	Auto:'авто',
	off:'отключено',
	sec:'сек',
	min:'мин',
	hour:'час',
	ChangeAudiotrack:'от смены трека',
	RainbowColor:'спектр радуги',
	RgbColor:'переливающийся',
	Background:'фон',
	MenuBackground:'Добавить фон для меню',
	Mini:'мини',
	MenuMini:'Миниатюрное меню без подписей',
	Fix:'фикс',
	MenuFix:'Фиксированное меню при скролле',
	BlockStyle:'Стиль блоков',
	PageOffset:'Смещение страницы',
	Visualizer:'Визуализатор',
	VisualizerInfo:'Музыкальный визуализатор - преобразует звуковые данные трека в визуальные эффекты<br><br>Включить / Отключить: <b>Alt</b> + <b>V</b>',
	VisualizerOnly:'Скрыть все кроме плеера и визуализатора по нажатию на “<b>Визуализатор</b>” или клавиша: <b>Esc</b>',
	VisualizerColor:'Цвет визуализатора',
	volume:'Громкость',
	Gain:'Усиление',
	GainInfo:'Ручное управление чувствительностью визуализатора, вплоть до отключения',
	Strobes:'Стробы фона',
	Rgbfilter:'RGB фильтр',
	Trembling:'Дрожание фона',
	Approach:'Приближение фона',
	DocError:'Файл недоступен',
	Font:'Шрифт',
	FontInfo:'Шрифт:<br>Включить / Отключить: <b>Alt</b> + <b>F</b>',
	FontPaste:'Вставьте имя шрифта или адрес ссылки',
	FontPasteInfo:'Поддерживаются:<br>- имена на локальные шрифты<br>- ссылки на Google fonts<br>- ссылки на файлы: ttf, otf, woff, woff2<br><br>Если шрифт не поддерживает ваш язык, он останется без изменений.',
	FontSize:'Размер шрифта',
	FontSizeInfo:'Можно выставить размер от 8 до 24 px.<br>Для изменения размера используйте:<br>- цифры на клавиатуре<br>- колесо мыши<br>- стрелки вверх вниз<br><br>Чтоб вернуть стандартное значение удалите цифры',
	LatestFont:'Последние шрифты',
	Set_fn:'Установить как шрифт',
	Wallpaper:'Фоновый рисунок',
	WallpaperInfo:'Фоновый рисунок:<br>Включить / Отключить: <b>Alt</b> + <b>B</b><br>Воспроизведение / Пауза: <b>Ctrl</b> + <b>Space</b>',
	WallpaperPaste:'Вставьте ссылку на обои',
	WallpaperPasteInfo:'Поддерживаются прямые ссылки на Изображения и Видео в формате (mp4, webm, m3u8)<br><br>Также можно установить анимированный фон из <b>Видео и Документов</b>, просто скопируйте ссылку на него и вставьте в это поле',
	sbi:'Поиск по изображению',
	Set_bg:'Установить как фон',
	bgs:'Настройки фона',
	Size:'Размер',
	bgr:['заполнение','экрана','фона','растянуть','замостить'],
	Position:'Положение',
	Reflection:'Отражение',
	btr:['без','горизонтальное','горизонт и вертикаль','вертикальное'],
	bgp:['по центру','по центру верх','по центру низ','слева верх','слева по центру','слева низ','справа верх','справа по центру','справа низ'],
	SlideShow:'Слайд-шоу',
	SlideShowRandom:'Слайд-шоу в случайном порядке',
	LatestWallpapers:'Последние фоны',
	Themes:'Темы для вк',
	ThemeInfo:'Выбирайте из готовых, или делитесь своими темами',
	ThemeIns:'Тема установлена',
	ThemeErr:'Тема с ошибкой',
	ThemeErrCut:'Вк имеет ограничение длины текста.<br>Удалите ненужные фоны из темы или сохраните в текстовый файл',
	ThemeErrInfo:'Ошибка в указанных данных, эту тему невозможно установить.',
	Slt:'Установить',
	sLt:'живую',
	slT:'тему',
	LiveWallpaper:'Живые обои',
	LiveWallpaperInfo:'Выбирайте любые живые обои, и устанавливайте в 1 клик',
	imn:'Открывать мессенджер из уведомлений',
	imnInfo:'При нажатии на уведомление о новом сообщении, вместо мини-чата открывается мессенджер',
	rmInfo:'Перемещает положение списка чатов в новом интерфейсе мессенджера',
	rm:'Список чатов справа',
	ima:'Опустить иконки действий',
	imaInfo:'Опускает иконки действий сообщений (ответ, пересылка и т.д.) для удобного доступа',
	imr:'Быстрые реакции',
	imrInfo:'Ускоряет анимацию появления панели реакций убирая задержки',
	imu:'Подсветка непрочитанных',
	imuInfo:'Подсвечивает непрочитанные исходящие сообщения (без галочек или с одной галочкой)',
	set:'Настроить',
	undo:'Отменить',
	redo:'Повторить',
	Clock:'Часы',
	ClockInfo:'Часы:<br>Включить / Отключить: <b>Alt</b> + <b>C</b>',
	ClockColor:'Цвет часов',
	ClockSize:'Размер циферблата',
	day:['вс','пн','вт','ср','чт','пт','сб'],
	dayFull:['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
	month:['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декaбря'],
	Date:'Дата',
	DateSize:'Размер даты',
	ClockDate:['отключено','полная','кратко','числовая'],
	Sec:'Секунды',
	ClockSec:['отключено','двоеточие','полные','низ','верх'],
	Effect:'Эффект',
	ClockEffect:['отключено','тень','свечение'],
	ClockDrag:'Перетаскивание',
	ClockDragInfo:'Позиционирование часов на экране перетаскиванием мыши',
	ClockFont:['по умолчанию','от основного','свой'],
	Format:'Формат',
	ClockFormat:['24-часа','12-часов'],
	ClockPin:'Закрепить',
	ClockPinInfo:'Закрепляет часы на слое с фоном'
}:{
	installed:' installed',
	rate:'Rate this extension',
	gs:'Copy the link to your settings to share your theme with your friends and followers who have this extension installed',
	copy:'Copy',
	open:'Open',
	AdditionalFeatures:'Additional features',
	pc:'Compact cover groups',
	pcInfo:'Move block with main info over cover',
	pt:'Profile page theme',
	ptInfo:'Apply to user pages their themes saved in profile information.<br>When viewing the page with theme, all changes except this are not saved',
	is:'Install the current theme on your page',
	isInfo:'In the Personal information will be overwritten the field «About me», saving other fields is not guaranteed',
	io:'Scroll optimizer',
	ioInfo:'Hides blocks of posts behind the visible part of the screen, reducing CPU load for pages with «infinite scrolling»',
	ap:'Auto turn on music',
	apInfo:'Keep player activity for auto turn on music when browser tab was refreshed<br><br>When a function fails:<br>click on the settings in the address bar and allow vk.com to use sound or auto play',
	q:'Change keyboard layout',
	qInfo:'The function of changing the layout RUS / ENG<br>in the input fields by pressing <b>Ctrl</b> + <b>Q</b><br>Invert case <b>Alt</b> + <b>Q</b>',
	aw:'Disable away.php',
	awInfo:'Makes it easier to navigate to other sites, but you wont be aware of suspicious links',
	sl:'Reduce the size of likes',
	slInfo:'Classic size of likes icons, still how before the increase',
	ol:'Classic likes style',
	olInfo:'Hides reactions and offsets the counter',
	op:'Classic posts style',
	opInfo:'Returns post text to top and adds padding',
	ab:'Trash collector',
	abInfo:'This function replaces <b>Adb</b> with less CPU load.',
	abf:'People you may know',
	abg:'Recommended communities',
	aba:'Recommended game',
	abp:'Adding post from the feed',
	abpInfo:'Hides from the feed a block adding post, duplicated from your wall',
	abh:'Stories block',
	abs:'Recommended video',
	abr:'Comments in posts',
	abrInfo:'Hides comments under posts, focusing attention on the content.<br>Comments will be shown / hidden by pressing <b>the comment button</b>',
	abc:'Mini chat',
	abm:'Locked menu items',
	abm1:'Profile',
	abm2:'News',
	abm3:'Messenger',
	abm4:'Friends',
	abim:'Hidden conversations',
	abimInfo:'The function is active while the extension is enabled, even if the theme is disabled !!!<br><br>Show / Hide: <b>Alt</b> + <b>I</b>',
	plus:'',
	plusInfo:'',
	plusMore:'',
	u:'Click on version to check for hot updates',
	e:'error',
	h:'Hide',
	s:'Show',
	em:'Resize stickers and emoji',
	ek:'Stickers',
	es:'Emojis',
	et:'Selection box',
	ra:'Decrease rounding avatars',
	nl:'Hide back layer',
	nlInfo:'Hide back layer when popups open',
	Color:'Color',
	ColorInfo:'Press the key to adjust the step:<br><b>Ctrl</b> - step in 1/4 range<br><b>Shift</b> - step in 1/10 range<br><b>Alt</b> - step in 1/1000 range',
	pasteColor:'Paste or write hex color and press <b>Enter</b><br>To activate the eyedropper, press: <b>Alt</b> + <b>Z</b>',
	BlockColor:'Blocks color',
	FromBlock:'from blocks',
	BorderColor:'Border color',
	AccentColor:'Accent color',
	FromAccent:'from accent',
	Contrasting:'contrasting',
	YourColor:'your own',
	TextColor:'Text color',
	TextShadow:'Text shadow',
	BackColor:'Background color',
	Header:'Header color',
	HeaderText:'Header text',
	MenuColor:'Menu color',
	favColor:'Favicon color',
	favInfo:'Round favicon',
	OnlineColor:'Online color',
	LikeColor:'Like color',
	ButtonColor:'Button color',
	UnreadColor:'Unread color',
	Brightness:'Brightness',
	Transparent:'Transparent',
	Contrast:'Contrast',
	Saturation:'Saturation',
	Hue:'Hue',
	HueRotation:'Hue rotation',
	AutoHueRotation:'Auto-rotate hue, slider adjusts the speed',
	BackgroundMove:'Parallax',
	BackgroundMoveInfo:'Background move on mouse move',
	BackgroundMoveInvert:'Move in the same direction',
	Sepia:'Sepia',
	Invert:'Invert',
	Vignette:'Vignette',
	Noise:'Add noise',
	BlurBackground:'Blur background',
	BlurBlock:'Blurring block',
	PerformanceInfo:'Resource-intensive function - not recommended on weak graphics devices !!!',
	FromText:'from text',
	Standard:'standard',
	Rounded:'rounded',
	FromBorder:'from border',
	BlockShadow:'Block shadow',
	bsc:'Shadow offset. Holding the keys, fix direction:<br>- <b>Ctrl</b> horizontal<br>- <b>Shift</b> vertical<br> - <b>Right click</b> reset<br>',
	Inset:['outside','inside','everywhere'],
	Blur:'Blur',
	Glow:'Glow',
	Spread:'Spread',
	part:'part ',
	in:'in ',
	all:'все ',
	WithoutSpaces:'without spaces',
	Auto:'auto',
	off:'off',
	sec:'sec',
	min:'min',
	hour:'hour',
	ChangeAudiotrack:'from change audiotrack',
	RainbowColor:'rainbow spectrum',
	RgbColor:'RGB',
	Background:'background',
	MenuBackground:'Add background for menu',
	Mini:'mini',
	MenuMini:'Miniature menu without text',
	Fix:'fix',
	MenuFix:'Fixed menu when scrolling',
	BlockStyle:'Block style',
	PageOffset:'Page offset',
	Visualizer:'Visualizer',
	VisualizerInfo:'Music visualizer - converts audio track data to visual effects<br><br>Enable / Disable: <b>Alt</b> + <b>V</b>',
	VisualizerOnly:'Hide everything except the player and visualizer by clicking on “<b>Visualizer</b>” or key: <b>Esc</b>',
	VisualizerColor:'Visualizer color',
	volume:'Volume',
	Gain:'Gain',
	GainInfo:'Manual control of the visualizer sensitivity, up to shutdown',
	Strobes:'Strobes',
	Rgbfilter:'RGB filter',
	Trembling:'Trembling',
	Approach:'Approach',
	DocError:'File not available',
	Font:'Font',
	FontInfo:'Font:<br>Enable / Disable: <b>Alt</b> + <b>F</b>',
	FontPaste:'Paste font name or link',
	FontPasteInfo:'Supported:<br>- names to local fonts<br>- links to Google fonts<br>- links to files: ttf, otf, woff, woff2<br>If the font does not support your language, it will remain unchanged.',
	FontSize:'Font size',
	FontSizeInfo:'You can set the size from 8 to 24 px.<br>To resize, use:<br>- numbers on the keyboard<br>- mouse wheel<br>- up and down arrows<br><br>To return to the standard value, delete the numbers',
	LatestFont:'Latest fonts',
	Set_fn:'Set font',
	Wallpaper:'Wallpaper',
	WallpaperInfo:'Wallpaper:<br>Enable / Disable: <b>Alt</b> + <b>B</b><br>Play / Pause: <b>Ctrl</b> + <b>Space</b>',
	WallpaperPaste:'Paste wallpaper link',
	WallpaperPasteInfo:'Direct links to Images and Videos in the format (mp4, webm, m3u8) are supported<br><br>You can also set an animated background from <b>Videos and Documents</b>, just copy the link to it and paste in this field',
	sbi:'Search by image',
	Set_bg:'Set wallpaper',
	bgs:'Background settings',
	Size:'Size',
	bgr:['fill','screen','wallpaper','stretch','tile'],
	Position:'Position',
	Reflection:'Reflection',
	btr:['without','horizontal','horizon and vertical','vertical'],
	bgp:['center','center top','center bottom','left top','left center','left bottom','right top','right center','right bottom'],
	SlideShow:'Slide show',
	SlideShowRandom:'Slideshow in random order',
	LatestWallpapers:'Latest wallpapers',
	Themes:'VK themes',
	ThemeInfo:'Choose from ready or share your theme',
	ThemeIns:'Theme installed',
	ThemeErr:'Theme with error',
	ThemeErrCut:'Vk has text length limitation.<br>Remove unnecessary backgrounds from theme or save to text file',
	ThemeErrInfo:'Error in the specified data, this theme cannot be installed',
	Slt:'Set',
	sLt:'live',
	slT:'theme',
	LiveWallpaper:'Live wallpaper',
	LiveWallpaperInfo:'Choose any live wallpaper and set in 1 click',
	imn:'Open messenger from notifications',
	imnInfo:'Clicking on the new message notification, opens the messenger instead of the mini-chat',
	rmInfo:'Moves the position of the chat list in the new messenger interface',
	rm:'Chat list on the right',
	ima:'Lower action icons',
	imaInfo:'Moves message action icons (reply, forward, etc.) lower for easy access',
	imr:'Fast reactions',
	imrInfo:'Speeds up the reaction picker animation by removing delays',
	imu:'Highlight unread',
	imuInfo:'Highlights unread outgoing messages (no ticks or single tick)',
	set:'Customize',
	undo:'Undo',
	redo:'Redo',
	Clock:'Clock',
	ClockInfo:'Clock:<br>Enable / Disable: <b>Alt</b> + <b>C</b>',
	ClockColor:'Clock сolor',
	ClockSize:'Clock face size',
	day:['su','mo','tu','we','th','fr','sa'],
	dayFull:['sunday','monday','tuesday','wednesday','thursday','friday','saturday'],
	month:['january','february','march','april','may','june','july','august','september','october','november','december'],
	Date:'Date',
	DateSize:'Date size',
	ClockDate:['off','full','short','numeric'],
	Sec:'Seconds',
	ClockSec:['off','colon','full','bottom','top'],
	Effect:'Effect',
	ClockEffect:['off','shadow','glow'],
	ClockDrag:'Drag and drop',
	ClockDragInfo:'Positioning the clock on the screen by drag and drop the mouse',
	ClockFont:['default','from main','your own'],
	Format:'Format',
	ClockFormat:['24-hour','12-hour'],
	ClockPin:'Pin',
	ClockPinInfo:'Pins the clock to the background layer'
},
la=()=>peer()||/\/im\/channel/.test(location.href)||/\blayer|Modal/.test(body?.className)||document.querySelector('#audio_layer_tt.eltt_vis,#top_notify_wrap.open,#top_profile_menu.shown,[accesskey][aria-expanded=true],#ts_wrap>div+div')||w.ts_cont_wrap&&ts_cont_wrap.style.display=='block'||w.cp_eye,
tm=()=>{},
dl=()=>{				D&&log('DOMContentLoaded');
	if(body=document.body){
		let s=ce('scrollbar'), sb=ce('thumb'), th, ch, sh, t, drag=e=>{let x=e.x, y=e.y, h1=sh-ch, h2=h1, o1=e.target==sb?e.offsetY:th/2, o2=0, y1=t, y2=0, m=e=>Math.abs(x-e.x)>150 ? scrollTo({top:y1+(y2?h2-h1:0)}) : (h2!=sh-ch&&(h2=sh-ch, y2=y>e.y, o2=e.y-t*(ch-th)/h2), scrollTo({top:h2*(e.y-(h1==h2?o1:o2))/(ch-th)}));w.addEventListener('mousemove',m);w.addEventListener('mouseup',()=>w.removeEventListener('mousemove',m),{once:1})}, u=()=>(ch=b.clientHeight)<(sh=b.scrollHeight)&&getComputedStyle(body).overflowY!='hidden'?(sb.style.cssText=`height:${th=Math.round(Math.max(48,ch**2/sh))}px;top:${Math.round((ch-th)*(t=b.scrollTop)/(sh-ch))}px`, !s.isConnected&&body.prepend(s)):s.remove();
		s.append(sb);s.addEventListener('mousedown',e=>{if(e.button==2)return; e.preventDefault();if(e.target==sb)return drag(e);let y=(sh-ch)*(e.y-th/2)/(ch-th);if(e.shiftKey)drag(e),scrollTo({top:y});else scrollTo({top:y,behavior:'smooth'}),w.addEventListener('mouseup',()=>scrollTo(),{once:1})});
		w.addEventListener('resize',()=>{u(),st.po()});document.addEventListener('scroll',u,{passive:1});(new ResizeObserver(u)).observe(body);(new MutationObserver(u)).observe(body,{attributes:1})
	};
	let h=document.head,f=h.replaceChild;
	!+st_.ab[0]&&w.vk&&(vk.audioAdsConfig={});st_.mode&&(tm(),st.po(),w.cur&&o(),w.vk&&!vk.id&&b.classList.remove('mm'));
	h.replaceChild=(e,n)=>{e.rel=='shortcut icon'?fav(e.href):f(e,n)};w.setFavIcon=fav;fav();forEach('link[rel*="icon"]',e=>e!=w.icoNode&&e.remove());
	if(gec('VKVideoLogo'))gec('VKVideoLogo').removeAttribute('accesskey');
	if(w.top_audio_player||w.web_spa_top_audio_player)['mouseenter','keydown','wheel'].forEach((e,i)=>(w.top_audio_player||w.web_spa_top_audio_player).addEventListener(e,i?st.k:fe,{passive:false}));
	if((w.top_audio_btn_group||w.web_spa_top_audio_player)&&!w.top_audio_play){let a=ce();a.id='top_audio_play';a.addEventListener('click',e=>ap.playPlaylist(vk.id,-1,0,0,e.shiftKey));(w.top_audio_btn_group||w.web_spa_top_audio_player).after(a)};
	if(wl.e)wl()
},
wl=()=>{				//log('load');
	w.removeEventListener('load',wl);console.log=cl;
	new MutationObserver(e=>document.visibilityState=='visible'&&w.cur&&o()).observe(body,{childList:true,subtree:true});
	if(st_.m&&!w.vk&&!w.saveDoc&&!/\/im|\/away.php|\/blank.php|\/badbrowser.php/.test(location.pathname)&&!/The page is temporarily unavailable|404 Not Found/.test(document.title)&&!/browse_images/.test(location.search)&&!document.querySelector('[data-testid=page_not_found_placeholder]'))st.m(0);
	if(st_.m)b.scrollLeft=0,u();
	if(w.vk){
		vk=new Proxy(vk,{set(t,p,v){t[p]=v;p=='width'&&st.po();return true}});
		if(vk.id){
			let t=new Date;
			if(!st_.z||st_.z<2){let z=ce();z.className='cp_z';z.textContent=st_.n+l.installed;z.addEventListener('click',()=>{st.s();z.remove();st_.z=+t;sync(1,'z',1)});cpw.append(z)}



			if(st_.id!=vk.id)st_.id=id=vk.id,sync(1,'id')
		}
	}
	if(w.ap?._impl){
		(e=>ap._impl.pause=function(){L.audio_playing=ap._isPlaying=!1;st.vo();return e.apply(this,arguments)})(ap._impl.pause);ap.setAdsConfig=0;
		(e=>ap._implPlay=function(){L.audio_playing=ap._isPlaying=!0;st.vo();st.eq();return e.apply(this,arguments)})(ap._implPlay);
		(e=>ap.stop=function(r){L.audio_playing=ap._isPlaying=!1;if(r=='CLEAR')ap._currentAudio=null;st.vo();return e.apply(this,arguments)})(ap.stop);
		(e=>ap.playPrev=function(){if(Math.abs(st_.is)==8)st.bg(1,'prev');return e.apply(this,arguments)})(ap.playPrev);
		(e=>ap.playNext=function(){if(Math.abs(st_.is)==8)st.bg(1,'next');return e.apply(this,arguments)})(ap.playNext);
		(e=>ap._impl.setVolume=function(t){arguments[0]=ac&&ac.c?(ac.g.gain.value=t,1):t;return e.apply(this,arguments)})(ap._impl.setVolume);
		ap._impl.fadeVolume=(t,e,r)=>{t=Math.max(0,Math.min(1,t));let a=ap._impl,n=ac&&ac.c?ac.g.gain.value:a._currentAudioEl.volume,i=e?(t-n)/(e/20||1):t<n?-.06:.001,T=setInterval(()=>{!e&&i>0&&(i*=1.35),n+=i;if(i<0?n<=t:n>=t)clearInterval(T),a.setVolume(t),r&&r();else a.setVolume(n)}, 20)};
		ap._updatePlaybackRate=r=>{r=w.AudioUtils?.isArticleTts(ap.getCurrentAudio())?JSON.parse(Lg('podcasts')||'{}').rate||1:st_.ar;ap._impl.setPlaybackRate(r>0?r:1)};
		ap.set_volume=e=>{ap.setVolume(isNaN(e)?(Math.pow(35,Math.max(0,Math.min(1,Math.log(1+34*ap.getVolume())/Math.log(35)+(e.deltaY<0||e.keyCode==38?e.ctrlKey?.1:e.altKey?.01:.02:e.ctrlKey?-.1:e.altKey?-.01:-.02))))-1)/34:e);docTT(Math.round(Math.log(1+34*ap.getVolume())/Math.log(35)*100)+'%')};
		if(st_.ap&&L.audio_playing=='true'&&ap_visibility&&(audio_progress>=Lg('progress')&&audio_track==Lg('track')||audio_progress==void 0)){let e=ap._impl._currentAudioEl?.audioElement;if(e)e.readyState>=2?ap.play():e.addEventListener('canplay',()=>ap.play(),{once:1})}
		ap.subscribe('progress',()=>ap._userVolume!=Lg('vol')&&ap.setVolume(Lg('vol')||(isNaN(ap._userVolume)?.476:ap._userVolume)))
	}
	let c=e=>w[e]&&!w[e].Z&&(w[e].Z=1), d=()=>{
		c('nav')&&
			(e=>nav.setLoc=function(a){tm(a);return e.apply(this,arguments)})(nav.setLoc);
		c('Notifier')&&
			((e=>Notifier.pushEvent=function(ev){if(typeof ev=='string')try{ev=JSON.parse(ev)}catch(e){};D&&ev.text&&log(ev,ev.text);return (ev.type=='mail' && +st_.ab[13] && st_.imh && st_.imh.split(',').findIndex(e=>e==ev.author_id)>-1)?0:e.apply(this,arguments)})(Notifier.pushEvent),
			(e=>Notifier.showEvent=function(ev){if(ev.type=='mail' && st_.imn)ev.onclick=`nav.go('${ev.link}')`;return e.apply(this,arguments)})(Notifier.showEvent));
		c('ElementTooltip')&&
			(e=>ElementTooltip.prototype.build=function(){e.apply(this,arguments);if(this._opts.id=='pv_more_acts_tt'){
				let a=ge('pv_more_act_download'), b=ce(), f=ce(), t=ce(), o={Google:'searchbyimage?sbisrc=cr_1_3_2&image_url=',Yandex:'images/search?rpt=imageview&url=',Bing:'images/search?view=detailv2&iss=sbi&q=imgurl:',TinEye:'search?url='};
				b.className='pv_more_act_item pv_bg';f.className='pv_more_act_item pv_find';b.textContent=' '+l.Set_bg;t.textContent=' '+l.sbi;b.addEventListener('click',()=>st.bg(1,a.href));
				f.addEventListener('click',e=>open(o[e=e.target.textContent]?`//${e[0]=='G'?'www.'+e:e}.com/`+o[e]+encodeURIComponent(a.href):'/feed?section=photos_search&q=copy%3Aphoto'+cur.pvCurPhoto.id));
				Object.keys(o).forEach(e=>{let l=ce('a');l.textContent=e;f.append(l)});f.prepend(t);a&&a.before(f,b)}
			})(ElementTooltip.prototype.build);
		c('Reactions')&&
			(e=>Reactions.initReactionByMouseEvent=function(a){st_.ol?(Likes.showLikes(a,a.dataset.reactionTargetObject),event.stopImmediatePropagation()):e.apply(this,arguments)})(Reactions.initReactionByMouseEvent);
		c('Wall')&&
			(e=>Wall.showEditReply=function(p,c){log(p,c);p=ge('post'+p);p&&+st_.ab[6]&&c&&c.type=='click'&&p.toggleAttribute('showreply',!p.hasAttribute('showreply'));return e.apply(this,arguments)})(Wall.showEditReply)
	};d();w.stManager&&(e=>stManager.done=function(){d();return e.apply(this,arguments)})(stManager.done)
},
log=function(){cl('%c ',`background:linear-gradient(90deg,hsl(${log.c=log.c?log.c+15:15},100%,50%),#0000);line-height:5px;border-radius:4px;padding-left:2em;margin-right:-1em`,...arguments)},cl=console.log,Prnd=rnd(9,6,1),vf,bmf,AF=requestAnimationFrame,E=e=>F(e&&e[0]=='('?'return'+e:e)(),tc=0,IO,T0,T1,T2,T3,T4,ac,favColor,hh,hs,hl,ha,blb,bfc,bfs,bfl,bfb,bfh,bfha,bfi,bfp,bgm,bgmi,bgv,btr,bgn,vch,vg,vvb,vbs,vbr,vbR,vbt,vba,vbb,ff=[32,64,125,250,500,1000,2000,4000,8000,16000],b=document.lastChild,body,id=+(w.vk&&vk.id||n(b.textContent.match(/\bid:\s?(\d+)/))[1]||st_.id),ap_visibility=document.visibilityState=='visible',audio_progress=Lg('progress'),audio_track=Lg('track'),F=Function,D=L._st;D&&(w.st_=st_);
if(!('m' in st_)){let c=w.chrome?.runtime?.getURL?.('2.js'),s;if(c)return s=ce('script'),s.src=c,b.append(s),s.remove();if(await new Promise(r=>{let a=(e=ge('cpw')?.dataset)=>{if(e?.c){try{E(e.c+'('+e.s+')'),r(e)}catch(a){D&&log(a),st_=JSON.parse(e.s),r()}o.disconnect(),delete e.s,delete e.c}},o=new MutationObserver(()=>a());if(!a())o.observe(b,{childList:true,subtree:true})}))return}S('st',st);
let st0=ge('st0'),st1=ge('st1'),st2=ge('st2'),st3=ce('style'),st4=ce('style'),st9=ce('style'),cpw=ge('cpw'),cpv=ce(),cpc=ce('canvas'),cpo=ce(),cpb=ce(),cpf;
for(let e of [st0,st1,st2,cpw])e.removeAttribute('id');cpv.id='cpv';cpb.className='cp_bg';cpb.innerHTML='<f><div class="cp_fg"></div><n></n><v></v></f>';cpf=gec('cp_fg',cpb).attachShadow({mode:'open'});cpv.append(cpc);b.append(st3,st4,cpb,cpv);
cpw.innerHTML=`<div id="cp_s" ${st_.pv?'class="h"':''}></div><div id="cp"><form>
<div id="cp_t">
	<input type="range" id="cp_hh" data-tt="st.tt(this)"/>
	<input type="range" id="cp_hs" data-tt="st.tt(this)"/>
	<input type="range" id="cp_hl" data-tt="st.tt(this)"/>
	<input type="range" id="cp_ha" data-tt="st.tt(this)"/>
	<div id="cp_cp" contenteditable="true" data-tt="st.tt(this,'${l.pasteColor}')"></div>
	${w.EyeDropper?'<div id="cp_ed"></div>':''}
	<div class="hint_icon" data-tt="st.tt(this,'${l.ColorInfo}')"></div>
</div>
<div id="cp_hp" data-tt="st.tt(this,'${l.undo}: <b>Ctrl</b> + <b>Z</b>',40,36,0,1)"></div>
<div id="cp_hn" data-tt="st.tt(this,'${l.redo}: <b>Ctrl</b> + <b>Y</b>',40,36,0,1)"></div>
<a class="cp_l" href="/2style">
	<img src="${st_.l}i/l.svg">
	<div>${st_.n}</div>
	<div id="cp_u">${st_.v}</div>
</a>
<div id="cp_gs" contenteditable="true" data-tt="st.tt(this,'${l.gs}',0)"></div>
<div id="cp_af" data-tt="st.tt(this,'${l.AdditionalFeatures}',0)"></div>
<div class="w">
	<div class="cp_t">${l.AdditionalFeatures}</div>
	<div id="cp_ab" class="cp_ht checkbox" data-tt="st.tt(this,'${l.abInfo}',0)">${l.ab}</div>
	<div class="w">
		<div id="cp_abf" class="cp_ht checkbox">${l.abf}</div>
		<div id="cp_abg" class="cp_ht checkbox">${l.abg}</div>
		<div id="cp_aba" class="cp_ht checkbox">${l.aba}</div>
		<div id="cp_abp" class="cp_ht checkbox" data-tt="st.tt(this,'${l.abpInfo}',0)">${l.abp}</div>
		<div id="cp_abh" class="cp_ht checkbox">${l.abh}</div>
		<div id="cp_abs" class="cp_ht checkbox">${l.abs}</div>
		<div id="cp_abr" class="cp_ht checkbox" data-tt="st.tt(this,'${l.abrInfo}',0)">${l.abr}</div>
		<div id="cp_abc" class="cp_ht checkbox">${l.abc}</div>
		<div id="cp_abm" class="cp_ht checkbox">${l.abm}</div>
		<div class="w">
			<div id="cp_abm1" class="cp_ht checkbox">${l.abm1}</div>
			<div id="cp_abm2" class="cp_ht checkbox">${l.abm2}</div>
			<div id="cp_abm3" class="cp_ht checkbox">${l.abm3}</div>
			<div id="cp_abm4" class="cp_ht checkbox">${l.abm4}</div>
		</div>
		<div id="cp_abim" class="cp_ht checkbox" data-tt="st.tt(this,'${l.abimInfo}',0)">${l.abim}</div>
	</div>
	<div id="cp_ap" class="cp_ht checkbox" data-tt="st.tt(this,'${l.apInfo}',0)">${l.ap}</div>
	<div id="cp_pt" class="cp_ht checkbox" data-tt="st.tt(this,'${l.ptInfo}',0)">${l.pt}</div><div id="cp_is" data-tt="st.tt(this,'${l.is}')"></div>
	<div id="cp_io" class="cp_ht checkbox" data-tt="st.tt(this,'${l.ioInfo}',0)">${l.io}</div>
	<div id="cp_q" class="cp_ht checkbox" data-tt="st.tt(this,'${l.qInfo}',0)">${l.q}</div>
	<div id="cp_aw" class="cp_ht checkbox" data-tt="st.tt(this,'${l.awInfo}',0)">${l.aw}</div>
	<div id="cp_po" class="cp_ht checkbox">${l.PageOffset}</div><div class="w"><div class="cp_ht"><input type="range" id="cp_ps"></div></div>
	<div id="cp_nl" class="cp_ht checkbox" data-tt="st.tt(this,'${l.nlInfo}',0)">${l.nl}</div>
	<div id="cp_rm" class="cp_ht checkbox" data-tt="st.tt(this,'${l.rmInfo}',0)">${l.rm}</div>
	<div id="cp_imn" class="cp_ht checkbox" data-tt="st.tt(this,'${l.imnInfo}',0)">${l.imn}</div>
	<div id="cp_ima" class="cp_ht checkbox" data-tt="st.tt(this,'${l.imaInfo}',0)">${l.ima}</div>
	<div id="cp_imr" class="cp_ht checkbox" data-tt="st.tt(this,'${l.imrInfo}',0)">${l.imr}</div>
	<div id="cp_imu" class="cp_ht"><div id="cp_imub" class="checkbox" data-tt="st.tt(this,'${l.imuInfo}',0)"></div><div>${l.imu}</div><input type="color" id="cp_imuc" value="#cce4ff" style="width:20px;height:20px;padding:0;border:0;border-radius:4px;cursor:pointer;margin-left:auto;background:none"></div>
	<div id="cp_em" class="cp_ht checkbox">${l.em}</div><div class="w"><div class="cp_ht"><div>${l.ek}</div><input type="range" id="cp_ek"></div><div class="cp_ht"><div>${l.es}</div><input type="range" id="cp_es"></div><div class="cp_ht"><div>${l.et}</div><input type="range" id="cp_et"></div></div>
	<div id="cp_pc" class="cp_ht checkbox" data-tt="st.tt(this,'${l.pcInfo}',0)">${l.pc}</div>
	<div id="cp_sl" class="cp_ht checkbox" data-tt="st.tt(this,'${l.slInfo}',0)">${l.sl}</div>
	<div id="cp_ol" class="cp_ht checkbox" data-tt="st.tt(this,'${l.olInfo}',0)">${l.ol}</div>
	<div id="cp_op" class="cp_ht checkbox" data-tt="st.tt(this,'${l.opInfo}',0)">${l.op}</div>
	<div id="cp_ra" class="cp_ht checkbox">${l.ra}</div><div class="w"><div class="cp_ht"><input type="range" id="cp_rav"></div></div>
	<div id="cp_fc" class="cp_ht"><div id="cp_fr" class="checkbox" data-tt="st.tt(this,'${l.favInfo}')"></div><div>${l.favColor}</div><span></span></div>
	<div id="cp_oc" class="cp_ht"><div>${l.OnlineColor}</div><span></span></div>
	<div id="cp_lc" class="cp_ht"><div>${l.LikeColor}</div><span></span></div>
	<div id="cp_kc" class="cp_ht"><div>${l.ButtonColor}</div><span></span></div>
	<div id="cp_uc" class="cp_ht"><div>${l.UnreadColor}</div><span></span></div>
</div>
<div id="cp_bl" class="cp_ht p"><div>${l.BlockColor}</div></div>
<div id="cp_ac" class="cp_ht p"><div>${l.AccentColor}</div></div>
<div id="cp_bgc" class="cp_ht"><div>${l.BackColor}</div><span></span></div>
<div id="cp_hc" class="cp_ht"><div>${l.Header}</div><span></span></div>
<div id="cp_ht" class="cp_ht"><div>${l.HeaderText}</div><span></span></div>
<div id="cp_tc" class="cp_ht"><div>${l.TextColor}</div><span></span></div>
<div id="cp_ts" class="cp_ht"><div>${l.TextShadow}</div><span></span></div>
<div id="cp_mc" class="cp_ht"><div>${l.MenuColor}</div><span></span></div>
<div id="cp_mb" class="cp_ht checkbox" data-tt="st.tt(this,'${l.MenuBackground}',0)">${l.Background}</div>
<div id="cp_mm" class="cp_ht checkbox" data-tt="st.tt(this,'${l.MenuMini}',0)">${l.Mini}</div>
<div id="cp_mf" class="cp_ht checkbox" data-tt="st.tt(this,'${l.MenuFix}',0)">${l.Fix}</div>
<div id="cp_bt" class="cp_ht"><div>${l.BlockStyle}</div><span></span></div>
<div id="cp_bc" class="cp_ht"><div>${l.BorderColor}</div><span></span></div>
<div id="cp_bs" class="cp_ht"><div>${l.BlockShadow}</div><span class="cp_s"></span><span></span></div><div class="w">
	<div id="cp_bsc" contenteditable="true" data-tt="st.tt(this,'${l.bsc}')"></div>
	<div class="cp_ht">${l.Spread}: <span id="cp_bst"></span></div>
	<div class="cp_ht"><input type="range" id="cp_bsb" data-tt="st.tt(this)" data-title="${l.Blur}"><input type="range" id="cp_bss" data-tt="st.tt(this)" data-title="${l.Spread}"></div>
</div>
<div id="cp_v" class="cp_t"><span data-tt="st.tt(this,'${l.VisualizerOnly}')">${l.Visualizer}</span><div class="w" data-tt="st.tt(this,'${l.VisualizerInfo}',-3)"></div></div>
<div class="w">
	<div id="cp_vp"><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
	<div id="cp_vc" class="cp_ht"><div>${l.VisualizerColor}</div><span></span></div>
	<div class="cp_ht"><div><div id="cp_va" class="checkbox" data-tt="st.tt(this,'${l.GainInfo}')">${l.Gain}</div></div><input type="range" id="cp_vg"></div>
	<div class="cp_ht"><div>${l.Glow}</div><input type="range" id="cp_vvb"></div>
	<div class="cp_ht"><div>${l.Strobes}</div><input type="range" id="cp_vbs"></div>
	<div class="cp_ht"><div>${l.Rgbfilter}</div><input type="range" id="cp_vbr"><input type="range" id="cp_vbR"></div>
	<div class="cp_ht"><div>${l.Trembling}</div><input type="range" id="cp_vbt"></div>
	<div class="cp_ht"><div>${l.Approach}</div><input type="range" id="cp_vba"></div>
	<div class="cp_ht"><div>${l.BlurBackground}</div><input type="range" id="cp_vbb"></div>
</div>
<div id="cp_f" class="cp_t"><span>${l.Font}</span><div class="w" data-tt="st.tt(this,'${l.FontInfo}',-3)"></div></div>
<div class="w">
	<input type="text" class="dark" id="cp_fi" placeholder="${l.FontPaste}" style="width:100%" data-tt="st.tt(this,'${l.FontPasteInfo}')">
	<div class="cp_ht"><label for="cp_fs">${l.FontSize}</label><input id="cp_fs" type="number" step=".1" min="8" max="24" placeholder="${l.Standard}" data-tt="st.tt(this,'${l.FontSizeInfo}')"></div>
	<div class="cp_ht">${l.LatestFont}</div><div id="cp_fhb"></div>
</div>
<div id="cp_b" class="cp_t"><span>${l.Wallpaper}</span><div class="w" data-tt="st.tt(this,'${l.WallpaperInfo}',-3)"></div></div>
<div class="w">
	<input type="text" class="dark" id="cp_bi" placeholder="${l.WallpaperPaste}" style="width:245px" data-tt="st.tt(this,'${l.WallpaperPasteInfo}')"><div id="cp_bgf" data-tt="st.tt(this)" data-title="${l.bgs}"></div>
	<div class="w">
		<div class="cp_ht" id="cp_bgr"><div>${l.Size}</div><span></span></div>
		<div class="cp_ht" id="cp_bgp"><div>${l.Position}</div><span></span></div>
		<div class="cp_ht" id="cp_btr"><div>${l.Reflection}</div><span></span></div>
		<div class="cp_ht" id="cp_bgs"><div>${l.SlideShow}</div><div id="cp_bgsr" class="checkbox" data-tt="st.tt(this,'${l.SlideShowRandom}')"></div><span></span></div>
		<div class="cp_ht"><div data-tt="st.tt(this,'${l.BackgroundMoveInfo}')">${l.BackgroundMove}</div><div id="cp_bgmi" class="checkbox" data-tt="st.tt(this,'${l.BackgroundMoveInvert}')"></div><input type="range" id="cp_bgm"></div>
		<div class="cp_ht"><div>${l.Vignette}</div><input type="range" id="cp_bgv"></div>
		<div class="cp_ht" data-tt="st.tt(this,'${l.PerformanceInfo}',0)"><div>${l.BlurBlock}</div><input type="range" id="cp_blb"></div>
		<div class="cp_ht"><div>${l.BlurBackground}</div><input type="range" id="cp_bfb"></div>
		<div class="cp_ht"><div>${l.Invert}</div><input type="range" id="cp_bfi"></div>
		<div class="cp_ht"><div>${l.Sepia}</div><input type="range" id="cp_bfp"></div>
		<div class="cp_ht"><div>${l.HueRotation}</div><div id="cp_bfha" class="checkbox" data-tt="st.tt(this,'${l.AutoHueRotation}')"></div><input type="range" id="cp_bfh"></div>
		<div class="cp_ht"><div>${l.Noise}</div><input type="range" id="cp_bgn"></div>
		<div class="cp_ht"><div>${l.Saturation}</div><input type="range" id="cp_bfs"></div>
		<div class="cp_ht"><div>${l.Contrast}</div><input type="range" id="cp_bfc"></div>
		<div class="cp_ht"><div>${l.Brightness}</div><input type="range" id="cp_bfl"></div>
	</div>
	<div class="cp_ht">${l.LatestWallpapers}: <time id="cp_bn"></time><input type="range" id="cp_bgav" data-tt="st.tt(this)" data-title="${l.volume}"><span id="cp_bga"></span></div>
	<div id="cp_bhb"></div>
</div>
<div id="cp_c" class="cp_t">${l.Clock}<div class="w" data-tt="st.tt(this,'${l.ClockInfo}',-3)"></div></div>
<div class="w">
	<div class="cp_ht" id="cp_ca">${l.Font}: <span></span><input type="text" class="dark" id="cp_cb" placeholder="${l.FontPaste}" data-tt="st.tt(this,'${l.FontPasteInfo}')"></div>
	<div class="cp_ht"><div id="cp_c0">${l.Color}: <span></span></div><input type="range" id="cp_c1" data-tt="st.tt(this)" data-title="${l.ClockSize}"></div>
	<div class="cp_ht"><div id="cp_c6">${l.Date}: <span></span></div><input type="range" id="cp_c2" data-tt="st.tt(this)" data-title="${l.DateSize}"></div>
	<div class="cp_ht" id="cp_c7">${l.Sec}: <span></span></div>
	<div class="cp_ht"><div id="cp_c8">${l.Effect}: <span></span></div><span><div id="cp_c4" contenteditable="true" data-tt="st.tt(this,'${l.bsc}')"></div><input type="range" id="cp_c3" data-tt="st.tt(this)" data-title="${l.Blur}"><input type="range" id="cp_cd" data-tt="st.tt(this)" data-title="${l.Transparent}"></span></div>
	<div class="cp_ht" id="cp_cc">${l.Format}: <span></span></div>
	<div class="cp_ht"><div class="checkbox" id="cp_ce" data-tt="st.tt(this,'${l.ClockPinInfo}')">${l.ClockPin}</div><div class="checkbox" id="cp_c9" data-tt="st.tt(this,'${l.ClockDragInfo}')">${l.ClockDrag}</div></div>
</div>
<div class="cp_t l">
	<span data-tt="st.tt(this,'${l.ThemeInfo}')">${l.Themes}</span><a id="cp_l" data-tt="st.tt(this,'${l.LiveWallpaperInfo}')">${l.LiveWallpaper}</a>
</div></form></div>
<svg>
	<filter id="n15"><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/></filter>
	<filter id="hue"><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/></filter>
	<filter id="ccc"><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/></filter>
	<filter id="bta"><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 1 1 1 0 0"/></filter>
	<filter id="wta"><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 -1 -1 -1 3 0"/></filter>
	<filter id="ba"><feColorMatrix values="0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0"/></filter>
	<filter id="wb"><feColorMatrix values="0 0 3 0 -2 0 0 3 0 -2 0 0 3 0 -2 0 0 0 1 0"/></filter>
	<filter id="rgb"><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"/></filter>
	<filter id="na"><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0 1"/></filter>
</svg>`;cpw.append(st9);
if(location.pathname=='/2style'&&location.hash)try{h();st.ss(location.hash),history.pushState(null,null,location.pathname)}catch(a){};
w.addEventListener('wheel',e=>{
	if((st_.vo||st_.bo)&&e.target.closest('#cpv'))st.k(e)
},{passive:false});
w.addEventListener('keydown',e=>{	//log('keydown => ',e);
	if(e.keyCode==27&&!la()&&st_.mode)
		st_.bo||st_.vp<0?st.bo():st_.vo||(w.ap?ap._isPlaying:audio.playing())?st.vo(-1):st.bo();
	if(e.ctrlKey&&e.keyCode==32&&st_.iv)st.bgv(1);
	if(e.altKey&&e.keyCode==86)st.v();
	if(e.altKey&&e.keyCode==82)st.ar(1);
	if(e.altKey&&e.keyCode==69)st.e(1),End(e);
	if(e.altKey&&e.keyCode==70)st.f(),End(e);
	if(e.altKey&&e.keyCode==66)st.b();
	if(e.altKey&&e.keyCode==67)c(1,0);
	if(st_.bo)return st.k(e);
	if(cpo.isConnected&&(document.activeElement==cpo||document.activeElement==body))st.k(e);
	if(e.altKey&&e.keyCode==83)st.s();
	if(e.ctrlKey&&e.keyCode==90&&cp.a)h(0,-1);
	if(e.ctrlKey&&e.keyCode==89&&cp.a)h(0,1);
	if(e.altKey&&e.keyCode==72)b.classList.toggle('imb');
	if(e.altKey&&e.keyCode==73)cp_abim.classList.toggle('a'),st.ab(1);
	if(e.ctrlKey&&e.keyCode==81&&!st_.q)st.q(-1);
	if(e.altKey&&e.keyCode==81&&!st_.q)st.q(-2);
	if(e.altKey&&e.keyCode==68){
		if(cur.pvShown){let p=cur.pvData[cur.pvListId][cur.pvIndex];if(cur.deletionProgress)cur.deletionProgress[p.id]=!1;if(p.actions.del)Photoview[p.deleted?'restorePhoto':'deletePhoto'](),End(e)}
		else if(cur.module=='im'&&peer()){w.MessageBox&&(new MessageBox({title:getLang('mail_deleteall1')}).content(getLang('mail_chat_sure_to_delete_all')).addButton(getLang('mail_delete'),()=>st.dh('messages.deleteConversation',{group_id:cur.gid,peer_id:peer()},e=>{nav.go(cur.gid?'/gim'+cur.gid:'/im')}),'ok').addButton(getLang('mail_cancel'),()=>curBox().hide(),'no').show()),End(e)}
	}
	if(e.altKey&&e.keyCode==65){
		if(cur.module=='im'&&peer()&&!cur.gid)st.dh('messages.archiveConversation',{peer_id:peer()},e=>{},e=>st.dh('messages.unarchiveConversation',{peer_id:peer()}))
	}
	if(e.altKey&&!(e.ctrlKey||e.shiftKey||e.metaKey))
		e.keyCode==50&&w.top_notify_btn?.click(),
		e.keyCode==51&&document.querySelector('#web_spa_top_audio_player :is(button,[role=button])')?.click();
},{capture:1});
w.addEventListener('mousedown',e=>{
	if(e.button==0&&e.target.id=='cp_s')st.s();
	if(e.button<2&&st.aw.c)st.aw.c(e);
	if(e.button==0&&e.target.id=='cp_l'){
		End(e);
		if(cp.video)cp.video.init();
		else st.dh('video.getAlbums',{owner_id:'-168874636',extended:1},d=>{
			let Albums = [], root = ce(), nav = ce('nav'), main = ce(), section = ce('section')
			, render = (items,arr,type)=>{
				items.forEach(e=>{
					let Title = e.title
					, Count = e.count || Math.floor(e.duration/60)+':'+(e.duration%60+'').padStart(2,0)
					, Img = e.image && (e.image.find(e=>!e.with_padding&&e.width==720) || e.image.pop()).url
					, Card = type ? ce('album') : ce('a')
					, Button = type ? ce(e.is_subscribed ? 'u' : 's') : ce('b');

					Card.append(Button);
					if(type){
						(Card.n = ce()).textContent = Title;
						Card.a = e.id;
						Card.c = Count;
						Card.arr = [];
					}else{
						Card.href = (st_.m?'?z=':'/')+'video'+e.owner_id+'_'+e.id;
						Card.v = (e.trailer||e.files)?.mp4_360;
					}
					Card.style.cssText = `--bg:url(${Img});--t:${JSON.stringify(Title)};--c:'${Count}'`;
					arr.push(Card)
				});
				section.replaceChildren(...arr);
			}, load = e => st.dh('video.get',{owner_id:'-168874636', album_id: Albums.Card.a, count: 30, offset: Albums.Card.arr.length},d=>{render(d.items,Albums.Card.arr);Albums.load = 0;scroll()})
			, scroll = e => {
				if(!cp.a)return;
				if(Albums.Card){
					Albums.Card.last_scroll = section.scrollTop;
					if(st_.mode && !Albums.load && (Albums.load = section.scrollHeight-section.clientHeight-section.scrollTop<1e3 && Albums.Card.arr.length < Albums.Card.c)) load()
				}else Albums.last_scroll = section.scrollTop
			}, prev = e => {
				let Card = e.target.closest('a'), v = Card?.v;
				if(v && e.target == Card){
					if(e.type == 'mouseenter')Card.t = setTimeout(()=>{let s,p=v=>Card.t&&v.readyState>2&&(v.currentTime=0, Card.prepend(v), v.play());if(typeof v == 'string')s=v, Card.v=v=ce('video'), v.loop=v.muted=!0, v.src=s, v.addEventListener('canplay',()=>p(v),{once:1});else p(v)}, 150);
					else if(e.type == 'mouseleave')clearTimeout(Card.t), Card.t=0, v.isConnected && (v.pause(), v.remove())
				}
			};
			render(d.items,Albums,1);
			root.id = 'cp_video'; main.textContent = l.LiveWallpaper; nav.append(main); root.append(nav,section);

			section.addEventListener('mouseenter',fe);
			section.addEventListener('mouseenter',prev,{capture:1});
			section.addEventListener('mouseleave',prev,{capture:1});
			section.addEventListener('scroll',scroll);
			(new ResizeObserver(scroll)).observe(section);
			root.addEventListener('click',e=>{
				e.target == main && (Albums.Card = 0, section.replaceChildren(...Albums), main.nextElementSibling.remove(), section.scroll(0,Albums.last_scroll));
				e.target.tagName == 'ALBUM' && (Albums.Card = e.target, nav.append(e.target.n), e.target.arr.length ? (section.replaceChildren(...e.target.arr), section.scroll(0,e.target.last_scroll)) : (Albums.load = 1, section.replaceChildren(), load()));
				e.target.tagName == 'S' && st.dh('video.subscribeToAlbum',{owner_id:'-168874636', album_id: e.target.parentElement.a},d=>e.target.replaceWith(ce('u')));
				e.target.tagName == 'U' && st.dh('video.unsubscribeFromAlbum',{owner_id:'-168874636', album_id: e.target.parentElement.a},d=>e.target.replaceWith(ce('s')));
				e.target.tagName == 'B' && (End(e),st.bg(1,e.target.parentElement.href));
				// st.dh('catalog.getOwnerVideosSearch',{owner_id:'-168874636', q: q: 'mass effect'},d=>{});
			});
			cp.video=root;
			root.init=()=>{
				cp.scroll(0,0);
				cp.append(root);
				cp.animate([{transform:'translateX(600px)'},{transform:'none'}],500);
				section.scroll(0,Albums.Card ? Albums.Card.last_scroll : Albums.last_scroll)
			};
			root.init()
		})
	}
	if(e.button==0&&st_.vo&&!st_.bo&&e.target.closest('#cpv')){
		End(e);e=e.target.closest('svg');e&&e.parentElement!=cpo?st.k(['prev','pause','next'][ie(e)]):w.AudioUtils?.getLayer().toggle()
	}
},{capture:1});
b.addEventListener('contextmenu',e=>{
	if(e.target.tagName=='A'){
		let h=[e.target.textContent,e.target.href], R=/(cc_key=|vk.cc\/)(\w+)/, k=R.exec(h.find(e=>R.test(e)));
		if(k){
			End(e);
			R=w.MessageBox&&new MessageBox({title:'vk.cc/'+k[2],bodyStyle:'word-break:break-all;text-align:center'}).content('<div class="round_spinner"></div>').addButton(l.open,()=>{R.hide();e.target.click()},'ok').show();
			st.cc(k[2],e=>{R.content(e).addButton(l.copy,()=>{copy(e),R.hide()},'no')})
		}
	}
	if(e.target.id=='cp_s'&&!cp.a)End(e),cp_s.classList[(st_.pv=st_.pv?0:1)?'add':'remove']('h'),sync(1,'pv',1)
},{capture:1});
if(!st_.m){
	let t = w.Audio,sX=0,sY=0,dt=0;
	document.addEventListener('touchstart',e=>{sX=e.touches[0].clientX;sY=e.touches[0].clientY},!1);
	document.addEventListener('touchmove',e=>{
		if(sX||sY){
			let dX=sX-e.touches[0].clientX, dY=sY-e.touches[0].clientY, d=Math.abs(dX)>Math.abs(dY)?dX>0?'left':'right':dY>0?'up':'down';
			if(sX>innerWidth*.9&&d=='left'&&!cp.a&&(!w.photoview||!photoview.opened()))st.s();
			if(sX<innerWidth-300&&d=='right'&&cp.a)st.s();
			sX=0;sY=0
		}
	},!1);
	document.addEventListener('touchend',e=>{let t=+new Date;if(t-dt<500)document.fullscreen?document.exitFullscreen():b.requestFullscreen();dt=t});
	w.Audio=function(){let n=new t(...arguments);return ['play','pause','stop','ended'].forEach((t=>{n.addEventListener(t,()=>{if(t=='ended'&&Math.abs(st_.is)==8)st.bg(1,'next');st.vo();if(w.audioEl!=n)w.audioEl=n;if(!document.querySelector('[data-mp3="'+n.src+'"],[data-ogg="'+n.src+'"]'))st.eq()})})),n}
}
w.lastMouse={x:innerWidth/2,y:innerHeight/2};
w.addEventListener('dragenter',e=>{clearTimeout(T4);T4=setTimeout(()=>e.target.closest('.ConvoListItem')?.click(),200)});
w.addEventListener('message',e=>{e=n(e.data.actionType).match(/Modal(Open|Close)$/);e&&body.classList[e[1]=='Open'?'add':'remove']('layers_shown')});
w.addEventListener('storage',e=>e.key=='st_'&&sync(2));
if(L.st_reload)delete L.st_reload,sync(2),sync(4);st.m(st_.mode);sync(3);
document.addEventListener('visibilitychange',()=>st_.iv&&st.bgv());
console.log=function(a,b){'common module enabled'==b&&(body?setTimeout(wl):wl.e=1);D&&cl.apply(this,arguments)};
document.readyState=='complete'?(wl.e=1,dl()):(document.readyState=='interactive'?dl():document.addEventListener('DOMContentLoaded',dl),w.addEventListener('load',wl))
})({})