(this["webpackJsonphandball-site"]=this["webpackJsonphandball-site"]||[]).push([[0],{102:function(e,t,i){"use strict";i.r(t);var n,s,u,a,r,l,o,c,m,d,p,b,v,g,h,j,f,x,q,O,w,y,S,k,P,I=i(0),N=i.n(I),M=i(17),L=i.n(M),C=i(4),A=i(5),B=i(13),z=i(15),D=Object(z.b)({name:"navigation",initialState:{value:[{id:0,title:"Aktualno\u015bci",submenu:[],path:"/"},{id:1,title:"Kluby",submenu:[],path:"/clubs"},{id:2,title:"S\u0119dziowie",path:"/referees",submenu:[{id:10,title:"Komisja ZPRP",path:"/board"},{id:11,title:"Komisja Podkarpackie WZPR",path:"/boardvoivo"},{id:12,title:"Lista s\u0119dzi\xf3w",path:"/referees"}]},{id:3,title:"Przepisy",path:"/rules",submenu:[{id:20,title:"Przepisy",path:"/rules"},{id:21,title:"Stawki",path:"/field"}]}]}}),F=function(e){return e.navigation.value},V=D.reducer,U=i(22),G=i(132),Q=i(141),W=i(142),R=i(134),Y=Object(z.b)({name:"showMobileMenu",initialState:{value:!1},reducers:{changeFlag:function(e){e.value=!e.value}}}),K=Y.actions.changeFlag,E=function(e){return e.showMobileMenu.value},H=Y.reducer,T=i(1),X=C.a.div(n||(n=Object(A.a)(["\n    width: 100%;\n    background-color: ",";\n"])),(function(e){return e.theme.colorGreenLight})),J=C.a.ul(s||(s=Object(A.a)(["\n    max-width: 1000px;\n    margin: 0 auto;\n    display: flex;\n    justify-content: space-between;\n    list-style: none;\n    padding: 0;\n"]))),Z=C.a.div(u||(u=Object(A.a)(["\n    position: absolute;\n    top: 50%;\n    right: 10%;\n    transform: translateY(-50%);\n    width: 20px;\n    height: 20px;\n      \n    img {\n        width: 20px;\n    }\n"]))),_=C.a.div(a||(a=Object(A.a)(["\n    position: absolute;\n    width: 100%;\n    border-top: 1px solid ",";\n    \n    .MuiAccordionSummary-expandIcon.MuiIconButton-edgeEnd {\n        border: none;\n        margin-right: 5%;\n        \n        img {\n            width: 20px;\n            height: 20px;\n        }\n    }\n    \n    .MuiButtonBase-root {\n        border-radius: 4px;\n        background-color: ",";\n        border-bottom: 1px solid ",";\n    }\n    \n    .MuiAccordionSummary-content {\n        text-transform: uppercase;\n    \n        a {\n            padding: 16px 0;\n            text-decoration: none;\n            color: ",";\n            width: 100%;\n        }\n    }\n    \n    .MuiAccordionDetails-root {\n        padding: 20px 16px;\n        border-bottom: 1px solid ",";\n    }\n    \n    .MuiAccordion-root {\n        background-color: ",";\n        \n        a {\n            color: ",";\n            text-decoration: none;\n            text-transform: uppercase;\n            width: 100%;\n        }\n        \n        &.Mui-expanded {\n            margin: 0;\n        }\n    }\n"])),(function(e){return e.theme.colorBlack}),(function(e){return e.theme.colorGreenLight}),(function(e){return e.theme.colorBlack}),(function(e){return e.theme.colorBlack}),(function(e){return e.theme.colorBlack}),(function(e){return e.theme.colorGreenLighter}),(function(e){return e.theme.colorBlack})),$=C.a.li(r||(r=Object(A.a)(["\n    position: relative;\n    flex-basis: 5%;\n\n    img {\n        width: ","px;\n        height: ","px;\n        position: absolute;\n        top: 50%;\n        transform: translateY(-50%);\n    }\n    \n    @media (max-width: 720px) {\n        img {\n            position: relative;\n            top: 50%;\n            transform: translateY(-50%);\n        }\n    }\n"])),(function(e){return e.height}),(function(e){return e.height})),ee=C.a.ul(l||(l=Object(A.a)(["\n    display: flex;\n    justify-content: space-around;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n"]))),te=C.a.li(o||(o=Object(A.a)(["\n    flex-basis: 22.5%;\n    padding: 20px 0;\n    text-align: center;\n    position: relative;\n    \n    a {\n        color: ",';\n        font-weight: 600;\n        text-decoration: none;\n        text-transform: uppercase;\n    }\n      \n    ul {\n        display: none;\n    }\n    \n    &:hover {\n        div {\n            transition: .5s;\n            transform: translateY(-50%) rotate(180deg);\n        }\n    \n        &:after {\n            content: "";\n            position: absolute;\n            animation: menuAnimationHover .5s linear forwards;\n            height: 2px;\n            background-color: ',";\n            bottom: 0;\n            left: 50%;\n            transform: translateX(-50%);\n            display: ",";\n        }\n    \n        ul {\n            display: block;\n            animation: subMenuSliceIn .5s linear forwards;\n        }\n    }\n    \n    @keyframes subMenuSliceIn {\n        0% {\n            top: 0%;\n        }\n        25% {\n            top: 25%;\n        }\n        50% {\n            top: 50%;\n        }\n        100% {\n            top: 100%;\n        }\n    }\n    \n    @keyframes menuAnimationHover {\n        0% {\n            width: 0%;\n        }\n        25% {\n            width: 25%;\n        }\n        50% {\n            width: 50%;\n        }\n        100% {\n            width: 70%;\n        }\n    }\n"])),(function(e){return e.theme.colorBlackLight}),(function(e){return e.theme.colorWhite}),(function(e){return e.styleKey?"none":"block"})),ie=C.a.ul(c||(c=Object(A.a)(["\n    background-color: ",";\n    border-top: 1px solid ",";\n    position: absolute;\n    list-style: none;\n    padding: 0;\n    width: 100%;\n    left: 50%;\n    transform: translateX(-50%);\n    z-index: -1;\n"])),(function(e){return e.theme.colorGreenLight}),(function(e){return e.theme.colorWhite})),ne=C.a.li(m||(m=Object(A.a)(["\n    padding: 10px;\n    border-bottom: 1px solid ",';\n    position: relative;\n    \n    :hover {\n        &:after {\n            content: "";\n            position: absolute;\n            height: 2px;\n            left: 50%;\n            transform: translateX(-50%);\n            background-color: ',";\n            bottom: -1px;\n            animation: menuAnimationHover .5s linear forwards;\n        }\n    }\n    \n    @keyframes menuAnimationHover {\n        0% {\n            width: 0%;\n        }\n        25% {\n            width: 25%;\n        }\n        50% {\n            width: 50%;\n        }\n        100% {\n            width: 100%;\n        }\n    }\n"])),(function(e){return e.theme.colorWhite}),(function(e){return e.theme.colorBlackLight})),se=function(){var e=Object(B.c)(F),t=Object(G.a)("(min-width:721px)"),i=Object(B.c)(E),n=Object(B.b)(),s=e.map((function(e){return Object(T.jsx)("div",{children:e.submenu.length>0?Object(T.jsxs)(Q.a,{children:[Object(T.jsx)(W.a,{expandIcon:Object(T.jsx)("span",{children:Object(T.jsx)("img",{src:"./icons/arrow-down.png",alt:""})}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(T.jsx)("p",{children:e.title})}),e.submenu.map((function(e){return Object(T.jsx)(R.a,{children:Object(T.jsx)(U.b,{onClick:function(){return n(K())},to:e.path,children:e.title})},e.id)}))]}):Object(T.jsx)(W.a,{"aria-controls":"panel2a-content",id:"panel2a-header",children:Object(T.jsx)(U.b,{onClick:function(){return n(K())},to:e.path,children:e.title})})},e.id)})),u=e.map((function(e){return Object(T.jsxs)(te,{styleKey:e.submenu.length>0,children:[Object(T.jsx)(U.b,{to:e.path,children:e.title}),e.submenu.length>0?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(Z,{children:Object(T.jsx)("img",{src:"./icons/arrow-down.png",alt:""})}),Object(T.jsx)(ie,{children:e.submenu.map((function(e){return Object(T.jsx)(ne,{children:Object(T.jsx)(U.b,{to:e.path,children:e.title})},e.id)}))})]}):null]},e.id)}));return Object(T.jsx)(X,{children:t?Object(T.jsxs)(J,{children:[Object(T.jsx)($,{height:50,children:Object(T.jsx)("img",{src:"./logs/logo-company.png",alt:""})}),u,Object(T.jsx)($,{height:50,children:Object(T.jsx)("img",{src:"./logs/logo-company-second.png",alt:""})})]}):Object(T.jsxs)("div",{children:[Object(T.jsxs)(ee,{children:[Object(T.jsx)($,{height:50,children:Object(T.jsx)("img",{src:"./logs/logo-company.png",alt:""})}),Object(T.jsx)($,{height:50,children:Object(T.jsx)("img",{src:"./logs/logo-company-second.png",alt:""})}),Object(T.jsx)($,{onClick:function(){return n(K())},height:30,children:i?Object(T.jsx)("img",{src:"./icons/close.png",alt:""}):Object(T.jsx)("img",{src:"./icons/menu.png",alt:""})})]}),i?Object(T.jsx)(_,{children:s}):null]})})},ue=Object(z.b)({name:"contact",initialState:{value:{email:"w.golda996@gmail.com",telephone:"+48 731604761",address:"Rzesz\xf3w, ul. Przyk\u0142adowa 1"}}}),ae=function(e){return e.contact.value},re=ue.reducer,le=C.a.div(d||(d=Object(A.a)(["\n    width: 100%;\n    background-color: ",";\n    z-index: 1;\n    position: relative;\n"])),(function(e){return e.theme.colorBlackLight})),oe=C.a.div(p||(p=Object(A.a)(["\n    max-width: 1000px;\n    margin: 0 auto;\n    display: flex;\n    justify-content: space-between;\n"]))),ce=C.a.div(b||(b=Object(A.a)(["\n    flex-basis: 30%;\n    color: ",";\n    text-align: center;\n    \n    p {\n        padding: 5px 0;\n        margin: 0;\n        display: inline;\n    }\n    \n    @media (max-width: 720px) {\n        p {\n            font-size: 12px;\n            display: block;\n            padding: 5px;\n            position: relative;\n            top: 50%;\n            transform: translateY(-50%);\n        }\n    }\n    \n    span {\n        color: ",";\n        font-size: 15px;\n        \n        @media (max-width: 720px) {\n            display: none;\n        }\n    }\n"])),(function(e){return e.theme.colorWhite}),(function(e){return e.theme.colorGrey})),me=function(){var e=Object(B.c)(ae);return Object(T.jsx)(le,{children:Object(T.jsxs)(oe,{children:[Object(T.jsxs)(ce,{children:[Object(T.jsx)("span",{children:"e-mail: "}),Object(T.jsx)("p",{children:e.email})]}),Object(T.jsxs)(ce,{children:[Object(T.jsx)("span",{children:"telefon: "}),Object(T.jsx)("p",{children:e.telephone})]}),Object(T.jsxs)(ce,{children:[Object(T.jsx)("span",{children:"adres: "})," ",Object(T.jsx)("p",{children:e.address})]})]})})},de=C.a.div(v||(v=Object(A.a)(["\n    position: sticky;\n    position: -webkit-sticky;\n    top: 0;\n    z-index: 2;\n"]))),pe=function(){return Object(T.jsx)(de,{children:Object(T.jsx)(se,{})})},be=i(56),ve=C.a.div(g||(g=Object(A.a)(['\n    position: relative;\n    \n    &:after {\n        content: "";\n        background-color: ',";\n        position: absolute;\n        opacity: .3;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n    }\n    \n    &:hover {\n        &:after {\n            transition: .5s;\n            opacity: 0;\n        }\n    }\n"])),(function(e){return e.theme.colorBlack})),ge=function(e){return Object(T.jsx)(ve,{children:Object(T.jsx)("img",{src:e.src,alt:""})})},he=Object(z.b)({name:"slideshow",initialState:{value:[{id:1,path:"./sliderPhotos/test1.jpg"},{id:2,path:"./sliderPhotos/test2.jpg"},{id:3,path:"./sliderPhotos/test3.jpg"},{id:4,path:"./sliderPhotos/test5.jpg"}]}}),je=function(e){return e.slideshow.value},fe=he.reducer,xe=i(64),qe=i.n(xe),Oe=(i(96),i(97),Object(C.a)(qe.a)(h||(h=Object(A.a)(["\n    .slick-arrow {\n        width: 5%;\n        background-color: ",";\n        opacity: .2;\n        height: 100%;\n        transform: none;\n        top: 0;\n        transition: .5s;\n        z-index: 1;\n        \n        &:before {\n            color: ",";\n            font-size: 40px;\n        }\n        \n        &:hover {\n            opacity: .3;\n        }\n        \n        &.slick-next {\n            right: 0;\n        }\n        \n        &.slick-prev {\n            left: 0;\n        }\n    }\n\n    .slick-slide {\n        img {\n            width: 100vw;\n            height: 70vh;\n            object-fit: cover;\n            position: relative;\n        }\n    }\n    \n    @media (max-width: 720px) {\n        .slick-arrow {\n            background-color: inherit;\n            opacity: .5;\n            width: 40px;\n        \n            &.slick-next {\n                right: 10px;\n            }\n            \n            &.slick-prev {\n                left: 10px;\n            }\n            \n            &:before {\n                color: ",";\n            }\n        }\n    \n         .slick-slide img {\n            height: 30vh;\n        }\n    }\n"])),(function(e){return e.theme.colorWhite}),(function(e){return e.theme.colorBlackLight}),(function(e){return e.theme.colorWhite}))),we=function(){var e=Object(B.c)(je).map((function(e){return Object(T.jsx)(ge,{src:e.path})}));return Object(T.jsx)(Oe,Object(be.a)(Object(be.a)({},{dots:!1,arrows:!0,infinite:!0,speed:800,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,lazyLoad:!0,fade:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!1}}]}),{},{children:e}))},ye=function(){return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(me,{}),Object(T.jsx)(pe,{}),Object(T.jsx)(we,{})]})},Se=i(10),ke=i(139),Pe=i(135),Ie=i(138),Ne=i(137),Me=i(136),Le=Object(z.b)({name:"controlActivity",initialState:{value:null},reducers:{setActivity:function(e,t){e.value=t.payload}}}),Ce=Le.actions.setActivity,Ae=function(e){return e.controlActivity.value},Be=Le.reducer,ze=C.a.h5(j||(j=Object(A.a)(["\n    font-size: 30px;\n    font-family: sans-serif;\n    padding: 15px 0;\n    margin: 0;\n    \n    @media (max-width: 720px) {\n        font-size: 25px;\n    }\n"]))),De=Object(C.a)(U.b)(f||(f=Object(A.a)(["\n    color: inherit;\n    text-decoration: none;\n    margin-right: auto;\n    background-color: ",";\n    padding: 5px 40px;\n    border: 1px solid ",";\n    border-radius: 10px;\n    box-shadow: 10px 5px 5px ",";\n    font-weight: 600;\n    font-family: system-ui;\n"])),(function(e){return e.theme.colorGreenLight}),(function(e){return e.theme.colorGrey}),(function(e){return e.theme.colorGrey})),Fe=C.a.p(x||(x=Object(A.a)(["\n    font-size: 20px;\n    font-family: sans-serif;\n    text-align: justify;\n    \n    @media (max-width: 720px) {\n        font-size: 18px;\n    }\n"]))),Ve=Object(C.a)(ke.a)(q||(q=Object(A.a)(["\n    width: 70%;\n    margin: 5% auto;\n    \n    &.MuiPaper-elevation1 {\n        box-shadow: 10px 5px 5px black;\n    }\n    \n    .MuiCardMedia-root {\n        height: 500px;\n        background-size: cover;\n        background-repeat: no-repeat;\n    }\n    \n    @media (max-width: 720px) {\n        width: 90%;\n    }\n"]))),Ue=function(e){var t=Object(B.b)();return Object(T.jsxs)(Ve,{children:[Object(T.jsxs)(Pe.a,{children:[Object(T.jsx)(Me.a,{image:e.activity.imgSource,title:e.activity.title}),Object(T.jsxs)(Ne.a,{children:[Object(T.jsx)(ze,{children:e.activity.title}),Object(T.jsxs)(Fe,{children:[e.activity.text.substring(0,300),"..."]})]})]}),Object(T.jsx)(Ie.a,{children:Object(T.jsx)(De,{onClick:function(){t(Ce(e))},to:"/activity",children:"Learn more"})})]})},Ge=Object(z.b)({name:"activities",initialState:{value:[{id:1,imgSource:"./activities/act1.jpg",title:"Lorem 2 Ipsum",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum sit amet tortor eu pellentesque. Morbi massa eros, ullamcorper id nunc vitae, fermentum ultrices urna. Suspendisse metus tortor, vulputate eu metus sed, faucibus placerat velit. Fusce vel erat ut mauris mollis aliquam. Sed tempus lorem et eros suscipit vestibulum. Sed semper eleifend justo et laoreet. Curabitur blandit orci in ullamcorper egestas. Cras mauris magna, mattis nec bibendum pellentesque, facilisis vitae purus. Proin sodales quis nibh et facilisis. Phasellus vitae ultrices eros, sit amet aliquam ligula. Donec tortor turpis, porta ut lectus sit amet, mattis vestibulum turpis. Maecenas ullamcorper arcu ac sagittis vulputate.\n\nSed id tellus eu ante congue porttitor. Proin eu ligula porta, mollis ipsum sed, gravida lectus. Nunc consequat mi sit amet velit posuere, hendrerit placerat ante feugiat. Proin eu odio sed magna molestie accumsan. Sed elit tellus, finibus vel scelerisque at, venenatis fermentum nibh. Suspendisse sed neque erat. Integer augue nisi, tincidunt sed consequat cursus, eleifend eu purus.\n\nInteger ex augue, efficitur eu pulvinar quis, porta ut lacus. Nullam non felis eu lacus sagittis pharetra. Pellentesque cursus imperdiet ipsum ut commodo. Mauris viverra tristique sem, ut tempor neque aliquet eu. Phasellus eu mollis leo. Maecenas pretium aliquam est quis gravida. Nunc interdum dolor vel lectus consectetur pulvinar in vel sem. Donec viverra ipsum a congue posuere. Suspendisse consectetur dapibus mauris, at aliquet libero semper vel. Nulla eget condimentum velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vulputate diam leo, nec semper libero rhoncus eu. Pellentesque in eros id justo feugiat dapibus. Sed a bibendum orci.\n\nQuisque sed nisi aliquet, semper risus vitae, mattis velit. Ut suscipit pulvinar quam, non euismod ligula blandit quis. Duis dignissim sit amet mi vitae lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum lacinia justo sed neque tempor consectetur. In ut urna sit amet felis dignissim rutrum ut eu quam. Vivamus quis urna vel quam consectetur convallis. Suspendisse potenti. Nam imperdiet ligula nec libero viverra placerat. In rhoncus mattis venenatis. Donec tempus quam quis enim vestibulum, a ultricies tellus porttitor. Curabitur convallis ex sapien, quis ullamcorper risus fermentum ultricies. Fusce at posuere lacus. Aenean eleifend ultrices diam. Integer ac varius ante, non vestibulum mi. Vivamus dui ligula, tristique vel suscipit sit amet, aliquam id purus.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum risus ac felis mattis aliquam. Nunc posuere dapibus nunc a porta. Quisque id metus egestas felis fermentum tempus non quis sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam semper nulla ac augue convallis, ut tempus lacus convallis. Nunc est ex, condimentum vitae convallis sed, cursus nec eros. Ut congue sapien eget massa pretium eleifend."},{id:2,imgSource:"./activities/act2.gif",title:"Lorem Ipsum",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum sit amet tortor eu pellentesque. Morbi massa eros, ullamcorper id nunc vitae, fermentum ultrices urna. Suspendisse metus tortor, vulputate eu metus sed, faucibus placerat velit. Fusce vel erat ut mauris mollis aliquam. Sed tempus lorem et eros suscipit vestibulum. Sed semper eleifend justo et laoreet. Curabitur blandit orci in ullamcorper egestas. Cras mauris magna, mattis nec bibendum pellentesque, facilisis vitae purus. Proin sodales quis nibh et facilisis. Phasellus vitae ultrices eros, sit amet aliquam ligula. Donec tortor turpis, porta ut lectus sit amet, mattis vestibulum turpis. Maecenas ullamcorper arcu ac sagittis vulputate.\n\nSed id tellus eu ante congue porttitor. Proin eu ligula porta, mollis ipsum sed, gravida lectus. Nunc consequat mi sit amet velit posuere, hendrerit placerat ante feugiat. Proin eu odio sed magna molestie accumsan. Sed elit tellus, finibus vel scelerisque at, venenatis fermentum nibh. Suspendisse sed neque erat. Integer augue nisi, tincidunt sed consequat cursus, eleifend eu purus.\n\nInteger ex augue, efficitur eu pulvinar quis, porta ut lacus. Nullam non felis eu lacus sagittis pharetra. Pellentesque cursus imperdiet ipsum ut commodo. Mauris viverra tristique sem, ut tempor neque aliquet eu. Phasellus eu mollis leo. Maecenas pretium aliquam est quis gravida. Nunc interdum dolor vel lectus consectetur pulvinar in vel sem. Donec viverra ipsum a congue posuere. Suspendisse consectetur dapibus mauris, at aliquet libero semper vel. Nulla eget condimentum velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vulputate diam leo, nec semper libero rhoncus eu. Pellentesque in eros id justo feugiat dapibus. Sed a bibendum orci.\n\nQuisque sed nisi aliquet, semper risus vitae, mattis velit. Ut suscipit pulvinar quam, non euismod ligula blandit quis. Duis dignissim sit amet mi vitae lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum lacinia justo sed neque tempor consectetur. In ut urna sit amet felis dignissim rutrum ut eu quam. Vivamus quis urna vel quam consectetur convallis. Suspendisse potenti. Nam imperdiet ligula nec libero viverra placerat. In rhoncus mattis venenatis. Donec tempus quam quis enim vestibulum, a ultricies tellus porttitor. Curabitur convallis ex sapien, quis ullamcorper risus fermentum ultricies. Fusce at posuere lacus. Aenean eleifend ultrices diam. Integer ac varius ante, non vestibulum mi. Vivamus dui ligula, tristique vel suscipit sit amet, aliquam id purus.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum risus ac felis mattis aliquam. Nunc posuere dapibus nunc a porta. Quisque id metus egestas felis fermentum tempus non quis sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam semper nulla ac augue convallis, ut tempus lacus convallis. Nunc est ex, condimentum vitae convallis sed, cursus nec eros. Ut congue sapien eget massa pretium eleifend."},{id:3,imgSource:"./activities/act3.jpg",title:"Lorem Ipsum",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum sit amet tortor eu pellentesque. Morbi massa eros, ullamcorper id nunc vitae, fermentum ultrices urna. Suspendisse metus tortor, vulputate eu metus sed, faucibus placerat velit. Fusce vel erat ut mauris mollis aliquam. Sed tempus lorem et eros suscipit vestibulum. Sed semper eleifend justo et laoreet. Curabitur blandit orci in ullamcorper egestas. Cras mauris magna, mattis nec bibendum pellentesque, facilisis vitae purus. Proin sodales quis nibh et facilisis. Phasellus vitae ultrices eros, sit amet aliquam ligula. Donec tortor turpis, porta ut lectus sit amet, mattis vestibulum turpis. Maecenas ullamcorper arcu ac sagittis vulputate.\n\nSed id tellus eu ante congue porttitor. Proin eu ligula porta, mollis ipsum sed, gravida lectus. Nunc consequat mi sit amet velit posuere, hendrerit placerat ante feugiat. Proin eu odio sed magna molestie accumsan. Sed elit tellus, finibus vel scelerisque at, venenatis fermentum nibh. Suspendisse sed neque erat. Integer augue nisi, tincidunt sed consequat cursus, eleifend eu purus.\n\nInteger ex augue, efficitur eu pulvinar quis, porta ut lacus. Nullam non felis eu lacus sagittis pharetra. Pellentesque cursus imperdiet ipsum ut commodo. Mauris viverra tristique sem, ut tempor neque aliquet eu. Phasellus eu mollis leo. Maecenas pretium aliquam est quis gravida. Nunc interdum dolor vel lectus consectetur pulvinar in vel sem. Donec viverra ipsum a congue posuere. Suspendisse consectetur dapibus mauris, at aliquet libero semper vel. Nulla eget condimentum velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vulputate diam leo, nec semper libero rhoncus eu. Pellentesque in eros id justo feugiat dapibus. Sed a bibendum orci.\n\nQuisque sed nisi aliquet, semper risus vitae, mattis velit. Ut suscipit pulvinar quam, non euismod ligula blandit quis. Duis dignissim sit amet mi vitae lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum lacinia justo sed neque tempor consectetur. In ut urna sit amet felis dignissim rutrum ut eu quam. Vivamus quis urna vel quam consectetur convallis. Suspendisse potenti. Nam imperdiet ligula nec libero viverra placerat. In rhoncus mattis venenatis. Donec tempus quam quis enim vestibulum, a ultricies tellus porttitor. Curabitur convallis ex sapien, quis ullamcorper risus fermentum ultricies. Fusce at posuere lacus. Aenean eleifend ultrices diam. Integer ac varius ante, non vestibulum mi. Vivamus dui ligula, tristique vel suscipit sit amet, aliquam id purus.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum risus ac felis mattis aliquam. Nunc posuere dapibus nunc a porta. Quisque id metus egestas felis fermentum tempus non quis sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam semper nulla ac augue convallis, ut tempus lacus convallis. Nunc est ex, condimentum vitae convallis sed, cursus nec eros. Ut congue sapien eget massa pretium eleifend."},{id:4,imgSource:"./activities/act4.jpg",title:"Lorem Ipsum",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum sit amet tortor eu pellentesque. Morbi massa eros, ullamcorper id nunc vitae, fermentum ultrices urna. Suspendisse metus tortor, vulputate eu metus sed, faucibus placerat velit. Fusce vel erat ut mauris mollis aliquam. Sed tempus lorem et eros suscipit vestibulum. Sed semper eleifend justo et laoreet. Curabitur blandit orci in ullamcorper egestas. Cras mauris magna, mattis nec bibendum pellentesque, facilisis vitae purus. Proin sodales quis nibh et facilisis. Phasellus vitae ultrices eros, sit amet aliquam ligula. Donec tortor turpis, porta ut lectus sit amet, mattis vestibulum turpis. Maecenas ullamcorper arcu ac sagittis vulputate.\n\nSed id tellus eu ante congue porttitor. Proin eu ligula porta, mollis ipsum sed, gravida lectus. Nunc consequat mi sit amet velit posuere, hendrerit placerat ante feugiat. Proin eu odio sed magna molestie accumsan. Sed elit tellus, finibus vel scelerisque at, venenatis fermentum nibh. Suspendisse sed neque erat. Integer augue nisi, tincidunt sed consequat cursus, eleifend eu purus.\n\nInteger ex augue, efficitur eu pulvinar quis, porta ut lacus. Nullam non felis eu lacus sagittis pharetra. Pellentesque cursus imperdiet ipsum ut commodo. Mauris viverra tristique sem, ut tempor neque aliquet eu. Phasellus eu mollis leo. Maecenas pretium aliquam est quis gravida. Nunc interdum dolor vel lectus consectetur pulvinar in vel sem. Donec viverra ipsum a congue posuere. Suspendisse consectetur dapibus mauris, at aliquet libero semper vel. Nulla eget condimentum velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vulputate diam leo, nec semper libero rhoncus eu. Pellentesque in eros id justo feugiat dapibus. Sed a bibendum orci.\n\nQuisque sed nisi aliquet, semper risus vitae, mattis velit. Ut suscipit pulvinar quam, non euismod ligula blandit quis. Duis dignissim sit amet mi vitae lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum lacinia justo sed neque tempor consectetur. In ut urna sit amet felis dignissim rutrum ut eu quam. Vivamus quis urna vel quam consectetur convallis. Suspendisse potenti. Nam imperdiet ligula nec libero viverra placerat. In rhoncus mattis venenatis. Donec tempus quam quis enim vestibulum, a ultricies tellus porttitor. Curabitur convallis ex sapien, quis ullamcorper risus fermentum ultricies. Fusce at posuere lacus. Aenean eleifend ultrices diam. Integer ac varius ante, non vestibulum mi. Vivamus dui ligula, tristique vel suscipit sit amet, aliquam id purus.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum risus ac felis mattis aliquam. Nunc posuere dapibus nunc a porta. Quisque id metus egestas felis fermentum tempus non quis sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam semper nulla ac augue convallis, ut tempus lacus convallis. Nunc est ex, condimentum vitae convallis sed, cursus nec eros. Ut congue sapien eget massa pretium eleifend."},{id:5,imgSource:"./activities/act5.jpg",title:"Lorem Ipsum",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum sit amet tortor eu pellentesque. Morbi massa eros, ullamcorper id nunc vitae, fermentum ultrices urna. Suspendisse metus tortor, vulputate eu metus sed, faucibus placerat velit. Fusce vel erat ut mauris mollis aliquam. Sed tempus lorem et eros suscipit vestibulum. Sed semper eleifend justo et laoreet. Curabitur blandit orci in ullamcorper egestas. Cras mauris magna, mattis nec bibendum pellentesque, facilisis vitae purus. Proin sodales quis nibh et facilisis. Phasellus vitae ultrices eros, sit amet aliquam ligula. Donec tortor turpis, porta ut lectus sit amet, mattis vestibulum turpis. Maecenas ullamcorper arcu ac sagittis vulputate.\n\nSed id tellus eu ante congue porttitor. Proin eu ligula porta, mollis ipsum sed, gravida lectus. Nunc consequat mi sit amet velit posuere, hendrerit placerat ante feugiat. Proin eu odio sed magna molestie accumsan. Sed elit tellus, finibus vel scelerisque at, venenatis fermentum nibh. Suspendisse sed neque erat. Integer augue nisi, tincidunt sed consequat cursus, eleifend eu purus.\n\nInteger ex augue, efficitur eu pulvinar quis, porta ut lacus. Nullam non felis eu lacus sagittis pharetra. Pellentesque cursus imperdiet ipsum ut commodo. Mauris viverra tristique sem, ut tempor neque aliquet eu. Phasellus eu mollis leo. Maecenas pretium aliquam est quis gravida. Nunc interdum dolor vel lectus consectetur pulvinar in vel sem. Donec viverra ipsum a congue posuere. Suspendisse consectetur dapibus mauris, at aliquet libero semper vel. Nulla eget condimentum velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vulputate diam leo, nec semper libero rhoncus eu. Pellentesque in eros id justo feugiat dapibus. Sed a bibendum orci.\n\nQuisque sed nisi aliquet, semper risus vitae, mattis velit. Ut suscipit pulvinar quam, non euismod ligula blandit quis. Duis dignissim sit amet mi vitae lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum lacinia justo sed neque tempor consectetur. In ut urna sit amet felis dignissim rutrum ut eu quam. Vivamus quis urna vel quam consectetur convallis. Suspendisse potenti. Nam imperdiet ligula nec libero viverra placerat. In rhoncus mattis venenatis. Donec tempus quam quis enim vestibulum, a ultricies tellus porttitor. Curabitur convallis ex sapien, quis ullamcorper risus fermentum ultricies. Fusce at posuere lacus. Aenean eleifend ultrices diam. Integer ac varius ante, non vestibulum mi. Vivamus dui ligula, tristique vel suscipit sit amet, aliquam id purus.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum risus ac felis mattis aliquam. Nunc posuere dapibus nunc a porta. Quisque id metus egestas felis fermentum tempus non quis sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam semper nulla ac augue convallis, ut tempus lacus convallis. Nunc est ex, condimentum vitae convallis sed, cursus nec eros. Ut congue sapien eget massa pretium eleifend."}]}}),Qe=function(e){return e.activities.value},We=Ge.reducer,Re=i(65),Ye=i.n(Re),Ke=(i(99),C.a.h2(O||(O=Object(A.a)(["\n    text-align: center;\n    text-transform: uppercase;\n    font-family: inherit;\n    color: ",';\n    font-weight: 700;\n    font-size: 30px;\n    position: relative;\n    display: inline-block;\n    margin: 20px auto;\n    left: 50%;\n    transform: translate(-50%);\n    \n    &:after {\n        position: absolute;\n        width: 100%;\n        left: 50%;\n        transform: translateX(-50%);\n        content: "";\n        height: 1px;\n        background-color: ',";\n        bottom: -10%;\n    }\n"])),(function(e){return e.theme.colorBlackLight}),(function(e){return e.theme.colorBlackLight}))),Ee=function(){var e=Object(B.c)(Qe);console.log(e);var t=e.map((function(e){return Object(T.jsx)(Ye.a,{animateIn:"fadeIn",children:Object(T.jsx)(Ue,{activity:e})})}));return Object(T.jsxs)("div",{children:[Object(T.jsx)(Ke,{children:"Aktualno\u015bci"}),t]})},He=function(){return Object(T.jsx)("div",{children:"Clubs"})},Te=function(){return Object(T.jsx)("div",{children:"Board"})},Xe=function(){return Object(T.jsx)("div",{children:"BoardVoivodeship"})},Je=function(){return Object(T.jsx)("div",{children:"Field"})},Ze=function(){return Object(T.jsx)("div",{children:"Referees"})},_e=function(){return Object(T.jsx)("div",{children:"Rules"})},$e=C.a.h2(w||(w=Object(A.a)(["\n    padding: 20px;\n    font-family: cursive;\n    \n    @media (max-width: 720px) {\n        text-align: center;\n    }\n"]))),et=C.a.p(y||(y=Object(A.a)(["\n    font-size: 20px;\n    padding: 10px;\n    text-align: justify;\n"]))),tt=C.a.div(S||(S=Object(A.a)(['\n    width: 60%;\n    margin: 3% auto;\n    display: flex-inline;\n    position: relative;\n    \n    @media (max-width: 720px) {\n        width: 90%;\n        padding-top: 20px;\n    }\n    \n    &:after {\n        content: "";\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        background-color: ',";\n        top: 0;\n        z-index: -1;\n        border-radius: 15px;\n    }\n"])),(function(e){return e.theme.colorGreenLight})),it=C.a.img(k||(k=Object(A.a)(["\n    float: left;\n    margin: 20px;\n    width: 55%;\n    box-shadow: 0 10px 10px -5px;\n    \n    @media (max-width: 720px) {\n        width: 80%;\n        float: none;\n        margin: 0 auto;\n        display: block;\n    }\n"]))),nt=function(){var e=Object(B.c)(Ae);return Object(T.jsxs)(tt,{children:[Object(T.jsx)(it,{src:e.activity.imgSource,alt:""}),Object(T.jsx)($e,{children:e.activity.title}),Object(T.jsx)(et,{children:e.activity.text})]})},st=C.a.div(P||(P=Object(A.a)(["\n    \n"]))),ut=function(){return Object(T.jsx)(st,{children:Object(T.jsxs)(Se.c,{children:[Object(T.jsx)(Se.a,{path:"/clubs",component:He}),Object(T.jsx)(Se.a,{path:"/board",component:Te}),Object(T.jsx)(Se.a,{path:"/boardvoivo",component:Xe}),Object(T.jsx)(Se.a,{path:"/field",component:Je}),Object(T.jsx)(Se.a,{path:"/referees",component:Ze}),Object(T.jsx)(Se.a,{path:"/rules",component:_e}),Object(T.jsx)(Se.a,{path:"/activity",component:nt}),Object(T.jsx)(Se.a,{exact:!0,path:"/",component:Ee})]})})},at=i(66),rt=function(){return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(at.CircleArrow,{style:{border:"none",backgroundColor:"inherit",zIndex:2}}),Object(T.jsxs)(U.a,{basename:"/handball_site",children:[Object(T.jsx)(ye,{}),Object(T.jsx)(ut,{})]})]})};var lt,ot=function(){return Object(T.jsx)(rt,{})},ct=i(14),mt=i(36),dt=i(67),pt=Object(dt.a)({colorBlack:"#000",colorBlackLight:"#333",colorRed:"#F00",colorYellow:"#FF0",colorWhite:"#FFF",colorGrey:"#BBB",colorGreenLight:"#A8E6BA",colorGreenLighter:"#B7E4C7"}),bt=i(140),vt=function(e){var t=e.children;return Object(T.jsx)(bt.a,{theme:pt,children:Object(T.jsxs)(ct.c,{theme:pt,children:[Object(T.jsx)(mt.a,{styles:Object(mt.b)(lt||(lt=Object(A.a)(["\n                    body {\n                        background-color: #85D397;\n                        margin: 0;\n                        font-family: sans-serif;\n                    }\n                "])))}),t]})})},gt=Object(z.a)({reducer:{contact:re,navigation:V,showMobileMenu:H,slideshow:fe,activities:We,controlActivity:Be}});L.a.render(Object(T.jsx)(N.a.StrictMode,{children:Object(T.jsx)(vt,{children:Object(T.jsx)(B.a,{store:gt,children:Object(T.jsx)(ot,{})})})}),document.getElementById("root"))}},[[102,1,2]]]);
//# sourceMappingURL=main.c7f8a3da.chunk.js.map