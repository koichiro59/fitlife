<template>
  <div class="container">
    <AppHeader/>
    <div class="subContainer">
        <h1 class="title">サービス</h1>
        <div class="serviceArea">
            <h2 class="subTitle">FitLife Workouts</h2>
            <div class="image-container1"></div>
            <p>-パーソナライズされたワークアウトプランを提供</p>
            <p>- 個々のユーザーの目標に合わせたカスタムワークアウトプラン</p>
            <p>- ワークアウト動画やガイドの提供</p>
            <p>- 進捗トラッキングと目標設定機能</p>
            <p>- トレーナーとのオンラインセッション</p>
        </div>
        <div class="serviceArea">
            <h2 class="subTitle">FitLife Eats</h2>
            <div class="image-container2"></div>
            <p>- パーソナライズされた栄養プランと食事管理を提供</p>
            <p>- ユーザーの健康状態や目標に基づくカスタム栄養プラン</p>
            <p>- 食事の記録とカロリー計算機能</p>
            <p>- 健康的なレシピの提案と調理動画</p>
            <p>- 栄養士とのオンライン相談サービス</p>
        </div>
        <div class="serviceArea">
            <h2 class="subTitle">FitLife Challenges</h2>
            <div class="image-container3"></div>
            <p>-目標を達成するためのチャレンジやコンペティションを提供</p>
            <p>- 月間チャレンジや特定のフィットネスゴールに基づくチャレンジ</p>
            <p>-友達やコミュニティメンバーと競い合うグループチャレンジ</p>
            <p>-リーダーボードでの進捗確認と競争</p>
            <p>-チャレンジをクリアすることで得られるバッジやポイント</p>
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