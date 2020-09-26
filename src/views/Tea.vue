<template>
  <div style="background: " class="">
         <TeaBanner />
           <v-row no-gutters>
            <v-col cols="12" md="12" sm="12">
                <v-card  class="mt-n8 grey lighten-5 mx-md-12 mx-2" elevation="10"  >
                      <TeaImg /> <br><br>
                      <TeaQuality />
                      <TeaProcessing />
                       <v-divider class="ma-md-8 ma-2"></v-divider>
                      <Teaproduct />
                       <v-divider class="ma-md-8 ma-2"></v-divider>
                      <CoffeeProcessing />
                       <v-divider class="ma-md-8 ma-2"></v-divider>
                      <CoffeeProduct/>
                </v-card>
                <br><br>
            </v-col>
          </v-row>
  </div>
</template>

<script>

import TeaBanner from "@/components/TeaBanner.vue";
import TeaImg from '@/components/TeaImg.vue'
import Teaproduct from "@/components/Teaproduct.vue";
import TeaProcessing from "@/components/TeaProcessing.vue";
import TeaQuality from "@/components/TeaQuality.vue";
import CoffeeProcessing from "@/components/CoffeeProcessing.vue";
import CoffeeProduct from "@/components/CoffeeProduct.vue";


export default {
  name: "Home",
  components: {
    TeaBanner,
    TeaImg,
    Teaproduct,
    TeaProcessing ,
    TeaQuality,
    CoffeeProcessing,
    CoffeeProduct

   
  }
};
</script>
