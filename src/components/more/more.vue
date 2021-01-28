<template>
	<div>
		<!-- <div ref="reftest" class="inline-block">
      <el-select
        multiple 
        @native-option-click="getOpt"
        v-model="value7" placeholder="请选择">
        <el-option
          v-for="item in options7"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div> -->
		<!-- <div class="inline-block">
      <tms-select
        multiple 
        @native-option-click="getOpt"
        v-model="value7" placeholder="请选择">
        <tms-option
          v-for="item in options7"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </tms-option>
      </tms-select>
    </div> -->
		<!-- <input type="text" @input="handleKeyup" :value="modelvalue"> -->
		<demo v-model="outValue"></demo>
		<div>outValue:{{ outValue }}</div>
		<ul>
			<li
				v-for="(item, index) in options7"
				@click="handleClick(index)"
				:key="item.value"
				:class="{ 'is-active': currentIndex === index }"
			>
				{{ item.label }}
			</li>
		</ul>
		<h3>{{ testValue }}</h3>
		<p @click="clickHereUseAction">click to use action</p>
	</div>
</template>
<script>
import Demo from './demo.vue'
import { mapGetters } from 'vuex'
export default {
	name: 'more',
	components: { Demo },
	data() {
		return {
			outValue: 9,
			options7: [
				{
					value: '1',
					label: '选项一',
				},
				{
					value: '2',
					label: '选项二',
				},
				{
					value: '3',
					label: '选项三',
				},
				{
					value: '4',
					label: '选项四',
				},
				{
					value: '5',
					label: '选项五',
				},
			],
			value7: [],
			value: '',
			modelvalue: '',
			currentIndex: 0,
			testValue: 0,
		}
	},
	methods: {
		handleKeyup(event) {
			// let val = event.target.value
			this.value = event.target.value
		},
		getOpt(opt) {
			console.log(opt)
		},
		handleClick(idx) {
			this.currentIndex = idx
		},
		getDynamic() {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve(5)
				}, 5000)
			})
		},
		clickHereUseAction() {
			this.$store.dispatch('showNum').then((res) => {
				// console.log(res);
			})
		},
	},
	computed: {
		...mapGetters(['testname']),
		num() {
			return 8
		},
	},
	async created() {
		// console.log(this)
		this.testValue = await this.getDynamic()
	},
	mounted() {
		console.log('mounted')
	},
	watch: {
		value(newVal) {
			let reg = /[\?\.\/\\>]*/g
			if (reg.test(newVal)) {
				this.modelvalue = newVal.replace(reg, '')
				this.value = this.modelvalue
				this.$forceUpdate()
			}
		},
	},
}
</script>
<style>
.inline-block {
	margin-bottom: 200px;
}
.is-active {
	color: red;
}
</style>
