<template>
    <div>
<swiper :imgs="imgs"> </swiper>
    </div>
</template>

<script>

import Swiper from "@/components/Swiper.vue";
    export default {
        data(){
            return{
                    imgs:[
                    "https://img3.doubanio.com/lpic/s24468373.jpg",
                    "https://img3.doubanio.com/lpic/s27102925.jpg",
                    "https://img3.doubanio.com/lpic/s6989253.jpg"
                ]
            }
        },
        
        components:{
            Swiper
        }
    }
</script>

<style lang="css" scoped>

</style>