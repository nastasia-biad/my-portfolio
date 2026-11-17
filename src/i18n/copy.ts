export type Language = 'en' | 'ru'

export type Copy = {
  metaTitle: string
  metaDescription: string
  skip: string
  name: string
  navLabel: string
  navAbout: string
  navProjects: string
  navSkills: string
  navExperience: string
  navContact: string
  menuOpen: string
  menuClose: string
  languageLabel: string
  eyebrow: string
  line1: string
  line2: string
  line3: string
  description: string
  primaryCta: string
  secondaryCta: string
  cardLayout: string
  cardGrid: string
  cardSnippet: string
  cardType: string
  figure: string
  projectsKicker: string
  projectsTitle: string
  projectsNext: string
  projectCategory: string
  projectDescription: string
  projectStackLabel: string
  projectStatus: string
  projectVisual: string
  aboutKicker: string
  aboutTitle: string
  aboutRole: string
  aboutStatLabel: string
  aboutParagraphs: readonly string[]
  aboutTracks: readonly { title: string; text: string }[]
  skillsKicker: string
  skillsTitle: string
  skillsLead: string
  skillsGroups: readonly [
    { title: string; note: string; items: readonly string[] },
    { title: string; note: string; items: readonly string[] },
    { title: string; note: string; items: readonly string[] },
  ]
  experienceKicker: string
  experienceTitle: string
  experienceYear: string
  experienceRole: string
  experienceCompany: string
  experienceProduct: string
  experienceProductNote: string
  experienceScope: string
  experienceStackLabel: string
  experienceStack: readonly string[]
  experienceAreas: readonly { title: string; points: readonly string[] }[]
  contactLines: readonly { text: string; accent?: boolean }[]
  contactLead: string
  contactCta: string
  contactEmail: string
  contactGithub: string
  contactTelegram: string
  contactNewTab: string
}

