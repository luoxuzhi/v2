<template>
  <div class="home">
    <!-- <div class="name"></div> -->
    <!-- <custom-title level="1">h1</custom-title>
    <custom-title level="2">h2</custom-title>
    <custom-title level="3">h3</custom-title>
    <custom-title level="4">h4</custom-title>
    <custom-title level="5">h5</custom-title> -->
    <!-- <div :style="styles">v-bind style test</div> -->
    <!-- <foo data-id="number5">
      <template slot-scope="{data}">{{data}}</template>
      <template>{{data}}</template>
    </foo>  -->
    <!-- <todo-list :todos="todos">
      <template slot-scope="{todo}">
        <span v-if="todo.isComplete">√ </span>{{todo.text}}
      </template>
    </todo-list> -->
    <base-input
      @focus="handleFocus"
      label="inputTest" v-model="inputValue">
    </base-input>

    <render-func-comp v-show="show"></render-func-comp>
    <el-button @click="handleClick">click to set computed value</el-button>
    <el-button @click="useAxios">click to use axios</el-button>
    <p>{{fullName}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
  // import axios from 'axios'
  import { getBarMessage } from '@/api/api'
  export default{
    data(){
      return {
        firstName:'li',
        lastName:'xiang',
        styleOne:{fontSize:'30px'},
        styleTwo:{color:'red'},
        data:'father data',
        inputValue:99,
        show:false,
        todos:[
          {text:'banana',isComplete:false},
          {text:'apple',isComplete:true},
          {text:'juice',isComplete:true},
          {text:'gruce',isComplete:false}
        ]
      }
    },
    computed:{
      fullName:{
        get(){
          return this.firstName + ' ' + this.lastName
        },
        set(val){
          console.log(val)
        }
      },
      styles(){
        return [this.styleOne,this.styleTwo]
      }
    },
    created(){
      console.log(this)
    },
    methods:{
      handleClick(){
        this.bus.$emit('test',99)
        this.fullName = 'new set fullName'
        this.show = !this.show
      },
      handleFocus(){
        console.log('focus now')
      },
      useAxios(){
        // axios.get('/users/bar',{params:{name:'xiaowang',id:20}}).then(e=>console.log(e)).catch(e=>console.log(e))
        // axios.post('/users/post',{name:'postname',id:9999}).then(e=>{console.log(e)})
        // axios({method:'POST',url:'/users/bar',data:{name:'postname',id:9999}}).then(e=>console.log(e))
        getBarMessage().then(res=>console.log(res)).catch(e=>console.log(e))
      }
    },
    components:{
      Foo:{
        inheritAttrs:false,
        template:` 
          <div>
            this is foo bar.
            <slot data="99999"></slot>
            <span v-bind="$attrs">innerText</span>
          </div>
        `
      },
      TodoList:{
        props:{
          todos:Array
        },
        template:` 
          <ul>
            <li v-for="todo in todos">
              <slot :todo="todo">{{todo.text}}</slot>
            </li>
          </ul>
        `
      },
      BaseInput:{
        template:` 
          <label>{{label}}
          <input type="text"
            v-on="inputListeners"
            :value="value"></label>
        `,
        props:['label','value'],
        computed:{
          inputListeners:function(){
            return Object.assign({},
              this.$listeners,
              {
                input:e=>{
                  this.$emit('input',e.target.value)
                }
              }
            )
          }
        }
      },
      RenderFuncComp:{
        created(){
          console.log('if created')
        },
        render(h){
          return h('div',{attrs:{id:'first-level'}},[
            'first level text',h('div','second level text')
          ])
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
