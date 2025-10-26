## 🧾 Resume Generator

在线简历生成器。无须 fork 仓库，即可在线预览、编辑和下载 PDF 简历。✨ [在线编辑](https://visiky.github.io/resume)

内置 3 套模板，支持**自定义主题颜色**、**自定义模块标题**、**国际化(中/英)** 等.

|默认模板| 简易模板| 简易模板2（适用于多页）|
| -------------------------------- | --------------------------------------------------|----------------------- |
| <img src="https://user-images.githubusercontent.com/15646325/147406773-d1583d83-b4ed-496a-9b7c-2fca8a5fc624.png" height="280" />|<img src="https://user-images.githubusercontent.com/15646325/147406862-19ac2b2a-6dcf-466f-a0dd-53fd1a6abccd.png" height="280" />| <img src="https://user-images.githubusercontent.com/15646325/147406903-19529fe9-9ef8-4877-8165-b2fad0e3b48a.png" height="280" />|
|[Live Demo](https://visiky.github.io/resume?user=visiky)  |[Live Demo](https://visiky.github.io/resume?user=visiky&template=template2)|[Live Demo](https://visiky.github.io/resume?user=visiky&template=template3) |

## 如何使用（How to use）

**方式 1:**

在线编辑 -> 导出配置 -> 存储“简历信息”在个人 github special 仓库下（例如: [visiky/visiky](https://github.com/visiky/visiky/blob/master/resume.json)）

**方式 2:**

直接创建一个 `resume.json` 文件在自己的 special 仓库下 (内容参考: [visiky/visiky](https://github.com/visiky/visiky/blob/master/resume.json)).

**最后**

访问 https://visiky.github.io/resume?user={user}&branch={branch}

参数说明:

| 参数   | 描述          | 默认值       |
| ------ | ------------- | ------------ |
| user   | github 用户名 | 必选         |
| template | 模板        | 默认: template1 |
| branch | 分支名        | 默认: master |
| mode | 模式        | 备注: 默认为‘只读’模式，设置为: `mode=edit` 即可进入编辑模式 |
| lang | 语言        | 默认: zh-CN |

## 本地开发（Local develop）

```bash
# pnpm required, to see: https://pnpm.io/installation
# Install dependencies
pnpm install
# Then, start
npm start
```

## ✨ Recommendation

- [resumemaker](https://www.resumemaker.online/es.php)
- [Geek Resume - Pure Markdown, an online resume editor for developer.](https://www.jijian.press/)


## help
这个 jq 命令的作用是：遍历原始JSON对象的每个键值对，并将每个键值对中的"值"（.value）替换为当前的"键"（.key），这样生成的新的键值对中，键和值就都是原来的ID了

npx formatjs extract 'src/**/*.{js,jsx,ts,tsx}' | jq 'with_entries(.value = .key)' > lang/zh.json



# 使用 jq 工具进行转换（需要安装 jq）
npx formatjs extract 'src/**/*.ts*' | jq 'with_entries(.value = .value.defaultMessage)' > lang/zh.json