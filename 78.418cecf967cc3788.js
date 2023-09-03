"use strict";(self.webpackChunkcalculator_app=self.webpackChunkcalculator_app||[]).push([[78],{78:(Kn,pt,c)=>{c.r(pt),c.d(pt,{CalculatorAppModule:()=>Wn});var D=c(814),Ae=c(619),o=c(946);let B=(()=>{var e;class n{constructor(){this.calculatorValue$=new Ae.X("0"),this.viewValue="0",this.firstOperator=0,this.secondOperator=0,this.isOperating=!1,this.clear=!1,this.lastClickedButton="",this.operationsDictionary={"+":(t,i)=>parseFloat((t+i).toFixed(4)),"-":(t,i)=>parseFloat((t-i).toFixed(4)),x:(t,i)=>parseFloat((t*i).toFixed(4)),"/":(t,i)=>parseFloat((t/i).toFixed(4))},this.themeValues=["first-theme","second-theme","third-theme"],this.theme=0}getCalculatorValue(){return this.calculatorValue$.asObservable()}setCalculatorValue(t){this.calculatorValue$.next(t)}generateViewValue(t){const i=parseFloat(this.viewValue);let s=this.viewValue;if("0"===this.viewValue&&(s="."===t?"0":""),t.match(/^[0-9]$/))this.clear?(s=t,this.clear=!1):s+=t;else if(t.match(/^[\+\-\x\/]$/))this.lastClickedButton!=t&&(this.clear=!0,this.isOperating=!0,this.firstOperator=null==this.lastOperation||this.operationsDictionary[this.lastClickedButton]||0==this.firstOperator?i:this.lastOperation(this.firstOperator,i),s=this.firstOperator.toString(),this.lastOperation=this.operationsDictionary[t]);else{const a={".":()=>{s.includes(".")||(s+=t)},"=":()=>{null!=this.lastOperation&&(this.isOperating?(this.secondOperator=i,this.firstOperator=this.lastOperation(this.firstOperator,this.secondOperator),this.isOperating=!1):this.firstOperator=this.lastOperation(i,this.secondOperator),s=this.firstOperator.toString(),this.firstOperator=0,this.clear=!0)},DEL:()=>s="",RESET:()=>{s="",this.lastOperation=void 0}};null!=a[t]&&a[t]()}this.lastClickedButton=t,this.formatViewValue(s)}formatViewValue(t){parseFloat(t)==1/0||isNaN(parseFloat(t))?t="0":parseFloat(t)>=999999999999?t="999999999999":parseFloat(t)<=-99999999999&&(t="-99999999999"),t.length>12&&(t=t.slice(0,12)),this.viewValue=""===t?"0":t;const[i,s]=this.viewValue.split(".");let l="",u=0;for(let f=i.length-1;f>=0;f--){const p=i[f];p.match(/^[0-9\-]$/)&&(u++,u>3&&"-"!==p&&(l=l.concat("."),u=1),l=l.concat(p))}l=[l.split("").reverse().join(""),s].filter(Boolean).join(","),this.setCalculatorValue(l)}setTheme(t){null==t||null==t||(document.body.classList.remove(this.themeValues[this.theme]),this.theme=t,document.body.classList.add(this.themeValues[this.theme]))}}return(e=n).\u0275fac=function(t){return new(t||e)},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),n})(),De=(()=>{var e;class n{constructor(t){this.calculatorAppService=t,this.calculatorValue=""}ngOnInit(){this.calculatorValueSubscription=this.calculatorAppService.getCalculatorValue().subscribe(t=>this.calculatorValue=t)}ngOnDestroy(){this.calculatorValueSubscription?.unsubscribe()}}return(e=n).\u0275fac=function(t){return new(t||e)(o.Y36(B))},e.\u0275cmp=o.Xpm({type:e,selectors:[["ca-calculator-text"]],decls:3,vars:1,consts:[[1,"calculator-text-container"]],template:function(t,i){1&t&&(o.TgZ(0,"div",0)(1,"span"),o._uU(2),o.qZA()()),2&t&&(o.xp6(2),o.Oqu(i.calculatorValue))},styles:[".calculator-text-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center;padding:.7em .5em;height:1em;border-radius:8px;background-color:var(--blue-screen-background);font-size:2em;cursor:default}@media (max-width: 500px){.calculator-text-container[_ngcontent-%COMP%]{font-size:1.5em}}"]}),n})();var ft=c(829),mt=c(592),Oe=c(631),Ee=c(266),v=c(674),gt=c(400);const we=["addListener","removeListener"],Fe=["addEventListener","removeEventListener"],Be=["on","off"];function j(e,n,r,t){if((0,v.m)(r)&&(t=r,r=void 0),t)return j(e,n,r).pipe((0,gt.Z)(t));const[i,s]=function xe(e){return(0,v.m)(e.addEventListener)&&(0,v.m)(e.removeEventListener)}(e)?Fe.map(a=>l=>e[a](n,l,r)):function Se(e){return(0,v.m)(e.addListener)&&(0,v.m)(e.removeListener)}(e)?we.map(_t(e,n)):function Ne(e){return(0,v.m)(e.on)&&(0,v.m)(e.off)}(e)?Be.map(_t(e,n)):[];if(!i&&(0,Ee.z)(e))return(0,Oe.z)(a=>j(a,n,r))((0,ft.Xf)(e));if(!i)throw new TypeError("Invalid event target");return new mt.y(a=>{const l=(...u)=>a.next(1<u.length?u:u[0]);return i(l),()=>s(l)})}function _t(e,n){return r=>t=>e[r](n,t)}var Ct=c(398);const ke=["calculatorButton"];let Te=(()=>{var e;class n{constructor(){this.value="",this.classList=[],this.clickCalculatorButtonEmitter=new o.vpe}ngAfterViewInit(){this.calculatorButton&&this.classList.forEach(t=>this.calculatorButton?.nativeElement.classList.add(t))}clickCalculatorButton(){this.clickCalculatorButtonEmitter.emit(this.value)}preventKeyDown(t){t.preventDefault()}}return(e=n).\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["ca-calculator-button"]],viewQuery:function(t,i){if(1&t&&o.Gf(ke,5),2&t){let s;o.iGM(s=o.CRH())&&(i.calculatorButton=s.first)}},inputs:{value:"value",classList:"classList"},outputs:{clickCalculatorButtonEmitter:"clickCalculatorButton"},decls:3,vars:1,consts:[[1,"calculator-button",3,"click","keydown"],["calculatorButton",""]],template:function(t,i){1&t&&(o.TgZ(0,"button",0,1),o.NdJ("click",function(){return i.clickCalculatorButton()})("keydown",function(a){return i.preventKeyDown(a)}),o._uU(2),o.qZA()),2&t&&(o.xp6(2),o.Oqu(i.value))},styles:[".calculator-button[_ngcontent-%COMP%]{all:unset;width:100%;display:flex;justify-content:center;align-items:center;border-radius:10px;background-color:var(--light-grayish-orange);border-bottom:solid 4px var(--grayish-orange);color:var(--very-dark-grayish-blue);height:1.8em;font-size:1.3em;cursor:pointer}.calculator-button[_ngcontent-%COMP%]:hover{margin-top:1px;border-bottom-width:3px;filter:brightness(1.5)}.calculator-button[_ngcontent-%COMP%]:focus{margin-top:2px;border-bottom-width:2px}.primary-button[_ngcontent-%COMP%]{background-color:var(--desaturated-dark-blue);border-bottom-color:var(--desaturated-dark-blue-outline);color:var(--white)}.secondary-button[_ngcontent-%COMP%]{background-color:var(--red);border-bottom-color:var(--dark-red);color:var(--white)}.action-button[_ngcontent-%COMP%]{font-size:1em;height:calc(100% - 4px)}@media (max-width: 500px){.calculator-button[_ngcontent-%COMP%]:hover{margin-top:2px!important;border-bottom-width:2px!important;filter:none}}"]}),n})();const vt=function(){return["primary-button","action-button"]},S=function(){return["action-button"]},N=function(e){return{active:e}},Ge=function(){return["secondary-button","action-button"]};let Pe=(()=>{var e;class n{constructor(t){this.calculatorAppService=t,this.clickedButton=""}ngOnInit(){this.clickedButtonSubscription=j(document,"keydown").pipe((0,Ct.U)(({key:t})=>({",":".",Backspace:"DEL",Escape:"RESET",Enter:"=","*":"x"}[t]||t))).subscribe(this.emitCalculatorValue.bind(this))}ngOnDestroy(){this.clickedButtonSubscription?.unsubscribe()}emitCalculatorValue(t){this.clickedButton=t,this.calculatorAppService.generateViewValue(t)}}return(e=n).\u0275fac=function(t){return new(t||e)(o.Y36(B))},e.\u0275cmp=o.Xpm({type:e,selectors:[["ca-calculator-buttons-container"]],decls:19,vars:26,consts:[[1,"calculator-buttons-container"],["value","7",3,"clickCalculatorButton"],["value","8",3,"clickCalculatorButton"],["value","9",3,"clickCalculatorButton"],["value","DEL",3,"classList","clickCalculatorButton"],["value","4",3,"clickCalculatorButton"],["value","5",3,"clickCalculatorButton"],["value","6",3,"clickCalculatorButton"],["value","+",3,"classList","ngClass","clickCalculatorButton"],["value","1",3,"clickCalculatorButton"],["value","2",3,"clickCalculatorButton"],["value","3",3,"clickCalculatorButton"],["value","-",3,"classList","ngClass","clickCalculatorButton"],["value",".",3,"clickCalculatorButton"],["value","0",3,"clickCalculatorButton"],["value","/",3,"classList","ngClass","clickCalculatorButton"],["value","x",3,"classList","ngClass","clickCalculatorButton"],["value","RESET",1,"large-button",3,"classList","clickCalculatorButton"],["value","=",1,"large-button",3,"classList","clickCalculatorButton"]],template:function(t,i){1&t&&(o.TgZ(0,"div",0)(1,"ca-calculator-button",1),o.NdJ("clickCalculatorButton",function(a){return i.emitCalculatorValue(a)}),o.qZA(),o.TgZ(2,"ca-calculator-button",2),o.NdJ("clickCalculatorButton",function(a){return i.emitCalculatorValue(a)}),o.qZA(),o.TgZ(3,"ca-calculator-button",3),o.NdJ("clickCalculatorButton",function(a){return i.emitCalculatorValue(a)}),o.qZA(),o.TgZ(4,"ca-calculator-button",4),o.NdJ("clickCalculatorButton",function(a){return i.emitCalculatorValue(a)}),o.qZA(),o.TgZ(5,"ca-calculator-button",5),o.NdJ("clickCalculatorButton",function(a){return i.emitCalculatorValue(a)}),o.qZA(),o.TgZ(6,"ca-calculator-button",6),o.NdJ("clickCalculatorButton",function(a){return i.emitCalculatorValue(a)}),o.qZA(),o.TgZ(7,"ca-calculator-button",7),o.NdJ("clickCalculatorButton",function(a){return i.emitCalculatorValue(a)}),o.qZA(),o.TgZ(8,"ca-calculator-button",8),o.NdJ("clickCalculatorButton",function(a){return i.emitCalculatorValue(a)}),o.qZA(),o.TgZ(9,"ca-calculator-button",9),o.NdJ("clickCalculatorButton",function(a){return i.emitCalculatorValue(a)}),o.qZA(),o.TgZ(10,"ca-calculator-button",10),o.NdJ("clickCalculatorButton",function(a){return i.emitCalculatorValue(a)}),o.qZA(),o.TgZ(11,"ca-calculator-button",11),o.NdJ("clickCalculatorButton",function(a){return i.emitCalculatorValue(a)}),o.qZA(),o.TgZ(12,"ca-calculator-button",12),o.NdJ("clickCalculatorButton",function(a){return i.emitCalculatorValue(a)}),o.qZA(),o.TgZ(13,"ca-calculator-button",13),o.NdJ("clickCalculatorButton",function(a){return i.emitCalculatorValue(a)}),o.qZA(),o.TgZ(14,"ca-calculator-button",14),o.NdJ("clickCalculatorButton",function(a){return i.emitCalculatorValue(a)}),o.qZA(),o.TgZ(15,"ca-calculator-button",15),o.NdJ("clickCalculatorButton",function(a){return i.emitCalculatorValue(a)}),o.qZA(),o.TgZ(16,"ca-calculator-button",16),o.NdJ("clickCalculatorButton",function(a){return i.emitCalculatorValue(a)}),o.qZA(),o.TgZ(17,"ca-calculator-button",17),o.NdJ("clickCalculatorButton",function(a){return i.emitCalculatorValue(a)}),o.qZA(),o.TgZ(18,"ca-calculator-button",18),o.NdJ("clickCalculatorButton",function(a){return i.emitCalculatorValue(a)}),o.qZA()()),2&t&&(o.xp6(4),o.Q6J("classList",o.DdM(11,vt)),o.xp6(4),o.Q6J("classList",o.DdM(12,S))("ngClass",o.VKq(13,N,"+"===i.clickedButton)),o.xp6(4),o.Q6J("classList",o.DdM(15,S))("ngClass",o.VKq(16,N,"-"===i.clickedButton)),o.xp6(3),o.Q6J("classList",o.DdM(18,S))("ngClass",o.VKq(19,N,"/"===i.clickedButton)),o.xp6(1),o.Q6J("classList",o.DdM(21,S))("ngClass",o.VKq(22,N,"x"===i.clickedButton)),o.xp6(1),o.Q6J("classList",o.DdM(24,vt)),o.xp6(1),o.Q6J("classList",o.DdM(25,Ge)))},dependencies:[D.mk,Te],styles:[".calculator-buttons-container[_ngcontent-%COMP%]{background-color:var(--blue-toggle-background);border-radius:8px;padding:1em;display:grid;grid-template-columns:repeat(4,1fr);grid-auto-columns:1fr;grid-auto-rows:1fr;row-gap:.8em;column-gap:.8em}.calculator-buttons-container[_ngcontent-%COMP%]   .large-button[_ngcontent-%COMP%]{grid-column:span 2}.calculator-buttons-container[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]     .calculator-button{filter:brightness(.7)}@media (max-width: 500px){.calculator-buttons-container[_ngcontent-%COMP%]{row-gap:.6em!important;column-gap:.6em!important}}"]}),n})();var Ie=c(715),He=c(453),Ue=c(564),Le=c(251),Re=c(714);let yt=(()=>{var e;class n{constructor(t,i){this._renderer=t,this._elementRef=i,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}}return(e=n).\u0275fac=function(t){return new(t||e)(o.Y36(o.Qsj),o.Y36(o.SBq))},e.\u0275dir=o.lG2({type:e}),n})(),y=(()=>{var e;class n extends yt{}return(e=n).\u0275fac=function(){let r;return function(i){return(r||(r=o.n5z(e)))(i||e)}}(),e.\u0275dir=o.lG2({type:e,features:[o.qOj]}),n})();const m=new o.OlP("NgValueAccessor"),Ze={provide:m,useExisting:(0,o.Gpc)(()=>x),multi:!0},Je=new o.OlP("CompositionEventMode");let x=(()=>{var e;class n extends yt{constructor(t,i,s){super(t,i),this._compositionMode=s,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function Ye(){const e=(0,D.q)()?(0,D.q)().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}())}writeValue(t){this.setProperty("value",t??"")}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}}return(e=n).\u0275fac=function(t){return new(t||e)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(Je,8))},e.\u0275dir=o.lG2({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,i){1&t&&o.NdJ("input",function(a){return i._handleInput(a.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(a){return i._compositionEnd(a.target.value)})},features:[o._Bn([Ze]),o.qOj]}),n})();const d=new o.OlP("NgValidators"),_=new o.OlP("NgAsyncValidators");function St(e){return null!=e}function Nt(e){return(0,o.QGY)(e)?(0,Ie.D)(e):e}function xt(e){let n={};return e.forEach(r=>{n=null!=r?{...n,...r}:n}),0===Object.keys(n).length?null:n}function kt(e,n){return n.map(r=>r(e))}function Tt(e){return e.map(n=>function $e(e){return!e.validate}(n)?n:r=>n.validate(r))}function Z(e){return null!=e?function Gt(e){if(!e)return null;const n=e.filter(St);return 0==n.length?null:function(r){return xt(kt(r,n))}}(Tt(e)):null}function Y(e){return null!=e?function Pt(e){if(!e)return null;const n=e.filter(St);return 0==n.length?null:function(r){return function qe(...e){const n=(0,Ue.jO)(e),{args:r,keys:t}=(0,He.D)(e),i=new mt.y(s=>{const{length:a}=r;if(!a)return void s.complete();const l=new Array(a);let u=a,f=a;for(let p=0;p<a;p++){let ht=!1;(0,ft.Xf)(r[p]).subscribe((0,Le.x)(s,Qn=>{ht||(ht=!0,f--),l[p]=Qn},()=>u--,void 0,()=>{(!u||!ht)&&(f||s.next(t?(0,Re.n)(t,l):l),s.complete())}))}});return n?i.pipe((0,gt.Z)(n)):i}(kt(r,n).map(Nt)).pipe((0,Ct.U)(xt))}}(Tt(e)):null}function It(e,n){return null===e?[n]:Array.isArray(e)?[...e,n]:[e,n]}function J(e){return e?Array.isArray(e)?e:[e]:[]}function T(e,n){return Array.isArray(e)?e.includes(n):e===n}function Lt(e,n){const r=J(n);return J(e).forEach(i=>{T(r,i)||r.push(i)}),r}function Rt(e,n){return J(n).filter(r=>!T(e,r))}class qt{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=Z(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=Y(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control&&this.control.reset(n)}hasError(n,r){return!!this.control&&this.control.hasError(n,r)}getError(n,r){return this.control?this.control.getError(n,r):null}}class h extends qt{get formDirective(){return null}get path(){return null}}class C extends qt{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class jt{constructor(n){this._cd=n}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let Zt=(()=>{var e;class n extends jt{constructor(t){super(t)}}return(e=n).\u0275fac=function(t){return new(t||e)(o.Y36(C,2))},e.\u0275dir=o.lG2({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,i){2&t&&o.ekj("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)},features:[o.qOj]}),n})();const O="VALID",P="INVALID",b="PENDING",E="DISABLED";function I(e){return null!=e&&!Array.isArray(e)&&"object"==typeof e}class $t{constructor(n,r){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(n),this._assignAsyncValidators(r)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get valid(){return this.status===O}get invalid(){return this.status===P}get pending(){return this.status==b}get disabled(){return this.status===E}get enabled(){return this.status!==E}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(Lt(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Lt(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(Rt(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(Rt(n,this._rawAsyncValidators))}hasValidator(n){return T(this._rawValidators,n)}hasAsyncValidator(n){return T(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){this.touched=!0,this._parent&&!n.onlySelf&&this._parent.markAsTouched(n)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(n=>n.markAllAsTouched())}markAsUntouched(n={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0})}),this._parent&&!n.onlySelf&&this._parent._updateTouched(n)}markAsDirty(n={}){this.pristine=!1,this._parent&&!n.onlySelf&&this._parent.markAsDirty(n)}markAsPristine(n={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(r=>{r.markAsPristine({onlySelf:!0})}),this._parent&&!n.onlySelf&&this._parent._updatePristine(n)}markAsPending(n={}){this.status=b,!1!==n.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!n.onlySelf&&this._parent.markAsPending(n)}disable(n={}){const r=this._parentMarkedDirty(n.onlySelf);this.status=E,this.errors=null,this._forEachChild(t=>{t.disable({...n,onlySelf:!0})}),this._updateValue(),!1!==n.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...n,skipPristineCheck:r}),this._onDisabledChange.forEach(t=>t(!0))}enable(n={}){const r=this._parentMarkedDirty(n.onlySelf);this.status=O,this._forEachChild(t=>{t.enable({...n,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors({...n,skipPristineCheck:r}),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(n){this._parent&&!n.onlySelf&&(this._parent.updateValueAndValidity(n),n.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===O||this.status===b)&&this._runAsyncValidator(n.emitEvent)),!1!==n.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.updateValueAndValidity(n)}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(r=>r._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?E:O}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n){if(this.asyncValidator){this.status=b,this._hasOwnPendingAsyncValidator=!0;const r=Nt(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(t=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(t,{emitEvent:n})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(n,r={}){this.errors=n,this._updateControlsErrors(!1!==r.emitEvent)}get(n){let r=n;return null==r||(Array.isArray(r)||(r=r.split(".")),0===r.length)?null:r.reduce((t,i)=>t&&t._find(i),this)}getError(n,r){const t=r?this.get(r):this;return t&&t.errors?t.errors[n]:null}hasError(n,r){return!!this.getError(n,r)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(n)}_initObservables(){this.valueChanges=new o.vpe,this.statusChanges=new o.vpe}_calculateStatus(){return this._allControlsDisabled()?E:this.errors?P:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(b)?b:this._anyControlsHaveStatus(P)?P:O}_anyControlsHaveStatus(n){return this._anyControls(r=>r.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n={}){this.pristine=!this._anyControlsDirty(),this._parent&&!n.onlySelf&&this._parent._updatePristine(n)}_updateTouched(n={}){this.touched=this._anyControlsTouched(),this._parent&&!n.onlySelf&&this._parent._updateTouched(n)}_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){I(n)&&null!=n.updateOn&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=function tn(e){return Array.isArray(e)?Z(e):e||null}(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=function en(e){return Array.isArray(e)?Y(e):e||null}(this._rawAsyncValidators)}}const M=new o.OlP("CallSetDisabledState",{providedIn:"root",factory:()=>H}),H="always";function w(e,n,r=H){(function X(e,n){const r=function Ht(e){return e._rawValidators}(e);null!==n.validator?e.setValidators(It(r,n.validator)):"function"==typeof r&&e.setValidators([r]);const t=function Ut(e){return e._rawAsyncValidators}(e);null!==n.asyncValidator?e.setAsyncValidators(It(t,n.asyncValidator)):"function"==typeof t&&e.setAsyncValidators([t]);const i=()=>e.updateValueAndValidity();R(n._rawValidators,i),R(n._rawAsyncValidators,i)})(e,n),n.valueAccessor.writeValue(e.value),(e.disabled||"always"===r)&&n.valueAccessor.setDisabledState?.(e.disabled),function rn(e,n){n.valueAccessor.registerOnChange(r=>{e._pendingValue=r,e._pendingChange=!0,e._pendingDirty=!0,"change"===e.updateOn&&Wt(e,n)})}(e,n),function an(e,n){const r=(t,i)=>{n.valueAccessor.writeValue(t),i&&n.viewToModelUpdate(t)};e.registerOnChange(r),n._registerOnDestroy(()=>{e._unregisterOnChange(r)})}(e,n),function sn(e,n){n.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,"blur"===e.updateOn&&e._pendingChange&&Wt(e,n),"submit"!==e.updateOn&&e.markAsTouched()})}(e,n),function on(e,n){if(n.valueAccessor.setDisabledState){const r=t=>{n.valueAccessor.setDisabledState(t)};e.registerOnDisabledChange(r),n._registerOnDestroy(()=>{e._unregisterOnDisabledChange(r)})}}(e,n)}function R(e,n){e.forEach(r=>{r.registerOnValidatorChange&&r.registerOnValidatorChange(n)})}function Wt(e,n){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function Xt(e,n){const r=e.indexOf(n);r>-1&&e.splice(r,1)}function te(e){return"object"==typeof e&&null!==e&&2===Object.keys(e).length&&"value"in e&&"disabled"in e}const ee=class extends $t{constructor(n=null,r,t){super(function W(e){return(I(e)?e.validators:e)||null}(r),function Q(e,n){return(I(n)?n.asyncValidators:e)||null}(t,r)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(n),this._setUpdateStrategy(r),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),I(r)&&(r.nonNullable||r.initialValueIsDefault)&&(this.defaultValue=te(n)?n.value:n)}setValue(n,r={}){this.value=this._pendingValue=n,this._onChange.length&&!1!==r.emitModelToViewChange&&this._onChange.forEach(t=>t(this.value,!1!==r.emitViewToModelChange)),this.updateValueAndValidity(r)}patchValue(n,r={}){this.setValue(n,r)}reset(n=this.defaultValue,r={}){this._applyFormState(n),this.markAsPristine(r),this.markAsUntouched(r),this.setValue(this.value,r),this._pendingChange=!1}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){Xt(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){Xt(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(n){te(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}},mn={provide:C,useExisting:(0,o.Gpc)(()=>rt)},re=(()=>Promise.resolve())();let rt=(()=>{var e;class n extends C{constructor(t,i,s,a,l,u){super(),this._changeDetectorRef=l,this.callSetDisabledState=u,this.control=new ee,this._registered=!1,this.name="",this.update=new o.vpe,this._parent=t,this._setValidators(i),this._setAsyncValidators(s),this.valueAccessor=function nt(e,n){if(!n)return null;let r,t,i;return Array.isArray(n),n.forEach(s=>{s.constructor===x?r=s:function cn(e){return Object.getPrototypeOf(e.constructor)===y}(s)?t=s:i=s}),i||t||r||null}(0,a)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){const i=t.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),function et(e,n){if(!e.hasOwnProperty("model"))return!1;const r=e.model;return!!r.isFirstChange()||!Object.is(n,r.currentValue)}(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){w(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(t){re.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){const i=t.isDisabled.currentValue,s=0!==i&&(0,o.VuI)(i);re.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?function U(e,n){return[...n.path,e]}(t,this._parent):[t]}}return(e=n).\u0275fac=function(t){return new(t||e)(o.Y36(h,9),o.Y36(d,10),o.Y36(_,10),o.Y36(m,10),o.Y36(o.sBO,8),o.Y36(M,8))},e.\u0275dir=o.lG2({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[o._Bn([mn]),o.qOj,o.TTD]}),n})();const Cn={provide:m,useExisting:(0,o.Gpc)(()=>it),multi:!0};let se=(()=>{var e;class n{}return(e=n).\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({}),n})(),vn=(()=>{var e;class n{constructor(){this._accessors=[]}add(t,i){this._accessors.push([t,i])}remove(t){for(let i=this._accessors.length-1;i>=0;--i)if(this._accessors[i][1]===t)return void this._accessors.splice(i,1)}select(t){this._accessors.forEach(i=>{this._isSameGroup(i,t)&&i[1]!==t&&i[1].fireUncheck(t.value)})}_isSameGroup(t,i){return!!t[0].control&&t[0]._parent===i._control._parent&&t[1].name===i.name}}return(e=n).\u0275fac=function(t){return new(t||e)},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:se}),n})(),it=(()=>{var e;class n extends y{constructor(t,i,s,a){super(t,i),this._registry=s,this._injector=a,this.setDisabledStateFired=!1,this.onChange=()=>{},this.callSetDisabledState=(0,o.f3M)(M,{optional:!0})??H}ngOnInit(){this._control=this._injector.get(C),this._checkName(),this._registry.add(this._control,this)}ngOnDestroy(){this._registry.remove(this)}writeValue(t){this._state=t===this.value,this.setProperty("checked",this._state)}registerOnChange(t){this._fn=t,this.onChange=()=>{t(this.value),this._registry.select(this)}}setDisabledState(t){(this.setDisabledStateFired||t||"whenDisabledForLegacyCode"===this.callSetDisabledState)&&this.setProperty("disabled",t),this.setDisabledStateFired=!0}fireUncheck(t){this.writeValue(t)}_checkName(){!this.name&&this.formControlName&&(this.name=this.formControlName)}}return(e=n).\u0275fac=function(t){return new(t||e)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(vn),o.Y36(o.zs3))},e.\u0275dir=o.lG2({type:e,selectors:[["input","type","radio","formControlName",""],["input","type","radio","formControl",""],["input","type","radio","ngModel",""]],hostBindings:function(t,i){1&t&&o.NdJ("change",function(){return i.onChange()})("blur",function(){return i.onTouched()})},inputs:{name:"name",formControlName:"formControlName",value:"value"},features:[o._Bn([Cn]),o.qOj]}),n})(),Un=(()=>{var e;class n{}return(e=n).\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[se]}),n})(),Rn=(()=>{var e;class n{static withConfig(t){return{ngModule:n,providers:[{provide:M,useValue:t.callSetDisabledState??H}]}}}return(e=n).\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[Un]}),n})();const qn=["slideValue"],A=function(e){return{active:e}};let jn=(()=>{var e;class n{constructor(t,i){this.cd=t,this.calculatorAppService=i,this.themeValues=["4px","29px","54px"],this.themeValue=0}ngAfterViewInit(){this.slideValue&&(this.themeValue=parseInt(localStorage.getItem("theme")||"0"),this.toggleValue(),this.cd.detectChanges())}toggleValue(){this.slideValue&&(this.slideValue.nativeElement.style.left=this.themeValues[this.themeValue],this.setLocalStorageValue(this.themeValue),this.calculatorAppService.setTheme(this.themeValue))}setLocalStorageValue(t){localStorage.setItem("theme",t.toString())}}return(e=n).\u0275fac=function(t){return new(t||e)(o.Y36(o.sBO),o.Y36(B))},e.\u0275cmp=o.Xpm({type:e,selectors:[["ca-slide-element"]],viewQuery:function(t,i){if(1&t&&o.Gf(qn,5),2&t){let s;o.iGM(s=o.CRH())&&(i.slideValue=s.first)}},decls:17,vars:24,consts:[[1,"flex-container"],[1,"theme-title"],[1,"slide-container"],[1,"labels-container"],["for","first-theme",3,"ngClass"],["for","second-theme",3,"ngClass"],["for","third-theme",3,"ngClass"],[1,"slide-element-container"],[1,"slide-element-view-value"],["slideValue",""],["type","radio","id","first-theme","name","theme",3,"ngModel","ngClass","value","change","ngModelChange"],["type","radio","id","second-theme","name","theme",3,"ngModel","ngClass","value","change","ngModelChange"],["type","radio","id","third-theme","name","theme",3,"ngModel","ngClass","value","change","ngModelChange"]],template:function(t,i){1&t&&(o.TgZ(0,"div",0)(1,"span",1),o._uU(2,"THEME"),o.qZA(),o.TgZ(3,"div",2)(4,"div",3)(5,"label",4),o._uU(6,"1"),o.qZA(),o.TgZ(7,"label",5),o._uU(8,"2"),o.qZA(),o.TgZ(9,"label",6),o._uU(10,"3"),o.qZA()(),o.TgZ(11,"div",7),o._UZ(12,"span",8,9),o.TgZ(14,"input",10),o.NdJ("change",function(){return i.toggleValue()})("ngModelChange",function(a){return i.themeValue=a}),o.qZA(),o.TgZ(15,"input",11),o.NdJ("change",function(){return i.toggleValue()})("ngModelChange",function(a){return i.themeValue=a}),o.qZA(),o.TgZ(16,"input",12),o.NdJ("change",function(){return i.toggleValue()})("ngModelChange",function(a){return i.themeValue=a}),o.qZA()()()()),2&t&&(o.xp6(5),o.Q6J("ngClass",o.VKq(12,A,0===i.themeValue)),o.xp6(2),o.Q6J("ngClass",o.VKq(14,A,1===i.themeValue)),o.xp6(2),o.Q6J("ngClass",o.VKq(16,A,2===i.themeValue)),o.xp6(5),o.Q6J("ngModel",i.themeValue)("ngClass",o.VKq(18,A,0===i.themeValue))("value",0),o.xp6(1),o.Q6J("ngModel",i.themeValue)("ngClass",o.VKq(20,A,1===i.themeValue))("value",1),o.xp6(1),o.Q6J("ngModel",i.themeValue)("ngClass",o.VKq(22,A,2===i.themeValue))("value",2))},dependencies:[D.mk,x,it,Zt,rt],styles:[".flex-container[_ngcontent-%COMP%]{font-size:12px;letter-spacing:1px;display:flex;row-gap:1em;column-gap:2em;flex-wrap:wrap;align-items:flex-end}.flex-container[_ngcontent-%COMP%]   .theme-title[_ngcontent-%COMP%]{margin-bottom:5px}.flex-container[_ngcontent-%COMP%]   .slide-container[_ngcontent-%COMP%]{width:75px;display:flex;flex-direction:column;row-gap:5px}.flex-container[_ngcontent-%COMP%]   .slide-container[_ngcontent-%COMP%]   .labels-container[_ngcontent-%COMP%]{display:flex;align-items:center}.flex-container[_ngcontent-%COMP%]   .slide-container[_ngcontent-%COMP%]   .labels-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{cursor:pointer;width:100%;text-align:center}.flex-container[_ngcontent-%COMP%]   .slide-container[_ngcontent-%COMP%]   .labels-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover{filter:brightness(.8)}.flex-container[_ngcontent-%COMP%]   .slide-container[_ngcontent-%COMP%]   .slide-element-container[_ngcontent-%COMP%]{background-color:var(--blue-toggle-background);border-radius:75px;height:25px;position:relative;display:flex;align-items:center;justify-content:space-around}.flex-container[_ngcontent-%COMP%]   .slide-container[_ngcontent-%COMP%]   .slide-element-container[_ngcontent-%COMP%]   .slide-element-view-value[_ngcontent-%COMP%]{background-color:var(--red);height:17px;width:17px;position:absolute;top:4px;left:4px;border-radius:50%}.flex-container[_ngcontent-%COMP%]   .slide-container[_ngcontent-%COMP%]   .slide-element-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{cursor:pointer;opacity:0;margin:0;flex-grow:1;height:100%}.active[_ngcontent-%COMP%]{filter:brightness(.8);cursor:default!important}"]}),n})(),Zn=(()=>{var e;class n{constructor(){}}return(e=n).\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["ca-calculator-header"]],decls:4,vars:0,consts:[[1,"calculator-header-container"]],template:function(t,i){1&t&&(o.TgZ(0,"div",0)(1,"span"),o._uU(2,"calc"),o.qZA(),o._UZ(3,"ca-slide-element"),o.qZA())},dependencies:[jn],styles:[".calculator-header-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}@media (max-width: 500px){[_nghost-%COMP%]{width:100%}[_nghost-%COMP%]   .calculator-header-container[_ngcontent-%COMP%]{font-size:1.5em}}"]}),n})(),Yn=(()=>{var e;class n{constructor(){}}return(e=n).\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["ca-calculator-box"]],decls:4,vars:0,consts:[[1,"calculator-box-container"]],template:function(t,i){1&t&&(o.TgZ(0,"div",0),o._UZ(1,"ca-calculator-header")(2,"ca-calculator-text")(3,"ca-calculator-buttons-container"),o.qZA())},dependencies:[De,Pe,Zn],styles:["[_nghost-%COMP%]{width:500px;margin:1em}[_nghost-%COMP%]   .calculator-box-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;row-gap:1em}@media (max-width: 500px){[_nghost-%COMP%]{width:100%}}"]}),n})(),Jn=(()=>{var e;class n{}return(e=n).\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["ca-calculator-app"]],features:[o._Bn([B])],decls:9,vars:0,consts:[[1,"attribution"],["href","https://www.frontendmentor.io?ref=challenge","target","_blank"],["target","_blank","href","https://www.manuelvictoria.net"]],template:function(t,i){1&t&&(o._UZ(0,"ca-calculator-box"),o.TgZ(1,"footer",0),o._uU(2," Challenge by "),o.TgZ(3,"a",1),o._uU(4,"Frontend Mentor"),o.qZA(),o._uU(5,". Coded by "),o.TgZ(6,"a",2),o._uU(7,"Manuel Victoria"),o.qZA(),o._uU(8,".\n"),o.qZA())},dependencies:[Yn],styles:["@font-face{font-family:leagueSpartan;src:url(league_spartan.d102c4bc9cb3e846.ttf)}[_nghost-%COMP%]{width:100%;min-height:100%;display:flex;justify-content:center;align-items:center;background-color:var(--blue-main-background);color:var(--main-text-color);font-family:leagueSpartan;font-weight:700;font-size:1.5em}.attribution[_ngcontent-%COMP%]{font-size:11px;text-align:center;position:fixed;bottom:0;width:100%;font-weight:200;background-color:var(--blue-screen-background);padding:4px}.attribution[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--main-text-color);font-weight:400}@media (max-width: 320px){[_nghost-%COMP%]{font-size:1em}}*[_ngcontent-%COMP%]{touch-action:manipulation}"]}),n})();var Me=c(72);const zn=[{path:"",component:Jn},{path:"**",pathMatch:"full",redirectTo:""}];let $n=(()=>{var e;class n{}return(e=n).\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[Me.Bz.forChild(zn),Me.Bz]}),n})(),Wn=(()=>{var e;class n{}return(e=n).\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[D.ez,Rn,$n]}),n})()}}]);