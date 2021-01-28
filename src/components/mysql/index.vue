<template>
  <div class="mysql-wrapper">
    <h1>this is mysql learn page!</h1>
    <el-button type="primary" size="mini" @click="handleMysqlConnect">connect test</el-button>
    <el-button type="primary" size="mini" @click="addTodoTask">addTodoTask</el-button>
    <el-button type="primary" size="mini" @click="addUser">addUser</el-button>
    <el-button type="primary" size="mini" @click="findUserByUserId">findUserByUserId</el-button>
    <div class="list-wrapper">
      <div class="todo-task-wrapper">
        <el-table class="table-item" :data="todoList">
          <el-table-column width="100" prop="id" label="id"></el-table-column>
          <el-table-column width="200" prop="text" label="任务名"></el-table-column>
          <el-table-column width="200" label="完成状态">
            <template slot-scope="{ row }">
              {{ row.isFinish === 0 ? '未完成' : '完成' }}
            </template>
          </el-table-column>
          <el-table-column width="300" label="操作">
            <template slot-scope="{ row }">
              <el-button type="primary" size="mini" @click="modifyStatus(row)">修改状态</el-button>
              <el-button type="primary" size="mini" @click="deleteTask(row)">删除任务</el-button>
            </template>
          </el-table-column>
        </el-table>

        <el-pagination
          @current-change="handleTodoCurrentChange"
          :page-size="pageSize"
          :current-page.sync="currentTodoPage"
          :total="total"
          layout="prev, pager, next, total"
        ></el-pagination>
      </div>
      <div class="user-list-wrapper">
        <el-table :data="userList" style="max-width: 600px">
          <el-table-column width="100" prop="id" label="id"></el-table-column>
          <el-table-column width="100" prop="username" label="姓名"></el-table-column>
          <el-table-column width="100" prop="age" label="年龄"></el-table-column>
          <el-table-column width="300" label="操作">
            <template slot-scope="{ row }">
              <el-button type="primary" size="mini" @click="setCurrentUserId(row)">设为当前用户id</el-button>
              <el-button type="primary" size="mini" @click="filterUserTask(row)">查看任务</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          @current-change="handleUserCurrentChange"
          :page-size="pageSize"
          :total="totalUser"
          :current-page.sync="currentUserPage"
          layout="prev, pager, next, total"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      todoList: [],
      userList: [],
      userId: 1,
      total: 0,
      totalUser: 0,
      pageSize: 5,
      currentTodoPage: 1,
      currentUserPage: 1,
    }
  },
  mounted() {
    this.getUserList()
    this.getTodoList(this.userId)
  },
  methods: {
    handleMysqlConnect() {
      axios.get('/mysql/connect').then((res) => {
        let message = res.data.message
        this.$message(message)
      })
    },
    getTodoList(userId, page = 1) {
      axios.get('/mysql/getTodos', { params: { userId, page } }).then((res) => {
        this.todoList = res.data.result
        this.total = res.data.total
      })
    },
    addTodoTask() {
      let num = Math.random().toFixed(3) * 1000
      let text = `mysql learn${num}`
      let userId = this.userId
      axios.get('/mysql/addTodo', { params: { text, userId } }).then((res) => {
        this.getTodoList(this.userId)
      })
    },
    modifyStatus(row) {
      let { id, isFinish } = row
      axios.get('/mysql/updateStatus', { params: { id, isFinish } }).then((res) => {
        this.getTodoList(this.userId, this.currentTodoPage)
      })
    },
    deleteTask(row) {
      let id = row.id
      axios.get('/mysql/deleteTask', { params: { id } }).then((res) => {
        this.$message(res.data.message)
        this.getTodoList(this.userId)
      })
    },
    handleTodoCurrentChange(current) {
      this.getTodoList(this.userId, current)
    },
    findUserByUserId() {
      axios.get('/mysql/findUser').then()
    },
    getUserList(page = 1) {
      axios.get('/mysql/getUsers', { params: { page } }).then((res) => {
        this.userList = res.data.result
        this.totalUser = res.data.total
      })
    },
    addUser() {
      let len = this.totalUser + 1
      let username = `luoxuzhi${len}`
      axios.get('/mysql/addUser', { params: { username } }).then((res) => {
        this.getUserList(this.currentUserPage)
      })
    },
    setCurrentUserId(row) {
      this.userId = row.id
    },
    filterUserTask(row) {
      this.userId = row.id
      this.getTodoList(this.userId)
    },
    handleUserCurrentChange(current) {
      this.getUserList(current)
    },
  },
}
</script>
<style lang="stylus" scoped>
.list-wrapper {
  overflow: hidden;

  .todo-task-wrapper {
    float: left;
  }

  .user-list-wrapper {
    float: right;
  }

  >>> .table-item {
    overflow: hidden;
  }
}
</style>