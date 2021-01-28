<template>
  <div>
    <div class="demo-table">
      <el-table
        :data="tableData1"
        border
      >
        <el-table-column
          prop="name"
          label="姓名"
        ></el-table-column>
        <el-table-column
          prop="age"
          label="年龄"
        ></el-table-column>
        <el-table-column
          v-for="(item) in headerArray"
          :key="item.prop"
          :label="item.label"
        >
          <template slot-scope="{row}">
            <span @click="alertHeight(row,item)">{{row[item.prop].name}}</span>
          </template>
        </el-table-column>
      </el-table>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      headerArray: [],
      tableData1: [
        {
          name: 'table11',
          age: 18,
          list: [
            {
              name: '123',
              tt: 3331
            },
            {
              name: '456',
              tt: 3332
            }
          ]
        },
        {
          name: 'table12',
          age: 19,
          list: [
            {
              name: '123',
              tt: 3333
            },
            {
              name: '456',
              tt: 3334
            }
          ]
        }
      ]
    }
  },
  created() {
    this.tableData1 = this.tableData1.map((item, index) => {
      let tempItem = {}
      const { name, age, list } = item
      tempItem.name = name
      tempItem.age = age
      list.forEach(ele => {
        if (!index) {
          this.headerArray.push({ label: ele.name, prop: ele.name })
        }
        tempItem[ele.name] = ele
      })
      return tempItem
    })
  },
  methods: {
    alertHeight(row, item) {
      alert(row[item.prop].tt)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus"></style>
