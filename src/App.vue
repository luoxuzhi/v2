<template>
  <div id="app">
    <div class="click-btn-wrapper">
      <el-button
        size="mini"
        v-for="item in list"
        :key="item"
        @click="handleRouteClick(item)"
      >
        {{ item }}
      </el-button>
    </div>
    <div class="separeate"></div>
    <transition name="totaltrans" mode="out-in">
      <keep-alive :include="['One', 'more']">
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide() {
    return {
      app: this,
    }
  },
  data() {
    return {
      list: ['notify', 'layout', 'watch', 'home', 'render', 'renderless', 'more', 'upload', 'vslot', 'directives', 'table', 'table1', 'arrform', 'mysql', 'wss',],
    }
  },
  methods: {
    handleRouteClick(item) {
      this.$router.push(`/${item}`)
    },
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.click-btn-wrapper {
  white-space: nowrap;
  overflow: auto;
}

.totaltrans-enter-active, .totaltrans-leave-active {
  transition: all 0.3s;
}

.totaltrans-enter {
  transform: translate3d(-100%, 0, 0);
}

.totaltrans-leave-to {
  transform: translate3d(100%, 0, 0);
}

.separeate {
  width: 100%;
  height: 0;
  margin: 10px 0;
  border-bottom: 1px dotted #2D3B31;
}
</style>
