import{c as ae,d as de,n as ce,r as le,e as ue,f as pe,h as ye,A as he,N as me,i as xe,p as Ee,j as we,k as fe,D as ve,l as Pe,m as Se,S as be,o as ge,q as Ce,s as Ie,t as Ae,u as Re,v as ke,w as _e,x as De,y as ze,z as Fe,b as $e,B as Oe,E as He,F as Ne,G as Ue,H as je,I as Me,J as Te,K as Le,L as qe,M as Ge,O as Be,P as Je,Q as Ve,R as We,T as Ke,U as u,V as Qe,C as K,g as Q,a as X}from"./index-2iHft_da.js";import{f as Xe,t as Ye,a as Ze,b as et,F as tt,s as st,H as nt,e as g,c as ot,p as it,d as rt}from"./index-DGRu_coW.js";const Y=(e,t)=>{const s={};for(const n in t)at(s,e,t,n);return s},at=(e,t,s,n)=>{if(t!==null){let i=s[n];typeof i=="function"&&(i=[,i]);const[d=dt,m=ct,E=n]=i;(typeof d=="function"&&d(t[E])||typeof d!="function"&&d)&&(e[n]=m(t[E]));return}let[o,r]=s[n];if(typeof r=="function"){let i;const d=o===void 0&&(i=r())!=null,m=typeof o=="function"&&!!o(void 0)||typeof o!="function"&&!!o;d?e[n]=i:m&&(e[n]=r())}else{const i=o===void 0&&r!=null,d=typeof o=="function"&&!!o(r)||typeof o!="function"&&!!o;(i||d)&&(e[n]=r)}},dt=e=>e!=null,ct=e=>e,a=e=>{if(e==null)return{};if(Array.isArray(e))return e.filter(t=>t!=null).map(a);if(typeof e=="object"){const t={};for(const s of Object.keys(e))e[s]!=null&&(t[s]=a(e[s]));return t}return e},C=(e,t)=>ae(e,t).then(s=>{if(s.length)try{return JSON.parse(s)}catch(n){throw(n==null?void 0:n.name)==="SyntaxError"&&Object.defineProperty(n,"$responseBodyText",{value:s}),n}return{}}),lt=async(e,t)=>{const s=await C(e,t);return s.message=s.message??s.Message,s},ut=(e,t)=>{const s=(r,i)=>Object.keys(r).find(d=>d.toLowerCase()===i.toLowerCase()),n=r=>{let i=r;return typeof i=="number"&&(i=i.toString()),i.indexOf(",")>=0&&(i=i.split(",")[0]),i.indexOf(":")>=0&&(i=i.split(":")[0]),i.indexOf("#")>=0&&(i=i.split("#")[1]),i},o=s(e.headers,"x-amzn-errortype");if(o!==void 0)return n(e.headers[o]);if(t.code!==void 0)return n(t.code);if(t.__type!==void 0)return n(t.__type)},pt=async(e,t,s)=>({operation:de(t).operation,region:await ce(e.region)()||(()=>{throw new Error("expected `region` to be configured for `aws.auth#sigv4`")})()});function yt(e){return{schemeId:"aws.auth#sigv4",signingProperties:{name:"cognito-identity",region:e.region},propertiesExtractor:(t,s)=>({signingProperties:{config:t,context:s}})}}function S(e){return{schemeId:"smithy.api#noAuth"}}const ht=e=>{const t=[];switch(e.operation){case"GetCredentialsForIdentity":{t.push(S());break}case"GetId":{t.push(S());break}case"GetOpenIdToken":{t.push(S());break}case"UnlinkIdentity":{t.push(S());break}default:t.push(yt(e))}return t},mt=e=>({...le(e)}),xt=e=>({...e,useDualstackEndpoint:e.useDualstackEndpoint??!1,useFipsEndpoint:e.useFipsEndpoint??!1,defaultSigningName:"cognito-identity"}),Z={UseFIPS:{type:"builtInParams",name:"useFipsEndpoint"},Endpoint:{type:"builtInParams",name:"endpoint"},Region:{type:"builtInParams",name:"region"},UseDualStack:{type:"builtInParams",name:"useDualstackEndpoint"}},Et="@aws-sdk/client-cognito-identity",wt="AWS SDK for JavaScript Cognito Identity Client for Node.js, Browser and React Native",ft="3.623.0",vt={build:"concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'","build:cjs":"node ../../scripts/compilation/inline client-cognito-identity","build:es":"tsc -p tsconfig.es.json","build:include:deps":"lerna run --scope $npm_package_name --include-dependencies build","build:types":"tsc -p tsconfig.types.json","build:types:downlevel":"downlevel-dts dist-types dist-types/ts3.4",clean:"rimraf ./dist-* && rimraf *.tsbuildinfo","extract:docs":"api-extractor run --local","generate:client":"node ../../scripts/generate-clients/single-service --solo cognito-identity","test:e2e":"ts-mocha test/**/*.ispec.ts && karma start karma.conf.js"},Pt="./dist-cjs/index.js",St="./dist-types/index.d.ts",bt="./dist-es/index.js",gt=!1,Ct={"@aws-crypto/sha256-browser":"5.2.0","@aws-crypto/sha256-js":"5.2.0","@aws-sdk/client-sso-oidc":"3.623.0","@aws-sdk/client-sts":"3.623.0","@aws-sdk/core":"3.623.0","@aws-sdk/credential-provider-node":"3.623.0","@aws-sdk/middleware-host-header":"3.620.0","@aws-sdk/middleware-logger":"3.609.0","@aws-sdk/middleware-recursion-detection":"3.620.0","@aws-sdk/middleware-user-agent":"3.620.0","@aws-sdk/region-config-resolver":"3.614.0","@aws-sdk/types":"3.609.0","@aws-sdk/util-endpoints":"3.614.0","@aws-sdk/util-user-agent-browser":"3.609.0","@aws-sdk/util-user-agent-node":"3.614.0","@smithy/config-resolver":"^3.0.5","@smithy/core":"^2.3.2","@smithy/fetch-http-handler":"^3.2.4","@smithy/hash-node":"^3.0.3","@smithy/invalid-dependency":"^3.0.3","@smithy/middleware-content-length":"^3.0.5","@smithy/middleware-endpoint":"^3.1.0","@smithy/middleware-retry":"^3.0.14","@smithy/middleware-serde":"^3.0.3","@smithy/middleware-stack":"^3.0.3","@smithy/node-config-provider":"^3.1.4","@smithy/node-http-handler":"^3.1.4","@smithy/protocol-http":"^4.1.0","@smithy/smithy-client":"^3.1.12","@smithy/types":"^3.3.0","@smithy/url-parser":"^3.0.3","@smithy/util-base64":"^3.0.0","@smithy/util-body-length-browser":"^3.0.0","@smithy/util-body-length-node":"^3.0.0","@smithy/util-defaults-mode-browser":"^3.0.14","@smithy/util-defaults-mode-node":"^3.0.14","@smithy/util-endpoints":"^2.0.5","@smithy/util-middleware":"^3.0.3","@smithy/util-retry":"^3.0.3","@smithy/util-utf8":"^3.0.0",tslib:"^2.6.2"},It={"@aws-sdk/client-iam":"3.623.0","@tsconfig/node16":"16.1.3","@types/chai":"^4.2.11","@types/mocha":"^8.0.4","@types/node":"^16.18.96",concurrently:"7.0.0","downlevel-dts":"0.10.1",rimraf:"3.0.2",typescript:"~4.9.5"},At={node:">=16.0.0"},Rt={"<4.0":{"dist-types/*":["dist-types/ts3.4/*"]}},kt=["dist-*/**"],_t={name:"AWS SDK for JavaScript Team",url:"https://aws.amazon.com/javascript/"},Dt="Apache-2.0",zt={"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.browser"},Ft="https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-cognito-identity",$t={type:"git",url:"https://github.com/aws/aws-sdk-js-v3.git",directory:"clients/client-cognito-identity"},Ot={name:Et,description:wt,version:ft,scripts:vt,main:Pt,types:St,module:bt,sideEffects:gt,dependencies:Ct,devDependencies:It,engines:At,typesVersions:Rt,files:kt,author:_t,license:Dt,browser:zt,"react-native":{"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.native"},homepage:Ft,repository:$t},ee="required",y="fn",h="argv",f="ref",j=!0,M="isSet",P="booleanEquals",w="error",v="endpoint",x="tree",I="PartitionResult",T={[ee]:!1,type:"String"},L={[ee]:!0,default:!1,type:"Boolean"},q={[f]:"Endpoint"},te={[y]:P,[h]:[{[f]:"UseFIPS"},!0]},se={[y]:P,[h]:[{[f]:"UseDualStack"},!0]},p={},G={[y]:"getAttr",[h]:[{[f]:I},"supportsFIPS"]},B={[y]:P,[h]:[!0,{[y]:"getAttr",[h]:[{[f]:I},"supportsDualStack"]}]},J=[te],V=[se],W=[{[f]:"Region"}],Ht={version:"1.0",parameters:{Region:T,UseDualStack:L,UseFIPS:L,Endpoint:T},rules:[{conditions:[{[y]:M,[h]:[q]}],rules:[{conditions:J,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:w},{conditions:V,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:w},{endpoint:{url:q,properties:p,headers:p},type:v}],type:x},{conditions:[{[y]:M,[h]:W}],rules:[{conditions:[{[y]:"aws.partition",[h]:W,assign:I}],rules:[{conditions:[te,se],rules:[{conditions:[{[y]:P,[h]:[j,G]},B],rules:[{endpoint:{url:"https://cognito-identity-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:p,headers:p},type:v}],type:x},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:w}],type:x},{conditions:J,rules:[{conditions:[{[y]:P,[h]:[G,j]}],rules:[{endpoint:{url:"https://cognito-identity-fips.{Region}.{PartitionResult#dnsSuffix}",properties:p,headers:p},type:v}],type:x},{error:"FIPS is enabled but this partition does not support FIPS",type:w}],type:x},{conditions:V,rules:[{conditions:[B],rules:[{endpoint:{url:"https://cognito-identity.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:p,headers:p},type:v}],type:x},{error:"DualStack is enabled but this partition does not support DualStack",type:w}],type:x},{endpoint:{url:"https://cognito-identity.{Region}.{PartitionResult#dnsSuffix}",properties:p,headers:p},type:v}],type:x}],type:x},{error:"Invalid Configuration: Missing Region",type:w}]},Nt=Ht,Ut=(e,t={})=>ue(Nt,{endpointParams:e,logger:t.logger});pe.aws=ye;const jt=e=>({apiVersion:"2014-06-30",base64Decoder:(e==null?void 0:e.base64Decoder)??Xe,base64Encoder:(e==null?void 0:e.base64Encoder)??Ye,disableHostPrefix:(e==null?void 0:e.disableHostPrefix)??!1,endpointProvider:(e==null?void 0:e.endpointProvider)??Ut,extensions:(e==null?void 0:e.extensions)??[],httpAuthSchemeProvider:(e==null?void 0:e.httpAuthSchemeProvider)??ht,httpAuthSchemes:(e==null?void 0:e.httpAuthSchemes)??[{schemeId:"aws.auth#sigv4",identityProvider:t=>t.getIdentityProvider("aws.auth#sigv4"),signer:new he},{schemeId:"smithy.api#noAuth",identityProvider:t=>t.getIdentityProvider("smithy.api#noAuth")||(async()=>({})),signer:new me}],logger:(e==null?void 0:e.logger)??new xe,serviceId:(e==null?void 0:e.serviceId)??"Cognito Identity",urlParser:(e==null?void 0:e.urlParser)??Ee,utf8Decoder:(e==null?void 0:e.utf8Decoder)??Ze,utf8Encoder:(e==null?void 0:e.utf8Encoder)??et}),Mt=e=>{const t=Ie(e),s=()=>t().then(Ae),n=jt(e);return{...n,...e,runtime:"browser",defaultsMode:t,bodyLengthChecker:(e==null?void 0:e.bodyLengthChecker)??we,credentialDefaultProvider:(e==null?void 0:e.credentialDefaultProvider)??(o=>()=>Promise.reject(new Error("Credential is missing"))),defaultUserAgentProvider:(e==null?void 0:e.defaultUserAgentProvider)??fe({serviceId:n.serviceId,clientVersion:Ot.version}),maxAttempts:(e==null?void 0:e.maxAttempts)??ve,region:(e==null?void 0:e.region)??Pe("Region is missing"),requestHandler:tt.create((e==null?void 0:e.requestHandler)??s),retryMode:(e==null?void 0:e.retryMode)??(async()=>(await s()).retryMode||Se),sha256:(e==null?void 0:e.sha256)??be,streamCollector:(e==null?void 0:e.streamCollector)??st,useDualstackEndpoint:(e==null?void 0:e.useDualstackEndpoint)??(()=>Promise.resolve(ge)),useFipsEndpoint:(e==null?void 0:e.useFipsEndpoint)??(()=>Promise.resolve(Ce))}},Tt=e=>{const t=e.httpAuthSchemes;let s=e.httpAuthSchemeProvider,n=e.credentials;return{setHttpAuthScheme(o){const r=t.findIndex(i=>i.schemeId===o.schemeId);r===-1?t.push(o):t.splice(r,1,o)},httpAuthSchemes(){return t},setHttpAuthSchemeProvider(o){s=o},httpAuthSchemeProvider(){return s},setCredentials(o){n=o},credentials(){return n}}},Lt=e=>({httpAuthSchemes:e.httpAuthSchemes(),httpAuthSchemeProvider:e.httpAuthSchemeProvider(),credentials:e.credentials()}),b=e=>e,qt=(e,t)=>{const s={...b(Fe(e)),...b(Re(e)),...b(ke(e)),...b(Tt(e))};return t.forEach(n=>n.configure(s)),{...e,..._e(s),...De(s),...ze(s),...Lt(s)}};class ls extends $e{constructor(...[t]){const s=Mt(t||{}),n=xt(s),o=Oe(n),r=He(o),i=Ne(r),d=We(i),m=Ue(d),E=mt(m),U=qt(E,(t==null?void 0:t.extensions)||[]);super(U),this.config=U,this.middlewareStack.use(je(this.config)),this.middlewareStack.use(Me(this.config)),this.middlewareStack.use(Te(this.config)),this.middlewareStack.use(Le(this.config)),this.middlewareStack.use(qe(this.config)),this.middlewareStack.use(Ge(this.config)),this.middlewareStack.use(Be(this.config,{httpAuthSchemeParametersProvider:pt,identityProviderConfigProvider:async re=>new Je({"aws.auth#sigv4":re.credentials})})),this.middlewareStack.use(Ve(this.config))}destroy(){super.destroy()}}class c extends Ke{constructor(t){super(t),Object.setPrototypeOf(this,c.prototype)}}class A extends c{constructor(t){super({name:"InternalErrorException",$fault:"server",...t}),this.name="InternalErrorException",this.$fault="server",Object.setPrototypeOf(this,A.prototype)}}class R extends c{constructor(t){super({name:"InvalidParameterException",$fault:"client",...t}),this.name="InvalidParameterException",this.$fault="client",Object.setPrototypeOf(this,R.prototype)}}class k extends c{constructor(t){super({name:"LimitExceededException",$fault:"client",...t}),this.name="LimitExceededException",this.$fault="client",Object.setPrototypeOf(this,k.prototype)}}class _ extends c{constructor(t){super({name:"NotAuthorizedException",$fault:"client",...t}),this.name="NotAuthorizedException",this.$fault="client",Object.setPrototypeOf(this,_.prototype)}}class D extends c{constructor(t){super({name:"ResourceConflictException",$fault:"client",...t}),this.name="ResourceConflictException",this.$fault="client",Object.setPrototypeOf(this,D.prototype)}}class z extends c{constructor(t){super({name:"TooManyRequestsException",$fault:"client",...t}),this.name="TooManyRequestsException",this.$fault="client",Object.setPrototypeOf(this,z.prototype)}}class F extends c{constructor(t){super({name:"ResourceNotFoundException",$fault:"client",...t}),this.name="ResourceNotFoundException",this.$fault="client",Object.setPrototypeOf(this,F.prototype)}}class $ extends c{constructor(t){super({name:"ExternalServiceException",$fault:"client",...t}),this.name="ExternalServiceException",this.$fault="client",Object.setPrototypeOf(this,$.prototype)}}class O extends c{constructor(t){super({name:"InvalidIdentityPoolConfigurationException",$fault:"client",...t}),this.name="InvalidIdentityPoolConfigurationException",this.$fault="client",Object.setPrototypeOf(this,O.prototype)}}class H extends c{constructor(t){super({name:"DeveloperUserAlreadyRegisteredException",$fault:"client",...t}),this.name="DeveloperUserAlreadyRegisteredException",this.$fault="client",Object.setPrototypeOf(this,H.prototype)}}class N extends c{constructor(t){super({name:"ConcurrentModificationException",$fault:"client",...t}),this.name="ConcurrentModificationException",this.$fault="client",Object.setPrototypeOf(this,N.prototype)}}const Gt=async(e,t)=>{const s=ie("GetCredentialsForIdentity");let n;return n=JSON.stringify(a(e)),oe(t,s,"/",void 0,n)},Bt=async(e,t)=>{const s=ie("GetId");let n;return n=JSON.stringify(a(e)),oe(t,s,"/",void 0,n)},Jt=async(e,t)=>{if(e.statusCode>=300)return ne(e,t);const s=await C(e.body,t);let n={};return n=rs(s),{$metadata:l(e),...n}},Vt=async(e,t)=>{if(e.statusCode>=300)return ne(e,t);const s=await C(e.body,t);let n={};return n=a(s),{$metadata:l(e),...n}},ne=async(e,t)=>{const s={...e,body:await lt(e.body,t)},n=ut(e,s.body);switch(n){case"InternalErrorException":case"com.amazonaws.cognitoidentity#InternalErrorException":throw await Xt(s);case"InvalidParameterException":case"com.amazonaws.cognitoidentity#InvalidParameterException":throw await Zt(s);case"LimitExceededException":case"com.amazonaws.cognitoidentity#LimitExceededException":throw await es(s);case"NotAuthorizedException":case"com.amazonaws.cognitoidentity#NotAuthorizedException":throw await ts(s);case"ResourceConflictException":case"com.amazonaws.cognitoidentity#ResourceConflictException":throw await ss(s);case"TooManyRequestsException":case"com.amazonaws.cognitoidentity#TooManyRequestsException":throw await os(s);case"ResourceNotFoundException":case"com.amazonaws.cognitoidentity#ResourceNotFoundException":throw await ns(s);case"ExternalServiceException":case"com.amazonaws.cognitoidentity#ExternalServiceException":throw await Qt(s);case"InvalidIdentityPoolConfigurationException":case"com.amazonaws.cognitoidentity#InvalidIdentityPoolConfigurationException":throw await Yt(s);case"DeveloperUserAlreadyRegisteredException":case"com.amazonaws.cognitoidentity#DeveloperUserAlreadyRegisteredException":throw await Kt(s);case"ConcurrentModificationException":case"com.amazonaws.cognitoidentity#ConcurrentModificationException":throw await Wt(s);default:const o=s.body;return as({output:e,parsedBody:o,errorCode:n})}},Wt=async(e,t)=>{const s=e.body,n=a(s),o=new N({$metadata:l(e),...n});return u(o,s)},Kt=async(e,t)=>{const s=e.body,n=a(s),o=new H({$metadata:l(e),...n});return u(o,s)},Qt=async(e,t)=>{const s=e.body,n=a(s),o=new $({$metadata:l(e),...n});return u(o,s)},Xt=async(e,t)=>{const s=e.body,n=a(s),o=new A({$metadata:l(e),...n});return u(o,s)},Yt=async(e,t)=>{const s=e.body,n=a(s),o=new O({$metadata:l(e),...n});return u(o,s)},Zt=async(e,t)=>{const s=e.body,n=a(s),o=new R({$metadata:l(e),...n});return u(o,s)},es=async(e,t)=>{const s=e.body,n=a(s),o=new k({$metadata:l(e),...n});return u(o,s)},ts=async(e,t)=>{const s=e.body,n=a(s),o=new _({$metadata:l(e),...n});return u(o,s)},ss=async(e,t)=>{const s=e.body,n=a(s),o=new D({$metadata:l(e),...n});return u(o,s)},ns=async(e,t)=>{const s=e.body,n=a(s),o=new F({$metadata:l(e),...n});return u(o,s)},os=async(e,t)=>{const s=e.body,n=a(s),o=new z({$metadata:l(e),...n});return u(o,s)},is=(e,t)=>Y(e,{AccessKeyId:g,Expiration:s=>ot(it(rt(s))),SecretKey:g,SessionToken:g}),rs=(e,t)=>Y(e,{Credentials:s=>is(s),IdentityId:g}),l=e=>({httpStatusCode:e.statusCode,requestId:e.headers["x-amzn-requestid"]??e.headers["x-amzn-request-id"]??e.headers["x-amz-request-id"],extendedRequestId:e.headers["x-amz-id-2"],cfId:e.headers["x-amz-cf-id"]}),as=Qe(c),oe=async(e,t,s,n,o)=>{const{hostname:r,protocol:i="https",port:d,path:m}=await e.endpoint(),E={protocol:i,hostname:r,port:d,method:"POST",path:m.endsWith("/")?m.slice(0,-1)+s:m+s,headers:t};return o!==void 0&&(E.body=o),new nt(E)};function ie(e){return{"content-type":"application/x-amz-json-1.1","x-amz-target":`AWSCognitoIdentityService.${e}`}}class us extends K.classBuilder().ep({...Z}).m(function(t,s,n,o){return[Q(n,this.serialize,this.deserialize),X(n,t.getEndpointParameterInstructions())]}).s("AWSCognitoIdentityService","GetCredentialsForIdentity",{}).n("CognitoIdentityClient","GetCredentialsForIdentityCommand").f(void 0,void 0).ser(Gt).de(Jt).build(){}class ps extends K.classBuilder().ep({...Z}).m(function(t,s,n,o){return[Q(n,this.serialize,this.deserialize),X(n,t.getEndpointParameterInstructions())]}).s("AWSCognitoIdentityService","GetId",{}).n("CognitoIdentityClient","GetIdCommand").f(void 0,void 0).ser(Bt).de(Vt).build(){}export{ls as CognitoIdentityClient,us as GetCredentialsForIdentityCommand,ps as GetIdCommand};
