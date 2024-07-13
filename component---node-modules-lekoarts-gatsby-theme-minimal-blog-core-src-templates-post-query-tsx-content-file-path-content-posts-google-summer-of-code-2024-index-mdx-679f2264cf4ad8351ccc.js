"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[405],{1173:function(e,t,n){n.d(t,{p:function(){return u},A:function(){return g}});var r=n(6540),a=n(557),l=n(6835),i=n(3328),o=n(7715),c=n(7169);var m=e=>{let{post:t}=e;return null};const s=["16px","8px","4px"].map((e=>`rgba(0, 0, 0, 0.1) 0px ${e} ${e} 0px`));var p=e=>{let{data:{post:t},children:n}=e;return(0,a.Y)(i.A,null,(0,a.Y)(l.DZ,{as:"h1",variant:"styles.h1"},t.title),(0,a.Y)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,a.Y)("time",null,t.date),t.tags&&(0,a.Y)(r.Fragment,null," — ",(0,a.Y)(o.A,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,a.Y)("span",null,t.timeToRead," min read")),(0,a.Y)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:s.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,a.Y)(m,{post:t}))};const u=e=>{var t,n,r;let{data:{post:l}}=e;return(0,a.Y)(c.A,{title:l.title,description:l.description?l.description:l.excerpt,image:l.banner?null===(t=l.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(r=n.resize)||void 0===r?void 0:r.src:void 0,pathname:l.slug,canonicalUrl:l.canonicalUrl})};function g(e){let{...t}=e;return r.createElement(p,t)}},7715:function(e,t,n){var r=n(557),a=n(6540),l=n(4794),i=n(3601),o=n(2174);t.A=e=>{let{tags:t}=e;const{tagsPath:n,basePath:c}=(0,i.A)();return(0,r.Y)(a.Fragment,null,t.map(((e,t)=>(0,r.Y)(a.Fragment,{key:e.slug},!!t&&", ",(0,r.Y)(l.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,o.A)(`/${c}/${n}/${e.slug}`)},e.name)))))}},7169:function(e,t,n){var r=n(6540),a=n(4794),l=n(7533);t.A=e=>{let{title:t="",description:n="",pathname:i="",image:o="",children:c=null,canonicalUrl:m=""}=e;const s=(0,l.A)(),{siteTitle:p,siteTitleAlt:u,siteUrl:g,siteDescription:d,siteImage:v,author:b,siteLanguage:h}=s,E={title:t?`${t} | ${p}`:u,description:n||d,url:`${g}${i||""}`,image:`${g}${o||v}`};return r.createElement(r.Fragment,null,r.createElement("html",{lang:h}),r.createElement("title",null,E.title),r.createElement("meta",{name:"description",content:E.description}),r.createElement("meta",{name:"image",content:E.image}),r.createElement("meta",{property:"og:title",content:E.title}),r.createElement("meta",{property:"og:url",content:E.url}),r.createElement("meta",{property:"og:description",content:E.description}),r.createElement("meta",{property:"og:image",content:E.image}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image:alt",content:E.description}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:E.title}),r.createElement("meta",{name:"twitter:url",content:E.url}),r.createElement("meta",{name:"twitter:description",content:E.description}),r.createElement("meta",{name:"twitter:image",content:E.image}),r.createElement("meta",{name:"twitter:image:alt",content:E.description}),r.createElement("meta",{name:"twitter:creator",content:b}),r.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,a.withPrefix)("/favicon-32x32.png")}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,a.withPrefix)("/favicon-16x16.png")}),r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,a.withPrefix)("/apple-touch-icon.png")}),m?r.createElement("link",{rel:"canonical",href:m}):null,c)}},5391:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o.p},default:function(){return c}});var r=n(6540),a=n(8453);function l(e){const t=Object.assign({h2:"h2",p:"p",h3:"h3"},(0,a.RP)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h2,null,"前言"),"\n",r.createElement(t.p,null,"Google Summer of Code 是一個推廣開源貢獻的項目，由 Google 作為平台媒合 Organization 跟 Contributor。今年是我第一次報名 GSoC，很幸運地通過 Proposal 篩選得到了參加項目的資格。今年從五月底開始正式啟動。"),"\n",r.createElement(t.h2,null,"貢獻進行式"),"\n",r.createElement(t.h3,null,"Week 1"),"\n",r.createElement(t.p,null,"我的項目在於創建一個 local dev env 以能夠最貼近於 prod env。原先的 configuration management tools 使用的是 Salt Stack，但由於 Salt Stack 不再支援 Creative Commons 所使用的 Debian 12，遂決議改使用 Ansible。"),"\n",r.createElement(t.p,null,"在最一開始的時候，我對於整個 Dev Ops Lifecycle 還沒有很明確的認知。對於我的項目來說，主要是聚焦在 Deploy Stage。在這個 Deploy Stage 裡面又能夠分成 Provisioning 以及 Configuration。而我剛開始的時候並不知道 Creative Commons 目前是直接手動 Provision 的，還以為是要用 Ansible 來 Provision。然而用 Configuration management tools 來 Provision 並不是最好的狀況，可能會有資訊安全上的疑慮，並且最初 Ansible 也並非設計為 Provision 用途，這之中的複雜度會大為增加，故維持手動 Provision 的做法。"),"\n",r.createElement(t.p,null,"這個項目的最終目標是將目前現有的應用都放到分別的 Container 當中，Ansible Server 本身也是一個 Container，並用 SSH 與各個 Container 做溝通。Week 1 的部分，在做完 Docker Container 以及 Ansible 的 Getting Starter，並且參考 Docker Hub Ansible Dockerfile 後，我成功部署了一個 Initial Ansible Container。"),"\n",r.createElement(t.h3,null,"Week 2"),"\n",r.createElement(t.p,null,"第二週的代辦事項為把原本的 index-dev（使用 Apache2 運行的網站）拆為 Web-dev 以及 Db-dev Container，以及為第三週的 Bastion Server 做先行的研究。這個部分由於我對於原先的架構（Linux Apache MySQL PHP）不太了解，所以在 configuration 上面把有的東西複製下來貼上。事後我的 Mentor 告訴我，我們應該要從最基本的開始 config，而不是一口氣因為有前任的 Project 參考，就直接把所有東西貼上。按照順序的 Commits 有助於讓開發者了解到思考的邏輯。"),"\n",r.createElement(t.p,null,'另外我們重新討論到了 Provisioning 跟 Configuration 的議題，包含 Dockerfile 跟 Docker-compose.yml 的任務歸屬。Dockerfile 主要用於 provisioning。它定義了如何構建 Docker Image，包括基礎鏡像、安裝的軟件包、複製的文件等。Dockerfile 的理念是 "build it once, use it multiple times"。Docker-compose.yml 更多地關注於 configuration。它定義了如何運行容器，包括容器之間的關係、端口映射、掛載的卷、環境變量等。這些設置往往因部署環境而異，所以 Docker-compose.yml 會更頻繁地變動。'),"\n",r.createElement(t.p,null,"本週我們改變了合作的模式，最後的 Deliverable 由我的 Mentor 產出，添加了產出 ssh key 的 shell script，以及設定 local ","<","-",">"," Ansible 的 ssh access ，我 Review 此次的 PR 並提出疑問。"),"\n",r.createElement(t.h3,null,"Week 3"),"\n",r.createElement(t.p,null,"第三週的部分因為 #11 PR 所以我需要原創的部分較少，我這週負責了 local ","<","-",">"," Web-dev, local ","<","-",">"," Db-dev 的 ssh access，以及 ansible ","<","-",">"," Web-dev, Db-dev。\n同時這週的 Sync 也因為我白天正職的實習開始了，延期到隔週一。這部分我比較慶幸的是前三週花了很多時間跟 Mentor 溝通、建立默契，所以一週的缺席並沒有影響太多進度。"),"\n",r.createElement(t.h3,null,"Week 4 & 5"),"\n",r.createElement(t.p,null,"第四週開始寫 Ansible Playbook，把一些原本放在 web/Dockerfile 的東西移過去 Playbook。將 Dockerfile 和 Ansible Playbook 相結合的做法是一種常見的 Best practice: Dockerfile 負責基礎映像的構建，包括 OS 和基本工具的安裝，Ansible Playbook 則負責應用程式和服務的配置。這個部分比預期中花了一些時間，現在回頭看可能是因為在 Week 3 的時候，由於我沒有實際上開發過，也花太少時間去研究 LAMP(Linux, Apache, MySQL, PHP) Stack，所以不知道到底要怎麼設定各個 Component 的 Configuration，導致我一直無法成功啟用 Service，系統給予的錯誤訊息也引導我去錯誤的方向，原本以為是因為沒有權限從 Anisble Playbook access 到 web-dev Server，但後來發現不是這個問題（可能是因為沒有正確 Config Apache2 though...）。後來回頭去看了一下我的 Mentor 在第三週是怎麼寫每一個 Server 的 Dockerfile，發現 db 其實也需要一個 Startupservice 的 Shell script，這部分因為我 Shell Command 不熟所以之前都是看看就過了，不確定真正細節要怎麼處理，所以也額外花了一些時間補足 Linux Shell Script 的相關知識。"),"\n",r.createElement(t.h3,null,"Week 6"),"\n",r.createElement(t.p,null,"前兩週我也提前把 Midterm Evaluation 的 Blog Post 寫好，沒想到拖到 Week 6 都還沒 Post。不過也好險他們把我的文章放到最後修改，讓我有長一點的 Deadline 可以觀摩別人怎麼寫的。本週需要精修的地方是把文章的架構再分得更細一些，然後要加上 GitHub Repo 的 Link 以及 Chart。"),"\n",r.createElement(t.p,null,"另外回頭接續去做 Bastion Server 的相關設定，TBD..."))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.RP)(),e.components);return t?r.createElement(t,e,r.createElement(l,e)):l(e)},o=n(1173);function c(e){return r.createElement(o.A,e,r.createElement(i,e))}o.A}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-google-summer-of-code-2024-index-mdx-679f2264cf4ad8351ccc.js.map