<template>
  <div class="wrapper row3">
    <main class="container clear"> 
     <table class="table">
             <tr>
                 <td colspan="3" class="text-center">
                     <img :src="detail.poster"
                          style="width:800px;height:250px">
                 </td>
             </tr>
             <tr>
                 <td colspan="3" class="text-center">
                     <h3>{{detail.title}}</h3>
                 </td>
             </tr>
             <tr>
                 <td colspan="3" class="text-center">
                     {{detail.content}}
                 </td>
             </tr>
             <tr>
                 <td class="text-center">{{detail.info1}}</td>
                 <td class="text-center">{{detail.info2}}</td>
                 <td class="text-center">{{detail.info3}}</td>
             </tr>
         </table>
          <table class="table">
              <tr>
                  <td><h3>[재료]</h3></td>
              </tr>
              <tr>
                  <td>
                      <ul>
                          
                          <li v-for="d,key in datas" :key="key">{{d}}</li>
                         
                      </ul>
                  </td>
              </tr>
          </table>
          <table class="table">
            
              <tr>
                  <td>
                      <table class="table" v-for="m,idx,key in make" :key="key">
                        <tr>
                          <td width="80%" class="text-left">
                            {{m}}
                          </td>
                          <td width="20%" class="text-right">
                            <img :src="posters[idx]" style="width: 120px;height: 100px">
                          </td>
                        </tr>
                      </table>
                  </td>
              </tr>
          </table>
          <table class="table">
              <tr>
                  <td colspan="2">
                      <h3>쉐프정보</h3>
                  </td>
              </tr>
              <tr>
                  <td width="20%" rowspan="2">
                      <img :src="detail.chef_poster" style="width:100px;height:60px">

                  </td>
                  <td width="80%">
                      {{detail.chef}}
                  </td>
              </tr>
              <tr>
                  <td width="80%">
                      {{detail.chef_profile}}
                  </td>
              </tr>
          </table>
        </main>
      </div>
</template>
<script>
import axios from 'axios';
export default {
  data(){
    return {
      no:0,
      detail:{},
      make:[],
      posters:[],
      datas:[]
    }
  },
  created(){
    this.no=this.$route.params.no
  },
  mounted(){
     axios.get('http://127.0.0.1:8000/web/recipe/detail_vue/',{
      params:{
        no:this.no
      }
     }).then(res=>{
        this.detail=res.data.detail
        this.make=res.data.make
        this.posters=res.data.posters
        this.datas=res.data.data
     }).catch(error=>{
         console.log(error)
     })
  }
}
</script>
