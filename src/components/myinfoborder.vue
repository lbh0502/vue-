<template>
  <div id="myinfoborder">
    <div class="myinfo-center">
      <div class="myinfo-center-content">
        <form action class="content-form">
          <div class="content-form-div">
            <label for>姓名</label>
            <input type="text" placeholder="刘子熙" />
          </div>
          <div class="content-form-div">
            <label for>出生日期</label>
            <input type="text" placeholder="本项不可输入，填写完身份证信息后自动同步出生日期" />
          </div>
          <div class="content-form-div">
            <label for>性别</label>
            <select name id>
              <option value>男</option>
              <option value>女</option>
            </select>
          </div>
          <div class="content-form-div">
            <label for>手机号</label>
            <input type="text" placeholder="13253567587" />
            <span class="span">已验证</span>
            <span class="spann">获取验证码</span>
          </div>
          <div class="content-form-div">
            <label for>邮箱</label>
            <input type="text" placeholder="xuepin@admin.com" />
          </div>
          <div class="content-form-div">
            <label for>身份证</label>
            <input type="text" placeholder="410222199905025568" />
          </div>
          <div class="content-form-div">
            <label for>微信号</label>
            <input type="text" placeholder="13253567587" />
          </div>
          <div class="content-form-div">
            <label for>QQ号</label>
            <input type="text" placeholder="1579750248" />
          </div>
        </form>
        <p class="lecture-content-span-one">确认修改</p>
        <p class="lecture-content-span-two">取消修改</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "myinfo"
};
</script>
<style lang="less">
// 我的信息
.myinfo-center {
  width: 880px;
  height: 600px;
  float: left;
  .myinfo-center-content {
    width: 840px;
    height: 600px;
    background: #fff;
    margin: 20px 20px;
    .content-form {
      overflow: hidden;
      .content-form-div label {
        display: inline-block;
        width: 70px;
        line-height: 40px;
        text-align: right;
        font-size: 16px;
        color: #999;
        margin-top: 15px;
      }
      .content-form-div input {
        width: 350px;
        margin-left: 15px;
        line-height: 40px;
        outline: none;
        text-indent: 3px;
      }
      .content-form-div select {
        width: 350px;
        margin-left: 15px;
        line-height: 40px;
        height: 40px;
        outline: none;
        text-indent: 3px;
        color: #999;
      }
      .span {
        width: 100px;
        display: inline-block;
        text-align: center;
        color: #9cb604;
        line-height: 40px;
        border-right: 1px solid #999;
        position: relative;
        left: -221px;
        cursor: pointer;
      }
      .spann {
        width: 120px;
        line-height: 40px;
        text-align: center;
        display: inline-block;
        position: relative;
        left: -221px;
        cursor: pointer;
      }
    }
  }
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
}
</style>