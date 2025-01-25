var He=Object.defineProperty;var Ue=(e,t,n)=>t in e?He(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ye=(e,t,n)=>Ue(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const d of l)if(d.type==="childList")for(const c of d.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(l){const d={};return l.integrity&&(d.integrity=l.integrity),l.referrerPolicy&&(d.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?d.credentials="include":l.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function i(l){if(l.ep)return;l.ep=!0;const d=n(l);fetch(l.href,d)}})();function M(){}function Ge(e){return e()}function $e(){return Object.create(null)}function re(e){e.forEach(Ge)}function ze(e){return typeof e=="function"}function Xe(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Ve(e){return Object.keys(e).length===0}function r(e,t){e.appendChild(t)}function k(e,t,n){e.insertBefore(t,n||null)}function w(e){e.parentNode&&e.parentNode.removeChild(e)}function D(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function u(e){return document.createElement(e)}function N(e){return document.createTextNode(e)}function m(){return N(" ")}function V(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function s(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Ke(e){return Array.from(e.childNodes)}function We(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,"")}let ce;function se(e){ce=e}function Ye(){if(!ce)throw new Error("Function called outside component initialization");return ce}function Qe(e){Ye().$$.on_mount.push(e)}const K=[],xe=[];let Y=[];const Se=[],Ze=Promise.resolve();let we=!1;function et(){we||(we=!0,Ze.then(Fe))}function ke(e){Y.push(e)}const be=new Set;let X=0;function Fe(){if(X!==0)return;const e=ce;do{try{for(;X<K.length;){const t=K[X];X++,se(t),tt(t.$$)}}catch(t){throw K.length=0,X=0,t}for(se(null),K.length=0,X=0;xe.length;)xe.pop()();for(let t=0;t<Y.length;t+=1){const n=Y[t];be.has(n)||(be.add(n),n())}Y.length=0}while(K.length);for(;Se.length;)Se.pop()();we=!1,be.clear(),se(e)}function tt(e){if(e.fragment!==null){e.update(),re(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ke)}}function nt(e){const t=[],n=[];Y.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),Y=t}const lt=new Set;function it(e,t){e&&e.i&&(lt.delete(e),e.i(t))}function P(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function ot(e,t,n){const{fragment:i,after_update:l}=e.$$;i&&i.m(t,n),ke(()=>{const d=e.$$.on_mount.map(Ge).filter(ze);e.$$.on_destroy?e.$$.on_destroy.push(...d):re(d),e.$$.on_mount=[]}),l.forEach(ke)}function st(e,t){const n=e.$$;n.fragment!==null&&(nt(n.after_update),re(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ct(e,t){e.$$.dirty[0]===-1&&(K.push(e),et(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function rt(e,t,n,i,l,d,c=null,h=[-1]){const p=ce;se(e);const f=e.$$={fragment:null,ctx:[],props:d,update:M,not_equal:l,bound:$e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(p?p.$$.context:[])),callbacks:$e(),dirty:h,skip_bound:!1,root:t.target||p.$$.root};c&&c(f.root);let C=!1;if(f.ctx=n(e,t.props||{},(_,y,...$)=>{const q=$.length?$[0]:y;return f.ctx&&l(f.ctx[_],f.ctx[_]=q)&&(!f.skip_bound&&f.bound[_]&&f.bound[_](q),C&&ct(e,_)),y}),f.update(),C=!0,re(f.before_update),f.fragment=i(f.ctx),t.target){if(t.hydrate){const _=Ke(t.target);f.fragment&&f.fragment.l(_),_.forEach(w)}else f.fragment&&f.fragment.c();t.intro&&it(e.$$.fragment),ot(e,t.target,t.anchor),Fe()}se(p)}class at{constructor(){ye(this,"$$");ye(this,"$$set")}$destroy(){st(this,1),this.$destroy=M}$on(t,n){if(!ze(n))return M;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(t){this.$$set&&!Ve(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const dt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(dt);function Ee(e,t,n){const i=e.slice();return i[17]=t[n],i}function Ae(e,t,n){const i=e.slice();return i[20]=t[n],i}function Te(e,t,n){const i=e.slice();return i[23]=t[n],i}function Pe(e,t,n){const i=e.slice();return i[26]=t[n],i}function Le(e,t,n){const i=e.slice();return i[32]=t[n],i}function je(e,t,n){const i=e.slice();return i[29]=t[n],i[31]=n,i}function Ie(e,t,n){const i=e.slice();return i[32]=t[n],i[31]=n,i}function ut(e){let t,n=P(e[3]),i=[];for(let l=0;l<n.length;l+=1)i[l]=Me(Le(e,n,l));return{c(){t=u("div");for(let l=0;l<i.length;l+=1)i[l].c();s(t,"class","projects svelte-qnecny")},m(l,d){k(l,t,d);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(t,null)},p(l,d){if(d[0]&8){n=P(l[3]);let c;for(c=0;c<n.length;c+=1){const h=Le(l,n,c);i[c]?i[c].p(h,d):(i[c]=Me(h),i[c].c(),i[c].m(t,null))}for(;c<i.length;c+=1)i[c].d(1);i.length=n.length}},d(l){l&&w(t),D(i,l)}}}function ft(e){let t,n,i,l,d,c,h,p,f,C,_=P(e[3]),y=[];for(let g=0;g<_.length;g+=1)y[g]=Oe(Ie(e,_,g));let $=P(e[3]),q=[];for(let g=0;g<$.length;g+=1)q[g]=Be(je(e,$,g));return{c(){t=u("div"),n=u("div");for(let g=0;g<y.length;g+=1)y[g].c();i=m(),l=u("button"),l.textContent="←",d=m(),c=u("button"),c.textContent="→",h=m(),p=u("div");for(let g=0;g<q.length;g+=1)q[g].c();s(l,"class","carousel-button prev svelte-qnecny"),s(c,"class","carousel-button next svelte-qnecny"),s(n,"class","carousel-container svelte-qnecny"),s(p,"class","carousel-dots svelte-qnecny"),s(t,"class","projects svelte-qnecny")},m(g,x){k(g,t,x),r(t,n);for(let v=0;v<y.length;v+=1)y[v]&&y[v].m(n,null);r(n,i),r(n,l),r(n,d),r(n,c),r(t,h),r(t,p);for(let v=0;v<q.length;v+=1)q[v]&&q[v].m(p,null);f||(C=[V(l,"click",e[9]),V(c,"click",e[8]),V(n,"touchstart",e[10]),V(n,"touchmove",e[11]),V(n,"touchend",e[12],{passive:!0})],f=!0)},p(g,x){if(x[0]&9){_=P(g[3]);let v;for(v=0;v<_.length;v+=1){const j=Ie(g,_,v);y[v]?y[v].p(j,x):(y[v]=Oe(j),y[v].c(),y[v].m(n,i))}for(;v<y.length;v+=1)y[v].d(1);y.length=_.length}if(x[0]&1){$=P(g[3]);let v;for(v=0;v<$.length;v+=1){const j=je(g,$,v);q[v]?q[v].p(j,x):(q[v]=Be(j),q[v].c(),q[v].m(p,null))}for(;v<q.length;v+=1)q[v].d(1);q.length=$.length}},d(g){g&&w(t),D(y,g),D(q,g),f=!1,re(C)}}}function Me(e){let t,n,i,l,d,c,h;return{c(){t=u("a"),n=u("div"),n.textContent=`${e[32].title}`,i=m(),l=u("div"),l.textContent=`${e[32].date}`,d=m(),c=u("div"),c.textContent=`${e[32].description}`,h=m(),s(l,"class","project-date svelte-qnecny"),s(c,"class","project-description svelte-qnecny"),s(t,"href",e[32].link),s(t,"class","project-card svelte-qnecny"),We(t,"background-color",e[32].color),s(t,"target","_blank"),s(t,"rel","noopener")},m(p,f){k(p,t,f),r(t,n),r(t,i),r(t,l),r(t,d),r(t,c),r(t,h)},p:M,d(p){p&&w(t)}}}function Oe(e){let t,n,i,l,d,c,h;return{c(){t=u("a"),n=u("div"),n.textContent=`${e[32].title}`,i=m(),l=u("div"),l.textContent=`${e[32].date}`,d=m(),c=u("div"),c.textContent=`${e[32].description}`,s(l,"class","project-date svelte-qnecny"),s(c,"class","project-description svelte-qnecny"),s(t,"href",e[32].link),s(t,"class",h="project-card "+(e[31]===e[0]?"active":e[31]===(e[0]-1+e[3].length)%e[3].length?"prev":"next")+" svelte-qnecny"),We(t,"background-color",e[32].color),s(t,"target","_blank"),s(t,"rel","noopener")},m(p,f){k(p,t,f),r(t,n),r(t,i),r(t,l),r(t,d),r(t,c)},p(p,f){f[0]&1&&h!==(h="project-card "+(p[31]===p[0]?"active":p[31]===(p[0]-1+p[3].length)%p[3].length?"prev":"next")+" svelte-qnecny")&&s(t,"class",h)},d(p){p&&w(t)}}}function Be(e){let t,n,i,l;function d(){return e[13](e[31])}return{c(){t=u("div"),s(t,"class",n="dot "+(e[31]===e[0]?"active":"")+" svelte-qnecny")},m(c,h){k(c,t,h),i||(l=V(t,"click",d),i=!0)},p(c,h){e=c,h[0]&1&&n!==(n="dot "+(e[31]===e[0]?"active":"")+" svelte-qnecny")&&s(t,"class",n)},d(c){c&&w(t),i=!1,l()}}}function Ne(e){let t,n,i,l,d,c,h,p,f,C=e[26].description+"",_;return{c(){t=u("div"),n=u("div"),n.textContent=`${e[26].year}`,i=m(),l=u("div"),d=u("div"),d.textContent=`${e[26].title}`,c=m(),h=u("div"),h.textContent=`${e[26].location}`,p=m(),f=u("div"),_=m(),s(n,"class","experiment-year svelte-qnecny"),s(d,"class","experiment-title svelte-qnecny"),s(h,"class","experience-location svelte-qnecny"),s(f,"class","experience-description svelte-qnecny"),s(l,"class","experiment-content svelte-qnecny"),s(t,"class","experiment svelte-qnecny")},m(y,$){k(y,t,$),r(t,n),r(t,i),r(t,l),r(l,d),r(l,c),r(l,h),r(l,p),r(l,f),f.innerHTML=C,r(t,_)},p:M,d(y){y&&w(t)}}}function De(e){let t,n,i,l,d,c,h,p,f,C;return{c(){t=u("div"),n=u("div"),n.textContent=`${e[23].year}`,i=m(),l=u("div"),d=u("div"),d.textContent=`${e[23].title}`,c=m(),h=u("div"),h.textContent=`${e[23].location}`,p=m(),f=u("div"),f.textContent=`${e[23].description}`,C=m(),s(n,"class","experiment-year svelte-qnecny"),s(d,"class","experiment-title svelte-qnecny"),s(h,"class","experience-location svelte-qnecny"),s(f,"class","experience-description svelte-qnecny"),s(l,"class","experiment-content svelte-qnecny"),s(t,"class","experiment svelte-qnecny")},m(_,y){k(_,t,y),r(t,n),r(t,i),r(t,l),r(l,d),r(l,c),r(l,h),r(l,p),r(l,f),r(t,C)},p:M,d(_){_&&w(t)}}}function Je(e){let t,n,i,l,d,c;return{c(){t=u("div"),n=u("div"),n.textContent=`${e[20].category}`,i=m(),l=u("div"),d=u("div"),d.textContent=`${e[20].items}`,c=m(),s(n,"class","experiment-year svelte-qnecny"),s(d,"class","experience-description svelte-qnecny"),s(l,"class","experiment-content svelte-qnecny"),s(t,"class","experiment svelte-qnecny")},m(h,p){k(h,t,p),r(t,n),r(t,i),r(t,l),r(l,d),r(t,c)},p:M,d(h){h&&w(t)}}}function Re(e){let t,n,i,l,d,c,h,p,f,C;return{c(){t=u("div"),n=u("div"),n.textContent=`${e[17].year}`,i=m(),l=u("div"),d=u("div"),d.textContent=`${e[17].title}`,c=m(),h=u("div"),h.textContent=`${e[17].location}`,p=m(),f=u("div"),f.textContent=`${e[17].description}`,C=m(),s(n,"class","experiment-year svelte-qnecny"),s(d,"class","experiment-title svelte-qnecny"),s(h,"class","experience-location svelte-qnecny"),s(f,"class","experience-description svelte-qnecny"),s(l,"class","experiment-content svelte-qnecny"),s(t,"class","experiment svelte-qnecny")},m(_,y){k(_,t,y),r(t,n),r(t,i),r(t,l),r(l,d),r(l,c),r(l,h),r(l,p),r(l,f),r(t,C)},p:M,d(_){_&&w(t)}}}function ht(e){let t,n,i,l,d,c,h,p,f,C,_,y,$,q,g,x,v,j,B,O,Q,Z,Ce,de,ee,ue,te,ne,fe,J,he,le,pe,R,ve,ie,me,G,ge,oe,_e,z;function qe(o,b){return o[1]?ft:ut}let ae=qe(e),I=ae(e),W=P(e[4]),S=[];for(let o=0;o<W.length;o+=1)S[o]=Ne(Pe(e,W,o));let F=P(e[5]),E=[];for(let o=0;o<F.length;o+=1)E[o]=De(Te(e,F,o));let H=P(e[7]),A=[];for(let o=0;o<H.length;o+=1)A[o]=Je(Ae(e,H,o));let U=P(e[6]),T=[];for(let o=0;o<U.length;o+=1)T[o]=Re(Ee(e,U,o));return{c(){t=u("div"),n=u("h1"),n.textContent="Henry Bar-Or",i=m(),l=u("p"),l.textContent="Based in Irvine, CA, I'm a student studying Software Engineering and a National Taekwondo Champion.",d=m(),c=u("div"),h=u("a"),p=N("GitHub"),f=m(),C=u("a"),_=N("Instagram"),y=m(),$=u("a"),q=N("LinkedIn"),g=m(),x=u("a"),v=N("Resume"),j=m(),B=u("a"),O=N("YouTube"),Q=m(),Z=u("a"),Ce=N("Email"),de=m(),ee=u("h2"),ee.textContent="Work",ue=m(),I.c(),te=m(),ne=u("h2"),ne.textContent="Professional Experience",fe=m(),J=u("div");for(let o=0;o<S.length;o+=1)S[o].c();he=m(),le=u("h2"),le.textContent="Education",pe=m(),R=u("div");for(let o=0;o<E.length;o+=1)E[o].c();ve=m(),ie=u("h2"),ie.textContent="Skills",me=m(),G=u("div");for(let o=0;o<A.length;o+=1)A[o].c();ge=m(),oe=u("h2"),oe.textContent="Activities",_e=m(),z=u("div");for(let o=0;o<T.length;o+=1)T[o].c();s(n,"class","svelte-qnecny"),s(l,"class","intro svelte-qnecny"),s(h,"href",e[2].github),s(h,"target","_blank"),s(h,"rel","noopener"),s(h,"class","svelte-qnecny"),s(C,"href",e[2].instagram),s(C,"target","_blank"),s(C,"rel","noopener"),s(C,"class","svelte-qnecny"),s($,"href",e[2].linkedin),s($,"target","_blank"),s($,"rel","noopener"),s($,"class","svelte-qnecny"),s(x,"href",e[2].resume),s(x,"target","_blank"),s(x,"rel","noopener"),s(x,"class","svelte-qnecny"),s(B,"href",e[2].youtube),s(B,"target","_blank"),s(B,"rel","noopener"),s(B,"class","svelte-qnecny"),s(Z,"href",e[2].email),s(Z,"class","svelte-qnecny"),s(c,"class","social-links svelte-qnecny"),s(t,"class","header svelte-qnecny"),s(ee,"class","section-title svelte-qnecny"),s(ne,"class","section-title svelte-qnecny"),s(J,"class","experiments svelte-qnecny"),s(le,"class","section-title svelte-qnecny"),s(R,"class","experiments svelte-qnecny"),s(ie,"class","section-title svelte-qnecny"),s(G,"class","experiments svelte-qnecny"),s(oe,"class","section-title svelte-qnecny"),s(z,"class","experiments svelte-qnecny")},m(o,b){k(o,t,b),r(t,n),r(t,i),r(t,l),r(t,d),r(t,c),r(c,h),r(h,p),r(c,f),r(c,C),r(C,_),r(c,y),r(c,$),r($,q),r(c,g),r(c,x),r(x,v),r(c,j),r(c,B),r(B,O),r(c,Q),r(c,Z),r(Z,Ce),k(o,de,b),k(o,ee,b),k(o,ue,b),I.m(o,b),k(o,te,b),k(o,ne,b),k(o,fe,b),k(o,J,b);for(let a=0;a<S.length;a+=1)S[a]&&S[a].m(J,null);k(o,he,b),k(o,le,b),k(o,pe,b),k(o,R,b);for(let a=0;a<E.length;a+=1)E[a]&&E[a].m(R,null);k(o,ve,b),k(o,ie,b),k(o,me,b),k(o,G,b);for(let a=0;a<A.length;a+=1)A[a]&&A[a].m(G,null);k(o,ge,b),k(o,oe,b),k(o,_e,b),k(o,z,b);for(let a=0;a<T.length;a+=1)T[a]&&T[a].m(z,null)},p(o,b){if(ae===(ae=qe(o))&&I?I.p(o,b):(I.d(1),I=ae(o),I&&(I.c(),I.m(te.parentNode,te))),b[0]&16){W=P(o[4]);let a;for(a=0;a<W.length;a+=1){const L=Pe(o,W,a);S[a]?S[a].p(L,b):(S[a]=Ne(L),S[a].c(),S[a].m(J,null))}for(;a<S.length;a+=1)S[a].d(1);S.length=W.length}if(b[0]&32){F=P(o[5]);let a;for(a=0;a<F.length;a+=1){const L=Te(o,F,a);E[a]?E[a].p(L,b):(E[a]=De(L),E[a].c(),E[a].m(R,null))}for(;a<E.length;a+=1)E[a].d(1);E.length=F.length}if(b[0]&128){H=P(o[7]);let a;for(a=0;a<H.length;a+=1){const L=Ae(o,H,a);A[a]?A[a].p(L,b):(A[a]=Je(L),A[a].c(),A[a].m(G,null))}for(;a<A.length;a+=1)A[a].d(1);A.length=H.length}if(b[0]&64){U=P(o[6]);let a;for(a=0;a<U.length;a+=1){const L=Ee(o,U,a);T[a]?T[a].p(L,b):(T[a]=Re(L),T[a].c(),T[a].m(z,null))}for(;a<T.length;a+=1)T[a].d(1);T.length=U.length}},i:M,o:M,d(o){o&&(w(t),w(de),w(ee),w(ue),w(te),w(ne),w(fe),w(J),w(he),w(le),w(pe),w(R),w(ve),w(ie),w(me),w(G),w(ge),w(oe),w(_e),w(z)),I.d(o),D(S,o),D(E,o),D(A,o),D(T,o)}}}function pt(e,t,n){const i={github:"https://github.com/exavadw",instagram:"https://www.instagram.com/henry.baror/",linkedin:"https://linkedin.com/in/henrybaror",resume:"./Resume.pdf",youtube:"https://www.youtube.com/@henrybaror",email:"mailto:ebaror@uci.edu"},l=[{title:"Speech-to-Text/Text-to-Speech",image:"/svelte-gh-pages/assets/project1.jpg",color:"#3d3d4d",link:"https://github.com/exavadw/stt-tts",date:"Dec 2024 - Jan 2025",description:`• Implemented a web application using the Svelte framework and Rust back-end to convert speech to text and text to speech.
• Used piper-rs for text-to-speech and whisper models for speech-to-text.`},{title:"Eyewi",image:"/svelte-gh-pages/assets/project2.jpg",color:"#1a1a1a",link:"https://github.com/exavadw/Eyewi",date:"Nov - Dec 2024",description:`• Created an instant replay application for athletes with Python designed to capture, manage and display videos.
• Feeds are saved locally or uploaded to Google Drive using the Google Cloud API.
• Runs on Windows, Mac, and Linux including Raspberry Pi.
• Currently used at a local business with expansion planned.`},{title:"TMGE",image:"/svelte-gh-pages/assets/project3.jpg",color:"#2c4a3e",link:"https://github.com/exavadw/TMGE",date:"March - May 2023",description:`• Collaborated with a team of 5 to create an engine for tile-based games, such as Tetris and Bejeweled, in Java.
• Integrated the game engine into the abstraction layer and authored engine design documentation.`},{title:"Perfect Storm",image:"/svelte-gh-pages/assets/project4.jpg",color:"#4d4a1f",link:"https://github.com/exavadw/Perfect-Storm-API",date:"Aug 2020 - Aug 2021",description:`• Led a team of 3 programmers to create a mod of Naruto Storm 4 adding new content and fixing bugs.
• Reverse engineered x86 binary without any source code, using x86 Assembly, and C/C++.
• Mod received millions of views with international showcase.`}],d=[{year:"2020 - Present",title:"The Light Brigade LLC | Webmaster/Audio Engineer",location:"Remote",description:`• Create and manage <a href="https://pillarsofwealth.com" target="_blank" rel="noopener">pillarsofwealth.com</a> using Wordpress, CSS/HTML5, JS, and DigitalOcean to host.
• Edit audio files used for audiobook containing site content hosted on Audible.`}],c=[{year:"September 2021 - Present",title:"University of California, Irvine",location:"Irvine, CA",description:"• B.S. Software Engineering Expected Graduation: June 2025"}],h=[{year:"Oct 2024 - Present",title:"CA Tricking Demo Team | Performance Coordinator",location:"Orange County, CA",description:`• Organize performances with a team of martial arts trickers in our local community.
• Emcee, communicate with event staff, and coordinate on-site so that events run smoothly.
• Performed for audiences of up to 500: Orange County Japan Fair and Anime Expo Chibi.`},{year:"Sept 2018 - Present",title:"Taekwondo | 3rd Degree Black Belt",location:"Ellicott City, MD / Irvine, CA",description:`• National Champion | 1st place at National Collegiate Taekwondo Association Nationals for Board Breaking in the Black Belt Division (2024)
• Taekwondo/Summer Camp Instructor (Sept 2018 - Aug 2022)`},{year:"Jan 2022 - June 2024",title:"UCI Jazz Band | Trombone Section Leader",location:"Irvine, CA",description:"• Coordinated schedules, led weekly practices, and organized/hosted band-wide social events."}],p=[{category:"Languages",items:"• C++, Python, Java, Javascript, Typescript, Rust, C, x86 Assembly"},{category:"Tools/Frameworks",items:"• VS Code, Cursor, HTML, CSS, Svelte, Wordpress, DigitalOcean, IDA Pro, Cheat Engine, Turborepo"},{category:"Libraries",items:"• SDL2, Piper-RS, Whisper, Google Cloud API, IMGUI, tkinter"}];let f=0,C=!1,_=0,y=0;function $(){n(1,C=window.innerWidth<768)}function q(){n(0,f=(f+1)%l.length)}function g(){n(0,f=(f-1+l.length)%l.length)}function x(O){_=O.touches[0].clientX}function v(O){y=O.touches[0].clientX}function j(){const Q=y-_;Math.abs(Q)>50&&(Q>0?g():q()),_=0,y=0}return Qe(()=>($(),window.addEventListener("resize",$),()=>window.removeEventListener("resize",$))),[f,C,i,l,d,c,h,p,q,g,x,v,j,O=>n(0,f=O)]}class vt extends at{constructor(t){super(),rt(this,t,pt,ht,Xe,{},null,[-1,-1])}}new vt({target:document.getElementById("app")});
