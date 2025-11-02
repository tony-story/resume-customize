import type { ResumeConfig } from '@/components/types';

/** 初始化常量 */
export const RESUME_INFO: ResumeConfig = {
  avatar: {
    src: undefined,
    hidden: false,
  },
  profile: {
    name: '张三',
    email: 'aGVsbG9AZXhhbXBsZS5jb20=', // base64加密
    mobile: 'MTM4KioqKioqKg==', // base64加密
    workExpYear: '3',
    workPlace: '上海',
    positionTitle: '高级前端工程师',
    encrypted: true, // 标记信息已加密
  },
  educationList: [
    {
      edu_time: ['2018.09.01', '2022.06.30'],
      school: 'AA大学',
      major: '计算机科学与技术',
      academic_degree: '本科',
    },
  ],
  awardList: [
    {
      award_info: '全国大学生数学建模竞赛一等奖',
      award_time: '2020',
    },
    {
      award_info: '校级优秀毕业生',
      award_time: '2022',
    },
  ],
  workExpList: [
    {
      company_name: '某科技公司',
      department_name: '技术部',
      work_time: ['2022.07', null],
      work_desc: '负责公司核心产品的前端开发工作，参与技术选型和架构设计，推动团队技术提升。',
    },
  ],
  skillList: [
    {
      skill_name: 'JavaScript/TypeScript',
      skill_desc: '熟练使用 ES6+ 特性，深入理解 TypeScript 类型系统',
      skill_level: 90,
    },
    {
      skill_name: 'React/Vue',
      skill_desc: '深入理解框架原理，有大型项目开发经验',
      skill_level: 85,
    },
    {
      skill_name: 'Node.js',
      skill_desc: '熟悉 Node.js 开发，有后端项目经验',
      skill_level: 75,
    },
    {
      skill_name: '工程化',
      skill_desc: '熟悉前端工程化工具链，有性能优化经验',
      skill_level: 80,
    },
  ],
  projectList: [
    {
      project_name: '企业级管理系统',
      project_role: '核心开发者',
      project_time: '2022.07 - 至今',
      project_desc: '基于 React 开发的企业级管理系统，包含权限管理、数据可视化等功能模块。',
      project_content: '1. 负责核心模块的开发和维护\n2. 参与技术方案设计和代码审查\n3. 优化系统性能，提升用户体验',
    },
  ],
  workList: [
    {
      work_name: '个人博客',
      visit_link: 'https://example.com',
    },
  ],
  aboutme: {
    aboutme_desc: '热爱编程，喜欢钻研新技术，具有良好的团队协作能力和问题解决能力。持续学习，追求卓越，希望在前端领域不断成长。',
  },
  locales: {
    'en-US': {
      profile: {
        name: 'John Doe',
        email: 'aGVsbG9AZXhhbXBsZS5jb20=',
        mobile: 'MTM4KioqKioqKg==',
        github: 'aHR0cHM6Ly9naXRodWIuY29tL2V4YW1wbGU=',
        workExpYear: '3',
        encrypted: true,
      },
      educationList: [
        {
          edu_time: ['2018.09.01', '2022.06.30'],
          school: 'Fudan University',
          major: 'Computer Science',
          academic_degree: 'Bachelor',
        },
      ],
    },
  },
};
