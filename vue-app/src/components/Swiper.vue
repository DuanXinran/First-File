<template>
    <div id="container"  >
       

         <transition-group :name="name" tag="ul" class="swiper-box"  >
             <li class="swiper-item" v-for="(img,index) in imgs" :key="index" v-show="index==idx" >
                 <img :src="img"/>
                 </li>     
         </transition-group>
 <span id="prev" @click="selt()" >&lt;</span>
        <span id="next" @click="add()" >&gt;</span>
        
    </div>
</template>

<script>
    export default {
        props:['imgs'],
        data(){
            return{
                idx:0,
                name:"fade1"
            }
        },
        methods:{ 
            add(){
                this.idx++;
                this.name="fade1";
               
                 if(this.idx>=this.imgs.length){
                   this.idx=0;
                }
                
            },
            selt(){
                this.idx--;
                this.name="fade";
              
                   if(this.idx<0){
                    this.idx=this.imgs.length-1;
                }
             
            }
          
           
            
        },
             created() {

               let timer = setInterval(() => {
                this.idx++;
                 this.name="fade1";
                if(this.idx == this.imgs.length ){
                    this.idx = 0;
                }
            }, 3000);

        },
         computed:{
            
         }
    }
</script>

<style lang="css" scoped>
 
 #container{
     position: relative;
    overflow: hidden;
    height: 4rem;
 }



 #prev,#next{
            width: 20px;
            height: 20px;
            background: rgba(0,0,0,0.4);
            position: absolute;
            top:2rem;
            bottom: 5px;
            text-align: center;
            line-height: 20px;
            color:#fff;
            border-radius: 5px;
            cursor: pointer;
            transform: translateY(-50%);
        }
 #prev{      
            left: 2px;
         
        }
  #next{    
            right: 2px;
           
        }



.swiper-item{
    position: absolute; 
    left: 0px;
    top:0px;
    width: 100%;
    height: 4rem;
    
}

.swiper-item:first-child{
        display: block;
    }


.swiper-item img{
    width: 100%;
    height: 100%;

}

.fade-enter{
   transform: translateX(-100%);
}
.fade-enter-active{
    transition: transform 1s;
}
.fade-enter-to{
  transform: translateX(0);
}

.fade-leave{
 transform: translateX(0);
}
.fade-leave-active{
  transition: transform 1s;
}
.fade-leave-to{
  transform: translateX(100%);
}


.fade1-enter{
   transform: translateX(100%);
}
.fade1-enter-active{
    transition: transform 1s;
}
.fade1-enter-to{
  transform: translateX(0);
}

.fade1-leave{
 transform: translateX(0);
}
.fade1-leave-active{
  transition: transform 1s;
}
.fade1-leave-to{
  transform: translateX(-100%);
}



</style>