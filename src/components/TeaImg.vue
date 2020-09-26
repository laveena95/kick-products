<template>
    <div class=" infoimg">
        <v-card class="align-center justify-content text-center mx-auto mt-n8 grey lighten-5" elevation="" flat width="70%">
            <v-row no-gutters class="">
             <v-col cols="12" md="3" sm="6" class="align-center justify-content text-center" v-for="item in images" :key="item.id">
                  <v-card style="background-color:black; border-radius:" class="my-2 mx-6" elevation="10"> 
                    <div style="border-radius:50%">
                       <v-avatar size="120" class="hidden-sm-and-down ma-4 align-center justify-content">
                        <v-img :src="item.src"  ></v-img>
                    </v-avatar>
                    </div>
                  </v-card>
              </v-col>
             <v-col cols="6" sm="6" class="hidden-md-and-up">
              <v-card style="background-color:black; border-radius:" class="my-2 mx-2" elevation="0"> 
                    <div style="border-radius:50%">
                       <v-avatar size="70" class="hidden-md-and-up ma-4 align-center justify-content">
                        <v-img src="../assets/img/banner-1.jpg"></v-img>
                    </v-avatar>
                    </div>
              </v-card>
            </v-col>
            <v-col cols="6" sm="6" class="hidden-md-and-up">
              <v-card style="background-color:black; border-radius:" class="my-2 mx-2" elevation="0"> 
                    <div style="border-radius:50%">
                       <v-avatar size="70" class="hidden-md-and-up ma-4 align-center justify-content">
                        <v-img src="../assets/img/ct.jpg"></v-img>
                    </v-avatar>
                    </div>
              </v-card>
            </v-col>
        </v-row>
        </v-card>
    </div>
</template>
<style  scoped>

.infoimg{
   
    margin-top: -50px;
    height: 200px;
}

</style>
<script>
 export default {
    data () {
      return {
        images: [
          {
            src: require('../assets/img/ct.jpg'),
          },
          {
            src: require('../assets/img/cp-2.jpeg'),
          },
          {
            src: require('../assets/img/tea-2.jpg'),
          },
          {
            src: require('../assets/img/banner-1.jpg'),
          },
        ],
      }
    },
  }
</script>