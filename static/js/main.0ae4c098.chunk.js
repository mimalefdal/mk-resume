(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e){e.exports={theme_1:{code:"1","--bkg-color":"#25274d","--navbar-bkg":"rgba(25,25,25,0.5)","--main-text-color":"white","--alt-text-color":"orange","--navbar-txt-color":"white","--skill-card-bkg-color":"grey"},theme_2:{code:"2","--bkg-color":"#5cdb95","--main-text-color":"#05386b","--alt-text-color":"white","--navbar-txt-color":"white","--skill-card-bkg-color":"#05386b"},theme_3:{code:"3","--bkg-color":"#222629","--main-text-color":"#86c232","--alt-text-color":"white","--navbar-txt-color":"white","--skill-card-bkg-color":"#86c232"}}},2:function(e){e.exports={PersonalInfo:{name:"Amin",Family:"Delvarani",University:"",mainTitles:"Fullstack Developer | Mobile App Developer",mediaLinks:{linkedin:"https://linkedin.com/in/amin-delvarani",github:"https://github.com/mimalefdal",twitter:"https://twitter.com/mimalefdal"}},About:{title:"Precise Engineering",detail:"I was graduated in 2002 in computer Architecture. I love both HW & SW fields. ncjsndc jsdndcksjndc sc sjdnc sdnc nsdcjns djn snc sdnc snc sdcn sdkndkcsd sdsd sf sdf W fields. ncjsndc jsdndcksjndc sc sjdnc sdnc nsdcjns djn snc sdnc snc sdcn sdkndkcsd sdsd sf sdf"},Skills:{reactJS:{title:"React JS",image:"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",comment:""},reactNative:{title:"React Native",image:"",comment:""},Laravel:{title:"PHP Laravel",image:"",comment:""},Redux:{title:"Redux",image:"",comment:""},AndroidStudio:{title:"Android Programming",image:"",comment:""},ExcelAutomation:{title:"Excel VB Automation",image:"",comment:""}}}},24:function(e,t,n){e.exports=n.p+"static/media/arrow-down.d4438dbd.svg"},28:function(e,t,n){e.exports=n.p+"static/media/magic-wand.5436decf.svg"},29:function(e,t,n){e.exports=n(53)},34:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(11),c=n.n(l),o=(n(34),n(4)),s=n(5),r=n(7),m=n(6),d=n(8),h=n(24),u=n.n(h),p=n(2),g=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.skilItem;return i.a.createElement("div",{className:"skillCard",style:{}},i.a.createElement("img",{src:e.image}),i.a.createElement("p",null,e.title))}}]),t}(a.Component),f=n(25),b=n(26),k=n.n(b),v=n(9),y=n(27),E=n.n(y),j=function(e){function t(e){return Object(o.a)(this,t),Object(r.a)(this,Object(m.a)(t).call(this,e))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(k.a,{upHandler:function(){return v.animateScroll.scrollMore(-window.innerHeight)},downHandler:function(){v.animateScroll.scrollMore(window.innerHeight)}},i.a.createElement(v.Element,{name:this.props.type},i.a.createElement("div",{className:"body",style:this.props.theme},"PersonalInfo"===this.props.type&&i.a.createElement("div",{style:{verticalAlign:"middle",margin:"auto"}},i.a.createElement(E.a,{excludeMobile:!1}),i.a.createElement("div",{className:"greeting",style:{},onClick:function(){}},"Hi! I'm ",p.PersonalInfo.name),i.a.createElement("div",{className:"mainJobTitles"},p.PersonalInfo.mainTitles),i.a.createElement("div",{className:"linksDiv"},Object.keys(p.PersonalInfo.mediaLinks).map(function(e){return console.log(p.PersonalInfo.mediaLinks[e]),i.a.createElement(f.SocialIcon,{className:"links",url:p.PersonalInfo.mediaLinks[e]})}))),"About"===this.props.type&&i.a.createElement("div",{style:{verticalAlign:"middle",margin:"auto"}},i.a.createElement("div",{className:"aboutBody"},i.a.createElement("p",{className:"about"},"About"),i.a.createElement("p",{className:"aboutTitle"},p.About.title),i.a.createElement("p",{className:"aboutDetail"},p.About.detail))),"Skills"===this.props.type&&i.a.createElement("div",{className:"skillsBody"},i.a.createElement("p",{className:"mySkills"},"My Skills"),i.a.createElement("div",{className:"skillCardsBody"},Object.keys(p.Skills).map(function(e){var t=p.Skills[e];return i.a.createElement(g,{skilItem:t})}))),i.a.createElement(v.Link,{to:this.props.next,smooth:!0},i.a.createElement("img",{src:u.a,className:"scrollicon"})))))}}]),t}(a.Component),x=n(28),w=n.n(x),_=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"navBody",style:this.props.theme},i.a.createElement("div",{style:{display:"flex",height:"100%"}},i.a.createElement("div",{style:{display:"flex",flex:1,justifyContent:"flex-start",alignItems:"center",paddingLeft:"25px"}},i.a.createElement("div",{style:{justifyContent:"center",maxheight:"100%",cursor:"pointer"},onClick:function(){return e.props.changeTheme(e.props.theme)}},i.a.createElement("img",{src:w.a,style:{height:"3vh"}}),i.a.createElement("p",{style:{fontSize:"1vh",margin:"0"}},"Click Me"))),i.a.createElement("div",{style:{display:"flex",flex:5,justifyContent:"flex-end",alignItems:"center",paddingRight:"25px"}},i.a.createElement(v.Link,{to:"Skills",smooth:!0},i.a.createElement("p",{style:{fontSize:"2.5vh",cursor:"pointer",textAlign:"right",marginRight:"10px"}},"My Skills")),i.a.createElement(v.Link,{to:"About",smooth:!0},i.a.createElement("p",{style:{fontSize:"2.5vh",cursor:"pointer",textAlign:"right",marginRight:"10px"}},"About me")))))}}]),t}(a.Component),O=n(1),S=(n(50),n(51),n(52),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(n=Object(r.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={theme_navBar:O.theme_1,theme1:O.theme_1,theme2:O.theme_2,theme3:O.theme_3},n.changeTheme=function(e){switch(console.log("count of themes",Object.keys(O).length),console.log("prvtheme Code",e.code),e.code){case"1":n.setState({theme_navBar:O.theme_2,theme1:O.theme_2,theme2:O.theme_3,theme3:O.theme_1});break;case"2":n.setState({theme_navBar:O.theme_3,theme1:O.theme_3,theme2:O.theme_1,theme3:O.theme_2});break;case"3":n.setState({theme_navBar:O.theme_1,theme1:O.theme_1,theme2:O.theme_2,theme3:O.theme_3})}},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(_,{theme:this.state.theme_navBar,changeTheme:this.changeTheme}),i.a.createElement(j,{theme:this.state.theme1,type:"PersonalInfo",next:"About"}),i.a.createElement(j,{theme:this.state.theme2,type:"About",next:"Skills"}),i.a.createElement(j,{theme:this.state.theme3,type:"Skills",next:"PersonalInfo"}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,1,2]]]);
//# sourceMappingURL=main.0ae4c098.chunk.js.map