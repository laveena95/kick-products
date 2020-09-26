<template>
    <div  class="mx-auto col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <v-row class="mx-md-9 mx-0">
            <v-col cols="12" md="4">
                <v-img src="../assets/img/spice1.webp" aspect-ratio="0.7">
                    <div class="mx-6 my-6">
                        <h2 class="yellow--text text--darken-3" :class="[$vuetify.breakpoint.smAndDown ? '' : 'head']">The Flavour of Spices</h2>
                        <h6 class="" :class="[$vuetify.breakpoint.smAndDown ? 'text2' : 'text']">
                            50% flat offer<br/>
                            all products
                        </h6>
                        <v-btn outlined class="button" rounded large >Read more</v-btn>
                    </div>
                </v-img>
            </v-col>
            <v-col cols="12" md="8">
                <v-row no-gutters>
                    <v-col cols="12" md="5">
                        <div class="item">
                            <v-img src="../assets/img/spice2.webp" height="250" class="image">
                                <div class="overlay">
                                <div class="app"></div>
                                </div>
                                <v-card class="card mx-3 my-3">
                                <div class="mx-6 my-3">
                                        <h6 class="white--text font-weight-light" :class="[$vuetify.breakpoint.smAndDown ? 'pro2' : 'pro']">Cumin Seeds</h6>
                                        <v-btn outlined class="button mt-3" rounded small>Read more</v-btn>
                                    </div>
                                </v-card>
                            </v-img>
                        </div>
                    </v-col>
                    <v-col cols="12" md="7" class="pl-md-6 pl-0">
                        <div class="item mx-auto mt-sm-3 mt-0">
                            <v-img src="../assets/img/spice3.webp" height="250" >
                            <div class="overlay">
                                <div class="app"></div>
                                </div>
                                <v-card class="card2 mx-3 my-3 col-10 col-sm-10 col-md-5 col-lg-5 col-xl-5" :class="{'w-25': $vuetify.breakpoint.smAndDown, 'w-100': $vuetify.breakpoint.mdAndUp}">
                                    <div class="mx-4">
                                        <h6 class="white--text mx-1 font-weight-light" :class="[$vuetify.breakpoint.smAndDown ? 'pro2' : 'pro']" >Cardamom</h6>
                                        <v-btn outlined class="button mt-3" rounded small>Read more</v-btn>
                                    </div>
                                </v-card>
                            </v-img>
                        </div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" md="7">
                        <div class="item">
                            <v-img src="../assets/img/spice4.webp" height="250" class="image">
                                <div class="overlay">
                                <div class="app"></div>
                                </div>
                                <v-card class="card2 mx-3 my-3 col-10 col-sm-10 col-md-5 col-lg-5 col-xl-5">
                                    <div class="mx-4 ">
                                        <h6 class="white--text mx-2 font-weight-light" :class="[$vuetify.breakpoint.smAndDown ? 'pro2' : 'pro']">Coriander</h6>
                                        <v-btn outlined class="button mt-3" rounded small>Read more</v-btn>
                                    </div>
                                </v-card>
                            </v-img>
                        </div>
                    </v-col>
                    <v-col cols="12" md="5">
                        <div class="item">
                            <v-img src="../assets/img/spice5.webp" height="250" >
                            <div class="overlay">
                                <div class="app"></div>
                                </div>
                                <v-card class="card mx-3 my-3">
                                    <div class="mx-6 my-3">
                                        <h6 class="white--text font-weight-light" :class="[$vuetify.breakpoint.smAndDown ? 'pro2' : 'pro']">Nutmeg</h6>
                                        <v-btn outlined class="button mt-3" rounded small>Read more</v-btn>
                                    </div>
                                </v-card>
                            </v-img>
                        </div>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<style scoped>
.head {
    color: #f4b323;
    font-family: Spicy Rice;
    font-size: 35px;
}
.text {
    color: #ffffff;
    text-transform: uppercase;
    font-family: 'Redressed', cursive;
    margin-bottom: 20px;
    font-weight: 300;
    line-height: normal;
    font-size: 20px;
}
.text2 {
    color: #ffffff;
    text-transform: uppercase;
    font-family: 'Redressed', cursive;
    margin-bottom: 20px;
    font-weight: 200;
    line-height: normal;
    font-size: 15px;
}
.pro {
    font-family: 'Redressed', cursive;
    font-size:25px;  
}
.pro2 {
    font-family: 'Redressed', cursive;
    font-size:15px;  
}
.button {
    color:#ffffff;
    border: 2px solid #9f4103;
    font-family: 'Lexend Peta', sans-serif;
}
.button:hover {
    color: black;
    background-color: #f4b323;
    border: 0;
}
.item {
  position: relative;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(0,0,0);
    background-color: rgba(0,0,0, 0.4);
  overflow: hidden;
  width: 0;
  height: 100%;
  transition: .3s ease;
}

.item:hover .overlay {
  width: 100%;
  left: 0;
}

.app {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  white-space: nowrap;
}
.card{
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0, 0.8);
    height: 110px;
    position:absolute;
    bottom:0;
    right:0;
    color: white;
    width: 260px;
}
.card2{
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0, 0.8);
    height: 110px;
    position:absolute;
    bottom:0;
    right:0;
    color: white;

}
.image {
    align-content: center;
}
</style>