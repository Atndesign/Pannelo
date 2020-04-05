(this.webpackJsonppannelo=this.webpackJsonppannelo||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),o=a.n(c),s=(a(15),a(1)),l=a(2),i=a(3),m=a(4),u=(n.Component,function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"home__surtitle "},"Welcome to"),r.a.createElement("h1",{className:"home__title animated fadeInUp delay-1s"},"Pannelo"),r.a.createElement("p",{className:"home__desc animated fadeInUp delay-2s"},"Pannelo let\u2019s you create a twitch panel with predefined backgrounds"),r.a.createElement("button",{className:"home__btn animated fadeInUp delay-2s",onClick:function(t){return e.props.changeStep(1)}},"Create my panel"))}}]),a}(n.Component)),p=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("div",{onClick:function(t){return e.props.getImageSrc(t)},className:"thumbnail",style:{backgroundImage:"url(./img/bgs/"+this.props.src+".png)"}}))}}]),a}(n.Component),h=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={bgs:[1,2,3,4,5,6]},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"step1"},r.a.createElement("button",{className:"step__back",onClick:function(t){return e.props.changeStep(e.props.step-1)}},"Go back"),r.a.createElement("h1",{className:"step__title"},"Please choose a picture"),r.a.createElement("div",{className:"row"},this.state.bgs.map((function(t){return r.a.createElement(p,{getImageSrc:e.props.getImageSrc,key:t,src:"bg"+t})}))))}}]),a}(n.Component),g=a(7),d=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"preview"},r.a.createElement("h2",null,"Preview"),r.a.createElement("div",{id:"capture",className:"preview__thumbnail",style:{backgroundImage:this.props.bgSrc}},r.a.createElement("p",{className:"preview__text",style:{fontSize:this.props.size+"px",color:this.props.color}},this.props.text)))}}]),a}(n.Component),v=a(8),b=a.n(v),E=a(9),f=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleChange=function(e,t){n.setState(Object(g.a)({},t,e))},n.download=function(){b.a.toPng(document.querySelector("#capture")).then((function(e){Object(E.saveAs)(e,"banner.jpg")})).catch((function(e){console.error("oops, something went wrong!",e)}))},n.newText=function(){n.setState({text:""})},n.state={text:"",size:20,color:"#fff"},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"step2"},r.a.createElement("button",{className:"step__back",onClick:function(t){return e.props.changeStep(e.props.step-1)}},"Go back"),r.a.createElement("h1",{className:"step__title"},"Enter your custom text"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("label",{htmlFor:""},"Enter your text here"),r.a.createElement("input",{value:this.state.text,className:"step2__text-input",type:"text",onChange:function(t){return e.handleChange(t.target.value,"text")}}),r.a.createElement("p",null),r.a.createElement("div",{className:"step2__controls"},r.a.createElement("label",{htmlFor:""},"Font size"),r.a.createElement("select",{className:"form-control step2__input",type:"range",name:"",id:"",onChange:function(t){return e.handleChange(t.target.value,"size")}},r.a.createElement("option",{value:"20"},"20"),r.a.createElement("option",{value:"22"},"22"),r.a.createElement("option",{value:"24"},"24"),r.a.createElement("option",{value:"26"},"26"),r.a.createElement("option",{value:"28"},"28"),r.a.createElement("option",{value:"30"},"30"),r.a.createElement("option",{value:"32"},"32"),r.a.createElement("option",{value:"34"},"34"),r.a.createElement("option",{value:"36"},"36")),r.a.createElement("label",{htmlFor:""},"Font Color"),r.a.createElement("input",{className:"form-control step2__input",type:"color",name:"",id:"",onChange:function(t){return e.handleChange(t.target.value,"color")}}))),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement(d,{text:this.state.text,size:this.state.size,bgSrc:this.props.imgSrc,color:this.state.color}),r.a.createElement("div",{className:"step2__bottom-control"},r.a.createElement("button",{className:"step2__dl",onClick:this.download},"Download"),r.a.createElement("button",{className:"step2__dl",onClick:this.newText},"New text")))))}}]),a}(n.Component),_=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).changeStep=function(e){n.setState({step:e})},n.getImageSrc=function(e){e.persist(),n.setState({bgSrc:e.target.style.backgroundImage}),n.changeStep(2)},n.state={step:0,progressWidth:25},n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("img",{width:"60",src:"./img/logo.png",srcSet:"./img/logo.svg",alt:"logo",className:"logo"})),0===this.state.step&&r.a.createElement(u,{changeStep:this.changeStep}),1===this.state.step&&r.a.createElement(h,{step:this.state.step,getImageSrc:this.getImageSrc,changeStep:this.changeStep}),2===this.state.step&&r.a.createElement(f,{step:this.state.step,imgSrc:this.state.bgSrc,changeStep:this.changeStep}))}}]),a}(n.Component);var S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(_,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.cf9fde89.chunk.js.map