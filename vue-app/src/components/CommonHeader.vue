<template>
    <div class='header' :style="{background:selectMenu.bg}"> 
        <div> 
            <span class='header-btn'>首页 </span>
            <span class='header-title'>{{selectMenu.name}}</span>
        </div>

    </div>
</template>

<script>
    export default {
        props:['selectMenu']
    }
</script>

<style lang="css" scoped>
 .header{
     height: 1rem;
     background-color: red   ;
     line-height: 1rem;
      position: fixed;   /*固定定位，脱离文档流，大小为内容大小 */
     color: white;
     top: 0px;
     width: 100%;
 }

 .header-btn {
     
    margin-left: 25px;
 }

 .header-title{
position: absolute;
left: 50%;
top:50%;
transform: translate(-50%,-50%);
 }



</style>