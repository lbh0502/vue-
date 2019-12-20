<template>
  <div class="lecture-content-left">
    <div class="lecture-content-left-one">
      <img src="../assets/js3.jpg" alt />
      <p>编辑</p>
    </div>
    <div class="lecture-content-left-two">
      <router-link
        :to ="mycourse[index]"
        @click.native="changeUl(index)"
        :class="iscolorone == index ? 'colorone':''"
        v-for="(item,index) in myul"
        :key="index"
      > {{ item }}</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "lectureleft",
  data() {
    return {
      myul: ["我的信息", "认证信息", "密码管理"],
      mycourse: ["/myInfo/myInfoMessage", "/myInfo/ifm","/myInfo/leput"],
      iscolorone: "",
    };
  },
  methods: {
    changeUl: function(index) {
      this.iscolorone = index;
    }
  }
};
</script>
<style lang="less">
.colorone {
  color: #00aaff;
}
/* 内容左边样式 */
.lecture-content-left {
  width: 300px;
  height: 580px;
  background: #fff;
  margin-top: 20px;
  float: left;
  .lecture-content-left-one {
    width: 90px;
    height: 90px;
    margin-left: 105px;
    border-radius: 50%;
    overflow: hidden;
    margin-top: 30px;
    overflow: hidden;
    display: inline-block;
    img {
      width: 90px;
      height: 90px;
    }
    p {
      width: 100px;
      height: 30px;
      text-align: center;
      line-height: 25px;
      background: rgba(0, 0, 0, 0.3);
      position: relative;
      top: -50%;
      color: #b0babd;
      cursor: pointer;
    }
  }
  .lecture-content-left-two {
      margin-top: 30px;
      list-style: none;
      a {
        width: 150px;
        text-align: center;
        line-height: 30px;
        font-size: 18px;
        letter-spacing: 2px;
        cursor: pointer;
        margin-left: 75px;
        display: block;
      }
    }
  }
</style>