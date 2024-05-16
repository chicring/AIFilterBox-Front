

type DataTableHeader = {
  key?: string;
  title: string;
  value?:  string;
  colspan?: number;
  rowspan?: number;
  fixed?: boolean;
  align?: 'start' | 'end' | 'center';
  width?: number;
  minWidth?: string;
  maxWidth?: string;
  sortable?: boolean;
  sort?: string;
};


const headers : DataTableHeader[] = [
  { title: '名称', key: 'name', align: 'center'},
  // { title: '描述', value: 'prompt' },
  { title: '定时规则', key: 'cronExpression' , align: 'center'},
  { title: '下一次运行时间', key: 'nextTime' , align: 'center'},
  { title: '监控站点', key: 'url', align: 'start', minWidth: '100px', maxWidth: '150px' },
  { title: '类型', key: 'type', align: 'center' },
  // { text: '请求头', value: 'requestHeader' },
  // { title: '关键词匹配', value: 'KeywordMatching' },
  // { title: '关键词过滤', value: 'keywordBlocking' },
  // { text: '请求体匹配规则', value: 'pattern' },
  { title: '启用', key: 'enable', align: 'start' },

  { title: '触发行为', key: 'action', align: 'center' },
  { title: '推送类型', key: 'pushType', align: 'center' },
  // { text: '发布地址域名', value: 'domain' , align: 'center'},
  { title: '消息id前缀', key: 'prefix' , align: 'center'},
  // { title: '主任务id', value: 'taskId' , align: 'center'},
  { title: '操作', key: 'actions' , align: 'center'},
];


export default headers
