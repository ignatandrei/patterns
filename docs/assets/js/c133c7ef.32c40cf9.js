"use strict";(self.webpackChunkpatterns_site=self.webpackChunkpatterns_site||[]).push([[1642],{3927:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(4848),a=r(8453);const i={id:"Strategy",title:"Strategy",tags:["Strategy","https://github.com/ignatandrei/patterns","behavioral","design pattern","Strategy"]},s="Pattern:  Strategy",o={id:"patterns/Strategy",title:"Strategy",description:"Strategy pattern allows a client to choose from a family of algorithms at runtime. It is used when the client expects to have multiple algorithms and wants to choose one of them at runtime.",source:"@site/docs/patterns/Strategy.md",sourceDirName:"patterns",slug:"/patterns/Strategy",permalink:"/patterns/docs/patterns/Strategy",draft:!1,unlisted:!1,tags:[{label:"Strategy",permalink:"/patterns/docs/tags/strategy"},{label:"https://github.com/ignatandrei/patterns",permalink:"/patterns/docs/tags/https-github-com-ignatandrei-patterns"},{label:"behavioral",permalink:"/patterns/docs/tags/behavioral"},{label:"design pattern",permalink:"/patterns/docs/tags/design-pattern"}],version:"current",frontMatter:{id:"Strategy",title:"Strategy",tags:["Strategy","https://github.com/ignatandrei/patterns","behavioral","design pattern","Strategy"]},sidebar:"tutorialSidebar",previous:{title:"Singleton",permalink:"/patterns/docs/patterns/Singleton"},next:{title:"Visitor",permalink:"/patterns/docs/patterns/Visitor"}},l={},c=[{value:"Example in .NET :",id:"example-in-net-",level:2},{value:"Strategy",id:"strategy",level:3},{value:"See Source Code for Microsoft implementation of Strategy",id:"see-source-code-for-microsoft-implementation-of-strategy",level:2},{value:"Learn More",id:"learn-more",level:2},{value:"Homework",id:"homework",level:2}];function d(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"pattern--strategy",children:"Pattern:  Strategy"}),"\n",(0,n.jsx)(e.p,{children:"Strategy pattern allows a client to choose from a family of algorithms at runtime. It is used when the client expects to have multiple algorithms and wants to choose one of them at runtime."}),"\n",(0,n.jsx)(e.h2,{id:"example-in-net-",children:"Example in .NET :"}),"\n",(0,n.jsx)(e.h3,{id:"strategy",children:"Strategy"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-csharp",metastring:'showLineNumbers title="Strategy example for Pattern Strategy"',children:'using System;\r\nusing System.Collections.Generic;\r\n\r\nnamespace Strategy;\r\ninternal class StrategyDemo\r\n{\r\n    public static void SortWithDifferentStrategies()\r\n    {\r\n        List<int> al = new ();\r\n        al.Add(102);\r\n        al.Add(201);\r\n        //sort ascending\r\n        al.Sort((x, y) => x.CompareTo(y));\r\n\r\n        for (int i = 0; i < al.Count; i++)\r\n        {\r\n            Console.WriteLine(al[i]);\r\n        }\r\n\r\n        Console.WriteLine("---------------");\r\n\r\n        //sort descending\r\n        al.Sort((y, x) => x.CompareTo(y));\r\n        for (int i = 0; i < al.Count; i++)\r\n        {\r\n            Console.WriteLine(al[i]);\r\n        }\r\n        Console.WriteLine("---------------");\r\n        //sort custom\r\n        al.Sort((x, y) => LastDigit(x).CompareTo(LastDigit(y)));\r\n        for (int i = 0; i < al.Count; i++)\r\n        {\r\n            Console.WriteLine(al[i]);\r\n        }\r\n\r\n        var array = al.FindAll(it => it > 10);\r\n\r\n\r\n    }\r\n\r\n    static int LastDigit(int x)\r\n    {\r\n        return x % 10;\r\n    }\r\n\r\n}\r\n\r\n\n'})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:r(7681).A+"",children:"Download source"})}),"\n",(0,n.jsx)(e.h2,{id:"see-source-code-for-microsoft-implementation-of-strategy",children:"See Source Code for Microsoft implementation of Strategy"}),"\n",(0,n.jsx)("a",{href:"https://source.dot.net/#System.Private.CoreLib/src/libraries/System.Private.CoreLib/src/System/Array.cs",target:"_blank",children:"SourceCode Array.Sort"}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(e.h2,{id:"learn-more",children:"Learn More"}),"\n",(0,n.jsx)("a",{href:"https://wiki.c2.com/?StrategyPattern",target:"_blank",children:"C2Wiki"}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("a",{href:"http://www.dofactory.com/net/strategy-design-pattern",target:"_blank",children:"dofactory"}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("a",{href:"https://github.com/kamranahmedse/design-patterns-for-humans?tab=readme-ov-file#-strategy",target:"_blank",children:"DPH"}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("a",{href:"https://en.wikipedia.org/wiki/Strategy_pattern",target:"_blank",children:"Wikipedia"}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(e.h2,{id:"homework",children:"Homework"}),"\n",(0,n.jsx)(e.p,{children:"Image you want to serialize classes to XML,JSON and CSV . Implement a strategy that will allow you to choose between XML , JSON and CSV serialization at runtime."})]})}function p(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(d,{...t})}):d(t)}},7681:(t,e,r)=>{r.d(e,{A:()=>n});const n=r.p+"assets/files/strategy-a2c955ee22fba3110d87c29318597170.zip"},8453:(t,e,r)=>{r.d(e,{R:()=>s,x:()=>o});var n=r(6540);const a={},i=n.createContext(a);function s(t){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:s(t.components),n.createElement(i.Provider,{value:e},t.children)}}}]);