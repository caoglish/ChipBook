"use strict";(self["webpackChunkchipbook"]=self["webpackChunkchipbook"]||[]).push([[504],{5792:function(){},5524:function(){},4046:function(e,t,n){n.d(t,{Am:function(){return V},FA:function(){return N},Fy:function(){return w},I9:function(){return U},Im:function(){return M},Ku:function(){return K},T9:function(){return v},Tj:function(){return g},Uj:function(){return c},XA:function(){return y},ZQ:function(){return _},bD:function(){return L},cY:function(){return b},eX:function(){return R},g:function(){return x},hp:function(){return j},jZ:function(){return E},lT:function(){return C},lV:function(){return I},nr:function(){return k},sr:function(){return S},tD:function(){return $},u:function(){return u},yU:function(){return m},zW:function(){return A}});n(4114),n(4979);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,a=s?n[e.charAt(i)]:0;++i;const c=i<e.length,u=c?n[e.charAt(i)]:64;++i;const l=i<e.length,h=l?n[e.charAt(i)]:64;if(++i,null==t||null==a||null==u||null==h)throw new o;const d=t<<2|a>>4;if(r.push(d),64!==u){const e=a<<4&240|u>>2;if(r.push(e),64!==h){const e=u<<6&192|h;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(e){const t=r(e);return s.encodeByteArray(t,!0)},c=function(e){return a(e).replace(/\./g,"")},u=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=()=>l().__FIREBASE_DEFAULTS__,d=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",VUE_APP_FIREBASE_API_KEY:"AIzaSyBgr4hQwcBD0_UNRVxnuyuxnuTsmhHHE5U",VUE_APP_FIREBASE_APP_ID:"1:841329424894:web:20f290a554de3ae39228af",VUE_APP_FIREBASE_AUTH_DOMAIN:"chipsbook-ad9c3.firebaseapp.com",VUE_APP_FIREBASE_MESSAGING_SENDER_ID:"841329424894",VUE_APP_FIREBASE_PROJECT_ID:"chipsbook-ad9c3",VUE_APP_FIREBASE_STORAGE_BUCKET:"chipsbook-ad9c3.appspot.com",BASE_URL:"/ChipBook/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},f=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&u(e[1]);return t&&JSON.parse(t)},p=()=>{try{return h()||d()||f()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},g=e=>{var t,n;return null===(n=null===(t=p())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},m=e=>{const t=g(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},v=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config},y=e=>{var t;return null===(t=p())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class b{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[c(JSON.stringify(n)),c(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function E(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_())}function T(){var e;const t=null===(e=p())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function S(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function I(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function C(){const e=_();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function k(){return!T()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function A(){try{return"object"===typeof indexedDB}catch(e){return!1}}function R(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const O="FirebaseError";class x extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=O,Object.setPrototypeOf(this,x.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,N.prototype.create)}}class N{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?D(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new x(r,o,n);return a}}function D(e,t){return e.replace(P,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const P=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function L(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(F(n)&&F(s)){if(!L(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function F(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function V(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function U(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function j(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e,t){const n=new B(e,t);return n.subscribe.bind(n)}class B{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=W(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=z),void 0===r.error&&(r.error=z),void 0===r.complete&&(r.complete=z);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function W(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function z(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function K(e){return e&&e._delegate?e._delegate:e}},144:function(e,t,n){n.d(t,{C4:function(){return b},EW:function(){return Oe},Gc:function(){return ye},IG:function(){return Ce},IJ:function(){return Me},KR:function(){return Pe},Kh:function(){return ve},Pr:function(){return je},QW:function(){return $e},R1:function(){return Ve},X2:function(){return h},bl:function(){return w},fE:function(){return Te},g8:function(){return _e},hZ:function(){return x},i9:function(){return De},jr:function(){return l},ju:function(){return Se},lW:function(){return ze},o5:function(){return u},tB:function(){return be},u4:function(){return O},uY:function(){return a},ux:function(){return Ie},yC:function(){return o}});n(4114),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698);var r=n(4232);let i,s;class o{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=i,!e&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function a(e){return new o(e)}function c(e,t=i){t&&t.active&&t.effects.push(e)}function u(){return i}function l(e){i&&i.cleanups.push(e)}class h{constructor(e,t,n,r){this.fn=e,this.trigger=t,this.scheduler=n,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,c(this,r)}get dirty(){if(2===this._dirtyLevel||3===this._dirtyLevel){this._dirtyLevel=1,b();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(d(t.computed),this._dirtyLevel>=4))break}1===this._dirtyLevel&&(this._dirtyLevel=0),w()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=m,t=s;try{return m=!0,s=this,this._runnings++,f(this),this.fn()}finally{p(this),this._runnings--,s=t,m=e}}stop(){this.active&&(f(this),p(this),this.onStop&&this.onStop(),this.active=!1)}}function d(e){return e.value}function f(e){e._trackId++,e._depsLength=0}function p(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)g(e.deps[t],e);e.deps.length=e._depsLength}}function g(e,t){const n=e.get(t);void 0!==n&&t._trackId!==n&&(e.delete(t),0===e.size&&e.cleanup())}let m=!0,v=0;const y=[];function b(){y.push(m),m=!1}function w(){const e=y.pop();m=void 0===e||e}function _(){v++}function E(){v--;while(!v&&S.length)S.shift()()}function T(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const n=e.deps[e._depsLength];n!==t?(n&&g(n,e),e.deps[e._depsLength++]=t):e._depsLength++}}const S=[];function I(e,t,n){_();for(const r of e.keys()){let n;r._dirtyLevel<t&&(null!=n?n:n=e.get(r)===r._trackId)&&(r._shouldSchedule||(r._shouldSchedule=0===r._dirtyLevel),r._dirtyLevel=t),r._shouldSchedule&&(null!=n?n:n=e.get(r)===r._trackId)&&(r.trigger(),r._runnings&&!r.allowRecurse||2===r._dirtyLevel||(r._shouldSchedule=!1,r.scheduler&&S.push(r.scheduler)))}E()}const C=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},k=new WeakMap,A=Symbol(""),R=Symbol("");function O(e,t,n){if(m&&s){let t=k.get(e);t||k.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=C((()=>t.delete(n)))),T(s,r,void 0)}}function x(e,t,n,i,s,o){const a=k.get(e);if(!a)return;let c=[];if("clear"===t)c=[...a.values()];else if("length"===n&&(0,r.cy)(e)){const e=Number(i);a.forEach(((t,n)=>{("length"===n||!(0,r.Bm)(n)&&n>=e)&&c.push(t)}))}else switch(void 0!==n&&c.push(a.get(n)),t){case"add":(0,r.cy)(e)?(0,r.yI)(n)&&c.push(a.get("length")):(c.push(a.get(A)),(0,r.CE)(e)&&c.push(a.get(R)));break;case"delete":(0,r.cy)(e)||(c.push(a.get(A)),(0,r.CE)(e)&&c.push(a.get(R)));break;case"set":(0,r.CE)(e)&&c.push(a.get(A));break}_();for(const r of c)r&&I(r,4,void 0);E()}function N(e,t){const n=k.get(e);return n&&n.get(t)}const D=(0,r.pD)("__proto__,__v_isRef,__isVue"),P=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.Bm)),M=L();function L(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Ie(this);for(let t=0,i=this.length;t<i;t++)O(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Ie)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){b(),_();const n=Ie(this)[t].apply(this,e);return E(),w(),n}})),e}function F(e){(0,r.Bm)(e)||(e=String(e));const t=Ie(this);return O(t,"has",e),t.hasOwnProperty(e)}class V{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){const i=this._isReadonly,s=this._isShallow;if("__v_isReactive"===t)return!i;if("__v_isReadonly"===t)return i;if("__v_isShallow"===t)return s;if("__v_raw"===t)return n===(i?s?pe:fe:s?de:he).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=(0,r.cy)(e);if(!i){if(o&&(0,r.$3)(M,t))return Reflect.get(M,t,n);if("hasOwnProperty"===t)return F}const a=Reflect.get(e,t,n);return((0,r.Bm)(t)?P.has(t):D(t))?a:(i||O(e,"get",t),s?a:De(a)?o&&(0,r.yI)(t)?a:a.value:(0,r.Gv)(a)?i?be(a):ve(a):a)}}class U extends V{constructor(e=!1){super(!1,e)}set(e,t,n,i){let s=e[t];if(!this._isShallow){const t=Ee(s);if(Te(n)||Ee(n)||(s=Ie(s),n=Ie(n)),!(0,r.cy)(e)&&De(s)&&!De(n))return!t&&(s.value=n,!0)}const o=(0,r.cy)(e)&&(0,r.yI)(t)?Number(t)<e.length:(0,r.$3)(e,t),a=Reflect.set(e,t,n,i);return e===Ie(i)&&(o?(0,r.$H)(n,s)&&x(e,"set",t,n,s):x(e,"add",t,n)),a}deleteProperty(e,t){const n=(0,r.$3)(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&x(e,"delete",t,void 0,i),s}has(e,t){const n=Reflect.has(e,t);return(0,r.Bm)(t)&&P.has(t)||O(e,"has",t),n}ownKeys(e){return O(e,"iterate",(0,r.cy)(e)?"length":A),Reflect.ownKeys(e)}}class j extends V{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const $=new U,B=new j,W=new U(!0),z=e=>e,K=e=>Reflect.getPrototypeOf(e);function q(e,t,n=!1,i=!1){e=e["__v_raw"];const s=Ie(e),o=Ie(t);n||((0,r.$H)(t,o)&&O(s,"get",t),O(s,"get",o));const{has:a}=K(s),c=i?z:n?Ae:ke;return a.call(s,t)?c(e.get(t)):a.call(s,o)?c(e.get(o)):void(e!==s&&e.get(t))}function H(e,t=!1){const n=this["__v_raw"],i=Ie(n),s=Ie(e);return t||((0,r.$H)(e,s)&&O(i,"has",e),O(i,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function G(e,t=!1){return e=e["__v_raw"],!t&&O(Ie(e),"iterate",A),Reflect.get(e,"size",e)}function Q(e,t=!1){t||Te(e)||Ee(e)||(e=Ie(e));const n=Ie(this),r=K(n),i=r.has.call(n,e);return i||(n.add(e),x(n,"add",e,e)),this}function X(e,t,n=!1){n||Te(t)||Ee(t)||(t=Ie(t));const i=Ie(this),{has:s,get:o}=K(i);let a=s.call(i,e);a||(e=Ie(e),a=s.call(i,e));const c=o.call(i,e);return i.set(e,t),a?(0,r.$H)(t,c)&&x(i,"set",e,t,c):x(i,"add",e,t),this}function Y(e){const t=Ie(this),{has:n,get:r}=K(t);let i=n.call(t,e);i||(e=Ie(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&x(t,"delete",e,void 0,s),o}function J(){const e=Ie(this),t=0!==e.size,n=void 0,r=e.clear();return t&&x(e,"clear",void 0,void 0,n),r}function Z(e,t){return function(n,r){const i=this,s=i["__v_raw"],o=Ie(s),a=t?z:e?Ae:ke;return!e&&O(o,"iterate",A),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function ee(e,t,n){return function(...i){const s=this["__v_raw"],o=Ie(s),a=(0,r.CE)(o),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=s[e](...i),h=n?z:t?Ae:ke;return!t&&O(o,"iterate",u?R:A),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function te(e){return function(...t){return"delete"!==e&&("clear"===e?void 0:this)}}function ne(){const e={get(e){return q(this,e)},get size(){return G(this)},has:H,add:Q,set:X,delete:Y,clear:J,forEach:Z(!1,!1)},t={get(e){return q(this,e,!1,!0)},get size(){return G(this)},has:H,add(e){return Q.call(this,e,!0)},set(e,t){return X.call(this,e,t,!0)},delete:Y,clear:J,forEach:Z(!1,!0)},n={get(e){return q(this,e,!0)},get size(){return G(this,!0)},has(e){return H.call(this,e,!0)},add:te("add"),set:te("set"),delete:te("delete"),clear:te("clear"),forEach:Z(!0,!1)},r={get(e){return q(this,e,!0,!0)},get size(){return G(this,!0)},has(e){return H.call(this,e,!0)},add:te("add"),set:te("set"),delete:te("delete"),clear:te("clear"),forEach:Z(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=ee(i,!1,!1),n[i]=ee(i,!0,!1),t[i]=ee(i,!1,!0),r[i]=ee(i,!0,!0)})),[e,n,t,r]}const[re,ie,se,oe]=ne();function ae(e,t){const n=t?e?oe:se:e?ie:re;return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.$3)(n,i)&&i in t?n:t,i,s)}const ce={get:ae(!1,!1)},ue={get:ae(!1,!0)},le={get:ae(!0,!1)};const he=new WeakMap,de=new WeakMap,fe=new WeakMap,pe=new WeakMap;function ge(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function me(e){return e["__v_skip"]||!Object.isExtensible(e)?0:ge((0,r.Zf)(e))}function ve(e){return Ee(e)?e:we(e,!1,$,ce,he)}function ye(e){return we(e,!1,W,ue,de)}function be(e){return we(e,!0,B,le,fe)}function we(e,t,n,i,s){if(!(0,r.Gv)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=me(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return s.set(e,c),c}function _e(e){return Ee(e)?_e(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Ee(e){return!(!e||!e["__v_isReadonly"])}function Te(e){return!(!e||!e["__v_isShallow"])}function Se(e){return!!e&&!!e["__v_raw"]}function Ie(e){const t=e&&e["__v_raw"];return t?Ie(t):e}function Ce(e){return Object.isExtensible(e)&&(0,r.yQ)(e,"__v_skip",!0),e}const ke=e=>(0,r.Gv)(e)?ve(e):e,Ae=e=>(0,r.Gv)(e)?be(e):e;class Re{constructor(e,t,n,r){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this["__v_isReadonly"]=!1,this.effect=new h((()=>e(this._value)),(()=>Ne(this,2===this.effect._dirtyLevel?2:3))),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Ie(this);return e._cacheable&&!e.effect.dirty||!(0,r.$H)(e._value,e._value=e.effect.run())||Ne(e,4),xe(e),e.effect._dirtyLevel>=2&&Ne(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Oe(e,t,n=!1){let i,s;const o=(0,r.Tn)(e);o?(i=e,s=r.tE):(i=e.get,s=e.set);const a=new Re(i,s,o||!s,n);return a}function xe(e){var t;m&&s&&(e=Ie(e),T(s,null!=(t=e.dep)?t:e.dep=C((()=>e.dep=void 0),e instanceof Re?e:void 0),void 0))}function Ne(e,t=4,n,r){e=Ie(e);const i=e.dep;i&&I(i,t,void 0)}function De(e){return!(!e||!0!==e.__v_isRef)}function Pe(e){return Le(e,!1)}function Me(e){return Le(e,!0)}function Le(e,t){return De(e)?e:new Fe(e,t)}class Fe{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ie(e),this._value=t?e:ke(e)}get value(){return xe(this),this._value}set value(e){const t=this.__v_isShallow||Te(e)||Ee(e);if(e=t?e:Ie(e),(0,r.$H)(e,this._rawValue)){const n=this._rawValue;this._rawValue=e,this._value=t?e:ke(e),Ne(this,4,e,n)}}}function Ve(e){return De(e)?e.value:e}const Ue={get:(e,t,n)=>Ve(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return De(i)&&!De(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function je(e){return _e(e)?e:new Proxy(e,Ue)}function $e(e){const t=(0,r.cy)(e)?new Array(e.length):{};for(const n in e)t[n]=Ke(e,n);return t}class Be{constructor(e,t,n){this._object=e,this._key=t,this._defaultValue=n,this.__v_isRef=!0}get value(){const e=this._object[this._key];return void 0===e?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return N(Ie(this._object),this._key)}}class We{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function ze(e,t,n){return De(e)?e:(0,r.Tn)(e)?new We(e):(0,r.Gv)(e)&&arguments.length>1?Ke(e,t,n):Pe(e)}function Ke(e,t,n){const r=e[t];return De(r)?r:new Be(e,t,n)}},6768:function(e,t,n){n.d(t,{$u:function(){return de},$y:function(){return Te},CE:function(){return _n},Df:function(){return X},E3:function(){return xn},EW:function(){return ar},EY:function(){return hn},FK:function(){return ln},Gt:function(){return Ye},Gy:function(){return U},Ic:function(){return he},Im:function(){return At},K9:function(){return Dt},KC:function(){return ue},Lk:function(){return kn},MZ:function(){return Q},Mw:function(){return dn},OW:function(){return q},PS:function(){return Ze},Q3:function(){return Dn},QP:function(){return $},Qi:function(){return N},R8:function(){return lr},WQ:function(){return Je},Wv:function(){return En},Y4:function(){return ne},bF:function(){return An},bo:function(){return M},dY:function(){return y},eW:function(){return Nn},g2:function(){return _e},gN:function(){return Se},h:function(){return cr},jt:function(){return D},k6:function(){return P},nI:function(){return Wn},nT:function(){return zt},pM:function(){return Y},pR:function(){return z},qL:function(){return o},sV:function(){return le},uX:function(){return mn},v6:function(){return Fn},vv:function(){return Tn},wB:function(){return qt},xo:function(){return fe}});n(4114),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698);var r=n(144),i=n(4232);function s(e,t,n,r){try{return r?e(...r):e()}catch(i){a(i,t,n)}}function o(e,t,n,r){if((0,i.Tn)(e)){const o=s(e,t,n,r);return o&&(0,i.yL)(o)&&o.catch((e=>{a(e,t,n)})),o}if((0,i.cy)(e)){const i=[];for(let s=0;s<e.length;s++)i.push(o(e[s],t,n,r));return i}}function a(e,t,n,i=!0){const o=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;while(i){const t=i.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,o,a))return;i=i.parent}const c=t.appContext.config.errorHandler;if(c)return(0,r.C4)(),s(c,null,10,[e,o,a]),void(0,r.bl)()}c(e,n,o,i)}function c(e,t,n,r=!0){console.error(e)}let u=!1,l=!1;const h=[];let d=0;const f=[];let p=null,g=0;const m=Promise.resolve();let v=null;function y(e){const t=v||m;return e?t.then(this?e.bind(this):e):t}function b(e){let t=d+1,n=h.length;while(t<n){const r=t+n>>>1,i=h[r],s=C(i);s<e||s===e&&i.pre?t=r+1:n=r}return t}function w(e){h.length&&h.includes(e,u&&e.allowRecurse?d+1:d)||(null==e.id?h.push(e):h.splice(b(e.id),0,e),_())}function _(){u||l||(l=!0,v=m.then(A))}function E(e){const t=h.indexOf(e);t>d&&h.splice(t,1)}function T(e){(0,i.cy)(e)?f.push(...e):p&&p.includes(e,e.allowRecurse?g+1:g)||f.push(e),_()}function S(e,t,n=(u?d+1:0)){for(0;n<h.length;n++){const t=h[n];if(t&&t.pre){if(e&&t.id!==e.uid)continue;0,h.splice(n,1),n--,t()}}}function I(e){if(f.length){const e=[...new Set(f)].sort(((e,t)=>C(e)-C(t)));if(f.length=0,p)return void p.push(...e);for(p=e,g=0;g<p.length;g++){const e=p[g];0,!1!==e.active&&e()}p=null,g=0}}const C=e=>null==e.id?1/0:e.id,k=(e,t)=>{const n=C(e)-C(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function A(e){l=!1,u=!0,h.sort(k);i.tE;try{for(d=0;d<h.length;d++){const e=h[d];e&&!1!==e.active&&s(e,e.i,e.i?15:14)}}finally{d=0,h.length=0,I(e),u=!1,v=null,(h.length||f.length)&&A(e)}}let R=null,O=null;function x(e){const t=R;return R=e,O=e&&e.type.__scopeId||null,t}function N(e){O=e}function D(){O=null}function P(e,t=R,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&bn(-1);const i=x(t);let s;try{s=e(...n)}finally{x(i),r._d&&bn(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function M(e,t){if(null===R)return e;const n=ir(R),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,o,a,c=i.MZ]=t[s];e&&((0,i.Tn)(e)&&(e={mounted:e,updated:e}),e.deep&&Xt(o),r.push({dir:e,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return e}function L(e,t,n,i){const s=e.dirs,a=t&&t.dirs;for(let c=0;c<s.length;c++){const u=s[c];a&&(u.oldValue=a[c].value);let l=u.dir[i];l&&((0,r.C4)(),o(l,n,8,[e.el,u,e,t]),(0,r.bl)())}}const F=Symbol("_leaveCb"),V=Symbol("_enterCb");function U(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return le((()=>{e.isMounted=!0})),fe((()=>{e.isUnmounting=!0})),e}const j=[Function,Array],$={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:j,onEnter:j,onAfterEnter:j,onEnterCancelled:j,onBeforeLeave:j,onLeave:j,onAfterLeave:j,onLeaveCancelled:j,onBeforeAppear:j,onAppear:j,onAfterAppear:j,onAppearCancelled:j},B=e=>{const t=e.subTree;return t.component?B(t.component):t},W={name:"BaseTransition",props:$,setup(e,{slots:t}){const n=Wn(),i=U();return()=>{const s=t.default&&X(t.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){let e=!1;for(const t of s)if(t.type!==dn){0,o=t,e=!0;break}}const a=(0,r.ux)(e),{mode:c}=a;if(i.isLeaving)return H(o);const u=G(o);if(!u)return H(o);let l=q(u,a,i,n,(e=>l=e));Q(u,l);const h=n.subTree,d=h&&G(h);if(d&&d.type!==dn&&!Sn(u,d)&&B(n).type!==dn){const e=q(d,a,i,n);if(Q(d,e),"out-in"===c&&u.type!==dn)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,!1!==n.update.active&&(n.effect.dirty=!0,n.update())},H(o);"in-out"===c&&u.type!==dn&&(e.delayLeave=(e,t,n)=>{const r=K(i,d);r[String(d.key)]=d,e[F]=()=>{t(),e[F]=void 0,delete l.delayedLeave},l.delayedLeave=n})}return o}}},z=W;function K(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function q(e,t,n,r,s){const{appear:a,mode:c,persisted:u=!1,onBeforeEnter:l,onEnter:h,onAfterEnter:d,onEnterCancelled:f,onBeforeLeave:p,onLeave:g,onAfterLeave:m,onLeaveCancelled:v,onBeforeAppear:y,onAppear:b,onAfterAppear:w,onAppearCancelled:_}=t,E=String(e.key),T=K(n,e),S=(e,t)=>{e&&o(e,r,9,t)},I=(e,t)=>{const n=t[1];S(e,t),(0,i.cy)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},C={mode:c,persisted:u,beforeEnter(t){let r=l;if(!n.isMounted){if(!a)return;r=y||l}t[F]&&t[F](!0);const i=T[E];i&&Sn(e,i)&&i.el[F]&&i.el[F](),S(r,[t])},enter(e){let t=h,r=d,i=f;if(!n.isMounted){if(!a)return;t=b||h,r=w||d,i=_||f}let s=!1;const o=e[V]=t=>{s||(s=!0,S(t?i:r,[e]),C.delayedLeave&&C.delayedLeave(),e[V]=void 0)};t?I(t,[e,o]):o()},leave(t,r){const i=String(e.key);if(t[V]&&t[V](!0),n.isUnmounting)return r();S(p,[t]);let s=!1;const o=t[F]=n=>{s||(s=!0,r(),S(n?v:m,[t]),t[F]=void 0,T[i]===e&&delete T[i])};T[i]=e,g?I(g,[t,o]):o()},clone(e){const i=q(e,t,n,r,s);return s&&s(i),i}};return C}function H(e){if(Z(e))return e=xn(e),e.children=null,e}function G(e){if(!Z(e))return e;const{shapeFlag:t,children:n}=e;if(n){if(16&t)return n[0];if(32&t&&(0,i.Tn)(n.default))return n.default()}}function Q(e,t){6&e.shapeFlag&&e.component?Q(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function X(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===ln?(128&o.patchFlag&&i++,r=r.concat(X(o.children,t,a))):(t||o.type!==dn)&&r.push(null!=a?xn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}
/*! #__NO_SIDE_EFFECTS__ */function Y(e,t){return(0,i.Tn)(e)?(()=>(0,i.X$)({name:e.name},t,{setup:e}))():e}const J=e=>!!e.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const Z=e=>e.type.__isKeepAlive;RegExp,RegExp;function ee(e,t){return(0,i.cy)(e)?e.some((e=>ee(e,t))):(0,i.Kg)(e)?e.split(",").includes(t):!!(0,i.gd)(e)&&e.test(t)}function te(e,t){re(e,"a",t)}function ne(e,t){re(e,"da",t)}function re(e,t,n=Bn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(ae(t,r,n),n){let e=n.parent;while(e&&e.parent)Z(e.parent.vnode)&&ie(r,t,n,e),e=e.parent}}function ie(e,t,n,r){const s=ae(t,e,r,!0);pe((()=>{(0,i.TF)(r[t],s)}),n)}function se(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function oe(e){return 128&e.shapeFlag?e.ssContent:e}function ae(e,t,n=Bn,i=!1){if(n){const s=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{(0,r.C4)();const s=qn(n),a=o(t,n,e,i);return s(),(0,r.bl)(),a});return i?s.unshift(a):s.push(a),a}}const ce=e=>(t,n=Bn)=>{Yn&&"sp"!==e||ae(e,((...e)=>t(...e)),n)},ue=ce("bm"),le=ce("m"),he=ce("bu"),de=ce("u"),fe=ce("bum"),pe=ce("um"),ge=ce("sp"),me=ce("rtg"),ve=ce("rtc");function ye(e,t=Bn){ae("ec",e,t)}const be="components",we="directives";function _e(e,t){return Ie(be,e,!0,t)||e}const Ee=Symbol.for("v-ndc");function Te(e){return(0,i.Kg)(e)?Ie(be,e,!1)||e:e||Ee}function Se(e){return Ie(we,e)}function Ie(e,t,n=!0,r=!1){const s=R||Bn;if(s){const n=s.type;if(e===be){const e=sr(n,!1);if(e&&(e===t||e===(0,i.PT)(t)||e===(0,i.ZH)((0,i.PT)(t))))return n}const o=Ce(s[e]||n[e],t)||Ce(s.appContext[e],t);return!o&&r?n:o}}function Ce(e,t){return e&&(e[t]||e[(0,i.PT)(t)]||e[(0,i.ZH)((0,i.PT)(t))])}const ke=e=>e?Gn(e)?ir(e):ke(e.parent):null,Ae=(0,i.X$)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ke(e.parent),$root:e=>ke(e.root),$emit:e=>e.emit,$options:e=>Fe(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,w(e.update)}),$nextTick:e=>e.n||(e.n=y.bind(e.proxy)),$watch:e=>Gt.bind(e)}),Re=(e,t)=>e!==i.MZ&&!e.__isScriptSetup&&(0,i.$3)(e,t),Oe={get({_:e},t){if("__v_skip"===t)return!0;const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:u,appContext:l}=e;let h;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(Re(s,t))return c[t]=1,s[t];if(o!==i.MZ&&(0,i.$3)(o,t))return c[t]=2,o[t];if((h=e.propsOptions[0])&&(0,i.$3)(h,t))return c[t]=3,a[t];if(n!==i.MZ&&(0,i.$3)(n,t))return c[t]=4,n[t];Ne&&(c[t]=0)}}const d=Ae[t];let f,p;return d?("$attrs"===t&&(0,r.u4)(e.attrs,"get",""),d(e)):(f=u.__cssModules)&&(f=f[t])?f:n!==i.MZ&&(0,i.$3)(n,t)?(c[t]=4,n[t]):(p=l.config.globalProperties,(0,i.$3)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return Re(s,t)?(s[t]=n,!0):r!==i.MZ&&(0,i.$3)(r,t)?(r[t]=n,!0):!(0,i.$3)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||e!==i.MZ&&(0,i.$3)(e,a)||Re(t,a)||(c=o[0])&&(0,i.$3)(c,a)||(0,i.$3)(r,a)||(0,i.$3)(Ae,a)||(0,i.$3)(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.$3)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function xe(e){return(0,i.cy)(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}let Ne=!0;function De(e){const t=Fe(e),n=e.proxy,s=e.ctx;Ne=!1,t.beforeCreate&&Me(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:g,updated:m,activated:v,deactivated:y,beforeDestroy:b,beforeUnmount:w,destroyed:_,unmounted:E,render:T,renderTracked:S,renderTriggered:I,errorCaptured:C,serverPrefetch:k,expose:A,inheritAttrs:R,components:O,directives:x,filters:N}=t,D=null;if(h&&Pe(h,s,D),c)for(const r in c){const e=c[r];(0,i.Tn)(e)&&(s[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,i.Gv)(t)&&(e.data=(0,r.Kh)(t))}if(Ne=!0,a)for(const r in a){const e=a[r],t=(0,i.Tn)(e)?e.bind(n,n):(0,i.Tn)(e.get)?e.get.bind(n,n):i.tE;0;const o=!(0,i.Tn)(e)&&(0,i.Tn)(e.set)?e.set.bind(n):i.tE,c=ar({get:t,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(u)for(const r in u)Le(u[r],s,n,r);if(l){const e=(0,i.Tn)(l)?l.call(n):l;Reflect.ownKeys(e).forEach((t=>{Ye(t,e[t])}))}function P(e,t){(0,i.cy)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&Me(d,e,"c"),P(ue,f),P(le,p),P(he,g),P(de,m),P(te,v),P(ne,y),P(ye,C),P(ve,S),P(me,I),P(fe,w),P(pe,E),P(ge,k),(0,i.cy)(A))if(A.length){const t=e.exposed||(e.exposed={});A.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});T&&e.render===i.tE&&(e.render=T),null!=R&&(e.inheritAttrs=R),O&&(e.components=O),x&&(e.directives=x)}function Pe(e,t,n=i.tE){(0,i.cy)(e)&&(e=Be(e));for(const s in e){const n=e[s];let o;o=(0,i.Gv)(n)?"default"in n?Je(n.from||s,n.default,!0):Je(n.from||s):Je(n),(0,r.i9)(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:e=>o.value=e}):t[s]=o}}function Me(e,t,n){o((0,i.cy)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Le(e,t,n,r){const s=r.includes(".")?Qt(n,r):()=>n[r];if((0,i.Kg)(e)){const n=t[e];(0,i.Tn)(n)&&qt(s,n)}else if((0,i.Tn)(e))qt(s,e.bind(n));else if((0,i.Gv)(e))if((0,i.cy)(e))e.forEach((e=>Le(e,t,n,r)));else{const r=(0,i.Tn)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.Tn)(r)&&qt(s,r,e)}else 0}function Fe(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,c=o.get(t);let u;return c?u=c:s.length||n||r?(u={},s.length&&s.forEach((e=>Ve(u,e,a,!0))),Ve(u,t,a)):u=t,(0,i.Gv)(t)&&o.set(t,u),u}function Ve(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Ve(e,s,n,!0),i&&i.forEach((t=>Ve(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=Ue[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const Ue={data:je,props:Ke,emits:Ke,methods:ze,computed:ze,beforeCreate:We,created:We,beforeMount:We,mounted:We,beforeUpdate:We,updated:We,beforeDestroy:We,beforeUnmount:We,destroyed:We,unmounted:We,activated:We,deactivated:We,errorCaptured:We,serverPrefetch:We,components:ze,directives:ze,watch:qe,provide:je,inject:$e};function je(e,t){return t?e?function(){return(0,i.X$)((0,i.Tn)(e)?e.call(this,this):e,(0,i.Tn)(t)?t.call(this,this):t)}:t:e}function $e(e,t){return ze(Be(e),Be(t))}function Be(e){if((0,i.cy)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function We(e,t){return e?[...new Set([].concat(e,t))]:t}function ze(e,t){return e?(0,i.X$)(Object.create(null),e,t):t}function Ke(e,t){return e?(0,i.cy)(e)&&(0,i.cy)(t)?[...new Set([...e,...t])]:(0,i.X$)(Object.create(null),xe(e),xe(null!=t?t:{})):t}function qe(e,t){if(!e)return t;if(!t)return e;const n=(0,i.X$)(Object.create(null),e);for(const r in t)n[r]=We(e[r],t[r]);return n}function He(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ge=0;function Qe(e,t){return function(n,r=null){(0,i.Tn)(n)||(n=(0,i.X$)({},n)),null==r||(0,i.Gv)(r)||(r=null);const s=He(),o=new WeakSet;let a=!1;const c=s.app={_uid:Ge++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:ur,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&(0,i.Tn)(e.install)?(o.add(e),e.install(c,...t)):(0,i.Tn)(e)&&(o.add(e),e(c,...t))),c},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),c},component(e,t){return t?(s.components[e]=t,c):s.components[e]},directive(e,t){return t?(s.directives[e]=t,c):s.directives[e]},mount(i,o,u){if(!a){0;const l=An(n,r);return l.appContext=s,!0===u?u="svg":!1===u&&(u=void 0),o&&t?t(l,i):e(l,i,u),a=!0,c._container=i,i.__vue_app__=c,ir(l.component)}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return s.provides[e]=t,c},runWithContext(e){const t=Xe;Xe=c;try{return e()}finally{Xe=t}}};return c}}let Xe=null;function Ye(e,t){if(Bn){let n=Bn.provides;const r=Bn.parent&&Bn.parent.provides;r===n&&(n=Bn.provides=Object.create(r)),n[e]=t}else 0}function Je(e,t,n=!1){const r=Bn||R;if(r||Xe){const s=Xe?Xe._context.provides:r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,i.Tn)(t)?t.call(r&&r.proxy):t}else 0}function Ze(){return!!(Bn||R||Xe)}const et={},tt=()=>Object.create(et),nt=e=>Object.getPrototypeOf(e)===et;function rt(e,t,n,i=!1){const s={},o=tt();e.propsDefaults=Object.create(null),st(e,t,s,o);for(const r in e.propsOptions[0])r in s||(s[r]=void 0);n?e.props=i?s:(0,r.Gc)(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function it(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=e,u=(0,r.ux)(o),[l]=e.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;st(e,t,o,a)&&(h=!0);for(const s in u)t&&((0,i.$3)(t,s)||(r=(0,i.Tg)(s))!==s&&(0,i.$3)(t,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=ot(l,u,s,void 0,e,!0)):delete o[s]);if(a!==u)for(const e in a)t&&(0,i.$3)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(en(e.emitsOptions,s))continue;const c=t[s];if(l)if((0,i.$3)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const t=(0,i.PT)(s);o[t]=ot(l,u,t,c,e,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.hZ)(e.attrs,"set","")}function st(e,t,n,s){const[o,a]=e.propsOptions;let c,u=!1;if(t)for(let r in t){if((0,i.SU)(r))continue;const l=t[r];let h;o&&(0,i.$3)(o,h=(0,i.PT)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:en(e.emitsOptions,r)||r in s&&l===s[r]||(s[r]=l,u=!0)}if(a){const t=(0,r.ux)(n),s=c||i.MZ;for(let r=0;r<a.length;r++){const c=a[r];n[c]=ot(o,t,c,s[c],e,!(0,i.$3)(s,c))}}return u}function ot(e,t,n,r,s,o){const a=e[n];if(null!=a){const e=(0,i.$3)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.Tn)(e)){const{propsDefaults:i}=s;if(n in i)r=i[n];else{const o=qn(s);r=i[n]=e.call(null,t),o()}}else r=e}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.Tg)(n)||(r=!0))}return r}const at=new WeakMap;function ct(e,t,n=!1){const r=n?at:t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},c=[];let u=!1;if(!(0,i.Tn)(e)){const r=e=>{u=!0;const[n,r]=ct(e,t,!0);(0,i.X$)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!u)return(0,i.Gv)(e)&&r.set(e,i.Oj),i.Oj;if((0,i.cy)(o))for(let h=0;h<o.length;h++){0;const e=(0,i.PT)(o[h]);ut(e)&&(a[e]=i.MZ)}else if(o){0;for(const e in o){const t=(0,i.PT)(e);if(ut(t)){const n=o[e],r=a[t]=(0,i.cy)(n)||(0,i.Tn)(n)?{type:n}:(0,i.X$)({},n),s=r.type;let u=!1,l=!0;if((0,i.cy)(s))for(let e=0;e<s.length;++e){const t=s[e],n=(0,i.Tn)(t)&&t.name;if("Boolean"===n){u=!0;break}"String"===n&&(l=!1)}else u=(0,i.Tn)(s)&&"Boolean"===s.name;r[0]=u,r[1]=l,(u||(0,i.$3)(r,"default"))&&c.push(t)}}}const l=[a,c];return(0,i.Gv)(e)&&r.set(e,l),l}function ut(e){return"$"!==e[0]&&!(0,i.SU)(e)}const lt=e=>"_"===e[0]||"$stable"===e,ht=e=>(0,i.cy)(e)?e.map(Pn):[Pn(e)],dt=(e,t,n)=>{if(t._n)return t;const r=P(((...e)=>ht(t(...e))),n);return r._c=!1,r},ft=(e,t,n)=>{const r=e._ctx;for(const s in e){if(lt(s))continue;const n=e[s];if((0,i.Tn)(n))t[s]=dt(s,n,r);else if(null!=n){0;const e=ht(n);t[s]=()=>e}}},pt=(e,t)=>{const n=ht(t);e.slots.default=()=>n},gt=(e,t,n)=>{for(const r in t)(n||"_"!==r)&&(e[r]=t[r])},mt=(e,t,n)=>{const r=e.slots=tt();if(32&e.vnode.shapeFlag){const e=t._;e?(gt(r,t,n),n&&(0,i.yQ)(r,"_",e,!0)):ft(t,r)}else t&&pt(e,t)},vt=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i.MZ;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:gt(s,t,n):(o=!t.$stable,ft(t,s)),a=t}else t&&(pt(e,t),a={default:1});if(o)for(const i in s)lt(i)||null!=a[i]||delete s[i]};function yt(e,t,n,o,a=!1){if((0,i.cy)(e))return void e.forEach(((e,r)=>yt(e,t&&((0,i.cy)(t)?t[r]:t),n,o,a)));if(J(o)&&!a)return;const c=4&o.shapeFlag?ir(o.component):o.el,u=a?null:c,{i:l,r:h}=e;const d=t&&t.r,f=l.refs===i.MZ?l.refs={}:l.refs,p=l.setupState;if(null!=d&&d!==h&&((0,i.Kg)(d)?(f[d]=null,(0,i.$3)(p,d)&&(p[d]=null)):(0,r.i9)(d)&&(d.value=null)),(0,i.Tn)(h))s(h,l,12,[u,f]);else{const t=(0,i.Kg)(h),s=(0,r.i9)(h);if(t||s){const r=()=>{if(e.f){const n=t?(0,i.$3)(p,h)?p[h]:f[h]:h.value;a?(0,i.cy)(n)&&(0,i.TF)(n,c):(0,i.cy)(n)?n.includes(c)||n.push(c):t?(f[h]=[c],(0,i.$3)(p,h)&&(p[h]=f[h])):(h.value=[c],e.k&&(f[e.k]=h.value))}else t?(f[h]=u,(0,i.$3)(p,h)&&(p[h]=u)):s&&(h.value=u,e.k&&(f[e.k]=u))};u?(r.id=-1,Nt(r,n)):r()}else 0}}const bt=Symbol("_vte"),wt=e=>e.__isTeleport,_t=e=>e&&(e.disabled||""===e.disabled),Et=e=>"undefined"!==typeof SVGElement&&e instanceof SVGElement,Tt=e=>"function"===typeof MathMLElement&&e instanceof MathMLElement,St=(e,t)=>{const n=e&&e.to;if((0,i.Kg)(n)){if(t){const e=t(n);return e}return null}return n},It={name:"Teleport",__isTeleport:!0,process(e,t,n,r,i,s,o,a,c,u){const{mc:l,pc:h,pbc:d,o:{insert:f,querySelector:p,createText:g,createComment:m}}=u,v=_t(t.props);let{shapeFlag:y,children:b,dynamicChildren:w}=t;if(null==e){const e=t.el=g(""),u=t.anchor=g("");f(e,n,r),f(u,n,r);const h=t.target=St(t.props,p),d=Ot(h,t,g,f);h&&("svg"===o||Et(h)?o="svg":("mathml"===o||Tt(h))&&(o="mathml"));const m=(e,t)=>{16&y&&l(b,e,t,i,s,o,a,c)};v?m(n,u):h&&m(h,d)}else{t.el=e.el,t.targetStart=e.targetStart;const r=t.anchor=e.anchor,l=t.target=e.target,f=t.targetAnchor=e.targetAnchor,g=_t(e.props),m=g?n:l,y=g?r:f;if("svg"===o||Et(l)?o="svg":("mathml"===o||Tt(l))&&(o="mathml"),w?(d(e.dynamicChildren,w,m,i,s,o,a),Vt(e,t,!0)):c||h(e,t,m,y,i,s,o,a,!1),v)g?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):Ct(t,n,r,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const e=t.target=St(t.props,p);e&&Ct(t,e,null,u,0)}else g&&Ct(t,l,f,u,1)}Rt(t)},remove(e,t,n,{um:r,o:{remove:i}},s){const{shapeFlag:o,children:a,anchor:c,targetStart:u,targetAnchor:l,target:h,props:d}=e;if(h&&(i(u),i(l)),s&&i(c),16&o){const e=s||!_t(d);for(let i=0;i<a.length;i++){const s=a[i];r(s,t,n,e,!!s.dynamicChildren)}}},move:Ct,hydrate:kt};function Ct(e,t,n,{o:{insert:r},m:i},s=2){0===s&&r(e.targetAnchor,t,n);const{el:o,anchor:a,shapeFlag:c,children:u,props:l}=e,h=2===s;if(h&&r(o,t,n),(!h||_t(l))&&16&c)for(let d=0;d<u.length;d++)i(u[d],t,n,2);h&&r(a,t,n)}function kt(e,t,n,r,i,s,{o:{nextSibling:o,parentNode:a,querySelector:c,insert:u,createText:l}},h){const d=t.target=St(t.props,c);if(d){const c=d._lpa||d.firstChild;if(16&t.shapeFlag)if(_t(t.props))t.anchor=h(o(e),t,a(e),n,r,i,s),t.targetStart=c,t.targetAnchor=c&&o(c);else{t.anchor=o(e);let a=c;while(a){if(a&&8===a.nodeType)if("teleport start anchor"===a.data)t.targetStart=a;else if("teleport anchor"===a.data){t.targetAnchor=a,d._lpa=t.targetAnchor&&o(t.targetAnchor);break}a=o(a)}t.targetAnchor||Ot(d,t,l,u),h(c&&o(c),t,d,n,r,i,s)}Rt(t)}return t.anchor&&o(t.anchor)}const At=It;function Rt(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;while(n&&n!==e.targetAnchor)1===n.nodeType&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}function Ot(e,t,n,r){const i=t.targetStart=n(""),s=t.targetAnchor=n("");return i[bt]=s,e&&(r(i,e),r(s,e)),s}function xt(){"boolean"!==typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&((0,i.We)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const Nt=un;function Dt(e){return Pt(e)}function Pt(e,t){xt();const n=(0,i.We)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:g=i.tE,insertStaticContent:m}=e,v=(e,t,n,r=null,i=null,s=null,o=void 0,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Sn(e,t)&&(r=X(e),K(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=t;switch(u){case hn:y(e,t,n,r);break;case dn:b(e,t,n,r);break;case fn:null==e&&_(t,n,r,o);break;case ln:P(e,t,n,r,i,s,o,a,c);break;default:1&h?k(e,t,n,r,i,s,o,a,c):6&h?M(e,t,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(e,t,n,r,i,s,o,a,c,te)}null!=l&&i&&yt(l,e&&e.ref,s,t||e,!t)},y=(e,t,n,r)=>{if(null==e)s(t.el=u(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},b=(e,t,n,r)=>{null==e?s(t.el=l(t.children||""),n,r):t.el=e.el},_=(e,t,n,r)=>{[e.el,e.anchor]=m(e.children,t,n,r,e.el,e.anchor)},T=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),s(e,n,r),e=i;s(t,n,r)},C=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},k=(e,t,n,r,i,s,o,a,c)=>{"svg"===t.type?o="svg":"math"===t.type&&(o="mathml"),null==e?A(t,n,r,i,s,o,a,c):x(e,t,i,s,o,a,c)},A=(e,t,n,r,o,u,l,h)=>{let f,p;const{props:g,shapeFlag:m,transition:v,dirs:y}=e;if(f=e.el=c(e.type,u,g&&g.is,g),8&m?d(f,e.children):16&m&&O(e.children,f,null,r,o,Mt(e,u),l,h),y&&L(e,null,r,"created"),R(f,e,e.scopeId,l,r),g){for(const e in g)"value"===e||(0,i.SU)(e)||a(f,e,null,g[e],u,r);"value"in g&&a(f,"value",null,g.value,u),(p=g.onVnodeBeforeMount)&&Vn(p,r,e)}y&&L(e,null,r,"beforeMount");const b=Ft(o,v);b&&v.beforeEnter(f),s(f,t,n),((p=g&&g.onVnodeMounted)||b||y)&&Nt((()=>{p&&Vn(p,r,e),b&&v.enter(f),y&&L(e,null,r,"mounted")}),o)},R=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let s=0;s<r.length;s++)g(e,r[s]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;R(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},O=(e,t,n,r,i,s,o,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?Mn(e[u]):Pn(e[u]);v(null,c,t,n,r,i,s,o,a)}},x=(e,t,n,r,s,o,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:h,dirs:f}=t;l|=16&e.patchFlag;const p=e.props||i.MZ,g=t.props||i.MZ;let m;if(n&&Lt(n,!1),(m=g.onVnodeBeforeUpdate)&&Vn(m,n,t,e),f&&L(t,e,n,"beforeUpdate"),n&&Lt(n,!0),(p.innerHTML&&null==g.innerHTML||p.textContent&&null==g.textContent)&&d(u,""),h?N(e.dynamicChildren,h,u,n,r,Mt(t,s),o):c||$(e,t,u,null,n,r,Mt(t,s),o,!1),l>0){if(16&l)D(u,p,g,n,s);else if(2&l&&p.class!==g.class&&a(u,"class",null,g.class,s),4&l&&a(u,"style",p.style,g.style,s),8&l){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const r=e[t],i=p[r],o=g[r];o===i&&"value"!==r||a(u,r,i,o,s,n)}}1&l&&e.children!==t.children&&d(u,t.children)}else c||null!=h||D(u,p,g,n,s);((m=g.onVnodeUpdated)||f)&&Nt((()=>{m&&Vn(m,n,t,e),f&&L(t,e,n,"updated")}),r)},N=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===ln||!Sn(c,u)||70&c.shapeFlag)?f(c.el):n;v(c,u,l,null,r,i,s,o,!0)}},D=(e,t,n,r,s)=>{if(t!==n){if(t!==i.MZ)for(const o in t)(0,i.SU)(o)||o in n||a(e,o,t[o],null,s,r);for(const o in n){if((0,i.SU)(o))continue;const c=n[o],u=t[o];c!==u&&"value"!==o&&a(e,o,u,c,s,r)}"value"in n&&a(e,"value",t.value,n.value,s)}},P=(e,t,n,r,i,o,a,c,l)=>{const h=t.el=e?e.el:u(""),d=t.anchor=e?e.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:g}=t;g&&(c=c?c.concat(g):g),null==e?(s(h,n,r),s(d,n,r),O(t.children||[],n,d,i,o,a,c,l)):f>0&&64&f&&p&&e.dynamicChildren?(N(e.dynamicChildren,p,n,i,o,a,c),(null!=t.key||i&&t===i.subTree)&&Vt(e,t,!0)):$(e,t,n,d,i,o,a,c,l)},M=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):F(t,n,r,i,s,o,c):V(e,t,c)},F=(e,t,n,r,i,s,o)=>{const a=e.component=$n(e,r,i);if(Z(e)&&(a.ctx.renderer=te),Jn(a,!1,o),a.asyncDep){if(i&&i.registerDep(a,U,o),!e.el){const e=a.subTree=An(dn);b(null,e,t,n)}}else U(a,e,t,n,i,s,o)},V=(e,t,n)=>{const r=t.component=e.component;if(sn(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void j(r,t,n);r.next=t,E(r.update),r.effect.dirty=!0,r.update()}else t.el=e.el,r.vnode=t},U=(e,t,n,s,o,a,c)=>{const u=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:l}=e;{const n=jt(e);if(n)return t&&(t.el=l.el,j(e,t,c)),void n.asyncDep.then((()=>{e.isUnmounted||u()}))}let h,d=t;0,Lt(e,!1),t?(t.el=l.el,j(e,t,c)):t=l,n&&(0,i.DY)(n),(h=t.props&&t.props.onVnodeBeforeUpdate)&&Vn(h,s,t,l),Lt(e,!0);const p=tn(e);0;const g=e.subTree;e.subTree=p,v(g,p,f(g.el),X(g),e,o,a),t.el=p.el,null===d&&an(e,p.el),r&&Nt(r,o),(h=t.props&&t.props.onVnodeUpdated)&&Nt((()=>Vn(h,s,t,l)),o)}else{let r;const{el:c,props:u}=t,{bm:l,m:h,parent:d}=e,f=J(t);if(Lt(e,!1),l&&(0,i.DY)(l),!f&&(r=u&&u.onVnodeBeforeMount)&&Vn(r,d,t),Lt(e,!0),c&&re){const n=()=>{e.subTree=tn(e),re(c,e.subTree,e,o,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=tn(e);0,v(null,r,n,s,e,o,a),t.el=r.el}if(h&&Nt(h,o),!f&&(r=u&&u.onVnodeMounted)){const e=t;Nt((()=>Vn(r,d,e)),o)}(256&t.shapeFlag||d&&J(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&Nt(e.a,o),e.isMounted=!0,t=n=s=null}},l=e.effect=new r.X2(u,i.tE,(()=>w(h)),e.scope),h=e.update=()=>{l.dirty&&l.run()};h.i=e,h.id=e.uid,Lt(e,!0),h()},j=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,it(e,t.props,i,n),vt(e,t.children,n),(0,r.C4)(),S(e),(0,r.bl)()},$=(e,t,n,r,i,s,o,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void W(u,h,n,r,i,s,o,a,c);if(256&f)return void B(u,h,n,r,i,s,o,a,c)}8&p?(16&l&&Q(u,i,s),h!==u&&d(n,h)):16&l?16&p?W(u,h,n,r,i,s,o,a,c):Q(u,i,s,!0):(8&l&&d(n,""),16&p&&O(h,n,r,i,s,o,a,c))},B=(e,t,n,r,s,o,a,c,u)=>{e=e||i.Oj,t=t||i.Oj;const l=e.length,h=t.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=t[f]=u?Mn(t[f]):Pn(t[f]);v(e[f],r,n,null,s,o,a,c,u)}l>h?Q(e,s,o,!0,!1,d):O(t,n,r,s,o,a,c,u,d)},W=(e,t,n,r,s,o,a,c,u)=>{let l=0;const h=t.length;let d=e.length-1,f=h-1;while(l<=d&&l<=f){const r=e[l],i=t[l]=u?Mn(t[l]):Pn(t[l]);if(!Sn(r,i))break;v(r,i,n,null,s,o,a,c,u),l++}while(l<=d&&l<=f){const r=e[d],i=t[f]=u?Mn(t[f]):Pn(t[f]);if(!Sn(r,i))break;v(r,i,n,null,s,o,a,c,u),d--,f--}if(l>d){if(l<=f){const e=f+1,i=e<h?t[e].el:r;while(l<=f)v(null,t[l]=u?Mn(t[l]):Pn(t[l]),n,i,s,o,a,c,u),l++}}else if(l>f)while(l<=d)K(e[l],s,o,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=f;l++){const e=t[l]=u?Mn(t[l]):Pn(t[l]);null!=e.key&&m.set(e.key,l)}let y,b=0;const w=f-g+1;let _=!1,E=0;const T=new Array(w);for(l=0;l<w;l++)T[l]=0;for(l=p;l<=d;l++){const r=e[l];if(b>=w){K(r,s,o,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(y=g;y<=f;y++)if(0===T[y-g]&&Sn(r,t[y])){i=y;break}void 0===i?K(r,s,o,!0):(T[i-g]=l+1,i>=E?E=i:_=!0,v(r,t[i],n,null,s,o,a,c,u),b++)}const S=_?Ut(T):i.Oj;for(y=S.length-1,l=w-1;l>=0;l--){const e=g+l,i=t[e],d=e+1<h?t[e+1].el:r;0===T[l]?v(null,i,n,d,s,o,a,c,u):_&&(y<0||l!==S[y]?z(i,n,d,2):y--)}}},z=(e,t,n,r,i=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void z(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,te);if(a===ln){s(o,t,n);for(let e=0;e<u.length;e++)z(u[e],t,n,r);return void s(e.anchor,t,n)}if(a===fn)return void T(e,t,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),s(o,t,n),Nt((()=>c.enter(o)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>s(o,t,n),u=()=>{e(o,(()=>{a(),i&&i()}))};r?r(o,a,u):u()}else s(o,t,n)},K=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d,cacheIndex:f}=e;if(-2===h&&(i=!1),null!=a&&yt(a,null,n,e,!0),null!=f&&(t.renderCache[f]=void 0),256&l)return void t.ctx.deactivate(e);const p=1&l&&d,g=!J(e);let m;if(g&&(m=o&&o.onVnodeBeforeUnmount)&&Vn(m,t,e),6&l)G(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);p&&L(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,te,r):u&&!u.hasOnce&&(s!==ln||h>0&&64&h)?Q(u,t,n,!1,!0):(s===ln&&384&h||!i&&16&l)&&Q(c,t,n),r&&q(e)}(g&&(m=o&&o.onVnodeUnmounted)||p)&&Nt((()=>{m&&Vn(m,t,e),p&&L(e,null,t,"unmounted")}),n)},q=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===ln)return void H(n,r);if(t===fn)return void C(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},H=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},G=(e,t,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:c,m:u,a:l}=e;$t(u),$t(l),r&&(0,i.DY)(r),s.stop(),o&&(o.active=!1,K(a,e,t,n)),c&&Nt(c,t),Nt((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Q=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)K(e[o],t,n,r,i)},X=e=>{if(6&e.shapeFlag)return X(e.component.subTree);if(128&e.shapeFlag)return e.suspense.next();const t=p(e.anchor||e.el),n=t&&t[bt];return n?p(n):t};let Y=!1;const ee=(e,t,n)=>{null==e?t._vnode&&K(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,Y||(Y=!0,S(),I(),Y=!1)},te={p:v,um:K,m:z,r:q,mt:F,mc:O,pc:$,pbc:N,n:X,o:e};let ne,re;return t&&([ne,re]=t(te)),{render:ee,hydrate:ne,createApp:Qe(ee,ne)}}function Mt({type:e,props:t},n){return"svg"===n&&"foreignObject"===e||"mathml"===n&&"annotation-xml"===e&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Lt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ft(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Vt(e,t,n=!1){const r=e.children,s=t.children;if((0,i.cy)(r)&&(0,i.cy)(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=Mn(s[i]),t.el=e.el),n||-2===t.patchFlag||Vt(e,t)),t.type===hn&&(t.el=e.el)}}function Ut(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}function jt(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:jt(t)}function $t(e){if(e)for(let t=0;t<e.length;t++)e[t].active=!1}const Bt=Symbol.for("v-scx"),Wt=()=>{{const e=Je(Bt);return e}};function zt(e,t){return Ht(e,null,t)}const Kt={};function qt(e,t,n){return Ht(e,t,n)}function Ht(e,t,{immediate:n,deep:a,flush:c,once:u,onTrack:l,onTrigger:h}=i.MZ){if(t&&u){const e=t;t=(...t)=>{e(...t),C()}}const d=Bn,f=e=>!0===a?e:Xt(e,!1===a?1:void 0);let p,g,m=!1,v=!1;if((0,r.i9)(e)?(p=()=>e.value,m=(0,r.fE)(e)):(0,r.g8)(e)?(p=()=>f(e),m=!0):(0,i.cy)(e)?(v=!0,m=e.some((e=>(0,r.g8)(e)||(0,r.fE)(e))),p=()=>e.map((e=>(0,r.i9)(e)?e.value:(0,r.g8)(e)?f(e):(0,i.Tn)(e)?s(e,d,2):void 0))):p=(0,i.Tn)(e)?t?()=>s(e,d,2):()=>(g&&g(),o(e,d,3,[b])):i.tE,t&&a){const e=p;p=()=>Xt(e())}let y,b=e=>{g=S.onStop=()=>{s(e,d,4),g=S.onStop=void 0}};if(Yn){if(b=i.tE,t?n&&o(t,d,3,[p(),v?[]:void 0,b]):p(),"sync"!==c)return i.tE;{const e=Wt();y=e.__watcherHandles||(e.__watcherHandles=[])}}let _=v?new Array(e.length).fill(Kt):Kt;const E=()=>{if(S.active&&S.dirty)if(t){const e=S.run();(a||m||(v?e.some(((e,t)=>(0,i.$H)(e,_[t]))):(0,i.$H)(e,_)))&&(g&&g(),o(t,d,3,[e,_===Kt?void 0:v&&_[0]===Kt?[]:_,b]),_=e)}else S.run()};let T;E.allowRecurse=!!t,"sync"===c?T=E:"post"===c?T=()=>Nt(E,d&&d.suspense):(E.pre=!0,d&&(E.id=d.uid),T=()=>w(E));const S=new r.X2(p,i.tE,T),I=(0,r.o5)(),C=()=>{S.stop(),I&&(0,i.TF)(I.effects,S)};return t?n?E():_=S.run():"post"===c?Nt(S.run.bind(S),d&&d.suspense):S.run(),y&&y.push(C),C}function Gt(e,t,n){const r=this.proxy,s=(0,i.Kg)(e)?e.includes(".")?Qt(r,e):()=>r[e]:e.bind(r,r);let o;(0,i.Tn)(t)?o=t:(o=t.handler,n=t);const a=qn(this),c=Ht(s,o.bind(r),n);return a(),c}function Qt(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function Xt(e,t=1/0,n){if(t<=0||!(0,i.Gv)(e)||e["__v_skip"])return e;if(n=n||new Set,n.has(e))return e;if(n.add(e),t--,(0,r.i9)(e))Xt(e.value,t,n);else if((0,i.cy)(e))for(let r=0;r<e.length;r++)Xt(e[r],t,n);else if((0,i.vM)(e)||(0,i.CE)(e))e.forEach((e=>{Xt(e,t,n)}));else if((0,i.Qd)(e)){for(const r in e)Xt(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Xt(e[r],t,n)}return e}const Yt=(e,t)=>"modelValue"===t||"model-value"===t?e.modelModifiers:e[`${t}Modifiers`]||e[`${(0,i.PT)(t)}Modifiers`]||e[`${(0,i.Tg)(t)}Modifiers`];function Jt(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.MZ;let s=n;const a=t.startsWith("update:"),c=a&&Yt(r,t.slice(7));let u;c&&(c.trim&&(s=n.map((e=>(0,i.Kg)(e)?e.trim():e))),c.number&&(s=n.map(i.bB)));let l=r[u=(0,i.rU)(t)]||r[u=(0,i.rU)((0,i.PT)(t))];!l&&a&&(l=r[u=(0,i.rU)((0,i.Tg)(t))]),l&&o(l,e,6,s);const h=r[u+"Once"];if(h){if(e.emitted){if(e.emitted[u])return}else e.emitted={};e.emitted[u]=!0,o(h,e,6,s)}}function Zt(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const o=e.emits;let a={},c=!1;if(!(0,i.Tn)(e)){const r=e=>{const n=Zt(e,t,!0);n&&(c=!0,(0,i.X$)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||c?((0,i.cy)(o)?o.forEach((e=>a[e]=null)):(0,i.X$)(a,o),(0,i.Gv)(e)&&r.set(e,a),a):((0,i.Gv)(e)&&r.set(e,null),null)}function en(e,t){return!(!e||!(0,i.Mp)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.$3)(e,t[0].toLowerCase()+t.slice(1))||(0,i.$3)(e,(0,i.Tg)(t))||(0,i.$3)(e,t))}function tn(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[o],slots:c,attrs:u,emit:l,render:h,renderCache:d,props:f,data:p,setupState:g,ctx:m,inheritAttrs:v}=e,y=x(e);let b,w;try{if(4&n.shapeFlag){const e=s||r,t=e;b=Pn(h.call(t,e,d,f,g,p,m)),w=u}else{const e=t;0,b=Pn(e.length>1?e(f,{attrs:u,slots:c,emit:l}):e(f,null)),w=t.props?u:nn(u)}}catch(E){pn.length=0,a(E,e,1),b=An(dn)}let _=b;if(w&&!1!==v){const e=Object.keys(w),{shapeFlag:t}=_;e.length&&7&t&&(o&&e.some(i.CP)&&(w=rn(w,o)),_=xn(_,w,!1,!0))}return n.dirs&&(_=xn(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),b=_,x(y),b}const nn=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.Mp)(n))&&((t||(t={}))[n]=e[n]);return t},rn=(e,t)=>{const n={};for(const r in e)(0,i.CP)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function sn(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||on(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?on(r,o,u):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!en(u,n))return!0}}return!1}function on(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!en(n,s))return!0}return!1}function an({vnode:e,parent:t},n){while(t){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r!==e)break;(e=t.vnode).el=n,t=t.parent}}const cn=e=>e.__isSuspense;function un(e,t){t&&t.pendingBranch?(0,i.cy)(e)?t.effects.push(...e):t.effects.push(e):T(e)}const ln=Symbol.for("v-fgt"),hn=Symbol.for("v-txt"),dn=Symbol.for("v-cmt"),fn=Symbol.for("v-stc"),pn=[];let gn=null;function mn(e=!1){pn.push(gn=e?null:[])}function vn(){pn.pop(),gn=pn[pn.length-1]||null}let yn=1;function bn(e){yn+=e,e<0&&gn&&(gn.hasOnce=!0)}function wn(e){return e.dynamicChildren=yn>0?gn||i.Oj:null,vn(),yn>0&&gn&&gn.push(e),e}function _n(e,t,n,r,i,s){return wn(kn(e,t,n,r,i,s,!0))}function En(e,t,n,r,i){return wn(An(e,t,n,r,i,!0))}function Tn(e){return!!e&&!0===e.__v_isVNode}function Sn(e,t){return e.type===t.type&&e.key===t.key}const In=({key:e})=>null!=e?e:null,Cn=({ref:e,ref_key:t,ref_for:n})=>("number"===typeof e&&(e=""+e),null!=e?(0,i.Kg)(e)||(0,r.i9)(e)||(0,i.Tn)(e)?{i:R,r:e,k:t,f:!!n}:e:null);function kn(e,t=null,n=null,r=0,s=null,o=(e===ln?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&In(t),ref:t&&Cn(t),scopeId:O,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:R};return c?(Ln(u,n),128&o&&e.normalize(u)):n&&(u.shapeFlag|=(0,i.Kg)(n)?8:16),yn>0&&!a&&gn&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&gn.push(u),u}const An=Rn;function Rn(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==Ee||(e=dn),Tn(e)){const r=xn(e,t,!0);return n&&Ln(r,n),yn>0&&!a&&gn&&(6&r.shapeFlag?gn[gn.indexOf(e)]=r:gn.push(r)),r.patchFlag=-2,r}if(or(e)&&(e=e.__vccOpts),t){t=On(t);let{class:e,style:n}=t;e&&!(0,i.Kg)(e)&&(t.class=(0,i.C4)(e)),(0,i.Gv)(n)&&((0,r.ju)(n)&&!(0,i.cy)(n)&&(n=(0,i.X$)({},n)),t.style=(0,i.Tr)(n))}const c=(0,i.Kg)(e)?1:cn(e)?128:wt(e)?64:(0,i.Gv)(e)?4:(0,i.Tn)(e)?2:0;return kn(e,t,n,s,o,c,a,!0)}function On(e){return e?(0,r.ju)(e)||nt(e)?(0,i.X$)({},e):e:null}function xn(e,t,n=!1,r=!1){const{props:s,ref:o,patchFlag:a,children:c,transition:u}=e,l=t?Fn(s||{},t):s,h={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&In(l),ref:t&&t.ref?n&&o?(0,i.cy)(o)?o.concat(Cn(t)):[o,Cn(t)]:Cn(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ln?-1===a?16:16|a:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&xn(e.ssContent),ssFallback:e.ssFallback&&xn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&r&&Q(h,u.clone(h)),h}function Nn(e=" ",t=0){return An(hn,null,e,t)}function Dn(e="",t=!1){return t?(mn(),En(dn,null,e)):An(dn,null,e)}function Pn(e){return null==e||"boolean"===typeof e?An(dn):(0,i.cy)(e)?An(ln,null,e.slice()):"object"===typeof e?Mn(e):An(hn,null,String(e))}function Mn(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:xn(e)}function Ln(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.cy)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),Ln(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||nt(t)?3===r&&R&&(1===R.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=R}}else(0,i.Tn)(t)?(t={default:t,_ctx:R},n=32):(t=String(t),64&r?(n=16,t=[Nn(t)]):n=8);e.children=t,e.shapeFlag|=n}function Fn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C4)([t.class,r.class]));else if("style"===e)t.style=(0,i.Tr)([t.style,r.style]);else if((0,i.Mp)(e)){const n=t[e],s=r[e];!s||n===s||(0,i.cy)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=r[e])}return t}function Vn(e,t,n,r=null){o(e,t,7,[n,r])}const Un=He();let jn=0;function $n(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||Un,a={uid:jn++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ct(s,o),emitsOptions:Zt(s,o),emit:null,emitted:null,propsDefaults:i.MZ,inheritAttrs:s.inheritAttrs,ctx:i.MZ,data:i.MZ,props:i.MZ,attrs:i.MZ,slots:i.MZ,refs:i.MZ,setupState:i.MZ,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Jt.bind(null,a),e.ce&&e.ce(a),a}let Bn=null;const Wn=()=>Bn||R;let zn,Kn;{const e=(0,i.We)(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach((t=>t(e))):r[0](e)}};zn=t("__VUE_INSTANCE_SETTERS__",(e=>Bn=e)),Kn=t("__VUE_SSR_SETTERS__",(e=>Yn=e))}const qn=e=>{const t=Bn;return zn(e),e.scope.on(),()=>{e.scope.off(),zn(t)}},Hn=()=>{Bn&&Bn.scope.off(),zn(null)};function Gn(e){return 4&e.vnode.shapeFlag}let Qn,Xn,Yn=!1;function Jn(e,t=!1,n=!1){t&&Kn(t);const{props:r,children:i}=e.vnode,s=Gn(e);rt(e,r,s,t),mt(e,i,n);const o=s?Zn(e,t):void 0;return t&&Kn(!1),o}function Zn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Oe);const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?rr(e):null,c=qn(e);(0,r.C4)();const u=s(o,e,0,[e.props,n]);if((0,r.bl)(),c(),(0,i.yL)(u)){if(u.then(Hn,Hn),t)return u.then((n=>{er(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=u}else er(e,u,t)}else tr(e,t)}function er(e,t,n){(0,i.Tn)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Gv)(t)&&(e.setupState=(0,r.Pr)(t)),tr(e,n)}function tr(e,t,n){const s=e.type;if(!e.render){if(!t&&Qn&&!s.render){const t=s.template||Fe(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.X$)((0,i.X$)({isCustomElement:n,delimiters:o},r),a);s.render=Qn(t,c)}}e.render=s.render||i.tE,Xn&&Xn(e)}{const t=qn(e);(0,r.C4)();try{De(e)}finally{(0,r.bl)(),t()}}}const nr={get(e,t){return(0,r.u4)(e,"get",""),e[t]}};function rr(e){const t=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,nr),slots:e.slots,emit:e.emit,expose:t}}function ir(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy((0,r.Pr)((0,r.IG)(e.exposed)),{get(t,n){return n in t?t[n]:n in Ae?Ae[n](e):void 0},has(e,t){return t in e||t in Ae}})):e.proxy}function sr(e,t=!0){return(0,i.Tn)(e)?e.displayName||e.name:e.name||t&&e.__name}function or(e){return(0,i.Tn)(e)&&"__vccOpts"in e}const ar=(e,t)=>{const n=(0,r.EW)(e,t,Yn);return n};function cr(e,t,n){const r=arguments.length;return 2===r?(0,i.Gv)(t)&&!(0,i.cy)(t)?Tn(t)?An(e,null,[t]):An(e,t):An(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Tn(n)&&(n=[n]),An(e,t,n))}const ur="3.4.38",lr=i.tE},5130:function(e,t,n){n.d(t,{D$:function(){return be},Ef:function(){return Te},F:function(){return de},aG:function(){return P},eB:function(){return p}});n(4114),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698);var r=n(6768),i=n(4232),s=n(144);
/**
* @vue/runtime-dom v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const o="http://www.w3.org/2000/svg",a="http://www.w3.org/1998/Math/MathML",c="undefined"!==typeof document?document:null,u=c&&c.createElement("template"),l={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i="svg"===t?c.createElementNS(o,e):"mathml"===t?c.createElementNS(a,e):n?c.createElement(e,{is:n}):c.createElement(e);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>c.createTextNode(e),createComment:e=>c.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>c.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{u.innerHTML="svg"===r?`<svg>${e}</svg>`:"mathml"===r?`<math>${e}</math>`:e;const i=u.content;if("svg"===r||"mathml"===r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},h="transition",d="animation",f=Symbol("_vtc"),p=(e,{slots:t})=>(0,r.h)(r.pR,b(e),t);p.displayName="Transition";const g={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},m=p.props=(0,i.X$)({},r.QP,g),v=(e,t=[])=>{(0,i.cy)(e)?e.forEach((e=>e(...t))):e&&e(...t)},y=e=>!!e&&((0,i.cy)(e)?e.some((e=>e.length>1)):e.length>1);function b(e){const t={};for(const i in e)i in g||(t[i]=e[i]);if(!1===e.css)return t;const{name:n="v",type:r,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=w(s),b=m&&m[0],_=m&&m[1],{onBeforeEnter:I,onEnter:k,onEnterCancelled:A,onLeave:R,onLeaveCancelled:x,onBeforeAppear:N=I,onAppear:D=k,onAppearCancelled:P=A}=t,M=(e,t,n)=>{T(e,t?h:c),T(e,t?l:a),n&&n()},L=(e,t)=>{e._isLeaving=!1,T(e,d),T(e,p),T(e,f),t&&t()},F=e=>(t,n)=>{const i=e?D:k,s=()=>M(t,e,n);v(i,[t,s]),S((()=>{T(t,e?u:o),E(t,e?h:c),y(i)||C(t,r,b,s)}))};return(0,i.X$)(t,{onBeforeEnter(e){v(I,[e]),E(e,o),E(e,a)},onBeforeAppear(e){v(N,[e]),E(e,u),E(e,l)},onEnter:F(!1),onAppear:F(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>L(e,t);E(e,d),E(e,f),O(),S((()=>{e._isLeaving&&(T(e,d),E(e,p),y(R)||C(e,r,_,n))})),v(R,[e,n])},onEnterCancelled(e){M(e,!1),v(A,[e])},onAppearCancelled(e){M(e,!0),v(P,[e])},onLeaveCancelled(e){L(e),v(x,[e])}})}function w(e){if(null==e)return null;if((0,i.Gv)(e))return[_(e.enter),_(e.leave)];{const t=_(e);return[t,t]}}function _(e){const t=(0,i.Ro)(e);return t}function E(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e[f]||(e[f]=new Set)).add(t)}function T(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const n=e[f];n&&(n.delete(t),n.size||(e[f]=void 0))}function S(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let I=0;function C(e,t,n,r){const i=e._endId=++I,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=k(e,t);if(!o)return r();const u=o+"end";let l=0;const h=()=>{e.removeEventListener(u,d),s()},d=t=>{t.target===e&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),e.addEventListener(u,d)}function k(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(`${h}Delay`),s=r(`${h}Duration`),o=A(i,s),a=r(`${d}Delay`),c=r(`${d}Duration`),u=A(a,c);let l=null,f=0,p=0;t===h?o>0&&(l=h,f=o,p=s.length):t===d?u>0&&(l=d,f=u,p=c.length):(f=Math.max(o,u),l=f>0?o>u?h:d:null,p=l?l===h?s.length:c.length:0);const g=l===h&&/\b(transform|all)(,|$)/.test(r(`${h}Property`).toString());return{type:l,timeout:f,propCount:p,hasTransform:g}}function A(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>R(t)+R(e[n]))))}function R(e){return"auto"===e?0:1e3*Number(e.slice(0,-1).replace(",","."))}function O(){return document.body.offsetHeight}function x(e,t,n){const r=e[f];r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const N=Symbol("_vod"),D=Symbol("_vsh"),P={beforeMount(e,{value:t},{transition:n}){e[N]="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):M(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!==!n&&(r?t?(r.beforeEnter(e),M(e,!0),r.enter(e)):r.leave(e,(()=>{M(e,!1)})):M(e,t))},beforeUnmount(e,{value:t}){M(e,t)}};function M(e,t){e.style.display=t?e[N]:"none",e[D]=!t}const L=Symbol("");const F=/(^|;)\s*display\s*:/;function V(e,t,n){const r=e.style,s=(0,i.Kg)(n);let o=!1;if(n&&!s){if(t)if((0,i.Kg)(t))for(const e of t.split(";")){const t=e.slice(0,e.indexOf(":")).trim();null==n[t]&&j(r,t,"")}else for(const e in t)null==n[e]&&j(r,e,"");for(const e in n)"display"===e&&(o=!0),j(r,e,n[e])}else if(s){if(t!==n){const e=r[L];e&&(n+=";"+e),r.cssText=n,o=F.test(n)}}else t&&e.removeAttribute("style");N in e&&(e[N]=o?r.display:"",e[D]&&(r.display="none"))}const U=/\s*!important$/;function j(e,t,n){if((0,i.cy)(n))n.forEach((n=>j(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=W(e,t);U.test(n)?e.setProperty((0,i.Tg)(r),n.replace(U,""),"important"):e[r]=n}}const $=["Webkit","Moz","ms"],B={};function W(e,t){const n=B[t];if(n)return n;let r=(0,i.PT)(t);if("filter"!==r&&r in e)return B[t]=r;r=(0,i.ZH)(r);for(let i=0;i<$.length;i++){const n=$[i]+r;if(n in e)return B[t]=n}return t}const z="http://www.w3.org/1999/xlink";function K(e,t,n,r,s,o=(0,i.J$)(t)){r&&t.startsWith("xlink:")?null==n?e.removeAttributeNS(z,t.slice(6,t.length)):e.setAttributeNS(z,t,n):null==n||o&&!(0,i.Y2)(n)?e.removeAttribute(t):e.setAttribute(t,o?"":(0,i.Bm)(n)?String(n):n)}function q(e,t,n,r){if("innerHTML"===t||"textContent"===t){if(null==n)return;return void(e[t]=n)}const s=e.tagName;if("value"===t&&"PROGRESS"!==s&&!s.includes("-")){const r="OPTION"===s?e.getAttribute("value")||"":e.value,i=null==n?"":String(n);return r===i&&"_value"in e||(e.value=i),null==n&&e.removeAttribute(t),void(e._value=n)}let o=!1;if(""===n||null==n){const r=typeof e[t];"boolean"===r?n=(0,i.Y2)(n):null==n&&"string"===r?(n="",o=!0):"number"===r&&(n=0,o=!0)}try{e[t]=n}catch(a){0}o&&e.removeAttribute(t)}function H(e,t,n,r){e.addEventListener(t,n,r)}function G(e,t,n,r){e.removeEventListener(t,n,r)}const Q=Symbol("_vei");function X(e,t,n,r,i=null){const s=e[Q]||(e[Q]={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=J(t);if(r){const o=s[t]=ne(r,i);H(e,n,o,a)}else o&&(G(e,n,o,a),s[t]=void 0)}}const Y=/(?:Once|Passive|Capture)$/;function J(e){let t;if(Y.test(e)){let n;t={};while(n=e.match(Y))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,i.Tg)(e.slice(2));return[n,t]}let Z=0;const ee=Promise.resolve(),te=()=>Z||(ee.then((()=>Z=0)),Z=Date.now());function ne(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,r.qL)(re(e,n.value),t,5,[e])};return n.value=e,n.attached=te(),n}function re(e,t){if((0,i.cy)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const ie=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,se=(e,t,n,r,s,o)=>{const a="svg"===s;"class"===t?x(e,r,a):"style"===t?V(e,n,r):(0,i.Mp)(t)?(0,i.CP)(t)||X(e,t,n,r,o):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):oe(e,t,r,a))?(q(e,t,r),e.tagName.includes("-")||"value"!==t&&"checked"!==t&&"selected"!==t||K(e,t,r,a,o,"value"!==t)):("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),K(e,t,r,a))};function oe(e,t,n,r){if(r)return"innerHTML"===t||"textContent"===t||!!(t in e&&ie(t)&&(0,i.Tn)(n));if("spellcheck"===t||"draggable"===t||"translate"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return!1}return(!ie(t)||!(0,i.Kg)(n))&&t in e}
/*! #__NO_SIDE_EFFECTS__ */
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;const ae=new WeakMap,ce=new WeakMap,ue=Symbol("_moveCb"),le=Symbol("_enterCb"),he={name:"TransitionGroup",props:(0,i.X$)({},m,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,r.nI)(),i=(0,r.Gy)();let o,a;return(0,r.$u)((()=>{if(!o.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!me(o[0].el,n.vnode.el,t))return;o.forEach(fe),o.forEach(pe);const r=o.filter(ge);O(),r.forEach((e=>{const n=e.el,r=n.style;E(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const i=n[ue]=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",i),n[ue]=null,T(n,t))};n.addEventListener("transitionend",i)}))})),()=>{const c=(0,s.ux)(e),u=b(c);let l=c.tag||r.FK;if(o=[],a)for(let e=0;e<a.length;e++){const t=a[e];t.el&&t.el instanceof Element&&(o.push(t),(0,r.MZ)(t,(0,r.OW)(t,u,i,n)),ae.set(t,t.el.getBoundingClientRect()))}a=t.default?(0,r.Df)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,r.MZ)(t,(0,r.OW)(t,u,i,n))}return(0,r.bF)(l,null,a)}}};he.props;const de=he;function fe(e){const t=e.el;t[ue]&&t[ue](),t[le]&&t[le]()}function pe(e){ce.set(e,e.el.getBoundingClientRect())}function ge(e){const t=ae.get(e),n=ce.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${i}px)`,t.transitionDuration="0s",e}}function me(e,t,n){const r=e.cloneNode(),i=e[f];i&&i.forEach((e=>{e.split(/\s+/).forEach((e=>e&&r.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&r.classList.add(e))),r.style.display="none";const s=1===t.nodeType?t:t.parentNode;s.appendChild(r);const{hasTransform:o}=k(r);return s.removeChild(r),o}Symbol("_assign");const ve=["ctrl","shift","alt","meta"],ye={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>ve.some((n=>e[`${n}Key`]&&!t.includes(n)))},be=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(n,...r)=>{for(let e=0;e<t.length;e++){const r=ye[t[e]];if(r&&r(n,t))return}return e(n,...r)})},we=(0,i.X$)({patchProp:se},l);let _e;function Ee(){return _e||(_e=(0,r.K9)(we))}const Te=(...e)=>{const t=Ee().createApp(...e);const{mount:n}=t;return t.mount=e=>{const r=Ie(e);if(!r)return;const s=t._component;(0,i.Tn)(s)||s.render||s.template||(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,Se(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function Se(e){return e instanceof SVGElement?"svg":"function"===typeof MathMLElement&&e instanceof MathMLElement?"mathml":void 0}function Ie(e){if((0,i.Kg)(e)){const t=document.querySelector(e);return t}return e}},4232:function(e,t,n){n.d(t,{$3:function(){return f},$H:function(){return F},BH:function(){return K},BX:function(){return ne},Bm:function(){return _},C4:function(){return Y},CE:function(){return g},CP:function(){return u},DY:function(){return V},Gv:function(){return E},J$:function(){return Z},Kg:function(){return w},MZ:function(){return i},Mp:function(){return c},NO:function(){return a},Oj:function(){return s},PT:function(){return N},Qd:function(){return k},Ro:function(){return $},SU:function(){return R},TF:function(){return h},Tg:function(){return P},Tn:function(){return b},Tr:function(){return q},We:function(){return W},X$:function(){return l},Y2:function(){return ee},ZH:function(){return M},Zf:function(){return C},bB:function(){return j},cy:function(){return p},gd:function(){return y},pD:function(){return r},rU:function(){return L},tE:function(){return o},u3:function(){return re},vM:function(){return m},v_:function(){return se},yI:function(){return A},yL:function(){return T},yQ:function(){return U}});n(4114),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698);
/**
* @vue/shared v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function r(e,t){const n=new Set(e.split(","));return t?e=>n.has(e.toLowerCase()):e=>n.has(e)}const i={},s=[],o=()=>{},a=()=>!1,c=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),u=e=>e.startsWith("onUpdate:"),l=Object.assign,h=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},d=Object.prototype.hasOwnProperty,f=(e,t)=>d.call(e,t),p=Array.isArray,g=e=>"[object Map]"===I(e),m=e=>"[object Set]"===I(e),v=e=>"[object Date]"===I(e),y=e=>"[object RegExp]"===I(e),b=e=>"function"===typeof e,w=e=>"string"===typeof e,_=e=>"symbol"===typeof e,E=e=>null!==e&&"object"===typeof e,T=e=>(E(e)||b(e))&&b(e.then)&&b(e.catch),S=Object.prototype.toString,I=e=>S.call(e),C=e=>I(e).slice(8,-1),k=e=>"[object Object]"===I(e),A=e=>w(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,R=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),O=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},x=/-(\w)/g,N=O((e=>e.replace(x,((e,t)=>t?t.toUpperCase():"")))),D=/\B([A-Z])/g,P=O((e=>e.replace(D,"-$1").toLowerCase())),M=O((e=>e.charAt(0).toUpperCase()+e.slice(1))),L=O((e=>{const t=e?`on${M(e)}`:"";return t})),F=(e,t)=>!Object.is(e,t),V=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},U=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},j=e=>{const t=parseFloat(e);return isNaN(t)?e:t},$=e=>{const t=w(e)?Number(e):NaN;return isNaN(t)?e:t};let B;const W=()=>B||(B="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const z="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",K=r(z);function q(e){if(p(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=w(r)?X(r):q(r);if(i)for(const e in i)t[e]=i[e]}return t}if(w(e)||E(e))return e}const H=/;(?![^(]*\))/g,G=/:([^]+)/,Q=/\/\*[^]*?\*\//g;function X(e){const t={};return e.replace(Q,"").split(H).forEach((e=>{if(e){const n=e.split(G);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function Y(e){let t="";if(w(e))t=e;else if(p(e))for(let n=0;n<e.length;n++){const r=Y(e[n]);r&&(t+=r+" ")}else if(E(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const J="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Z=r(J);function ee(e){return!!e||""===e}function te(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=ne(e[r],t[r]);return n}function ne(e,t){if(e===t)return!0;let n=v(e),r=v(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=_(e),r=_(t),n||r)return e===t;if(n=p(e),r=p(t),n||r)return!(!n||!r)&&te(e,t);if(n=E(e),r=E(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!ne(e[n],t[n]))return!1}}return String(e)===String(t)}function re(e,t){return e.findIndex((e=>ne(e,t)))}const ie=e=>!(!e||!0!==e.__v_isRef),se=e=>w(e)?e:null==e?"":p(e)||E(e)&&(e.toString===S||!b(e.toString))?ie(e)?se(e.value):JSON.stringify(e,oe,2):String(e),oe=(e,t)=>ie(t)?oe(e,t.value):g(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n],r)=>(e[ae(t,r)+" =>"]=n,e)),{})}:m(t)?{[`Set(${t.size})`]:[...t.values()].map((e=>ae(e)))}:_(t)?ae(t):!E(t)||p(t)||k(t)?t:String(t),ae=(e,t="")=>{var n;return _(e)?`Symbol(${null!=(n=e.description)?n:t})`:e}},1241:function(e,t){t.A=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},9306:function(e,t,n){var r=n(4901),i=n(6823),s=TypeError;e.exports=function(e){if(r(e))return e;throw new s(i(e)+" is not a function")}},3506:function(e,t,n){var r=n(3925),i=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw new s("Can't set "+i(e)+" as a prototype")}},7080:function(e,t,n){var r=n(4402).has;e.exports=function(e){return r(e),e}},679:function(e,t,n){var r=n(1625),i=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw new i("Incorrect invocation")}},8551:function(e,t,n){var r=n(34),i=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw new s(i(e)+" is not an object")}},7811:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},7394:function(e,t,n){var r=n(4576),i=n(6706),s=n(2195),o=r.ArrayBuffer,a=r.TypeError;e.exports=o&&i(o.prototype,"byteLength","get")||function(e){if("ArrayBuffer"!==s(e))throw new a("ArrayBuffer expected");return e.byteLength}},3238:function(e,t,n){var r=n(4576),i=n(7476),s=n(7394),o=r.ArrayBuffer,a=o&&o.prototype,c=a&&i(a.slice);e.exports=function(e){if(0!==s(e))return!1;if(!c)return!1;try{return c(e,0,0),!1}catch(t){return!0}}},5169:function(e,t,n){var r=n(3238),i=TypeError;e.exports=function(e){if(r(e))throw new i("ArrayBuffer is detached");return e}},5636:function(e,t,n){var r=n(4576),i=n(9504),s=n(6706),o=n(7696),a=n(5169),c=n(7394),u=n(4483),l=n(1548),h=r.structuredClone,d=r.ArrayBuffer,f=r.DataView,p=Math.min,g=d.prototype,m=f.prototype,v=i(g.slice),y=s(g,"resizable","get"),b=s(g,"maxByteLength","get"),w=i(m.getInt8),_=i(m.setInt8);e.exports=(l||u)&&function(e,t,n){var r,i=c(e),s=void 0===t?i:o(t),g=!y||!y(e);if(a(e),l&&(e=h(e,{transfer:[e]}),i===s&&(n||g)))return e;if(i>=s&&(!n||g))r=v(e,0,s);else{var m=n&&!g&&b?{maxByteLength:b(e)}:void 0;r=new d(s,m);for(var E=new f(e),T=new f(r),S=p(s,i),I=0;I<S;I++)_(T,I,w(E,I))}return l||u(e),r}},4644:function(e,t,n){var r,i,s,o=n(7811),a=n(3724),c=n(4576),u=n(4901),l=n(34),h=n(9297),d=n(6955),f=n(6823),p=n(6699),g=n(6840),m=n(2106),v=n(1625),y=n(2787),b=n(2967),w=n(8227),_=n(3392),E=n(1181),T=E.enforce,S=E.get,I=c.Int8Array,C=I&&I.prototype,k=c.Uint8ClampedArray,A=k&&k.prototype,R=I&&y(I),O=C&&y(C),x=Object.prototype,N=c.TypeError,D=w("toStringTag"),P=_("TYPED_ARRAY_TAG"),M="TypedArrayConstructor",L=o&&!!b&&"Opera"!==d(c.opera),F=!1,V={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},U={BigInt64Array:8,BigUint64Array:8},j=function(e){if(!l(e))return!1;var t=d(e);return"DataView"===t||h(V,t)||h(U,t)},$=function(e){var t=y(e);if(l(t)){var n=S(t);return n&&h(n,M)?n[M]:$(t)}},B=function(e){if(!l(e))return!1;var t=d(e);return h(V,t)||h(U,t)},W=function(e){if(B(e))return e;throw new N("Target is not a typed array")},z=function(e){if(u(e)&&(!b||v(R,e)))return e;throw new N(f(e)+" is not a typed array constructor")},K=function(e,t,n,r){if(a){if(n)for(var i in V){var s=c[i];if(s&&h(s.prototype,e))try{delete s.prototype[e]}catch(o){try{s.prototype[e]=t}catch(u){}}}O[e]&&!n||g(O,e,n?t:L&&C[e]||t,r)}},q=function(e,t,n){var r,i;if(a){if(b){if(n)for(r in V)if(i=c[r],i&&h(i,e))try{delete i[e]}catch(s){}if(R[e]&&!n)return;try{return g(R,e,n?t:L&&R[e]||t)}catch(s){}}for(r in V)i=c[r],!i||i[e]&&!n||g(i,e,t)}};for(r in V)i=c[r],s=i&&i.prototype,s?T(s)[M]=i:L=!1;for(r in U)i=c[r],s=i&&i.prototype,s&&(T(s)[M]=i);if((!L||!u(R)||R===Function.prototype)&&(R=function(){throw new N("Incorrect invocation")},L))for(r in V)c[r]&&b(c[r],R);if((!L||!O||O===x)&&(O=R.prototype,L))for(r in V)c[r]&&b(c[r].prototype,O);if(L&&y(A)!==O&&b(A,O),a&&!h(O,D))for(r in F=!0,m(O,D,{configurable:!0,get:function(){return l(this)?this[P]:void 0}}),V)c[r]&&p(c[r],P,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:L,TYPED_ARRAY_TAG:F&&P,aTypedArray:W,aTypedArrayConstructor:z,exportTypedArrayMethod:K,exportTypedArrayStaticMethod:q,getTypedArrayConstructor:$,isView:j,isTypedArray:B,TypedArray:R,TypedArrayPrototype:O}},5370:function(e,t,n){var r=n(6198);e.exports=function(e,t,n){var i=0,s=arguments.length>2?n:r(t),o=new e(s);while(s>i)o[i]=t[i++];return o}},9617:function(e,t,n){var r=n(5397),i=n(5610),s=n(6198),o=function(e){return function(t,n,o){var a=r(t),c=s(a);if(0===c)return!e&&-1;var u,l=i(o,c);if(e&&n!==n){while(c>l)if(u=a[l++],u!==u)return!0}else for(;c>l;l++)if((e||l in a)&&a[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},4527:function(e,t,n){var r=n(3724),i=n(4376),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!o(e,"length").writable)throw new s("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},7628:function(e,t,n){var r=n(6198);e.exports=function(e,t){for(var n=r(e),i=new t(n),s=0;s<n;s++)i[s]=e[n-s-1];return i}},9928:function(e,t,n){var r=n(6198),i=n(1291),s=RangeError;e.exports=function(e,t,n,o){var a=r(e),c=i(n),u=c<0?a+c:c;if(u>=a||u<0)throw new s("Incorrect index");for(var l=new t(a),h=0;h<a;h++)l[h]=h===u?o:e[h];return l}},2195:function(e,t,n){var r=n(9504),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},6955:function(e,t,n){var r=n(2140),i=n(4901),s=n(2195),o=n(8227),a=o("toStringTag"),c=Object,u="Arguments"===s(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(n){}};e.exports=r?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=l(t=c(e),a))?n:u?s(t):"Object"===(r=s(t))&&i(t.callee)?"Arguments":r}},7740:function(e,t,n){var r=n(9297),i=n(5031),s=n(7347),o=n(4913);e.exports=function(e,t,n){for(var a=i(t),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},2211:function(e,t,n){var r=n(9039);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},6699:function(e,t,n){var r=n(3724),i=n(4913),s=n(6980);e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},6980:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},2106:function(e,t,n){var r=n(283),i=n(4913);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),i.f(e,t,n)}},6840:function(e,t,n){var r=n(4901),i=n(4913),s=n(283),o=n(9433);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:t;if(r(n)&&s(n,u,a),a.global)c?e[t]=n:o(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(l){}c?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},9433:function(e,t,n){var r=n(4576),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},3724:function(e,t,n){var r=n(9039);e.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4483:function(e,t,n){var r,i,s,o,a=n(4576),c=n(9429),u=n(1548),l=a.structuredClone,h=a.ArrayBuffer,d=a.MessageChannel,f=!1;if(u)f=function(e){l(e,{transfer:[e]})};else if(h)try{d||(r=c("worker_threads"),r&&(d=r.MessageChannel)),d&&(i=new d,s=new h(2),o=function(e){i.port1.postMessage(null,[e])},2===s.byteLength&&(o(s),0===s.byteLength&&(f=o)))}catch(p){}e.exports=f},4055:function(e,t,n){var r=n(4576),i=n(34),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},6837:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},5002:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8727:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},8574:function(e,t,n){var r=n(4215);e.exports="NODE"===r},2839:function(e,t,n){var r=n(4576),i=r.navigator,s=i&&i.userAgent;e.exports=s?String(s):""},9519:function(e,t,n){var r,i,s=n(4576),o=n(2839),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},4215:function(e,t,n){var r=n(4576),i=n(2839),s=n(2195),o=function(e){return i.slice(0,e.length)===e};e.exports=function(){return o("Bun/")?"BUN":o("Cloudflare-Workers")?"CLOUDFLARE":o("Deno/")?"DENO":o("Node.js/")?"NODE":r.Bun&&"string"==typeof Bun.version?"BUN":r.Deno&&"object"==typeof Deno.version?"DENO":"process"===s(r.process)?"NODE":r.window&&r.document?"BROWSER":"REST"}()},6193:function(e,t,n){var r=n(9504),i=Error,s=r("".replace),o=function(e){return String(new i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);e.exports=function(e,t){if(c&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=s(e,a,"");return e}},6518:function(e,t,n){var r=n(4576),i=n(7347).f,s=n(6699),o=n(6840),a=n(9433),c=n(7740),u=n(2796);e.exports=function(e,t){var n,l,h,d,f,p,g=e.target,m=e.global,v=e.stat;if(l=m?r:v?r[g]||a(g,{}):r[g]&&r[g].prototype,l)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(m?h:g+(v?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,e)}}},9039:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},616:function(e,t,n){var r=n(9039);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},9565:function(e,t,n){var r=n(616),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},350:function(e,t,n){var r=n(3724),i=n(9297),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},6706:function(e,t,n){var r=n(9504),i=n(9306);e.exports=function(e,t,n){try{return r(i(Object.getOwnPropertyDescriptor(e,t)[n]))}catch(s){}}},7476:function(e,t,n){var r=n(2195),i=n(9504);e.exports=function(e){if("Function"===r(e))return i(e)}},9504:function(e,t,n){var r=n(616),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);e.exports=r?o:function(e){return function(){return s.apply(e,arguments)}}},9429:function(e,t,n){var r=n(4576),i=n(8574);e.exports=function(e){if(i){try{return r.process.getBuiltinModule(e)}catch(t){}try{return Function('return require("'+e+'")')()}catch(t){}}}},7751:function(e,t,n){var r=n(4576),i=n(4901),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},1767:function(e){e.exports=function(e){return{iterator:e,next:e.next,done:!1}}},5966:function(e,t,n){var r=n(9306),i=n(4117);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},3789:function(e,t,n){var r=n(9306),i=n(8551),s=n(9565),o=n(1291),a=n(1767),c="Invalid size",u=RangeError,l=TypeError,h=Math.max,d=function(e,t){this.set=e,this.size=h(t,0),this.has=r(e.has),this.keys=r(e.keys)};d.prototype={getIterator:function(){return a(i(s(this.keys,this.set)))},includes:function(e){return s(this.has,this.set,e)}},e.exports=function(e){i(e);var t=+e.size;if(t!==t)throw new l(c);var n=o(t);if(n<0)throw new u(c);return new d(e,n)}},4576:function(e,t,n){var r=function(e){return e&&e.Math===Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},9297:function(e,t,n){var r=n(9504),i=n(8981),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},421:function(e){e.exports={}},5917:function(e,t,n){var r=n(3724),i=n(9039),s=n(4055);e.exports=!r&&!i((function(){return 7!==Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},7055:function(e,t,n){var r=n(9504),i=n(9039),s=n(2195),o=Object,a=r("".split);e.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"===s(e)?a(e,""):o(e)}:o},3167:function(e,t,n){var r=n(4901),i=n(34),s=n(2967);e.exports=function(e,t,n){var o,a;return s&&r(o=t.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},3706:function(e,t,n){var r=n(9504),i=n(4901),s=n(7629),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},1181:function(e,t,n){var r,i,s,o=n(8622),a=n(4576),c=n(34),u=n(6699),l=n(9297),h=n(7629),d=n(6119),f=n(421),p="Object already initialized",g=a.TypeError,m=a.WeakMap,v=function(e){return s(e)?i(e):r(e,{})},y=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw new g("Incompatible receiver, "+e+" required");return n}};if(o||h.state){var b=h.state||(h.state=new m);b.get=b.get,b.has=b.has,b.set=b.set,r=function(e,t){if(b.has(e))throw new g(p);return t.facade=e,b.set(e,t),t},i=function(e){return b.get(e)||{}},s=function(e){return b.has(e)}}else{var w=d("state");f[w]=!0,r=function(e,t){if(l(e,w))throw new g(p);return t.facade=e,u(e,w,t),t},i=function(e){return l(e,w)?e[w]:{}},s=function(e){return l(e,w)}}e.exports={set:r,get:i,has:s,enforce:v,getterFor:y}},4376:function(e,t,n){var r=n(2195);e.exports=Array.isArray||function(e){return"Array"===r(e)}},1108:function(e,t,n){var r=n(6955);e.exports=function(e){var t=r(e);return"BigInt64Array"===t||"BigUint64Array"===t}},4901:function(e){var t="object"==typeof document&&document.all;e.exports="undefined"==typeof t&&void 0!==t?function(e){return"function"==typeof e||e===t}:function(e){return"function"==typeof e}},2796:function(e,t,n){var r=n(9039),i=n(4901),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n===l||n!==u&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";e.exports=o},4117:function(e){e.exports=function(e){return null===e||void 0===e}},34:function(e,t,n){var r=n(4901);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},3925:function(e,t,n){var r=n(34);e.exports=function(e){return r(e)||null===e}},6395:function(e){e.exports=!1},757:function(e,t,n){var r=n(7751),i=n(4901),s=n(1625),o=n(7040),a=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&s(t.prototype,a(e))}},507:function(e,t,n){var r=n(9565);e.exports=function(e,t,n){var i,s,o=n?e:e.iterator,a=e.next;while(!(i=r(a,o)).done)if(s=t(i.value),void 0!==s)return s}},9539:function(e,t,n){var r=n(9565),i=n(8551),s=n(5966);e.exports=function(e,t,n){var o,a;i(e);try{if(o=s(e,"return"),!o){if("throw"===t)throw n;return n}o=r(o,e)}catch(c){a=!0,o=c}if("throw"===t)throw n;if(a)throw o;return i(o),n}},6198:function(e,t,n){var r=n(8014);e.exports=function(e){return r(e.length)}},283:function(e,t,n){var r=n(9504),i=n(9039),s=n(4901),o=n(9297),a=n(3724),c=n(350).CONFIGURABLE,u=n(3706),l=n(1181),h=l.enforce,d=l.get,f=String,p=Object.defineProperty,g=r("".slice),m=r("".replace),v=r([].join),y=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),b=String(String).split("String"),w=e.exports=function(e,t,n){"Symbol("===g(f(t),0,7)&&(t="["+m(f(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!o(e,"name")||c&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),y&&n&&o(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=h(e);return o(r,"source")||(r.source=v(b,"string"==typeof t?t:"")),e};Function.prototype.toString=w((function(){return s(this)&&d(this).source||u(this)}),"toString")},741:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},2603:function(e,t,n){var r=n(655);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},4913:function(e,t,n){var r=n(3724),i=n(5917),s=n(8686),o=n(8551),a=n(6969),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=r?s?function(e,t,n){if(o(e),t=a(t),o(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=l(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(o(e),t=a(t),o(n),i)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},7347:function(e,t,n){var r=n(3724),i=n(9565),s=n(8773),o=n(6980),a=n(5397),c=n(6969),u=n(9297),l=n(5917),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return o(!i(s.f,e,t),e[t])}},8480:function(e,t,n){var r=n(1828),i=n(8727),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},3717:function(e,t){t.f=Object.getOwnPropertySymbols},2787:function(e,t,n){var r=n(9297),i=n(4901),s=n(8981),o=n(6119),a=n(2211),c=o("IE_PROTO"),u=Object,l=u.prototype;e.exports=a?u.getPrototypeOf:function(e){var t=s(e);if(r(t,c))return t[c];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof u?l:null}},1625:function(e,t,n){var r=n(9504);e.exports=r({}.isPrototypeOf)},1828:function(e,t,n){var r=n(9504),i=n(9297),s=n(5397),o=n(9617).indexOf,a=n(421),c=r([].push);e.exports=function(e,t){var n,r=s(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~o(l,n)||c(l,n));return l}},8773:function(e,t){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},2967:function(e,t,n){var r=n(6706),i=n(34),s=n(7750),o=n(3506);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.prototype,"__proto__","set"),e(n,[]),t=n instanceof Array}catch(a){}return function(n,r){return s(n),o(r),i(n)?(t?e(n,r):n.__proto__=r,n):n}}():void 0)},4270:function(e,t,n){var r=n(9565),i=n(4901),s=n(34),o=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!s(a=r(n,e)))return a;if(i(n=e.valueOf)&&!s(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!s(a=r(n,e)))return a;throw new o("Can't convert object to primitive value")}},5031:function(e,t,n){var r=n(7751),i=n(9504),s=n(8480),o=n(3717),a=n(8551),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},7750:function(e,t,n){var r=n(4117),i=TypeError;e.exports=function(e){if(r(e))throw new i("Can't call method on "+e);return e}},9286:function(e,t,n){var r=n(4402),i=n(8469),s=r.Set,o=r.add;e.exports=function(e){var t=new s;return i(e,(function(e){o(t,e)})),t}},3440:function(e,t,n){var r=n(7080),i=n(4402),s=n(9286),o=n(5170),a=n(3789),c=n(8469),u=n(507),l=i.has,h=i.remove;e.exports=function(e){var t=r(this),n=a(e),i=s(t);return o(t)<=n.size?c(t,(function(e){n.includes(e)&&h(i,e)})):u(n.getIterator(),(function(e){l(t,e)&&h(i,e)})),i}},4402:function(e,t,n){var r=n(9504),i=Set.prototype;e.exports={Set:Set,add:r(i.add),has:r(i.has),remove:r(i["delete"]),proto:i}},8750:function(e,t,n){var r=n(7080),i=n(4402),s=n(5170),o=n(3789),a=n(8469),c=n(507),u=i.Set,l=i.add,h=i.has;e.exports=function(e){var t=r(this),n=o(e),i=new u;return s(t)>n.size?c(n.getIterator(),(function(e){h(t,e)&&l(i,e)})):a(t,(function(e){n.includes(e)&&l(i,e)})),i}},4449:function(e,t,n){var r=n(7080),i=n(4402).has,s=n(5170),o=n(3789),a=n(8469),c=n(507),u=n(9539);e.exports=function(e){var t=r(this),n=o(e);if(s(t)<=n.size)return!1!==a(t,(function(e){if(n.includes(e))return!1}),!0);var l=n.getIterator();return!1!==c(l,(function(e){if(i(t,e))return u(l,"normal",!1)}))}},3838:function(e,t,n){var r=n(7080),i=n(5170),s=n(8469),o=n(3789);e.exports=function(e){var t=r(this),n=o(e);return!(i(t)>n.size)&&!1!==s(t,(function(e){if(!n.includes(e))return!1}),!0)}},8527:function(e,t,n){var r=n(7080),i=n(4402).has,s=n(5170),o=n(3789),a=n(507),c=n(9539);e.exports=function(e){var t=r(this),n=o(e);if(s(t)<n.size)return!1;var u=n.getIterator();return!1!==a(u,(function(e){if(!i(t,e))return c(u,"normal",!1)}))}},8469:function(e,t,n){var r=n(9504),i=n(507),s=n(4402),o=s.Set,a=s.proto,c=r(a.forEach),u=r(a.keys),l=u(new o).next;e.exports=function(e,t,n){return n?i({iterator:u(e),next:l},t):c(e,t)}},4916:function(e,t,n){var r=n(7751),i=function(e){return{size:e,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}};e.exports=function(e){var t=r("Set");try{(new t)[e](i(0));try{return(new t)[e](i(-1)),!1}catch(n){return!0}}catch(s){return!1}}},5170:function(e,t,n){var r=n(6706),i=n(4402);e.exports=r(i.proto,"size","get")||function(e){return e.size}},3650:function(e,t,n){var r=n(7080),i=n(4402),s=n(9286),o=n(3789),a=n(507),c=i.add,u=i.has,l=i.remove;e.exports=function(e){var t=r(this),n=o(e).getIterator(),i=s(t);return a(n,(function(e){u(t,e)?l(i,e):c(i,e)})),i}},4204:function(e,t,n){var r=n(7080),i=n(4402).add,s=n(9286),o=n(3789),a=n(507);e.exports=function(e){var t=r(this),n=o(e).getIterator(),c=s(t);return a(n,(function(e){i(c,e)})),c}},6119:function(e,t,n){var r=n(5745),i=n(3392),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},7629:function(e,t,n){var r=n(6395),i=n(4576),s=n(9433),o="__core-js_shared__",a=e.exports=i[o]||s(o,{});(a.versions||(a.versions=[])).push({version:"3.38.1",mode:r?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE",source:"https://github.com/zloirock/core-js"})},5745:function(e,t,n){var r=n(7629);e.exports=function(e,t){return r[e]||(r[e]=t||{})}},1548:function(e,t,n){var r=n(4576),i=n(9039),s=n(9519),o=n(4215),a=r.structuredClone;e.exports=!!a&&!i((function(){if("DENO"===o&&s>92||"NODE"===o&&s>94||"BROWSER"===o&&s>97)return!1;var e=new ArrayBuffer(8),t=a(e,{transfer:[e]});return 0!==e.byteLength||8!==t.byteLength}))},4495:function(e,t,n){var r=n(9519),i=n(9039),s=n(4576),o=s.String;e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol("symbol detection");return!o(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},5610:function(e,t,n){var r=n(1291),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},5854:function(e,t,n){var r=n(2777),i=TypeError;e.exports=function(e){var t=r(e,"number");if("number"==typeof t)throw new i("Can't convert number to bigint");return BigInt(t)}},7696:function(e,t,n){var r=n(1291),i=n(8014),s=RangeError;e.exports=function(e){if(void 0===e)return 0;var t=r(e),n=i(t);if(t!==n)throw new s("Wrong length or index");return n}},5397:function(e,t,n){var r=n(7055),i=n(7750);e.exports=function(e){return r(i(e))}},1291:function(e,t,n){var r=n(741);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},8014:function(e,t,n){var r=n(1291),i=Math.min;e.exports=function(e){var t=r(e);return t>0?i(t,9007199254740991):0}},8981:function(e,t,n){var r=n(7750),i=Object;e.exports=function(e){return i(r(e))}},2777:function(e,t,n){var r=n(9565),i=n(34),s=n(757),o=n(5966),a=n(4270),c=n(8227),u=TypeError,l=c("toPrimitive");e.exports=function(e,t){if(!i(e)||s(e))return e;var n,c=o(e,l);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||s(n))return n;throw new u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},6969:function(e,t,n){var r=n(2777),i=n(757);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},2140:function(e,t,n){var r=n(8227),i=r("toStringTag"),s={};s[i]="z",e.exports="[object z]"===String(s)},655:function(e,t,n){var r=n(6955),i=String;e.exports=function(e){if("Symbol"===r(e))throw new TypeError("Cannot convert a Symbol value to a string");return i(e)}},6823:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},3392:function(e,t,n){var r=n(9504),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},7040:function(e,t,n){var r=n(4495);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8686:function(e,t,n){var r=n(3724),i=n(9039);e.exports=r&&i((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},2812:function(e){var t=TypeError;e.exports=function(e,n){if(e<n)throw new t("Not enough arguments");return e}},8622:function(e,t,n){var r=n(4576),i=n(4901),s=r.WeakMap;e.exports=i(s)&&/native code/.test(String(s))},8227:function(e,t,n){var r=n(4576),i=n(5745),s=n(9297),o=n(3392),a=n(4495),c=n(7040),u=r.Symbol,l=i("wks"),h=c?u["for"]||u:u&&u.withoutSetter||o;e.exports=function(e){return s(l,e)||(l[e]=a&&s(u,e)?u[e]:h("Symbol."+e)),l[e]}},6573:function(e,t,n){var r=n(3724),i=n(2106),s=n(3238),o=ArrayBuffer.prototype;r&&!("detached"in o)&&i(o,"detached",{configurable:!0,get:function(){return s(this)}})},7936:function(e,t,n){var r=n(6518),i=n(5636);i&&r({target:"ArrayBuffer",proto:!0},{transferToFixedLength:function(){return i(this,arguments.length?arguments[0]:void 0,!1)}})},8100:function(e,t,n){var r=n(6518),i=n(5636);i&&r({target:"ArrayBuffer",proto:!0},{transfer:function(){return i(this,arguments.length?arguments[0]:void 0,!0)}})},4114:function(e,t,n){var r=n(6518),i=n(8981),s=n(6198),o=n(4527),a=n(6837),c=n(9039),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(e){var t=i(this),n=s(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return o(t,n),n}})},7642:function(e,t,n){var r=n(6518),i=n(3440),s=n(4916);r({target:"Set",proto:!0,real:!0,forced:!s("difference")},{difference:i})},8004:function(e,t,n){var r=n(6518),i=n(9039),s=n(8750),o=n(4916),a=!o("intersection")||i((function(){return"3,2"!==String(Array.from(new Set([1,2,3]).intersection(new Set([3,2]))))}));r({target:"Set",proto:!0,real:!0,forced:a},{intersection:s})},3853:function(e,t,n){var r=n(6518),i=n(4449),s=n(4916);r({target:"Set",proto:!0,real:!0,forced:!s("isDisjointFrom")},{isDisjointFrom:i})},5876:function(e,t,n){var r=n(6518),i=n(3838),s=n(4916);r({target:"Set",proto:!0,real:!0,forced:!s("isSubsetOf")},{isSubsetOf:i})},2475:function(e,t,n){var r=n(6518),i=n(8527),s=n(4916);r({target:"Set",proto:!0,real:!0,forced:!s("isSupersetOf")},{isSupersetOf:i})},5024:function(e,t,n){var r=n(6518),i=n(3650),s=n(4916);r({target:"Set",proto:!0,real:!0,forced:!s("symmetricDifference")},{symmetricDifference:i})},1698:function(e,t,n){var r=n(6518),i=n(4204),s=n(4916);r({target:"Set",proto:!0,real:!0,forced:!s("union")},{union:i})},7467:function(e,t,n){var r=n(7628),i=n(4644),s=i.aTypedArray,o=i.exportTypedArrayMethod,a=i.getTypedArrayConstructor;o("toReversed",(function(){return r(s(this),a(this))}))},4732:function(e,t,n){var r=n(4644),i=n(9504),s=n(9306),o=n(5370),a=r.aTypedArray,c=r.getTypedArrayConstructor,u=r.exportTypedArrayMethod,l=i(r.TypedArrayPrototype.sort);u("toSorted",(function(e){void 0!==e&&s(e);var t=a(this),n=o(c(t),t);return l(n,e)}))},9577:function(e,t,n){var r=n(9928),i=n(4644),s=n(1108),o=n(1291),a=n(5854),c=i.aTypedArray,u=i.getTypedArrayConstructor,l=i.exportTypedArrayMethod,h=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(e){return 8===e}}();l("with",{with:function(e,t){var n=c(this),i=o(e),l=s(n)?a(t):+t;return r(n,u(n),i,l)}}["with"],!h)},4979:function(e,t,n){var r=n(6518),i=n(4576),s=n(7751),o=n(6980),a=n(4913).f,c=n(9297),u=n(679),l=n(3167),h=n(2603),d=n(5002),f=n(6193),p=n(3724),g=n(6395),m="DOMException",v=s("Error"),y=s(m),b=function(){u(this,w);var e=arguments.length,t=h(e<1?void 0:arguments[0]),n=h(e<2?void 0:arguments[1],"Error"),r=new y(t,n),i=new v(t);return i.name=m,a(r,"stack",o(1,f(i.stack,1))),l(r,this,b),r},w=b.prototype=y.prototype,_="stack"in new v(m),E="stack"in new y(1,2),T=y&&p&&Object.getOwnPropertyDescriptor(i,m),S=!!T&&!(T.writable&&T.configurable),I=_&&!S&&!E;r({global:!0,constructor:!0,forced:g||I},{DOMException:I?b:y});var C=s(m),k=C.prototype;if(k.constructor!==C)for(var A in g||a(k,"constructor",o(1,C)),d)if(c(d,A)){var R=d[A],O=R.s;c(C,O)||a(C,O,o(6,R.c))}},4603:function(e,t,n){var r=n(6840),i=n(9504),s=n(655),o=n(2812),a=URLSearchParams,c=a.prototype,u=i(c.append),l=i(c["delete"]),h=i(c.forEach),d=i([].push),f=new a("a=1&a=2&b=3");f["delete"]("a",1),f["delete"]("b",void 0),f+""!=="a=2"&&r(c,"delete",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return l(this,e);var r=[];h(this,(function(e,t){d(r,{key:t,value:e})})),o(t,1);var i,a=s(e),c=s(n),f=0,p=0,g=!1,m=r.length;while(f<m)i=r[f++],g||i.key===a?(g=!0,l(this,i.key)):p++;while(p<m)i=r[p++],i.key===a&&i.value===c||u(this,i.key,i.value)}),{enumerable:!0,unsafe:!0})},7566:function(e,t,n){var r=n(6840),i=n(9504),s=n(655),o=n(2812),a=URLSearchParams,c=a.prototype,u=i(c.getAll),l=i(c.has),h=new a("a=1");!h.has("a",2)&&h.has("a",void 0)||r(c,"has",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return l(this,e);var r=u(this,e);o(t,1);var i=s(n),a=0;while(a<r.length)if(r[a++]===i)return!0;return!1}),{enumerable:!0,unsafe:!0})},8721:function(e,t,n){var r=n(3724),i=n(9504),s=n(2106),o=URLSearchParams.prototype,a=i(o.forEach);r&&!("size"in o)&&s(o,"size",{get:function(){var e=0;return a(this,(function(){e++})),e},configurable:!0,enumerable:!0})},3405:function(e,t,n){n.d(t,{MF:function(){return ye},j6:function(){return fe},xZ:function(){return pe},om:function(){return de},Sx:function(){return we},Wp:function(){return be},KO:function(){return _e}});n(4114);var r=n(852),i=n(1363),s=n(4046);n(4979);const o=(e,t)=>t.some((t=>e instanceof t));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,g=new WeakMap;function m(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(E(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),g.set(t,e),t}function v(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));d.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function b(e){y=e(y)}function w(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(T(this),t),E(h.get(this))}:function(...t){return E(e.apply(T(this),t))}:function(t,...n){const r=e.call(T(this),t,...n);return f.set(r,t.sort?t.sort():[t]),E(r)}}function _(e){return"function"===typeof e?w(e):(e instanceof IDBTransaction&&v(e),o(e,u())?new Proxy(e,y):e)}function E(e){if(e instanceof IDBRequest)return m(e);if(p.has(e))return p.get(e);const t=_(e);return t!==e&&(p.set(e,t),g.set(t,e)),t}const T=e=>g.get(e);function S(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=E(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(E(o.result),e.oldVersion,e.newVersion,E(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const I=["get","getKey","getAll","getAllKeys","count"],C=["put","add","delete","clear"],k=new Map;function A(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(k.get(t))return k.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=C.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!I.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return k.set(t,s),s}b((e=>({...e,get:(t,n,r)=>A(t,n)||e.get(t,n,r),has:(t,n)=>!!A(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class R{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(O(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function O(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const x="@firebase/app",N="0.10.9",D=new i.Vy("@firebase/app"),P="@firebase/app-compat",M="@firebase/analytics-compat",L="@firebase/analytics",F="@firebase/app-check-compat",V="@firebase/app-check",U="@firebase/auth",j="@firebase/auth-compat",$="@firebase/database",B="@firebase/database-compat",W="@firebase/functions",z="@firebase/functions-compat",K="@firebase/installations",q="@firebase/installations-compat",H="@firebase/messaging",G="@firebase/messaging-compat",Q="@firebase/performance",X="@firebase/performance-compat",Y="@firebase/remote-config",J="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/vertexai-preview",re="@firebase/firestore-compat",ie="firebase",se="10.13.0",oe="[DEFAULT]",ae={[x]:"fire-core",[P]:"fire-core-compat",[L]:"fire-analytics",[M]:"fire-analytics-compat",[V]:"fire-app-check",[F]:"fire-app-check-compat",[U]:"fire-auth",[j]:"fire-auth-compat",[$]:"fire-rtdb",[B]:"fire-rtdb-compat",[W]:"fire-fn",[z]:"fire-fn-compat",[K]:"fire-iid",[q]:"fire-iid-compat",[H]:"fire-fcm",[G]:"fire-fcm-compat",[Q]:"fire-perf",[X]:"fire-perf-compat",[Y]:"fire-rc",[J]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[re]:"fire-fst-compat",[ne]:"fire-vertex","fire-js":"fire-js",[ie]:"fire-js-all"},ce=new Map,ue=new Map,le=new Map;function he(e,t){try{e.container.addComponent(t)}catch(n){D.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function de(e){const t=e.name;if(le.has(t))return D.debug(`There were multiple attempts to register component ${t}.`),!1;le.set(t,e);for(const n of ce.values())he(n,e);for(const n of ue.values())he(n,e);return!0}function fe(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function pe(e){return void 0!==e.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ge={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},me=new s.FA("app","Firebase",ge);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ve{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw me.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ye=se;function be(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:oe,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!==typeof o||!o)throw me.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.T9)()),!n)throw me.create("no-options");const a=ce.get(o);if(a){if((0,s.bD)(n,a.options)&&(0,s.bD)(i,a.config))return a;throw me.create("duplicate-app",{appName:o})}const c=new r.h1(o);for(const r of le.values())c.addComponent(r);const u=new ve(n,i,c);return ce.set(o,u),u}function we(e=oe){const t=ce.get(e);if(!t&&e===oe&&(0,s.T9)())return be();if(!t)throw me.create("no-app",{appName:e});return t}function _e(e,t,n){var i;let s=null!==(i=ae[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void D.warn(e.join(" "))}de(new r.uA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ee="firebase-heartbeat-database",Te=1,Se="firebase-heartbeat-store";let Ie=null;function Ce(){return Ie||(Ie=S(Ee,Te,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Se)}catch(n){console.warn(n)}}}}).catch((e=>{throw me.create("idb-open",{originalErrorMessage:e.message})}))),Ie}async function ke(e){try{const t=await Ce(),n=t.transaction(Se),r=await n.objectStore(Se).get(Re(e));return await n.done,r}catch(t){if(t instanceof s.g)D.warn(t.message);else{const e=me.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});D.warn(e.message)}}}async function Ae(e,t){try{const n=await Ce(),r=n.transaction(Se,"readwrite"),i=r.objectStore(Se);await i.put(t,Re(e)),await r.done}catch(n){if(n instanceof s.g)D.warn(n.message);else{const e=me.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});D.warn(e.message)}}}function Re(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe=1024,xe=2592e6;class Ne{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Me(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t,n;try{const r=this.container.getProvider("platform-logger").getImmediate(),i=r.getPlatformInfoString(),s=De();if(console.log("heartbeats",null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats),null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(n=this._heartbeatsCache)||void 0===n?void 0:n.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some((e=>e.date===s)))return;return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=xe})),this._storage.overwrite(this._heartbeatsCache)}catch(r){D.warn(r)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=De(),{heartbeatsToSend:n,unsentEntries:r}=Pe(this._heartbeatsCache.heartbeats),i=(0,s.Uj)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return D.warn(t),""}}}function De(){const e=new Date;return e.toISOString().substring(0,10)}function Pe(e,t=Oe){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Le(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Le(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Me{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.zW)()&&(0,s.eX)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await ke(this.app);return(null===e||void 0===e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ae(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ae(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Le(e){return(0,s.Uj)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(e){de(new r.uA("platform-logger",(e=>new R(e)),"PRIVATE")),de(new r.uA("heartbeat",(e=>new Ne(e)),"PRIVATE")),_e(x,N,e),_e(x,N,"esm2017"),_e("fire-js","")}Fe("")},852:function(e,t,n){n.d(t,{h1:function(){return u},uA:function(){return i}});n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698);var r=n(4046);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.cY;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},1363:function(e,t,n){n.d(t,{$b:function(){return i},Vy:function(){return u}});n(4114);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}},6400:function(e,t,n){n.d(t,{Wp:function(){return r.Wp}});var r=n(3405),i="firebase",s="10.13.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KO)(i,s,"app")},8662:function(e,t,n){n.d(t,{HF:function(){return Et},xI:function(){return Wr},hg:function(){return Pt},df:function(){return Dn},CI:function(){return Mt}});n(4114),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(4603),n(7566),n(8721);var r=n(3405),i=n(4046),s=n(1363);function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var a=n(852);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new i.FA("auth","Firebase",c()),h=new s.Vy("@firebase/auth");function d(e,...t){h.logLevel<=s.$b.WARN&&h.warn(`Auth (${r.MF}): ${e}`,...t)}function f(e,...t){h.logLevel<=s.$b.ERROR&&h.error(`Auth (${r.MF}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e,...t){throw b(e,...t)}function g(e,...t){return b(e,...t)}function m(e,t,n){const r=Object.assign(Object.assign({},u()),{[t]:n}),s=new i.FA("auth","Firebase",r);return s.create(t,{appName:e.name})}function v(e){return m(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function y(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&p(e,"argument-error"),m(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function b(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return l.create(e,...t)}function w(e,t,...n){if(!e)throw b(t,...n)}function _(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function E(e,t){e||_(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function S(){return"http:"===I()||"https:"===I()}function I(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(S()||(0,i.sr)()||"connection"in navigator))||navigator.onLine}function k(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e,t){this.shortDelay=e,this.longDelay=t,E(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.jZ)()||(0,i.lV)()}get(){return C()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e,t){E(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void _("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void _("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void _("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["INVALID_LOGIN_CREDENTIALS"]:"invalid-credential",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},N=new A(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function P(e,t,n,r,s={}){return M(e,s,(async()=>{let s={},o={};r&&("GET"===t?o=r:s={body:JSON.stringify(r)});const a=(0,i.Am)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),O.fetch()(F(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))}))}async function M(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},x),t);try{const t=new U(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw j(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw j(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw j(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw j(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(e,a,o);p(e,a)}}catch(s){if(s instanceof i.g)throw s;p(e,"network-request-failed",{message:String(s)})}}async function L(e,t,n,r,i={}){const s=await P(e,t,n,r,i);return"mfaPendingCredential"in s&&p(e,"multi-factor-auth-required",{_serverResponse:s}),s}function F(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?R(e.config,i):`${e.config.apiScheme}://${i}`}function V(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class U{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(g(this.auth,"network-request-failed"))),N.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function j(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=g(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e){return void 0!==e&&void 0!==e.enterprise}class B{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return V(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(e,t){return P(e,"GET","/v2/recaptchaConfig",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(e,t){return P(e,"POST","/v1/accounts:delete",t)}async function K(e,t){return P(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(e,t=!1){const n=(0,i.Ku)(e),r=await n.getIdToken(t),s=Q(r);w(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:r,authTime:q(G(s.auth_time)),issuedAtTime:q(G(s.iat)),expirationTime:q(G(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function G(e){return 1e3*Number(e)}function Q(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.u)(n);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(s){return f("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function X(e){const t=Q(e);return w(t,"internal-error"),w("undefined"!==typeof t.exp,"internal-error"),w("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i.g&&J(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function J({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=q(this.lastLoginAt),this.creationTime=q(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function te(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Y(e,K(n,{idToken:r}));w(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?ie(s.providerUserInfo):[],a=re(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ee(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function ne(e){const t=(0,i.Ku)(e);await te(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function re(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function ie(e){return e.map((e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function se(e,t){const n=await M(e,{},(async()=>{const n=(0,i.Am)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=F(e,r,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",O.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function oe(e,t){return P(e,"POST","/v2/accounts:revokeToken",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){w(e.idToken,"internal-error"),w("undefined"!==typeof e.idToken,"internal-error"),w("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):X(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){w(0!==e.length,"internal-error");const t=X(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(w(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await se(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new ae;return n&&(w("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(w("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(w("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ae,this.toJSON())}_performRefresh(){return _("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e,t){w("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ue{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Z(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ee(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Y(this,this.stsTokenManager.getToken(this.auth,e));return w(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return H(this,e)}reload(){return ne(this)}_assign(e){this!==e&&(w(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ue(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await te(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,r.xZ)(this.auth.app))return Promise.reject(v(this.auth));const e=await this.getIdToken();return await Y(this,z(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:b,isAnonymous:_,providerData:E,stsTokenManager:T}=t;w(y&&T,e,"internal-error");const S=ae.fromJSON(this.name,T);w("string"===typeof y,e,"internal-error"),ce(l,e.name),ce(h,e.name),w("boolean"===typeof b,e,"internal-error"),w("boolean"===typeof _,e,"internal-error"),ce(d,e.name),ce(f,e.name),ce(p,e.name),ce(g,e.name),ce(m,e.name),ce(v,e.name);const I=new ue({uid:y,auth:e,email:h,emailVerified:b,displayName:l,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:S,createdAt:m,lastLoginAt:v});return E&&Array.isArray(E)&&(I.providerData=E.map((e=>Object.assign({},e)))),g&&(I._redirectEventId=g),I}static async _fromIdTokenResponse(e,t,n=!1){const r=new ae;r.updateFromServerResponse(t);const i=new ue({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await te(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];w(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?ie(r.providerUserInfo):[],s=!(r.email&&r.passwordHash)&&!(null===i||void 0===i?void 0:i.length),o=new ae;o.updateFromIdToken(n);const a=new ue({uid:r.localId,auth:e,stsTokenManager:o,isAnonymous:s}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new ee(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(null===i||void 0===i?void 0:i.length)};return Object.assign(a,c),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le=new Map;function he(e){E(e instanceof Function,"Expected a class definition");let t=le.get(e);return t?(E(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,le.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}de.type="NONE";const fe=de;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(e,t,n){return`firebase:${e}:${t}:${n}`}class ge{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=pe(this.userKey,r.apiKey,i),this.fullPersistenceKey=pe("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ue._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ge(he(fe),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||he(fe);const s=pe(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=ue._fromJSON(e,t);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(c){}}))),new ge(i,e,n)):new ge(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(we(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ve(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ee(t))return"Blackberry";if(Te(t))return"Webos";if(ye(t))return"Safari";if((t.includes("chrome/")||be(t))&&!t.includes("edge/"))return"Chrome";if(_e(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ve(e=(0,i.ZQ)()){return/firefox\//i.test(e)}function ye(e=(0,i.ZQ)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function be(e=(0,i.ZQ)()){return/crios\//i.test(e)}function we(e=(0,i.ZQ)()){return/iemobile/i.test(e)}function _e(e=(0,i.ZQ)()){return/android/i.test(e)}function Ee(e=(0,i.ZQ)()){return/blackberry/i.test(e)}function Te(e=(0,i.ZQ)()){return/webos/i.test(e)}function Se(e=(0,i.ZQ)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ie(e=(0,i.ZQ)()){var t;return Se(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Ce(){return(0,i.lT)()&&10===document.documentMode}function ke(e=(0,i.ZQ)()){return Se(e)||_e(e)||Te(e)||Ee(e)||/windows phone/i.test(e)||we(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(e,t=[]){let n;switch(e){case"Browser":n=me((0,i.ZQ)());break;case"Worker":n=`${me((0,i.ZQ)())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.MF}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oe(e,t={}){return P(e,"GET","/v2/passwordPolicy",D(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe=6;class Ne{constructor(e){var t,n,r,i;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:xe,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,i,s,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsLowercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Me(this),this.idTokenSubscription=new Me(this),this.beforeStateQueue=new Re(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=he(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ge.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await K(this,{idToken:e}),n=await ue._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if((0,r.xZ)(this.app)){const e=this.app.settings.authIdToken;return e?new Promise((t=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(e).then(t,t)))})):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null===i||void 0===i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==r||!(null===o||void 0===o?void 0:o.user)||(i=o.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(o)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await te(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=k()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if((0,r.xZ)(this.app))return Promise.reject(v(this));const t=e?(0,i.Ku)(e):null;return t&&w(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&w(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(0,r.xZ)(this.app)?Promise.reject(v(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return(0,r.xZ)(this.app)?Promise.reject(v(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(he(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Oe(this),t=new Ne(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.FA("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};null!=this.tenantId&&(n.tenantId=this.tenantId),await oe(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&he(e)||this._popupRedirectResolver;w(t,this,"argument-error"),this.redirectPersistenceManager=await ge.create(this,[he(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(w(o,this,"internal-error"),o.then((()=>{s||i(this.currentUser)})),"function"===typeof t){const i=e.addObserver(t,n,r);return()=>{s=!0,i()}}{const n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ae(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&d(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function Pe(e){return(0,i.Ku)(e)}class Me{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.tD)((e=>this.observer=e))}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Le={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Fe(e){Le=e}function Ve(e){return Le.loadJS(e)}function Ue(){return Le.recaptchaEnterpriseScript}function je(){return Le.gapiScript}function $e(e){return`__${e}${Math.floor(1e6*Math.random())}`}const Be="recaptcha-enterprise",We="NO_RECAPTCHA";class ze{constructor(e){this.type=Be,this.auth=Pe(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{W(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new B(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function r(t,n,r){const i=window.grecaptcha;$(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n(We)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{n(this.auth).then((n=>{if(!t&&$(window.grecaptcha))r(n,e,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));let t=Ue();0!==t.length&&(t+=n),Ve(t).then((()=>{r(n,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function Ke(e,t,n,r=!1){const i=new ze(e);let s;try{s=await i.verify(n)}catch(a){s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function qe(e,t,n,r){var i;if(null===(i=e._getRecaptchaConfig())||void 0===i?void 0:i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Ke(e,t,n,"getOobCode"===n);return r(e,i)}return r(e,t).catch((async i=>{if("auth/missing-recaptcha-token"===i.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await Ke(e,t,n,"getOobCode"===n);return r(e,i)}return Promise.reject(i)}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function He(e,t){const n=(0,r.j6)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if((0,i.bD)(r,null!==t&&void 0!==t?t:{}))return e;p(e,"already-initialized")}const s=n.initialize({options:t});return s}function Ge(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(he);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}function Qe(e,t,n){const r=Pe(e);w(r._canInitEmulator,r,"emulator-config-failed"),w(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Xe(t),{host:o,port:a}=Ye(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ze()}function Xe(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ye(e){const t=Xe(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Je(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Je(t)}}}function Je(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Ze(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return _("not implemented")}_getIdTokenResponse(e){return _("not implemented")}_linkToIdToken(e,t){return _("not implemented")}_getReauthenticationResolver(e){return _("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tt(e,t){return P(e,"POST","/v1/accounts:signUp",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function nt(e,t){return L(e,"POST","/v1/accounts:signInWithPassword",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function rt(e,t){return L(e,"POST","/v1/accounts:signInWithEmailLink",D(e,t))}async function it(e,t){return L(e,"POST","/v1/accounts:signInWithEmailLink",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends et{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new st(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new st(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qe(e,t,"signInWithPassword",nt);case"emailLink":return rt(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qe(e,n,"signUpPassword",tt);case"emailLink":return it(e,{idToken:t,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ot(e,t){return L(e,"POST","/v1/accounts:signInWithIdp",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="http://localhost";class ct extends et{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ct(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=o(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new ct(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return ot(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ot(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ot(e,t)}buildRequest(){const e={requestUri:at,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,i.Am)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ut(e,t){return P(e,"POST","/v1/accounts:sendVerificationCode",D(e,t))}async function lt(e,t){return L(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,t))}async function ht(e,t){const n=await L(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,t));if(n.temporaryProof)throw j(e,"account-exists-with-different-credential",n);return n}const dt={["USER_NOT_FOUND"]:"user-not-found"};async function ft(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return L(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,n),dt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends et{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new pt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new pt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return lt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return ht(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return ft(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new pt({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mt(e){const t=(0,i.I9)((0,i.hp)(e))["link"],n=t?(0,i.I9)((0,i.hp)(t))["deep_link_id"]:null,r=(0,i.I9)((0,i.hp)(e))["deep_link_id"],s=r?(0,i.I9)((0,i.hp)(r))["link"]:null;return s||r||n||t||e}class vt{constructor(e){var t,n,r,s,o,a;const c=(0,i.I9)((0,i.hp)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=gt(null!==(r=c["mode"])&&void 0!==r?r:null);w(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=mt(e);try{return new vt(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yt{constructor(){this.providerId=yt.PROVIDER_ID}static credential(e,t){return st._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=vt.parseLink(t);return w(n,"argument-error"),st._fromEmailAndCode(e,n.code,n.tenantId)}}yt.PROVIDER_ID="password",yt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",yt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends bt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _t extends wt{constructor(){super("facebook.com")}static credential(e){return ct._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return _t.credential(e.oauthAccessToken)}catch(t){return null}}}_t.FACEBOOK_SIGN_IN_METHOD="facebook.com",_t.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Et extends wt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ct._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Et.credential(t,n)}catch(r){return null}}}Et.GOOGLE_SIGN_IN_METHOD="google.com",Et.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tt extends wt{constructor(){super("github.com")}static credential(e){return ct._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Tt.credential(e.oauthAccessToken)}catch(t){return null}}}Tt.GITHUB_SIGN_IN_METHOD="github.com",Tt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class St extends wt{constructor(){super("twitter.com")}static credential(e,t){return ct._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return St.credential(t,n)}catch(r){return null}}}St.TWITTER_SIGN_IN_METHOD="twitter.com",St.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class It{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await ue._fromIdTokenResponse(e,n,r),s=Ct(n),o=new It({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Ct(n);return new It({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Ct(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kt extends i.g{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,kt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new kt(e,t,n,r)}}function At(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw kt._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rt(e,t,n=!1){const r=await Y(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return It._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ot(e,t,n=!1){const{auth:i}=e;if((0,r.xZ)(i.app))return Promise.reject(v(i));const s="reauthenticate";try{const r=await Y(e,At(i,s,t,e),n);w(r.idToken,i,"internal-error");const o=Q(r.idToken);w(o,i,"internal-error");const{sub:a}=o;return w(e.uid===a,i,"user-mismatch"),It._forOperation(e,s,r)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&p(i,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xt(e,t,n=!1){if((0,r.xZ)(e.app))return Promise.reject(v(e));const i="signIn",s=await At(e,i,t),o=await It._fromIdTokenResponse(e,i,s);return n||await e._updateCurrentUser(o.user),o}function Nt(e,t,n,r){return(0,i.Ku)(e).onIdTokenChanged(t,n,r)}function Dt(e,t,n){return(0,i.Ku)(e).beforeAuthStateChanged(t,n)}function Pt(e,t,n,r){return(0,i.Ku)(e).onAuthStateChanged(t,n,r)}function Mt(e){return(0,i.Ku)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Lt(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:start",D(e,t))}function Ft(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:finalize",D(e,t))}function Vt(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:start",D(e,t))}function Ut(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:finalize",D(e,t))}new WeakMap;const jt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(jt,"1"),this.storage.removeItem(jt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt=1e3,Wt=10;class zt extends $t{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ke(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Ce()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Wt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Bt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}zt.type="LOCAL";const Kt=zt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends $t{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}qt.type="SESSION";const Ht=qt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Qt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await Gt(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xt(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qt.receivers=[];class Yt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Xt("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(){return window}function Zt(e){Jt().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(){return"undefined"!==typeof Jt()["WorkerGlobalScope"]&&"function"===typeof Jt()["importScripts"]}async function tn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function nn(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function rn(){return en()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn="firebaseLocalStorageDb",on=1,an="firebaseLocalStorage",cn="fbase_key";class un{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function ln(e,t){return e.transaction([an],t?"readwrite":"readonly").objectStore(an)}function hn(){const e=indexedDB.deleteDatabase(sn);return new un(e).toPromise()}function dn(){const e=indexedDB.open(sn,on);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(an,{keyPath:cn})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(an)?t(n):(n.close(),await hn(),t(await dn()))}))}))}async function fn(e,t,n){const r=ln(e,!0).put({[cn]:t,value:n});return new un(r).toPromise()}async function pn(e,t){const n=ln(e,!1).get(t),r=await new un(n).toPromise();return void 0===r?null:r.value}function gn(e,t){const n=ln(e,!0).delete(t);return new un(n).toPromise()}const mn=800,vn=3;class yn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await dn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>vn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return en()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qt._getInstance(rn()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await tn(),!this.activeServiceWorker)return;this.sender=new Yt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&nn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dn();return await fn(e,jt,"1"),await gn(e,jt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>fn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>pn(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>gn(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=ln(e,!1).getAll();return new un(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),mn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}yn.type="LOCAL";const bn=yn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:start",D(e,t))}function _n(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:finalize",D(e,t))}function En(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:finalize",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
$e("rcb"),new A(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Tn="recaptcha";async function Sn(e,t,n){var r;const i=await n.verify();try{let s;if(w("string"===typeof i,e,"argument-error"),w(n.type===Tn,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){w("enroll"===t.type,e,"internal-error");const n=await Lt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{w("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;w(n,e,"missing-multi-factor-info");const o=await wn(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await ut(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class In{constructor(e){this.providerId=In.PROVIDER_ID,this.auth=Pe(e)}verifyPhoneNumber(e,t){return Sn(this.auth,e,(0,i.Ku)(t))}static credential(e,t){return pt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return In.credentialFromTaggedObject(t)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?pt._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Cn(e,t){return t?he(t):(w(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In.PROVIDER_ID="phone",In.PHONE_SIGN_IN_METHOD="phone";class kn extends et{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ot(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ot(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ot(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function An(e){return xt(e.auth,new kn(e),e.bypassAuthState)}function Rn(e){const{auth:t,user:n}=e;return w(n,t,"internal-error"),Ot(n,new kn(e),e.bypassAuthState)}async function On(e){const{auth:t,user:n}=e;return w(n,t,"internal-error"),Rt(n,new kn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return An;case"linkViaPopup":case"linkViaRedirect":return On;case"reauthViaPopup":case"reauthViaRedirect":return Rn;default:p(this.auth,"internal-error")}}resolve(e){E(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){E(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new A(2e3,1e4);async function Dn(e,t,n){if((0,r.xZ)(e.app))return Promise.reject(g(e,"operation-not-supported-in-this-environment"));const i=Pe(e);y(e,t,bt);const s=Cn(i,n),o=new Pn(i,"signInViaPopup",t,s);return o.executeNotNull()}class Pn extends xn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Pn.currentPopupAction&&Pn.currentPopupAction.cancel(),Pn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return w(e,this.auth,"internal-error"),e}async onExecution(){E(1===this.filter.length,"Popup operations only handle one event");const e=Xt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(g(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(g(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(g(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Nn.get())};e()}}Pn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Mn="pendingRedirect",Ln=new Map;class Fn extends xn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Ln.get(this.auth._key());if(!e){try{const t=await Vn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Ln.set(this.auth._key(),e)}return this.bypassAuthState||Ln.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Vn(e,t){const n=$n(t),r=jn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function Un(e,t){Ln.set(e._key(),t)}function jn(e){return he(e._redirectPersistence)}function $n(e){return pe(Mn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bn(e,t,n=!1){if((0,r.xZ)(e.app))return Promise.reject(v(e));const i=Pe(e),s=Cn(i,t),o=new Fn(i,s,n),a=await o.execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,t)),a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Wn=6e5;class zn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Hn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!qn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(g(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Wn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kn(e))}saveEventToCache(e){this.cachedEventUids.add(Kn(e)),this.lastProcessedEventTime=Date.now()}}function Kn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function qn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Hn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gn(e,t={}){return P(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Xn=/^https?/;async function Yn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Gn(e);for(const r of t)try{if(Jn(r))return}catch(n){}p(e,"unauthorized-domain")}function Jn(e){const t=T(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Xn.test(n))return!1;if(Qn.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=new A(3e4,6e4);function er(){const e=Jt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function tr(e){return new Promise(((t,n)=>{var r,i,s;function o(){er(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{er(),n(g(e,"network-request-failed"))},timeout:Zn.get()})}if(null===(i=null===(r=Jt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Jt().gapi)||void 0===s?void 0:s.load)){const t=$e("iframefcb");return Jt()[t]=()=>{gapi.load?o():n(g(e,"network-request-failed"))},Ve(`${je()}?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw nr=null,e}))}let nr=null;function rr(e){return nr=nr||tr(e),nr}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=new A(5e3,15e3),sr="__/auth/iframe",or="emulator/auth/iframe",ar={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ur(e){const t=e.config;w(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?R(t,or):`https://${e.config.authDomain}/${sr}`,s={apiKey:t.apiKey,appName:e.name,v:r.MF},o=cr.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,i.Am)(s).slice(1)}`}async function lr(e){const t=await rr(e),n=Jt().gapi;return w(n,e,"internal-error"),t.open({where:document.body,url:ur(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ar,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=g(e,"network-request-failed"),s=Jt().setTimeout((()=>{r(i)}),ir.get());function o(){Jt().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dr=500,fr=600,pr="_blank",gr="http://localhost";class mr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function vr(e,t,n,r=dr,s=fr){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},hr),{width:r.toString(),height:s.toString(),top:o,left:a}),l=(0,i.ZQ)().toLowerCase();n&&(c=be(l)?pr:n),ve(l)&&(t=t||gr,u.scrollbars="yes");const h=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(Ie(l)&&"_self"!==c)return yr(t||"",c),new mr(null);const d=window.open(t||"",c,h);w(d,e,"popup-blocked");try{d.focus()}catch(f){}return new mr(d)}function yr(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br="__/auth/handler",wr="emulator/auth/handler",_r=encodeURIComponent("fac");async function Er(e,t,n,s,o,a){w(e.config.authDomain,e,"auth-domain-config-required"),w(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:r.MF,eventId:o};if(t instanceof bt){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,i.Im)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof wt){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];const l=await e._getAppCheckToken(),h=l?`#${_r}=${encodeURIComponent(l)}`:"";return`${Tr(e)}?${(0,i.Am)(u).slice(1)}${h}`}function Tr({config:e}){return e.emulator?R(e,wr):`https://${e.authDomain}/${br}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr="webStorageSupport";class Ir{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ht,this._completeRedirectFn=Bn,this._overrideRedirectResult=Un}async _openPopup(e,t,n,r){var i;E(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=await Er(e,t,n,T(),r);return vr(e,s,Xt())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await Er(e,t,n,T(),r);return Zt(i),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(E(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await lr(e),n=new zn(e);return t.register("authEvent",(t=>{w(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Sr,{type:Sr},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Sr];void 0!==i&&t(!!i),p(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Yn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ke()||ye()||Se()}}const Cr=Ir;class kr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return _("unexpected MultiFactorSessionType")}}}class Ar extends kr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Ar(e)}_finalizeEnroll(e,t,n){return Ft(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return _n(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Rr{constructor(){}static assertion(e){return Ar._fromCredential(e)}}Rr.FACTOR_ID="phone";class Or{static assertionForEnrollment(e,t){return xr._fromSecret(e,t)}static assertionForSignIn(e,t){return xr._fromEnrollmentId(e,t)}static async generateSecret(e){var t;const n=e;w("undefined"!==typeof(null===(t=n.user)||void 0===t?void 0:t.auth),"internal-error");const r=await Vt(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return Nr._fromStartTotpMfaEnrollmentResponse(r,n.user.auth)}}Or.FACTOR_ID="totp";class xr extends kr{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new xr(t,void 0,e)}static _fromEnrollmentId(e,t){return new xr(t,e)}async _finalizeEnroll(e,t,n){return w("undefined"!==typeof this.secret,e,"argument-error"),Ut(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){w(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return En(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Nr{constructor(e,t,n,r,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new Nr(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return(Dr(e)||Dr(t))&&(r=!0),r&&(Dr(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Dr(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Dr(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var Pr="@firebase/auth",Mr="1.7.7";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Vr(e){(0,r.om)(new a.uA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;w(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ae(e)},u=new De(r,i,s,c);return Ge(u,n),u}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,r.om)(new a.uA("auth-internal",(e=>{const t=Pe(e.getProvider("auth").getImmediate());return(e=>new Lr(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.KO)(Pr,Mr,Fr(e)),(0,r.KO)(Pr,Mr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=300,jr=(0,i.XA)("authIdTokenMaxAge")||Ur;let $r=null;const Br=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>jr)return;const i=null===n||void 0===n?void 0:n.token;$r!==i&&($r=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Wr(e=(0,r.Sx)()){const t=(0,r.j6)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=He(e,{popupRedirectResolver:Cr,persistence:[bn,Kt,Ht]}),s=(0,i.XA)("authTokenSyncURL");if(s&&"boolean"===typeof isSecureContext&&isSecureContext){const e=new URL(s,location.origin);if(location.origin===e.origin){const t=Br(e.toString());Dt(n,t,(()=>t(n.currentUser))),Nt(n,(e=>t(e)))}}const o=(0,i.Tj)("auth");return o&&Qe(n,`http://${o}`),n}function zr(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}Fe({loadJS(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=g("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",zr().appendChild(r)}))},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Vr("Browser")},7617:function(e,t,n){n.d(t,{Dc:function(){return Q},gS:function(){return nc},hq:function(){return sc},rJ:function(){return Qo},kd:function(){return tc},H9:function(){return Xo},x7:function(){return Xa},GG:function(){return Ja},aU:function(){return Zo},P:function(){return La},BN:function(){return Za},mZ:function(){return ec},_M:function(){return Va}});n(4114),n(6573),n(8100),n(7936),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(7467),n(4732),n(9577),n(4979);var r,i,s=n(3405),o=n(852),a=n(1363),c=n(4046),u="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},l={};(function(){var e;
/** @license
         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
         */function t(e,t){function n(){}n.prototype=t.prototype,e.D=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.C=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function o(e,t,n){n||(n=0);var r=Array(16);if("string"===typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function a(e,t){var n=u;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}function c(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}t(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},s.prototype.u=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.B,i=this.h,s=0;s<t;){if(0==i)for(;s<=n;)o(this,e,s),s+=this.blockSize;if("string"===typeof e){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){o(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){o(this,r),i=0;break}}this.h=i,this.o+=t},s.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.u(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var u={};function h(e){return-128<=e&&128>e?a(e,(function(e){return new c([0|e],0>e?-1:0)})):new c([0|e],0>e?-1:0)}function d(e){if(isNaN(e)||!isFinite(e))return p;if(0>e)return b(d(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=4294967296;return new c(t,0)}function f(e,t){if(0==e.length)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if("-"==e.charAt(0))return b(f(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=d(Math.pow(t,8)),r=p,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=d(Math.pow(t,s)),r=r.j(s).add(d(o))):(r=r.j(n),r=r.add(d(o)))}return r}var p=h(0),g=h(1),m=h(16777216);function v(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function y(e){return-1==e.h}function b(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new c(n,~e.h).add(g)}function w(e,t){return e.add(b(t))}function _(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function E(e,t){this.g=e,this.h=t}function T(e,t){if(v(t))throw Error("division by zero");if(v(e))return new E(p,p);if(y(e))return t=T(b(e),t),new E(b(t.g),b(t.h));if(y(t))return t=T(e,b(t)),new E(b(t.g),t.h);if(30<e.g.length){if(y(e)||y(t))throw Error("slowDivide_ only works with positive integers.");for(var n=g,r=t;0>=r.l(e);)n=S(n),r=S(r);var i=I(n,1),s=I(r,1);for(r=I(r,2),n=I(n,2);!v(r);){var o=s.add(r);0>=o.l(e)&&(i=i.add(n),s=o),r=I(r,1),n=I(n,1)}return t=w(e,i.j(t)),new E(i,t)}for(i=p;0<=e.l(t);){for(n=Math.max(1,Math.floor(e.m()/t.m())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=d(n),o=s.j(t);y(o)||0<o.l(e);)n-=r,s=d(n),o=s.j(t);v(s)&&(s=g),i=i.add(s),e=w(e,o)}return new E(i,e)}function S(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.i(r)<<1|e.i(r-1)>>>31;return new c(n,e.h)}function I(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.i(s+n)>>>t|e.i(s+n+1)<<32-t:e.i(s+n);return new c(i,e.h)}e=c.prototype,e.m=function(){if(y(this))return-b(this).m();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.i(n);e+=(0<=r?r:4294967296+r)*t,t*=4294967296}return e},e.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(v(this))return"0";if(y(this))return"-"+b(this).toString(e);for(var t=d(Math.pow(e,6)),n=this,r="";;){var i=T(n,t).g;n=w(n,i.j(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,v(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},e.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return e=w(this,e),y(e)?-1:v(e)?0:1},e.abs=function(){return y(this)?b(this):this},e.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(65535&this.i(i))+(65535&e.i(i)),o=(s>>>16)+(this.i(i)>>>16)+(e.i(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new c(n,-2147483648&n[n.length-1]?-1:0)},e.j=function(e){if(v(this)||v(e))return p;if(y(this))return y(e)?b(this).j(b(e)):b(b(this).j(e));if(y(e))return b(this.j(b(e)));if(0>this.l(m)&&0>e.l(m))return d(this.m()*e.m());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.i(r)>>>16,o=65535&this.i(r),a=e.i(i)>>>16,u=65535&e.i(i);n[2*r+2*i]+=o*u,_(n,2*r+2*i),n[2*r+2*i+1]+=s*u,_(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,_(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,_(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new c(n,0)},e.A=function(e){return T(this,e).h},e.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.i(r)&e.i(r);return new c(n,this.h&e.h)},e.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.i(r)|e.i(r);return new c(n,this.h|e.h)},e.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.i(r)^e.i(r);return new c(n,this.h^e.h)},s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,i=l.Md5=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=d,c.fromString=f,r=l.Integer=c}).apply("undefined"!==typeof u?u:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});var h,d,f,p,g,m,v,y,b,w="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},_={};(function(){var e,t="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){return e==Array.prototype||e==Object.prototype||(e[t]=n.value),e};function n(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof w&&w];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}var r=n(this);function i(e,n){if(n)e:{var i=r;e=e.split(".");for(var s=0;s<e.length-1;s++){var o=e[s];if(!(o in i))break e;i=i[o]}e=e[e.length-1],s=i[e],n=n(s),n!=s&&null!=n&&t(i,e,{configurable:!0,writable:!0,value:n})}}function s(e,t){e instanceof String&&(e+="");var n=0,r=!1,i={next:function(){if(!r&&n<e.length){var i=n++;return{value:t(i,e[i]),done:!1}}return r=!0,{done:!0,value:void 0}}};return i[Symbol.iterator]=function(){return i},i}i("Array.prototype.values",(function(e){return e||function(){return s(this,(function(e,t){return t}))}}));
/** @license
      Copyright The Closure Library Authors.
      SPDX-License-Identifier: Apache-2.0
      */
var o=o||{},a=this||self;function c(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function u(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function l(e,t,n){return e.call.apply(e.bind,arguments)}function E(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function T(e,t,n){return T=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?l:E,T.apply(null,arguments)}function I(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function C(e,t){function n(){}n.prototype=t.prototype,e.aa=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Qb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function k(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function A(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(c(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}class R{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function O(e){return/^[\s\xa0]*$/.test(e)}function x(){var e=a.navigator;return e&&(e=e.userAgent)?e:""}function N(e){return N[" "](e),e}N[" "]=function(){};var D=-1!=x().indexOf("Gecko")&&!(-1!=x().toLowerCase().indexOf("webkit")&&-1==x().indexOf("Edge"))&&!(-1!=x().indexOf("Trident")||-1!=x().indexOf("MSIE"))&&-1==x().indexOf("Edge");function P(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function M(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function L(e){const t={};for(const n in e)t[n]=e[n];return t}const F="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function V(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<F.length;t++)n=F[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function U(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function j(e){a.setTimeout((()=>{throw e}),0)}function $(){var e=H;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class B{constructor(){this.h=this.g=null}add(e,t){const n=W.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var W=new R((()=>new z),(e=>e.reset()));class z{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let K,q=!1,H=new B,G=()=>{const e=a.Promise.resolve(void 0);K=()=>{e.then(Q)}};var Q=()=>{for(var e;e=$();){try{e.h.call(e.g)}catch(n){j(n)}var t=W;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}q=!1};function X(){this.s=this.s,this.C=this.C}function Y(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}X.prototype.s=!1,X.prototype.ma=function(){this.s||(this.s=!0,this.N())},X.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},Y.prototype.h=function(){this.defaultPrevented=!0};var J=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};a.addEventListener("test",e,t),a.removeEventListener("test",e,t)}catch(n){}return e}();function Z(e,t){if(Y.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(D){e:{try{N(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:ee[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Z.aa.h.call(this)}}C(Z,Y);var ee={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var te="closure_listenable_"+(1e6*Math.random()|0),ne=0;function re(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++ne,this.da=this.fa=!1}function ie(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function se(e){this.src=e,this.g={},this.h=0}function oe(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=Array.prototype.indexOf.call(i,t,void 0);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ie(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ae(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.da&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}se.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=ae(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new re(t,this.src,s,!!r,i),t.fa=n,e.push(t)),t};var ce="closure_lm_"+(1e6*Math.random()|0),ue={};function le(e,t,n,r,i){if(r&&r.once)return fe(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)le(e,t[s],n,r,i);return null}return n=we(n),e&&e[te]?e.K(t,n,u(r)?!!r.capture:!!r,i):he(e,t,n,!1,r,i)}function he(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=u(i)?!!i.capture:!!i,a=ye(e);if(a||(e[ce]=a=new se(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=de(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)J||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(me(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function de(){function e(n){return t.call(e.src,e.listener,n)}const t=ve;return e}function fe(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)fe(e,t[s],n,r,i);return null}return n=we(n),e&&e[te]?e.L(t,n,u(r)?!!r.capture:!!r,i):he(e,t,n,!0,r,i)}function pe(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)pe(e,t[s],n,r,i);else r=u(r)?!!r.capture:!!r,n=we(n),e&&e[te]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=ae(s,n,r,i),-1<n&&(ie(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=ye(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ae(t,n,r,i)),(n=-1<e?t[e]:null)&&ge(n))}function ge(e){if("number"!==typeof e&&e&&!e.da){var t=e.src;if(t&&t[te])oe(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(me(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ye(t))?(oe(n,e),0==n.h&&(n.src=null,t[ce]=null)):ie(e)}}}function me(e){return e in ue?ue[e]:ue[e]="on"+e}function ve(e,t){if(e.da)e=!0;else{t=new Z(t,this);var n=e.listener,r=e.ha||e.src;e.fa&&ge(e),e=n.call(r,t)}return e}function ye(e){return e=e[ce],e instanceof se?e:null}var be="__closure_events_fn_"+(1e9*Math.random()>>>0);function we(e){return"function"===typeof e?e:(e[be]||(e[be]=function(t){return e.handleEvent(t)}),e[be])}function _e(){X.call(this),this.i=new se(this),this.M=this,this.F=null}function Ee(e,t){var n,r=e.F;if(r)for(n=[];r;r=r.F)n.push(r);if(e=e.M,r=t.type||t,"string"===typeof t)t=new Y(t,e);else if(t instanceof Y)t.target=t.target||e;else{var i=t;t=new Y(r,e),V(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Te(o,r,!0,t)&&i}if(o=t.g=e,i=Te(o,r,!0,t)&&i,i=Te(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Te(o,r,!1,t)&&i}function Te(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.da&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.fa&&oe(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}function Se(e,t,n){if("function"===typeof e)n&&(e=T(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=T(e.handleEvent,e)}return 2147483647<Number(t)?-1:a.setTimeout(e,t||0)}function Ie(e){e.g=Se((()=>{e.g=null,e.i&&(e.i=!1,Ie(e))}),e.l);const t=e.h;e.h=null,e.m.apply(null,t)}C(_e,X),_e.prototype[te]=!0,_e.prototype.removeEventListener=function(e,t,n,r){pe(this,e,t,n,r)},_e.prototype.N=function(){if(_e.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ie(n[r]);delete t.g[e],t.h--}}this.F=null},_e.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},_e.prototype.L=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class Ce extends X{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:Ie(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ke(e){X.call(this),this.h=e,this.g={}}C(ke,X);var Ae=[];function Re(e){P(e.g,(function(e,t){this.g.hasOwnProperty(t)&&ge(e)}),e),e.g={}}ke.prototype.N=function(){ke.aa.N.call(this),Re(this)},ke.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Oe=a.JSON.stringify,xe=a.JSON.parse,Ne=class{stringify(e){return a.JSON.stringify(e,void 0)}parse(e){return a.JSON.parse(e,void 0)}};function De(){}function Pe(e){return e.h||(e.h=e.i())}function Me(){}De.prototype.h=null;var Le={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Fe(){Y.call(this,"d")}function Ve(){Y.call(this,"c")}C(Fe,Y),C(Ve,Y);var Ue={},je=null;function $e(){return je=je||new _e}function Be(e){Y.call(this,Ue.La,e)}function We(e){const t=$e();Ee(t,new Be(t))}function ze(e,t){Y.call(this,Ue.STAT_EVENT,e),this.stat=t}function Ke(e){const t=$e();Ee(t,new ze(t,e))}function qe(e,t){Y.call(this,Ue.Ma,e),this.size=t}function He(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){e()}),t)}function Ge(){this.g=!0}function Qe(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function Xe(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function Ye(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+Ze(e,n)+(r?" "+r:"")}))}function Je(e,t){e.info((function(){return"TIMEOUT: "+t}))}function Ze(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Oe(n)}catch(a){return t}}Ue.La="serverreachability",C(Be,Y),Ue.STAT_EVENT="statevent",C(ze,Y),Ue.Ma="timingevent",C(qe,Y),Ge.prototype.xa=function(){this.g=!1},Ge.prototype.info=function(){};var et,tt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},nt={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function rt(){}function it(e,t,n,r){this.j=e,this.i=t,this.l=n,this.R=r||1,this.U=new ke(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new st}function st(){this.i=null,this.g="",this.h=!1}C(rt,De),rt.prototype.g=function(){return new XMLHttpRequest},rt.prototype.i=function(){return{}},et=new rt;var ot={},at={};function ct(e,t,n){e.L=1,e.v=Ft(Nt(t)),e.m=n,e.P=!0,ut(e,null)}function ut(e,t){e.F=Date.now(),dt(e),e.A=Nt(e.v);var n=e.A,r=e.R;Array.isArray(r)||(r=[String(r)]),Xt(n.i,"t",r),e.C=0,n=e.j.J,e.h=new st,e.g=Wn(e.j,n?t:null,!e.m),0<e.O&&(e.M=new Ce(T(e.Y,e,e.g),e.O)),t=e.U,n=e.g,r=e.ca;var i="readystatechange";Array.isArray(i)||(i&&(Ae[0]=i.toString()),i=Ae);for(var s=0;s<i.length;s++){var o=le(n,i[s],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}t=e.H?L(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),We(),Qe(e.i,e.u,e.A,e.l,e.R,e.m)}function lt(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.j.Ca)}function ht(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?at:(n=Number(t.substring(n,r)),isNaN(n)?ot:(r+=1,r+n>t.length?at:(t=t.slice(r,r+n),e.C=r+n,t)))}function dt(e){e.S=Date.now()+e.I,ft(e,e.I)}function ft(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=He(T(e.ba,e),t)}function pt(e){e.B&&(a.clearTimeout(e.B),e.B=null)}function gt(e){0==e.j.G||e.J||Vn(e.j,e)}function mt(e){pt(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,Re(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function vt(e,t){try{var n=e.j;if(0!=n.G&&(n.g==e||Et(n.h,e)))if(!e.K&&Et(n.h,e)&&3==n.G){try{var r=n.Da.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Fn(n),Cn(n)}Pn(n),Ke(18)}}else n.za=i[1],0<n.za-n.T&&37500>i[2]&&n.F&&0==n.v&&!n.C&&(n.C=He(T(n.Za,n),6e3));if(1>=_t(n.h)&&n.ca){try{n.ca()}catch(u){}n.ca=void 0}}else jn(n,11)}else if((e.K||n.g==e)&&Fn(n),!O(t))for(i=n.Da.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.K=u[1],n.ia=u[2];const t=u[3];null!=t&&(n.la=t,n.j.info("VER="+n.la));const i=u[4];null!=i&&(n.Aa=i,n.j.info("SVER="+n.Aa));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Tt(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.ya=e,Lt(r.I,r.D,e))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-e.F,n.j.info("Handshake RTT: "+n.R+"ms")),r=n;var o=e;if(r.qa=Bn(r,r.J?r.ia:null,r.W),o.K){St(r.h,o);var a=o,c=r.L;c&&(a.I=c),a.B&&(pt(a),dt(a)),r.g=o}else Dn(r);0<n.i.length&&An(n)}else"stop"!=u[0]&&"close"!=u[0]||jn(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?jn(n,7):In(n):"noop"!=u[0]&&n.l&&n.l.ta(u),n.v=0)}We(4)}catch(u){}}it.prototype.ca=function(e){e=e.target;const t=this.M;t&&3==wn(e)?t.j():this.Y(e)},it.prototype.Y=function(e){try{if(e==this.g)e:{const d=wn(this.g);var t=this.g.Ba();const f=this.g.Z();if(!(3>d)&&(3!=d||this.g&&(this.h.h||this.g.oa()||_n(this.g)))){this.J||4!=d||7==t||We(8==t||0>=f?3:2),pt(this);var n=this.g.Z();this.X=n;t:if(lt(this)){var r=_n(this.g);e="";var i=r.length,s=4==wn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){mt(this),gt(this);var o="";break t}this.h.i=new a.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:!(s&&t==i-1)});r.length=0,this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.oa();if(this.o=200==n,Xe(this.i,this.u,this.A,this.l,this.R,d,n),this.o){if(this.T&&!this.K){t:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(c)){var l=c;break t}}l=null}if(!(n=l)){this.o=!1,this.s=3,Ke(12),mt(this),gt(this);break e}Ye(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,vt(this,n)}if(this.P){let e;for(n=!0;!this.J&&this.C<o.length;){if(e=ht(this,o),e==at){4==d&&(this.s=4,Ke(14),n=!1),Ye(this.i,this.l,null,"[Incomplete Response]");break}if(e==ot){this.s=4,Ke(15),Ye(this.i,this.l,o,"[Invalid Chunk]"),n=!1;break}Ye(this.i,this.l,e,null),vt(this,e)}if(lt(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=d||0!=o.length||this.h.h||(this.s=1,Ke(16),n=!1),this.o=this.o&&n,n){if(0<o.length&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.ba&&!h.M&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+o.length),Mn(h),h.M=!0,Ke(11))}}else Ye(this.i,this.l,o,"[Invalid Chunked Response]"),mt(this),gt(this)}else Ye(this.i,this.l,o,null),vt(this,o);4==d&&mt(this),this.o&&!this.J&&(4==d?Vn(this.j,this):(this.o=!1,dt(this)))}else En(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,Ke(12)):(this.s=0,Ke(13)),mt(this),gt(this)}}}catch(d){}},it.prototype.cancel=function(){this.J=!0,mt(this)},it.prototype.ba=function(){this.B=null;const e=Date.now();0<=e-this.S?(Je(this.i,this.A),2!=this.L&&(We(),Ke(17)),mt(this),this.s=2,gt(this)):ft(this,this.S-e)};var yt=class{constructor(e,t){this.g=e,this.map=t}};function bt(e){this.l=e||10,a.PerformanceNavigationTiming?(e=a.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function wt(e){return!!e.h||!!e.g&&e.g.size>=e.j}function _t(e){return e.h?1:e.g?e.g.size:0}function Et(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Tt(e,t){e.g?e.g.add(t):e.h=t}function St(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function It(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return k(e.i)}function Ct(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(c(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function kt(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(c(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function At(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(c(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=kt(e),r=Ct(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}bt.prototype.cancel=function(){if(this.i=It(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var Rt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ot(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function xt(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof xt){this.h=e.h,Dt(this,e.j),this.o=e.o,this.g=e.g,Pt(this,e.s),this.l=e.l;var t=e.i,n=new qt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Mt(this,n),this.m=e.m}else e&&(t=String(e).match(Rt))?(this.h=!1,Dt(this,t[1]||"",!0),this.o=Vt(t[2]||""),this.g=Vt(t[3]||"",!0),Pt(this,t[4]),this.l=Vt(t[5]||"",!0),Mt(this,t[6]||"",!0),this.m=Vt(t[7]||"")):(this.h=!1,this.i=new qt(null,this.h))}function Nt(e){return new xt(e)}function Dt(e,t,n){e.j=n?Vt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Pt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function Mt(e,t,n){t instanceof qt?(e.i=t,Jt(e.i,e.h)):(n||(t=Ut(t,zt)),e.i=new qt(t,e.h))}function Lt(e,t,n){e.i.set(t,n)}function Ft(e){return Lt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Vt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ut(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,jt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function jt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}xt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ut(t,$t,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(Ut(t,$t,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.s,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Ut(n,"/"==n.charAt(0)?Wt:Bt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",Ut(n,Kt)),e.join("")};var $t=/[#\/\?@]/g,Bt=/[#\?:]/g,Wt=/[#\?]/g,zt=/[#\?@]/g,Kt=/#/g;function qt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Ht(e){e.g||(e.g=new Map,e.h=0,e.i&&Ot(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Gt(e,t){Ht(e),t=Yt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Qt(e,t){return Ht(e),t=Yt(e,t),e.g.has(t)}function Xt(e,t,n){Gt(e,t),0<n.length&&(e.i=null,e.g.set(Yt(e,t),k(n)),e.h+=n.length)}function Yt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Jt(e,t){t&&!e.j&&(Ht(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Gt(this,t),Xt(this,n,e))}),e)),e.j=t}function Zt(e,t){const n=new Ge;if(a.Image){const r=new Image;r.onload=I(tn,n,"TestLoadImage: loaded",!0,t,r),r.onerror=I(tn,n,"TestLoadImage: error",!1,t,r),r.onabort=I(tn,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=I(tn,n,"TestLoadImage: timeout",!1,t,r),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function en(e,t){const n=new Ge,r=new AbortController,i=setTimeout((()=>{r.abort(),tn(n,"TestPingServer: timeout",!1,t)}),1e4);fetch(e,{signal:r.signal}).then((e=>{clearTimeout(i),e.ok?tn(n,"TestPingServer: ok",!0,t):tn(n,"TestPingServer: server error",!1,t)})).catch((()=>{clearTimeout(i),tn(n,"TestPingServer: error",!1,t)}))}function tn(e,t,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(s){}}function nn(){this.g=new Ne}function rn(e,t,n){const r=n||"";try{At(e,(function(e,n){let i=e;u(e)&&(i=Oe(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function sn(e){this.l=e.Ub||null,this.j=e.eb||!1}function on(e,t){_e.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function an(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function cn(e){e.readyState=4,e.l=null,e.j=null,e.v=null,un(e)}function un(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function ln(e){let t="";return P(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function hn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=ln(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Lt(e,t,n))}function dn(e){_e.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}e=qt.prototype,e.add=function(e,t){Ht(this),this.i=null,e=Yt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},e.forEach=function(e,t){Ht(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},e.na=function(){Ht(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},e.V=function(e){Ht(this);let t=[];if("string"===typeof e)Qt(this,e)&&(t=t.concat(this.g.get(Yt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},e.set=function(e,t){return Ht(this),this.i=null,e=Yt(this,e),Qt(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e?(e=this.V(e),0<e.length?String(e[0]):t):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.V(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")},C(sn,De),sn.prototype.g=function(){return new on(this.l,this.j)},sn.prototype.i=function(e){return function(){return e}}({}),C(on,_e),e=on.prototype,e.open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,un(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||a).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,cn(this)),this.readyState=0},e.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,un(this)),this.g&&(this.readyState=3,un(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;an(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))},e.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?cn(this):un(this),3==this.readyState&&an(this)}},e.Ra=function(e){this.g&&(this.response=this.responseText=e,cn(this))},e.Qa=function(e){this.g&&(this.response=e,cn(this))},e.ga=function(){this.g&&cn(this)},e.setRequestHeader=function(e,t){this.u.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(on.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),C(dn,_e);var fn=/^https?$/i,pn=["POST","PUT"];function gn(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,mn(e),yn(e)}function mn(e){e.A||(e.A=!0,Ee(e,"complete"),Ee(e,"error"))}function vn(e){if(e.h&&"undefined"!=typeof o&&(!e.v[1]||4!=wn(e)||2!=e.Z()))if(e.u&&4==wn(e))Se(e.Ea,0,e);else if(Ee(e,"readystatechange"),4==wn(e)){e.h=!1;try{const o=e.Z();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===o){var i=String(e.D).match(Rt)[1]||null;!i&&a.self&&a.self.location&&(i=a.self.location.protocol.slice(0,-1)),r=!fn.test(i?i.toLowerCase():"")}n=r}if(n)Ee(e,"complete"),Ee(e,"success");else{e.m=6;try{var s=2<wn(e)?e.g.statusText:""}catch(c){s=""}e.l=s+" ["+e.Z()+"]",mn(e)}}finally{yn(e)}}}function yn(e,t){if(e.g){bn(e);const r=e.g,i=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||Ee(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function bn(e){e.I&&(a.clearTimeout(e.I),e.I=null)}function wn(e){return e.g?e.g.readyState:0}function _n(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(S){return null}}function En(e){const t={};e=(e.g&&2<=wn(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(O(e[r]))continue;var n=U(e[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}M(t,(function(e){return e.join(", ")}))}function Tn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Sn(e){this.Aa=0,this.i=[],this.j=new Ge,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Tn("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Tn("baseRetryDelayMs",5e3,e),this.cb=Tn("retryDelaySeedMs",1e4,e),this.Wa=Tn("forwardChannelMaxRetries",2,e),this.wa=Tn("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new bt(e&&e.concurrentRequestLimit),this.Da=new nn,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function In(e){if(kn(e),3==e.G){var t=e.U++,n=Nt(e.I);if(Lt(n,"SID",e.K),Lt(n,"RID",t),Lt(n,"TYPE","terminate"),xn(e,n),t=new it(e,e.j,t),t.L=2,t.v=Ft(Nt(n)),n=!1,a.navigator&&a.navigator.sendBeacon)try{n=a.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&a.Image&&((new Image).src=t.v,n=!0),n||(t.g=Wn(t.j,null),t.g.ea(t.v)),t.F=Date.now(),dt(t)}$n(e)}function Cn(e){e.g&&(Mn(e),e.g.cancel(),e.g=null)}function kn(e){Cn(e),e.u&&(a.clearTimeout(e.u),e.u=null),Fn(e),e.h.cancel(),e.s&&("number"===typeof e.s&&a.clearTimeout(e.s),e.s=null)}function An(e){if(!wt(e.h)&&!e.s){e.s=!0;var t=e.Ga;K||G(),q||(K(),q=!0),H.add(t,e),e.B=0}}function Rn(e,t){return!(_t(e.h)>=e.h.j-(e.s?1:0))&&(e.s?(e.i=t.D.concat(e.i),!0):!(1==e.G||2==e.G||e.B>=(e.Va?0:e.Wa))&&(e.s=He(T(e.Ga,e,t),Un(e,e.B)),e.B++,!0))}function On(e,t){var n;n=t?t.l:e.U++;const r=Nt(e.I);Lt(r,"SID",e.K),Lt(r,"RID",n),Lt(r,"AID",e.T),xn(e,r),e.m&&e.o&&hn(r,e.m,e.o),n=new it(e,e.j,n,e.B+1),null===e.m&&(n.H=e.o),t&&(e.i=t.D.concat(e.i)),t=Nn(e,n,1e3),n.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),Tt(e.h,n),ct(n,r,t)}function xn(e,t){e.H&&P(e.H,(function(e,n){Lt(t,n,e)})),e.l&&At({},(function(e,n){Lt(t,n,e)}))}function Nn(e,t,n){n=Math.min(e.i.length,n);var r=e.l?T(e.l.Na,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=i[a].g;const c=i[a].map;if(n-=t,0>n)t=Math.max(0,i[a].g-100),o=!1;else try{rn(c,e,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function Dn(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;K||G(),q||(K(),q=!0),H.add(t,e),e.v=0}}function Pn(e){return!(e.g||e.u||3<=e.v)&&(e.Y++,e.u=He(T(e.Fa,e),Un(e,e.v)),e.v++,!0)}function Mn(e){null!=e.A&&(a.clearTimeout(e.A),e.A=null)}function Ln(e){e.g=new it(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=Nt(e.qa);Lt(t,"RID","rpc"),Lt(t,"SID",e.K),Lt(t,"AID",e.T),Lt(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&Lt(t,"TO",e.ja),Lt(t,"TYPE","xmlhttp"),xn(e,t),e.m&&e.o&&hn(t,e.m,e.o),e.L&&(e.g.I=e.L);var n=e.g;e=e.ia,n.L=1,n.v=Ft(Nt(t)),n.m=null,n.P=!0,ut(n,e)}function Fn(e){null!=e.C&&(a.clearTimeout(e.C),e.C=null)}function Vn(e,t){var n=null;if(e.g==t){Fn(e),Mn(e),e.g=null;var r=2}else{if(!Et(e.h,t))return;n=t.D,St(e.h,t),r=1}if(0!=e.G)if(t.o)if(1==r){n=t.m?t.m.length:0,t=Date.now()-t.F;var i=e.B;r=$e(),Ee(r,new qe(r,n)),An(e)}else Dn(e);else if(i=t.s,3==i||0==i&&0<t.X||!(1==r&&Rn(e,t)||2==r&&Pn(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:jn(e,5);break;case 4:jn(e,10);break;case 3:jn(e,6);break;default:jn(e,2)}}function Un(e,t){let n=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(n*=2),n*t}function jn(e,t){if(e.j.info("Error code "+t),2==t){var n=T(e.fb,e),r=e.Xa;const t=!r;r=new xt(r||"//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Dt(r,"https"),Ft(r),t?Zt(r.toString(),n):en(r.toString(),n)}else Ke(2);e.G=0,e.l&&e.l.sa(t),$n(e),kn(e)}function $n(e){if(e.G=0,e.ka=[],e.l){const t=It(e.h);0==t.length&&0==e.i.length||(A(e.ka,t),A(e.ka,e.i),e.h.i.length=0,k(e.i),e.i.length=0),e.l.ra()}}function Bn(e,t,n){var r=n instanceof xt?Nt(n):new xt(n);if(""!=r.g)t&&(r.g=t+"."+r.g),Pt(r,r.s);else{var i=a.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new xt(null);r&&Dt(s,r),t&&(s.g=t),i&&Pt(s,i),n&&(s.l=n),r=s}return n=e.D,t=e.ya,n&&t&&Lt(r,n,t),Lt(r,"VER",e.la),xn(e,r),r}function Wn(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ca&&!e.pa?new dn(new sn({eb:n})):new dn(e.pa),t.Ha(e.J),t}function zn(){}function Kn(){}function qn(e,t){_e.call(this),this.g=new Sn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!O(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!O(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Qn(this)}function Hn(e){Fe.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Gn(){Ve.call(this),this.status=1}function Qn(e){this.g=e}e=dn.prototype,e.Ha=function(e){this.J=e},e.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():et.g(),this.v=this.o?Pe(this.o):Pe(et),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(s){return void gn(this,s)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=a.FormData&&e instanceof a.FormData,!(0<=Array.prototype.indexOf.call(pn,t,void 0))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{bn(this),this.u=!0,this.g.send(e),this.u=!1}catch(s){gn(this,s)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,Ee(this,"complete"),Ee(this,"abort"),yn(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yn(this,!0)),dn.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?vn(this):this.bb())},e.bb=function(){vn(this)},e.isActive=function(){return!!this.g},e.Z=function(){try{return 2<wn(this)?this.g.status:-1}catch(e){return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},e.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),xe(t)}},e.Ba=function(){return this.m},e.Ka=function(){return"string"===typeof this.l?this.l:String(this.l)},e=Sn.prototype,e.la=8,e.G=1,e.connect=function(e,t,n,r){Ke(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=Bn(this,null,this.W),An(this)},e.Ga=function(e){if(this.s)if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new it(this,this.j,e);let s=this.o;if(this.S&&(s?(s=L(s),V(s,this.S)):s=this.S),null!==this.m||this.O||(i.H=s,s=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Nn(this,i,t),n=Nt(this.I),Lt(n,"RID",e),Lt(n,"CVER",22),this.D&&Lt(n,"X-HTTP-Session-Id",this.D),xn(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(ln(s)))+"&"+t:this.m&&hn(n,this.m,s)),Tt(this.h,i),this.Ua&&Lt(n,"TYPE","init"),this.P?(Lt(n,"$req",t),Lt(n,"SID","null"),i.T=!0,ct(i,n,null)):ct(i,n,t),this.G=2}}else 3==this.G&&(e?On(this,e):0==this.i.length||wt(this.h)||On(this))},e.Fa=function(){if(this.u=null,Ln(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=He(T(this.ab,this),e)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ke(10),Cn(this),Ln(this))},e.Za=function(){null!=this.C&&(this.C=null,Cn(this),Pn(this),Ke(19))},e.fb=function(e){e?(this.j.info("Successfully pinged google.com"),Ke(2)):(this.j.info("Failed to ping google.com"),Ke(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},e=zn.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){},Kn.prototype.g=function(e,t){return new qn(e,t)},C(qn,_e),qn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qn.prototype.close=function(){In(this.g)},qn.prototype.o=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.u&&(n={},n.__data__=Oe(e),e=n);t.i.push(new yt(t.Ya++,e)),3==t.G&&An(t)},qn.prototype.N=function(){this.g.l=null,delete this.j,In(this.g),delete this.g,qn.aa.N.call(this)},C(Hn,Fe),C(Gn,Ve),C(Qn,zn),Qn.prototype.ua=function(){Ee(this.g,"a")},Qn.prototype.ta=function(e){Ee(this.g,new Hn(e))},Qn.prototype.sa=function(e){Ee(this.g,new Gn)},Qn.prototype.ra=function(){Ee(this.g,"b")},Kn.prototype.createWebChannel=Kn.prototype.g,qn.prototype.send=qn.prototype.o,qn.prototype.open=qn.prototype.m,qn.prototype.close=qn.prototype.close,b=_.createWebChannelTransport=function(){return new Kn},y=_.getStatEventTarget=function(){return $e()},v=_.Event=Ue,m=_.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},tt.NO_ERROR=0,tt.TIMEOUT=8,tt.HTTP_ERROR=6,g=_.ErrorCode=tt,nt.COMPLETE="complete",p=_.EventType=nt,Me.EventType=Le,Le.OPEN="a",Le.CLOSE="b",Le.ERROR="c",Le.MESSAGE="d",_e.prototype.listen=_e.prototype.K,f=_.WebChannel=Me,d=_.FetchXmlHttpFactory=sn,dn.prototype.listenOnce=dn.prototype.L,dn.prototype.getLastError=dn.prototype.Ka,dn.prototype.getLastErrorCode=dn.prototype.Ba,dn.prototype.getStatus=dn.prototype.Z,dn.prototype.getResponseJson=dn.prototype.Oa,dn.prototype.getResponseText=dn.prototype.oa,dn.prototype.send=dn.prototype.ea,dn.prototype.setWithCredentials=dn.prototype.Ha,h=_.XhrIo=dn}).apply("undefined"!==typeof w?w:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});const E="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}T.UNAUTHENTICATED=new T(null),T.GOOGLE_CREDENTIALS=new T("google-credentials-uid"),T.FIRST_PARTY=new T("first-party-uid"),T.MOCK_USER=new T("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let S="10.13.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=new a.Vy("@firebase/firestore");function C(){return I.logLevel}function k(e,...t){if(I.logLevel<=a.$b.DEBUG){const n=t.map(O);I.debug(`Firestore (${S}): ${e}`,...n)}}function A(e,...t){if(I.logLevel<=a.$b.ERROR){const n=t.map(O);I.error(`Firestore (${S}): ${e}`,...n)}}function R(e,...t){if(I.logLevel<=a.$b.WARN){const n=t.map(O);I.warn(`Firestore (${S}): ${e}`,...n)}}function O(e){if("string"==typeof e)return e;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return function(e){return JSON.stringify(e)}(e)}catch(t){return e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e="Unexpected state"){const t=`FIRESTORE (${S}) INTERNAL ASSERTION FAILED: `+e;throw A(t),new Error(t)}function N(e,t){e||x()}function D(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends c.g{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class V{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(T.UNAUTHENTICATED)))}shutdown(){}}class U{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class j{constructor(e){this.t=e,this.currentUser=T.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new L;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new L,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new L)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(N("string"==typeof t.accessToken),new F(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return N(null===e||"string"==typeof e),new T(e)}}class ${constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=T.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class B{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new $(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(T.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class W{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class z{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const n=e=>{null!=e.error&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.R;return this.R=e.token,k("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?r(e):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(N("string"==typeof e.token),this.R=e.token,new W(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function K(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=K(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function H(e,t){return e<t?-1:e>t?1:0}function G(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Q{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new M(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new M(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new M(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Q.fromMillis(Date.now())}static fromDate(e){return Q.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Q(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?H(this.nanoseconds,e.nanoseconds):H(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Q(0,0))}static max(){return new X(new Q(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,t,n){void 0===t?t=0:t>e.length&&x(),void 0===n?n=e.length-t:n>e.length-t&&x(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Y.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Y?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class J extends Y{construct(e,t,n){return new J(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new M(P.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new J(t)}static emptyPath(){return new J([])}}const Z=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ee extends Y{construct(e,t,n){return new ee(e,t,n)}static isValidIdentifier(e){return Z.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ee.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ee(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new M(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new M(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new M(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new M(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ee(t)}static emptyPath(){return new ee([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(J.fromString(e))}static fromName(e){return new te(J.fromString(e).popFirst(5))}static empty(){return new te(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===J.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return J.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new J(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}ne.UNKNOWN_ID=-1;function re(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=X.fromTimestamp(1e9===r?new Q(n+1,0):new Q(n,r));return new se(i,te.empty(),t)}function ie(e){return new se(e.readTime,e.key,-1)}class se{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new se(X.min(),te.empty(),-1)}static max(){return new se(X.max(),te.empty(),-1)}}function oe(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=te.comparator(e.documentKey,t.documentKey),0!==n?n:H(e.largestBatchId,t.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}const ae="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ce{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ue(e){if(e.code!==P.FAILED_PRECONDITION||e.message!==ae)throw e;k("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&x(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new le(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof le?t:le.resolve(t)}catch(e){return le.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):le.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):le.reject(t)}static resolve(e){return new le(((t,n)=>{t(e)}))}static reject(e){return new le(((t,n)=>{n(e)}))}static waitFor(e){return new le(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=le.resolve(!1);for(const n of e)t=t.next((e=>e?le.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new le(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new le(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function de(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fe{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ie(e),this.se=e=>t.writeSequenceNumber(e))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}function pe(e){return null==e}function ge(e){return 0===e&&1/e==-1/0}function me(e){return"number"==typeof e&&Number.isInteger(e)&&!ge(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fe.oe=-1;const ve=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ye=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],be=ye,we=[...be,"indexConfiguration","indexState","indexEntries"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _e(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Ee(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Te(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,t){this.comparator=e,this.root=t||Ce.EMPTY}insert(e,t){return new Se(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ce.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ce.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ie(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ie(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ie(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ie(this.root,e,this.comparator,!0)}}class Ie{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ce{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Ce.RED,this.left=null!=r?r:Ce.EMPTY,this.right=null!=i?i:Ce.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Ce(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ce.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Ce.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw x();if(this.right.isRed())throw x();const e=this.left.check();if(e!==this.right.check())throw x();return e+(this.isRed()?0:1)}}Ce.EMPTY=null,Ce.RED=!0,Ce.BLACK=!1,Ce.EMPTY=new class{constructor(){this.size=0}get key(){throw x()}get value(){throw x()}get color(){throw x()}get left(){throw x()}get right(){throw x()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Ce(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ke{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ae(this.data.getIterator())}getIteratorFrom(e){return new Ae(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof ke))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ke(this.comparator);return t.data=e,t}}class Ae{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Re{constructor(e){this.fields=e,e.sort(ee.comparator)}static empty(){return new Re([])}unionWith(e){let t=new ke(ee.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Re(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return G(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Oe("Invalid base64 string: "+e):e}}(e);return new xe(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new xe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xe.EMPTY_BYTE_STRING=new xe("");const Ne=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function De(e){if(N(!!e),"string"==typeof e){let t=0;const n=Ne.exec(e);if(N(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Pe(e.seconds),nanos:Pe(e.nanos)}}function Pe(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Me(e){return"string"==typeof e?xe.fromBase64String(e):xe.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Fe(e){const t=e.mapValue.fields.__previous_value__;return Le(t)?Fe(t):t}function Ve(e){const t=De(e.mapValue.fields.__local_write_time__.timestampValue);return new Q(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,t,n,r,i,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class je{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new je("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof je&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Be(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Le(e)?4:it(e)?9007199254740991:nt(e)?10:11:x()}function We(e,t){if(e===t)return!0;const n=Be(e);if(n!==Be(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ve(e).isEqual(Ve(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=De(e.timestampValue),r=De(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Me(e.bytesValue).isEqual(Me(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Pe(e.geoPointValue.latitude)===Pe(t.geoPointValue.latitude)&&Pe(e.geoPointValue.longitude)===Pe(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Pe(e.integerValue)===Pe(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Pe(e.doubleValue),r=Pe(t.doubleValue);return n===r?ge(n)===ge(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return G(e.arrayValue.values||[],t.arrayValue.values||[],We);case 10:case 11:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(_e(n)!==_e(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!We(n[i],r[i])))return!1;return!0}(e,t);default:return x()}}function ze(e,t){return void 0!==(e.values||[]).find((e=>We(e,t)))}function Ke(e,t){if(e===t)return 0;const n=Be(e),r=Be(t);if(n!==r)return H(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return H(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Pe(e.integerValue||e.doubleValue),r=Pe(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return qe(e.timestampValue,t.timestampValue);case 4:return qe(Ve(e),Ve(t));case 5:return H(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Me(e),r=Me(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=H(n[i],r[i]);if(0!==e)return e}return H(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=H(Pe(e.latitude),Pe(t.latitude));return 0!==n?n:H(Pe(e.longitude),Pe(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return He(e.arrayValue,t.arrayValue);case 10:return function(e,t){var n,r,i,s;const o=e.fields||{},a=t.fields||{},c=null===(n=o.value)||void 0===n?void 0:n.arrayValue,u=null===(r=a.value)||void 0===r?void 0:r.arrayValue,l=H((null===(i=null==c?void 0:c.values)||void 0===i?void 0:i.length)||0,(null===(s=null==u?void 0:u.values)||void 0===s?void 0:s.length)||0);return 0!==l?l:He(c,u)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===$e.mapValue&&t===$e.mapValue)return 0;if(e===$e.mapValue)return 1;if(t===$e.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=H(r[o],s[o]);if(0!==e)return e;const t=Ke(n[r[o]],i[s[o]]);if(0!==t)return t}return H(r.length,s.length)}(e.mapValue,t.mapValue);default:throw x()}}function qe(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return H(e,t);const n=De(e),r=De(t),i=H(n.seconds,r.seconds);return 0!==i?i:H(n.nanos,r.nanos)}function He(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=Ke(n[i],r[i]);if(e)return e}return H(n.length,r.length)}function Ge(e){return Qe(e)}function Qe(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=De(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(e){return Me(e).toBase64()}(e.bytesValue):"referenceValue"in e?function(e){return te.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Qe(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${Qe(e.fields[i])}`;return n+"}"}(e.mapValue):x()}function Xe(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Ye(e){return!!e&&"integerValue"in e}function Je(e){return!!e&&"arrayValue"in e}function Ze(e){return!!e&&"nullValue"in e}function et(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function tt(e){return!!e&&"mapValue"in e}function nt(e){var t,n;return"__vector__"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function rt(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Ee(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=rt(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=rt(e.arrayValue.values[n]);return t}return Object.assign({},e)}function it(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class st{constructor(e){this.value=e}static empty(){return new st({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!tt(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=rt(t)}setAll(e){let t=ee.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=rt(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());tt(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return We(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];tt(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Ee(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new st(rt(this.value))}}function ot(e){const t=[];return Ee(e.fields,((e,n)=>{const r=new ee([e]);if(tt(n)){const e=ot(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Re(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class at{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new at(e,0,X.min(),X.min(),X.min(),st.empty(),0)}static newFoundDocument(e,t,n,r){return new at(e,1,t,X.min(),n,r,0)}static newNoDocument(e,t){return new at(e,2,t,X.min(),X.min(),st.empty(),0)}static newUnknownDocument(e,t){return new at(e,3,t,X.min(),X.min(),st.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(X.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=st.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=st.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof at&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,t){this.position=e,this.inclusive=t}}function ut(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?te.comparator(te.fromName(o.referenceValue),n.key):Ke(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function lt(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!We(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,t="asc"){this.field=e,this.dir=t}}function dt(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{}class pt extends ft{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Et(e,t,n):"array-contains"===t?new Ct(e,n):"in"===t?new kt(e,n):"not-in"===t?new At(e,n):"array-contains-any"===t?new Rt(e,n):new pt(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Tt(e,n):new St(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Ke(t,this.value)):null!==t&&Be(this.value)===Be(t)&&this.matchesComparison(Ke(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return x()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class gt extends ft{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new gt(e,t)}matches(e){return mt(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function mt(e){return"and"===e.op}function vt(e){return yt(e)&&mt(e)}function yt(e){for(const t of e.filters)if(t instanceof gt)return!1;return!0}function bt(e){if(e instanceof pt)return e.field.canonicalString()+e.op.toString()+Ge(e.value);if(vt(e))return e.filters.map((e=>bt(e))).join(",");{const t=e.filters.map((e=>bt(e))).join(",");return`${e.op}(${t})`}}function wt(e,t){return e instanceof pt?function(e,t){return t instanceof pt&&e.op===t.op&&e.field.isEqual(t.field)&&We(e.value,t.value)}(e,t):e instanceof gt?function(e,t){return t instanceof gt&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&wt(n,t.filters[r])),!0)}(e,t):void x()}function _t(e){return e instanceof pt?function(e){return`${e.field.canonicalString()} ${e.op} ${Ge(e.value)}`}(e):e instanceof gt?function(e){return e.op.toString()+" {"+e.getFilters().map(_t).join(" ,")+"}"}(e):"Filter"}class Et extends pt{constructor(e,t,n){super(e,t,n),this.key=te.fromName(n.referenceValue)}matches(e){const t=te.comparator(e.key,this.key);return this.matchesComparison(t)}}class Tt extends pt{constructor(e,t){super(e,"in",t),this.keys=It("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class St extends pt{constructor(e,t){super(e,"not-in",t),this.keys=It("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function It(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>te.fromName(e.referenceValue)))}class Ct extends pt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Je(t)&&ze(t.arrayValue,this.value)}}class kt extends pt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&ze(this.value.arrayValue,t)}}class At extends pt{constructor(e,t){super(e,"not-in",t)}matches(e){if(ze(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!ze(this.value.arrayValue,t)}}class Rt extends pt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Je(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>ze(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ue=null}}function xt(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Ot(e,t,n,r,i,s,o)}function Nt(e){const t=D(e);if(null===t.ue){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>bt(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),pe(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Ge(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Ge(e))).join(",")),t.ue=e}return t.ue}function Dt(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!dt(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!wt(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!lt(e.startAt,t.startAt)&&lt(e.endAt,t.endAt)}function Pt(e){return te.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mt{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Lt(e,t,n,r,i,s,o,a){return new Mt(e,t,n,r,i,s,o,a)}function Ft(e){return new Mt(e)}function Vt(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Ut(e){return null!==e.collectionGroup}function jt(e){const t=D(e);if(null===t.ce){t.ce=[];const e=new Set;for(const i of t.explicitOrderBy)t.ce.push(i),e.add(i.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc",r=function(e){let t=new ke(ee.comparator);return e.filters.forEach((e=>{e.getFlattenedFilters().forEach((e=>{e.isInequality()&&(t=t.add(e.field))}))})),t}(t);r.forEach((r=>{e.has(r.canonicalString())||r.isKeyField()||t.ce.push(new ht(r,n))})),e.has(ee.keyField().canonicalString())||t.ce.push(new ht(ee.keyField(),n))}return t.ce}function $t(e){const t=D(e);return t.le||(t.le=Bt(t,jt(e))),t.le}function Bt(e,t){if("F"===e.limitType)return xt(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map((e=>{const t="desc"===e.dir?"asc":"desc";return new ht(e.field,t)}));const n=e.endAt?new ct(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new ct(e.startAt.position,e.startAt.inclusive):null;return xt(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Wt(e,t){const n=e.filters.concat([t]);return new Mt(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function zt(e,t,n){return new Mt(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Kt(e,t){return Dt($t(e),$t(t))&&e.limitType===t.limitType}function qt(e){return`${Nt($t(e))}|lt:${e.limitType}`}function Ht(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>_t(e))).join(", ")}]`),pe(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Ge(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Ge(e))).join(",")),`Target(${t})`}($t(e))}; limitType=${e.limitType})`}function Gt(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):te.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of jt(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=ut(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,jt(e),t))&&!(e.endAt&&!function(e,t,n){const r=ut(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,jt(e),t))}(e,t)}function Qt(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Xt(e){return(t,n)=>{let r=!1;for(const i of jt(e)){const e=Yt(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Yt(e,t,n){const r=e.field.isKeyField()?te.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?Ke(r,i):x()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return x()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Ee(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return Te(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new Se(te.comparator);function en(){return Zt}const tn=new Se(te.comparator);function nn(...e){let t=tn;for(const n of e)t=t.insert(n.key,n);return t}function rn(e){let t=tn;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function sn(){return an()}function on(){return an()}function an(){return new Jt((e=>e.toString()),((e,t)=>e.isEqual(t)))}const cn=new Se(te.comparator),un=new ke(te.comparator);function ln(...e){let t=un;for(const n of e)t=t.add(n);return t}const hn=new ke(H);function dn(){return hn}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ge(t)?"-0":t}}function pn(e){return{integerValue:""+e}}function gn(e,t){return me(t)?pn(t):fn(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(){this._=void 0}}function vn(e,t,n){return e instanceof wn?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Le(t)&&(t=Fe(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof _n?En(e,t):e instanceof Tn?Sn(e,t):function(e,t){const n=bn(e,t),r=Cn(n)+Cn(e.Pe);return Ye(n)&&Ye(e.Pe)?pn(r):fn(e.serializer,r)}(e,t)}function yn(e,t,n){return e instanceof _n?En(e,t):e instanceof Tn?Sn(e,t):n}function bn(e,t){return e instanceof In?function(e){return Ye(e)||function(e){return!!e&&"doubleValue"in e}(e)}(t)?t:{integerValue:0}:null}class wn extends mn{}class _n extends mn{constructor(e){super(),this.elements=e}}function En(e,t){const n=kn(t);for(const r of e.elements)n.some((e=>We(e,r)))||n.push(r);return{arrayValue:{values:n}}}class Tn extends mn{constructor(e){super(),this.elements=e}}function Sn(e,t){let n=kn(t);for(const r of e.elements)n=n.filter((e=>!We(e,r)));return{arrayValue:{values:n}}}class In extends mn{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Cn(e){return Pe(e.integerValue||e.doubleValue)}function kn(e){return Je(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,t){this.field=e,this.transform=t}}function Rn(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof _n&&t instanceof _n||e instanceof Tn&&t instanceof Tn?G(e.elements,t.elements,We):e instanceof In&&t instanceof In?We(e.Pe,t.Pe):e instanceof wn&&t instanceof wn}(e.transform,t.transform)}class On{constructor(e,t){this.version=e,this.transformResults=t}}class xn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new xn}static exists(e){return new xn(void 0,e)}static updateTime(e){return new xn(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Nn(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Dn{}function Pn(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new zn(e.key,xn.none()):new Un(e.key,e.data,xn.none());{const n=e.data,r=st.empty();let i=new ke(ee.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new jn(e.key,r,new Re(i.toArray()),xn.none())}}function Mn(e,t,n){e instanceof Un?function(e,t,n){const r=e.value.clone(),i=Bn(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof jn?function(e,t,n){if(!Nn(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Bn(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll($n(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Ln(e,t,n,r){return e instanceof Un?function(e,t,n,r){if(!Nn(e.precondition,t))return n;const i=e.value.clone(),s=Wn(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof jn?function(e,t,n,r){if(!Nn(e.precondition,t))return n;const i=Wn(e.fieldTransforms,r,t),s=t.data;return s.setAll($n(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return Nn(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function Fn(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=bn(r.transform,e||null);null!=i&&(null===n&&(n=st.empty()),n.set(r.field,i))}return n||null}function Vn(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&G(e,t,((e,t)=>Rn(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Un extends Dn{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class jn extends Dn{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function $n(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Bn(e,t,n){const r=new Map;N(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,yn(o,a,n[i]))}return r}function Wn(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,vn(e,s,t))}return r}class zn extends Dn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Kn extends Dn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&Mn(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Ln(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Ln(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=on();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=Pn(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(X.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ln())}isEqual(e){return this.batchId===e.batchId&&G(this.mutations,e.mutations,((e,t)=>Vn(e,t)))&&G(this.baseMutations,e.baseMutations,((e,t)=>Vn(e,t)))}}class Hn{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){N(e.mutations.length===n.length);let r=function(){return cn}();const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Hn(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qn{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xn,Yn;function Jn(e){switch(e){default:return x();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function Zn(e){if(void 0===e)return A("GRPC error has no .code"),P.UNKNOWN;switch(e){case Xn.OK:return P.OK;case Xn.CANCELLED:return P.CANCELLED;case Xn.UNKNOWN:return P.UNKNOWN;case Xn.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case Xn.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case Xn.INTERNAL:return P.INTERNAL;case Xn.UNAVAILABLE:return P.UNAVAILABLE;case Xn.UNAUTHENTICATED:return P.UNAUTHENTICATED;case Xn.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case Xn.NOT_FOUND:return P.NOT_FOUND;case Xn.ALREADY_EXISTS:return P.ALREADY_EXISTS;case Xn.PERMISSION_DENIED:return P.PERMISSION_DENIED;case Xn.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case Xn.ABORTED:return P.ABORTED;case Xn.OUT_OF_RANGE:return P.OUT_OF_RANGE;case Xn.UNIMPLEMENTED:return P.UNIMPLEMENTED;case Xn.DATA_LOSS:return P.DATA_LOSS;default:return x()}}(Yn=Xn||(Xn={}))[Yn.OK=0]="OK",Yn[Yn.CANCELLED=1]="CANCELLED",Yn[Yn.UNKNOWN=2]="UNKNOWN",Yn[Yn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Yn[Yn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Yn[Yn.NOT_FOUND=5]="NOT_FOUND",Yn[Yn.ALREADY_EXISTS=6]="ALREADY_EXISTS",Yn[Yn.PERMISSION_DENIED=7]="PERMISSION_DENIED",Yn[Yn.UNAUTHENTICATED=16]="UNAUTHENTICATED",Yn[Yn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Yn[Yn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Yn[Yn.ABORTED=10]="ABORTED",Yn[Yn.OUT_OF_RANGE=11]="OUT_OF_RANGE",Yn[Yn.UNIMPLEMENTED=12]="UNIMPLEMENTED",Yn[Yn.INTERNAL=13]="INTERNAL",Yn[Yn.UNAVAILABLE=14]="UNAVAILABLE",Yn[Yn.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let er=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=new r([4294967295,4294967295],0);function rr(e){const t=tr().encode(e),n=new i;return n.update(t),new Uint8Array(n.digest())}function ir(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),i=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new r([n,i],0),new r([s,o],0)]}class sr{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new or(`Invalid padding: ${t}`);if(n<0)throw new or(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new or(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new or(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=r.fromNumber(this.Ie)}Ee(e,t,n){let i=e.add(t.multiply(r.fromNumber(n)));return 1===i.compare(nr)&&(i=new r([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ie)return!1;const t=rr(e),[n,r]=ir(t);for(let i=0;i<this.hashCount;i++){const e=this.Ee(n,r,i);if(!this.de(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new sr(i,r,t);return n.forEach((e=>s.insert(e))),s}insert(e){if(0===this.Ie)return;const t=rr(e),[n,r]=ir(t);for(let i=0;i<this.hashCount;i++){const e=this.Ee(n,r,i);this.Ae(e)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class or extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,cr.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new ar(X.min(),r,new Se(H),en(),ln())}}class cr{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new cr(n,t,ln(),ln(),ln())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,t,n,r){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=r}}class lr{constructor(e,t){this.targetId=e,this.me=t}}class hr{constructor(e,t,n=xe.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class dr{constructor(){this.fe=0,this.ge=gr(),this.pe=xe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ln(),t=ln(),n=ln();return this.ge.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:x()}})),new cr(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=gr()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,N(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class fr{constructor(e){this.Le=e,this.Be=new Map,this.ke=en(),this.qe=pr(),this.Qe=new Se(H)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,(t=>{const n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:x()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach(((e,n)=>{this.ze(n)&&t(n)}))}He(e){const t=e.targetId,n=e.me.count,r=this.Je(t);if(r){const i=r.target;if(Pt(i))if(0===n){const e=new te(i.path);this.Ue(t,e,at.newNoDocument(e,X.min()))}else N(1===n);else{const r=this.Ye(t);if(r!==n){const n=this.Ze(e),i=n?this.Xe(n,e,r):1;if(0!==i){this.je(t);const e=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,e)}null==er||er.et(function(e,t,n,r,i){var s,o,a,c,u,l;const h={localCacheCount:e,existenceFilterCount:t.count,databaseId:n.database,projectId:n.projectId},d=t.unchangedNames;return d&&(h.bloomFilter={applied:0===i,hashCount:null!==(s=null==d?void 0:d.hashCount)&&void 0!==s?s:0,bitmapLength:null!==(c=null===(a=null===(o=null==d?void 0:d.bits)||void 0===o?void 0:o.bitmap)||void 0===a?void 0:a.length)&&void 0!==c?c:0,padding:null!==(l=null===(u=null==d?void 0:d.bits)||void 0===u?void 0:u.padding)&&void 0!==l?l:0,mightContain:e=>{var t;return null!==(t=null==r?void 0:r.mightContain(e))&&void 0!==t&&t}}),h}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,e.me,this.Le.tt(),n,i))}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let s,o;try{s=Me(n).toUint8Array()}catch(e){if(e instanceof Oe)return R("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{o=new sr(s,r,i)}catch(e){return R(e instanceof or?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===o.Ie?null:o}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let r=0;return n.forEach((n=>{const i=this.Le.tt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.Ue(t,n,null),r++)})),r}rt(e){const t=new Map;this.Be.forEach(((n,r)=>{const i=this.Je(r);if(i){if(n.current&&Pt(i.target)){const t=new te(i.target.path);null!==this.ke.get(t)||this.it(r,t)||this.Ue(r,t,at.newNoDocument(t,e))}n.be&&(t.set(r,n.ve()),n.Ce())}}));let n=ln();this.qe.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Je(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.ke.forEach(((t,n)=>n.setReadTime(e)));const r=new ar(e,t,this.Qe,this.ke,n);return this.ke=en(),this.qe=pr(),this.Qe=new Se(H),r}$e(e,t){if(!this.ze(e))return;const n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;const r=this.Ge(e);this.it(e,t)?r.Fe(t,1):r.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new dr,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ke(H),this.qe=this.qe.insert(e,t)),t}ze(e){const t=null!==this.Je(e);return t||k("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new dr),this.Le.getRemoteKeysForTarget(e).forEach((t=>{this.Ue(e,t,null)}))}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function pr(){return new Se(te.comparator)}function gr(){return new Se(te.comparator)}const mr=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),vr=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),yr=(()=>{const e={and:"AND",or:"OR"};return e})();class br{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function wr(e,t){return e.useProto3Json||pe(t)?t:{value:t}}function _r(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Er(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Tr(e,t){return _r(e,t.toTimestamp())}function Sr(e){return N(!!e),X.fromTimestamp(function(e){const t=De(e);return new Q(t.seconds,t.nanos)}(e))}function Ir(e,t){return Cr(e,t).canonicalString()}function Cr(e,t){const n=function(e){return new J(["projects",e.projectId,"databases",e.database])}(e).child("documents");return void 0===t?n:n.child(t)}function kr(e){const t=J.fromString(e);return N(Xr(t)),t}function Ar(e,t){return Ir(e.databaseId,t.path)}function Rr(e,t){const n=kr(t);if(n.get(1)!==e.databaseId.projectId)throw new M(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new M(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new te(Dr(n))}function Or(e,t){return Ir(e.databaseId,t)}function xr(e){const t=kr(e);return 4===t.length?J.emptyPath():Dr(t)}function Nr(e){return new J(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Dr(e){return N(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Pr(e,t,n){return{name:Ar(e,t),fields:n.value.mapValue.fields}}function Mr(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:x()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.useProto3Json?(N(void 0===t||"string"==typeof t),xe.fromBase64String(t||"")):(N(void 0===t||t instanceof Buffer||t instanceof Uint8Array),xe.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?P.UNKNOWN:Zn(e.code);return new M(t,e.message||"")}(o);n=new hr(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Rr(e,r.document.name),s=Sr(r.document.updateTime),o=r.document.createTime?Sr(r.document.createTime):X.min(),a=new st({mapValue:{fields:r.document.fields}}),c=at.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new ur(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Rr(e,r.document),s=r.readTime?Sr(r.readTime):X.min(),o=at.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ur([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Rr(e,r.document),s=r.removedTargetIds||[];n=new ur([],s,i,null)}else{if(!("filter"in t))return x();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new Qn(r,i),o=e.targetId;n=new lr(o,s)}}return n}function Lr(e,t){let n;if(t instanceof Un)n={update:Pr(e,t.key,t.value)};else if(t instanceof zn)n={delete:Ar(e,t.key)};else if(t instanceof jn)n={update:Pr(e,t.key,t.data),updateMask:Qr(t.fieldMask)};else{if(!(t instanceof Kn))return x();n={verify:Ar(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof wn)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof _n)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Tn)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof In)return{fieldPath:t.field.canonicalString(),increment:n.Pe};throw x()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Tr(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:x()}(e,t.precondition)),n}function Fr(e,t){return e&&e.length>0?(N(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Sr(e.updateTime):Sr(t);return n.isEqual(X.min())&&(n=Sr(t)),new On(n,e.transformResults||[])}(e,t)))):[]}function Vr(e,t){return{documents:[Or(e,t.path)]}}function Ur(e,t){const n={structuredQuery:{}},r=t.path;let i;null!==t.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Or(e,i);const s=function(e){if(0!==e.length)return Gr(gt.create(e,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const o=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:qr(e.field),direction:Wr(e.dir)}}(e)))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=wr(e,t.limit);return null!==a&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(e){return{before:e.inclusive,values:e.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{_t:n,parent:i}}function jr(e){let t=xr(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){N(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=Br(e);return t instanceof gt&&vt(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=function(e){return e.map((e=>function(e){return new ht(Hr(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)))}(n.orderBy));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,pe(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new ct(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new ct(n,t)}(n.endAt)),Lt(t,i,o,s,a,"F",c,u)}function $r(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return x()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}function Br(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Hr(e.unaryFilter.field);return pt.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Hr(e.unaryFilter.field);return pt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Hr(e.unaryFilter.field);return pt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Hr(e.unaryFilter.field);return pt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return x()}}(e):void 0!==e.fieldFilter?function(e){return pt.create(Hr(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return x()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return gt.create(e.compositeFilter.filters.map((e=>Br(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return x()}}(e.compositeFilter.op))}(e):x()}function Wr(e){return mr[e]}function zr(e){return vr[e]}function Kr(e){return yr[e]}function qr(e){return{fieldPath:e.canonicalString()}}function Hr(e){return ee.fromServerFormat(e.fieldPath)}function Gr(e){return e instanceof pt?function(e){if("=="===e.op){if(et(e.value))return{unaryFilter:{field:qr(e.field),op:"IS_NAN"}};if(Ze(e.value))return{unaryFilter:{field:qr(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(et(e.value))return{unaryFilter:{field:qr(e.field),op:"IS_NOT_NAN"}};if(Ze(e.value))return{unaryFilter:{field:qr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qr(e.field),op:zr(e.op),value:e.value}}}(e):e instanceof gt?function(e){const t=e.getFilters().map((e=>Gr(e)));return 1===t.length?t[0]:{compositeFilter:{op:Kr(e.op),filters:t}}}(e):x()}function Qr(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Xr(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,t,n,r,i=X.min(),s=X.min(),o=xe.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new Yr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Yr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e){this.ct=e}}function Zr(e){const t=jr({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?zt(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(Pe(e.integerValue));else if("doubleValue"in e){const n=Pe(e.doubleValue);isNaN(n)?this.dt(t,13):(this.dt(t,15),ge(n)?t.At(0):t.At(n))}else if("timestampValue"in e){let n=e.timestampValue;this.dt(t,20),"string"==typeof n&&(n=De(n)),t.Rt(`${n.seconds||""}`),t.At(n.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(Me(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.dt(t,45),t.At(n.latitude||0),t.At(n.longitude||0)}else"mapValue"in e?it(e)?this.dt(t,Number.MAX_SAFE_INTEGER):nt(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):x()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const n=e.fields||{};this.dt(t,55);for(const r of Object.keys(n))this.Vt(r,t),this.Tt(n[r],t)}wt(e,t){var n,r;const i=e.fields||{};this.dt(t,53);const s="value",o=(null===(r=null===(n=i[s].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.length)||0;this.dt(t,15),t.At(Pe(o)),this.Vt(s,t),this.Tt(i[s],t)}bt(e,t){const n=e.values||[];this.dt(t,50);for(const r of n)this.Tt(r,t)}yt(e,t){this.dt(t,37),te.fromName(e).path.forEach((e=>{this.dt(t,60),this.Dt(e,t)}))}dt(e,t){e.At(t)}ft(e){e.At(2)}}ei.vt=new ei;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ti{constructor(){this.un=new ni}addToCollectionParentIndex(e,t){return this.un.add(t),le.resolve()}getCollectionParents(e,t){return le.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return le.resolve()}deleteFieldIndex(e,t){return le.resolve()}deleteAllFieldIndexes(e){return le.resolve()}createTargetIndexes(e,t){return le.resolve()}getDocumentsMatchingTarget(e,t){return le.resolve(null)}getIndexType(e,t){return le.resolve(0)}getFieldIndexes(e,t){return le.resolve([])}getNextCollectionGroupToUpdate(e){return le.resolve(null)}getMinOffset(e,t){return le.resolve(se.min())}getMinOffsetFromCollectionGroup(e,t){return le.resolve(se.min())}updateCollectionGroup(e,t,n){return le.resolve()}updateIndexEntries(e,t){return le.resolve()}}class ni{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new ke(J.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new ke(J.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class ri{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new ri(e,ri.DEFAULT_COLLECTION_PERCENTILE,ri.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ri.DEFAULT_COLLECTION_PERCENTILE=10,ri.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ri.DEFAULT=new ri(41943040,ri.DEFAULT_COLLECTION_PERCENTILE,ri.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ri.DISABLED=new ri(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ii{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ii(0)}static kn(){return new ii(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class si{constructor(){this.changes=new Jt((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,at.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?le.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oi{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&Ln(n.mutation,e,Re.empty(),Q.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,ln()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=ln()){const r=sn();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=nn();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=sn();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,ln())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=en();const s=an(),o=function(){return an()}();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof jn)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),Ln(o.mutation,t,o.mutation.getFieldMask(),Q.now())):s.set(t.key,Re.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new oi(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=an();let r=new Se(((e,t)=>e-t)),i=ln();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||Re.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||ln()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=on();c.forEach((e=>{if(!i.has(e)){const r=Pn(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return le.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n,r){return function(e){return te.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ut(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):le.resolve(sn());let o=-1,a=i;return s.next((t=>le.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?le.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,ln()))).next((e=>({batchId:o,changes:rn(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new te(t)).next((e=>{let t=nn();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let s=nn();return this.indexManager.getCollectionParents(e,i).next((o=>le.forEach(o,(o=>{const a=function(e,t){return new Mt(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,o.child(i));return this.getDocumentsMatchingCollectionQuery(e,a,n,r).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r)))).next((e=>{i.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,at.newInvalidDocument(r)))}));let n=nn();return e.forEach(((e,r)=>{const s=i.get(e);void 0!==s&&Ln(s.mutation,r,Re.empty(),Q.now()),Gt(t,r)&&(n=n.insert(e,r))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return le.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(e){return{id:e.id,version:e.version,createTime:Sr(e.createTime)}}(t)),le.resolve()}getNamedQuery(e,t){return le.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(e){return{name:e.name,query:Zr(e.bundledQuery),readTime:Sr(e.readTime)}}(t)),le.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(){this.overlays=new Se(te.comparator),this.Ir=new Map}getOverlay(e,t){return le.resolve(this.overlays.get(t))}getOverlays(e,t){const n=sn();return le.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.ht(e,t,r)})),le.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Ir.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.Ir.delete(n)),le.resolve()}getOverlaysForCollection(e,t,n){const r=sn(),i=t.length+1,s=new te(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return le.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Se(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=sn(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=sn(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return le.resolve(o)}ht(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.Ir.get(r.largestBatchId).delete(n.key);this.Ir.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Gn(t,n));let i=this.Ir.get(t);void 0===i&&(i=ln(),this.Ir.set(t,i)),this.Ir.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(){this.sessionToken=xe.EMPTY_BYTE_STRING}getSessionToken(e){return le.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,le.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(){this.Tr=new ke(di.Er),this.dr=new ke(di.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const n=new di(e,t);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.Vr(new di(e,t))}mr(e,t){e.forEach((e=>this.removeReference(e,t)))}gr(e){const t=new te(new J([])),n=new di(t,e),r=new di(t,e+1),i=[];return this.dr.forEachInRange([n,r],(e=>{this.Vr(e),i.push(e.key)})),i}pr(){this.Tr.forEach((e=>this.Vr(e)))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new te(new J([])),n=new di(t,e),r=new di(t,e+1);let i=ln();return this.dr.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new di(e,0),n=this.Tr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class di{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return te.comparator(e.key,t.key)||H(e.wr,t.wr)}static Ar(e,t){return H(e.wr,t.wr)||te.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new ke(di.Er)}checkEmpty(e){return le.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new qn(i,t,n,r);this.mutationQueue.push(s);for(const o of r)this.br=this.br.add(new di(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return le.resolve(s)}lookupMutationBatch(e,t){return le.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.vr(n),i=r<0?0:r;return le.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return le.resolve(0===this.mutationQueue.length?-1:this.Sr-1)}getAllMutationBatches(e){return le.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new di(t,0),r=new di(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([n,r],(e=>{const t=this.Dr(e.wr);i.push(t)})),le.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ke(H);return t.forEach((e=>{const t=new di(e,0),r=new di(e,Number.POSITIVE_INFINITY);this.br.forEachInRange([t,r],(e=>{n=n.add(e.wr)}))})),le.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;te.isDocumentKey(i)||(i=i.child(""));const s=new di(new te(i),0);let o=new ke(H);return this.br.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.wr)),!0)}),s),le.resolve(this.Cr(o))}Cr(e){const t=[];return e.forEach((e=>{const n=this.Dr(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){N(0===this.Fr(t.batchId,"removed")),this.mutationQueue.shift();let n=this.br;return le.forEach(t.mutations,(r=>{const i=new di(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.br=n}))}On(e){}containsKey(e,t){const n=new di(t,0),r=this.br.firstAfterOrEqual(n);return le.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,le.resolve()}Fr(e,t){return this.vr(e)}vr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this.Mr=e,this.docs=function(){return new Se(te.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Mr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return le.resolve(n?n.document.mutableCopy():at.newInvalidDocument(t))}getEntries(e,t){let n=en();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():at.newInvalidDocument(e))})),le.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=en();const s=t.path,o=new te(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||oe(ie(o),n)<=0||(r.has(o.key)||Gt(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return le.resolve(i)}getAllFromCollectionGroup(e,t,n,r){x()}Or(e,t){return le.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new gi(this)}getSize(e){return le.resolve(this.size)}}class gi extends si{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.cr.addEntry(e,r)):this.cr.removeEntry(n)})),le.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e){this.persistence=e,this.Nr=new Jt((e=>Nt(e)),Dt),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Lr=0,this.Br=new hi,this.targetCount=0,this.kr=ii.Bn()}forEachTarget(e,t){return this.Nr.forEach(((e,n)=>t(n))),le.resolve()}getLastRemoteSnapshotVersion(e){return le.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return le.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),le.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Lr&&(this.Lr=t),le.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new ii(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,le.resolve()}updateTargetData(e,t){return this.Kn(t),le.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,le.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Nr.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Nr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),le.waitFor(i).next((()=>r))}getTargetCount(e){return le.resolve(this.targetCount)}getTargetData(e,t){const n=this.Nr.get(t)||null;return le.resolve(n)}addMatchingKeys(e,t,n){return this.Br.Rr(t,n),le.resolve()}removeMatchingKeys(e,t,n){this.Br.mr(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),le.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),le.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Br.yr(t);return le.resolve(n)}containsKey(e,t){return le.resolve(this.Br.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,t){this.qr={},this.overlays={},this.Qr=new fe(0),this.Kr=!1,this.Kr=!0,this.$r=new li,this.referenceDelegate=e(this),this.Ur=new mi(this),this.indexManager=new ti,this.remoteDocumentCache=function(e){return new pi(e)}((e=>this.referenceDelegate.Wr(e))),this.serializer=new Jr(t),this.Gr=new ci(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ui,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.qr[e.toKey()];return n||(n=new fi(t,this.referenceDelegate),this.qr[e.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,n){k("MemoryPersistence","Starting transaction:",e);const r=new yi(this.Qr.next());return this.referenceDelegate.zr(),n(r).next((e=>this.referenceDelegate.jr(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Hr(e,t){return le.or(Object.values(this.qr).map((n=>()=>n.containsKey(e,t))))}}class yi extends ce{constructor(e){super(),this.currentSequenceNumber=e}}class bi{constructor(e){this.persistence=e,this.Jr=new hi,this.Yr=null}static Zr(e){return new bi(e)}get Xr(){if(this.Yr)return this.Yr;throw x()}addReference(e,t,n){return this.Jr.addReference(n,t),this.Xr.delete(n.toString()),le.resolve()}removeReference(e,t,n){return this.Jr.removeReference(n,t),this.Xr.add(n.toString()),le.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),le.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach((e=>this.Xr.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Xr.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return le.forEach(this.Xr,(n=>{const r=te.fromPath(n);return this.ei(e,r).next((e=>{e||t.removeEntry(r,X.min())}))})).next((()=>(this.Yr=null,t.apply(e))))}updateLimboDocument(e,t){return this.ei(e,t).next((e=>{e?this.Xr.delete(t.toString()):this.Xr.add(t.toString())}))}Wr(e){return 0}ei(e,t){return le.or([()=>le.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wi{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.$i=n,this.Ui=r}static Wi(e,t){let n=ln(),r=ln();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new wi(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return(0,c.nr)()?8:he((0,c.ZQ)())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.Yi(e,t).next((e=>{i.result=e})).next((()=>{if(!i.result)return this.Zi(e,t,r,n).next((e=>{i.result=e}))})).next((()=>{if(i.result)return;const n=new _i;return this.Xi(e,t,n).next((r=>{if(i.result=r,this.zi)return this.es(e,t,n,r.size)}))})).next((()=>i.result))}es(e,t,n,r){return n.documentReadCount<this.ji?(C()<=a.$b.DEBUG&&k("QueryEngine","SDK will not create cache indexes for query:",Ht(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),le.resolve()):(C()<=a.$b.DEBUG&&k("QueryEngine","Query:",Ht(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Hi*r?(C()<=a.$b.DEBUG&&k("QueryEngine","The SDK decides to create cache indexes for query:",Ht(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,$t(t))):le.resolve())}Yi(e,t){if(Vt(t))return le.resolve(null);let n=$t(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=zt(t,null,"F"),n=$t(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=ln(...r);return this.Ji.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.ts(t,r);return this.ns(t,s,i,n.readTime)?this.Yi(e,zt(t,null,"F")):this.rs(e,s,t,n)}))))})))))}Zi(e,t,n,r){return Vt(t)||r.isEqual(X.min())?le.resolve(null):this.Ji.getDocuments(e,n).next((i=>{const s=this.ts(t,i);return this.ns(t,s,n,r)?le.resolve(null):(C()<=a.$b.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ht(t)),this.rs(e,s,t,re(r,-1)).next((e=>e)))}))}ts(e,t){let n=new ke(Xt(e));return t.forEach(((t,r)=>{Gt(e,r)&&(n=n.add(r))})),n}ns(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Xi(e,t,n){return C()<=a.$b.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",Ht(t)),this.Ji.getDocumentsMatchingQuery(e,t,se.min(),n)}rs(e,t,n,r){return this.Ji.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,t,n,r){this.persistence=e,this.ss=t,this.serializer=r,this.os=new Se(H),this._s=new Jt((e=>Nt(e)),Dt),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(n)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ai(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.os)))}}function Si(e,t,n,r){return new Ti(e,t,n,r)}async function Ii(e,t){const n=D(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.ls(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=ln();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({hs:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function Ci(e,t){const n=D(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=le.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);N(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=ln();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function ki(e){const t=D(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Ur.getLastRemoteSnapshotVersion(e)))}function Ai(e,t){const n=D(e),r=t.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Ur.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Ur.addMatchingKeys(e,s.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?u=u.withResumeToken(xe.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.Ur.updateTargetData(e,u))}));let a=en(),c=ln();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(Ri(e,s,t.documentUpdates).next((e=>{a=e.Ps,c=e.Is}))),!r.isEqual(X.min())){const t=n.Ur.getLastRemoteSnapshotVersion(e).next((t=>n.Ur.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return le.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.os=i,e)))}function Ri(e,t,n){let r=ln(),i=ln();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=en();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(X.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):k("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Ps:r,Is:i}}))}function Oi(e,t){const n=D(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function xi(e,t){const n=D(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Ur.getTargetData(e,t).next((i=>i?(r=i,le.resolve(r)):n.Ur.allocateTargetId(e).next((i=>(r=new Yr(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Ur.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.os.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.os=n.os.insert(e.targetId,e),n._s.set(t,e.targetId)),e}))}async function Ni(e,t,n){const r=D(e),i=r.os.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!de(e))throw e;k("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.os=r.os.remove(t),r._s.delete(i.target)}function Di(e,t,n){const r=D(e);let i=X.min(),s=ln();return r.persistence.runTransaction("Execute query","readwrite",(e=>function(e,t,n){const r=D(e),i=r._s.get(n);return void 0!==i?le.resolve(r.os.get(i)):r.Ur.getTargetData(t,n)}(r,e,$t(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.ss.getDocumentsMatchingQuery(e,t,n?i:X.min(),n?s:ln()))).next((e=>(Pi(r,Qt(t),e),{documents:e,Ts:s})))))}function Pi(e,t,n){let r=e.us.get(t)||X.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.us.set(t,r)}class Mi{constructor(){this.activeTargetIds=dn()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Li{constructor(){this.so=new Mi,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,n){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Mi,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{_o(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){k("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){k("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ui=null;function ji(){return null===Ui?Ui=function(){return 268435456+Math.round(2147483648*Math.random())}():Ui++,"0x"+Ui.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const $i={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi="WebChannelConnection";class zi extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Do=t+"://"+e.host,this.vo=`projects/${n}/databases/${r}`,this.Co="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get Fo(){return!1}Mo(e,t,n,r,i){const s=ji(),o=this.xo(e,t.toUriEncodedString());k("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(a,r,i),this.No(e,o,a,n).then((t=>(k("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw R("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}Lo(e,t,n,r,i,s){return this.Mo(e,t,n,r,i)}Oo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+S}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}xo(e,t){const n=$i[e];return`${this.Do}/v1/${t}:${n}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,n,r){const i=ji();return new Promise(((s,o)=>{const a=new h;a.setWithCredentials(!0),a.listenOnce(p.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case g.NO_ERROR:const t=a.getResponseJson();k(Wi,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case g.TIMEOUT:k(Wi,`RPC '${e}' ${i} timed out`),o(new M(P.DEADLINE_EXCEEDED,"Request time out"));break;case g.HTTP_ERROR:const n=a.getStatus();if(k(Wi,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(t)>=0?t:P.UNKNOWN}(t.status);o(new M(e,t.message))}else o(new M(P.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new M(P.UNAVAILABLE,"Connection failed."));break;default:x()}}finally{k(Wi,`RPC '${e}' ${i} completed.`)}}));const c=JSON.stringify(r);k(Wi,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",c,n,15)}))}Bo(e,t,n){const r=ji(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=b(),o=y(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new d({})),this.Oo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const u=i.join("");k(Wi,`Creating RPC '${e}' stream ${r}: ${u}`,a);const l=s.createWebChannel(u,a);let h=!1,p=!1;const g=new Bi({Io:t=>{p?k(Wi,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(h||(k(Wi,`Opening RPC '${e}' stream ${r} transport.`),l.open(),h=!0),k(Wi,`RPC '${e}' stream ${r} sending:`,t),l.send(t))},To:()=>l.close()}),w=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return w(l,f.EventType.OPEN,(()=>{p||(k(Wi,`RPC '${e}' stream ${r} transport opened.`),g.yo())})),w(l,f.EventType.CLOSE,(()=>{p||(p=!0,k(Wi,`RPC '${e}' stream ${r} transport closed`),g.So())})),w(l,f.EventType.ERROR,(t=>{p||(p=!0,R(Wi,`RPC '${e}' stream ${r} transport errored:`,t),g.So(new M(P.UNAVAILABLE,"The operation could not be completed")))})),w(l,f.EventType.MESSAGE,(t=>{var n;if(!p){const i=t.data[0];N(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){k(Wi,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=Xn[e];if(void 0!==t)return Zn(t)}(t),i=o.message;void 0===n&&(n=P.INTERNAL,i="Unknown error status: "+t+" with message "+o.message),p=!0,g.So(new M(n,i)),l.close()}else k(Wi,`RPC '${e}' stream ${r} received:`,i),g.bo(i)}})),w(o,v.STAT_EVENT,(t=>{t.stat===m.PROXY?k(Wi,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===m.NOPROXY&&k(Wi,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{g.wo()}),0),g}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(e){return new br(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,t,n=1e3,r=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=n,this.qo=r,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),r=Math.max(0,t-n);r>0&&k("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,(()=>(this.Uo=Date.now(),e()))),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){null!==this.$o&&(this.$o.skipDelay(),this.$o=null)}cancel(){null!==this.$o&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,t,n,r,i,s,o,a){this.ui=e,this.Ho=n,this.Jo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Hi(e,t)}n_(){return 1===this.state||5===this.state||this.r_()}r_(){return 2===this.state||3===this.state}start(){this.e_=0,4!==this.state?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&null===this.Zo&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,(()=>this.__())))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,4!==e?this.t_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(A(t.toString()),A("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===P.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Yo===t&&this.P_(e,n)}),(t=>{e((()=>{const e=new M(P.UNKNOWN,"Fetching auth token failed: "+t.message);return this.I_(e)}))}))}P_(e,t){const n=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo((()=>{n((()=>this.listener.Eo()))})),this.stream.Ro((()=>{n((()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,(()=>(this.r_()&&(this.state=3),Promise.resolve()))),this.listener.Ro())))})),this.stream.mo((e=>{n((()=>this.I_(e)))})),this.stream.onMessage((e=>{n((()=>1==++this.e_?this.E_(e):this.onNext(e)))}))}i_(){this.state=5,this.t_.Go((async()=>{this.state=0,this.start()}))}I_(e){return k("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget((()=>this.Yo===e?t():(k("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Qi extends Gi{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=Mr(this.serializer,e),n=function(e){if(!("targetChange"in e))return X.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?X.min():t.readTime?Sr(t.readTime):X.min()}(e);return this.listener.d_(t,n)}A_(e){const t={};t.database=Nr(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=Pt(r)?{documents:Vr(e,r)}:{query:Ur(e,r)._t},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Er(e,t.resumeToken);const r=wr(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(X.min())>0){n.readTime=_r(e,t.snapshotVersion.toTimestamp());const r=wr(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=$r(this.serializer,e);n&&(t.labels=n),this.a_(t)}R_(e){const t={};t.database=Nr(this.serializer),t.removeTarget=e,this.a_(t)}}class Xi extends Gi{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return N(!!e.streamToken),this.lastStreamToken=e.streamToken,N(!e.writeResults||0===e.writeResults.length),this.listener.f_()}onNext(e){N(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=Fr(e.writeResults,e.commitTime),n=Sr(e.commitTime);return this.listener.g_(n,t)}p_(){const e={};e.database=Nr(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>Lr(this.serializer,e)))};this.a_(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new M(P.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,n,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.Mo(e,Cr(t,n),r,i,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new M(P.UNKNOWN,e.toString())}))}Lo(e,t,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.Lo(e,Cr(t,n),r,s,o,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new M(P.UNKNOWN,e.toString())}))}terminate(){this.y_=!0,this.connection.terminate()}}class Ji{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){0===this.S_&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve()))))}M_(e){"Online"===this.state?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,"Online"===e&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(A(t),this.D_=!1):k("OnlineStateTracker",t)}x_(){null!==this.b_&&(this.b_.cancel(),this.b_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o((e=>{n.enqueueAndForget((async()=>{cs(this)&&(k("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=D(e);t.L_.add(4),await ts(t),t.q_.set("Unknown"),t.L_.delete(4),await es(t)}(this))}))})),this.q_=new Ji(n,r)}}async function es(e){if(cs(e))for(const t of e.B_)await t(!0)}async function ts(e){for(const t of e.B_)await t(!1)}function ns(e,t){const n=D(e);n.N_.has(t.targetId)||(n.N_.set(t.targetId,t),as(n)?os(n):ks(n).r_()&&is(n,t))}function rs(e,t){const n=D(e),r=ks(n);n.N_.delete(t),r.r_()&&ss(n,t),0===n.N_.size&&(r.r_()?r.o_():cs(n)&&n.q_.set("Unknown"))}function is(e,t){if(e.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(X.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}ks(e).A_(t)}function ss(e,t){e.Q_.xe(t),ks(e).R_(t)}function os(e){e.Q_=new fr({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>e.N_.get(t)||null,tt:()=>e.datastore.serializer.databaseId}),ks(e).start(),e.q_.v_()}function as(e){return cs(e)&&!ks(e).n_()&&e.N_.size>0}function cs(e){return 0===D(e).L_.size}function us(e){e.Q_=void 0}async function ls(e){e.q_.set("Online")}async function hs(e){e.N_.forEach(((t,n)=>{is(e,t)}))}async function ds(e,t){us(e),as(e)?(e.q_.M_(t),os(e)):e.q_.set("Unknown")}async function fs(e,t,n){if(e.q_.set("Online"),t instanceof hr&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.N_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.N_.delete(r),e.Q_.removeTarget(r))}(e,t)}catch(n){k("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await ps(e,n)}else if(t instanceof ur?e.Q_.Ke(t):t instanceof lr?e.Q_.He(t):e.Q_.We(t),!n.isEqual(X.min()))try{const t=await ki(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Q_.rt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.N_.get(r);i&&e.N_.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.N_.get(t);if(!r)return;e.N_.set(t,r.withResumeToken(xe.EMPTY_BYTE_STRING,r.snapshotVersion)),ss(e,t);const i=new Yr(r.target,t,n,r.sequenceNumber);is(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){k("RemoteStore","Failed to raise snapshot:",t),await ps(e,t)}}async function ps(e,t,n){if(!de(t))throw t;e.L_.add(1),await ts(e),e.q_.set("Offline"),n||(n=()=>ki(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{k("RemoteStore","Retrying IndexedDB access"),await n(),e.L_.delete(1),await es(e)}))}function gs(e,t){return t().catch((n=>ps(e,n,t)))}async function ms(e){const t=D(e),n=As(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;vs(t);)try{const e=await Oi(t.localStore,r);if(null===e){0===t.O_.length&&n.o_();break}r=e.batchId,ys(t,e)}catch(e){await ps(t,e)}bs(t)&&ws(t)}function vs(e){return cs(e)&&e.O_.length<10}function ys(e,t){e.O_.push(t);const n=As(e);n.r_()&&n.V_&&n.m_(t.mutations)}function bs(e){return cs(e)&&!As(e).n_()&&e.O_.length>0}function ws(e){As(e).start()}async function _s(e){As(e).p_()}async function Es(e){const t=As(e);for(const n of e.O_)t.m_(n.mutations)}async function Ts(e,t,n){const r=e.O_.shift(),i=Hn.from(r,t,n);await gs(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await ms(e)}async function Ss(e,t){t&&As(e).V_&&await async function(e,t){if(function(e){return Jn(e)&&e!==P.ABORTED}(t.code)){const n=e.O_.shift();As(e).s_(),await gs(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await ms(e)}}(e,t),bs(e)&&ws(e)}async function Is(e,t){const n=D(e);n.asyncQueue.verifyOperationInProgress(),k("RemoteStore","RemoteStore received new credentials");const r=cs(n);n.L_.add(3),await ts(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.L_.delete(3),await es(n)}async function Cs(e,t){const n=D(e);t?(n.L_.delete(2),await es(n)):t||(n.L_.add(2),await ts(n),n.q_.set("Unknown"))}function ks(e){return e.K_||(e.K_=function(e,t,n){const r=D(e);return r.w_(),new Qi(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Eo:ls.bind(null,e),Ro:hs.bind(null,e),mo:ds.bind(null,e),d_:fs.bind(null,e)}),e.B_.push((async t=>{t?(e.K_.s_(),as(e)?os(e):e.q_.set("Unknown")):(await e.K_.stop(),us(e))}))),e.K_}function As(e){return e.U_||(e.U_=function(e,t,n){const r=D(e);return r.w_(),new Xi(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Eo:()=>Promise.resolve(),Ro:_s.bind(null,e),mo:Ss.bind(null,e),f_:Es.bind(null,e),g_:Ts.bind(null,e)}),e.B_.push((async t=>{t?(e.U_.s_(),await ms(e)):(await e.U_.stop(),e.O_.length>0&&(k("RemoteStore",`Stopping write stream with ${e.O_.length} pending writes`),e.O_=[]))}))),e.U_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Rs{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new L,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new Rs(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new M(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Os(e,t){if(A("AsyncQueue",`${t}: ${e}`),de(e))return new M(P.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e){this.comparator=e?(t,n)=>e(t,n)||te.comparator(t.key,n.key):(e,t)=>te.comparator(e.key,t.key),this.keyedMap=nn(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new xs(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof xs))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new xs;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(){this.W_=new Se(te.comparator)}track(e){const t=e.doc.key,n=this.W_.get(t);n?0!==e.type&&3===n.type?this.W_=this.W_.insert(t,e):3===e.type&&1!==n.type?this.W_=this.W_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.W_=this.W_.remove(t):1===e.type&&2===n.type?this.W_=this.W_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):x():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Ds{constructor(e,t,n,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new Ds(e,t,xs.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Kt(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some((e=>e.J_()))}}class Ms{constructor(){this.queries=Ls(),this.onlineState="Unknown",this.Y_=new Set}terminate(){!function(e,t){const n=D(e),r=n.queries;n.queries=Ls(),r.forEach(((e,n)=>{for(const r of n.j_)r.onError(t)}))}(this,new M(P.ABORTED,"Firestore shutting down"))}}function Ls(){return new Jt((e=>qt(e)),Kt)}async function Fs(e,t){const n=D(e);let r=3;const i=t.query;let s=n.queries.get(i);s?!s.H_()&&t.J_()&&(r=2):(s=new Ps,r=t.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(e){const n=Os(e,`Initialization of query '${Ht(t.query)}' failed`);return void t.onError(n)}n.queries.set(i,s),s.j_.push(t),t.Z_(n.onlineState),s.z_&&t.X_(s.z_)&&$s(n)}async function Vs(e,t){const n=D(e),r=t.query;let i=3;const s=n.queries.get(r);if(s){const e=s.j_.indexOf(t);e>=0&&(s.j_.splice(e,1),0===s.j_.length?i=t.J_()?0:1:!s.H_()&&t.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Us(e,t){const n=D(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.j_)e.X_(i)&&(r=!0);t.z_=i}}r&&$s(n)}function js(e,t,n){const r=D(e),i=r.queries.get(t);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(t)}function $s(e){e.Y_.forEach((e=>{e.next()}))}var Bs,Ws;(Ws=Bs||(Bs={})).ea="default",Ws.Cache="cache";class zs{constructor(e,t,n){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Ds(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache)return!0;if(!this.J_())return!0;const n="Offline"!==t;return(!this.options._a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}oa(e){e=Ds.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Bs.Cache}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ks{constructor(e){this.key=e}}class qs{constructor(e){this.key=e}}class Hs{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ln(),this.mutatedKeys=ln(),this.Aa=Xt(e),this.Ra=new xs(this.Aa)}get Va(){return this.Ta}ma(e,t){const n=t?t.fa:new Ns,r=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=Gt(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.ga(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Aa(l,a)>0||c&&this.Aa(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Ra:s,fa:n,ns:o,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const s=e.fa.G_();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Aa(e.doc,t.doc))),this.pa(n),r=null!=r&&r;const o=t&&!r?this.ya():[],a=0===this.da.size&&this.current&&!r?1:0,c=a!==this.Ea;return this.Ea=a,0!==s.length||c?{snapshot:new Ds(this.query,e.Ra,i,s,e.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:o}:{wa:o}}Z_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ns,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach((e=>this.Ta=this.Ta.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Ta=this.Ta.delete(e))),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ln(),this.Ra.forEach((e=>{this.Sa(e.key)&&(this.da=this.da.add(e.key))}));const t=[];return e.forEach((e=>{this.da.has(e)||t.push(new qs(e))})),this.da.forEach((n=>{e.has(n)||t.push(new Ks(n))})),t}ba(e){this.Ta=e.Ts,this.da=ln();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Ds.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,0===this.Ea,this.hasCachedResults)}}class Gs{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Qs{constructor(e){this.key=e,this.va=!1}}class Xs{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Ca={},this.Fa=new Jt((e=>qt(e)),Kt),this.Ma=new Map,this.xa=new Set,this.Oa=new Se(te.comparator),this.Na=new Map,this.La=new hi,this.Ba={},this.ka=new Map,this.qa=ii.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return!0===this.Qa}}async function Ys(e,t,n=!0){const r=wo(e);let i;const s=r.Fa.get(t);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await Zs(r,t,n,!0),i}async function Js(e,t){const n=wo(e);await Zs(n,t,!0,!1)}async function Zs(e,t,n,r){const i=await xi(e.localStore,$t(t)),s=i.targetId,o=n?e.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await eo(e,t,s,"current"===o,i.resumeToken)),e.isPrimaryClient&&n&&ns(e.remoteStore,i),a}async function eo(e,t,n,r,i){e.Ka=(t,n,r)=>async function(e,t,n,r){let i=t.view.ma(n);i.ns&&(i=await Di(e.localStore,t.query,!1).then((({documents:e})=>t.view.ma(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=r&&null!=r.targetMismatches.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s,o);return po(e,t.targetId,a.wa),a.snapshot}(e,t,n,r);const s=await Di(e.localStore,t,!0),o=new Hs(t,s.Ts),a=o.ma(s.documents),c=cr.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,c);po(e,n,u.wa);const l=new Gs(t,n,o);return e.Fa.set(t,l),e.Ma.has(n)?e.Ma.get(n).push(t):e.Ma.set(n,[t]),u.snapshot}async function to(e,t,n){const r=D(e),i=r.Fa.get(t),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter((e=>!Kt(e,t)))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Ni(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),n&&rs(r.remoteStore,i.targetId),ho(r,i.targetId)})).catch(ue)):(ho(r,i.targetId),await Ni(r.localStore,i.targetId,!0))}async function no(e,t){const n=D(e),r=n.Fa.get(t),i=n.Ma.get(r.targetId);n.isPrimaryClient&&1===i.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),rs(n.remoteStore,r.targetId))}async function ro(e,t,n){const r=_o(e);try{const e=await function(e,t){const n=D(e),r=Q.now(),i=t.reduce(((e,t)=>e.add(t.key)),ln());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=en(),c=ln();return n.cs.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=Fn(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new jn(e.key,t,ot(t.value.mapValue),xn.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:rn(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Ba[e.currentUser.toKey()];r||(r=new Se(H)),r=r.insert(t,n),e.Ba[e.currentUser.toKey()]=r}(r,e.batchId,n),await vo(r,e.changes),await ms(r.remoteStore)}catch(e){const t=Os(e,"Failed to persist write");n.reject(t)}}async function io(e,t){const n=D(e);try{const e=await Ai(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Na.get(t);r&&(N(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.va=!0:e.modifiedDocuments.size>0?N(r.va):e.removedDocuments.size>0&&(N(r.va),r.va=!1))})),await vo(n,e,t)}catch(e){await ue(e)}}function so(e,t,n){const r=D(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Fa.forEach(((n,r)=>{const i=r.view.Z_(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=D(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.j_)i.Z_(t)&&(r=!0)})),r&&$s(n)}(r.eventManager,t),e.length&&r.Ca.d_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function oo(e,t,n){const r=D(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Na.get(t),s=i&&i.key;if(s){let e=new Se(te.comparator);e=e.insert(s,at.newNoDocument(s,X.min()));const n=ln().add(s),i=new ar(X.min(),new Map,new Se(H),e,n);await io(r,i),r.Oa=r.Oa.remove(s),r.Na.delete(t),mo(r)}else await Ni(r.localStore,t,!1).then((()=>ho(r,t,n))).catch(ue)}async function ao(e,t){const n=D(e),r=t.batch.batchId;try{const e=await Ci(n.localStore,t);lo(n,r,null),uo(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await vo(n,e)}catch(e){await ue(e)}}async function co(e,t,n){const r=D(e);try{const e=await function(e,t){const n=D(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(N(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);lo(r,t,n),uo(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await vo(r,e)}catch(n){await ue(n)}}function uo(e,t){(e.ka.get(t)||[]).forEach((e=>{e.resolve()})),e.ka.delete(t)}function lo(e,t,n){const r=D(e);let i=r.Ba[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Ba[r.currentUser.toKey()]=i}}function ho(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Ma.get(t))e.Fa.delete(r),n&&e.Ca.$a(r,n);e.Ma.delete(t),e.isPrimaryClient&&e.La.gr(t).forEach((t=>{e.La.containsKey(t)||fo(e,t)}))}function fo(e,t){e.xa.delete(t.path.canonicalString());const n=e.Oa.get(t);null!==n&&(rs(e.remoteStore,n),e.Oa=e.Oa.remove(t),e.Na.delete(n),mo(e))}function po(e,t,n){for(const r of n)r instanceof Ks?(e.La.addReference(r.key,t),go(e,r)):r instanceof qs?(k("SyncEngine","Document no longer in limbo: "+r.key),e.La.removeReference(r.key,t),e.La.containsKey(r.key)||fo(e,r.key)):x()}function go(e,t){const n=t.key,r=n.path.canonicalString();e.Oa.get(n)||e.xa.has(r)||(k("SyncEngine","New document in limbo: "+n),e.xa.add(r),mo(e))}function mo(e){for(;e.xa.size>0&&e.Oa.size<e.maxConcurrentLimboResolutions;){const t=e.xa.values().next().value;e.xa.delete(t);const n=new te(J.fromString(t)),r=e.qa.next();e.Na.set(r,new Qs(n)),e.Oa=e.Oa.insert(n,r),ns(e.remoteStore,new Yr($t(Ft(n.path)),r,"TargetPurposeLimboResolution",fe.oe))}}async function vo(e,t,n){const r=D(e),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach(((e,a)=>{o.push(r.Ka(a,t,n).then((e=>{var t;if((e||n)&&r.isPrimaryClient){const i=e?!e.fromCache:null===(t=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===t?void 0:t.current;r.sharedClientState.updateQueryState(a.targetId,i?"current":"not-current")}if(e){i.push(e);const t=wi.Wi(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.Ca.d_(i),await async function(e,t){const n=D(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>le.forEach(t,(t=>le.forEach(t.$i,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>le.forEach(t.Ui,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!de(e))throw e;k("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.os.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.os=n.os.insert(e,i)}}}(r.localStore,s))}async function yo(e,t){const n=D(e);if(!n.currentUser.isEqual(t)){k("SyncEngine","User change. New user:",t.toKey());const e=await Ii(n.localStore,t);n.currentUser=t,function(e,t){e.ka.forEach((e=>{e.forEach((e=>{e.reject(new M(P.CANCELLED,t))}))})),e.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await vo(n,e.hs)}}function bo(e,t){const n=D(e),r=n.Na.get(t);if(r&&r.va)return ln().add(r.key);{let e=ln();const r=n.Ma.get(t);if(!r)return e;for(const t of r){const r=n.Fa.get(t);e=e.unionWith(r.view.Va)}return e}}function wo(e){const t=D(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=io.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=bo.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=oo.bind(null,t),t.Ca.d_=Us.bind(null,t.eventManager),t.Ca.$a=js.bind(null,t.eventManager),t}function _o(e){const t=D(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=ao.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=co.bind(null,t),t}class Eo{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=qi(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Si(this.persistence,new Ei,e.initialUser,this.serializer)}createPersistence(e){return new vi(bi.Zr,this.serializer)}createSharedClientState(e){return new Li}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class To{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>so(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=yo.bind(null,this.syncEngine),await Cs(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Ms}()}createDatastore(e){const t=qi(e.databaseInfo.databaseId),n=function(e){return new zi(e)}(e.databaseInfo);return function(e,t,n,r){return new Yi(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(e,t,n,r,i){return new Zi(e,t,n,r,i)}(this.localStore,this.datastore,e.asyncQueue,(e=>so(this.syncEngine,e,0)),function(){return Vi.D()?new Vi:new Fi}())}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new Xs(e,t,n,r,i,s);return o&&(a.Qa=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){const t=D(e);k("RemoteStore","RemoteStore shutting down."),t.L_.add(5),await ts(t),t.k_.shutdown(),t.q_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class So{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):A("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Io{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=T.UNAUTHENTICATED,this.clientId=q.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{k("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(k("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(P.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new L;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Os(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Co(e,t){e.asyncQueue.verifyOperationInProgress(),k("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await Ii(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function ko(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Ro(e);k("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener((e=>Is(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Is(t.remoteStore,n))),e._onlineComponents=t}function Ao(e){return"FirebaseError"===e.name?e.code===P.FAILED_PRECONDITION||e.code===P.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function Ro(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){k("FirestoreClient","Using user provided OfflineComponentProvider");try{await Co(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Ao(n))throw n;R("Error using user provided cache. Falling back to memory cache: "+n),await Co(e,new Eo)}}else k("FirestoreClient","Using default OfflineComponentProvider"),await Co(e,new Eo);return e._offlineComponents}async function Oo(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(k("FirestoreClient","Using user provided OnlineComponentProvider"),await ko(e,e._uninitializedComponentsProvider._online)):(k("FirestoreClient","Using default OnlineComponentProvider"),await ko(e,new To))),e._onlineComponents}function xo(e){return Oo(e).then((e=>e.syncEngine))}async function No(e){const t=await Oo(e),n=t.eventManager;return n.onListen=Ys.bind(null,t.syncEngine),n.onUnlisten=to.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=Js.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=no.bind(null,t.syncEngine),n}function Do(e,t,n={}){const r=new L;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new So({next:s=>{t.enqueueAndForget((()=>Vs(e,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new M(P.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new M(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new zs(Ft(n.path),s,{includeMetadataChanges:!0,_a:!0});return Fs(e,o)}(await No(e),e.asyncQueue,t,n,r))),r.promise}function Po(e,t,n={}){const r=new L;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new So({next:n=>{t.enqueueAndForget((()=>Vs(e,o))),n.fromCache&&"server"===r.source?i.reject(new M(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new zs(n,s,{includeMetadataChanges:!0,_a:!0});return Fs(e,o)}(await No(e),e.asyncQueue,t,n,r))),r.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Mo(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Lo=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(e,t,n){if(!n)throw new M(P.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Vo(e,t,n,r){if(!0===t&&!0===r)throw new M(P.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Uo(e){if(!te.isDocumentKey(e))throw new M(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function jo(e){if(te.isDocumentKey(e))throw new M(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function $o(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":x()}function Bo(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new M(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$o(e);throw new M(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wo{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new M(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new M(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Vo("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Mo(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new M(P.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new M(P.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new M(P.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class zo{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new M(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new M(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wo(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new V;switch(e.type){case"firstParty":return new B(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new M(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Lo.get(e);t&&(k("ComponentProvider","Removing Datastore"),Lo.delete(e),t.terminate())}(this),Promise.resolve()}}function Ko(e,t,n,r={}){var i;const s=(e=Bo(e,zo))._getSettings(),o=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&R("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=T.MOCK_USER;else{t=(0,c.Fy)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new M(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new T(s)}e._authCredentials=new U(new F(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new qo(this.firestore,e,this._query)}}class Ho{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Go(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ho(this.firestore,e,this._key)}}class Go extends qo{constructor(e,t,n){super(e,t,Ft(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ho(this.firestore,null,new te(e))}withConverter(e){return new Go(this.firestore,e,this._path)}}function Qo(e,t,...n){if(e=(0,c.Ku)(e),Fo("collection","path",t),e instanceof zo){const r=J.fromString(t,...n);return jo(r),new Go(e,null,r)}{if(!(e instanceof Ho||e instanceof Go))throw new M(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(J.fromString(t,...n));return jo(r),new Go(e.firestore,null,r)}}function Xo(e,t,...n){if(e=(0,c.Ku)(e),1===arguments.length&&(t=q.newId()),Fo("doc","path",t),e instanceof zo){const r=J.fromString(t,...n);return Uo(r),new Ho(e,null,new te(r))}{if(!(e instanceof Ho||e instanceof Go))throw new M(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(J.fromString(t,...n));return Uo(r),new Ho(e.firestore,e instanceof Go?e.converter:null,new te(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yo{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new Hi(this,"async_queue_retry"),this.Eu=()=>{const e=Ki();e&&k("AsyncQueue","Visibility state changed to "+e.visibilityState),this.t_.jo()};const e=Ki();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const t=Ki();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise((()=>{}));const t=new L;return this.Au((()=>this.cu&&this.Iu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.uu.push(e),this.Ru())))}async Ru(){if(0!==this.uu.length){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!de(e))throw e;k("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go((()=>this.Ru()))}}Au(e){const t=this.au.then((()=>(this.Pu=!0,e().catch((e=>{this.hu=e,this.Pu=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw A("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Pu=!1,e))))));return this.au=t,t}enqueueAfterDelay(e,t,n){this.du(),this.Tu.indexOf(e)>-1&&(t=0);const r=Rs.createAndSchedule(this,e,t,n,(e=>this.Vu(e)));return this.lu.push(r),r}du(){this.hu&&x()}verifyOperationInProgress(){}async mu(){let e;do{e=this.au,await e}while(e!==this.au)}fu(e){for(const t of this.lu)if(t.timerId===e)return!0;return!1}gu(e){return this.mu().then((()=>{this.lu.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.lu)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.mu()}))}pu(e){this.Tu.push(e)}Vu(e){const t=this.lu.indexOf(e);this.lu.splice(t,1)}}class Jo extends zo{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=function(){return new Yo}(),this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ta(this),this._firestoreClient.terminate()}}function Zo(e,t){const n="object"==typeof e?e:(0,s.Sx)(),r="string"==typeof e?e:t||"(default)",i=(0,s.j6)(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const e=(0,c.yU)("firestore");e&&Ko(i,...e)}return i}function ea(e){return e._firestoreClient||ta(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function ta(e){var t,n,r;const i=e._freezeSettings(),s=function(e,t,n,r){return new Ue(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Mo(r.experimentalLongPollingOptions),r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new Io(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class na{constructor(e){this._byteString=e}static fromBase64String(e){try{return new na(xe.fromBase64String(e))}catch(e){throw new M(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new na(xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new M(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ee(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ia{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new M(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new M(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return H(this._lat,e._lat)||H(this._long,e._long)}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e){this._values=(e||[]).map((e=>e))}toArray(){return this._values.map((e=>e))}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa=/^__.*__$/;class ca{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new jn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Un(e,this.data,t,this.fieldTransforms)}}class ua{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new jn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function la(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x()}}class ha{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.yu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new ha(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Su({path:n,Du:!1});return r.vu(e),r}Cu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Su({path:n,Du:!1});return r.yu(),r}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return Aa(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(0===e.length)throw this.Mu("Document fields must not be empty");if(la(this.wu)&&aa.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class da{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||qi(e)}Nu(e,t,n,r=!1){return new ha({wu:e,methodName:t,Ou:n,path:ee.emptyPath(),Du:!1,xu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fa(e){const t=e._freezeSettings(),n=qi(e._databaseId);return new da(e._databaseId,!!t.ignoreUndefinedProperties,n)}function pa(e,t,n,r,i,s={}){const o=e.Nu(s.merge||s.mergeFields?2:0,t,n,i);Sa("Data must be an object, but it was:",o,r);const a=Ea(r,o);let c,u;if(s.merge)c=new Re(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=Ia(t,r,n);if(!o.contains(i))throw new M(P.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Ra(e,i)||e.push(i)}c=new Re(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new ca(new st(a),c,u)}class ga extends ia{_toFieldTransform(e){if(2!==e.wu)throw 1===e.wu?e.Mu(`${this._methodName}() can only appear at the top level of your update data`):e.Mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ga}}function ma(e,t,n){return new ha({wu:3,Ou:t.settings.Ou,methodName:e._methodName,Du:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class va extends ia{constructor(e,t){super(e),this.Lu=t}_toFieldTransform(e){const t=ma(this,e,!0),n=this.Lu.map((e=>_a(e,t))),r=new _n(n);return new An(e.path,r)}isEqual(e){return e instanceof va&&(0,c.bD)(this.Lu,e.Lu)}}function ya(e,t,n,r){const i=e.Nu(1,t,n);Sa("Data must be an object, but it was:",i,r);const s=[],o=st.empty();Ee(r,((e,r)=>{const a=ka(t,e,n);r=(0,c.Ku)(r);const u=i.Cu(a);if(r instanceof ga)s.push(a);else{const e=_a(r,u);null!=e&&(s.push(a),o.set(a,e))}}));const a=new Re(s);return new ua(o,a,i.fieldTransforms)}function ba(e,t,n,r,i,s){const o=e.Nu(1,t,n),a=[Ia(t,r,n)],u=[i];if(s.length%2!=0)throw new M(P.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let c=0;c<s.length;c+=2)a.push(Ia(t,s[c])),u.push(s[c+1]);const l=[],h=st.empty();for(let f=a.length-1;f>=0;--f)if(!Ra(l,a[f])){const e=a[f];let t=u[f];t=(0,c.Ku)(t);const n=o.Cu(e);if(t instanceof ga)l.push(e);else{const r=_a(t,n);null!=r&&(l.push(e),h.set(e,r))}}const d=new Re(l);return new ua(h,d,o.fieldTransforms)}function wa(e,t,n,r=!1){return _a(n,e.Nu(r?4:3,t))}function _a(e,t){if(Ta(e=(0,c.Ku)(e)))return Sa("Unsupported field value:",t,e),Ea(e,t);if(e instanceof ia)return function(e,t){if(!la(t.wu))throw t.Mu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Mu(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Du&&4!==t.wu)throw t.Mu("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=_a(i,t.Fu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,c.Ku)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return gn(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Q.fromDate(e);return{timestampValue:_r(t.serializer,n)}}if(e instanceof Q){const n=new Q(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:_r(t.serializer,n)}}if(e instanceof sa)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof na)return{bytesValue:Er(t.serializer,e._byteString)};if(e instanceof Ho){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Mu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Ir(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof oa)return function(e,t){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:e.toArray().map((e=>{if("number"!=typeof e)throw t.Mu("VectorValues must only contain numeric values.");return fn(t.serializer,e)}))}}}}}}(e,t);throw t.Mu(`Unsupported field value: ${$o(e)}`)}(e,t)}function Ea(e,t){const n={};return Te(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ee(e,((e,r)=>{const i=_a(r,t.bu(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function Ta(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Q||e instanceof sa||e instanceof na||e instanceof Ho||e instanceof ia||e instanceof oa)}function Sa(e,t,n){if(!Ta(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=$o(n);throw"an object"===r?t.Mu(e+" a custom object"):t.Mu(e+" "+r)}}function Ia(e,t,n){if((t=(0,c.Ku)(t))instanceof ra)return t._internalPath;if("string"==typeof t)return ka(e,t);throw Aa("Field path arguments must be of type string or ",e,!1,void 0,n)}const Ca=new RegExp("[~\\*/\\[\\]]");function ka(e,t,n){if(t.search(Ca)>=0)throw Aa(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ra(...t.split("."))._internalPath}catch(r){throw Aa(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Aa(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new M(P.INVALID_ARGUMENT,a+e+c)}function Ra(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ho(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new xa(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Na("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class xa extends Oa{data(){return super.data()}}function Na(e,t){return"string"==typeof t?ka(e,t):t instanceof ra?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new M(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Pa{}class Ma extends Pa{}function La(e,t,...n){let r=[];t instanceof Pa&&r.push(t),r=r.concat(n),function(e){const t=e.filter((e=>e instanceof Ua)).length,n=e.filter((e=>e instanceof Fa)).length;if(t>1||t>0&&n>0)throw new M(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r);for(const i of r)e=i._apply(e);return e}class Fa extends Ma{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Fa(e,t,n)}_apply(e){const t=this._parse(e);return Ba(e._query,t),new qo(e.firestore,e.converter,Wt(e._query,t))}_parse(e){const t=fa(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new M(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){$a(o,s);const t=[];for(const n of o)t.push(ja(r,e,n));a={arrayValue:{values:t}}}else a=ja(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||$a(o,s),a=wa(n,t,o,"in"===s||"not-in"===s);return pt.create(i,s,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function Va(e,t,n){const r=t,i=Na("where",e);return Fa._create(i,r,n)}class Ua extends Pa{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ua(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:gt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const i of r)Ba(n,i),n=Wt(n,i)}(e._query,t),new qo(e.firestore,e.converter,Wt(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function ja(e,t,n){if("string"==typeof(n=(0,c.Ku)(n))){if(""===n)throw new M(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ut(t)&&-1!==n.indexOf("/"))throw new M(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(J.fromString(n));if(!te.isDocumentKey(r))throw new M(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Xe(e,new te(r))}if(n instanceof Ho)return Xe(e,n._key);throw new M(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${$o(n)}.`)}function $a(e,t){if(!Array.isArray(e)||0===e.length)throw new M(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Ba(e,t){const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new M(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new M(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class Wa{convertValue(e,t="none"){switch(Be(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Me(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw x()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Ee(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertVectorValue(e){var t,n,r;const i=null===(r=null===(n=null===(t=e.fields)||void 0===t?void 0:t.value.arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map((e=>Pe(e.doubleValue)));return new oa(i)}convertGeoPoint(e){return new sa(Pe(e.latitude),Pe(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Fe(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Ve(e));default:return null}}convertTimestamp(e){const t=De(e);return new Q(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=J.fromString(e);N(Xr(n));const r=new je(n.get(1),n.get(3)),i=new te(n.popFirst(5));return r.isEqual(t)||A(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ka{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class qa extends Oa{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ha(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Na("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Ha extends qa{data(e={}){return super.data(e)}}class Ga{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Ka(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Ha(this._firestore,this._userDataWriter,n.key,n,new Ka(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new M(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new Ha(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Ka(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new Ha(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Ka(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:Qa(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Qa(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return x()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xa(e){e=Bo(e,Ho);const t=Bo(e.firestore,Jo);return Do(ea(t),e._key).then((n=>ic(t,e,n)))}class Ya extends Wa{constructor(e){super(),this.firestore=e}convertBytes(e){return new na(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ho(this.firestore,null,t)}}function Ja(e){e=Bo(e,qo);const t=Bo(e.firestore,Jo),n=ea(t),r=new Ya(t);return Da(e._query),Po(n,e._query).then((n=>new Ga(t,r,e,n)))}function Za(e,t,n){e=Bo(e,Ho);const r=Bo(e.firestore,Jo),i=za(e.converter,t,n);return rc(r,[pa(fa(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,xn.none())])}function ec(e,t,n,...r){e=Bo(e,Ho);const i=Bo(e.firestore,Jo),s=fa(i);let o;return o="string"==typeof(t=(0,c.Ku)(t))||t instanceof ra?ba(s,"updateDoc",e._key,t,n,r):ya(s,"updateDoc",e._key,t),rc(i,[o.toMutation(e._key,xn.exists(!0))])}function tc(e){return rc(Bo(e.firestore,Jo),[new zn(e._key,xn.none())])}function nc(e,t){const n=Bo(e.firestore,Jo),r=Xo(e),i=za(e.converter,t);return rc(n,[pa(fa(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,xn.exists(!1))]).then((()=>r))}function rc(e,t){return function(e,t){const n=new L;return e.asyncQueue.enqueueAndForget((async()=>ro(await xo(e),t,n))),n.promise}(ea(e),t)}function ic(e,t,n){const r=n.docs.get(t._key),i=new Ya(e);return new qa(e,i,t._key,r,new Ka(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(...e){return new va("arrayUnion",e)}new WeakMap;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){S=e}(s.MF),(0,s.om)(new o.uA("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new Jo(new j(e.getProvider("auth-internal")),new z(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new M(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new je(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,s.KO)(E,"4.7.0",e),(0,s.KO)(E,"4.7.0","esm2017")}()},5827:function(e,t,n){n.d(t,{A:function(){return y}});const r=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,i=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,s=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function o(e,t){if(!("__proto__"===e||"constructor"===e&&t&&"object"===typeof t&&"prototype"in t))return t;a(e)}function a(e){console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)}function c(e,t={}){if("string"!==typeof e)return e;const n=e.trim();if('"'===e[0]&&e.endsWith('"')&&!e.includes("\\"))return n.slice(1,-1);if(n.length<=9){const e=n.toLowerCase();if("true"===e)return!0;if("false"===e)return!1;if("undefined"===e)return;if("null"===e)return null;if("nan"===e)return Number.NaN;if("infinity"===e)return Number.POSITIVE_INFINITY;if("-infinity"===e)return Number.NEGATIVE_INFINITY}if(!s.test(e)){if(t.strict)throw new SyntaxError("[destr] Invalid JSON");return e}try{if(r.test(e)||i.test(e)){if(t.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(e,o)}return JSON.parse(e)}catch(a){if(t.strict)throw a;return e}}function u(e,t){if(null==e)return;let n=e;for(let r=0;r<t.length;r++){if(null==n||null==n[t[r]])return;n=n[t[r]]}return n}function l(e,t,n){if(0===n.length)return t;const r=n[0];return n.length>1&&(t=l("object"===typeof e&&null!==e&&Object.prototype.hasOwnProperty.call(e,r)?e[r]:Number.isInteger(Number(n[1]))?[]:{},t,Array.prototype.slice.call(n,1))),Number.isInteger(Number(r))&&Array.isArray(e)?e.slice()[r]:Object.assign({},e,{[r]:t})}function h(e,t){if(null==e||0===t.length)return e;if(1===t.length){if(null==e)return e;if(Number.isInteger(t[0])&&Array.isArray(e))return Array.prototype.slice.call(e,0).splice(t[0],1);const n={};for(const t in e)n[t]=e[t];return delete n[t[0]],n}if(null==e[t[0]]){if(Number.isInteger(t[0])&&Array.isArray(e))return Array.prototype.concat.call([],e);const n={};for(const t in e)n[t]=e[t];return n}return l(e,h(e[t[0]],Array.prototype.slice.call(t,1)),[t[0]])}function d(e,t){return t.map((e=>e.split("."))).map((t=>[t,u(e,t)])).filter((e=>!!e[1])).reduce(((e,t)=>l(e,t[1],t[0])),{})}function f(e,t){return t.map((e=>e.split("."))).reduce(((e,t)=>h(e,t)),e)}function p(e,{storage:t,serializer:n,key:r,debug:i,pick:s,omit:o,beforeHydrate:a,afterHydrate:c},u,l=!0){try{l&&a?.(u);const i=t.getItem(r);if(i){const t=n.deserialize(i),r=s?d(t,s):t,a=o?f(r,o):r;e.$patch(a)}l&&c?.(u)}catch(h){i&&console.error("[pinia-plugin-persistedstate]",h)}}function g(e,{storage:t,serializer:n,key:r,debug:i,pick:s,omit:o}){try{const i=s?d(e,s):e,a=o?f(i,o):i,c=n.serialize(a);t.setItem(r,c)}catch(a){i&&console.error("[pinia-plugin-persistedstate]",a)}}function m(e,t,n=e=>e()){const{pinia:r,store:i,options:{persist:s}}=e;if(!s)return;if(!(i.$id in r.state.value)){const e=r._s.get(i.$id.replace("__hot:",""));return void(e&&Promise.resolve().then((()=>e.$persist())))}const o=Array.isArray(s)?s:!0===s?[{}]:[s],a=o.map(t);i.$hydrate=({runHooks:t=!0}={})=>{a.forEach((r=>{n((()=>p(i,r,e,t)))}))},i.$persist=()=>{a.forEach((e=>{n((()=>g(i.$state,e)))}))},a.forEach((t=>{n((()=>p(i,t,e))),i.$subscribe(((e,r)=>n((()=>g(r,t)))),{detached:!0})}))}function v(e={}){return function(t){m(t,(n=>({key:(e.key?e.key:e=>e)(n.key??t.store.$id),debug:n.debug??e.debug??!1,serializer:n.serializer??e.serializer??{serialize:e=>JSON.stringify(e),deserialize:e=>c(e)},storage:n.storage??e.storage??window.localStorage,beforeHydrate:n.beforeHydrate,afterHydrate:n.afterHydrate,pick:n.pick,omit:n.omit})))}}var y=v()},657:function(e,t,n){n.d(t,{Ey:function(){return I},nY:function(){return j}});n(4114),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(4603),n(7566),n(8721);var r=n(144),i=!1;function s(e,t,n){return Array.isArray(e)?(e.length=Math.max(e.length,t),e.splice(t,1,n),n):(e[t]=n,n)}var o=n(6768);
/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */
let a;const c=e=>a=e,u=Symbol();function l(e){return e&&"object"===typeof e&&"[object Object]"===Object.prototype.toString.call(e)&&"function"!==typeof e.toJSON}var h;(function(e){e["direct"]="direct",e["patchObject"]="patch object",e["patchFunction"]="patch function"})(h||(h={}));const d="undefined"!==typeof window,f=(()=>"object"===typeof window&&window.window===window?window:"object"===typeof self&&self.self===self?self:"object"===typeof global&&global.global===global?global:"object"===typeof globalThis?globalThis:{HTMLElement:null})();function p(e,{autoBom:t=!1}={}){return t&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e}function g(e,t,n){const r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){w(r.response,t,n)},r.onerror=function(){console.error("could not download file")},r.send()}function m(e){const t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(n){}return t.status>=200&&t.status<=299}function v(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(t){const n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(n)}}const y="object"===typeof navigator?navigator:{userAgent:""},b=(()=>/Macintosh/.test(y.userAgent)&&/AppleWebKit/.test(y.userAgent)&&!/Safari/.test(y.userAgent))(),w=d?"undefined"!==typeof HTMLAnchorElement&&"download"in HTMLAnchorElement.prototype&&!b?_:"msSaveOrOpenBlob"in y?E:T:()=>{};function _(e,t="download",n){const r=document.createElement("a");r.download=t,r.rel="noopener","string"===typeof e?(r.href=e,r.origin!==location.origin?m(r.href)?g(e,t,n):(r.target="_blank",v(r)):v(r)):(r.href=URL.createObjectURL(e),setTimeout((function(){URL.revokeObjectURL(r.href)}),4e4),setTimeout((function(){v(r)}),0))}function E(e,t="download",n){if("string"===typeof e)if(m(e))g(e,t,n);else{const t=document.createElement("a");t.href=e,t.target="_blank",setTimeout((function(){v(t)}))}else navigator.msSaveOrOpenBlob(p(e,n),t)}function T(e,t,n,r){if(r=r||open("","_blank"),r&&(r.document.title=r.document.body.innerText="downloading..."),"string"===typeof e)return g(e,t,n);const i="application/octet-stream"===e.type,s=/constructor/i.test(String(f.HTMLElement))||"safari"in f,o=/CriOS\/[\d]+/.test(navigator.userAgent);if((o||i&&s||b)&&"undefined"!==typeof FileReader){const t=new FileReader;t.onloadend=function(){let e=t.result;if("string"!==typeof e)throw r=null,new Error("Wrong reader.result type");e=o?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location.assign(e),r=null},t.readAsDataURL(e)}else{const t=URL.createObjectURL(e);r?r.location.assign(t):location.href=t,r=null,setTimeout((function(){URL.revokeObjectURL(t)}),4e4)}}const{assign:S}=Object;function I(){const e=(0,r.uY)(!0),t=e.run((()=>(0,r.KR)({})));let n=[],s=[];const o=(0,r.IG)({install(e){c(o),i||(o._a=e,e.provide(u,o),e.config.globalProperties.$pinia=o,s.forEach((e=>n.push(e))),s=[])},use(e){return this._a||i?n.push(e):s.push(e),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return o}const C=()=>{};function k(e,t,n,i=C){e.push(t);const s=()=>{const n=e.indexOf(t);n>-1&&(e.splice(n,1),i())};return!n&&(0,r.o5)()&&(0,r.jr)(s),s}function A(e,...t){e.slice().forEach((e=>{e(...t)}))}const R=e=>e(),O=Symbol(),x=Symbol();function N(e,t){e instanceof Map&&t instanceof Map?t.forEach(((t,n)=>e.set(n,t))):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const i=t[n],s=e[n];l(s)&&l(i)&&e.hasOwnProperty(n)&&!(0,r.i9)(i)&&!(0,r.g8)(i)?e[n]=N(s,i):e[n]=i}return e}const D=Symbol(),P=new WeakMap;function M(e){return i?!P.has(e):!l(e)||!e.hasOwnProperty(D)}const{assign:L}=Object;function F(e){return!(!(0,r.i9)(e)||!e.effect)}function V(e,t,n,a){const{state:u,actions:l,getters:h}=t,d=n.state.value[e];let f;function p(){d||(i?s(n.state.value,e,u?u():{}):n.state.value[e]=u?u():{});const t=(0,r.QW)(n.state.value[e]);return L(t,l,Object.keys(h||{}).reduce(((t,s)=>(t[s]=(0,r.IG)((0,o.EW)((()=>{c(n);const t=n._s.get(e);if(!i||t._r)return h[s].call(t,t)}))),t)),{}))}return f=U(e,p,t,n,a,!0),f}function U(e,t,n={},a,u,l){let d;const f=L({actions:{}},n);const p={deep:!0};let g,m;let v,y=[],b=[];const w=a.state.value[e];l||w||(i?s(a.state.value,e,{}):a.state.value[e]={});(0,r.KR)({});let _;function E(t){let n;g=m=!1,"function"===typeof t?(t(a.state.value[e]),n={type:h.patchFunction,storeId:e,events:v}):(N(a.state.value[e],t),n={type:h.patchObject,payload:t,storeId:e,events:v});const r=_=Symbol();(0,o.dY)().then((()=>{_===r&&(g=!0)})),m=!0,A(y,n,a.state.value[e])}const T=l?function(){const{state:e}=n,t=e?e():{};this.$patch((e=>{L(e,t)}))}:C;function S(){d.stop(),y=[],b=[],a._s.delete(e)}const I=(t,n="")=>{if(O in t)return t[x]=n,t;const r=function(){c(a);const n=Array.from(arguments),i=[],s=[];function o(e){i.push(e)}function u(e){s.push(e)}let l;A(b,{args:n,name:r[x],store:P,after:o,onError:u});try{l=t.apply(this&&this.$id===e?this:P,n)}catch(h){throw A(s,h),h}return l instanceof Promise?l.then((e=>(A(i,e),e))).catch((e=>(A(s,e),Promise.reject(e)))):(A(i,l),l)};return r[O]=!0,r[x]=n,r},D={_p:a,$id:e,$onAction:k.bind(null,b),$patch:E,$reset:T,$subscribe(t,n={}){const r=k(y,t,n.detached,(()=>i())),i=d.run((()=>(0,o.wB)((()=>a.state.value[e]),(r=>{("sync"===n.flush?m:g)&&t({storeId:e,type:h.direct,events:v},r)}),L({},p,n))));return r},$dispose:S};i&&(D._r=!1);const P=(0,r.Kh)(D);a._s.set(e,P);const V=a._a&&a._a.runWithContext||R,U=V((()=>a._e.run((()=>(d=(0,r.uY)()).run((()=>t({action:I})))))));for(const o in U){const t=U[o];if((0,r.i9)(t)&&!F(t)||(0,r.g8)(t))l||(w&&M(t)&&((0,r.i9)(t)?t.value=w[o]:N(t,w[o])),i?s(a.state.value[e],o,t):a.state.value[e][o]=t);else if("function"===typeof t){const e=I(t,o);i?s(U,o,e):U[o]=e,f.actions[o]=t}else 0}return i?Object.keys(U).forEach((e=>{s(P,e,U[e])})):(L(P,U),L((0,r.ux)(P),U)),Object.defineProperty(P,"$state",{get:()=>a.state.value[e],set:e=>{E((t=>{L(t,e)}))}}),i&&(P._r=!0),a._p.forEach((e=>{L(P,d.run((()=>e({store:P,app:a._a,pinia:a,options:f}))))})),w&&l&&n.hydrate&&n.hydrate(P.$state,w),g=!0,m=!0,P}function j(e,t,n){let r,i;const s="function"===typeof t;function l(e,n){const l=(0,o.PS)();e=e||(l?(0,o.WQ)(u,null):null),e&&c(e),e=a,e._s.has(r)||(s?U(r,t,i,e):V(r,i,e));const h=e._s.get(r);return h}return"string"===typeof e?(r=e,i=s?n:t):(i=e,r=e.id),l.$id=r,l}},1387:function(e,t,n){n.d(t,{LA:function(){return ae},aE:function(){return rt}});n(4114),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698);var r=n(6768),i=n(144);
/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof document;function o(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const a=Object.assign;function c(e,t){const n={};for(const r in t){const i=t[r];n[r]=l(i)?i.map(e):e(i)}return n}const u=()=>{},l=Array.isArray;const h=/#/g,d=/&/g,f=/\//g,p=/=/g,g=/\?/g,m=/\+/g,v=/%5B/g,y=/%5D/g,b=/%5E/g,w=/%60/g,_=/%7B/g,E=/%7C/g,T=/%7D/g,S=/%20/g;function I(e){return encodeURI(""+e).replace(E,"|").replace(v,"[").replace(y,"]")}function C(e){return I(e).replace(_,"{").replace(T,"}").replace(b,"^")}function k(e){return I(e).replace(m,"%2B").replace(S,"+").replace(h,"%23").replace(d,"%26").replace(w,"`").replace(_,"{").replace(T,"}").replace(b,"^")}function A(e){return k(e).replace(p,"%3D")}function R(e){return I(e).replace(h,"%23").replace(g,"%3F")}function O(e){return null==e?"":R(e).replace(f,"%2F")}function x(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}const N=/\/$/,D=e=>e.replace(N,"");function P(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),s=t.slice(c+1,a>-1?a:t.length),i=e(s)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=B(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:x(o)}}function M(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function L(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function F(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&V(t.matched[r],n.matched[i])&&U(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function V(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function U(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!j(e[n],t[n]))return!1;return!0}function j(e,t){return l(e)?$(e,t):l(t)?$(t,e):e===t}function $(e,t){return l(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function B(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];".."!==i&&"."!==i||r.push("");let s,o,a=n.length-1;for(s=0;s<r.length;s++)if(o=r[s],"."!==o){if(".."!==o)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(s).join("/")}const W={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var z,K;(function(e){e["pop"]="pop",e["push"]="push"})(z||(z={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(K||(K={}));function q(e){if(!e)if(s){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),D(e)}const H=/^[^#]+#/;function G(e,t){return e.replace(H,"#")+t}function Q(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const X=()=>({left:window.scrollX,top:window.scrollY});function Y(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Q(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.scrollX,null!=t.top?t.top:window.scrollY)}function J(e,t){const n=history.state?history.state.position-t:-1;return n+e}const Z=new Map;function ee(e,t){Z.set(e,t)}function te(e){const t=Z.get(e);return Z.delete(e),t}let ne=()=>location.protocol+"//"+location.host;function re(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),L(n,"")}const o=L(n,e);return o+r+i}function ie(e,t,n,r){let i=[],s=[],o=null;const c=({state:s})=>{const a=re(e,location),c=n.value,u=t.value;let l=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);l=u?s.position-u.position:0}else r(a);i.forEach((e=>{e(n.value,c,{delta:l,type:z.pop,direction:l?l>0?K.forward:K.back:K.unknown})}))};function u(){o=n.value}function l(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t}function h(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:X()}),"")}function d(){for(const e of s)e();s=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:u,listen:l,destroy:d}}function se(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?X():null}}function oe(e){const{history:t,location:n}=window,r={value:re(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:ne()+e+r;try{t[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(e,n){const o=a({},t.state,se(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});s(e,o,!0),r.value=e}function c(e,n){const o=a({},i.value,t.state,{forward:e,scroll:X()});s(o.current,o,!0);const c=a({},se(r.value,e,null),{position:o.position+1},n);s(e,c,!1),r.value=e}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:c,replace:o}}function ae(e){e=q(e);const t=oe(e),n=ie(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=a({location:"",base:e,go:r,createHref:G.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function ce(e){return"string"===typeof e||e&&"object"===typeof e}function ue(e){return"string"===typeof e||"symbol"===typeof e}const le=Symbol("");var he;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(he||(he={}));function de(e,t){return a(new Error,{type:e,[le]:!0},t)}function fe(e,t){return e instanceof Error&&le in e&&(null==t||!!(e.type&t))}const pe="[^/]+?",ge={sensitive:!1,strict:!1,start:!0,end:!0},me=/[.+*?^${}()[\]/\\]/g;function ve(e,t){const n=a({},ge,t),r=[];let i=n.start?"^":"";const s=[];for(const a of e){const e=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let t=0;t<a.length;t++){const r=a[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(me,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:c,regexp:u}=r;s.push({name:e,repeatable:n,optional:c});const l=u||pe;if(l!==pe){o+=10;try{new RegExp(`(${l})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${e}" (${l}): `+h.message)}}let d=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;t||(d=c&&a.length<2?`(?:/${d})`:"/"+d),c&&(d+="?"),i+=d,o+=20,c&&(o+=-8),n&&(o+=-20),".*"===l&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function c(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function u(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,c=s in t?t[s]:"";if(l(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const u=l(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:o,score:r,keys:s,parse:c,stringify:u}}function ye(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function be(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=ye(r[n],i[n]);if(e)return e;n++}if(1===Math.abs(i.length-r.length)){if(we(r))return 1;if(we(i))return-1}return i.length-r.length}function we(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const _e={type:0,value:""},Ee=/[a-zA-Z0-9_]/;function Te(e){if(!e)return[[]];if("/"===e)return[[_e]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(0===n?s.push({type:0,value:u}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:Ee.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function Se(e,t,n){const r=ve(Te(e.path),n);const i=a(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function Ie(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function s(e,n,r){const i=!r,c=ke(e);c.aliasOf=r&&r.record;const h=xe(t,e),d=[c];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)d.push(a({},c,{components:r?r.record.components:c.components,path:e,aliasOf:r?r.record:c}))}let f,p;for(const t of d){const{path:a}=t;if(n&&"/"!==a[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(a&&r+a)}if(f=Se(t,n,h),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),i&&e.name&&!Re(f)&&o(e.name)),Pe(f)&&l(f),c.children){const e=c.children;for(let t=0;t<e.length;t++)s(e[t],f,r&&r.children[t])}r=r||f}return p?()=>{o(p)}:u}function o(e){if(ue(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function c(){return n}function l(e){const t=Ne(e,n);n.splice(t,0,e),e.record.name&&!Re(e)&&r.set(e.record.name,e)}function h(e,t){let i,s,o,c={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw de(1,{location:e});0,o=i.record.name,c=a(Ce(t.params,i.keys.filter((e=>!e.optional)).concat(i.parent?i.parent.keys.filter((e=>e.optional)):[]).map((e=>e.name))),e.params&&Ce(e.params,i.keys.map((e=>e.name)))),s=i.stringify(c)}else if(null!=e.path)s=e.path,i=n.find((e=>e.re.test(s))),i&&(c=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw de(1,{location:e,currentLocation:t});o=i.record.name,c=a({},t.params,e.params),s=i.stringify(c)}const u=[];let l=i;while(l)u.unshift(l.record),l=l.parent;return{name:o,path:s,params:c,matched:u,meta:Oe(u)}}function d(){n.length=0,r.clear()}return t=xe({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:h,removeRoute:o,clearRoutes:d,getRoutes:c,getRecordMatcher:i}}function Ce(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ke(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Ae(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Ae(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="object"===typeof n?n[r]:n;return t}function Re(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Oe(e){return e.reduce(((e,t)=>a(e,t.meta)),{})}function xe(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Ne(e,t){let n=0,r=t.length;while(n!==r){const i=n+r>>1,s=be(e,t[i]);s<0?r=i:n=i+1}const i=De(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function De(e){let t=e;while(t=t.parent)if(Pe(t)&&0===be(e,t))return t}function Pe({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Me(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(m," "),n=e.indexOf("="),s=x(n<0?e:e.slice(0,n)),o=n<0?null:x(e.slice(n+1));if(s in t){let e=t[s];l(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Le(e){let t="";for(let n in e){const r=e[n];if(n=A(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=l(r)?r.map((e=>e&&k(e))):[r&&k(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Fe(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=l(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Ve=Symbol(""),Ue=Symbol(""),je=Symbol(""),$e=Symbol(""),Be=Symbol("");function We(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function ze(e,t,n,r,i,s=e=>e()){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((a,c)=>{const u=e=>{!1===e?c(de(4,{from:n,to:t})):e instanceof Error?c(e):ce(e)?c(de(2,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&"function"===typeof e&&o.push(e),a())},l=s((()=>e.call(r&&r.instances[i],t,n,u)));let h=Promise.resolve(l);e.length<3&&(h=h.then(u)),h.catch((e=>c(e)))}))}function Ke(e,t,n,r,i=e=>e()){const s=[];for(const a of e){0;for(const e in a.components){let c=a.components[e];if("beforeRouteEnter"===t||a.instances[e])if(qe(c)){const o=c.__vccOpts||c,u=o[t];u&&s.push(ze(u,n,r,a,e,i))}else{let u=c();0,s.push((()=>u.then((s=>{if(!s)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${a.path}"`));const c=o(s)?s.default:s;a.components[e]=c;const u=c.__vccOpts||c,l=u[t];return l&&ze(l,n,r,a,e,i)()}))))}}}return s}function qe(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function He(e){const t=(0,r.WQ)(je),n=(0,r.WQ)($e);const s=(0,r.EW)((()=>{const n=(0,i.R1)(e.to);return t.resolve(n)})),o=(0,r.EW)((()=>{const{matched:e}=s.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(V.bind(null,r));if(o>-1)return o;const a=Je(e[t-2]);return t>1&&Je(r)===a&&i[i.length-1].path!==a?i.findIndex(V.bind(null,e[t-2])):o})),a=(0,r.EW)((()=>o.value>-1&&Ye(n.params,s.value.params))),c=(0,r.EW)((()=>o.value>-1&&o.value===n.matched.length-1&&U(n.params,s.value.params)));function l(n={}){return Xe(n)?t[(0,i.R1)(e.replace)?"replace":"push"]((0,i.R1)(e.to)).catch(u):Promise.resolve()}return{route:s,href:(0,r.EW)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:l}}const Ge=(0,r.pM)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:He,setup(e,{slots:t}){const n=(0,i.Kh)(He(e)),{options:s}=(0,r.WQ)(je),o=(0,r.EW)((()=>({[Ze(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ze(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&t.default(n);return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),Qe=Ge;function Xe(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ye(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!l(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Je(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ze=(e,t,n)=>null!=e?e:null!=t?t:n,et=(0,r.pM)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=(0,r.WQ)(Be),o=(0,r.EW)((()=>e.route||s.value)),c=(0,r.WQ)(Ue,0),u=(0,r.EW)((()=>{let e=(0,i.R1)(c);const{matched:t}=o.value;let n;while((n=t[e])&&!n.components)e++;return e})),l=(0,r.EW)((()=>o.value.matched[u.value]));(0,r.Gt)(Ue,(0,r.EW)((()=>u.value+1))),(0,r.Gt)(Ve,l),(0,r.Gt)(Be,o);const h=(0,i.KR)();return(0,r.wB)((()=>[h.value,l.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&V(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=o.value,s=e.name,c=l.value,u=c&&c.components[s];if(!u)return tt(n.default,{Component:u,route:i});const d=c.props[s],f=d?!0===d?i.params:"function"===typeof d?d(i):d:null,p=e=>{e.component.isUnmounted&&(c.instances[s]=null)},g=(0,r.h)(u,a({},f,t,{onVnodeUnmounted:p,ref:h}));return tt(n.default,{Component:g,route:i})||g}}});function tt(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const nt=et;function rt(e){const t=Ie(e.routes,e),n=e.parseQuery||Me,o=e.stringifyQuery||Le,h=e.history;const d=We(),f=We(),p=We(),g=(0,i.IJ)(W);let m=W;s&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const v=c.bind(null,(e=>""+e)),y=c.bind(null,O),b=c.bind(null,x);function w(e,n){let r,i;return ue(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function _(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function E(){return t.getRoutes().map((e=>e.record))}function T(e){return!!t.getRecordMatcher(e)}function S(e,r){if(r=a({},r||g.value),"string"===typeof e){const i=P(n,e,r.path),s=t.resolve({path:i.path},r),o=h.createHref(i.fullPath);return a(i,s,{params:b(s.params),hash:x(i.hash),redirectedFrom:void 0,href:o})}let i;if(null!=e.path)i=a({},e,{path:P(n,e.path,r.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];i=a({},e,{params:y(t)}),r.params=y(r.params)}const s=t.resolve(i,r),c=e.hash||"";s.params=v(b(s.params));const u=M(o,a({},e,{hash:C(c),path:s.path})),l=h.createHref(u);return a({fullPath:u,hash:c,query:o===Le?Fe(e.query):e.query||{}},s,{redirectedFrom:void 0,href:l})}function I(e){return"string"===typeof e?P(n,e,g.value.path):a({},e)}function k(e,t){if(m!==e)return de(8,{from:t,to:e})}function A(e){return D(e)}function R(e){return A(a(I(e),{replace:!0}))}function N(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=I(r):{path:r},r.params={}),a({query:e.query,hash:e.hash,params:null!=r.path?{}:e.params},r)}}function D(e,t){const n=m=S(e),r=g.value,i=e.state,s=e.force,c=!0===e.replace,u=N(n);if(u)return D(a(I(u),{state:"object"===typeof u?a({},i,u.state):i,force:s,replace:c}),t||n);const l=n;let h;return l.redirectedFrom=t,!s&&F(o,r,n)&&(h=de(16,{to:l,from:r}),re(r,r,!0,!1)),(h?Promise.resolve(h):U(l,r)).catch((e=>fe(e)?fe(e,2)?e:ne(e):Q(e,l,r))).then((e=>{if(e){if(fe(e,2))return D(a({replace:c},I(e.to),{state:"object"===typeof e.to?a({},i,e.to.state):i,force:s}),t||l)}else e=$(l,r,!0,c,i);return j(l,r,e),e}))}function L(e,t){const n=k(e,t);return n?Promise.reject(n):Promise.resolve()}function V(e){const t=oe.values().next().value;return t&&"function"===typeof t.runWithContext?t.runWithContext(e):e()}function U(e,t){let n;const[r,i,s]=it(e,t);n=Ke(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(ze(r,e,t))}));const o=L.bind(null,e,t);return n.push(o),ce(n).then((()=>{n=[];for(const r of d.list())n.push(ze(r,e,t));return n.push(o),ce(n)})).then((()=>{n=Ke(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(ze(r,e,t))}));return n.push(o),ce(n)})).then((()=>{n=[];for(const r of s)if(r.beforeEnter)if(l(r.beforeEnter))for(const i of r.beforeEnter)n.push(ze(i,e,t));else n.push(ze(r.beforeEnter,e,t));return n.push(o),ce(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=Ke(s,"beforeRouteEnter",e,t,V),n.push(o),ce(n)))).then((()=>{n=[];for(const r of f.list())n.push(ze(r,e,t));return n.push(o),ce(n)})).catch((e=>fe(e,8)?e:Promise.reject(e)))}function j(e,t,n){p.list().forEach((r=>V((()=>r(e,t,n)))))}function $(e,t,n,r,i){const o=k(e,t);if(o)return o;const c=t===W,u=s?history.state:{};n&&(r||c?h.replace(e.fullPath,a({scroll:c&&u&&u.scroll},i)):h.push(e.fullPath,i)),g.value=e,re(e,t,n,c),ne()}let B;function K(){B||(B=h.listen(((e,t,n)=>{if(!ae.listening)return;const r=S(e),i=N(r);if(i)return void D(a(i,{replace:!0}),r).catch(u);m=r;const o=g.value;s&&ee(J(o.fullPath,n.delta),X()),U(r,o).catch((e=>fe(e,12)?e:fe(e,2)?(D(e.to,r).then((e=>{fe(e,20)&&!n.delta&&n.type===z.pop&&h.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&h.go(-n.delta,!1),Q(e,r,o)))).then((e=>{e=e||$(r,o,!1),e&&(n.delta&&!fe(e,8)?h.go(-n.delta,!1):n.type===z.pop&&fe(e,20)&&h.go(-1,!1)),j(r,o,e)})).catch(u)})))}let q,H=We(),G=We();function Q(e,t,n){ne(e);const r=G.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function Z(){return q&&g.value!==W?Promise.resolve():new Promise(((e,t)=>{H.add([e,t])}))}function ne(e){return q||(q=!e,K(),H.list().forEach((([t,n])=>e?n(e):t())),H.reset()),e}function re(t,n,i,o){const{scrollBehavior:a}=e;if(!s||!a)return Promise.resolve();const c=!i&&te(J(t.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return(0,r.dY)().then((()=>a(t,n,c))).then((e=>e&&Y(e))).catch((e=>Q(e,t,n)))}const ie=e=>h.go(e);let se;const oe=new Set,ae={currentRoute:g,listening:!0,addRoute:w,removeRoute:_,clearRoutes:t.clearRoutes,hasRoute:T,getRoutes:E,resolve:S,options:e,push:A,replace:R,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:d.add,beforeResolve:f.add,afterEach:p.add,onError:G.add,isReady:Z,install(e){const t=this;e.component("RouterLink",Qe),e.component("RouterView",nt),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.R1)(g)}),s&&!se&&g.value===W&&(se=!0,A(h.location).catch((e=>{0})));const n={};for(const i in W)Object.defineProperty(n,i,{get:()=>g.value[i],enumerable:!0});e.provide(je,t),e.provide($e,(0,i.Gc)(n)),e.provide(Be,g);const r=e.unmount;oe.add(e),e.unmount=function(){oe.delete(e),oe.size<1&&(m=W,B&&B(),B=null,g.value=W,se=!1,q=!1),r()}}};function ce(e){return e.reduce(((e,t)=>e.then((()=>V(t)))),Promise.resolve())}return ae}function it(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>V(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>V(e,a)))||i.push(a))}return[n,r,i]}},266:function(e,t,n){n.d(t,{l:function(){return A}});var r=n(6768),i=n(2586);const s=(0,i.G)("v-alert-title");var o=n(554),a=n(7852),c=n(9669),u=n(2886),l=n(9262),h=n(2191),d=n(2542),f=n(7018),p=n(4581),g=n(5296),m=n(9788),v=n(8184),y=n(2067),b=n(3240),w=n(4663),_=n(7664),E=n(2428),T=n(144),S=n(4587),I=n(1247);const C=["success","info","warning","error"],k=(0,S.j)({border:{type:[Boolean,String],validator:e=>"boolean"===typeof e||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:p.TX,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>C.includes(e)},...(0,l.u)(),...(0,h.r)(),...(0,d.X)(),...(0,f.s)(),...(0,m.M)(),...(0,v.S)(),...(0,b.S)(),...(0,w.X)(),...(0,_.yx)(),...(0,E.gI)({variant:"flat"})},"VAlert"),A=(0,I.RW)()({name:"VAlert",props:k(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{emit:n,slots:i}=t;const l=(0,y.q)(e,"modelValue"),p=(0,r.EW)((()=>{if(!1!==e.icon)return e.type?e.icon??`$${e.type}`:e.icon})),w=(0,r.EW)((()=>({color:e.color??e.type,variant:e.variant}))),{themeClasses:S}=(0,_.NX)(e),{colorClasses:I,colorStyles:C,variantClasses:k}=(0,E.rn)(w),{densityClasses:A}=(0,h.Q)(e),{dimensionStyles:R}=(0,d.S)(e),{elevationClasses:O}=(0,f.j)(e),{locationStyles:x}=(0,m.z)(e),{positionClasses:N}=(0,v.J)(e),{roundedClasses:D}=(0,b.v)(e),{textColorClasses:P,textColorStyles:M}=(0,u.aH)((0,T.lW)(e,"borderColor")),{t:L}=(0,g.Ym)(),F=(0,r.EW)((()=>({"aria-label":L(e.closeLabel),onClick(e){l.value=!1,n("click:close",e)}})));return()=>{const t=!(!i.prepend&&!p.value),n=!(!i.title&&!e.title),u=!(!i.close&&!e.closable);return l.value&&(0,r.bF)(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${!0===e.border?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},S.value,I.value,A.value,O.value,N.value,D.value,k.value,e.class],style:[C.value,R.value,x.value,e.style],role:"alert"},{default:()=>[(0,E.wN)(!1,"v-alert"),e.border&&(0,r.bF)("div",{key:"border",class:["v-alert__border",P.value],style:M.value},null),t&&(0,r.bF)("div",{key:"prepend",class:"v-alert__prepend"},[i.prepend?(0,r.bF)(a.K,{key:"prepend-defaults",disabled:!p.value,defaults:{VIcon:{density:e.density,icon:p.value,size:e.prominent?44:28}}},i.prepend):(0,r.bF)(c.w,{key:"prepend-icon",density:e.density,icon:p.value,size:e.prominent?44:28},null)]),(0,r.bF)("div",{class:"v-alert__content"},[n&&(0,r.bF)(s,{key:"title"},{default:()=>[i.title?.()??e.title]}),i.text?.()??e.text,i.default?.()]),i.append&&(0,r.bF)("div",{key:"append",class:"v-alert__append"},[i.append()]),u&&(0,r.bF)("div",{key:"close",class:"v-alert__close"},[i.close?(0,r.bF)(a.K,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>[i.close?.({props:F.value})]}):(0,r.bF)(o.D,(0,r.v6)({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},F.value),null)])]})}}})},6450:function(e,t,n){n.d(t,{E:function(){return d}});var r=n(6768),i=n(9262),s=n(6984),o=n(5296),a=n(7664),c=n(4587),u=n(1247),l=n(4600);const h=(0,c.j)({...(0,i.u)(),...(0,s.N6)({fullHeight:!0}),...(0,a.yx)()},"VApp"),d=(0,u.RW)()({name:"VApp",props:h(),setup(e,t){let{slots:n}=t;const i=(0,a.NX)(e),{layoutClasses:c,getLayoutItem:u,items:h,layoutRef:d}=(0,s.Vz)(e),{rtlClasses:f}=(0,o.IA)();return(0,l.C)((()=>(0,r.bF)("div",{ref:d,class:["v-application",i.themeClasses.value,c.value,f.value,e.class],style:[e.style]},[(0,r.bF)("div",{class:"v-application__wrap"},[n.default?.()])]))),{getLayoutItem:u,items:h,theme:i}}})},3416:function(e,t,n){n.d(t,{y:function(){return w}});var r=n(6768),i=n(7852),s=n(9669),o=n(5126),a=n(9923),c=n(9262),u=n(2191),l=n(4581),h=n(3240),d=n(3378),f=n(4663),p=n(7664),g=n(2428),m=n(4587),v=n(1247),y=n(4600);const b=(0,m.j)({start:Boolean,end:Boolean,icon:l.TX,image:String,text:String,...(0,a.r)(),...(0,c.u)(),...(0,u.r)(),...(0,h.S)(),...(0,d.k)(),...(0,f.X)(),...(0,p.yx)(),...(0,g.gI)({variant:"flat"})},"VAvatar"),w=(0,v.RW)()({name:"VAvatar",props:b(),setup(e,t){let{slots:n}=t;const{themeClasses:c}=(0,p.NX)(e),{borderClasses:l}=(0,a.M)(e),{colorClasses:f,colorStyles:m,variantClasses:v}=(0,g.rn)(e),{densityClasses:b}=(0,u.Q)(e),{roundedClasses:w}=(0,h.v)(e),{sizeClasses:_,sizeStyles:E}=(0,d.X)(e);return(0,y.C)((()=>(0,r.bF)(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},c.value,l.value,f.value,b.value,w.value,_.value,v.value,e.class],style:[m.value,E.value,e.style]},{default:()=>[n.default?(0,r.bF)(i.K,{key:"content-defaults",defaults:{VImg:{cover:!0,src:e.image},VIcon:{icon:e.icon}}},{default:()=>[n.default()]}):e.image?(0,r.bF)(o.y,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?(0,r.bF)(s.w,{key:"icon",icon:e.icon},null):e.text,(0,g.wN)(!1,"v-avatar")]}))),{}}})},554:function(e,t,n){n.d(t,{D:function(){return j}});var r=n(6768),i=n(9923),s=n(9262),o=n(2858),a=n(2191),c=n(7018),u=n(3240),l=n(4663),h=n(7664),d=n(2428),f=n(144),p=n(4587),g=n(1247),m=n(4600);const v=(0,p.j)({baseColor:String,divided:Boolean,...(0,i.r)(),...(0,s.u)(),...(0,a.r)(),...(0,c.s)(),...(0,u.S)(),...(0,l.X)(),...(0,h.yx)(),...(0,d.gI)()},"VBtnGroup"),y=(0,g.RW)()({name:"VBtnGroup",props:v(),setup(e,t){let{slots:n}=t;const{themeClasses:s}=(0,h.NX)(e),{densityClasses:l}=(0,a.Q)(e),{borderClasses:d}=(0,i.M)(e),{elevationClasses:p}=(0,c.j)(e),{roundedClasses:g}=(0,u.v)(e);(0,o.Uh)({VBtn:{height:"auto",baseColor:(0,f.lW)(e,"baseColor"),color:(0,f.lW)(e,"color"),density:(0,f.lW)(e,"density"),flat:!0,variant:(0,f.lW)(e,"variant")}}),(0,m.C)((()=>(0,r.bF)(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},s.value,d.value,l.value,p.value,g.value,e.class],style:e.style},n)))}});var b=n(4690);const w=Symbol.for("vuetify:v-btn-toggle"),_=(0,p.j)({...v(),...(0,b.gL)()},"VBtnToggle");(0,g.RW)()({name:"VBtnToggle",props:_(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const{isSelected:i,next:s,prev:o,select:a,selected:c}=(0,b.dB)(e,w);return(0,m.C)((()=>{const t=y.filterProps(e);return(0,r.bF)(y,(0,r.v6)({class:["v-btn-toggle",e.class]},t,{style:e.style}),{default:()=>[n.default?.({isSelected:i,next:s,prev:o,select:a,selected:c})]})})),{next:s,prev:o,select:a}}});var E=n(7852),T=n(9669),S=n(2886),I=n(2144),C=n(5399),k=n(3378),A=n(9094);const R=(0,p.j)({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...(0,s.u)(),...(0,k.k)(),...(0,l.X)({tag:"div"}),...(0,h.yx)()},"VProgressCircular"),O=(0,g.RW)()({name:"VProgressCircular",props:R(),setup(e,t){let{slots:n}=t;const i=20,s=2*Math.PI*i,o=(0,f.KR)(),{themeClasses:a}=(0,h.NX)(e),{sizeClasses:c,sizeStyles:u}=(0,k.X)(e),{textColorClasses:l,textColorStyles:d}=(0,S.aH)((0,f.lW)(e,"color")),{textColorClasses:p,textColorStyles:g}=(0,S.aH)((0,f.lW)(e,"bgColor")),{intersectionRef:v,isIntersecting:y}=(0,I.B)(),{resizeRef:b,contentRect:w}=(0,C.w)(),_=(0,r.EW)((()=>Math.max(0,Math.min(100,parseFloat(e.modelValue))))),E=(0,r.EW)((()=>Number(e.width))),T=(0,r.EW)((()=>u.value?Number(e.size):w.value?w.value.width:Math.max(E.value,32))),R=(0,r.EW)((()=>i/(1-E.value/T.value)*2)),O=(0,r.EW)((()=>E.value/T.value*R.value)),x=(0,r.EW)((()=>(0,A.Dg)((100-_.value)/100*s)));return(0,r.nT)((()=>{v.value=o.value,b.value=o.value})),(0,m.C)((()=>(0,r.bF)(e.tag,{ref:o,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":y.value,"v-progress-circular--disable-shrink":"disable-shrink"===e.indeterminate},a.value,c.value,l.value,e.class],style:[u.value,d.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:_.value},{default:()=>[(0,r.bF)("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${R.value} ${R.value}`},[(0,r.bF)("circle",{class:["v-progress-circular__underlay",p.value],style:g.value,fill:"transparent",cx:"50%",cy:"50%",r:i,"stroke-width":O.value,"stroke-dasharray":s,"stroke-dashoffset":0},null),(0,r.bF)("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:i,"stroke-width":O.value,"stroke-dasharray":s,"stroke-dashoffset":x.value},null)]),n.default&&(0,r.bF)("div",{class:"v-progress-circular__content"},[n.default({value:_.value})])]}))),{}}});var x=n(2542),N=n(4581),D=n(773),P=n(9788),M=n(8184),L=n(6314);function F(e,t){(0,r.wB)((()=>e.isActive?.value),(n=>{e.isLink.value&&n&&t&&(0,r.dY)((()=>{t(!0)}))}),{immediate:!0})}var V=n(759);const U=(0,p.j)({active:{type:Boolean,default:void 0},activeColor:String,baseColor:String,symbol:{type:null,default:w},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:N.TX,appendIcon:N.TX,block:Boolean,readonly:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...(0,i.r)(),...(0,s.u)(),...(0,a.r)(),...(0,x.X)(),...(0,c.s)(),...(0,b.TX)(),...(0,D.gi)(),...(0,P.M)(),...(0,M.S)(),...(0,u.S)(),...(0,L.WC)(),...(0,k.k)(),...(0,l.X)({tag:"button"}),...(0,h.yx)(),...(0,d.gI)({variant:"elevated"})},"VBtn"),j=(0,g.RW)()({name:"VBtn",props:U(),emits:{"group:selected":e=>!0},setup(e,t){let{attrs:n,slots:s}=t;const{themeClasses:o}=(0,h.NX)(e),{borderClasses:l}=(0,i.M)(e),{densityClasses:f}=(0,a.Q)(e),{dimensionStyles:p}=(0,x.S)(e),{elevationClasses:g}=(0,c.j)(e),{loaderClasses:v}=(0,D.pn)(e),{locationStyles:y}=(0,P.z)(e),{positionClasses:w}=(0,M.J)(e),{roundedClasses:_}=(0,u.v)(e),{sizeClasses:S,sizeStyles:I}=(0,k.X)(e),C=(0,b.aO)(e,e.symbol,!1),A=(0,L.iE)(e,n),R=(0,r.EW)((()=>void 0!==e.active?e.active:A.isLink.value?A.isActive?.value:C?.isSelected.value)),N=(0,r.EW)((()=>R.value?e.activeColor??e.color:e.color)),U=(0,r.EW)((()=>{const t=C?.isSelected.value&&(!A.isLink.value||A.isActive?.value)||!C||A.isActive?.value;return{color:t?N.value??e.baseColor:e.baseColor,variant:e.variant}})),{colorClasses:j,colorStyles:$,variantClasses:B}=(0,d.rn)(U),W=(0,r.EW)((()=>C?.disabled.value||e.disabled)),z=(0,r.EW)((()=>"elevated"===e.variant&&!(e.disabled||e.flat||e.border))),K=(0,r.EW)((()=>{if(void 0!==e.value&&"symbol"!==typeof e.value)return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value}));function q(e){W.value||A.isLink.value&&(e.metaKey||e.ctrlKey||e.shiftKey||0!==e.button||"_blank"===n.target)||(A.navigate?.(e),C?.toggle())}return F(A,C?.select),(0,m.C)((()=>{const t=A.isLink.value?"a":e.tag,n=!(!e.prependIcon&&!s.prepend),i=!(!e.appendIcon&&!s.append),a=!(!e.icon||!0===e.icon);return(0,r.bo)((0,r.bF)(t,{type:"a"===t?void 0:"button",class:["v-btn",C?.selectedClass.value,{"v-btn--active":R.value,"v-btn--block":e.block,"v-btn--disabled":W.value,"v-btn--elevated":z.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--readonly":e.readonly,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},o.value,l.value,j.value,f.value,g.value,v.value,w.value,_.value,S.value,B.value,e.class],style:[$.value,p.value,y.value,I.value,e.style],"aria-busy":!!e.loading||void 0,disabled:W.value||void 0,href:A.href.value,tabindex:e.loading||e.readonly?-1:void 0,onClick:q,value:K.value},{default:()=>[(0,d.wN)(!0,"v-btn"),!e.icon&&n&&(0,r.bF)("span",{key:"prepend",class:"v-btn__prepend"},[s.prepend?(0,r.bF)(E.K,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},s.prepend):(0,r.bF)(T.w,{key:"prepend-icon",icon:e.prependIcon},null)]),(0,r.bF)("span",{class:"v-btn__content","data-no-activator":""},[!s.default&&a?(0,r.bF)(T.w,{key:"content-icon",icon:e.icon},null):(0,r.bF)(E.K,{key:"content-defaults",disabled:!a,defaults:{VIcon:{icon:e.icon}}},{default:()=>[s.default?.()??e.text]})]),!e.icon&&i&&(0,r.bF)("span",{key:"append",class:"v-btn__append"},[s.append?(0,r.bF)(E.K,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},s.append):(0,r.bF)(T.w,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&(0,r.bF)("span",{key:"loader",class:"v-btn__loader"},[s.loader?.()??(0,r.bF)(O,{color:"boolean"===typeof e.loading?void 0:e.loading,indeterminate:!0,width:"2"},null)])]}),[[V.n,!W.value&&e.ripple,"",{center:!!e.icon}]])})),{group:C}}})},2729:function(e,t,n){n.d(t,{J:function(){return P}});var r=n(6768),i=n(3745),s=n(9262),o=n(4663),a=n(4587),c=n(1247),u=n(4600);const l=(0,a.j)({opacity:[Number,String],...(0,s.u)(),...(0,o.X)()},"VCardSubtitle"),h=(0,c.RW)()({name:"VCardSubtitle",props:l(),setup(e,t){let{slots:n}=t;return(0,u.C)((()=>(0,r.bF)(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},n))),{}}});var d=n(1606),f=n(3416),p=n(7852),g=n(9669),m=n(2191),v=n(4581);const y=(0,a.j)({appendAvatar:String,appendIcon:v.TX,prependAvatar:String,prependIcon:v.TX,subtitle:[String,Number],title:[String,Number],...(0,s.u)(),...(0,m.r)()},"VCardItem"),b=(0,c.RW)()({name:"VCardItem",props:y(),setup(e,t){let{slots:n}=t;return(0,u.C)((()=>{const t=!(!e.prependAvatar&&!e.prependIcon),i=!(!t&&!n.prepend),s=!(!e.appendAvatar&&!e.appendIcon),o=!(!s&&!n.append),a=!(null==e.title&&!n.title),c=!(null==e.subtitle&&!n.subtitle);return(0,r.bF)("div",{class:["v-card-item",e.class],style:e.style},[i&&(0,r.bF)("div",{key:"prepend",class:"v-card-item__prepend"},[n.prepend?(0,r.bF)(p.K,{key:"prepend-defaults",disabled:!t,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},n.prepend):(0,r.bF)(r.FK,null,[e.prependAvatar&&(0,r.bF)(f.y,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&(0,r.bF)(g.w,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),(0,r.bF)("div",{class:"v-card-item__content"},[a&&(0,r.bF)(d.r,{key:"title"},{default:()=>[n.title?.()??e.title]}),c&&(0,r.bF)(h,{key:"subtitle"},{default:()=>[n.subtitle?.()??e.subtitle]}),n.default?.()]),o&&(0,r.bF)("div",{key:"append",class:"v-card-item__append"},[n.append?(0,r.bF)(p.K,{key:"append-defaults",disabled:!s,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},n.append):(0,r.bF)(r.FK,null,[e.appendIcon&&(0,r.bF)(g.w,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&(0,r.bF)(f.y,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])})),{}}});var w=n(697),_=n(5126),E=n(9923),T=n(2542),S=n(7018),I=n(773),C=n(9788),k=n(8184),A=n(3240),R=n(6314),O=n(7664),x=n(2428),N=n(759);const D=(0,a.j)({appendAvatar:String,appendIcon:v.TX,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:v.TX,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...(0,E.r)(),...(0,s.u)(),...(0,m.r)(),...(0,T.X)(),...(0,S.s)(),...(0,I.gi)(),...(0,C.M)(),...(0,k.S)(),...(0,A.S)(),...(0,R.WC)(),...(0,o.X)(),...(0,O.yx)(),...(0,x.gI)({variant:"elevated"})},"VCard"),P=(0,c.RW)()({name:"VCard",directives:{Ripple:N.n},props:D(),setup(e,t){let{attrs:n,slots:s}=t;const{themeClasses:o}=(0,O.NX)(e),{borderClasses:a}=(0,E.M)(e),{colorClasses:c,colorStyles:l,variantClasses:h}=(0,x.rn)(e),{densityClasses:d}=(0,m.Q)(e),{dimensionStyles:f}=(0,T.S)(e),{elevationClasses:g}=(0,S.j)(e),{loaderClasses:v}=(0,I.pn)(e),{locationStyles:y}=(0,C.z)(e),{positionClasses:N}=(0,k.J)(e),{roundedClasses:D}=(0,A.v)(e),P=(0,R.iE)(e,n),M=(0,r.EW)((()=>!1!==e.link&&P.isLink.value)),L=(0,r.EW)((()=>!e.disabled&&!1!==e.link&&(e.link||P.isClickable.value)));return(0,u.C)((()=>{const t=M.value?"a":e.tag,n=!(!s.title&&null==e.title),u=!(!s.subtitle&&null==e.subtitle),m=n||u,E=!!(s.append||e.appendAvatar||e.appendIcon),T=!!(s.prepend||e.prependAvatar||e.prependIcon),S=!(!s.image&&!e.image),C=m||T||E,k=!(!s.text&&null==e.text);return(0,r.bo)((0,r.bF)(t,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":L.value},o.value,a.value,c.value,d.value,g.value,v.value,N.value,D.value,h.value,e.class],style:[l.value,f.value,y.value,e.style],href:P.href.value,onClick:L.value&&P.navigate,tabindex:e.disabled?-1:void 0},{default:()=>[S&&(0,r.bF)("div",{key:"image",class:"v-card__image"},[s.image?(0,r.bF)(p.K,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},s.image):(0,r.bF)(_.y,{key:"image-img",cover:!0,src:e.image},null)]),(0,r.bF)(I.E2,{name:"v-card",active:!!e.loading,color:"boolean"===typeof e.loading?void 0:e.loading},{default:s.loader}),C&&(0,r.bF)(b,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:s.item,prepend:s.prepend,title:s.title,subtitle:s.subtitle,append:s.append}),k&&(0,r.bF)(w.O,{key:"text"},{default:()=>[s.text?.()??e.text]}),s.default?.(),s.actions&&(0,r.bF)(i.S,null,{default:s.actions}),(0,x.wN)(L.value,"v-card")]}),[[(0,r.gN)("ripple"),L.value&&e.ripple]])})),{}}})},3745:function(e,t,n){n.d(t,{S:function(){return c}});var r=n(6768),i=n(9262),s=n(2858),o=n(1247),a=n(4600);const c=(0,o.RW)()({name:"VCardActions",props:(0,i.u)(),setup(e,t){let{slots:n}=t;return(0,s.Uh)({VBtn:{slim:!0,variant:"text"}}),(0,a.C)((()=>(0,r.bF)("div",{class:["v-card-actions",e.class],style:e.style},[n.default?.()]))),{}}})},697:function(e,t,n){n.d(t,{O:function(){return l}});var r=n(6768),i=n(9262),s=n(4663),o=n(4587),a=n(1247),c=n(4600);const u=(0,o.j)({opacity:[Number,String],...(0,i.u)(),...(0,s.X)()},"VCardText"),l=(0,a.RW)()({name:"VCardText",props:u(),setup(e,t){let{slots:n}=t;return(0,c.C)((()=>(0,r.bF)(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},n))),{}}})},1606:function(e,t,n){n.d(t,{r:function(){return i}});var r=n(2586);const i=(0,r.G)("v-card-title")},7852:function(e,t,n){n.d(t,{K:function(){return c}});var r=n(2858),i=n(144),s=n(4587),o=n(1247);const a=(0,s.j)({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),c=(0,o.RW)(!1)({name:"VDefaultsProvider",props:a(),setup(e,t){let{slots:n}=t;const{defaults:s,disabled:o,reset:a,root:c,scoped:u}=(0,i.QW)(e);return(0,r.Uh)(s,{reset:a,root:c,scoped:u,disabled:o}),()=>n.default?.()}})},5526:function(e,t,n){n.d(t,{B:function(){return v}});n(4114),n(5792);var r=n(9262),i=n(8353),s=n(4663),o=n(4232),a=n(6768),c=n(4587),u=n(1247);const l=(()=>i.fi.reduce(((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e)),{}))(),h=(()=>i.fi.reduce(((e,t)=>{const n="offset"+(0,o.ZH)(t);return e[n]={type:[String,Number],default:null},e}),{}))(),d=(()=>i.fi.reduce(((e,t)=>{const n="order"+(0,o.ZH)(t);return e[n]={type:[String,Number],default:null},e}),{}))(),f={col:Object.keys(l),offset:Object.keys(h),order:Object.keys(d)};function p(e,t,n){let r=e;if(null!=n&&!1!==n){if(t){const n=t.replace(e,"");r+=`-${n}`}return"col"===e&&(r="v-"+r),"col"!==e||""!==n&&!0!==n?(r+=`-${n}`,r.toLowerCase()):r.toLowerCase()}}const g=["auto","start","end","center","baseline","stretch"],m=(0,c.j)({cols:{type:[Boolean,String,Number],default:!1},...l,offset:{type:[String,Number],default:null},...h,order:{type:[String,Number],default:null},...d,alignSelf:{type:String,default:null,validator:e=>g.includes(e)},...(0,r.u)(),...(0,s.X)()},"VCol"),v=(0,u.RW)()({name:"VCol",props:m(),setup(e,t){let{slots:n}=t;const r=(0,a.EW)((()=>{const t=[];let n;for(n in f)f[n].forEach((r=>{const i=e[r],s=p(n,r,i);s&&t.push(s)}));const r=t.some((e=>e.startsWith("v-col-")));return t.push({"v-col":!r||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),t}));return()=>(0,a.h)(e.tag,{class:[r.value,e.class],style:e.style},n.default?.())}})},3813:function(e,t,n){n.d(t,{I:function(){return d}});var r=n(6768),i=(n(5792),n(9262)),s=n(2542),o=n(5296),a=n(4663),c=n(4587),u=n(1247),l=n(4600);const h=(0,c.j)({fluid:{type:Boolean,default:!1},...(0,i.u)(),...(0,s.X)(),...(0,a.X)()},"VContainer"),d=(0,u.RW)()({name:"VContainer",props:h(),setup(e,t){let{slots:n}=t;const{rtlClasses:i}=(0,o.IA)(),{dimensionStyles:a}=(0,s.S)(e);return(0,l.C)((()=>(0,r.bF)(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},i.value,e.class],style:[a.value,e.style]},n))),{}}})},9669:function(e,t,n){n.d(t,{w:function(){return m}});var r=n(6768),i=n(2886),s=n(9262),o=n(4581),a=n(3378),c=n(4663),u=n(7664),l=n(144),h=n(4587),d=n(1247),f=n(4600),p=n(9094);const g=(0,h.j)({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:o.TX,...(0,s.u)(),...(0,a.k)(),...(0,c.X)({tag:"i"}),...(0,u.yx)()},"VIcon"),m=(0,d.RW)()({name:"VIcon",props:g(),setup(e,t){let{attrs:n,slots:s}=t;const c=(0,l.KR)(),{themeClasses:h}=(0,u.NX)(e),{iconData:d}=(0,o.bD)((0,r.EW)((()=>c.value||e.icon))),{sizeClasses:g}=(0,a.X)(e),{textColorClasses:m,textColorStyles:v}=(0,i.aH)((0,l.lW)(e,"color"));return(0,f.C)((()=>{const t=s.default?.();t&&(c.value=(0,p.e9)(t).filter((e=>e.type===r.EY&&e.children&&"string"===typeof e.children))[0]?.children);const i=!(!n.onClick&&!n.onClickOnce);return(0,r.bF)(d.value.component,{tag:e.tag,icon:d.value.icon,class:["v-icon","notranslate",h.value,g.value,m.value,{"v-icon--clickable":i,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[g.value?void 0:{fontSize:(0,p.Dg)(e.size),height:(0,p.Dg)(e.size),width:(0,p.Dg)(e.size)},v.value,e.style],role:i?"button":void 0,"aria-hidden":!i,tabindex:i?e.disabled?-1:0:void 0},{default:()=>[t]})})),{}}})},5126:function(e,t,n){n.d(t,{y:function(){return E}});var r=n(6768),i=n(9262),s=n(2542),o=n(4587),a=n(1247),c=n(4600);function u(e){return{aspectStyles:(0,r.EW)((()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0}))}}const l=(0,o.j)({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...(0,i.u)(),...(0,s.X)()},"VResponsive"),h=(0,a.RW)()({name:"VResponsive",props:l(),setup(e,t){let{slots:n}=t;const{aspectStyles:i}=u(e),{dimensionStyles:o}=(0,s.S)(e);return(0,c.C)((()=>(0,r.bF)("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[o.value,e.style]},[(0,r.bF)("div",{class:"v-responsive__sizer",style:i.value},null),n.additional?.(),n.default&&(0,r.bF)("div",{class:["v-responsive__content",e.contentClass]},[n.default()])]))),{}}});var d=n(2886),f=n(3240),p=n(4464),g=n(9629),m=n(144),v=n(5130),y=n(7861),b=n(6993),w=n(9094);const _=(0,o.j)({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...l(),...(0,i.u)(),...(0,f.S)(),...(0,p.m)()},"VImg"),E=(0,a.RW)()({name:"VImg",directives:{intersect:g.A},props:_(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:n,slots:i}=t;const{backgroundColorClasses:s,backgroundColorStyles:o}=(0,d.z6)((0,m.lW)(e,"color")),{roundedClasses:a}=(0,f.v)(e),u=(0,y.nI)("VImg"),l=(0,m.IJ)(""),g=(0,m.KR)(),_=(0,m.IJ)(e.eager?"loading":"idle"),E=(0,m.IJ)(),T=(0,m.IJ)(),S=(0,r.EW)((()=>e.src&&"object"===typeof e.src?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)})),I=(0,r.EW)((()=>S.value.aspect||E.value/T.value||0));function C(t){if((!e.eager||!t)&&(!b.tB||t||e.eager)){if(_.value="loading",S.value.lazySrc){const e=new Image;e.src=S.value.lazySrc,x(e,null)}S.value.src&&(0,r.dY)((()=>{n("loadstart",g.value?.currentSrc||S.value.src),setTimeout((()=>{if(!u.isUnmounted)if(g.value?.complete){if(g.value.naturalWidth||A(),"error"===_.value)return;I.value||x(g.value,null),"loading"===_.value&&k()}else I.value||x(g.value),R()}))}))}}function k(){u.isUnmounted||(R(),x(g.value),_.value="loaded",n("load",g.value?.currentSrc||S.value.src))}function A(){u.isUnmounted||(_.value="error",n("error",g.value?.currentSrc||S.value.src))}function R(){const e=g.value;e&&(l.value=e.currentSrc||e.src)}(0,r.wB)((()=>e.src),(()=>{C("idle"!==_.value)})),(0,r.wB)(I,((e,t)=>{!e&&t&&g.value&&x(g.value)})),(0,r.KC)((()=>C()));let O=-1;function x(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;const n=()=>{if(clearTimeout(O),u.isUnmounted)return;const{naturalHeight:r,naturalWidth:i}=e;r||i?(E.value=i,T.value=r):e.complete||"loading"!==_.value||null==t?(e.currentSrc.endsWith(".svg")||e.currentSrc.startsWith("data:image/svg+xml"))&&(E.value=1,T.value=1):O=window.setTimeout(n,t)};n()}(0,r.xo)((()=>{clearTimeout(O)}));const N=(0,r.EW)((()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover}))),D=()=>{if(!S.value.src||"idle"===_.value)return null;const t=(0,r.bF)("img",{class:["v-img__img",N.value],style:{objectPosition:e.position},src:S.value.src,srcset:S.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:g,onLoad:k,onError:A},null),n=i.sources?.();return(0,r.bF)(p.M,{transition:e.transition,appear:!0},{default:()=>[(0,r.bo)(n?(0,r.bF)("picture",{class:"v-img__picture"},[n,t]):t,[[v.aG,"loaded"===_.value]])]})},P=()=>(0,r.bF)(p.M,{transition:e.transition},{default:()=>[S.value.lazySrc&&"loaded"!==_.value&&(0,r.bF)("img",{class:["v-img__img","v-img__img--preload",N.value],style:{objectPosition:e.position},src:S.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),M=()=>i.placeholder?(0,r.bF)(p.M,{transition:e.transition,appear:!0},{default:()=>[("loading"===_.value||"error"===_.value&&!i.error)&&(0,r.bF)("div",{class:"v-img__placeholder"},[i.placeholder()])]}):null,L=()=>i.error?(0,r.bF)(p.M,{transition:e.transition,appear:!0},{default:()=>["error"===_.value&&(0,r.bF)("div",{class:"v-img__error"},[i.error()])]}):null,F=()=>e.gradient?(0,r.bF)("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,V=(0,m.IJ)(!1);{const e=(0,r.wB)(I,(t=>{t&&(requestAnimationFrame((()=>{requestAnimationFrame((()=>{V.value=!0}))})),e())}))}return(0,c.C)((()=>{const t=h.filterProps(e);return(0,r.bo)((0,r.bF)(h,(0,r.v6)({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!V.value},s.value,a.value,e.class],style:[{width:(0,w.Dg)("auto"===e.width?E.value:e.width)},o.value,e.style]},t,{aspectRatio:I.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>(0,r.bF)(r.FK,null,[(0,r.bF)(D,null,null),(0,r.bF)(P,null,null),(0,r.bF)(F,null,null),(0,r.bF)(M,null,null),(0,r.bF)(L,null,null)]),default:i.default}),[[(0,r.gN)("intersect"),{handler:C,options:e.options},null,{once:!0}]])})),{currentSrc:l,image:g,state:_,naturalWidth:E,naturalHeight:T}}})},8477:function(e,t,n){n.d(t,{Y:function(){return f}});var r=n(6768),i=n(9262),s=n(2542),o=n(6984),a=n(6747),c=n(4663),u=n(4587),l=n(1247),h=n(4600);const d=(0,u.j)({scrollable:Boolean,...(0,i.u)(),...(0,s.X)(),...(0,c.X)({tag:"main"})},"VMain"),f=(0,l.RW)()({name:"VMain",props:d(),setup(e,t){let{slots:n}=t;const{dimensionStyles:i}=(0,s.S)(e),{mainStyles:c}=(0,o.gK)(),{ssrBootStyles:u}=(0,a.K)();return(0,h.C)((()=>(0,r.bF)(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[c.value,u.value,i.value,e.style]},{default:()=>[e.scrollable?(0,r.bF)("div",{class:"v-main__scroller"},[n.default?.()]):n.default?.()]}))),{}}})},9923:function(e,t,n){n.d(t,{M:function(){return c},r:function(){return a}});n(4114);var r=n(6768),i=n(144),s=n(4587),o=n(7861);const a=(0,s.j)({border:[Boolean,Number,String]},"border");function c(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,o.MR)();const n=(0,r.EW)((()=>{const n=(0,i.i9)(e)?e.value:e.border,r=[];if(!0===n||""===n)r.push(`${t}--border`);else if("string"===typeof n||0===n)for(const e of String(n).split(" "))r.push(`border-${e}`);return r}));return{borderClasses:n}}},2886:function(e,t,n){n.d(t,{aH:function(){return c},by:function(){return a},z6:function(){return u}});n(4114);var r=n(6768),i=n(144),s=n(9094),o=n(4239);function a(e){return(0,s.yc)((()=>{const t=[],n={};if(e.value.background)if((0,o.VP)(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text&&(0,o.gP)(e.value.background)){const t=(0,o.H0)(e.value.background);if(null==t.a||1===t.a){const e=(0,o.Ot)(t);n.color=e,n.caretColor=e}}}else t.push(`bg-${e.value.background}`);return e.value.text&&((0,o.VP)(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:n}}))}function c(e,t){const n=(0,r.EW)((()=>({text:(0,i.i9)(e)?e.value:t?e[t]:null}))),{colorClasses:s,colorStyles:o}=a(n);return{textColorClasses:s,textColorStyles:o}}function u(e,t){const n=(0,r.EW)((()=>({background:(0,i.i9)(e)?e.value:t?e[t]:null}))),{colorClasses:s,colorStyles:o}=a(n);return{backgroundColorClasses:s,backgroundColorStyles:o}}},9262:function(e,t,n){n.d(t,{u:function(){return i}});var r=n(4587);const i=(0,r.j)({class:[String,Array,Object],style:{type:[String,Array,Object],default:null}},"component")},2858:function(e,t,n){n.d(t,{hj:function(){return c},Ty:function(){return u},Y8:function(){return l},bL:function(){return f},Uh:function(){return h}});var r=n(144),i=n(6768),s=n(7861),o=n(9094);function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,s.nI)("injectSelf");const{provides:n}=t;if(n&&e in n)return n[e]}const c=Symbol.for("vuetify:defaults");function u(e){return(0,r.KR)(e)}function l(){const e=(0,i.WQ)(c);if(!e)throw new Error("[Vuetify] Could not find defaults instance");return e}function h(e,t){const n=l(),s=(0,r.KR)(e),a=(0,i.EW)((()=>{const e=(0,r.R1)(t?.disabled);if(e)return n.value;const i=(0,r.R1)(t?.scoped),a=(0,r.R1)(t?.reset),c=(0,r.R1)(t?.root);if(null==s.value&&!(i||a||c))return n.value;let u=(0,o.D9)(s.value,{prev:n.value});if(i)return u;if(a||c){const e=Number(a||1/0);for(let t=0;t<=e;t++){if(!u||!("prev"in u))break;u=u.prev}return u&&"string"===typeof c&&c in u&&(u=(0,o.D9)((0,o.D9)(u,{prev:u}),u[c])),u}return u.prev?(0,o.D9)(u.prev,u):u}));return(0,i.Gt)(c,a),a}function d(e,t){return"undefined"!==typeof e.props?.[t]||"undefined"!==typeof e.props?.[(0,o.fX)(t)]}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l();const u=(0,s.nI)("useDefaults");if(t=t??u.type.name??u.type.__name,!t)throw new Error("[Vuetify] Could not determine component name");const h=(0,i.EW)((()=>n.value?.[e._as??t])),f=new Proxy(e,{get(e,t){const r=Reflect.get(e,t);return"class"===t||"style"===t?[h.value?.[t],r].filter((e=>null!=e)):"string"!==typeof t||d(u.vnode,t)?r:void 0!==h.value?.[t]?h.value?.[t]:void 0!==n.value?.global?.[t]?n.value?.global?.[t]:r}}),p=(0,r.IJ)();function g(){const e=a(c,u);(0,i.Gt)(c,(0,i.EW)((()=>p.value?(0,o.D9)(e?.value??{},p.value):e?.value)))}return(0,i.nT)((()=>{if(h.value){const e=Object.entries(h.value).filter((e=>{let[t]=e;return t.startsWith(t[0].toUpperCase())}));p.value=e.length?Object.fromEntries(e):void 0}else p.value=void 0})),{props:f,provideSubDefaults:g}}},2191:function(e,t,n){n.d(t,{Q:function(){return c},r:function(){return a}});var r=n(6768),i=n(4587),s=n(7861);const o=[null,"default","comfortable","compact"],a=(0,i.j)({density:{type:String,default:"default",validator:e=>o.includes(e)}},"density");function c(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,s.MR)();const n=(0,r.EW)((()=>`${t}--density-${e.density}`));return{densityClasses:n}}},2542:function(e,t,n){n.d(t,{S:function(){return a},X:function(){return o}});var r=n(6768),i=n(4587),s=n(9094);const o=(0,i.j)({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function a(e){const t=(0,r.EW)((()=>{const t={},n=(0,s.Dg)(e.height),r=(0,s.Dg)(e.maxHeight),i=(0,s.Dg)(e.maxWidth),o=(0,s.Dg)(e.minHeight),a=(0,s.Dg)(e.minWidth),c=(0,s.Dg)(e.width);return null!=n&&(t.height=n),null!=r&&(t.maxHeight=r),null!=i&&(t.maxWidth=i),null!=o&&(t.minHeight=o),null!=a&&(t.minWidth=a),null!=c&&(t.width=c),t}));return{dimensionStyles:t}}},8353:function(e,t,n){n.d(t,{TX:function(){return l},XH:function(){return m},_F:function(){return y},fi:function(){return u},hx:function(){return v}});var r=n(144),i=n(6768),s=n(9094),o=n(4587),a=n(7861),c=n(6993);const u=["sm","md","lg","xl","xxl"],l=Symbol.for("vuetify:display"),h={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return(0,s.D9)(h,e)};function f(e){return c.ZK&&!e?window.innerWidth:"object"===typeof e&&e.clientWidth||0}function p(e){return c.ZK&&!e?window.innerHeight:"object"===typeof e&&e.clientHeight||0}function g(e){const t=c.ZK&&!e?window.navigator.userAgent:"ssr";function n(e){return Boolean(t.match(e))}const r=n(/android/i),i=n(/iphone|ipad|ipod/i),s=n(/cordova/i),o=n(/electron/i),a=n(/chrome/i),u=n(/edge/i),l=n(/firefox/i),h=n(/opera/i),d=n(/win/i),f=n(/mac/i),p=n(/linux/i);return{android:r,ios:i,cordova:s,electron:o,chrome:a,edge:u,firefox:l,opera:h,win:d,mac:f,linux:p,touch:c.vd,ssr:"ssr"===t}}function m(e,t){const{thresholds:n,mobileBreakpoint:s}=d(e),o=(0,r.IJ)(p(t)),a=(0,r.IJ)(g(t)),u=(0,r.Kh)({}),l=(0,r.IJ)(f(t));function h(){o.value=p(),l.value=f()}function m(){h(),a.value=g()}return(0,i.nT)((()=>{const e=l.value<n.sm,t=l.value<n.md&&!e,r=l.value<n.lg&&!(t||e),i=l.value<n.xl&&!(r||t||e),c=l.value<n.xxl&&!(i||r||t||e),h=l.value>=n.xxl,d=e?"xs":t?"sm":r?"md":i?"lg":c?"xl":"xxl",f="number"===typeof s?s:n[s],p=l.value<f;u.xs=e,u.sm=t,u.md=r,u.lg=i,u.xl=c,u.xxl=h,u.smAndUp=!e,u.mdAndUp=!(e||t),u.lgAndUp=!(e||t||r),u.xlAndUp=!(e||t||r||i),u.smAndDown=!(r||i||c||h),u.mdAndDown=!(i||c||h),u.lgAndDown=!(c||h),u.xlAndDown=!h,u.name=d,u.height=o.value,u.width=l.value,u.mobile=p,u.mobileBreakpoint=s,u.platform=a.value,u.thresholds=n})),c.ZK&&window.addEventListener("resize",h,{passive:!0}),{...(0,r.QW)(u),update:m,ssr:!!t}}const v=(0,o.j)({mobile:{type:Boolean,default:!1},mobileBreakpoint:[Number,String]},"display");function y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,a.MR)();const n=(0,i.WQ)(l);if(!n)throw new Error("Could not find Vuetify display injection");const r=(0,i.EW)((()=>{if(null!=e.mobile)return e.mobile;if(!e.mobileBreakpoint)return n.mobile.value;const t="number"===typeof e.mobileBreakpoint?e.mobileBreakpoint:n.thresholds.value[e.mobileBreakpoint];return n.width.value<t})),s=(0,i.EW)((()=>t?{[`${t}--mobile`]:r.value}:{}));return{...n,displayClasses:s,mobile:r}}},7018:function(e,t,n){n.d(t,{j:function(){return a},s:function(){return o}});n(4114);var r=n(6768),i=n(144),s=n(4587);const o=(0,s.j)({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function a(e){const t=(0,r.EW)((()=>{const t=(0,i.i9)(e)?e.value:e.elevation,n=[];return null==t||n.push(`elevation-${t}`),n}));return{elevationClasses:t}}},7308:function(e,t,n){n.d(t,{Kz:function(){return d},aF:function(){return a},pP:function(){return p}});var r=n(6768),i=n(5296),s=n(9094),o=n(7354);const a=Symbol.for("vuetify:goto");function c(){return{container:void 0,duration:300,layout:!1,offset:0,easing:"easeInOutCubic",patterns:{linear:e=>e,easeInQuad:e=>e**2,easeOutQuad:e=>e*(2-e),easeInOutQuad:e=>e<.5?2*e**2:(4-2*e)*e-1,easeInCubic:e=>e**3,easeOutCubic:e=>--e**3+1,easeInOutCubic:e=>e<.5?4*e**3:(e-1)*(2*e-2)*(2*e-2)+1,easeInQuart:e=>e**4,easeOutQuart:e=>1- --e**4,easeInOutQuart:e=>e<.5?8*e**4:1-8*--e**4,easeInQuint:e=>e**5,easeOutQuint:e=>1+--e**5,easeInOutQuint:e=>e<.5?16*e**5:1+16*--e**5}}}function u(e){return l(e)??(document.scrollingElement||document.body)}function l(e){return"string"===typeof e?document.querySelector(e):(0,s._p)(e)}function h(e,t,n){if("number"===typeof e)return t&&n?-e:e;let r=l(e),i=0;while(r)i+=t?r.offsetLeft:r.offsetTop,r=r.offsetParent;return i}function d(e,t){return{rtl:t.isRtl,options:(0,s.D9)(c(),e)}}async function f(e,t,n,r){const i=n?"scrollLeft":"scrollTop",a=(0,s.D9)(r?.options??c(),t),d=r?.rtl.value,f=("number"===typeof e?e:l(e))??0,p="parent"===a.container&&f instanceof HTMLElement?f.parentElement:u(a.container),m="function"===typeof a.easing?a.easing:a.patterns[a.easing];if(!m)throw new TypeError(`Easing function "${a.easing}" not found.`);let v;if("number"===typeof f)v=h(f,n,d);else if(v=h(f,n,d)-h(p,n,d),a.layout){const e=window.getComputedStyle(f),t=e.getPropertyValue("--v-layout-top");t&&(v-=parseInt(t,10))}v+=a.offset,v=g(p,v,!!d,!!n);const y=p[i]??0;if(v===y)return Promise.resolve(v);const b=performance.now();return new Promise((e=>requestAnimationFrame((function t(n){const r=n-b,c=r/a.duration,u=Math.floor(y+(v-y)*m((0,s.qE)(c,0,1)));return p[i]=u,c>=1&&Math.abs(u-p[i])<10?e(v):c>2?((0,o.OP)("Scroll target is not reachable"),e(p[i])):void requestAnimationFrame(t)}))))}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=(0,r.WQ)(a),{isRtl:n}=(0,i.IA)();if(!t)throw new Error("[Vuetify] Could not find injected goto instance");const o={...t,rtl:(0,r.EW)((()=>t.rtl.value||n.value))};async function c(t,n){return f(t,(0,s.D9)(e,n),!1,o)}return c.horizontal=async(t,n)=>f(t,(0,s.D9)(e,n),!0,o),c}function g(e,t,n,r){const{scrollWidth:i,scrollHeight:s}=e,[o,a]=e===document.scrollingElement?[window.innerWidth,window.innerHeight]:[e.offsetWidth,e.offsetHeight];let c,u;return r?n?(c=-(i-o),u=0):(c=0,u=i-o):(c=0,u=s+-a),Math.max(Math.min(t,u),c)}},4690:function(e,t,n){n.d(t,{TX:function(){return h},aO:function(){return d},dB:function(){return f},gL:function(){return l}});n(4114);var r=n(2067),i=n(6768),s=n(144),o=n(4587),a=n(7861),c=n(9094),u=n(7354);const l=(0,o.j)({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),h=(0,o.j)({value:null,disabled:Boolean,selectedClass:String},"group-item");function d(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const r=(0,a.nI)("useGroupItem");if(!r)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const o=(0,a.v6)();(0,i.Gt)(Symbol.for(`${t.description}:id`),o);const c=(0,i.WQ)(t,null);if(!c){if(!n)return c;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)}const u=(0,s.lW)(e,"value"),l=(0,i.EW)((()=>!(!c.disabled.value&&!e.disabled)));c.register({id:o,value:u,disabled:l},r),(0,i.xo)((()=>{c.unregister(o)}));const h=(0,i.EW)((()=>c.isSelected(o))),d=(0,i.EW)((()=>c.items.value[0].id===o)),f=(0,i.EW)((()=>c.items.value[c.items.value.length-1].id===o)),p=(0,i.EW)((()=>h.value&&[c.selectedClass.value,e.selectedClass]));return(0,i.wB)(h,(e=>{r.emit("group:selected",{value:e})}),{flush:"sync"}),{id:o,isSelected:h,isFirst:d,isLast:f,toggle:()=>c.select(o,!h.value),select:e=>c.select(o,e),selectedClass:p,value:u,disabled:l,group:c}}function f(e,t){let n=!1;const o=(0,s.Kh)([]),l=(0,r.q)(e,"modelValue",[],(e=>null==e?[]:g(o,(0,c.BN)(e))),(t=>{const n=m(o,t);return e.multiple?n:n[0]})),h=(0,a.nI)("useGroup");function d(e,n){const r=e,i=Symbol.for(`${t.description}:id`),a=(0,c["if"])(i,h?.vnode),u=a.indexOf(n);null==(0,s.R1)(r.value)&&(r.value=u,r.useIndexAsValue=!0),u>-1?o.splice(u,0,r):o.push(r)}function f(e){if(n)return;v();const t=o.findIndex((t=>t.id===e));o.splice(t,1)}function v(){const t=o.find((e=>!e.disabled));t&&"force"===e.mandatory&&!l.value.length&&(l.value=[t.id])}function y(t,n){const r=o.find((e=>e.id===t));if(!n||!r?.disabled)if(e.multiple){const r=l.value.slice(),i=r.findIndex((e=>e===t)),s=~i;if(n=n??!s,s&&e.mandatory&&r.length<=1)return;if(!s&&null!=e.max&&r.length+1>e.max)return;i<0&&n?r.push(t):i>=0&&!n&&r.splice(i,1),l.value=r}else{const r=l.value.includes(t);if(e.mandatory&&r)return;l.value=n??!r?[t]:[]}}function b(t){if(e.multiple&&(0,u.OP)('This method is not supported when using "multiple" prop'),l.value.length){const e=l.value[0],n=o.findIndex((t=>t.id===e));let r=(n+t)%o.length,i=o[r];while(i.disabled&&r!==n)r=(r+t)%o.length,i=o[r];if(i.disabled)return;l.value=[o[r].id]}else{const e=o.find((e=>!e.disabled));e&&(l.value=[e.id])}}(0,i.sV)((()=>{v()})),(0,i.xo)((()=>{n=!0})),(0,i.$u)((()=>{for(let e=0;e<o.length;e++)o[e].useIndexAsValue&&(o[e].value=e)}));const w={register:d,unregister:f,selected:l,select:y,disabled:(0,s.lW)(e,"disabled"),prev:()=>b(o.length-1),next:()=>b(1),isSelected:e=>l.value.includes(e),selectedClass:(0,i.EW)((()=>e.selectedClass)),items:(0,i.EW)((()=>o)),getItemIndex:e=>p(o,e)};return(0,i.Gt)(t,w),w}function p(e,t){const n=g(e,[t]);return n.length?e.findIndex((e=>e.id===n[0])):-1}function g(e,t){const n=[];return t.forEach((t=>{const r=e.find((e=>(0,c.bD)(t,e.value))),i=e[t];null!=r?.value?n.push(r.id):null!=i&&n.push(i.id)})),n}function m(e,t){const n=[];return t.forEach((t=>{const r=e.findIndex((e=>e.id===t));if(~r){const t=e[r];n.push(null!=t.value?t.value:r)}})),n}},4581:function(e,t,n){n.d(t,{qY:function(){return d},TX:function(){return h},GP:function(){return m},Tz:function(){return y},bD:function(){return b}});var r=n(6768);const i={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",treeviewCollapse:"mdi-menu-down",treeviewExpand:"mdi-menu-right",eyeDropper:"mdi-eyedropper"},s={component:e=>(0,r.h)(m,{...e,class:"mdi"})};var o=n(144),a=n(4587),c=n(1247),u=n(9094),l=n(7354);const h=[String,Function,Object,Array],d=Symbol.for("vuetify:icons"),f=(0,a.j)({icon:{type:h},tag:{type:String,required:!0}},"icon"),p=(0,c.RW)()({name:"VComponentIcon",props:f(),setup(e,t){let{slots:n}=t;return()=>{const t=e.icon;return(0,r.bF)(e.tag,null,{default:()=>[e.icon?(0,r.bF)(t,null,null):n.default?.()]})}}}),g=(0,c.pM)({name:"VSvgIcon",inheritAttrs:!1,props:f(),setup(e,t){let{attrs:n}=t;return()=>(0,r.bF)(e.tag,(0,r.v6)(n,{style:null}),{default:()=>[(0,r.bF)("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(e.icon)?e.icon.map((e=>Array.isArray(e)?(0,r.bF)("path",{d:e[0],"fill-opacity":e[1]},null):(0,r.bF)("path",{d:e},null))):(0,r.bF)("path",{d:e.icon},null)])]})}}),m=((0,c.pM)({name:"VLigatureIcon",props:f(),setup(e){return()=>(0,r.bF)(e.tag,null,{default:()=>[e.icon]})}}),(0,c.pM)({name:"VClassIcon",props:f(),setup(e){return()=>(0,r.bF)(e.tag,{class:e.icon},null)}}));function v(){return{svg:{component:g},class:{component:m}}}function y(e){const t=v(),n=e?.defaultSet??"mdi";return"mdi"!==n||t.mdi||(t.mdi=s),(0,u.D9)({defaultSet:n,sets:t,aliases:{...i,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z","vuetify-play":["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z",["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z",.6]]}},e)}const b=e=>{const t=(0,r.WQ)(d);if(!t)throw new Error("Missing Vuetify Icons provide!");const n=(0,r.EW)((()=>{const n=(0,o.R1)(e);if(!n)return{component:p};let r=n;if("string"===typeof r&&(r=r.trim(),r.startsWith("$")&&(r=t.aliases?.[r.slice(1)])),r||(0,l.OP)(`Could not find aliased icon "${n}"`),Array.isArray(r))return{component:g,icon:r};if("string"!==typeof r)return{component:p,icon:r};const i=Object.keys(t.sets).find((e=>"string"===typeof r&&r.startsWith(`${e}:`))),s=i?r.slice(i.length+1):r,a=t.sets[i??t.defaultSet];return{component:a.component,icon:s}}));return{iconData:n}}},2144:function(e,t,n){n.d(t,{B:function(){return o}});var r=n(144),i=n(6768),s=n(6993);function o(e,t){const n=(0,r.KR)(),o=(0,r.IJ)(!1);if(s.tB){const r=new IntersectionObserver((t=>{e?.(t,r),o.value=!!t.find((e=>e.isIntersecting))}),t);(0,i.xo)((()=>{r.disconnect()})),(0,i.wB)(n,((e,t)=>{t&&(r.unobserve(t),o.value=!1),e&&r.observe(e)}),{flush:"post"})}return{intersectionRef:n,isIntersecting:o}}},6984:function(e,t,n){n.d(t,{N6:function(){return d},Vz:function(){return g},gK:function(){return f}});n(4114),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698);var r=n(5399),i=n(6768),s=n(144),o=n(4587),a=n(9094),c=n(7861);const u=Symbol.for("vuetify:layout"),l=Symbol.for("vuetify:layout-item"),h=1e3,d=(0,o.j)({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout");(0,o.j)({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function f(){const e=(0,i.WQ)(u);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}const p=(e,t,n,r)=>{let i={top:0,left:0,right:0,bottom:0};const s=[{id:"",layer:{...i}}];for(const o of e){const e=t.get(o),a=n.get(o),c=r.get(o);if(!e||!a||!c)continue;const u={...i,[e.value]:parseInt(i[e.value],10)+(c.value?parseInt(a.value,10):0)};s.push({id:o,layer:u}),i=u}return s};function g(e){const t=(0,i.WQ)(u,null),n=(0,i.EW)((()=>t?t.rootZIndex.value-100:h)),o=(0,s.KR)([]),d=(0,s.Kh)(new Map),f=(0,s.Kh)(new Map),g=(0,s.Kh)(new Map),m=(0,s.Kh)(new Map),v=(0,s.Kh)(new Map),{resizeRef:y,contentRect:b}=(0,r.w)(),w=(0,i.EW)((()=>{const t=new Map,n=e.overlaps??[];for(const e of n.filter((e=>e.includes(":")))){const[n,r]=e.split(":");if(!o.value.includes(n)||!o.value.includes(r))continue;const i=d.get(n),s=d.get(r),a=f.get(n),c=f.get(r);i&&s&&a&&c&&(t.set(r,{position:i.value,amount:parseInt(a.value,10)}),t.set(n,{position:s.value,amount:-parseInt(c.value,10)}))}return t})),_=(0,i.EW)((()=>{const e=[...new Set([...g.values()].map((e=>e.value)))].sort(((e,t)=>e-t)),t=[];for(const n of e){const e=o.value.filter((e=>g.get(e)?.value===n));t.push(...e)}return p(t,d,f,m)})),E=(0,i.EW)((()=>!Array.from(v.values()).some((e=>e.value)))),T=(0,i.EW)((()=>_.value[_.value.length-1].layer)),S=(0,i.EW)((()=>({"--v-layout-left":(0,a.Dg)(T.value.left),"--v-layout-right":(0,a.Dg)(T.value.right),"--v-layout-top":(0,a.Dg)(T.value.top),"--v-layout-bottom":(0,a.Dg)(T.value.bottom),...E.value?void 0:{transition:"none"}}))),I=(0,i.EW)((()=>_.value.slice(1).map(((e,t)=>{let{id:n}=e;const{layer:r}=_.value[t],i=f.get(n),s=d.get(n);return{id:n,...r,size:Number(i.value),position:s.value}})))),C=e=>I.value.find((t=>t.id===e)),k=(0,c.nI)("createLayout"),A=(0,s.IJ)(!1);(0,i.sV)((()=>{A.value=!0})),(0,i.Gt)(u,{register:(e,t)=>{let{id:r,order:s,position:c,layoutSize:u,elementSize:p,active:y,disableTransitions:b,absolute:T}=t;g.set(r,s),d.set(r,c),f.set(r,u),m.set(r,y),b&&v.set(r,b);const S=(0,a["if"])(l,k?.vnode),C=S.indexOf(e);C>-1?o.value.splice(C,0,r):o.value.push(r);const R=(0,i.EW)((()=>I.value.findIndex((e=>e.id===r)))),O=(0,i.EW)((()=>n.value+2*_.value.length-2*R.value)),x=(0,i.EW)((()=>{const e="left"===c.value||"right"===c.value,t="right"===c.value,i="bottom"===c.value,s=p.value??u.value,o=0===s?"%":"px",a={[c.value]:0,zIndex:O.value,transform:`translate${e?"X":"Y"}(${(y.value?0:-(0===s?100:s))*(t||i?-1:1)}${o})`,position:T.value||n.value!==h?"absolute":"fixed",...E.value?void 0:{transition:"none"}};if(!A.value)return a;const l=I.value[R.value];if(!l)throw new Error(`[Vuetify] Could not find layout item "${r}"`);const d=w.value.get(r);return d&&(l[d.position]+=d.amount),{...a,height:e?`calc(100% - ${l.top}px - ${l.bottom}px)`:p.value?`${p.value}px`:void 0,left:t?void 0:`${l.left}px`,right:t?`${l.right}px`:void 0,top:"bottom"!==c.value?`${l.top}px`:void 0,bottom:"top"!==c.value?`${l.bottom}px`:void 0,width:e?p.value?`${p.value}px`:void 0:`calc(100% - ${l.left}px - ${l.right}px)`}})),N=(0,i.EW)((()=>({zIndex:O.value-1})));return{layoutItemStyles:x,layoutItemScrimStyles:N,zIndex:O}},unregister:e=>{g.delete(e),d.delete(e),f.delete(e),m.delete(e),v.delete(e),o.value=o.value.filter((t=>t!==e))},mainRect:T,mainStyles:S,getLayoutItem:C,items:I,layoutRect:b,rootZIndex:n});const R=(0,i.EW)((()=>["v-layout",{"v-layout--full-height":e.fullHeight}])),O=(0,i.EW)((()=>({zIndex:t?n.value:void 0,position:t?"relative":void 0,overflow:t?"hidden":void 0})));return{layoutClasses:R,layoutStyles:O,getLayoutItem:C,items:I,layoutRect:b,layoutRef:y}}},773:function(e,t,n){n.d(t,{E2:function(){return S},gi:function(){return E},pn:function(){return T}});var r=n(6768),i=n(2886),s=n(9262),o=n(2144),a=n(5296),c=n(9788),u=n(2067),l=n(3240),h=n(4663),d=n(7664),f=n(5130),p=n(4587),g=n(1247),m=n(9094),v=n(6993),y=n(4600);const b=(0,p.j)({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...(0,s.u)(),...(0,c.M)({location:"top"}),...(0,l.S)(),...(0,h.X)(),...(0,d.yx)()},"VProgressLinear"),w=(0,g.RW)()({name:"VProgressLinear",props:b(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const s=(0,u.q)(e,"modelValue"),{isRtl:h,rtlClasses:p}=(0,a.IA)(),{themeClasses:g}=(0,d.NX)(e),{locationStyles:b}=(0,c.z)(e),{textColorClasses:w,textColorStyles:_}=(0,i.aH)(e,"color"),{backgroundColorClasses:E,backgroundColorStyles:T}=(0,i.z6)((0,r.EW)((()=>e.bgColor||e.color))),{backgroundColorClasses:S,backgroundColorStyles:I}=(0,i.z6)((0,r.EW)((()=>e.bufferColor||e.bgColor||e.color))),{backgroundColorClasses:C,backgroundColorStyles:k}=(0,i.z6)(e,"color"),{roundedClasses:A}=(0,l.v)(e),{intersectionRef:R,isIntersecting:O}=(0,o.B)(),x=(0,r.EW)((()=>parseFloat(e.max))),N=(0,r.EW)((()=>parseFloat(e.height))),D=(0,r.EW)((()=>(0,m.qE)(parseFloat(e.bufferValue)/x.value*100,0,100))),P=(0,r.EW)((()=>(0,m.qE)(parseFloat(s.value)/x.value*100,0,100))),M=(0,r.EW)((()=>h.value!==e.reverse)),L=(0,r.EW)((()=>e.indeterminate?"fade-transition":"slide-x-transition")),F=v.ZK&&window.matchMedia?.("(forced-colors: active)").matches;function V(e){if(!R.value)return;const{left:t,right:n,width:r}=R.value.getBoundingClientRect(),i=M.value?r-e.clientX+(n-r):e.clientX-t;s.value=Math.round(i/r*x.value)}return(0,y.C)((()=>(0,r.bF)(e.tag,{ref:R,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&O.value,"v-progress-linear--reverse":M.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},A.value,g.value,p.value,e.class],style:[{bottom:"bottom"===e.location?0:void 0,top:"top"===e.location?0:void 0,height:e.active?(0,m.Dg)(N.value):0,"--v-progress-linear-height":(0,m.Dg)(N.value),...e.absolute?b.value:{}},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:P.value,onClick:e.clickable&&V},{default:()=>[e.stream&&(0,r.bF)("div",{key:"stream",class:["v-progress-linear__stream",w.value],style:{..._.value,[M.value?"left":"right"]:(0,m.Dg)(-N.value),borderTop:`${(0,m.Dg)(N.value/2)} dotted`,opacity:parseFloat(e.bufferOpacity),top:`calc(50% - ${(0,m.Dg)(N.value/4)})`,width:(0,m.Dg)(100-D.value,"%"),"--v-progress-linear-stream-to":(0,m.Dg)(N.value*(M.value?1:-1))}},null),(0,r.bF)("div",{class:["v-progress-linear__background",F?void 0:E.value],style:[T.value,{opacity:parseFloat(e.bgOpacity),width:e.stream?0:void 0}]},null),(0,r.bF)("div",{class:["v-progress-linear__buffer",F?void 0:S.value],style:[I.value,{opacity:parseFloat(e.bufferOpacity),width:(0,m.Dg)(D.value,"%")}]},null),(0,r.bF)(f.eB,{name:L.value},{default:()=>[e.indeterminate?(0,r.bF)("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map((e=>(0,r.bF)("div",{key:e,class:["v-progress-linear__indeterminate",e,F?void 0:C.value],style:k.value},null)))]):(0,r.bF)("div",{class:["v-progress-linear__determinate",F?void 0:C.value],style:[k.value,{width:(0,m.Dg)(P.value,"%")}]},null)]}),n.default&&(0,r.bF)("div",{class:"v-progress-linear__content"},[n.default({value:P.value,buffer:D.value})])]}))),{}}});var _=n(7861);const E=(0,p.j)({loading:[Boolean,String]},"loader");function T(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,_.MR)();const n=(0,r.EW)((()=>({[`${t}--loading`]:e.loading})));return{loaderClasses:n}}function S(e,t){let{slots:n}=t;return(0,r.bF)("div",{class:`${e.name}__loader`},[n.default?.({color:e.color,isActive:e.active})||(0,r.bF)(w,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}},5296:function(e,t,n){n.d(t,{bI:function(){return m},RR:function(){return y},Ym:function(){return b},IA:function(){return E}});var r=n(6768),i=n(144),s=n(2067),o=n(9094),a=n(7354),c={badge:"Badge",open:"Open",close:"Close",dismiss:"Dismiss",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM",title:"Select Time"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}};const u="$vuetify.",l=(e,t)=>e.replace(/\{(\d+)\}/g,((e,n)=>String(t[+n]))),h=(e,t,n)=>function(r){for(var i=arguments.length,s=new Array(i>1?i-1:0),c=1;c<i;c++)s[c-1]=arguments[c];if(!r.startsWith(u))return l(r,s);const h=r.replace(u,""),d=e.value&&n.value[e.value],f=t.value&&n.value[t.value];let p=(0,o.no)(d,h,null);return p||((0,a.OP)(`Translation key "${r}" not found in "${e.value}", trying fallback locale`),p=(0,o.no)(f,h,null)),p||((0,a.yA)(`Translation key "${r}" not found in fallback`),p=r),"string"!==typeof p&&((0,a.yA)(`Translation key "${r}" has a non-string value`),p=r),l(p,s)};function d(e,t){return(n,r)=>{const i=new Intl.NumberFormat([e.value,t.value],r);return i.format(n)}}function f(e,t,n){const i=(0,s.q)(e,t,e[t]??n.value);return i.value=e[t]??n.value,(0,r.wB)(n,(r=>{null==e[t]&&(i.value=n.value)})),i}function p(e){return t=>{const n=f(t,"locale",e.current),r=f(t,"fallback",e.fallback),i=f(t,"messages",e.messages);return{name:"vuetify",current:n,fallback:r,messages:i,t:h(n,r,i),n:d(n,r),provide:p({current:n,fallback:r,messages:i})}}}function g(e){const t=(0,i.IJ)(e?.locale??"en"),n=(0,i.IJ)(e?.fallback??"en"),r=(0,i.KR)({en:c,...e?.messages});return{name:"vuetify",current:t,fallback:n,messages:r,t:h(t,n,r),n:d(t,n),provide:p({current:t,fallback:n,messages:r})}}const m=Symbol.for("vuetify:locale");function v(e){return null!=e.name}function y(e){const t=e?.adapter&&v(e?.adapter)?e?.adapter:g(e),n=_(t,e);return{...t,...n}}function b(){const e=(0,r.WQ)(m);if(!e)throw new Error("[Vuetify] Could not find injected locale instance");return e}Symbol.for("vuetify:rtl");function w(){return{af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,km:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1}}function _(e,t){const n=(0,i.KR)(t?.rtl??w()),s=(0,r.EW)((()=>n.value[e.current.value]??!1));return{isRtl:s,rtl:n,rtlClasses:(0,r.EW)((()=>"v-locale--is-"+(s.value?"rtl":"ltr")))}}function E(){const e=(0,r.WQ)(m);if(!e)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:e.isRtl,rtlClasses:e.rtlClasses}}},9788:function(e,t,n){n.d(t,{M:function(){return c},z:function(){return u}});var r=n(5296),i=n(6768),s=n(4587),o=n(6892);const a={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},c=(0,s.j)({location:String},"location");function u(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2?arguments[2]:void 0;const{isRtl:s}=(0,r.IA)(),c=(0,i.EW)((()=>{if(!e.location)return{};const{side:r,align:i}=(0,o.fB)(e.location.split(" ").length>1?e.location:`${e.location} center`,s.value);function c(e){return n?n(e):0}const u={};return"center"!==r&&(t?u[a[r]]=`calc(100% - ${c(r)}px)`:u[r]=0),"center"!==i?t?u[a[i]]=`calc(100% - ${c(i)}px)`:u[i]=0:("center"===r?u.top=u.left="50%":u[{top:"left",bottom:"left",left:"top",right:"top"}[r]]="50%",u.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[r]),u}));return{locationStyles:c}}},8184:function(e,t,n){n.d(t,{J:function(){return c},S:function(){return a}});var r=n(6768),i=n(4587),s=n(7861);const o=["static","relative","fixed","absolute","sticky"],a=(0,i.j)({position:{type:String,validator:e=>o.includes(e)}},"position");function c(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,s.MR)();const n=(0,r.EW)((()=>e.position?`${t}--${e.position}`:void 0));return{positionClasses:n}}},2067:function(e,t,n){n.d(t,{q:function(){return c}});var r=n(1743),i=n(144),s=n(6768),o=n(7861),a=n(9094);function c(e,t,n){let c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e=>e,u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e=>e;const l=(0,o.nI)("useProxiedModel"),h=(0,i.KR)(void 0!==e[t]?e[t]:n),d=(0,a.fX)(t),f=d!==t,p=f?(0,s.EW)((()=>(e[t],!(!l.vnode.props?.hasOwnProperty(t)&&!l.vnode.props?.hasOwnProperty(d)||!l.vnode.props?.hasOwnProperty(`onUpdate:${t}`)&&!l.vnode.props?.hasOwnProperty(`onUpdate:${d}`))))):(0,s.EW)((()=>(e[t],!(!l.vnode.props?.hasOwnProperty(t)||!l.vnode.props?.hasOwnProperty(`onUpdate:${t}`)))));(0,r.Y)((()=>!p.value),(()=>{(0,s.wB)((()=>e[t]),(e=>{h.value=e}))}));const g=(0,s.EW)({get(){const n=e[t];return c(p.value?n:h.value)},set(n){const r=u(n),s=(0,i.ux)(p.value?e[t]:h.value);s!==r&&c(s)!==n&&(h.value=r,l?.emit(`update:${t}`,r))}});return Object.defineProperty(g,"externalValue",{get:()=>p.value?e[t]:h.value}),g}},5399:function(e,t,n){n.d(t,{w:function(){return a}});var r=n(144),i=n(6768),s=n(9094),o=n(6993);function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"content";const n=(0,s.m)(),a=(0,r.KR)();if(o.ZK){const r=new ResizeObserver((n=>{e?.(n,r),n.length&&(a.value="content"===t?n[0].contentRect:n[0].target.getBoundingClientRect())}));(0,i.xo)((()=>{r.disconnect()})),(0,i.wB)((()=>n.el),((e,t)=>{t&&(r.unobserve(t),a.value=void 0),e&&r.observe(e)}),{flush:"post"})}return{resizeRef:n,contentRect:(0,r.tB)(a)}}},3240:function(e,t,n){n.d(t,{S:function(){return a},v:function(){return c}});n(4114);var r=n(6768),i=n(144),s=n(4587),o=n(7861);const a=(0,s.j)({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function c(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,o.MR)();const n=(0,r.EW)((()=>{const n=(0,i.i9)(e)?e.value:e.rounded,r=(0,i.i9)(e)?e.value:e.tile,s=[];if(!0===n||""===n)s.push(`${t}--rounded`);else if("string"===typeof n||0===n)for(const e of String(n).split(" "))s.push(`rounded-${e}`);else(r||!1===n)&&s.push("rounded-0");return s}));return{roundedClasses:n}}},6314:function(e,t,n){n.d(t,{WC:function(){return d},iE:function(){return h},rd:function(){return l},zE:function(){return p}});var r=n(6768),i=n(144),s=n(7861),o=n(9094),a=n(4587),c=n(6993);function u(){const e=(0,s.nI)("useRoute");return(0,r.EW)((()=>e?.proxy?.$route))}function l(){return(0,s.nI)("useRouter")?.proxy?.$router}function h(e,t){const n=(0,r.$y)("RouterLink"),s=(0,r.EW)((()=>!(!e.href&&!e.to))),a=(0,r.EW)((()=>s?.value||(0,o.lm)(t,"click")||(0,o.lm)(e,"click")));if("string"===typeof n||!("useLink"in n))return{isLink:s,isClickable:a,href:(0,i.lW)(e,"href")};const c=(0,r.EW)((()=>({...e,to:(0,i.lW)((()=>e.to||""))}))),l=n.useLink(c.value),h=(0,r.EW)((()=>e.to?l:void 0)),d=u();return{isLink:s,isClickable:a,route:h.value?.route,navigate:h.value?.navigate,isActive:(0,r.EW)((()=>!!h.value&&(e.exact?d.value?h.value.isExactActive?.value&&(0,o.bD)(h.value.route.value.query,d.value.query):h.value.isExactActive?.value??!1:h.value.isActive?.value??!1))),href:(0,r.EW)((()=>e.to?h.value?.route.value.href:e.href))}}const d=(0,a.j)({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let f=!1;function p(e,t){let n,s,o=!1;function a(e){e.state?.replaced||(o=!0,setTimeout((()=>o=!1)))}c.ZK&&((0,r.dY)((()=>{window.addEventListener("popstate",a),n=e?.beforeEach(((e,n,r)=>{f?o?t(r):r():setTimeout((()=>o?t(r):r())),f=!0})),s=e?.afterEach((()=>{f=!1}))})),(0,i.jr)((()=>{window.removeEventListener("popstate",a),n?.(),s?.()})))}},3378:function(e,t,n){n.d(t,{X:function(){return c},k:function(){return a}});var r=n(4587),i=n(7861),s=n(9094);const o=["x-small","small","default","large","x-large"],a=(0,r.j)({size:{type:[String,Number],default:"default"}},"size");function c(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,i.MR)();return(0,s.yc)((()=>{let n,r;return(0,s.mK)(o,e.size)?n=`${t}--size-${e.size}`:e.size&&(r={width:(0,s.Dg)(e.size),height:(0,s.Dg)(e.size)}),{sizeClasses:n,sizeStyles:r}}))}},6747:function(e,t,n){n.d(t,{K:function(){return s}});var r=n(144),i=n(6768);function s(){const e=(0,r.IJ)(!1);(0,i.sV)((()=>{window.requestAnimationFrame((()=>{e.value=!0}))}));const t=(0,i.EW)((()=>e.value?void 0:{transition:"none !important"}));return{ssrBootStyles:t,isBooted:(0,r.tB)(e)}}},4663:function(e,t,n){n.d(t,{X:function(){return i}});var r=n(4587);const i=(0,r.j)({tag:{type:String,default:"div"}},"tag")},7664:function(e,t,n){n.d(t,{NX:function(){return g},Qc:function(){return l},an:function(){return p},yx:function(){return h}});n(4114),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698);var r=n(144),i=n(6768),s=n(4587),o=n(9094),a=n(4239),c=n(6993),u=n(7861);const l=Symbol.for("vuetify:theme"),h=(0,s.j)({theme:String},"theme");function d(){return{defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-light":"#EEEEEE","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-light":"#424242","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d();const t=d();if(!e)return{...t,isDisabled:!0};const n={};for(const[r,i]of Object.entries(e.themes??{})){const e=i.dark||"dark"===r?t.themes?.dark:t.themes?.light;n[r]=(0,o.D9)(e,i)}return(0,o.D9)(t,{...e,themes:n})}function p(e){const t=f(e),n=(0,r.KR)(t.defaultTheme),s=(0,r.KR)(t.themes),u=(0,i.EW)((()=>{const e={};for(const[n,r]of Object.entries(s.value)){const i=e[n]={...r,colors:{...r.colors}};if(t.variations)for(const e of t.variations.colors){const n=i.colors[e];if(n)for(const r of["lighten","darken"]){const s="lighten"===r?a.a:a.e$;for(const c of(0,o.Sd)(t.variations[r],1))i.colors[`${e}-${r}-${c}`]=(0,a.ex)(s((0,a.H0)(n),c))}}for(const e of Object.keys(i.colors)){if(/^on-[a-z]/.test(e)||i.colors[`on-${e}`])continue;const t=`on-${e}`,n=(0,a.H0)(i.colors[e]);i.colors[t]=(0,a.Ot)(n)}}return e})),l=(0,i.EW)((()=>u.value[n.value])),h=(0,i.EW)((()=>{const e=[];l.value?.dark&&m(e,":root",["color-scheme: dark"]),m(e,":root",v(l.value));for(const[i,s]of Object.entries(u.value))m(e,`.v-theme--${i}`,["color-scheme: "+(s.dark?"dark":"normal"),...v(s)]);const t=[],n=[],r=new Set(Object.values(u.value).flatMap((e=>Object.keys(e.colors))));for(const i of r)/^on-[a-z]/.test(i)?m(n,`.${i}`,[`color: rgb(var(--v-theme-${i})) !important`]):(m(t,`.bg-${i}`,[`--v-theme-overlay-multiplier: var(--v-theme-${i}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${i})) !important`,`color: rgb(var(--v-theme-on-${i})) !important`]),m(n,`.text-${i}`,[`color: rgb(var(--v-theme-${i})) !important`]),m(n,`.border-${i}`,[`--v-border-color: var(--v-theme-${i})`]));return e.push(...t,...n),e.map(((e,t)=>0===t?e:`    ${e}`)).join("")}));function d(){return{style:[{children:h.value,id:"vuetify-theme-stylesheet",nonce:t.cspNonce||!1}]}}function p(e){if(t.isDisabled)return;const n=e._context.provides.usehead;if(n)if(n.push){const r=n.push(d);c.ZK&&(0,i.wB)(h,(()=>{r.patch(d)}))}else c.ZK?(n.addHeadObjs((0,i.EW)(d)),(0,i.nT)((()=>n.updateDOM()))):n.addHeadObjs(d());else{let s=c.ZK?document.getElementById("vuetify-theme-stylesheet"):null;function o(){if("undefined"!==typeof document&&!s){const e=document.createElement("style");e.type="text/css",e.id="vuetify-theme-stylesheet",t.cspNonce&&e.setAttribute("nonce",t.cspNonce),s=e,document.head.appendChild(s)}s&&(s.innerHTML=h.value)}c.ZK?(0,i.wB)(h,o,{immediate:!0}):o()}}const g=(0,i.EW)((()=>t.isDisabled?void 0:`v-theme--${n.value}`));return{install:p,isDisabled:t.isDisabled,name:n,themes:s,current:l,computedThemes:u,themeClasses:g,styles:h,global:{name:n,current:l}}}function g(e){(0,u.nI)("provideTheme");const t=(0,i.WQ)(l,null);if(!t)throw new Error("Could not find Vuetify theme injection");const n=(0,i.EW)((()=>e.theme??t.name.value)),r=(0,i.EW)((()=>t.themes.value[n.value])),s=(0,i.EW)((()=>t.isDisabled?void 0:`v-theme--${n.value}`)),o={...t,name:n,current:r,themeClasses:s};return(0,i.Gt)(l,o),o}function m(e,t,n){e.push(`${t} {\n`,...n.map((e=>`  ${e};\n`)),"}\n")}function v(e){const t=e.dark?2:1,n=e.dark?1:2,r=[];for(const[i,s]of Object.entries(e.colors)){const e=(0,a.H0)(s);r.push(`--v-theme-${i}: ${e.r},${e.g},${e.b}`),i.startsWith("on-")||r.push(`--v-theme-${i}-overlay-multiplier: ${(0,a.MA)(s)>.18?t:n}`)}for(const[i,s]of Object.entries(e.variables)){const e="string"===typeof s&&s.startsWith("#")?(0,a.H0)(s):void 0,t=e?`${e.r}, ${e.g}, ${e.b}`:void 0;r.push(`--v-${i}: ${t??s}`)}return r}},1743:function(e,t,n){n.d(t,{Y:function(){return s}});var r=n(144),i=n(6768);function s(e,t){let n;function s(){n=(0,r.uY)(),n.run((()=>t.length?t((()=>{n?.stop(),s()})):t()))}(0,i.wB)(e,(e=>{e&&!n?s():e||(n?.stop(),n=void 0)}),{immediate:!0}),(0,r.jr)((()=>{n?.stop()}))}},4464:function(e,t,n){n.d(t,{M:function(){return a},m:function(){return o}});var r=n(5130),i=n(6768),s=n(4587);const o=(0,s.j)({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>!0!==e}},"transition"),a=(e,t)=>{let{slots:n}=t;const{transition:s,disabled:o,group:a,...c}=e,{component:u=(a?r.F:r.eB),...l}="object"===typeof s?s:{};return(0,i.h)(u,(0,i.v6)("string"===typeof s?{name:o?"":s}:l,"string"===typeof s?{}:Object.fromEntries(Object.entries({disabled:o,group:a}).filter((e=>{let[t,n]=e;return void 0!==n}))),c),n)}},2428:function(e,t,n){n.d(t,{gI:function(){return l},rn:function(){return h},wN:function(){return u}});var r=n(6768),i=n(2886),s=n(144),o=n(4587),a=n(7861);const c=["elevated","flat","tonal","outlined","text","plain"];function u(e,t){return(0,r.bF)(r.FK,null,[e&&(0,r.bF)("span",{key:"overlay",class:`${t}__overlay`},null),(0,r.bF)("span",{key:"underlay",class:`${t}__underlay`},null)])}const l=(0,o.j)({color:String,variant:{type:String,default:"elevated",validator:e=>c.includes(e)}},"variant");function h(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,a.MR)();const n=(0,r.EW)((()=>{const{variant:n}=(0,s.R1)(e);return`${t}--variant-${n}`})),{colorClasses:o,colorStyles:c}=(0,i.by)((0,r.EW)((()=>{const{variant:t,color:n}=(0,s.R1)(e);return{[["elevated","flat"].includes(t)?"background":"text"]:n}})));return{colorClasses:o,colorStyles:c,variantClasses:n}}},9629:function(e,t,n){var r=n(6993);function i(e,t){if(!r.tB)return;const n=t.modifiers||{},i=t.value,{handler:o,options:a}="object"===typeof i?i:{handler:i,options:{}},c=new IntersectionObserver((function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length>1?arguments[1]:void 0;const a=e._observe?.[t.instance.$.uid];if(!a)return;const c=r.some((e=>e.isIntersecting));!o||n.quiet&&!a.init||n.once&&!c&&!a.init||o(c,r,i),c&&n.once?s(e,t):a.init=!0}),a);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:c},c.observe(e)}function s(e,t){const n=e._observe?.[t.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const o={mounted:i,unmounted:s};t.A=o},759:function(e,t,n){n.d(t,{n:function(){return I}});var r=n(9094);const i=Symbol("rippleStop"),s=80;function o(e,t){e.style.transform=t,e.style.webkitTransform=t}function a(e){return"TouchEvent"===e.constructor.name}function c(e){return"KeyboardEvent"===e.constructor.name}const u=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=0,i=0;if(!c(e)){const n=t.getBoundingClientRect(),s=a(e)?e.touches[e.touches.length-1]:e;r=s.clientX-n.left,i=s.clientY-n.top}let s=0,o=.3;t._ripple?.circle?(o=.15,s=t.clientWidth/2,s=n.center?s:s+Math.sqrt((r-s)**2+(i-s)**2)/4):s=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const u=(t.clientWidth-2*s)/2+"px",l=(t.clientHeight-2*s)/2+"px",h=n.center?u:r-s+"px",d=n.center?l:i-s+"px";return{radius:s,scale:o,x:h,y:d,centerX:u,centerY:l}},l={show(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t?._ripple?.enabled)return;const r=document.createElement("span"),i=document.createElement("span");r.appendChild(i),r.className="v-ripple__container",n.class&&(r.className+=` ${n.class}`);const{radius:s,scale:a,x:c,y:l,centerX:h,centerY:d}=u(e,t,n),f=2*s+"px";i.className="v-ripple__animation",i.style.width=f,i.style.height=f,t.appendChild(r);const p=window.getComputedStyle(t);p&&"static"===p.position&&(t.style.position="relative",t.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),o(i,`translate(${c}, ${l}) scale3d(${a},${a},${a})`),i.dataset.activated=String(performance.now()),setTimeout((()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),o(i,`translate(${h}, ${d}) scale3d(1,1,1)`)}),0)},hide(e){if(!e?._ripple?.enabled)return;const t=e.getElementsByClassName("v-ripple__animation");if(0===t.length)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const r=performance.now()-Number(n.dataset.activated),i=Math.max(250-r,0);setTimeout((()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout((()=>{const t=e.getElementsByClassName("v-ripple__animation");1===t.length&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),n.parentNode?.parentNode===e&&e.removeChild(n.parentNode)}),300)}),i)}};function h(e){return"undefined"===typeof e||!!e}function d(e){const t={},n=e.currentTarget;if(n?._ripple&&!n._ripple.touched&&!e[i]){if(e[i]=!0,a(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||c(e),n._ripple.class&&(t.class=n._ripple.class),a(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{l.show(e,n,t)},n._ripple.showTimer=window.setTimeout((()=>{n?._ripple?.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)}),s)}else l.show(e,n,t)}}function f(e){e[i]=!0}function p(e){const t=e.currentTarget;if(t?._ripple){if(window.clearTimeout(t._ripple.showTimer),"touchend"===e.type&&t._ripple.showTimerCommit)return t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,void(t._ripple.showTimer=window.setTimeout((()=>{p(e)})));window.setTimeout((()=>{t._ripple&&(t._ripple.touched=!1)})),l.hide(t)}}function g(e){const t=e.currentTarget;t?._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let m=!1;function v(e){m||e.keyCode!==r.uP.enter&&e.keyCode!==r.uP.space||(m=!0,d(e))}function y(e){m=!1,p(e)}function b(e){m&&(m=!1,p(e))}function w(e,t,n){const{value:i,modifiers:s}=t,o=h(i);if(o||l.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=o,e._ripple.centered=s.center,e._ripple.circle=s.circle,(0,r.Gv)(i)&&i.class&&(e._ripple.class=i.class),o&&!n){if(s.stop)return e.addEventListener("touchstart",f,{passive:!0}),void e.addEventListener("mousedown",f);e.addEventListener("touchstart",d,{passive:!0}),e.addEventListener("touchend",p,{passive:!0}),e.addEventListener("touchmove",g,{passive:!0}),e.addEventListener("touchcancel",p),e.addEventListener("mousedown",d),e.addEventListener("mouseup",p),e.addEventListener("mouseleave",p),e.addEventListener("keydown",v),e.addEventListener("keyup",y),e.addEventListener("blur",b),e.addEventListener("dragstart",p,{passive:!0})}else!o&&n&&_(e)}function _(e){e.removeEventListener("mousedown",d),e.removeEventListener("touchstart",d),e.removeEventListener("touchend",p),e.removeEventListener("touchmove",g),e.removeEventListener("touchcancel",p),e.removeEventListener("mouseup",p),e.removeEventListener("mouseleave",p),e.removeEventListener("keydown",v),e.removeEventListener("keyup",y),e.removeEventListener("dragstart",p),e.removeEventListener("blur",b)}function E(e,t){w(e,t,!1)}function T(e){delete e._ripple,_(e)}function S(e,t){if(t.value===t.oldValue)return;const n=h(t.oldValue);w(e,t,n)}const I={mounted:E,unmounted:T,updated:S}},5790:function(e,t,n){n.d(t,{$N:function(){return he}});var r=n(144),i=n(6768),s=n(9094);n(4114);const o={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0};function a(e,t,n){const r=[];let i=[];const s=l(e),a=h(e),c=n??o[t.slice(-2).toUpperCase()]??0,u=(s.getDay()-c+7)%7,d=(a.getDay()-c+7)%7;for(let o=0;o<u;o++){const e=new Date(s);e.setDate(e.getDate()-(u-o)),i.push(e)}for(let o=1;o<=a.getDate();o++){const t=new Date(e.getFullYear(),e.getMonth(),o);i.push(t),7===i.length&&(r.push(i),i=[])}for(let o=1;o<7-d;o++){const e=new Date(a);e.setDate(e.getDate()+o),i.push(e)}return i.length>0&&r.push(i),r}function c(e,t,n){const r=n??o[t.slice(-2).toUpperCase()]??0,i=new Date(e);while(i.getDay()!==r)i.setDate(i.getDate()-1);return i}function u(e,t){const n=new Date(e),r=((o[t.slice(-2).toUpperCase()]??0)+6)%7;while(n.getDay()!==r)n.setDate(n.getDate()+1);return n}function l(e){return new Date(e.getFullYear(),e.getMonth(),1)}function h(e){return new Date(e.getFullYear(),e.getMonth()+1,0)}function d(e){const t=e.split("-").map(Number);return new Date(t[0],t[1]-1,t[2])}const f=/^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;function p(e){if(null==e)return new Date;if(e instanceof Date)return e;if("string"===typeof e){let t;if(f.test(e))return d(e);if(t=Date.parse(e),!isNaN(t))return new Date(t)}return null}const g=new Date(2e3,0,2);function m(e,t){const n=t??o[e.slice(-2).toUpperCase()]??0;return(0,s.Sd)(7).map((t=>{const r=new Date(g);return r.setDate(g.getDate()+n+t),new Intl.DateTimeFormat(e,{weekday:"narrow"}).format(r)}))}function v(e,t,n,r){const i=p(e)??new Date,s=r?.[t];if("function"===typeof s)return s(i,t,n);let o={};switch(t){case"fullDate":o={year:"numeric",month:"long",day:"numeric"};break;case"fullDateWithWeekday":o={weekday:"long",year:"numeric",month:"long",day:"numeric"};break;case"normalDate":const e=i.getDate(),t=new Intl.DateTimeFormat(n,{month:"long"}).format(i);return`${e} ${t}`;case"normalDateWithWeekday":o={weekday:"short",day:"numeric",month:"short"};break;case"shortDate":o={month:"short",day:"numeric"};break;case"year":o={year:"numeric"};break;case"month":o={month:"long"};break;case"monthShort":o={month:"short"};break;case"monthAndYear":o={month:"long",year:"numeric"};break;case"monthAndDate":o={month:"long",day:"numeric"};break;case"weekday":o={weekday:"long"};break;case"weekdayShort":o={weekday:"short"};break;case"dayOfMonth":return new Intl.NumberFormat(n).format(i.getDate());case"hours12h":o={hour:"numeric",hour12:!0};break;case"hours24h":o={hour:"numeric",hour12:!1};break;case"minutes":o={minute:"numeric"};break;case"seconds":o={second:"numeric"};break;case"fullTime":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime12h":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime24h":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"fullDateTime":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime12h":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime24h":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDate":o={year:"numeric",month:"2-digit",day:"2-digit"};break;case"keyboardDateTime":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDateTime12h":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"keyboardDateTime24h":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;default:o=s??{timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(n,o).format(i)}function y(e,t){const n=e.toJsDate(t),r=n.getFullYear(),i=(0,s.CF)(String(n.getMonth()+1),2,"0"),o=(0,s.CF)(String(n.getDate()),2,"0");return`${r}-${i}-${o}`}function b(e){const[t,n,r]=e.split("-").map(Number);return new Date(t,n-1,r)}function w(e,t){const n=new Date(e);return n.setMinutes(n.getMinutes()+t),n}function _(e,t){const n=new Date(e);return n.setHours(n.getHours()+t),n}function E(e,t){const n=new Date(e);return n.setDate(n.getDate()+t),n}function T(e,t){const n=new Date(e);return n.setDate(n.getDate()+7*t),n}function S(e,t){const n=new Date(e);return n.setDate(1),n.setMonth(n.getMonth()+t),n}function I(e){return e.getFullYear()}function C(e){return e.getMonth()}function k(e){return e.getDate()}function A(e){return new Date(e.getFullYear(),e.getMonth()+1,1)}function R(e){return new Date(e.getFullYear(),e.getMonth()-1,1)}function O(e){return e.getHours()}function x(e){return e.getMinutes()}function N(e){return new Date(e.getFullYear(),0,1)}function D(e){return new Date(e.getFullYear(),11,31)}function P(e,t){return L(e,t[0])&&V(e,t[1])}function M(e){const t=new Date(e);return t instanceof Date&&!isNaN(t.getTime())}function L(e,t){return e.getTime()>t.getTime()}function F(e,t){return L(Q(e),Q(t))}function V(e,t){return e.getTime()<t.getTime()}function U(e,t){return e.getTime()===t.getTime()}function j(e,t){return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}function $(e,t){return e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}function B(e,t){return e.getFullYear()===t.getFullYear()}function W(e,t,n){const r=new Date(e),i=new Date(t);switch(n){case"years":return r.getFullYear()-i.getFullYear();case"quarters":return Math.floor((r.getMonth()-i.getMonth()+12*(r.getFullYear()-i.getFullYear()))/4);case"months":return r.getMonth()-i.getMonth()+12*(r.getFullYear()-i.getFullYear());case"weeks":return Math.floor((r.getTime()-i.getTime())/6048e5);case"days":return Math.floor((r.getTime()-i.getTime())/864e5);case"hours":return Math.floor((r.getTime()-i.getTime())/36e5);case"minutes":return Math.floor((r.getTime()-i.getTime())/6e4);case"seconds":return Math.floor((r.getTime()-i.getTime())/1e3);default:return r.getTime()-i.getTime()}}function z(e,t){const n=new Date(e);return n.setHours(t),n}function K(e,t){const n=new Date(e);return n.setMinutes(t),n}function q(e,t){const n=new Date(e);return n.setMonth(t),n}function H(e,t){const n=new Date(e);return n.setDate(t),n}function G(e,t){const n=new Date(e);return n.setFullYear(t),n}function Q(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate(),0,0,0,0)}function X(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate(),23,59,59,999)}class Y{constructor(e){this.locale=e.locale,this.formats=e.formats}date(e){return p(e)}toJsDate(e){return e}toISO(e){return y(this,e)}parseISO(e){return b(e)}addMinutes(e,t){return w(e,t)}addHours(e,t){return _(e,t)}addDays(e,t){return E(e,t)}addWeeks(e,t){return T(e,t)}addMonths(e,t){return S(e,t)}getWeekArray(e,t){return a(e,this.locale,t?Number(t):void 0)}startOfWeek(e,t){return c(e,this.locale,t?Number(t):void 0)}endOfWeek(e){return u(e,this.locale)}startOfMonth(e){return l(e)}endOfMonth(e){return h(e)}format(e,t){return v(e,t,this.locale,this.formats)}isEqual(e,t){return U(e,t)}isValid(e){return M(e)}isWithinRange(e,t){return P(e,t)}isAfter(e,t){return L(e,t)}isAfterDay(e,t){return F(e,t)}isBefore(e,t){return!L(e,t)&&!U(e,t)}isSameDay(e,t){return j(e,t)}isSameMonth(e,t){return $(e,t)}isSameYear(e,t){return B(e,t)}setMinutes(e,t){return K(e,t)}setHours(e,t){return z(e,t)}setMonth(e,t){return q(e,t)}setDate(e,t){return H(e,t)}setYear(e,t){return G(e,t)}getDiff(e,t,n){return W(e,t,n)}getWeekdays(e){return m(this.locale,e?Number(e):void 0)}getYear(e){return I(e)}getMonth(e){return C(e)}getDate(e){return k(e)}getNextMonth(e){return A(e)}getPreviousMonth(e){return R(e)}getHours(e){return O(e)}getMinutes(e){return x(e)}startOfDay(e){return Q(e)}endOfDay(e){return X(e)}startOfYear(e){return N(e)}endOfYear(e){return D(e)}}const J=Symbol.for("vuetify:date-options"),Z=Symbol.for("vuetify:date-adapter");function ee(e,t){const n=(0,s.D9)({adapter:Y,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"cs-CZ",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},e);return{options:n,instance:te(n,t)}}function te(e,t){const n=(0,r.Kh)("function"===typeof e.adapter?new e.adapter({locale:e.locale[t.current.value]??t.current.value,formats:e.formats}):e.adapter);return(0,i.wB)(t.current,(t=>{n.locale=e.locale[t]??t??n.locale})),n}var ne=n(2858),re=n(8353),ie=n(7308),se=n(4581),oe=n(5296),ae=n(7664),ce=n(1247),ue=n(6993),le=n(7861);function he(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{blueprint:t,...n}=e,o=(0,s.D9)(t,n),{aliases:a={},components:c={},directives:u={}}=o,l=(0,ne.Ty)(o.defaults),h=(0,re.XH)(o.display,o.ssr),d=(0,ae.an)(o.theme),f=(0,se.Tz)(o.icons),p=(0,oe.RR)(o.locale),g=ee(o.date,p),m=(0,ie.Kz)(o.goTo,p),v=e=>{for(const t in u)e.directive(t,u[t]);for(const t in c)e.component(t,c[t]);for(const t in a)e.component(t,(0,ce.pM)({...a[t],name:t,aliasName:a[t].name}));if(d.install(e),e.provide(ne.hj,l),e.provide(re.TX,h),e.provide(ae.Qc,d),e.provide(se.qY,f),e.provide(oe.bI,p),e.provide(J,g.options),e.provide(Z,g.instance),e.provide(ie.aF,m),ue.ZK&&o.ssr)if(e.$nuxt)e.$nuxt.hook("app:suspense:resolve",(()=>{h.update()}));else{const{mount:t}=e;e.mount=function(){const n=t(...arguments);return(0,i.dY)((()=>h.update())),e.mount=t,n}}le.v6.reset(),e.mixin({computed:{$vuetify(){return(0,r.Kh)({defaults:fe.call(this,ne.hj),display:fe.call(this,re.TX),theme:fe.call(this,ae.Qc),icons:fe.call(this,se.qY),locale:fe.call(this,oe.bI),date:fe.call(this,Z)})}}})};return{install:v,defaults:l,display:h,theme:d,icons:f,locale:p,date:g,goTo:m}}const de="3.7.1";function fe(e){const t=this.$,n=t.parent?.provides??t.vnode.appContext?.provides;if(n&&e in n)return n[e]}he.version=de},6892:function(e,t,n){n.d(t,{BN:function(){return u},C3:function(){return h},RM:function(){return c},Z3:function(){return l},fB:function(){return o}});var r=n(9094);const i=["top","bottom"],s=["start","end","left","right"];function o(e,t){let[n,o]=e.split(" ");return o||(o=(0,r.mK)(i,n)?"start":(0,r.mK)(s,n)?"top":"center"),{side:a(n,t),align:a(o,t)}}function a(e,t){return"start"===e?t?"right":"left":"end"===e?t?"left":"right":e}function c(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function u(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function l(e){return{side:e.align,align:e.side}}function h(e){return(0,r.mK)(i,e.side)?"y":"x"}},4239:function(e,t,n){n.d(t,{ex:function(){return W},e$:function(){return H},Ot:function(){return Q},MA:function(){return G},VP:function(){return P},gP:function(){return M},a:function(){return q},H0:function(){return V}});
/**
 * WCAG 3.0 APCA perceptual contrast algorithm from https://github.com/Myndex/SAPC-APCA
 * @licence https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @see https://www.w3.org/WAI/GL/task-forces/silver/wiki/Visual_Contrast_of_Text_Subgroup
 */
const r=2.4,i=.2126729,s=.7151522,o=.072175,a=.55,c=.58,u=.57,l=.62,h=.03,d=1.45,f=5e-4,p=1.25,g=1.25,m=.078,v=12.82051282051282,y=.06,b=.001;function w(e,t){const n=(e.r/255)**r,w=(e.g/255)**r,_=(e.b/255)**r,E=(t.r/255)**r,T=(t.g/255)**r,S=(t.b/255)**r;let I,C=n*i+w*s+_*o,k=E*i+T*s+S*o;if(C<=h&&(C+=(h-C)**d),k<=h&&(k+=(h-k)**d),Math.abs(k-C)<f)return 0;if(k>C){const e=(k**a-C**c)*p;I=e<b?0:e<m?e-e*v*y:e-y}else{const e=(k**l-C**u)*g;I=e>-b?0:e>-m?e-e*v*y:e+y}return 100*I}var _=n(7354),E=n(9094);const T=.20689655172413793,S=e=>e>T**3?Math.cbrt(e):e/(3*T**2)+4/29,I=e=>e>T?e**3:3*T**2*(e-4/29);function C(e){const t=S,n=t(e[1]);return[116*n-16,500*(t(e[0]/.95047)-n),200*(n-t(e[2]/1.08883))]}function k(e){const t=I,n=(e[0]+16)/116;return[.95047*t(n+e[1]/500),t(n),1.08883*t(n-e[2]/200)]}const A=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],R=e=>e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055,O=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],x=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function N(e){const t=Array(3),n=R,r=A;for(let i=0;i<3;++i)t[i]=Math.round(255*(0,E.qE)(n(r[i][0]*e[0]+r[i][1]*e[1]+r[i][2]*e[2])));return{r:t[0],g:t[1],b:t[2]}}function D(e){let{r:t,g:n,b:r}=e;const i=[0,0,0],s=x,o=O;t=s(t/255),n=s(n/255),r=s(r/255);for(let a=0;a<3;++a)i[a]=o[a][0]*t+o[a][1]*n+o[a][2]*r;return i}function P(e){return!!e&&/^(#|var\(--|(rgb|hsl)a?\()/.test(e)}function M(e){return P(e)&&!/^((rgb|hsl)a?\()?var\(--/.test(e)}const L=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,F={rgb:(e,t,n,r)=>({r:e,g:t,b:n,a:r}),rgba:(e,t,n,r)=>({r:e,g:t,b:n,a:r}),hsl:(e,t,n,r)=>j({h:e,s:t,l:n,a:r}),hsla:(e,t,n,r)=>j({h:e,s:t,l:n,a:r}),hsv:(e,t,n,r)=>U({h:e,s:t,v:n,a:r}),hsva:(e,t,n,r)=>U({h:e,s:t,v:n,a:r})};function V(e){if("number"===typeof e)return(isNaN(e)||e<0||e>16777215)&&(0,_.OP)(`'${e}' is not a valid hex color`),{r:(16711680&e)>>16,g:(65280&e)>>8,b:255&e};if("string"===typeof e&&L.test(e)){const{groups:t}=e.match(L),{fn:n,values:r}=t,i=r.split(/,\s*/).map((e=>e.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(e)/100:parseFloat(e)));return F[n](...i)}if("string"===typeof e){let t=e.startsWith("#")?e.slice(1):e;[3,4].includes(t.length)?t=t.split("").map((e=>e+e)).join(""):[6,8].includes(t.length)||(0,_.OP)(`'${e}' is not a valid hex(a) color`);const n=parseInt(t,16);return(isNaN(n)||n<0||n>4294967295)&&(0,_.OP)(`'${e}' is not a valid hex(a) color`),z(t)}if("object"===typeof e){if((0,E.zy)(e,["r","g","b"]))return e;if((0,E.zy)(e,["h","s","l"]))return U($(e));if((0,E.zy)(e,["h","s","v"]))return U(e)}throw new TypeError(`Invalid color: ${null==e?e:String(e)||e.constructor.name}\nExpected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function U(e){const{h:t,s:n,v:r,a:i}=e,s=e=>{const i=(e+t/60)%6;return r-r*n*Math.max(Math.min(i,4-i,1),0)},o=[s(5),s(3),s(1)].map((e=>Math.round(255*e)));return{r:o[0],g:o[1],b:o[2],a:i}}function j(e){return U($(e))}function $(e){const{h:t,s:n,l:r,a:i}=e,s=r+n*Math.min(r,1-r),o=0===s?0:2-2*r/s;return{h:t,s:o,v:s,a:i}}function B(e){const t=Math.round(e).toString(16);return("00".substr(0,2-t.length)+t).toUpperCase()}function W(e){let{r:t,g:n,b:r,a:i}=e;return`#${[B(t),B(n),B(r),void 0!==i?B(Math.round(255*i)):""].join("")}`}function z(e){e=K(e);let[t,n,r,i]=(0,E.iv)(e,2).map((e=>parseInt(e,16)));return i=void 0===i?i:i/255,{r:t,g:n,b:r,a:i}}function K(e){return e.startsWith("#")&&(e=e.slice(1)),e=e.replace(/([^0-9a-f])/gi,"F"),3!==e.length&&4!==e.length||(e=e.split("").map((e=>e+e)).join("")),6!==e.length&&(e=(0,E.f)((0,E.f)(e,6),8,"F")),e}function q(e,t){const n=C(D(e));return n[0]=n[0]+10*t,N(k(n))}function H(e,t){const n=C(D(e));return n[0]=n[0]-10*t,N(k(n))}function G(e){const t=V(e);return D(t)[1]}function Q(e){const t=Math.abs(w(V(0),V(e))),n=Math.abs(w(V(16777215),V(e)));return n>Math.min(t,50)?"#fff":"#000"}},7354:function(e,t,n){n.d(t,{CI:function(){return o},OP:function(){return i},yA:function(){return s}});var r=n(6768);function i(e){(0,r.R8)(`Vuetify: ${e}`)}function s(e){(0,r.R8)(`Vuetify error: ${e}`)}function o(e,t){t=Array.isArray(t)?t.slice(0,-1).map((e=>`'${e}'`)).join(", ")+` or '${t.at(-1)}'`:`'${t}'`,(0,r.R8)(`[Vuetify UPGRADE] '${e}' is deprecated, use ${t} instead.`)}},2586:function(e,t,n){n.d(t,{G:function(){return a}});var r=n(9262),i=n(4232),s=n(6768),o=n(1247);function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return(0,o.RW)()({name:n??(0,i.ZH)((0,i.PT)(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t},...(0,r.u)()},setup(t,n){let{slots:r}=n;return()=>(0,s.h)(t.tag,{class:[e,t.class],style:t.style},r.default?.())}})}},1247:function(e,t,n){n.d(t,{RW:function(){return u},cq:function(){return l},pM:function(){return c}});var r=n(2858),i=n(6768),s=n(7354),o=n(9094),a=n(4587);function c(e){if(e._setup=e._setup??e.setup,!e.name)return(0,s.OP)("The component is missing an explicit name, unable to generate default prop value"),e;if(e._setup){e.props=(0,a.j)(e.props??{},e.name)();const t=Object.keys(e.props).filter((e=>"class"!==e&&"style"!==e));e.filterProps=function(e){return(0,o.Up)(e,t)},e.props._as=String,e.setup=function(t,n){const i=(0,r.Y8)();if(!i.value)return e._setup(t,n);const{props:s,provideSubDefaults:o}=(0,r.bL)(t,t._as??e.name,i),a=e._setup(s,n);return o(),a}}return e}function u(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return t=>(e?c:i.pM)(t)}function l(e,t){return t.props=e,t}},7861:function(e,t,n){n.d(t,{MR:function(){return o},nI:function(){return s},v6:function(){return u}});var r=n(6768),i=n(9094);function s(e,t){const n=(0,r.nI)();if(!n)throw new Error(`[Vuetify] ${e} ${t||"must be called from inside a setup function"}`);return n}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"composables";const t=s(e).type;return(0,i.fX)(t?.aliasName||t?.name)}let a=0,c=new WeakMap;function u(){const e=s("getUid");if(c.has(e))return c.get(e);{const t=a++;return c.set(e,t),t}}u.reset=()=>{a=0,c=new WeakMap}},6993:function(e,t,n){n.d(t,{ZK:function(){return r},tB:function(){return i},vd:function(){return s}});const r="undefined"!==typeof window,i=r&&"IntersectionObserver"in window,s=r&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);r&&window},9094:function(e,t,n){n.d(t,{B5:function(){return H},BN:function(){return k},CF:function(){return x},D9:function(){return D},Dg:function(){return d},Gv:function(){return f},Im:function(){return q},K7:function(){return v},Mp:function(){return S},OW:function(){return W},P:function(){return B},Sd:function(){return h},T4:function(){return G},TD:function(){return l},Up:function(){return b},_p:function(){return g},bD:function(){return c},bq:function(){return K},cJ:function(){return _},e9:function(){return P},eX:function(){return z},eq:function(){return U},f:function(){return O},fX:function(){return M},if:function(){return L},iv:function(){return N},j6:function(){return E},jF:function(){return X},lm:function(){return $},m:function(){return Y},mK:function(){return V},no:function(){return u},ph:function(){return C},qE:function(){return R},qr:function(){return J},sg:function(){return A},uP:function(){return m},uR:function(){return j},v6:function(){return Q},yc:function(){return F},zy:function(){return y}});n(4114),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698);var r=n(144),i=n(6768),s=n(4232),o=n(6993);function a(e,t,n){const r=t.length-1;if(r<0)return void 0===e?n:e;for(let i=0;i<r;i++){if(null==e)return n;e=e[t[i]]}return null==e||void 0===e[t[r]]?n:e[t[r]]}function c(e,t){if(e===t)return!0;if(e instanceof Date&&t instanceof Date&&e.getTime()!==t.getTime())return!1;if(e!==Object(e)||t!==Object(t))return!1;const n=Object.keys(e);return n.length===Object.keys(t).length&&n.every((n=>c(e[n],t[n])))}function u(e,t,n){return null!=e&&t&&"string"===typeof t?void 0!==e[t]?e[t]:(t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,""),a(e,t.split("."),n)):n}function l(e,t,n){if(!0===t)return void 0===e?n:e;if(null==t||"boolean"===typeof t)return n;if(e!==Object(e)){if("function"!==typeof t)return n;const r=t(e,n);return"undefined"===typeof r?n:r}if("string"===typeof t)return u(e,t,n);if(Array.isArray(t))return a(e,t,n);if("function"!==typeof t)return n;const r=t(e,n);return"undefined"===typeof r?n:r}function h(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Array.from({length:e},((e,n)=>t+n))}function d(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"px";return null==e||""===e?void 0:isNaN(+e)?String(e):isFinite(+e)?`${Number(e)}${t}`:void 0}function f(e){return null!==e&&"object"===typeof e&&!Array.isArray(e)}function p(e){let t;return null!==e&&"object"===typeof e&&((t=Object.getPrototypeOf(e))===Object.prototype||null===t)}function g(e){if(e&&"$el"in e){const t=e.$el;return t?.nodeType===Node.TEXT_NODE?t.nextElementSibling:t}return e}const m=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16}),v=Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function y(e,t){return t.every((t=>e.hasOwnProperty(t)))}function b(e,t){const n={},r=new Set(Object.keys(e));for(const i of t)r.has(i)&&(n[i]=e[i]);return n}function w(e,t,n){const r=Object.create(null),i=Object.create(null);for(const s in e)t.some((e=>e instanceof RegExp?e.test(s):e===s))&&!n?.some((e=>e===s))?r[s]=e[s]:i[s]=e[s];return[r,i]}function _(e,t){const n={...e};return t.forEach((e=>delete n[e])),n}function E(e,t){const n={};return t.forEach((t=>n[t]=e[t])),n}const T=/^on[^a-z]/,S=e=>T.test(e),I=["onAfterscriptexecute","onAnimationcancel","onAnimationend","onAnimationiteration","onAnimationstart","onAuxclick","onBeforeinput","onBeforescriptexecute","onChange","onClick","onCompositionend","onCompositionstart","onCompositionupdate","onContextmenu","onCopy","onCut","onDblclick","onFocusin","onFocusout","onFullscreenchange","onFullscreenerror","onGesturechange","onGestureend","onGesturestart","onGotpointercapture","onInput","onKeydown","onKeypress","onKeyup","onLostpointercapture","onMousedown","onMousemove","onMouseout","onMouseover","onMouseup","onMousewheel","onPaste","onPointercancel","onPointerdown","onPointerenter","onPointerleave","onPointermove","onPointerout","onPointerover","onPointerup","onReset","onSelect","onSubmit","onTouchcancel","onTouchend","onTouchmove","onTouchstart","onTransitioncancel","onTransitionend","onTransitionrun","onTransitionstart","onWheel"];function C(e){const[t,n]=w(e,[T]),r=_(t,I),[i,s]=w(n,["class","style","id",/^data-/]);return Object.assign(i,t),Object.assign(s,r),[i,s]}function k(e){return null==e?[]:Array.isArray(e)?e:[e]}function A(e,t){let n=0;const i=function(){for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];clearTimeout(n),n=setTimeout((()=>e(...s)),(0,r.R1)(t))};return i.clear=()=>{clearTimeout(n)},i.immediate=e,i}function R(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Math.max(t,Math.min(n,e))}function O(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0";return e+n.repeat(Math.max(0,t-e.length))}function x(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0";return n.repeat(Math.max(0,t-e.length))+e}function N(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const n=[];let r=0;while(r<e.length)n.push(e.substr(r,t)),r+=t;return n}function D(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const r={};for(const i in e)r[i]=e[i];for(const i in t){const s=e[i],o=t[i];p(s)&&p(o)?r[i]=D(s,o,n):n&&Array.isArray(s)&&Array.isArray(o)?r[i]=n(s,o):r[i]=o}return r}function P(e){return e.map((e=>e.type===i.FK?P(e.children):e)).flat()}function M(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(M.cache.has(e))return M.cache.get(e);const t=e.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return M.cache.set(e,t),t}function L(e,t){if(!t||"object"!==typeof t)return[];if(Array.isArray(t))return t.map((t=>L(e,t))).flat(1);if(t.suspense)return L(e,t.ssContent);if(Array.isArray(t.children))return t.children.map((t=>L(e,t))).flat(1);if(t.component){if(Object.getOwnPropertySymbols(t.component.provides).includes(e))return[t.component];if(t.component.subTree)return L(e,t.component.subTree).flat(1)}return[]}M.cache=new Map;function F(e){const t=(0,r.Kh)({}),n=(0,i.EW)(e);return(0,i.nT)((()=>{for(const e in n.value)t[e]=n.value[e]}),{flush:"sync"}),(0,r.QW)(t)}function V(e,t){return e.includes(t)}function U(e){return e[2].toLowerCase()+e.slice(3)}const j=()=>[Function,Array];function $(e,t){return t="on"+(0,s.ZH)(t),!!(e[t]||e[`${t}Once`]||e[`${t}Capture`]||e[`${t}OnceCapture`]||e[`${t}CaptureOnce`])}function B(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(Array.isArray(e))for(const i of e)i(...n);else"function"===typeof e&&e(...n)}function W(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const n=["button","[href]",'input:not([type="hidden"])',"select","textarea","[tabindex]"].map((e=>`${e}${t?':not([tabindex="-1"])':""}:not([disabled])`)).join(", ");return[...e.querySelectorAll(n)]}function z(e,t,n){let r,i=e.indexOf(document.activeElement);const s="next"===t?1:-1;do{i+=s,r=e[i]}while((!r||null==r.offsetParent||!(n?.(r)??1))&&i<e.length&&i>=0);return r}function K(e,t){const n=W(e);if(t)if("first"===t)n[0]?.focus();else if("last"===t)n.at(-1)?.focus();else if("number"===typeof t)n[t]?.focus();else{const r=z(n,t);r?r.focus():K(e,"next"===t?"first":"last")}else e!==document.activeElement&&e.contains(document.activeElement)||n[0]?.focus()}function q(e){return null===e||void 0===e||"string"===typeof e&&""===e.trim()}function H(e,t){const n=o.ZK&&"undefined"!==typeof CSS&&"undefined"!==typeof CSS.supports&&CSS.supports(`selector(${t})`);if(!n)return null;try{return!!e&&e.matches(t)}catch(r){return null}}function G(e){return e.some((e=>!(0,i.vv)(e)||e.type!==i.Mw&&(e.type!==i.FK||G(e.children))))?e:null}function Q(e,t){if(!o.ZK||0===e)return t(),()=>{};const n=window.setTimeout(t,e);return()=>window.clearTimeout(n)}function X(e,t){const n=e.clientX,r=e.clientY,i=t.getBoundingClientRect(),s=i.left,o=i.top,a=i.right,c=i.bottom;return n>=s&&n<=a&&r>=o&&r<=c}function Y(){const e=(0,r.IJ)(),t=t=>{e.value=t};return Object.defineProperty(t,"value",{enumerable:!0,get:()=>e.value,set:t=>e.value=t}),Object.defineProperty(t,"el",{enumerable:!0,get:()=>g(e.value)}),t}function J(e){const t=1===e.key.length,n=!e.ctrlKey&&!e.metaKey&&!e.altKey;return t&&n}},4587:function(e,t,n){function r(e,t){return n=>Object.keys(e).reduce(((r,i)=>{const s="object"===typeof e[i]&&null!=e[i]&&!Array.isArray(e[i]),o=s?e[i]:{type:e[i]};return r[i]=n&&i in n?{...o,default:n[i]}:o,t&&!r[i].source&&(r[i].source=t),r}),{})}n.d(t,{j:function(){return r}})},4600:function(e,t,n){n.d(t,{C:function(){return i}});var r=n(7861);function i(e){const t=(0,r.nI)("useRender");t.render=e}}}]);
//# sourceMappingURL=chunk-vendors.21a92b77.js.map