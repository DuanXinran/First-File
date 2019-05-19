<template>
  <div id="app">
    <common-header :selectMenu="selectMenu">
    </common-header>
    <div id='content'>
    <router-view> </router-view>
    </div>
    <common-footer :menu="menu" :selectMenu='selectMenu' @change="fn">
     
    </common-footer>
  </div>
</template>

<script>
import CommonHeader from '@/components/CommonHeader.vue';
import CommonFooter from '@/components/CommonFooter.vue';
  export default {
    data(){
      return{
        menu:[
          {
            name:"电影",
            path:"/movie",
            bg: "rgb(33, 165, 172)"
          },{
            name:"音乐",
            path:"/music",
            bg:" rgb(120, 184, 115)"           
           },{
            name:"书籍",
            path:"/book",
            bg:"rgb(177, 119, 211)"           
          },{
            name:"图片",
            path:"/photo",
            bg:"rgb(182, 117, 117)"           
          }

        ],
        selectMenu:{
            name:"电影",
            path:"/movie",
            bg:"rgb(33, 165, 172)"
        }
      };
    },
    components:{
      CommonHeader,
      CommonFooter
    },
    methods:{
      fn(index){
      this.selectMenu=this.menu[index];
    }
    },
    created(){
      this.menu.forEach((obj)=>{
        if(obj.path == this.$route.path){
          this.selectMenu = obj;

        }
      })
    }

  };
</script>

<style lang="css" scoped>
#content{
  margin: 1rem 0  1rem 0;

}
</style>