<template>
  <div id="app">
    <a @click="pushToNotify">notify</a>
    <router-link to="/layout" tag="el-button">layout</router-link>
    <router-link to="/watch" tag="el-button">watch</router-link>
    <router-link to="/home" tag="el-button">home</router-link>
    <router-link to="/renderless" tag="el-button">renderless</router-link>
    <router-link to="/render" tag="el-button">render</router-link>
    <router-link to="/more" tag="el-button">more</router-link>
    <router-link to="/upload" tag="el-button">upload</router-link>
    <router-link to="/vslot" tag="el-button">vslot</router-link>
    <router-link to="/directives" tag="el-button">directives</router-link>
    <router-link to="/table" tag="el-button">table</router-link>
    <router-link to="/table1" tag="el-button">table1</router-link>
    <router-link to="/arrform" tag="el-button">arrform</router-link>
    <router-link to="/mysql" tag="el-button">mysql</router-link>
    <router-link to="/wss" tag="el-button">wss</router-link>
    <div class="separeate"></div>

    <!-- <div class="left-nav" style="float:left">
      <tms-menu
        style="width:200px"
        @select="handleSelect"
        class="tms-menu-vertical-demo">
        <tms-submenu v-for="item in navList" :key="item.path" :index="item.path">
          <span slot="title">{{ item.title }}</span>
          <template v-for="child in item.children">
            <tms-menu-item v-if="!child.children" :index="child.path">{{ child.title }}</tms-menu-item>
            <tms-submenu v-else :index="child.path">
              <span slot="title">{{ child.title }}</span>
              <template v-for="subchild in child.children">
                <tms-menu-item :index="subchild.path">{{ subchild.title }}</tms-menu-item>
              </template>
            </tms-submenu>
          </template>
        </tms-submenu>
        <tms-menu-item index="second">second</tms-menu-item>
      </tms-menu>
    </div>
    <div class="router-view-right" style="padding-left:220px">
      <div class="switch-tab">
        <button v-for="item in showTabs" style="margin-right:50px" @click="handleTabClick(item)">{{ item | dealTabShow }}---<span class="delete-item" @click.stop="deleteItem(item)">CLOSE</span></button>
      </div>
      <transition name="totaltrans" mode="out-in">
        <keep-alive :include="['One']">
          <router-view/>
        </keep-alive>
      </transition>
    </div> -->
    <transition name="totaltrans" mode="out-in">
      <keep-alive :include="['One', 'more']">
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'App',
  provide() {
    return {
      app: this,
    }
  },
  data() {
    return {
      obj: {
        name: 'wangxiaoming',
        age: 18,
      },
      navList: [
        {
          path: 'one',
          title: 'one',
          children: [
            { path: 'optionone', title: 'optionone' },
            { path: 'optiontwo', title: 'optiontwo' },
            {
              path: 'optionthree',
              title: 'optionthree',
              children: [
                { path: 'optionthreeone', title: 'optionthreeone' },
                { path: 'optionthreetwo', title: 'optionthreetwo' },
              ],
            },
          ],
        },
      ],
      showTabs: [],
    }
  },
  computed: {
    ...mapGetters({
      aone: 'moduleA/aone',
    }),
  },
  mounted() {},
  methods: {
    handleTabClick(item) {
      const [one, two, three] = item.split('/')
      three
        ? this.$router.push(`/${one}/${two}/${three}`)
        : two
        ? this.$router.push(`/${one}/${two}`)
        : this.$router.push(`/${one}`)
    },
    handleSelect(path, index) {
      const [one, two, three] = index
      let len = index.length
      let temppath = index.join('/')
      if (len === 1) {
        this.$router.push(`/${one}`)
        if (this.showTabs.includes(temppath)) return
        this.showTabs.push(temppath)
      } else if (len === 2) {
        this.$router.push(`/${one}/${two}`)
        if (this.showTabs.includes(temppath)) return
        this.showTabs.push(temppath)
      } else {
        this.$router.push(`/${one}/${two}/${three}`)
        if (this.showTabs.includes(temppath)) return
        this.showTabs.push(temppath)
      }
    },
    ...mapActions(['setModuleAOne']),
    changeAone() {
      this.$store.dispatch('moduleA/setModuleAOne', this.obj.age++)
    },
    funcAgrus(...argus) {
      console.log(argus)
    },
    pushToNotify() {
      this.$router.push('notify')
    },
    deleteItem(item) {
      let idx = this.showTabs.findIndex((t) => t === item)
      this.showTabs.splice(idx, 1)
      let lastitem = this.showTabs[this.showTabs.length - 1]
      this.handleTabClick(lastitem)
    },
  },
  filters: {
    dealTabShow(name) {
      let strarr = name.substring(1).split('/')
      return strarr[strarr.length - 1]
    },
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
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
