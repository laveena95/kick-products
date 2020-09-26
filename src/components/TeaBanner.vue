<template>
  <div class="banner">
    <v-carousel
      cycle
      height="auto"
      hide-delimiter-background
      hide-delimiters
      :show-arrows="false"
      delimiter-icon="mdi-minus"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :src="item.src"
        gradient="to top right, rgba(0,0,0,.5), rgba(0,0,0,.8)"
        :key="i"
        max-height="400px"
       
      >
        <v-container fill-height>
          <v-row align="center" class="mx-auto" justify="center">
            <v-col class="col-12 col-md-12 text-center" tag="h1">
              <span
                :class="[$vuetify.breakpoint.smAndDown ? 'text-h5' : 'display-2']"
                class="font-weight-black "
              ><h1 style="color:silver;font-family: 'Playball', cursive;font-size: ;">Tea & Coffee </h1></span>
            </v-col>
            <v-col align="center" justify="center"><br>
               <v-btn dark text outlined rounded="" class="mt-n4 btn hidden-sm-and-down" >
                    Home <v-icon>mdi-chevron-right</v-icon> Our Tea
                </v-btn>
            </v-col>
             <v-col cols="12" >
                    <a href="/">
                        <div class="scroll hidden-sm-and-down"></div>
                    </a>
                </v-col>
                 <v-col cols="12" >
                    <a href="/">
                        <div class="scrollMobile hidden-md-and-up"></div>
                    </a>
                </v-col>
          </v-row>
        </v-container>
      </v-carousel-item>
    </v-carousel>
    
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      items: [
        {
          src: require('../assets/img/banner-2.jpg'),
          title: "Welcome To",
          subtitle: "Our Resturent"
        },
        {
          src: require('../assets/img/tea-2.jpg'),
          title: "The Khan",
          subtitle: "Delicious Specialities"
        },
        {
          src: require('../assets/img/tea-1.jpg'),
          title: "The khan",
          subtitle: "Nutritious & Tasty"
        }
      ]
    };
  }
};
</script>

<style scopped>
.heading{
    color: ivory;
    font-size: 30px;
}
.v-btn.btn{
    text-transform:capitalize;
   font-family: 'Lexend Peta', sans-serif;
    font-size:15px;
    color:silver;
}
.scroll{
    height: 50px;
    width: 35px;
    border: 3px solid silver;
    position: absolute;
    bottom: 100px;
    left: 50%;
    border-radius: 40%;
    cursor: pointer;
}
.scrollMobile{
    min-height:33px;
    min-width:25px;
    border: 2px solid silver;
    position: absolute;
    bottom: 70px;
    left: 50%;
    border-radius: 40%;
    cursor: pointer;
}
.scroll::before,
.scroll::after{
    content: '';
    position: absolute;
    top: 20%;
    left: 50%;
    border: 3px solid silver;
    height: 15px;
    width: 15px;
    transform: translate(-50%, -100%) rotate(45deg);
    border-top: transparent;
    border-left: transparent;
    animation: scroll 1.5s ease-in-out infinite;
}
.scrollMobile::before,
.scrollMobile::after{
    content: '';
    position: absolute;
    top: 20%;
    left: 50%;
    border: 2px solid silver;
    height: 8px;
    width: 8px;
    transform: translate(-50%, -100%) rotate(45deg);
    border-top: transparent;
    border-left: transparent;
    animation: scroll 1.5s ease-in-out infinite;
}
.scroll::after{
    top: 20%;
    animation-delay: .3s;
}
.scrollMobile::after{
    top: 20%;
    animation-delay: .3s;
}
@keyframes scroll{
    0%{
        opacity: 0;
    }
    30%{
        opacity: 1;
    }
    60%{
        opacity: 1;
    }
    100%{
        opacity: 0;
        top: 85%;
    }
}
@keyframes scrollMobile{
    0%{
        opacity: 0;
    }
    30%{
        opacity: 1;
    }
    60%{
        opacity: 1;
    }
    100%{
        opacity: 0;
        top: 85%;
    }
}
</style>