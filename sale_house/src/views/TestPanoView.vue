<template>
  <v-app>
    <Pano source="http://localhost:3000/assets/AngtadPano.jpg" />
  </v-app>
</template>

<script>
import { Pano } from 'vuejs-vr'
export default {
  components: {
    Pano
  }
}
</script>
