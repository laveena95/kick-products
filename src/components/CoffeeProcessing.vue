<template>
    <v-container fluid class="mt-6">
        <v-row no-gutters>
            <v-col class="col-12 col-sm-6 col-md-6">
                <v-container >
                    <div class="text-center py-2 px-5" >
                    <v-avatar tile size="130">
                    <v-img src="../assets/img/coffee.png"  ></v-img>
                    </v-avatar>
                    <h1  class="subheading" :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-3 ']">Coffee Processing</h1>
                    <v-responsive class="mx-auto mb-8" width="56">
                      <v-divider class="pb-1" color="brown"></v-divider>
                    </v-responsive>
                    <p class="para"> Coffee is the second most valuable commodity in the world, second only oil.Worldwide, people consume approximately 2 billion cups of coffee daily. Nutritionally, coffee is a good source of antioxidants. Studies have shown that coffee may lower the risk of type diabetes.</p>
                    </div>
                </v-container>
          </v-col>
             <v-col class="col-12 col-sm-6 col-md-6">
                 <v-row no-gutters>
                     <v-col class="col-6 col-md-6" v-for="(item,i) in items" :key="i">
                          <v-hover>
                         <template v-slot:default="{ hover }">
                         <v-img :src="item.src" height="200px">
                              <v-expand-x-transition>
                             <v-overlay v-if="hover" color="brown lighten-3" absolute opacity="0.8">
                                 <p class="black--text font-weight-bold con">{{item.pro}}</p>
                                 <v-divider color="brown" class="pb-1"></v-divider>
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
    font-size: 50px;
}
.para{
    font-family: 'Acme', sans-serif !important;
    font-size: 15px;
    font-weight: bold;
}
.con{
    font-family: 'Lexend Peta', sans-serif !important;
}

</style>

<script>
export default {
    data:()=>({
        items:[{
            src: require('../assets/img/coffee3.jpg'),pro:"Harvesting"
        },
        {
            src: require('../assets/img/coffee4.jpg'),pro:"Separation"
        },
        {
            src: require('../assets/img/coffee2.jpg'),pro:"Polishing"
        },
        {
            src:require('../assets/img/coffee1.jpg'), pro:"Roasting"
        }]
    })
}
</script>