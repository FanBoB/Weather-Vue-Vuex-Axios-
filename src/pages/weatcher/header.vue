<template>
	<el-row :gutter="20" class="header-row">
	  <el-col :offset="1" :span="6" class="header-logo">
	      <h3 class="color-fff"><i>{{title}}</i></h3>
	  </el-col>
		
		<el-col :offset="10" :span="6">
			<Weather></Weather>
		</el-col>
	</el-row>
</template>

<script>
	import Weather from './getWeather'

	export default {
		name:'headers',
		data () {
			return {
				title:'天气'
			}
		},
		components:{
			"Weather":Weather,
		}
	}
</script>

<style>
	.header-row{
		height: 60px;
		line-height: 60px;
		border-bottom:1px solid rgba(255,255,255,.24);
	}
	.header-logo {
		font-size: 26px;
	}
</style>
