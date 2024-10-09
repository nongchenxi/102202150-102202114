Page({
  data: {
    recentSearches: ['搜索内容1', '搜索内容2', '搜索内容3'],  // 最近搜索的假数据
    suggestions: ['搜索内容', '搜索内容', '搜索内容', '搜索内容'],  // 猜你想搜的假数据
    searchInput: ''
  },

  // 搜索输入框内容变化时触发
  onSearchInput(e) {
    this.setData({
      searchInput: e.detail.value
    });
  },

  // 点击搜索按钮时触发
  onSearch() {
    const input = this.data.searchInput;
    if (input) {
      wx.showToast({
        title: '搜索内容: ' + input,
        icon: 'none'
      });
      // 这里可以加入搜索逻辑，比如跳转到结果页面等
    } else {
      wx.showToast({
        title: '请输入搜索内容',
        icon: 'none'
      });
    }
  }
});
