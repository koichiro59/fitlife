<template>
  <div class="container">
    <AppHeader/>
    <div class="subContainer">
        <h1 class="title">会社概要</h1>
        <div class="image-container"></div>
        <div class="detail-container">
          <h2 class="subTitle">基本情報</h2>
            <table>
              <tr>
                <th>会社名</th>
                <td>FitLifePlus</td>
              </tr>
              <tr>
                <th>設立年</th>
                <td colspan="3">2024年</td>
              </tr>
              <tr>
                <th>所在地</th>
                <td colspan="3">東京都港区</td>
              </tr>
              <tr>
                <th>代表者</th>
                <td colspan="3">山田太郎</td>
              </tr>
            </table>
            <h2 class="subTitle">アクセス</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51871.681823163024!2d139.70416676642606!3d35.652861579272695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bbbb41922f3%3A0x33ebfd75f2f06cac!2z5p2x5Lqs6YO95riv5Yy6!5e0!3m2!1sja!2sjp!4v1722399324286!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <p>JR山手線浜松町駅北口 徒歩10分</p>
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
  name:"About",
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
.image-container{
    background-image: url('../assets/images/company2.jpg');
    background-size: cover; /* 画像を画面全体に広げる */
    background-position: center; /* 画像を中央に配置 */
    background-repeat: no-repeat; /* 画像の繰り返しを防ぐ */
    background-position: top;
    width: 1024px;
    height: 500px;
}
.detail-container{
  margin: 20px 100px;
}
.subTitle{
  font-size: 36px;
  margin:50px 0px 20px 0;
}
table{
  border-collapse: collapse;
  text-align: left;

}
th{
  border-top: #333333 solid 1px;
  border-bottom: #333333 solid 1px;
  width: 180px;
  padding: 30px 20px 30px 0;
  margin-left: 20px;
  text-align: left;
  font-size: 18px;
}
td{
  border-top: #333333 solid 1px;
  border-bottom: #333333 solid 1px;
  width: 600px;
  padding: 30px 20px 30px 0;
  text-align: left;
  font-size: 22px;
}
</style>