export const copy: Record<Language, Copy> = {
  en: {
    metaTitle: 'Nastasia Biadziuk — Frontend Developer',
    metaDescription:
      'Frontend developer working with React and TypeScript, including AI-assisted development.',
    skip: 'Skip to content',
    name: 'Nastasia Biadziuk',
    navLabel: 'Primary',
    navAbout: 'About',
    navProjects: 'Projects',
    navSkills: 'Skills',
    navExperience: 'Experience',
    navContact: 'Contact',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    languageLabel: 'Language',
    eyebrow: 'Frontend developer / Open to opportunities',
    line1: 'I build',
    line2: 'Digital',
    line3: 'Experiences',
    description:
      'Frontend developer focused on building thoughtful, responsive and engaging web interfaces.',
    primaryCta: 'Explore my work',
    secondaryCta: 'Get in touch',
    cardLayout: 'Layout',
    cardGrid: 'Grid',
    cardSnippet: 'Snippet',
    cardType: 'Type',
    figure: 'Fig. 01 — Interface',
    projectsKicker: 'Work',
    projectsTitle: 'Selected Work',
    projectsNext: 'More projects will be added here.',
    projectCategory: 'Concept website',
    projectDescription:
      'A concept website for a cleaning service with a playful HAPPY CHAOS identity. Designed the visual direction, page structure and responsive interface.',
    projectStackLabel: 'Stack',
    projectStatus: 'No public repository or live version yet.',
    projectVisual: 'Concept identity, not a screenshot of the interface.',
    aboutKicker: 'Profile',
    aboutTitle: 'About',
    aboutRole: 'Frontend Developer · AI-assisted Development',
    aboutStatLabel: 'year of experience',
    aboutParagraphs: [
      'I’m a frontend developer with more than a year of commercial experience.',
      'I work with React and TypeScript, extending products already in use and building interfaces where the logic, the usability and the quality of the implementation matter as much as how they look.',
      'Commercially, that work has been on a CRM: extending what it could do, creating and refining components, and handling application state, forms, bug fixes and refactoring.',
      'I combine a classic frontend practice with AI-assisted development. AI tools help me unpack a task, find my way through a codebase and move the implementation forward — I still review the result, and I understand the code I keep.',
      'I want to keep making digital products that are genuinely useful, and to keep widening my technical range.',
    ],
    aboutTracks: [
      {
        title: 'Frontend development',
        text: 'React and TypeScript interfaces: components, application state and the paths people take through a product.',
      },
      {
        title: 'AI-assisted development',
        text: 'AI tools for reading a task, navigating a codebase and moving faster, with the result checked and the code understood.',
      },
      {
        title: 'Product thinking',
        text: 'Useful digital products, where behaviour, ease of use and build quality sit beside the visual.',
      },
    ],
    skillsKicker: 'Stack',
    skillsTitle: 'Skills',
    skillsLead:
      'What I work with. A name on this list is not a claim that it has already been used in commercial work.',
    skillsGroups: [
      {
        title: 'Core frontend',
        note: 'The base of an interface: markup, styles, the language and version control.',
        items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Git', 'GitHub'],
      },
      {
        title: 'Development tools',
        note: 'State, forms and ways of writing styles, when a project needs more than the basics.',
        items: [
          'Redux Toolkit',
          'Classic Redux (actions, reducers, dispatch)',
          'React Hook Form',
          'SCSS',
          'CSS Modules',
        ],
      },
      {
        title: 'Additional',
        note: 'Layout, responsive interfaces and AI as part of how I work.',
        items: [
          'Figma',
          'AI-assisted Development',
          'Prompt Engineering',
          'Responsive Design',
          'TanStack Start',
          'Tailwind CSS',
        ],
      },
    ],
    experienceKicker: 'Commercial',
    experienceTitle: 'Experience',
    experienceYear: 'year of experience',
    experienceRole: 'Frontend Developer',
    experienceCompany: 'bus1.ru',
    experienceProduct: 'BackOffice',
    experienceProductNote: 'Internal CRM',
    experienceScope:
      'Most of my commercial frontend work has gone into developing and supporting BackOffice, an internal CRM that was already in use.',
    experienceStackLabel: 'In this product',
    experienceStack: [
      'React',
      'TypeScript',
      'Redux Toolkit',
      'Classic Redux',
      'React Hook Form',
      'SCSS',
      'CSS Modules',
      'Git / GitHub',
    ],
    experienceAreas: [
      {
        title: 'Frontend development',
        points: [
          'Built new {{React}} components and extended ones already in the product.',
          'Created and revised interfaces.',
          'Built and refined forms and modal windows.',
          'Brought new functionality into sections that were already there.',
          'Worked inside the project’s existing structure.',
        ],
      },
      {
        title: 'Application logic and state',
        points: [
          'Worked with application state.',
          'Used {{Redux Toolkit}}.',
          'Worked with classic {{Redux}}: actions, reducers and dispatch.',
          'Implemented and revised user flows.',
          'Supported the existing application logic and kept extending it.',
        ],
      },
      {
        title: 'Forms and interaction',
        points: [
          'Worked with {{React Hook Form}}.',
          'Built and refined forms.',
          'Handled user input.',
          'Worked through the logic of how people use the interface.',
        ],
      },
      {
        title: 'Debugging and refinement',
        points: [
          'Read existing code to see how it actually behaved.',
          'Found and fixed bugs.',
          'Refactored components and pages.',
          'Improved implementations that were already in place.',
          'Made the code easier to read and maintain.',
        ],
      },
    ],
    contactLines: [{ text: "Let's build" }, { text: 'Something' }, { text: 'Good', accent: true }],
    contactLead:
      'Open to interesting projects, collaborations and new professional opportunities.',
    contactCta: 'Get in touch',
    contactEmail: 'Email',
    contactGithub: 'GitHub',
    contactTelegram: 'Telegram',
    contactNewTab: 'Opens in a new tab',
  },
  ru: {
    metaTitle: 'Анастасия Бедюк — Фронтенд-разработчик',
    metaDescription:
      'Фронтенд-разработчик. React, TypeScript и AI-assisted development.',
    skip: 'Перейти к содержанию',
    name: 'Анастасия Бедюк',
    navLabel: 'Основная навигация',
    navAbout: 'Обо мне',
    navProjects: 'Проекты',
    navSkills: 'Навыки',
    navExperience: 'Опыт',
    navContact: 'Контакты',
    menuOpen: 'Открыть меню',
    menuClose: 'Закрыть меню',
    languageLabel: 'Язык',
    eyebrow: 'Фронтенд-разработчик / В поиске возможностей',
    line1: 'Я создаю',
    line2: 'Цифровые',
    line3: 'Впечатления в вебе',
    description:
      'Фронтенд-разработчик, который создаёт продуманные, адаптивные и выразительные веб-интерфейсы.',
    primaryCta: 'Смотреть работы',
    secondaryCta: 'Связаться',
    cardLayout: 'Макет',
    cardGrid: 'Сетка',
    cardSnippet: 'Фрагмент',
    cardType: 'Шрифт',
    figure: 'Рис. 01 — Интерфейс',
    projectsKicker: 'Работы',
    projectsTitle: 'Избранные проекты',
    projectsNext: 'Здесь появятся следующие проекты.',
    projectCategory: 'Концепт сайта',
    projectDescription:
      'Концепт сайта клинингового сервиса с ярким характером HAPPY CHAOS. Разработала визуальную концепцию, структуру страниц и адаптивный интерфейс.',
    projectStackLabel: 'Стек',
    projectStatus: 'Публичного репозитория и живой версии пока нет.',
    projectVisual: 'Концепт-айдентика, не скриншот интерфейса.',
    aboutKicker: 'Профиль',
    aboutTitle: 'Обо мне',
    aboutRole: 'Фронтенд-разработчик · AI-assisted development',
    aboutStatLabel: 'Год опыта',
    aboutParagraphs: [
      'Я frontend-разработчик с коммерческим опытом более года.',
      'Работаю с React и TypeScript, развиваю существующие продукты и создаю интерфейсы, в которых важны не только внешний вид, но и логика, удобство и качество реализации.',
      'В коммерческой разработке работала с CRM-системой: расширяла функциональность, создавала и дорабатывала компоненты, работала с состоянием приложения, формами, исправлением ошибок и рефакторингом.',
      'В своей работе сочетаю классический frontend-подход с AI-assisted development. Использую AI-инструменты для анализа задач, работы с кодовой базой и ускорения реализации, проверяя результат и понимая код, который использую.',
      'Мне интересно создавать полезные цифровые продукты и постоянно расширять свои технические возможности.',
    ],
    aboutTracks: [
      {
        title: 'Фронтенд-разработка',
        text: 'React и TypeScript: интерфейсы, состояние приложения и пользовательские сценарии.',
      },
      {
        title: 'AI-assisted development',
        text: 'Анализ задач, работа с кодовой базой и более быстрая реализация — с проверкой результата и пониманием кода.',
      },
      {
        title: 'Продуктовое мышление',
        text: 'Полезные цифровые продукты, в которых важны логика, удобство и качество реализации.',
      },
    ],
    skillsKicker: 'Стек',
    skillsTitle: 'Навыки',
    skillsLead:
      'С чем я работаю. Название в этом списке не означает, что технология уже была в коммерческой задаче.',
    skillsGroups: [
      {
        title: 'Основа фронтенда',
        note: 'Основа интерфейса: разметка, стили, язык и контроль версий.',
        items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Git', 'GitHub'],
      },
      {
        title: 'Инструменты разработки',
        note: 'Состояние, формы и способы описывать стили, когда проекту нужно больше базового набора.',
        items: [
          'Redux Toolkit',
          'Classic Redux (actions, reducers, dispatch)',
          'React Hook Form',
          'SCSS',
          'CSS Modules',
        ],
      },
      {
        title: 'Дополнительно',
        note: 'Макет, адаптивные интерфейсы и AI как часть рабочего процесса.',
        items: [
          'Figma',
          'AI-assisted Development',
          'Промпт-инжиниринг',
          'Адаптивная вёрстка',
          'TanStack Start',
          'Tailwind CSS',
        ],
      },
    ],
    experienceKicker: 'Коммерческий',
    experienceTitle: 'Опыт',
    experienceYear: 'Год',
    experienceRole: 'Фронтенд-разработчик',
    experienceCompany: 'bus1.ru',
    experienceProduct: 'BackOffice',
    experienceProductNote: 'Внутренняя CRM',
    experienceScope:
      'Основная часть моей коммерческой frontend-разработки — развитие и поддержка уже работающей внутренней CRM-системы BackOffice.',
    experienceStackLabel: 'В этом продукте',
    experienceStack: [
      'React',
      'TypeScript',
      'Redux Toolkit',
      'Classic Redux',
      'React Hook Form',
      'SCSS',
      'CSS Modules',
      'Git / GitHub',
    ],
    experienceAreas: [
      {
        title: 'Фронтенд-разработка',
        points: [
          'Разрабатывала новые компоненты на {{React}} и дорабатывала существующие.',
          'Создавала и меняла интерфейсы.',
          'Делала и дорабатывала формы и модальные окна.',
          'Встраивала новую функциональность в уже существующие разделы.',
          'Работала внутри сложившейся структуры проекта.',
        ],
      },
      {
        title: 'Логика и состояние',
        points: [
          'Работала с состоянием приложения.',
          'Использовала {{Redux Toolkit}}.',
          'Работала с классическим {{Redux}}: actions, reducers, dispatch.',
          'Реализовывала и дорабатывала пользовательские сценарии.',
          'Поддерживала и развивала уже существующую логику приложения.',
        ],
      },
      {
        title: 'Формы и взаимодействие',
        points: [
          'Работала с {{React Hook Form}}.',
          'Разрабатывала и дорабатывала формы.',
          'Обрабатывала пользовательский ввод.',
          'Доводила логику взаимодействия человека с интерфейсом.',
        ],
      },
      {
        title: 'Отладка и доработка кода',
        points: [
          'Разбирала существующий код.',
          'Искала и исправляла ошибки.',
          'Рефакторила компоненты и страницы.',
          'Улучшала уже существующую реализацию.',
          'Делала код понятнее и проще для поддержки.',
        ],
      },
    ],
    contactLines: [
      { text: 'Давай создавать' },
      { text: 'что-то' },
      { text: 'интересное', accent: true },
    ],
    contactLead:
      'Открыта к интересным проектам, сотрудничеству и новым профессиональным возможностям.',
    contactCta: 'Связаться со мной',
    contactEmail: 'Почта',
    contactGithub: 'GitHub',
    contactTelegram: 'Telegram',
    contactNewTab: 'Откроется в новой вкладке',
  },
}
