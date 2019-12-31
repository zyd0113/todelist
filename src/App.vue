<template>
  <div id="app">
    <div class="titlebar">
      <h2 style="padding-top:8px;color:#FFF">任务计划列表</h2>
    </div>
    <div style="width:75%;margin:0 auto;" >
      <a-row>
        <a-col :span="4">
          <p style="font-size:30px">
            <strong>添加新任务：</strong>
          </p>
        </a-col>
        <a-col :span="20">
          <a-input style="margin-top:3px;height:40px"></a-input>
        </a-col>
      </a-row>
    </div>
    <div class="tab">
      <router-link to="/all">所有任务</router-link>
      <router-link to="/willdo">未完成任务</router-link>
      <router-link to="/done">已完成任务</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.titlebar {
  text-align: center;
  height: 60px;
  width: 100%;
  background-color: #c0b70b;
  font-size: 18px;
  font-weight: 5px;
  margin-bottom: 30px;
},
.tab{
  font-size: 20px;
}
</style>
