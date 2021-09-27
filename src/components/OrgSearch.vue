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
      <div class="name">{{ item.value }}</div>
      <span class="addr">{{ item.address }}</span>
    </template>
  </el-autocomplete>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import {getOrgs, json2array} from '../api/api'
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
      // 调用 callback 返回建议列表的数据
      cb(results)
    }
    const createFilter = (queryString) => {
      return (restaurant) => {
        return (
            restaurant.value
                .toLowerCase()
                .indexOf(queryString.toLowerCase()) === 0
        )
      }
    }
    const loadAll = () => {
      return json2array(getOrgs(props.thisUnitID));
    }
    const handleSelect = (item) => {
      console.log(item)
    }

    const handleIconClick = (ev) => {
      console.log(ev)
    }

    onMounted(() => {
      orgs.value = loadAll()
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
.my-autocomplete li .addr {
  font-size: 12px;
  color: #b4b4b4;
}
.my-autocomplete li .highlighted .addr {
  color: #ddd;
}
</style>