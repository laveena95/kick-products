<template>
  <div style="background: " class="">
         <AboutBanner/>
           <v-row no-gutters> 
            <v-col cols="12" md="12" sm="12">
                <v-card  class="mt-n8 grey lighten-5 mx-md-12 mx-2" elevation="10"  >
                      <infoimg />
                      <intro />
                      <v-divider class="ma-md-8 ma-2"></v-divider>
                </v-card>
            </v-col>
          </v-row>
  </div>
</template>

<script>
import AboutBanner from '@/components/AboutBanner.vue';
import infoimg from '@/components/infoimg.vue'
import intro from '@/components/intro.vue'
export default {
    name:'AboutUs',
     components: {
         AboutBanner,
         infoimg,
         intro,
  }

}
</script>

<style>

</style>