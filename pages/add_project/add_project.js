Page({
  data: {
    projectName: '',
    projectMembers: '',
    instructor: '',
    skills: [
      { name: 'HTML', checked: false },
      { name: 'CSS', checked: false },
      { name: 'JavaScript', checked: false }
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
    const selectedValues = e.detail.value;
    const updatedSkills = this.data.skills.map(skill => ({
      ...skill,
      checked: selectedValues.includes(skill.name)
    }));
    this.setData({ skills: updatedSkills });
  },
   // 处理技能输入框的内容变化
   handleSkillInput(e) {
    const index = e.currentTarget.dataset.index;
    const value = e.detail.value;
    const updatedSkills = this.data.skills.map((skill, idx) => {
      if (idx === index) {
        return { ...skill, name: value };
      }
      return skill;
    });
    this.setData({ skills: updatedSkills });
  },

   // 添加新的技能
   addSkill() {
    const newSkill = { name: '', checked: false };
    const updatedSkills = [...this.data.skills, newSkill];
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