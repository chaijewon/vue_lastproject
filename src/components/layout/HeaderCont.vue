<template>
<div>
<div class="wrapper row1">
  <header id="header" class="clear"> 
   <div id="logo" class="fl_left">
      <h1><a href="index.html">Vue/Vuex</a></h1>
    </div>
    <div class="fl_right">
      <ul class="inline">
       
      </ul>
    </div>
    </header>
</div>
<div class="wrapper row2">
  <nav id="mainav" class="clear"> 
    <ul class="clear">
      <li class="active"><router-link to="/">Home</router-link></li>
      <li><a class="drop" href="#">맛집</a>
        <ul>
          <li><router-link to="/food">맛집 목록</router-link></li>
          <li><a href="pages/full-width.html">맛집 검색</a></li>
        </ul>
      </li>
      <li><a class="drop" href="#">레시피</a>
        <ul>
          <li><router-link to="/recipe">레시피 목록</router-link></li>
          <li><a href="pages/full-width.html">레시피 검색</a></li>
        </ul>
      </li>
      <li><a href="#">Youtube</a></li>
      <li><a href="#">통계(맛집)</a></li>
      <li><a href="#">통계(레시피)</a></li>
    </ul>
    </nav>
</div>
</div>
</template>