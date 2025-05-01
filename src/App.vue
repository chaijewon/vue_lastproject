<template>
  <HeaderCont/>
  <router-view/>
  <FooterCont/>
</template>
<script>
import HeaderCont from './components/layout/HeaderCont.vue'
import FooterCont from './components/layout/FooterCont.vue'
export default{
  components:{
    HeaderCont,
    FooterCont
  }
}
</script>
<style scoped>
.link:hover{
  cursor: pointer;
}
</style>
