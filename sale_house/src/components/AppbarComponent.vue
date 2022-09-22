<template>
    <v-app-bar app color="primary">
        <v-row>
            <v-col>
              <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                >
                  LAND AND HOMES
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                  link
                  :to='item.path'
                >
                  <v-list-item-title v-text="item.title"/>
                </v-list-item>
              </v-list>
            </v-menu>
            </v-col>
            <v-col v-for="(data, index) in menu" :key='index'>
                <v-btn block :to="data.path">
                    {{data.name}}
                </v-btn>
            </v-col>
        </v-row>
    </v-app-bar>
</template>

<script>
export default {
  name: 'AppbarComponent',
  data: () => ({
    menu: [
      {
        name: 'ประเภทโครงการ',
        icon: '',
        path: '/type'
      },
      {
        name: 'โปรโมชั่น',
        icon: '',
        path: '/promotion'
      },
      {
        name: 'ติดต่อเรา',
        icon: '',
        path: '/contact'
      }
    ],
    items: [
      {
        title: 'ประเภทโครงการ',
        path: '/type'
      },
      {
        title: 'โปรโมชั่น',
        path: '/promotion'
      },
      {
        title: 'ติดต่อเรา',
        path: '/contact'
      }
    ]
  })
}
</script>
