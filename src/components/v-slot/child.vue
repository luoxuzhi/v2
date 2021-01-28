<template>
  <div>
    <ul class="todo-list-wrapper">
      <li v-for="todo in todos" :id="todo.id">
        <slot :todo="todo">{{ todo.text }}</slot>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props:{
      todos:Array
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .todo-list-wrapper
    list-style none
</style>
