<template>
    <v-container fluid class="mt-6">
        <v-row no-gutters>
            <v-col class="col-12 col-sm-6 col-md-6">
                <v-container >
                    <div class="text-center py-2 px-5" >
                    <v-avatar tile size="100">
                    <v-img src="../assets/img/green-tea.png"  ></v-img>
                    </v-avatar>
                    <h1  class="subheading" :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-3 ']">Tea Processing</h1>
                    <v-responsive class="mx-auto mb-8" width="56">
                      <v-divider class="pb-1" color="green"></v-divider>
                    </v-responsive>
                    <p class="para"> The Tea manufacturing process is an intricate one that begins with the pucking of good leaf-two leaves and a bud and results in the final tea leaf that you see. Ceylon Tea is manufactured predominantly using the orthodox tea manufacturingprocess that has been practised for over a century.</p>
                    </div>
                </v-container>
          </v-col>
             <v-col class="col-12 col-sm-6 col-md-6">
                 <v-row no-gutters>
                     <v-col class="col-6 col-md-6" v-for="(item,i) in items" :key="i">
                          <v-hover>
                         <template v-slot:default="{ hover }">
                         <v-img :src="item.src" height="200px" style="">
                              <v-expand-x-transition>
                             <v-overlay v-if="hover" color="green lighten-3" absolute opacity="0.8">
                                 <p class="black--text font-weight-bold con">{{item.pro}}</p>
                                 <v-divider color="green" class="pb-1"></v-divider>
                             </v-overlay>
                             </v-expand-x-transition>
                         </v-img>
                         </template>
                          </v-hover>
                     </v-col>
                     
                 </v-row>
             </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>

.subheading{
    font-family: 'Kaushan Script', cursive !important;
    
}
.para{
    font-family: 'Acme', sans-serif;
    font-size: 15px;
    font-weight: bold;
}
.con{
    font-family: 'Lexend Peta', sans-serif;
}

</style>

<script>
export default {
    data:()=>({
        items:[{
            src: require('../assets/img/13.webp'),pro:"Withering"
        },
        {
            src: require('../assets/img/tea-2.jpg'),pro:"Rolling"
        },
        {
            src: require('../assets/img/tea-1.jpg'),pro:"Fermention"
        },
        {
            src:require('../assets/img/banner-1.jpg'), pro:"Drying & Scrolling"
        }]
    })
}
</script>