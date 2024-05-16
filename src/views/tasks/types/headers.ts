

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
  { title: '名称', key: 'name', align: 'center', sortable: false },
  // { title: '描述', value: 'prompt' },
  { title: '定时规则', key: 'cronExpression' , align: 'center', sortable: false},
  { title: '下一次运行时间', key: 'nextTime' , align: 'center', sortable: false},
  { title: '监控站点', key: 'url', align: 'start', minWidth: '100px', maxWidth: '150px' , sortable: false},
  { title: '类型', key: 'type', align: 'center' , sortable: false},
  // { text: '请求头', value: 'requestHeader' },
  // { title: '关键词匹配', value: 'KeywordMatching' },
  // { title: '关键词过滤', value: 'keywordBlocking' },
  // { text: '请求体匹配规则', value: 'pattern' },
  { title: '启用', key: 'enable', align: 'start' , sortable: false},

  { title: '行为', key: 'action', align: 'center' , sortable: false},

  { title: '推送方式', key: 'pushType', align: 'center' , sortable: false},
  // { text: '发布地址域名', value: 'domain' , align: 'center'},

  { title: '消息id前缀', key: 'prefix' , align: 'center', sortable: false},
  // { title: '主任务id', value: 'taskId' , align: 'center'},
  { title: '操作', key: 'actions' , align: 'center', sortable: false},
];


export default headers
