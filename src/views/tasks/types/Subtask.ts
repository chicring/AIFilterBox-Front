type Subtask = {
  id?: number;
  name?: string;
  prompt?: string;
  cronExpression?: string;
  enable?: boolean;
  url?: string;
  type?: string;
  requestHeader?: string;
  KeywordMatching?: string;
  keywordBlocking?: string;
  pattern?: string;
  action?: string;
  pushType?: string;
  domain?: string;
  prefix?: string;
  taskId?: number;
};


export default Subtask;
