import axios from "axios";


export function getHelloWorldMessage(data){
  return axios({
    method: 'get',
    url: '/api/test/helloWorld',
    dataType: 'json',
    params:data
  })
}

export function uploadFile(data){
  return axios({
    method: 'get',
    data:data,
    url: '/api/test/upload',
    dataType: 'form'
  })
}

export function getOrgs(data){
  return axios({
    method:'get',
    params:{
      UnitID:data
    },
    url:'/api/UnitModuler/getOrgs',
    dataType: 'json'
  })
}

export async function promise2array(data){
  let obj=[];
  let array=[];
  await data.then(res=>{
    obj=res.data;
  })
  for(var i in obj){
    array.push(obj[i]);
  }
  console.log(array);
  return array;
}