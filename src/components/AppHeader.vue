<template>
    <header>
        <div class="logo">
            <router-link to="/"><img src="@/assets/images/logo.jpg" alt="logo"></router-link>
        </div>
        <nav class="nav-menu">
            <router-link to="/"><div class="aaa">ホーム</div></router-link>
            <router-link to="/services"><div class="aaa">サービス</div></router-link>
            <router-link to="/about"><div class="aaa">会社概要</div></router-link>
            <router-link to="/news"><div class="aaa">お知らせ</div></router-link>
            <router-link to="/contact"><button class="contact-btn">お問い合わせ</button></router-link>
        </nav>
    </header>
    <div class="blank"></div>
</template>

<script>
import {defineComponent} from "vue"

export default defineComponent({
    name:"AppHeader"
})
</script>

<style scoped>
body {
    font-family: 'Noto Sans JP';
}
header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f2f2f2;
    color: #444444;
    padding: 10px 20px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 60px;
    font-weight: 500;
}
header img {
    margin-top: 20px;
    height: 80px;
}
.logo{
    flex-grow: 5;
    padding: 10px;
}

.nav-menu {
    display: flex;
    gap: 20px;
    flex-grow: 1;
}

.nav-menu a {
    color: #333333;
    text-decoration: none;
    font-size: 18.5px;
    margin: 0 10px;
}
.aaa{
    margin-top: 10px;
}
.nav-menu a:first-child{
    margin-left: 100px;
}

.nav-menu a:hover {
    cursor: pointer;
    color: #66ff66;
    font-weight: bolder;
}
.contact-btn{
    background: #fb9e00;
    color: #fff;
    padding: 10px 20px;
    border: 2px solid #fb9e00;
    border-radius: 30vh;
    font-size: 18.5px;
    cursor: pointer;
}
.contact-btn:hover{
    background: #fff;
    color: #fb9e00;
    transition: 0.5s;
    padding: 10px 20px;
    border: 2px solid #fb9e00;
    border-radius: 30vh;
    font-size: 18.5px;
    cursor: pointer;
}
.blank{
    height: 70px;
}
</style>