"use strict";(self["webpackChunkchipbook"]=self["webpackChunkchipbook"]||[]).push([[44],{6044:function(e,a,l){l.r(a),l.d(a,{default:function(){return N}});var t=l(6768),n=l(4232),r=l(554),i=l(2729),s=l(1606),d=l(697),o=l(3745),p=l(61),u=l(5035),c=l(6935),y=l(2067),v=l(4587),m=l(9094),b=l(1247),f=l(7861),g=l(4600);const k=(0,v.j)({...(0,u.V)(),...(0,m.cJ)((0,p.O)(),["inline"])},"VCheckbox"),h=(0,b.RW)()({name:"VCheckbox",inheritAttrs:!1,props:k(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,a){let{attrs:l,slots:n}=a;const r=(0,y.q)(e,"modelValue"),{isFocused:i,focus:s,blur:d}=(0,c.i)(e),o=(0,f.v6)(),v=(0,t.EW)((()=>e.id||`checkbox-${o}`));return(0,g.C)((()=>{const[a,o]=(0,m.ph)(l),c=u.Z.filterProps(e),y=p.M.filterProps(e);return(0,t.bF)(u.Z,(0,t.v6)({class:["v-checkbox",e.class]},a,c,{modelValue:r.value,"onUpdate:modelValue":e=>r.value=e,id:v.value,focused:i.value,style:e.style}),{...n,default:e=>{let{id:a,messagesId:l,isDisabled:i,isReadonly:u,isValid:c}=e;return(0,t.bF)(p.M,(0,t.v6)(y,{id:a.value,"aria-describedby":l.value,disabled:i.value,readonly:u.value},o,{error:!1===c.value,modelValue:r.value,"onUpdate:modelValue":e=>r.value=e,onFocus:s,onBlur:d}),n)}})})),{}}});var _=l(6329),F=l(1772),C=l(9669),V=l(5728);const D={class:"headline"};function I(e,a,l,p,u,c){return(0,t.uX)(),(0,t.CE)("div",null,[(0,t.bF)(r.D,{color:"primary",onClick:e.openDialog},{default:(0,t.k6)((()=>[(0,t.eW)("添加玩家")])),_:1},8,["onClick"]),(0,t.bF)(_.Py,{headers:e.headers,items:e.players,"items-per-page":50},{"item.actions":(0,t.k6)((({item:a})=>[(0,t.bF)(r.D,{color:"primary",icon:"",onClick:l=>e.editPlayer(a)},{default:(0,t.k6)((()=>[(0,t.bF)(C.w,null,{default:(0,t.k6)((()=>[(0,t.eW)("mdi-pencil")])),_:1})])),_:2},1032,["onClick"]),(0,t.bF)(r.D,{color:"error",icon:"",onClick:l=>e.confirmDeletePlayer(a.id)},{default:(0,t.k6)((()=>[(0,t.bF)(C.w,null,{default:(0,t.k6)((()=>[(0,t.eW)("mdi-delete")])),_:1})])),_:2},1032,["onClick"])])),_:1},8,["headers","items"]),(0,t.bF)(F.p,{modelValue:e.dialog,"onUpdate:modelValue":a[3]||(a[3]=a=>e.dialog=a),"max-width":"500px"},{default:(0,t.k6)((()=>[(0,t.bF)(i.J,null,{default:(0,t.k6)((()=>[(0,t.bF)(s.r,null,{default:(0,t.k6)((()=>[(0,t.Lk)("span",D,(0,n.v_)(e.editingPlayer?"编辑玩家":"添加玩家"),1)])),_:1}),(0,t.bF)(d.O,null,{default:(0,t.k6)((()=>[(0,t.bF)(V.W,{modelValue:e.player.player_name,"onUpdate:modelValue":a[0]||(a[0]=a=>e.player.player_name=a),label:"玩家固定名称",readonly:e.editingPlayer,color:e.editingPlayer?"grey":"primary",dense:e.editingPlayer,class:"readonly-text-field",required:""},null,8,["modelValue","readonly","color","dense"]),e.editingPlayer?(0,t.Q3)("",!0):((0,t.uX)(),(0,t.Wv)(h,{key:0,modelValue:e.sameName,"onUpdate:modelValue":a[1]||(a[1]=a=>e.sameName=a),label:"玩家显示名称与玩家固定名称相同",onChange:e.syncDisplayName},null,8,["modelValue","onChange"])),!e.sameName||e.editingPlayer?((0,t.uX)(),(0,t.Wv)(V.W,{key:1,modelValue:e.player.player_display_name,"onUpdate:modelValue":a[2]||(a[2]=a=>e.player.player_display_name=a),label:"玩家显示名称",required:""},null,8,["modelValue"])):(0,t.Q3)("",!0)])),_:1}),(0,t.bF)(o.S,null,{default:(0,t.k6)((()=>[(0,t.bF)(r.D,{color:"blue darken-1",onClick:e.savePlayer},{default:(0,t.k6)((()=>[(0,t.eW)("保存")])),_:1},8,["onClick"]),(0,t.bF)(r.D,{color:"grey darken-1",onClick:e.closeDialog},{default:(0,t.k6)((()=>[(0,t.eW)("取消")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.bF)(F.p,{modelValue:e.deleteDialog,"onUpdate:modelValue":a[5]||(a[5]=a=>e.deleteDialog=a),"max-width":"400px"},{default:(0,t.k6)((()=>[(0,t.bF)(i.J,null,{default:(0,t.k6)((()=>[(0,t.bF)(s.r,{class:"headline"},{default:(0,t.k6)((()=>[(0,t.eW)("确认删除")])),_:1}),(0,t.bF)(d.O,null,{default:(0,t.k6)((()=>[(0,t.eW)("您确定要删除这个玩家吗？此操作无法撤销。")])),_:1}),(0,t.bF)(o.S,null,{default:(0,t.k6)((()=>[(0,t.bF)(r.D,{color:"red darken-1",onClick:a[4]||(a[4]=a=>e.deletePlayer(e.confirmedDeleteId))},{default:(0,t.k6)((()=>[(0,t.eW)("确认")])),_:1}),(0,t.bF)(r.D,{color:"grey darken-1",onClick:e.closeDeleteDialog},{default:(0,t.k6)((()=>[(0,t.eW)("取消")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}var P=l(7617),S=l(4889);const A=S.A;var x=(0,t.pM)({name:"PlayerPage",data(){return{headers:[{title:"ID",key:"id"},{title:"玩家固定名称",key:"player_name"},{title:"玩家显示名称",key:"player_display_name"},{title:"操作",value:"actions",sortable:!1}],players:[],dialog:!1,deleteDialog:!1,editingPlayer:!1,player:{player_name:"",player_display_name:""},sameName:!0,confirmedDeleteId:null}},methods:{openDialog(){this.dialog=!0,this.editingPlayer=!1,this.player={player_name:"",player_display_name:""},this.sameName=!0},closeDialog(){this.dialog=!1},confirmDeletePlayer(e){this.deleteDialog=!0,this.confirmedDeleteId=e},closeDeleteDialog(){this.deleteDialog=!1,this.confirmedDeleteId=null},syncDisplayName(){this.sameName&&(this.player.player_display_name=this.player.player_name)},async fetchPlayers(){const e=(0,P.rJ)(A,"players"),a=await(0,P.GG)(e);this.players=a.docs.map((e=>({id:e.id,...e.data()})))},editPlayer(e){this.dialog=!0,this.editingPlayer=!0,this.player={...e}},async deletePlayer(e){const a=(0,P.H9)(A,"players",e);await(0,P.kd)(a),this.closeDeleteDialog(),this.fetchPlayers()},async savePlayer(){const e=(0,P.rJ)(A,"players");if(this.editingPlayer){const e=(0,P.H9)(A,"players",this.player.id);await(0,P.mZ)(e,{player_display_name:this.player.player_display_name})}else{this.sameName&&(this.player.player_display_name=this.player.player_name);const a={player_name:this.player.player_name,player_display_name:this.player.player_display_name};await(0,P.gS)(e,a)}this.closeDialog(),this.fetchPlayers()}},created(){this.fetchPlayers()}}),W=l(1241);const E=(0,W.A)(x,[["render",I]]);var N=E},2729:function(e,a,l){l.d(a,{J:function(){return w}});var t=l(6768),n=l(3745),r=l(9262),i=l(4663),s=l(4587),d=l(1247),o=l(4600);const p=(0,s.j)({opacity:[Number,String],...(0,r.u)(),...(0,i.X)()},"VCardSubtitle"),u=(0,d.RW)()({name:"VCardSubtitle",props:p(),setup(e,a){let{slots:l}=a;return(0,o.C)((()=>(0,t.bF)(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},l))),{}}});var c=l(1606),y=l(3416),v=l(7852),m=l(9669),b=l(2191),f=l(4581);const g=(0,s.j)({appendAvatar:String,appendIcon:f.TX,prependAvatar:String,prependIcon:f.TX,subtitle:[String,Number],title:[String,Number],...(0,r.u)(),...(0,b.r)()},"VCardItem"),k=(0,d.RW)()({name:"VCardItem",props:g(),setup(e,a){let{slots:l}=a;return(0,o.C)((()=>{const a=!(!e.prependAvatar&&!e.prependIcon),n=!(!a&&!l.prepend),r=!(!e.appendAvatar&&!e.appendIcon),i=!(!r&&!l.append),s=!(null==e.title&&!l.title),d=!(null==e.subtitle&&!l.subtitle);return(0,t.bF)("div",{class:["v-card-item",e.class],style:e.style},[n&&(0,t.bF)("div",{key:"prepend",class:"v-card-item__prepend"},[l.prepend?(0,t.bF)(v.K,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},l.prepend):(0,t.bF)(t.FK,null,[e.prependAvatar&&(0,t.bF)(y.y,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&(0,t.bF)(m.w,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),(0,t.bF)("div",{class:"v-card-item__content"},[s&&(0,t.bF)(c.r,{key:"title"},{default:()=>[l.title?.()??e.title]}),d&&(0,t.bF)(u,{key:"subtitle"},{default:()=>[l.subtitle?.()??e.subtitle]}),l.default?.()]),i&&(0,t.bF)("div",{key:"append",class:"v-card-item__append"},[l.append?(0,t.bF)(v.K,{key:"append-defaults",disabled:!r,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},l.append):(0,t.bF)(t.FK,null,[e.appendIcon&&(0,t.bF)(m.w,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&(0,t.bF)(y.y,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])})),{}}});var h=l(697),_=l(5126),F=l(9923),C=l(2542),V=l(7018),D=l(773),I=l(9788),P=l(8184),S=l(3240),A=l(6314),x=l(7664),W=l(2428),E=l(759);const N=(0,s.j)({appendAvatar:String,appendIcon:f.TX,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:f.TX,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...(0,F.r)(),...(0,r.u)(),...(0,b.r)(),...(0,C.X)(),...(0,V.s)(),...(0,D.gi)(),...(0,I.M)(),...(0,P.S)(),...(0,S.S)(),...(0,A.WC)(),...(0,i.X)(),...(0,x.yx)(),...(0,W.gI)({variant:"elevated"})},"VCard"),w=(0,d.RW)()({name:"VCard",directives:{Ripple:E.n},props:N(),setup(e,a){let{attrs:l,slots:r}=a;const{themeClasses:i}=(0,x.NX)(e),{borderClasses:s}=(0,F.M)(e),{colorClasses:d,colorStyles:p,variantClasses:u}=(0,W.rn)(e),{densityClasses:c}=(0,b.Q)(e),{dimensionStyles:y}=(0,C.S)(e),{elevationClasses:m}=(0,V.j)(e),{loaderClasses:f}=(0,D.pn)(e),{locationStyles:g}=(0,I.z)(e),{positionClasses:E}=(0,P.J)(e),{roundedClasses:N}=(0,S.v)(e),w=(0,A.iE)(e,l),B=(0,t.EW)((()=>!1!==e.link&&w.isLink.value)),X=(0,t.EW)((()=>!e.disabled&&!1!==e.link&&(e.link||w.isClickable.value)));return(0,o.C)((()=>{const a=B.value?"a":e.tag,l=!(!r.title&&null==e.title),o=!(!r.subtitle&&null==e.subtitle),b=l||o,F=!!(r.append||e.appendAvatar||e.appendIcon),C=!!(r.prepend||e.prependAvatar||e.prependIcon),V=!(!r.image&&!e.image),I=b||C||F,P=!(!r.text&&null==e.text);return(0,t.bo)((0,t.bF)(a,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":X.value},i.value,s.value,d.value,c.value,m.value,f.value,E.value,N.value,u.value,e.class],style:[p.value,y.value,g.value,e.style],href:w.href.value,onClick:X.value&&w.navigate,tabindex:e.disabled?-1:void 0},{default:()=>[V&&(0,t.bF)("div",{key:"image",class:"v-card__image"},[r.image?(0,t.bF)(v.K,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},r.image):(0,t.bF)(_.y,{key:"image-img",cover:!0,src:e.image},null)]),(0,t.bF)(D.E2,{name:"v-card",active:!!e.loading,color:"boolean"===typeof e.loading?void 0:e.loading},{default:r.loader}),I&&(0,t.bF)(k,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:r.item,prepend:r.prepend,title:r.title,subtitle:r.subtitle,append:r.append}),P&&(0,t.bF)(h.O,{key:"text"},{default:()=>[r.text?.()??e.text]}),r.default?.(),r.actions&&(0,t.bF)(n.S,null,{default:r.actions}),(0,W.wN)(X.value,"v-card")]}),[[(0,t.gN)("ripple"),X.value&&e.ripple]])})),{}}})},3745:function(e,a,l){l.d(a,{S:function(){return d}});var t=l(6768),n=l(9262),r=l(2858),i=l(1247),s=l(4600);const d=(0,i.RW)()({name:"VCardActions",props:(0,n.u)(),setup(e,a){let{slots:l}=a;return(0,r.Uh)({VBtn:{slim:!0,variant:"text"}}),(0,s.C)((()=>(0,t.bF)("div",{class:["v-card-actions",e.class],style:e.style},[l.default?.()]))),{}}})},697:function(e,a,l){l.d(a,{O:function(){return p}});var t=l(6768),n=l(9262),r=l(4663),i=l(4587),s=l(1247),d=l(4600);const o=(0,i.j)({opacity:[Number,String],...(0,n.u)(),...(0,r.X)()},"VCardText"),p=(0,s.RW)()({name:"VCardText",props:o(),setup(e,a){let{slots:l}=a;return(0,d.C)((()=>(0,t.bF)(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},l))),{}}})},1606:function(e,a,l){l.d(a,{r:function(){return n}});var t=l(2586);const n=(0,t.G)("v-card-title")},1772:function(e,a,l){l.d(a,{p:function(){return f}});var t=l(6768),n=l(6856),r=l(7852),i=l(475),s=l(1950),d=l(2067),o=l(2876),p=l(144),u=l(4587),c=l(1247),y=l(9094),v=l(6993),m=l(4600);const b=(0,u.j)({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...(0,i.D)({origin:"center center",scrollStrategy:"block",transition:{component:n._},zIndex:2400})},"VDialog"),f=(0,c.RW)()({name:"VDialog",props:b(),emits:{"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,a){let{emit:l,slots:n}=a;const u=(0,d.q)(e,"modelValue"),{scopeId:c}=(0,o.b)(),b=(0,p.KR)();function f(e){const a=e.relatedTarget,l=e.target;if(a!==l&&b.value?.contentEl&&b.value?.globalTop&&![document,b.value.contentEl].includes(l)&&!b.value.contentEl.contains(l)){const e=(0,y.OW)(b.value.contentEl);if(!e.length)return;const l=e[0],t=e[e.length-1];a===l?t.focus():l.focus()}}function g(){l("afterEnter"),b.value?.contentEl&&!b.value.contentEl.contains(document.activeElement)&&b.value.contentEl.focus({preventScroll:!0})}function k(){l("afterLeave")}return v.ZK&&(0,t.wB)((()=>u.value&&e.retainFocus),(e=>{e?document.addEventListener("focusin",f):document.removeEventListener("focusin",f)}),{immediate:!0}),(0,t.wB)(u,(async e=>{e||(await(0,t.dY)(),b.value.activatorEl?.focus({preventScroll:!0}))})),(0,m.C)((()=>{const a=i.L.filterProps(e),l=(0,t.v6)({"aria-haspopup":"dialog","aria-expanded":String(u.value)},e.activatorProps),s=(0,t.v6)({tabindex:-1},e.contentProps);return(0,t.bF)(i.L,(0,t.v6)({ref:b,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},a,{modelValue:u.value,"onUpdate:modelValue":e=>u.value=e,"aria-modal":"true",activatorProps:l,contentProps:s,role:"dialog",onAfterEnter:g,onAfterLeave:k},c),{activator:n.activator,default:function(){for(var e=arguments.length,a=new Array(e),l=0;l<e;l++)a[l]=arguments[l];return(0,t.bF)(r.K,{root:"VDialog"},{default:()=>[n.default?.(...a)]})}})})),(0,s.O)({},b)}})}}]);
//# sourceMappingURL=44.b8e72c69.js.map