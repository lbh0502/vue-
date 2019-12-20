<template>
  <div id="saveinformation">
    <div class="mycourseone-center">
      <form action>
        <p>
          <label for>标题</label>
          <input class="savainformationpublic" type="text" placeholder="请输入课程标题" />
        </p>
        <p>
          <label for>分类</label>
          <select class="savainformationpublic" name id>
            <option value="1">请选择课程分类</option>
            <option value="2">保安</option>
            <option value="3">白领</option>
            <option value="4">厨师</option>
            <option value="5">学生</option>
          </select>
        </p>
        <p>
          <label class="save-in" for>课程介绍</label>
          <textarea class="savainformation" placeholder="请输入课程介绍" ></textarea>
        </p>
        <button>保存信息</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
.savainformationpublic {
  text-indent: 5px;
  outline: none;
  width: 600px;
  height: 40px;
  line-height: 35px;
}
.mycourseone-center {
  width: 840px;
  height: 430px;
  margin: 20px 20px;
  overflow: hidden;
  color: #999;
  background: darkgreen;
  label {
    display: inline-block;
    width: 80px;
    line-height: 40px;
    text-align: right;
    margin-right: 10px;
  }
  .save-in {
    position: relative;
    top: -130px;
  }
  .savainformation {
    height: 150px;
    width: 600px;
  }
  button {
    width: 150px;
    height: 50px;
    background: #00aaff;
    border: none;
    font-size: 18px;
    color: #fff;
    border-radius: 10px;
    margin-left: 90px;
  }
}
</style>