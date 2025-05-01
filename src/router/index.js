import HomeView from "@/views/HomeView.vue"
import FoodView from "@/views/FoodView.vue"
import RecipeView from "@/views/RecipeView.vue"
import {createRouter,createWebHistory} from 'vue-router'
import FoodDetailView from "@/views/FoodDetailView.vue"
import RecipeDetailView from "@/views/RecipeDetailView.vue"

const routes=[
  {
    path:"/",
    name:"home",
    component:HomeView
  },
  {
    path:"/food",
    name:"food",
    component:FoodView
  },
  {
    path:"/recipe",
    name:"recipe",
    component:RecipeView
  },
  {
    path:'/food/detail/:fno',
    name:'FoodDetailView',
    component:FoodDetailView
  },
  {
    path:'/recipe/detail/:no',
    name:'RecipeDetailView',
    component:RecipeDetailView
  }

]
const router=createRouter({
  history:createWebHistory(process.env.BASE_URL),
  routes
})
export default router