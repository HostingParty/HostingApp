(this["webpackJsonphosting-app"]=this["webpackJsonphosting-app"]||[]).push([[0],{156:function(e,t,n){},17:function(e,t,n){var a=n(97);t.login=function(e){return a.post("/auth/login",e)},t.registerUser=function(e){return a.post("/api/v1/users",e)},t.getUserInfo=function(e){return a.get("/api/v1/users/"+e)},t.updateUserInfo=function(e,t){return a.put("/api/v1/users/"+e,t)},t.updateUserPw=function(e,t){return a.put("/api/v1/users/pw/"+e,t)},t.updateUserEvents=function(e,t){var n={hosting:t};return a.put("/api/v1/users/array/"+e,n)},t.deleteUser=function(e){return a.delete("/api/v1/users/"+e)},t.searchForUser=function(e){return a.get("/api/v1/users/search",{params:{name:e}})},t.addFriend=function(e,t){var n={friends:t};return a.put("/api/v1/users/array/"+e,n)},t.textUser=function(e){return a.post("api/v1/aws/text")},t.addEvent=function(e){return a.post("/api/v1/events",e)},t.getEventInfo=function(e){return a.get("/api/v1/events/"+e)},t.updateEventInfo=function(e,t){return a.put("/api/v1/events/"+e,t)},t.deleteEvent=function(e){return a.delete("/api/v1/events/"+e)},t.getRecipes=function(e){return a.get("/api/v1/food/recipes/".concat(e))},t.addRecipes=function(e,t,n){var c={recipe:n,menu:t};return a.put("/api/v1/events/recipe/"+e,c)}},188:function(e,t,n){},189:function(e,t,n){},190:function(e,t,n){},191:function(e,t,n){},193:function(e,t,n){},194:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(13),r=n.n(i),s=(n(156),n(15)),o=n(14),l=n(9),d=n(7),j=n(89),u=n(17),b=n.n(u),p=n(256),h=n(258),O=n(275),x=n(259),m=n(45),f=n(274),v=n(260),g=n(257),y=n(18),w=n.n(y),S=n(31),N=n(44),C="SET_EVENT",E="SET_SELECTED_EVENT",k="SET_RECIPES",T="DISH_TYPE",I="DISH_VIEW",R=n(1),D=Object(a.createContext)(),L=D.Provider,F=function(e,t){switch(t.type){case"ADD_INVITE":return Object(d.a)(Object(d.a)({},e),{},{pendingInvites:[t.post].concat(Object(N.a)(e.pendingInvites)),loading:!1});case"REMOVE_INVITE":return Object(d.a)(Object(d.a)({},e),{},{pendingInvites:Object(N.a)(e.pendingInvites),loading:!1});case"SET_USER":return Object(d.a)(Object(d.a)({},e),{},{user:t.payload});case C:return Object(d.a)(Object(d.a)({},e),{},{event:t.payload});case E:return console.log("in reducer, selected event id is: ",t.payload),Object(d.a)(Object(d.a)({},e),{},{selectedEvent:t.payload});case k:return Object(d.a)(Object(d.a)({},e),{},{recipeSearchArr:Object(N.a)(t.payload)});case T:return Object(d.a)(Object(d.a)({},e),{},{dishType:t.payload.dishType});case I:return Object(d.a)(Object(d.a)({},e),{},{searchedRecipe:t.payload});case"ADD_RECIPE":return Object(d.a)(Object(d.a)({},e),{},{selectedEvent:t.payload});default:return e}};function _(e){return P.apply(this,arguments)}function P(){return(P=Object(S.a)(w.a.mark((function e(t){var n,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.getRecipes(t);case 2:return n=e.sent,a=n.data.results.map((function(e){return e.recipe})),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var U=function(e){e.value;var t=Object(j.a)(e,["value"]),n=Object(a.useReducer)(F,{selectedEvent:"",user:{name:{first:"",last:""},allergies:[],preferences:[],favoriteRecipes:[],hosting:[],pending:[],accepted:[],declined:[],_id:"",phone:"",email:""},event:{_id:null,title:"",description:"",eventDate:"",startTime:"",endTime:"",pending:[],accepted:[],declined:[],apps:[],sides:[],mains:[]},loading:!1,recipeSearchArr:[],searchedRecipe:{}}),c=Object(l.a)(n,2),i=c[0],r=c[1];return Object(R.jsx)(L,Object(d.a)({value:[i,r]},t))},W=function(){return Object(a.useContext)(D)},A=n(244),B=n(248),V=n(246),H=n(249),G=n(69),M=n.n(G),z=n(133),Y=n(118),J=n.n(Y),q=n(119),K=n.n(q),Q=Object(z.a)({palette:{primary:J.a,secondary:K.a},status:{danger:"orange"}}),X=Object(A.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper}}}));function Z(e){e.key;var t=e.groupName,n=Object(a.useState)(t),c=Object(l.a)(n,2),i=(c[0],c[1],X());return console.log("In user list, props are ",e),Object(R.jsx)("div",{className:i.root,children:Object(R.jsxs)(B.a,{align:"center",component:"nav","aria-label":"event list of people",children:[Object(R.jsx)(m.a,{align:"center",variant:"h6",children:e.groupName}),e.people?e.people.map((function(e){return Object(R.jsxs)(V.a,{button:!0,children:[Object(R.jsx)(M.a,{color:"secondary"}),Object(R.jsx)(H.a,{primary:"".concat(e.name.first," ").concat(e.name.last)})]})})):Object(R.jsx)(m.a,{children:"No users found"})]})})}var $=n(23),ee=n(4),te=n(250),ne=n(251),ae=n(252),ce=n(255),ie=n(253),re=n(254),se=n(278),oe=n(196),le=n(65),de=n.n(le),je=n(121),ue=n.n(je),be=Object(A.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:e.palette.secondary}}}));function pe(e){var t,n=be(),a=c.a.useState(!1),i=Object(l.a)(a,2),r=i[0],s=i[1];return Object(R.jsxs)(te.a,{className:n.root,children:[Object(R.jsx)(ne.a,{avatar:Object(R.jsx)(se.a,{"aria-label":"recipe",className:n.avatar,children:null===e||void 0===e?void 0:e.label}),action:Object(R.jsx)(oe.a,{"aria-label":"settings",onClick:function(){return window.open(e.url,"_blank")},children:Object(R.jsx)(ue.a,{})}),titleTypographyProps:{variant:"h4"},title:null===e||void 0===e?void 0:e.label}),Object(R.jsx)(ae.a,{className:n.media,image:null===e||void 0===e?void 0:e.image}),Object(R.jsxs)(ie.a,{disableSpacing:!0,children:[Object(R.jsx)(m.a,{variant:"h6",children:"Ingredients:"}),Object(R.jsx)(oe.a,{className:Object(ee.a)(n.expand,Object($.a)({},n.expandOpen,r)),onClick:function(){s(!r)},"aria-expanded":r,"aria-label":"show more",children:Object(R.jsx)(de.a,{})})]}),Object(R.jsx)(re.a,{in:r,timeout:"auto",unmountOnExit:!0,children:Object(R.jsx)(ce.a,{children:null===(t=e.ingredientLines)||void 0===t?void 0:t.map((function(e){return Object(R.jsx)(m.a,{paragraph:!0,variant:"subtitle2",children:e})}))})})]})}var he=n(279),Oe=n(261),xe=n(262),me=n(124),fe=n.n(me),ve=n(125),ge=n.n(ve),ye=n(123),we=n.n(ye),Se=Object(A.a)((function(e){return{root:{flexGrow:1,maxWidth:752},demo:{backgroundColor:e.palette.background.paper},title:{margin:e.spacing(4,0,2)}}}));function Ne(){var e=Se(),t=c.a.useState(!1),n=Object(l.a)(t,2),i=n[0],r=(n[1],c.a.useState(!1)),s=Object(l.a)(r,2),d=(s[0],s[1],Object(o.f)()),j=W(),u=Object(l.a)(j,2),b=u[0],h=u[1];Object(a.useEffect)((function(){Object(S.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(b.dishType);case 2:t=e.sent,h({type:k,payload:t});case 4:case"end":return e.stop()}}),e)})))()}),[b.dishType]);return Object(R.jsx)(p.a,{children:Object(R.jsx)("div",{className:e.root,children:Object(R.jsx)(g.a,{container:!0,spacing:2,children:Object(R.jsxs)(g.a,{item:!0,xs:12,md:6,children:[Object(R.jsx)(m.a,{variant:"h6",className:e.title,children:"Search Results For ".concat(b.dishType)}),Object(R.jsx)("div",{className:e.demo,children:Object(R.jsx)(B.a,{dense:i,children:b.recipeSearchArr.map((function(e){return Object(R.jsx)(B.a,{children:Object(R.jsx)(V.a,{button:!0,children:Object(R.jsx)(H.a,{primary:e.label,onClick:function(){return function(e){h({type:I,payload:e}),d.push("/viewSelectedRecipe")}(e)}})})})}))})})]})})})})}var Ce=Object(A.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular}}}));function Ee(e){var t=e.children,n=e.value,a=e.index,c=Object(j.a)(e,["children","value","index"]);return Object(R.jsx)("div",Object(d.a)(Object(d.a)({role:"tabpanel",hidden:n!==a,id:"simple-tabpanel-".concat(a),"aria-labelledby":"simple-tab-".concat(a)},c),{},{children:n===a&&Object(R.jsx)(f.a,{p:3,children:Object(R.jsx)(m.a,{children:t})})}))}function ke(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}function Te(){var e=Object(o.f)(),t=c.a.useState(0),n=Object(l.a)(t,2),i=n[0],r=n[1],j=Ce(),u=W(),f=Object(l.a)(u,2),y=f[0],w=f[1];Object(a.useEffect)((function(){b.a.getEventInfo(y.selectedEvent).then((function(e){var t=e.data.data[0];console.log("In event page, event is ",t),w({type:C,payload:t})})).catch((function(e){console.log(e)}))}),[y.selectedEvent]);return Object(R.jsxs)(p.a,{fluid:"true",children:[Object(R.jsx)(m.a,{variant:"h4",children:y.event.title}),Object(R.jsx)(h.a,{position:"static",children:Object(R.jsxs)(O.a,{value:i,centered:!0,onChange:function(e,t){r(t)},"aria-label":"event tabs for sections",children:[Object(R.jsx)(x.a,Object(d.a)({label:"Details",icon:Object(R.jsx)(we.a,{})},ke(0))),Object(R.jsx)(x.a,Object(d.a)({label:"Guests",icon:Object(R.jsx)(fe.a,{})},ke(1))),Object(R.jsx)(x.a,Object(d.a)({label:"Menu",icon:Object(R.jsx)(ge.a,{})},ke(2)))]})}),Object(R.jsxs)(Ee,{value:i,index:0,children:[Object(R.jsxs)(m.a,{align:"center",variant:"h6",children:["Date: ",y.event.eventDate]}),Object(R.jsxs)(m.a,{align:"center",variant:"h6",children:["Starts at: ",y.event.startTime]}),Object(R.jsxs)(m.a,{align:"center",variant:"h6",children:["Ends at: ",y.event.endTime]}),Object(R.jsxs)(m.a,{align:"center",variant:"h6",children:["Description: ",y.event.description]}),Object(R.jsx)(m.a,{align:"center",variant:"h6",children:Object(R.jsx)("br",{})}),Object(R.jsx)(v.a,{variant:"contained",color:"primary",component:s.b,to:"/make-event",children:"Edit Details"})]}),Object(R.jsxs)(Ee,{value:i,index:1,children:[Object(R.jsx)(g.a,{container:!0,justify:"center",children:[{title:"Attending",value:"accepted"},{title:"Pending",value:"pending"},{title:"Declined",value:"declined"}].map((function(e){return Object(R.jsx)(Z,{groupName:e.title,people:y.event[e.value],sm:12},e.value)}))}),Object(R.jsx)(v.a,{variant:"contained",color:"primary",component:s.b,to:"/make-event",children:"Edit Guests"})]}),Object(R.jsxs)(Ee,{value:i,index:2,children:[Object(R.jsxs)(he.a,{width:"100",children:[Object(R.jsx)(Oe.a,{expandIcon:Object(R.jsx)(de.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(R.jsx)(m.a,{className:j.heading,children:"Appetizers"})}),Object(R.jsx)(xe.a,{children:Object(R.jsxs)(g.a,{container:!0,direction:"column",width:"full",children:[Object(R.jsxs)(g.a,{item:!0,xs:12,children:[y.event.apps.length?Object(R.jsx)(m.a,{children:"Below are your appetizers saved for the event"}):Object(R.jsx)(m.a,{children:"No saved recipes found."}),Object(R.jsx)(v.a,{variant:"contained",color:"secondary",onClick:function(t){w({type:T,payload:{dishType:"Starter"}}),e.push("/recipe")},children:"Search for Apps"})]}),Object(R.jsxs)(g.a,{item:!0,container:!0,children:[Object(R.jsx)(g.a,{item:!0,xs:!1,sm:2}),Object(R.jsx)(g.a,{item:!0,container:!0,xs:12,sm:8,spacing:3,children:y.event.apps?y.event.apps.map((function(e){return Object(R.jsx)(g.a,{item:!0,xs:12,sm:6,md:4,children:Object(R.jsx)(pe,Object(d.a)({},e))})})):Object(R.jsx)(m.a,{children:"No saved recipes found."})}),Object(R.jsx)(g.a,{item:!0,xs:!1,sm:2})]})]})})]}),Object(R.jsxs)(he.a,{children:[Object(R.jsx)(Oe.a,{expandIcon:Object(R.jsx)(de.a,{}),"aria-controls":"panel2a-content",id:"panel2a-header",children:Object(R.jsx)(m.a,{className:j.heading,children:"Side Dishes"})}),Object(R.jsx)(xe.a,{children:Object(R.jsxs)(g.a,{container:!0,direction:"column",width:"full",children:[Object(R.jsxs)(g.a,{item:!0,xs:12,children:[y.event.sides.length?Object(R.jsx)(m.a,{children:"Below are your side dishes saved for the event"}):Object(R.jsx)(m.a,{children:"No saved recipes found."}),Object(R.jsx)(v.a,{variant:"contained",color:"secondary",onClick:function(t){w({type:T,payload:{dishType:"Preps"}}),e.push("/recipe")},children:"Search for Sides"})]}),Object(R.jsxs)(g.a,{item:!0,container:!0,children:[Object(R.jsx)(g.a,{item:!0,xs:!1,sm:2}),Object(R.jsx)(g.a,{item:!0,container:!0,xs:12,sm:8,spacing:3,children:y.event.sides.map((function(e){return Object(R.jsx)(g.a,{item:!0,xs:12,sm:6,md:4,children:Object(R.jsx)(pe,Object(d.a)({},e))})}))}),Object(R.jsx)(g.a,{item:!0,xs:!1,sm:2})]})]})})]}),Object(R.jsxs)(he.a,{children:[Object(R.jsx)(Oe.a,{expandIcon:Object(R.jsx)(de.a,{}),"aria-controls":"panel2a-content",id:"panel2a-header",children:Object(R.jsx)(m.a,{className:j.heading,children:"Main Dishes"})}),Object(R.jsx)(xe.a,{children:Object(R.jsxs)(g.a,{container:!0,direction:"column",width:"full",children:[Object(R.jsxs)(g.a,{item:!0,xs:12,children:[y.event.mains.length?Object(R.jsx)(m.a,{children:"Below are your main dishes saved for the event"}):Object(R.jsx)(m.a,{children:"No saved recipes found."}),Object(R.jsx)(v.a,{variant:"contained",color:"secondary",onClick:function(t){w({type:T,payload:{dishType:"Main Course"}}),e.push("/recipe")},children:"Search for Main Dish"})]}),Object(R.jsxs)(g.a,{item:!0,container:!0,children:[Object(R.jsx)(g.a,{item:!0,xs:!1,sm:2}),Object(R.jsx)(g.a,{item:!0,container:!0,xs:12,sm:8,spacing:3,children:y.event.mains.map((function(e){return Object(R.jsx)(g.a,{item:!0,xs:12,sm:6,md:4,children:Object(R.jsx)(pe,Object(d.a)({},e))})}))}),Object(R.jsx)(g.a,{item:!0,xs:!1,sm:2})]})]})})]})]})]})}n(188);var Ie=n(101),Re=n(263),De=n(264),Le=Object(A.a)((function(e){return{card:{marginBottom:8,display:"flex",padding:8,paddingBottom:8}}})),Fe=function(e){var t,n,a=e.friend,c=e.addFriend,i=Le();return Object(R.jsx)(R.Fragment,{children:Object(R.jsxs)(te.a,{className:i.card,children:[Object(R.jsxs)(m.a,{variant:"h6",children:[null===a||void 0===a||null===(t=a.name)||void 0===t?void 0:t.first," ",null===a||void 0===a||null===(n=a.name)||void 0===n?void 0:n.last]}),c&&Object(R.jsx)(v.a,{onClick:function(){c(null===a||void 0===a?void 0:a._id)},children:"Add"})]})})},_e=function(e){var t=e.friendsArray,n=e.addFriend;return t.map((function(e){return Object(R.jsx)(Fe,{friend:e,addFriend:n},e._id)}))},Pe=n(281),Ue=n(98),We=n.n(Ue),Ae=n(5),Be=Object(Ae.a)((function(e){return{mb:{marginTop:8,marginBottom:16},px:{paddingLeft:16,paddingright:16}}}))((function(e){var t=e.handleInput,n=e.handleSubmit,a=e.handleCancel,c=e.classes;return Object(R.jsx)(Ie.a,{className:c.mb,children:Object(R.jsxs)("form",{className:c.px,onSubmit:function(e){n(e)},children:[Object(R.jsx)(Pe.a,{placeholder:"Search for a friend",name:"searchInput",onChange:function(e){t(e)}}),Object(R.jsx)(oe.a,{type:"submit",children:Object(R.jsx)(We.a,{})}),Object(R.jsx)(v.a,{onClick:function(e){a(e)},children:"Cancel"})]})})})),Ve=n(276),He=Object(A.a)((function(e){return{padding:{padding:16},paper:{borderTop:"3px solid #2196F3"}}})),Ge=function(e){var t=e.friends,n=e.userId,c=He(),i=Object(a.useState)({showFriends:!0,results:[]}),r=Object(l.a)(i,2),s=r[0],o=r[1],j=Object(a.useState)(),u=Object(l.a)(j,2),p=u[0],h=u[1],O=Object(a.useState)({show:!1,message:""}),x=Object(l.a)(O,2),f=x[0],v=x[1],g=W(),y=Object(l.a)(g,2),w=(y[0],y[1]);return Object(R.jsx)(Ie.a,{className:c.paper,children:Object(R.jsx)(te.a,{children:Object(R.jsxs)(ce.a,{children:[Object(R.jsx)(m.a,{variant:"h4",className:c.padding,children:"Your Friends"}),f.show&&Object(R.jsx)(Ve.a,{variant:"outlined",severity:"warning",children:f.message}),Object(R.jsx)(Be,{handleInput:function(e){var t=e.target.value;h(Object(d.a)(Object(d.a)({},p),{},{input:t})),o({showFriends:!0,results:[]}),v({show:!1,message:""})},handleSubmit:function(e){e.preventDefault(),e.target.searchInput.value="",console.log(p.input),b.a.searchForUser(p.input).then((function(e){console.log(e.data.data),o({showFreinds:!1,results:e.data.data})})).catch((function(e){v({show:!0,message:"User not found"})}))},handleCancel:function(e){o({showFriends:!0,results:[]})}}),s.results&&Object(R.jsx)(_e,{friendsArray:s.results,addFriend:function(e){b.a.addFriend(n,e).then((function(e){w({type:"SET_USER",payload:e.data.data})})).catch((function(e){console.log(e)})),o({showFriends:!0,results:[]})}}),t&&s.showFriends&&Object(R.jsx)(_e,{friendsArray:t})]})})})},Me=n(97),ze=n.n(Me),Ye=Object(A.a)((function(e){return{root:{display:"flex",justifyContent:"center"},formControl:{margin:e.spacing(3)},large:{width:e.spacing(7),height:e.spacing(7)},item:{display:"flex",justifyContent:"flex-start"},mx:{marginLeft:18,marginTop:16},paper:{borderTop:"3px solid #2196F3"},avatar:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginLeft:18,marginTop:16},button:{padding:1,marginTop:5,fontSize:10,background:"#ccc"}}}));var Je=function(){var e,t,n,c,i,r,s=Ye(),o=Object(a.useState)({preview:"",raw:""}),d=Object(l.a)(o,2),j=d[0],u=d[1],b=W(),h=Object(l.a)(b,2),O=h[0],x=(h[1],function(){var e=Object(S.a)(w.a.mark((function e(t){var n,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(n=new FormData).append("image",j.raw),a={"Content-Type":"multipart/form-data"},e.next=6,ze.a.post("/api/v1/upload-photo",n,{headers:a});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return Object(R.jsx)(p.a,{maxWidth:"md",className:s.root,children:Object(R.jsxs)(g.a,{container:!0,spacing:3,children:[Object(R.jsx)(g.a,{item:!0,sm:12,md:6,children:Object(R.jsxs)(Ie.a,{className:s.paper,children:[Object(R.jsx)(g.a,{item:!0,sm:12,children:Object(R.jsxs)(g.a,{container:!0,className:s.item,children:[Object(R.jsxs)(g.a,{item:!0,className:s.avatar,children:[Object(R.jsx)("label",{htmlFor:"upload-button",children:j.preview?Object(R.jsx)(se.a,{src:j.preview,className:s.large}):Object(R.jsx)(se.a,{src:null===O||void 0===O||null===(e=O.user)||void 0===e?void 0:e.profilePic,className:s.large})}),Object(R.jsx)("input",{type:"file",id:"upload-button",style:{display:"none"},onChange:function(e){e.target.files.length&&u({preview:URL.createObjectURL(e.target.files[0]),raw:e.target.files[0]})}}),Object(R.jsx)("small",{children:"Click to change"}),j.preview&&Object(R.jsxs)("div",{className:"buttons",children:[Object(R.jsx)(v.a,{className:s.button,onClick:x,children:"Upload"}),Object(R.jsx)(v.a,{className:s.button,onClick:function(e){e.preventDefault(),u({preview:"",raw:""})},children:"Cancel"})]})]}),Object(R.jsx)(g.a,{item:!0,className:s.mx,children:Object(R.jsxs)("h2",{children:[null===O||void 0===O||null===(t=O.user)||void 0===t||null===(n=t.name)||void 0===n?void 0:n.first," ",null===O||void 0===O||null===(c=O.user)||void 0===c||null===(i=c.name)||void 0===i?void 0:i.last]})})]})}),Object(R.jsx)(g.a,{item:!0,sm:12,children:Object(R.jsx)(Re.a,{component:"fieldset",className:s.formControl,children:Object(R.jsx)(De.a,{component:"legend",children:"Allergies"})})}),Object(R.jsx)(g.a,{item:!0,sm:12,children:Object(R.jsx)(Re.a,{component:"fieldset",className:s.formControl,children:Object(R.jsx)(De.a,{component:"legend",children:"Preferences"})})})]})}),Object(R.jsx)(g.a,{item:!0,sm:12,md:6,children:O.user&&Object(R.jsx)(Ge,{userId:O.user._id,friends:null===O||void 0===O||null===(r=O.user)||void 0===r?void 0:r.friends})})]})})},qe=(n(189),n(126)),Ke=n(127),Qe=n(135),Xe=n(134),Ze=(n(190),n(273)),$e=function(e){Object(Qe.a)(n,e);var t=Object(Xe.a)(n);function n(e){var a;return Object(qe.a)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=e.target.name;a.setState(Object($.a)({},t,e.target.value))},a.handleSubmit=function(){var e=Object(S.a)(w.a.mark((function e(t){var n,c,i,r,s,o,l,d;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.state,c=n.firstName,i=n.lastName,r=n.email,s=n.password,o=n.phone,l={name:{first:c,last:i},email:r,password:s,phone:o},e.prev=3,e.next=6,b.a.registerUser(l);case 6:d=e.sent,console.log(d),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),a.state={},a}return Object(Ke.a)(n,[{key:"render",value:function(){var e=this;return Object(R.jsx)("div",{children:Object(R.jsx)(g.a,{container:!0,spacing:0,justify:"center",direction:"row",children:Object(R.jsx)(g.a,{item:!0,children:Object(R.jsx)(g.a,{container:!0,direction:"column",justify:"center",spacing:2,className:"login-form",children:Object(R.jsxs)(Ie.a,{variant:"elevation",elevation:2,className:"login-background",children:[Object(R.jsx)(g.a,{item:!0,children:Object(R.jsx)(m.a,{component:"h1",variant:"h5",children:"Sign Up"})}),Object(R.jsx)(g.a,{item:!0,children:Object(R.jsx)("form",{children:Object(R.jsxs)(g.a,{container:!0,direction:"column",spacing:2,children:[Object(R.jsx)(g.a,{item:!0,children:Object(R.jsx)(Ze.a,{id:"firstName",name:"firstName",type:"text",placeholder:"First Name",variant:"outlined",onChange:function(t){return e.handleChange(t)}})}),Object(R.jsx)(g.a,{item:!0,children:Object(R.jsx)(Ze.a,{id:"lastName",name:"lastName",type:"text",placeholder:"Last Name",variant:"outlined",onChange:function(t){return e.handleChange(t)}})}),Object(R.jsx)(g.a,{item:!0,children:Object(R.jsx)(Ze.a,{id:"phone",name:"phone",type:"text",placeholder:"Phone Number",variant:"outlined",onChange:function(t){return e.handleChange(t)}})}),Object(R.jsx)(g.a,{item:!0,children:Object(R.jsx)(Ze.a,{id:"email",name:"email",type:"text",placeholder:"Email",variant:"outlined",onChange:function(t){return e.handleChange(t)}})}),Object(R.jsx)(g.a,{item:!0,children:Object(R.jsx)(Ze.a,{id:"password",name:"password",type:"text",placeholder:"Password",variant:"outlined",onChange:function(t){return e.handleChange(t)}})}),Object(R.jsx)(g.a,{item:!0,children:Object(R.jsx)(v.a,{variant:"contained",color:"primary",type:"submit",className:"button-block",onClick:function(t){return e.handleSubmit(t)},children:"Submit"})})]})})}),Object(R.jsx)(m.a,{className:"center",component:s.b,to:"/login",variant:"caption",display:"block",gutterBottom:!0,children:"Login"})]})})})})})}}]),n}(c.a.Component),et=(n(191),n(22)),tt=n(265),nt=n(266),at=n(282),ct=n(267),it=n(128),rt=n.n(it),st=n(129),ot=n.n(st),lt=n(130),dt=n.n(lt),jt=(n(192),240),ut=Object(A.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(jt,"px)"),transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginRight:jt},title:{flexGrow:1},hide:{display:"none"},drawer:{width:jt,flexShrink:0},drawerPaper:{width:jt},drawerHeader:Object(d.a)(Object(d.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-start"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginRight:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginRight:0}}}));function bt(){var e=ut(),t=Object(et.a)(),n=c.a.useState(!1),a=Object(l.a)(n,2),i=a[0],r=a[1];return Object(R.jsxs)("div",{className:e.root,children:[Object(R.jsx)(tt.a,{}),Object(R.jsx)(h.a,{position:"fixed",className:Object(ee.a)(e.appBar,Object($.a)({},e.appBarShift,i)),children:Object(R.jsxs)(nt.a,{children:[Object(R.jsx)(m.a,{variant:"h6",noWrap:!0,className:e.title,children:"Hosting Party"}),Object(R.jsx)(oe.a,{color:"inherit","aria-label":"open drawer",edge:"end",onClick:function(){r(!0)},className:Object(ee.a)(i&&e.hide),children:Object(R.jsx)(rt.a,{})})]})}),Object(R.jsx)("main",{className:Object(ee.a)(e.content,Object($.a)({},e.contentShift,i)),children:Object(R.jsx)("div",{className:e.drawerHeader})}),Object(R.jsxs)(at.a,{className:e.drawer,variant:"persistent",anchor:"right",open:i,classes:{paper:e.drawerPaper},children:[Object(R.jsx)("div",{className:e.drawerHeader,children:Object(R.jsx)(oe.a,{onClick:function(){r(!1)},children:"rtl"===t.direction?Object(R.jsx)(ot.a,{}):Object(R.jsx)(dt.a,{})})}),Object(R.jsx)(ct.a,{}),Object(R.jsxs)(B.a,{children:[Object(R.jsx)(V.a,{component:s.b,to:"/events",children:"Events"}),Object(R.jsx)(V.a,{component:s.b,to:"/profile",children:"Profile"}),Object(R.jsx)(V.a,{component:s.b,to:"/recipe",children:"Recipes"}),Object(R.jsx)(V.a,{component:s.b,to:"/",children:"Log Out"})]}),Object(R.jsx)(ct.a,{})]})]})}var pt=n(268),ht=n(131),Ot=n.n(ht),xt=n.p+"static/media/popperIcon.0c749c3f.png",mt=Object(A.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},iconColor:{color:"#0e5d9e"},picSize:{width:"50px",height:"50px",marginLeft:"15px"},hostingColor:{color:"#ff0061"}}}));function ft(){var e=mt(),t=W(),n=Object(l.a)(t,2),a=n[0],c=n[1],i=Object(N.a)(a.user.hosting),r=Object(N.a)(a.user.pending),o=Object(N.a)(a.user.accepted),j=[];return i.forEach((function(e){j.push(Object(d.a)(Object(d.a)({},e),{},{status:"Hosting"}))})),r.forEach((function(e){j.push(Object(d.a)(Object(d.a)({},e),{},{status:"Pending"}))})),o.forEach((function(e){j.push(Object(d.a)(Object(d.a)({},e),{},{status:"Accepted"}))})),Object(R.jsxs)("div",{children:[Object(R.jsxs)(m.a,{variant:"h2",spacing:3,children:["Your Events",Object(R.jsx)("img",{className:e.picSize,src:xt})]}),Object(R.jsx)(B.a,{className:e.root,children:j.map((function(t){return Object(R.jsx)("div",{children:Object(R.jsxs)(V.a,{alignItems:"start",onClick:function(e){return c({type:E,payload:t._id})},component:s.b,to:"/event",button:"true",divider:"true",role:void 0,children:[Object(R.jsx)(g.a,{item:!0,xs:6,children:Object(R.jsx)(H.a,{id:"",primary:t.title,secondary:t.description})}),Object(R.jsx)(g.a,{item:!0,xs:6,children:Object(R.jsx)(H.a,{primary:t.status,secondary:t.eventDate})}),Object(R.jsx)(pt.a,{children:Object(R.jsx)(oe.a,{edge:"end","aria-label":"comments",children:Object(R.jsx)(Ot.a,{className:e.iconColor})})})]},t._id)})}))})]})}var vt=Object(A.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200},root:{margin:e.spacing(3),width:"25ch",marginTop:"75px"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},margin:{marginLeft:"20px"}}}));var gt=function(){var e,t=vt(),n=W(),a=Object(l.a)(n,2);return a[0],a[1],Object(R.jsxs)("div",{children:[Object(R.jsx)(bt,{}),Object(R.jsxs)(g.a,{container:!0,spacing:3,children:[Object(R.jsx)(g.a,{item:!0,xs:4}),Object(R.jsx)(g.a,{item:!0,xs:4,spacing:0,justify:"center",direction:"row",children:Object(R.jsx)(ft,{})}),Object(R.jsx)(g.a,{item:!0,xs:4})]}),Object(R.jsxs)(g.a,{container:!0,spacing:0,children:[Object(R.jsx)(g.a,{item:!0,xs:4}),Object(R.jsx)(g.a,{className:t.margin,item:!0,xs:3,children:Object(R.jsx)(v.a,(e={className:t.margin,component:s.b,to:"/make-event",id:"submitBtn",variant:"contained",color:"primary"},Object($.a)(e,"className","button-block"),Object($.a)(e,"children","Create Event"),e))}),Object(R.jsx)(g.a,{item:!0,xs:4})]})]})},yt=function(e){e.className;var t=c.a.useState(0),n=Object(l.a)(t,2),i=(n[0],n[1],W()),r=Object(l.a)(i,2),s=r[0],j=(r[1],Object(o.f)()),u={starter:"apps",preps:"sides","main course":"mains"};return Object(a.useEffect)((function(){}),[s]),Object(R.jsxs)(p.a,{className:pe,children:[Object(R.jsx)("h2",{children:" Viewing Recipe "}),Object(R.jsxs)(g.a,{children:[s.searchedRecipe?Object(R.jsx)(pe,Object(d.a)({},s.searchedRecipe)):Object(R.jsx)("h4",{children:"No recipe found..."}),Object(R.jsx)(g.a,{children:Object(R.jsx)(v.a,{variant:"contained",color:"primary",onClick:function(e){var t={uri:s.searchedRecipe.uri,label:s.searchedRecipe.label,dishType:s.searchedRecipe.dishType[0],image:s.searchedRecipe.image,ingredientLines:s.searchedRecipe.ingredientLines,healthLabels:s.searchedRecipe.healthLabels};u[t.dishType].toLowerCase();b.a.addRecipes(s.selectedEvent,u[t.dishType],t).then((function(e){j.push("/event")})).catch((function(e){console.log(e)}))},children:"Add to Event"})})]})]})},wt=(n(193),function(){var e=Object(a.useState)({}),t=Object(l.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)({show:!1,message:""}),r=Object(l.a)(i,2),s=r[0],j=r[1],u=Object(a.useState)(!0),p=Object(l.a)(u,2),h=p[0],O=p[1],x=W(),f=Object(l.a)(x,2),y=(f[0],f[1]),N=Object(o.f)(),C=function(e){var t=e.target.name;c(Object(d.a)(Object(d.a)({},n),{},Object($.a)({},t,e.target.value))),n.email&&n.password&&O(!1)},E=function(){var e=Object(S.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b.a.getUserInfo(t).then((function(e){var t=e.data.data[0];t=Object(d.a)(Object(d.a)({},t),{},{password:""}),y({type:"SET_USER",payload:t})}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(S.a)(w.a.mark((function e(t){var a,c,i,r,s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.email,c=n.password,i={email:a,password:c},e.prev=3,e.next=6,b.a.login(i);case 6:r=e.sent,(s=r.data._id)?E(s).then((function(e){N.push("/profile")})):j({show:!0,message:r.data.message}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(R.jsx)("div",{children:Object(R.jsx)(g.a,{container:!0,spacing:0,justify:"center",direction:"row",children:Object(R.jsx)(g.a,{item:!0,children:Object(R.jsx)(g.a,{container:!0,direction:"column",justify:"center",spacing:2,className:"login-form",children:Object(R.jsxs)(Ie.a,{variant:"elevation",elevation:2,className:"login-background",children:[Object(R.jsx)(g.a,{item:!0,children:Object(R.jsx)(m.a,{component:"h1",variant:"h5",children:"Login to your acccount"})}),s.show&&Object(R.jsx)(Ve.a,{variant:"outlined",severity:"warning",children:s.message}),Object(R.jsx)(g.a,{item:!0,children:Object(R.jsx)("form",{children:Object(R.jsxs)(g.a,{container:!0,direction:"column",spacing:2,children:[Object(R.jsx)(g.a,{item:!0,children:Object(R.jsx)(Ze.a,{id:"email",type:"email",placeholder:"Email",fullWidth:!0,name:"email",variant:"outlined",onChange:function(e){return C(e)}})}),Object(R.jsx)(g.a,{item:!0,children:Object(R.jsx)(Ze.a,{id:"password",type:"password",placeholder:"Password",fullWidth:!0,name:"password",variant:"outlined",onChange:function(e){return C(e)}})}),Object(R.jsx)(g.a,{item:!0,children:Object(R.jsx)(v.a,{id:"submitBtn",variant:"contained",color:"primary",type:"submit",className:"button-block",disabled:h,onClick:function(e){return k(e)},children:"Login"})})]})})})]})})})})})}),St=n(271),Nt=n(270),Ct=n(269),Et=n(132),kt=n.n(Et),Tt=n(90),It=n(277),Rt=Object(A.a)({avatar:{backgroundColor:Tt.a[100],color:Tt.a[600]}});function Dt(e){var t=Rt(),n=e.onClose,a=e.friends,i=e.eventInfo,r=e.setEventInfo,s=e.open,o=c.a.useState(a.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{invitedStatus:!1})}))),j=Object(l.a)(o,2),u=j[0],b=j[1],p=function(){r(Object(d.a)(Object(d.a)({},i),{},{pending:u.filter((function(e){return e.invitedStatus}))})),n()};return Object(R.jsxs)(Ct.a,{onClose:p,"aria-labelledby":"simple-dialog-title",open:s,children:[Object(R.jsx)(Nt.a,{id:"simple-dialog-title",children:"Select Guests"}),Object(R.jsxs)(B.a,{children:[u.map((function(e,n){return Object(R.jsxs)(V.a,{button:!0,onClick:function(){return function(e,t){var n=Object(N.a)(u);n[t].invitedStatus=!n[t].invitedStatus,b(n)}(0,n)},children:[Object(R.jsx)(It.a,{checked:e.status,inputProps:{"aria-label":"primary checkbox"}}),Object(R.jsx)(St.a,{children:Object(R.jsx)(se.a,{className:t.avatar,children:Object(R.jsx)(M.a,{})})}),Object(R.jsx)(H.a,{primary:e.name.first+" "+e.name.last})]},e._id)})),Object(R.jsxs)(V.a,{autoFocus:!0,button:!0,onClick:function(){return p()},children:[Object(R.jsx)(St.a,{children:Object(R.jsx)(se.a,{children:Object(R.jsx)(kt.a,{})})}),Object(R.jsx)(H.a,{primary:"Save"})]})]})]})}function Lt(e){var t=e.friends,n=e.eventInfo,a=e.setEventInfo,i=c.a.useState(!1),r=Object(l.a)(i,2),s=r[0],o=r[1];return Object(R.jsxs)("div",{children:[Object(R.jsx)(v.a,{fullWidth:!0,variant:"outlined",color:"primary",onClick:function(){o(!0)},children:"Edit Guest List"}),Object(R.jsx)(Dt,{friends:t,eventInfo:n,setEventInfo:a,open:s,onClose:function(){o(!1)}})]})}var Ft=Object(A.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200}}})),_t=function(){Ft();var e=Object(a.useState)({title:"",description:"",eventDate:C("today"),startTime:C("start"),endTime:C("end"),pending:[]}),t=Object(l.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)({show:!1,message:""}),r=Object(l.a)(i,2),s=(r[0],r[1]),j=Object(a.useState)(!0),u=Object(l.a)(j,2),p=u[0],h=u[1],O=W(),x=Object(l.a)(O,2),f=x[0],y=x[1],N=Object(o.f)();function C(e){var t=new Date;switch(e){case"today":var n=String(t.getDate()).padStart(2,"0"),a=String(t.getMonth()+1).padStart(2,"0");return t.getFullYear()+"-"+a+"-"+n;case"start":return t.toLocaleTimeString("en-US",{hour12:!1}).slice(0,5);case"end":return t.setHours(t.getHours()+2),t.toLocaleTimeString("en-US",{hour12:!1}).slice(0,5)}}var E=function(e){var t=e.target.name;c(Object(d.a)(Object(d.a)({},n),{},Object($.a)({},t,e.target.value))),n.title&&n.description&&n.eventDate&&h(!1)},k=function(){var e=Object(S.a)(w.a.mark((function e(t){var a,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,console.log("In makeEvent, About to create a new event: ",n),e.next=5,b.a.addEvent(Object(d.a)(Object(d.a)({},n),{},{hosting:[f.user._id]}));case 5:if(a=e.sent,!(c=a.data.data._id)){e.next=13;break}return e.next=10,b.a.updateUserEvents(f.user._id,c).then((function(e){y({type:"SET_USER",payload:e.data.data})})).catch((function(e){console.log(e)}));case 10:N.push("/events"),e.next=14;break;case 13:s({show:!0,message:a.data.message});case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t){return e.apply(this,arguments)}}();return Object(R.jsx)("div",{children:Object(R.jsx)(g.a,{container:!0,spacing:0,justify:"center",direction:"row",children:Object(R.jsx)(g.a,{item:!0,children:Object(R.jsx)(g.a,{container:!0,direction:"column",justify:"center",spacing:2,className:"login-form",children:Object(R.jsxs)(Ie.a,{variant:"elevation",elevation:2,className:"login-background",children:[Object(R.jsx)(g.a,{item:!0,children:Object(R.jsx)(m.a,{component:"h1",variant:"h5",children:"Create Your Event!"})}),Object(R.jsx)(g.a,{item:!0,children:Object(R.jsx)("form",{children:Object(R.jsxs)(g.a,{container:!0,direction:"column",spacing:2,children:[Object(R.jsx)(g.a,{item:!0,children:Object(R.jsx)(Ze.a,{id:"title",type:"text",placeholder:"Event Title",fullWidth:!0,name:"title",variant:"outlined",onChange:function(e){return E(e)}})}),Object(R.jsx)(g.a,{item:!0,children:Object(R.jsx)(Ze.a,{id:"description",type:"text",placeholder:"Event Description",fullWidth:!0,name:"description",variant:"outlined",onChange:function(e){return E(e)}})}),Object(R.jsx)(g.a,{item:!0,children:Object(R.jsx)(Ze.a,{id:"eventDate",type:"date",defaultValue:n.eventDate,fullWidth:!0,name:"eventDate",variant:"outlined",onChange:function(e){return E(e)}})}),Object(R.jsx)(g.a,{item:!0,children:Object(R.jsx)(Ze.a,{id:"startTime",type:"time",fullWidth:!0,name:"startTime",variant:"outlined",defaultValue:n.startTime,InputLabelProps:{shrink:!0},inputProps:{step:300},onChange:function(e){return E(e)}})}),Object(R.jsx)(g.a,{item:!0,children:Object(R.jsx)(Ze.a,{id:"endTime",type:"time",fullWidth:!0,name:"endTime",variant:"outlined",defaultValue:n.endTime,InputLabelProps:{shrink:!0},inputProps:{step:300},onChange:function(e){return E(e)}})}),Object(R.jsx)(g.a,{item:!0,children:f.user.friends?Object(R.jsx)(Lt,{friends:f.user.friends,eventInfo:n,setEventInfo:c}):Object(R.jsx)(m.a,{children:"No friends found, add your friends in profile page"})}),Object(R.jsx)(g.a,{item:!0,children:Object(R.jsx)(v.a,{id:"submitBtn",variant:"contained",color:"primary",type:"submit",className:"button-block",disabled:p,onClick:function(e){return k(e)},children:"Create Event"})})]})})})]})})})})})};var Pt=function(){return Object(R.jsx)(s.a,{children:Object(R.jsxs)(U,{children:[Object(R.jsx)(bt,{}),Object(R.jsxs)(o.c,{children:[Object(R.jsx)(o.a,{exact:!0,path:"/create-user",component:$e}),Object(R.jsx)(o.a,{exact:!0,path:"/login",component:wt}),Object(R.jsx)(o.a,{exact:!0,path:"/make-event",component:_t}),Object(R.jsx)(o.a,{exact:!0,path:"/events",component:gt}),Object(R.jsx)(o.a,{exact:!0,path:"/event",component:Te}),Object(R.jsx)(o.a,{exact:!0,path:"/profile",component:Je}),Object(R.jsx)(o.a,{exact:!0,path:"/recipe",component:Ne}),Object(R.jsx)(o.a,{exact:!0,path:"/ViewSelectedRecipe",component:yt})]})]})})},Ut=n(272);r.a.render(Object(R.jsx)(c.a.StrictMode,{children:Object(R.jsx)(Ut.a,{theme:Q,children:Object(R.jsx)(Pt,{})})}),document.getElementById("root"))}},[[194,1,2]]]);
//# sourceMappingURL=main.ceec57cc.chunk.js.map