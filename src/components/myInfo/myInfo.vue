<template>
  <div id="lectureleft">
    <div class="lecturel public">
      <lectureLeft></lectureLeft>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import lectureLeft from "@/components/lectureleft.vue";
export default {
  data() {
    return {};
  },
  components: {
    lectureLeft,
  }
};
</script>

<style lang="less">
</style>