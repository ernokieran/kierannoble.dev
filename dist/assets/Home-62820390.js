import{j as e,L as i,a,F as s,r,P as c}from"./index-54834986.js";function t(o){return e("div",{className:`${o.name} ${o.className}`,children:e(i,{to:o.route,children:a("article",{className:"portfolio-card",children:[a("div",{className:"portfolio-card__title",children:[e("div",{className:"portfolio-card__title-logo"}),e("div",{className:"portfolio-card__title-description"})]}),e("div",{className:"portfolio-card__chip"}),o.route!=null&&a(s,{children:[e("div",{className:"portfolio-card__action"}),e("span",{className:"portfolio-card__action-text"})]})]})})})}const l="/assets/me-15cf122d.webp";function n(){return a("div",{children:[a("header",{className:"intro",children:[e("img",{className:"intro__avatar",src:l,height:"150",alt:"A photo of Kieran Noble",loading:"lazy",decoding:"async"}),a("div",{className:"intro__text-container",children:[e("div",{className:"intro__name",children:"Howdy, I'm Kieran"}),e("div",{className:"intro__title",children:"Full Stack Developer"}),e("div",{className:"seperator seperator--small"}),e("div",{className:"intro__description",children:"Hello There! I'm an aspiring and enthusiastic full stack web experience developer 🙋‍♂️"})]})]}),e("div",{className:"seperator"})]})}function m(){const{setProject:o}=r.useContext(c);return r.useEffect(()=>{o("home")},[]),a("div",{children:[e(n,{}),a("main",{className:"layout",children:[a("section",{className:"layout__row",children:[e(t,{route:"/project/harmony",name:"harmony",className:"layout__column--double"}),e(t,{route:"/project/pinewood",name:"pinewood"})]}),a("section",{className:"layout__row layout__row--equal",children:[e(t,{route:"/project/experimental-imagery",name:"experimentalImagery"}),e(t,{route:"/project/parts-and-sections",name:"partsAndSections"})]})]})]})}export{m as default};
