"use strict";(self.webpackChunkpatterns_site=self.webpackChunkpatterns_site||[]).push([[1501],{9925:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=t(4848),a=t(8453);const r={id:"Chain",title:"Chain",tags:["Chain","https://github.com/ignatandrei/patterns","behavioral","design pattern","Chain"]},o="Pattern:  Chain",s={id:"patterns/Chain",title:"Chain",description:"Chain of responsibility pattern allows an object to send a command without knowing what object will receive and handle it.",source:"@site/docs/patterns/Chain.md",sourceDirName:"patterns",slug:"/patterns/Chain",permalink:"/patterns/docs/patterns/Chain",draft:!1,unlisted:!1,tags:[{label:"Chain",permalink:"/patterns/docs/tags/chain"},{label:"https://github.com/ignatandrei/patterns",permalink:"/patterns/docs/tags/https-github-com-ignatandrei-patterns"},{label:"behavioral",permalink:"/patterns/docs/tags/behavioral"},{label:"design pattern",permalink:"/patterns/docs/tags/design-pattern"}],version:"current",frontMatter:{id:"Chain",title:"Chain",tags:["Chain","https://github.com/ignatandrei/patterns","behavioral","design pattern","Chain"]},sidebar:"tutorialSidebar",previous:{title:"Builder",permalink:"/patterns/docs/patterns/Builder"},next:{title:"Decorator",permalink:"/patterns/docs/patterns/Decorator"}},c={},l=[{value:"Purpose of .NET implementation",id:"purpose-of-net-implementation",level:2},{value:"Example in .NET :",id:"example-in-net-",level:2},{value:"Chain",id:"chain",level:3},{value:"See Source Code for Microsoft implementation of Chain",id:"see-source-code-for-microsoft-implementation-of-chain",level:2},{value:"Learn More",id:"learn-more",level:2},{value:"Homework",id:"homework",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"pattern--chain",children:"Pattern:  Chain"}),"\n",(0,i.jsxs)(n.p,{children:["Chain of responsibility pattern allows an object to send a command without knowing what object will receive and handle it.    ",(0,i.jsx)("br",{}),"\nChain the receiving objects and pass the request along the chain until an object handles it.    ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.h2,{id:"purpose-of-net-implementation",children:"Purpose of .NET implementation"}),"\n",(0,i.jsx)(n.h2,{id:"example-in-net-",children:"Example in .NET :"}),"\n",(0,i.jsx)(n.h3,{id:"chain",children:"Chain"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",metastring:'showLineNumbers title="Chain example for Pattern Chain"',children:'namespace Chain;\n\npublic static class ChainDemo\n{\n    public static int SecondException()\n    {\n        try\n        {\n            FirstException();\n            return 5;\n        }\n        catch (Exception ex)\n        {\n            throw new Exception($"from {nameof(SecondException)}", ex);\n        }\n    }\n    static int FirstException()\n    {\n        throw new ArgumentException("argument");\n    }\n}\n\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(7223).A+"",children:"Download source"})}),"\n",(0,i.jsx)(n.h2,{id:"see-source-code-for-microsoft-implementation-of-chain",children:"See Source Code for Microsoft implementation of Chain"}),"\n",(0,i.jsx)("a",{href:"https://source.dot.net/#Microsoft.AspNetCore.Builder/ApplicationBuilderExtensions.cs",target:"_blank",children:"SourceCode ApplicationBuilderExtensions.UseMiddleware"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("a",{href:"https://source.dot.net/#System.Private.CoreLib/src/System/Object.CoreCLR.cs",target:"_blank",children:"SourceCode UseMiddlewareExtensions.UseMiddleware"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"learn-more",children:"Learn More"}),"\n",(0,i.jsx)("a",{href:"https://wiki.c2.com/?ChainOfResponsibilityPattern",target:"_blank",children:"C2Wiki"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("a",{href:"http://www.dofactory.com/net/chain-design-pattern",target:"_blank",children:"dofactory"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("a",{href:"https://github.com/kamranahmedse/design-patterns-for-humans?tab=readme-ov-file#-chain",target:"_blank",children:"DPH"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("a",{href:"https://en.wikipedia.org/wiki/Chain-of-responsibility_pattern",target:"_blank",children:"Wikipedia"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"homework",children:"Homework"}),"\n",(0,i.jsxs)(n.p,{children:["Implement a middleware in ASP.    ",(0,i.jsx)("br",{}),"\nNET Core that intercepts the exception and logs it to the database.    ",(0,i.jsx)("br",{}),"\nThe middleware should be able to pass the exception to the next middleware in the chain.    ",(0,i.jsx)("br",{})]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},7223:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/files/chain-f58a91261929df8bfd69455d5e67a971.zip"},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var i=t(6540);const a={},r=i.createContext(a);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);