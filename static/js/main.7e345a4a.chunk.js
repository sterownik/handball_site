(this["webpackJsonphandball-site"]=this["webpackJsonphandball-site"]||[]).push([[0],{95:function(n,e,t){"use strict";t.r(e);var i,o,r,c,a,l,s,d,h,u,b,j,p,x,m,g,O=t(0),f=t.n(O),v=t(15),w=t.n(v),k=t(4),y=t(5),B=t(21),M=t(20),S=Object(M.b)({name:"navigation",initialState:{value:[{id:0,title:"Aktualno\u015bci",submenu:[],path:"/handball_site/"},{id:1,title:"Kluby",submenu:[],path:"/handball_site/clubs"},{id:2,title:"S\u0119dziowie",path:"/handball_site/referees",submenu:[{id:10,title:"Komisja ZPRP",path:"/handball_site/board"},{id:11,title:"Komisja Podkarpackie WZPR",path:"/handball_site/boardvoivo"},{id:12,title:"Lista s\u0119dzi\xf3w",path:"/handball_site/referees"}]},{id:3,title:"Przepisy",path:"/handball_site/rules",submenu:[{id:20,title:"Przepisy",path:"/handball_site/rules"},{id:21,title:"Stawki",path:"/handball_site/field"}]}]}}),_=function(n){return n.navigation.value},z=S.reducer,L=t(24),A=t(118),F=t(123),P=t(122),G=t(120),W=Object(M.b)({name:"showMobileMenu",initialState:{value:!1},reducers:{changeFlag:function(n){n.value=!n.value}}}),I=W.actions.changeFlag,R=function(n){return n.showMobileMenu.value},Y=W.reducer,C=t(2),K=k.a.div(i||(i=Object(y.a)(["\n    width: 100%;\n    background-color: ",";\n"])),(function(n){return n.theme.colorGreenLight})),E=k.a.ul(o||(o=Object(y.a)(["\n    max-width: 1000px;\n    margin: 0 auto;\n    display: flex;\n    justify-content: space-between;\n    list-style: none;\n    padding: 0;\n"]))),H=k.a.div(r||(r=Object(y.a)(["\n    position: absolute;\n    top: 50%;\n    right: 10%;\n    transform: translateY(-50%);\n    width: 20px;\n    height: 20px;\n      \n    img {\n        width: 20px;\n    }\n"]))),T=k.a.div(c||(c=Object(y.a)(["\n    position: absolute;\n    width: 100%;\n    border-top: 1px solid ",";\n    \n    .MuiAccordionSummary-expandIcon.MuiIconButton-edgeEnd {\n        border: none;\n        margin-right: 5%;\n        \n        img {\n            width: 20px;\n            height: 20px;\n        }\n    }\n    \n    .MuiButtonBase-root {\n        border-radius: 4px;\n        background-color: ",";\n        border-bottom: 1px solid ",";\n    }\n    \n    .MuiAccordionSummary-content {\n        text-transform: uppercase;\n    \n        a {\n            padding: 16px 0;\n            text-decoration: none;\n            color: ",";\n            width: 100%;\n        }\n    }\n    \n    .MuiAccordionDetails-root {\n        padding: 20px 16px;\n        border-bottom: 1px solid ",";\n    }\n    \n    .MuiAccordion-root {\n        background-color: ",";\n        \n        a {\n            color: ",";\n            text-decoration: none;\n            text-transform: uppercase;\n            width: 100%;\n        }\n        \n        &.Mui-expanded {\n            margin: 0;\n        }\n    }\n"])),(function(n){return n.theme.colorBlack}),(function(n){return n.theme.colorGreenLight}),(function(n){return n.theme.colorBlack}),(function(n){return n.theme.colorBlack}),(function(n){return n.theme.colorBlack}),(function(n){return n.theme.colorGreenLighter}),(function(n){return n.theme.colorBlack})),X=k.a.li(a||(a=Object(y.a)(["\n    position: relative;\n    flex-basis: 5%;\n\n    img {\n        width: ","px;\n        height: ","px;\n        position: absolute;\n        top: 50%;\n        transform: translateY(-50%);\n    }\n    \n    @media (max-width: 720px) {\n        img {\n            position: relative;\n            top: 50%;\n            transform: translateY(-50%);\n        }\n    }\n"])),(function(n){return n.height}),(function(n){return n.height})),D=k.a.ul(l||(l=Object(y.a)(["\n    display: flex;\n    justify-content: space-around;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n"]))),J=k.a.li(s||(s=Object(y.a)(["\n    flex-basis: 22.5%;\n    padding: 20px 0;\n    text-align: center;\n    position: relative;\n    \n    a {\n        color: ",';\n        font-weight: 600;\n        text-decoration: none;\n        text-transform: uppercase;\n    }\n      \n    ul {\n        display: none;\n    }\n    \n    &:hover {\n        div {\n            transition: .5s;\n            transform: translateY(-50%) rotate(180deg);\n        }\n    \n        &:after {\n            content: "";\n            position: absolute;\n            animation: menuAnimationHover .5s linear forwards;\n            height: 2px;\n            background-color: ',";\n            bottom: 0;\n            left: 50%;\n            transform: translateX(-50%);\n            display: ",";\n        }\n    \n        ul {\n            display: block;\n            animation: subMenuSliceIn .5s linear forwards;\n        }\n    }\n    \n    @keyframes subMenuSliceIn {\n        0% {\n            top: 0%;\n        }\n        25% {\n            top: 25%;\n        }\n        50% {\n            top: 50%;\n        }\n        100% {\n            top: 100%;\n        }\n    }\n    \n    @keyframes menuAnimationHover {\n        0% {\n            width: 0%;\n        }\n        25% {\n            width: 25%;\n        }\n        50% {\n            width: 50%;\n        }\n        100% {\n            width: 70%;\n        }\n    }\n"])),(function(n){return n.theme.colorBlackLight}),(function(n){return n.theme.colorWhite}),(function(n){return n.styleKey?"none":"block"})),Z=k.a.ul(d||(d=Object(y.a)(["\n    background-color: ",";\n    border-top: 1px solid ",";\n    position: absolute;\n    list-style: none;\n    padding: 0;\n    width: 100%;\n    left: 50%;\n    transform: translateX(-50%);\n    z-index: -1;\n"])),(function(n){return n.theme.colorGreenLight}),(function(n){return n.theme.colorWhite})),V=k.a.li(h||(h=Object(y.a)(["\n    padding: 10px;\n    border-bottom: 1px solid ",';\n    position: relative;\n    \n    :hover {\n        &:after {\n            content: "";\n            position: absolute;\n            height: 2px;\n            left: 50%;\n            transform: translateX(-50%);\n            background-color: ',";\n            bottom: -1px;\n            animation: menuAnimationHover .5s linear forwards;\n        }\n    }\n    \n    @keyframes menuAnimationHover {\n        0% {\n            width: 0%;\n        }\n        25% {\n            width: 25%;\n        }\n        50% {\n            width: 50%;\n        }\n        100% {\n            width: 100%;\n        }\n    }\n"])),(function(n){return n.theme.colorWhite}),(function(n){return n.theme.colorBlackLight})),q=function(){var n=Object(B.c)(_),e=Object(A.a)("(min-width:721px)"),t=Object(B.c)(R),i=Object(B.b)(),o=n.map((function(n){return Object(C.jsx)("div",{children:n.submenu.length>0?Object(C.jsxs)(F.a,{children:[Object(C.jsx)(P.a,{expandIcon:Object(C.jsx)("span",{children:Object(C.jsx)("img",{src:"./icons/arrow-down.png",alt:""})}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(C.jsx)("p",{children:n.title})}),n.submenu.map((function(n){return Object(C.jsx)(G.a,{children:Object(C.jsx)(L.b,{onClick:function(){return i(I())},to:n.path,children:n.title})},n.id)}))]}):Object(C.jsx)(P.a,{"aria-controls":"panel2a-content",id:"panel2a-header",children:Object(C.jsx)(L.b,{onClick:function(){return i(I())},to:n.path,children:n.title})})},n.id)})),r=n.map((function(n){return Object(C.jsxs)(J,{styleKey:n.submenu.length>0,children:[Object(C.jsx)(L.b,{to:n.path,children:n.title}),n.submenu.length>0?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(H,{children:Object(C.jsx)("img",{src:"./icons/arrow-down.png",alt:""})}),Object(C.jsx)(Z,{children:n.submenu.map((function(n){return Object(C.jsx)(V,{children:Object(C.jsx)(L.b,{to:n.path,children:n.title})},n.id)}))})]}):null]},n.id)}));return Object(C.jsx)(K,{children:e?Object(C.jsxs)(E,{children:[Object(C.jsx)(X,{height:50,children:Object(C.jsx)("img",{src:"./logs/logo-company.png",alt:""})}),r,Object(C.jsx)(X,{height:50,children:Object(C.jsx)("img",{src:"./logs/logo-company-second.png",alt:""})})]}):Object(C.jsxs)("div",{children:[Object(C.jsxs)(D,{children:[Object(C.jsx)(X,{height:50,children:Object(C.jsx)("img",{src:"./logs/logo-company.png",alt:""})}),Object(C.jsx)(X,{height:50,children:Object(C.jsx)("img",{src:"./logs/logo-company-second.png",alt:""})}),Object(C.jsx)(X,{onClick:function(){return i(I())},height:30,children:t?Object(C.jsx)("img",{src:"./icons/close.png",alt:""}):Object(C.jsx)("img",{src:"./icons/menu.png",alt:""})})]}),t?Object(C.jsx)(T,{children:o}):null]})})},N=Object(M.b)({name:"contact",initialState:{value:{email:"w.golda996@gmail.com",telephone:"+48 731604761",address:"Rzesz\xf3w, ul. Przyk\u0142adowa 1"}}}),Q=function(n){return n.contact.value},U=N.reducer,$=k.a.div(u||(u=Object(y.a)(["\n    width: 100%;\n    background-color: ",";\n    z-index: 1;\n    position: relative;\n"])),(function(n){return n.theme.colorBlackLight})),nn=k.a.div(b||(b=Object(y.a)(["\n    max-width: 1000px;\n    margin: 0 auto;\n    display: flex;\n    justify-content: space-between;\n"]))),en=k.a.div(j||(j=Object(y.a)(["\n    flex-basis: 30%;\n    color: ",";\n    text-align: center;\n    \n    p {\n        padding: 5px 0;\n        margin: 0;\n        display: inline;\n    }\n    \n    @media (max-width: 720px) {\n        p {\n            font-size: 12px;\n            display: block;\n            padding: 5px;\n            position: relative;\n            top: 50%;\n            transform: translateY(-50%);\n        }\n    }\n    \n    span {\n        color: ",";\n        font-size: 15px;\n        \n        @media (max-width: 720px) {\n            display: none;\n        }\n    }\n"])),(function(n){return n.theme.colorWhite}),(function(n){return n.theme.colorGrey})),tn=function(){var n=Object(B.c)(Q);return Object(C.jsx)($,{children:Object(C.jsxs)(nn,{children:[Object(C.jsxs)(en,{children:[Object(C.jsx)("span",{children:"e-mail: "}),Object(C.jsx)("p",{children:n.email})]}),Object(C.jsxs)(en,{children:[Object(C.jsx)("span",{children:"telefon: "}),Object(C.jsx)("p",{children:n.telephone})]}),Object(C.jsxs)(en,{children:[Object(C.jsx)("span",{children:"adres: "})," ",Object(C.jsx)("p",{children:n.address})]})]})})},on=k.a.div(p||(p=Object(y.a)(["\n    position: sticky;\n    position: -webkit-sticky;\n    top: 0;\n    z-index: 2;\n"]))),rn=function(){return Object(C.jsx)(on,{children:Object(C.jsx)(q,{})})},cn=t(56),an=k.a.div(x||(x=Object(y.a)(['\n    position: relative;\n    \n    &:after {\n        content: "";\n        background-color: ',";\n        position: absolute;\n        opacity: .3;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n    }\n    \n    &:hover {\n        &:after {\n            transition: .5s;\n            opacity: 0;\n        }\n    }\n"])),(function(n){return n.theme.colorBlack})),ln=function(n){return Object(C.jsx)(an,{children:Object(C.jsx)("img",{src:n.src,alt:""})})},sn=Object(M.b)({name:"slideshow",initialState:{value:[{id:1,path:"./sliderPhotos/test1.jpg"},{id:2,path:"./sliderPhotos/test2.jpg"},{id:3,path:"./sliderPhotos/test3.jpg"},{id:4,path:"./sliderPhotos/test5.jpg"}]}}),dn=function(n){return n.slideshow.value},hn=sn.reducer,un=t(63),bn=t.n(un),jn=(t(93),t(94),Object(k.a)(bn.a)(m||(m=Object(y.a)(["\n    .slick-arrow {\n        width: 5%;\n        background-color: ",";\n        opacity: .2;\n        height: 100%;\n        transform: none;\n        top: 0;\n        transition: .5s;\n        z-index: 1;\n        \n        &:before {\n            color: ",";\n            font-size: 40px;\n        }\n        \n        &:hover {\n            opacity: .3;\n        }\n        \n        &.slick-next {\n            right: 0;\n        }\n        \n        &.slick-prev {\n            left: 0;\n        }\n    }\n\n    .slick-slide {\n        img {\n            width: 100vw;\n            height: 70vh;\n            object-fit: cover;\n            position: relative;\n        }\n    }\n    \n    @media (max-width: 720px) {\n        .slick-arrow {\n            background-color: inherit;\n            opacity: .5;\n            width: 40px;\n        \n            &.slick-next {\n                right: 10px;\n            }\n            \n            &.slick-prev {\n                left: 10px;\n            }\n            \n            &:before {\n                color: ",";\n            }\n        }\n    \n         .slick-slide img {\n            height: 30vh;\n        }\n    }\n"])),(function(n){return n.theme.colorWhite}),(function(n){return n.theme.colorBlackLight}),(function(n){return n.theme.colorWhite}))),pn=function(){var n=Object(B.c)(dn).map((function(n){return Object(C.jsx)(ln,{src:n.path})}));return Object(C.jsx)(jn,Object(cn.a)(Object(cn.a)({},{dots:!1,arrows:!0,infinite:!0,speed:800,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,lazyLoad:!0,fade:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!1}}]}),{},{children:n}))},xn=function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(tn,{}),Object(C.jsx)(rn,{}),Object(C.jsx)(pn,{})]})},mn=t(8),gn=function(){return Object(C.jsx)("div",{children:"Activity"})},On=function(){return Object(C.jsx)("div",{children:"Clubs"})},fn=function(){return Object(C.jsx)("div",{children:"Board"})},vn=function(){return Object(C.jsx)("div",{children:"BoardVoivodeship"})},wn=function(){return Object(C.jsx)("div",{children:"Field"})},kn=function(){return Object(C.jsx)("div",{children:"Referees"})},yn=function(){return Object(C.jsx)("div",{children:"Rules"})},Bn=k.a.div(g||(g=Object(y.a)(["\n    \n"]))),Mn=function(){return Object(C.jsx)(Bn,{children:Object(C.jsxs)(mn.c,{children:[Object(C.jsx)(mn.a,{exact:!0,path:"/handball_site/",component:gn}),Object(C.jsx)(mn.a,{path:"/handball_site/clubs",component:On}),Object(C.jsx)(mn.a,{path:"/handball_site/board",component:fn}),Object(C.jsx)(mn.a,{path:"/handball_site/boardvoivo",component:vn}),Object(C.jsx)(mn.a,{path:"/handball_site/field",component:wn}),Object(C.jsx)(mn.a,{path:"/handball_site/referees",component:kn}),Object(C.jsx)(mn.a,{path:"/handball_site/rules",component:yn})]})})},Sn=function(){return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(L.a,{children:[Object(C.jsx)(xn,{}),Object(C.jsx)(Mn,{})]})})};var _n,zn=function(){return Object(C.jsx)(Sn,{})},Ln=t(13),An=t(35),Fn=t(64),Pn=Object(Fn.a)({colorBlack:"#000",colorBlackLight:"#333",colorRed:"#F00",colorYellow:"#FF0",colorWhite:"#FFF",colorGrey:"#BBB",colorGreenLight:"#A8E6BA",colorGreenLighter:"#B7E4C7"}),Gn=t(121),Wn=function(n){var e=n.children;return Object(C.jsx)(Gn.a,{theme:Pn,children:Object(C.jsxs)(Ln.c,{theme:Pn,children:[Object(C.jsx)(An.a,{styles:Object(An.b)(_n||(_n=Object(y.a)(["\n                    body {\n                        background-color: #85D397;\n                        margin: 0;\n                        font-family: sans-serif;\n                    }\n                    \n                    #root {\n                        height: 200vh;\n                    }\n                "])))}),e]})})},In=Object(M.a)({reducer:{contact:U,navigation:z,showMobileMenu:Y,slideshow:hn}});w.a.render(Object(C.jsx)(f.a.StrictMode,{children:Object(C.jsx)(Wn,{children:Object(C.jsx)(B.a,{store:In,children:Object(C.jsx)(zn,{})})})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.7e345a4a.chunk.js.map