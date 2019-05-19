<template>
    <div>
      <img v-for="(obj,idx) in photoList "  :key="idx"  :src="obj.src" alt=""/>
    </div>
</template>

<script>
import axios from "axios";
    export default {
        data(){
            return{
            photoList:[]
            }
        },

        created()
        {
            axios.get('/data/photodata.json')
            .then((result)=>{

             this.photoList=result.data.photoData;

            })
           


        }
        
    }
</script>

<style lang="css" scoped>
img{

    width: 50%;
}

</style>