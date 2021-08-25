<template>
  <FormProvider :form="form">
    <Field name="input" :component="[Input, { placeholder:'请输入' }]" />
  </FormProvider>
</template>

<script>
  import { Input } from '@formily/element'
  import { createForm } from '@formily/core'
  import { FormProvider, Field } from '@formily/vue'
  import { defineComponent } from '@vue/composition-api'

  export default defineComponent({
    components: { FormProvider, Field },
    data() {
      return {
        Input,
        form: createForm(),
      }
    },
  })
</script>