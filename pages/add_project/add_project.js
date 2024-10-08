Page({
  data: {
    projectName: '',
    projectMembers: '',
    instructor: '',
    skills: [
      { name: '选项1', checked: true },
      { name: '选项2', checked: false },
      { name: '选项3', checked: false },
      { name: '选项4', checked: true },
      { name: '选项5', checked: false },
      { name: '选项6', checked: false }
    ],
    projectType: '项目类型1',
    projectTypes: ['项目类型1', '项目类型2', '项目类型3'],
    deadline: '',
    description: '',
    allowOutsiders: true,
    createGroupChat: true
  },

  // 更新输入框数据
  handleInputChange(e) {
    const field = e.currentTarget.dataset.field;
    this.setData({ [field]: e.detail.value });
  },

  // 技能选择
  handleSkillChange(e) {
    const selectedSkills = e.detail.value;
    const updatedSkills = this.data.skills.map(skill => ({
      ...skill,
      checked: selectedSkills.includes(skill.name)
    }));
    this.setData({ skills: updatedSkills });
  },

  // 项目类型选择
  handleProjectTypeChange(e) {
    this.setData({ projectType: this.data.projectTypes[e.detail.value] });
  },

  // 日期选择
  handleDateChange(e) {
    this.setData({ deadline: e.detail.value });
  },

  // 开关切换
  handleSwitchChange(e) {
    const field = e.currentTarget.dataset.field;
    this.setData({ [field]: e.detail.value });
  },

  // 保存草稿
  handleSaveDraft() {
    wx.showToast({
      title: '草稿已保存',
      icon: 'success'
    });
  },

  // 发布项目
  handlePublishProject() {
    wx.showToast({
      title: '项目已发布',
      icon: 'success'
    });
  }
});
