<template>
  <div class="ma-8" >
    <v-row>
      <v-col>
        <HomeImageSliderComponent
        :slides="slides"
        :height=800
        />
      </v-col>
    </v-row>
    <v-card class="ma-10" >
        <v-card-title class="primary">
            โครงการของเรา
        </v-card-title>
    <v-row class="ma-10">
      <v-col
      cols="auto"
      v-for="(data,index) in mockCard"
      :key="index"
      >
        <HomeCardComponent
        :data="data"
        @clickDes="showDescription"
        />
      </v-col>
    </v-row>
    </v-card>
    <v-dialog
    v-model="dialog"
    persistent
    width="900"
    >
      <HomeDetailView
      :data="sendData"
      @close="closeDialog"
      />
    </v-dialog>
  </div>
</template>

<script>
import HomeDetailView from '@/views/HomeDetailView.vue'
import HomeCardComponent from '@/components/HomeCardComponent.vue'
import HomeImageSliderComponent from '@/components/HomeImageSliderComponent.vue'
export default {
  data: () => ({
    dialog: false,
    sendData: {},
    slides: [
      {
        image: 'http://localhost:3000/assets/brand.png'
      }
    ],
    mockCard: [{
      type: 'บ้านเดี่ยว',
      name: 'บ้านน้ำตาลอุ่นรัก',
      area: '1 ห้องนอน 1 ห้องน้ำ 1 ห้องนั่งเล่น 1 ห้องครัว พื้นที่บ้าน 147 ตารางเมตร',
      topic: 'ใกล้โรงเรียน ใกล้ชุมชน ใกล้รถไฟฟ้า ทำให้คุณออกแบบชีวิตและการเดินทางได้ดังใจ',
      description: 'โครงการน้ำตาลอุ่นรัก ภายในบ้านตกแต่งอย่างหรูหราด้วยโทนสีน้ำตาลอย่างอบอุ่น เหมาะแก่การพักผ่อน บรรยากาศภายนอกโดยรอบนั้นจะพบกับทิวทัศน์ธรรมชาติอันเขียวขจี  สัมผัสความงดงามของธรรมชาติเพื่อให้กายใจที่เหนื่อยล้าได้ผ่อนคลายและสูดอากาศบริสุทธิ์ได้เต็มปอด ',
      price: '5 ล้านบาท',
      image: 'http://localhost:3000/assets/b-img.png',
      imageSlide: [
        {
          image: 'http://localhost:3000/assets/b-img2.png'
        },
        {
          image: 'http://localhost:3000/assets/b-img.png'
        },
        {
          image: 'http://localhost:3000/assets/b-top.jpg'
        }
      ],
      rooms: [
        {
          image: 'http://localhost:3000/assets/b-bedroom.jpg',
          name: 'ห้องนอน',
          icon: 'mdi-bed'
        },
        {
          image: 'http://localhost:3000/assets/b-bathroom.jpg',
          name: 'ห้องน้ำ',
          icon: 'mdi-toilet'
        },
        {
          image: ' http://localhost:3000/assets/b-f.jpg',
          name: 'หน้าบ้าน',
          icon: 'mdi-home-circle'
        },
        {
          image: 'http://localhost:3000/assets/b-kitchen.jpg',
          name: 'ห้องครัว',
          icon: 'mdi-food'
        }
      ]
    },
    {
      type: 'บ้านสองชั้น',
      name: 'บ้านไวท์แอนด์วอร์ม',
      area: '1 ห้องนอน 1 น้องน้ำ 3 ห้องนั่งเล่น 1ห้องครัว 1 สระว่ายน้ำ',
      topic: 'อยู่ใกล้ห้างสรรพสินค้า และ ใกล้โรงเรียนมีสระว่ายน้ำนอกบ้านสำหรับจัดงานสังสรรค์หรือให้คุณหนูๆได้ออกกำลังกาย',
      description: 'โครงการไวท์แอนด์วอร์ม  ตัวบ้านออกแบบมาเน้นบรรยากาศในการพักผ่อนด้วยการมีพื้นที่สวนตรงกลางให้ทุกห้องได้สัมผัสธรรมชาติได้อย่างเต็มที่และเชื่อมต่อด้วยส่วนของสระว่ายน้ำและภายในบ้านตกแต่งอย่างละมุนด้วยสีโทนสว่าง ขาว ครีมและเทา ทำให้บ้านหลังนี้ลงตัวทั้งฟังก์ชั่นการใช้งานและรูปลักษณ์ตัวอาคารที่โดดเด่น',
      price: '12 ล้านบาท',
      image: 'http://localhost:3000/assets/w-img.jpg',
      imageSlide: [
        {
          image: 'http://localhost:3000/assets/w-img.png'
        },
        {
          image: 'http://localhost:3000/assets/w-img.jpg'
        },
        {
          image: 'http://localhost:3000/assets/w-botton.jpg'
        },
        {
          image: 'http://localhost:3000/assets/w-top.jpg'
        }
      ],
      rooms: [
        {
          image: 'http://localhost:3000/assets/w-bedroom.jpg',
          name: 'ห้องนอน',
          icon: 'mdi-bed'
        },
        {
          image: 'http://localhost:3000/assets/w-bathroom.jpg',
          name: 'ห้องน้ำ',
          icon: 'mdi-toilet'
        },
        {
          image: ' http://localhost:3000/assets/w-f.jpg',
          name: 'หน้าบ้าน',
          icon: 'mdi-home-circle'
        },
        {
          image: 'http://localhost:3000/assets/w-kitchen.png',
          name: 'ห้องครัว',
          icon: 'mdi-food'
        },
        {
          image: 'http://localhost:3000/assets/w-livingroom.png',
          name: 'ห้องนั่งเล่น',
          icon: 'mdi-gamepad-variant'
        },
        {
          image: 'http://localhost:3000/assets/w-livingroow.jpg',
          name: 'ห้องนั่งเล่น2',
          icon: 'mdi-gamepad-variant'
        },
        {
          image: 'http://localhost:3000/assets/w-pool.jpg',
          name: 'สระว่ายน้ำ',
          icon: 'mdi-swim'
        },
        {
          image: 'http://localhost:3000/assets/w-stairs.jpg',
          name: 'บันได',
          icon: 'mdi-stairs'
        }
      ]
    },
    {
      type: 'บ้านสองชั้น',
      name: 'บ้านแบล็คแอนด์โมเดิร์น',
      area: '1 ห้องนอน 1 น้องน้ำ 2 ห้องนั่งเล่น 1ห้องครัว ',
      topic: 'อยู่ใกล้สนามบินและอยู่ใกล้ห้างสรรพสินค้า ตกแต่งด้วยสีดำและขาวอย่างทันสมัยสไตล์โมเดิร์น',
      description: 'โครงการแบล็คแอนด์โมเดิร์น เติมลุคเฉียบให้บ้านนำสมัยและน่าค้นหา เหมาะสำหรับผู้ที่รักในความแตกต่างอย่างลงตัว  ประตูหน้าบ้านเป็นกระจกหันหน้าออกสู่สนามหญ้ากว้างรับวิวธรรมชาติได้อย่างเต็มที่ ทำให้คุณผ่อนคลายกับบ้านที่แสดงออกถึงสไตล์ของคุณอย่างชัดเจน',
      price: '8 ล้านบาท',
      image: 'http://localhost:3000/assets/bl-img2.jpg',
      imageSlide: [
        {
          image: 'http://localhost:3000/assets/bl-img.png'
        },
        {
          image: 'http://localhost:3000/assets/bl-img2.jpg'
        },
        {
          image: 'http://localhost:3000/assets/bl-top.jpg'
        },
        {
          image: 'http://localhost:3000/assets/bl-botton.jpg'
        }
      ],
      rooms: [
        {
          image: 'http://localhost:3000/assets/bl-bedroom.png',
          name: 'ห้องนอน',
          icon: 'mdi-bed'
        },
        {
          image: 'http://localhost:3000/assets/bl-bathroom.jpg',
          name: 'ห้องน้ำ',
          icon: 'mdi-toilet'
        },
        {
          image: 'http://localhost:3000/assets/bl-kitchen.png',
          name: 'ห้องครัว',
          icon: 'mdi-food'
        },
        {
          image: 'http://localhost:3000/assets/bl-livingroom.png',
          name: 'ห้องนั่งเล่น',
          icon: 'mdi-gamepad-variant'
        },
        {
          image: 'http://localhost:3000/assets/bl-livingroom2.png',
          name: 'ห้องนั่งเล่น2',
          icon: 'mdi-gamepad-variant'
        },
        {
          image: 'http://localhost:3000/assets/bl-stairs.jpg',
          name: 'บันได',
          icon: 'mdi-stairs'
        }
      ]
    }]
  }),
  components: {
    HomeCardComponent,
    HomeImageSliderComponent,
    HomeDetailView
  },
  methods: {
    showDescription (e) {
      this.sendData = e
      this.dialog = true
    },
    closeDialog () {
      this.dialog = false
    }
  }
}
</script>
