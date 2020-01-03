<template>
  <div>
    <a-table
      :rowKey="record => record.createtime"
      :columns="columns"
      :dataSource="data"
    />
  </div>
</template>

<script>
import bus from "../assets/Bus";
const columns = [
  {
    title: "名称",
    dataIndex: "name"
  },
  {
    title: "创建时间",
    dataIndex: "createtime"
  }
];
export default {
  props: ["willdoduty"],
  name: "Willdo",
  data() {
    return {
      data: [{ name: "打游戏", createtime: "1-1" }],
      columns
    };
  },
  mounted() {
    bus.$on("getWilldo", data => {
      console.log(data, "newdata");
      this.data = data;
    });
  },
  updated() {
    bus.$on("getWilldo", data => {
      console.log(data, "newdata");
      this.data = data;
    });
  }
};
</script>

<style scoped></style>
