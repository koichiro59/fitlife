<template>
  <div class="container">
    <AppHeader/>
    <div class="subContainer">
        <h1 class="title">サービス</h1>
        <div class="serviceArea">
            <h2 class="subTitle">FitLife Workouts</h2>
            <div class="image-container1"></div>
            <p>個々のユーザーの目標に合わせたパーソナライズされたカスタムワークアウトプラン、ワークアウト動画や<br/>ガイドの提供、進捗トラッキングと目標設定機能、そしてトレーナーとのオンラインセッションを提供します。</p>
        </div>
        <div class="serviceArea">
            <h2 class="subTitle">FitLife Eats</h2>
            <div class="image-container2"></div>
            <p>ユーザーの健康状態や目標に基づくパーソナライズされたカスタム栄養プラン、食事の記録とカロリー計算機能、<br/>健康的なレシピの提案と調理動画、そして栄養士とのオンライン相談サービスを提供します。</p>
        </div>
        <div class="serviceArea">
            <h2 class="subTitle">FitLife Challenges</h2>
            <div class="image-container3"></div>
            <p>月間チャレンジや特定のフィットネスゴールに基づくチャレンジ、友達やコミュニティメンバーと競い合うグループ<br/>チャレンジ、リーダーボードでの進捗確認と競争、そしてチャレンジをクリアすることで得られるバッジやポイントを提供します。</p>
        </div>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
import {defineComponent} from "vue"
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"

export default defineComponent({
    name:"Services",
    components:{
        AppHeader,
        AppFooter
  }
})
</script>

<style scoped>
.subContainer{
  margin: 0 100px;
}
.subContainer p{
  font-size: 20px;
}
.title{
  font-size: 46px;
}
.subTitle{
  font-size: 36px;
  margin:50px 0px 20px 0;
}
.image-container1{
  background-image: url('../assets/images/facility2.jpg');
  background-size: cover; /* 画像を画面全体に広げる */
  background-position: center; /* 画像を中央に配置 */
  background-repeat: no-repeat; /* 画像の繰り返しを防ぐ */
  background-position: top;
  width: 1024px;
  height: 500px;
}
.image-container2{
  background-image: url('../assets/images/eat2.jpg');
  background-size: cover; /* 画像を画面全体に広げる */
  background-position: center; /* 画像を中央に配置 */
  background-repeat: no-repeat; /* 画像の繰り返しを防ぐ */
  background-position: top;
  width: 1024px;
  height: 500px;
}
.image-container3{
  background-image: url('../assets/images/community.jpg');
  background-size: cover; /* 画像を画面全体に広げる */
  background-position: center; /* 画像を中央に配置 */
  background-repeat: no-repeat; /* 画像の繰り返しを防ぐ */
  background-position: top;
  width: 1024px;
  height: 500px;
}
</style>