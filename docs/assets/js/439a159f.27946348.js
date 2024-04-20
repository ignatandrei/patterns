"use strict";(self.webpackChunkpatterns_site=self.webpackChunkpatterns_site||[]).push([[5181],{6460:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(4848),l=r(8453);const a={id:"NullObject",title:"NullObject",tags:["NullObject","https://github.com/ignatandrei/patterns","behavioral","design pattern","EmptyFolder","NullLogger"]},s="Pattern:  NullObject",i={id:"patterns/NullObject",title:"NullObject",description:"Instead of returning null , use an object which implements the expected interface, but whose method body is empty.",source:"@site/docs/patterns/NullObject.md",sourceDirName:"patterns",slug:"/patterns/NullObject",permalink:"/patterns/docs/patterns/NullObject",draft:!1,unlisted:!1,tags:[{label:"NullObject",permalink:"/patterns/docs/tags/null-object"},{label:"https://github.com/ignatandrei/patterns",permalink:"/patterns/docs/tags/https-github-com-ignatandrei-patterns"},{label:"behavioral",permalink:"/patterns/docs/tags/behavioral"},{label:"design pattern",permalink:"/patterns/docs/tags/design-pattern"},{label:"EmptyFolder",permalink:"/patterns/docs/tags/empty-folder"},{label:"NullLogger",permalink:"/patterns/docs/tags/null-logger"}],version:"current",frontMatter:{id:"NullObject",title:"NullObject",tags:["NullObject","https://github.com/ignatandrei/patterns","behavioral","design pattern","EmptyFolder","NullLogger"]},sidebar:"tutorialSidebar",previous:{title:"Iterator",permalink:"/patterns/docs/patterns/Iterator"},next:{title:"Prototype",permalink:"/patterns/docs/patterns/Prototype"}},o={},c=[{value:"Examples in .NET :",id:"examples-in-net-",level:2},{value:"EmptyFolder",id:"emptyfolder",level:3},{value:"NullLogger",id:"nulllogger",level:3},{value:"Learn More",id:"learn-more",level:2},{value:"Homework",id:"homework",level:2}];function p(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"pattern--nullobject",children:"Pattern:  NullObject"}),"\n",(0,n.jsx)(t.p,{children:"Instead of returning null , use an object which implements the expected interface, but whose method body is empty."}),"\n",(0,n.jsx)(t.h2,{id:"examples-in-net-",children:"Examples in .NET :"}),"\n",(0,n.jsx)(t.h3,{id:"emptyfolder",children:"EmptyFolder"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",metastring:'showLineNumbers title="EmptyFolder example for Pattern NullObject"',children:'using System;\r\nusing System.IO;\r\n\r\nnamespace NullObject;\r\ninternal class EmptyFolderDemo\r\n{\r\n    public static void DemoWithCreateNewFolder()\r\n    {\r\n        //start example 1\r\n        var env = Environment.CurrentDirectory;\r\n        var guid = Guid.NewGuid().ToString("X");\r\n        var fldEmpty = Path.Combine(env, guid);\r\n        //create empty folder\r\n        Directory.CreateDirectory(fldEmpty);\r\n        var files= Directory.GetFiles(fldEmpty);\r\n        Console.WriteLine($"files.Length:{files.Length}");\r\n        //end example 1\r\n        \r\n    }\r\n}\r\n\n'})}),"\n",(0,n.jsx)(t.h3,{id:"nulllogger",children:"NullLogger"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",metastring:'showLineNumbers title="NullLogger example for Pattern NullObject"',children:'\r\nnamespace NullObject;\r\ninternal class LogWithData\r\n{\r\n    ILogger _logger;\r\n    public LogWithData(ILogger? logger=null)\r\n    {\r\n        _logger = logger ?? NullLogger.Instance;   \r\n    }\r\n    public void DoWork(string message)\r\n    {\r\n        _logger.LogInformation($"start work with {message}");\r\n    }\r\n}\r\n\n'})}),"\n",(0,n.jsx)(t.h2,{id:"learn-more",children:"Learn More"}),"\n",(0,n.jsx)("a",{href:"https://wiki.c2.com/?NullObject",target:"_blank",children:"C2Wiki"}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("a",{href:"http://www.dofactory.com/net/NullObject-design-pattern",target:"_blank",children:"dofactory"}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("a",{href:"https://github.com/kamranahmedse/design-patterns-for-humans?tab=readme-ov-file#-NullObject",target:"_blank",children:"DPH"}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("a",{href:"https://en.wikipedia.org/wiki/Null_object_pattern",target:"_blank",children:"Wikipedia"}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.h2,{id:"homework",children:"Homework"}),"\n",(0,n.jsx)(t.p,{children:"When retrieving data( e.g. a Person with ID =-1 ) from a database , return a NullObject instead of null. How you will verify that the object is a NullObject?"})]})}function d(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>i});var n=r(6540);const l={},a=n.createContext(l);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);