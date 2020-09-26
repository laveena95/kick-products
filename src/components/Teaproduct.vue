<template>
  <v-container fluid>
    <v-row>
      <v-col class="col-12 col-md-6 mx-auto">
        <div class="text-center font-weight-bold mt-7">
          <v-avatar tile size="100">
                    <v-img src="../assets/img/green-tea-1.png"  ></v-img>
                    </v-avatar>
          <h1  class="subheading" :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-3 ']">Kick Tea Assortment</h1>
          <p
            class="grey--text para"
          >A quiet moment with a cup of TEA always brings things into perspective!..</p>
        </div>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col class="col-12 col-md-6 grey lighten-4 px-5">
        <v-row>
          <v-col class="col-12 col-md-6">
            <v-img src="../assets/img/gt2.jpeg" contain></v-img>
            <div class="text-center mt-5" >
              <p class="con">Kick Products</p>
              <h2 class="font-weight-black mt-n4 para">Green Tea</h2>
              <p class="para">Launching soon</p>
              <v-icon right dark class="mx-1" color="orange" small>mdi-star</v-icon>
              <v-icon right dark class="mx-1" color="orange" small>mdi-star</v-icon>
              <v-icon right dark class="mx-1" color="orange" small>mdi-star</v-icon>
              <v-icon right dark class="mx-1" color="orange" small>mdi-star</v-icon>
              <v-icon right dark class="mx-1" color="orange" small>mdi-star</v-icon>
            </div>
          </v-col>
          <v-col class="col-12 col-md-6">
            <v-img src="../assets/img/gt.jpg" style="" contain aspect-ratio="1"></v-img>
            <div class="text-center mt-5">
              <p class="con">Kick Products</p>
              <h2 class="font-weight-black mt-n4 para">BOP Special Tea</h2>
              <p class="con">1 Kg</p>
              <p class="para">Rs. 1200.00</p>
              <v-icon right dark class="mx-1" color="orange" small>mdi-star</v-icon>
              <v-icon right dark class="mx-1" color="orange" small>mdi-star</v-icon>
              <v-icon right dark class="mx-1" color="orange" small>mdi-star</v-icon>
              <v-icon right dark class="mx-1" color="orange" small>mdi-star</v-icon>
              <v-icon right dark class="mx-1" color="orange" small>mdi-star</v-icon>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="col-12 col-md-6 col-sm-12">
        <v-img
          src="../assets/img/tea-2.jpg"
          gradient="to top right, rgba(0,0,0,.8), rgba(0,0,0,.8)"
          height="100%"
        >
          <v-container class=""  :class="{'pa-4': $vuetify.breakpoint.smAndDown, 'pa-16': $vuetify.breakpoint.mdAndUp}">
            <div class="text-center">
              <v-card class="white--text text-center pa-5" tile :class="[$vuetify.breakpoint.smAndDown ? 'border2' : 'border']">
             
           <h1 class="con">Packing Process</h1>
            <v-responsive class="mx-auto mb-8" width="56">
            <v-divider class="pb-1 mt-4" color="#eb6057"></v-divider>
          </v-responsive>
          <p class="para font-weight-light">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ea, illum aspernatur eum ex dicta est dolores harum sit nesciunt tenetur quod in libero corporis debitis facere aut veniam consequuntur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis porro doloribus in cum eius quidem! Nihil reiciendis aperiam dolore similique fugiat, rem aliquid iusto? Numquam illum iste dolores velit nisi.
          </p>
                </v-card>
           
            </div>
          </v-container>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>
<style  scoped>
.border{
  border-style: solid;
  border-color:rgba(255,255,255,.5);
  border-width: 10px;
  background-color: transparent;
}
.border2{
  border-style: solid;
  border-color:rgba(255,255,255,.5);
  border-width: 5px;
  background-color: transparent;
}
.subheading{
    font-family: 'Kaushan Script', cursive !important;
    font-size: 50px;
    color:#eb6057;
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