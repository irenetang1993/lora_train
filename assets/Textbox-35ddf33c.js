import{S as we,e as ye,s as ve,m as H,F,o as W,g as f,N as O,h as p,G,j as Te,r as Q,u as y,v as R,w as g,k,H as Y,C as Ee,ak as He,al as Ce,t as ze,x as Ne,a7 as P,E as T,R as S,an as E,af as Be,p as b,b as De,B as L,Q as X,n as K,y as Se,z as Ke}from"./index-2576a72b.js";import{f as Le}from"./Button-ae6c8a38.js";import{B as Ue}from"./BlockTitle-b6671954.js";import{C as je,a as qe}from"./Copy-37fa6926.js";function Fe(t){let e;return{c(){e=ze(t[3])},m(l,u){p(l,e,u)},p(l,u){u[0]&8&&Ne(e,l[3])},d(l){l&&k(e)}}}function Ge(t){let e,l,u,n,a,s,d,c,r=t[6]&&t[10]&&V(t);return{c(){r&&r.c(),e=W(),l=H("textarea"),f(l,"data-testid","textbox"),f(l,"class","scroll-hide svelte-1f354aw"),f(l,"dir",u=t[11]?"rtl":"ltr"),f(l,"placeholder",t[2]),f(l,"rows",t[1]),l.disabled=t[5],l.autofocus=t[12],f(l,"style",n=t[13]?"text-align: "+t[13]:"")},m(o,_){r&&r.m(o,_),p(o,e,_),p(o,l,_),E(l,t[0]),t[36](l),s=!0,t[12]&&l.focus(),d||(c=[Be(a=t[19].call(null,l,t[0])),b(l,"input",t[35]),b(l,"keypress",t[18]),b(l,"blur",t[27]),b(l,"select",t[17]),b(l,"focus",t[28])],d=!0)},p(o,_){o[6]&&o[10]?r?(r.p(o,_),_[0]&1088&&g(r,1)):(r=V(o),r.c(),g(r,1),r.m(e.parentNode,e)):r&&(Q(),y(r,1,1,()=>{r=null}),R()),(!s||_[0]&2048&&u!==(u=o[11]?"rtl":"ltr"))&&f(l,"dir",u),(!s||_[0]&4)&&f(l,"placeholder",o[2]),(!s||_[0]&2)&&f(l,"rows",o[1]),(!s||_[0]&32)&&(l.disabled=o[5]),(!s||_[0]&4096)&&(l.autofocus=o[12]),(!s||_[0]&8192&&n!==(n=o[13]?"text-align: "+o[13]:""))&&f(l,"style",n),a&&De(a.update)&&_[0]&1&&a.update.call(null,o[0]),_[0]&1&&E(l,o[0])},i(o){s||(g(r),s=!0)},o(o){y(r),s=!1},d(o){o&&(k(e),k(l)),r&&r.d(o),t[36](null),d=!1,L(c)}}}function Qe(t){let e;function l(a,s){if(a[9]==="text")return Je;if(a[9]==="password")return Ie;if(a[9]==="email")return Ae}let u=l(t),n=u&&u(t);return{c(){n&&n.c(),e=X()},m(a,s){n&&n.m(a,s),p(a,e,s)},p(a,s){u===(u=l(a))&&n?n.p(a,s):(n&&n.d(1),n=u&&u(a),n&&(n.c(),n.m(e.parentNode,e)))},i:K,o:K,d(a){a&&k(e),n&&n.d(a)}}}function V(t){let e,l,u,n;const a=[Ye,Re],s=[];function d(c,r){return c[15]?0:1}return e=d(t),l=s[e]=a[e](t),{c(){l.c(),u=X()},m(c,r){s[e].m(c,r),p(c,u,r),n=!0},p(c,r){let o=e;e=d(c),e===o?s[e].p(c,r):(Q(),y(s[o],1,1,()=>{s[o]=null}),R(),l=s[e],l?l.p(c,r):(l=s[e]=a[e](c),l.c()),g(l,1),l.m(u.parentNode,u))},i(c){n||(g(l),n=!0)},o(c){y(l),n=!1},d(c){c&&k(u),s[e].d(c)}}}function Re(t){let e,l,u,n,a;return l=new je({}),{c(){e=H("button"),F(l.$$.fragment),f(e,"class","copy-text svelte-1f354aw")},m(s,d){p(s,e,d),G(l,e,null),u=!0,n||(a=b(e,"click",t[16]),n=!0)},p:K,i(s){u||(g(l.$$.fragment,s),u=!0)},o(s){y(l.$$.fragment,s),u=!1},d(s){s&&k(e),Y(l),n=!1,a()}}}function Ye(t){let e,l,u,n;return l=new qe({}),{c(){e=H("button"),F(l.$$.fragment),f(e,"class","svelte-1f354aw")},m(a,s){p(a,e,s),G(l,e,null),n=!0},p:K,i(a){n||(g(l.$$.fragment,a),a&&(u||Se(()=>{u=Ke(e,Le,{duration:300}),u.start()})),n=!0)},o(a){y(l.$$.fragment,a),n=!1},d(a){a&&k(e),Y(l)}}}function Ae(t){let e,l,u;return{c(){e=H("input"),f(e,"data-testid","textbox"),f(e,"type","email"),f(e,"class","scroll-hide svelte-1f354aw"),f(e,"placeholder",t[2]),e.disabled=t[5],e.autofocus=t[12],f(e,"autocomplete","email")},m(n,a){p(n,e,a),E(e,t[0]),t[34](e),t[12]&&e.focus(),l||(u=[b(e,"input",t[33]),b(e,"keypress",t[18]),b(e,"blur",t[25]),b(e,"select",t[17]),b(e,"focus",t[26])],l=!0)},p(n,a){a[0]&4&&f(e,"placeholder",n[2]),a[0]&32&&(e.disabled=n[5]),a[0]&4096&&(e.autofocus=n[12]),a[0]&1&&e.value!==n[0]&&E(e,n[0])},d(n){n&&k(e),t[34](null),l=!1,L(u)}}}function Ie(t){let e,l,u;return{c(){e=H("input"),f(e,"data-testid","password"),f(e,"type","password"),f(e,"class","scroll-hide svelte-1f354aw"),f(e,"placeholder",t[2]),e.disabled=t[5],e.autofocus=t[12],f(e,"autocomplete","")},m(n,a){p(n,e,a),E(e,t[0]),t[32](e),t[12]&&e.focus(),l||(u=[b(e,"input",t[31]),b(e,"keypress",t[18]),b(e,"blur",t[23]),b(e,"select",t[17]),b(e,"focus",t[24])],l=!0)},p(n,a){a[0]&4&&f(e,"placeholder",n[2]),a[0]&32&&(e.disabled=n[5]),a[0]&4096&&(e.autofocus=n[12]),a[0]&1&&e.value!==n[0]&&E(e,n[0])},d(n){n&&k(e),t[32](null),l=!1,L(u)}}}function Je(t){let e,l,u,n,a;return{c(){e=H("input"),f(e,"data-testid","textbox"),f(e,"type","text"),f(e,"class","scroll-hide svelte-1f354aw"),f(e,"dir",l=t[11]?"rtl":"ltr"),f(e,"placeholder",t[2]),e.disabled=t[5],e.autofocus=t[12],f(e,"style",u=t[13]?"text-align: "+t[13]:"")},m(s,d){p(s,e,d),E(e,t[0]),t[30](e),t[12]&&e.focus(),n||(a=[b(e,"input",t[29]),b(e,"keypress",t[18]),b(e,"blur",t[21]),b(e,"select",t[17]),b(e,"focus",t[22])],n=!0)},p(s,d){d[0]&2048&&l!==(l=s[11]?"rtl":"ltr")&&f(e,"dir",l),d[0]&4&&f(e,"placeholder",s[2]),d[0]&32&&(e.disabled=s[5]),d[0]&4096&&(e.autofocus=s[12]),d[0]&8192&&u!==(u=s[13]?"text-align: "+s[13]:"")&&f(e,"style",u),d[0]&1&&e.value!==s[0]&&E(e,s[0])},d(s){s&&k(e),t[30](null),n=!1,L(a)}}}function Me(t){let e,l,u,n,a,s;l=new Ue({props:{show_label:t[6],info:t[4],$$slots:{default:[Fe]},$$scope:{ctx:t}}});const d=[Qe,Ge],c=[];function r(o,_){return o[1]===1&&o[8]===1?0:1}return n=r(t),a=c[n]=d[n](t),{c(){e=H("label"),F(l.$$.fragment),u=W(),a.c(),f(e,"class","svelte-1f354aw"),O(e,"container",t[7])},m(o,_){p(o,e,_),G(l,e,null),Te(e,u),c[n].m(e,null),s=!0},p(o,_){const m={};_[0]&64&&(m.show_label=o[6]),_[0]&16&&(m.info=o[4]),_[0]&8|_[1]&8192&&(m.$$scope={dirty:_,ctx:o}),l.$set(m);let C=n;n=r(o),n===C?c[n].p(o,_):(Q(),y(c[C],1,1,()=>{c[C]=null}),R(),a=c[n],a?a.p(o,_):(a=c[n]=d[n](o),a.c()),g(a,1),a.m(e,null)),(!s||_[0]&128)&&O(e,"container",o[7])},i(o){s||(g(l.$$.fragment,o),g(a),s=!0)},o(o){y(l.$$.fragment,o),y(a),s=!1},d(o){o&&k(e),Y(l),c[n].d()}}}function Oe(t,e,l){let{value:u=""}=e,{value_is_output:n=!1}=e,{lines:a=1}=e,{placeholder:s="Type here..."}=e,{label:d}=e,{info:c=void 0}=e,{disabled:r=!1}=e,{show_label:o=!0}=e,{container:_=!0}=e,{max_lines:m}=e,{type:C="text"}=e,{show_copy_button:A=!1}=e,{rtl:I=!1}=e,{autofocus:J=!1}=e,{text_align:M=void 0}=e,h,U=!1,j,q;const z=Ee();He(()=>{q=h&&h.offsetHeight+h.scrollTop>h.scrollHeight-100});const Z=()=>{q&&h.scrollTo(0,h.scrollHeight)};function x(){z("change",u),n||z("input")}Ce(()=>{q&&Z(),l(20,n=!1)});async function $(){"clipboard"in navigator&&(await navigator.clipboard.writeText(u),ee())}function ee(){l(15,U=!0),j&&clearTimeout(j),j=setTimeout(()=>{l(15,U=!1)},1e3)}function le(i){const w=i.target,B=w.value,v=[w.selectionStart,w.selectionEnd];z("select",{value:B.substring(...v),index:v})}async function te(i){await P(),(i.key==="Enter"&&i.shiftKey&&a>1||i.key==="Enter"&&!i.shiftKey&&a===1&&m>=1)&&(i.preventDefault(),z("submit"))}async function N(i){if(await P(),a===m||!_)return;let w=m===void 0?!1:m===void 0?21*11:21*(m+1),B=21*(a+1);const v=i.target;v.style.height="1px";let D;w&&v.scrollHeight>w?D=w:v.scrollHeight<B?D=B:D=v.scrollHeight,v.style.height=`${D}px`}function ne(i,w){if(a!==m&&(i.style.overflowY="scroll",i.addEventListener("input",N),!!w.trim()))return N({target:i}),{destroy:()=>i.removeEventListener("input",N)}}function ie(i){T.call(this,t,i)}function ae(i){T.call(this,t,i)}function ue(i){T.call(this,t,i)}function se(i){T.call(this,t,i)}function oe(i){T.call(this,t,i)}function fe(i){T.call(this,t,i)}function re(i){T.call(this,t,i)}function _e(i){T.call(this,t,i)}function ce(){u=this.value,l(0,u)}function de(i){S[i?"unshift":"push"](()=>{h=i,l(14,h)})}function be(){u=this.value,l(0,u)}function he(i){S[i?"unshift":"push"](()=>{h=i,l(14,h)})}function me(){u=this.value,l(0,u)}function pe(i){S[i?"unshift":"push"](()=>{h=i,l(14,h)})}function ke(){u=this.value,l(0,u)}function ge(i){S[i?"unshift":"push"](()=>{h=i,l(14,h)})}return t.$$set=i=>{"value"in i&&l(0,u=i.value),"value_is_output"in i&&l(20,n=i.value_is_output),"lines"in i&&l(1,a=i.lines),"placeholder"in i&&l(2,s=i.placeholder),"label"in i&&l(3,d=i.label),"info"in i&&l(4,c=i.info),"disabled"in i&&l(5,r=i.disabled),"show_label"in i&&l(6,o=i.show_label),"container"in i&&l(7,_=i.container),"max_lines"in i&&l(8,m=i.max_lines),"type"in i&&l(9,C=i.type),"show_copy_button"in i&&l(10,A=i.show_copy_button),"rtl"in i&&l(11,I=i.rtl),"autofocus"in i&&l(12,J=i.autofocus),"text_align"in i&&l(13,M=i.text_align)},t.$$.update=()=>{t.$$.dirty[0]&1&&u===null&&l(0,u=""),t.$$.dirty[0]&16643&&h&&a!==m&&N({target:h}),t.$$.dirty[0]&1&&x()},[u,a,s,d,c,r,o,_,m,C,A,I,J,M,h,U,$,le,te,ne,n,ie,ae,ue,se,oe,fe,re,_e,ce,de,be,he,me,pe,ke,ge]}class Ze extends we{constructor(e){super(),ye(this,e,Oe,Me,ve,{value:0,value_is_output:20,lines:1,placeholder:2,label:3,info:4,disabled:5,show_label:6,container:7,max_lines:8,type:9,show_copy_button:10,rtl:11,autofocus:12,text_align:13},null,[-1,-1])}}export{Ze as T};
//# sourceMappingURL=Textbox-35ddf33c.js.map
