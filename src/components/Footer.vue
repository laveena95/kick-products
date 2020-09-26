<template>
  <v-footer
    dark
    padless
  >
    <v-card flat class="">
    <v-row no-gutters>
      <v-col cols="12" md="3" sm="12">
        <v-card-text class="text-center heading">
          <h6 class="">About Us</h6>
        </v-card-text>
        <v-card-text class="" :class="[$vuetify.breakpoint.smAndDown ? 'para2' : 'para']">
          <p>Our Spices are sourced from the top grade quality spices growing areas. Spices are cleaned & ground under hygienic condition. Processing of includes Cool grinding to prevent the evaporation of volatile oils from spices, pure spices are blended in traditional & appropriate ratio packing is designed to retain the freshness of spices.</p>
        </v-card-text>
      </v-col>
      <v-col cols="12" md="3" sm="12" style="" class="text-center">
        <v-img src="../assets/img/b5.webp"  gradient="to top right, rgba(0,0,0,.5), rgba(0,0,0,.8)" :class="[$vuetify.breakpoint.smAndDown ? 'img2' : 'img1']">
        <v-card-text class="heading">
          <h6>Follow Us On</h6>
        </v-card-text>
         <v-card-text>
            <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 grey--text"
            icon
            >
            <v-icon size="24px">{{ icon }}</v-icon>
            </v-btn>
        </v-card-text>
        </v-img>
      </v-col>
      <v-col cols="12" md="3" sm="12">
        <v-card-text class="heading text-center">
          <h6>Contact Us</h6>
        </v-card-text>
        <v-card-text  >
          <p :class="[$vuetify.breakpoint.smAndDown ? 'para2' : 'para']">Have questions, comments or just want to say hello:</p>
          <v-list :class="[$vuetify.breakpoint.smAndDown ? 'list2' : 'para']" class="">
            <v-list-item>
              <v-icon small="" color="#eb6057" class="mx-2">fas fa-envelope</v-icon> info@kickceylon.com
            </v-list-item>
            <v-list-item>
              <v-icon small="" color="#eb6057" class="mx-2">fas fa-phone</v-icon>+(94) 777 044 429 / +(94) 112 676 655
            </v-list-item>
            <v-list-item>
              <v-icon small="" color="#eb6057" class="mx-2">fas fa-map-marker</v-icon> 266/23, Deans Road, Maradana, Colombo 10.
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-col>
      <v-col cols="12" md="3" sm="12" class="text-center hidden-sm-and-down">
        <v-card-text class="heading">
          <h6>Gallery</h6>
        </v-card-text>
        <v-row class="">
            <v-container fluid>
                <v-row class="ma-2">
                    <v-col cols="12" md="4" sm="6" v-for="item in items" :key="item.id" class="d-flex child-flex">
                        <v-card>
                            <v-img :src="item.src" aspect-ratio="1" size=""></v-img>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-row>
      </v-col>
    </v-row>
    <v-divider class="mx-4"></v-divider>
    <v-row no-gutters>
      <v-col cols="12" md="12" sm="12">
        <v-card-text class=" text-center para2">
       <p class="">All rights reserved &copy; {{ new Date().getFullYear() }} — <b class="red--text" style="letter-spacing:10px">KICK</b><b class="white--text" style="letter-spacing:5px">PRODUCTS</b> (Pvt) Ltd</p>
      </v-card-text>
      </v-col>
    </v-row>
    </v-card>
  </v-footer>
</template>

<style scoped>
.heading{
  font-family: 'Kaushan Script', cursive;
  text-transform: capitalize;
  font-size: 40px;
  color: #eb6057;
}

.para{
  font-family: 'Lexend Peta', sans-serif;
  font-size: 13px;
  color: silver;
}
.para2{
  font-family: 'Lexend Peta', sans-serif;
  font-size: 10px;
  text-align: center;
  color: silver;
}
.list2{
  font-family: 'Lexend Peta', sans-serif;
  font-size: 10px;
  color: silver;
}
.img1{
  max-height: 350px;
}
.img2{
  height: 120px;
}
</style>

<script>
  export default {
    data: () => ({
      icons: [
        'fab fa-facebook-f',
        'fab fa-instagram',
        'fab fa-whatsapp'
      ],
      items: [
        {
          id: '1',
          src: require('../assets/img/chilli.jpeg')
        },
         {
          id: '2',
          src: require('../assets/img/pepper.jpg')
        },
         {
          id: '3',
          src: require('../assets/img/gorakka.jpeg')
        },
         {
          id: '4',
          src: require('../assets/img/tumeric.png')
        },
         {
          id: '5',
          src: require('../assets/img/cardomom.jpg')
        },
         {
          id: '6',
          src: require('../assets/img/tea2.jpg')
        },
      ]
    }),
  }
</script>