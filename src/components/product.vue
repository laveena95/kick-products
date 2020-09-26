<template>
  <v-container fluid class="" >
    <v-row no-gutters style="" class="mt-8">
      <v-col class="col-12 col-md-12">
        <div class="text-center ">
          <div :class="{'mt-n8': $vuetify.breakpoint.smAndDown, 'mt-6': $vuetify.breakpoint.mdAndUp}" flat align="center" justify="center">
              <div class="ml-4" :class="[$vuetify.breakpoint.smAndDown ? '' : 'display-3 font-weight-bold']">
                  <p class="subheading  "  style="color:#eb6057" >Best Products</p> 
                  <p class=" font-weight-bold" :class="{'mt-n5': $vuetify.breakpoint.smAndDown, 'mt-n4': $vuetify.breakpoint.mdAndUp}" style="font-family: 'Architects Daughter', cursive;;">KICK PRODUCTS </p><hr style="width:50px;height:3px;background-color:black" :class="{'mt-n3': $vuetify.breakpoint.smAndDown}">
              </div>
          </div>
          <p class="desc font-weight-light mt-md-6 mt-2" >Color Flavor and enrich the world with good health</p>
          <v-icon right dark class="mx-1" color="red" small>mdi-star</v-icon>
          <v-icon right dark class="mx-1 mb-1" color="black" medium>mdi-star</v-icon>
          <v-icon right dark class="mx-1" color="red" small>mdi-star</v-icon>
          <br />
        </div>
      </v-col>
      <v-col class="col-12 col-md-12" >
        <v-container class="">
          <v-sheet elevation="0" style="" class="grey lighten-5">
            <v-tabs v-model="tab" color="white" centered="" hide-slider  class="align-center justify-content mx-auto">
              <v-tab v-for="item in items" :key="item.tab" active-class="black " style="width:140px;font-size:11px">{{ item.tab }}</v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
              <v-tab-item
                v-for="item in items"
                :key="item.tab"
                transition="scale-transition"
                reverse-transition="scale-transition"
              >
                <v-row class="py-16 grey lighten-5 " color>
                  <v-col
                    v-for="(content, index) in item.contents"
                    :key="index"
                    cols="12"
                    sm="3"
                    md="3"
                  >
                  <v-hover v-slot:default="{ hover }">
                    <v-card tile flat  :elevation=" hover ?  5 : 0 "   >                       
                          <v-card outlined class="border"  >
                            <v-row no-gutters>
                              <v-col class="col-12">
                                <v-hover v-slot:default="{ hover }" class="pointer">
                                  <v-img :src="content.src" contain aspect-ratio="1.2">
                                    <v-expand-transition>
                                      <v-overlay
                                        v-if="hover"
                                        absolute
                                        color="white"
                                        opacity="1"
                                        elevation="5"
                                      >
                                        <v-avatar size="220">
                                          <v-img :src="content.src1" aspect-ratio=""></v-img>
                                        </v-avatar>
                                      </v-overlay>
                                    </v-expand-transition>
                                  </v-img>
                                </v-hover>
                                <div class="text-center py-3">
                                <p class=" font-weight-bold monospace" :class="hover ? 'red--text' : 'black--text' ">{{content.name}}</p>
                                <p class=" font-weight-bold">{{content.gram}}</p>
                                <p class="red--text font-weight-bold">{{content.price}}</p>
                                <v-icon right dark class="mx-1" color="black" small>mdi-star</v-icon>
                                <v-icon right dark class="mx-1" color="black" small>mdi-star-outline</v-icon>
                               <v-icon right dark class="mx-1" color="black" small>mdi-star-outline</v-icon>
                               
                                </div>
                              </v-col>
                            </v-row>
                          </v-card>
                    </v-card>
                    </v-hover>
                  </v-col>
                </v-row>
              </v-tab-item>
            </v-tabs-items>
          </v-sheet>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      tab: null,
      overlay: false,
      items: [
        {
          tab: "Jar Product",
        
          contents: [
            {
              src: require('../assets/img/1.webp'),
              src1:  require('../assets/img/pepper.jpeg'),
              name: "Black Pepper",
              price: "$4.50",
              gram: "50g",
              price: "Rs.60.00"
            },
            {
              src:  require('../assets/img/4.webp'),
                src1:  require('../assets/img/f.jpg'),
              name: "Maldives Fish Chips",
              gram: "50g",
              price: "Rs.60.00"
            },
            {
              src:  require('../assets/img/5.webp'),
                src1:  require('../assets/img/g2.jpeg'),
              name: "Gorakka",
              gram: "50g",
              price: "Rs.60.00"
            },
            {
              src:  require('../assets/img/7.webp'),
                src1:  require('../assets/img/8.webp'),
              name: "Tpimentio",
              price: "$27.50"
            },
            {
              src:  require('../assets/img/9.webp'),
              src1:  require('../assets/img/10.webp'),
              name: "Fennel seeds",
              price: "$4.50"
            },
            {
              src:  require('../assets/img/11.webp'),
                src1:  require('../assets/img/12.webp'),
              name: "black sesame seeds ",
              price: "$12.00"
            },
            {
              src:  require('../assets/img/1.webp'),
                src1:  require('../assets/img/2.webp'),
              name: "Cubeb pepper",
              price: "$18.50"
            },
            {
              src:  require('../assets/img/5.webp'),
                src1:  require('../assets/img/6.webp'),
              name: "Chillie Powder",
              price: "$27.50"
            }
          ]
        },
        {
          tab: "Pouch Product",
          
          contents: [
            {
              src: require('../assets/img/9.webp'),
              src1:  require('../assets/img/10.webp'),
              name: "Fennel seeds Powder",
              gram: "50g",
              price: "Rs.60.00"
            },
            {
              src:  require('../assets/img/t.jpg'),
                src1:  require('../assets/img/t3.jpeg'),
              name: "Tumeric Powder",
              gram: "50g",
              price: "Rs.60.00"
            },
            {
              src:  require('../assets/img/1.webp'),
                src1:  require('../assets/img/2.webp'),
              name: "Black Pepper Powder",
              gram: "50g",
              price: "Rs.60.00"
            },
            {
              src:  require('../assets/img/5.webp'),
                src1:  require('../assets/img/6.webp'),
              name: "Chillie Powder",
              gram: "50g",
              price: "Rs.60.00"
            },
             {
              src:  require('../assets/img/5.webp'),
              src1:  require('../assets/img/cp2.jpeg'),
              name: "Chillie Flakes",
              gram: "50g",
              price: "Rs.60.00"
            },
            {
              src:  require('../assets/img/ci.jpg'),
                src1:  require('../assets/img/c2.jpg'),
                name: "Cinnamon",
               gram: "50g",
              price: "Rs.60.00"
            },
            {
              src:  require('../assets/img/curry.jpg'),
                src1:  require('../assets/img/m3.jpeg'),
                name: "Curry Powder",
               gram: "50g",
              price: "Rs.60.00"
            },
            {
              src:  require('../assets/img/masala.jpg'),
                 src1:  require('../assets/img/2.webp'),
                name: "Masala Powder",
               gram: "50g",
              price: "Rs.60.00"
            },
          ]
        }
      ]
    };
  }
};
</script>


<style scoped>
.monospace {
  font-family: "Lucida Console", Courier, monospace;
}
.subheading{
    font-family: 'Kaushan Script', cursive;
    columns: #eb6057;
}
.desc{
  font-family: 'Acme', sans-serif;
}
.v-tab {
  border-style: solid;
  border-color: rgb(235, 5, 5);
  border-width: 2px;
}
.border:hover {
  border-style: solid;
  border-top-color: rgb(235, 5, 5);
  border-right-color: rgb(235, 5, 5);
  border-left-color: black;
  border-bottom-color: black;
  border-width: 3px;
}
.pointer {cursor: pointer;}
</style>