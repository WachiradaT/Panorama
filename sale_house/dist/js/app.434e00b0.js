(function(){"use strict";var t={5821:function(t,e,a){var o=a(144),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Appbar"),a("v-main",[a("router-view")],1)],1)},i=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{app:"",color:"primary"}},[a("v-row",[a("v-col",[a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,s=e.attrs;return[a("v-btn",t._g(t._b({},"v-btn",s,!1),o),[t._v(" LAND AND HOMES ")])]}}])},[a("v-list",t._l(t.items,(function(e,o){return a("v-list-item",{key:o,attrs:{link:"",to:e.path}},[a("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)})),1)],1)],1),t._l(t.menu,(function(e,o){return a("v-col",{key:o},[a("v-btn",{attrs:{block:"",to:e.path}},[t._v(" "+t._s(e.name)+" ")])],1)}))],2)],1)},n=[],r={name:"AppbarComponent",data:()=>({menu:[{name:"ประเภทโครงการ",icon:"",path:"/type"},{name:"โปรโมชั่น",icon:"",path:"/promotion"},{name:"ติดต่อเรา",icon:"",path:"/contact"}],items:[{title:"ประเภทโครงการ",path:"/type"},{title:"โปรโมชั่น",path:"/promotion"},{title:"ติดต่อเรา",path:"/contact"}]})},c=r,m=a(1001),p=a(3453),d=a.n(p),g=a(426),h=a(680),v=a(2102),u=a(6816),b=a(7620),f=a(1058),w=a(2838),_=a(2877),V=(0,m.Z)(c,l,n,!1,null,null,null),C=V.exports;d()(V,{VAppBar:g.Z,VBtn:h.Z,VCol:v.Z,VList:u.Z,VListItem:b.Z,VListItemTitle:f.V9,VMenu:w.Z,VRow:_.Z});var Z={name:"App",components:{Appbar:C}},y=Z,j=a(7524),k=a(7877),D=(0,m.Z)(y,s,i,!1,null,null,null),x=D.exports;d()(D,{VApp:j.Z,VMain:k.Z});var S=a(8345),H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ma-8"},[a("v-row",[a("v-col",[a("HomeImageSliderComponent",{attrs:{slides:t.slides,height:800}})],1)],1),a("v-card",{staticClass:"ma-10"},[a("v-card-title",{staticClass:"primary"},[t._v(" โครงการของเรา ")]),a("v-row",{staticClass:"ma-10"},t._l(t.mockCard,(function(e,o){return a("v-col",{key:o,attrs:{cols:"auto"}},[a("HomeCardComponent",{attrs:{data:e},on:{clickDes:t.showDescription}})],1)})),1)],1),a("v-dialog",{attrs:{persistent:"",width:"900"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("HomeDetailView",{attrs:{data:t.sendData},on:{close:t.closeDialog}})],1)],1)},E=[],O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-system-bar",{attrs:{color:"primary"}},[a("v-spacer"),t._v(" "+t._s(t.data.name)+" "),a("v-spacer"),a("v-btn",{attrs:{icon:"","x-small":""},on:{click:t.closeDialog}},[a("v-icon",[t._v(" mdi-close ")])],1)],1),a("v-card-text",[a("v-row",{staticClass:"pa-2"},[a("v-col",{attrs:{cols:"8"}},[a("HomeImageSliderComponent",{attrs:{slides:t.data.imageSlide}})],1),a("v-col",[a("v-row",[a("v-col",[a("v-card",[a("v-card-title",[t._v(" รายละเอียดโครงการ ")]),a("v-card-subtitle",[t._v(" "+t._s(t.data.type)+" ")]),a("v-card-text",[t._v(" "+t._s(t.data.description)+" ")])],1)],1)],1),a("v-row",[a("v-col",[a("v-card",[a("v-card-text",[t._v(" "+t._s(t.data.area)+" ")])],1)],1)],1),a("v-row",[a("v-col",[a("v-card",[a("v-card-title",[t._v(" ราคา "+t._s(t.data.price)+" ")])],1)],1)],1)],1)],1),a("v-row",[a("v-col",[a("v-card",[a("v-card-title",[t._v(" รายละเอียด 360 องศา ")]),a("v-card-text",[a("v-row",t._l(t.data.rooms,(function(e,o){return a("v-col",{key:o,attrs:{cols:"auto"}},[a("v-btn",{on:{click:function(a){return t.openDialog(e.image)}}},[a("v-icon",[t._v(" "+t._s(e.icon)+" ")]),t._v(" "+t._s(e.name)+" ")],1)],1)})),1)],1)],1)],1)],1)],1),a("v-dialog",{attrs:{persistent:"",fullscreen:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-system-bar",{attrs:{color:"primary"}},[a("v-spacer"),a("v-btn",{attrs:{icon:"","x-small":""},on:{click:t.closeVR}},[a("v-icon",[t._v(" mdi-close ")])],1)],1),""!=t.imageVR?a("VRComponent",{attrs:{image:t.imageVR}}):t._e()],1)],1)},R=[],$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Pano",{attrs:{source:t.image}})],1)},B=[],I=a(190),T={components:{Pano:I.Pano},props:["image"]},A=T,P=(0,m.Z)(A,$,B,!1,null,null,null),M=P.exports;d()(P,{VApp:j.Z});var L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-carousel",{attrs:{cycle:"",height:t.height,"hide-delimiter-background":"","show-arrows-on-hover":""}},t._l(t.slides,(function(t,e){return a("v-carousel-item",{key:e,attrs:{src:t.image}})})),1)},q=[],N={props:["slides","height"]},Q=N,F=a(2695),z=a(4062),G=(0,m.Z)(Q,L,q,!1,null,null,null),J=G.exports;d()(G,{VCarousel:F.Z,VCarouselItem:z.Z});var K={props:["data"],components:{VRComponent:M,HomeImageSliderComponent:J},data:()=>({dialog:!1,imageVR:"",menu:[{title:"ห้องนอน",icon:"mdi-bed"},{title:"ห้องน้ำ",icon:"mdi-toilet"},{title:"ห้องนั่งเล่น",icon:"mdi-cards-playing-outline"},{title:"ห้องครัว",icon:"mdi-food"},{title:"สระว่ายน้ำ",icon:"mdi-swim"},{title:"พื้นที่บ้าน",icon:"mdi-home"}]}),methods:{closeDialog(){this.$emit("close")},openDialog(t){this.imageVR=t,this.dialog=!0},closeVR(){this.dialog=!1,this.imageVR=""}}},U=K,W=a(2628),X=a(7118),Y=a(7336),tt=a(6428),et=a(3631),at=a(2691),ot=(0,m.Z)(U,O,R,!1,null,null,null),st=ot.exports;d()(ot,{VBtn:h.Z,VCard:W.Z,VCardSubtitle:X.Qq,VCardText:X.ZB,VCardTitle:X.EB,VCol:v.Z,VDialog:Y.Z,VIcon:tt.Z,VRow:_.Z,VSpacer:et.Z,VSystemBar:at.Z});var it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-hover",{attrs:{"open-delay":"100"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.hover;return[a("v-card",{staticClass:"mx-auto my-12",attrs:{elevation:o?16:0,outlined:"",width:"300",shaped:""}},[a("v-img",{attrs:{src:t.data.image,height:"250"}}),a("v-card-title",[t._v(" "+t._s(t.data.name)+" ")]),a("v-card-subtitle",[t._v(" "+t._s(t.data.type)+" ")]),a("v-card-text",[t._v(" เริ่มต้นที่ "+t._s(t.data.price)+" "),a("v-divider")],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{outlined:"",rounded:""},on:{click:t.onclickDes}},[t._v(" ดูรายละเอียด "),a("v-icon",{attrs:{"x-small":""}},[t._v(" mdi-arrow-collapse-right ")])],1)],1)],1)]}}])})},lt=[],nt={name:"HomeCardComponent",props:["data"],data:()=>({}),methods:{onclickDes(){this.$emit("clickDes",this.data)}}},rt=nt,ct=a(1418),mt=a(5189),pt=a(7047),dt=(0,m.Z)(rt,it,lt,!1,null,null,null),gt=dt.exports;d()(dt,{VBtn:h.Z,VCard:W.Z,VCardActions:X.h7,VCardSubtitle:X.Qq,VCardText:X.ZB,VCardTitle:X.EB,VDivider:ct.Z,VHover:mt.Z,VIcon:tt.Z,VImg:pt.Z,VSpacer:et.Z});var ht={data:()=>({dialog:!1,sendData:{},slides:[{image:"http://localhost:3000/assets/brand.png"}],mockCard:[{type:"บ้านเดี่ยว",name:"บ้านน้ำตาลอุ่นรัก",area:"1 ห้องนอน 1 ห้องน้ำ 1 ห้องนั่งเล่น 1 ห้องครัว พื้นที่บ้าน 147 ตารางเมตร",topic:"ใกล้โรงเรียน ใกล้ชุมชน ใกล้รถไฟฟ้า ทำให้คุณออกแบบชีวิตและการเดินทางได้ดังใจ",description:"โครงการน้ำตาลอุ่นรัก ภายในบ้านตกแต่งอย่างหรูหราด้วยโทนสีน้ำตาลอย่างอบอุ่น เหมาะแก่การพักผ่อน บรรยากาศภายนอกโดยรอบนั้นจะพบกับทิวทัศน์ธรรมชาติอันเขียวขจี  สัมผัสความงดงามของธรรมชาติเพื่อให้กายใจที่เหนื่อยล้าได้ผ่อนคลายและสูดอากาศบริสุทธิ์ได้เต็มปอด ",price:"5 ล้านบาท",image:"http://localhost:3000/assets/b-img.png",imageSlide:[{image:"http://localhost:3000/assets/b-img2.png"},{image:"http://localhost:3000/assets/b-img.png"},{image:"http://localhost:3000/assets/b-top.jpg"}],rooms:[{image:"http://localhost:3000/assets/b-bedroom.jpg",name:"ห้องนอน",icon:"mdi-bed"},{image:"http://localhost:3000/assets/b-bathroom.jpg",name:"ห้องน้ำ",icon:"mdi-toilet"},{image:" http://localhost:3000/assets/b-f.jpg",name:"หน้าบ้าน",icon:"mdi-home-circle"},{image:"http://localhost:3000/assets/b-kitchen.jpg",name:"ห้องครัว",icon:"mdi-food"}]},{type:"บ้านสองชั้น",name:"บ้านไวท์แอนด์วอร์ม",area:"1 ห้องนอน 1 น้องน้ำ 3 ห้องนั่งเล่น 1ห้องครัว 1 สระว่ายน้ำ",topic:"อยู่ใกล้ห้างสรรพสินค้า และ ใกล้โรงเรียนมีสระว่ายน้ำนอกบ้านสำหรับจัดงานสังสรรค์หรือให้คุณหนูๆได้ออกกำลังกาย",description:"โครงการไวท์แอนด์วอร์ม  ตัวบ้านออกแบบมาเน้นบรรยากาศในการพักผ่อนด้วยการมีพื้นที่สวนตรงกลางให้ทุกห้องได้สัมผัสธรรมชาติได้อย่างเต็มที่และเชื่อมต่อด้วยส่วนของสระว่ายน้ำและภายในบ้านตกแต่งอย่างละมุนด้วยสีโทนสว่าง ขาว ครีมและเทา ทำให้บ้านหลังนี้ลงตัวทั้งฟังก์ชั่นการใช้งานและรูปลักษณ์ตัวอาคารที่โดดเด่น",price:"12 ล้านบาท",image:"http://localhost:3000/assets/w-img.jpg",imageSlide:[{image:"http://localhost:3000/assets/w-img.png"},{image:"http://localhost:3000/assets/w-img.jpg"},{image:"http://localhost:3000/assets/w-botton.jpg"},{image:"http://localhost:3000/assets/w-top.jpg"}],rooms:[{image:"http://localhost:3000/assets/w-bedroom.jpg",name:"ห้องนอน",icon:"mdi-bed"},{image:"http://localhost:3000/assets/w-bathroom.jpg",name:"ห้องน้ำ",icon:"mdi-toilet"},{image:" http://localhost:3000/assets/w-f.jpg",name:"หน้าบ้าน",icon:"mdi-home-circle"},{image:"http://localhost:3000/assets/w-kitchen.png",name:"ห้องครัว",icon:"mdi-food"},{image:"http://localhost:3000/assets/w-livingroom.png",name:"ห้องนั่งเล่น",icon:"mdi-gamepad-variant"},{image:"http://localhost:3000/assets/w-livingroow.jpg",name:"ห้องนั่งเล่น2",icon:"mdi-gamepad-variant"},{image:"http://localhost:3000/assets/w-pool.jpg",name:"สระว่ายน้ำ",icon:"mdi-swim"},{image:"http://localhost:3000/assets/w-stairs.jpg",name:"บันได",icon:"mdi-stairs"}]},{type:"บ้านสองชั้น",name:"บ้านแบล็คแอนด์โมเดิร์น",area:"1 ห้องนอน 1 น้องน้ำ 2 ห้องนั่งเล่น 1ห้องครัว ",topic:"อยู่ใกล้สนามบินและอยู่ใกล้ห้างสรรพสินค้า ตกแต่งด้วยสีดำและขาวอย่างทันสมัยสไตล์โมเดิร์น",description:"โครงการแบล็คแอนด์โมเดิร์น เติมลุคเฉียบให้บ้านนำสมัยและน่าค้นหา เหมาะสำหรับผู้ที่รักในความแตกต่างอย่างลงตัว  ประตูหน้าบ้านเป็นกระจกหันหน้าออกสู่สนามหญ้ากว้างรับวิวธรรมชาติได้อย่างเต็มที่ ทำให้คุณผ่อนคลายกับบ้านที่แสดงออกถึงสไตล์ของคุณอย่างชัดเจน",price:"8 ล้านบาท",image:"http://localhost:3000/assets/bl-img2.jpg",imageSlide:[{image:"http://localhost:3000/assets/bl-img.png"},{image:"http://localhost:3000/assets/bl-img2.jpg"},{image:"http://localhost:3000/assets/bl-top.jpg"},{image:"http://localhost:3000/assets/bl-botton.jpg"}],rooms:[{image:"http://localhost:3000/assets/bl-bedroom.png",name:"ห้องนอน",icon:"mdi-bed"},{image:"http://localhost:3000/assets/bl-bathroom.jpg",name:"ห้องน้ำ",icon:"mdi-toilet"},{image:"http://localhost:3000/assets/bl-kitchen.png",name:"ห้องครัว",icon:"mdi-food"},{image:"http://localhost:3000/assets/bl-livingroom.png",name:"ห้องนั่งเล่น",icon:"mdi-gamepad-variant"},{image:"http://localhost:3000/assets/bl-livingroom2.png",name:"ห้องนั่งเล่น2",icon:"mdi-gamepad-variant"},{image:"http://localhost:3000/assets/bl-stairs.jpg",name:"บันได",icon:"mdi-stairs"}]}]}),components:{HomeCardComponent:gt,HomeImageSliderComponent:J,HomeDetailView:st},methods:{showDescription(t){this.sendData=t,this.dialog=!0},closeDialog(){this.dialog=!1}}},vt=ht,ut=(0,m.Z)(vt,H,E,!1,null,null,null),bt=ut.exports;d()(ut,{VCard:W.Z,VCardTitle:X.EB,VCol:v.Z,VDialog:Y.Z,VRow:_.Z});var ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",[a("v-col",[a("HomeImageSliderComponent",{attrs:{slides:t.slides,height:800}})],1)],1)],1)},wt=[],_t={data:()=>({slides:[{image:"http://localhost:3000/assets/contact.png"}]}),components:{HomeImageSliderComponent:J}},Vt=_t,Ct=(0,m.Z)(Vt,ft,wt,!1,null,null,null),Zt=Ct.exports;d()(Ct,{VCol:v.Z,VRow:_.Z});var yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("lightbox",{attrs:{images:t.images}})],1)},jt=[],kt={data:()=>({images:[{src:"http://localhost:3000/assets/pm-1.png"},{src:"http://localhost:3000/assets/pm-2.png"},{src:"http://localhost:3000/assets/pm-3.png"},{src:"http://localhost:3000/assets/pm-4.png"}]})},Dt=kt,xt=(0,m.Z)(Dt,yt,jt,!1,null,null,null),St=xt.exports,Ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{staticClass:"ma-10"},[a("v-card-title",{staticClass:"primary"},[t._v(" บ้านเดี่ยว ")]),a("v-row",{staticClass:"ma-10"},t._l(t.home1,(function(e,o){return a("v-col",{key:o,attrs:{cols:"auto"}},[a("HomeCardComponent",{attrs:{data:e},on:{clickDes:t.showDescription}})],1)})),1)],1),a("v-card",{staticClass:"ma-10"},[a("v-card-title",{staticClass:"primary"},[t._v(" บ้านสองชั้น ")]),a("v-row",{staticClass:"ma-10"},t._l(t.home2,(function(e,o){return a("v-col",{key:o,attrs:{cols:"auto"}},[a("HomeCardComponent",{attrs:{data:e},on:{clickDes:t.showDescription}})],1)})),1)],1),a("v-dialog",{attrs:{persistent:"",width:"900"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("HomeDetailView",{attrs:{data:t.sendData},on:{close:t.closeDialog}})],1)],1)},Et=[],Ot={data:()=>({dialog:!1,sendData:{},slides:[{image:"http://localhost:3000/assets/brand.png"}],home1:[{type:"บ้านเดี่ยว",name:"บ้านน้ำตาลอุ่นรัก",area:"1 ห้องนอน 1 ห้องน้ำ 1 ห้องนั่งเล่น 1 ห้องครัว พื้นที่บ้าน 147 ตารางเมตร",topic:"ใกล้โรงเรียน ใกล้ชุมชน ใกล้รถไฟฟ้า ทำให้คุณออกแบบชีวิตและการเดินทางได้ดังใจ",description:"โครงการน้ำตาลอุ่นรัก ภายในบ้านตกแต่งอย่างหรูหราด้วยโทนสีน้ำตาลอย่างอบอุ่น เหมาะแก่การพักผ่อน บรรยากาศภายนอกโดยรอบนั้นจะพบกับทิวทัศน์ธรรมชาติอันเขียวขจี  สัมผัสความงดงามของธรรมชาติเพื่อให้กายใจที่เหนื่อยล้าได้ผ่อนคลายและสูดอากาศบริสุทธิ์ได้เต็มปอด ",price:"5 ล้านบาท",image:"http://localhost:3000/assets/b-img.png",imageSlide:[{image:"http://localhost:3000/assets/b-img2.png"},{image:"http://localhost:3000/assets/b-img.png"},{image:"http://localhost:3000/assets/b-top.jpg"}],rooms:[{image:"http://localhost:3000/assets/b-bedroom.jpg",name:"ห้องนอน",icon:"mdi-bed"},{image:"http://localhost:3000/assets/b-bathroom.jpg",name:"ห้องน้ำ",icon:"mdi-toilet"},{image:" http://localhost:3000/assets/b-f.jpg",name:"หน้าบ้าน",icon:"mdi-home-circle"},{image:"http://localhost:3000/assets/b-kitchen.jpg",name:"ห้องครัว",icon:"mdi-food"}]}],home2:[{type:"บ้านสองชั้น",name:"บ้านไวท์แอนด์วอร์ม",area:"1 ห้องนอน 1 น้องน้ำ 3 ห้องนั่งเล่น 1ห้องครัว 1 สระว่ายน้ำ",topic:"อยู่ใกล้ห้างสรรพสินค้า และ ใกล้โรงเรียนมีสระว่ายน้ำนอกบ้านสำหรับจัดงานสังสรรค์หรือให้คุณหนูๆได้ออกกำลังกาย",description:"โครงการไวท์แอนด์วอร์ม  ตัวบ้านออกแบบมาเน้นบรรยากาศในการพักผ่อนด้วยการมีพื้นที่สวนตรงกลางให้ทุกห้องได้สัมผัสธรรมชาติได้อย่างเต็มที่และเชื่อมต่อด้วยส่วนของสระว่ายน้ำและภายในบ้านตกแต่งอย่างละมุนด้วยสีโทนสว่าง ขาว ครีมและเทา ทำให้บ้านหลังนี้ลงตัวทั้งฟังก์ชั่นการใช้งานและรูปลักษณ์ตัวอาคารที่โดดเด่น",price:"12 ล้านบาท",image:"http://localhost:3000/assets/w-img.jpg",imageSlide:[{image:"http://localhost:3000/assets/w-img.png"},{image:"http://localhost:3000/assets/w-img.jpg"},{image:"http://localhost:3000/assets/w-botton.jpg"},{image:"http://localhost:3000/assets/w-top.jpg"}],rooms:[{image:"http://localhost:3000/assets/w-bedroom.jpg",name:"ห้องนอน",icon:"mdi-bed"},{image:"http://localhost:3000/assets/w-bathroom.jpg",name:"ห้องน้ำ",icon:"mdi-toilet"},{image:" http://localhost:3000/assets/w-f.jpg",name:"หน้าบ้าน",icon:"mdi-home-circle"},{image:"http://localhost:3000/assets/w-kitchen.png",name:"ห้องครัว",icon:"mdi-food"},{image:"http://localhost:3000/assets/w-livingroom.png",name:"ห้องนั่งเล่น",icon:"mdi-gamepad-variant"},{image:"http://localhost:3000/assets/bl-livingroom2.jpg",name:"ห้องนั่งเล่น2",icon:"mdi-gamepad-variant"},{image:"http://localhost:3000/assets/w-pool.jpg",name:"สระว่ายน้ำ",icon:"mdi-swim"},{image:"http://localhost:3000/assets/w-stairs.jpg",name:"บันได",icon:"mdi-stairs"}]},{type:"บ้านสองชั้น",name:"บ้านแบล็คแอนด์โมเดิร์น",area:"1 ห้องนอน 1 น้องน้ำ 2 ห้องนั่งเล่น 1ห้องครัว ",topic:"อยู่ใกล้สนามบินและอยู่ใกล้ห้างสรรพสินค้า ตกแต่งด้วยสีดำและขาวอย่างทันสมัยสไตล์โมเดิร์น",description:"โครงการแบล็คแอนด์โมเดิร์น เติมลุคเฉียบให้บ้านนำสมัยและน่าค้นหา เหมาะสำหรับผู้ที่รักในความแตกต่างอย่างลงตัว  ประตูหน้าบ้านเป็นกระจกหันหน้าออกสู่สนามหญ้ากว้างรับวิวธรรมชาติได้อย่างเต็มที่ ทำให้คุณผ่อนคลายกับบ้านที่แสดงออกถึงสไตล์ของคุณอย่างชัดเจน",price:"8 ล้านบาท",image:"http://localhost:3000/assets/bl-img2.jpg",imageSlide:[{image:"http://localhost:3000/assets/bl-img.png"},{image:"http://localhost:3000/assets/bl-img2.jpg"},{image:"http://localhost:3000/assets/bl-top.jpg"},{image:"http://localhost:3000/assets/bl-botton.jpg"}],rooms:[{image:"http://localhost:3000/assets/bl-bedroom.png",name:"ห้องนอน",icon:"mdi-bed"},{image:"http://localhost:3000/assets/bl-bathroom.jpg",name:"ห้องน้ำ",icon:"mdi-toilet"},{image:"http://localhost:3000/assets/bl-kitchen.png",name:"ห้องครัว",icon:"mdi-food"},{image:"http://localhost:3000/assets/bl-livingroom.png",name:"ห้องนั่งเล่น",icon:"mdi-gamepad-variant"},{image:"http://localhost:3000/assets/bl-livingroow.png",name:"ห้องนั่งเล่น2",icon:"mdi-gamepad-variant"},{image:"http://localhost:3000/assets/bl-stairs.jpg",name:"บันได",icon:"mdi-stairs"}]}]}),components:{HomeCardComponent:gt,HomeDetailView:st},methods:{showDescription(t){this.sendData=t,this.dialog=!0},closeDialog(){this.dialog=!1}}},Rt=Ot,$t=(0,m.Z)(Rt,Ht,Et,!1,null,null,null),Bt=$t.exports;d()($t,{VCard:W.Z,VCardTitle:X.EB,VCol:v.Z,VDialog:Y.Z,VRow:_.Z}),o["default"].use(S.Z);const It=[{path:"/",name:"home",component:bt},{path:"/contact",component:Zt},{path:"/promotion",component:St},{path:"/type",component:Bt}],Tt=new S.Z({mode:"history",base:"/",routes:It});var At=Tt,Pt=a(629);o["default"].use(Pt.ZP);var Mt=new Pt.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),Lt=a(9132),qt=a(1846);o["default"].use(Lt.Z);var Nt=new Lt.Z({theme:{themes:{light:{primary:qt.Z.blue.lighten2,secondary:qt.Z.lightBlue.lighten3,accent:qt.Z.grey.lighten3}}}}),Qt=a(8552),Ft=a.n(Qt);o["default"].use(Ft()),o["default"].config.productionTip=!1,new o["default"]({router:At,store:Mt,vuetify:Nt,render:t=>t(x)}).$mount("#app")}},e={};function a(o){var s=e[o];if(void 0!==s)return s.exports;var i=e[o]={exports:{}};return t[o].call(i.exports,i,i.exports,a),i.exports}a.m=t,function(){var t=[];a.O=function(e,o,s,i){if(!o){var l=1/0;for(m=0;m<t.length;m++){o=t[m][0],s=t[m][1],i=t[m][2];for(var n=!0,r=0;r<o.length;r++)(!1&i||l>=i)&&Object.keys(a.O).every((function(t){return a.O[t](o[r])}))?o.splice(r--,1):(n=!1,i<l&&(l=i));if(n){t.splice(m--,1);var c=s();void 0!==c&&(e=c)}}return e}i=i||0;for(var m=t.length;m>0&&t[m-1][2]>i;m--)t[m]=t[m-1];t[m]=[o,s,i]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,o){var s,i,l=o[0],n=o[1],r=o[2],c=0;if(l.some((function(e){return 0!==t[e]}))){for(s in n)a.o(n,s)&&(a.m[s]=n[s]);if(r)var m=r(a)}for(e&&e(o);c<l.length;c++)i=l[c],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(m)},o=self["webpackChunksale_house"]=self["webpackChunksale_house"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(5821)}));o=a.O(o)})();
//# sourceMappingURL=app.434e00b0.js.map