"use strict";(self.webpackChunkdoc_lib_web_ui=self.webpackChunkdoc_lib_web_ui||[]).push([[8209],{8443:(e,t,s)=>{s.d(t,{A:()=>v});var a=s(7378),i=s(3372),l=s(1237),r=s(1994),n=s(1683),c=s(3694),o=s(505),d=s(6614);function m(e){const{pathname:t}=(0,o.zy)();return(0,a.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,d.ys)(e.permalink,t))}(e,t)))),[e,t])}const b={sidebar:"sidebar_RV8X",sidebarItemTitle:"sidebarItemTitle_VZtg",sidebarItemList:"sidebarItemList_GQ2Y",sidebarItem:"sidebarItem_YfBN",sidebarItemLink:"sidebarItemLink_FgJX",sidebarItemLinkActive:"sidebarItemLinkActive_bQ0a"};var u=s(6106);function g(e){let{sidebar:t}=e;const s=m(t.items);return(0,u.jsx)("aside",{className:"col col--3",children:(0,u.jsxs)("nav",{className:(0,i.A)(b.sidebar,"thin-scrollbar"),"aria-label":(0,c.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,u.jsx)("div",{className:(0,i.A)(b.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,u.jsx)("ul",{className:(0,i.A)(b.sidebarItemList,"clean-list"),children:s.map((e=>(0,u.jsx)("li",{className:b.sidebarItem,children:(0,u.jsx)(n.A,{isNavLink:!0,to:e.permalink,className:b.sidebarItemLink,activeClassName:b.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var h=s(569);function j(e){let{sidebar:t}=e;const s=m(t.items);return(0,u.jsx)("ul",{className:"menu__list",children:s.map((e=>(0,u.jsx)("li",{className:"menu__list-item",children:(0,u.jsx)(n.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function p(e){return(0,u.jsx)(h.GX,{component:j,props:e})}function x(e){let{sidebar:t}=e;const s=(0,r.l)();return t?.items.length?"mobile"===s?(0,u.jsx)(p,{sidebar:t}):(0,u.jsx)(g,{sidebar:t}):null}function v(e){const{sidebar:t,toc:s,children:a,...r}=e,n=t&&t.items.length>0;return(0,u.jsx)(l.A,{...r,children:(0,u.jsx)("div",{className:"container margin-vert--lg",children:(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)(x,{sidebar:t}),(0,u.jsx)("main",{className:(0,i.A)("col",{"col--7":n,"col--9 col--offset-1":!n}),children:a}),s&&(0,u.jsx)("div",{className:"col col--2",children:s})]})})})}},6414:(e,t,s)=>{s.r(t),s.d(t,{default:()=>j});s(7378);var a=s(3372),i=s(3694);const l=()=>(0,i.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var r=s(9834),n=s(1996),c=s(8443),o=s(5362),d=s(2112);const m={tag:"tag_e4Hj"};var b=s(6106);function u(e){let{letterEntry:t}=e;return(0,b.jsxs)("article",{children:[(0,b.jsx)(d.A,{as:"h2",id:t.letter,children:t.letter}),(0,b.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,b.jsx)("li",{className:m.tag,children:(0,b.jsx)(o.A,{...e})},e.permalink)))}),(0,b.jsx)("hr",{})]})}function g(e){let{tags:t}=e;const s=function(e){const t={};return Object.values(e).forEach((e=>{const s=function(e){return e[0].toUpperCase()}(e.label);t[s]??=[],t[s].push(e)})),Object.entries(t).sort(((e,t)=>{let[s]=e,[a]=t;return s.localeCompare(a)})).map((e=>{let[t,s]=e;return{letter:t,tags:s.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return(0,b.jsx)("section",{className:"margin-vert--lg",children:s.map((e=>(0,b.jsx)(u,{letterEntry:e},e.letter)))})}var h=s(3298);function j(e){let{tags:t,sidebar:s}=e;const i=l();return(0,b.jsxs)(r.e3,{className:(0,a.A)(n.G.wrapper.blogPages,n.G.page.blogTagsListPage),children:[(0,b.jsx)(r.be,{title:i}),(0,b.jsx)(h.A,{tag:"blog_tags_list"}),(0,b.jsxs)(c.A,{sidebar:s,children:[(0,b.jsx)(d.A,{as:"h1",children:i}),(0,b.jsx)(g,{tags:t})]})]})}},5362:(e,t,s)=>{s.d(t,{A:()=>n});s(7378);var a=s(3372),i=s(1683);const l={tag:"tag__s5P",tagRegular:"tagRegular_Nojy",tagWithCount:"tagWithCount_I4KU"};var r=s(6106);function n(e){let{permalink:t,label:s,count:n,description:c}=e;return(0,r.jsxs)(i.A,{href:t,title:c,className:(0,a.A)(l.tag,n?l.tagWithCount:l.tagRegular),children:[s,n&&(0,r.jsx)("span",{children:n})]})}}}]);