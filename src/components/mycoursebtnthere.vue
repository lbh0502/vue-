<template>
  <div id="mycoursebtnthere">
    <div class="mycoursebutton-block">
      <div class="mycoursebutton-top">
        <ul>
          <li
            @click="changemya(index)"
            :class="ismya == index ? 'active1':'' "
            v-for="(item,index) in mya"
            :key="index"
          >{{item}}</li>
        </ul>
      </div>
      <!-- 课程 -->
      <div class="mycoursebutton-content">
        <div class="mycoursebutton-content-one">
          <div class="mycoursebutton-content-block">
            <img src="../assets/js13.jpg" alt />
            <div class="mycoursebutton-c-one">
              <p class="mbp1">显露你的实力-面试</p>
              <p class="mbp">「进行中」</p>
              <p class="mbp2">上传时间: 3月23日 15:43</p>
              <p class="mbp2">
                <span>128位学员</span>
                <span>18条评论</span>
              </p>
              <p class="mbp3">免费</p>
            </div>
          </div>
        </div>
        <div class="mycoursebutton-content-two">
          <div class="mycoursebutton-content-b">
            <img src="../assets/js14.jpg" alt />
            <div class="mycoursebutton-c-one">
              <p class="mbp1">微信微博新媒体营销课程</p>
              <p class="mbpp">「已结束」</p>
              <p class="mbp2">上传时间: 3月23日 15:43</p>
              <p class="mbp2">
                <span>128位学员</span>
                <span>18条评论</span>
              </p>
              <p class="mbp3">￥199</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "mycoursebutton",
  data() {
    return {
      mya: ["已发布课程", "审核中课程", "未通过审核课程"],
      ismya: 1
    };
  },
  methods: {
    changemya: function(index) {
      this.ismya = index;
    }
  }
};
</script>
<style lang="less">
* {
  padding: 0px;
  margin: 0px;
}
ul {
  list-style: none;
}

// 课程审核
.mycoursebutton-block {
  width: 880px;
  height: 600px;
  background: #fff;
  .mycoursebutton-top {
    height: 119px;
    border-bottom: 1px solid #f1f1f1;
    overflow: hidden;
    cursor: pointer;
    .active {
      background: #00aaff;
    }
    .active1 {
      color: #00aaff;
    }
    ul {
      width: 840px;
      line-height: 30px;
      margin: 20px 20px;
      li {
        width: 280px;
        height: 70px;
        display: inline-block;
        font-size: 20px;
        text-align: center;
        color: #333;
        overflow: hidden;
        .po {
          width: 18px;
          height: 18px;
          border: 2px solid #f1f1f1;
          position: relative;
          top: 25px;
          left: 50px;
          border-radius: 50%;
        }
        .pt {
          width: 18px;
          height: 18px;
          border: 1px solid #f1f1f1;
          position: relative;
          top: 25px;
          left: 50px;
          border-radius: 50%;
        }
        .pth {
          width: 18px;
          height: 18px;
          border: 2px solid #f1f1f1;
          position: relative;
          top: 25px;
          left: 30px;
          border-radius: 50%;
        }
      }
    }
  }
  .mycoursebutton-content {
    width: 650px;
    height: 480px;
    .mbp {
      display: inline-block;
      overflow: hidden;
      color: #00aaff;
    }
    .mbpp {
      display: inline-block;
      overflow: hidden;
      color: #999;
    }
    .mbp1 {
      font-size: 20px;
      display: inline-block;
      overflow: hidden;
    }
    .mbp2 {
      font-size: 14px;
      color: #999;
      margin-top: 5px;
    }
    .mbp3 {
      font-size: 17px;
      color: #00aaff;
      margin-top: 5px;
    }
    .mycoursebutton-content-one {
      width: 880px;
      height: 160px;
      border-bottom: 1px solid #f1f1f1;
      overflow: hidden;
      img {
        width: 180px;
        height: 120px;
      }
      .mycoursebutton-content-block {
        width: 840px;
        height: 120px;
        margin: 20px 20px;
        display: inline-block;
        .mycoursebutton-c-one {
          width: 480px;
          height: 100px;
          display: inline-block;
          margin: 10px 10px;
          overflow: hidden;
        }
      }
    }
    .mycoursebutton-content-two {
      width: 880px;
      height: 160px;
      overflow: hidden;
      img {
        width: 180px;
        height: 120px;
      }
      .mycoursebutton-content-b {
        width: 840px;
        height: 120px;
        margin: 20px 20px;
        display: inline-block;
        .mycoursebutton-c-one {
          width: 480px;
          height: 100px;
          display: inline-block;
          margin: 10px 10px;
          overflow: hidden;
        }
      }
    }
  }
}
</style>