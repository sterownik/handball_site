(this["webpackJsonphandball-site"]=this["webpackJsonphandball-site"]||[]).push([[0],{102:function(e,t,i){"use strict";i.r(t);var n,s,u,a,r,l,o,c,m,d,p,b,v,h,g,j,f,x,q,O,w,y,S,k,P,I,N,M=i(0),L=i.n(M),C=i(17),A=i.n(C),B=i(3),z=i(5),D=i(13),F=i(15),V=Object(F.b)({name:"navigation",initialState:{value:[{id:0,title:"Aktualno\u015bci",submenu:[],path:"/"},{id:1,title:"Kluby",submenu:[],path:"/clubs"},{id:2,title:"S\u0119dziowie",path:"/referees",submenu:[{id:10,title:"Komisja ZPRP",path:"/board"},{id:11,title:"Komisja Podkarpackie WZPR",path:"/boardvoivo"},{id:12,title:"Lista s\u0119dzi\xf3w",path:"/referees"}]},{id:3,title:"Przepisy",path:"/rules",submenu:[{id:20,title:"Przepisy",path:"/rules"},{id:21,title:"Stawki",path:"/field"}]}]}}),U=function(e){return e.navigation.value},G=V.reducer,Q=i(22),W=i(132),R=i(141),Y=i(142),K=i(134),E=Object(F.b)({name:"showMobileMenu",initialState:{value:!1},reducers:{changeFlag:function(e){e.value=!e.value}}}),H=E.actions.changeFlag,T=function(e){return e.showMobileMenu.value},X=E.reducer,J=i(1),Z=B.a.div(n||(n=Object(z.a)(["\n    width: 100%;\n    background-color: ",";\n"])),(function(e){return e.theme.colorGreenLight})),_=B.a.ul(s||(s=Object(z.a)(["\n    max-width: 1000px;\n    margin: 0 auto;\n    display: flex;\n    justify-content: space-between;\n    list-style: none;\n    padding: 0;\n"]))),$=B.a.div(u||(u=Object(z.a)(["\n    position: absolute;\n    top: 50%;\n    right: 10%;\n    transform: translateY(-50%);\n    width: 20px;\n    height: 20px;\n      \n    img {\n        width: 20px;\n    }\n"]))),ee=B.a.div(a||(a=Object(z.a)(["\n    position: absolute;\n    width: 100%;\n    border-top: 1px solid ",";\n    \n    .MuiAccordionSummary-expandIcon.MuiIconButton-edgeEnd {\n        border: none;\n        margin-right: 5%;\n        \n        img {\n            width: 20px;\n            height: 20px;\n        }\n    }\n    \n    .MuiButtonBase-root {\n        border-radius: 4px;\n        background-color: ",";\n        border-bottom: 1px solid ",";\n    }\n    \n    .MuiAccordionSummary-content {\n        text-transform: uppercase;\n    \n        a {\n            padding: 16px 0;\n            text-decoration: none;\n            color: ",";\n            width: 100%;\n        }\n    }\n    \n    .MuiAccordionDetails-root {\n        padding: 20px 16px;\n        border-bottom: 1px solid ",";\n    }\n    \n    .MuiAccordion-root {\n        background-color: ",";\n        \n        a {\n            color: ",";\n            text-decoration: none;\n            text-transform: uppercase;\n            width: 100%;\n        }\n        \n        &.Mui-expanded {\n            margin: 0;\n        }\n    }\n"])),(function(e){return e.theme.colorBlack}),(function(e){return e.theme.colorGreenLight}),(function(e){return e.theme.colorBlack}),(function(e){return e.theme.colorBlack}),(function(e){return e.theme.colorBlack}),(function(e){return e.theme.colorGreenLighter}),(function(e){return e.theme.colorBlack})),te=B.a.li(r||(r=Object(z.a)(["\n    position: relative;\n    flex-basis: 5%;\n\n    img {\n        width: ","px;\n        height: ","px;\n        position: absolute;\n        top: 50%;\n        transform: translateY(-50%);\n    }\n    \n    @media (max-width: 720px) {\n        img {\n            position: relative;\n            top: 50%;\n            transform: translateY(-50%);\n        }\n    }\n"])),(function(e){return e.height}),(function(e){return e.height})),ie=B.a.ul(l||(l=Object(z.a)(["\n    display: flex;\n    justify-content: space-around;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n"]))),ne=B.a.li(o||(o=Object(z.a)(["\n    flex-basis: 22.5%;\n    padding: 20px 0;\n    text-align: center;\n    position: relative;\n    \n    a {\n        color: ",';\n        font-weight: 600;\n        text-decoration: none;\n        text-transform: uppercase;\n    }\n      \n    ul {\n        display: none;\n    }\n    \n    &:hover {\n        div {\n            transition: .5s;\n            transform: translateY(-50%) rotate(180deg);\n        }\n    \n        &:after {\n            content: "";\n            position: absolute;\n            animation: menuAnimationHover .5s linear forwards;\n            height: 2px;\n            background-color: ',";\n            bottom: 0;\n            left: 50%;\n            transform: translateX(-50%);\n            display: ",";\n        }\n    \n        ul {\n            display: block;\n            animation: subMenuSliceIn .5s linear forwards;\n        }\n    }\n    \n    @keyframes subMenuSliceIn {\n        0% {\n            top: 0%;\n        }\n        25% {\n            top: 25%;\n        }\n        50% {\n            top: 50%;\n        }\n        100% {\n            top: 100%;\n        }\n    }\n    \n    @keyframes menuAnimationHover {\n        0% {\n            width: 0%;\n        }\n        25% {\n            width: 25%;\n        }\n        50% {\n            width: 50%;\n        }\n        100% {\n            width: 70%;\n        }\n    }\n"])),(function(e){return e.theme.colorBlackLight}),(function(e){return e.theme.colorWhite}),(function(e){return e.styleKey?"none":"block"})),se=B.a.ul(c||(c=Object(z.a)(["\n    background-color: ",";\n    border-top: 1px solid ",";\n    position: absolute;\n    list-style: none;\n    padding: 0;\n    width: 100%;\n    left: 50%;\n    transform: translateX(-50%);\n    z-index: -1;\n"])),(function(e){return e.theme.colorGreenLight}),(function(e){return e.theme.colorWhite})),ue=B.a.li(m||(m=Object(z.a)(["\n    padding: 10px;\n    border-bottom: 1px solid ",';\n    position: relative;\n    \n    :hover {\n        &:after {\n            content: "";\n            position: absolute;\n            height: 2px;\n            left: 50%;\n            transform: translateX(-50%);\n            background-color: ',";\n            bottom: -1px;\n            animation: menuAnimationHover .5s linear forwards;\n        }\n    }\n    \n    @keyframes menuAnimationHover {\n        0% {\n            width: 0%;\n        }\n        25% {\n            width: 25%;\n        }\n        50% {\n            width: 50%;\n        }\n        100% {\n            width: 100%;\n        }\n    }\n"])),(function(e){return e.theme.colorWhite}),(function(e){return e.theme.colorBlackLight})),ae=function(){var e=Object(D.c)(U),t=Object(W.a)("(min-width:721px)"),i=Object(D.c)(T),n=Object(D.b)(),s=e.map((function(e){return Object(J.jsx)("div",{children:e.submenu.length>0?Object(J.jsxs)(R.a,{children:[Object(J.jsx)(Y.a,{expandIcon:Object(J.jsx)("span",{children:Object(J.jsx)("img",{src:"./icons/arrow-down.png",alt:""})}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(J.jsx)("p",{children:e.title})}),e.submenu.map((function(e){return Object(J.jsx)(K.a,{children:Object(J.jsx)(Q.b,{onClick:function(){return n(H())},to:e.path,children:e.title})},e.id)}))]}):Object(J.jsx)(Y.a,{"aria-controls":"panel2a-content",id:"panel2a-header",children:Object(J.jsx)(Q.b,{onClick:function(){return n(H())},to:e.path,children:e.title})})},e.id)})),u=e.map((function(e){return Object(J.jsxs)(ne,{styleKey:e.submenu.length>0,children:[Object(J.jsx)(Q.b,{to:e.path,children:e.title}),e.submenu.length>0?Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)($,{children:Object(J.jsx)("img",{src:"./icons/arrow-down.png",alt:""})}),Object(J.jsx)(se,{children:e.submenu.map((function(e){return Object(J.jsx)(ue,{children:Object(J.jsx)(Q.b,{to:e.path,children:e.title})},e.id)}))})]}):null]},e.id)}));return Object(J.jsx)(Z,{children:t?Object(J.jsxs)(_,{children:[Object(J.jsx)(te,{height:50,children:Object(J.jsx)("img",{src:"./logs/logo-company.png",alt:""})}),u,Object(J.jsx)(te,{height:50,children:Object(J.jsx)("img",{src:"./logs/logo-company-second.png",alt:""})})]}):Object(J.jsxs)("div",{children:[Object(J.jsxs)(ie,{children:[Object(J.jsx)(te,{height:50,children:Object(J.jsx)("img",{src:"./logs/logo-company.png",alt:""})}),Object(J.jsx)(te,{height:50,children:Object(J.jsx)("img",{src:"./logs/logo-company-second.png",alt:""})}),Object(J.jsx)(te,{onClick:function(){return n(H())},height:30,children:i?Object(J.jsx)("img",{src:"./icons/close.png",alt:""}):Object(J.jsx)("img",{src:"./icons/menu.png",alt:""})})]}),i?Object(J.jsx)(ee,{children:s}):null]})})},re=Object(F.b)({name:"contact",initialState:{value:{email:"w.golda996@gmail.com",telephone:"+48 731604761",address:"Rzesz\xf3w, ul. Przyk\u0142adowa 1"}}}),le=function(e){return e.contact.value},oe=re.reducer,ce=B.a.div(d||(d=Object(z.a)(["\n    width: 100%;\n    background-color: ",";\n    z-index: 1;\n    position: relative;\n"])),(function(e){return e.theme.colorBlackLight})),me=B.a.div(p||(p=Object(z.a)(["\n    max-width: 1000px;\n    margin: 0 auto;\n    display: flex;\n    justify-content: space-between;\n"]))),de=B.a.div(b||(b=Object(z.a)(["\n    flex-basis: 30%;\n    color: ",";\n    text-align: center;\n    \n    p {\n        padding: 5px 0;\n        margin: 0;\n        display: inline;\n    }\n    \n    @media (max-width: 720px) {\n        p {\n            font-size: 12px;\n            display: block;\n            padding: 5px;\n            position: relative;\n            top: 50%;\n            transform: translateY(-50%);\n        }\n    }\n    \n    span {\n        color: ",";\n        font-size: 15px;\n        \n        @media (max-width: 720px) {\n            display: none;\n        }\n    }\n"])),(function(e){return e.theme.colorWhite}),(function(e){return e.theme.colorGrey})),pe=function(){var e=Object(D.c)(le);return Object(J.jsx)(ce,{children:Object(J.jsxs)(me,{children:[Object(J.jsxs)(de,{children:[Object(J.jsx)("span",{children:"e-mail: "}),Object(J.jsx)("p",{children:e.email})]}),Object(J.jsxs)(de,{children:[Object(J.jsx)("span",{children:"telefon: "}),Object(J.jsx)("p",{children:e.telephone})]}),Object(J.jsxs)(de,{children:[Object(J.jsx)("span",{children:"adres: "})," ",Object(J.jsx)("p",{children:e.address})]})]})})},be=B.a.div(v||(v=Object(z.a)(["\n    position: sticky;\n    position: -webkit-sticky;\n    top: 0;\n    z-index: 2;\n"]))),ve=function(){return Object(J.jsx)(be,{children:Object(J.jsx)(ae,{})})},he=i(56),ge=B.a.div(h||(h=Object(z.a)(['\n    position: relative;\n    \n    &:after {\n        content: "";\n        background-color: ',";\n        position: absolute;\n        opacity: .3;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n    }\n    \n    &:hover {\n        &:after {\n            transition: .5s;\n            opacity: 0;\n        }\n    }\n"])),(function(e){return e.theme.colorBlack})),je=function(e){return Object(J.jsx)(ge,{children:Object(J.jsx)("img",{src:e.src,alt:""})})},fe=Object(F.b)({name:"slideshow",initialState:{value:[{id:1,path:"./sliderPhotos/test1.jpg"},{id:2,path:"./sliderPhotos/test2.jpg"},{id:3,path:"./sliderPhotos/test3.jpg"},{id:4,path:"./sliderPhotos/test5.jpg"}]}}),xe=function(e){return e.slideshow.value},qe=fe.reducer,Oe=i(64),we=i.n(Oe),ye=(i(96),i(97),Object(B.a)(we.a)(g||(g=Object(z.a)(["\n    .slick-arrow {\n        width: 5%;\n        background-color: ",";\n        opacity: .2;\n        height: 100%;\n        transform: none;\n        top: 0;\n        transition: .5s;\n        z-index: 1;\n        \n        &:before {\n            color: ",";\n            font-size: 40px;\n        }\n        \n        &:hover {\n            opacity: .3;\n        }\n        \n        &.slick-next {\n            right: 0;\n        }\n        \n        &.slick-prev {\n            left: 0;\n        }\n    }\n\n    .slick-slide {\n        img {\n            width: 100vw;\n            height: 70vh;\n            object-fit: cover;\n            position: relative;\n        }\n    }\n    \n    @media (max-width: 720px) {\n        .slick-arrow {\n            background-color: inherit;\n            opacity: .5;\n            width: 40px;\n        \n            &.slick-next {\n                right: 10px;\n            }\n            \n            &.slick-prev {\n                left: 10px;\n            }\n            \n            &:before {\n                color: ",";\n            }\n        }\n    \n         .slick-slide img {\n            height: 30vh;\n        }\n    }\n"])),(function(e){return e.theme.colorWhite}),(function(e){return e.theme.colorBlackLight}),(function(e){return e.theme.colorWhite}))),Se=function(){var e=Object(D.c)(xe).map((function(e){return Object(J.jsx)(je,{src:e.path})}));return Object(J.jsx)(ye,Object(he.a)(Object(he.a)({},{dots:!1,arrows:!0,infinite:!0,speed:800,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,lazyLoad:!0,fade:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!1}}]}),{},{children:e}))},ke=function(){return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(pe,{}),Object(J.jsx)(ve,{}),Object(J.jsx)(Se,{})]})},Pe=i(10),Ie=i(139),Ne=i(135),Me=i(138),Le=i(137),Ce=i(136),Ae=Object(F.b)({name:"controlActivity",initialState:{value:null},reducers:{setActivity:function(e,t){e.value=t.payload}}}),Be=Ae.actions.setActivity,ze=function(e){return e.controlActivity.value},De=Ae.reducer,Fe=B.a.h5(j||(j=Object(z.a)(["\n    font-size: 30px;\n    font-family: sans-serif;\n    padding: 15px 0;\n    margin: 0;\n    \n    @media (max-width: 720px) {\n        font-size: 25px;\n    }\n"]))),Ve=Object(B.a)(Q.b)(f||(f=Object(z.a)(["\n    color: inherit;\n    text-decoration: none;\n    margin-right: auto;\n    background-color: ",";\n    padding: 5px 40px;\n    border: 1px solid ",";\n    border-radius: 10px;\n    box-shadow: 10px 5px 5px ",";\n    font-weight: 600;\n    font-family: system-ui;\n"])),(function(e){return e.theme.colorGreenLight}),(function(e){return e.theme.colorGrey}),(function(e){return e.theme.colorGrey})),Ue=B.a.p(x||(x=Object(z.a)(["\n    font-size: 20px;\n    font-family: sans-serif;\n    text-align: justify;\n    \n    @media (max-width: 720px) {\n        font-size: 18px;\n    }\n"]))),Ge=Object(B.a)(Ie.a)(q||(q=Object(z.a)(["\n    width: 70%;\n    margin: 5% auto;\n    \n    &.MuiPaper-elevation1 {\n        box-shadow: 10px 5px 5px black;\n    }\n    \n    .MuiCardMedia-root {\n        height: 500px;\n        background-size: cover;\n        background-repeat: no-repeat;\n    }\n    \n    @media (max-width: 720px) {\n        width: 90%;\n    }\n"]))),Qe=function(e){var t=Object(D.b)();return Object(J.jsxs)(Ge,{children:[Object(J.jsxs)(Ne.a,{children:[Object(J.jsx)(Ce.a,{image:e.activity.imgSource,title:e.activity.title}),Object(J.jsxs)(Le.a,{children:[Object(J.jsx)(Fe,{children:e.activity.title}),Object(J.jsxs)(Ue,{children:[e.activity.text.substring(0,300),"..."]})]})]}),Object(J.jsx)(Me.a,{children:Object(J.jsx)(Ve,{onClick:function(){t(Be(e))},to:"/activity",children:"Learn more"})})]})},We=Object(F.b)({name:"activities",initialState:{value:[{id:1,imgSource:"./activities/act1.jpg",title:"Lorem 2 Ipsum",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum sit amet tortor eu pellentesque. Morbi massa eros, ullamcorper id nunc vitae, fermentum ultrices urna. Suspendisse metus tortor, vulputate eu metus sed, faucibus placerat velit. Fusce vel erat ut mauris mollis aliquam. Sed tempus lorem et eros suscipit vestibulum. Sed semper eleifend justo et laoreet. Curabitur blandit orci in ullamcorper egestas. Cras mauris magna, mattis nec bibendum pellentesque, facilisis vitae purus. Proin sodales quis nibh et facilisis. Phasellus vitae ultrices eros, sit amet aliquam ligula. Donec tortor turpis, porta ut lectus sit amet, mattis vestibulum turpis. Maecenas ullamcorper arcu ac sagittis vulputate.\n\nSed id tellus eu ante congue porttitor. Proin eu ligula porta, mollis ipsum sed, gravida lectus. Nunc consequat mi sit amet velit posuere, hendrerit placerat ante feugiat. Proin eu odio sed magna molestie accumsan. Sed elit tellus, finibus vel scelerisque at, venenatis fermentum nibh. Suspendisse sed neque erat. Integer augue nisi, tincidunt sed consequat cursus, eleifend eu purus.\n\nInteger ex augue, efficitur eu pulvinar quis, porta ut lacus. Nullam non felis eu lacus sagittis pharetra. Pellentesque cursus imperdiet ipsum ut commodo. Mauris viverra tristique sem, ut tempor neque aliquet eu. Phasellus eu mollis leo. Maecenas pretium aliquam est quis gravida. Nunc interdum dolor vel lectus consectetur pulvinar in vel sem. Donec viverra ipsum a congue posuere. Suspendisse consectetur dapibus mauris, at aliquet libero semper vel. Nulla eget condimentum velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vulputate diam leo, nec semper libero rhoncus eu. Pellentesque in eros id justo feugiat dapibus. Sed a bibendum orci.\n\nQuisque sed nisi aliquet, semper risus vitae, mattis velit. Ut suscipit pulvinar quam, non euismod ligula blandit quis. Duis dignissim sit amet mi vitae lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum lacinia justo sed neque tempor consectetur. In ut urna sit amet felis dignissim rutrum ut eu quam. Vivamus quis urna vel quam consectetur convallis. Suspendisse potenti. Nam imperdiet ligula nec libero viverra placerat. In rhoncus mattis venenatis. Donec tempus quam quis enim vestibulum, a ultricies tellus porttitor. Curabitur convallis ex sapien, quis ullamcorper risus fermentum ultricies. Fusce at posuere lacus. Aenean eleifend ultrices diam. Integer ac varius ante, non vestibulum mi. Vivamus dui ligula, tristique vel suscipit sit amet, aliquam id purus.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum risus ac felis mattis aliquam. Nunc posuere dapibus nunc a porta. Quisque id metus egestas felis fermentum tempus non quis sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam semper nulla ac augue convallis, ut tempus lacus convallis. Nunc est ex, condimentum vitae convallis sed, cursus nec eros. Ut congue sapien eget massa pretium eleifend."},{id:2,imgSource:"./activities/act2.gif",title:"Lorem Ipsum",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum sit amet tortor eu pellentesque. Morbi massa eros, ullamcorper id nunc vitae, fermentum ultrices urna. Suspendisse metus tortor, vulputate eu metus sed, faucibus placerat velit. Fusce vel erat ut mauris mollis aliquam. Sed tempus lorem et eros suscipit vestibulum. Sed semper eleifend justo et laoreet. Curabitur blandit orci in ullamcorper egestas. Cras mauris magna, mattis nec bibendum pellentesque, facilisis vitae purus. Proin sodales quis nibh et facilisis. Phasellus vitae ultrices eros, sit amet aliquam ligula. Donec tortor turpis, porta ut lectus sit amet, mattis vestibulum turpis. Maecenas ullamcorper arcu ac sagittis vulputate.\n\nSed id tellus eu ante congue porttitor. Proin eu ligula porta, mollis ipsum sed, gravida lectus. Nunc consequat mi sit amet velit posuere, hendrerit placerat ante feugiat. Proin eu odio sed magna molestie accumsan. Sed elit tellus, finibus vel scelerisque at, venenatis fermentum nibh. Suspendisse sed neque erat. Integer augue nisi, tincidunt sed consequat cursus, eleifend eu purus.\n\nInteger ex augue, efficitur eu pulvinar quis, porta ut lacus. Nullam non felis eu lacus sagittis pharetra. Pellentesque cursus imperdiet ipsum ut commodo. Mauris viverra tristique sem, ut tempor neque aliquet eu. Phasellus eu mollis leo. Maecenas pretium aliquam est quis gravida. Nunc interdum dolor vel lectus consectetur pulvinar in vel sem. Donec viverra ipsum a congue posuere. Suspendisse consectetur dapibus mauris, at aliquet libero semper vel. Nulla eget condimentum velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vulputate diam leo, nec semper libero rhoncus eu. Pellentesque in eros id justo feugiat dapibus. Sed a bibendum orci.\n\nQuisque sed nisi aliquet, semper risus vitae, mattis velit. Ut suscipit pulvinar quam, non euismod ligula blandit quis. Duis dignissim sit amet mi vitae lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum lacinia justo sed neque tempor consectetur. In ut urna sit amet felis dignissim rutrum ut eu quam. Vivamus quis urna vel quam consectetur convallis. Suspendisse potenti. Nam imperdiet ligula nec libero viverra placerat. In rhoncus mattis venenatis. Donec tempus quam quis enim vestibulum, a ultricies tellus porttitor. Curabitur convallis ex sapien, quis ullamcorper risus fermentum ultricies. Fusce at posuere lacus. Aenean eleifend ultrices diam. Integer ac varius ante, non vestibulum mi. Vivamus dui ligula, tristique vel suscipit sit amet, aliquam id purus.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum risus ac felis mattis aliquam. Nunc posuere dapibus nunc a porta. Quisque id metus egestas felis fermentum tempus non quis sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam semper nulla ac augue convallis, ut tempus lacus convallis. Nunc est ex, condimentum vitae convallis sed, cursus nec eros. Ut congue sapien eget massa pretium eleifend."},{id:3,imgSource:"./activities/act3.jpg",title:"Lorem Ipsum",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum sit amet tortor eu pellentesque. Morbi massa eros, ullamcorper id nunc vitae, fermentum ultrices urna. Suspendisse metus tortor, vulputate eu metus sed, faucibus placerat velit. Fusce vel erat ut mauris mollis aliquam. Sed tempus lorem et eros suscipit vestibulum. Sed semper eleifend justo et laoreet. Curabitur blandit orci in ullamcorper egestas. Cras mauris magna, mattis nec bibendum pellentesque, facilisis vitae purus. Proin sodales quis nibh et facilisis. Phasellus vitae ultrices eros, sit amet aliquam ligula. Donec tortor turpis, porta ut lectus sit amet, mattis vestibulum turpis. Maecenas ullamcorper arcu ac sagittis vulputate.\n\nSed id tellus eu ante congue porttitor. Proin eu ligula porta, mollis ipsum sed, gravida lectus. Nunc consequat mi sit amet velit posuere, hendrerit placerat ante feugiat. Proin eu odio sed magna molestie accumsan. Sed elit tellus, finibus vel scelerisque at, venenatis fermentum nibh. Suspendisse sed neque erat. Integer augue nisi, tincidunt sed consequat cursus, eleifend eu purus.\n\nInteger ex augue, efficitur eu pulvinar quis, porta ut lacus. Nullam non felis eu lacus sagittis pharetra. Pellentesque cursus imperdiet ipsum ut commodo. Mauris viverra tristique sem, ut tempor neque aliquet eu. Phasellus eu mollis leo. Maecenas pretium aliquam est quis gravida. Nunc interdum dolor vel lectus consectetur pulvinar in vel sem. Donec viverra ipsum a congue posuere. Suspendisse consectetur dapibus mauris, at aliquet libero semper vel. Nulla eget condimentum velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vulputate diam leo, nec semper libero rhoncus eu. Pellentesque in eros id justo feugiat dapibus. Sed a bibendum orci.\n\nQuisque sed nisi aliquet, semper risus vitae, mattis velit. Ut suscipit pulvinar quam, non euismod ligula blandit quis. Duis dignissim sit amet mi vitae lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum lacinia justo sed neque tempor consectetur. In ut urna sit amet felis dignissim rutrum ut eu quam. Vivamus quis urna vel quam consectetur convallis. Suspendisse potenti. Nam imperdiet ligula nec libero viverra placerat. In rhoncus mattis venenatis. Donec tempus quam quis enim vestibulum, a ultricies tellus porttitor. Curabitur convallis ex sapien, quis ullamcorper risus fermentum ultricies. Fusce at posuere lacus. Aenean eleifend ultrices diam. Integer ac varius ante, non vestibulum mi. Vivamus dui ligula, tristique vel suscipit sit amet, aliquam id purus.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum risus ac felis mattis aliquam. Nunc posuere dapibus nunc a porta. Quisque id metus egestas felis fermentum tempus non quis sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam semper nulla ac augue convallis, ut tempus lacus convallis. Nunc est ex, condimentum vitae convallis sed, cursus nec eros. Ut congue sapien eget massa pretium eleifend."},{id:4,imgSource:"./activities/act4.jpg",title:"Lorem Ipsum",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum sit amet tortor eu pellentesque. Morbi massa eros, ullamcorper id nunc vitae, fermentum ultrices urna. Suspendisse metus tortor, vulputate eu metus sed, faucibus placerat velit. Fusce vel erat ut mauris mollis aliquam. Sed tempus lorem et eros suscipit vestibulum. Sed semper eleifend justo et laoreet. Curabitur blandit orci in ullamcorper egestas. Cras mauris magna, mattis nec bibendum pellentesque, facilisis vitae purus. Proin sodales quis nibh et facilisis. Phasellus vitae ultrices eros, sit amet aliquam ligula. Donec tortor turpis, porta ut lectus sit amet, mattis vestibulum turpis. Maecenas ullamcorper arcu ac sagittis vulputate.\n\nSed id tellus eu ante congue porttitor. Proin eu ligula porta, mollis ipsum sed, gravida lectus. Nunc consequat mi sit amet velit posuere, hendrerit placerat ante feugiat. Proin eu odio sed magna molestie accumsan. Sed elit tellus, finibus vel scelerisque at, venenatis fermentum nibh. Suspendisse sed neque erat. Integer augue nisi, tincidunt sed consequat cursus, eleifend eu purus.\n\nInteger ex augue, efficitur eu pulvinar quis, porta ut lacus. Nullam non felis eu lacus sagittis pharetra. Pellentesque cursus imperdiet ipsum ut commodo. Mauris viverra tristique sem, ut tempor neque aliquet eu. Phasellus eu mollis leo. Maecenas pretium aliquam est quis gravida. Nunc interdum dolor vel lectus consectetur pulvinar in vel sem. Donec viverra ipsum a congue posuere. Suspendisse consectetur dapibus mauris, at aliquet libero semper vel. Nulla eget condimentum velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vulputate diam leo, nec semper libero rhoncus eu. Pellentesque in eros id justo feugiat dapibus. Sed a bibendum orci.\n\nQuisque sed nisi aliquet, semper risus vitae, mattis velit. Ut suscipit pulvinar quam, non euismod ligula blandit quis. Duis dignissim sit amet mi vitae lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum lacinia justo sed neque tempor consectetur. In ut urna sit amet felis dignissim rutrum ut eu quam. Vivamus quis urna vel quam consectetur convallis. Suspendisse potenti. Nam imperdiet ligula nec libero viverra placerat. In rhoncus mattis venenatis. Donec tempus quam quis enim vestibulum, a ultricies tellus porttitor. Curabitur convallis ex sapien, quis ullamcorper risus fermentum ultricies. Fusce at posuere lacus. Aenean eleifend ultrices diam. Integer ac varius ante, non vestibulum mi. Vivamus dui ligula, tristique vel suscipit sit amet, aliquam id purus.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum risus ac felis mattis aliquam. Nunc posuere dapibus nunc a porta. Quisque id metus egestas felis fermentum tempus non quis sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam semper nulla ac augue convallis, ut tempus lacus convallis. Nunc est ex, condimentum vitae convallis sed, cursus nec eros. Ut congue sapien eget massa pretium eleifend."},{id:5,imgSource:"./activities/act5.jpg",title:"Lorem Ipsum",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum sit amet tortor eu pellentesque. Morbi massa eros, ullamcorper id nunc vitae, fermentum ultrices urna. Suspendisse metus tortor, vulputate eu metus sed, faucibus placerat velit. Fusce vel erat ut mauris mollis aliquam. Sed tempus lorem et eros suscipit vestibulum. Sed semper eleifend justo et laoreet. Curabitur blandit orci in ullamcorper egestas. Cras mauris magna, mattis nec bibendum pellentesque, facilisis vitae purus. Proin sodales quis nibh et facilisis. Phasellus vitae ultrices eros, sit amet aliquam ligula. Donec tortor turpis, porta ut lectus sit amet, mattis vestibulum turpis. Maecenas ullamcorper arcu ac sagittis vulputate.\n\nSed id tellus eu ante congue porttitor. Proin eu ligula porta, mollis ipsum sed, gravida lectus. Nunc consequat mi sit amet velit posuere, hendrerit placerat ante feugiat. Proin eu odio sed magna molestie accumsan. Sed elit tellus, finibus vel scelerisque at, venenatis fermentum nibh. Suspendisse sed neque erat. Integer augue nisi, tincidunt sed consequat cursus, eleifend eu purus.\n\nInteger ex augue, efficitur eu pulvinar quis, porta ut lacus. Nullam non felis eu lacus sagittis pharetra. Pellentesque cursus imperdiet ipsum ut commodo. Mauris viverra tristique sem, ut tempor neque aliquet eu. Phasellus eu mollis leo. Maecenas pretium aliquam est quis gravida. Nunc interdum dolor vel lectus consectetur pulvinar in vel sem. Donec viverra ipsum a congue posuere. Suspendisse consectetur dapibus mauris, at aliquet libero semper vel. Nulla eget condimentum velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vulputate diam leo, nec semper libero rhoncus eu. Pellentesque in eros id justo feugiat dapibus. Sed a bibendum orci.\n\nQuisque sed nisi aliquet, semper risus vitae, mattis velit. Ut suscipit pulvinar quam, non euismod ligula blandit quis. Duis dignissim sit amet mi vitae lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum lacinia justo sed neque tempor consectetur. In ut urna sit amet felis dignissim rutrum ut eu quam. Vivamus quis urna vel quam consectetur convallis. Suspendisse potenti. Nam imperdiet ligula nec libero viverra placerat. In rhoncus mattis venenatis. Donec tempus quam quis enim vestibulum, a ultricies tellus porttitor. Curabitur convallis ex sapien, quis ullamcorper risus fermentum ultricies. Fusce at posuere lacus. Aenean eleifend ultrices diam. Integer ac varius ante, non vestibulum mi. Vivamus dui ligula, tristique vel suscipit sit amet, aliquam id purus.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum risus ac felis mattis aliquam. Nunc posuere dapibus nunc a porta. Quisque id metus egestas felis fermentum tempus non quis sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam semper nulla ac augue convallis, ut tempus lacus convallis. Nunc est ex, condimentum vitae convallis sed, cursus nec eros. Ut congue sapien eget massa pretium eleifend."}]}}),Re=function(e){return e.activities.value},Ye=We.reducer,Ke=i(65),Ee=i.n(Ke),He=(i(99),B.a.h2(O||(O=Object(z.a)(["\n    text-align: center;\n    text-transform: uppercase;\n    font-family: inherit;\n    color: ",';\n    font-weight: 700;\n    font-size: 30px;\n    position: relative;\n    display: inline-block;\n    margin: 20px auto;\n    left: 50%;\n    transform: translate(-50%);\n    \n    &:after {\n        position: absolute;\n        width: 100%;\n        left: 50%;\n        transform: translateX(-50%);\n        content: "";\n        height: 1px;\n        background-color: ',";\n        bottom: -10%;\n    }\n"])),(function(e){return e.theme.colorBlackLight}),(function(e){return e.theme.colorBlackLight}))),Te=function(){var e=Object(D.c)(Re);console.log(e);var t=e.map((function(e){return Object(J.jsx)(Ee.a,{animateIn:"fadeIn",children:Object(J.jsx)(Qe,{activity:e})})}));return Object(J.jsxs)("div",{children:[Object(J.jsx)(He,{children:"Aktualno\u015bci"}),t]})},Xe=function(){return Object(J.jsx)("div",{children:"Clubs"})},Je=function(){return Object(J.jsx)("div",{children:"Board"})},Ze=function(){return Object(J.jsx)("div",{children:"BoardVoivodeship"})},_e=function(){return Object(J.jsx)("div",{children:"Field"})},$e=function(){return Object(J.jsx)("div",{children:"Referees"})},et=function(){return Object(J.jsx)("div",{children:"Rules"})},tt=B.a.h2(w||(w=Object(z.a)(["\n    padding: 20px;\n    font-family: cursive;\n    \n    @media (max-width: 720px) {\n        text-align: center;\n    }\n"]))),it=B.a.p(y||(y=Object(z.a)(["\n    font-size: 20px;\n    padding: 10px;\n    text-align: justify;\n"]))),nt=B.a.div(S||(S=Object(z.a)(['\n    width: 60%;\n    margin: 3% auto;\n    display: flex-inline;\n    position: relative;\n    \n    @media (max-width: 720px) {\n        width: 90%;\n        padding-top: 20px;\n    }\n    \n    &:after {\n        content: "";\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        background-color: ',";\n        top: 0;\n        z-index: -1;\n        border-radius: 15px;\n    }\n"])),(function(e){return e.theme.colorGreenLight})),st=B.a.img(k||(k=Object(z.a)(["\n    float: left;\n    margin: 20px;\n    width: 55%;\n    box-shadow: 0 10px 10px -5px;\n    \n    @media (max-width: 720px) {\n        width: 80%;\n        float: none;\n        margin: 0 auto;\n        display: block;\n    }\n"]))),ut=function(){var e=Object(D.c)(ze);return Object(J.jsxs)(nt,{children:[Object(J.jsx)(st,{src:e.activity.imgSource,alt:""}),Object(J.jsx)(tt,{children:e.activity.title}),Object(J.jsx)(it,{children:e.activity.text})]})},at=B.a.div(P||(P=Object(z.a)(["\n    \n"]))),rt=function(){return Object(J.jsx)(at,{children:Object(J.jsxs)(Pe.c,{children:[Object(J.jsx)(Pe.a,{path:"/clubs",component:Xe}),Object(J.jsx)(Pe.a,{path:"/board",component:Je}),Object(J.jsx)(Pe.a,{path:"/boardvoivo",component:Ze}),Object(J.jsx)(Pe.a,{path:"/field",component:_e}),Object(J.jsx)(Pe.a,{path:"/referees",component:$e}),Object(J.jsx)(Pe.a,{path:"/rules",component:et}),Object(J.jsx)(Pe.a,{path:"/activity",component:ut}),Object(J.jsx)(Pe.a,{exact:!0,path:"/",component:Te})]})})},lt=i(66),ot=B.a.div(I||(I=Object(z.a)(["\n    background-color: ",";\n"])),(function(e){return e.theme.colorBlackLight})),ct=B.a.span(N||(N=Object(z.a)(["\n    text-align: center;\n    padding: 10px 0;\n    display: block;\n    color: ",";\n"])),(function(e){return e.theme.colorWhite})),mt=function(){return Object(J.jsx)(ot,{children:Object(J.jsx)(ct,{children:"\xa9 Wojciech Go\u0142da"})})},dt=function(){return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(lt.CircleArrow,{style:{border:"none",backgroundColor:"inherit",zIndex:2}}),Object(J.jsxs)(Q.a,{basename:"/handball_site",children:[Object(J.jsx)(ke,{}),Object(J.jsx)(rt,{})]}),Object(J.jsx)(mt,{})]})};var pt,bt=function(){return Object(J.jsx)(dt,{})},vt=i(14),ht=i(36),gt=i(67),jt=Object(gt.a)({colorBlack:"#000",colorBlackLight:"#333",colorRed:"#F00",colorYellow:"#FF0",colorWhite:"#FFF",colorGrey:"#BBB",colorGreenLight:"#A8E6BA",colorGreenLighter:"#B7E4C7"}),ft=i(140),xt=function(e){var t=e.children;return Object(J.jsx)(ft.a,{theme:jt,children:Object(J.jsxs)(vt.c,{theme:jt,children:[Object(J.jsx)(ht.a,{styles:Object(ht.b)(pt||(pt=Object(z.a)(["\n                    body {\n                        background-color: #85D397;\n                        margin: 0;\n                        font-family: sans-serif;\n                    }\n                "])))}),t]})})},qt=Object(F.a)({reducer:{contact:oe,navigation:G,showMobileMenu:X,slideshow:qe,activities:Ye,controlActivity:De}});A.a.render(Object(J.jsx)(L.a.StrictMode,{children:Object(J.jsx)(xt,{children:Object(J.jsx)(D.a,{store:qt,children:Object(J.jsx)(bt,{})})})}),document.getElementById("root"))}},[[102,1,2]]]);
//# sourceMappingURL=main.7543ecb0.chunk.js.map