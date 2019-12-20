<template>
  <div id="lecturebutton">
    <p class="lecture-content-span-one">确认修改</p>
    <p class="lecture-content-span-two">取消修改</p>
  </div>
</template>
<script>
export default {
  name: "lecturebutton"
};
</script>
<style lang="less">
.lecture-content-span-one {
  width: 150px;
  height: 45px;
  background: #00aaff;
  text-align: center;
  line-height: 45px;
  display: inline-block;
  margin-left: 100px;
  margin-top: 15px;
  margin-right: 10px;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}
.lecture-content-span-two {
  width: 149px;
  height: 44px;
  text-align: center;
  line-height: 44px;
  display: inline-block;
  border: 1px solid #999;
  border-radius: 5px;
  cursor: pointer;
}
</style>