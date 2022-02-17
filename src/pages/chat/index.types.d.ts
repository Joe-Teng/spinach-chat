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

export interface IChatFriends {
  avartar: string | undefined;
  name: string | undefined;
}

export interface IChatFriendsList {
  frindsStuff: [
    (
      | {
          avartar?: string | undefined;
          name?: string | undefined;
        }
      | undefined
    ),
    SetStateAction<string | undefined>
  ];
}
