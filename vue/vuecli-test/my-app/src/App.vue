<template>
  <div id="app">
        {{msg}}
        <div>
            <input type="text" v-model="info">
            <button @click="handleClick">add</button>
        </div>
        <ul>
            <todo-item v-for="item in list" :key = "item">
              <template v-slot:item="itemProps">
                <span :style="{fontSize:'20px',color:itemProps.checked ? 'red':'blue'}">{{ item }}</span>
              </template>
            </todo-item>
        </ul>
    </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue';
export default {
  name: 'App',
  components: {
    TodoItem
  },
  data(){
    return{
        msg:"hello happy",
        info:"",
        list:[],
    }
  },
  methods:{
    handleClick(){
        // console.log(this.info)
        this.list.push(this.info)
        this.info = ""
    }
  }
}
</script>

<style>

</style>
