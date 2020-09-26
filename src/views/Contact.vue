<template>
  <div style="background: " class="">
    <ContactBanner />
          <v-row no-gutters>
            <v-col cols="12" md="12" sm="12">
                <v-card  class="mt-n8 grey lighten-5 mx-md-12 mx-2" elevation="10"  >
                  <infoimg />
                  <ContactSocial class="mt-8" />
                    <v-divider class="ma-md-8 ma-2"></v-divider>
                  <ContactInfo />
                </v-card>
            </v-col>
          </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import ContactBanner from '@/components/ContactBanner.vue'
import infoimg from '@/components/infoimg.vue'
import ContactSocial from '@/components/ContactSocial.vue'
import ContactInfo from '@/components/ContactInfo.vue'

export default {
  name: 'Home',
  components: {
    ContactBanner,
    infoimg,
    ContactSocial,
    ContactInfo,
  }
}
</script>
<style scoped>

</style>