<template>
  <div id="app">
    <div class="titlebar">
      <h2 style="padding-top:8px;color:#FFF">任务计划列表</h2>
    </div>
    <div style="width:75%;margin:0 auto;">
      <a-row>
        <a-col :span="4">
          <p style="font-size:30px">
            <strong>添加新任务：</strong>
          </p>
        </a-col>
        <a-col :span="16">
          <a-input style="margin-top:3px;height:40px" v-model="duty"></a-input>
        </a-col>
        <a-col :span="4">
          <a-button style="margin-left:30px;margin-top:3px;height:40px" @click="addduty">添加任务</a-button>
        </a-col>
      </a-row>
    </div>
    <div class="tab">
      <router-link to="/all">所有任务</router-link>
      <router-link to="/willdo">未完成任务</router-link>
      <router-link to="/done">已完成任务</router-link>
    </div>
    <div style="width:75%;margin:0 auto;margin-top:30px">
      <router-view :duty='dutyname' @getWilldo="getWilldo" :willdoduty='willdoduty'/>
    </div>
  </div>
</template>

<script>
import All from "./components/all.vue";
export default {
  name: "App",
  components: {
    All
  },
  data () {
    return {
      duty: "",
      dutyname: "",
      willdoduty: []
    };
  },
  methods: {
    addduty () {
      this.dutyname = this.duty
      console.log("添加任务成功");
      this.duty = ""
    },
    getWilldo (value) {
      this.willdoduty = value
    }
  }
};
</script>

<style>
.titlebar {
  text-align: center;
  height: 60px;
  width: 100%;
  background-color: #000000;
  font-size: 18px;
  font-weight: 5px;
  margin-bottom: 30px;
}
.tab {
  font-size: 20px;
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
.tab a {
  font-size: 30px;
  color: #000;
  font-weight: 600;
  background-color: #fff;
  text-decoration: none;
}
a:hover {
  color: rgb(175, 172, 172);
}
.tab .active {
  color: #fff;
  background-color: #000;
  text-decoration: none;
}
</style>
