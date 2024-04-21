"use strict";(self.webpackChunkpatterns_site=self.webpackChunkpatterns_site||[]).push([[386],{6103:(e,n,s)=>{s.r(n),s.d(n,{Highlight:()=>A,assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=s(4848),t=s(8453);const r={sidebar_position:4},a="Markdown Features",i={id:"tutorialDocusaurus/tutorial-basics/markdown-features",title:"Markdown Features",description:"Docusaurus supports Markdown and a few additional features.",source:"@site/docs/tutorialDocusaurus/tutorial-basics/markdown-features.mdx",sourceDirName:"tutorialDocusaurus/tutorial-basics",slug:"/tutorialDocusaurus/tutorial-basics/markdown-features",permalink:"/patterns/docs/tutorialDocusaurus/tutorial-basics/markdown-features",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Create a Blog Post",permalink:"/patterns/docs/tutorialDocusaurus/tutorial-basics/create-a-blog-post"},next:{title:"Deploy your site",permalink:"/patterns/docs/tutorialDocusaurus/tutorial-basics/deploy-your-site"}},c={},A=({children:e,color:n})=>{const s={span:"span",...(0,t.R)()};return(0,o.jsx)(s.span,{style:{backgroundColor:n,borderRadius:"20px",color:"#fff",padding:"10px",cursor:"pointer"},onClick:()=>{alert(`You clicked the color ${n} with label ${e}`)},children:e})},d=[{value:"Front Matter",id:"front-matter",level:2},{value:"Links",id:"links",level:2},{value:"Images",id:"images",level:2},{value:"Code Blocks",id:"code-blocks",level:2},{value:"Admonitions",id:"admonitions",level:2},{value:"MDX and React Components",id:"mdx-and-react-components",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"markdown-features",children:"Markdown Features"}),"\n",(0,o.jsxs)(n.p,{children:["Docusaurus supports ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.a,{href:"https://daringfireball.net/projects/markdown/syntax",children:"Markdown"})})," and a few ",(0,o.jsx)(n.strong,{children:"additional features"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"front-matter",children:"Front Matter"}),"\n",(0,o.jsxs)(n.p,{children:["Markdown documents have metadata at the top called ",(0,o.jsx)(n.a,{href:"https://jekyllrb.com/docs/front-matter/",children:"Front Matter"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",metastring:'title="my-doc.md"',children:"// highlight-start\n---\nid: my-doc-id\ntitle: My document title\ndescription: My document description\nslug: /my-custom-url\n---\n// highlight-end\n\n## Markdown heading\n\nMarkdown text with [links](./hello.md)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"links",children:"Links"}),"\n",(0,o.jsx)(n.p,{children:"Regular Markdown links are supported, using url paths or relative file paths."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:"Let's see how to [Create a page](/create-a-page).\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:"Let's see how to [Create a page](./create-a-page.md).\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Result:"})," Let's see how to ",(0,o.jsx)(n.a,{href:"/patterns/docs/tutorialDocusaurus/tutorial-basics/create-a-page",children:"Create a page"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"images",children:"Images"}),"\n",(0,o.jsx)(n.p,{children:"Regular Markdown images are supported."}),"\n",(0,o.jsxs)(n.p,{children:["You can use absolute paths to reference images in the static directory (",(0,o.jsx)(n.code,{children:"static/img/docusaurus.png"}),"):"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:"![Docusaurus logo](/img/docusaurus.png)\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Docusaurus logo",src:s(5422).A+"",width:"200",height:"200"})}),"\n",(0,o.jsx)(n.p,{children:"You can reference images relative to the current file as well. This is particularly useful to colocate images close to the Markdown files using them:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:"![Docusaurus logo](./img/docusaurus.png)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"code-blocks",children:"Code Blocks"}),"\n",(0,o.jsx)(n.p,{children:"Markdown code blocks are supported with Syntax highlighting."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:'```jsx title="src/components/HelloDocusaurus.js"\nfunction HelloDocusaurus() {\n  return <h1>Hello, Docusaurus!</h1>;\n}\n```\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="src/components/HelloDocusaurus.js"',children:"function HelloDocusaurus() {\n  return <h1>Hello, Docusaurus!</h1>;\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"admonitions",children:"Admonitions"}),"\n",(0,o.jsx)(n.p,{children:"Docusaurus has a special syntax to create admonitions and callouts:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:":::tip[My tip]\n\nUse this awesome feature option\n\n:::\n\n:::danger[Take care]\n\nThis action is dangerous\n\n:::\n"})}),"\n",(0,o.jsx)(n.admonition,{title:"My tip",type:"tip",children:(0,o.jsx)(n.p,{children:"Use this awesome feature option"})}),"\n",(0,o.jsx)(n.admonition,{title:"Take care",type:"danger",children:(0,o.jsx)(n.p,{children:"This action is dangerous"})}),"\n",(0,o.jsx)(n.h2,{id:"mdx-and-react-components",children:"MDX and React Components"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://mdxjs.com/",children:"MDX"})," can make your documentation more ",(0,o.jsx)(n.strong,{children:"interactive"})," and allows using any ",(0,o.jsx)(n.strong,{children:"React components inside Markdown"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"export const Highlight = ({children, color}) => (\n  <span\n    style={{\n      backgroundColor: color,\n      borderRadius: '20px',\n      color: '#fff',\n      padding: '10px',\n      cursor: 'pointer',\n    }}\n    onClick={() => {\n      alert(`You clicked the color ${color} with label ${children}`)\n    }}>\n    {children}\n  </span>\n);\n\nThis is <Highlight color=\"#25c2a0\">Docusaurus green</Highlight> !\n\nThis is <Highlight color=\"#1877F2\">Facebook blue</Highlight> !\n"})}),"\n","\n",(0,o.jsxs)(n.p,{children:["This is ",(0,o.jsx)(A,{color:"#25c2a0",children:"Docusaurus green"})," !"]}),"\n",(0,o.jsxs)(n.p,{children:["This is ",(0,o.jsx)(A,{color:"#1877F2",children:"Facebook blue"})," !"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},5422:(e,n,s)=>{s.d(n,{A:()=>o});const o="data:image/png;base64,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"},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>i});var o=s(6540);const t={},r=o.createContext(t);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);