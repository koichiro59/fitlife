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
          <router-link to="/about" >
            <div class="homelink1">
              <button class="pulldown1">＞</button><a href="/about" class="a1">私たちについて</a>
            </div>
          </router-link>
        </div>
      </div>
      <div class="image-container3">
        <div class="logo-container">
          <div class="logo-text">
            <h2>事業内容</h2>
          </div>
            <p class="subText">FitLife Workouts</p>
            <p class="subText">FitLife Eats</p>
            <p class="subText">FitLife Challenges</p>
            <router-link to="/services">
              <div class="homelink2">
                <button class="pulldown2">＞</button><a href="/services" class="a2">事業一覧</a>
              </div>
            </router-link>
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

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.logo-text, .subText');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.logo-text2, .subText2');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => {
        observer.observe(element);
    });
});
</script>

<style scoped>
body{
  text-decoration: none;
}
.image-container1 {
    position: relative;
    width: 100%;
    height: 500px;
    background-color: #f2f2f2;
    overflow: hidden; /* Ensure the pseudo-element does not overflow */
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
    background-position: calc(50% - 20px) ;
    transition: transform 0.5s ease;
    transform-origin:left center; /* Ensure the image expands from the right edge */
}
.image-container1:hover::before {
    transform: scale(1.2);
    transform-origin: left center; /* Ensure the image expands from the right edge */
}
 .image-container2{
  position: relative;
  width: 100%;
  height: 500px;
  background-color: #f2f2f2; 
  overflow: hidden; /* Ensure the pseudo-element does not overflow */
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
  background-position: calc(50% - 20px) ;
  transition: transform 0.5s ease;
  transform-origin:right center; /* Ensure the image expands from the right edge */
}
.image-container2:hover::before {
    transform: scale(1.2);
    transform-origin: right center; /* Ensure the image expands from the right edge */
}
.image-container3{
  position: relative;
  width: 100%;
  height: 500px;
  background-color: #f2f2f2; 
  overflow: hidden; /* Ensure the pseudo-element does not overflow */
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
  background-position: calc(50% - 20px) ;
  transition: transform 0.5s ease;
  transform-origin:left center; /* Ensure the image expands from the right edge */
}
.image-container3:hover::before {
    transform: scale(1.2);
    transform-origin: left center; /* Ensure the image expands from the right edge */
}
.logo-text{
  font-size: 30px;
  padding: 10px;
  margin-top:70px;
  margin-left: 40px;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}
.logo-text2{
  font-size: 30px;
  padding: 10px;
  margin-top: 70px;
  margin-left: 820px;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}
.subText{
  font-size: 24px;
  padding: 10px;
  margin-top: -10px;
  margin-left: 40px;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}
.subText2{
  font-size: 24px;
  padding: 10px;
  margin-top: -10px;
  margin-left: 820px;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}
.logo-text.visible, .subText.visible {
    opacity: 1;
    transform: translateY(0);
}
.logo-text2.visible, .subText2.visible {
    opacity: 1;
    transform: translateY(0);
}
.homelink1{
  font-size: 24px;
  margin-left: 830px;
  color: #fb9e00;
}
.homelink2{
  font-size: 24px;
  margin-left: 50px;
  color: #66ff66;
}
.pulldown1{
  border-radius: 50%;
  border: none;
  background: #fb9e00;
  color: #fff;
      font-size: 20px;
}
.pulldown2{
  border-radius: 50%;
  border: none;
  background: #66ff66;
  color: #fff;
      font-size: 20px;
}
.a1{
  text-decoration: none;
  color: #fb9e00;
}
.a2{
  text-decoration: none;
  color: #66ff66;;
}
a{
  display: inline-block;
  text-decoration: none;
}
</style>
