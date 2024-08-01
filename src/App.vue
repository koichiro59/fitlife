<template>
  <nav>
    <router-link to="/">Top</router-link>
    <router-link to="/services">Services</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav>
  <router-view/>
</template>

<style lang="stylus">
#app
  font-family: 'Noto Sans JP', sans-serif;
  background-color: #f2f2f2;
  color: #333333;
  -webkit-font-smoothing antialiased;
  -moz-osx-font-smoothing grayscale;
</style>
