(window.webpackJsonp=window.webpackJsonp||[]).push([[308],{3070:function(F,u,o){F.exports={banner:o(3431),basic:o(3432),closable:o(3433),"close-text":o(3434),"custom-icon":o(3435),description:o(3436),"error-boundary":o(3437),icon:o(3438),"loop-banner":o(3439),"smooth-closed":o(3449),style:o(3450)}},3378:function(F,u,o){"use strict";u.__esModule=!0,u.default=h;function h(g){var a={};for(var R in g){if(!Object.prototype.hasOwnProperty.call(g,R))continue;a[R]=typeof g[R]=="number"?g[R]:g[R].val}return a}F.exports=u.default},3382:function(F,u,o){"use strict";u.__esModule=!0,u.default=h;function h(g){var a={};for(var R in g)Object.prototype.hasOwnProperty.call(g,R)&&(a[R]=0);return a}F.exports=u.default},3383:function(F,u,o){"use strict";u.__esModule=!0,u.default=g;var h=[0,0];function g(a,R,O,m,v,z,D){var B=-v*(R-m),E=-z*O,T=B+E,x=O+T*a,j=R+x*a;return Math.abs(x)<D&&Math.abs(j-m)<D?(h[0]=m,h[1]=0,h):(h[0]=j,h[1]=x,h)}F.exports=u.default},3384:function(F,u,o){(function(h){(function(){var g,a,R;typeof performance!="undefined"&&performance!==null&&performance.now?F.exports=function(){return performance.now()}:typeof h!="undefined"&&h!==null&&h.hrtime?(F.exports=function(){return(g()-R)/1e6},a=h.hrtime,g=function(){var O;return O=a(),O[0]*1e9+O[1]},R=g()):Date.now?(F.exports=function(){return Date.now()-R},R=Date.now()):(F.exports=function(){return new Date().getTime()-R},R=new Date().getTime())}).call(this)}).call(this,o(229))},3385:function(F,u,o){"use strict";u.__esModule=!0,u.default=h;function h(g,a,R){for(var O in a){if(!Object.prototype.hasOwnProperty.call(a,O))continue;if(R[O]!==0)return!1;var m=typeof a[O]=="number"?a[O]:a[O].val;if(g[O]!==m)return!1}return!0}F.exports=u.default},3390:function(F,u,o){"use strict";u.__esModule=!0,u.default={noWobble:{stiffness:170,damping:26},gentle:{stiffness:120,damping:14},wobbly:{stiffness:180,damping:12},stiff:{stiffness:210,damping:20}},F.exports=u.default},3440:function(F,u,o){"use strict";u.__esModule=!0;function h(D){return D&&D.__esModule?D.default:D}var g=o(3441);u.Motion=h(g);var a=o(3442);u.StaggeredMotion=h(a);var R=o(3443);u.TransitionMotion=h(R);var O=o(3445);u.spring=h(O);var m=o(3390);u.presets=h(m);var v=o(3378);u.stripStyle=h(v);var z=o(3446);u.reorderKeys=h(z)},3441:function(F,u,o){"use strict";u.__esModule=!0;var h=Object.assign||function(p){for(var n=1;n<arguments.length;n++){var c=arguments[n];for(var r in c)Object.prototype.hasOwnProperty.call(c,r)&&(p[r]=c[r])}return p},g=function(){function p(n,c){for(var r=0;r<c.length;r++){var e=c[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(n,c,r){return c&&p(n.prototype,c),r&&p(n,r),n}}();function a(p){return p&&p.__esModule?p:{default:p}}function R(p,n){if(!(p instanceof n))throw new TypeError("Cannot call a class as a function")}function O(p,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof n);p.prototype=Object.create(n&&n.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(p,n):p.__proto__=n)}var m=o(3382),v=a(m),z=o(3378),D=a(z),B=o(3383),E=a(B),T=o(3384),x=a(T),j=o(31),J=a(j),Y=o(3385),G=a(Y),Z=o(0),S=a(Z),$=o(18),U=a($),s=1e3/60,w=function(p){O(n,p),g(n,null,[{key:"propTypes",value:{defaultStyle:U.default.objectOf(U.default.number),style:U.default.objectOf(U.default.oneOfType([U.default.number,U.default.object])).isRequired,children:U.default.func.isRequired,onRest:U.default.func},enumerable:!0}]);function n(c){var r=this;R(this,n),p.call(this,c),this.wasAnimating=!1,this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyle=null,this.clearUnreadPropStyle=function(e){var l=!1,f=r.state,d=f.currentStyle,t=f.currentVelocity,i=f.lastIdealStyle,P=f.lastIdealVelocity;for(var W in e){if(!Object.prototype.hasOwnProperty.call(e,W))continue;var M=e[W];typeof M=="number"&&(l||(l=!0,d=h({},d),t=h({},t),i=h({},i),P=h({},P)),d[W]=M,t[W]=0,i[W]=M,P[W]=0)}l&&r.setState({currentStyle:d,currentVelocity:t,lastIdealStyle:i,lastIdealVelocity:P})},this.startAnimationIfNecessary=function(){r.animationID=J.default(function(e){var l=r.props.style;if(G.default(r.state.currentStyle,l,r.state.currentVelocity)){r.wasAnimating&&r.props.onRest&&r.props.onRest(),r.animationID=null,r.wasAnimating=!1,r.accumulatedTime=0;return}r.wasAnimating=!0;var f=e||x.default(),d=f-r.prevTime;if(r.prevTime=f,r.accumulatedTime=r.accumulatedTime+d,r.accumulatedTime>s*10&&(r.accumulatedTime=0),r.accumulatedTime===0){r.animationID=null,r.startAnimationIfNecessary();return}var t=(r.accumulatedTime-Math.floor(r.accumulatedTime/s)*s)/s,i=Math.floor(r.accumulatedTime/s),P={},W={},M={},X={};for(var N in l){if(!Object.prototype.hasOwnProperty.call(l,N))continue;var A=l[N];if(typeof A=="number")M[N]=A,X[N]=0,P[N]=A,W[N]=0;else{for(var b=r.state.lastIdealStyle[N],H=r.state.lastIdealVelocity[N],Q=0;Q<i;Q++){var C=E.default(s/1e3,b,H,A.val,A.stiffness,A.damping,A.precision);b=C[0],H=C[1]}var I=E.default(s/1e3,b,H,A.val,A.stiffness,A.damping,A.precision),K=I[0],q=I[1];M[N]=b+(K-b)*t,X[N]=H+(q-H)*t,P[N]=b,W[N]=H}}r.animationID=null,r.accumulatedTime-=i*s,r.setState({currentStyle:M,currentVelocity:X,lastIdealStyle:P,lastIdealVelocity:W}),r.unreadPropStyle=null,r.startAnimationIfNecessary()})},this.state=this.defaultState()}return n.prototype.defaultState=function(){var r=this.props,e=r.defaultStyle,l=r.style,f=e||D.default(l),d=v.default(f);return{currentStyle:f,currentVelocity:d,lastIdealStyle:f,lastIdealVelocity:d}},n.prototype.componentDidMount=function(){this.prevTime=x.default(),this.startAnimationIfNecessary()},n.prototype.componentWillReceiveProps=function(r){this.unreadPropStyle!=null&&this.clearUnreadPropStyle(this.unreadPropStyle),this.unreadPropStyle=r.style,this.animationID==null&&(this.prevTime=x.default(),this.startAnimationIfNecessary())},n.prototype.componentWillUnmount=function(){this.animationID!=null&&(J.default.cancel(this.animationID),this.animationID=null)},n.prototype.render=function(){var r=this.props.children(this.state.currentStyle);return r&&S.default.Children.only(r)},n}(S.default.Component);u.default=w,F.exports=u.default},3442:function(F,u,o){"use strict";u.__esModule=!0;var h=Object.assign||function(n){for(var c=1;c<arguments.length;c++){var r=arguments[c];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}return n},g=function(){function n(c,r){for(var e=0;e<r.length;e++){var l=r[e];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(c,l.key,l)}}return function(c,r,e){return r&&n(c.prototype,r),e&&n(c,e),c}}();function a(n){return n&&n.__esModule?n:{default:n}}function R(n,c){if(!(n instanceof c))throw new TypeError("Cannot call a class as a function")}function O(n,c){if(typeof c!="function"&&c!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof c);n.prototype=Object.create(c&&c.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),c&&(Object.setPrototypeOf?Object.setPrototypeOf(n,c):n.__proto__=c)}var m=o(3382),v=a(m),z=o(3378),D=a(z),B=o(3383),E=a(B),T=o(3384),x=a(T),j=o(31),J=a(j),Y=o(3385),G=a(Y),Z=o(0),S=a(Z),$=o(18),U=a($),s=1e3/60;function w(n,c,r){for(var e=0;e<n.length;e++)if(!G.default(n[e],c[e],r[e]))return!1;return!0}var p=function(n){O(c,n),g(c,null,[{key:"propTypes",value:{defaultStyles:U.default.arrayOf(U.default.objectOf(U.default.number)),styles:U.default.func.isRequired,children:U.default.func.isRequired},enumerable:!0}]);function c(r){var e=this;R(this,c),n.call(this,r),this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyles=null,this.clearUnreadPropStyle=function(l){for(var f=e.state,d=f.currentStyles,t=f.currentVelocities,i=f.lastIdealStyles,P=f.lastIdealVelocities,W=!1,M=0;M<l.length;M++){var X=l[M],N=!1;for(var A in X){if(!Object.prototype.hasOwnProperty.call(X,A))continue;var b=X[A];typeof b=="number"&&(N||(N=!0,W=!0,d[M]=h({},d[M]),t[M]=h({},t[M]),i[M]=h({},i[M]),P[M]=h({},P[M])),d[M][A]=b,t[M][A]=0,i[M][A]=b,P[M][A]=0)}}W&&e.setState({currentStyles:d,currentVelocities:t,lastIdealStyles:i,lastIdealVelocities:P})},this.startAnimationIfNecessary=function(){e.animationID=J.default(function(l){var f=e.props.styles(e.state.lastIdealStyles);if(w(e.state.currentStyles,f,e.state.currentVelocities)){e.animationID=null,e.accumulatedTime=0;return}var d=l||x.default(),t=d-e.prevTime;if(e.prevTime=d,e.accumulatedTime=e.accumulatedTime+t,e.accumulatedTime>s*10&&(e.accumulatedTime=0),e.accumulatedTime===0){e.animationID=null,e.startAnimationIfNecessary();return}for(var i=(e.accumulatedTime-Math.floor(e.accumulatedTime/s)*s)/s,P=Math.floor(e.accumulatedTime/s),W=[],M=[],X=[],N=[],A=0;A<f.length;A++){var b=f[A],H={},Q={},C={},I={};for(var K in b){if(!Object.prototype.hasOwnProperty.call(b,K))continue;var q=b[K];if(typeof q=="number")H[K]=q,Q[K]=0,C[K]=q,I[K]=0;else{for(var _=e.state.lastIdealStyles[A][K],y=e.state.lastIdealVelocities[A][K],k=0;k<P;k++){var L=E.default(s/1e3,_,y,q.val,q.stiffness,q.damping,q.precision);_=L[0],y=L[1]}var nt=E.default(s/1e3,_,y,q.val,q.stiffness,q.damping,q.precision),V=nt[0],tt=nt[1];H[K]=_+(V-_)*i,Q[K]=y+(tt-y)*i,C[K]=_,I[K]=y}}X[A]=H,N[A]=Q,W[A]=C,M[A]=I}e.animationID=null,e.accumulatedTime-=P*s,e.setState({currentStyles:X,currentVelocities:N,lastIdealStyles:W,lastIdealVelocities:M}),e.unreadPropStyles=null,e.startAnimationIfNecessary()})},this.state=this.defaultState()}return c.prototype.defaultState=function(){var e=this.props,l=e.defaultStyles,f=e.styles,d=l||f().map(D.default),t=d.map(function(i){return v.default(i)});return{currentStyles:d,currentVelocities:t,lastIdealStyles:d,lastIdealVelocities:t}},c.prototype.componentDidMount=function(){this.prevTime=x.default(),this.startAnimationIfNecessary()},c.prototype.componentWillReceiveProps=function(e){this.unreadPropStyles!=null&&this.clearUnreadPropStyle(this.unreadPropStyles),this.unreadPropStyles=e.styles(this.state.lastIdealStyles),this.animationID==null&&(this.prevTime=x.default(),this.startAnimationIfNecessary())},c.prototype.componentWillUnmount=function(){this.animationID!=null&&(J.default.cancel(this.animationID),this.animationID=null)},c.prototype.render=function(){var e=this.props.children(this.state.currentStyles);return e&&S.default.Children.only(e)},c}(S.default.Component);u.default=p,F.exports=u.default},3443:function(F,u,o){"use strict";u.__esModule=!0;var h=Object.assign||function(l){for(var f=1;f<arguments.length;f++){var d=arguments[f];for(var t in d)Object.prototype.hasOwnProperty.call(d,t)&&(l[t]=d[t])}return l},g=function(){function l(f,d){for(var t=0;t<d.length;t++){var i=d[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(f,i.key,i)}}return function(f,d,t){return d&&l(f.prototype,d),t&&l(f,t),f}}();function a(l){return l&&l.__esModule?l:{default:l}}function R(l,f){if(!(l instanceof f))throw new TypeError("Cannot call a class as a function")}function O(l,f){if(typeof f!="function"&&f!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof f);l.prototype=Object.create(f&&f.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),f&&(Object.setPrototypeOf?Object.setPrototypeOf(l,f):l.__proto__=f)}var m=o(3382),v=a(m),z=o(3378),D=a(z),B=o(3383),E=a(B),T=o(3444),x=a(T),j=o(3384),J=a(j),Y=o(31),G=a(Y),Z=o(3385),S=a(Z),$=o(0),U=a($),s=o(18),w=a(s),p=1e3/60;function n(l,f,d){var t=f;return t==null?l.map(function(i,P){return{key:i.key,data:i.data,style:d[P]}}):l.map(function(i,P){for(var W=0;W<t.length;W++)if(t[W].key===i.key)return{key:t[W].key,data:t[W].data,style:d[P]};return{key:i.key,data:i.data,style:d[P]}})}function c(l,f,d,t){if(t.length!==f.length)return!1;for(var i=0;i<t.length;i++)if(t[i].key!==f[i].key)return!1;for(var i=0;i<t.length;i++)if(!S.default(l[i],f[i].style,d[i]))return!1;return!0}function r(l,f,d,t,i,P,W,M,X){for(var N=x.default(t,i,function(k,L){var nt=f(L);return nt==null?(d({key:L.key,data:L.data}),null):S.default(P[k],nt,W[k])?(d({key:L.key,data:L.data}),null):{key:L.key,data:L.data,style:nt}}),A=[],b=[],H=[],Q=[],C=0;C<N.length;C++){for(var I=N[C],K=null,q=0;q<t.length;q++)if(t[q].key===I.key){K=q;break}if(K==null){var _=l(I);A[C]=_,H[C]=_;var y=v.default(I.style);b[C]=y,Q[C]=y}else A[C]=P[K],H[C]=M[K],b[C]=W[K],Q[C]=X[K]}return[N,A,b,H,Q]}var e=function(l){O(f,l),g(f,null,[{key:"propTypes",value:{defaultStyles:w.default.arrayOf(w.default.shape({key:w.default.string.isRequired,data:w.default.any,style:w.default.objectOf(w.default.number).isRequired})),styles:w.default.oneOfType([w.default.func,w.default.arrayOf(w.default.shape({key:w.default.string.isRequired,data:w.default.any,style:w.default.objectOf(w.default.oneOfType([w.default.number,w.default.object])).isRequired}))]).isRequired,children:w.default.func.isRequired,willEnter:w.default.func,willLeave:w.default.func,didLeave:w.default.func},enumerable:!0},{key:"defaultProps",value:{willEnter:function(t){return D.default(t.style)},willLeave:function(){return null},didLeave:function(){}},enumerable:!0}]);function f(d){var t=this;R(this,f),l.call(this,d),this.unmounting=!1,this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyles=null,this.clearUnreadPropStyle=function(i){for(var P=r(t.props.willEnter,t.props.willLeave,t.props.didLeave,t.state.mergedPropsStyles,i,t.state.currentStyles,t.state.currentVelocities,t.state.lastIdealStyles,t.state.lastIdealVelocities),W=P[0],M=P[1],X=P[2],N=P[3],A=P[4],b=0;b<i.length;b++){var H=i[b].style,Q=!1;for(var C in H){if(!Object.prototype.hasOwnProperty.call(H,C))continue;var I=H[C];typeof I=="number"&&(Q||(Q=!0,M[b]=h({},M[b]),X[b]=h({},X[b]),N[b]=h({},N[b]),A[b]=h({},A[b]),W[b]={key:W[b].key,data:W[b].data,style:h({},W[b].style)}),M[b][C]=I,X[b][C]=0,N[b][C]=I,A[b][C]=0,W[b].style[C]=I)}}t.setState({currentStyles:M,currentVelocities:X,mergedPropsStyles:W,lastIdealStyles:N,lastIdealVelocities:A})},this.startAnimationIfNecessary=function(){if(t.unmounting)return;t.animationID=G.default(function(i){if(t.unmounting)return;var P=t.props.styles,W=typeof P=="function"?P(n(t.state.mergedPropsStyles,t.unreadPropStyles,t.state.lastIdealStyles)):P;if(c(t.state.currentStyles,W,t.state.currentVelocities,t.state.mergedPropsStyles)){t.animationID=null,t.accumulatedTime=0;return}var M=i||J.default(),X=M-t.prevTime;if(t.prevTime=M,t.accumulatedTime=t.accumulatedTime+X,t.accumulatedTime>p*10&&(t.accumulatedTime=0),t.accumulatedTime===0){t.animationID=null,t.startAnimationIfNecessary();return}for(var N=(t.accumulatedTime-Math.floor(t.accumulatedTime/p)*p)/p,A=Math.floor(t.accumulatedTime/p),b=r(t.props.willEnter,t.props.willLeave,t.props.didLeave,t.state.mergedPropsStyles,W,t.state.currentStyles,t.state.currentVelocities,t.state.lastIdealStyles,t.state.lastIdealVelocities),H=b[0],Q=b[1],C=b[2],I=b[3],K=b[4],q=0;q<H.length;q++){var _=H[q].style,y={},k={},L={},nt={};for(var V in _){if(!Object.prototype.hasOwnProperty.call(_,V))continue;var tt=_[V];if(typeof tt=="number")y[V]=tt,k[V]=0,L[V]=tt,nt[V]=0;else{for(var rt=I[q][V],et=K[q][V],at=0;at<A;at++){var it=E.default(p/1e3,rt,et,tt.val,tt.stiffness,tt.damping,tt.precision);rt=it[0],et=it[1]}var ot=E.default(p/1e3,rt,et,tt.val,tt.stiffness,tt.damping,tt.precision),st=ot[0],ft=ot[1];y[V]=rt+(st-rt)*N,k[V]=et+(ft-et)*N,L[V]=rt,nt[V]=et}}I[q]=L,K[q]=nt,Q[q]=y,C[q]=k}t.animationID=null,t.accumulatedTime-=A*p,t.setState({currentStyles:Q,currentVelocities:C,lastIdealStyles:I,lastIdealVelocities:K,mergedPropsStyles:H}),t.unreadPropStyles=null,t.startAnimationIfNecessary()})},this.state=this.defaultState()}return f.prototype.defaultState=function(){var t=this.props,i=t.defaultStyles,P=t.styles,W=t.willEnter,M=t.willLeave,X=t.didLeave,N=typeof P=="function"?P(i):P,A=void 0;i==null?A=N:A=i.map(function(y){for(var k=0;k<N.length;k++)if(N[k].key===y.key)return N[k];return y});var b=i==null?N.map(function(y){return D.default(y.style)}):i.map(function(y){return D.default(y.style)}),H=i==null?N.map(function(y){return v.default(y.style)}):i.map(function(y){return v.default(y.style)}),Q=r(W,M,X,A,N,b,H,b,H),C=Q[0],I=Q[1],K=Q[2],q=Q[3],_=Q[4];return{currentStyles:I,currentVelocities:K,lastIdealStyles:q,lastIdealVelocities:_,mergedPropsStyles:C}},f.prototype.componentDidMount=function(){this.prevTime=J.default(),this.startAnimationIfNecessary()},f.prototype.componentWillReceiveProps=function(t){this.unreadPropStyles&&this.clearUnreadPropStyle(this.unreadPropStyles);var i=t.styles;typeof i=="function"?this.unreadPropStyles=i(n(this.state.mergedPropsStyles,this.unreadPropStyles,this.state.lastIdealStyles)):this.unreadPropStyles=i,this.animationID==null&&(this.prevTime=J.default(),this.startAnimationIfNecessary())},f.prototype.componentWillUnmount=function(){this.unmounting=!0,this.animationID!=null&&(G.default.cancel(this.animationID),this.animationID=null)},f.prototype.render=function(){var t=n(this.state.mergedPropsStyles,this.unreadPropStyles,this.state.currentStyles),i=this.props.children(t);return i&&U.default.Children.only(i)},f}(U.default.Component);u.default=e,F.exports=u.default},3444:function(F,u,o){"use strict";u.__esModule=!0,u.default=h;function h(g,a,R){for(var O={},m=0;m<g.length;m++)O[g[m].key]=m;for(var v={},m=0;m<a.length;m++)v[a[m].key]=m;for(var z=[],m=0;m<a.length;m++)z[m]=a[m];for(var m=0;m<g.length;m++)if(!Object.prototype.hasOwnProperty.call(v,g[m].key)){var D=R(m,g[m]);D!=null&&z.push(D)}return z.sort(function(B,E){var T=v[B.key],x=v[E.key],j=O[B.key],J=O[E.key];if(T!=null&&x!=null)return v[B.key]-v[E.key];if(j!=null&&J!=null)return O[B.key]-O[E.key];if(T!=null){for(var Y=0;Y<a.length;Y++){var G=a[Y].key;if(!Object.prototype.hasOwnProperty.call(O,G))continue;if(T<v[G]&&J>O[G])return-1;if(T>v[G]&&J<O[G])return 1}return 1}for(var Y=0;Y<a.length;Y++){var G=a[Y].key;if(!Object.prototype.hasOwnProperty.call(O,G))continue;if(x<v[G]&&j>O[G])return 1;if(x>v[G]&&j<O[G])return-1}return-1})}F.exports=u.default},3445:function(F,u,o){"use strict";u.__esModule=!0;var h=Object.assign||function(v){for(var z=1;z<arguments.length;z++){var D=arguments[z];for(var B in D)Object.prototype.hasOwnProperty.call(D,B)&&(v[B]=D[B])}return v};u.default=m;function g(v){return v&&v.__esModule?v:{default:v}}var a=o(3390),R=g(a),O=h({},R.default.noWobble,{precision:.01});function m(v,z){return h({},O,z,{val:v})}F.exports=u.default},3446:function(F,u,o){"use strict";u.__esModule=!0,u.default=g;var h=!1;function g(){}F.exports=u.default},3447:function(F,u,o){"use strict";var h={},g="x",a=[],R=function(T){return a.push(T)},O=function(T){return T.replace(/[A-Z]|^ms/g,"-$&").toLowerCase()},m=function(T,x){return x?x+"{"+T+"}":T},v=function(T,x,j){return"."+T+"{"+O(x)+":"+j+"}"},z=function(T){return T.replace(/&/g,"")},D=function E(T){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",j=arguments[2];return Object.keys(T).map(function(J){var Y=T[J];if(Y===null)return"";if(typeof Y=="object"){var G=/^@/.test(J)?J:null,Z=G?x:x+J;return E(Y,Z,G||j)}var S=J+Y+x+j;if(h[S])return h[S];var $=g+a.length.toString(36);return R(m(v($+z(x),J,Y),j)),h[S]=$,$}).join(" ")};if(F.exports=function(){for(var E=arguments.length,T=Array(E),x=0;x<E;x++)T[x]=arguments[x];return T.map(function(j){return D(j)}).join(" ").trim()},F.exports.css=function(){return a.sort().join("")},F.exports.reset=function(){for(h={};a.length;)a.pop()},F.exports.prefix=function(E){return g=E},typeof document!="undefined"){var B=document.head.appendChild(document.createElement("style")).sheet;R=function(T){a.push(T),B.insertRule(T,B.cssRules.length)}}},3448:function(F,u,o){"use strict";var h=Array.isArray,g=Object.keys,a=Object.prototype.hasOwnProperty,R=typeof Element!="undefined";function O(m,v){if(m===v)return!0;if(m&&v&&typeof m=="object"&&typeof v=="object"){var z=h(m),D=h(v),B,E,T;if(z&&D){if(E=m.length,E!=v.length)return!1;for(B=E;B--!==0;)if(!O(m[B],v[B]))return!1;return!0}if(z!=D)return!1;var x=m instanceof Date,j=v instanceof Date;if(x!=j)return!1;if(x&&j)return m.getTime()==v.getTime();var J=m instanceof RegExp,Y=v instanceof RegExp;if(J!=Y)return!1;if(J&&Y)return m.toString()==v.toString();var G=g(m);if(E=G.length,E!==g(v).length)return!1;for(B=E;B--!==0;)if(!a.call(v,G[B]))return!1;if(R&&m instanceof Element&&v instanceof Element)return m===v;for(B=E;B--!==0;){if(T=G[B],T==="_owner"&&m.$$typeof)continue;if(!O(m[T],v[T]))return!1}return!0}return m!==m&&v!==v}F.exports=function(v,z){try{return O(v,z)}catch(D){if(D.message&&D.message.match(/stack|recursion/i)||D.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",D.name,D.message),!1;throw D}}},4043:function(F,u,o){"use strict";o.r(u);var h=o(0),g=o.n(h),a=o(3440),R=o(3447),O=o.n(R),m=o(3448),v=o.n(m),z=function(){return typeof window!="undefined"?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(S){window.setTimeout(S,1e3/60)}:function(){}}(),D=function(S,$){if(!window.requestAnimationFrame&&!window.webkitRequestAnimationFrame&&!(window.mozRequestAnimationFrame&&window.mozCancelRequestAnimationFrame)&&!window.oRequestAnimationFrame&&!window.msRequestAnimationFrame)return window.setTimeout(S,$);var U=new Date().getTime(),s={value:0};function w(){var p=new Date().getTime(),n=p-U;n>=$?S.call(null):s.value=z(w)}return s.value=z(w),s},B=function(S){return window.cancelAnimationFrame?window.cancelAnimationFrame(S.value):window.webkitCancelAnimationFrame?window.webkitCancelAnimationFrame(S.value):window.webkitCancelRequestAnimationFrame?window.webkitCancelRequestAnimationFrame(S.value):window.mozCancelRequestAnimationFrame?window.mozCancelRequestAnimationFrame(S.value):window.oCancelRequestAnimationFrame?window.oCancelRequestAnimationFrame(S.value):window.msCancelRequestAnimationFrame?window.msCancelRequestAnimationFrame(S.value):clearTimeout(S)};function E(){return E=Object.assign||function(Z){for(var S=1;S<arguments.length;S++){var $=arguments[S];for(var U in $)Object.prototype.hasOwnProperty.call($,U)&&(Z[U]=$[U])}return Z},E.apply(this,arguments)}function T(Z){if(Z===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Z}function x(Z,S){Z.prototype=Object.create(S.prototype),Z.prototype.constructor=Z,Z.__proto__=S}function j(Z,S,$){return S in Z?Object.defineProperty(Z,S,{value:$,enumerable:!0,configurable:!0,writable:!0}):Z[S]=$,Z}var J=function(Z){x(S,Z);function S(U){var s;s=Z.call(this,U)||this,j(T(s),"isUnMounting",!1),j(T(s),"tickDelay",0),j(T(s),"tickLoop",0),j(T(s),"wordBox",null),j(T(s),"willLeave",function(){var p=s.getDimensions(),n=p.height;return{opacity:Object(a.spring)(s.getOpacity(),s.props.springConfig),translate:Object(a.spring)(-n,s.props.springConfig)}}),j(T(s),"willEnter",function(){var p=s.getDimensions(),n=p.height;return{opacity:s.getOpacity(),translate:n}}),j(T(s),"tick",function(){s.isUnMounting||s.setState(function(p,n){var c=(p.currentWordIndex+1)%p.elements.length,r=p.elements[c],e={currentWordIndex:c,currentEl:r,wordCount:(p.wordCount+1)%1e3,currentInterval:Array.isArray(n.interval)?n.interval[c%n.interval.length]:n.interval};return n.onChange&&n.onChange(e),e},function(){s.state.currentInterval>0&&(s.clearTimeouts(),s.tickLoop=D(s.tick,s.state.currentInterval))})}),j(T(s),"wrapperStyles",O()(E({},s.props.mask&&{overflow:"hidden"},{},{display:"inline-block",position:"relative",verticalAlign:"top"}))),j(T(s),"elementStyles",O()({display:"inline-block",left:0,top:0,whiteSpace:s.props.noWrap?"nowrap":"normal"}));var w=g.a.Children.toArray(U.children);return s.state={elements:w,currentEl:w[0],currentWordIndex:0,wordCount:0,currentInterval:Array.isArray(U.interval)?U.interval[0]:U.interval},s}var $=S.prototype;return $.componentDidMount=function(){var s=this,w=this.props.delay,p=this.state,n=p.currentInterval,c=p.elements;n>0&&c.length>1&&(this.tickDelay=D(function(){s.tickLoop=D(s.tick,n)},w))},$.componentDidUpdate=function(s,w){var p=this,n=this.props,c=n.interval,r=n.children,e=n.delay,l=this.state.currentWordIndex,f=Array.isArray(c)?c[l%c.length]:c;w.currentInterval!==f&&(this.clearTimeouts(),f>0&&g.a.Children.count(r)>1?this.tickDelay=D(function(){p.tickLoop=D(p.tick,f)},e):this.setState(function(d,t){var i=d.currentWordIndex;return{currentInterval:Array.isArray(t.interval)?t.interval[i%t.interval.length]:t.interval}})),v()(s.children,r)||this.setState({elements:g.a.Children.toArray(r)})},$.componentWillUnmount=function(){this.isUnMounting=!0,this.clearTimeouts()},$.clearTimeouts=function(){this.tickLoop!=null&&B(this.tickLoop),this.tickDelay!=null&&B(this.tickDelay)},$.getOpacity=function(){return this.props.fade?0:1},$.getDimensions=function(){return this.wordBox==null?{width:0,height:0}:this.wordBox.getBoundingClientRect()},$.getTransitionMotionStyles=function(){var s=this.props.springConfig,w=this.state,p=w.wordCount,n=w.currentEl;return[{key:"step-"+p,data:{currentEl:n},style:{opacity:Object(a.spring)(1,s),translate:Object(a.spring)(0,s)}}]},$.render=function(){var s=this,w=this.props.className,p=w===void 0?"":w;return g.a.createElement("div",{className:this.wrapperStyles+" "+p},g.a.createElement(a.TransitionMotion,{willLeave:this.willLeave,willEnter:this.willEnter,styles:this.getTransitionMotionStyles()},function(n){var c=s.getDimensions(),r=c.height,e=c.width,l=s.wordBox==null?"auto":e,f=s.wordBox==null?"auto":r;return g.a.createElement("div",{style:{transition:"width "+s.props.adjustingSpeed+"ms linear",height:f,width:l}},n.map(function(d){return g.a.createElement("div",{className:s.elementStyles,ref:function(i){s.wordBox=i},key:d.key,style:{opacity:d.style.opacity,transform:"translateY("+d.style.translate+"px)",position:s.wordBox==null?"relative":"absolute"}},d.data.currentEl)}))}))},S}(g.a.PureComponent);j(J,"defaultProps",{interval:3e3,delay:0,adjustingSpeed:150,springConfig:{stiffness:340,damping:30},fade:!0,mask:!1,noWrap:!0});var Y=J,G=u.default=Y}}]);