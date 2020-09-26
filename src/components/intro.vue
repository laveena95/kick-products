<template>
  <div>
      <v-container align-center justify-center>
          <v-row>
             <v-col cols="12" md="12" sm="12">
                <div :class="{'mt-n8': $vuetify.breakpoint.smAndDown, 'mt-6': $vuetify.breakpoint.mdAndUp}" flat align="center" justify="center">
                    <div class="ml-4" :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-3 font-weight-bold']">
                        <p class="subheading  "  style="color:#eb6057" >About</p> 
                        <p class=" font-weight-bold" :class="{'mt-n2': $vuetify.breakpoint.smAndDown, 'mt-n4': $vuetify.breakpoint.mdAndUp}" style="font-family: 'Architects Daughter', cursive;;">KICK PRODUCTS </p><hr style="width:50px;height:3px;background-color:black">
                    </div>
                </div>
            </v-col> 
          </v-row>
          <v-row>
              <v-col cols="12" md="5" sm="12">
                  <div style="border: 2px solid black">
                      <v-img src="../assets/img/b5.webp" aspect-ratio="1.4"></v-img>
                  </div>
              </v-col>
              <v-col cols="12" md="7" sm="12">
                  <v-card flat class="grey lighten-5">
                        <v-row>
                          <v-card-text>
                              <p class="text-center para">
                                  Our Spices are sourced from the top grade quality spices growing areas. Spices are cleaned & ground under hygienic condition. Processing of includes Cool grinding to prevent the evaporation of volatile oils from spices, pure spices are blended in traditional & appropriate ratio packing is designed to retain the freshness of spices.
                              </p>
                          </v-card-text>
                        </v-row>
                            <v-sheet
                                class="mx-auto grey lighten-5"
                                max-width="630" 
                            >
                                <v-slide-group
                                v-model="model"
                                show-arrows
                                center-active
                                class="mx-auto col-12 col-sm-6 col-md-12 col-lg-12"
                                >
                                <v-slide-item
                                    v-for="item in items"
                                    :key="item.id"
                                >
                                    <v-card
                                    class="ma-4"
                                    max-width="140" 
                                    max-height="160" outlined=""
                                    >
                                    <v-img :src="item.src" contain></v-img>
                                    </v-card>
                                </v-slide-item>
                                </v-slide-group>
                            </v-sheet>
                  </v-card>
              </v-col>
          </v-row>
      </v-container>
  </div>
</template>

<script>
 export default {
    data: () => ({
      model: null,
      items: [
          {
              id: '1',
              src: require('../assets/img/p1.jpg')
          },
           {
              id: '2',
              src: require('../assets/img/p2.jpg')
          },
           {
              id: '3',
              src: require('../assets/img/p3.jpg')
          },
           {
              id: '4',
              src: require('../assets/img/p4.jpg')
          },
           {
              id: '5',
              src: require('../assets/img/p5.jpg')
          },
          {
              id: '6',
              src: require('../assets/img/p6.jpg')
          },
          {
              id: '7',
              src: require('../assets/img/p7.jpg')
          },
          {
              id: '',
              src: require('../assets/img/p8.jpg')
          },
      ]
    }
    ),
    
  }
</script>

<style scoped>
.subheading{
    font-family: 'Kaushan Script', cursive !important;
    columns: #eb6057;
}
.heading{
    font-family: 'Architects Daughter', cursive !important;
}
.para{
    font-family: 'Acme', sans-serif;
    font-size: 15px;
    font-weight: bold;
}
</style>