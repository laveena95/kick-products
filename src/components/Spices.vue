<template>
  <v-container fluid class="" >
    <v-row no-gutters style="" class="mt-8">
      <v-col class="col-12 col-md-12">
        <div class="text-center ">
          <div :class="{'mt-n8': $vuetify.breakpoint.smAndDown, 'mt-n4': $vuetify.breakpoint.mdAndUp}" flat align="center" justify="center">
              <div class="ml-4" :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-3 font-weight-bold']">
                  <p class=" heading2" style="color:#eb6057" >Our Spices</p> 
                  <p class=" font-weight-bold" :class="{'mt-n2': $vuetify.breakpoint.smAndDown, 'mt-n4': $vuetify.breakpoint.mdAndUp}" style="font-family: 'Architects Daughter', cursive;">KICK PRODUCTS </p>
                  <v-responsive>
                      <v-divider width="50" class="red"></v-divider>
                  </v-responsive>
              </div>
          </div>
          <p class="desc font-weight-bold mt-6">Color Flavor and enrich the world with good health</p>
          <v-icon right dark class="mx-1" color="red" small>mdi-star</v-icon>
          <v-icon right dark class="mx-1 mb-1" color="black" medium>mdi-star</v-icon>
          <v-icon right dark class="mx-1" color="red" small>mdi-star</v-icon>
          <br />
        </div>
      </v-col>
      <v-col class="col-12 col-md-12" >
            <v-row >
                <div align="center" >
                    <v-col cols="12" md="9" sm="12" v-for="item in items" :key="item.id">
                    <v-card class="black" elevation="10">
                        <v-row >
                            <v-col cols="12" md="4" >
                                <v-container fluid fill-height>
                                    <v-avatar tile size="280" style="" class="mx-auto" >
                                    <v-img :src="item.src" contain ></v-img>
                                </v-avatar>
                                </v-container>
                                <div></div>
                                
                        </v-col>
                        <v-col cols="12" md="8" class="text-left">
                            <h2 class="heading1 font-weight-bold ml-md-4" :class="{'text-center': $vuetify.breakpoint.smAndDown, 'text-left': $vuetify.breakpoint.mdAndUp}">{{ item.title }}</h2>
                            <v-card-text>
                                <p class="para font-weight-bold grey--text" :class="{'text-center': $vuetify.breakpoint.smAndDown, 'text-left': $vuetify.breakpoint.mdAndUp}">{{ item.desc }}</p>
                            </v-card-text>
                            <v-card-text class="para font-weight-bold grey--text">
                                <v-row >
                                    <v-col cols="8" class="mx-auto px-md-0" >
                                        <v-row >
                                    <v-col  md="4" sm="4"><h4>Price</h4></v-col>
                                    <v-col  md="8" sm="8"><p class="red--text font-weight-bold"><span class="orange--text">Rs. </span>{{ item.price }}</p></v-col>
                                </v-row>
                                <v-row>
                                    <v-col md="4" sm="4"><h4>Weight</h4></v-col>
                                    <v-col md="8" sm="8"><p class="red--text font-weight-bold">50 g</p></v-col>
                                </v-row>
                                <v-row >
                                    <v-col md="4" sm="4"><h4>Availability</h4></v-col>
                                    <v-col md="8" sm="8"><p class="green--text text--darken-3">In stock</p> </v-col>
                                </v-row>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-col>
                        </v-row>
                    </v-card>
                </v-col>
                </div>
            </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    data() {
        return{
            items: [
            {
                id: '1',
                src: require('../assets/img/p1.jpg'),
                title: "Chili Powder",
                desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ea, illum aspernatur eum ex dicta est dolores harum sit nesciunt tenetur quod in libero corporis debitis facere aut veniam consequuntur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis porro doloribus in cum eius quidem! Nihil reiciendis aperiam dolore similique fugiat, rem aliquid iusto? Numquam illum iste dolores velit nisi.",
                price: "60.00"
            },
            {
                id: '2',
                src: require('../assets/img/p2.jpg'),
                title: "Turmeric Powder",
                desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ea, illum aspernatur eum ex dicta est dolores harum sit nesciunt tenetur quod in libero corporis debitis facere aut veniam consequuntur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis porro doloribus in cum eius quidem! Nihil reiciendis aperiam dolore similique fugiat, rem aliquid iusto? Numquam illum iste dolores velit nisi.",
                price: "60.00"
            },
            {
                id: '3',
                src: require('../assets/img/p3.jpg'),
                title: "Cillie Pieces",
                desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ea, illum aspernatur eum ex dicta est dolores harum sit nesciunt tenetur quod in libero corporis debitis facere aut veniam consequuntur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis porro doloribus in cum eius quidem! Nihil reiciendis aperiam dolore similique fugiat, rem aliquid iusto? Numquam illum iste dolores velit nisi.",
                price: "60.00"
            },
            {
                id: '4',
                src: require('../assets/img/p4.jpg'),
                title: "Pepper Powder",
                desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ea, illum aspernatur eum ex dicta est dolores harum sit nesciunt tenetur quod in libero corporis debitis facere aut veniam consequuntur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis porro doloribus in cum eius quidem! Nihil reiciendis aperiam dolore similique fugiat, rem aliquid iusto? Numquam illum iste dolores velit nisi.",
                price: "60.00"
            },
            {
                id: '5',
                src: require('../assets/img/p5.jpg'),
                title: "Roasted Curry Powder",
                desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ea, illum aspernatur eum ex dicta est dolores harum sit nesciunt tenetur quod in libero corporis debitis facere aut veniam consequuntur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis porro doloribus in cum eius quidem! Nihil reiciendis aperiam dolore similique fugiat, rem aliquid iusto? Numquam illum iste dolores velit nisi.",
                price: "60.00"
            },
        ]
    
        }
        }
}
</script>

<style scoped>
.heading2{
  font-family: 'Kaushan Script', cursive;
}
.heading1{
    font-family: 'Playball', cursive;
    color: #f25c6b;
}
.desc{
  font-family: 'Acme', sans-serif;
}
.para{
    font-family: 'Architects Daughter', cursive;
}
</style>