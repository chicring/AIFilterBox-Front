
// {
//   "id": 2,
//   "createTime": "2024-05-12 21:14:30",
//   "updateTime": "2024-05-12 21:14:30",
//   "name": "2",
//   "prompt": "",
//   "cronExpression": "0/10 * * * * ?",
//   "enable": false,
//   "url": "https://api.bilibili.com/x/web-interface/popular?ps=20&pn=1",
//   "type": "default",
//   "requestHeader": null,
//   "keywordBlocking": "",
//   "pattern": "{ \"root\": \"$.data.list\", \"title\": \"$.title\"  }",
//   "action": "push",
//   "pushType": "mail",
//   "domain": null,
//   "prefix": null,
//   "taskId": 1,
//   "keywordMatching": ""
// },

const fields = [
  { model: 'name', label: '任务名称' },
  { model: 'cronExpression', label: '定时规则 cron表达式', rounded: 'md' },
  { model: 'url', label: '请求地址', rounded: 'md' },
  { model: 'prefix', label: '消息id前缀,例如: xbk', rounded: 'md' },
  { model: 'domain', label: '发布地址域名，url需要拼接时使用', rounded: 'md' },
  { model: 'keywordBlocking', label: '关键词屏蔽,逗号隔开', rounded: 'md' },
  { model: 'keywordMatching', label: '关键词匹配,逗号隔开', rounded: 'md' },
  { model: 'prompt', label: 'ai提示词，根据提示词过滤', rounded: 'md' },
  { model: 'type', label: '任务类型', rounded: 'md' },
  { model: 'pushType', label: '推送类型', rounded: 'md' },
  { model: 'action', label: '触发方式', rounded: 'md' },
];


export default fields;
