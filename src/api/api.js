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

export function json2array(data){
  var length=eval(data).length;
  var array=[];
  for(var i=0;i<length;i++){
    array[i]=data[i].orgcontent;
  }
  return array;
}