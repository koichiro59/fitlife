<template>
    <header>
        <div class="logo">
            <router-link to="/"><img src="@/assets/images/logo.jpg" alt="logo"></router-link>
        </div>
        <nav class="nav-menu">
            <router-link to="/">ホーム</router-link>
            <router-link to="/services">サービス</router-link>
            <router-link to="/about">会社概要</router-link>
            <router-link to="/contact">お問い合わせ</router-link>
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
    font-family: 'Noto Sans JP', sans-serif;
}
header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f2f2f2;
    color: #333333;
    padding: 10px 20px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 60px;
    font-weight: 500;
}
header img {
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
    font-size: 18px;
    margin: 0 10px;
}
.nav-menu a:first-child{
    margin-left: 100px;
    color: #66ff66;
}
.nav-menu a:hover {
    cursor: pointer;
    color: #66ff66;
    font-weight: bold;
}
.blank{
    height: 70px;
}
</style>