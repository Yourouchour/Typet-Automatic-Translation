// ==UserScript==
// @name         Typst Automatic Translation (unofficial)
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @updateURL    https://raw.githubusercontent.com/yourouchour/Typst-Automatic-Translation/main/typst-automatic-translation.user.js
// @downloadURL  https://raw.githubusercontent.com/yourouchour/Typst-Automatic-Translation/main/typst-automatic-translation.user.js
// @description  Typst Automatic Translation (unofficial)
// @author       Yourouchour
// @match        https://typst.app/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at       document-start
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
        "Actions": "操作",
        "Add a suggestion/comment": "增加建议/评论",
        "Alphabetical": "按字母顺序",
        "Back": "返回",
        "Back to homepage": "回到首页",
        "Backup project": "备份项目",
        "Cancel": "取消",
        "Change language": "切换语言",
        "Clone a GitHub repository": "克隆一个GitHub仓库",
        "Clone a GitLab repository": "克隆一个GitLab仓库",
        "Configure a template to get going": "配置一个模板以开始",
        "Confirm": "确认",
        "Convert Word, LaTeX, ... to Typst": "将Word、LaTeX等转换为Typst",
        "Create a new account instead": "注册新账户",
        "Create your own template and start writing": "创建自己的模板并开始写作",
        "Created": "按创建时间",
        "Cursor size": "指针大小",
        "Customize a template": "自定义模板",
        "Dark": "深色",
        "Dashboard": "控制台",
        "Edit": "编辑",
        "Email": "电子邮件",
        "Empty document": "空白文档",
        "Explore files": "资源管理器",
        "Export as": "导出",
        "Feedback": "反馈",
        "File": "文件",
        "File panel": "文件面板",
        "Forgot your password?": "忘记密码？",
        "Forum": "论坛",
        "Go to dashboard": "前往控制台",
        "Go to landing page": "前往主页",
        "Go to line": "跳转到行",
        "Grid view": "网格视图",
        "Help": "帮助",
        "Improve panel": "改进面板",
        "Incoming invites": "邀请",
        "Language": "语言",
        "Large": "大",
        "Last modified": "按修改时间",
        "Light": "浅色",
        "List view": "列表视图",
        "My Projects": "我的项目",
        "New file": "新建文件",
        "New project": "新建项目",
        "New team": "新建团队",
        "Newest first": "由近到远",
        "Normal": "正常",
        "Oldest first": "由远到近",
        "Only show editor": "只显示编辑器",
        "Only show panels": "只显示面板",
        "Only show preview": "只显示预览",
        "Open settings": "打开设置",
        "Output panel": "输出面板",
        "Package project": "打包项目",
        "Password": "密码",
        "Please sign in to access this page.\n": "请登录以访问此页面。\n",
        "Present": "演示",
        "Project": "项目",
        "Projects": "所有项目",
        "Quick export PDF": "快速导出PDF",
        "Redo": "恢复",
        "Reference": "参考",
        "Rename file": "重命名",
        "Report project": "报告项目",
        "Restart and start profiling": "重启并开始分析",
        "Restart compiler": "重启编译器",
        "Scroll on type": "输入时滚动",
        "Search": "搜索",
        "Search and replace": "查找和替换",
        "Search panel": "搜索面板",
        "See issues and suggestions": "查看问题和建议",
        "Select all": "全选",
        "Settings panel": "设置面板",
        "Show both panels": "显示全部",
        "Show collaborator cursors": "显示协作者光标",
        "Show hints on error": "显示错误提示",
        "Show outline": "显示大纲",
        "Show preview in popup": "在弹出窗口中显示预览",
        "Show toolbar": "显示工具栏",
        "Sign In": "登录",
        "Sign in": "登录",
        "Sign out": "登出",
        "Sort projects by": "排序",
        "Speaker mode": "演讲模式",
        "Split views horizontally": "水平分割视图",
        "Split views vertically": "垂直分割视图",
        "Start from GitHub": "从GitHub开始",
        "Start from GitLab": "从GitLab开始",
        "Start from a file": "从文件开始",
        "Start from scratch": "从头开始",
        "Start from template": "使用模板",
        "Start profiling": "开始分析",
        "Support": "支持",
        "System": "跟随系统",
        "Team": "团队",
        "The password is incorrect.\n": "密码不正确。\n",
        "Theme": "主题",
        "Tips": "提示",
        "Toggle block comment": "增加块注释",
        "Toggle line comment": "增加行注释",
        "Tutorial": "教程",
        "Undo": "撤销",
        "Upgrade to Typst Pro": "升级到Typst Pro",
        "Upload file": "上传文件",
        "View": "视图",
        "Wrap lines": "自动换行",
        "Zoom in": "放大",
        "Zoom out": "缩小",
        "alphabetical": "按字母顺序",
        "last created": "按创建时间",
        "last modified": "按修改时间",
    };
    /**
     * @type {Object<string, string?>}
     */
    const RussianTranslation = {
        "About Typst": "О Typst",
        "Account settings": "Настройки аккаунта",
        "Actions": "Действия",
        "Add a suggestion/comment": "Добавить предложение/комментарий",
        "Alphabetical": "По алфавиту",
        "Back": "Назад",
        "Back to homepage": "Вернуться на главную",
        "Backup project": "Резервная копия проекта",
        "Cancel": "Отмена",
        "Change language": "Изменить язык",
        "Clone a GitHub repository": "Клонировать репозиторий GitHub",
        "Clone a GitLab repository": "Клонировать репозиторий GitLab",
        "Configure a template to get going": "Настроить шаблон для начала работы",
        "Confirm": "Подтвердить",
        "Convert Word, LaTeX, ... to Typst": "Конвертировать Word, LaTeX в Typst",
        "Create a new account instead": "Создать новый аккаунт",
        "Create your own template and start writing": "Создать свой шаблон и начать писать",
        "Created": "По дате создания",
        "Cursor size": "Размер курсора",
        "Customize a template": "Настроить шаблон",
        "Dark": "Тёмная",
        "Dashboard": "Панель управления",
        "Edit": "Редактировать",
        "Email": "Электронная почта",
        "Empty document": "Пустой документ",
        "Explore files": "Проводник файлов",
        "Export as": "Экспорт",
        "Feedback": "Обратная связь",
        "File": "Файл",
        "File panel": "Панель файлов",
        "Forgot your password?": "Забыли пароль?",
        "Forum": "Форум",
        "Go to dashboard": "Перейти в панель управления",
        "Go to landing page": "Перейти на главную страницу",
        "Go to line": "Перейти к строке",
        "Grid view": "Вид сеткой",
        "Help": "Помощь",
        "Improve panel": "Панель улучшений",
        "Incoming invites": "Входящие приглашения",
        "Language": "Язык",
        "Large": "Большой",
        "Last modified": "По дате изменения",
        "Light": "Светлая",
        "List view": "Вид списком",
        "My Projects": "Мои проекты",
        "New file": "Новый файл",
        "New project": "Новый проект",
        "New team": "Новая команда",
        "Newest first": "Сначала новые",
        "Normal": "Обычный",
        "Oldest first": "Сначала старые",
        "Only show editor": "Только редактор",
        "Only show panels": "Только панели",
        "Only show preview": "Только предпросмотр",
        "Open settings": "Открыть настройки",
        "Output panel": "Панель вывода",
        "Package project": "Упаковать проект",
        "Password": "Пароль",
        "Please sign in to access this page.\n": "Войдите для доступа к этой странице.\n",
        "Present": "Презентация",
        "Project": "Проект",
        "Projects": "Все проекты",
        "Quick export PDF": "Быстрый экспорт PDF",
        "Redo": "Повторить",
        "Reference": "Справка",
        "Rename file": "Переименовать",
        "Report project": "Пожаловаться на проект",
        "Restart and start profiling": "Перезапустить и начать профилирование",
        "Restart compiler": "Перезапустить компилятор",
        "Scroll on type": "Прокрутка при вводе",
        "Search": "Поиск",
        "Search and replace": "Поиск и замена",
        "Search panel": "Панель поиска",
        "See issues and suggestions": "Просмотр проблем и предложений",
        "Select all": "Выбрать всё",
        "Settings panel": "Панель настроек",
        "Show both panels": "Показать обе панели",
        "Show collaborator cursors": "Показать курсоры соавторов",
        "Show hints on error": "Показать подсказки при ошибке",
        "Show outline": "Показать структуру",
        "Show preview in popup": "Показать предпросмотр во всплывающем окне",
        "Show toolbar": "Показать панель инструментов",
        "Sign In": "Войти",
        "Sign in": "Войти",
        "Sign out": "Выйти",
        "Sort projects by": "Сортировать проекты по",
        "Speaker mode": "Режим докладчика",
        "Split views horizontally": "Разделить вид по горизонтали",
        "Split views vertically": "Разделить вид по вертикали",
        "Start from GitHub": "Начать с GitHub",
        "Start from GitLab": "Начать с GitLab",
        "Start from a file": "Начать с файла",
        "Start from scratch": "Начать с нуля",
        "Start from template": "Начать с шаблона",
        "Start profiling": "Начать профилирование",
        "Support": "Поддержка",
        "System": "Системная",
        "Team": "Команда",
        "The password is incorrect.\n": "Неверный пароль.\n",
        "Theme": "Тема",
        "Tips": "Советы",
        "Toggle block comment": "Блочный комментарий",
        "Toggle line comment": "Строчный комментарий",
        "Tutorial": "Руководство",
        "Undo": "Отменить",
        "Upgrade to Typst Pro": "Обновить до Typst Pro",
        "Upload file": "Загрузить файл",
        "View": "Вид",
        "Wrap lines": "Перенос строк",
        "Zoom in": "Увеличить",
        "Zoom out": "Уменьшить",
        "alphabetical": "по алфавиту",
        "last created": "по дате создания",
        "last modified": "по дате изменения",
    };
    /**
     * @type {Object<string, string?>}
     */
    const GermanTranslation = {
        "About Typst": "Über Typst",
        "Account settings": "Kontoeinstellungen",
        "Actions": "Aktionen",
        "Add a suggestion/comment": "Vorschlag/Kommentar hinzufügen",
        "Alphabetical": "Alphabetisch",
        "Back": "Zurück",
        "Back to homepage": "Zur Startseite",
        "Backup project": "Projekt sichern",
        "Cancel": "Abbrechen",
        "Change language": "Sprache ändern",
        "Clone a GitHub repository": "GitHub-Repository klonen",
        "Clone a GitLab repository": "GitLab-Repository klonen",
        "Configure a template to get going": "Vorlage konfigurieren",
        "Confirm": "Bestätigen",
        "Convert Word, LaTeX, ... to Typst": "Word, LaTeX in Typst konvertieren",
        "Create a new account instead": "Neues Konto erstellen",
        "Create your own template and start writing": "Eigene Vorlage erstellen",
        "Created": "Erstellungsdatum",
        "Cursor size": "Cursor-Größe",
        "Customize a template": "Vorlage anpassen",
        "Dark": "Dunkel",
        "Dashboard": "Dashboard",
        "Edit": "Bearbeiten",
        "Email": "E-Mail",
        "Empty document": "Leeres Dokument",
        "Explore files": "Dateien durchsuchen",
        "Export as": "Exportieren als",
        "Feedback": "Feedback",
        "File": "Datei",
        "File panel": "Datei-Panel",
        "Forgot your password?": "Passwort vergessen?",
        "Forum": "Forum",
        "Go to dashboard": "Zum Dashboard",
        "Go to landing page": "Zur Startseite",
        "Go to line": "Zu Zeile springen",
        "Grid view": "Rasteransicht",
        "Help": "Hilfe",
        "Improve panel": "Verbesserungs-Panel",
        "Incoming invites": "Eingehende Einladungen",
        "Language": "Sprache",
        "Large": "Groß",
        "Last modified": "Änderungsdatum",
        "Light": "Hell",
        "List view": "Listenansicht",
        "My Projects": "Meine Projekte",
        "New file": "Neue Datei",
        "New project": "Neues Projekt",
        "New team": "Neues Team",
        "Newest first": "Neueste zuerst",
        "Normal": "Normal",
        "Oldest first": "Älteste zuerst",
        "Only show editor": "Nur Editor anzeigen",
        "Only show panels": "Nur Panels anzeigen",
        "Only show preview": "Nur Vorschau anzeigen",
        "Open settings": "Einstellungen öffnen",
        "Output panel": "Ausgabe-Panel",
        "Package project": "Projekt packen",
        "Password": "Passwort",
        "Please sign in to access this page.\n": "Bitte anmelden.\n",
        "Present": "Präsentieren",
        "Project": "Projekt",
        "Projects": "Alle Projekte",
        "Quick export PDF": "PDF schnell exportieren",
        "Redo": "Wiederholen",
        "Reference": "Referenz",
        "Rename file": "Umbenennen",
        "Report project": "Projekt melden",
        "Restart and start profiling": "Neustart und Profiling starten",
        "Restart compiler": "Compiler neustarten",
        "Scroll on type": "Beim Tippen scrollen",
        "Search": "Suchen",
        "Search and replace": "Suchen und ersetzen",
        "Search panel": "Such-Panel",
        "See issues and suggestions": "Probleme und Vorschläge anzeigen",
        "Select all": "Alles auswählen",
        "Settings panel": "Einstellungs-Panel",
        "Show both panels": "Beide Panels anzeigen",
        "Show collaborator cursors": "Mitarbeiter-Cursor anzeigen",
        "Show hints on error": "Hinweise bei Fehlern anzeigen",
        "Show outline": "Gliederung anzeigen",
        "Show preview in popup": "Vorschau in Popup anzeigen",
        "Show toolbar": "Werkzeugleiste anzeigen",
        "Sign In": "Anmelden",
        "Sign in": "Anmelden",
        "Sign out": "Abmelden",
        "Sort projects by": "Projekte sortieren nach",
        "Speaker mode": "Präsentationsmodus",
        "Split views horizontally": "Horizontal teilen",
        "Split views vertically": "Vertikal teilen",
        "Start from GitHub": "Mit GitHub starten",
        "Start from GitLab": "Mit GitLab starten",
        "Start from a file": "Mit Datei starten",
        "Start from scratch": "Neu beginnen",
        "Start from template": "Mit Vorlage starten",
        "Start profiling": "Profiling starten",
        "Support": "Support",
        "System": "System",
        "Team": "Team",
        "The password is incorrect.\n": "Falsches Passwort.\n",
        "Theme": "Thema",
        "Tips": "Tipps",
        "Toggle block comment": "Blockkommentar umschalten",
        "Toggle line comment": "Zeilenkommentar umschalten",
        "Tutorial": "Anleitung",
        "Undo": "Rückgängig",
        "Upgrade to Typst Pro": "Zu Typst Pro upgraden",
        "Upload file": "Datei hochladen",
        "View": "Ansicht",
        "Wrap lines": "Zeilenumbruch",
        "Zoom in": "Vergrößern",
        "Zoom out": "Verkleinern",
        "alphabetical": "alphabetisch",
        "last created": "Erstellungsdatum",
        "last modified": "Änderungsdatum",
    };
    /**
     * @type {Object<string, string?>}
     */
    const FrenchTranslation = {
        // 通用界面
        "About Typst": "À propos de Typst",
        "Account settings": "Paramètres du compte",
        "Actions": "Actions",
        "Add a suggestion/comment": "Ajouter une suggestion/commentaire",
        "Alphabetical": "Alphabétique",
        "Back": "Retour",
        "Back to homepage": "Retour à l'accueil",
        "Backup project": "Sauvegarder le projet",
        "Cancel": "Annuler",
        "Change language": "Changer de langue",
        "Clone a GitHub repository": "Cloner un dépôt GitHub",
        "Clone a GitLab repository": "Cloner un dépôt GitLab",
        "Configure a template to get going": "Configurer un modèle",
        "Confirm": "Confirmer",
        "Convert Word, LaTeX, ... to Typst": "Convertir Word, LaTeX en Typst",
        "Create a new account instead": "Créer un nouveau compte",
        "Create your own template and start writing": "Créer votre propre modèle",
        "Created": "Date de création",
        "Cursor size": "Taille du curseur",
        "Customize a template": "Personnaliser un modèle",
        "Dark": "Sombre",
        "Dashboard": "Tableau de bord",
        "Edit": "Modifier",
        "Email": "E-mail",
        "Empty document": "Document vide",
        "Explore files": "Explorer les fichiers",
        "Export as": "Exporter en",
        "Feedback": "Retour",
        "File": "Fichier",
        "File panel": "Panneau Fichier",
        "Forgot your password?": "Mot de passe oublié ?",
        "Forum": "Forum",
        "Go to dashboard": "Aller au tableau de bord",
        "Go to landing page": "Aller à la page d'accueil",
        "Go to line": "Aller à la ligne",
        "Grid view": "Vue grille",
        "Help": "Aide",
        "Improve panel": "Panneau Améliorations",
        "Incoming invites": "Invitations reçues",
        "Language": "Langue",
        "Large": "Grand",
        "Last modified": "Dernière modification",
        "Light": "Clair",
        "List view": "Vue liste",
        "My Projects": "Mes projets",
        "New file": "Nouveau fichier",
        "New project": "Nouveau projet",
        "New team": "Nouvelle équipe",
        "Newest first": "Plus récent d'abord",
        "Normal": "Normal",
        "Oldest first": "Plus ancien d'abord",
        "Only show editor": "Afficher uniquement l'éditeur",
        "Only show panels": "Afficher uniquement les panneaux",
        "Only show preview": "Afficher uniquement l'aperçu",
        "Open settings": "Ouvrir les paramètres",
        "Output panel": "Panneau Sortie",
        "Package project": "Emballer le projet",
        "Password": "Mot de passe",
        "Please sign in to access this page.\n": "Connectez-vous pour accéder.\n",
        "Present": "Présenter",
        "Project": "Projet",
        "Projects": "Tous les projets",
        "Quick export PDF": "Export PDF rapide",
        "Redo": "Rétablir",
        "Reference": "Référence",
        "Rename file": "Renommer",
        "Report project": "Signaler le projet",
        "Restart and start profiling": "Redémarrer et profiler",
        "Restart compiler": "Redémarrer le compilateur",
        "Scroll on type": "Défilement pendant la saisie",
        "Search": "Rechercher",
        "Search and replace": "Rechercher et remplacer",
        "Search panel": "Panneau Recherche",
        "See issues and suggestions": "Voir problèmes et suggestions",
        "Select all": "Tout sélectionner",
        "Settings panel": "Panneau Paramètres",
        "Show both panels": "Afficher les deux panneaux",
        "Show collaborator cursors": "Afficher les curseurs collaborateurs",
        "Show hints on error": "Afficher les conseils d'erreur",
        "Show outline": "Afficher le plan",
        "Show preview in popup": "Afficher l'aperçu dans une popup",
        "Show toolbar": "Afficher la barre d'outils",
        "Sign In": "Se connecter",
        "Sign in": "Se connecter",
        "Sign out": "Se déconnecter",
        "Sort projects by": "Trier les projets par",
        "Speaker mode": "Mode présentateur",
        "Split views horizontally": "Diviser horizontalement",
        "Split views vertically": "Diviser verticalement",
        "Start from GitHub": "Commencer avec GitHub",
        "Start from GitLab": "Commencer avec GitLab",
        "Start from a file": "Commencer avec un fichier",
        "Start from scratch": "Commencer à zéro",
        "Start from template": "Commencer avec un modèle",
        "Start profiling": "Commencer le profilage",
        "Support": "Support",
        "System": "Système",
        "Team": "Équipe",
        "The password is incorrect.\n": "Mot de passe incorrect.\n",
        "Theme": "Thème",
        "Tips": "Conseils",
        "Toggle block comment": "Basculer commentaire bloc",
        "Toggle line comment": "Basculer commentaire ligne",
        "Tutorial": "Tutoriel",
        "Undo": "Annuler",
        "Upgrade to Typst Pro": "Passer à Typst Pro",
        "Upload file": "Téléverser un fichier",
        "View": "Vue",
        "Wrap lines": "Retour à la ligne automatique",
        "Zoom in": "Zoom avant",
        "Zoom out": "Zoom arrière",
        "alphabetical": "alphabétique",
        "last created": "date de création",
        "last modified": "dernière modification",
    };
    /**
     * @type {Object<string, string?>}
     */
    const SpanishTranslation = {
        // 通用界面
        "About Typst": "Acerca de Typst",
        "Account settings": "Configuración de cuenta",
        "Actions": "Acciones",
        "Add a suggestion/comment": "Añadir sugerencia/comentario",
        "Alphabetical": "Alfabético",
        "Back": "Atrás",
        "Back to homepage": "Volver al inicio",
        "Backup project": "Respaldar proyecto",
        "Cancel": "Cancelar",
        "Change language": "Cambiar idioma",
        "Clone a GitHub repository": "Clonar repositorio de GitHub",
        "Clone a GitLab repository": "Clonar repositorio de GitLab",
        "Configure a template to get going": "Configurar plantilla para comenzar",
        "Confirm": "Confirmar",
        "Convert Word, LaTeX, ... to Typst": "Convertir Word, LaTeX a Typst",
        "Create a new account instead": "Crear nueva cuenta",
        "Create your own template and start writing":
            "Crear tu propia plantilla y empezar a escribir",
        "Created": "Por fecha de creación",
        "Cursor size": "Tamaño del cursor",
        "Customize a template": "Personalizar plantilla",
        "Dark": "Oscuro",
        "Dashboard": "Panel de control",
        "Edit": "Editar",
        "Email": "Correo electrónico",
        "Empty document": "Documento vacío",
        "Explore files": "Explorar archivos",
        "Export as": "Exportar como",
        "Feedback": "Comentarios",
        "File": "Archivo",
        "File panel": "Panel de archivos",
        "Forgot your password?": "¿Olvidaste tu contraseña?",
        "Forum": "Foro",
        "Go to dashboard": "Ir al panel",
        "Go to landing page": "Ir a la página principal",
        "Go to line": "Ir a línea",
        "Grid view": "Vista de cuadrícula",
        "Help": "Ayuda",
        "Improve panel": "Panel de mejoras",
        "Incoming invites": "Invitaciones pendientes",
        "Language": "Idioma",
        "Large": "Grande",
        "Last modified": "Por fecha de modificación",
        "Light": "Claro",
        "List view": "Vista de lista",
        "My Projects": "Mis proyectos",
        "New file": "Nuevo archivo",
        "New project": "Nuevo proyecto",
        "New team": "Nuevo equipo",
        "Newest first": "Más nuevos primero",
        "Normal": "Normal",
        "Oldest first": "Más antiguos primero",
        "Only show editor": "Solo editor",
        "Only show panels": "Solo paneles",
        "Only show preview": "Solo vista previa",
        "Open settings": "Abrir configuración",
        "Output panel": "Panel de salida",
        "Package project": "Empaquetar proyecto",
        "Password": "Contraseña",
        "Please sign in to access this page.\n": "Inicia sesión para acceder a esta página.\n",
        "Present": "Presentar",
        "Project": "Proyecto",
        "Projects": "Todos los proyectos",
        "Quick export PDF": "Exportar PDF rápido",
        "Redo": "Rehacer",
        "Reference": "Referencia",
        "Rename file": "Renombrar archivo",
        "Report project": "Reportar proyecto",
        "Restart and start profiling": "Reiniciar y comenzar perfilado",
        "Restart compiler": "Reiniciar compilador",
        "Scroll on type": "Desplazar al escribir",
        "Search": "Buscar",
        "Search and replace": "Buscar y reemplazar",
        "Search panel": "Panel de búsqueda",
        "See issues and suggestions": "Ver problemas y sugerencias",
        "Select all": "Seleccionar todo",
        "Settings panel": "Panel de configuración",
        "Show both panels": "Mostrar ambos paneles",
        "Show collaborator cursors": "Mostrar cursores de colaboradores",
        "Show hints on error": "Mostrar sugerencias en errores",
        "Show outline": "Mostrar esquema",
        "Show preview in popup": "Mostrar vista previa en ventana emergente",
        "Show toolbar": "Mostrar barra de herramientas",
        "Sign In": "Iniciar sesión",
        "Sign in": "Iniciar sesión",
        "Sign out": "Cerrar sesión",
        "Sort projects by": "Ordenar proyectos por",
        "Speaker mode": "Modo presentación",
        "Split views horizontally": "Dividir vistas horizontalmente",
        "Split views vertically": "Dividir vistas verticalmente",
        "Start from GitHub": "Comenzar desde GitHub",
        "Start from GitLab": "Comenzar desde GitLab",
        "Start from a file": "Comenzar desde archivo",
        "Start from scratch": "Comenzar desde cero",
        "Start from template": "Comenzar desde plantilla",
        "Start profiling": "Comenzar perfilado",
        "Support": "Soporte",
        "System": "Sistema",
        "Team": "Equipo",
        "The password is incorrect.\n": "Contraseña incorrecta.\n",
        "Theme": "Tema",
        "Tips": "Consejos",
        "Toggle block comment": "Conmutar comentario de bloque",
        "Toggle line comment": "Conmutar comentario de línea",
        "Tutorial": "Tutorial",
        "Undo": "Deshacer",
        "Upgrade to Typst Pro": "Actualizar a Typst Pro",
        "Upload file": "Subir archivo",
        "View": "Vista",
        "Wrap lines": "Ajustar líneas",
        "Zoom in": "Acercar",
        "Zoom out": "Alejar",

        // 排序选项
        "alphabetical": "alfabético",
        "last created": "últimos creados",
        "last modified": "última modificación",
    };
    /**
     * @type {Object<string, string?>}
     */
    const JapaneseTranslation = {
        // 通用界面
        "About Typst": "Typstについて",
        "Account settings": "アカウント設定",
        "Actions": "操作",
        "Add a suggestion/comment": "提案/コメントを追加",
        "Alphabetical": "アルファベット順",
        "Back": "戻る",
        "Back to homepage": "ホームに戻る",
        "Backup project": "プロジェクトをバックアップ",
        "Cancel": "キャンセル",
        "Change language": "言語を変更",
        "Clone a GitHub repository": "GitHubリポジトリをクローン",
        "Clone a GitLab repository": "GitLabリポジトリをクローン",
        "Configure a template to get going": "テンプレートを設定して開始",
        "Confirm": "確認",
        "Convert Word, LaTeX, ... to Typst": "Word、LaTeXをTypstに変換",
        "Create a new account instead": "新規アカウントを作成",
        "Create your own template and start writing": "独自テンプレートを作成して執筆開始",
        "Created": "作成日順",
        "Cursor size": "カーソルサイズ",
        "Customize a template": "テンプレートをカスタマイズ",
        "Dark": "ダーク",
        "Dashboard": "ダッシュボード",
        "Edit": "編集",
        "Email": "メールアドレス",
        "Empty document": "空のドキュメント",
        "Explore files": "ファイルを探索",
        "Export as": "エクスポート",
        "Feedback": "フィードバック",
        "File": "ファイル",
        "File panel": "ファイルパネル",
        "Forgot your password?": "パスワードをお忘れですか？",
        "Forum": "フォーラム",
        "Go to dashboard": "ダッシュボードに移動",
        "Go to landing page": "ランディングページに移動",
        "Go to line": "行に移動",
        "Grid view": "グリッド表示",
        "Help": "ヘルプ",
        "Improve panel": "改善パネル",
        "Incoming invites": "招待状",
        "Language": "言語",
        "Large": "大",
        "Last modified": "更新日順",
        "Light": "ライト",
        "List view": "リスト表示",
        "My Projects": "マイプロジェクト",
        "New file": "新規ファイル",
        "New project": "新規プロジェクト",
        "New team": "新規チーム",
        "Newest first": "新しい順",
        "Normal": "標準",
        "Oldest first": "古い順",
        "Only show editor": "エディタのみ表示",
        "Only show panels": "パネルのみ表示",
        "Only show preview": "プレビューのみ表示",
        "Open settings": "設定を開く",
        "Output panel": "出力パネル",
        "Package project": "プロジェクトをパッケージ化",
        "Password": "パスワード",
        "Please sign in to access this page.\n":
            "このページにアクセスするにはログインしてください。\n",
        "Present": "プレゼンテーション",
        "Project": "プロジェクト",
        "Projects": "すべてのプロジェクト",
        "Quick export PDF": "PDFをクイックエクスポート",
        "Redo": "やり直す",
        "Reference": "リファレンス",
        "Rename file": "ファイル名を変更",
        "Report project": "プロジェクトを報告",
        "Restart and start profiling": "再起動してプロファイリング開始",
        "Restart compiler": "コンパイラを再起動",
        "Scroll on type": "入力時にスクロール",
        "Search": "検索",
        "Search and replace": "検索と置換",
        "Search panel": "検索パネル",
        "See issues and suggestions": "問題と提案を確認",
        "Select all": "すべて選択",
        "Settings panel": "設定パネル",
        "Show both panels": "両方のパネルを表示",
        "Show collaborator cursors": "共同編集者のカーソルを表示",
        "Show hints on error": "エラー時にヒントを表示",
        "Show outline": "アウトラインを表示",
        "Show preview in popup": "ポップアップでプレビューを表示",
        "Show toolbar": "ツールバーを表示",
        "Sign In": "ログイン",
        "Sign in": "ログイン",
        "Sign out": "ログアウト",
        "Sort projects by": "プロジェクトの並び替え",
        "Speaker mode": "スピーカーモード",
        "Split views horizontally": "ビューを水平分割",
        "Split views vertically": "ビューを垂直分割",
        "Start from GitHub": "GitHubから開始",
        "Start from GitLab": "GitLabから開始",
        "Start from a file": "ファイルから開始",
        "Start from scratch": "ゼロから開始",
        "Start from template": "テンプレートから開始",
        "Start profiling": "プロファイリングを開始",
        "Support": "サポート",
        "System": "システム",
        "Team": "チーム",
        "The password is incorrect.\n": "パスワードが間違っています。\n",
        "Theme": "テーマ",
        "Tips": "ヒント",
        "Toggle block comment": "ブロックコメントを切り替え",
        "Toggle line comment": "行コメントを切り替え",
        "Tutorial": "チュートリアル",
        "Undo": "元に戻す",
        "Upgrade to Typst Pro": "Typst Proにアップグレード",
        "Upload file": "ファイルをアップロード",
        "View": "表示",
        "Wrap lines": "行を折り返す",
        "Zoom in": "ズームイン",
        "Zoom out": "ズームアウト",
        "alphabetical": "アルファベット順",
        "last created": "最終作成日",
        "last modified": "最終更新日",
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
            case "de":
                Translation = GermanTranslation;
                break;
            case "fr":
                Translation = FrenchTranslation;
                break;
            case "es":
                Translation = SpanishTranslation;
                break;
            case "ja":
                Translation = JapaneseTranslation;
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
                { value: "de", text: "Deutsch" }, // German
                { value: "fr", text: "Français" }, // French
                { value: "es", text: "Español" }, // Spanish
                { value: "ja", text: "日本語" }, // Japanese
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
                    case "fr":
                        Translation = FrenchTranslation;
                        break;
                    case "de":
                        Translation = GermanTranslation;
                        break;
                    case "es":
                        Translation = SpanishTranslation;
                        break;
                    case "ja":
                        Translation = JapaneseTranslation;
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
        const selectors = [
            "header button",
            'a[href="/pro/"]',
            "ul[role=menu] li[role=menuitem] strong, ul[role=menu] li[role=menuitem] span",
            "h1, h2, h3",
            "div[class*=_projectListHeader] strong, div[class*=_projectListHeader] span",
            "th button",
            "div[role=tooltip]",
        ];

        for (const selector of selectors) {
            document.querySelectorAll(selector).forEach(translateElement);
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
