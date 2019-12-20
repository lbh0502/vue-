<template>
  <div id="mycourseone">
    <div class="myinfo-center">
      <div class="myinfo-center-content">
        <div class="mycourseone-top">
          <p class="mycourseone-top-p1">全名股东_201610241223.mp4</p>
          <p class="mycourseone-top-p2"></p>
          <p class="mycourseone-top-p3">上传成功100%</p>
        </div>
        <div class="mycourseone-center">
          <div class="mycourseone-center-block">
            <img src="../assets/js12.jpg" alt />
            <p class="mycourseon-block-one">保存成功，正在审核</p>
            <p class="mycourseon-block-two">
              课程上传成功，正在进行人工审核，
              我们会在24小时后告知您审核结果，
              请耐心等待
            </p>
            <button>继续上传</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "mycourseone"
};
</script>
<style lang="less">
* {
  padding: 0px;
  margin: 0px;
}
.myinfo-center {
  width: 880px;
  height: 600px;
  overflow: hidden;
  .mycourseone-top {
    width: 840px;
    height: 110px;
    background: #fafeff;
    margin: 20px 20px;
    .mycourseone-top-p1 {
      font-size: 14px;
      padding-top: 10px;
    }
    .mycourseone-top-p2 {
      margin-top: 10px;
      width: 800px;
      height: 10px;
      background: #00aaff;
      border-radius: 10px;
    }
    .mycourseone-top-p3 {
      font-size: 13px;
      color: #999;
      margin-top: 5px;
    }
  }
  .mycourseone-center {
    width: 840px;
    height: 430px;
    margin: 20px 20px;
    overflow: hidden;
    .mycourseone-center-block {
      width: 500px;
      height: 330px;
      margin: 0 auto;
      margin-top: 50px;
      text-align: center;
      img {
        width: 90px;
        border-radius: 50%;
        margin-top: 20px;
      }
      .mycourseon-block-one {
        margin-top: 20px;
        font-size: 20px;
      }
      .mycourseon-block-two {
        width: 350px;
        margin: 0 auto;
        font-size: 15px;
        color: #999;
        margin-top: 10px;
      }
      button {
        width: 150px;
        height: 50px;
        background: #00aaff;
        color: #fff;
        border: none;
        font-size: 17px;
        margin-top: 20px;
        border-radius: 10px;
      }
    }
  }
}
</style>