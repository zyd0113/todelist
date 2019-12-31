<template>
  <div>
    <div>
      <a-table
        :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
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
const data = [{name: "吃饭", createtime: "2019-12-31"}];

export default {
  name: "All",
  data () {
    return {
      data,
      columns,
      selectedRowKeys: [], // Check here to configure the default column
      loading: false
    };
  },
  computed: {

  },
  methods: {
    onSelectChange (selectedRowKeys) {
      console.log("selectedRowKeys changed: ", selectedRowKeys);
      this.selectedRowKeys = selectedRowKeys
    }
  }
};
</script>

<style  scoped>
</style>
