<template>
  <div>
    <div>
      <a-table
        :rowKey="record => record.createtime"
        :rowSelection="{
          selectedRowKeys: selectedRowKeys,
          onChange: onSelectChange
        }"
        :columns="columns"
        :dataSource="data"
      />
    </div>
  </div>
</template>

<script>
import bus from "../assets/Bus"
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
  props: ["duty"],
  name: "All",
  data() {
    return {
      data: [],
      columns,
      selectedRowKeys: [],
      loading: false,
      willdo: [],
      willdolist: []
    };
  },
  mounted() {
    this.fetch();
  },
  computed: {
    rowSelection() {
      const { selectedRowKeys } = this;
      return {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(
            `selectedRowKeys: ${selectedRowKeys}`,
            "selectedRows: ",
            selectedRows
          );
        },
        getCheckboxProps: record => ({
          props: {
            disabled: record.name === "Disabled User", // Column configuration not to be checked
            name: record.name
          }
        })
      };
    }
  },
  methods: {
    onSelectChange(selectedRowKeys, record) {
      var willdolist = [];
      console.log("selectedRowKeys changed: ", selectedRowKeys);
      this.selectednum = selectedRowKeys.length;
      console.log(record, "record");
      window.localStorage.removeItem("record");
      localStorage.setItem("record", JSON.stringify(record));
      this.selectedRowKeys = selectedRowKeys;
      for (var item of this.data) {
        for (var i of record) {
          if (item.createtime == i.createtime) {//eslint-disable-line
            willdolist.push(item);
          }
        }
      }
      console.log(willdolist, "willdolist");
      // this.$emit("getWilldo", willdolist);
      bus.$emit("getWilldo", willdolist);
    },
    fetch() {
      if (JSON.parse(localStorage.getItem("todolist"))) {
        this.data = JSON.parse(localStorage.getItem("todolist"));
      }
      if (JSON.parse(localStorage.getItem("record"))) {
        var a = [];
        var item;
        a = JSON.parse(localStorage.getItem("record"));
        for (item of a) {
          this.selectedRowKeys.push(item.createtime);
        }
      }
      console.log(this.data, "newdata");
      console.log(this.selectedRowKeys, "selectedRowKeys");
    }
  },
  watch: {
    duty: function(value) {
      window.localStorage.removeItem("todolist");
      var time = new Date();
      var year = time.getFullYear();
      var month = time.getMonth() + 1; // 记得当前月是要+1的
      var date = time.getDate();
      var hours = time.getHours();
      var minutes = time.getMinutes();
      var second = time.getSeconds();
      var today =
        year +
        "-" +
        month +
        "-" +
        date +
        " " +
        hours +
        ":" +
        minutes +
        ":" +
        second;
      console.log(value, "value");
      this.data.unshift({ name: value, createtime: today });
      localStorage.setItem("todolist", JSON.stringify(this.data));
    }
  }
};
</script>

<style scoped></style>
