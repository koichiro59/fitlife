<template>
  <div class="container">
    <AppHeader/>
    <div class="subContainer">
      <div class="image-container1">
        <div class="logo-container">
          <div class="logo-text">
              <h2>あなたのフィットネス<br>
              あなたの方法で<br></h2>
          </div>
          <p class="subText">カスタマイズされたフィットネスプランの<br/>提供をします。</p>
        </div>
      </div>
      <div class="image-container2">
        <div class="logo-container">
          <div class="logo-text2">
            <h2>ミッション</h2>
          </div>
          <p class="subText2">健康と幸福のための変革</p>
        </div>
      </div>
      <div class="image-container3">
        <div class="logo-container">
          <div class="logo-text">
            <h2>事業内容</h2>
          </div>
          <ul class="subText">
            <li>FitLife Workouts</li>
            <li>FitLife Eats</li>
            <li>FitLife Challenges</li>
          </ul>
        </div>
      </div>
    </div>
    <AppFooter/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"

export default defineComponent({
  name: 'Top',
  components:{
    AppHeader,
    AppFooter
  }
});
</script>

<style scoped>
 .image-container1{
  position: relative;
  width: 100%;
  height: 500px;
  background-color: #f2f2f2; 
  display: flex;
  align-items: center;
 }
.image-container1::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background-image: url('../assets/images/home3.jpg');
  background-size: cover;
  background-position: center;
}
 .image-container2{
  position: relative;
  width: 100%;
  height: 500px;
  background-color: #f2f2f2; 
  display: flex;
  align-items: center;
 }
.image-container2::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-image: url('../assets/images/home2.jpg');
  background-size: cover;
  background-position: center;
}
.image-container3{
  position: relative;
  width: 100%;
  height: 500px;
  background-color: #f2f2f2; 
  display: flex;
  align-items: center;
}
.image-container3::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background-image: url('../assets/images/facility.jpg');
  background-size: cover;
  background-position: center;
}
.logo-text{
  font-size: 30px;
  padding: 10px;
  margin-left: 40px;
}
.logo-text2{
  font-size: 30px;
  padding: 10px;
  margin-left: 820px;
}
.subText{
  font-size: 20px;
  padding: 10px;
  margin-top: 20px;
  margin-left: 40px;
}
.subText2{
  font-size: 20px;
  padding: 10px;
  margin-top: 20px;
  margin-left: 820px;
}

</style>
