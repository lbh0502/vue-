<template>
  <div class="lbh">
    <div class="lecture-nav">
      <div class="lecture-nav-one public">
        <div class="lecture-nav-one-center">
          <img src="../assets/js1.jpg" alt />
          <div class="lecture-nav-one-right">
            <img src="../assets/js3.jpg" alt />
          </div>
        </div>
      </div>
    </div>
    <div class="lecture-mycenter">
      <div class="lecture-nav-two public">
        <div class="lecture-nav-two-logo">
          <div>
            <router-link to="/myCenter">
              <img src="../assets/js2.jpg" alt />
            </router-link>
          </div>
          <div class="lecture-nav-two-menu">
            <router-link
              :to="arrlinkL[index]"
              @click.native="changeTab(index)"
              :class="isactive == index ? 'active':'' "
              v-for="(item,index) in myarray"
              :key="index"
            >{{item}}</router-link>
            <p class="lecture-nav-p">添加课程</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script >
export default {
  name: "lectureone",
  data() {
    return {
      myarray: ["基本信息", "课程管理", "我的问答", "我的收入"],
      arrlinkL: ["/myInfo", "/myCourse", "/myAnswer", "/myMoney"],
      isactive: ''
    };
  },
  methods: {
    changeTab: function(index) {
      this.isactive = index;
    }
  }
};
</script>
<style lang="less">
* {
  padding: 0px;
  margin: 0px;
}
body {
  background: #f1f1f1;
}
.active {
  border-bottom: 2px solid #00aaff;
}
.colorone {
  color: #00aaff;
}

a {
  text-decoration: none;
  color: #000;
}
.public {
  width: 1200px;
  margin: 0 auto;
}
/*nav样式 */
.lecture-nav {
  width: 100%;
  height: 60px;
  background: #333;
  .lecture-nav-one {
    overflow: hidden;
    .lecture-nav-one-center {
      img {
        width: 260px;
        height: 54px;
        padding-top: 3px;
      }
      .lecture-nav-one-right {
        width: 180px;
        height: 60px;
        float: right;
        img {
          width: 55px;
          height: 54px;
          padding-top: 3px;
          border-radius: 50px;
        }
      }
    }
  }
}
/*mycenter 样式 */
.lecture-mycenter {
  background: #fff;
  .lecture-nav-two {
    .lecture-nav-two-logo {
      width: 280px;
      height: 90px;
      img {
        width: 220px;
        height: 50px;
        padding-top: 25px;
      }
      .lecture-nav-two-menu {
        width: 980px;
        position: relative;
        top: -79px;
        left: 220px;

        a {
          width: 100px;
          margin-left: 30px;
          display: inline-block;
          line-height: 88px;
          font-size: 18px;
          text-align: center;
          color: #777;
        }

        .lecture-nav-p {
          width: 180px;
          height: 35px;
          position: relative;
          left: 800px;
          top: -65px;
          text-align: center;
          line-height: 35px;
          font-size: 17px;
          color: #00aaff;
          border: 1px solid #f1f1f1;
          border-radius: 30px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>