<template>
  <div class="wrapper row3">
    <main class="container clear"> 
      <h2 class="sectiontitle">맛집 상세보기</h2>
      <table class="table">
        <tr>
          <td width="30%" class="text-center" rowspan="8">
            <img :src="'https://www.menupan.com'+food_detail.poster" style="width: 300px;height: 350px;">
          </td>
          <td colspan="2">
            <h3>{{ food_detail.name }}&nbsp;<span style="color:orange">{{ food_detail.score }}</span></h3>
          </td>
        </tr>
        <tr>
          <th style="color:gray" width="20%">주소</th>
          <td width="50%">{{ food_detail.address }}</td>
        </tr>
        <tr>
          <th style="color:gray" width="20%">전화</th>
          <td width="50%">{{ food_detail.phone }}</td>
        </tr>
        <tr>
          <th style="color:gray" width="20%">음식종류</th>
          <td width="50%">{{ food_detail.type }}</td>
        </tr>
        <tr>
          <th style="color:gray" width="20%">가격대</th>
          <td width="50%">{{ food_detail.price }}</td>
        </tr>
        <tr>
          <th style="color:gray" width="20%">주차</th>
          <td width="50%">{{ food_detail.parking }}</td>
        </tr>
        <tr>
          <th style="color:gray" width="20%">영업시간</th>
          <td width="50%">{{ food_detail.time }}</td>
        </tr>
        <tr>
          <th style="color:gray" width="20%">테마</th>
          <td width="50%">{{ food_detail.theme }}</td>
        </tr>
        <tr>
          <td colspan="3" class="text-right inline" >
            <button class="btn-sm btn-success">교통상황</button>
            <button class="btn-sm btn-warning">맛집통계</button>
            <button class="btn-sm btn-info" @click="go()">목록</button>
          </td>
        </tr>
      </table>
    </main>
  </div>
</template>
<script>
import axios from 'axios';
export default{

   data(){
     return {
       fno:0,
       food_detail:{}
     }
   },
   created(){
     this.fno=this.$route.params.fno
   },
   mounted(){
    /*
        created = mounted = updated = destoryed => CallBack (자동 생성)
          |          |         |          |
                                       화면이 변경된 경우 
                             데이터가 수정이 된 경우
         Vue생성    브라우저에 HTML이 구현된 샹태

         라우터에서 화면 이동시 데이터를 전송 
         router 
           => path:'/food/detail/:fno' getParameter("fno")
           => link 
           <router-link :to="{name:'FoodDetailView',params:{fno:f.fno,....}}">

           => Vue vs React 
           => 가상돔
           => Vue의 특징 
           => MVVM구조 

    */
     axios.get('http://127.0.0.1:8000/web/food/detail_vue/',{
        params:{
          fno:this.fno
        }
     }).then(res=>{
        console.log(res.data)
        this.food_detail=res.data
     }).catch(error=>{
        console.log(error)
     })
   },
   methods:{
      go(){
        location.href="/food"
      }
   }
}
</script>


