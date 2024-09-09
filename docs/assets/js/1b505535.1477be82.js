"use strict";(self.webpackChunkpatterns_site=self.webpackChunkpatterns_site||[]).push([[7587],{6100:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(4848),a=n(8453);const s={id:"Observer",title:"Observer",tags:["Observer","https://github.com/ignatandrei/patterns","behavioral","design pattern","Observer"]},o="Pattern:  Observer",i={id:"patterns/Observer",title:"Observer",description:"Observer pattern is a behavioral design pattern that defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.",source:"@site/docs/patterns/Observer.md",sourceDirName:"patterns",slug:"/patterns/Observer",permalink:"/patterns/docs/patterns/Observer",draft:!1,unlisted:!1,tags:[{label:"Observer",permalink:"/patterns/docs/tags/observer"},{label:"https://github.com/ignatandrei/patterns",permalink:"/patterns/docs/tags/https-github-com-ignatandrei-patterns"},{label:"behavioral",permalink:"/patterns/docs/tags/behavioral"},{label:"design pattern",permalink:"/patterns/docs/tags/design-pattern"}],version:"current",frontMatter:{id:"Observer",title:"Observer",tags:["Observer","https://github.com/ignatandrei/patterns","behavioral","design pattern","Observer"]},sidebar:"tutorialSidebar",previous:{title:"NullObject",permalink:"/patterns/docs/patterns/NullObject"},next:{title:"Prototype",permalink:"/patterns/docs/patterns/Prototype"}},l={},p=[{value:"Purpose of .NET implementation",id:"purpose-of-net-implementation",level:2},{value:"Example in .NET :",id:"example-in-net-",level:2},{value:"Observer",id:"observer",level:3},{value:"See Source Code for Microsoft implementation of Observer",id:"see-source-code-for-microsoft-implementation-of-observer",level:2},{value:"Learn More",id:"learn-more",level:2},{value:"Homework",id:"homework",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"pattern--observer",children:"Pattern:  Observer"}),"\n",(0,r.jsxs)(t.p,{children:["Observer pattern is a behavioral design pattern that defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.    ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(t.h2,{id:"purpose-of-net-implementation",children:"Purpose of .NET implementation"}),"\n",(0,r.jsxs)(t.p,{children:["You want to see when properties of an object are modified, to know how to react in the GUI.    ",(0,r.jsx)("br",{}),"\nYou can use the Observer pattern to notify the GUI when the properties of the object are modified.    ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(t.h2,{id:"example-in-net-",children:"Example in .NET :"}),"\n",(0,r.jsx)(t.h3,{id:"observer",children:"Observer"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",metastring:'showLineNumbers title="Observer example for Pattern Observer"',children:'\nusing System.ComponentModel;\nusing System.Runtime.CompilerServices;\n\nnamespace Observer;\n\n/// <summary>\n/// INotifyPropertyChanged is an interface that provides a mechanism for the object to notify clients that a property value has changed.\n/// </summary>\npublic class Person: INotifyPropertyChanged\n{\n    private string name=string.Empty;\n    public string Name\n    {\n        get => name;\n        set\n        {\n            if (name == value) return;\n            name = value;\n            OnPropertyChanged();\n        }\n    }\n\n    public event PropertyChangedEventHandler? PropertyChanged;\n\n    protected virtual void OnPropertyChanged([CallerMemberName] string propertyName = "")\n    {\n        PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));\n    }\n}\ninternal class ObserverDemo\n{\n    public static void Demo()\n    {\n        Person person = new ();\n        //subscribe to the event to observe the changes\n        person.PropertyChanged += (sender, args) =>\n        {\n            var p = sender as Person;\n            Console.WriteLine($"Property {args.PropertyName} changed to {p?.Name}");\n        };\n        person.Name = "Andrei Ignat" ;\n    }\n}\n\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(3412).A+"",children:"Download source"})}),"\n",(0,r.jsx)(t.h2,{id:"see-source-code-for-microsoft-implementation-of-observer",children:"See Source Code for Microsoft implementation of Observer"}),"\n",(0,r.jsx)("a",{href:"https://source.dot.net/#System.ObjectModel/System/ComponentModel/INotifyPropertyChanged.cs",target:"_blank",children:"SourceCode INotifyPropertyChanged"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.h2,{id:"learn-more",children:"Learn More"}),"\n",(0,r.jsx)("a",{href:"https://en.wikipedia.org/wiki/Observer_pattern",target:"_blank",children:"Wikipedia"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.h2,{id:"homework",children:"Homework"}),"\n",(0,r.jsxs)(t.p,{children:["Imagine you have a logger that logs to a file and to a console.    ",(0,r.jsx)("br",{}),"\nImplement an observable logger that will allow you to subscribe to the logger and to be notified when the logger logs a message.    ",(0,r.jsx)("br",{})]})]})}function c(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3412:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/files/observer-1b530e405e53b204a4ac7854375f08b9.zip"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(6540);const a={},s=r.createContext(a);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);