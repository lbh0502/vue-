<template>
  <div id="myanswerleft">
        <myanswerleft></myanswerleft>
        <router-view></router-view>
  </div>
</template>

<script>
import myanswerleft from '@/components/myanswerleft.vue'
export default {
    data() {
        return {
            
        }
    },
    components:{
        myanswerleft,
    }
}
</script>

<style lang="less">
    
</style>