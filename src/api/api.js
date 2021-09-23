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
