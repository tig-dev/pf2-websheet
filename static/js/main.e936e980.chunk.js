(this.webpackJsonppf2_sheet=this.webpackJsonppf2_sheet||[]).push([[0],{203:function(e,a,t){e.exports=t(461)},208:function(e,a,t){},214:function(e,a,t){},217:function(e,a,t){},426:function(e,a,t){},461:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(20),c=t.n(r),i=(t(208),t(209),t(56)),o=t.n(i),s=t(38),m=(t(212),t(77)),u=t.n(m),d=t(476),p=t(477),b=t(478),E=t(479),g=t(480),h=t(481),f=t(482),y=t(483),v=(t(214),t(120),t(68)),O=t.n(v),j=(t(52),t(34)),N=t.n(j),k=t(471),w=(t(217),t(8)),x=t(26),C=t.n(x),I=(t(218),t(199)),S=t.n(I),D=(t(100),t(93)),T=t.n(D),_=t(146),z=t.n(_),L=t(198),R=t(469),A=t(470),H=t(202);var P=function(e){var a=e.state,t=e.dispatch,r=Object(n.useState)(""),c=Object(s.a)(r,2),i=c[0],o=c[1],m=Object(n.useState)(!1),u=Object(s.a)(m,2),d=u[0],p=u[1],b=new FileReader;b.onloadend=function(){console.log("finished read!"),"string"===typeof b.result&&(o(b.result),p(!1))},Object(n.useEffect)((function(){a.character.portrait&&!i&&o(a.character.portrait)}),[a,i,o]),Object(n.useEffect)((function(){i&&i!==a.character.portrait&&(console.log("dispatching portrait!"),t({type:"PORTRAIT",payload:i}))}),[i,t,a.character.portrait]);var E=function(){var e=Object(L.a)(z.a.mark((function e(a){var t,n,l;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.url,!Object(w.isNil)(t)){e.next=5;break}return e.next=4,new Promise((function(e){var t=new FileReader;t.onloadend=function(){"string"===typeof t.result&&(console.log("resolving preview now!"),e(t.result))},Object(w.isNil)(a.originFileObj)||(console.log("starting preview read now!"),t.readAsDataURL(a.originFileObj))}));case 4:t=e.sent;case 5:t&&(console.log("setting up preview display!"),console.log({src:t}),(n=new Image).src=t,null===(l=window.open(t))||void 0===l||l.document.write(n.outerHTML));case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return l.a.createElement("div",{className:"character-portrait"},l.a.createElement(H.a,{rotate:!0},l.a.createElement(S.a,{name:"portrait",listType:"picture-card",className:i?"portrait-uploader uploaded":"portrait-uploader",showUploadList:!1,onChange:function(e){if("uploading"!==e.file.status){if("done"===e.file.status){var a=e.file.originFileObj;Object(w.isNil)(a)||(console.log("starting read now!"),b.readAsDataURL(a))}}else p(!0)},onPreview:E},i?l.a.createElement(T.a,{title:"Replace image?"},l.a.createElement("img",{src:i,alt:"Portrait for ".concat(a.character.name)})):l.a.createElement("div",{className:"portrait-prompt"},d?l.a.createElement(R.a,null):l.a.createElement(A.a,null),l.a.createElement("div",null,"Upload")))))};var U=function(e){var a=e.state,t=e.dispatch,n=a.character,r=n.ancestry,c=n.heritage,i=n.background,o=n.class,s=n.level,m=n.exp,u=n.hero_points,d=n.size,p=n.diety,b=n.alignment;return l.a.createElement("div",{className:"character-info"},l.a.createElement(P,{state:a,dispatch:t}),l.a.createElement(O.a,{className:"info-fields",bordered:!0,size:"small",column:2},l.a.createElement(C.a,{label:"Level"},s),l.a.createElement(C.a,{label:"Class"},o),l.a.createElement(C.a,{label:"Ancestry"},r),l.a.createElement(C.a,{label:"Heritage"},c),l.a.createElement(C.a,{label:"Background"},i),l.a.createElement(C.a,{label:"Deity"},p),l.a.createElement(C.a,{label:"Size"},Object(w.startCase)(d)),l.a.createElement(C.a,{label:"Exp"},m),l.a.createElement(C.a,{label:"Alignment"},b),l.a.createElement(C.a,{label:"Hero Points"},u)))},W=(t(312),t(76)),F=t.n(W);var B,J,G=function(e){var a=e.proficiency,t=e.disable,n=void 0===t||t,r=(e.setProf,a.name),c=a.training,i={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginRight:0,maxWidth:"25px",width:"25px",fontSize:"10px"};return l.a.createElement("div",{style:{marginRight:"10px",display:"flex",flexDirection:"column",alignItems:"center"}},l.a.createElement("div",{style:{paddingBottom:"3px",fontSize:"13px"}},Object(w.startCase)(r)),l.a.createElement(F.a.Group,{style:{display:"flex",flexDirection:"row",alignItems:"center"},name:r,value:c,size:"small"},l.a.createElement(F.a,{style:i,value:"U",disabled:n&&"U"!==c},"U"),l.a.createElement(F.a,{style:i,value:"T",disabled:n&&"T"!==c},"T"),l.a.createElement(F.a,{style:i,value:"E",disabled:n&&"E"!==c},"E"),l.a.createElement(F.a,{style:i,value:"M",disabled:n&&"M"!==c},"M"),l.a.createElement(F.a,{style:i,value:"L",disabled:n&&"L"!==c},"L")))},M=(t(131),t(53)),V=t.n(M),X=t(19);(J=B||(B={})).STR="strength",J.CON="constitution",J.DEX="dexterity",J.INT="intelligence",J.WIS="wisdom",J.CHA="charisma";var q={name:"",training:"U",ability:null,misc_bonus:0,armor_penalty:!1},Y={id:0,title:"",text:""},K={default:!1,character:{name:"",portrait:"",ancestry:"",heritage:"",class:"Commoner",background:"",diety:"",alignment:"N",size:"medium",traits:"",level:1,exp:0,hero_points:0,details:"",languages:"Common",weapon_training:[{name:"simple",training:"U"},{name:"martial",training:"U"},{name:"unarmed",training:"U"}],abilities:{strength:10,constitution:10,dexterity:10,intelligence:10,wisdom:10,charisma:10}},feats:{class:[],general:[],skill:[],ancestry:[],heritage:[],bonus:[]},skills:[Object(X.a)(Object(X.a)({},Object(w.cloneDeep)(q)),{},{name:"acrobatics",ability:B.DEX,armor_penalty:!0}),Object(X.a)(Object(X.a)({},Object(w.cloneDeep)(q)),{},{name:"arcana",ability:B.INT}),Object(X.a)(Object(X.a)({},Object(w.cloneDeep)(q)),{},{name:"athletics",ability:B.STR,armor_penalty:!0}),Object(X.a)(Object(X.a)({},Object(w.cloneDeep)(q)),{},{name:"crafting",ability:B.INT}),Object(X.a)(Object(X.a)({},Object(w.cloneDeep)(q)),{},{name:"deception",ability:B.CHA}),Object(X.a)(Object(X.a)({},Object(w.cloneDeep)(q)),{},{name:"diplomacy",ability:B.CHA}),Object(X.a)(Object(X.a)({},Object(w.cloneDeep)(q)),{},{name:"intimidation",ability:B.CHA}),Object(X.a)(Object(X.a)({},Object(w.cloneDeep)(q)),{},{name:"medicine",ability:B.WIS}),Object(X.a)(Object(X.a)({},Object(w.cloneDeep)(q)),{},{name:"nature",ability:B.WIS}),Object(X.a)(Object(X.a)({},Object(w.cloneDeep)(q)),{},{name:"occultism",ability:B.INT}),Object(X.a)(Object(X.a)({},Object(w.cloneDeep)(q)),{},{name:"performance",ability:B.CHA}),Object(X.a)(Object(X.a)({},Object(w.cloneDeep)(q)),{},{name:"religion",ability:B.WIS}),Object(X.a)(Object(X.a)({},Object(w.cloneDeep)(q)),{},{name:"society",ability:B.INT}),Object(X.a)(Object(X.a)({},Object(w.cloneDeep)(q)),{},{name:"stealth",ability:B.DEX,armor_penalty:!0}),Object(X.a)(Object(X.a)({},Object(w.cloneDeep)(q)),{},{name:"survival",ability:B.WIS}),Object(X.a)(Object(X.a)({},Object(w.cloneDeep)(q)),{},{name:"thievery",ability:B.DEX,armor_penalty:!0})],combat:{hp:{current:0,max:0,temp:0},armor:{ac_bonus:0,check_penalty:0,dex_cap:null,group:"none",misc_bonus:0,speed_penalty:0,training:"U",traits:[],type:"unarmored"},class_dc:null,perception:{ability:"WIS",training:"U",item_bonus:0,misc_bonus:0,senses:""},saves:{fortitude:{training:"U",itemBonus:0,miscBonus:0},reflex:{training:"U",itemBonus:0,miscBonus:0},will:{training:"U",itemBonus:0,miscBonus:0}},speed:{base:25,misc_bonus:0,types:""},attacks:{melee:[],ranged:[]}},spells:{cantrip_level:1,spell_training:"U",casting_ability:null,slots:[{level:"cantrip",max:0,unused:0},{level:1,max:0,unused:0},{level:2,max:0,unused:0},{level:3,max:0,unused:0},{level:4,max:0,unused:0},{level:5,max:0,unused:0},{level:6,max:0,unused:0},{level:7,max:0,unused:0},{level:8,max:0,unused:0},{level:9,max:0,unused:0},{level:10,max:0,unused:0}],spells:[]},inventory:{bulk:{current:0,encumbered:5,max:8},coin:{copper:0,silver:0,gold:15,platinum:0},worn:[],readied:[],other:[],containers:[]},notes:{general:Object(X.a)(Object(X.a)({},Object(w.cloneDeep)(Y)),{},{title:"General Notes",text:"Here are your general notes!"}),other:[]}},$=function(e){var a=Math.floor(e/2)-5;return a>=0?"+".concat(a):"-".concat(a)},Q=function(){var e=K;return Object(w.forEach)(Object(w.keys)(localStorage),(function(a){var t=JSON.parse(localStorage[a]);t.default&&(e=t)})),e},Z=function(e){var a=K;return Object(w.forEach)(Object(w.keys)(localStorage),(function(t){var n=JSON.parse(localStorage[t]);n.character.name===e&&(n.default=!0,a=n)})),a};var ee=function(e){var a=e.state,t=(e.dispatch,a.character),n=t.abilities,r=t.languages,c=t.details,i=t.weapon_training,o=t.traits,s=n.strength,m=n.dexterity,u=n.constitution,d=n.intelligence,p=n.wisdom,b=n.charisma;return l.a.createElement("div",{className:"character-details"},l.a.createElement(O.a,{className:"details-top",column:6,size:"small",bordered:!0,layout:"vertical"},l.a.createElement(C.a,{className:"details-score",label:"STR"},s),l.a.createElement(C.a,{className:"details-score",label:"DEX"},m),l.a.createElement(C.a,{className:"details-score",label:"CON"},u),l.a.createElement(C.a,{className:"details-score",label:"INT"},d),l.a.createElement(C.a,{className:"details-score",label:"WIS"},p),l.a.createElement(C.a,{className:"details-score",label:"CHA"},b),l.a.createElement(C.a,{className:"details-score-mod"},$(s)),l.a.createElement(C.a,{className:"details-score-mod"},$(m)),l.a.createElement(C.a,{className:"details-score-mod"},$(u)),l.a.createElement(C.a,{className:"details-score-mod"},$(d)),l.a.createElement(C.a,{className:"details-score-mod"},$(p)),l.a.createElement(C.a,{className:"details-score-mod"},$(b)),l.a.createElement(C.a,{label:"Languages",span:3},r),l.a.createElement(C.a,{label:"Traits",span:3},o),l.a.createElement(C.a,{label:"Weapon Proficiences",span:6},l.a.createElement("div",{className:"details-profs"},Object(w.map)(i,(function(e){return l.a.createElement(G,{proficiency:e,key:"prof-".concat(e.name)})}))))),l.a.createElement(O.a,{className:"details-bottom",column:1,size:"small",bordered:!0,layout:"vertical"},l.a.createElement(C.a,{label:"Background, Details, Notes"},c||"Write down some extra details about your character?")))},ae=(t(169),t(144)),te=t.n(ae),ne=(t(320),t(55)),le=t.n(ne),re=(t(170),t(88)),ce=t.n(re),ie=t(119),oe=t(69),se=(t(322),t(29)),me=t.n(se),ue=(t(133),t(44)),de=t.n(ue),pe=(t(171),t(70)),be=t.n(pe),Ee=be.a.Option,ge=de.a.TextArea;var he=function(e){var a=e.state,t=e.dispatch,r=e.setEditing,c=me.a.useForm(),i=Object(s.a)(c,1)[0],o=a.character,m=Object(n.useCallback)((function(){return l.a.createElement(be.a,null,l.a.createElement(Ee,{value:"U"},"Untrained"),l.a.createElement(Ee,{value:"T"},"Trained"),l.a.createElement(Ee,{value:"E"},"Expert"),l.a.createElement(Ee,{value:"M"},"Master"),l.a.createElement(Ee,{value:"L"},"Legendary"))}),[]),u=w.assignIn.apply(void 0,[Object(w.omit)(o,"weapon_training")].concat(Object(oe.a)(Object(w.map)(o.weapon_training,(function(e){return Object(ie.a)({},"weapon_training_".concat(e.name),e.training)})))));return console.log(window.innerHeight),l.a.createElement(me.a,{className:"character-form",form:i,initialValues:u,layout:"vertical",size:window.innerHeight>800?"middle":"small",wrapperCol:{offset:1},colon:!0},l.a.createElement(te.a,{gutter:15},l.a.createElement(ce.a,{span:6},l.a.createElement(me.a.Item,{key:"form-name",label:"Name",name:"name",rules:[{required:!0,message:"Character needs a name to save properly."}]},l.a.createElement(de.a,{placeholder:"Please enter a name."})),l.a.createElement(me.a.Item,{key:"form-ancestry",label:"Ancestry",name:"ancestry"},l.a.createElement(de.a,null)),l.a.createElement(me.a.Item,{key:"form-heritage",label:"Heritage",name:"heritage"},l.a.createElement(de.a,null)),l.a.createElement(me.a.Item,{key:"form-background",label:"Background",name:"background"},l.a.createElement(de.a,null)),l.a.createElement(me.a.Item,{key:"form-size",label:"Size",name:"size"},l.a.createElement(be.a,null,l.a.createElement(Ee,{value:"small"},"Small"),l.a.createElement(Ee,{value:"medium"},"Medium"),l.a.createElement(Ee,{value:"large"},"Large"))),l.a.createElement(me.a.Item,{key:"form-languages",label:"Languages",name:"languages"},l.a.createElement(de.a,null)),l.a.createElement(me.a.Item,{key:"form-diety",label:"Diety",name:"diety"},l.a.createElement(de.a,null)),l.a.createElement(me.a.Item,{key:"form-alignment",label:"Alignment",name:"alignment"},l.a.createElement(be.a,null,l.a.createElement(Ee,{value:"LG"},"Lawful Good"),l.a.createElement(Ee,{value:"NG"},"Neutral Good"),l.a.createElement(Ee,{value:"CG"},"Chaotic Good"),l.a.createElement(Ee,{value:"LN"},"Lawful Neutral"),l.a.createElement(Ee,{value:"N"},"True Neutral"),l.a.createElement(Ee,{value:"CN"},"Chaotic Neutral"),l.a.createElement(Ee,{value:"LE"},"Lawful Evil"),l.a.createElement(Ee,{value:"NE"},"Neutral Evil"),l.a.createElement(Ee,{value:"CE"},"Chaotic Evil")))),l.a.createElement(ce.a,{span:6},l.a.createElement(me.a.Item,{key:"form-class",label:"Class",name:"class"},l.a.createElement(de.a,null)),l.a.createElement(me.a.Item,{key:"form-level",label:"Level",name:"level"},l.a.createElement(le.a,{min:1,max:20})),l.a.createElement(me.a.Item,{key:"form-exp",label:"Experience",name:"exp"},l.a.createElement(le.a,{min:0,max:999})),l.a.createElement(me.a.Item,{key:"form-hero-points",label:"Hero Points",name:"hero_points"},l.a.createElement(le.a,{min:0,max:3})),l.a.createElement(me.a.Item,{key:"form-traits",label:"Traits",name:"traits"},l.a.createElement(de.a,null)),l.a.createElement(de.a.Group,{className:"character-form-weapons"},l.a.createElement("span",{id:"form-weapons-head"},"Weapon Proficiences"),Object(w.map)(o.weapon_training,(function(e){return l.a.createElement(me.a.Item,{key:"form-".concat(e.name),label:Object(w.startCase)(e.name),name:"weapon_training_".concat(e.name)},m())})))),l.a.createElement(ce.a,{span:4},l.a.createElement(me.a.Item,{key:"form-strength",label:"Strength",name:["abilities","strength"]},l.a.createElement(le.a,{min:6,max:30})),l.a.createElement(me.a.Item,{key:"form-dexterity",label:"Dexterity",name:["abilities","dexterity"]},l.a.createElement(le.a,{min:6,max:30})),l.a.createElement(me.a.Item,{key:"form-constitution",label:"Constitution",name:["abilities","constitution"]},l.a.createElement(le.a,{min:6,max:30})),l.a.createElement(me.a.Item,{key:"form-intelligence",label:"Intelligence",name:["abilities","intelligence"]},l.a.createElement(le.a,{min:6,max:30})),l.a.createElement(me.a.Item,{key:"form-wisdom",label:"Wisdom",name:["abilities","wisdom"]},l.a.createElement(le.a,{min:6,max:30})),l.a.createElement(me.a.Item,{key:"form-charisma",label:"Charisma",name:["abilities","charisma"]},l.a.createElement(le.a,{min:6,max:30}))),l.a.createElement(ce.a,{span:8},l.a.createElement(me.a.Item,{key:"form-details",label:"Details",name:"details"},l.a.createElement(ge,{autoSize:window.innerHeight>800?{minRows:25,maxRows:25}:{minRows:15,maxRows:15}})))),l.a.createElement("div",{className:"character-form-btn"},l.a.createElement(N.a,{className:"green-button",size:window.innerHeight>800?"large":"middle",type:"primary",onClick:function(){var e=i.getFieldsValue(),a=[{name:"simple",training:e.weapon_training_simple},{name:"martial",training:e.weapon_training_martial},{name:"unarmed",training:e.weapon_training_unarmed}];(e=Object(w.omit)(e,"weapon_training_simple","weapon_training_martial","weapon_training_unarmed","weapon_training_other")).weapon_training=a,t({type:"CHARACTER",payload:Object(w.assignIn)(o,e)}),r(!1)}},"Save")))};var fe=function(e){var a=e.state,t=e.dispatch,r=Object(n.useState)(!1),c=Object(s.a)(r,2),i=c[0],o=c[1];return i?l.a.createElement("div",{className:"character-content"},l.a.createElement(O.a,{className:"character-title",title:"Edit Character Information"}),l.a.createElement(he,{setEditing:o,state:a,dispatch:t})):l.a.createElement("div",{className:"character-content"},l.a.createElement(O.a,{className:"character-title",title:a.character.name,extra:l.a.createElement(N.a,{type:"primary",className:"blue-button",icon:l.a.createElement(k.a,null),onClick:function(){return o(!0)}})}),l.a.createElement(U,{state:a,dispatch:t}),l.a.createElement(ee,{state:a,dispatch:t}))};var ye=function(){return l.a.createElement("div",null,"This is Combat Content")};var ve=function(){return l.a.createElement("div",null,"This is Feats Content")};var Oe=function(){return l.a.createElement("div",null,"This is Inventory Content")},je=(t(426),t(190),t(98)),Ne=t.n(je),ke=t(472),we=de.a.TextArea,xe=function(e){var a=e.state,t=e.dispatch,r=Object(n.useState)(!1),c=Object(s.a)(r,2),i=c[0],o=c[1],m=Object(w.debounce)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=Object(w.cloneDeep)(a.notes.general);Object(w.isNull)(e)||(n.text=e),t({type:"NOTES",payload:{general:!0,value:n}})}),300);return l.a.createElement("div",{className:"general-notes"},l.a.createElement(Ne.a,{title:l.a.createElement("div",{className:"card-header"},a.notes.general.title,l.a.createElement(N.a,{type:"primary",className:i?"green-button":"blue-button",icon:i?l.a.createElement(ke.a,null):l.a.createElement(k.a,null),onClick:function(){i?(m.flush(),o(!1)):o(!0)}}))},i?l.a.createElement(we,{className:"general-notes-edit",defaultValue:a.notes.general.text,autoSize:{minRows:10,maxRows:35},onChange:function(e){e.persist(),m(e.target.value)}}):l.a.createElement("p",{className:"note-body"},a.notes.general.text)))},Ce=t(473),Ie=t(474),Se=de.a.TextArea,De=function(e){var a=e.state,t=e.dispatch,r=Object(n.useState)(0),c=Object(s.a)(r,2),i=c[0],o=c[1];Object(n.useEffect)((function(){0===a.notes.other.length&&m()}),[a]);var m=function(){var e=Object(oe.a)(a.notes.other),n=Object(X.a)(Object(X.a)({},Object(w.cloneDeep)(Y)),{},{id:e.length+1,title:"New Note",text:"Write here!"});e.push(n),t({type:"NOTES",payload:{general:!1,value:e}})},u=Object(w.debounce)((function(e,n){var l=Object(oe.a)(a.notes.other),r=Object(w.findIndex)(l,["id",e]),c=Object(w.cloneDeep)(l[r]);c.title=n,l[r]=c,t({type:"NOTES",payload:{general:!1,value:l}})}),300),d=Object(w.debounce)((function(e,n){var l=Object(oe.a)(a.notes.other),r=Object(w.findIndex)(l,["id",e]),c=Object(w.cloneDeep)(l[r]);c.text=n,l[r]=c,t({type:"NOTES",payload:{general:!1,value:l}})}),300),p=function(e){0!==i?(u.flush(),d.flush(),o(0)):o(e)};return l.a.createElement("div",{className:"other-notes"},l.a.createElement(Ne.a,{title:l.a.createElement("div",{className:"card-header"},"Other Notes",l.a.createElement(N.a,{type:"primary",className:"green-button",icon:l.a.createElement(Ce.a,null),onClick:m}))},Object(w.map)(a.notes.other,(function(e){return l.a.createElement(Ne.a,{className:"other-note-card",key:"other-note-".concat(e.id),title:l.a.createElement("div",{className:"card-header"},i===e.id?l.a.createElement(de.a,{className:"other-notes-edit-title",defaultValue:e.title,onPressEnter:function(){return p(e.id)},onChange:function(a){a.persist(),u(e.id,a.target.value)}}):e.title,l.a.createElement("div",{className:"card-header-actions"},l.a.createElement(N.a,{type:"primary",className:i===e.id?"green-button":"blue-button",icon:i===e.id?l.a.createElement(ke.a,null):l.a.createElement(k.a,null),onClick:function(){return p(e.id)}}),l.a.createElement(N.a,{type:"primary",className:"red-button",icon:l.a.createElement(Ie.a,null),onClick:function(){return function(e){t({type:"NOTES",payload:{general:!1,value:Object(w.without)(a.notes.other,e)}})}(e)}})))},i===e.id?l.a.createElement(Se,{className:"other-notes-edit-text",defaultValue:e.text,autoSize:{minRows:4},onChange:function(a){a.persist(),d(e.id,a.target.value)}}):l.a.createElement("p",null,e.text))}))))},Te=function(e){var a=e.state,t=e.dispatch;return l.a.createElement("div",{className:"notes-content"},l.a.createElement(xe,{state:a,dispatch:t}),l.a.createElement(De,{state:a,dispatch:t}))};var _e=function(){return l.a.createElement("div",null,"This is References Content")};var ze=function(){return l.a.createElement("div",null,"This is Skills Content")};var Le=function(){return l.a.createElement("div",null,"This is Spells Content")};var Re=function(){return l.a.createElement("div",null,"This is CharHeader")},Ae=(t(191),t(99)),He=t.n(Ae),Pe=t(475),Ue=He.a.confirm,We=function(e){var a=e.state,t=e.dispatch;return l.a.createElement(N.a,{type:"primary",className:"red-button",size:"small",onClick:function(){Object(w.isEqual)(a,K)?V.a.success("Created new character!"):Ue({title:"Do you want to override the current character?",icon:l.a.createElement(Pe.a,null),content:"You will lose any unsaved changes.",okText:"Override",onOk:function(){t({type:"NEW"}),V.a.success("Created new character!")}})}},"New")},Fe=(t(445),t(201)),Be=t.n(Fe),Je=be.a.Option,Ge=He.a.confirm,Me=function(e){var a,t=e.state,r=e.dispatch,c=Object(n.useState)(!1),i=Object(s.a)(c,2),o=i[0],m=i[1],u=Object(n.useState)(""),d=Object(s.a)(u,2),p=d[0],b=d[1],E=Object(n.useState)(!1),g=Object(s.a)(E,2),h=g[0],f=g[1],y=function(){p?(h&&r({type:"LOAD",payload:Z(p)}),r({type:"LOAD",payload:JSON.parse(localStorage[p])})):V.a.error("No character selected!"),b("")};return l.a.createElement("div",null,l.a.createElement(N.a,{type:"primary",className:"blue-button",size:"small",onClick:function(){0===Object(w.keys)(localStorage).length?V.a.info("No characters to load."):m(!0)}},"Load"),l.a.createElement(He.a,{title:"Load Character",visible:o,closable:!1,onOk:function(){m(!1),Object(w.isEqual)(t,K)?y():Ge({title:"Do you want to override the current character?",icon:l.a.createElement(Pe.a,null),content:"You will lose any unsaved changes.",okText:"Override",onOk:function(){y()}})},okText:"Load",onCancel:function(){return m(!1)}},l.a.createElement("div",{className:"load-modal"},l.a.createElement(be.a,{placeholder:"Select a character",onChange:function(e){return b(e)}},Object(w.map)(Object(w.keys)(localStorage),(function(e){return l.a.createElement(Je,{key:e,value:e},e)}))),l.a.createElement(Be.a,{onChange:function(e){return f(e.target.checked)},disabled:!p||(a=p,!!JSON.parse(localStorage[a]).default)},"Make this character the default?"))))},Ve=function(e){var a=e.state;return l.a.createElement(N.a,{type:"primary",className:"green-button",size:"small",onClick:function(){return function(e){localStorage[e.character.name]=JSON.stringify(Object(w.cloneDeep)(e)),V.a.success("Saved character!")}(a)}},"Save")},Xe=function(e,a){var t=Object(w.cloneDeep)(e);switch(a.type){case"NEW":t=Object(w.cloneDeep)(K);break;case"LOAD":t=Object(w.assignIn)(t,a.payload);break;case"CHARACTER":var n=Object(w.cloneDeep)(t.character);n=Object(w.assignIn)(n,a.payload),t=Object(w.assignIn)(t,{character:n});break;case"PORTRAIT":var l=Object(w.cloneDeep)(t.character);l=Object(w.assignIn)(l,{portrait:a.payload}),t=Object(w.assignIn)(t,{character:l});break;case"NOTES":if(a.payload.general){var r=Object(w.cloneDeep)(t.notes);r=Object(w.assignIn)(r,{general:Object(w.cloneDeep)(a.payload.value)}),t=Object(w.assignIn)(t,{notes:r})}else{var c=Object(w.cloneDeep)(t.notes);c=Object(w.assignIn)(c,{other:Object(oe.a)(a.payload.value)}),t=Object(w.assignIn)(t,{notes:c})}break;default:t=e}return function(e){sessionStorage.lastChar=JSON.stringify(Object(w.cloneDeep)(e))}(t),t},qe=u.a.Header,Ye=u.a.Content,Ke=u.a.Sider,$e=u.a.Footer,Qe=function(){var e=Object(n.useState)("character"),a=Object(s.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(window.innerHeight<800),i=Object(s.a)(c,2),m=i[0],v=i[1],O=Object(n.useReducer)(Xe,K),j=Object(s.a)(O,2),N=j[0],k=j[1];Object(n.useEffect)((function(){Object(w.keys)(sessionStorage).includes("lastChar")?k({type:"LOAD",payload:JSON.parse(sessionStorage.lastChar)}):function(){var e=!1;return Object(w.forEach)(Object(w.keys)(localStorage),(function(a){if(JSON.parse(localStorage[a]).default)return e=!0,!1})),e}()&&k({type:"LOAD",payload:Q()})}),[]);var x=l.a.createElement("div",null,"This is no Content");switch(t){case"character":x=l.a.createElement(fe,{state:N,dispatch:k});break;case"feats":x=l.a.createElement(ve,null);break;case"skills":x=l.a.createElement(ze,null);break;case"combat":x=l.a.createElement(ye,null);break;case"spells":x=l.a.createElement(Le,null);break;case"inventory":x=l.a.createElement(Oe,null);break;case"notes":x=l.a.createElement(Te,{state:N,dispatch:k});break;case"reference":x=l.a.createElement(_e,null)}return l.a.createElement("div",{className:"app"},l.a.createElement(u.a,null,l.a.createElement(Ke,{className:"app-sider",collapsible:!0,collapsed:m,onCollapse:function(e){return v(e)}},l.a.createElement("div",{className:"app-header"},l.a.createElement("img",{className:"logo",src:"/pf2-websheet/logo192.png",alt:"Website icon depicting a gold gear on a dark red square with rounded corners"}),!m&&l.a.createElement(qe,null,"PF2 WebSheet")),l.a.createElement("div",{className:m?"button-group col":"button-group row"},l.a.createElement(We,{state:N,dispatch:k}),l.a.createElement(Me,{state:N,dispatch:k}),l.a.createElement(Ve,{state:N})),l.a.createElement(o.a,{theme:"dark",mode:"inline",onSelect:function(e){["new-action","load-action","save-action"].includes(e.key)||r(e.key)},defaultSelectedKeys:["character"]},l.a.createElement(o.a.Item,{key:"character",className:"red",icon:l.a.createElement(d.a,null)},"Character"),l.a.createElement(o.a.Item,{key:"feats",className:"volcano",icon:l.a.createElement(p.a,null)},"Feats"),l.a.createElement(o.a.Item,{key:"skills",className:"orange",icon:l.a.createElement(b.a,null)},"Skills"),l.a.createElement(o.a.Item,{key:"combat",className:"green",icon:l.a.createElement(E.a,null)},"Combat"),l.a.createElement(o.a.Item,{key:"spells",className:"blue",icon:l.a.createElement(g.a,null)},"Spells"),l.a.createElement(o.a.Item,{key:"inventory",className:"geekblue",icon:l.a.createElement(h.a,null)},"Inventory"),l.a.createElement(o.a.Item,{key:"notes",className:"purple",icon:l.a.createElement(f.a,null)},"Notes"),l.a.createElement(o.a.Item,{key:"reference",className:"magenta",icon:l.a.createElement(y.a,null)},"Reference"))),l.a.createElement(u.a,{className:"app-layout"},"character"!==t&&l.a.createElement(Re,null),l.a.createElement(Ye,{className:"app-main"},x),l.a.createElement($e,{className:"app-footer"},"This web-app uses trademarks and/or copyrights owned by Paizo Inc., which are used under Paizo's Community Use Policy. We are expressly prohibited from charging you to use or access this content. This web-app is not published, endorsed, or specifically approved by Paizo Inc. For more information about Paizo's Community Use Policy, please visit\xa0",l.a.createElement("a",{href:"https://paizo.com/communityuse"},"paizo.com/communityuse"),". For more information about Paizo Inc. and Paizo products, please visit ",l.a.createElement("a",{href:"https://paizo.com/"},"paizo.com"),"."))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(Qe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[203,1,2]]]);
//# sourceMappingURL=main.e936e980.chunk.js.map