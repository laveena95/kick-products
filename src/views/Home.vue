<template>
  <div style="background: " class="">
    <hero />
          <v-row no-gutters>
            <v-col cols="12" md="12" sm="12">
                <v-card  class="mt-n8 grey lighten-5 mx-md-12 mx-2" elevation="10"  >
                  <infoimg />
                  <intro />
                  <v-divider class="ma-md-8 ma-2"></v-divider>
                  <Gallery />
                  <v-divider class="ma-md-8 ma-2"></v-divider>
                   <product />
                   <v-divider class="ma-md-8 ma-2"></v-divider>
                   <TeaProcessing />
                  <v-divider class="ma-md-8 ma-2"></v-divider>
                </v-card>
            </v-col>
          </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import hero from '@/components/hero.vue'
import infoimg from '@/components/infoimg.vue'
import intro from '@/components/intro.vue'
import Gallery from '@/components/Gallery.vue'
import TeaProcessing from '@/components/TeaProcessing.vue'
import product from '@/components/product.vue'

export default {
  name: 'Home',
  components: {
    hero,
    infoimg,
    intro,
    Gallery,
    TeaProcessing,
    product,
  }
}
</script>
<style scoped>

</style>