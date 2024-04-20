"use strict";(self.webpackChunkpatterns_site=self.webpackChunkpatterns_site||[]).push([[9428],{6256:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=t(4848),r=t(8453);const s={id:"Facade",title:"Facade",tags:["Facade","https://github.com/ignatandrei/patterns","structural","design pattern","Facade"]},c="Pattern:  Facade",i={id:"patterns/Facade",title:"Facade",description:"Facade is is an object that provides a simplified interface to a larger body of code, such as a class library.",source:"@site/docs/patterns/Facade.md",sourceDirName:"patterns",slug:"/patterns/Facade",permalink:"/patterns/docs/patterns/Facade",draft:!1,unlisted:!1,tags:[{label:"Facade",permalink:"/patterns/docs/tags/facade"},{label:"https://github.com/ignatandrei/patterns",permalink:"/patterns/docs/tags/https-github-com-ignatandrei-patterns"},{label:"structural",permalink:"/patterns/docs/tags/structural"},{label:"design pattern",permalink:"/patterns/docs/tags/design-pattern"}],version:"current",frontMatter:{id:"Facade",title:"Facade",tags:["Facade","https://github.com/ignatandrei/patterns","structural","design pattern","Facade"]},sidebar:"tutorialSidebar",previous:{title:"Decorator",permalink:"/patterns/docs/patterns/Decorator"},next:{title:"Factory",permalink:"/patterns/docs/patterns/Factory"}},o={},d=[{value:"Example in .NET :",id:"example-in-net-",level:2},{value:"Facade",id:"facade",level:3},{value:"Learn More",id:"learn-more",level:2},{value:"Homework",id:"homework",level:2}];function l(e){const a={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"pattern--facade",children:"Pattern:  Facade"}),"\n",(0,n.jsx)(a.p,{children:"Facade is is an object that provides a simplified interface to a larger body of code, such as a class library."}),"\n",(0,n.jsx)(a.h2,{id:"example-in-net-",children:"Example in .NET :"}),"\n",(0,n.jsx)(a.h3,{id:"facade",children:"Facade"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-csharp",metastring:'showLineNumbers title="Facade example for Pattern Facade"',children:"using Microsoft.EntityFrameworkCore;\r\nusing Microsoft.EntityFrameworkCore.Infrastructure;\r\n\r\nnamespace Facade;\r\ninternal class FacadeDemo\r\n{\r\n    public static void ExecuteSql()\r\n    {\r\n        MyDbContext cnt = new();\r\n        //calling the facade\r\n        DatabaseFacade dbFacade = cnt.Database;\r\n        dbFacade.EnsureCreated(); \r\n    }\r\n}\r\n\r\npublic class MyDbContext:DbContext\r\n{\r\n    \r\n}\r\n\r\n\n"})}),"\n",(0,n.jsx)(a.h2,{id:"learn-more",children:"Learn More"}),"\n",(0,n.jsx)("a",{href:"http://wiki.c2.com/?FacadePattern",target:"_blank",children:"C2Wiki"}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("a",{href:"http://www.dofactory.com/net/facade-design-pattern",target:"_blank",children:"dofactory"}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("a",{href:"https://github.com/kamranahmedse/design-patterns-for-humans?tab=readme-ov-file#-facade",target:"_blank",children:"DPH"}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("a",{href:"https://en.wikipedia.org/wiki/Facade_pattern",target:"_blank",children:"Wikipedia"}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(a.h2,{id:"homework",children:"Homework"}),"\n",(0,n.jsx)(a.p,{children:"Implement a Facade that will allow you to display a question in a MessageBox with a single method call in a console application and return yes/no as a result."})]})}function p(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,a,t)=>{t.d(a,{R:()=>c,x:()=>i});var n=t(6540);const r={},s=n.createContext(r);function c(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);