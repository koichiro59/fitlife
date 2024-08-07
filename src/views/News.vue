<template>
    <div class="container">
        <AppHeader/>
            <div class="subcontainer">
                <h1 class="title">お知らせ</h1>
                <ul class="news-container">
                    <li class="news-item">
                        <time>2024.08.07</time>
                        <div class="detail-container">
                            <div class="news-text">サイトがリニューアルしました</div>
                            <button class="detail-btn">＞</button>
                        </div>
                    </li>
                    <li>
                        <time>2024.07.31</time>
                        <div class="detail-container">
                            <div class="news-text">サイトの制作が開始されました</div>
                            <button class="detail-btn">＞</button>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="blank"></div>
        <AppFooter/>
    </div>
</template>

<script>
import {defineComponent} from "vue"
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"

export default defineComponent({
    name:"Contact",
    components:{
        AppHeader,
        AppFooter
  }
})

{/* document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    boxes.forEach(box => {
        observer.observe(box);
    });
});
*/}
</script>

<style scoped>
.subcontainer{
    margin: 0 100px;
}
.news-container{
    list-style: none;
    padding: 0;
    margin: 0;
}
.news-container a{
    text-decoration: none;
}
.news-container time{
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
    border-bottom: #333333 solid 1px;
}
.detail-btn{
    border-radius: 50%;
    width: 30px;
    height: 30px;
    border: none;
    background: #66ff66;
    color: #fff;
    margin-left: 300px;
    font-size: 20px;
}
.news-text{
    font-size: 20px;
    margin-left: 30px;
    display: inline;
}
.detail-container{
    padding: 15px;
    border-bottom: solid #333333 1px;
    margin-bottom: 10px;
}
.blank{
    height: 200px;
}
/* .box {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
    background-color: #fff;
    height: 150px;
    margin: 20px 0;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.box.visible {
    opacity: 1;
    transform: translateY(0);
} */
</style>