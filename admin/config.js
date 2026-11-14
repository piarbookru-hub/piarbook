const CMS_CONFIG {
    owner: 'piarbookru-hub',
    repo: 'piarbookru',
    branch: 'main',
    projectName: 'piarbookru',
    
    // Безопасность превью:
    // false = скрипты сайта в превью НЕ выполняются (токен защищён)
    // true  = скрипты выполняются (метрика, виджеты работают, но токен может быть украден)
    previewScripts: true,
    
    // Дополнительные селекторы для редактирования (необязательно)
    extraEditableSelectors: [],
    
    // CSS-селекторы обёрток для картинок (необязательно)
    imageWrappers: []
};
