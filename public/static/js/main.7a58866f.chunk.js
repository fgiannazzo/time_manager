(this.webpackJsonptime_manager_client=this.webpackJsonptime_manager_client||[]).push([[0],{43:function(e,t,a){e.exports=a.p+"static/media/edit.d37d9400.svg"},44:function(e,t,a){e.exports=a.p+"static/media/delete.5a226e36.svg"},50:function(e,t,a){e.exports=a(88)},59:function(e,t,a){},60:function(e,t,a){},78:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),i=a.n(o),s=a(13),l=(a(55),a(58),a(59),a(5)),c=a(6),m=a(3),d=a(8),u=a(7),h=a(19),p=(a(60),a(17)),b=a.n(p),g=(a(78),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-light bg-light Navbar"},r.a.createElement(s.b,{to:"/",className:"navbar-brand"},r.a.createElement("img",{className:"Navbar-logo",src:"img/eventek_logo.svg",alt:"logo"}),r.a.createElement("span",{className:"Navbar-title"},"Time Manager")),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.c,{exact:!0,to:"/",className:"nav-link"},"Log Time")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.c,{exact:!0,to:"/dashboard",className:"nav-link"},"Dashboard")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.c,{exact:!0,to:"/settings",className:"nav-link"},"Settings"))),r.a.createElement("form",{className:"form-inline "},this.props.loggedIn?r.a.createElement("button",{onClick:this.props.logout,className:"form-control mr-sm-2 btn btn-outline-info my-2 my-sm-0"},"Logout"):r.a.createElement(s.b,{to:"/login"},r.a.createElement("button",{className:"form-control mr-sm-2 btn btn-outline-info my-2 my-sm-0"},"Login"))))))}}]),a}(n.Component)),v=a(42),f=(a(83),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={email:"",password:"",loading:!1},n.handleChange=n.handleChange.bind(Object(m.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n}return Object(c.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.setState({email:this.state.email,password:this.state.password,loading:!0}),this.props.login(this.state.email,this.state.password),setTimeout((function(){t.props.loggedIn?t.props.history.push("/"):setTimeout((function(){t.props.loggedIn||(alert("Timed out!"),t.setState({loading:!1}))}),5e3)}),1e3)}},{key:"render",value:function(){return r.a.createElement("div",{className:"Login container text-center"},r.a.createElement("form",{className:"form-signin",onSubmit:this.handleSubmit},r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Please sign in"),r.a.createElement("label",{htmlFor:"inputEmail",className:"sr-only"},"Email address"),r.a.createElement("input",{type:"email",name:"email",className:"form-control",placeholder:"Email address",required:!0,autoFocus:!0,value:this.state.email,onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"inputPassword",className:"sr-only"},"Password"),r.a.createElement("input",{type:"password",name:"password",className:"form-control",placeholder:"Password",required:!0,value:this.state.password,onChange:this.handleChange}),r.a.createElement("button",{className:"btn btn-lg btn-info btn-block mt-3",type:"submit"},this.state.loading?r.a.createElement("span",{className:"Spinner spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement("span",null,"Sign In")),r.a.createElement(s.b,{to:"/signup"},r.a.createElement("p",{className:"Signup mt-3 mb-3"},"Signup")),r.a.createElement("p",{className:"mt-5 mb-3 text-muted"},"Reset Password")))}}]),a}(n.Component)),E=(a(84),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.size},r.a.createElement("div",{className:"HomePage-card card"},r.a.createElement("div",{className:"card-header"},this.props.title),r.a.createElement("div",{className:"card-body"},this.props.children)))}}]),a}(n.Component));E.defaultProps={size:"col-md-6 col-lg-4"};a(85);var j=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={timerOn:!1,timerStart:0,timerTime:0,project:""},n.startTimer=n.startTimer.bind(Object(m.a)(n)),n.stopTimer=n.stopTimer.bind(Object(m.a)(n)),n.resetTimer=n.resetTimer.bind(Object(m.a)(n)),n.saveTime=n.saveTime.bind(Object(m.a)(n)),n.handleChange=n.handleChange.bind(Object(m.a)(n)),n}return Object(c.a)(a,[{key:"startTimer",value:function(){var e=this;this.setState({timerOn:!0,timerTime:this.state.timerTime,timerStart:Date.now()-this.state.timerTime}),this.timer=setInterval((function(){e.setState({timerTime:Date.now()-e.state.timerStart})}),10)}},{key:"stopTimer",value:function(){this.setState({timerOn:!1}),clearInterval(this.timer)}},{key:"resetTimer",value:function(){this.setState({timerStart:0,timerTime:0})}},{key:"saveTime",value:function(){var e=this,t=this.props.projects.find((function(t){return t.name===e.state.project})),a=this.state.timerTime,n=("0"+Math.floor(a/36e5)).slice(-2),r=("0"+Math.floor(a/6e4)%60).slice(-2);Math.floor(a/1e3)%60>30&&r++,n>=1||r>=1?this.props.addRecord("".concat(n,":").concat(("000"+r).slice(-2)),a,t._id):alert("Time spent must be higher than 1 minute!"),this.resetTimer()}},{key:"handleChange",value:function(e){var t=e.target.value;this.setState({project:t})}},{key:"render",value:function(){var e=this.state.timerTime,t=("0"+Math.floor(e/1e3)%60).slice(-2),a=("0"+Math.floor(e/6e4)%60).slice(-2),n=("0"+Math.floor(e/36e5)).slice(-2);return r.a.createElement("div",{className:"Stopwatch"},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("select",{className:"form-control",id:"projectSelect",onChange:this.handleChange},r.a.createElement("option",null),this.props.projects.map((function(e){return r.a.createElement("option",{key:e._id},e.name)}))),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-outline-secondary",type:"button",onClick:this.props.toggleModal},"Add"))),r.a.createElement("div",{className:"Stopwatch-timer"},r.a.createElement("h1",{className:"display-4"},n,":",a,":",t)),r.a.createElement("div",{className:"Stopwatch-controls"},!0===this.state.timerOn&&r.a.createElement("button",{className:"btn btn-outline-secondary",onClick:this.resetTimer,disabled:!0},"Reset"),!1===this.state.timerOn&&r.a.createElement("button",{className:"btn btn-outline-secondary",onClick:this.resetTimer},"Reset"),!1===this.state.timerOn&&0===this.state.timerTime&&r.a.createElement("button",{className:"btn btn-outline-info",onClick:this.startTimer},"Start"),!0===this.state.timerOn&&r.a.createElement("button",{className:"btn btn-outline-info",onClick:this.stopTimer},"Stop"),!1===this.state.timerOn&&this.state.timerTime>0&&r.a.createElement("button",{className:"btn btn-outline-info",onClick:this.startTimer},"Resume")),!1===this.state.timerOn&&this.state.timerTime>0&&r.a.createElement("div",{className:"Stopwatch-submit"},r.a.createElement("button",{className:"btn btn-info",onClick:this.saveTime},"Save")))}}]),a}(n.Component),y=(a(86),a(43)),N=a.n(y),O=a(44),S=a.n(O),k=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).delRecord=n.delRecord.bind(Object(m.a)(n)),n.editRecord=n.editRecord.bind(Object(m.a)(n)),n}return Object(c.a)(a,[{key:"delRecord",value:function(){this.props.delRecord(this.props.id)}},{key:"editRecord",value:function(){this.props.editRecord(this.props.id)}},{key:"render",value:function(){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},this.props.date),r.a.createElement("td",null,this.props.time),r.a.createElement("td",null,this.props.timeSpent),r.a.createElement("td",null,this.props.project),r.a.createElement("td",null,r.a.createElement("div",{className:"btn-group HistoryItem-controls",role:"group","aria-label":"recordControls"},r.a.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:this.editRecord},r.a.createElement("img",{className:"HistoryItem-icon",src:N.a,alt:"edit icon"})),r.a.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:this.delRecord},r.a.createElement("img",{className:"HistoryItem-icon",src:S.a,alt:"edit icon"})))))}}]),a}(n.Component),C=(a(87),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props.records;return r.a.createElement("div",{className:"History-container"},r.a.createElement("table",{className:"table table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Date"),r.a.createElement("th",{scope:"col"},"Time of Day"),r.a.createElement("th",{scope:"col"},"Time Spent"),r.a.createElement("th",{scope:"col"},"Project"),r.a.createElement("th",{scope:"col"}))),r.a.createElement("tbody",null,t.map((function(t){return r.a.createElement(k,{date:t.dateString,time:t.timeOfDay,timeSpent:t.timeSpentString,project:t.project.name,id:t._id,key:t._id,delRecord:e.props.delRecord,editRecord:e.props.editRecord})})))))}}]),a}(n.Component)),T=a(91),w=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={projectName:""},n.handleChange=n.handleChange.bind(Object(m.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n.handleHide=n.handleHide.bind(Object(m.a)(n)),n}return Object(c.a)(a,[{key:"handleChange",value:function(e){this.setState({projectName:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({projectName:this.state.projectName}),this.props.addProject(this.state.projectName)}},{key:"handleHide",value:function(){this.props.toggleModal()}},{key:"render",value:function(){return r.a.createElement(T.a,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:this.props.show,onHide:this.handleHide},r.a.createElement(T.a.Header,{closeButton:!0},r.a.createElement(T.a.Title,{id:"contained-modal-title-vcenter"},"Add Project")),r.a.createElement(T.a.Body,null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Project Name"),r.a.createElement("input",{className:"form-control",id:"projectName",autoFocus:!0,value:this.state.projectName,onChange:this.handleChange}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Short names are best."),r.a.createElement("div",{className:"text-right"},r.a.createElement("button",{className:"btn btn-secondary mr-2",onClick:this.props.toggleModal},"Cancel"),r.a.createElement("button",{className:"btn btn-info",type:"submit"},"Add +"))))))}}]),a}(n.Component),R=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={records:[],projects:[],modalVisible:!1},n.addRecord=n.addRecord.bind(Object(m.a)(n)),n.addProject=n.addProject.bind(Object(m.a)(n)),n.refreshHistory=n.refreshHistory.bind(Object(m.a)(n)),n.refreshProjects=n.refreshProjects.bind(Object(m.a)(n)),n.toggleModal=n.toggleModal.bind(Object(m.a)(n)),n.delRecord=n.delRecord.bind(Object(m.a)(n)),n.editRecord=n.editRecord.bind(Object(m.a)(n)),n}return Object(c.a)(a,[{key:"refreshHistory",value:function(){var e=this;try{b.a.get("".concat("/node","/api/v1/timelogs/?sort=-date"),{withCredentials:!0}).then((function(t){e.setState({records:t.data.data.data})}))}catch(t){console.log(t)}}},{key:"refreshProjects",value:function(){var e=this;try{b.a.get("".concat("/node","/api/v1/projects/"),{withCredentials:!0}).then((function(t){e.setState({projects:t.data.data.data})})),this.refreshHistory()}catch(t){console.log(t)}}},{key:"componentDidMount",value:function(){this.refreshProjects()}},{key:"addRecord",value:function(e,t,a){var n=this,r=new Date,o=r.toDateString(),i=r.toLocaleTimeString(void 0,{hour:"numeric",minute:"numeric"}),s={dateString:o.slice(3,o.length),timeOfDay:i,timeSpentString:e,timeSpentInt:t,project:a};try{b.a.post("".concat("/node","/api/v1/timelogs/"),s,{withCredentials:!0}).then((function(e){201===e.status?n.refreshHistory():alert("Error adding new record!")}))}catch(l){console.log(l)}}},{key:"toggleModal",value:function(){this.setState((function(e){return{modalVisible:!e.modalVisible}}))}},{key:"addProject",value:function(e){var t=this,a={name:e,user:this.props.userId};try{b.a.post("".concat("/node","/api/v1/projects/"),a,{withCredentials:!0}).then((function(e){201===e.status?(t.refreshProjects(),t.toggleModal()):alert("Error adding new project!")}))}catch(n){console.log(n)}}},{key:"delRecord",value:function(e){var t=this;console.log("record",e);try{b.a.delete("".concat("/node","/api/v1/timelogs/").concat(e),{withCredentials:!0}).then((function(e){204===e.status?t.refreshProjects():alert("Error deleting project!")}))}catch(a){console.log(a)}}},{key:"editRecord",value:function(e){console.log("edit",e)}},{key:"render",value:function(){return r.a.createElement("div",{className:"HomePage "},r.a.createElement("h4",{className:"my-4"},"Log Time"),r.a.createElement("div",{className:"row"},r.a.createElement(E,{size:"col-md-12 col-lg-4",title:"Timer"},r.a.createElement(j,{addRecord:this.addRecord,projects:this.state.projects,toggleModal:this.toggleModal})),r.a.createElement(E,{size:"col-md-12 col-lg-8 ml-mt-auto mt-lg-0",title:"History"},r.a.createElement(C,{records:this.state.records,delRecord:this.delRecord,editRecord:this.editRecord}))),r.a.createElement(w,{toggleModal:this.toggleModal,addProject:this.addProject,show:this.state.modalVisible}))}}]),a}(n.Component),I=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,this.props.loggedIn?r.a.createElement(h.b,{exact:!0,path:this.props.path,render:function(){return e.props.children}}):r.a.createElement(h.a,{to:"/login"}))}}]),a}(n.Component),P=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={loggedIn:!1,id:""},n.login=n.login.bind(Object(m.a)(n)),n.logout=n.logout.bind(Object(m.a)(n)),n}return Object(c.a)(a,[{key:"login",value:function(e,t){var a=this;try{b.a.post("".concat("/node","/api/v1/users/login"),{email:e,password:t},{withCredentials:!0}).then((function(e){200===e.status&&a.setState({loggedIn:!0,id:e.data.data.user.id})}))}catch(n){console.log(n)}}},{key:"logout",value:function(){var e=this;try{b.a.get("".concat("/node","/node/api/v1/users/logout"),{withCredentials:!0}).then((function(t){200===t.status&&e.setState({loggedIn:!1,id:""})}))}catch(t){console.log(t)}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(g,{loggedIn:this.state.loggedIn,logout:this.logout}),r.a.createElement("div",{className:"container"},r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/login",render:function(t){return r.a.createElement(f,Object.assign({},t,{login:e.login,loggedIn:e.state.loggedIn}))}}),r.a.createElement(I,{path:"/",loggedIn:this.state.loggedIn},r.a.createElement(R,{userId:this.state.id})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(s.a,{basename:"/node"},r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.7a58866f.chunk.js.map