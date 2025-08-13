// ==UserScript==
// @name         Typst Automatic Translation (unofficial)
// @namespace    http://tampermonkey.net/
// @version      2025-08-13
// @description  Typst Automatic Translation (unofficial)
// @author       Yourouchour
// @match        https://typst.app/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const ChineseTranslation = {
        "About Typst": "关于Typst",
        "Account settings": "账户设置",
        "Alphabetical": "按字母顺序",
        "Backup project": "备份项目",
        "Configure a template to get going": "配置一个模板以开始",
        "Created": "按创建时间",
        "Dark": "深色",
        "Dashboard": "控制台",
        "Edit": "编辑",
        "Empty document": "空白文档",
        "Export as": "导出",
        "Feedback": "反馈",
        "File": "文件",
        "Forum": "论坛",
        "Go to landing page": "回到首页",
        "Go to line": "跳转到行",
        "Grid view": "网格视图",
        "Help": "帮助",
        "Incoming invites": "邀请",
        "Last modified": "按修改时间",
        "Light": "浅色",
        "List view": "列表视图",
        "My Projects": "我的项目",
        "New file": "新建文件",
        "New project": "新建项目",
        "New team": "新建团队",
        "Newest first": "由近到远",
        "Oldest first": "由远到近",
        "Package project": "打包项目",
        "Project": "项目",
        "Projects": "所有项目",
        "Quick export PDF": "快速导出PDF",
        "Redo": "恢复",
        "Reference": "参考",
        "Rename file": "重命名",
        "Search and replace": "查找和替换",
        "Select all": "全选",
        "Sign out": "登出",
        "Sort projects by": "排序",
        "Start from scratch": "从头开始",
        "Start from template": "使用模板",
        "Support": "支持",
        "System": "跟随系统",
        "Team": "团队",
        "Theme": "主题",
        "Tips": "提示",
        "Tutorial": "教程",
        "Undo": "撤销",
        "Upload file": "上传文件",
        "View": "视图"
    }
    const Translation = ChineseTranslation;
    function translateFragment(fragment) {
        const newText = Translation[fragment.innerText];
        if (newText) {
            fragment.innerText = newText;
        }
    }
    function translate(mutationList, observer) {
        console.log("Translating...");
        observer.disconnect();
        const headerButtons = document.querySelector("header")?.querySelectorAll("button");
        if (headerButtons) {
            headerButtons.forEach(button => {
                translateFragment(button);
            })
        }
        const menus = document.querySelectorAll("ul[role=menu]")
        menus.forEach(menu => {
            const menuItems = menu.querySelectorAll("li[role=menuitem]")
            if (menuItems) {
                menuItems.forEach(item => {
                    const span = item.querySelector("span");
                    if (span) {
                        translateFragment(span);
                    }
                })
            }
        })
        const h1 = document.querySelector("h1");
        if (h1) {
            translateFragment(h1);
        }
        const h2 = document.querySelector("h2");
        if (h2) {
            translateFragment(h2);
        }
        const h3 = document.querySelector("h3");
        if (h3) {
            translateFragment(h3);
        }
        const projectListHeader = document.querySelector("div[class*=_projectListHeader]");
        if (projectListHeader) {
            const strongs = projectListHeader.querySelectorAll("strong");
            strongs.forEach(strong => {
                translateFragment(strong);
            })
            const spans = projectListHeader.querySelectorAll("span");
            spans.forEach(span => {
                translateFragment(span);
            })
        }
        observer.observe(document.body, { childList: true, subtree: true });
    }
    const observer = new MutationObserver(translate);
    observer.observe(document.body, { childList: true, subtree: true });
})();
