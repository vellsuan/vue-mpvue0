<template>
    <div class="layout-top">
      <ul class="clearfix">
          <li  v-for="(item,index) in list"  :key="item.funModuleId" :id="index" @click="clickTopMenu(index)" :class="{active:idx===index}">
            <router-link tag="p" :to= "{ name: item.funcUrl, params:{idx: index, topClick:true} }" :class="index==1?'router-link-active':''">{{item.name}}</router-link>
          </li>
      </ul>
    </div>
</template>

<script>
// import moduleName from 'module'

export default {
  name: "",
  components: {},
  data() {
    return {
      idx: 0
    };
  },
  methods: {
    clickTopMenu (idx) {
      this.idx = idx;
    },
    resetIdx() {
      this.idx = 0;
    }
  },
  created() {
  },
  mounted() {},
  updated() {},
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      }
    }
  }
};
</script>

<style lang="scss">
.clearfix {
  zoom: 1;
}
.layout-top {
  height: 100%;
  padding-top: 16px;
  ul {
    height: 50px;
    list-style: none;
  }
  li {
    float: left;
    height: 50px;
    width: 9.5%;
    line-height: 50px;
    margin-bottom: 0;
    text-align: center;
    border-radius: 5px 5px 0 0;
    cursor: pointer;
  }
  .active{
    background: #FFB230
  }
}

</style>