<template>
  <div>
      <v-img src="../assets/img/back3.jpg" aspect-ratio="3.3" gradient="to top right, rgba(0,0,0,.5), rgba(0,0,0,.8)">
           <v-layout row align-center justify-center class="mx-4">
                <v-col cols="12" md="8" sm="12" >
                    <div  flat align="center" justify="center" style="" >
                        <span
                        :class="[$vuetify.breakpoint.smAndDown ? 'display-3' : 'display-1']"
                        class="font-weight-black"
                    ><p style="color:silver;font-family: 'Playball', cursive;" :class="{'mt-4': $vuetify.breakpoint.smAndDown, 'mt-15': $vuetify.breakpoint.mdAndUp}">Contact Us</p></span>
                        <v-col>
                            <br>
                        <v-btn dark text outlined rounded="" class="mt-n4 btn hidden-sm-and-down" >
                            Home <v-icon>mdi-chevron-right</v-icon> Contact Us
                        </v-btn>
                        </v-col>
                    </div>
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
           </v-layout>
      </v-img>
  </div>
</template>

<script>
export default {

}
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
    max-height: 50px;
    max-width: 40px;
    min-height:30px;
    min-width:20px;
    border: 2px solid silver;
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
    border: 1px solid silver;
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