(this["webpackJsonpcoach-portal"]=this["webpackJsonpcoach-portal"]||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/attLogo.8aef4ebd.png"},24:function(e,t,a){e.exports=a(45)},29:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),c=a(20),r=a.n(c),m=(a(29),a(30),a(2)),i=a(3),u=a(5),E=a(4),o=a(6),s=a(7),d=a(11),f=(a(31),a(21)),h=a.n(f),b=(a(32),a(17)),p=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("nav",null,n.a.createElement("div",{className:"nav-links"},n.a.createElement("div",{className:"nav-icons "},n.a.createElement(b.a,{className:"block"})),n.a.createElement("div",{className:"logo"},n.a.createElement("img",{src:h.a,alt:"globe"})),n.a.createElement("div",{className:"nav-icons "},n.a.createElement(b.b,{className:"block"}))))}}]),t}(l.Component),O=(a(33),{icons:[{id:1,name:"fa fa-bar-chart fa-lg",title:"My Dashboard"},{id:2,name:"fa fa-newspaper-o fa-lg",title:"Communication"},{id:3,name:"fa fa-exclamation-triangle fa-lg",title:"Alerts"},{id:4,name:"fa fa-tasks fa-lg",title:"Tasks"},{id:5,name:"fa fa-edit fa-lg",title:"Documentation"},{id:6,name:"fa fa-users fa-lg",title:"Crew Meeting"},{id:7,name:"fa fa-truck fa-lg",title:"Load"},{id:8,name:"fa fa-globe fa-lg",title:"Maps"},{id:9,name:"fa fa-link fa-lg",title:"Links"},{id:10,name:"fa fa-table fa-lg",title:"Reports"},{id:11,name:"fa fa-trophy fa-lg",title:"Recognition"}]}),N=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(E.a)(t).call(this,e))).state=O,a}return Object(o.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.icons.map((function(e){return n.a.createElement("div",{className:"icon-block",key:e.id},n.a.createElement("span",null,n.a.createElement("i",{className:e.name})),n.a.createElement("span",{className:"icon-title"},e.title))}));return n.a.createElement("div",{className:"icon-bar"},e)}}]),t}(l.Component),v=(a(34),function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"filter-container"},n.a.createElement("div",{className:"filter-item"},n.a.createElement("select",null,n.a.createElement("option",null,"MTD - 6 Mo Rolling"),n.a.createElement("option",null,"3 Mo Rolling (Completed)"),n.a.createElement("option",null,"Daily"),n.a.createElement("option",null,"QTD"),n.a.createElement("option",null,"YTD"))),n.a.createElement("div",{className:"filter-item"},n.a.createElement("input",{type:"date"})),n.a.createElement("div",{className:"filter-item"},n.a.createElement("button",{className:"btn"},n.a.createElement("i",{className:"fa fa-refresh"}),"Update Results")),n.a.createElement("div",{className:"filter-item"},n.a.createElement("button",{className:"btn export"},n.a.createElement("i",{className:"fa fa-download export"}),"Export Results")))}}]),t}(l.Component)),g=(a(35),{employee:[{id:"2",image:"https://images.unsplash.com/photo-1521146764736-56c929d59c83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",name:"Employee A",hpc:"2.98",voc:"100",aiq:"138",true:"96",billing:"40",ep:"70",attianment:"70"},{id:"3",image:"https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",name:"Employee B",hpc:"2.98",voc:"100",aiq:"138",true:"96",billing:"40",ep:"70",attianment:"70"},{id:"1",image:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",name:"Employee C",hpc:"2.98",voc:"100",aiq:"138",true:"96",billing:"40",ep:"70",attianment:"70"}]}),j=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(E.a)(t).call(this,e))).state=g,a}return Object(o.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.employee.map((function(e){return n.a.createElement("div",{className:"employee-card",key:e.id},n.a.createElement("div",{className:"image"},n.a.createElement("img",{src:e.image})),n.a.createElement("div",{className:"info-card"},n.a.createElement("div",{className:"info-data emp-name"},n.a.createElement(s.b,{to:"/dailyview"},e.name)),n.a.createElement("div",{className:"info-data contact"},n.a.createElement("i",{className:"fa fa-phone"})," 555-555-5555"),n.a.createElement("div",{className:"info-data contact"},n.a.createElement("i",{className:"fa fa-envelope"})," AA1234@att.com"),n.a.createElement("div",{className:"info-data tenure"},n.a.createElement("p",null,"10 yrears 2 Months"))),n.a.createElement("div",{className:"card-item"},n.a.createElement("h2",null,"HPC"),n.a.createElement("h3",null,e.hpc)),n.a.createElement("div",{className:"card-item"},n.a.createElement("h2",null,"VOC"),n.a.createElement("h3",null,e.voc)),n.a.createElement("div",{className:"card-item"},n.a.createElement("h2",null,"AIQ"),n.a.createElement("h3",null,e.aiq)),n.a.createElement("div",{className:"card-item"},n.a.createElement("h2",null,"True Test"),n.a.createElement("h3",null,e.true)),n.a.createElement("div",{className:"card-item"},n.a.createElement("h2",null,"Billing"),n.a.createElement("h3",null,e.billing)),n.a.createElement("div",{className:"card-item"},n.a.createElement("h2",null,"EP"),n.a.createElement("h3",null,e.attianment)),n.a.createElement("div",{className:"card-item"},n.a.createElement("h2",null,"Attianment"),n.a.createElement("h3",null,e.ep)))}))}}]),t}(l.Component),y={flags:[{id:1,flagOn:"fa fa-flag",flagOff:null}],months:[{id:1,month:"JAN",flagOn:!0},{id:2,month:"FEB",flagOn:!1},{id:3,month:"MAR",flagOn:!1},{id:4,month:"APR",flagOn:!1},{id:5,month:"MAY",flagOn:!1},{id:6,month:"JUN",flagOn:!1},{id:7,month:"JUL",flagOn:!1},{id:8,month:"AUG",flagOn:!1},{id:9,month:"SEP",flagOn:!1},{id:10,month:"OCT",flagOn:!1},{id:11,month:"NOV",flagOn:!1},{id:12,month:"DEC",flagOn:!1}]};a(41);var T=function(){var e=y.months.map((function(e){if(e.flagOn)return n.a.createElement("div",{className:"flag-block"},n.a.createElement("i",{className:"fa fa-flag"}))})),t=y.months.map((function(t){return n.a.createElement("div",{key:t.id,className:"flag-block"},n.a.createElement("h4",null," ",t.month," "),e)}));return n.a.createElement("div",{className:"flag-container"},n.a.createElement("div",{className:"tech-type"},n.a.createElement("h3",null,"HD"),n.a.createElement("i",{className:"fa fa-home"})),n.a.createElement("div",{className:"flag-month"},t))},M=(a(42),function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"daily-container"},n.a.createElement(T,null),n.a.createElement("h2",{className:"label"},"Detail Summary"),n.a.createElement("table",{className:"esm-info"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"WORK ORDER ID"),n.a.createElement("th",null,"DISPOUT"),n.a.createElement("th",null,"CMP"),n.a.createElement("th",null,"JOBTYPE"),n.a.createElement("th",null,"TRANSPORT"),n.a.createElement("th",null,"EARNED"),n.a.createElement("th",null,"DURATION"),n.a.createElement("th",null,"STATUS")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement(s.b,{to:"/jobview"},"W01101000")),n.a.createElement("td",null,"Mar-5 08:15"),n.a.createElement("td",null,"Mar-5 13:02"),n.a.createElement("td",null,"IRJHAM"),n.a.createElement("td",null,"FTTN-BP"),n.a.createElement("td",null,"5.91"),n.a.createElement("td",null,"7.01"),n.a.createElement("td",null,"COMPLETE")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement(s.b,{to:"/jobview"},"W01101000")),n.a.createElement("td",null,"Mar-5 08:15"),n.a.createElement("td",null,"Mar-5 13:02"),n.a.createElement("td",null,"IRJHAM"),n.a.createElement("td",null,"FTTN-BP"),n.a.createElement("td",null,"5.91"),n.a.createElement("td",null,"7.01"),n.a.createElement("td",null,"COMPLETE")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement(s.b,{to:"/jobview"},"W01101000")),n.a.createElement("td",null,"Mar-5 08:15"),n.a.createElement("td",null,"Mar-5 13:02"),n.a.createElement("td",null,"IRJHAM"),n.a.createElement("td",null,"FTTN-BP"),n.a.createElement("td",null,"5.91"),n.a.createElement("td",null,"7.01"),n.a.createElement("td",null,"COMPLETE")))),n.a.createElement("h3",null,n.a.createElement(s.b,{to:"/logisticview"},"TIME VALIDATION")),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"AM"),n.a.createElement("th",null,"PM"),n.a.createElement("th",null,"TRAVEL"),n.a.createElement("th",null,"FUEL"),n.a.createElement("th",null,"TOTAL EARNED")),n.a.createElement("tr",null,n.a.createElement("td",null,"0.24"),n.a.createElement("td",null,"0.16"),n.a.createElement("td",null,"1.27"),n.a.createElement("td",null,"0.03"),n.a.createElement("td",null,"14.84")),n.a.createElement("tr",null,n.a.createElement("th",null,"TOTAL DISPOUT"),n.a.createElement("th",null,"DAILY JOB ESM")),n.a.createElement("tr",null,n.a.createElement("td",null,"6.98"),n.a.createElement("td",null,"6.98")))),n.a.createElement("button",{className:"back-button"},n.a.createElement(s.b,{to:"/"},"Back")))}}]),t}(l.Component)),D=(a(43),function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"daily-container"},n.a.createElement(T,null),n.a.createElement("h2",{className:"label"},"Job Detail"),n.a.createElement("table",{className:"esm-info"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"WORK ORDER ID"),n.a.createElement("th",null,"DISPOUT"),n.a.createElement("th",null,"CMP"),n.a.createElement("th",null,"JOBTYPE"),n.a.createElement("th",null,"TRANSPORT"),n.a.createElement("th",null,"EARNED"),n.a.createElement("th",null,"DURATION"),n.a.createElement("th",null,"STATUS")),n.a.createElement("tr",null,n.a.createElement("td",null,"W01101000"),n.a.createElement("td",null,"Mar-5 08:15"),n.a.createElement("td",null,"Mar-5 13:02"),n.a.createElement("td",null,"IRJHAM"),n.a.createElement("td",null,"FTTN-BP"),n.a.createElement("td",null,"5.91"),n.a.createElement("td",null,"7.01"),n.a.createElement("td",null,"COMPLETE")))),n.a.createElement("button",{className:"back-button"},n.a.createElement(s.b,{to:"/dailyview"},"Back")))}}]),t}(l.Component)),A=(a(44),function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"daily-container"},n.a.createElement(T,null),n.a.createElement("h2",{className:"label"},"Logistic Performance"),n.a.createElement("table",{className:"esm-info"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Start Time"),n.a.createElement("th",null,"Left Garage"),n.a.createElement("th",null,"Depart Diff"),n.a.createElement("th",null,"Scheduled Stop"),n.a.createElement("th",null,"Last Stop"),n.a.createElement("th",null,"Return Diff"),n.a.createElement("th",null,"Drive Duration"),n.a.createElement("th",null,"Stop Duration"),n.a.createElement("th",null,"Stop Points")),n.a.createElement("tr",null,n.a.createElement("td",null,"Mar-5 08:00"),n.a.createElement("td",null,"Mar-5 08:15"),n.a.createElement("td",null,".25"),n.a.createElement("td",null,"Mar-5 16:30"),n.a.createElement("td",null,"Mar-5 16:00"),n.a.createElement("td",null,".50"),n.a.createElement("td",null,"1.00"),n.a.createElement("td",null,"1.00"),n.a.createElement("td",null,"4")))),n.a.createElement("button",{className:"back-button"},n.a.createElement(s.b,{to:"/dailyview"},"Back")))}}]),t}(l.Component)),k=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(s.a,null,n.a.createElement("div",null,n.a.createElement(p,null),n.a.createElement(N,null),n.a.createElement(v,null),n.a.createElement(d.c,null,n.a.createElement(d.a,{path:"/",exact:!0,component:j}),n.a.createElement(d.a,{path:"/dailyview",component:M}),n.a.createElement(d.a,{path:"/jobview",component:D}),n.a.createElement(d.a,{path:"/logisticview",component:A}))))}}]),t}(l.Component);r.a.render(n.a.createElement(k,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.d7ffc06a.chunk.js.map