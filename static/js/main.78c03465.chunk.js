(this["webpackJsonpdata-visualization"]=this["webpackJsonpdata-visualization"]||[]).push([[0],{27:function(e,t,a){e.exports=a.p+"static/media/logo.d7d06777.png"},28:function(e,t,a){e.exports=a.p+"static/media/mask.5ec44caf.svg"},29:function(e,t,a){e.exports=a.p+"static/media/distance.cd5e7d03.svg"},30:function(e,t,a){e.exports=a.p+"static/media/water.064467dc.svg"},89:function(e,t,a){e.exports=a(96)},95:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(26),o=a.n(i),s=a(1),l=a(2),r=a(4),m=a(3),d=a(27),u=a.n(d),y=a(5),p=a.n(y);var h=function(e){var t=e.listEleOnPosition,a=p()({nav__list:!0,"nav__list--onPosition":t}),n=p()({nav:!0,"nav--onPosition":t});return c.a.createElement("nav",{className:n},c.a.createElement("ul",{className:"nav__ul"},c.a.createElement("li",{className:a},c.a.createElement("a",{className:"nav__link",href:"http://www.matthave.pl/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("img",{className:"nav__logo",src:u.a,alt:"logo icon"})),c.a.createElement("a",{className:"nav__link",href:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019",target:"_blank",rel:"noopener noreferrer"},"WHO COVID-19"))))},f=function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={listEleOnPosition:!1},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({listEleOnPosition:!0})}),3e3)}},{key:"render",value:function(){var e=this.state.listEleOnPosition;return c.a.createElement(h,{listEleOnPosition:e})}}]),a}(n.Component);var v=function(e){var t=e.textEleOnPosition,a=e.headerEleOnPosition,n=p()({header__text:!0,"header__text--onPostion":t}),i=p()({header__text:!0,"header__text--onPostion":t,"header__text--hideIt":a}),o=p()({header__title:!0,"header__title--onPosition":a}),s=p()({header:!0,scrollSection:!0,"header--height":a});return c.a.createElement("header",{className:s},c.a.createElement("div",{className:"header__titleWrap"},c.a.createElement("h1",{className:o},"CoronaVirus")),c.a.createElement("div",{className:"header__textWrap"},c.a.createElement("p",{className:i},"Stay Home"),c.a.createElement("p",{className:i},"Wash Your Hands"),c.a.createElement("p",{className:i},"Avoid The Crowds"),c.a.createElement("p",{className:n},"Keep The Distance"),c.a.createElement("p",{className:n},"Take Care of Your Health")))},E=function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={textEleOnPosition:!1,headerEleOnPosition:!1},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({textEleOnPosition:!0})}),500),setTimeout((function(){e.setState({headerEleOnPosition:!0})}),3e3)}},{key:"render",value:function(){var e=this.state,t=e.textEleOnPosition,a=e.headerEleOnPosition;return c.a.createElement(v,{textEleOnPosition:t,headerEleOnPosition:a})}}]),a}(n.Component),S=a(31),g=a(13);var _=function(){return c.a.createElement("svg",{className:"chart__svg",width:"".concat(window.innerWidth),height:"".concat(window.innerHeight)})},w=a(6),N=function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).initForSvg=function(){var t=e.props.dataMost,a=Object(w.g)(".chart__svg"),n=85,c=95,i=a.attr("width")-c-20,o=+a.attr("height")-n-25,s=Object(w.f)().domain([0,Object(w.d)(t,(function(e){return e.cases}))]).range([0,i]).nice(),l=Object(w.e)().domain(t.map((function(e){return e.country}))).range([0,o]).padding(.2),r=a.append("g").attr("transform","translate(".concat(c,",").concat(n,")")),m=Object(w.b)(l).tickSize(-i);r.append("g").call(m).selectAll(".domain").remove();var d=Object(w.a)(s).tickFormat((function(e){return Object(w.c)(".2s")(e).replace("k","K")})).tickSize(-o).tickPadding(5);r.append("g").attr("class","svg__xAxis").call(d).attr("transform","translate(0,".concat(o,")")).select(".domain").remove(),r.selectAll("rect").data(t).enter().append("rect").attr("class","svg__rect").attr("y",(function(e){return l(e.country)})).attr("width",(function(e){return s(e.cases)})).attr("height",l.bandwidth()).attr("id",(function(e){return e.countryInfo._id}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){this.props.dataMost.length!==e.dataMost.length&&this.initForSvg()}},{key:"render",value:function(){return c.a.createElement(_,null)}}]),a}(n.Component),x=a(28),b=a.n(x),O=a(29),I=a.n(O),A=a(30),B=a.n(A),k=[{advice:"Always wear a mask when you go out,\n    this will reduce your risk of\n     getting sick or infecting someone else"},{advice:"Regularly and thoroughly clean your hands \n    with an alcohol-based\n    hand rub or wash them with soap and water"},{advice:"Maintain at least 2 meters (6 feet) distance \n    between yourself and\n    others, that allow you reduce the risk of falling ill"}];var T=function(e){var t=e.swapAdviceFunc,a=e.swapAdviceState;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"main__lastSecTitle"},"advice for the public"),c.a.createElement("div",{className:"main__iconWrap"},c.a.createElement("div",{className:"main__advice",id:"icon1"},a?c.a.createElement("h2",{className:"main__adviceText"},k[0].advice):c.a.createElement("img",{src:b.a,alt:"mask",className:"main__icon"}),c.a.createElement("h2",{className:"main__iconTitle"},"WEAR FACE MASK")),c.a.createElement("div",{className:"main__advice",id:"icon2"},a?c.a.createElement("h2",{className:"main__adviceText"},k[1].advice):c.a.createElement("img",{src:I.a,alt:"distance 2m",className:"main__icon"}),c.a.createElement("h2",{className:"main__iconTitle"},"KEEP 2 METERS DISTANCE")),c.a.createElement("div",{className:"main__advice",id:"icon3"},a?c.a.createElement("h2",{className:"main__adviceText"},k[2].advice):c.a.createElement("img",{src:B.a,alt:"wash hands",className:"main__icon"}),c.a.createElement("h2",{className:"main__iconTitle"},"WASH YOUR HANDS"))),c.a.createElement("button",{className:"main__lastBtn",onClick:function(){return t()}},"Swap Advice"))};var X=function(e){var t=e.dataMost;return c.a.createElement(c.a.Fragment,null,t.map((function(e){return c.a.createElement("div",{className:"fixedSection",key:e.countryInfo._id,id:"fixedSection".concat(e.countryInfo._id)},c.a.createElement("p",{className:"fixedSection__text"},"The ",c.a.createElement("span",{className:"fixedSection__country"},e.country)," has"," ",c.a.createElement("span",{className:"fixedSection__cases"},e.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))," ","infections, of which there are currently"," ",c.a.createElement("span",{className:"fixedSection__active"},e.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))," ","activites. CoronaVirus has killed"," ",c.a.createElement("span",{className:"fixedSection__deaths"},e.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),"people in the country and another"," ",c.a.createElement("span",{className:"fixedSection__critical"},e.critical.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))," ","are in critical condition. Today"," ",c.a.createElement("span",{className:"fixedSection__todayD"},e.todayDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))," ","people have died in the"," ",c.a.createElement("span",{className:"fixedSection__country"},e.country)," and"," ",c.a.createElement("span",{className:"fixedSection__todayC"},e.todayCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))," ","are newly infected."))})))};var j=function(e){var t=e.dataMost,a=e.swapAdviceFunc,n=e.swapAdviceState;return c.a.createElement("main",{className:"main"},c.a.createElement("section",{className:"main__chartSection scrollSection introSection"},c.a.createElement("h2",{className:"main__introTitle"},"Covid-19 Vaccine"),c.a.createElement("h4",{className:"main__introSubtitle"},"There are currently over 169 COVID-19 vaccine candidates under development, with 26 of these in the human trial phase"),c.a.createElement("button",{className:"main__introBtn"},"Learn More")),c.a.createElement("section",{className:"main__chartSection scrollSection"},c.a.createElement("h1",{className:"main__title"},c.a.createElement(N,{dataMost:t}))),c.a.createElement("section",{className:"scrollSection"}),c.a.createElement("section",{className:"scrollSection"}),c.a.createElement("section",{className:"scrollSection"}),c.a.createElement("section",{className:"scrollSection"}),c.a.createElement("section",{className:"scrollSection"}),c.a.createElement("section",{className:"scrollSection"}),c.a.createElement("section",{className:"scrollSection"}),c.a.createElement("section",{className:"scrollSection"}),c.a.createElement("section",{className:"scrollSection"}),c.a.createElement("section",{className:"scrollSection"}),c.a.createElement("section",{className:"scrollSection lastSection"},c.a.createElement(T,{swapAdviceFunc:a,swapAdviceState:n})),c.a.createElement("section",{className:"scrollSection"}),c.a.createElement(X,{dataMost:t}))},P=function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).scrollDirection=function(e){if(!n.state.scrollPause){n.setState({scrollPause:!0}),setTimeout((function(){n.setState({scrollPause:!1})}),500);var t=e.deltaY>0?1:-1;n.whichSectionNow(t)}},n.whichSectionNow=function(e){var t=n.currentIndexOfSection===n.sectionElements.length-1,a=0===n.currentIndexOfSection;if(1===e){if(t)return}else if(-1===e&&a)return;n.currentIndexOfSection+=e,n.scrollToElement(e)},n.scrollToElement=function(e){if(0===n.currentIndexOfSection||1===n.currentIndexOfSection||2===n.currentIndexOfSection||14===n.currentIndexOfSection){var t=document.querySelectorAll(".fixedSection");0===n.currentIndexOfSection||1===n.currentIndexOfSection?t.forEach((function(e){return e.style.display="none"})):t.forEach((function(e){return e.style.display="initial"})),n.sectionElements[n.currentIndexOfSection].scrollIntoView({behavior:"smooth"})}13===n.currentIndexOfSection&&-1===e&&n.sectionElements[2].scrollIntoView({behavior:"smooth"}),function(e){var t=document.getElementById("0"),a=document.getElementById("1"),n=document.getElementById("2"),c=document.getElementById("3"),i=document.getElementById("4"),o=document.getElementById("5"),s=document.getElementById("6"),l=document.getElementById("7"),r=document.getElementById("8"),m=document.getElementById("9"),d=document.getElementById("10"),u=document.getElementById("11"),y=document.getElementById("fixedSection0"),p=document.getElementById("fixedSection1"),h=document.getElementById("fixedSection2"),f=document.getElementById("fixedSection3"),v=document.getElementById("fixedSection4"),E=document.getElementById("fixedSection5"),S=document.getElementById("fixedSection6"),g=document.getElementById("fixedSection7"),_=document.getElementById("fixedSection8"),w=document.getElementById("fixedSection9"),N=document.getElementById("fixedSection10"),x=document.getElementById("fixedSection11"),b=document.querySelectorAll(".main__advice");2===e?(y.style.top="50%",y.style.opacity=1):(y.style.top="80%",y.style.opacity=0),3===e?(p.style.top="50%",p.style.opacity=1):(p.style.top="80%",p.style.opacity=0),4===e?(h.style.top="50%",h.style.opacity=1):(h.style.top="80%",h.style.opacity=0),5===e?(f.style.top="50%",f.style.opacity=1):(f.style.top="80%",f.style.opacity=0),6===e?(v.style.top="50%",v.style.opacity=1):(v.style.top="80%",v.style.opacity=0),7===e?(E.style.top="50%",E.style.opacity=1):(E.style.top="80%",E.style.opacity=0),8===e?(S.style.top="50%",S.style.opacity=1):(S.style.top="80%",S.style.opacity=0),9===e?(g.style.top="50%",g.style.opacity=1):(g.style.top="80%",g.style.opacity=0),10===e?(_.style.top="50%",_.style.opacity=1):(_.style.top="80%",_.style.opacity=0),11===e?(w.style.top="50%",w.style.opacity=1):(w.style.top="80%",w.style.opacity=0),12===e?(N.style.top="50%",N.style.opacity=1):(N.style.top="80%",N.style.opacity=0),13===e?(x.style.top="50%",x.style.opacity=1):(x.style.top="80%",x.style.opacity=0),e>=2?(t.style.opacity=1,t.style.transform="scaleX(1)"):(t.style.opacity=0,t.style.transform="scaleX(0)"),e>=3?(a.style.opacity=1,a.style.fill="rgba(247,148,49,0.85)",a.style.transform="scaleX(1)"):(a.style.opacity=0,a.style.transform="scaleX(0)"),e>=4?(n.style.opacity=1,n.style.fill="rgba(0,150,56,0.85)",n.style.transform="scaleX(1)"):(n.style.opacity=0,n.style.transform="scaleX(0)"),e>=5?(c.style.opacity=1,c.style.fill="rgba(0,55,161,0.85)",c.style.transform="scaleX(1)"):(c.style.opacity=0,c.style.transform="scaleX(0)"),e>=6?(i.style.opacity=1,i.style.fill="rgba(217,16,35,0.85)",i.style.transform="scaleX(1)"):(i.style.opacity=0,i.style.transform="scaleX(0)"),e>=7?(o.style.opacity=1,o.style.fill="rgba(244,202,21,0.85)",o.style.transform="scaleX(1)"):(o.style.opacity=0,o.style.transform="scaleX(0)"),e>=8?(s.style.opacity=1,s.style.fill="rgba(0,101,69,0.85)",s.style.transform="scaleX(1)"):(s.style.opacity=0,s.style.transform="scaleX(0)"),e>=9?(l.style.opacity=1,l.style.fill="rgba(0,19,133,0.85)",l.style.transform="scaleX(1)"):(l.style.opacity=0,l.style.transform="scaleX(0)"),e>=10?(r.style.opacity=1,r.style.fill="rgba(255,196,0,0.85)",r.style.transform="scaleX(1)"):(r.style.opacity=0,r.style.transform="scaleX(0)"),e>=11?(m.style.opacity=1,m.style.fill="rgb(112,167,216,0.85)",m.style.transform="scaleX(1)"):(m.style.opacity=0,m.style.transform="scaleX(0)"),e>=12?(d.style.opacity=1,d.style.fill="rgba(206,42,29,0.85)",d.style.transform="scaleX(1)"):(d.style.opacity=0,d.style.transform="scaleX(0)"),e>=13?(u.style.opacity=1,u.style.fill="rgba(0,34,144,0.85)",u.style.transform="scaleX(1)"):(u.style.opacity=0,u.style.transform="scaleX(0)"),e>=14?b.forEach((function(e){e.style.opacity=1})):b.forEach((function(e){e.style.opacity=0}))}(n.currentIndexOfSection),n.setState({chartStageNumber:n.currentIndexOfSection})},n.swapAdviceFunc=function(){n.setState({swapAdviceState:!n.state.swapAdviceState})},n.sectionElements=document.querySelectorAll(".scrollSection"),n.sectionArray=Object(S.a)(n.sectionElements),n.currentIndexOfSection=n.sectionArray.findIndex(n.isScrolledIntoView),n.currentIndexOfSection=Math.max(n.currentIndexOfSection,0),n.initialY=null,n.initialX=null,n.startTouch=n.startTouch.bind(Object(g.a)(n)),n.moveTouch=n.moveTouch.bind(Object(g.a)(n)),n.state={scrollPause:!1,chartStageNumber:0,data:[],swapAdviceState:!1},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.scrollTo({top:0,behavior:"auto"}),document.addEventListener("wheel",(function(t){return e.scrollDirection(t)})),document.addEventListener("touchstart",this.startTouch,!1),document.addEventListener("touchmove",this.moveTouch,!1),document.addEventListener("swipeUp",(function(){return e.whichSectionNow(1)})),document.addEventListener("swipeDown",(function(){return e.whichSectionNow(-1)})),this.sectionElements=document.querySelectorAll(".scrollSection"),this.setState({chartStageNumber:this.currentIndexOfSection}),fetch("https://corona.lmao.ninja/v2/countries").then((function(e){return e.json()})).then((function(t){return e.setState({data:t})})).catch((function(e){return console.log(e)}))}},{key:"componentWillUnmount",value:function(){var e=this;document.removeEventListener("wheel",(function(t){return e.scrollDirection(t)}))}},{key:"startTouch",value:function(e){e.preventDefault(),this.initialX=e.touches[0].clientX,this.initialY=e.touches[0].clientY}},{key:"moveTouch",value:function(e){if(this.initialX&&this.initialY){var t=e.touches[0].clientX,a=e.touches[0].clientY,n=this.initialX-t,c=this.initialY-a;Math.abs(n)>Math.abs(c)?n>0?document.dispatchEvent(new Event("swipeLeft")):document.dispatchEvent(new Event("swipeRight")):c>0?document.dispatchEvent(new Event("swipeUp")):document.dispatchEvent(new Event("swipeDown")),this.initialX=null,this.initialY=null}}},{key:"isScrolledIntoView",value:function(e){var t=e.getBoundingClientRect(),a=t.top,n=Math.floor(t.bottom);return a>=0&&n<=window.innerHeight}},{key:"render",value:function(){var e=this.state,t=e.chartStageNumber,a=e.data,n=e.swapAdviceState;a.sort((function(e,t){return t.cases-e.cases}));var i=a.slice(0,12);return i.forEach((function(e,t){e.countryInfo._id=t})),c.a.createElement(j,{chartStageNumber:t,dataMost:i,swapAdviceFunc:this.swapAdviceFunc,swapAdviceState:n})}}]),a}(n.Component);a(95);var M=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(f,null),c.a.createElement(E,null),c.a.createElement(P,null))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(M,null)),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.78c03465.chunk.js.map