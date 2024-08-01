<template>
    <footer>
        <div class="info-menu">
            <p>電話番号: 03-1234-5678</p>
            <p>メール: info@fitlifeplus.com</p>
            <p>営業時間: 月〜金 9:00 - 18:00</p>
            <p>© 2024 FitLife Plus. All rights reserved.</p>
        </div>
        <nav class="footer-nav">
            <router-link to="/">ホーム</router-link>
            <router-link to="/services">サービス</router-link>
            <router-link to="/about">会社概要</router-link>
            <router-link to="/contact">お問い合わせ</router-link>
        </nav>
    </footer>
</template>

<script>
import {defineComponent} from "vue"

export default defineComponent({
    name:"AppFooter"
})
</script>

<style scoped>
footer{
    background-color: #333333;
    display: flex;
    color: #fff;
    height: 200px;
}
.info-menu{
    width: 350px;
    margin-top: 10px;
    margin-left: 10px;
    flex-grow: 2;
}
.info-menu p{
    margin-left: 20px;
}
.footer-nav{
    display: flex;
    flex-grow: 1;
}
</style>