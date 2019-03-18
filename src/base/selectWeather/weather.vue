<template>
    <el-select size="small" v-model="value">
        <el-option
            v-for="item in datalist"
            :key="item.id"
            :label="item.city_name"
            :value="item.id"
        ></el-option>
    </el-select>
</template>

<script>
    export default {
        name:'citys',
        data(){
            return {
                value:'',
            }
        },
        props:['datalist'],
        watch:{
          datalist:{
            handler:function(newValue){
              this.value = newValue[0].id
            },
            deep:true
          },
          value:function(value){
            this.$store.dispatch('getWeatherID',{weatherId:value})
            // this.$store.commit('updateWeatherID',{weatherId:value})
          }
        },
      created(){
          // console.log(this.$store.state.weatherId + 'fffffffffffffffffffff')
      },
    }
</script>
