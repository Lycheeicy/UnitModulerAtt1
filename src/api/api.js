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

export function obj2array(data){
  let array=[];
  for(var i in data){
    array.push(data[i]);
  }
  return array;
}