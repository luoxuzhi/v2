<template>
  <div class="renderless">
    <no-render v-model="tags">
      <!-- <div
        slot-scope={tags,removeTag,inputAttrs,inputEvents}
        class="tag-input">
        <span v-for="tag in tags">
          {{tag}}
          <span class="remove" @click="removeTag(tag)">x</span>
        </span>
        <input v-bind="inputAttrs" v-on="inputEvents">
      </div> -->
      <template v-slot="{tags,removeTag,inputAttrs,inputEvents}">

      <div

        class="tag-input">
        <span :key="tag" v-for="tag in tags">
          {{tag}}
          <span class="remove" @click="removeTag(tag)">x</span>
        </span>
        <input v-bind="inputAttrs" v-on="inputEvents">
      </div>
      </template>

    </no-render>
    <no-render-review message="outside message"></no-render-review>
  </div>
</template>

<script type="text/ecmascript-6">
  import NoRender from './no-render'
  import NoRenderReview from './no-render-review.js'
  export default{
    data(){
      return {
        tags:['design','testing','photoshop']
      }
    },
    components:{NoRender,NoRenderReview}
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
