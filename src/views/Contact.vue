<template>
  <div class="container">
    <AppHeader/>
    <div class="subContainer">
       <h1 class="title">お問い合わせ</h1>
        <form action="your-backend-endpoint" method="post">
            <label for="name" class="itemLabel">お名前<span class="caution">(必須)</span></label><br>
            <input type="text" id="name" name="name" required class="itemInput" placeholder="例）佐藤博"><br>

            <label for="company" class="itemLabel">会社名<span class="caution">(必須)</span></label><br>
            <input type="text" id="company" name="company" required class="itemInput" placeholder="例）株式会社FitLifePlus"><br>

            <label for="phone" class="itemLabel">電話番号</label><br>
            <input type="tel" id="phone" name="phone" class="itemInput" placeholder="例）03-1234-5678"><br>

            <label for="email" class="itemLabel">メールアドレス<span class="caution">(必須)</span></label><br>
            <input type="email" id="email" name="email" required class="itemInput" placeholder="例）info@fitlifeplus.com"><br>

            <label for="message" class="itemLabel">お問い合わせ内容<span class="caution">(必須)</span></label><br>
            <textarea id="message" name="message" required class="itemInputText" placeholder="例）お問い合わせ内容を記入してください"></textarea><br>
            <div class="buttonArea">
                <button type="submit" class="submitButton">送信</button>          
            </div>
        </form>
        <div class="blank"></div>
    </div>
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
</script>

<style scoped>
.subContainer{
    margin:0 100px
}
.title{
    font-size: 46px;
}
.itemLabel{
    font-size: 20px;
}
.caution{
    color: #fb9e00;
}
.itemInput{
    width: 90%;
    margin: 5px auto;
    padding: 10px;
}
.itemInputText{
    width: 90%;
    height: 200px;
    margin: 5px auto;
    padding: 10px;
}
.buttonArea{
    text-align: center;
    margin: 10px auto;
}
.submitButton{
    width: 150px;
    height: 60px;
    padding: 10px 20px;
    border-radius: 3px;
    border: #66ff66 solid 2px;
    background: #fff;
    color: #66ff66;
    font-size: 20px;
    font-weight: bolder;
}
.blank{
    height:60px
}
</style>