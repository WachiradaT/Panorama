<template>
  <v-card>
    <v-system-bar color="primary">
      <v-spacer />
      {{data.name}}
      <v-spacer />
      <v-btn
      icon
      x-small
      @click="closeDialog"
      >
        <v-icon> mdi-close </v-icon>
      </v-btn>
    </v-system-bar>
    <v-card-text>
      <v-row class="pa-2">
          <v-col cols="8">
            <HomeImageSliderComponent
            :slides="data.imageSlide"
            />
          </v-col>
          <v-col>
              <v-row>
                <v-col>
                    <v-card>
                        <v-card-title>
                            รายละเอียดโครงการ
                        </v-card-title>
                        <v-card-subtitle>
                            {{data.type}}
                        </v-card-subtitle>
                        <v-card-text>
                            {{data.description}}
                        </v-card-text>
                    </v-card>
                </v-col>
              </v-row>
              <v-row>
                  <v-col>
                      <v-card>
                        <v-card-text>
                            {{data.area}}
                        </v-card-text>
                      </v-card>
                  </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-card>
                    <v-card-title>
                      ราคา  {{data.price}}
                    </v-card-title>
                  </v-card>
                </v-col>
              </v-row>
          </v-col>
      </v-row>
      <v-row>
          <v-col>
              <v-card>
                  <v-card-title>
                      รายละเอียด 360 องศา
                  </v-card-title>
                  <v-card-text>
                      <v-row>
                          <v-col cols="auto" v-for="(data, index) in data.rooms" :key="index">
                              <v-btn @click="openDialog(data.image)">
                                  <v-icon>
                                  {{data.icon}}
                                  </v-icon>
                                   {{data.name}}
                              </v-btn>
                          </v-col>
                      </v-row>
                  </v-card-text>
              </v-card>
          </v-col>
      </v-row>
    </v-card-text>
    <v-dialog
    v-model="dialog"
    persistent
    fullscreen
    >
    <v-system-bar color="primary">
      <v-spacer />
      <v-btn
      icon
      x-small
      @click="closeVR"
      >
        <v-icon> mdi-close </v-icon>
      </v-btn>
    </v-system-bar>
    <VRComponent :image="imageVR" v-if="imageVR != ''" />
    </v-dialog>
  </v-card>
</template>

<script>
import VRComponent from '@/components/VRComponent.vue'
import HomeImageSliderComponent from '@/components/HomeImageSliderComponent.vue'
export default {
  props: ['data'],
  components: {
    VRComponent,
    HomeImageSliderComponent
  },
  data: () => ({
    dialog: false,
    imageVR: '',
    menu: [
      {
        title: 'ห้องนอน',
        icon: 'mdi-bed'
      },
      {
        title: 'ห้องน้ำ',
        icon: 'mdi-toilet'
      },
      {
        title: 'ห้องนั่งเล่น',
        icon: 'mdi-cards-playing-outline'
      },
      {
        title: 'ห้องครัว',
        icon: 'mdi-food'
      },
      {
        title: 'สระว่ายน้ำ',
        icon: 'mdi-swim'
      },
      {
        title: 'พื้นที่บ้าน',
        icon: 'mdi-home'
      }
    ]
  }),
  methods: {
    closeDialog () {
      this.$emit('close')
    },
    openDialog (e) {
      this.imageVR = e
      this.dialog = true
    },
    closeVR () {
      this.dialog = false
      this.imageVR = ''
    }
  }
}
</script>
