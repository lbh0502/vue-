<template>
  <div id="myanswer">
    <div class="mycoursebutton-block">
      <div class="mycoursebutton-top">
        <ul>
          <li>全部</li>
          <li>待处理</li>
        </ul>
        <p>我要提问</p>
      </div>
      <!-- 课程 -->
      <div class="mycoursebutton-content">
        <div class="mycoursebutton-content-one">
          <div class="mycoursebutton-content-block">
            <div class="mycoursebutton-c-one">
              <p class="mbp1">中午凡客打客服电话退货了，下午可以到么？我在北京</p>
              <p class="mm1">
                CPU AMD Athlon I X4 (速 龙I四核)
                640盒装CPU (Socket AM3/3GHz/2M二级缓存/
                45纳米)主板华硕(ASUS)M5A88-...
              </p>
              <span>回答时间：</span>
              <span>3月23日</span>
              <span>15:43</span>
              <span>回答：</span>
              <span>0</span>
              <span>|</span>
              <span>91人看过</span>
              <span>提问者：</span>
              <span>浪荡毛</span>
            </div>
            <p class="mbp4">我有提问</p>
          </div>
        </div>
        <div class="mycoursebutton-content-two">
          <div class="mycoursebutton-content-b">
            <div class="mycoursebutton-c-one">
              <p class="mbp1">中午凡客打客服电话退货了，下午可以到么？我在北京</p>
              <p class="mm1">
                CPU AMD Athlon I X4 (速 龙I四核)
                640盒装CPU (Socket AM3/3GHz/2M二级缓存/
                45纳米)主板华硕(ASUS)M5A88-...
              </p>
              <span>回答时间：</span>
              <span>3月23日</span>
              <span>15:43</span>
              <span>回答：</span>
              <span>0</span>
              <span>|</span>
              <span>91人看过</span>
              <span>提问者：</span>
              <span>浪荡毛</span>
            </div>
            <p class="mbp5">删除回答</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "myanswer"
};
</script>
<style lang="less">
ul {
  list-style: none;
}
// 课程审核
.mycoursebutton-block {
  width: 880px;
  height: 600px;
  background: #fff;
  display: inline-block;
  overflow: hidden;
  margin-top: 20px;
  .mycoursebutton-top {
    height: 119px;
    border-bottom: 1px solid #f1f1f1;
    overflow: hidden;
    cursor: pointer;
    .active {
      background: #00aaff;
    }
    ul {
      margin: 20px 20px;
      li {
        width: 100px;
        display: inline-block;
        font-size: 20px;
        text-align: center;
        color: #333;
        overflow: hidden;
        line-height: 70px;
      }
    }
    p {
      width: 150px;
      border-radius: 20px;
      background: #00aaff;
      color: #fff;
      display: inline-block;
      position: relative;
      top: -95px;
      left: 710px;
      text-align: center;
      line-height: 40px;
    }
  }
  .mycoursebutton-content {
    width: 880px;
    height: 480px;
    .mm1 {
      width: 480px;
      height: 40px;
      background: #f1f1f1;
      border-radius: 5px;
      font-size: 12px;
      letter-spacing: 1px;
    }
    span {
      font-size: 13px;
      color: #999;
    }
    .mbp4 {
      width: 150px;
      line-height: 30px;
      text-align: center;
      border: 1px solid #f1f1f1;
      display: inline-block;
      overflow: hidden;
      border-radius: 15px;
      position: relative;
      top: -35px;
      right: -210px;
      color: #00aaff;
    }
    .mbp5 {
      width: 150px;
      line-height: 30px;
      text-align: center;
      border: 1px solid #f1f1f1;
      display: inline-block;
      overflow: hidden;
      border-radius: 15px;
      position: relative;
      top: -35px;
      right: -210px;
      color: #999;
    }
    .mycoursebutton-content-one {
      width: 880px;
      height: 160px;
      border-bottom: 1px solid #f1f1f1;
      overflow: hidden;
      .mycoursebutton-content-block {
        width: 840px;
        height: 120px;
        margin: 20px 20px;
        .mycoursebutton-c-one {
          width: 480px;
          height: 100px;
          display: inline-block;
        }
      }
    }
    .mycoursebutton-content-two {
      width: 880px;
      height: 160px;
      .mycoursebutton-content-b {
        width: 840px;
        height: 120px;
        margin: 20px 20px;
        .mycoursebutton-c-one {
          width: 480px;
          height: 100px;
          display: inline-block;
        }
      }
    }
  }
}
</style>