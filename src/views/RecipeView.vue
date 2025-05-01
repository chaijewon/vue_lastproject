<template>
  <div class="wrapper row3">
  <main class="container clear"> 
   <div class="content"> 
     <div id="gallery">
        <figure>
          <header class="heading">레시피 목록</header>
          <ul class="nospace clear">
            <li v-for="f,idx,key in recipe_list" :class="idx%4===0?'one_quarter first':'one_quarter'" :key="key">
              <router-link to="">
                <img :src="f.poster" :title="f.title">
              </router-link></li>
          </ul>
          <figcaption></figcaption>
        </figure>
      </div>
      <nav class="pagination">
        <ul>
          <li v-if="startPage>1"><a class="link" @click="prev()">&laquo; Previous</a></li>
          <li v-for="i,key in range(startPage,endPage)" :key="key"><a class="link" @click="pageChange(i)">{{i}}</a></li>
          <li v-if="endPage<totalpage"><a class="link" @click="next()">Next &raquo;</a></li>
        </ul>
      </nav>
      </div>
    <div class="clear"></div>
  </main>
</div>
</template>
<script>

export default({
  data(){
    return {
      recipe_list:[],
      curpage:1,
      totalpage:0,
      startPage:0,
      endPage:0
    }
  },
  mounted(){
     this.dataRecv()
  },
  methods:{
    prev(){
       this.curpage=this.startPage-1
       this.dataRecv()
    },
    next(){
       this.curpage=this.endPage+1
       this.dataRecv()
    },
    pageChange(page){
      this.curpage=page
      this.dataRecv()
    },
    range(start,end){
        let arr=[]
        let len=end-start
        for(let i=0;i<=len;i++)
        {
          arr[i]=start
          start++
        }
        return arr
    },
    async dataRecv(){
      try{
           const response=await fetch(
             `http://127.0.0.1:8000/web/recipe/list_vue/?page=${this.curpage}`
           )
           const result=await response.json()
           console.log(result)
           this.recipe_list=result.rd
           this.curpage=result.curpage
           this.totalpage=result.totalpage
           this.startPage=result.startPage
           this.endPage=result.endPage
      }catch(error){
        console.log(error)
      }
    }
  }
})
</script>
<style scoped>
a.link:hover{
  cursor: pointer;
}
</style>
