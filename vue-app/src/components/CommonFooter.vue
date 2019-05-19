<template>
    <div class='footer'> 
        <ul class='footer-list' :style="{background:selectMenu.bg}">
           <li v-for="(obj,index) in menu" :key="index"  @click="$emit('change',index)" >
              <router-link :to='obj.path' >{{obj.name}}</router-link>
            </li>
           
        </ul>

    </div>
</template>

<script>
    export default {
        props:[
            "menu","selectMenu"
        ]
    }
</script>

<style lang="css" scoped>
 .footer{
     height: 1rem;
   
     line-height: 1rem;
     position: fixed;   /*固定定位，脱离文档流，大小为内容大小 */
     color: white;
     bottom: 0px;
     width: 100%;
 }
.footer-list{
    display: flex;

}
.footer-list li{
    flex: 1;
    text-align: center;
}
.footer-list a{
    color:black;
}
.footer-list a.router-link-active{
    color:white;
}
</style>