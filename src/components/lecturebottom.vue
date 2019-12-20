<template>
  <div id="lecturebottom">
    <div class="lecture-bottom">
      <div class="lecture-bottom-content public">
        <p class="lecture-bottom-content-p1">
          <span>中国领先大学成长平台</span>
          <span>&copy;2016 e学聘</span>
        </p>
        <p class="lecture-bottom-content-p2">
          <span>IPC备1650007号</span>
          <span>|</span>
          <span>联系我们</span>
          <span>exuepin@exuepin.com</span>
          <span>|</span>
          <span>关于我们</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "lecturebottom"
};
</script>
<style lang="less">
/* 底部样式 */
.lecture-bottom {
  background: #fff;
  height: 100px;
  margin-top: 20px;
  .lecture-bottom-content {
    height: 100px;
    text-align: center;
    color: #999;
    font-size: 14px;
    padding-top: 15px;
    letter-spacing: 1px;
    .lecture-bottom-content-p2 {
      padding-top: 10px;
    }
  }
}
</style>