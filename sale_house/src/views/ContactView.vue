<template>
<div>
  <v-row>
      <v-col>
        <HomeImageSliderComponent
        :slides="slides"
        :height=800
        />
      </v-col>
  </v-row>
</div>
</template>

<script>
import HomeImageSliderComponent from '@/components/HomeImageSliderComponent.vue'
export default {
  data: () => ({
    slides: [
      {
        image: 'http://localhost:3000/assets/contact.png'
      }
    ]
  }),
  components: {
    HomeImageSliderComponent
  }
}
</script>
