// ==UserScript==
// @name         Typst Automatic Translation (unofficial)
// @namespace    http://tampermonkey.net/
// @version      2025-08-14
// @description  Typst Automatic Translation (unofficial)
// @author       Yourouchour
// @match        https://typst.app/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
    "use strict";
    /**
     * @type {Object<string, string?>}
     */
    const EnglishTranslation = {
        "Change language": "Change language",
        "Cancel": "Cancel",
        "Confirm": "Confirm",
    };
    /**
     * @type {Object<string, string?>}
     */
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
        "View": "视图",

        "Change language": "切换语言",
        "Cancel": "取消",
        "Confirm": "确认",
        "Language": "语言",

        // Used on the sign in page.
        "Back to homepage": "Translate me",
        "Create a new account instead": "Translate me",
        "Email": "Translate me",
        "Forgot your password?": "Translate me",
        "Password": "Translate me",
        "Please sign in to access this page.\n": "Translate me.\n",
        "Sign in": "Translate me",
        "Sign In": "Translate me",
        "The password is incorrect.\n": "Translate me.\n",
    };
    /**
     * @type {Object<string, string?>}
     */
    const RussianTranslation = {
        "Change language": "Изменить язык",
        "Cancel": "Отмена",
        "Confirm": "Подтвердить",
        "Language": "Язык",

        // Used on the sign in page.
        "Back to homepage": "Вернуться на главную страницу",
        "Create a new account instead": "Регистрация",
        "Email": "Электронная почта",
        "Forgot your password?": "Забыли пароль?",
        "Password": "Пароль",
        "Please sign in to access this page.\n":
            "Пожалуйста, войдите, чтобы получить доступ к этой странице.\n",
        "Sign in": "Войти",
        "Sign In": "Войти",
        "The password is incorrect.\n": "Пароль неверный.\n",
    };
    let Translation = EnglishTranslation;
    const savedLanguage = localStorage.getItem("typstAutomaticTranslationLanguage");
    if (savedLanguage) {
        switch (savedLanguage) {
            case "en":
                Translation = EnglishTranslation;
                break;
            case "zh":
                Translation = ChineseTranslation;
                break;
            case "ru":
                Translation = RussianTranslation;
                break;
        }
    }
    /**
     * Translate a specific element of the UI.
     * @param {HTMLElement} element HTML element to translate
     */
    function translateElement(element) {
        const is_input_tag = element instanceof HTMLInputElement;
        if (is_input_tag && element.type !== "submit") {
            return;
        }
        const key = is_input_tag ? element.value : element.innerText;
        const translatedText = Translation[key];
        if (translatedText) {
            is_input_tag ? (element.value = translatedText) : (element.innerText = translatedText);
        }
    }
    /**
     * Add a language button to the header.
     */
    function addChangeLanguageButton() {
        /**
         * @type {HTMLElement}
         */
        let languageButton;
        /**
         * Callback function to add the language button to the UI.
         * Abstracts the page-specific logic.
         * @type {function(): void}
         */
        let addButtonToUI;

        // Sign in page does not have the menu bar, so the button must be created manually.
        if (location.pathname.startsWith("/signin")) {
            const submitRow = document.querySelector(".submit-row");
            if (!submitRow) return;
            if (submitRow.getAttribute("data-has-language-button") === "true") return;
            submitRow.setAttribute("data-has-language-button", "true");

            const buttonElement = document.createElement("button");
            buttonElement.classList.add("change-language");
            buttonElement.type = "button";

            // Make use of CSS pseudo-classes instead of JS-based styling.
            const css = `
                button.change-language {
                    background: white;
                    color: black;
                    border: 1px solid black;
                    padding: 10px 20px;
                }
                button.change-language:hover {
                    background: #eee;
                }
                button.change-language:active {
                    background: #ddd;
                }
            `;
            const style = document.createElement("style");
            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }
            document.getElementsByTagName("head")[0].appendChild(style);

            languageButton = buttonElement;
            addButtonToUI = () => submitRow.prepend(languageButton);
        } else {
            const header = document.querySelector("header");
            if (!header) return;
            if (header.getAttribute("data-has-language-button") === "true") return;

            header.setAttribute("data-has-language-button", "true");
            const menuBar = header.querySelector("div");
            if (!menuBar) return;

            const secondButtonDiv = menuBar.children[menuBar.children.length - 1];
            if (!secondButtonDiv) return;

            const newButtonDiv = secondButtonDiv.cloneNode(true);
            languageButton = newButtonDiv.querySelector("button");
            if (!languageButton) return;
            addButtonToUI = () => menuBar.appendChild(newButtonDiv);
        }

        languageButton.innerText = "Language";
        languageButton.setAttribute("data-menubar-index", "5");

        // create language modal
        languageButton.addEventListener("click", () => {
            // remove existing modal if it exists
            const existingModal = document.getElementById("language-modal");
            if (existingModal) {
                document.body.removeChild(existingModal);
                return;
            }

            // create overlay
            const overlay = document.createElement("div");
            overlay.style.position = "fixed";
            overlay.style.top = "0";
            overlay.style.left = "0";
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
            overlay.style.zIndex = "9998";
            overlay.style.display = "flex";
            overlay.style.justifyContent = "center";
            overlay.style.alignItems = "center";

            // create modal
            const modal = document.createElement("div");
            modal.id = "language-modal";
            modal.style.backgroundColor = "#fff";
            modal.style.borderRadius = "8px";
            modal.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
            modal.style.width = "320px";
            modal.style.zIndex = "9999";
            modal.style.fontFamily = "'Segoe UI', system-ui, sans-serif";
            modal.style.overflow = "hidden";
            modal.style.transform = "translateY(-20px)";
            modal.style.opacity = "0";
            modal.style.transition = "all 0.3s ease";

            // modal title
            const title = document.createElement("div");
            title.innerText = Translation["Change language"];
            title.style.padding = "16px";
            title.style.fontSize = "16px";
            title.style.fontWeight = "600";
            title.style.borderBottom = "1px solid #eaeaea";
            title.style.color = "#242424";

            // select container
            const selectContainer = document.createElement("div");
            selectContainer.style.padding = "16px";

            // select
            const select = document.createElement("select");
            select.style.width = "100%";
            select.style.padding = "10px";
            select.style.borderRadius = "4px";
            select.style.border = "1px solid #e1e1e1";
            select.style.fontSize = "14px";
            select.style.color = "#242424";
            select.style.backgroundColor = "#fff";
            select.style.outline = "none";
            select.style.cursor = "pointer";

            const languages = [
                { value: "en", text: "English" }, // English
                { value: "zh", text: "简体中文" }, // Simplified Chinese
                { value: "ru", text: "Русский" }, // Russian
            ];

            languages.forEach(lang => {
                const option = document.createElement("option");
                option.value = lang.value;
                option.textContent = lang.text;
                select.appendChild(option);
            });

            selectContainer.appendChild(select);

            // button container
            const buttonContainer = document.createElement("div");
            buttonContainer.style.padding = "12px 16px";
            buttonContainer.style.display = "flex";
            buttonContainer.style.justifyContent = "flex-end";
            buttonContainer.style.gap = "8px";
            buttonContainer.style.borderTop = "1px solid #eaeaea";
            buttonContainer.style.backgroundColor = "#f9f9f9";

            const cancelButton = document.createElement("button");
            cancelButton.innerText = Translation["Cancel"];
            cancelButton.style.padding = "8px 16px";
            cancelButton.style.border = "1px solid #d1d1d1";
            cancelButton.style.borderRadius = "4px";
            cancelButton.style.backgroundColor = "#fff";
            cancelButton.style.color = "#242424";
            cancelButton.style.fontSize = "14px";
            cancelButton.style.cursor = "pointer";
            cancelButton.style.transition = "background-color 0.2s";

            cancelButton.addEventListener("mouseenter", () => {
                cancelButton.style.backgroundColor = "#f0f0f0";
            });

            cancelButton.addEventListener("mouseleave", () => {
                cancelButton.style.backgroundColor = "#fff";
            });

            const confirmButton = document.createElement("button");
            confirmButton.innerText = Translation["Confirm"];
            confirmButton.style.padding = "8px 16px";
            confirmButton.style.border = "none";
            confirmButton.style.borderRadius = "4px";
            confirmButton.style.backgroundColor = "#0078d4";
            confirmButton.style.color = "white";
            confirmButton.style.fontSize = "14px";
            confirmButton.style.cursor = "pointer";
            confirmButton.style.transition = "background-color 0.2s";

            confirmButton.addEventListener("mouseenter", () => {
                confirmButton.style.backgroundColor = "#106ebe";
            });

            confirmButton.addEventListener("mouseleave", () => {
                confirmButton.style.backgroundColor = "#0078d4";
            });

            buttonContainer.appendChild(cancelButton);
            buttonContainer.appendChild(confirmButton);

            modal.appendChild(title);
            modal.appendChild(selectContainer);
            modal.appendChild(buttonContainer);
            overlay.appendChild(modal);
            document.body.appendChild(overlay);

            // show animation
            setTimeout(() => {
                modal.style.transform = "translateY(0)";
                modal.style.opacity = "1";
            }, 10);

            const closeModal = () => {
                modal.style.transform = "translateY(-20px)";
                modal.style.opacity = "0";
                setTimeout(() => {
                    if (document.body.contains(overlay)) {
                        document.body.removeChild(overlay);
                    }
                }, 300);
            };

            cancelButton.addEventListener("click", closeModal);
            overlay.addEventListener("click", e => {
                if (e.target === overlay) closeModal();
            });

            confirmButton.addEventListener("click", () => {
                const selectedLanguage = select.value;
                console.log(`Change language to: ${selectedLanguage}`);
                switch (selectedLanguage) {
                    case "en":
                        Translation = EnglishTranslation;
                        break;
                    case "zh":
                        Translation = ChineseTranslation;
                        break;
                    case "ru":
                        Translation = RussianTranslation;
                        break;
                }
                localStorage.setItem("typstAutomaticTranslationLanguage", selectedLanguage);
                location.reload();
            });
        });

        addButtonToUI();
    }
    /**
     * Main function (callback for `MutationObserver`).
     * @type {MutationCallback}
     */
    function translate(mutationList, observer) {
        console.log("Translating...");
        var startTime = performance.now();
        observer.disconnect();
        addChangeLanguageButton();
        const headerButtons = document.querySelector("header")?.querySelectorAll("button");
        if (headerButtons) {
            headerButtons.forEach(button => {
                translateElement(button);
            });
        }
        const menus = document.querySelectorAll("ul[role=menu]");
        menus.forEach(menu => {
            const menuItems = menu.querySelectorAll("li[role=menuitem]");
            if (menuItems) {
                menuItems.forEach(item => {
                    const span = item.querySelector("span");
                    if (span) {
                        translateElement(span);
                    }
                });
            }
        });
        const h1 = document.querySelector("h1");
        if (h1) {
            translateElement(h1);
        }
        const h2 = document.querySelector("h2");
        if (h2) {
            translateElement(h2);
        }
        const h3 = document.querySelector("h3");
        if (h3) {
            translateElement(h3);
        }
        const projectListHeader = document.querySelector("div[class*=_projectListHeader]");
        if (projectListHeader) {
            const strongs = projectListHeader.querySelectorAll("strong");
            strongs.forEach(strong => {
                translateElement(strong);
            });
            const spans = projectListHeader.querySelectorAll("span");
            spans.forEach(span => {
                translateElement(span);
            });
        }

        // Used on the sign in page.
        if (location.pathname.startsWith("/signin")) {
            const selectors = [
                "label", // Labels for form fields.
                "a.back", // Link to return to homepage.
                ".submit-row > a", // Links under the form.
                ".status[aria-live='polite']", // Info/error status message.
                "input[type='submit']", // Submit form button.
                "button.change-language", // The injected language button.
            ];
            for (const selector of selectors) {
                document.querySelectorAll(selector).forEach(translateElement);
            }
        }

        observer.observe(document.body, { childList: true, subtree: true });

        var endTime = performance.now();
        console.log(`Translation took ${endTime - startTime} milliseconds.`);
    }
    const observer = new MutationObserver(translate);
    observer.observe(document.body, { childList: true, subtree: true });
})();
