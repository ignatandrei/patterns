"use strict";(self.webpackChunkpatterns_site=self.webpackChunkpatterns_site||[]).push([[2514],{8032:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=t(4848),i=t(8453);const a={id:"Builder",title:"Builder",tags:["Builder","https://github.com/ignatandrei/patterns","creational","design pattern","UriBuilder","SqlConnectionStringBuilder"]},o="Pattern:  Builder",l={id:"patterns/Builder",title:"Builder",description:"The intent of the Builder design pattern is to separate the construction of a complex object from its representation.",source:"@site/docs/patterns/Builder.md",sourceDirName:"patterns",slug:"/patterns/Builder",permalink:"/patterns/docs/patterns/Builder",draft:!1,unlisted:!1,tags:[{label:"Builder",permalink:"/patterns/docs/tags/builder"},{label:"https://github.com/ignatandrei/patterns",permalink:"/patterns/docs/tags/https-github-com-ignatandrei-patterns"},{label:"creational",permalink:"/patterns/docs/tags/creational"},{label:"design pattern",permalink:"/patterns/docs/tags/design-pattern"},{label:"UriBuilder",permalink:"/patterns/docs/tags/uri-builder"},{label:"SqlConnectionStringBuilder",permalink:"/patterns/docs/tags/sql-connection-string-builder"}],version:"current",frontMatter:{id:"Builder",title:"Builder",tags:["Builder","https://github.com/ignatandrei/patterns","creational","design pattern","UriBuilder","SqlConnectionStringBuilder"]},sidebar:"tutorialSidebar",previous:{title:"Adapter",permalink:"/patterns/docs/patterns/Adapter"},next:{title:"Chain",permalink:"/patterns/docs/patterns/Chain"}},s={},d=[{value:"Purpose of .NET implementation",id:"purpose-of-net-implementation",level:2},{value:"Examples in .NET :",id:"examples-in-net-",level:2},{value:"UriBuilder",id:"uribuilder",level:3},{value:"SqlConnectionStringBuilder",id:"sqlconnectionstringbuilder",level:3},{value:"See Source Code for Microsoft implementation of Builder",id:"see-source-code-for-microsoft-implementation-of-builder",level:2},{value:"Learn More",id:"learn-more",level:2},{value:"Homework",id:"homework",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"pattern--builder",children:"Pattern:  Builder"}),"\n",(0,r.jsxs)(n.p,{children:["The intent of the Builder design pattern is to separate the construction of a complex object from its representation.    ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(n.h2,{id:"purpose-of-net-implementation",children:"Purpose of .NET implementation"}),"\n",(0,r.jsx)(n.h2,{id:"examples-in-net-",children:"Examples in .NET :"}),"\n",(0,r.jsx)(n.h3,{id:"uribuilder",children:"UriBuilder"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",metastring:'showLineNumbers title="UriBuilder example for Pattern Builder"',children:'namespace Builder;\nstatic class UriBuilderDemo\n{\n    public static void UriMod()\n    {\n        //start example 1\n        var uri = new Uri("https://msprogrammer.serviciipeweb.ro/category/friday-links/");\n        var b = new UriBuilder(uri);\n        //changing part\n        b.Scheme = "http";\n        //now we have http://msprogrammer.serviciipeweb.ro/category/friday-links/\n        Console.WriteLine(b.Uri);\n        //changing part\n        b.Path = "2018/03/05/design-patterns-class/";\n        //now we have http://msprogrammer.serviciipeweb.ro/2018/03/05/design-patterns-class/\n        Console.WriteLine(b.Uri);\n        //end example 1\n    }\n}\n\n'})}),"\n",(0,r.jsx)(n.h3,{id:"sqlconnectionstringbuilder",children:"SqlConnectionStringBuilder"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",metastring:'showLineNumbers title="SqlConnectionStringBuilder example for Pattern Builder"',children:'namespace Builder;\ninternal class ConnectionStringDemo\n{\n    public static void ConnectionString()\n    {\n        //start example 2\n        var build = new SqlConnectionStringBuilder();\n        build.DataSource = ".";\n        build.InitialCatalog = "MyDatabase";\n        build.ConnectTimeout = 30;\n        //here is the connection string built\n        Console.WriteLine(build.ConnectionString);\n        //end example 2\n    }\n}\n\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(4741).A+"",children:"Download source"})}),"\n",(0,r.jsx)(n.h2,{id:"see-source-code-for-microsoft-implementation-of-builder",children:"See Source Code for Microsoft implementation of Builder"}),"\n",(0,r.jsx)("a",{href:"https://referencesource.microsoft.com/#System.Data/fx/src/data/System/Data/SqlClient/SqlConnectionStringBuilder.cs",target:"_blank",children:"SourceCode SqlConnectionStringBuilder"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)("a",{href:"https://source.dot.net/#System.Private.Uri/System/UriBuilder.cs",target:"_blank",children:"SourceCode UriBuilder"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h2,{id:"learn-more",children:"Learn More"}),"\n",(0,r.jsx)("a",{href:"http://wiki.c2.com/?BuilderPattern",target:"_blank",children:"C2Wiki"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)("a",{href:"http://www.dofactory.com/net/Builder-design-pattern",target:"_blank",children:"dofactory"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)("a",{href:"https://github.com/kamranahmedse/design-patterns-for-humans?tab=readme-ov-file#-Builder",target:"_blank",children:"DPH"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)("a",{href:"https://en.wikipedia.org/wiki/Builder_pattern",target:"_blank",children:"Wikipedia"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h2,{id:"homework",children:"Homework"}),"\n",(0,r.jsxs)(n.p,{children:["Imagine that you have a logger that logs to a file and to a console.    ",(0,r.jsx)("br",{}),"\nImplement a builder that will allow you to create a logger with different configurations.    ",(0,r.jsx)("br",{}),"\nFor example, you can set the log level, the log format, and the log destination.    ",(0,r.jsx)("br",{})]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},4741:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/files/builder-bfa9d8a76af31fa360af0a8669f8eeea.zip"},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var r=t(6540);const i={},a=r.createContext(i);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);