<template>
  <v-container>
    <v-row>
      <v-col class="col-12 col-sm-4 col-md-4" v-for="(item,i) in items " :key="i">
          <v-card >
        <v-hover>
          <template v-slot:default="{ hover }" >
            <v-img :src="item.img" height="400px" class="img-hover-zoom" style="border:2px solid silver">
              <v-fade-transition>
                <v-overlay v-if="hover" absolute color="black" opacity=".7">
                  <div class="text-center pa-4">
                    <p class="font-weight-thin con">{{item.title}}</p>
                    <h1 class="mt-n5 subheading">{{item.sub}}</h1>
                    <v-responsive class="mx-auto mb-8" width="56">
                      <v-divider class="pb-1" color="green"></v-divider>
                    </v-responsive>
                    <p class="para">{{item.dec}}</p>
                  </div>
                </v-overlay>
              </v-fade-transition>
            </v-img>
          </template>
        </v-hover>
          </v-card>
      </v-col>

     
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      overlay: false,
      items:[
          {img: require('../assets/img/h-3.jpg'),title:"Automatic",sub:"Leaf Haverting", dec:"Donec sed lorem dapibus, posuere dui eget, molestie. Vivamus aliquam gravida.Donec sed lorem dapibus, posuere dui eget, molestie. Vivamus aliquam gravida."},
          {img:require('../assets/img/H-1.jpg'),title:"Manual",sub:"Plucking Tea", dec:"Donec sed lorem dapibus, posuere dui eget, molestie. Vivamus aliquam gravida.Donec sed lorem dapibus, posuere dui eget, molestie. Vivamus aliquam gravida."},
          {img:require('../assets/img/h-4.jpg'),title:"Natural",sub:"Processing Tea", dec:"Donec sed lorem dapibus, posuere dui eget, molestie. Vivamus aliquam gravida.Donec sed lorem dapibus, posuere dui eget, molestie. Vivamus aliquam gravida."}
      ]
    };
  }
};
</script>

<style scoped>
.img-hover-zoom  {
  transition: transform .5s, filter 1.5s ease-in-out;
 
}


.img-hover-zoom:hover  {
 
  transform: scale(1.10);
}

.subheading{
    font-family: 'Kaushan Script', cursive;
    font-size: 50px;
    color: silver;
}
.para{
    font-family: 'Acme', sans-serif;
    font-size: 15px;
    font-weight: bold;
    color: silver;
}
.con{
    font-family: 'Lexend Peta', sans-serif;
    color: silver;
}

</style>