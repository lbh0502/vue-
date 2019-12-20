<template>
  <div id="mymessage">
    <div class="mymessage">
      <div class="left mymessagepublic">
        <div class="one">
          <div class="one-block mymessagepublic">
            <img src="../assets/js15.jpg" alt />
          </div>
          <div class="one-left mymessagepublic">
            <p class="mymessage-p1 mymessagepublic">罗密欧</p>
            <img src="../assets/js16.jpg" alt />
            <p class="mymessage-p2">信息完整度</p>
            <p class="mymessage-p3"></p>
            <p class="mymessage-p4">高</p>
          </div>
        </div>
        <div class="two">
          <div class="two-left mymessagepublic">
            <p>申请提现</p>
          </div>
          <div class="two-right mymessagepublic">
            <p>账户余额</p>
            <p>248元</p>
          </div>
        </div>
        <div class="there">
          <div class="there-left mymessagepublic">
            <img src="../assets/js01.jpg" alt />
            <span class="th">实名认证</span>
            <span class="ths">【未认证】</span>
          </div>
          <div class="there-right mymessagepublic">
            <img src="../assets/j02.jpg" alt />
            <span class="th">实名认证</span>
            <span class="ths">【未认证】</span>
          </div>
        </div>
      </div>
      <div class="right public mymessagepublic">
        <div class="one mymessagepublic">
          <div class="right-one">
            <p class="my">我上传的课程</p>
            <p class="there">
              <span class="t">3</span>
              <span class="g">个</span>
            </p>
            <p class="look">查看详情 ></p>
          </div>
        </div>
        <div class="two public mymessagepublic">
          <div class="right-one">
            <p class="my">我的问答</p>
            <p class="there">
              <span class="t">3</span>
              <span class="g">个</span>
            </p>
            <p class="look">查看详情 ></p>
          </div>
        </div>
        <div class="th-there">
          <p class="p1 mymessagepublic">最新学员</p>
          <p class="p2 mymessagepublic">一周内新增25位学员</p>
          <ul>
            <li>
              <img src="../assets/js17.jpg" alt />
              <p>杨颖</p>
            </li>
            <li>
              <img src="../assets/js15.jpg" alt />
              <p>杨颖</p>
            </li>
            <li>
              <img src="../assets/js18.jpg" alt />
              <p>杨颖</p>
            </li>
            <li>
              <img src="../assets/js19.jpg" alt />
              <p>杨颖</p>
            </li>
            <li>
              <img src="../assets/js15.jpg" alt />
              <p>杨颖</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "mymessage"
};
</script>
<style lang="less">
* {
  padding: 0px;
  margin: 0px;
}
// 个人信息
.mymessagepublic {
  display: inline-block;
  overflow: hidden;
}
.mymessage {
  margin: 0 auto;
  width: 1200px;
  height: 600px;
  margin-top: 20px;
  .public {
    margin-left: 20px;
  }
  //   认证
  .left {
    width: 400px;
    background: #fff;
    .one {
      height: 160px;
      border-bottom: 1px solid #f1f1f1;
      .one-block {
        width: 150px;
        height: 160px;
        img {
          width: 110px;
          height: 100px;
          border-radius: 50px;
          margin-left: 20px;
          margin-top: 20px;
        }
      }
      .one-left {
        width: 240px;
        height: 160px;
        margin-left: 10px;
        .mymessage-p1 {
          font-size: 20px;
          margin-top: 20px;
        }
        img {
          width: 30px;
          height: 40px;
          margin-left: 10px;
        }
        .mymessage-p2 {
          margin-top: 5px;
          font-size: 14px;
        }
        .mymessage-p3 {
          width: 130px;
          height: 10px;
          background: #00aaff;
          border-radius: 15px;
          position: relative;
          top: -15px;
          left: 80px;
        }
        .mymessage-p4 {
          position: relative;
          top: -30px;
          left: 215px;
        }
      }
    }
    .two {
      height: 130px;
      border-bottom: 1px solid #f1f1f1;
      .two-left {
        width: 230px;
        height: 130px;
        p {
          width: 180px;
          background: #00aaff;
          border-radius: 20px;
          text-align: center;
          line-height: 40px;
          color: #fff;
          margin-top: 45px;
          margin-left: 20px;
        }
      }
      .two-right {
        width: 170px;
        height: 130px;
        text-align: center;
        :first-child {
          margin-top: 40px;
          font-size: 16px;
        }
        :last-child {
          font-size: 25px;
        }
      }
    }
    .there {
      height: 308px;
      overflow: hidden;
      img {
        width: 160px;
        height: 130px;
        margin-top: 10px;
      }
      span {
        display: inline-block;
        margin-top: 10px;
      }
      .th {
        font-size: 15px;
        color: #999;
      }
      .ths {
        color: #da4e23;
      }
      .there-left {
        width: 160px;
        height: 268px;
        margin: 20px 20px;
        text-align: center;
      }
      .there-right {
        width: 160px;
        height: 268px;
        margin: 20px 20px 20px 10px;
      }
    }
  }
  .right {
    width: 780px;
    height: 600px;
    .right-one {
      width: 200px;
      height: 200px;
      p {
        margin: 20px 0px 0px 20px;
      }
      .my {
        font-size: 25px;
      }
      .there {
        .t {
          font-size: 40px;
        }
        .g {
          font-size: 20px;
        }
      }
      .look {
        color: #999;
      }
    }
    .one {
      width: 380px;
      height: 290px;
      background: url("../assets/js02.jpg") no-repeat center;
      background-size: cover;
    }
    .two {
      width: 380px;
      height: 290px;
      background: url("../assets/js03.jpg") no-repeat center;
      background-size: cover;
    }
    .th-there {
      width: 780px;
      height: 310px;
      background: #fff;
      .p1 {
        width: 360px;
        line-height: 60px;
        font-size: 20px;
        margin-left: 20px;
      }
      .p2 {
        width: 360px;
        line-height: 60px;
        text-align: right;
        margin-left: 20px;
        color: #999;;
      }
      ul {
        li {
          width: 132px;
          height: 150px;
          display: inline-block;
          text-align: center;
          margin-left: 20px;
          margin-top: 30px;
          img {
            width: 110px;
            height: 110px;
            border-radius: 50%;
            margin-top: 10px;
          }
          p{
              margin-top: 5px;
              text-align: center;
              color: #999;
          }
        }
      }
    }
  }
}
</style>