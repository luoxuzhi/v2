<template>
	<div class="v-slot">
		<todo-list :todos="todos">
			<template v-slot="{ todo }">
				<span v-if="todo.isCompleted">✓</span>
				{{ todo.text }}
			</template>
		</todo-list>
		<child-two @hook:mounted="handleChildTwoMounted">
			<template #header="{msg}">
				this is custom header,and scoped msg is: {{ msg }}
			</template>
			<template v-slot="{ data }">
				this is custom body---and this is child data:{{ data }}
			</template>
			<template v-slot:footer="{ message: msg }">
				<test>
					<template v-slot="{ x, y }"
						>father message:{{ msg }}---and self x,y---{{ x }},{{ y }}</template
					>
					<template v-slot:one
						>custom slot one content</template
					>
				</test>
				<test v-slot="{ x, y }"> father message:{{ msg }}---and self x,y---{{ x }},{{ y }} </test>
			</template>
			<!-- <test slot="footer" slot-scope="{message}">{{message}}</test> -->
		</child-two>
	</div>
</template>

<script type="text/ecmascript-6">
import TodoList from './child.vue'
import ChildTwo from './child-two.vue'
export default{
  components:{ TodoList,ChildTwo, Test:{
    template:'<div><slot x="8" y="9"></slot><slot name="one">one</slot></div>'
  }},
  data:()=>({
    todos:[
      { text:'one',isCompleted:true,id:1},
      { text:'two',isCompleted:false,id:2},
      { text:'three',isCompleted:true,id:3},
      { text:'four',isCompleted:true,id:4}
    ]
  }),
  methods:{
    handleChildTwoMounted(){
      console.log('child two mounted')
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus"></style>
