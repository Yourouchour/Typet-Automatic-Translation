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
    }
    const Translation = ChineseTranslation;
    function translate(mutationList, observer) {
        console.log("Translating...");
        observer.disconnect();
        const headerButtons = document.querySelector("header")?.querySelectorAll("button");
        if (headerButtons) {
            headerButtons.forEach(button => {
                const newText = Translation[button.innerText];
                if (newText) {
                    button.innerText = newText;
                }
            })
        }
        const menus = document.querySelectorAll("ul[role=menu]")
        if (menus) {
            menus.forEach(menu => {
                const menuItems = menu.querySelectorAll("li[role=menuitem]")
                if (menuItems) {
                    menuItems.forEach(item => {
                        const span = item.querySelector("span");
                        if (span) {
                            const newText = Translation[span.innerText];
                            if (newText) {
                                span.innerText = newText;
                            }
                        }
                    })
                }
            })
        }
        observer.observe(document.body, { childList: true, subtree: true });

    }
    const observer = new MutationObserver(translate);
    observer.observe(document.body, { childList: true, subtree: true });
})();
