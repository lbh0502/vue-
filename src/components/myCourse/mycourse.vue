<template>
  <div id="myCourseLeft">
        <myCourseLeft></myCourseLeft>
        <router-view></router-view>
  </div>
</template>

<script>
import myCourseLeft from '@/components/mycourseleft.vue'
export default {
    data() {
        return {
            
        }
    },
    components:{
        myCourseLeft,
    }
}
</script>

<style lang="less">
    
</style>