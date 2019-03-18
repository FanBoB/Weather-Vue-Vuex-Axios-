import axios from 'axios';
import { key , weatherKey } from '../../../../static/config'
//获取城市
export function getWeather (){
    // const API_PROXY = 'https://bird.ioliu.cn/v1/?url='
    const url = `/historyWeather/province?key=${key}`;

    return axios.get(url).then(res=>{
        if(res.data.error_code == 0){
            return Promise.resolve(res.data)
        }else{
            return Promise.reject(res.data.reason)
        }
    }).catch(err => {
        return Promise.reject(err)
    })
}

//联动获取城市地区
export function getArea(params){
  const url = `/historyWeather/citys?key=${key}`;

    return axios.get(url,{params}).then(res=>{
        if(res.data.error_code == 0){
            return Promise.resolve(res.data)
        }else{
            return Promise.reject(res.data.reason)
        }
    }).catch( err=> {
        return Promise.reject(err)
    })
}

//获取天气
export function weatherIndex(params){
  const url = `/weather/index?key=${weatherKey}`;

  return axios.get(url,{params}).then(res=>{
    if(res.data.error_code == 0){
      return Promise.resolve(res.data);
    }else{
      return Promise.reject(res.data.reason)
    }
  }).catch(err=>{
    return Promise.reject(err)
  })
}
