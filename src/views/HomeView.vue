<template>
  <div>
  <div class="wrapper row3">
  <div id="slider" class="clear"> 
   <div class="flexslider basicslider">
      <ul class="slides">
        <li><a href="#"><img class="radius-10" src="/images/demo/slides/back1.jpg" style="width:978px;height:400px"></a></li>
        <li><a href="#"><img class="radius-10" src="/images/demo/slides/back2.jpg" style="width:978px;height:400px"></a></li>
        <li><a href="#"><img class="radius-10" src="/images/demo/slides/back3.jpg" style="width:978px;height:400px"></a></li>
      </ul>
    </div>
   </div>
</div>
<div class="wrapper row3">
  <main class="container clear"> 
    
    <h2 class="sectiontitle">인기 맛집 Top 12</h2>
    <div class="flexslider carousel basiccarousel btmspace-80">
      <ul class="slides">
       
        <li>
          <figure>
            <img class="radius-10 btmspace-10" src="/images/demo/320x185.png" alt="">
            <figcaption><a href="#">Lorem Ipsum Dolor Sit Amet</a></figcaption>
          </figure>
        </li>
        
      </ul>
    </div>
    <h2 class="sectiontitle">인기 레시피 Top 12</h2>
    <div class="flexslider carousel basiccarousel btmspace-80">
      <ul class="slides">
       
        <li>
          <figure>
            <img class="radius-10 btmspace-10" src="/images/demo/320x185.png" alt="">
            <figcaption><a href="#">Lorem Ipsum Dolor Sit Amet</a></figcaption>
          </figure>
        </li>
        
      </ul>
    </div>
    <h2 class="sectiontitle">Youtube/Music</h2>
    <ul class="nospace group">
      <li class="one_half first">
        <article><img class="imgl radius-10" src="/images/demo/100x100.gif" alt="">
          <h6 class="heading"><a href="#">Lorem Ipsum Dolor</a></h6>
          <p>Aenean semper elementum tellus, ut placerat leo. Quisque vehicula, urna sit amet.</p>
        </article>
      </li>
      <li class="one_half">
        <article><img class="imgl radius-10" src="/images/demo/100x100.gif" alt="">
          <h6 class="heading"><a href="#">Lorem Ipsum Dolor</a></h6>
          <p>Aenean semper elementum tellus, ut placerat leo. Quisque vehicula, urna sit amet.</p>
        </article>
      </li>
    </ul>
    <div class="clear"></div>
  </main>
</div>
</div>
</template>
<script>
import axios from 'axios';
export default ({
  data(){
    return {
      recipe_list:[],
      food_list:[]
    }
  },
  mounted(){
     this.dataRecv()
  },
  methods:{
      dataRecv(){
        axios.get('http://127.0.0.1:8000/web/')
        .then(res=>{
           console.log(res.data)
           this.recipe_list=res.data.rd
           this.food_list=res.data.fd
        }).catch(error=>{
           console.log(error.response)
        })
      }
  }
})
</script>
