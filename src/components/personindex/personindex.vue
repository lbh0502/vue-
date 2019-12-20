<template>
  <div>
    <lectureone></lectureone>
    <router-view></router-view>
    <lecturebottom></lecturebottom>
  </div>
</template>

<script>
import lectureone from "@/components/lectureone.vue";
import lecturebottom from "@/components/lecturebottom.vue";
export default {
  components: {
    lectureone,
    lecturebottom,
  }
};
</script>

<style lang="less">
</style>