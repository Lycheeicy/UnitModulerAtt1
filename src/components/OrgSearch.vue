<template>
  <el-autocomplete
      popper-class="my-autocomplete"
      v-model="state"
      :fetch-suggestions="querySearch"
      placeholder="请输入内容"
      @select="handleSelect"
  >
    <template #suffix>
      <i class="el-icon-edit el-input__icon" @click="handleIconClick"> </i>
    </template>
    <template #default="{ item }">
      <span class="orgs">{{ item}}</span>
    </template>
  </el-autocomplete>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import {getOrgs, obj2array, promise2array} from '../api/api'
export default defineComponent({
  name: "OrgSearch",
  props:['thisUnitID'],
  data:function(){
    return {
      unitID: this.thisUnitID
    }
  },
  setup(props) {
    const orgs = ref([])

    const querySearch = (queryString, cb) => {
      var results = queryString
          ? orgs.value.filter(createFilter(queryString))
          : orgs.value
       //调用 callback 返回建议列表的数据
      console.log("results is "+results)
      cb(results)
    }
    const createFilter = (queryString) => {
      return (org) => {
        console.log("org is "+org)
        return (
            org
                .toLowerCase()
                .indexOf(queryString.toLowerCase()) === 0
        )
      }
    }
    const loadAll = async () => {
      let array=[];
      await getOrgs(props.thisUnitID).then(res=>{
        array=obj2array(res.data);
      })
      return array;
    }
    const handleSelect = (item) => {
      console.log(item)
    }

    const handleIconClick = (ev) => {
      console.log(ev)
    }

    onMounted(async () => {
      orgs.value = await loadAll()
      console.log("now orgs.value is "+orgs.value)
    })

    return {
      orgs,
      state: ref(''),
      querySearch,
      createFilter,
      loadAll,
      handleSelect,
      handleIconClick,
    }
  },
})
</script>
<style>
.my-autocomplete li {
  line-height: normal;
  padding: 7px;
}
.my-autocomplete li .name {
  text-overflow: ellipsis;
  overflow: hidden;
}
.my-autocomplete li .orgs {
  font-size: 12px;
  color: #b4b4b4;
}
.my-autocomplete li .highlighted .addr {
  color: #ddd;
}
</style>