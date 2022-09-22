<template>
  <v-carousel cycle :height=height hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="(slide, index) in slides" :key="index" :src="slide.image">
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  props: ['slides', 'height']
}
</script>
