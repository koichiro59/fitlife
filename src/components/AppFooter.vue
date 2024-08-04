<template>
    <footer>
        <div class="info-menu">
            <h3>INFO</h3>
            <p>電話番号: 03-1234-5678</p>
            <p>メール: info@fitlifeplus.com</p>
            <p>営業時間: 月〜金 9:00 - 18:00</p>
            <div>© 2024 FitLife Plus. All rights reserved.</div>
        </div>
        <nav class="footer-nav">
            <h3>SITE MAP</h3>
            <router-link to="/"><p>ホーム</p></router-link>
            <router-link to="/services"><p>サービス</p></router-link>
            <router-link to="/about"><p>会社概要</p></router-link>
            <router-link to="/news"><p>お知らせ</p></router-link>
            <router-link to="/contact"><p>お問い合わせ</p></router-link>
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
    height: 300px;
}
.info-menu{
    width: 100px;
    margin-top: 10px;
    margin-left: 10px;
    flex-grow: 1;
    font-weight: 500;
}
.info-menu h3{
    margin-left: 30px;
}
.info-menu p{
    margin-left: 40px;
}
.info-menu div{
    margin-top: 80px;
    margin-left: 30px;
}
.footer-nav{
    align-items: center;
    flex-grow: 3;
    margin-top: 10px;
    font-weight: 500;
}
.footer-nav h3{
    margin: 20px auto -5px auto;
}
.footer-nav p{
    margin-left: 10px;
}
.footer-nav a{
    text-decoration: none;
    color: #fff;
}
</style>