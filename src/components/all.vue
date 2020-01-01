<template>
  <div>
    <div>
      <a-table
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
  data () {
    return {
      data: [],
      columns,
      selectedRowKeys: [], // Check here to configure the default column
      loading: false
    };
  },
  mounted () {
    this.fetch()
  },
  computed: {
  },
  methods: {
    onSelectChange (selectedRowKeys) {
      console.log("selectedRowKeys changed: ", selectedRowKeys);
      this.selectedRowKeys = selectedRowKeys;
    },
    fetch () {
      if (JSON.parse(localStorage.getItem('todolist'))) {
        this.data = JSON.parse(localStorage.getItem('todolist'));
      }
      console.log(this.data,'newdata')
    }
  },
  watch: {
    duty: function (value) {
      window.localStorage.removeItem('todolist')
      var time = new Date();
      var year = time.getFullYear();
      var month = time.getMonth() + 1; // 记得当前月是要+1的
      var date = time.getDate();
      var today = year + "-" + month + "-" + date;
      console.log(value, "value");
      this.data.unshift({ name: value, createtime: today });
      localStorage.setItem('todolist', JSON.stringify(this.data));
    }
  }
};
</script>

<style scoped></style>
