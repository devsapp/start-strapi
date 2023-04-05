(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[8853],{20400:(b,L,r)=>{"use strict";r.r(L),r.d(L,{default:()=>We});var e=r(67294),C=r(49656),o=r(95489),c=r(31498),y=r(81912),t=r(28702),E=r(41363),f=r(97132),A=r(23724),k=r(63852),T=r(89031);const P=async(s,a)=>{try{const{get:n}=(0,o.getFetchClient)(),{data:i}=await n((0,T.Gc)("roles"));return a("The roles have loaded successfully"),i}catch{throw s({type:"warning",message:{id:"notification.error"}}),new Error("error")}},w=async(s,a)=>{try{const{del:n}=(0,o.getFetchClient)();await n(`${(0,T.Gc)("roles")}/${s}`)}catch{a({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}};var N=r(45697),v=r.n(N);const S=({sortedRoles:s,canDelete:a,permissions:n,setRoleToDelete:i,onDelete:d})=>{const{formatMessage:l}=(0,f.useIntl)(),{push:m}=(0,C.useHistory)(),[p,h]=d,g=u=>a&&!["public","authenticated"].includes(u.type),R=u=>{i(u),h(!p)},D=u=>{m(`/settings/${c.Z}/roles/${u}`)};return e.createElement(t.Tbody,null,s?.map(u=>e.createElement(t.Tr,{key:u.name,...(0,o.onRowClick)({fn:()=>D(u.id)})},e.createElement(t.Td,{width:"20%"},e.createElement(t.Typography,null,u.name)),e.createElement(t.Td,{width:"50%"},e.createElement(t.Typography,null,u.description)),e.createElement(t.Td,{width:"30%"},e.createElement(t.Typography,null,`${u.nb_users} ${l({id:"global.users",defaultMessage:"users"}).toLowerCase()}`)),e.createElement(t.Td,null,e.createElement(t.Flex,{justifyContent:"end",...o.stopPropagation},e.createElement(o.CheckPermissions,{permissions:n.updateRole},e.createElement(t.IconButton,{onClick:()=>D(u.id),noBorder:!0,icon:e.createElement(E.Pencil,null),label:l({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:`${u.name}`})})),g(u)&&e.createElement(o.CheckPermissions,{permissions:n.deleteRole},e.createElement(t.IconButton,{onClick:()=>R(u.id),noBorder:!0,icon:e.createElement(E.Trash,null),label:l({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${u.name}`})})))))))},F=S;S.defaultProps={canDelete:!1},S.propTypes={onDelete:v().array.isRequired,permissions:v().object.isRequired,setRoleToDelete:v().func.isRequired,sortedRoles:v().array.isRequired,canDelete:v().bool};const W=()=>{const{trackUsage:s}=(0,o.useTracking)(),{formatMessage:a}=(0,f.useIntl)(),{push:n}=(0,C.useHistory)(),i=(0,o.useNotification)(),{notifyStatus:d}=(0,t.useNotifyAT)(),[{query:l}]=(0,o.useQueryParams)(),m=l?._q||"",[p,h]=(0,e.useState)(!1),[g,R]=(0,e.useState)(!1),[D,u]=(0,e.useState)();(0,o.useFocusWhenNavigate)();const x=(0,A.useQueryClient)(),G=(0,e.useMemo)(()=>({create:y.Z.createRole,read:y.Z.readRoles,update:y.Z.updateRole,delete:y.Z.deleteRole}),[]),{isLoading:M,allowedActions:{canRead:B,canDelete:U}}=(0,o.useRBAC)(G),{isLoading:I,data:{roles:oe},isFetching:Qe}=(0,A.useQuery)("get-roles",()=>P(i,d),{initialData:{},enabled:B}),ie=I||Qe,ze=()=>{s("willCreateRole"),n(`/settings/${c.Z}/roles/new`)},Ye=()=>{h(!p)},Xe={roles:{id:(0,T.OB)("Roles.empty"),defaultMessage:"You don't have any roles yet."},search:{id:(0,T.OB)("Roles.empty.search"),defaultMessage:"No roles match the search."}},Je=a({id:"global.roles",defaultMessage:"Roles"}),Ke=(0,A.useMutation)(st=>w(st,i),{async onSuccess(){await x.invalidateQueries("get-roles")}}),qe=async()=>{R(!0),await Ke.mutateAsync(D),h(!p),R(!1)},V=(0,k.ZP)(oe||[],m,{keys:["name","description"]}),_e=m&&!V.length?"search":"roles",et=4,tt=(oe?.length||0)+1;return e.createElement(t.Layout,null,e.createElement(o.SettingsPageTitle,{name:Je}),e.createElement(t.Main,{"aria-busy":ie},e.createElement(t.HeaderLayout,{title:a({id:"global.roles",defaultMessage:"Roles"}),subtitle:a({id:"Settings.roles.list.description",defaultMessage:"List of roles"}),primaryAction:e.createElement(o.CheckPermissions,{permissions:y.Z.createRole},e.createElement(t.Button,{onClick:ze,startIcon:e.createElement(E.Plus,null),size:"S"},a({id:(0,T.OB)("List.button.roles"),defaultMessage:"Add new role"})))}),e.createElement(t.ActionLayout,{startActions:e.createElement(o.SearchURLQuery,{label:a({id:"app.component.search.label",defaultMessage:"Search"})})}),e.createElement(t.ContentLayout,null,!B&&e.createElement(o.NoPermissions,null),(ie||M)&&e.createElement(o.LoadingIndicatorPage,null),B&&V&&V?.length?e.createElement(t.Table,{colCount:et,rowCount:tt},e.createElement(t.Thead,null,e.createElement(t.Tr,null,e.createElement(t.Th,null,e.createElement(t.Typography,{variant:"sigma",textColor:"neutral600"},a({id:"global.name",defaultMessage:"Name"}))),e.createElement(t.Th,null,e.createElement(t.Typography,{variant:"sigma",textColor:"neutral600"},a({id:"global.description",defaultMessage:"Description"}))),e.createElement(t.Th,null,e.createElement(t.Typography,{variant:"sigma",textColor:"neutral600"},a({id:"global.users",defaultMessage:"Users"}))),e.createElement(t.Th,null,e.createElement(t.VisuallyHidden,null,a({id:"global.actions",defaultMessage:"Actions"}))))),e.createElement(F,{sortedRoles:V,canDelete:U,permissions:y.Z,setRoleToDelete:u,onDelete:[p,h]})):e.createElement(o.EmptyStateLayout,{content:Xe[_e]})),e.createElement(o.ConfirmDialog,{isConfirmButtonLoading:g,onConfirm:qe,onToggleDialog:Ye,isOpen:p})))},ce=()=>e.createElement(o.CheckPagePermissions,{permissions:y.Z.accessRoles},e.createElement(W,null));var X=r(80831),$=r(84757),O=r(96486);const J=(0,e.createContext)({}),K=({children:s,value:a})=>e.createElement(J.Provider,{value:a},s),Q=()=>(0,e.useContext)(J);K.propTypes={children:v().node.isRequired,value:v().object.isRequired};var j=r(71893),ue=r(35161),de=r.n(ue),me=r(13217),ge=r.n(me);const pe=s=>{switch(s){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},Ee=(0,j.default)(t.Box)`
  margin: -1px;
  border-radius: ${({theme:s})=>s.spaces[1]} 0 0 ${({theme:s})=>s.spaces[1]};
`;function z({route:s}){const{formatMessage:a}=(0,f.useIntl)(),{method:n,handler:i,path:d}=s,l=d?ge()(d.split("/")):[],[m="",p=""]=i?i.split("."):[],h=pe(s.method);return e.createElement(t.Stack,{spacing:2},e.createElement(t.Typography,{variant:"delta",as:"h3"},a({id:"users-permissions.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",e.createElement("span",null,m),e.createElement(t.Typography,{variant:"delta",textColor:"primary600"},".",p)),e.createElement(t.Stack,{horizontal:!0,hasRadius:!0,background:"neutral0",borderColor:"neutral200",spacing:0},e.createElement(Ee,{background:h.background,borderColor:h.border,padding:2},e.createElement(t.Typography,{fontWeight:"bold",textColor:h.text},n)),e.createElement(t.Box,{paddingLeft:2,paddingRight:2},de()(l,g=>e.createElement(t.Typography,{key:g,textColor:g.includes(":")?"neutral600":"neutral900"},"/",g)))))}z.defaultProps={route:{handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}},z.propTypes={route:v().shape({handler:v().string,method:v().string,path:v().string})};const he=z,fe=()=>{const{formatMessage:s}=(0,f.useIntl)(),{selectedAction:a,routes:n}=Q(),i=(0,O.without)(a.split("."),"controllers"),d=(0,O.get)(n,i[0]),l=i.slice(1).join("."),m=(0,O.isEmpty)(d)?[]:d.filter(p=>p.handler.endsWith(l));return e.createElement(t.GridItem,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"}},a?e.createElement(t.Stack,{spacing:2},m.map((p,h)=>e.createElement(he,{key:h,route:p}))):e.createElement(t.Stack,{spacing:2},e.createElement(t.Typography,{variant:"delta",as:"h3"},s({id:"users-permissions.Policies.header.title",defaultMessage:"Advanced settings"})),e.createElement(t.Typography,{as:"p",textColor:"neutral600"},s({id:"users-permissions.Policies.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"}))))};var ye=r(11700),Ce=r.n(ye);function Re(s){switch(s){case"application":return"Application";case"plugin::content-manager":return"Content manager";case"plugin::content-type-builder":return"Content types builder";case"plugin::documentation":return"Documentation";case"plugin::email":return"Email";case"plugin::i18n":return"i18n";case"plugin::upload":return"Upload";case"plugin::users-permissions":return"Users-permissions";default:return Ce()(s.replace("api::","").replace("plugin::",""))}}const be=Re;var Te=r(89734),q=r.n(Te);const _=j.css`
  background: ${s=>s.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`,Ae=(0,j.default)(t.Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${s=>s.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${s=>s.isActive&&_}
  &:hover {
    ${_}
  }
`,Pe=j.default.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:s})=>s.colors.neutral150};
`,ee=({subCategory:s})=>{const{formatMessage:a}=(0,f.useIntl)(),{onChange:n,onChangeSelectAll:i,onSelectedAction:d,selectedAction:l,modifiedData:m}=Q(),p=(0,e.useMemo)(()=>(0,O.get)(m,s.name,{}),[m,s]),h=(0,e.useMemo)(()=>Object.values(p).every(u=>u.enabled===!0),[p]),g=(0,e.useMemo)(()=>Object.values(p).some(u=>u.enabled===!0)&&!h,[p,h]),R=(0,e.useCallback)(({target:{name:u}})=>{i({target:{name:u,value:!h}})},[h,i]),D=(0,e.useCallback)(u=>l===u,[l]);return e.createElement(t.Box,null,e.createElement(t.Flex,{justifyContent:"space-between",alignItems:"center"},e.createElement(t.Box,{paddingRight:4},e.createElement(t.Typography,{variant:"sigma",textColor:"neutral600"},s.label)),e.createElement(Pe,null),e.createElement(t.Box,{paddingLeft:4},e.createElement(t.Checkbox,{name:s.name,value:h,onValueChange:u=>R({target:{name:s.name,value:u}}),indeterminate:g},a({id:"app.utils.select-all",defaultMessage:"Select all"})))),e.createElement(t.Flex,{paddingTop:6,paddingBottom:6},e.createElement(t.Grid,{gap:2,style:{flex:1}},s.actions.map(u=>{const x=`${u.name}.enabled`;return e.createElement(t.GridItem,{col:6,key:u.name},e.createElement(Ae,{isActive:D(u.name),padding:2,hasRadius:!0},e.createElement(t.Checkbox,{value:(0,O.get)(m,x,!1),name:x,onValueChange:G=>n({target:{name:x,value:G}})},u.label),e.createElement("button",{type:"button","data-testid":"action-cog",onClick:()=>d(u.name),style:{display:"inline-flex",alignItems:"center"}},e.createElement(E.Cog,null))))}))))};ee.propTypes={subCategory:v().object.isRequired};const De=ee,te=({name:s,permissions:a})=>{const n=(0,e.useMemo)(()=>q()(Object.values(a.controllers).reduce((i,d,l)=>{const m=`${s}.controllers.${Object.keys(a.controllers)[l]}`,p=q()(Object.keys(d).reduce((h,g)=>[...h,{...d[g],label:g,name:`${m}.${g}`}],[]),"label");return[...i,{actions:p,label:Object.keys(a.controllers)[l],name:m}]},[]),"label"),[s,a]);return e.createElement(t.Box,{padding:6},n.map(i=>e.createElement(De,{key:i.name,subCategory:i})))};te.propTypes={name:v().string.isRequired,permissions:v().object.isRequired};const ve=te,Le=(s,a)=>{const n=Object.keys(a).sort().map(i=>({name:i,isOpen:!1}));return{...s,collapses:n}};var H=r(18172);const ke={collapses:[]},Se=(s,a)=>(0,H.default)(s,n=>{switch(a.type){case"TOGGLE_COLLAPSE":{n.collapses=s.collapses.map((i,d)=>d===a.index?{...i,isOpen:!i.isOpen}:{...i,isOpen:!1});break}default:return n}}),Me=()=>{const{modifiedData:s}=Q(),{formatMessage:a}=(0,f.useIntl)(),[{collapses:n},i]=(0,e.useReducer)(Se,ke,l=>Le(l,s)),d=l=>i({type:"TOGGLE_COLLAPSE",index:l});return e.createElement(t.Stack,{spacing:1},n.map((l,m)=>e.createElement(t.Accordion,{expanded:l.isOpen,onToggle:()=>d(m),key:l.name,variant:m%2===0?"secondary":void 0},e.createElement(t.AccordionToggle,{title:be(l.name),description:a({id:"users-permissions.Plugin.permissions.plugins.description",defaultMessage:"Define all allowed actions for the {name} plugin."},{name:l.name}),variant:m%2?"primary":"secondary"}),e.createElement(t.AccordionContent,null,e.createElement(t.Box,null,e.createElement(ve,{permissions:s[l.name],name:l.name}))))))},xe={initialData:{},modifiedData:{},routes:{},selectedAction:"",policies:[]},Be=(s,a)=>(0,H.default)(s,n=>{switch(a.type){case"ON_CHANGE":{const i=a.keys.length,d=a.keys[i-1]==="enabled";if(a.value&&d){const l=(0,O.take)(a.keys,i-1).join(".");n.selectedAction=l}(0,O.set)(n,["modifiedData",...a.keys],a.value);break}case"ON_CHANGE_SELECT_ALL":{const i=["modifiedData",...a.keys],d=(0,O.get)(s,i,{}),l=Object.keys(d).reduce((m,p)=>(m[p]={...d[p],enabled:a.value},m),{});(0,O.set)(n,i,l);break}case"ON_RESET":{n.modifiedData=s.initialData;break}case"ON_SUBMIT_SUCCEEDED":{n.initialData=s.modifiedData;break}case"SELECT_ACTION":{const{actionToSelect:i}=a;n.selectedAction=i===s.selectedAction?"":i;break}default:return n}}),Oe=(s,a,n)=>({...s,initialData:a,modifiedData:a,routes:n}),se=(0,e.forwardRef)(({permissions:s,routes:a},n)=>{const{formatMessage:i}=(0,f.useIntl)(),[d,l]=(0,e.useReducer)(Be,xe,R=>Oe(R,s,a));(0,e.useImperativeHandle)(n,()=>({getPermissions(){return{permissions:d.modifiedData}},resetForm(){l({type:"ON_RESET"})},setFormAfterSubmit(){l({type:"ON_SUBMIT_SUCCEEDED"})}}));const g={...d,onChange:({target:{name:R,value:D}})=>l({type:"ON_CHANGE",keys:R.split("."),value:D==="empty__string_value"?"":D}),onChangeSelectAll:({target:{name:R,value:D}})=>l({type:"ON_CHANGE_SELECT_ALL",keys:R.split("."),value:D}),onSelectedAction:R=>l({type:"SELECT_ACTION",actionToSelect:R})};return e.createElement(K,{value:g},e.createElement(t.Grid,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0"},e.createElement(t.GridItem,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(t.Stack,{spacing:6},e.createElement(t.Stack,{spacing:2},e.createElement(t.Typography,{variant:"delta",as:"h2"},i({id:(0,$.Z)("Plugins.header.title"),defaultMessage:"Permissions"})),e.createElement(t.Typography,{as:"p",textColor:"neutral600"},i({id:(0,$.Z)("Plugins.header.description"),defaultMessage:"Only actions bound by a route are listed below."}))),e.createElement(Me,null))),e.createElement(fe,null)))});se.propTypes={permissions:v().object.isRequired,routes:v().object.isRequired};const ne=(0,e.memo)(se),ut={isLoading:!0,modifiedData:{}},dt=(s,a)=>produce(s,n=>{switch(a.type){case"GET_DATA":{n.isLoading=!0,n.modifiedData={};break}case"GET_DATA_SUCCEEDED":{n.isLoading=!1,n.modifiedData=a.data;break}case"GET_DATA_ERROR":{n.isLoading=!0;break}case"ON_SUBMIT_SUCCEEDED":{n.modifiedData=a.data;break}default:return n}}),mt=null,gt=(s,a)=>{const{isLoading:n,allowedActions:i}=useRBAC(a),[{isLoading:d,modifiedData:l},m]=useReducer(reducer,initialState),p=useNotification(),h=useRef(!0),g=new AbortController,{signal:R}=g;useEffect(()=>(n||(async()=>{try{m({type:"GET_DATA"});const x=await request(getRequestURL(s),{method:"GET",signal:R});m({type:"GET_DATA_SUCCEEDED",data:x})}catch(x){h.current&&(m({type:"GET_DATA_ERROR"}),console.error(x),p({type:"warning",message:{id:"notification.error"}}))}})(),()=>{g.abort(),h.current=!1}),[n,s]);const D=useCallback(u=>{m({type:"ON_SUBMIT_SUCCEEDED",data:u})},[]);return{allowedActions:i,dispatchSubmitSucceeded:D,isLoading:d,isLoadingForPermissions:n,modifiedData:l}},pt=null,Et={roles:[],isLoading:!0},ht=(s,a)=>produce(s,n=>{switch(a.type){case"GET_DATA":{n.isLoading=!0,n.roles=[];break}case"GET_DATA_SUCCEEDED":{n.roles=a.data,n.isLoading=!1;break}case"GET_DATA_ERROR":{n.isLoading=!1;break}default:return n}}),ft=null,yt=(s=!0)=>{const[{roles:a,isLoading:n},i]=useReducer(reducer,initialState,()=>init(initialState,s)),d=useNotification(),l=useRef(!0),m=new AbortController,{signal:p}=m;useEffect(()=>(s&&h(),()=>{m.abort(),l.current=!1}),[s]);const h=async()=>{try{i({type:"GET_DATA"});const{roles:g}=await request(`/${pluginId}/roles`,{method:"GET",signal:p});i({type:"GET_DATA_SUCCEEDED",data:g})}catch(g){const R=get(g,["response","payload","message"],"An error occured");l.current&&(i({type:"GET_DATA_ERROR"}),R!=="Forbidden"&&d({type:"warning",message:R}))}};return{roles:a,isLoading:n,getData:h}},Ct=null,Ge=(s,a)=>({...s,isLoading:a}),ae={permissions:{},routes:{},isLoading:!0},Ue=(s,a)=>(0,H.default)(s,n=>{switch(a.type){case"GET_DATA":{n.isLoading=!0,n.permissions={},n.routes={};break}case"GET_DATA_SUCCEEDED":{n.permissions=a.permissions,n.routes=a.routes,n.isLoading=!1;break}case"GET_DATA_ERROR":{n.isLoading=!1;break}default:return n}}),re=(s=!0)=>{const a=(0,o.useNotification)(),[{permissions:n,routes:i,isLoading:d},l]=(0,e.useReducer)(Ue,ae,()=>Ge(ae,s)),m=(0,o.useFetchClient)(),p=(0,e.useCallback)(async()=>{try{l({type:"GET_DATA"});const[{permissions:h},{routes:g}]=await Promise.all([`/${c.Z}/permissions`,`/${c.Z}/routes`].map(async R=>(await m.get(R)).data));l({type:"GET_DATA_SUCCEEDED",permissions:(0,T.YX)(h),routes:g})}catch(h){const g=(0,O.get)(h,["response","payload","message"],"An error occured");l({type:"GET_DATA_ERROR"}),g!=="Forbidden"&&a({type:"warning",message:g})}},[a]);return(0,e.useEffect)(()=>{s&&p()},[p,s]),{permissions:n,routes:i,getData:p,isLoading:d}},we={role:{},isLoading:!0},Ne=(s,a)=>(0,H.default)(s,n=>{switch(a.type){case"GET_DATA_SUCCEEDED":{n.role=a.role,n.isLoading=!1;break}case"GET_DATA_ERROR":{n.isLoading=!1;break}case"ON_SUBMIT_SUCCEEDED":{n.role.name=a.name,n.role.description=a.description;break}default:return n}}),Fe=s=>{const[a,n]=(0,e.useReducer)(Ne,we),i=(0,o.useNotification)(),d=(0,e.useRef)(null),{get:l}=(0,o.useFetchClient)();(0,e.useEffect)(()=>(d.current=!0,s?m(s):n({type:"GET_DATA_SUCCEEDED",role:{}}),()=>d.current=!1),[s]);const m=async h=>{try{const{data:{role:g}}=await l(`/${c.Z}/roles/${h}`);d.current&&n({type:"GET_DATA_SUCCEEDED",role:g})}catch(g){console.error(g),n({type:"GET_DATA_ERROR"}),i({type:"warning",message:{id:"notification.error"}})}},p=(0,e.useCallback)(h=>{n({type:"ON_SUBMIT_SUCCEEDED",...h})},[]);return{...a,onSubmitSucceeded:p}};var Z=r(53209);const $e=Z.Ry().shape({name:Z.Z_().required(o.translatedErrors.required),description:Z.Z_().required(o.translatedErrors.required)}),Ze=()=>{const{formatMessage:s}=(0,f.useIntl)(),[a,n]=(0,e.useState)(!1),i=(0,o.useNotification)(),{lockApp:d,unlockApp:l}=(0,o.useOverlayBlocker)(),{params:{id:m}}=(0,C.useRouteMatch)(`/settings/${c.Z}/roles/:id`),{isLoading:p,routes:h}=re(),{role:g,onSubmitSucceeded:R,isLoading:D}=Fe(m),u=(0,e.useRef)(),{put:x}=(0,o.useFetchClient)(),G=async M=>{d(),n(!0);try{const B=u.current.getPermissions();await x(`/${c.Z}/roles/${m}`,{...M,...B,users:[]}),R({name:M.name,description:M.description}),i({type:"success",message:{id:(0,$.Z)("Settings.roles.edited"),defaultMessage:"Role edited"}})}catch(B){console.error(B),i({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}n(!1),l()};return D?e.createElement(o.LoadingIndicatorPage,null):e.createElement(t.Main,null,e.createElement(o.SettingsPageTitle,{name:"Roles"}),e.createElement(X.Formik,{enableReinitialize:!0,initialValues:{name:g.name,description:g.description},onSubmit:G,validationSchema:$e},({handleSubmit:M,values:B,handleChange:U,errors:I})=>e.createElement(o.Form,{noValidate:!0,onSubmit:M},e.createElement(t.HeaderLayout,{primaryAction:!p&&e.createElement(t.Button,{disabled:g.code==="strapi-super-admin",type:"submit",loading:a,startIcon:e.createElement(E.Check,null)},s({id:"global.save",defaultMessage:"Save"})),title:g.name,subtitle:g.description,navigationAction:e.createElement(o.Link,{startIcon:e.createElement(E.ArrowLeft,null),to:"/settings/users-permissions/roles"},s({id:"global.back",defaultMessage:"Back"}))}),e.createElement(t.ContentLayout,null,e.createElement(t.Stack,{spacing:7},e.createElement(t.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(t.Stack,{spacing:4},e.createElement(t.Typography,{variant:"delta",as:"h2"},s({id:(0,$.Z)("EditPage.form.roles"),defaultMessage:"Role details"})),e.createElement(t.Grid,{gap:4},e.createElement(t.GridItem,{col:6},e.createElement(t.TextInput,{name:"name",value:B.name||"",onChange:U,label:s({id:"global.name",defaultMessage:"Name"}),error:I.name?s({id:I.name,defaultMessage:"Invalid value"}):null})),e.createElement(t.GridItem,{col:6},e.createElement(t.Textarea,{name:"description",value:B.description||"",onChange:U,label:s({id:"global.description",defaultMessage:"Description"}),error:I.description?s({id:I.description,defaultMessage:"Invalid value"}):null}))))),!p&&e.createElement(ne,{ref:u,permissions:g.permissions,routes:h}))))))},Ie=()=>e.createElement(o.CheckPagePermissions,{permissions:y.Z.updateRole},e.createElement(Ze,null)),je=Z.Ry().shape({name:Z.Z_().required(o.translatedErrors.required),description:Z.Z_().required(o.translatedErrors.required)}),He=()=>{const{formatMessage:s}=(0,f.useIntl)(),[a,n]=(0,e.useState)(!1),i=(0,o.useNotification)(),{goBack:d}=(0,C.useHistory)(),{lockApp:l,unlockApp:m}=(0,o.useOverlayBlocker)(),{isLoading:p,permissions:h,routes:g}=re(),{trackUsage:R}=(0,o.useTracking)(),D=(0,e.useRef)(),{post:u}=(0,o.useFetchClient)(),x=async G=>{l(),n(!0);try{const M=D.current.getPermissions();await u(`/${c.Z}/roles`,{...G,...M,users:[]}),R("didCreateRole"),i({type:"success",message:{id:(0,$.Z)("Settings.roles.created"),defaultMessage:"Role created"}}),d()}catch(M){console.error(M),i({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}n(!1),m()};return e.createElement(t.Main,null,e.createElement(o.SettingsPageTitle,{name:"Roles"}),e.createElement(X.Formik,{enableReinitialize:!0,initialValues:{name:"",description:""},onSubmit:x,validationSchema:je},({handleSubmit:G,values:M,handleChange:B,errors:U})=>e.createElement(o.Form,{noValidate:!0,onSubmit:G},e.createElement(t.HeaderLayout,{primaryAction:!p&&e.createElement(t.Button,{type:"submit",loading:a,startIcon:e.createElement(E.Check,null)},s({id:"global.save",defaultMessage:"Save"})),title:s({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:s({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"})}),e.createElement(t.ContentLayout,null,e.createElement(t.Stack,{spacing:7},e.createElement(t.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(t.Stack,{spacing:4},e.createElement(t.Typography,{variant:"delta",as:"h2"},s({id:(0,$.Z)("EditPage.form.roles"),defaultMessage:"Role details"})),e.createElement(t.Grid,{gap:4},e.createElement(t.GridItem,{col:6},e.createElement(t.TextInput,{name:"name",value:M.name||"",onChange:B,label:s({id:"global.name",defaultMessage:"Name"}),error:U.name?s({id:U.name,defaultMessage:"Invalid value"}):null})),e.createElement(t.GridItem,{col:6},e.createElement(t.Textarea,{name:"description",value:M.description||"",onChange:B,label:s({id:"global.description",defaultMessage:"Description"}),error:U.description?s({id:U.description,defaultMessage:"Invalid value"}):null}))))),!p&&e.createElement(ne,{ref:D,permissions:h,routes:g}))))))},Ve=()=>e.createElement(o.CheckPagePermissions,{permissions:y.Z.createRole},e.createElement(He,null)),We=()=>e.createElement(o.CheckPagePermissions,{permissions:y.Z.accessRoles},e.createElement(C.Switch,null,e.createElement(C.Route,{path:`/settings/${c.Z}/roles/new`,component:Ve,exact:!0}),e.createElement(C.Route,{path:`/settings/${c.Z}/roles/:id`,component:Ie,exact:!0}),e.createElement(C.Route,{path:`/settings/${c.Z}/roles`,component:ce,exact:!0}),e.createElement(C.Route,{path:"",component:o.NotFound})))},89031:(b,L,r)=>{"use strict";r.d(L,{YX:()=>o,Gc:()=>t,OB:()=>E.Z});var e=r(96486);const o=f=>Object.keys(f).reduce((A,k)=>{const T=f[k].controllers,P=Object.keys(T).reduce((w,N)=>((0,e.isEmpty)(T[N])||(w[N]=T[N]),w),{});return(0,e.isEmpty)(P)||(A[k]={controllers:P}),A},{});var c=r(31498);const t=f=>`/${c.Z}/${f}`;var E=r(84757)},89881:(b,L,r)=>{var e=r(47816),C=r(99291),o=C(e);b.exports=o},69199:(b,L,r)=>{var e=r(89881),C=r(98612);function o(c,y){var t=-1,E=C(c)?Array(c.length):[];return e(c,function(f,A,k){E[++t]=y(f,A,k)}),E}b.exports=o},82689:(b,L,r)=>{var e=r(29932),C=r(97786),o=r(67206),c=r(69199),y=r(71131),t=r(7518),E=r(85022),f=r(6557),A=r(1469);function k(T,P,w){P.length?P=e(P,function(S){return A(S)?function(F){return C(F,S.length===1?S[0]:S)}:S}):P=[f];var N=-1;P=e(P,t(o));var v=c(T,function(S,F,le){var W=e(P,function(Y){return Y(S)});return{criteria:W,index:++N,value:S}});return y(v,function(S,F){return E(S,F,w)})}b.exports=k},71131:b=>{function L(r,e){var C=r.length;for(r.sort(e);C--;)r[C]=r[C].value;return r}b.exports=L},26393:(b,L,r)=>{var e=r(33448);function C(o,c){if(o!==c){var y=o!==void 0,t=o===null,E=o===o,f=e(o),A=c!==void 0,k=c===null,T=c===c,P=e(c);if(!k&&!P&&!f&&o>c||f&&A&&T&&!k&&!P||t&&A&&T||!y&&T||!E)return 1;if(!t&&!f&&!P&&o<c||P&&y&&E&&!t&&!f||k&&y&&E||!A&&E||!T)return-1}return 0}b.exports=C},85022:(b,L,r)=>{var e=r(26393);function C(o,c,y){for(var t=-1,E=o.criteria,f=c.criteria,A=E.length,k=y.length;++t<A;){var T=e(E[t],f[t]);if(T){if(t>=k)return T;var P=y[t];return T*(P=="desc"?-1:1)}}return o.index-c.index}b.exports=C},99291:(b,L,r)=>{var e=r(98612);function C(o,c){return function(y,t){if(y==null)return y;if(!e(y))return o(y,t);for(var E=y.length,f=c?E:-1,A=Object(y);(c?f--:++f<E)&&t(A[f],f,A)!==!1;);return y}}b.exports=C},35161:(b,L,r)=>{var e=r(29932),C=r(67206),o=r(69199),c=r(1469);function y(t,E){var f=c(t)?e:o;return f(t,C(E,3))}b.exports=y},89734:(b,L,r)=>{var e=r(21078),C=r(82689),o=r(5976),c=r(16612),y=o(function(t,E){if(t==null)return[];var f=E.length;return f>1&&c(t,E[0],E[1])?E=[]:f>2&&c(E[0],E[1],E[2])&&(E=[E[0]]),C(t,e(E,1),[])});b.exports=y},13217:(b,L,r)=>{var e=r(14259);function C(o){var c=o==null?0:o.length;return c?e(o,1,c):[]}b.exports=C}}]);
