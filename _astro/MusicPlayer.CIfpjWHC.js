import{o as rr,a as ir,i as nr}from"./lifecycle.BUdnxebf.js";import{ah as lr,a8 as sr,aI as or,aJ as cr,aK as Ge,u as Je,aL as ur,ac as Qe,aM as dr,_ as Ze,aN as Et,aO as ta,a5 as ve,aP as vr,f as rt,t as St,g as t,a as q,p as fr,b as mr,aQ as qe,d as ot,s,m as M,h as d,al as Ft,e as l,r as n,o as pr,c as gt}from"./template.CPXyBZoS.js";import{a as gr,s as Z}from"./render.LYkq5V1R.js";import{i as B}from"./if.CsDsK0Yx.js";import{e as hr,i as br}from"./each.DObiixEX.js";import{s as T,a as W,c as Ue}from"./props.DO61WAiE.js";import{e as u}from"./utils.nNk4BeOt.js";import{s as He}from"./event-modifiers.gvea_hMH.js";import{I as m}from"./Icon.DOu6xpjm.js";import{m as Wt}from"./config.dR5stsED.js";import{I as A}from"./zh_TW.B395Vq90.js";import{i as D}from"./translation.CCjw6gXK.js";const yr=()=>performance.now(),tt={tick:i=>requestAnimationFrame(i),now:()=>yr(),tasks:new Set};function ea(){const i=tt.now();tt.tasks.forEach(r=>{r.c(i)||(tt.tasks.delete(r),r.f())}),tt.tasks.size!==0&&tt.tick(ea)}function xr(i){let r;return tt.tasks.size===0&&tt.tick(ea),{promise:new Promise(p=>{tt.tasks.add(r={c:i,f:p})}),abort(){tt.tasks.delete(r)}}}function Yt(i,r){Qe(()=>{i.dispatchEvent(new CustomEvent(r))})}function _r(i){if(i==="float")return"cssFloat";if(i==="offset")return"cssOffset";if(i.startsWith("--"))return i;const r=i.split("-");return r.length===1?r[0]:r[0]+r.slice(1).map(p=>p[0].toUpperCase()+p.slice(1)).join("")}function Ke(i){const r={},p=i.split(";");for(const y of p){const[v,g]=y.split(":");if(!v||g===void 0)break;const f=_r(v.trim());r[f]=g.trim()}return r}const wr=i=>i;function kr(i,r,p,y){var v=(i&ur)!==0,g="both",f,S=r.inert,L=r.style.overflow,x,k;function C(){return Qe(()=>f??=p()(r,y?.()??{},{direction:g}))}var X={is_global:v,in(){r.inert=S,Yt(r,"introstart"),x=de(r,C(),k,1,()=>{Yt(r,"introend"),x?.abort(),x=f=void 0,r.style.overflow=L})},out(I){r.inert=!0,Yt(r,"outrostart"),k=de(r,C(),x,0,()=>{Yt(r,"outroend"),I?.()})},stop:()=>{x?.abort(),k?.abort()}},N=lr;if((N.nodes.t??=[]).push(X),gr){var R=v;if(!R){for(var c=N.parent;c&&(c.f&sr)!==0;)for(;(c=c.parent)&&(c.f&or)===0;);R=!c||(c.f&cr)!==0}R&&Ge(()=>{Je(()=>X.in())})}}function de(i,r,p,y,v){var g=y===1;if(dr(r)){var f,S=!1;return Ze(()=>{if(!S){var I=r({direction:g?"in":"out"});f=de(i,I,p,y,v)}}),{abort:()=>{S=!0,f?.abort()},deactivate:()=>f.deactivate(),reset:()=>f.reset(),t:()=>f.t()}}if(p?.deactivate(),!r?.duration)return v(),{abort:Et,deactivate:Et,reset:Et,t:()=>y};const{delay:L=0,css:x,tick:k,easing:C=wr}=r;var X=[];if(g&&p===void 0&&(k&&k(0,1),x)){var N=Ke(x(0,1));X.push(N,N)}var R=()=>1-y,c=i.animate(X,{duration:L,fill:"forwards"});return c.onfinish=()=>{c.cancel();var I=p?.t()??1-y;p?.abort();var h=y-I,it=r.duration*Math.abs(h),nt=[];if(it>0){var V=!1;if(x)for(var P=Math.ceil(it/16.666666666666668),F=0;F<=P;F+=1){var _=I+h*C(F/P),lt=Ke(x(_,1-_));nt.push(lt),V||=lt.overflow==="hidden"}V&&(i.style.overflow="hidden"),R=()=>{var O=c.currentTime;return I+h*C(O/it)},k&&xr(()=>{if(c.playState!=="running")return!1;var O=R();return k(O,1-O),!0})}c=i.animate(nt,{duration:it,fill:"forwards"}),c.onfinish=()=>{R=()=>y,k?.(y,1-y),v()}},{abort:()=>{c&&(c.cancel(),c.effect=null,c.onfinish=Et)},deactivate:()=>{v=Et},reset:()=>{y===0&&k?.(1,0)},t:()=>R()}}function Pr(i,r,p=r){var y=()=>{p(i.volume)};r()==null&&y(),ta(i,["volumechange"],y,!1),ve(()=>{var v=Number(r());v!==i.volume&&!isNaN(v)&&(i.volume=v)})}function Er(i,r,p=r){var y=()=>{p(i.muted)};r()==null&&y(),ta(i,["volumechange"],y,!1),ve(()=>{var v=!!r();i.muted!==v&&(i.muted=v)})}function Xe(i,r){return i===r||i?.[vr]===r}function ue(i={},r,p,y){return Ge(()=>{var v,g;return ve(()=>{v=g,g=[],Je(()=>{i!==p(...g)&&(r(i,...g),v&&Xe(p(...v),i)&&r(null,...v))})}),()=>{Ze(()=>{g&&Xe(p(...g),i)&&r(null,...g)})}}),i}function Sr(i){const r=i-1;return r*r*r+1}function Fr(i,{delay:r=0,duration:p=400,easing:y=Sr,axis:v="y"}={}){const g=getComputedStyle(i),f=+g.opacity,S=v==="y"?"height":"width",L=parseFloat(g[S]),x=v==="y"?["top","bottom"]:["left","right"],k=x.map(h=>`${h[0].toUpperCase()}${h.slice(1)}`),C=parseFloat(g[`padding${k[0]}`]),X=parseFloat(g[`padding${k[1]}`]),N=parseFloat(g[`margin${k[0]}`]),R=parseFloat(g[`margin${k[1]}`]),c=parseFloat(g[`border${k[0]}Width`]),I=parseFloat(g[`border${k[1]}Width`]);return{delay:r,duration:p,easing:y,css:h=>`overflow: hidden;opacity: ${Math.min(h*20,1)*f};${S}: ${h*L}px;padding-${x[0]}: ${h*C}px;padding-${x[1]}: ${h*X}px;margin-${x[0]}: ${h*N}px;margin-${x[1]}: ${h*R}px;border-${x[0]}-width: ${h*c}px;border-${x[1]}-width: ${h*I}px;min-${S}: 0`}}var Mr=ot('<div class="fixed bottom-20 right-4 z-[60] max-w-sm"><div class="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-up"><!> <span class="text-sm flex-1"> </span> <button class="text-white/80 hover:text-white transition-colors"><!></button></div></div>'),Tr=ot('<div class="flex space-x-0.5"><div class="w-0.5 h-3 bg-white rounded-full animate-pulse"></div> <div class="w-0.5 h-4 bg-white rounded-full animate-pulse" style="animation-delay: 150ms;"></div> <div class="w-0.5 h-2 bg-white rounded-full animate-pulse" style="animation-delay: 300ms;"></div></div>'),Cr=ot('<span class="text-sm text-[var(--content-meta)]"></span>'),Ir=ot('<div role="button" tabindex="0"><div class="w-6 h-6 flex items-center justify-center"><!></div> <div class="w-10 h-10 rounded-lg overflow-hidden bg-[var(--btn-regular-bg)] flex-shrink-0"><img loading="lazy" class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><div> </div> <div> </div></div></div>'),jr=ot('<div class="playlist-panel float-panel fixed bottom-20 right-4 w-80 max-h-96 overflow-hidden z-50"><div class="playlist-header flex items-center justify-between p-4 border-b border-[var(--line-divider)]"><h3 class="text-lg font-semibold text-90"> </h3> <button class="btn-plain w-8 h-8 rounded-lg"><!></button></div> <div class="playlist-content overflow-y-auto max-h-80 hide-scrollbar"></div></div>'),Ar=ot(`<!> <div><div role="button" tabindex="0"><!></div> <div><div class="flex items-center gap-3"><div class="cover-container relative w-12 h-12 rounded-full overflow-hidden cursor-pointer" role="button" tabindex="0"><img/> <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"><!></div></div> <div class="flex-1 min-w-0 cursor-pointer" role="button" tabindex="0"><div class="text-sm font-medium text-90 truncate"> </div> <div class="text-xs text-50 truncate"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div></div> <div><div class="flex items-center gap-4 mb-4"><div class="cover-container relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0"><img/></div> <div class="flex-1 min-w-0"><div class="song-title text-lg font-bold text-90 truncate mb-1"> </div> <div class="song-artist text-sm text-50 truncate"> </div> <div class="text-xs text-30 mt-1"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button> <button><!></button></div></div> <div class="progress-section mb-4"><div class="progress-bar flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div></div> <div class="controls flex items-center justify-center gap-2 mb-4"><button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button></div> <div class="bottom-controls flex items-center gap-2"><button class="btn-plain w-8 h-8 rounded-lg"><!></button> <div class="flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer touch-none" role="slider" tabindex="0" aria-valuemin="0" aria-valuemax="100"><div></div></div> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div> <!></div> <style>.orb-player {
	position: relative;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
}
.orb-player::before {
	content: '';
	position: absolute;
	inset: -0.125rem;
	background: linear-gradient(45deg, var(--primary), transparent, var(--primary));
	border-radius: 50%;
	z-index: -1;
	opacity: 0;
	transition: opacity 0.3s ease;
}
.orb-player:hover::before {
	opacity: 0.3;
	animation: rotate 2s linear infinite;
}
.orb-player .animate-pulse {
	animation: musicWave 1.5s ease-in-out infinite;
}
@keyframes rotate {
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
}
@keyframes musicWave {
	0%, 100% { transform: scaleY(0.5); }
	50% { transform: scaleY(1); }
}
.music-player.hidden-mode {
	width: 3rem;
	height: 3rem;
}
.music-player {
    max-width: 20rem;
    -webkit-user-select: none;
       -moz-user-select: none;
            user-select: none;
}
.mini-player {
    width: 17.5rem;
    position: absolute;
    bottom: 0;
    right: 0;
    /*left: 0;*/
}
.expanded-player {
    width: 20rem;
    position: absolute;
    bottom: 0;
    right: 0;
}
.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
    0%, 100% {
        opacity: 1;
	}
    50% {
        opacity: 0.5;
	}
}
.progress-section div:hover,
.bottom-controls > div:hover {
    transform: scaleY(1.2);
    transition: transform 0.2s ease;
}
@media (max-width: 768px) {
    .music-player {
        max-width: 280px !important;
        /*left: 0.5rem !important;*/
        bottom: 0.5rem !important;
        right: 0.5rem !important;
	}
    .mini-player {
        width: 280px;
    }
    .music-player.expanded {
        width: calc(100vw - 16px);
        max-width: none;
        /*left: 0.5rem !important;*/
        right: 0.5rem !important;
	}
    .playlist-panel {
        width: calc(100vw - 16px) !important;
        /*left: 0.5rem !important;*/
        right: 0.5rem !important;
        max-width: none;
	}
    .controls {
        gap: 8px;
	}
    .controls button {
        width: 36px;
        height: 36px;
	}
    .controls button:nth-child(3) {
        width: 44px;
        height: 44px;
	}
}
@media (max-width: 480px) {
    .music-player {
        max-width: 260px;
	}
    .song-title {
        font-size: 14px;
	}
    .song-artist {
        font-size: 12px;
	}
    .controls {
        gap: 6px;
        margin-bottom: 12px;
	}
    .controls button {
        width: 32px;
        height: 32px;
	}
    .controls button:nth-child(3) {
        width: 40px;
        height: 40px;
	}
    .playlist-item {
        padding: 8px 12px;
	}
    .playlist-item .w-10 {
        width: 32px;
        height: 32px;
	}
}
@keyframes slide-up {
    from {
        transform: translateY(100%);
        opacity: 0;
	}
    to {
        transform: translateY(0);
        opacity: 1;
	}
}
.animate-slide-up {
    animation: slide-up 0.3s ease-out;
}
@media (hover: none) and (pointer: coarse) {
    .music-player button,
    .playlist-item {
        min-height: 44px;
	}
    .progress-section > div,
    .bottom-controls > div:nth-child(2) {
        height: 12px;
	}
}
/* 自定义旋转动画，停止时保持当前位置 */
@keyframes spin-continuous {
    from {
        transform: rotate(0deg);
	}
    to {
        transform: rotate(360deg);
	}
}
.cover-container img {
    animation: spin-continuous 3s linear infinite;
    animation-play-state: paused;
}
.cover-container img.spinning {
    animation-play-state: running;
}
/* 让主题色按钮更有视觉反馈 */
button.bg-\\[var\\(--primary\\)\\] {
    box-shadow: 0 0 0 2px var(--primary);
	border: none;
}</style>`,1),Dr=ot('<audio preload="auto"></audio> <!>',1);function Hr(i,r){mr(r,!1);let p=Wt.meting_api,y=Wt.id,v=Wt.server,g=Wt.type,f=M(!1),S=M(!1),L=M(!1),x=M(!1),k=M(0),C=M(0);const X="music-player-volume";let N=M(.7),R=M(!1),c=M(!1),I=M(!1),h=M(0),it=M(""),nt=M(!1),V=M({title:"Sample Song",artist:"Sample Artist",cover:"/favicon/favicon.ico",url:"",duration:0}),P=M([]),F=M(0),_=M(),lt=M(),O=M();function aa(){try{if(typeof localStorage<"u"){const e=localStorage.getItem(X);e!==null&&!isNaN(parseFloat(e))&&s(N,parseFloat(e))}}catch(e){console.warn("Failed to load volume settings from localStorage:",e)}}function ra(){try{typeof localStorage<"u"&&localStorage.setItem(X,t(N).toString())}catch(e){console.warn("Failed to save volume settings to localStorage:",e)}}async function ia(){s(c,!0);const e=p.replace(":server",v).replace(":type",g).replace(":id",y).replace(":auth","").replace(":r",Date.now().toString());try{const w=await fetch(e);if(!w.ok)throw new Error("meting api error");const G=await w.json();s(P,G.map(Y=>{let ht=Y.name??Y.title??D(A.unknownSong),Dt=Y.artist??Y.author??D(A.unknownArtist),$=Y.duration??0;return $>1e4&&($=Math.floor($/1e3)),(!Number.isFinite($)||$<=0)&&($=0),{id:Y.id,title:ht,artist:Dt,cover:Y.pic??"",url:Y.url??"",duration:$}})),t(P).length>0&&me(t(P)[0]),s(c,!1)}catch{Xt(D(A.musicPlayerErrorPlaylist)),s(c,!1)}}function qt(){!t(_)||!t(V).url||(t(f)?t(_).pause():t(_).play().catch(()=>{}))}function Mt(){s(S,!t(S)),t(S)&&(s(x,!1),s(L,!1))}function Tt(){s(L,!t(L)),t(L)&&(s(S,!1),s(x,!1))}function fe(){s(x,!t(x))}function na(){s(I,!t(I)),t(I)&&s(h,0)}function la(){s(h,(t(h)+1)%3),t(h)!==0&&s(I,!1)}function sa(){if(t(P).length<=1)return;const e=t(F)>0?t(F)-1:t(P).length-1;Ct(e)}function Ut(e=!0){if(t(P).length<=1)return;let w;if(t(I))do w=Math.floor(Math.random()*t(P).length);while(w===t(F)&&t(P).length>1);else w=t(F)<t(P).length-1?t(F)+1:0;Ct(w,e)}let Ht=!1;function Ct(e,w=!0){e<0||e>=t(P).length||(Ht=w,s(F,e),me(t(P)[t(F)]))}function It(e){return e.startsWith("http://")||e.startsWith("https://")||e.startsWith("/")?e:`/${e}`}function me(e){e&&e.url!==t(V).url&&(s(V,{...e}),e.url?s(c,!0):s(c,!1))}let Kt=!1;function oa(){if(s(c,!1),t(_)?.duration&&t(_).duration>1&&(s(C,Math.floor(t(_).duration)),t(P)[t(F)]&&Ft(P,t(P)[t(F)].duration=t(C)),Ft(V,t(V).duration=t(C))),Ht||t(f)){const e=t(_).play();e!==void 0&&e.catch(w=>{console.warn("自动播放被拦截，等待用户交互:",w),Kt=!0,s(f,!1)})}}function pe(){if(Kt&&t(_)){const e=t(_).play();e!==void 0&&e.then(()=>{Kt=!1}).catch(()=>{})}}function ca(e){if(!t(V).url)return;s(c,!1),Xt(D(A.musicPlayerErrorSong));const w=t(f)||Ht;t(P).length>1?setTimeout(()=>Ut(w),1e3):Xt(D(A.musicPlayerErrorEmpty))}function ua(){}function da(){t(h)===1?(Ft(_,t(_).currentTime=0),t(_).play().catch(()=>{})):t(h)===2||t(I)?Ut(!0):s(f,!1)}function Xt(e){s(it,e),s(nt,!0),setTimeout(()=>{s(nt,!1)},3e3)}function va(){s(nt,!1)}function fa(e){if(!t(_)||!t(lt))return;const w=t(lt).getBoundingClientRect(),Y=(e.clientX-w.left)/w.width*t(C);Ft(_,t(_).currentTime=Y),s(k,Y)}let jt=M(!1),At=!1,Gt=null,ct=null;function ma(e){t(O)&&(e.preventDefault(),At=!0,t(O).setPointerCapture(e.pointerId),Gt=t(O).getBoundingClientRect(),ge(e.clientX))}function pa(e){At&&(e.preventDefault(),s(jt,!0),!ct&&(ct=requestAnimationFrame(()=>{ge(e.clientX),ct=null})))}function ga(e){At&&(At=!1,s(jt,!1),Gt=null,t(O)&&t(O).releasePointerCapture(e.pointerId),ct&&(cancelAnimationFrame(ct),ct=null),ra())}function ge(e){if(!t(_)||!t(O))return;const w=Gt||t(O).getBoundingClientRect(),G=Math.max(0,Math.min(1,(e-w.left)/w.width));s(N,G)}function he(){s(R,!t(R))}function be(e){if(!Number.isFinite(e)||e<0)return"0:00";const w=Math.floor(e/60),G=Math.floor(e%60);return`${w}:${G.toString().padStart(2,"0")}`}const ye=["click","keydown","touchstart"];rr(()=>{aa(),ye.forEach(e=>{document.addEventListener(e,pe,{capture:!0})}),ia()}),ir(()=>{typeof document<"u"&&ye.forEach(e=>{document.removeEventListener(e,pe,{capture:!0})})}),nr();var xe=Dr();u("pointermove",qe,pa),u("pointerup",qe,ga);var U=rt(xe);ue(U,e=>s(_,e),()=>t(_));var ha=d(U,2);{var ba=e=>{var w=Ar(),G=rt(w);{var Y=a=>{var b=Mr(),E=l(b),j=l(E);m(j,{icon:"material-symbols:error",class:"text-xl flex-shrink-0"});var z=d(j,2),o=l(z,!0);n(z);var J=d(z,2),mt=l(J);m(mt,{icon:"material-symbols:close",class:"text-lg"}),n(J),n(E),n(b),St(()=>Z(o,t(it))),u("click",J,va),q(a,b)};B(G,a=>{t(nt)&&a(Y)})}var ht=d(G,2);let Dt;var $=l(ht);let _e;var ya=l($);{var xa=a=>{m(a,{icon:"eos-icons:loading",class:"text-white text-lg"})},_a=a=>{var b=gt(),E=rt(b);{var j=o=>{var J=Tr();q(o,J)},z=o=>{m(o,{icon:"material-symbols:music-note",class:"text-white text-lg"})};B(E,o=>{t(f)?o(j):o(z,!1)},!0)}q(a,b)};B(ya,a=>{t(c)?a(xa):a(_a,!1)})}n($);var Lt=d($,2);let we;var ke=l(Lt),ut=l(ke),Nt=l(ut);let Pe;var Ee=d(Nt,2),wa=l(Ee);{var ka=a=>{m(a,{icon:"eos-icons:loading",class:"text-white text-xl"})},Pa=a=>{var b=gt(),E=rt(b);{var j=o=>{m(o,{icon:"material-symbols:pause",class:"text-white text-xl"})},z=o=>{m(o,{icon:"material-symbols:play-arrow",class:"text-white text-xl"})};B(E,o=>{t(f)?o(j):o(z,!1)},!0)}q(a,b)};B(wa,a=>{t(c)?a(ka):a(Pa,!1)})}n(Ee),n(ut);var dt=d(ut,2),Jt=l(dt),Ea=l(Jt,!0);n(Jt);var Se=d(Jt,2),Sa=l(Se,!0);n(Se),n(dt);var Fe=d(dt,2),bt=l(Fe),Fa=l(bt);m(Fa,{icon:"material-symbols:visibility-off",class:"text-lg"}),n(bt);var Qt=d(bt,2),Ma=l(Qt);m(Ma,{icon:"material-symbols:expand-less",class:"text-lg"}),n(Qt),n(Fe),n(ke),n(Lt);var zt=d(Lt,2);let Me;var Zt=l(zt),te=l(Zt),ee=l(te);let Te;n(te);var ae=d(te,2),re=l(ae),Ta=l(re,!0);n(re);var ie=d(re,2),Ca=l(ie,!0);n(ie);var Ce=d(ie,2),Ia=l(Ce);n(Ce),n(ae);var Ie=d(ae,2),yt=l(Ie),ja=l(yt);m(ja,{icon:"material-symbols:visibility-off",class:"text-lg"}),n(yt);var xt=d(yt,2);let je;var Aa=l(xt);m(Aa,{icon:"material-symbols:queue-music",class:"text-lg"}),n(xt),n(Ie),n(Zt);var ne=d(Zt,2),st=l(ne),Da=l(st);n(st),ue(st,a=>s(lt,a),()=>t(lt)),n(ne);var le=d(ne,2),vt=l(le);let Ae;var La=l(vt);m(La,{icon:"material-symbols:shuffle",class:"text-lg"}),n(vt);var _t=d(vt,2),Na=l(_t);m(Na,{icon:"material-symbols:skip-previous",class:"text-xl"}),n(_t);var ft=d(_t,2);let De;var za=l(ft);{var Ra=a=>{m(a,{icon:"eos-icons:loading",class:"text-xl"})},Va=a=>{var b=gt(),E=rt(b);{var j=o=>{m(o,{icon:"material-symbols:pause",class:"text-xl"})},z=o=>{m(o,{icon:"material-symbols:play-arrow",class:"text-xl"})};B(E,o=>{t(f)?o(j):o(z,!1)},!0)}q(a,b)};B(za,a=>{t(c)?a(Ra):a(Va,!1)})}n(ft);var wt=d(ft,2),$a=l(wt);m($a,{icon:"material-symbols:skip-next",class:"text-xl"}),n(wt);var Rt=d(wt,2);let Le;var Ba=l(Rt);{var Oa=a=>{m(a,{icon:"material-symbols:repeat-one",class:"text-lg"})},Wa=a=>{var b=gt(),E=rt(b);{var j=o=>{m(o,{icon:"material-symbols:repeat",class:"text-lg"})},z=o=>{m(o,{icon:"material-symbols:repeat",class:"text-lg opacity-50"})};B(E,o=>{t(h)===2?o(j):o(z,!1)},!0)}q(a,b)};B(Ba,a=>{t(h)===1?a(Oa):a(Wa,!1)})}n(Rt),n(le);var Ne=d(le,2),Vt=l(Ne),Ya=l(Vt);{var qa=a=>{m(a,{icon:"material-symbols:volume-off",class:"text-lg"})},Ua=a=>{var b=gt(),E=rt(b);{var j=o=>{m(o,{icon:"material-symbols:volume-down",class:"text-lg"})},z=o=>{m(o,{icon:"material-symbols:volume-up",class:"text-lg"})};B(E,o=>{t(N)<.5?o(j):o(z,!1)},!0)}q(a,b)};B(Ya,a=>{t(R)||t(N)===0?a(qa):a(Ua,!1)})}n(Vt);var et=d(Vt,2),ze=l(et);let Re;n(et),ue(et,a=>s(O,a),()=>t(O));var $t=d(et,2),Ha=l($t);m(Ha,{icon:"material-symbols:expand-more",class:"text-lg"}),n($t),n(Ne),n(zt);var Ka=d(zt,2);{var Xa=a=>{var b=jr(),E=l(b),j=l(E),z=l(j,!0);n(j);var o=d(j,2),J=l(o);m(J,{icon:"material-symbols:close",class:"text-lg"}),n(o),n(E);var mt=d(E,2);hr(mt,5,()=>t(P),br,(kt,at,H)=>{var Q=Ir();let Bt;var Pt=l(Q),se=l(Pt);{var Ga=K=>{m(K,{icon:"material-symbols:graphic-eq",class:"text-[var(--primary)] animate-pulse"})},Ja=K=>{var We=gt(),tr=rt(We);{var er=pt=>{m(pt,{icon:"material-symbols:pause",class:"text-[var(--primary)]"})},ar=pt=>{var Ye=Cr();Ye.textContent=H+1,q(pt,Ye)};B(tr,pt=>{H===t(F)?pt(er):pt(ar,!1)},!0)}q(K,We)};B(se,K=>{H===t(F)&&t(f)?K(Ga):K(Ja,!1)})}n(Pt);var oe=d(Pt,2),Ve=l(oe);n(oe);var $e=d(oe,2),Ot=l($e);let Be;var Qa=l(Ot,!0);n(Ot);var ce=d(Ot,2);let Oe;var Za=l(ce,!0);n(ce),n($e),n(Q),St(K=>{Bt=W(Q,1,"playlist-item flex items-center gap-3 p-3 hover:bg-[var(--btn-plain-bg-hover)] cursor-pointer transition-colors",null,Bt,{"bg-[var(--btn-plain-bg)]":H===t(F),"text-[var(--primary)]":H===t(F)}),T(Q,"aria-label",`播放 ${t(at).title??""} - ${t(at).artist??""}`),T(Ve,"src",K),T(Ve,"alt",t(at).title),Be=W(Ot,1,"font-medium truncate",null,Be,{"text-[var(--primary)]":H===t(F),"text-90":H!==t(F)}),Z(Qa,t(at).title),Oe=W(ce,1,"text-sm text-[var(--content-meta)] truncate",null,Oe,{"text-[var(--primary)]":H===t(F)}),Z(Za,t(at).artist)},[()=>It(t(at).cover)]),u("click",Q,()=>Ct(H)),u("keydown",Q,K=>{(K.key==="Enter"||K.key===" ")&&(K.preventDefault(),Ct(H))}),q(kt,Q)}),n(mt),n(b),St(kt=>Z(z,kt),[()=>D(A.musicPlayerPlaylist)]),u("click",o,fe),kr(3,b,()=>Fr,()=>({duration:300,axis:"y"})),q(a,b)};B(Ka,a=>{t(x)&&a(Xa)})}n(ht),pr(2),St((a,b,E,j,z,o,J,mt,kt,at,H,Q,Bt,Pt,se)=>{Dt=W(ht,1,"music-player fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out",null,Dt,{expanded:t(S),"hidden-mode":t(L)}),_e=W($,1,"orb-player w-12 h-12 bg-[var(--primary)] rounded-full shadow-lg cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center hover:scale-110 active:scale-95",null,_e,{"opacity-0":!t(L),"scale-0":!t(L),"pointer-events-none":!t(L)}),T($,"aria-label",a),we=W(Lt,1,"mini-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-3 transition-all duration-500 ease-in-out",null,we,{"opacity-0":t(S)||t(L),"scale-95":t(S)||t(L),"pointer-events-none":t(S)||t(L)}),T(ut,"aria-label",b),T(Nt,"src",E),T(Nt,"alt",j),Pe=W(Nt,1,"w-full h-full object-cover transition-transform duration-300",null,Pe,{spinning:t(f)&&!t(c),"animate-pulse":t(c)}),T(dt,"aria-label",z),Z(Ea,t(V).title),Z(Sa,t(V).artist),T(bt,"title",o),Me=W(zt,1,"expanded-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-4 transition-all duration-500 ease-in-out",null,Me,{"opacity-0":!t(S),"scale-95":!t(S),"pointer-events-none":!t(S)}),T(ee,"src",J),T(ee,"alt",mt),Te=W(ee,1,"w-full h-full object-cover transition-transform duration-300",null,Te,{spinning:t(f)&&!t(c),"animate-pulse":t(c)}),Z(Ta,t(V).title),Z(Ca,t(V).artist),Z(Ia,`${kt??""} / ${at??""}`),T(yt,"title",H),je=W(xt,1,"btn-plain w-8 h-8 rounded-lg flex items-center justify-center",null,je,{"text-[var(--primary)]":t(x)}),T(xt,"title",Q),T(st,"aria-label",Bt),T(st,"aria-valuenow",t(C)>0?t(k)/t(C)*100:0),Ue(Da,`width: ${t(C)>0?t(k)/t(C)*100:0}%`),Ae=W(vt,1,"w-10 h-10 rounded-lg",null,Ae,{"btn-regular":t(I),"btn-plain":!t(I)}),vt.disabled=t(P).length<=1,_t.disabled=t(P).length<=1,De=W(ft,1,"btn-regular w-12 h-12 rounded-full",null,De,{"opacity-50":t(c)}),ft.disabled=t(c),wt.disabled=t(P).length<=1,Le=W(Rt,1,"w-10 h-10 rounded-lg",null,Le,{"btn-regular":t(h)>0,"btn-plain":t(h)===0}),T(et,"aria-label",Pt),T(et,"aria-valuenow",t(N)*100),Re=W(ze,1,"h-full bg-[var(--primary)] rounded-full transition-all",null,Re,{"duration-100":!t(jt),"duration-0":t(jt)}),Ue(ze,`width: ${t(N)*100}%`),T($t,"title",se)},[()=>D(A.musicPlayerShow),()=>t(f)?D(A.musicPlayerPause):D(A.musicPlayerPlay),()=>It(t(V).cover),()=>D(A.musicPlayerCover),()=>D(A.musicPlayerExpand),()=>D(A.musicPlayerHide),()=>It(t(V).cover),()=>D(A.musicPlayerCover),()=>be(t(k)),()=>be(t(C)),()=>D(A.musicPlayerHide),()=>D(A.musicPlayerPlaylist),()=>D(A.musicPlayerProgress),()=>D(A.musicPlayerVolume),()=>D(A.musicPlayerCollapse)]),u("click",$,Tt),u("keydown",$,a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),Tt())}),u("click",ut,qt),u("keydown",ut,a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),qt())}),u("click",dt,Mt),u("keydown",dt,a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),Mt())}),u("click",bt,He(Tt)),u("click",Qt,He(Mt)),u("click",yt,Tt),u("click",xt,fe),u("click",st,fa),u("keydown",st,a=>{if(a.key==="Enter"||a.key===" "){a.preventDefault();const E=.5*t(C);t(_)&&(Ft(_,t(_).currentTime=E),s(k,E))}}),u("click",vt,na),u("click",_t,sa),u("click",ft,qt),u("click",wt,()=>Ut()),u("click",Rt,la),u("click",Vt,he),u("pointerdown",et,ma),u("keydown",et,a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),a.key==="Enter"&&he())}),u("click",$t,Mt),q(e,w)};B(ha,e=>{e(ba)})}St(e=>T(U,"src",e),[()=>It(t(V).url)]),Pr(U,()=>t(N),e=>s(N,e)),Er(U,()=>t(R),e=>s(R,e)),u("play",U,()=>s(f,!0)),u("pause",U,()=>s(f,!1)),u("timeupdate",U,()=>s(k,t(_).currentTime)),u("ended",U,da),u("error",U,ca),u("loadeddata",U,oa),u("loadstart",U,ua),q(i,xe),fr()}export{Hr as default};
