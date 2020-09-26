<template>
  <div>
      <v-img src="../assets/img/b5.jpg" aspect-ratio="2.7">
            <v-layout row align-center justify-center>
                 <v-col cols="12" md="12" sm="12">
                    <div class="mt-6" flat align="center" justify="center" >
                        <v-card-text>
                            <v-card-subtitle class="font-weight-bold subheading" style="color:#eb6057">Services</v-card-subtitle>
                            <v-card-title primary-title class="justify-center mt-n4" style="font-family: 'Architects Daughter', cursive;font-size:35px;">
                                <hr style="width:40px"><h2 class="mx-4" > KICK PRODUCTS </h2><hr style="width:40px">
                            </v-card-title>
                        </v-card-text>
                    </div>
                </v-col> 
                <v-container>
                  <v-row no-gutters>
                     <v-col cols="12" md="4" sm="12" v-for="item in items" :key="item.id">
                            <v-card class="ma-3" width="350" shaped="" elevation="10" >
                                <div class="icons text-center mt-n2">
                                    <v-btn color="error" class=" mt-n4" fab large dark>
                                        <v-icon >{{ item.icon }}</v-icon>
                                    </v-btn>
                                </div>
                                <v-card-title class="heading font-weight-bold justify-center">{{ item.title }}</v-card-title>
                                <v-card-text class="justify-center body-1 font-weight-bold text-center" ><p style="font-family: 'Acme', sans-serif;">{{ item.text }}</p></v-card-text>
                            </v-card>
                        </v-col>
                  </v-row>
                </v-container> 
            </v-layout>
      </v-img>
  </div>
</template>

<script>
export default {
    data: () => ({
      items: [
          {
              id: '1',
              icon: 'fas fa-clock',
              title: "  24/7 Customer Service",
              text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor "
          },
           {
              id: '2',
              icon: 'fas fa-paper-plane',
              title: "FAST DELIVER",
              text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor "
          },
           {
              id: '3',
              icon: 'fas fa-box',
              title: "FREE PACKAGING",
              text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor "
          },
      ]})

}
</script>

<style  scoped>
.heading{
 font-family: 'Red Rose', cursive;
 font-size: 18px;
 color:#eb6057;
}
.subheading{
    font-family: 'Kaushan Script', cursive;
    font-size: 50px;
}
.v-card:hover{
    border: 5px solid #e86f7b;
    color:  #e86f7b;
}
.icons :hover{
    transform: scale(1.2);
    transition: 0.4 linear;
}
</style>