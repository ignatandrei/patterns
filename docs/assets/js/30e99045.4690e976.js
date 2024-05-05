"use strict";(self.webpackChunkpatterns_site=self.webpackChunkpatterns_site||[]).push([[8826],{2245:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(4848),r=t(8453);const o={id:"Singleton",title:"Singleton",tags:["Singleton","https://github.com/ignatandrei/patterns","creational","design pattern","Singleton"]},i="Pattern:  Singleton",s={id:"patterns/Singleton",title:"Singleton",description:"Singleton pattern restricts the instantiation of a class to one object. It is used when you want to have one instance of a class that is shared across the application.",source:"@site/docs/patterns/Singleton.md",sourceDirName:"patterns",slug:"/patterns/Singleton",permalink:"/patterns/docs/patterns/Singleton",draft:!1,unlisted:!1,tags:[{label:"Singleton",permalink:"/patterns/docs/tags/singleton"},{label:"https://github.com/ignatandrei/patterns",permalink:"/patterns/docs/tags/https-github-com-ignatandrei-patterns"},{label:"creational",permalink:"/patterns/docs/tags/creational"},{label:"design pattern",permalink:"/patterns/docs/tags/design-pattern"}],version:"current",frontMatter:{id:"Singleton",title:"Singleton",tags:["Singleton","https://github.com/ignatandrei/patterns","creational","design pattern","Singleton"]},sidebar:"tutorialSidebar",previous:{title:"Prototype",permalink:"/patterns/docs/patterns/Prototype"},next:{title:"Strategy",permalink:"/patterns/docs/patterns/Strategy"}},l={},c=[{value:"Example in .NET :",id:"example-in-net-",level:2},{value:"Singleton",id:"singleton",level:3},{value:"See Source Code for Microsoft implementation of Singleton",id:"see-source-code-for-microsoft-implementation-of-singleton",level:2},{value:"Learn More",id:"learn-more",level:2},{value:"Homework",id:"homework",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"pattern--singleton",children:"Pattern:  Singleton"}),"\n",(0,a.jsx)(n.p,{children:"Singleton pattern restricts the instantiation of a class to one object. It is used when you want to have one instance of a class that is shared across the application."}),"\n",(0,a.jsx)(n.h2,{id:"example-in-net-",children:"Example in .NET :"}),"\n",(0,a.jsx)(n.h3,{id:"singleton",children:"Singleton"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",metastring:'showLineNumbers title="Singleton example for Pattern Singleton"',children:"using System.Data.OleDb;\r\n\r\nnamespace Singleton;\r\n/// <summary>\r\n/// \r\n///sealed class Singleton\r\n///{\r\n///    private Singleton() { }\r\n///    public static readonly Singleton Instance = new Singleton();\r\n///}\r\n///\r\n/// </summary>\r\ninternal class SingletonDemo\r\n{\r\n    public static void GetFactory()\r\n    {\r\n        //cannot do new\r\n        //OleDbFactory factory=new OleDbFactory();\r\n        //get singleton instance\r\n        OleDbFactory factory = OleDbFactory.Instance;\r\n    }\r\n}\r\n\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(8775).A+"",children:"Download source"})}),"\n",(0,a.jsx)(n.h2,{id:"see-source-code-for-microsoft-implementation-of-singleton",children:"See Source Code for Microsoft implementation of Singleton"}),"\n",(0,a.jsx)("a",{href:"https://referencesource.microsoft.com/#System.Data/fx/src/data/System/Data/OleDb/OleDbFactory.cs",target:"_blank",children:"SourceCode OleDbFactory.Instance"}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(n.h2,{id:"learn-more",children:"Learn More"}),"\n",(0,a.jsx)("a",{href:"https://wiki.c2.com/?SingletonPattern",target:"_blank",children:"C2Wiki"}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)("a",{href:"http://www.dofactory.com/net/singleton-design-pattern",target:"_blank",children:"dofactory"}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)("a",{href:"https://github.com/kamranahmedse/design-patterns-for-humans?tab=readme-ov-file#-singleton",target:"_blank",children:"DPH"}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)("a",{href:"https://en.wikipedia.org/wiki/Singleton_pattern",target:"_blank",children:"Wikipedia"}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(n.h2,{id:"homework",children:"Homework"}),"\n",(0,a.jsx)(n.p,{children:"Implement a singleton that will allow you to create a single instance of a logger that logs to a file and to a console."})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},8775:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/files/singleton-3c210d89b190c21aa9286ae58ed04160.zip"},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var a=t(6540);const r={},o=a.createContext(r);function i(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);