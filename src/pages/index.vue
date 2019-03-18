<template>
  <div class="content">
    <el-container>
			<el-header>
			  <Header></Header>
			</el-header>

      <el-main>
        <ContentWeather></ContentWeather>
      </el-main>

      <!--<el-footer>-->
        <!--{{weatherId}}-->
      <!--</el-footer>-->
    </el-container>
  </div>
</template>

<script>
	import Header from './weatcher/header.vue'
  import ContentWeather from './weatcher/contentWeather.vue'
  import {mapGetters } from 'vuex'

	export default {
		name: 'HelloWorld',
    data(){
      return {

      }
    },
		components:{
			"Header":Header,
      'ContentWeather':ContentWeather,
		},
		methods:{

		},
    updated(){
      // this.$store.state.weatherId
    },
    watch:{
      // weatherID:function(value){
      //   console.log(value)
      // }
    },
    computed: {
      ...mapGetters(['weatherId'])
    }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
