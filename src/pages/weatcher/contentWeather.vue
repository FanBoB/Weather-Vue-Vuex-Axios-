<template>
    <div>
      <el-row :gutter="20" class="mt90">
        <el-col :span="12" :offset="1">
          <h2 class="celsius">{{ isSk('temp') }}℃<span class="weather">{{ isToday('weather') }}</span></h2>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="23" :offset="1">
          <p class="colStyle mt20">
            <span><i class="windIcon"></i>{{ isSk('wind_direction') }} {{ isSk('wind_strength') }}</span>
            <span><i class="humidityIcon"></i>湿度 {{ isSk('humidity') }}</span>
            <span><i class="airPressureIcon"></i> 紫外线强度：{{ isToday('uv_index') }}</span>
            <span><i class="limitIcon"></i>穿衣指数：{{ isToday('dressing_index') }}</span>
          </p>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="23" :offset="1">
          <p class="colStyle mt20">
            <span class="tips"></span>你若安好，便是晴天~
          </p>
        </el-col>
      </el-row>

      <el-row :gutter="40" type="flex" justify="space-around">
          <el-col v-for="(item,index) in future" :key="item.date" :span="3">
            <ul class="future">
              <li>{{  item.week  }}</li>
              <li>{{ item.date }}</li>
              <li>{{  item.weather  }}</li>

              <li v-if="item.weather.endsWith('晴')"><span></span></li>
              <li v-else-if="item.weather.endsWith('多云') || item.weather.endsWith('阴')"><span :style="{backgroundPosition:'-273px -5px'}"></span></li>
              <li v-else-if="item.weather.endsWith('雨夹雪')"><span :style="{backgroundPosition:'-714px -154px'}"></span></li>
              <li v-else-if="item.weather.endsWith('小雨') "><span :style="{backgroundPosition:'-279px -76px'}"></span></li>
              <li v-else-if="item.weather.endsWith('阵雪')"><span :style="{backgroundPosition:'-573px -154px'}"></span></li>
              <li v-else-if="item.weather.endsWith('小雪')"><span :style="{backgroundPosition:'11px -154px'}"></span></li>
              <li v-else-if="item.weather.endsWith('中雪')"><span :style="{backgroundPosition:'-425px -154px'}"></span></li>
              <li v-else-if="item.weather.endsWith('暴雪')"><span :style="{backgroundPosition:'-571px -154px'}"></span></li>
              <li v-else-if="item.weather.endsWith('阵雨')"><span :style="{backgroundPosition:'-864px -82px'}"></span></li>

              <li>{{ item.temperature }}</li>
              <li>{{ item.wind }}</li>
            </ul>
          </el-col>
      </el-row>
    </div>
</template>

<script>
  import { weatherIndex } from '../../assets/api/getWeather/index';
  import { mapGetters } from 'vuex';

    export default {
      name: "contentWeather",
      data(){
          return {
            sk:'',
            today:'',
            future:''
          }
      },
      methods:{
        handleWeather:function(id){
          weatherIndex({'cityname':id}).then(res=>{
            if(res.error_code == 0 ){
              this.sk = res.result.sk;   //实时天气
              this.today = res.result.today;  //今天天气
              this.future = res.result.future;  //一周天气
            }else{
              this.$message.error(res.result)
            }
          }).catch(err=>{
            this.$message.error(err)
          })
        },
        isSk:function(val){
          if(this.sk == undefined || this.sk == null || this.sk == ''){
            return ''
          }else{
            return this.sk[val];
          }
        },
        isToday:function(val){
          if(this.today == undefined || this.today == null || this.today == ''){
            return ''
          }else{
            return this.today[val]
          }
        },

      },
      watch:{
        weatherId:{
          handler:function(val){
            this.handleWeather(val)
          },
          deep:true,
          immediate:true
        },
      },
      computed:{
        ...mapGetters(['weatherId']),
      },
      created:function(){
        // let weatherId = this.$store.state.weatherId;
        // this.handleWeather(weatherId)
      },
      filters: {
        // dateFrm:function(el){
        //   return moment(el).format('YYYY-MM-DD')
        // }
      }
    }
</script>

<style lang="scss" scoped>
  .celsius{
    font-size:86px;
    color:#fff;
  }
  .weather{
    font-size: 24px;
    margin-left:20px;
  }
  .colStyle{
    font-size: 18px;
    color:#fff;
    line-height: 22px;
  }
  .colStyle span{
    float: left;
  }
  .colStyle i{
    float: left;
    display: inline-block;
    width:20px;
    height: 20px;
    margin-right: 5px;
  }
  .windIcon{
    background: url("../../../static/img/sprite.png") no-repeat -167px -190px ;
  }
  .humidityIcon{
    margin-left:30px;
    background: url("../../../static/img/sprite.png") no-repeat -193px -118px ;
  }
  .airPressureIcon{
    margin-left:30px;
    background: url("../../../static/img/sprite.png") no-repeat -192px -95px ;
  }
  .limitIcon{
    margin-left:30px;
    background: url("../../../static/img/sprite.png") no-repeat -189px -190px ;
  }
  .tips{
    display:inline-block;
    width: 11px;
    height:11px;
    background: #fff;
    border-radius:50%;
    margin: 5px 10px 0 0;
  }

  .future{
    font-size: 0.9em;
    background: #64b1f9;
    border-radius:10px;
    text-align:center;
    margin-top:200px;
    box-shadow:3px 3px 20px 0px rgba(100, 177, 248, 0.8);
    li {
      color: #fff;
      padding: 10% 0;
      span{
        display: inline-block;
        width:100px;
        height:67px;
        background: url('/static/img/weather2.png') no-repeat 18px -2px;
        background-size: 1100px 334px;
      }
    }
  }

</style>
