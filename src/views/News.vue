<template>
    <div class="container">
        <AppHeader/>
        <h1>This is newsPage</h1>
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

</style>