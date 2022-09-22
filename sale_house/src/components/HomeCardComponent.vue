<template>
  <v-hover
  v-slot="{ hover }"
  open-delay="100"
  >
  <v-card
  :elevation="hover ? 16 : 0"
  outlined
  class="mx-auto my-12"
  width="300"
  shaped
  >
    <v-img :src="data.image" height="250"/>
    <v-card-title> {{data.name}} </v-card-title>
    <v-card-subtitle> {{data.type}} </v-card-subtitle>
    <v-card-text>
      เริ่มต้นที่ {{data.price}}
       <v-divider />
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn
      outlined
      rounded
      @click="onclickDes"
      >
        ดูรายละเอียด
        <v-icon x-small> mdi-arrow-collapse-right </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</v-hover>
</template>

<script>
export default {
  name: 'HomeCardComponent',
  props: ['data'], // โครงบ้าน
  data: () => ({}),
  methods: {
    onclickDes () {
      this.$emit('clickDes', this.data)
    }
  }
}
</script>
