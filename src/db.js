export default class DB {
  /** mock */
  db = [
    {
      no: 1,
      content: "足球赛",
      category: "活动",
      finished: false,
    },
    {
      no: 2,
      content: "YOC项目评审",
      category: "工作",
      finished: true,
    },
  ];

  index = this.db.length;

  getAll() {
    return this.db;
  }

  addItem(item) {
    this.db = [...this.db, { ...item, no: ++this.index }];
  }

  finishItem(no) {
    this.db = this.db.map((item) => {
      if (item.no === no) {
        return {
          ...item,
          finished: true,
        };
      }

      return item;
    });
  }

  reopenItem(no) {
    this.db = this.db.map((item) => {
      if (item.no === no) {
        return {
          ...item,
          finished: false,
        };
      }

      return item;
    });
  }
}
