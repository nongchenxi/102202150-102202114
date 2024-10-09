Page({
  data: {
    notifications: [
      {
        id: 1,
        icon: 'https://mp-34a5d4ee-1705-4d90-aebc-3458b73c8f4f.cdn.bspapp.com/images/message/antFill-project@1x.png',
        message: '用户名1邀请你加入项目名称A',
        isAccepted: false
      },
      {
        id: 2,
        icon: 'https://mp-34a5d4ee-1705-4d90-aebc-3458b73c8f4f.cdn.bspapp.com/images/message/antFill-project@1x.png',
        message: '用户名2申请加入项目名称A',
        isAccepted: false
      },
      {
        id: 3,
        icon: 'https://mp-34a5d4ee-1705-4d90-aebc-3458b73c8f4f.cdn.bspapp.com/images/message/undefined fa-users-fas 2 Copy 1@1x.png',
        message: '用户名2已退出项目名称A',
        isAccepted: true
      },
      {
        id: 4,
        icon: 'https://mp-34a5d4ee-1705-4d90-aebc-3458b73c8f4f.cdn.bspapp.com/images/message/riFill-notification-3-fill@1x.png',
        message: '项目名称A创建成功！',
        isAccepted: true
      }
    ]
  },

  // 点击 "接受" 按钮
  onAccept(e) {
    const id = e.currentTarget.dataset.id;
    const updatedNotifications = this.data.notifications.map(item => {
      if (item.id === id) {
        item.isAccepted = true;
      }
      return item;
    });
    this.setData({ notifications: updatedNotifications });
    wx.showToast({
      title: '操作成功',
      icon: 'success'
    });
  },

  // 点击 "已读" 按钮
  onRead(e) {
    const id = e.currentTarget.dataset.id;
    const updatedNotifications = this.data.notifications.filter(item => item.id !== id);
    this.setData({ notifications: updatedNotifications });
  }
});
