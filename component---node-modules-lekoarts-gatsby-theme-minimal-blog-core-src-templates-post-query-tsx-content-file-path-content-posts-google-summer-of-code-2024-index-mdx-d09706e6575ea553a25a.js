"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[405],{1173:function(e,t,n){n.d(t,{p:function(){return u},A:function(){return g}});var a=n(6540),r=n(557),i=n(6835),l=n(3328),o=n(7715),c=n(7169);var m=e=>{let{post:t}=e;return null};const s=["16px","8px","4px"].map((e=>`rgba(0, 0, 0, 0.1) 0px ${e} ${e} 0px`));var p=e=>{let{data:{post:t},children:n}=e;return(0,r.Y)(l.A,null,(0,r.Y)(i.DZ,{as:"h1",variant:"styles.h1"},t.title),(0,r.Y)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,r.Y)("time",null,t.date),t.tags&&(0,r.Y)(a.Fragment,null," — ",(0,r.Y)(o.A,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,r.Y)("span",null,t.timeToRead," min read")),(0,r.Y)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:s.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,r.Y)(m,{post:t}))};const u=e=>{var t,n,a;let{data:{post:i}}=e;return(0,r.Y)(c.A,{title:i.title,description:i.description?i.description:i.excerpt,image:i.banner?null===(t=i.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(a=n.resize)||void 0===a?void 0:a.src:void 0,pathname:i.slug,canonicalUrl:i.canonicalUrl})};function g(e){let{...t}=e;return a.createElement(p,t)}},7715:function(e,t,n){var a=n(557),r=n(6540),i=n(4794),l=n(3601),o=n(2174);t.A=e=>{let{tags:t}=e;const{tagsPath:n,basePath:c}=(0,l.A)();return(0,a.Y)(r.Fragment,null,t.map(((e,t)=>(0,a.Y)(r.Fragment,{key:e.slug},!!t&&", ",(0,a.Y)(i.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,o.A)(`/${c}/${n}/${e.slug}`)},e.name)))))}},7169:function(e,t,n){var a=n(6540),r=n(4794),i=n(7533);t.A=e=>{let{title:t="",description:n="",pathname:l="",image:o="",children:c=null,canonicalUrl:m=""}=e;const s=(0,i.A)(),{siteTitle:p,siteTitleAlt:u,siteUrl:g,siteDescription:d,siteImage:E,author:h,siteLanguage:v}=s,f={title:t?`${t} | ${p}`:u,description:n||d,url:`${g}${l||""}`,image:`${g}${o||E}`};return a.createElement(a.Fragment,null,a.createElement("html",{lang:v}),a.createElement("title",null,f.title),a.createElement("meta",{name:"description",content:f.description}),a.createElement("meta",{name:"image",content:f.image}),a.createElement("meta",{property:"og:title",content:f.title}),a.createElement("meta",{property:"og:url",content:f.url}),a.createElement("meta",{property:"og:description",content:f.description}),a.createElement("meta",{property:"og:image",content:f.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:f.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:f.title}),a.createElement("meta",{name:"twitter:url",content:f.url}),a.createElement("meta",{name:"twitter:description",content:f.description}),a.createElement("meta",{name:"twitter:image",content:f.image}),a.createElement("meta",{name:"twitter:image:alt",content:f.description}),a.createElement("meta",{name:"twitter:creator",content:h}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),m?a.createElement("link",{rel:"canonical",href:m}):null,c)}},5391:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o.p},default:function(){return c}});var a=n(6540),r=n(8453);function i(e){const t=Object.assign({h2:"h2",p:"p",h3:"h3"},(0,r.RP)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h2,null,"前言"),"\n",a.createElement(t.p,null,"Google Summer of Code 是一個推廣開源貢獻的項目，由 Google 作為平台媒合 Organization 跟 Contributor。今年是我第一次報名 GSoC，很幸運地通過 Proposal 篩選得到了參加項目的資格。今年從五月底開始正式啟動。"),"\n",a.createElement(t.h2,null,"貢獻進行式"),"\n",a.createElement(t.h3,null,"Week 1"),"\n",a.createElement(t.p,null,"我的項目在於創建一個 local dev env 以能夠最貼近於 prod env。原先的 configuration management tools 使用的是 Salt Stack，但由於 Salt Stack 不再支援 Creative Commons 所使用的 Debian 12，遂決議改使用 Ansible。"),"\n",a.createElement(t.p,null,"在最一開始的時候，我對於整個 Dev Ops Lifecycle 還沒有很明確的認知。對於我的項目來說，主要是聚焦在 Deploy Stage。在這個 Deploy Stage 裡面又能夠分成 Provisioning 以及 Configuration。而我剛開始的時候並不知道 Creative Commons 目前是直接手動 Provision 的，還以為是要用 Ansible 來 Provision。然而用 Configuration management tools 來 Provision 並不是最好的狀況，可能會有資訊安全上的疑慮，並且最初 Ansible 也並非設計為 Provision 用途，這之中的複雜度會大為增加，故維持手動 Provision 的做法。"),"\n",a.createElement(t.p,null,"這個項目的最終目標是將目前現有的應用都放到分別的 Container 當中，Ansible Server 本身也是一個 Container，並用 SSH 與各個 Container 做溝通。Week 1 的部分，在做完 Docker Container 以及 Ansible 的 Getting Starter，並且參考 Docker Hub Ansible Dockerfile 後，我成功部署了一個 Initial Ansible Container。"),"\n",a.createElement(t.h3,null,"Week 2"),"\n",a.createElement(t.p,null,"To be continue...."))}var l=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.RP)(),e.components);return t?a.createElement(t,e,a.createElement(i,e)):i(e)},o=n(1173);function c(e){return a.createElement(o.A,e,a.createElement(l,e))}o.A}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-google-summer-of-code-2024-index-mdx-d09706e6575ea553a25a.js.map