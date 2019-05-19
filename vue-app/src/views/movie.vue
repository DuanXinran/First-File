<template>
  <div class="movie-container">
    <ul>
      <li v-for="(obj,index) in movieList" :key="index" class="movie-list"  @click="goDetail(obj.id)">
        <img class="movie-img" :src="obj.images.medium" />
        <div class="movie-text">
          <h4>{{obj.title}}</h4>
          <p>
            <span v-for="(cast,index) in obj.casts" :key="index">{{cast.name}}</span>
          </p>
        </div>
      </li>
    </ul>

    <div v-show="isShow" >
        <img class='loading' src="@/assets/loading.gif" alt="">
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      movieList: [],
      isShow:true,
      isBottom:false
    };
  },
  created() {
    //域名 协议 端口号均相同，否则为跨域 安全限制 不允许访问

  
      this.getMovie();
    window.onscroll=()=>{
        let scrollTop=document.documentElement.scrollTop;
        let clinetHeight=document.documentElement.clientHeight;
        let height=document.documentElement.scrollHeight;

        if(scrollTop+clinetHeight==height && !this.isBottom){
         this. getMovie();

        }
    }
  },
  methods:{
     getMovie(){
          this.isShow = true;
           axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?city=广州&start='+this.movieList.length+'&count=10')
   //axios.get('/data/movie1.json?start='+this.movieList.length+'&count=10')
  // axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?city=北京&start='+this.movieList.length+'&count=10')
  //axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/top250?start='+this.movieList.length+'&count=10')
   .then((result) => {
     this.isShow = false;
                    this.movieList = [...this.movieList,...result.data.subjects];
                    console.log(this.movieList.length ,result.data.subjects.total);
                    if(this.movieList.length == result.data.total){
                        this.isBottom = true;
                    }
     
    });
      },
      goDetail(id){
        this.$router.push("/moviedetail/"+id);

      }



  }
};
</script>

<style lang="css" scoped>
.movie-container {
  padding: 0 0.2rem;
}
.movie-list {
  display: flex;
  border-bottom: 1px solid #000;
  padding: 0.2rem 0;
}
.movie-img {
  width: 100px;
  height: 150px;
  margin-right: 0.2rem;
}
.movie-text {
  flex: 1;
}
.loading{
    position: fixed;
    left: 50%;
    top:50%;
    transform:translate(-50%,-50%);
    background: rgba(0,0,0,0.5);
}
</style>