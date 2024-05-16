import request from "@/api/index";


// @GetMapping
// public Result<List<Option>> findAll() {
//   return Result.ok(optionService.selectList());
// }
//
// @PostMapping
// public Result<Void> save(Option option) {
//   optionService.save(option);
//   return Result.ok();
// }
//
// @PutMapping
// public Result<Void> update(Option option) {
//   optionService.update(option);
//   return Result.ok();
// }



export function findAll(){
  return request({
    url: '/option',
    method: 'get'
  })
}

export function saveBatch(data: any){
  return request({
    url: '/option/batch',
    method: 'post',
    data
  })
}

export function update(data: any){
  return request({
    url: '/option',
    method: 'put',
    data
  })
}
