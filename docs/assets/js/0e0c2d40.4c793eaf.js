"use strict";(self.webpackChunkpatterns_site=self.webpackChunkpatterns_site||[]).push([[547],{2786:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(4848),o=r(8453);const a={id:"Factory",title:"Factory",tags:["Factory","https://github.com/ignatandrei/patterns","creational","design pattern","Factory"]},s="Pattern:  Factory",i={id:"patterns/Factory",title:"Factory",description:"A factory is a function or method that returns objects of a varying prototype or class from some method call, which is assumed to be new",source:"@site/docs/patterns/Factory.md",sourceDirName:"patterns",slug:"/patterns/Factory",permalink:"/patterns/docs/patterns/Factory",draft:!1,unlisted:!1,tags:[{label:"Factory",permalink:"/patterns/docs/tags/factory"},{label:"https://github.com/ignatandrei/patterns",permalink:"/patterns/docs/tags/https-github-com-ignatandrei-patterns"},{label:"creational",permalink:"/patterns/docs/tags/creational"},{label:"design pattern",permalink:"/patterns/docs/tags/design-pattern"}],version:"current",frontMatter:{id:"Factory",title:"Factory",tags:["Factory","https://github.com/ignatandrei/patterns","creational","design pattern","Factory"]},sidebar:"tutorialSidebar",previous:{title:"Facade",permalink:"/patterns/docs/patterns/Facade"},next:{title:"Iterator",permalink:"/patterns/docs/patterns/Iterator"}},c={},l=[{value:"Example in .NET :",id:"example-in-net-",level:2},{value:"Factory",id:"factory",level:3},{value:"Learn More",id:"learn-more",level:2},{value:"Homework",id:"homework",level:2}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"pattern--factory",children:"Pattern:  Factory"}),"\n",(0,n.jsx)(t.p,{children:"A factory is a function or method that returns objects of a varying prototype or class from some method call, which is assumed to be new"}),"\n",(0,n.jsx)(t.h2,{id:"example-in-net-",children:"Example in .NET :"}),"\n",(0,n.jsx)(t.h3,{id:"factory",children:"Factory"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",metastring:'showLineNumbers title="Factory example for Pattern Factory"',children:'using Microsoft.AspNetCore.Mvc;\r\nusing Microsoft.AspNetCore.Mvc.Controllers;\r\nusing Microsoft.AspNetCore.Mvc.Internal;\r\nusing System.Data.Common;\r\nusing System.Globalization;\r\nusing System.Net;\r\nusing System.Web.Mvc;\r\n\r\nnamespace Factory;\r\ninternal class FactoryDemo\r\n{\r\n    public static void DemoWebRequest()\r\n    {\r\n        HttpWebRequest hwr = (HttpWebRequest)WebRequest.Create("http://www.yahoo.com");\r\n\r\n    }\r\n    public static void DemoConvert()\r\n    {\r\n        string value = "1,500";\r\n        Thread.CurrentThread.CurrentCulture = CultureInfo.CreateSpecificCulture("en-US");\r\n\r\n        Console.WriteLine(Convert.ToDouble(value));\r\n\r\n        Thread.CurrentThread.CurrentCulture = CultureInfo.CreateSpecificCulture("fr-FR");\r\n        Console.WriteLine(Convert.ToDouble(value));\r\n\r\n    }\r\n    static void RegisterControllerFactory()\r\n    {\r\n        ControllerBuilder.Current.SetControllerFactory(new MyControllerFactory());\r\n    }\r\n}\r\n\r\n//default controller factory is a factory of controllers\r\nclass MyControllerFactory : System.Web.Mvc.DefaultControllerFactory\r\n{\r\n\r\n    public override IController CreateController(System.Web.Routing.RequestContext requestContext, string controllerName)\r\n    {\r\n        if (controllerName == "andrei")\r\n            return null;//maybe controller not found\r\n\r\n        return base.CreateController(requestContext, controllerName);\r\n    }\r\n}\r\n    \n'})}),"\n",(0,n.jsx)(t.h2,{id:"learn-more",children:"Learn More"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Factory_pattern",children:"Wikipedia"})}),"\n",(0,n.jsx)(t.h2,{id:"homework",children:"Homework"}),"\n",(0,n.jsx)(t.p,{children:"having multiple types of drinks( water, tea, coffee) with an IDrink interface  create a factory method ( with a parameter ) to create a drink"})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>i});var n=r(6540);const o={},a=n.createContext(o);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);