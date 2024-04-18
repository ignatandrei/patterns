"use strict";(self.webpackChunkpatterns_site=self.webpackChunkpatterns_site||[]).push([[6774],{330:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(4848),a=n(8453);const o={id:"Prototype",title:"Prototype",tags:["Prototype","https://github.com/ignatandrei/patterns","creational","design pattern","ICloneable"]},i="Pattern:  Prototype",l={id:"patterns/Prototype",title:"Prototype",description:"It is used when the type of objects to create is determined by a prototypical instance, which is cloned to produce new objects",source:"@site/docs/patterns/Prototype.md",sourceDirName:"patterns",slug:"/patterns/Prototype",permalink:"/patterns/docs/patterns/Prototype",draft:!1,unlisted:!1,tags:[{label:"Prototype",permalink:"/patterns/docs/tags/prototype"},{label:"https://github.com/ignatandrei/patterns",permalink:"/patterns/docs/tags/https-github-com-ignatandrei-patterns"},{label:"creational",permalink:"/patterns/docs/tags/creational"},{label:"design pattern",permalink:"/patterns/docs/tags/design-pattern"},{label:"ICloneable",permalink:"/patterns/docs/tags/i-cloneable"}],version:"current",frontMatter:{id:"Prototype",title:"Prototype",tags:["Prototype","https://github.com/ignatandrei/patterns","creational","design pattern","ICloneable"]},sidebar:"tutorialSidebar",previous:{title:"NullObject",permalink:"/patterns/docs/patterns/NullObject"},next:{title:"Strategy",permalink:"/patterns/docs/patterns/Strategy"}},s={},p=[{value:"Example in .NET :",id:"example-in-net-",level:2},{value:"ICloneable",id:"icloneable",level:3},{value:"Learn More",id:"learn-more",level:2},{value:"Homework",id:"homework",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"pattern--prototype",children:"Pattern:  Prototype"}),"\n",(0,r.jsx)(t.p,{children:"It is used when the type of objects to create is determined by a prototypical instance, which is cloned to produce new objects"}),"\n",(0,r.jsx)(t.h2,{id:"example-in-net-",children:"Example in .NET :"}),"\n",(0,r.jsx)(t.h3,{id:"icloneable",children:"ICloneable"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",metastring:'showLineNumbers title="ICloneable example for Pattern Prototype"',children:"using System;\r\n\r\nnamespace Prototype;\r\nclass Parent : ICloneable\r\n{\r\n    public int Age { get; set; }\r\n    public Child MyChild { get; set; }\r\n\r\n    public object Clone()\r\n    {\r\n        //TODO: serialize + unserialize \r\n        //with System.Text.Json.JsonSerializer\r\n\r\n        var p = ShallowClone();\r\n        //TODO: clone the child \r\n        var c = new Child();\r\n        c.Age = this.MyChild.Age;\r\n\r\n        p.MyChild = c;\r\n        return p;\r\n    }\r\n\r\n    public Parent ShallowClone()\r\n    {\r\n        return this.MemberwiseClone() as Parent;\r\n    }\r\n}\r\n\r\n\n"})}),"\n",(0,r.jsx)(t.h2,{id:"learn-more",children:"Learn More"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Prototype_pattern",children:"Wikipedia"})}),"\n",(0,r.jsx)(t.h2,{id:"homework",children:"Homework"}),"\n",(0,r.jsx)(t.p,{children:"Imagine that you have a cow farm and you want to create a new cow. Implement a prototype that will allow you to clone a cow. The cow should have a name and a weight"})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(6540);const a={},o=r.createContext(a);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);