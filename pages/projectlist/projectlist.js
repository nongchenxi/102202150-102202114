Page({
  data: {
    searchKeyword: '',
    currentTab: 'all', // 默认显示全部项目
    projects: [
      {
        id: 1,
        name: "项目名称1",
        type: "类型1",
        description: "项目描述1",
        image: "https://mp-34a5d4ee-1705-4d90-aebc-3458b73c8f4f.cdn.bspapp.com/images/mine/add_project/1@1x.png",
        progress: 50,
        statusText: "招募中",
        statusColor: "#32cd32"
      },
      {
        id: 2,
        name: "项目名称2",
        type: "类型2",
        description: "项目描述2",
        image: "https://mp-34a5d4ee-1705-4d90-aebc-3458b73c8f4f.cdn.bspapp.com/images/mine/add_project/Copy 1@1x.png",
        progress: 15,
        statusText: "进行中",
        statusColor: "#0088ff"
      },
      {
        id: 3,
        name: "项目名称3",
        type: "类型3",
        description: "项目描述3",
        image: "https://mp-34a5d4ee-1705-4d90-aebc-3458b73c8f4f.cdn.bspapp.com/images/mine/add_project/Copy 2@1x.png",
        progress: 100,
        statusText: "已结束",
        statusColor: "#999"
      }
      // 更多项目
    ]
  },

  handleSearchInput(e) {
    this.setData({
      searchKeyword: e.detail.value
    });
  },

  handleSearch() {
    // 实现搜索逻辑
    console.log("搜索关键词:", this.data.searchKeyword);
  },

  onLoad() {
    this.filterProjects('all');
  },

  changeTab(event) {
    const tab = event.currentTarget.dataset.tab;
    this.setData({
      currentTab: tab
    });
    this.filterProjects(tab);
  },

  filterProjects(status) {
    let filteredList = this.data.projectList;

    if (status === 'recruiting') {
      filteredList = this.data.projectList.filter(item => item.status === 'recruiting');
    } else if (status === 'all') {
      filteredList = this.data.projectList;
    }

    this.setData({
      projectList: filteredList
    });
  }
});
