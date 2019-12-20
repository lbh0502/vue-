<template>
  <div id="myinfo">
    <div class="myinfo-center">
      <div class="myinfo-center-content">
        <form action class="content-form">
          <div class="content-form-div">
            <label for>姓名</label>
            <input type="text" placeholder="刘子熙" />
            <span class="content-form-div-spann">编辑</span>
          </div>
          <div class="content-form-div">
            <label for>出生日期</label>
            <input type="text" placeholder="1990年3月2日" />
          </div>
          <div class="content-form-div">
            <label for>性别</label>
            <input type="text" placeholder="男" />
          </div>
          <div class="content-form-div">
            <label for>手机号</label>
            <input type="text" placeholder="13253567587" />
            <span class="content-form-div-span">已验证</span>
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
  overflow: hidden;
  .myinfo-center-content {
    .content-form {
      .content-form-div label {
        display: inline-block;
        width: 70px;
        line-height: 40px;
        text-align: right;
        font-size: 16px;
        color: #999;
        margin-top: 10px;
      }
      .content-form-div input {
        margin-left: 15px;
        line-height: 40px;
        outline: none;
        border: none;
        text-indent: 3px;
        font-size: 15px;
      }
      .content-form-div-spann {
        margin-left: 500px;
        font-size: 20px;
        color: #00aaff;
        cursor: pointer;
      }
      .content-form-div-span {
        color: #9cb604;
      }
    }
  }
}
</style>