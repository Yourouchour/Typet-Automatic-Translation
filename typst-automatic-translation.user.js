// ==UserScript==
// @name         Typet Automatic Translation
// @namespace    http://tampermonkey.net/
// @version      2025-08-13
// @description  Typst Automatic Translation
// @author       Yourouchour
// @match        https://typst.app/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const ChineseTranslation = {
        "Project": "项目",
        "Team": "团队",
        "View": "视图",
        "Help": "帮助",
        "About Typst": "关于Typst",
        "Account settings": "账户设置",
        "Sign out": "登出",
        "Go to landing page": "回到首页",
        "New project": "新建项目",
        "Incoming invites": "邀请",
        "New team": "新建团队",
        "Grid view": "网格视图",
        "List view": "列表视图",
        "Sort projects by": "排序",
        "Alphabetical": "按字母顺序",
        "Last modified": "按修改时间",
        "Newest first": "由近到远",
        "Oldest first": "由远到近",
        "Created": "按创建时间",
        "Theme": "主题",
        "Light": "浅色",
        "Dark": "深色",
        "System": "跟随系统",
        "Tutorial": "教程",
        "Reference": "参考",
        "Forum": "论坛",
        "Tips": "提示",
        "Feedback": "反馈",
        "Support": "支持",
        "Projects": "所有项目",
        "Dashboard": "控制台",
        "My Projects": "我的项目",
        "Empty document": "空白文档",
        "Start from scratch": "从头开始",
        "Start from template": "使用模板",
        "Configure a template to get going": "配置一个模板以开始",
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
