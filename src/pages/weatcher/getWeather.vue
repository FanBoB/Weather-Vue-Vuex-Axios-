<template>
    <div>
			<span class="currentPosition color-fff"><i class="el-icon-location-outline"></i> 当前城市：</span>
      <el-select class="headerSelect" size="small" v-model="selectValue"  filterable placeholder="请选择">
        <el-option
          id="weatherOptions"
          v-for="item in list"
          :key="item.id"
          :label="item.province"
          :value="item.id"
        ></el-option>
      </el-select>
			
			<Selweather class="headerSelect" v-bind:datalist="ciildList"></Selweather>
		</div>
</template>

<script>
import { getWeather , getArea } from "../../assets/api/getWeather/index";

export default {
  name: "weatherOptions",
  data() {
    return {
      list: [],
      selectValue: "",
      ciildList:[]
    };
  },
  created() {
    getWeather()
      .then(res => {
        if (res.error_code == 0) {
          this.list = res.result;
        }
      })
      .catch(err => {
        this.$message.error(err)
      });
  },
  methods:{
      handleChange:function(value){
        getArea({'province_id':value})
          .then(res=>{
              if(res.error_code == 0){
                  this.ciildList = res.result
              }
          }).catch(err => {
            this.$message.error(err)
          })
      }
  },
  watch:{
    list:{
      handler:function(newValue,oldValue){
        this.selectValue = newValue[0].id
      },
      deep:true,
    },
    selectValue:function(val){
      this.handleChange(val)
    }
  }
};
</script>

<style scoped>
	.headerSelect{
		width:100px;
	}
	.currentPosition{
		font-weight: 900;
	}
</style>
