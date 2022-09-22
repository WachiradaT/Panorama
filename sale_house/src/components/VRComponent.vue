<template>
<v-app>
  <Pano
  :source='image'
  @on-load="onLoad"
  />
</v-app>
</template>

<script>
import { Pano } from 'vuejs-vr'
export default {
  components: {
    Pano
  },
  props: ['image']
}
</script>
