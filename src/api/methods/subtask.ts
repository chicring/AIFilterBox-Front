import request from "@/api/index";

export async function findSubtaskPage (page?: number, size?: number, name?: string, enable?: boolean, type?: string, action?: string, pushType?: string){
  return request({
    url: '/subtask',
    method: 'get',
    params: {
      page,
      size,
      name,
      enable,
      type,
      action,
      pushType
    }
  })
}


export function saveSubtask (data: any){
  return request({
    url: '/subtask',
    method: 'post',
    data
  })
}

export function updateSubtask (data: any){
  return request({
    url: '/subtask',
    method: 'put',
    data
  })
}

export function deleteSubtask (id: any){
  return request({
    url: `/subtask/${id}`,
    method: 'delete'
  })
}

export function enableSubTask (id: number, enable: boolean){
  return request({
    url: `/subtask/enable`,
    method: 'put',
    params: {
      id,
      enable
    }
  })
}
