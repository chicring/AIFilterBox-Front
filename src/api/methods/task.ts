import request from "@/api/index";


export function findTaskPage (page?: number, size?: number){
  return request({
    url: '/task',
    method: 'get',
    params: {
      page,
      size
    }
  })
}

export function saveTask (task: any){
  return request({
    url: '/task',
    method: 'post',
    data: task
  })
}

export function updateTask (task: any){
  return request({
    url: '/task',
    method: 'put',
    data: task
  })
}

export function deleteTask (id: number){
  return request({
    url: `/task/${id}`,
    method: 'delete'
  })
}

export function enableTask (id: number, enable: boolean){
  return request({
    url: `/task/enabled`,
    method: 'put',
    params: {
      id,
      enable
    }
  })
}
