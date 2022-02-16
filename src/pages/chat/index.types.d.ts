export interface IChatRecordData {
  content?: string | undefined;
  date?: number | undefined;
  from?: string | undefined;
  to?: string | undefined;
}

export interface IChatRecordList {
  chatRecordData?: IChatRecordData[];
  chatRecordListRef?: any;
}
