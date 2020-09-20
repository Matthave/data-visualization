(this["webpackJsonpdata-visualization"]=this["webpackJsonpdata-visualization"]||[]).push([[0],{27:function(e,t,n){e.exports=n.p+"static/media/logo.d7d06777.png"},28:function(e,t,n){e.exports=n.p+"static/media/medical-mask.5ec44caf.svg"},29:function(e,t,n){e.exports=n.p+"static/media/social-distancing.cd5e7d03.svg"},30:function(e,t,n){e.exports=n.p+"static/media/water-tap.064467dc.svg"},89:function(e,t,n){e.exports=n(96)},95:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(26),i=n.n(o),l=n(1),s=n(2),r=n(4),m=n(3),d=n(27),u=n.n(d),y=n(5),p=n.n(y);var f=function(e){var t=e.listEleOnPosition,n=p()({nav__list:!0,"nav__list--onPosition":t}),a=p()({nav:!0,"nav--onPosition":t});return c.a.createElement("nav",{className:a},c.a.createElement("ul",{className:"nav__ul"},c.a.createElement("li",{className:n},c.a.createElement("a",{className:"nav__link",href:"http://www.matthave.pl/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("img",{className:"nav__logo",src:u.a,alt:"logo icon"})),c.a.createElement("a",{className:"nav__link",href:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019",target:"_blank",rel:"noopener noreferrer"},"WHO COVID-19"))))},h=function(e){Object(r.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={listEleOnPosition:!1},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({listEleOnPosition:!0})}),3e3)}},{key:"render",value:function(){var e=this.state.listEleOnPosition;return c.a.createElement(f,{listEleOnPosition:e})}}]),n}(a.Component);var E=function(e){var t=e.textEleOnPosition,n=e.headerEleOnPosition,a=p()({header__text:!0,"header__text--onPostion":t}),o=p()({header__text:!0,"header__text--onPostion":t,"header__text--hideIt":n}),i=p()({header__title:!0,"header__title--onPosition":n}),l=p()({header:!0,scrollSection:!0,"header--height":n});return c.a.createElement("header",{className:l},c.a.createElement("div",{className:"header__titleWrap"},c.a.createElement("h1",{className:i},"CoronaVirus")),c.a.createElement("div",{className:"header__textWrap"},c.a.createElement("p",{className:o},"Stay Home"),c.a.createElement("p",{className:o},"Wash Your Hands"),c.a.createElement("p",{className:o},"Avoid The Crowds"),c.a.createElement("p",{className:a},"Keep The Distance"),c.a.createElement("p",{className:a},"Take Care of Your Health")))},v=function(e){Object(r.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={textEleOnPosition:!1,headerEleOnPosition:!1},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({textEleOnPosition:!0})}),500),setTimeout((function(){e.setState({headerEleOnPosition:!0})}),3e3)}},{key:"render",value:function(){var e=this.state,t=e.textEleOnPosition,n=e.headerEleOnPosition;return c.a.createElement(E,{textEleOnPosition:t,headerEleOnPosition:n})}}]),n}(a.Component),S=n(31),g=n(13);var _=function(){return c.a.createElement("svg",{className:"chart__svg",width:"".concat(window.innerWidth),height:"".concat(window.innerHeight)})},N=n(6),x=function(e){Object(r.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).initForSvg=function(){var t=e.props.dataMost,n=Object(N.g)(".chart__svg"),a=85,c=95,o=n.attr("width")-c-20,i=+n.attr("height")-a-25,l=Object(N.f)().domain([0,Object(N.d)(t,(function(e){return e.cases}))]).range([0,o]).nice(),s=Object(N.e)().domain(t.map((function(e){return e.country}))).range([0,i]).padding(.2),r=n.append("g").attr("transform","translate(".concat(c,",").concat(a,")")),m=Object(N.b)(s).tickSize(-o);r.append("g").call(m).selectAll(".domain").remove();var d=Object(N.a)(l).tickFormat((function(e){return Object(N.c)(".2s")(e).replace("k","K")})).tickSize(-i).tickPadding(5);r.append("g").attr("class","svg__xAxis").call(d).attr("transform","translate(0,".concat(i,")")).select(".domain").remove(),r.selectAll("rect").data(t).enter().append("rect").attr("class","svg__rect").attr("y",(function(e){return s(e.country)})).attr("width",(function(e){return l(e.cases)})).attr("height",s.bandwidth()).attr("id",(function(e){return e.countryInfo._id}))},e}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(e,t){this.props.dataMost.length!==e.dataMost.length&&this.initForSvg()}},{key:"render",value:function(){return c.a.createElement(_,null)}}]),n}(a.Component),O=n(28),b=n.n(O),w=n(29),I=n.n(w),B=n(30),X=n.n(B);var j=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"main__lastSecTitle"},"advice for the public"),c.a.createElement("div",{className:"main__iconWrap"},c.a.createElement("div",{className:"main__advice"},c.a.createElement("img",{src:b.a,alt:"mask",className:"main__icon"}),c.a.createElement("h2",{className:"main__iconTitle"},"WEAR FACE MASK")),c.a.createElement("div",{className:"main__advice"},c.a.createElement("img",{src:I.a,alt:"distance 2m",className:"main__icon"}),c.a.createElement("h2",{className:"main__iconTitle"},"KEEP 2 METERE DISTANCE")),c.a.createElement("div",{className:"main__advice"},c.a.createElement("img",{src:X.a,alt:"wash hands",className:"main__icon"}),c.a.createElement("h2",{className:"main__iconTitle"},"WASH YOUR HANDS"))))};var k=function(e){var t=e.dataMost;return c.a.createElement(c.a.Fragment,null,t.map((function(e){return c.a.createElement("div",{className:"fixedSection",key:e.countryInfo._id,id:"fixedSection".concat(e.countryInfo._id)},c.a.createElement("p",{className:"fixedSection__text"},"The ",c.a.createElement("span",{className:"fixedSection__country"},e.country)," has"," ",c.a.createElement("span",{className:"fixedSection__cases"},e.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))," ","infections, of which there are currently"," ",c.a.createElement("span",{className:"fixedSection__active"},e.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))," ","activites. CoronaVirus has killed"," ",c.a.createElement("span",{className:"fixedSection__deaths"},e.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),"people in the country and another"," ",c.a.createElement("span",{className:"fixedSection__critical"},e.critical.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))," ","are in critical condition. Today"," ",c.a.createElement("span",{className:"fixedSection__todayD"},e.todayDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))," ","people have died in the"," ",c.a.createElement("span",{className:"fixedSection__country"},e.country)," and"," ",c.a.createElement("span",{className:"fixedSection__todayC"},e.todayCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))," ","are newly infected."))})))};var T=function(e){var t=e.dataMost;return e.dataHistorical,c.a.createElement("main",{className:"main"},c.a.createElement("section",{className:"main__chartSection scrollSection introSection"},c.a.createElement("h2",{className:"main__introTitle"},"Covid-19 Vaccine"),c.a.createElement("h4",{className:"main__introSubtitle"},"There are currently over 169 COVID-19 vaccine candidates under development, with 26 of these in the human trial phase"),c.a.createElement("button",{className:"main__introBtn"},"Learn More")),c.a.createElement("section",{className:"main__chartSection scrollSection"},c.a.createElement("h1",{className:"main__title"},c.a.createElement(x,{dataMost:t}))),c.a.createElement("section",{className:"scrollSection"}),c.a.createElement("section",{className:"scrollSection"}),c.a.createElement("section",{className:"scrollSection"}),c.a.createElement("section",{className:"scrollSection"}),c.a.createElement("section",{className:"scrollSection"}),c.a.createElement("section",{className:"scrollSection"}),c.a.createElement("section",{className:"scrollSection"}),c.a.createElement("section",{className:"scrollSection"}),c.a.createElement("section",{className:"scrollSection"}),c.a.createElement("section",{className:"scrollSection"}),c.a.createElement("section",{className:"scrollSection lastSection"},c.a.createElement(j,null)),c.a.createElement("section",{className:"scrollSection"}),c.a.createElement(k,{dataMost:t}))},P=function(e){Object(r.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).scrollDirection=function(e){if(!a.state.scrollPause){a.setState({scrollPause:!0}),setTimeout((function(){a.setState({scrollPause:!1})}),500);var t=e.deltaY>0?1:-1;a.whichSectionNow(t)}},a.whichSectionNow=function(e){var t=a.currentIndexOfSection===a.sectionElements.length-1,n=0===a.currentIndexOfSection;if(1===e){if(t)return}else if(-1===e&&n)return;a.currentIndexOfSection+=e,a.scrollToElement(e)},a.scrollToElement=function(e){if(0===a.currentIndexOfSection||1===a.currentIndexOfSection||2===a.currentIndexOfSection||14===a.currentIndexOfSection){var t=document.querySelectorAll(".fixedSection");0===a.currentIndexOfSection||1===a.currentIndexOfSection?t.forEach((function(e){return e.style.display="none"})):t.forEach((function(e){return e.style.display="initial"})),a.sectionElements[a.currentIndexOfSection].scrollIntoView({behavior:"smooth"})}13===a.currentIndexOfSection&&-1===e&&a.sectionElements[2].scrollIntoView({behavior:"smooth"}),function(e){var t=document.getElementById("0"),n=document.getElementById("1"),a=document.getElementById("2"),c=document.getElementById("3"),o=document.getElementById("4"),i=document.getElementById("5"),l=document.getElementById("6"),s=document.getElementById("7"),r=document.getElementById("8"),m=document.getElementById("9"),d=document.getElementById("10"),u=document.getElementById("11"),y=document.getElementById("fixedSection0"),p=document.getElementById("fixedSection1"),f=document.getElementById("fixedSection2"),h=document.getElementById("fixedSection3"),E=document.getElementById("fixedSection4"),v=document.getElementById("fixedSection5"),S=document.getElementById("fixedSection6"),g=document.getElementById("fixedSection7"),_=document.getElementById("fixedSection8"),N=document.getElementById("fixedSection9"),x=document.getElementById("fixedSection10"),O=document.getElementById("fixedSection11");2===e?(y.style.top="50%",y.style.opacity=1):(y.style.top="80%",y.style.opacity=0),3===e?(p.style.top="50%",p.style.opacity=1):(p.style.top="80%",p.style.opacity=0),4===e?(f.style.top="50%",f.style.opacity=1):(f.style.top="80%",f.style.opacity=0),5===e?(h.style.top="50%",h.style.opacity=1):(h.style.top="80%",h.style.opacity=0),6===e?(E.style.top="50%",E.style.opacity=1):(E.style.top="80%",E.style.opacity=0),7===e?(v.style.top="50%",v.style.opacity=1):(v.style.top="80%",v.style.opacity=0),8===e?(S.style.top="50%",S.style.opacity=1):(S.style.top="80%",S.style.opacity=0),9===e?(g.style.top="50%",g.style.opacity=1):(g.style.top="80%",g.style.opacity=0),10===e?(_.style.top="50%",_.style.opacity=1):(_.style.top="80%",_.style.opacity=0),11===e?(N.style.top="50%",N.style.opacity=1):(N.style.top="80%",N.style.opacity=0),12===e?(x.style.top="50%",x.style.opacity=1):(x.style.top="80%",x.style.opacity=0),13===e?(O.style.top="50%",O.style.opacity=1):(O.style.top="80%",O.style.opacity=0),e>=2?(t.style.opacity=1,t.style.transform="scaleX(1)"):(t.style.opacity=0,t.style.transform="scaleX(0)"),e>=3?(n.style.opacity=1,n.style.fill="rgba(247,148,49,0.85)",n.style.transform="scaleX(1)"):(n.style.opacity=0,n.style.transform="scaleX(0)"),e>=4?(a.style.opacity=1,a.style.fill="rgba(0,150,56,0.85)",a.style.transform="scaleX(1)"):(a.style.opacity=0,a.style.transform="scaleX(0)"),e>=5?(c.style.opacity=1,c.style.fill="rgba(0,55,161,0.85)",c.style.transform="scaleX(1)"):(c.style.opacity=0,c.style.transform="scaleX(0)"),e>=6?(o.style.opacity=1,o.style.fill="rgba(217,16,35,0.85)",o.style.transform="scaleX(1)"):(o.style.opacity=0,o.style.transform="scaleX(0)"),e>=7?(i.style.opacity=1,i.style.fill="rgba(244,202,21,0.85)",i.style.transform="scaleX(1)"):(i.style.opacity=0,i.style.transform="scaleX(0)"),e>=8?(l.style.opacity=1,l.style.fill="rgba(0,101,69,0.85)",l.style.transform="scaleX(1)"):(l.style.opacity=0,l.style.transform="scaleX(0)"),e>=9?(s.style.opacity=1,s.style.fill="rgba(0,19,133,0.85)",s.style.transform="scaleX(1)"):(s.style.opacity=0,s.style.transform="scaleX(0)"),e>=10?(r.style.opacity=1,r.style.fill="rgba(255,196,0,0.85)",r.style.transform="scaleX(1)"):(r.style.opacity=0,r.style.transform="scaleX(0)"),e>=11?(m.style.opacity=1,m.style.fill="rgb(112,167,216,0.85)",m.style.transform="scaleX(1)"):(m.style.opacity=0,m.style.transform="scaleX(0)"),e>=12?(d.style.opacity=1,d.style.fill="rgba(206,42,29,0.85)",d.style.transform="scaleX(1)"):(d.style.opacity=0,d.style.transform="scaleX(0)"),e>=13?(u.style.opacity=1,u.style.fill="rgba(0,34,144,0.85)",u.style.transform="scaleX(1)"):(u.style.opacity=0,u.style.transform="scaleX(0)")}(a.currentIndexOfSection),a.setState({chartStageNumber:a.currentIndexOfSection})},a.sectionElements=document.querySelectorAll(".scrollSection"),a.sectionArray=Object(S.a)(a.sectionElements),a.currentIndexOfSection=a.sectionArray.findIndex(a.isScrolledIntoView),a.currentIndexOfSection=Math.max(a.currentIndexOfSection,0),a.initialY=null,a.initialX=null,a.startTouch=a.startTouch.bind(Object(g.a)(a)),a.moveTouch=a.moveTouch.bind(Object(g.a)(a)),a.state={scrollPause:!1,chartStageNumber:0,data:[]},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.scrollTo({top:0,behavior:"auto"}),document.addEventListener("wheel",(function(t){return e.scrollDirection(t)})),document.addEventListener("touchstart",this.startTouch,!1),document.addEventListener("touchmove",this.moveTouch,!1),document.addEventListener("swipeUp",(function(){return e.whichSectionNow(1)})),document.addEventListener("swipeDown",(function(){return e.whichSectionNow(-1)})),this.sectionElements=document.querySelectorAll(".scrollSection"),this.setState({chartStageNumber:this.currentIndexOfSection}),fetch("https://corona.lmao.ninja/v2/countries").then((function(e){return e.json()})).then((function(t){return e.setState({data:t})})).catch((function(e){return console.log(e)}))}},{key:"componentWillUnmount",value:function(){var e=this;document.removeEventListener("wheel",(function(t){return e.scrollDirection(t)}))}},{key:"startTouch",value:function(e){e.preventDefault(),this.initialX=e.touches[0].clientX,this.initialY=e.touches[0].clientY}},{key:"moveTouch",value:function(e){if(this.initialX&&this.initialY){var t=e.touches[0].clientX,n=e.touches[0].clientY,a=this.initialX-t,c=this.initialY-n;Math.abs(a)>Math.abs(c)?a>0?document.dispatchEvent(new Event("swipeLeft")):document.dispatchEvent(new Event("swipeRight")):c>0?document.dispatchEvent(new Event("swipeUp")):document.dispatchEvent(new Event("swipeDown")),this.initialX=null,this.initialY=null}}},{key:"isScrolledIntoView",value:function(e){var t=e.getBoundingClientRect(),n=t.top,a=Math.floor(t.bottom);return n>=0&&a<=window.innerHeight}},{key:"render",value:function(){var e=this.state,t=e.chartStageNumber,n=e.data;n.sort((function(e,t){return t.cases-e.cases}));var a=n.slice(0,12);return a.forEach((function(e,t){e.countryInfo._id=t})),c.a.createElement(T,{chartStageNumber:t,dataMost:a})}}]),n}(a.Component);n(95);var M=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(h,null),c.a.createElement(v,null),c.a.createElement(P,null))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(M,null)),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.1dc7c7de.chunk.js.map