<template>
  <div>
    <div style="margin-bottom: 20px;">
      <el-button size="small" ref="button" @click="addTab(activeTab)">add tab</el-button>
    </div>
    <el-tabs v-model="activeTab" type="card" @tab-remove="removeTab">
      <el-tab-pane
        v-for="(item, index) in editableTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
        :closable="!!index"
      >
        <el-form
          :model="ruleForms[index]"
          :rules="rules"
          :ref="`reportForm${index+1}`"
          :id="`reportForm${index+1}`"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="活动名称" prop="name">
            <el-input v-model="ruleForms[index].name"></el-input>
          </el-form-item>
          <el-form-item label="活动区域" prop="region">
            <el-select v-model="ruleForms[index].region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="活动时间" required>
            <el-col :span="11">
              <el-form-item prop="date1">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="ruleForms[index].date1"
                  style="width: 100%;"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-form-item prop="date2">
                <el-time-picker
                  placeholder="选择时间"
                  v-model="ruleForms[index].date2"
                  style="width: 100%;"
                ></el-time-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(`reportForm${index+1}`)">立即创建</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>>

<script>
export default {
  data() {
    return {
      ruleForms: [
        {
          name: '',
          region: '',
          date1: '',
          date2: ''
        }
      ],
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [{ required: true, message: '请选择活动区域', trigger: 'change' }],
        date1: [{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }],
        date2: [{ type: 'date', required: true, message: '请选择时间', trigger: 'change' }]
      },
      activeTab: '1',
      editableTabs: [
        {
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }
      ],
      tabIndex: 1
    }
  },
  methods: {
    addTab(targetName) {
      let name = ++this.tabIndex + ''
      let title = `Tab${name}`
      this.editableTabs.push({ title, name })
      this.activeTab = name
      this.ruleForms.push({ name: '', region: '', date1: '', date2: '' })
    },
    removeTab(targetName) {
      let tabs = this.editableTabs
      let activeName = this.activeTab
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }

      this.activeTab = activeName
      this.editableTabs = tabs.filter(tab => tab.name !== targetName)
    },
    submitForm(formName) {
      let ref = this.$refs[formName]
      if (Array.isArray(ref)) {
        ref[0].validate(valid => {
          if (valid) {
            alert('submit!')
          } else {
            return false
          }
        })
      }
    }
  }
}
</script>