"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[997],{1173:function(e,t,n){n.d(t,{p:function(){return p},A:function(){return E}});var l=n(6540),a=n(557),r=n(6835),i=n(3328),c=n(7715),o=n(7169);var m=e=>{let{post:t}=e;return null};const u=["16px","8px","4px"].map((e=>`rgba(0, 0, 0, 0.1) 0px ${e} ${e} 0px`));var s=e=>{let{data:{post:t},children:n}=e;return(0,a.Y)(i.A,null,(0,a.Y)(r.DZ,{as:"h1",variant:"styles.h1"},t.title),(0,a.Y)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,a.Y)("time",null,t.date),t.tags&&(0,a.Y)(l.Fragment,null," — ",(0,a.Y)(c.A,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,a.Y)("span",null,t.timeToRead," min read")),(0,a.Y)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:u.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,a.Y)(m,{post:t}))};const p=e=>{var t,n,l;let{data:{post:r}}=e;return(0,a.Y)(o.A,{title:r.title,description:r.description?r.description:r.excerpt,image:r.banner?null===(t=r.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(l=n.resize)||void 0===l?void 0:l.src:void 0,pathname:r.slug,canonicalUrl:r.canonicalUrl})};function E(e){let{...t}=e;return l.createElement(s,t)}},7715:function(e,t,n){var l=n(557),a=n(6540),r=n(4794),i=n(3601),c=n(2174);t.A=e=>{let{tags:t}=e;const{tagsPath:n,basePath:o}=(0,i.A)();return(0,l.Y)(a.Fragment,null,t.map(((e,t)=>(0,l.Y)(a.Fragment,{key:e.slug},!!t&&", ",(0,l.Y)(r.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,c.A)(`/${o}/${n}/${e.slug}`)},e.name)))))}},7169:function(e,t,n){var l=n(6540),a=n(4794),r=n(7533);t.A=e=>{let{title:t="",description:n="",pathname:i="",image:c="",children:o=null,canonicalUrl:m=""}=e;const u=(0,r.A)(),{siteTitle:s,siteTitleAlt:p,siteUrl:E,siteDescription:g,siteImage:h,author:d,siteLanguage:f}=u,k={title:t?`${t} | ${s}`:p,description:n||g,url:`${E}${i||""}`,image:`${E}${c||h}`};return l.createElement(l.Fragment,null,l.createElement("html",{lang:f}),l.createElement("title",null,k.title),l.createElement("meta",{name:"description",content:k.description}),l.createElement("meta",{name:"image",content:k.image}),l.createElement("meta",{property:"og:title",content:k.title}),l.createElement("meta",{property:"og:url",content:k.url}),l.createElement("meta",{property:"og:description",content:k.description}),l.createElement("meta",{property:"og:image",content:k.image}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{property:"og:image:alt",content:k.description}),l.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),l.createElement("meta",{name:"twitter:title",content:k.title}),l.createElement("meta",{name:"twitter:url",content:k.url}),l.createElement("meta",{name:"twitter:description",content:k.description}),l.createElement("meta",{name:"twitter:image",content:k.image}),l.createElement("meta",{name:"twitter:image:alt",content:k.description}),l.createElement("meta",{name:"twitter:creator",content:d}),l.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),l.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,a.withPrefix)("/favicon-32x32.png")}),l.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,a.withPrefix)("/favicon-16x16.png")}),l.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,a.withPrefix)("/apple-touch-icon.png")}),m?l.createElement("link",{rel:"canonical",href:m}):null,o)}},8294:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c.p},default:function(){return o}});var l=n(6540),a=n(8453);function r(e){const t=Object.assign({h2:"h2",p:"p",h3:"h3",h4:"h4",ol:"ol",li:"li",ul:"ul"},(0,a.RP)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h2,null,"前言"),"\n",l.createElement(t.p,null,"有鑒於自己在去年的實習失敗，想要用進行式紀錄這次的 Software Engineer 實習狀況。"),"\n",l.createElement(t.h3,null,"Week 1"),"\n",l.createElement(t.p,null,"這次實習最開心的是一起住的室友在同一個公司實習，很有善好相處，而且不是東亞人，所以在個性跟英文口語方面有很多可以學習的地方。\n另外公司在 Inclusion 方面做得比前一份公司好很多，所以讓我更勇於發言。"),"\n",l.createElement(t.h4,null,"什麼做得好？"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"主動約 Coffee Chat，目前累積聊天人數 1 人。知道了團隊成員對於 Intern 的看法跟期待，我的 Intern Project 並不是組上每天開發的項目，而是從頭設計的一個協助提升效能的 Analytical Tools。"),"\n",l.createElement(t.li,null,"享受 Onboarding 的過程，但也留意一些小心眼。記住每個人的名字，放到 Contact List 裡面。"),"\n",l.createElement(t.li,null,"每天都跟 Manager 1:1。"),"\n"),"\n",l.createElement(t.h4,null,"什麼做得不好？"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"到目前還不知道由 Mentor 主導的 Project Details。"),"\n",l.createElement(t.li,null,"應該也要每天跟 Mentor 1:1，他在 EST 我在 PST，時差上面還有需要協調的地方。"),"\n",l.createElement(t.li,null,"要把 Work Log 寫得更詳盡一點。"),"\n"),"\n",l.createElement(t.h4,null,"可以跟誰問 Feedback？"),"\n",l.createElement(t.p,null,"目前暫時還在調整的階段，但是跟很多 Alumni 聊天獲得了他們之前實習的心路歷程。"),"\n",l.createElement(t.h3,null,"Week 2 & 3"),"\n",l.createElement(t.p,null,"時光飛逝，本週都在忙公司的大型 Intern 活動，另類的逼迫我們使用公司的 Product。自從大學畢業之後就很久沒用照片修圖以及影片剪輯的軟體了，想到在新聞台工作就有一點 PTSD 發作的感覺。勉勉強強又蹭了幾餐白食，想到之前在前公司都要自掏腰包，就覺得果然還是大公司好啊。另外下週就是每年都有的放假週，打鐵趁熱跟一些組員 Coffee Chat，發現大家都是之前在 Microsoft、Amazon、Google 上班。"),"\n",l.createElement(t.p,null,"記錄一些大家認為是好的給 Junior 的 Tips："),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"做 Documentation，未來的你會感謝現在的你"),"\n",l.createElement(t.li,null,"交接或者會議的時候，多做一點順手的幫忙，會讓你跟組員之間關係更和諧"),"\n",l.createElement(t.li,null,"學習什麼語言不重要，因為如果你專精了一、兩個語言後，大公司都會預設你能夠很快 Pick Up。但如果你想要做後端的話，推薦你精通 Java..."),"\n",l.createElement(t.li,null,"Coffee Chat 很好，多跟不同的人聊天，看看他們的 Career Path"),"\n",l.createElement(t.li,null,"Junior 跟 Senior 的差別就在於 Project Scope：你能不能夠 Cover 更大型的專案，並且獨立完成工作。不完全是自己 Design 跟 Deliver，但是要成為一個領域的 PoC（Person of Contact）"),"\n"),"\n",l.createElement(t.h3,null,"Week 4"),"\n",l.createElement(t.p,null,"大家逐漸從 Shutdown Week 中收心，我也越來越習慣上班的節奏。慢慢越來越了解組上的人的個性，開始往 Adjacent Team 開始去約 Coffee Chat，目前累積人數：6。還在想要怎麼跟我們的 Offshore 培養感情。目前覺得比較有瓶頸的是在等待印度組員回覆的時間都花很久，我的 Mentor 最近又身體不適，目前我決定先跟 Manager 反應看看能不能請他 Unblock。"),"\n",l.createElement(t.h4,null,"什麼做得好？"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"已經知道自己的 Project 在幹嘛，現在幾乎都是我 Schedule 跟 Host meeting，不確定會不會太 Overcontroled..."),"\n",l.createElement(t.li,null,"有一次在 Daily Standup 被 Cue，沒有支支吾吾講不出東西！"),"\n",l.createElement(t.li,null,"都有好好的 Doc 每件事情，然後放在自己的 Work Log 上"),"\n"),"\n",l.createElement(t.h4,null,"什麼做得不好？"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"因為很複雜，可以再多重複幾次目前組上現有 Service 的流程直到自己記住各種觀念"),"\n",l.createElement(t.li,null,"延續上點，對於各種觀念可以延伸學習"),"\n"),"\n",l.createElement(t.h4,null,"可以跟誰問 Feedback？"),"\n",l.createElement(t.p,null,"稍微看了一下在 07/26 約莫為我實習的 Midterm，想要提前詢問 Manager 跟 Mentor 的 Expectation"),"\n",l.createElement(t.h3,null,"Week 5"),"\n",l.createElement(t.p,null,"由於各種同事在 PTO、Offshore 回應慢，以及 Mentor 生病加上 Oncall，我一直無法順利完成環境設置。更讓我震驚的是，我從 Manager 那裡得到了「進度太慢」的反饋，這讓我心情非常不安。雖然我不想找藉口，但我已經做了所有我能做的事：每天寫 Work Log、翻遍 Wiki、安排很多 Meeting，結果還是得到了這樣的反饋。\n回家後，我立刻和室友商討對策，並在 Slack 的 shared channel 發了一篇長文表達我的感受跟。隔天中午吃飯時，我向其他組員提到我的專案進度緩慢，請教他們有什麼建議（非主動、剛好話題提到，不是以不好的方式描述我的 Manager 跟 Mentor）。其中一位組員建議我主動詢問還有什麼額外的工作可以做，這樣在 Manager 和 Skip Manager 討論我的表現時，可以說「在被 Blocked 時主動尋找工作或尋求幫助」。結果，我在私訊中表達了我的主動性後，Manager 卻讓我專注於自己的專案。不過，由於隔了一晚睡了一覺，我感覺冷靜了許多，溝通也有了效果（Offshore team 終於回應了）。仔細回想，我是否太衝動了？還是應該專注於自己的工作。提前和 Manager 及 Mentor 提到 Midpoint Review 的事情，結果也沒得到什麼回應，哈哈。"),"\n",l.createElement(t.h4,null,"什麼做得好？"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"主動去溝通、遇到困難的時候"),"\n"),"\n",l.createElement(t.h4,null,"什麼做得不好？"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"換個角度去思考、如果我是 Manager，我會希望我的 Intern 能做到什麼？"),"\n"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"不期望我的 Intern 會所有的事情，但在提問的時候抱著可能的解法"),"\n",l.createElement(t.li,null,"知道自己做過的研究，被問到定義類型的問題答得出來"),"\n",l.createElement(t.li,null,"面對壓力時，保持冷靜、想想該怎麼做，把該做的做好了、該紀錄的紀錄好，剩下的交給別人來評斷，自己只求問心無愧"),"\n"))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.RP)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)},c=n(1173);function o(e){return l.createElement(c.A,e,l.createElement(i,e))}c.A}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-summer-internship-wip-2024-index-mdx-8dc645dfb4c7a1b0b7aa.js.map