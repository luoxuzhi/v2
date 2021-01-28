<template>
  <div>
    <div class="demo-table">
      <el-table
        ref="table1"
        :data="tableData1"
        :border="true"
        @select="handleSelect"
        @select-all="toggleAllSelect1"
      >
        <el-table-column type="selection" align="center"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
      </el-table>
      <el-table
        ref="table2"
        class="do-not-need-border-left"
        :data="tableData2"
        :border="true"
        @select="handleSelect"
        @select-all="toggleAllSelect2"
      >
        <el-table-column type="selection" align="center"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
      </el-table>
      <el-table
        ref="table3"
        class="do-not-need-border-left"
        :data="tableData3"
        @select="handleSelect"
        @select-all="toggleAllSelect3"
        :border="true"
      >
        <el-table-column type="selection" align="center"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
      </el-table>
    </div>
    <draggable v-model="totalSelect" draggable=".select-item" class="select-list">
      <div v-for="(row, index) in totalSelect" :key="index" class="select-item">
        {{ row.name }}
        <span class="del-button" @click="delSelectRow(row)">X</span>
      </div>
    </draggable>
  </div>
</template>

<script type="text/ecmascript-6">
import draggable from 'vuedraggable'
export default {
  components: { draggable },
  data() {
    return {
      totalSelect: [],
      tableData1: [
        {
          name: 'table11',
          belong: 1
        },
        {
          name: 'table12',
          belong: 1
        },
        {
          name: 'table13',
          belong: 1
        },
        {
          name: 'table14',
          belong: 1
        }
      ],
      tableData2: [
        {
          name: 'table21',
          belong: 2
        },
        {
          name: 'table22',
          belong: 2
        },
        {
          name: 'table23',
          belong: 2
        }
      ],
      tableData3: [
        {
          name: 'table31',
          belong: 3
        },
        {
          name: 'table32',
          belong: 3
        },
        {
          name: 'table33',
          belong: 3
        }
      ]
    }
  },
  methods: {
    handleSelect(selection, row) {
      let idx = this.totalSelect.findIndex(item => item.name === row.name)
      idx !== -1 ? this.totalSelect.splice(idx, 1) : this.totalSelect.push(row)
    },
    delSelectRow(row) {
      let idx = this.totalSelect.findIndex(item => item.name === row.name)
      this.totalSelect.splice(idx, 1)
      this.$refs[`table${row.belong}`].toggleRowSelection(row)
    },
    toggleAllSelect1(rows) {
      this.dealAllSelect(rows, 1)
    },
    toggleAllSelect2(rows) {
      this.dealAllSelect(rows, 2)
    },
    toggleAllSelect3(rows) {
      this.dealAllSelect(rows, 3)
    },
    dealAllSelect(rows, tableNum) {
      if (!rows.length) {
        this.totalSelect = this.totalSelect.filter(
          row => row.belong !== tableNum
        )
      } else {
        rows.forEach(row => {
          if (this.totalSelect.find(select => select.name === row.name)) return
          this.totalSelect.push(row)
        })
      }
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.demo-table {
  display: flex;
  align-items: flex-start;
}

.do-not-need-border-left {
  border-left: 0px solid #fff;
}

.select-item {
  display: inline-block;
  padding: 5px;
  background-color: #bda3a3;
  margin-right: 10px;
  margin-bottom: 10px;
}

.del-button {
  cursor: pointer;
}
</style>
