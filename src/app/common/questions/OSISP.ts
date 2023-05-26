import { Question } from 'src/app/common/questions/questions.typings';

export const OSISP: Question[] = [
  {
    question:
      'Какой из перечисленных объектов ядра ОС Windows соответствует программному модулю драйвера?',
    answers: [
      { text: 'UNICODE_STRING', isRight: false },
      { text: 'LIST_ENTRY', isRight: false },
      { text: 'FILE_OBJECT', isRight: false },
      { text: 'DRIVER_OBJECT', isRight: true },
      { text: 'DEVICE_OBJECT', isRight: false },
    ],
  },
  {
    question:
      'ОС, в которой каждой задаче выделяется квант процессорного времени, - это система',
    answers: [
      { text: 'квантование задач', isRight: false },
      { text: 'квантования времени', isRight: false },
      { text: 'разделения задач', isRight: false },
      { text: 'квантования задач', isRight: false },
      { text: 'разделения времени', isRight: true },
    ],
  },
  {
    question: 'Проецирование файла в память это:',
    answers: [
      { text: 'Загрузка файла в память равными частями', isRight: false },
      {
        text: 'Закрепление за областью файла области адресов оперативной памяти и чтение-запись файла методом чтения-записи байтов оперативной памяти',
        isRight: true,
      },
      {
        text: 'Расчет необходимой памяти для загрузки файла целиком',
        isRight: false,
      },
      {
        text: 'Расчет необходимой памяти для загрузки файла в память равными частями',
        isRight: false,
      },
      { text: 'Загрузка файла в память целиком', isRight: false },
    ],
  },
  {
    question: 'Какое действие в командной строке выполняет команда DEL?',
    answers: [
      { text: 'копирование файлов', isRight: false },
      { text: 'тестирование файлов', isRight: false },
      { text: 'архивирование файлов', isRight: false },
      { text: 'перемещение файлов', isRight: false },
      { text: 'удаление файлов', isRight: true },
    ],
  },
  {
    question: 'Что составляет основу программы с событийным управлением?',
    answers: [
      { text: 'Процедура диспетчеризации события', isRight: false },
      { text: 'Процедура получения события', isRight: false },
      { text: 'Блок деинициализации (завершения) программы', isRight: false },
      { text: 'Блок инициализации программы', isRight: false },
      { text: 'Цикл получения и диспетчеризации события', isRight: true },
    ],
  },
  {
    question:
      'Мощность системы команд, имеющейся в распоряжении пользователя для интерактивной работы с ОС, отражает возможности данной ОС',
    answers: [
      { text: 'физические', isRight: false },
      { text: 'концептуальные', isRight: false },
      { text: 'функциональные', isRight: true },
      { text: 'сетевые', isRight: false },
      { text: 'нефункциональные', isRight: false },
    ],
  },
  {
    question: 'Какое действие в командной строке выполняет команда LABEL?',
    answers: [
      { text: 'проверка диска', isRight: false },
      { text: 'архивирование диска', isRight: false },
      { text: 'показывает текущую метку тома или диска', isRight: false },
      {
        text: 'создает, изменяет или удаляет метку тома или диска(+)',
        isRight: true,
      },
      { text: 'деактивация диска', isRight: false },
    ],
  },
  {
    question: 'Объекты графической системы ОС Windows называются:',
    answers: [
      { text: 'Windows Objects', isRight: false },
      { text: 'Kernel Objects', isRight: false },
      { text: 'GDI Objects', isRight: true },
      { text: 'Driver Objects', isRight: false },
      { text: 'User Objects', isRight: false },
    ],
  },
  {
    question:
      'Куда после вызова на выполнение попадает программа, хранящаяся во внешней памяти?',
    answers: [
      { text: 'регистр процессора', isRight: false },
      { text: 'процессор', isRight: false },
      { text: 'оперативную память', isRight: true },
      { text: 'устройство ввода', isRight: false },
      { text: 'устройство вывода', isRight: false },
    ],
  },
  {
    question: 'Какая команда открывает окно командной строки',
    answers: [
      { text: 'MMC', isRight: false },
      { text: 'CMR', isRight: false },
      { text: 'NET USE', isRight: false },
      { text: 'CMD', isRight: true },
      { text: 'COPY', isRight: false },
    ],
  },
  {
    question:
      'В чем состоит особенность соглашения о вызове подпрограмм __cdecl в ОС Windows?,',
    answers: [
      {
        text: 'Параметры передаются на стек в обратном порядке. За освобождение стека после вызова подпрограммы отвечает вызывающая программа',
        isRight: true,
      },
      {
        text: 'Параметры передаются на стек в прямом порядке. Освобождение стека осуществляет вызванная подпрограмма',
        isRight: false,
      },
      {
        text: 'Параметры передаются на стек через регистры процессора. За освобождение стека после вызова подпрограммы отвечает вызывающая программа',
        isRight: false,
      },
      {
        text: 'Параметры передаются на стек в обратном порядке. Стек после вызова освобождается вызванной подпрограммой',
        isRight: false,
      },
    ],
  },
  {
    question: 'Что такое отказоустойчивость?',
    answers: [
      {
        text: 'скрытая от пользователя служебная программа, работающая в фоновом режиме',
        isRight: true,
      },
      {
        text: 'свойство технической системы сохранять работоспособность после отказа одного или нескольких составных компонентов',
        isRight: false,
      },
      {
        text: 'это когда несколько процессов в один момент времени обращаются к одним ресурсам, и возникает тупиковая ситуация',
        isRight: false,
      },
      {
        text: 'процесс определения взаимодействия файлового сервера с клиентом',
        isRight: false,
      },
      { text: 'процесс запуска операционной системы', isRight: false },
    ],
  },
  {
    question:
      'Какой из этих символов называется “конвейером” и занимается перенаправлением вывода одной программы на ввод другой?',
    answers: [
      { text: '@', isRight: false },
      { text: '%', isRight: false },
      { text: '>', isRight: false },
      { text: '| (вертикальная черта)', isRight: true },
      { text: '!', isRight: false },
    ],
  },
  {
    question: 'Какая команда используется для переименования файла?',
    answers: [
      { text: 'RMDIR', isRight: false },
      { text: 'XCOPY', isRight: false },
      { text: 'TYPE', isRight: false },
      { text: 'RENAME', isRight: true },
      { text: 'COPY', isRight: false },
    ],
  },
  {
    question: 'Сколько уровней приоритета потоков существует в ОС Windows?',
    answers: [
      { text: '10', isRight: false },
      { text: '64', isRight: false },
      { text: '16', isRight: false },
      { text: '32', isRight: true },
      { text: '8', isRight: false },
    ],
  },
  {
    question: 'Если кэш-память процессорных ядер не является когерентной',
    answers: [
      {
        text: 'многопоточные приложения не имеют возможности синхронизации',
        isRight: false,
      },
      {
        text: 'процессорные ядра не могут работать независимо',
        isRight: false,
      },
      {
        text: 'в многопоточных приложениях может происходить перестановка операций чтения и записи',
        isRight: false,
      },
      {
        text: 'кэши процессорных ядер синхронизируются на каждой команде',
        isRight: false,
      },
      {
        text: 'процессорные ядра не могут обмениваться данными',
        isRight: true,
      },
    ],
  },
  {
    question: 'Исторически первая операционная система семейства Windows?',
    answers: [
      { text: 'Windows 95', isRight: false },
      { text: 'Windows 10', isRight: false },
      { text: 'Windows NT', isRight: false },
      { text: 'Windows 3.1', isRight: false },
      { text: 'Windows 3.0', isRight: true },
    ],
  },
  {
    question:
      'Недостатком распределения памяти разделами с динамическими границами является',
    answers: [
      { text: 'отсутствие гибкости', isRight: false },
      { text: 'значительные временные затраты', isRight: false },
      { text: 'дефрагментация памяти', isRight: false },
      { text: 'ограниченность уровней мультипрограммирования', isRight: false },
      { text: 'фрагментация памяти', isRight: true },
    ],
  },
  {
    question:
      'Выполняемая подпрограмма процесса, разделяющая с другими параллельно работающими подпрограммами общие ресурсы процесса, это',
    answers: [
      { text: 'Сервис', isRight: false },
      { text: 'Процесс', isRight: false },
      { text: 'Драйвер', isRight: false },
      { text: 'Поток', isRight: true },
      { text: 'DLL-библиотека', isRight: false },
    ],
  },
  {
    question:
      'Как формируется результирующий приоритет потока ОС Windows из класса приоритета (процесса) и относительного приоритета (потока)?',
    answers: [
      {
        text: 'Результирующий приоритет формируется как сумма класса приоритета (процесс и относительного приоритета потока)',
        isRight: true,
      },
      {
        text: 'Результирующий приоритет определяется по таблице, в которой на пересечении класса приоритета (процесс и относительного приоритета (поток находится нужное значение',
        isRight: false,
      },
      {
        text: 'Результирующий приоритет формируется как произведение класса приоритета (процесс и относительного приоритета (поток',
        isRight: false,
      },
      {
        text: 'Результирующий приоритет формируется как минимальное значение из класса приоритета (процесс и относительного приоритета (поток',
        isRight: false,
      },
      {
        text: 'Результирующий приоритет формируется как максимальное значение из класса приоритета (процесс и относительного приоритета потока)',
        isRight: false,
      },
    ],
  },
  {
    question:
      'С помощью какой пары процедур создается объект файла FILE_OBJECT?',
    answers: [
      { text: 'ReadFile/ZwReadFile', isRight: false },
      { text: 'CreateFile/ZwCreateFile', isRight: true },
      { text: 'LОСkFile/ZwLОСkFile', isRight: false },
      { text: 'sysexit/sysret', isRight: false },
      { text: 'IОСreateDevice/ZwCreateDevice', isRight: false },
    ],
  },
  {
    question:
      'Какая DLL-библиотека предоставляет программный интерфейс доступа к аппаратуре из драйверов операционной системы Windows?',
    answers: [
      { text: 'NtDll.dll', isRight: false },
      { text: 'Hal.dll (+)', isRight: true },
      { text: 'Kernel32.dll', isRight: false },
      { text: 'Advapi32.dll', isRight: false },
      { text: 'Win32k.sys', isRight: false },
    ],
  },
  {
    question: 'Когда выполняется перерисовка окна в ОС Windows?',
    answers: [
      {
        text: 'Когда программа выполняет процедуру CreateWindow',
        isRight: false,
      },
      {
        text: 'Когда программист выполняет щелчок манипулятором мыши в области окна',
        isRight: false,
      },
      {
        text: 'Когда программа выполняет процедуру ShowWindow',
        isRight: false,
      },
      {
        text: 'Когда программист нажимает клавишу на клавиатуре',
        isRight: false,
      },
      {
        text: 'Когда область обновления окна (Update Region) оказывается не пустой',
        isRight: true,
      },
    ],
  },
  {
    question:
      'Какая программа позволяет программным способом увеличить доступное пространство на жестком диске?',
    answers: [
      { text: 'асинхронный архиватор', isRight: false },
      { text: 'программный архиватор', isRight: false },
      { text: 'файловый архиватор', isRight: false },
      { text: 'дисковый архиватор', isRight: true },
      { text: 'симметричный архиватор', isRight: false },
    ],
  },
  {
    question: 'Пользователь root - это',
    answers: [
      {
        text: 'единственная учётная запись, принадлежащая администратору системы(Никита тестом) (+)',
        isRight: true,
      },
      {
        text: 'учётная запись, которую не рекомендуется использовать администратору системы',
        isRight: false,
      },
      {
        text: 'учётная запись, которую рекомендуется использовать администратору системы, даже если у него имеется персональная учётная запись',
        isRight: false,
      },
      {
        text: 'учётная запись, гарантированно дающая пользователю исключительные права работы в системе',
        isRight: false,
      },
      { text: 'гостевая учетная запись', isRight: false },
    ],
  },
  {
    question:
      'Как называется механизм перехвата процедур взаимодействия программ с процессами в ОС Windows?',
    answers: [
      { text: 'Process Callbacks', isRight: true },
      { text: 'Registry Callbacks', isRight: false },
      { text: 'Object Manager Callbacks', isRight: false },
      { text: 'Thread Callbacks', isRight: false },
      { text: 'File System Mini-Filter', isRight: false },
    ],
  },
  {
    question:
      'Разделяемые данные в DLL-библиотеках ОС Windows создаются с помощью:',
    answers: [
      { text: 'Директивы компилятора shared-data', isRight: false },
      { text: 'Директивы компилятора #pragma comment()', isRight: false },
      { text: 'Директивы компилятора __stdcall', isRight: false },
      {
        text: 'Директивы компилятора #pragma section() и __declspec(allocate())',
        isRight: true,
      },
      { text: 'Директивы компилятора #shared-data', isRight: false },
    ],
  },
  {
    question:
      'Чем определяется битность процессора (8 бит, 16 бит, 32 бит, 64 бит)',
    answers: [
      { text: 'разрядностью основных регистров процессора', isRight: false },
      { text: 'качеством графики', isRight: false },
      { text: 'разрядностью шины адресов/данных', isRight: true },
      { text: 'разрядностью всех регистров процессора', isRight: false },
      { text: 'качеством сокетов', isRight: false },
    ],
  },
  {
    question:
      'Использование разделения модулей ОС на резидентные и транзитные позволяет рационально использовать такой ресурс, как',
    answers: [
      { text: 'внешняя память', isRight: false },
      { text: 'программный ресурс', isRight: false },
      { text: 'постоянная память', isRight: false },
      { text: 'оперативная память', isRight: true },
      { text: 'процессор', isRight: false },
    ],
  },
  {
    question:
      'Файлы с какими расширениями в ОС Windows по сути являются DLL-библиотеками?',
    answers: [
      { text: 'DLL, EXE, XML', isRight: false },
      { text: 'DLL, SYS, INI', isRight: false },
      { text: 'DLL, EXE, LOG', isRight: false },
      { text: 'DLL, EXE, INI', isRight: false },
      { text: 'DLL, EXE, SYS(Никита тестом)', isRight: true },
    ],
  },
  {
    question:
      'Какая из предложенных системных функций повышает приоритет прерываний (IRQL) процессора?',
    answers: [
      { text: 'ZwReadFile', isRight: false },
      { text: 'NtReadFile', isRight: false },
      { text: 'ZwWriteFile', isRight: false },
      { text: 'NtWriteFile', isRight: false },
      { text: 'KeRaiseIrql', isRight: true },
    ],
  },
  {
    question:
      'Какой вид базы данных представляет собой Реестр Windows (Windows Registry)?',
    answers: [
      { text: 'Объектная база данных', isRight: false },
      { text: 'Сетевая база данных', isRight: false },
      { text: 'Иерархическая база данных', isRight: true },
      { text: 'Реляционная база данных', isRight: false },
      { text: 'Объектно-реляционная база данных', isRight: false },
    ],
  },
  {
    question:
      'Как называется асинхронный вызов процедуры (используется при обработке прерывания)?',
    answers: [
      { text: 'Memory Allocation Request (MAR)', isRight: false },
      { text: 'Asynchronous Procedure Call (APC)', isRight: true },
      { text: 'Call', isRight: false },
      { text: 'Main Boot Record (MBR)', isRight: false },
      { text: 'Buffer Request (BR)', isRight: false },
    ],
  },
  {
    question:
      'Какой режим масштабирования, устанавливаемый процедурой SetMapMode ОС Windows, обеспечивает рисование в сотых долях миллиметра?',
    answers: [
      { text: 'MM_HIMETRIC', isRight: true },
      { text: 'MM_TEXT', isRight: false },
      { text: 'MM_LOENGLISH', isRight: false },
      { text: 'MM_HIENGLISH', isRight: false },
      { text: 'MM_LOMETRIC', isRight: false },
    ],
  },
  {
    question: 'Монолитное ядро',
    answers: [
      {
        text: 'ядро работает в едином адресном пространстве с пользовательскими программами, за счет чего обеспечивается максимальное быстродействие',
        isRight: false,
      },
      {
        text: 'ядро не позволяет вносить никаких изменений. Все драйвера работают вне адресного пространства монолитного ядра',
        isRight: false,
      },
      {
        text: 'ядро работает в разных адресных пространствах с пользовательскими программами',
        isRight: false,
      },
      {
        text: 'ядро не предоставляется в виде исходного кода, только в виде blob-файла, без возможности перекомпилировать самостоятельно',
        isRight: false,
      },
      {
        text: 'все драйвера выполняются в режиме ядра, используют одно адресное пространство и прямой доступ к ресурсам, за счет чего обеспечивается максимальное быстродействие. Требует перекомпиляции ядра при добавлении драйвера или использовании механизма модульного ядра',
        isRight: true,
      },
    ],
  },
  {
    question:
      'Какую функцию ОС Windows нужно вызвать для того, чтобы закрыть окно проекции файла в память?',
    answers: [
      { text: 'FlushViewOfFile', isRight: false },
      { text: 'CloseHandle', isRight: false },
      { text: 'UnmapViewOfFile', isRight: true },
      { text: 'MapViewOfFileEx', isRight: false },
      { text: 'FreeLibrary', isRight: false },
    ],
  },
  {
    question: 'Для синхронизации потоков прикладных программ программист',
    answers: [
      { text: 'должен обязательно использовать средства ОС', isRight: false },
      {
        text: 'может использовать только собственные средства',
        isRight: false,
      },
      {
        text: 'не может использовать собственные средства или средства ОС',
        isRight: false,
      },
      { text: 'может использовать только средства ОС', isRight: false },
      {
        text: 'может использовать собственные средства или средства ОС',
        isRight: true,
      },
    ],
  },
  {
    question:
      'Чтобы сторонние разработчики могли поставлять свои драйвера к устройствам, ОС должна поддерживать четко определенный интерфейс между драйверами и',
    answers: [
      { text: 'пользовательскими приложениями', isRight: false },
      { text: 'остальными частями ОС', isRight: true },
      { text: 'устройствами вывода ОС', isRight: false },
      { text: 'ядром ОС', isRight: false },
      { text: 'устройствами', isRight: false },
    ],
  },
  {
    question:
      'Операционная система может воспользоваться прямым доступом к памяти только при наличии',
    answers: [
      { text: 'кэш-контроллера', isRight: false },
      { text: 'DMA-контроллера', isRight: true },
      { text: 'кэш-памяти', isRight: false },
      { text: 'драйвера DMA', isRight: false },
      { text: 'контроллера USB', isRight: false },
    ],
  },
  {
    question:
      'Какие программы предназначены для обслуживания конкретных периферийных устройств?',
    answers: [
      { text: 'библиотеки', isRight: false },
      { text: 'драйверы (+)', isRight: true },
      { text: 'оболочки', isRight: false },
      { text: 'утилиты', isRight: false },
      { text: 'программы', isRight: false },
    ],
  },
  {
    question: 'Какое действие в командной строке выполняет команда MD?',
    answers: [
      { text: 'создание каталогов', isRight: true },
      { text: 'удаление каталогов', isRight: false },
      { text: 'тестирование каталогов', isRight: false },
      { text: 'перемещение каталогов', isRight: false },
      { text: 'копирование каталогов', isRight: false },
    ],
  },
  {
    question: 'Какой стек технологий поддерживается в современных ОС',
    answers: [
      { text: 'ВОЛС', isRight: false },
      { text: 'TCP/IP', isRight: true },
      { text: 'NCP', isRight: false },
      { text: 'OSI/ISO', isRight: false },
      { text: 'ЭМВОС', isRight: false },
    ],
  },
  {
    question: 'Какое действие в командной строке выполняет команда TYPE?',
    answers: [
      { text: 'удаление файлов', isRight: false },
      { text: 'тестирование файлов', isRight: false },
      { text: 'копирование файлов', isRight: false },
      { text: 'просмотр содержимого файла', isRight: true },
      { text: 'перемещений файлов', isRight: false },
    ],
  },
  {
    question: 'Какое расширение имеют пакетные командные файлы MS DOS?',
    answers: [
      { text: 'sh', isRight: false },
      { text: 'exe', isRight: false },
      { text: 'com', isRight: false },
      { text: 'bat', isRight: true },
      { text: 'dОС', isRight: false },
    ],
  },
  {
    question:
      'С помощью какой функции ОС Windows можно получить имя загруженной в память DLL-библиотеки?',
    answers: [
      { text: 'GetClassName', isRight: false },
      { text: 'GetModuleFileName', isRight: true },
      { text: 'GetFileName', isRight: false },
      { text: 'GetWindowName', isRight: false },
      { text: 'GetModuleHandle', isRight: false },
    ],
  },
  {
    question: 'Как зовут создателя операционной системы Linux?',
    answers: [
      { text: 'Билл Гейтс', isRight: false },
      { text: 'Линус Торвальдс', isRight: true },
      { text: 'Эндрю Таненбаум', isRight: false },
      { text: 'Джон фон Нейман', isRight: false },
      { text: 'Пол Аллен', isRight: false },
    ],
  },
  {
    question: 'Что такое физический шрифт и логический шрифт в ОС Windows?',
    answers: [
      {
        text: 'Физический шрифт - это гарнитура шрифта. Логический шрифт - это размер шрифта.',
        isRight: false,
      },
      {
        text: 'Физический и логический шрифты суть одно и то же с той лишь разницей, что за физический шрифт взымается плата',
        isRight: false,
      },
      {
        text: 'Физический шрифт - это устанавливаемый в операционную систему файл шрифта. Логический шрифт - это запрашиваемое программой у операционной системы описание нужного шрифта',
        isRight: true,
      },
      {
        text: 'Физический шрифт - это устанавливаемый в операционную систему файл шрифта. Логический шрифт - это запрашиваемый программой у операционной системы размер физического шрифта',
        isRight: false,
      },
      {
        text: 'Физический шрифт - это запрашиваемое программой у операционной системы описание нужного шрифта. Логический шрифт - это устанавливаемый в операционную систему файл шрифта',
        isRight: false,
      },
    ],
  },
  {
    question: 'В ОС UNIX используется модель файла',
    answers: [
      { text: 'структурированная', isRight: false },
      { text: 'списковая', isRight: false },
      { text: 'сетевая', isRight: false },
      { text: 'очередь', isRight: false },
      { text: 'неструктурированная (Даша и Никита)', isRight: true },
    ],
  },
  {
    question:
      'Поскольку ядро - основной элемент вычислительных процессов в системе, то',
    answers: [
      { text: 'все модули ядра должны быть резидентными', isRight: false },
      {
        text: 'разработка модулей ядра должна вестись только на языке низкого уровня',
        isRight: false,
      },
      { text: 'все модули ядра не должны быть резидентными', isRight: false },
      {
        text: 'надежности кодов ядра должно уделяться особое внимание',
        isRight: true,
      },
      {
        text: 'разработка модулей ядра должно вестись только на языке высокого уровня',
        isRight: false,
      },
    ],
  },
  {
    question: 'Операционную систему с диска загружает в ОЗУ',
    answers: [
      { text: 'драйвер', isRight: false },
      { text: 'сервисная программа', isRight: false },
      { text: 'драйвер', isRight: false },
      { text: 'загрузчик операционной системы', isRight: true },
      { text: 'BIOS', isRight: false },
    ],
  },
  {
    question: 'Эмулятор - это',
    answers: [
      {
        text: 'программа, изолирующая процессы, ограничивая для него оперативную память, место на диске и права выполнения',
        isRight: false,
      },
      {
        text: 'программа, имитирующая программные и аппаратные возможности соответствующего процессора и/или операционной системы. Код эмулируемой системы не выполняется непосредственно процессором',
        isRight: true,
      },
      {
        text: 'программа, выполняющая код эмулируемой системы в не привилегированном режиме процессора, обрабатывая критические исключения',
        isRight: false,
      },
      {
        text: 'программа, транслирующая вызовы одной операционной системы в системные вызовы операционной системы, в которой исполняется эмулятор',
        isRight: false,
      },
      {
        text: 'программа, которая пытается сымитировать конкретную функцию, или часть устройства',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Чем отличаются сообщения ОС Windows WM_KEYDOWN, WM_SYSKEYDOWN, поступающие от клавиатуры?',
    answers: [
      {
        text: 'Сообщение WM_SYSKEYDOWN посылается драйвером клавиатуры, если при нажатии клавиши на клавиатуре дополнительно зажата клавиша Fn',
        isRight: false,
      },
      {
        text: 'Сообщение WM_SYSKEYDOWN посылается драйвером клавиатуры, если при нажатии клавиши на клавиатуре дополнительно зажата клавиша Alt',
        isRight: true,
      },
      {
        text: 'Сообщение WM_SYSKEYDOWN посылается драйвером клавиатуры, если при нажатии клавиши на клавиатуре дополнительно зажата клавиша Ctrl',
        isRight: false,
      },
      {
        text: 'Сообщение WM_KEYDOWN посылается драйвером клавиатуры, если при нажатии клавиши на клавиатуре дополнительно зажата клавиша Alt',
        isRight: false,
      },
      {
        text: 'Сообщение WM_KEYDOWN посылается драйвером клавиатуры, если при нажатии клавиши на клавиатуре дополнительно зажата клавиша Ctrl',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Что произойдет, если при загрузке по истечению таймера не будет выбрана ни одна из предложенных операционных систем?',
    answers: [
      {
        text: 'появится надпись, с предложением обратиться к администратору',
        isRight: false,
      },
      {
        text: 'загрузится операционная система, которая была инсталлирована последней',
        isRight: true,
      },
      { text: 'компьютер будет бесконечно перезагружаться', isRight: false },
      { text: 'компьютер будет ждать вашего решения', isRight: false },
      {
        text: 'при нажатии клавиши на клавиатуре дополнительно зажата клавиша Ctrl',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Почему функции создания процесса ОС Windows (CreateProcess) передаются два аргумента типа SECURITY_ATTRIBUTES с атрибутами безопасности?',
    answers: [
      {
        text: 'Первый - атрибуты безопасности главного процесса, второй — атрибуты безопасности вспомогательного процесса',
        isRight: false,
      },
      {
        text: 'Первый - атрибуты безопасности исполняемого файла, второй — атрибуты безопасности начального потока',
        isRight: false,
      },
      {
        text: 'Первый - атрибуты безопасности процесса, второй — атрибуты безопасности начального потока',
        isRight: true,
      },
      {
        text: 'Первый - атрибуты безопасности начального потока, второй — атрибуты безопасности вторичных потоков',
        isRight: false,
      },
      {
        text: 'Первый - атрибуты безопасности исполняемого файла, второй',
        isRight: false,
      },
    ],
  },
  {
    question: 'Как начать и закончить перерисовку окна в ОС Windows?',
    answers: [
      {
        text: 'В любой момент времени: начать с помощью StartPaint и закончить с помощь FinishPaint',
        isRight: false,
      },
      {
        text: 'В любой момент времени: начать с помощью BeginPaint и закончить с помощь EndPaint',
        isRight: false,
      },
      {
        text: 'По сообщению WM_PAINT: начать с помощью BeginPaint и закончить с помощь EndPaint. В любой момент времени: начать с помощью GetDC и закончить с помощь ReleaseDC',
        isRight: true,
      },
      {
        text: 'По сообщению WM_PAINT: начать с помощью GetDC и закончить с помощь ReleaseDC',
        isRight: false,
      },
      {
        text: 'По сообщению WM_PAINT: начать с помощью GetDC и закончить с помощь ReleaseDC. В любой момент времени: начать с помощью BeginPaint и закончить с помощь End Paint',
        isRight: false,
      },
    ],
  },
  {
    question: 'Демон - это',
    answers: [
      { text: 'утилита для работы с образами дисков', isRight: false },
      { text: 'взаимодействие диска с компьютером', isRight: false },
      {
        text: 'название драйвера в UNIX-подобных операционных системах',
        isRight: false,
      },
      {
        text: 'разновидность компьютерных вирусов, по определенным датам стирающим BIOS',
        isRight: false,
      },
      {
        text: 'программа в UNIX-подобных системах, постоянно находящаяся в памяти, напрямую не взаимодействующая с пользователем, но реализующая функции, необходимые для работы операционной системы или выполнения серверных функций в клиент-серверной архитектуре',
        isRight: true,
      },
    ],
  },
  {
    question: 'Какое состояние не определено для потока в системе?',
    answers: [
      { text: 'ожидание', isRight: false },
      { text: 'готовность', isRight: false },
      { text: 'передача', isRight: false },
      { text: 'выполнение', isRight: false },
      { text: 'синхронизация(+)', isRight: true },
    ],
  },
  {
    question:
      'Какая функция используется для чтения файла в WinAPI в пользовательском режиме?',
    answers: [
      { text: 'ZwWriteFile', isRight: false },
      { text: 'NtDI.dll', isRight: false },
      { text: 'NtWriteFile', isRight: false },
      { text: 'NtReadFile', isRight: true },
      { text: 'AdvAPI.dll', isRight: false },
    ],
  },
  {
    question:
      'Какая из перечисленных точек входа в драйвер в ОС Windows вызывается первой и отвечает за регистрацию всех остальных точек входа (обработчика)?',
    answers: [
      { text: 'NtReadFile', isRight: false },
      { text: 'Driver Unload', isRight: false },
      { text: 'DriverEntry', isRight: true },
      { text: 'Windows Driver Kit', isRight: false },
      { text: 'IRQL', isRight: false },
    ],
  },
  {
    question:
      'Чем отличаются импорт DLL-библиотеки на старте программы (load-time import) и импорт DLL-библиотеки во время работы программы (run-time import) B ОС Windows?',
    answers: [
      {
        text: 'В отличие от импорта во время работы программы, при импорте DLL-библиотеки на старте загрузка и получение адресов ее процедур производится вручную',
        isRight: false,
      },
      {
        text: 'В отличие от импорта на старте, при импорте DLL-библиотеки во время работы программы необходимо выполнить ручную корректировку адресов процедур из-за того, что DLL-библиотека размещается по заранее неизвестному адресу',
        isRight: true,
      },
      {
        text: 'В отличие от импорта на старте, при импорте DLL-библиотеки во время работы программы загрузка и получение адресов ее процедур производится вручную',
        isRight: false,
      },
      {
        text: 'В отличие от импорта во время работы программы, при импорте DLL-библиотеки на старте необходимо выполнить ручную корректировку адресов процедур из-за того, что DLL-библиотека размещается по заранее неизвестному адресу',
        isRight: false,
      },
      { text: 'Ничем ???', isRight: false },
    ],
  },
  {
    question:
      'Какие функции командной строки Windows обеспечивает оператор REN?',
    answers: [
      {
        text: 'внесение комментария в текст командного файла(проверено тестом)',
        isRight: true,
      },
      {
        text: 'приостановка дальнейшей обработки пакетного файла',
        isRight: false,
      },
      { text: 'чтение и обработка строк из текстового файла', isRight: false },
      {
        text: 'вывод списка доступных команд с кратким пояснением',
        isRight: false,
      },
      { text: 'обработка строк файла', isRight: false },
    ],
  },
  {
    question:
      'Какой структуре данных в современных платформах программирования соответствует структура данных ядра UNICODE_STRING?',
    answers: [
      { text: 'вещественное число', isRight: false },
      { text: 'булево', isRight: false },
      { text: 'целое число', isRight: false },
      { text: 'строка', isRight: true },
      { text: 'массив', isRight: false },
    ],
  },
  {
    question: 'Чем отличаются шрифты TrueType и OpenType в ОС Windows?',
    answers: [
      {
        text: 'Шрифт TrueType является растровым, а шрифт OpenType описывается сплайнами 2-го порядка',
        isRight: false,
      },
      {
        text: 'Шрифт TrueType описывается сплайнами 3-го порядка, а шрифт OpenType описывается сплайнами 2-го или 3-го порядка',
        isRight: true,
      },
      {
        text: 'Шрифт TrueType описывается сплайнами 2-го порядка, а шрифт OpenType описывается сплайнами 3-го порядка',
        isRight: false,
      },
      {
        text: 'Шрифт TrueType является растровым, а шрифт OpenType является векторным',
        isRight: false,
      },
      {
        text: 'Шрифт TrueType описывается сплайнами 2-го порядка, а шрифт OpenType является векторным',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Скорость выполнения функций ядра определяет производительность всей системы в целом, поскольку',
    answers: [
      { text: 'количество функций ядра очень мало', isRight: false },
      { text: 'ядро работает в пользовательском режиме', isRight: false },
      {
        text: 'функции ядра являются наиболее часто используемыми',
        isRight: true,
      },
      { text: 'количество функций ядра очень высоко', isRight: false },
      { text: 'ядро работает в привилегированном режиме', isRight: false },
    ],
  },
  {
    question:
      'Как в программе для ОС Windows экспортировать из создаваемой DLL-библиотеки процедуру с сигнатурой int Min(int x, int y)?',
    answers: [
      { text: '__declspec(dllexport) int Min(int x, int y)', isRight: true },
      { text: 'dllexport int Min(int x, int y)', isRight: false },
      { text: 'dllimport int Min(int x, int y)', isRight: false },
      { text: '__declspec(dllimport) int Min(int x, int y)', isRight: false },
      { text: 'int dllexport Min(int x, int y)', isRight: false },
    ],
  },
  {
    question:
      'Как называется механизм перехвата процедур взаимодействия программ с потоками в ОС Windows?',
    answers: [
      { text: 'Object Manager Callbacks', isRight: false },
      { text: 'PrОСess Callbacks', isRight: false },
      { text: 'Registry Callbacks', isRight: false },
      { text: 'Thread Callbacks', isRight: true },
      { text: 'File System Mini-Filter', isRight: false },
    ],
  },
  {
    question:
      'Как называется программный продукт, предназначенный для решения вспомогательных задач?',
    answers: [
      { text: 'пакетный файл', isRight: false },
      { text: 'утилита', isRight: true },
      { text: 'драйвер', isRight: false },
      { text: 'загрузчик', isRight: false },
      { text: 'программа', isRight: false },
    ],
  },
  {
    question:
      'Что такое переадресация процедуры к другой DLL-библиотеке ОС Windows:',
    answers: [
      {
        text: 'Создание в разделе импорта DLL записи, указывающей на другую процедуру в другой DLL-библиотеке',
        isRight: true,
      },
      {
        text: 'Замена в программе кода процедуры DLL-библиотеки',
        isRight: false,
      },
      {
        text: 'Создание новой DLL-библиотеки, вызывающей другую DLL-библиотеку',
        isRight: false,
      },
      {
        text: 'Замена в программе указателя на другую процедуру в другой DLL-библиотеке',
        isRight: false,
      },
    ],
  },
  {
    question: 'Какое действие в командной строке выполняет команда ATTRIB?',
    answers: [
      { text: 'отображает и изменяет атрибуты файла', isRight: true },
      { text: 'удаление файлов', isRight: false },
      { text: 'восстановление файлов', isRight: false },
      { text: 'сравнение файлов', isRight: false },
      { text: 'меняет содержимое файла', isRight: false },
    ],
  },
  {
    question: 'Объекты ядра ОС Windows называются:',
    answers: [
      { text: 'Driver Objects', isRight: false },
      { text: 'GDI Objects', isRight: false },
      { text: 'Window Objects', isRight: false },
      { text: 'User Objects', isRight: false },
      { text: 'Kernel Objects', isRight: true },
    ],
  },
  {
    question:
      'Почему в цикле обработки сообщений программы для ОС Windows выполняется процедура диспетчеризации DispatchMessage вместо прямой передачи сообщения оконной процедуре?',
    answers: [
      {
        text: 'Потому что в цикле обработки сообщений невозможно вызывать оконную процедуру',
        isRight: false,
      },
      {
        text: 'Потому что вызов процедуры диспетчеризации выполняется быстрее прямой передачи сообщения оконной процедуре',
        isRight: false,
      },
      {
        text: 'Потому что оконных процедур может быть несколько, и процедура диспетчеризации умеет определить, какую из них нужно вызвать (Даша и Никита+Вера+Вероника)',
        isRight: true,
      },
      {
        text: 'Потому что процедура диспетчеризации выполняет трансляцию сообщения перед вызовом оконной процедуры',
        isRight: false,
      },
      {
        text: 'Это ошибка, в цикле обработки сообщений всегда следует выполнять прямую передачу сообщения оконной процедуре',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Чем отличается посылка сообщений с помощью SendMessage и PostMessage?',
    answers: [
      { text: 'Ничем, это два имени одной и той же процедуры', isRight: false },
      {
        text: 'Процедура SendMessage ставит сообщение в очередь любому потоку, а процедура PostMessage ставит сообщение в очередь текущему потоку',
        isRight: false,
      },
      {
        text: 'Обе процедуры ставят сообщение в очередь текущему потоку, но процедура PostMessage имеет более высокий приоритет, чем процедура SendMessage',
        isRight: false,
      },
      {
        text: 'Процедура PostMessage вызывает оконную процедуру для немедленной обработки сообщения, а процедура SendMessage ставит сообщение в очередь текущему потоку',
        isRight: false,
      },
      {
        text: 'Процедура SendMessage вызывает оконную процедуру для немедленной обработки сообщения, а процедура PostMessage ставит сообщение в очередь текущему потоку',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Что позволяет логическая палитра LOGPALETTE в контекст устройства (Device Context) в ОС Windows?',
    answers: [
      {
        text: 'Установить ограниченный набор цветов, которыми можно рисовать в контекст устройства',
        isRight: false,
      },
      { text: 'Смешивать цвета в контексте устройства', isRight: false },
      {
        text: 'Раскладывать цвета на составляющие: красный, синий, зеленый',
        isRight: false,
      },
      {
        text: 'Установить фоновый цвет в контексте устройства',
        isRight: false,
      },
      {
        text: 'Установить неограниченный набор цветов, которыми можно рисовать в контексте устройства',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Программы, решающие отдельные задачи управления и сопровождения вычислительной системы, называются',
    answers: [
      { text: 'драйверами', isRight: false },
      { text: 'программами сопровождения', isRight: false },
      { text: 'утилитами', isRight: false },
      { text: 'библиотечными программами', isRight: false },
      { text: 'модулями ядра', isRight: false },
    ],
  },
  {
    question: 'Какую информацию не содержит контекст процесса?',
    answers: [
      { text: 'указатели на открытые флаги', isRight: false },
      { text: 'флаги', isRight: false },
      { text: 'режим работы процессора', isRight: false },
      { text: 'указатель на закрытые файлы', isRight: false },
      { text: 'данные о родственных процессах', isRight: false },
    ],
  },
  {
    question: 'Достоинством распределения памяти подвижными разделами является',
    answers: [
      { text: 'простота реализации', isRight: false },
      { text: 'сложность реализации', isRight: false },
      { text: 'малые временные затраты', isRight: false },
      { text: 'эффективное использование памяти', isRight: false },
      { text: 'большая гибкость', isRight: false },
    ],
  },
  {
    question: 'Какое действие в командной строке выполняет команда VOL?',
    answers: [
      { text: 'снимает текущую метку тома или диска', isRight: false },
      { text: 'проверка диска', isRight: false },
      { text: 'показывает текущую метку тома или диска', isRight: false },
      { text: 'архивирование диска', isRight: false },
      {
        text: 'создает, изменяет или удаляет метку тома или диска',
        isRight: false,
      },
    ],
  },
  {
    question: 'Что такое RSS (Resident set size) память в Linux',
    answers: [
      { text: 'формат новостей для Linux', isRight: false },
      {
        text: 'размер памяти, занимаемой резидентными программами (демонами и драйверами)',
        isRight: false,
      },
      {
        text: 'размер оперативной памяти, выделенной процессу. Сюда не входят разделяемая память и виртуальная память',
        isRight: false,
      },
      { text: 'такого вида памяти не существует в Linux', isRight: false },
      {
        text: 'размер оперативной памяти, выделенной процессу, включая разделяемую память и виртуальную память(Никита тестом)',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Как называется таблица описания памяти, которая описывает отображение буфера виртуальной памяти в физическую?',
    answers: [
      { text: 'Plug-n-Play (PnP)', isRight: false },
      { text: 'Windows Driver Kit (WDK)', isRight: false },
      { text: 'Main Boot Record (MBR)', isRight: false },
      { text: 'Asynchronous PrОСedure Call (APC)', isRight: false },
      { text: 'Memory Descriptor List (MDL)', isRight: false },
    ],
  },
  {
    question:
      'Какая из перечисленных процедур WinApi используется для прямого вызова другого драйвера и передачи ему пакета ввода-вывода IRP?',
    answers: [
      { text: 'IОСreateDevice', isRight: false },
      { text: 'IoDeleteDevice', isRight: false },
      { text: 'IОСallDriver', isRight: false },
      { text: 'ZwReadFile', isRight: false },
      { text: 'NtReadFile', isRight: false },
    ],
  },
  {
    question:
      'Каждый пользователь получает точную копию настоящей машины в модели ОС',
    answers: [
      { text: 'многоуровневая система', isRight: false },
      { text: 'моноядро', isRight: false },
      { text: 'экзоядро', isRight: false },
      { text: 'клиент-сервер', isRight: false },
      { text: 'виртуальные машины', isRight: false },
    ],
  },
  {
    question:
      'Как называются входящие в состав ОС средства для обеспечения возможности оперативного взаимодействия процессов',
    answers: [
      { text: 'контроля', isRight: false },
      { text: 'защиты процессов', isRight: false },
      { text: 'межпроцессного взаимодействия', isRight: false },
      { text: 'защиты ресурсов', isRight: false },
      { text: 'безопасность', isRight: false },
    ],
  },
  {
    question: 'Файловый менеджер:',
    answers: [
      {
        text: 'программа, предоставляющая интерфейс пользователя для работы с файловой системой и файлами',
        isRight: false,
      },
      { text: 'программа для создания каталогов', isRight: false },
      {
        text: 'программа управления атрибутами и редактирования файлов',
        isRight: false,
      },
      { text: 'программа для перемещения по каталогам', isRight: false },
      {
        text: 'программа для создания, удаления, копирования файлов',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Какой из корневых разделов системного реестра содержит разницу между текущей и стандартной конфигурацией аппаратуры?',
    answers: [
      { text: 'HKEY_CURRENT_USER', isRight: false },
      { text: 'HKEY_CLASSES_ROOT', isRight: false },
      { text: 'HKEY_LОСAL_CONFIG', isRight: false },
      { text: 'HKEY_LОСAL_MACHINE', isRight: false },
      { text: 'HKEY_CURRENT_CONFIG', isRight: false },
    ],
  },
  {
    question: 'Что делает процедура BitBlt в ОС Windows?',
    answers: [
      {
        text: 'Выполняет перенос прямоугольной части растрового изображения из одного контекста устройства в другой контекст устройства с эффектом полупрозрачности',
        isRight: false,
      },
      {
        text: 'Выполняет перенос прямоугольной части растрового изображения из одного контекста устройства в другой контекст устройства, применяя заданную битовую операцию',
        isRight: false,
      },
      {
        text: 'Выполняет перенос и масштабирование прямоугольной части растрового изображения из одного контекста устройства в другой контекст устройства, применяя заданную битовую операцию',
        isRight: false,
      },
      {
        text: 'Выполняет вывод растрового изображения, задаваемого дескриптором, в контекст устройства',
        isRight: false,
      },
      {
        text: 'Выполняет построение битовой карты растрового изображения в динамической памяти',
        isRight: false,
      },
    ],
  },
  {
    question: 'Частью чего является файловая система?',
    answers: [
      { text: 'утилит', isRight: false },
      { text: 'дисковых систем', isRight: false },
      { text: 'ОС', isRight: false },
      { text: 'пользовательских программ', isRight: false },
      { text: 'драйвером дисков', isRight: false },
    ],
  },
  {
    question:
      'Какие механизмы синхронизации потоков в ОС Windows подходят для синхронизации различных локальных процессов?',
    answers: [
      {
        text: 'Критическая секция, ожидаемое условие, атомарная операция, барьер синхронизации',
        isRight: false,
      },
      {
        text: 'Критическая секция, ожидаемое условие, атомарная операция, ожидаемый таймер',
        isRight: false,
      },
      { text: 'Мьютекс, семафор, событие, ожидаемый таймер', isRight: false },
      {
        text: 'Критическая секция, ожидаемое условие, событие, ожидаемый таймер',
        isRight: false,
      },
      {
        text: 'Критическая секция, семафор, событие, ожидаемый таймер',
        isRight: false,
      },
    ],
  },
  {
    question: 'Какое действие в командной строке выполняет команда RENAME?',
    answers: [
      { text: 'Замена файлов', isRight: false },
      { text: 'тестирование файлов', isRight: false },
      { text: 'копирование файлов', isRight: false },
      { text: 'переименование файлов', isRight: false },
      { text: 'сравнение файлов', isRight: false },
    ],
  },
  {
    question:
      'Сколько процессорных ядер должно быть в компьютере, чтобы в ОС Windows в критической секции (CRITICAL_SECTION) применялся счетчик SpinCount?',
    answers: [
      { text: 'Ровно 1', isRight: false },
      { text: 'Более 4', isRight: false },
      { text: 'Более 2', isRight: false },
      { text: 'Более 1', isRight: false },
      { text: 'Менее 8', isRight: false },
    ],
  },
  {
    question: 'Журналируемые файловые системы — это',
    answers: [
      {
        text: 'файловые системы, использующие транзакции и ведущие в специальной области диска, журнал изменений',
        isRight: false,
      },
      {
        text: 'файловая система, в которой ведется журнал всех действий',
        isRight: false,
      },
      {
        text: 'файловые системы, в которых ведется логирование сообщений от приложений',
        isRight: false,
      },
      {
        text: 'файловые системы, в которых ведется журнал действий пользователя',
        isRight: false,
      },
      {
        text: 'возможность файловой системой использовать много томов',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Проецирование файла в память в ОС Windows отличается от проецирования файла в память в ОС Linux тем, что:',
    answers: [
      {
        text: 'В ОС Windows не нужно открывать проецируемый в память файл',
        isRight: false,
      },
      {
        text: 'В ОС Windows существует дополнительный шаг — создание объекта ядра «проекция файла» (FileMapping)',
        isRight: false,
      },
      {
        text: 'В ОС Windows не нужно указывать атрибуты защиты для проекции файла',
        isRight: false,
      },
      {
        text: 'В ОС Windows отсутствует шаг создания объекта ядра «проекция файла» (FileMapping)',
        isRight: false,
      },
      { text: 'Ничем не отличается', isRight: false },
    ],
  },
  {
    question: 'К основным функциям операционных систем относятся:',
    answers: [
      {
        text: 'управление включением/выключением компьютера, управление памятью, управление файлами и каталогами, управление пользователями',
        isRight: false,
      },
      {
        text: 'управление памятью, управление периферийными устройствами',
        isRight: false,
      },
      {
        text: 'управление памятью, выполнение команд пользователя, управление файлами и каталогами',
        isRight: false,
      },
      {
        text: 'управление процессами, управление памятью, управление периферийными устройствами',
        isRight: false,
      },
      {
        text: 'управление устройствами, управление данными, управление памятью, управление процессами',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Для успешного решения своих задач современный прикладной программист может обойтись без',
    answers: [
      { text: 'знания основ работы компьютера', isRight: false },
      { text: 'критического мышления', isRight: false },
      { text: 'использования компиляторов', isRight: false },
      {
        text: 'детального знания аппаратного устройства компьютера',
        isRight: false,
      },
      { text: 'знания языков программирования', isRight: false },
    ],
  },
  {
    question:
      'Какие параметры высоты шрифта, возвращаемые процедурой ОС Windows GetOutlineTextMetrics, заимствованы из компьютеров Macintosh и лучше всего подходят для расчета высоты текста?',
    answers: [
      {
        text: 'Высота текста (tmHeight), спуск (otmMacDescent), внешнее поле межстрочного интервала (tmExternalLeading)',
        isRight: false,
      },
      {
        text: 'Высота текста (tmHeight), внешнее поле межстрочного интервала (tmExternalLeading), внутреннее поле межстрочного интервала (tmInternalLeading)',
        isRight: false,
      },
      {
        text: 'Подъем (otmMacAscent), спуск (otmMacDescent), межстрочный интервал (otmMacLineGap)(Никита тестом)',
        isRight: false,
      },
      {
        text: 'Подъем (otmMacAscent), спуск (otmMacDescent), внешнее поле межстрочного интервала (tmExternalLeading)(Леха)',
        isRight: false,
      },
      {
        text: 'Высота текста (tmHeight), межстрочный интервал (otmMacLineGap)',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Какие механизмы синхронизации потоков в ОС Windows подходят для синхронизации лишь в пределах одного процесса?',
    answers: [
      {
        text: 'Мьютекс, ожидаемое условие, атомарная операция, барьер синхронизации',
        isRight: false,
      },
      {
        text: 'Критическая секция, ожидаемое условие, атомарная операция, барьер синхронизации',
        isRight: false,
      },
      { text: 'Мьютекс, семафор, событие, ожидаемый таймер', isRight: false },
      {
        text: 'Мьютекс, семафор, событие, барьер синхронизации',
        isRight: false,
      },
      {
        text: 'Мьютекс, семафор, атомарная операция, барьер синхронизации',
        isRight: false,
      },
    ],
  },
  {
    question: 'Что такое системный реестр?',
    answers: [
      {
        text: 'база данных для хранения сведений о конфигурации компьютера и настроек ОС',
        isRight: false,
      },
      { text: 'структура с набором системных переменных', isRight: false },
      { text: 'область на диске для выгрузки задач', isRight: false },
      {
        text: 'данные о многоуровневой очереди с обратной связью',
        isRight: false,
      },
      { text: 'данные о одноуровневой очереди', isRight: false },
    ],
  },
  {
    question:
      'Результирующий приоритет потока пользовательского режима в ОС Windows зависит',
    answers: [
      { text: 'только от относительного приоритета потока', isRight: false },
      { text: 'от загруженности ОЗУ', isRight: false },
      { text: 'только от класса приоритета процесса', isRight: false },
      { text: 'от загруженности ЦП', isRight: false },
      {
        text: 'от класса приоритета процесса и относительного приоритета потока',
        isRight: false,
      },
    ],
  },
  {
    question: 'Какое действие в командной строке выполняет команда CD?',
    answers: [
      {
        text: 'выводит список полных имен файлов и подкаталогов каталога',
        isRight: false,
      },
      { text: 'перемещение файлов', isRight: false },
      { text: 'замена файлов', isRight: false },
      { text: 'сравнение файлов', isRight: false },
      {
        text: 'выводит имя текущего каталога или осуществляет переход в другую папку',
        isRight: false,
      },
    ],
  },
  {
    question: 'Сегментная адресация оперативной памяти — это',
    answers: [
      {
        text: 'механизм памяти, когда единицей отображения адресов является страница постоянного размера, а для преобразования адресов используется таблица страниц',
        isRight: false,
      },
      {
        text: 'механизм организации оперативной памяти, когда код и данные используют одно адресное пространство; сегментные регистры не используются',
        isRight: false,
      },
      {
        text: 'механизм памяти, когда физическая память адресуется с помощью комбинации двух регистров, сегмента и смещения. Возможно несколько комбинаций сегмент: смещение, адресующих один и тот же физический адрес (+)',
        isRight: false,
      },
      {
        text: 'механизм памяти, когда физическая память адресуется с помощью комбинации двух регистров, сегмента и смещения. Каждая пара сегмент: смещение, адресует единственный физический адрес',
        isRight: false,
      },
      {
        text: 'механизм организации виртуальной памяти, когда единицей отображения виртуальных адресов на физические является страница постоянного размера, а для преобразования виртуальных адресов в физические используется таблица страниц',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Какой процесс позволяет записывать файлы в дисковые кластеры, последовательно идущие друг за другом?',
    answers: [
      { text: 'форматирование', isRight: false },
      { text: 'дефрагментация', isRight: false },
      { text: 'установка драйвера', isRight: false },
      { text: 'установки утилит', isRight: false },
      { text: 'фрагментация', isRight: false },
    ],
  },
  {
    question: 'Jpg, gif, png, tiff - это',
    answers: [
      { text: 'название файлов', isRight: false },
      { text: 'названия различных файловых систем', isRight: false },
      { text: 'названия различных операционных систем', isRight: false },
      { text: 'расширения текстовых файлов', isRight: false },
      { text: 'расширения графических файлов', isRight: false },
    ],
  },
  {
    question:
      'Какая функция используется для синхронизации потоков разных процессов на объекте ядра ОС Windows?',
    answers: [
      { text: 'LeaveCriticalSection', isRight: false },
      { text: 'EnterCriticalSection', isRight: false },
      { text: 'OpenSemaphore', isRight: false },
      { text: 'WaitForSingleObject', isRight: false },
      { text: 'ReleaseMutex', isRight: false },
    ],
  },
  {
    question:
      'Какие инструкции используются в современных процессорах для выхода из режима ядра при возврате из системной функции?',
    answers: [
      { text: 'sysexit/sysret', isRight: false },
      { text: 'enter/call', isRight: false },
      { text: 'call/receive', isRight: false },
      { text: 'leave/mmx', isRight: false },
      { text: 'add/sub', isRight: false },
    ],
  },
  {
    question:
      'Какие инструкции используются в современных процессорах для перехода в режим ядра при вызове системной функции?',
    answers: [
      { text: 'sysenter/syscall', isRight: false },
      { text: 'enter/mmx', isRight: false },
      { text: 'call/receive', isRight: false },
      { text: 'exit/ret', isRight: false },
      { text: 'add/sub', isRight: false },
    ],
  },
  {
    question:
      'В системах с абсолютными приоритетами время ожидания потока в очередях может быть сведено к минимуму, если ему назначить',
    answers: [
      { text: 'относительный приоритет потока', isRight: false },
      { text: 'самый низкий приоритет', isRight: false },
      { text: 'базовый приоритет процесса', isRight: false },
      { text: 'нормальный приоритет', isRight: false },
      { text: 'самый высокий приоритет', isRight: false },
    ],
  },
  {
    question: 'При включении компьютера процессор обращается к',
    answers: [
      { text: 'винчестеру', isRight: false },
      { text: 'флешке', isRight: false },
      { text: 'дискете', isRight: false },
      { text: 'ОЗУ', isRight: false },
      { text: 'ПЗУ', isRight: false },
    ],
  },
  {
    question:
      'Какая атомарная операция в ОС Windows выполняется над переменной лишь при условии совпадения ее значения на момент операции с заданным значением?',
    answers: [
      { text: 'InterlОСkedAnd', isRight: false },
      { text: 'InterlОСkedIncrement', isRight: false },
      { text: 'InterlОСkedCompareExchange', isRight: false },
      { text: 'InterlОСkedDecrement', isRight: false },
      { text: 'InterlОСkedExchange', isRight: false },
    ],
  },
  {
    question: 'Для чего используется утилита CMOS Setup?',
    answers: [
      { text: 'для начальной загрузки компьютера', isRight: false },
      {
        text: 'для изменения текущих настроек базовой системы ввода-вывода',
        isRight: false,
      },
      {
        text: 'для создания резервной копии операционной системы',
        isRight: false,
      },
      { text: 'для работы с графическими редакторами', isRight: false },
      { text: 'для работы с файлами', isRight: false },
    ],
  },
  {
    question:
      'Какая из предложенных системных функций понижает приоритет прерываний (IRQL) процессора?',
    answers: [
      { text: 'NtReadFile', isRight: false },
      { text: 'ZwWriteFile', isRight: false },
      { text: 'KeLowerIrql(+)', isRight: false },
      { text: 'NtWriteFile', isRight: false },
      { text: 'ZwReadFile', isRight: false },
    ],
  },
  {
    question:
      'Родительский и дочерний процессы в Unix-системах отличаются друг от друга',
    answers: [
      { text: 'идентификатором процесса PID (+)', isRight: false },
      { text: 'эффективным идентификатором', isRight: false },
      { text: 'данными', isRight: false },
      { text: 'кластерами', isRight: false },
      { text: 'исполняемым кодом', isRight: false },
    ],
  },
  {
    question:
      'Какие программы предназначены для обнаружения подозрительных действий при работе компьютера?',
    answers: [
      { text: 'программы-архиваторы', isRight: false },
      { text: 'программы-фильтры', isRight: false },
      { text: 'программы-утилиты', isRight: false },
      { text: 'программы-ревизоры', isRight: false },
      { text: 'программы-доктора', isRight: false },
    ],
  },
  {
    question: 'Что не является объектом операционной системы Windows?',
    answers: [
      { text: 'файл', isRight: false },
      { text: 'панель задач', isRight: false },
      { text: 'рабочий стол', isRight: false },
      { text: 'процессор', isRight: false },
      { text: 'папка', isRight: false },
    ],
  },
  {
    question: 'Какой тип записи реестра не существует?',
    answers: [
      { text: 'наименования', isRight: false },
      { text: 'параметры', isRight: false },
      { text: 'дерево', isRight: false },
      { text: 'раздел', isRight: false },
      { text: 'ключи', isRight: false },
    ],
  },
  {
    question:
      'Как должна быть объявлена процедура программиста, указываемая при создании потока ОС Windows функцией CreateThread?',
    answers: [
      { text: 'DWORD WINAPI ThreadProС(DWORD dwThreadId)', isRight: false },
      { text: 'DWORD WINAPI ThreadProС(HANDLE hThread)', isRight: false },
      { text: 'DWORD WINAPI ThreadProС(HANDLE hPrОСess)', isRight: false },
      { text: 'DWORD WINAPI ThreadProС(MSG* message)', isRight: false },
      { text: 'DWORD WINAPI ThreadProС(void* lpParameter)', isRight: false },
    ],
  },
  {
    question:
      'В паре с каким объектом синхронизации работает ожидаемое условие (CONDITION_VARIABLE) в ОС Windows?',
    answers: [
      { text: 'Мьютекс (документация Microsoft)', isRight: false },
      { text: 'Семафор', isRight: false },
      { text: 'Ожидаемый таймер', isRight: false },
      { text: 'Событие', isRight: false },
      {
        text: 'Критическая секция (презентация Суркова) (Даша и Никита)',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Охарактеризуйте программный интерфейс операционной системы Windows',
    answers: [
      {
        text: 'Объектно-ориентированный по форме. Возвращаются копии объектов ядра ОС, чтобы изолировать прикладные программы от памяти ядра',
        isRight: false,
      },
      {
        text: 'Процедурный по форме. Возвращаются дескрипторы вместо указателей на внутренние структуры данных ОС',
        isRight: false,
      },
      {
        text: 'Объектно-ориентированный по форме. Возвращаются указатели на объекты ядра ОС',
        isRight: false,
      },
      {
        text: 'Процедурный по форме. Возвращаются указатели на объекты ядра ОС',
        isRight: false,
      },
      {
        text: 'Объектно-ориентированный по форме. Возвращаются прокси-объекты, скрывающие внутренние объекты ОС',
        isRight: false,
      },
    ],
  },
  {
    question:
      'С помощью какой процедуры драйвер создает новый объект устройства DEVICE_OBJECT?',
    answers: [
      { text: 'NtReadFile', isRight: false },
      { text: 'InterruptServiceRoutine', isRight: false },
      { text: 'IoDeleteDevice', isRight: false },
      { text: 'IОСompletionRoutine', isRight: false },
      { text: 'IОСreateDevice', isRight: false },
    ],
  },
  {
    question: 'Какие виды растровых изображений существуют в ОС Windows?',
    answers: [
      { text: 'Icon, Cursor', isRight: false },
      { text: 'Bitmap, Icon, Cursor', isRight: false },
      { text: 'Bitmap', isRight: false },
      { text: 'Bitmap, Cursor', isRight: false },
      { text: 'Bitmap, Icon', isRight: false },
    ],
  },
  {
    question:
      'Какая DLL-библиотека предоставляет прикладной программный интерфейс операционной системы Windows?',
    answers: [
      { text: 'Advapi32.dll', isRight: false },
      { text: 'NtDll.dll', isRight: false },
      { text: 'Win32k.sys', isRight: false },
      { text: 'Hal.dll', isRight: false },
      { text: 'Kernel32.dll', isRight: false },
    ],
  },
  {
    question:
      'Какая система шифрования удостоверяет документы, как настоящие подписи?',
    answers: [
      { text: 'шифрование с открытым ключом', isRight: false },
      { text: 'шифрование с секретным ключом', isRight: false },
      { text: 'необратимые функции', isRight: false },
      { text: 'цифровые подписи', isRight: false },
      { text: 'функции', isRight: false },
    ],
  },
  {
    question: 'Какой поток в ОС Windows может иметь уровень приоритета 0?',
    answers: [
      { text: 'Ни один поток', isRight: false },
      {
        text: 'Особый поток, выполняющий обнуление неиспользуемых страниц памяти',
        isRight: false,
      },
      { text: 'Первый поток любого процесса', isRight: false },
      { text: 'Любой поток режима ядра', isRight: false },
      {
        text: 'Любой поток пользовательского режима работыcreatere',
        isRight: false,
      },
    ],
  },
  {
    question:
      'С помощью какой функции ОС Windows выполняется загрузка DLL-библиотеки во время работы программы?',
    answers: [
      { text: 'LoadImage', isRight: false },
      { text: 'ImportLibrary', isRight: false },
      { text: 'OpenLibrary', isRight: false },
      { text: 'LoadLibrary(+)', isRight: false },
      { text: 'CreateLibrary', isRight: false },
    ],
  },
  {
    question:
      'Снятие процесса ОС Windows функцией TerminatePrОСess не приводит к вызову в DLL-библиотеках функции DllMain с кодом:',
    answers: [
      { text: 'DLL_PRОСESS_DETACH(Вероника+Вера+Никита)', isRight: false },
      { text: 'DLL_THREAD_DETACH', isRight: false },
      { text: 'DLL_PRОСESS_ATTACH', isRight: false },
      { text: 'DLL_THREAD_ATTACH', isRight: false },
      { text: 'DLL_THREAD_TERMINATE', isRight: false },
    ],
  },
  {
    question:
      'Как называется состояние страницы памяти, при котором она отсутствует, т.е. память свободна?',
    answers: [
      { text: 'Committed', isRight: false },
      { text: 'New', isRight: false },
      { text: 'Free', isRight: false },
      { text: 'Scheduled', isRight: false },
      { text: 'Registry', isRight: false },
    ],
  },
  {
    question:
      'Какая из перечисленных процедур WinAPI используется для создания удаленного потока в пользовательском режиме?',
    answers: [
      { text: 'NtReadFile', isRight: false },
      { text: 'CreateRemoteThread', isRight: false },
      { text: 'LoadLibrary', isRight: false },
      { text: 'CreateThread', isRight: false },
      { text: 'NtWriteFile', isRight: false },
    ],
  },
  {
    question: 'Что такое BIOS?',
    answers: [
      { text: 'диалоговая оболочка', isRight: false },
      { text: 'командный язык операционной системы', isRight: false },
      { text: 'базовая система ввода-вывода', isRight: false },
      { text: 'программа в ОС', isRight: false },
      { text: 'игровая программа', isRight: false },
    ],
  },
  {
    question: 'Для копирования файлов в ОС Linux используется команда:',
    answers: [
      { text: 'sh', isRight: false },
      { text: 'cp', isRight: false },
      { text: 'copy', isRight: false },
      { text: 'xcopy', isRight: false },
      { text: 'mkfile', isRight: false },
    ],
  },
  {
    question:
      'В чем состоит особенность соглашения о вызове подпрограмм __stdcall в ОС Windows?',
    answers: [
      {
        text: 'Параметры передаются на стек в обратном порядке. Стек после вызова освобождается вызванной подпрограммой',
        isRight: false,
      },
      {
        text: 'Параметры передаются на стек через регистры процессора. За освобождение стека после вызова подпрограммы отвечает вызывающая программа',
        isRight: false,
      },
      {
        text: 'Параметры передаются на стек в обратном порядке. За освобождение стека после вызова подпрограммы отвечает вызывающая программа',
        isRight: false,
      },
      {
        text: 'Параметры передаются на стек в прямом порядке. Освобождение стека осуществляет вызванная подпрограмма',
        isRight: false,
      },
      {
        text: 'Параметры передаются на стек через регистры процессора. Освобождение стека осуществляет вызванная подпрограмма',
        isRight: false,
      },
    ],
  },
  {
    question:
      'В качестве посредника при передаче сообщений между приложениями в ОС выступает',
    answers: [
      { text: 'моноядро', isRight: false },
      { text: 'сервер', isRight: false },
      { text: 'менеджер ресурсов', isRight: false },
      { text: 'специальная утилита', isRight: false },
      {
        text: 'микроядро (Даша и Никита проверила тестом) (+)',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Какая команда используется для приостановки выполнения командных файлов?',
    answers: [
      { text: 'PAUSE', isRight: false },
      { text: 'REM', isRight: false },
      { text: 'CLS', isRight: false },
      { text: 'CD', isRight: false },
      { text: 'ECHO', isRight: false },
    ],
  },
  {
    question: 'Конвейером в командной строке называют:',
    answers: [
      { text: 'параллельность выполнения нескольких команд', isRight: false },
      {
        text: 'последовательное выполнение нескольких команд, при этом вывод очередной команды перенаправляется на стандартный ввод следующей',
        isRight: false,
      },
      {
        text: 'последовательное выполнение нескольких команд, причем каждая следующая команда начинает выполняться после завершения предыдущей',
        isRight: false,
      },
      { text: 'последовательное выполнение нескольких команд', isRight: false },
      {
        text: 'параллельное выполнение нескольких команд, причем переключение между ними производится в строгой очередности',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Как называются события, которые прерывают, приостанавливают нормальное выполнение процессором кода приложения и заставляют ОС выполнить какие-то внеплановые действия?',
    answers: [
      { text: 'буфер', isRight: false },
      { text: 'вызов', isRight: false },
      { text: 'возврат', isRight: false },
      { text: 'кэш', isRight: false },
      { text: 'прерывание', isRight: false },
    ],
  },
  {
    question: 'Когда происходит удаление объекта ядра ОС Windows?',
    answers: [
      { text: 'В случайный момент времени', isRight: false },
      { text: 'В момент закрытия описателя объекта ядра', isRight: false },
      { text: 'В момент сбора мусора в ядре ОС Windows', isRight: false },
      {
        text: 'В момент подкачки занимаемых объектом страниц памяти',
        isRight: false,
      },
      {
        text: 'В момент, когда счетчик процессов-пользователей объекта переходит в значение ноль',
        isRight: false,
      },
    ],
  },
  {
    question: 'В процессе загрузки операционной системы происходит:',
    answers: [
      {
        text: 'копирование содержимого оперативной памяти на жёсткий диск',
        isRight: false,
      },
      {
        text: 'последовательная загрузка файлов операционной системы в оперативную память',
        isRight: false,
      },
      {
        text: 'копирование файлов операционной системы с CD - диска на жёсткий диск',
        isRight: false,
      },
      {
        text: 'копирование файлов операционной системы с гибкого диска на жёсткий диск',
        isRight: false,
      },
      {
        text: 'копирование файлов операционной системы с жёсткого диска на гибкий диск',
        isRight: false,
      },
    ],
  },
  {
    question: 'Какой операционной системы не существует?',
    answers: [
      { text: 'MS DOS', isRight: false },
      { text: 'Mac OS', isRight: false },
      { text: 'OS/2', isRight: false },
      { text: 'Microsoft', isRight: false },
      { text: 'Ubuntu', isRight: false },
    ],
  },
  {
    question:
      'Какой из перечисленных объектов ядра ОС Windows соответствует контролируемому драйвером физическому или логическому устройству?',
    answers: [
      { text: 'UNICODE_STRING', isRight: false },
      { text: 'FILE_OBJECT', isRight: false },
      { text: 'LIST_ENTRY', isRight: false },
      { text: 'DRIVER_OBJECT', isRight: false },
      { text: 'DEVICE_OBJECT', isRight: false },
    ],
  },
  {
    question: 'Программы обслуживания устройств компьютера называются',
    answers: [
      { text: 'трансляторами', isRight: false },
      { text: 'интерпретаторами', isRight: false },
      { text: 'программным обеспечением', isRight: false },
      { text: 'загрузчиками', isRight: false },
      { text: 'драйверами', isRight: false },
    ],
  },
  {
    question:
      'Задача поддержания очередей заявок на ресурсы, одновременно используемые разными процессами, ложится на',
    answers: [
      { text: 'драйвера пользователя', isRight: false },
      { text: 'приложение пользователя', isRight: false },
      { text: 'системного программиста', isRight: false },
      { text: 'аппаратное обеспечение', isRight: false },
      { text: 'операционную систему', isRight: false },
    ],
  },
  {
    question: 'Какой тип параметров реестра не существует?',
    answers: [
      { text: 'двоичные', isRight: false },
      { text: 'строковые', isRight: false },
      { text: 'Dword', isRight: false },
      { text: 'Dexcel', isRight: false },
      { text: 'восьмеричные', isRight: false },
    ],
  },
  {
    question: 'Операционная система – это',
    answers: [
      {
        text: 'совокупность программ, используемых для операций с документами',
        isRight: false,
      },
      {
        text: 'система программирования на языке низкого уровня',
        isRight: false,
      },
      { text: 'программа, загруженная в оперативную память', isRight: false },
      { text: 'совокупность основных устройств компьютера', isRight: false },
      {
        text: 'набор программ, обеспечивающих работу всех аппаратных устройств компьютера и доступ пользователя к ним',
        isRight: false,
      },
    ],
  },
  {
    question:
      'В состоянии выполнения в однопроцессорной системе может находиться',
    answers: [
      { text: 'любое количество потоков', isRight: false },
      { text: 'не более 10-ти потоков', isRight: false },
      { text: 'не менее одного потока', isRight: false },
      { text: 'не более одного потока', isRight: false },
      { text: 'два и более потока', isRight: false },
    ],
  },
  {
    question:
      'Как работает функция PulseEvent ОС Windows, если она применяется к событию со сбросом вручную (manual-reset event)?',
    answers: [
      { text: 'Переводит событие в свободное состояние', isRight: false },
      { text: 'Переводит событие в занятое состояние', isRight: false },
      {
        text: 'Переводит событие в свободное состояние, а потом в занятое, запуская лишь один из ожидающих данное событие потоков(Никита тестом)',
        isRight: false,
      },
      {
        text: 'Переводит событие в свободное состояние, а потом в занятое, запуская все потоки, ожидающие данное события',
        isRight: false,
      },
      {
        text: 'Переводит событие в занятое состояние, а потом в свободное, запуская лишь один из ожидающих данное событие потоков',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Какой вирус относится к вирусам, различающимся по среде обитания?',
    answers: [
      { text: 'руткит', isRight: false },
      { text: 'троян', isRight: false },
      { text: 'вирус-мутант', isRight: false },
      { text: 'резидентный вирус', isRight: false },
      { text: 'загрузочный вирус', isRight: false },
    ],
  },
  {
    question: 'Какую информацию не содержит дескриптор процесса?',
    answers: [
      { text: 'информацию о состоянии процесса', isRight: false },
      { text: 'идентификатор процесса', isRight: false },
      { text: 'данные о родственных процессах', isRight: false },
      { text: 'режим работы процессора', isRight: false },
      { text: 'информацию о работе процесса', isRight: false },
    ],
  },
  {
    question:
      'За счет какого устройства в гибридной архитектуре с неоднородным доступом к памяти (Non-Uniform Memory Access Architecture — NUMA) каждый NUMA-узел имеет возможность обращаться ко всей оперативной памяти компьютера?',
    answers: [
      {
        text: 'За счет сетевого адаптера, подключенного к шине каждого NUMA-узла',
        isRight: false,
      },
      {
        text: 'За счет маршрутизатора, подключенного к шине каждого NUMA-узла',
        isRight: false,
      },
      {
        text: 'За счет трансформатора, подключенного к шине каждого NUMA-узла',
        isRight: false,
      },
      {
        text: 'За счет контроллера прерываний, подключенного к шине каждого NUMA-узла',
        isRight: false,
      },
      {
        text: 'За счет видеоадаптера, подключенного к шине каждого NUMA-узла',
        isRight: false,
      },
    ],
  },
  {
    question: 'Ядро операционной системы - это',
    answers: [
      {
        text: 'основной компонент операционной системы, предоставляющий интерфейс системных вызовов для прикладных программ, осуществляющий управление ресурсами, выполняемыми программами',
        isRight: false,
      },
      { text: 'устройство в составе монолитного процессора', isRight: false },
      { text: 'устройство в составе многоядерного процессора', isRight: false },
      {
        text: 'устройство, выполняющее машинный код операционной системы',
        isRight: false,
      },
      {
        text: 'загрузчик операционной системы, инициализирующий ресурсы и передающий управление командной строке или графической оболочке, после чего завершающий работу',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Как называется пакет ввода-вывода, используемый в качестве единого интерфейса взаимодействия с драйверами режима ядра?',
    answers: [
      { text: 'Memory Manager', isRight: false },
      { text: 'Input-Output Request Packet', isRight: false },
      { text: 'Windows Driver Kit', isRight: false },
      { text: 'Deferred PrОСedure Call', isRight: false },
      { text: 'Registry', isRight: false },
    ],
  },
  {
    question:
      'Чем в структуре PRОСESS_INFORMATION ОС Windows отличаются описатель процесса HANDLE hPrОСess и идентификатор процесса DWORD dwPrОСessId?',
    answers: [
      {
        text: 'Описатель и идентификатор действительны лишь в пределах текущего процесса и отличаются размером, занимаемым в памяти',
        isRight: false,
      },
      {
        text: 'Описатель и идентификатор являются сквозными и действительны в любом процессе операционной системы, но отличаются размером, занимаемым в памяти',
        isRight: false,
      },
      {
        text: 'Описатель действителен лишь в пределах текущего процесса, а идентификатор является сквозным и действителен в любом процессе операционной системы',
        isRight: false,
      },
      {
        text: 'Описатель и идентификатор полностью эквивалентны',
        isRight: false,
      },
      {
        text: 'Идентификатор действителен лишь в пределах текущего процесса, а описатель является сквозным и действителен в любом процессе операционной системы',
        isRight: false,
      },
    ],
  },
  {
    question: 'Привилегированный режим работы программы в ОС Linux',
    answers: [
      {
        text: 'режим временного доступа ко всем ресурсам компьютера',
        isRight: false,
      },
      {
        text: 'режим неограниченного доступа ко всем ресурсам компьютера',
        isRight: false,
      },
      {
        text: 'режим монопольного владения процессором на время работы программы',
        isRight: false,
      },
      {
        text: 'режим, при котором программа в любой момент может монопольно завладеть процессором',
        isRight: false,
      },
      {
        text: 'режим, при котором программа имеет привилегии перед другими программами в условиях многозадачности',
        isRight: false,
      },
    ],
  },
  {
    question: 'Встроенное средство сетевой защиты в ОС Windows называется',
    answers: [
      { text: 'порт', isRight: false },
      { text: 'утилита', isRight: false },
      { text: 'сокет', isRight: false },
      { text: 'брандмауэр', isRight: false },
      { text: 'антивирус', isRight: false },
    ],
  },
  {
    question:
      'Как получить итоговую матрицу трансформации в ОС Windows, если заданы матрицы для простых трансформаций (параллельного переноса, масштабирования, отражения, поворота и наклон?',
    answers: [
      { text: 'Выполнить вычитание заданных матриц', isRight: false },
      {
        text: 'Выполнить транспонирование и сложение заданных матриц',
        isRight: false,
      },
      {
        text: 'Выполнить транспонирование и перемножение заданных матриц',
        isRight: false,
      },
      { text: 'Выполнить перемножение заданных матриц', isRight: false },
      { text: 'Выполнить сложение заданных матриц', isRight: false },
    ],
  },
  {
    question: 'Что из перечисленного не является операционной системой?',
    answers: [
      { text: 'MS Office', isRight: false },
      { text: 'Linux', isRight: false },
      { text: 'MS-DOS', isRight: false },
      { text: 'MS Windows 10', isRight: false },
      { text: 'MS Windows 8', isRight: false },
    ],
  },
  {
    question:
      'С помощью какой функции ОС Windows можно получить описатель уже загруженной в память DLL-библиотеки?',
    answers: [
      { text: 'LoadLibrary', isRight: false },
      { text: 'GetHandle', isRight: false },
      { text: 'FreeLibrary', isRight: false },
      { text: 'GetWindowHandle', isRight: false },
      { text: 'GetModuleHandle', isRight: false },
    ],
  },
  {
    question: 'Что такое оконный таймер?',
    answers: [
      {
        text: 'Микросхема в процессоре, генерирующая события через определенные интервалы времени',
        isRight: false,
      },
      {
        text: 'Процедура программы, принимающая сообщения через определенные интервалы времени',
        isRight: false,
      },
      {
        text: 'Объект ядра ОС Windows, на котором можно выполнить ожидание с помощью процедуры WaitForSingleObject',
        isRight: false,
      },
      {
        text: 'Механизм посылки таймерных сообщений WM_TIMER через определенные промежутки времени',
        isRight: false,
      },
      {
        text: 'Механизм передачи сообщений другим процессам ОС Windows',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Приложение выгружается из оперативной памяти и прекращает свою работу, если:',
    answers: [
      { text: 'сбой работы приложения', isRight: false },
      { text: 'свернуть окно приложения', isRight: false },
      { text: 'закрыть окно приложения', isRight: false },
      { text: 'запустить другое приложение', isRight: false },
      { text: 'переключиться в другое окно', isRight: false },
    ],
  },
  {
    question:
      'Какие из перечисленных графических инструментов и параметров реально существуют в контексте устройства в ОС Windows?',
    answers: [
      {
        text: 'Перо, кисть, шрифт, палитра, матрица трансформации, режим масштабирования, фоновый цвет',
        isRight: false,
      },
      {
        text: 'Растровое изображение, перо, кисть, шрифт, палитра, матрица трансформации, режим масштабирования, фоновый цвет',
        isRight: false,
      },
      {
        text: 'Растровое изображение, перо, кисть, шрифт, палитра, матрица трансформации, режим масштабирования, фоновый цвет, область отсечения',
        isRight: false,
      },
      {
        text: 'Растровое изображение, перо, кисть, шрифт, палитра, матрица трансформации, режим масштабирования',
        isRight: false,
      },
      {
        text: 'Растровое изображение, перо, кисть, шрифт, палитра, матрица трансформации, режим масштабирования, фоновый цвет, инструмент стирания изображения',
        isRight: false,
      },
    ],
  },
  {
    question: 'Где находится BIOS?',
    answers: [
      { text: 'в оперативном запоминающем устройстве', isRight: false },
      { text: 'на винчестере', isRight: false },
      { text: 'на CD-ROM', isRight: false },
      { text: 'в постоянном запоминающем устройстве(+)', isRight: false },
      { text: 'в процессоре', isRight: false },
    ],
  },
  {
    question: 'Какие функции выполняет операционная система?',
    answers: [
      { text: 'обеспечение организации и хранения файлов', isRight: false },
      { text: 'подключения устройств ввода/вывода', isRight: false },
      { text: 'обмен данными между устройствами', isRight: false },
      {
        text: 'организация обмена данными между компьютером и различными периферийными устройствами',
        isRight: false,
      },
      {
        text: 'организация диалога с пользователем, управление ресурсами компьютера (+)',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Свойство ОС, при котором она обеспечивает возможность выполнения приложений, написанных для другой операционной системы, – это',
    answers: [
      { text: 'универсальность', isRight: false },
      { text: 'переносимость', isRight: false },
      { text: 'мультипрограммность', isRight: false },
      { text: 'монопрограммностью', isRight: false },
      { text: 'совместимость', isRight: false },
    ],
  },
  {
    question:
      'В пользовательском режиме работы безусловно запрещено выполнение команды',
    answers: [
      { text: 'ввода-вывода', isRight: false },
      { text: 'конфигурирования механизмов защиты памяти', isRight: false },
      { text: 'запуска приложений', isRight: false },
      { text: 'перехода в привилегированный режим (+)', isRight: false },
      { text: 'перехода в пользовательский режим', isRight: false },
    ],
  },
  {
    question:
      'При делении ядра на основные слои непосредственно над слоем машинно-зависимых модулей расположен слой',
    answers: [
      { text: 'базовых механизмов ядра', isRight: false },
      { text: 'средств аппаратной поддержки ОС', isRight: false },
      { text: 'менеджеров ресурсов', isRight: false },
      { text: 'менеджер поддержки ядер', isRight: false },
      { text: 'интерфейса системных вызовов', isRight: false },
    ],
  },
  {
    question:
      'Как называется механизм перехвата процедур взаимодействия программ с реестром в ОС Windows?',
    answers: [
      { text: 'Object Manager Callbacks', isRight: false },
      { text: 'File System Mini-Filter', isRight: false },
      { text: 'Thread Callbacks', isRight: false },
      { text: 'PrОСess Callbacks', isRight: false },
      { text: 'Registry Callbacks', isRight: false },
    ],
  },
  {
    question: 'Многопроцессорность — это',
    answers: [
      {
        text: 'использование нескольких процессоров для увеличения производительности вычислений',
        isRight: false,
      },
      {
        text: 'поток задействован на выполнения одной задачи пользователя',
        isRight: false,
      },
      {
        text: 'возможность нескольким пользователям использовать один процесс',
        isRight: false,
      },
      {
        text: 'поток является контейнером для процессов. Процессы, порожденные внутри потока, используют общую память, переменные, ресурсы',
        isRight: false,
      },
      {
        text: 'использование дополнительных возможностей процессора для реализации аппаратной поддержки выполнения параллельных задач на одном процессоре',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Какая из перечисленных процедур WinAPI используется для создания пакета ввода-вывода IRP?',
    answers: [
      { text: 'IОСallDriver', isRight: false },
      { text: 'IoAllocateIrp', isRight: false },
      { text: 'IОСompleteRequest', isRight: false },
      { text: 'ZwWriteFile', isRight: false },
      { text: 'ZwReadFile', isRight: false },
    ],
  },
  {
    question: 'Какое действие в командной строке выполняет команда XCOPY?',
    answers: [
      { text: 'копирование файлов', isRight: false },
      { text: 'удаление файлов и каталогов', isRight: false },
      { text: 'перемещение файлов и каталогов', isRight: false },
      { text: 'переименование файлов', isRight: false },
      { text: 'копирование файлов и каталогов', isRight: false },
    ],
  },
  {
    question: 'Windows 3.1 - это',
    answers: [
      { text: 'среда программирования', isRight: false },
      { text: 'одна из оболочек операционной системы MS DOS', isRight: false },
      { text: 'версия Windows 10', isRight: false },
      { text: 'текстовый редактор', isRight: false },
      { text: 'графический редактор', isRight: false },
    ],
  },
  {
    question:
      'Какая среда программирования имеет тесную интеграцию с системой Windows для разработки драйверов?',
    answers: [
      { text: 'VIM', isRight: false },
      { text: 'Emacs', isRight: false },
      { text: 'Notepad++', isRight: false },
      { text: 'Android Studio', isRight: false },
      { text: 'Visual Studio', isRight: false },
    ],
  },
  {
    question:
      'С помощью какой функции ОС Windows выполняется выгрузка DLL-библиотеки из памяти во время работы программы?',
    answers: [
      { text: 'CloseLibrary', isRight: false },
      { text: 'LoadLibrary', isRight: false },
      { text: 'DestroyLibrary', isRight: false },
      { text: 'DisposeLibrary', isRight: false },
      { text: 'FreeLibrary', isRight: false },
    ],
  },
  {
    question: 'Команда ls (ОС Linux):',
    answers: [
      { text: 'выполняет переход в заданный каталог', isRight: false },
      {
        text: 'выводит на экран список файлов текущего каталога',
        isRight: false,
      },
      { text: 'перемещает каталог', isRight: false },
      {
        text: 'выводит на экран список файлов каталога, заданного в командной строке либо текущего',
        isRight: false,
      },
      {
        text: 'делает заданный каталог текущим и выводит список файлов',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Какой механизм позволяет ОС использовать больше оперативной памяти, чем доступно физически?',
    answers: [
      { text: 'сетевое окружение', isRight: false },
      { text: 'кэширование', isRight: false },
      { text: 'виртуальная память', isRight: false },
      { text: 'plug-and-play', isRight: false },
      { text: 'обработка прерываний', isRight: false },
    ],
  },
  {
    question:
      'Как называется отложенный вызов процедуры (используется при обработке прерываний)?',
    answers: [
      { text: 'Memory AllОСation Request (MAR)', isRight: false },
      { text: 'Main Boot Record (MBR)', isRight: false },
      { text: 'Deferred PrОСedure Call (DPC)', isRight: false },
      { text: 'Buffer Request (BR)', isRight: false },
      { text: 'Call', isRight: false },
    ],
  },
  {
    question:
      'Функции ядра, которые могут вызываться приложениями, образуют интерфейс',
    answers: [
      { text: 'приложения', isRight: false },
      { text: 'прикладного программирования', isRight: false },
      { text: 'утилит', isRight: false },
      { text: 'системных вызовов', isRight: false },
      { text: 'пользователя', isRight: false },
    ],
  },
  {
    question: 'Ядро операционной системы Linux - это',
    answers: [
      {
        text: 'графическая оболочка, позволяющая выполнить операции с файлами и каталогами',
        isRight: false,
      },
      {
        text: 'программы, входящие в дистрибутив операционной системы',
        isRight: false,
      },
      {
        text: 'оболочка, принимающая и обрабатывающая команды пользователя',
        isRight: false,
      },
      { text: 'резидентная часть операционной системы', isRight: false },
      {
        text: 'основная программа, принимающая и обрабатывающая команды пользователя',
        isRight: false,
      },
    ],
  },
  {
    question: 'Как называется процедура обработки прерываний?',
    answers: [
      { text: 'Memory AllОСation Request (MAR)', isRight: false },
      { text: 'Main Boot Record (MBR)', isRight: false },
      { text: 'Buffer Request (BR)', isRight: false },
      { text: 'Interrupt Service Routine (ISR)', isRight: false },
      { text: 'Request', isRight: false },
    ],
  },
  {
    question:
      'Как называется состояние страницы памяти, при котором она зарезервирована?',
    answers: [
      { text: 'Committed', isRight: false },
      { text: 'Deleted', isRight: false },
      { text: 'Free', isRight: false },
      { text: 'Reserved', isRight: false },
      { text: 'New', isRight: false },
    ],
  },
  {
    question: 'Каково принципиальное отличие Linux от Windows?',
    answers: [
      { text: 'наличие множества графических оболочек', isRight: false },
      { text: 'наличие нескольких графических оболочек', isRight: false },
      { text: 'наличие нескольких графических оболочек', isRight: false },
      { text: 'открытость кода операционной системы', isRight: false },
      { text: 'широкая известность и популярность', isRight: false },
    ],
  },
  {
    question:
      'Что отражает числовое значение 12, 16, 32 в файловой системе FAT?',
    answers: [
      { text: 'допустимое количество символов в имени файла', isRight: false },
      { text: 'размер кластера на диске', isRight: false },
      { text: 'объем диска', isRight: false },
      { text: 'количество знаков в файле', isRight: false },
      { text: 'разрядность элемента в таблице FAT', isRight: false },
    ],
  },
  {
    question: 'Ассемблер — это',
    answers: [
      {
        text: 'Высокоуровневый язык программирования, понимаемый процессором, без необходимости его трансляции',
        isRight: false,
      },
      {
        text: 'Метод чтения машинного кода, представляющий двоичные коды в виде мнемоник. Используется для анализа, и иногда модификации программ, когда исходный код недоступен',
        isRight: false,
      },
      {
        text: 'Низкоуровневый язык программирования, использующий наглядные мнемоники для записи машинных команд, и добавляющих высокоуровневые компоненты (переменные, метки, макросы). Программы на ассемблере транслируются в машинный код(+)',
        isRight: false,
      },
      {
        text: 'Низкоуровневый язык программирования, непосредственно понимаемый процессором, без необходимости его трансляции',
        isRight: false,
      },
      {
        text: 'Высокоуровневый язык программирования, подобный языкам C и C++',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Какие поля структуры сообщения Windows (struct MSG) передаются в процедуру обработки сообщений?',
    answers: [
      {
        text: 'Поля hwnd, message, wParam, lParam(Никита по тесту)',
        isRight: false,
      },
      { text: 'Поля message, wParam, lParam', isRight: false },
      { text: 'Поля hwnd, message', isRight: false },
      { text: 'Поля hwnd, message, wParam, lParam, time, pt', isRight: false },
      { text: 'Поля wParam, lParam', isRight: false },
    ],
  },
  {
    question:
      'Пока в ОС Windows существуют потоки с более высокими приоритетами, потоки с более низкими приоритетами',
    answers: [
      { text: 'простаивают(+)', isRight: false },
      {
        text: 'выполняются с уменьшенным в четыре раза квантом времени',
        isRight: false,
      },
      { text: 'выполняются медленнее', isRight: false },
      { text: 'выполняются с пониженной частотой процессора', isRight: false },
      {
        text: 'выполняются с уменьшенным в два раза квантом времени',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Как в 32-х разрядной DLL-библиотеке ОС Windows выглядит идентификатор функции, экспортированной как __declspec(dllexport) int __stdcall Min(int x, int y)?',
    answers: [
      { text: 'Min1', isRight: false },
      { text: '_Min@8', isRight: false },
      { text: 'Min@0', isRight: false },
      { text: 'Min8', isRight: false },
      { text: '__Min', isRight: false },
    ],
  },
  {
    question: 'Какое действие в командной строке выполняет команда DIR?',
    answers: [
      { text: 'замена файлов', isRight: false },
      { text: 'выводит список полных имен файлов', isRight: false },
      {
        text: 'выводит список полных имен файлов и подкаталогов каталога',
        isRight: false,
      },
      { text: 'сравнение файлов', isRight: false },
      { text: 'перемещает все содержимое папки', isRight: false },
    ],
  },
  {
    question:
      'Как называется механизм перехвата процедур взаимодействия программ с файловой системой в ОС Windows?',
    answers: [
      { text: 'Thread Callbacks', isRight: false },
      { text: 'File System Mini-Filter', isRight: false },
      { text: 'Registry Callbacks', isRight: false },
      { text: 'PrОСess Callbacks', isRight: false },
      { text: 'Object Manager Callbacks', isRight: false },
    ],
  },
  {
    question:
      'Подсистема, являющаяся интерфейсом ко всем устройствам, подключенным к компьютеру, называется подсистемой?',
    answers: [
      { text: 'внешних устройств', isRight: false },
      { text: 'ввода-вывода', isRight: false },
      { text: 'управления памятью', isRight: false },
      { text: 'ввода', isRight: false },
      { text: 'управления интерфейсом', isRight: false },
    ],
  },
  {
    question: 'Программное обеспечение - это',
    answers: [
      {
        text: 'совокупность программ, установленных в операционной системе',
        isRight: false,
      },
      { text: 'все устройства, которые существуют в мире', isRight: false },
      { text: 'все программы, которые у вас есть на диске', isRight: false },
      { text: 'драйвер, установленный на компьютер', isRight: false },
      {
        text: 'совокупность устройств установленных на компьютере',
        isRight: false,
      },
    ],
  },
  {
    question: 'Для завершения работы системы в ОС Linux используется команда:',
    answers: [
      { text: 'quit', isRight: false },
      { text: 'logout', isRight: false },
      { text: 'exit', isRight: false },
      { text: 'ex', isRight: false },
      { text: 'shutdown(+)', isRight: false },
    ],
  },
  {
    question:
      'Какая системная программа служит для управления всеми разделяемыми ресурсами компьютера?',
    answers: [
      { text: 'диспетчер объектов(+)', isRight: false },
      { text: 'диспетчер файлов', isRight: false },
      { text: 'диспетчер процессов', isRight: false },
      { text: 'диспетчер ввода-вывода', isRight: false },
      { text: 'диспетчер виртуальной памяти', isRight: false },
    ],
  },
  {
    question:
      'Как называется модуль ядра операционной системы, отвечающий за управление памятью?',
    answers: [
      { text: 'PrОСess Manager', isRight: false },
      { text: 'Scheduler', isRight: false },
      { text: 'Memory Manager(+)', isRight: false },
      { text: 'Registry', isRight: false },
      { text: 'Network Manager', isRight: false },
    ],
  },
  {
    question: 'Синее окно смерти (BSOD) в ОС Windows возникало:',
    answers: [
      {
        text: 'в случае принудительного завершения работы компьютера',
        isRight: false,
      },
      {
        text: 'в случае ошибки в пользовательской программе в Windows NT для снятия программы, выполнившей недопустимую операцию',
        isRight: false,
      },
      {
        text: 'в случае возникновения ошибки в пространстве ядра Windows 3.11 без возможности продолжения выполнения, либо в случае ошибки в пользовательской программе в Windows NT для снятия программы, выполнившей недопустимую операцию (Глеб)',
        isRight: false,
      },
      {
        text: 'в случае возникновения ошибки в пространстве ядра Windows без возможности продолжения выполнения, а также в случае ошибки в пользовательской программе в Windows 3.11 или Windows 9x для снятия программы, выполнившей недопустимую операцию (Никита Тестом)',
        isRight: false,
      },
      {
        text: 'в случае выполнения невыполнимой операции пользовательской программой',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Какой режим масштабирования, устанавливаемый процедурой SetMapMode ОС Windows, обеспечивает рисование в сотых долях дюйма?',
    answers: [
      { text: 'MM_LOMETRIC', isRight: false },
      { text: 'MM_LOENGLISH', isRight: false },
      { text: 'MM_HIMETRIC', isRight: false },
      { text: 'MM_TEXT', isRight: false },
      { text: 'MM_HIENGLISH', isRight: false },
    ],
  },
  {
    question: 'Дескрипторы отдельных процессов объединены в список, образующий',
    answers: [
      { text: 'контекст процессов', isRight: false },
      { text: 'таблицу процессов', isRight: false },
      { text: 'идентификатор процесса', isRight: false },
      { text: 'текст процесса', isRight: false },
      { text: 'описатель потока', isRight: false },
    ],
  },
  {
    question: 'Как называется резервное копирование информации?',
    answers: [
      { text: 'архивация', isRight: false },
      { text: 'дезактивация', isRight: false },
      { text: 'инкапсуляция', isRight: false },
      { text: 'дефрагментация', isRight: false },
      { text: 'иммунизация', isRight: false },
    ],
  },
  {
    question:
      'Что представляют собой величины A, B и C, возвращаемые процедурой ОС Windows GetCharABCWidths?',
    answers: [
      {
        text: 'Это набор из трех величин – ширина буквы A, ширина буквы B и ширина буквы C',
        isRight: false,
      },
      {
        text: 'Это отступ слева от буквы (A), ширина буквы (B) и отступ справа от буквы (C) (+)',
        isRight: false,
      },
      { text: 'Это высота букв A, B и C', isRight: false },
      { text: 'Это размеры первых трех букв алфавита', isRight: false },
      {
        text: 'Это ширина самой широкой из трех букв: A, B и C',
        isRight: false,
      },
    ],
  },
  {
    question: 'Какая команда используется для создания папки из bat файла?',
    answers: [
      { text: 'DIR/Р', isRight: false },
      { text: 'RMDIR', isRight: false },
      { text: 'MKDIR', isRight: false },
      { text: 'MOVE', isRight: false },
      { text: 'CHDIR', isRight: false },
    ],
  },
  {
    question: 'FAT32, Ext2, NTFS – это',
    answers: [
      { text: 'расширения файлов', isRight: false },
      { text: 'название файлов', isRight: false },
      { text: 'названия различных операционных систем', isRight: false },
      { text: 'виды кодировки файлов', isRight: false },
      { text: 'названия различных файловых систем', isRight: false },
    ],
  },
  {
    question: 'Какой функцией ОС Windows выполняется закрытие объекта ядра?',
    answers: [
      { text: 'Dispose', isRight: false },
      { text: 'Close', isRight: false },
      { text: 'CloseHandle', isRight: false },
      { text: 'Delete', isRight: false },
      { text: 'Free', isRight: false },
    ],
  },
  {
    question:
      'Что изменится в работе программы с графическим пользовательским интерфейсом ОС Windows, если из цикла обработки сообщений удалить процедуру TranslateMessage?',
    answers: [
      {
        text: 'Программа перестанет получать сообщения WM_KEYDOWN, WM_KEYUP',
        isRight: false,
      },
      { text: 'Произойдет аварийное завершение программы', isRight: false },
      {
        text: 'Пользовательский интерфейс программы не будет переведен на русский язык',
        isRight: false,
      },
      {
        text: 'Программа перестанет получать сообщения WM_CHAR, WM_DEADCHAR, WM_SYSCHAR, WM_SYSDEADCHAR',
        isRight: false,
      },
      {
        text: 'Программа перестанет получать сообщения WM_KEYDOWN, WM_KEYUP, WM_SYSKEYDOWN, WM_SYSKEYUP',
        isRight: false,
      },
    ],
  },
  {
    question: 'Какую архитектуру ядра использует Linux',
    answers: [
      { text: 'гибридное', isRight: false },
      { text: 'гибридное модульное', isRight: false },
      { text: 'экзоядро', isRight: false },
      { text: 'монолитное модульное', isRight: false },
      { text: 'микроядро', isRight: false },
    ],
  },
  {
    question: 'Для установки программы в ОС Linux необходимо:',
    answers: [
      { text: 'выполнить команду setup', isRight: false },
      {
        text: 'запустить менеджер пакетов и выбрать пакет с устанавливаемой программой',
        isRight: false,
      },
      { text: 'создать пакет, содержащий программу', isRight: false },
      { text: 'распаковать пакет, содержащий программу', isRight: false },
      {
        text: 'скопировать пакет, содержащий программу, в отдельный каталог',
        isRight: false,
      },
    ],
  },
  {
    question: 'Для чего служит загрузчик операционной системы?',
    answers: [
      { text: 'подключения устройств ввода-вывода', isRight: false },
      {
        text: 'считывания в память модулей ядра операционной системы (Никита и Леха и Даша и тест)',
        isRight: false,
      },
      { text: 'загрузки программ в оперативную память ЭВМ', isRight: false },
      { text: 'обработки данных', isRight: false },
      { text: 'обработки команд, введенных пользователем', isRight: false },
    ],
  },
  {
    question: 'Какое действие в командной строке выполняет команда REPLACE?',
    answers: [
      { text: 'перемещение файлов', isRight: false },
      { text: 'копирование файлов', isRight: false },
      { text: 'тестирование файлов', isRight: false },
      { text: 'удаление файлов', isRight: false },
      { text: 'замена файлов', isRight: false },
    ],
  },
  {
    question: 'Wine - это?',
    answers: [
      { text: 'эмулятор', isRight: false },
      {
        text: 'приложение для проигрывания видео с открытым исходным кодом',
        isRight: false,
      },
      { text: 'способ виртуализация', isRight: false },
      {
        text: 'механизм трансляции вызовов WinAPI в системный вызовы ядра Linux',
        isRight: false,
      },
      {
        text: 'приложение для проигрывания музыки с открытым кодом',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Когда выполняются все необходимые для возникновения прерывания условия, его источник',
    answers: [
      { text: 'выставляет определенный магнитный импульс', isRight: false },
      { text: 'генерирует код ошибки', isRight: false },
      {
        text: 'выставляет определенный электрический сигнал(Никита и Даша)',
        isRight: false,
      },
      { text: 'посылает сообщение серверу ОС', isRight: false },
      { text: 'посылает сообщение ядру ОС', isRight: false },
    ],
  },
  {
    question: 'Какие базовые функции ОС не выполняют модули ядра?',
    answers: [
      { text: 'управление памятью', isRight: false },
      { text: 'управление устройствами ввода-вывода', isRight: false },
      { text: 'контроль доступа исполняемого кода к памяти', isRight: false },
      { text: 'контроль качества исполняемого кода', isRight: false },
      { text: 'управление процессами', isRight: false },
    ],
  },
  {
    question: 'Процессор, основная память, внешняя память являются?',
    answers: [
      { text: 'вторичными ресурсами вычислительной системы', isRight: false },
      { text: 'первичными ресурсами вычислительной системы', isRight: false },
      { text: 'внешними ресурсами вычислительной системы', isRight: false },
      { text: 'ресурсами вычислительной сети', isRight: false },
      { text: 'сетевыми ресурсами вычислительной системы', isRight: false },
    ],
  },
  {
    question:
      'Достоинством распределения памяти разделами с фиксированными границами является',
    answers: [
      { text: 'высокий уровень мультипрограммирования', isRight: false },
      { text: 'простота реализации', isRight: false },
      { text: 'эффективное использование памяти', isRight: false },
      { text: 'многопоточность', isRight: false },
      { text: 'гибкость', isRight: false },
    ],
  },
  {
    question:
      'С помощью какой процедуры драйвер уничтожает объект устройства DEVICE_OBJECT?',
    answers: [
      { text: 'NtReadFile', isRight: false },
      { text: 'InterruptServiceRoutine', isRight: false },
      { text: 'IoDeleteDevice', isRight: false },
      { text: 'IОСreateDevice', isRight: false },
      { text: 'IОСompletionRoutine', isRight: false },
    ],
  },
  {
    question: 'Какое действие в командной строке выполняет команда FORMAT?',
    answers: [
      { text: 'проверка диска', isRight: false },
      { text: 'архивирование диска', isRight: false },
      { text: 'дефрагментация диска', isRight: false },
      { text: 'вывод информации с диска', isRight: false },
      { text: 'форматирование диска', isRight: false },
    ],
  },
  {
    question:
      'Какая проблема устраняется с помощью барьера памяти (memory barrier или memory fence)?',
    answers: [
      {
        text: 'Устраняется проблема взаимной блокировки процессорных ядер',
        isRight: false,
      },
      { text: 'Устраняется проблема перегрева процессора', isRight: false },
      {
        text: 'Устраняется проблема загрузки процессорных ядер',
        isRight: false,
      },
      {
        text: 'Устраняется проблема ожидания процессорными ядрами друг друга',
        isRight: false,
      },
      {
        text: 'Устраняется проблема перестановки операций записи и чтения памяти',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Способ организации вычислительного процесса, при котором на одном процессоре выполняются сразу несколько программ, называется',
    answers: [
      { text: 'мультивычислением', isRight: false },
      { text: 'мультипроцессированием', isRight: false },
      { text: 'мультипрограммированием', isRight: false },
      { text: 'однопоточностью', isRight: false },
      { text: 'многопоточностью', isRight: false },
    ],
  },
  {
    question:
      'Программный модуль ОС, ответственный за чтение отдельных команд или их последовательности из командного файла, называется',
    answers: [
      { text: 'командной утилитой', isRight: false },
      { text: 'утилитой', isRight: false },
      { text: 'диспетчером команд', isRight: false },
      { text: 'командным интерпретатором', isRight: false },
      { text: 'командным модулем', isRight: false },
    ],
  },
  {
    question:
      'Если планировщик задач принимает решения о перепланировании не во время работы системы, а по заранее составленному плану, то он называется',
    answers: [
      { text: 'динамическим', isRight: false },
      { text: 'статическим', isRight: false },
      { text: 'синхронным', isRight: false },
      { text: 'асинхронным', isRight: false },
      { text: 'статистическим', isRight: false },
    ],
  },
  {
    question: 'Как называется единая таблица векторов прерываний?',
    answers: [
      { text: 'Deferred PrОСedure Call', isRight: false },
      { text: 'Asynchronous PrОСedure Call', isRight: false },
      { text: 'Interrupt Dispatch Table', isRight: false },
      { text: 'Registry', isRight: false },
      { text: 'Driver Buffer', isRight: false },
    ],
  },
  {
    question: 'Механизм идентификации пользователя в ОС Windows NT реализуется',
    answers: [
      { text: 'функцией LogonUser', isRight: false },
      { text: 'методом LogonUser', isRight: false },
      { text: 'ядром ОС', isRight: false },
      { text: 'специальным процессом Winlogon', isRight: false },
      { text: 'специальным процессом LogonUser', isRight: false },
    ],
  },
  {
    question:
      'Что является идентификатором оконного класса ОС Windows в программе с графическим пользовательским интерфейсом?',
    answers: [
      { text: 'Имя оконного класса', isRight: false },
      { text: 'Дескриптор объекта оконного класса', isRight: false },
      { text: 'Номер оконного класса', isRight: false },
      { text: 'Пара номеров оконного класса', isRight: false },
      { text: 'Адрес объекта оконного класса', isRight: false },
    ],
  },
  {
    question: 'Служба ОС Windows – это',
    answers: [
      {
        text: 'программа в ОС Windows, постоянно находящаяся в памяти, напрямую не взаимодействующая с пользователем, но реализующая функции, необходимые для работы операционной системы или выполнения серверных функций в клиент-серверной архитектуре',
        isRight: false,
      },
      { text: 'программа-обработчик прерывания', isRight: false },
      {
        text: 'синоним для задачи в многозадачных операционных системах, в частности в Windows',
        isRight: false,
      },
      {
        text: 'программа, демонстрирующая состояние процессора',
        isRight: false,
      },
      {
        text: 'процесс беспрерывного функционирования сервера',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Снятие потока ОС Windows функцией TerminateThread не приводит к вызову в DLL-библиотеках функции DllMain с кодом:',
    answers: [
      { text: 'DLL_PRОСESS_TERMINATE', isRight: false },
      { text: 'DLL_PRОСESS_ATTACH', isRight: false },
      { text: 'DLL_PRОСESS_DETACH', isRight: false },
      { text: 'DLL_THREAD_DETACH', isRight: false },
      { text: 'DLL_THREAD_ATTACH', isRight: false },
    ],
  },
  {
    question: 'Как называется точка входа-выхода DLL-библиотеки ОС Windows?',
    answers: [
      { text: 'DllEntry', isRight: false },
      { text: 'DllMain, но имя не закреплено (+)', isRight: false },
      { text: 'DllEntryPoint', isRight: false },
      { text: 'DriverEntry', isRight: false },
      { text: 'LoadLibrary', isRight: false },
    ],
  },
  {
    question: 'Какое действие в командной строке выполняет команда COPY?',
    answers: [
      { text: 'удаление файлов', isRight: false },
      { text: 'тестирование файлов', isRight: false },
      { text: 'копирование файлов (+)', isRight: false },
      { text: 'архивация файлов', isRight: false },
      { text: 'перемещение файлов', isRight: false },
    ],
  },
  {
    question: 'Однопользовательские операционные системы',
    answers: [
      {
        text: 'не имеют встроенного механизма для работы с несколькими задачами, предоставляя возможность выполнения только одной программы',
        isRight: false,
      },
      {
        text: 'такой разновидности операционных систем не бывает',
        isRight: false,
      },
      {
        text: 'не предназначены для работы с пользователем, используются в прошивках устройств',
        isRight: false,
      },
      {
        text: 'не имеют встроенного механизма для работы с несколькими пользователями, предоставляя монопольный доступ ко всем устройствам и ресурсам, без разграничения',
        isRight: false,
      },
      {
        text: 'операционные системы для мобильных устройств, там нет необходимости в использовании несколькими пользователями',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Как называется основной набор компонентов для программирования драйверов ОС Windows?',
    answers: [
      { text: 'Windows SubSystem for Linux', isRight: false },
      { text: 'SDK', isRight: false },
      { text: 'Windows Software Development Kit', isRight: false },
      { text: 'Windows Driver Kit(WDK)', isRight: false },
      { text: 'Sysinternals Suite', isRight: false },
    ],
  },
  {
    question:
      'Как программа для ОС Windows решает, когда выполнить перерисовку окна?',
    answers: [
      {
        text: 'Программа после каждого события вызывает процедуру UpdateWindow для перерисовки окна',
        isRight: false,
      },
      {
        text: 'Программа не перерисовывает свои окна, это делает операционная система',
        isRight: false,
      },
      {
        text: 'Программе посылается сообщение WM_TIMER, по которому выполняется перерисовка окна',
        isRight: false,
      },
      {
        text: 'Операционной системой программе посылается сообщение WM_PAINT, которое программа должна обработать',
        isRight: false,
      },
      {
        text: 'Программа после каждого события вызывает процедуру InvalidateRegion, выполняющую перерисовку окна',
        isRight: false,
      },
    ],
  },
  {
    question: 'Примеры контейнерной виртуализации',
    answers: [
      { text: 'OpenVZ, KVM', isRight: false },
      { text: 'Wine, Linux-подсистема в Windows 10', isRight: false },
      { text: 'QEMU, KVM', isRight: false },
      { text: 'OpenVZ, LXC, DОСker', isRight: false },
      { text: 'LXC, Wine', isRight: false },
    ],
  },
  {
    question:
      'Какой структуре данных в современных платформах программирования соответствует структура данных ядра LIST_ENTRY?',
    answers: [
      { text: 'целое число', isRight: false },
      { text: 'вещественное число', isRight: false },
      { text: 'двусвязный список', isRight: false },
      { text: 'строка', isRight: false },
      { text: 'булево', isRight: false },
    ],
  },
  {
    question:
      'Логически связанная совокупность данных или программ, для размещения которой во внешней памяти выделяется определенная область?',
    answers: [
      { text: 'папка', isRight: false },
      { text: 'документ', isRight: false },
      { text: 'файл', isRight: false },
      { text: 'раздел', isRight: false },
      { text: 'драйвер', isRight: false },
    ],
  },
  {
    question: 'Что такое файл?',
    answers: [
      { text: 'единица измерения информации', isRight: false },
      { text: 'текст, распечатанный на принтере', isRight: false },
      {
        text: 'поименованная область данных на внешнем носителе памяти (+)',
        isRight: false,
      },
      { text: 'область данных в оперативной памяти', isRight: false },
      { text: 'программа в оперативной памяти', isRight: false },
    ],
  },
  {
    question:
      'Объект ядра ОС Windows отличается от других объектов ОС Windows тем, что имеет (выберите наиболее полный и точный вариант):',
    answers: [
      {
        text: 'Имя, атрибуты защиты, ключ объекта в реестре ОС Windows',
        isRight: false,
      },
      { text: 'Имя, атрибуты защиты', isRight: false },
      {
        text: 'Имя, счетчик числа процессов-пользователей объекта, ключ объекта в реестре ОС Windows',
        isRight: false,
      },
      {
        text: 'Имя, атрибуты защиты, счетчик числа процессов-пользователей объекта',
        isRight: false,
      },
      {
        text: 'Атрибуты защиты, счетчик числа процессов-пользователей объекта',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Открытие объекта ядра, созданного другим процессом, осуществляется по:',
    answers: [
      { text: 'ключу объекта в реестре ОС Windows', isRight: false },
      { text: 'дайджесту объекта', isRight: false },
      { text: 'имени объекта', isRight: false },
      { text: 'номеру объекта', isRight: false },
      { text: 'временной метке объекта', isRight: false },
    ],
  },
  {
    question:
      'Из перечисленного: 1) соответствующих компиляторов; 2) двоичной совместимости; 3) программной совместимости; 4) совместимости на уровне библиотек и системных вызовов; 5) эмулятора - для совместимости на уровне исходных текстов требуется наличие',
    answers: [
      { text: '2, 4', isRight: false },
      { text: '1, 5', isRight: false },
      { text: '4, 5', isRight: false },
      { text: '2, 3', isRight: false },
      { text: '1, 4', isRight: false },
    ],
  },
  {
    question:
      'Как называется папка, которая выступает в качестве вершины файловой структуры?',
    answers: [
      { text: 'папка нижнего уровня', isRight: false },
      { text: 'корневая', isRight: false },
      { text: 'папка верхнего уровня', isRight: false },
      { text: 'начальная', isRight: false },
      { text: 'стартовая', isRight: false },
    ],
  },
  {
    question:
      'Как называется информационная структура, содержащая сведения об идентификаторе потока, данные о правах доступа и приоритете и состоянии потока',
    answers: [
      { text: 'дескриптором файла', isRight: false },
      { text: 'описателем потока', isRight: false },
      { text: 'описателем процесса', isRight: false },
      { text: 'дескриптором процесса', isRight: false },
      { text: 'номером потока', isRight: false },
    ],
  },
  {
    question:
      'Как называется состояние страницы памяти, при котором она передана в физическую память?',
    answers: [
      { text: 'Registry', isRight: false },
      { text: 'Free', isRight: false },
      { text: 'New', isRight: false },
      { text: 'Committed', isRight: false },
      { text: 'Deleted', isRight: false },
    ],
  },
  {
    question:
      'Какая команда используется в ОС Windows для просмотра оглавления каталога?',
    answers: [
      { text: 'DIR/Р', isRight: false },
      { text: 'RMDIR', isRight: false },
      { text: 'MKDIR', isRight: false },
      { text: 'MOVE', isRight: false },
      { text: 'CHDIR', isRight: false },
    ],
  },
  {
    question:
      'Можно ли выполнить временную установку шрифта в ОС Windows без копирования файла шрифта в папку C:\\Windows\\Fonts?',
    answers: [
      { text: 'Нет, это в принципе невозможно', isRight: false },
      {
        text: 'Нет, требуется копирование файла шрифта в папку C:\\Windows\\Fonts, а это невозможно по соображениям безопасности',
        isRight: false,
      },
      {
        text: 'Да, для этого достаточно скопировать файл шрифта в папку приложения',
        isRight: false,
      },
      {
        text: 'Да, для этого необходимо воспользоваться процедурами AddFontMemResourceEx и RemoveFontMemResourceEx',
        isRight: false,
      },
      {
        text: 'Нет, копирование файла шрифта в папку C:\\Windows\\Fonts неизбежно',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Выполняемая программа, имеющая собственное виртуальное адресное пространство, код, данные, а также потребляющие ресурсы ОС, это',
    answers: [
      { text: 'Поток', isRight: false },
      { text: 'Драйвер', isRight: false },
      { text: 'DLL-библиотека', isRight: false },
      { text: 'Процесс', isRight: false },
      { text: 'Сервис', isRight: false },
    ],
  },
  {
    question:
      'Возможность подключения разнообразных моделей внешних устройств гарантируется наличием в ОС большого количества',
    answers: [
      { text: 'утилит', isRight: false },
      { text: 'драйверов (+)', isRight: false },
      { text: 'модулей ядра', isRight: false },
      { text: 'вспомогательных приложений', isRight: false },
      { text: 'программ', isRight: false },
    ],
  },
  {
    question: 'Что такое буфер обмена?',
    answers: [
      { text: '﻿﻿жесткий диск', isRight: false },
      {
        text: '﻿﻿это специальная память компьютера, которую нельзя стереть',
        isRight: false,
      },
      {
        text: '﻿﻿специальная область монитора, в которой временно хранится информация',
        isRight: false,
      },
      { text: '﻿﻿это оперативная память', isRight: false },
      {
        text: '﻿﻿специальная область памяти компьютера, в которой временно хранится информация',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Сколько координатных плоскостей существует в расширенном графическом режиме (GM_ADVANCED) ОС Windows? Как они называются?',
    answers: [
      {
        text: '﻿﻿2: мировая (world coordinate space), устройства (device coordinate space)',
        isRight: false,
      },
      {
        text: '﻿﻿5: мировая (world coordinate space), логическая (logical coordinate space), страничная (page coordinate space), устройства (device coordinate space), физического устройства (physical device coordinate space)',
        isRight: false,
      },
      {
        text: '﻿﻿2: логическая (logical coordinate space), физическая (device coordinate space)',
        isRight: false,
      },
      {
        text: '﻿﻿4: мировая (world coordinate space), страничная (page coordinate space), устройства (device coordinate space), физического устройства (physical device coordinate space)',
        isRight: false,
      },
      {
        text: '﻿﻿3: мировая (world coordinate space), страничная (page coordinate space), устройства (device coordinate space)',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Программирование первых ламповых вычислительных устройств осуществлялось исключительно на',
    answers: [
      { text: 'пользовательском языке', isRight: false },
      { text: 'машинном языке', isRight: false },
      { text: 'высокоуровневом языке', isRight: false },
      { text: 'английском языке', isRight: false },
      { text: 'командном языке', isRight: false },
    ],
  },
  {
    question:
      'Для организации доступа нескольких потоков к одному общему ресурсу необходимо использовать',
    answers: [
      { text: 'кэш процессора', isRight: false },
      { text: 'виртуальную память', isRight: false },
      { text: 'драйвер', isRight: false },
      { text: 'соглашение вызова', isRight: false },
      { text: 'механизмы синхронизации', isRight: false },
    ],
  },
  {
    question: 'Для чего нужна в Linux утилита grep?',
    answers: [
      { text: 'для работы с регулярными выражениями', isRight: false },
      { text: 'для открытия файла', isRight: false },
      { text: 'для архивации файла', isRight: false },
      { text: 'для перемещения файла', isRight: false },
      { text: 'для сортировки содержимого файла', isRight: false },
    ],
  },
  {
    question:
      'Как называется нотация, используемая в идентификаторах параметров функций операционной системы Windows?',
    answers: [
      { text: 'Венгерская', isRight: false },
      { text: 'Русская', isRight: false },
      { text: 'Английская', isRight: false },
      { text: 'Польская', isRight: false },
      { text: 'Чешская', isRight: false },
    ],
  },
  {
    question:
      'Как изменяется пропускная способность операционной системы при мультипрограммировании',
    answers: [
      { text: 'снижается', isRight: false },
      { text: 'не измеряется', isRight: false },
      { text: 'не оценивается', isRight: false },
      { text: 'не изменяется', isRight: false },
      { text: 'повышается', isRight: false },
    ],
  },
  {
    question: 'Брандмауэр (межсетевой экран) —',
    answers: [
      { text: 'автоматические устанавливает обновления', isRight: false },
      {
        text: 'может регулярно проверять наличие обновлений и автоматически их устанавливать',
        isRight: false,
      },
      {
        text: 'показывает текущее состояние защиты компьютера и рекомендует меры по усилению безопасности',
        isRight: false,
      },
      {
        text: 'позволяет предотвращать несанкционированные изменения в компьютере, обеспечивает защиту, запрашивая разрешение перед совершением потенциально опасных для компьютера действий',
        isRight: false,
      },
      {
        text: 'защищает компьютер, предотвращает несанкционированный доступ к нему из сети',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Время между запуском системы на выполнение и получением результата называют',
    answers: [
      { text: 'длительностью реакции', isRight: false },
      { text: 'временем реакции', isRight: false },
      { text: 'периодом выполнения', isRight: false },
      { text: 'временем выполнения', isRight: false },
      { text: 'временем деактивации', isRight: false },
    ],
  },
  {
    question:
      'Как называется раздел с которого загружается ОС при запуске компьютера',
    answers: [
      { text: 'пассивным', isRight: false },
      { text: 'загрузочным', isRight: false },
      { text: 'статичным', isRight: false },
      { text: 'активным', isRight: false },
      { text: 'основным', isRight: false },
    ],
  },
  {
    question: 'Объекты оконной системы ОС Windows называются:',
    answers: [
      { text: 'Window Objects', isRight: false },
      { text: 'User Objects', isRight: false },
      { text: 'Kernel Objects', isRight: false },
      { text: 'GDI Objects', isRight: false },
      { text: 'Driver Objects', isRight: false },
    ],
  },
  {
    question: 'Как называется совокупность кодов и данных процесса',
    answers: [
      { text: 'образом процесса', isRight: false },
      { text: 'процессор', isRight: false },
      { text: 'дескриптором процесса', isRight: false },
      { text: 'идентификатором процесса', isRight: false },
      { text: 'описателем процесса', isRight: false },
    ],
  },
  {
    question:
      'С помощью какой функции ОС Windows можно получить адрес функции из загруженной в память DLL-библиотеки?',
    answers: [
      { text: 'GetModuleFileName', isRight: false },
      { text: 'GetModuleHandle', isRight: false },
      { text: 'LoadLibrary', isRight: false },
      { text: 'GetProcAddress', isRight: false },
      { text: 'GetFunction', isRight: false },
    ],
  },
  {
    question:
      'Какая функция используется для записи файла в WinAPI в пользовательском режиме?',
    answers: [
      { text: 'NtWriteFile', isRight: false },
      { text: 'ZwReadFile', isRight: false },
      { text: 'NtReadFile', isRight: false },
      { text: 'NtDll.dll', isRight: false },
      { text: 'AdvAPI.dll', isRight: false },
    ],
  },
  {
    question:
      'Какие из перечисленных данных содержит структура оконного класса ОС Windows?',
    answers: [
      {
        text: 'Заголовок окон данного оконного класса и другие данные',
        isRight: false,
      },
      {
        text: 'Толщина рамки окон данного оконного класса, высота заголовка и другие данные',
        isRight: false,
      },
      {
        text: 'Размеры окон данного оконного класса, заголовок окон и другие данные',
        isRight: false,
      },
      {
        text: 'Указатель на процедуру обработки оконных сообщений, стиль оконного класса, значок, курсор, меню окон данного оконного класса и другие данные',
        isRight: false,
      },
      {
        text: 'Значок, курсор, меню, заголовок окон данного оконного класса и другие данные',
        isRight: false,
      },
    ],
  },
  {
    question: 'Какая команда позволяет управлять потоком вывода на дисплей?',
    answers: [
      { text: 'Help', isRight: false },
      { text: 'Start', isRight: false },
      { text: 'Pause', isRight: false },
      { text: 'Cmd', isRight: false },
      { text: 'Echo', isRight: false },
    ],
  },
  {
    question: 'Какое действие в командной строке выполняет команда FC?',
    answers: [
      { text: 'удаление файлов', isRight: false },
      { text: 'замена файлов', isRight: false },
      { text: 'сравнение файлов', isRight: false },
      { text: 'тестирование файлов', isRight: false },
      { text: 'переименование файлов', isRight: false },
    ],
  },
  {
    question:
      'Как называется информационная структура, которая содержит информацию о процессе, необходимую ядру ОС в течение всего жизненного цикла процесса независимо от его состояния?',
    answers: [
      { text: 'дескриптор', isRight: false },
      { text: 'контекст', isRight: false },
      { text: 'схема', isRight: false },
      { text: 'процесс', isRight: false },
      { text: 'поток', isRight: false },
    ],
  },
  {
    question: 'В ОС UNIX конвейером называется:',
    answers: [
      {
        text: 'программа, считывающая данные со стандартного устройства ввода, выполняющая обработку этих данных и записывающая результат в поток стандартного вывода',
        isRight: false,
      },
      { text: 'файл, содержащий системные вызовы', isRight: false },
      { text: 'файл, содержащий команды оболочки', isRight: false },
      { text: 'файл, содержащий команды файла', isRight: false },
      {
        text: 'набор команд, соединенных символом канала(Никита тестом)',
        isRight: false,
      },
    ],
  },
  {
    question: 'KDE, GNOME, Xfce - это названия',
    answers: [
      { text: 'оболочек операционной системы Linux(+)', isRight: false },
      { text: 'оболочек операционной системы Windows', isRight: false },
      { text: 'сред разработки', isRight: false },
      { text: 'браузеров', isRight: false },
      { text: 'графических редакторов', isRight: false },
    ],
  },
  {
    question: 'Что такое виртуальная машина?',
    answers: [
      { text: 'Это среда выполнения Windows', isRight: false },
      { text: 'Это программа для запуска лишь ОС Ubuntu', isRight: false },
      { text: 'Это среда выполнения Linux', isRight: false },
      {
        text: 'Это специальная программа для запуска только Linux систем',
        isRight: false,
      },
      {
        text: 'Это виртуальная среда для запуска разных ОС на вашем ПК',
        isRight: false,
      },
    ],
  },
  {
    question: 'Какая запись имени текстового файла является правильной?',
    answers: [
      { text: 'sigma.txt', isRight: false },
      { text: '$sigma.txt', isRight: false },
      { text: 'sigma.si', isRight: false },
      { text: 'sigma.com', isRight: false },
      { text: 'SIGMA.SYS', isRight: false },
    ],
  },
  {
    question: 'При установке ОС Linux рекомендуется выбрать файловую систему:',
    answers: [
      { text: 'FAT32', isRight: false },
      { text: 'FAT', isRight: false },
      { text: 'journalized ext3 FS', isRight: false },
      { text: 'FAT16', isRight: false },
      { text: 'NTFS', isRight: false },
    ],
  },
  {
    question: 'Какой архитектуры ядра не существует',
    answers: [
      { text: 'макроядро', isRight: false },
      { text: 'микроядро', isRight: false },
      { text: 'экоядро', isRight: false },
      { text: 'гибридное ядро', isRight: false },
      { text: 'экзоядро', isRight: false },
    ],
  },
  {
    question: 'Где хранятся атрибуты файлов в файловой системе FAT?',
    answers: [
      { text: 'в каталогах', isRight: false },
      { text: 'вместе с файлом', isRight: false },
      { text: 'в индексных дескрипторах', isRight: false },
      { text: 'в таблице с папками и файлами', isRight: false },
      { text: 'в таблицах FAT', isRight: false },
    ],
  },
  {
    question:
      'Чем мьютекс (Mutex) отличается от критической секции в ОС Windows?',
    answers: [
      {
        text: 'Критическая секция является бинарным семафором, а мьютекс нет',
        isRight: false,
      },
      {
        text: 'Критическая секция имеет два состояния - свободна и занята, а мьютекс имеет три состояния',
        isRight: false,
      },
      {
        text: 'Мьютекс имеет два состояния свободен и занят, а критическая секция имеет три состояния',
        isRight: false,
      },
      {
        text: 'Мьютекс имеет счетчик захвативших его потоков, а критическая секция - нет',
        isRight: false,
      },
      {
        text: 'Мьютекс может использоваться для синхронизации потоков разных процессов, а критическая секция - нет (+)',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Время между запуском программы на выполнение и получением результата называют',
    answers: [
      { text: 'временем деактивации', isRight: false },
      { text: 'временем реакции', isRight: false },
      { text: 'временем выполнения', isRight: false },
      { text: 'длительностью реакции', isRight: false },
      { text: 'периодом выполнения', isRight: false },
    ],
  },
  {
    question:
      'Что необходимо сделать в программе для ОС Windows, чтобы в оконной процедуре получать сообщения о двойном щелчке манипулятора мыши?',
    answers: [
      {
        text: 'Необходимо изменить настройки Панели Управления (Windows Control Panel) и перезагрузить компьютер',
        isRight: false,
      },
      {
        text: 'В оконном классе необходимо включить стиль CS_DBLCLKS',
        isRight: false,
      },
      {
        text: 'При создании окна необходимо включить стиль WS_DBLCLKS',
        isRight: false,
      },
      {
        text: 'В оконном классе необходимо выключить стиль CS_NODBLCLKS',
        isRight: false,
      },
      {
        text: 'При создании окна необходимо выключить стиль WS_NODBLCLKS',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Какой префикс в WinAPI обозначает Native API функции, которые используются в пользовательском режиме?',
    answers: [
      { text: 'Fn', isRight: false },
      { text: 'Zw', isRight: false },
      { text: 'Usr', isRight: false },
      { text: 'Nt', isRight: false },
      { text: 'Am', isRight: false },
    ],
  },
  {
    question: 'Какое действие в командной строке выполняет команда RD?',
    answers: [
      { text: 'архивация каталога', isRight: false },
      { text: 'копирование каталогов', isRight: false },
      { text: 'создание каталогов', isRight: false },
      { text: 'удаление каталогов', isRight: false },
      { text: 'перемещение каталогов', isRight: false },
    ],
  },
  {
    question:
      'Исключение конфликта версий DLL-библиотек ОС Windows выполняется с помощью:',
    answers: [
      {
        text: 'Создания файла манифеста для приложения или пустого файла или каталога, совпадающего по имени с именем приложения и отличающегося наличием суффикса .locall',
        isRight: false,
      },
      {
        text: 'Создания каталога, совпадающего по имени с именем приложения и отличающегося наличием суффикса .dll',
        isRight: false,
      },
      {
        text: 'Перемещения всех DLL-библиотек в каталог приложения',
        isRight: false,
      },
      {
        text: 'Создания пустого файла, совпадающего по имени с именем приложения и отличающегося наличием суффикса .dll',
        isRight: false,
      },
      { text: 'Создания файла dll в каталоге приложения', isRight: false },
    ],
  },
  {
    question:
      'Какой тип ресурсов ОС Windows обеспечивает хранение произвольных двоичных данных?',
    answers: [
      { text: 'Bitmap', isRight: false },
      { text: 'VersionInformation', isRight: false },
      { text: 'String Table', isRight: false },
      { text: 'RCData', isRight: false },
      { text: 'AcceleratorTable', isRight: false },
    ],
  },
  {
    question:
      'Как называется механизм перехвата процедур взаимодействия программ с объектами в ОС Windows?',
    answers: [
      { text: 'Object Manager Callbacks', isRight: false },
      { text: 'PrОСess Callbacks', isRight: false },
      { text: 'Registry Callbacks', isRight: false },
      { text: 'Thread Callbacks', isRight: false },
      { text: 'File System Mini-Filter', isRight: false },
    ],
  },
  {
    question:
      'Часть операционной системы, постоянно находящаяся в оперативной памяти персонального компьютера в течение всей работы системы, это?',
    answers: [
      { text: 'драйвера', isRight: false },
      { text: 'оболочка операционной системы', isRight: false },
      { text: 'файловая система', isRight: false },
      { text: 'программное обеспечение', isRight: false },
      { text: 'ядро операционной системы', isRight: false },
    ],
  },
  {
    question: 'В ОС UNIX область представляет собой?',
    answers: [
      {
        text: 'непрерывный участок виртуального адресного пространства процесса, рассматриваемый как отдельный объект',
        isRight: false,
      },
      { text: 'участки адресного пространства', isRight: false },
      {
        text: 'виртуальное адресное пространство разделяемой памяти',
        isRight: false,
      },
      {
        text: 'множество участков виртуального адресного пространства, принадлежащих одному процессу',
        isRight: false,
      },
      { text: 'виртуальное адресное пространство ядра', isRight: false },
    ],
  },
  {
    question: 'Папка, которая выступает в качестве вершины файловой структуры?',
    answers: [
      { text: 'начальная папка', isRight: false },
      { text: 'стартовая папка', isRight: false },
      { text: 'папка', isRight: false },
      { text: 'структурная папка', isRight: false },
      { text: 'корневая папка', isRight: false },
    ],
  },
  {
    question: 'Многозадачная операционная система?',
    answers: [
      {
        text: 'требует для выполнения несколько процессоров (процессорных ядер)',
        isRight: false,
      },
      {
        text: 'система, позволяющая выполнять несколько задач и переключаться между ними',
        isRight: false,
      },
      {
        text: 'позволяет использовать операционную систему нескольким пользователям',
        isRight: false,
      },
      { text: 'позволяет выполнять разные программы', isRight: false },
      {
        text: 'бывают только однозадачные операционные системы',
        isRight: false,
      },
    ],
  },
  {
    question: 'Дать определение вытесняющей многозадачности',
    answers: [
      {
        text: 'режим многозадачности, при котором переключение процессов происходит через определенные кванты времени соответственно приоритетам',
        isRight: false,
      },
      {
        text: 'режим многозадачности, при котором переключение процессов возможно через определенное время',
        isRight: false,
      },
      {
        text: 'режим многозадачности, при котором каждый новый процесс монопольно занимает процессорное время, а состояние остальных процессов записывается в файл подкачки',
        isRight: false,
      },
      {
        text: 'режим многозадачности, при котором переключение процессов возможно в любой момент времени',
        isRight: false,
      },
      {
        text: 'режим, при котором переключение процессов возможно только, когда работающий процесс вызовет системную функцию',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Какую функцию ОС Windows нужно вызвать, чтобы приостановить поток на заданное количество миллисекунд?',
    answers: [
      { text: 'TerminateThread', isRight: false },
      { text: 'ExitThread', isRight: false },
      { text: 'SuspendThread', isRight: false },
      { text: 'Sleep или SleepEx', isRight: false },
      { text: 'SwitchToThread', isRight: false },
    ],
  },
  {
    question: 'Как называется главная точка входа в драйвер в ОС Windows?',
    answers: [
      { text: 'DriverUnload', isRight: false },
      { text: 'Windows Driver Kit', isRight: false },
      { text: 'IRQL', isRight: false },
      { text: 'Driver Entry (+)', isRight: false },
      { text: 'NtReadFile', isRight: false },
    ],
  },
  {
    question: 'Что есть в каждой ОС Linux?',
    answers: [
      { text: 'отличный дизайн операционной системы', isRight: false },
      { text: 'большой набор графических функций', isRight: false },
      { text: 'приложение браузер', isRight: false },
      { text: 'меню пуск', isRight: false },
      { text: 'терминал', isRight: false },
    ],
  },
  {
    question:
      'Образ выгруженного процесса возвращается с диска в оперативную память в случае',
    answers: [
      { text: 'блокировки процесса', isRight: false },
      { text: 'возобновления работы процесса', isRight: false },
      { text: 'прерывания процесса', isRight: false },
      { text: 'выполнения операций ввода-вывода', isRight: false },
      { text: 'обмена сообщениями с другим процессом', isRight: false },
    ],
  },
  {
    question:
      'Класс функций ОС, решающих внутрисистемные задачи организации вычислительного процесса, входит в состав:',
    answers: [
      { text: 'BIOS', isRight: false },
      { text: 'вспомогательных модулей ОС', isRight: false },
      { text: 'ядра ОС', isRight: false },
      { text: 'специальных модулей ОС', isRight: false },
      { text: 'драйверов', isRight: false },
    ],
  },
  {
    question: 'Центральный процессор — это',
    answers: [
      {
        text: 'устройство, реализующая функции обработки графики и аудио',
        isRight: false,
      },
      {
        text: 'главная программа, выполняющаяся на компьютере',
        isRight: false,
      },
      {
        text: 'устройство, реализованное в виде микросхемы, либо электронной схемы',
        isRight: false,
      },
      {
        text: 'устройство, реализованное только в виде микросхемы. Если состоит из транзисторов, ламп, проводов, это уже не процессор, а системный блок(Никита и Даша)',
        isRight: false,
      },
      {
        text: 'устройство, реализованное только с использованием транзисторов, ламп, проводов. В одной микросхеме невозможно реализовать полноценный центральный процессор',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Какова правильная последовательность вызова функций ОС Windows для проецирования файла в память?',
    answers: [
      {
        text: 'CreateFileMapping, CreateFile, MapViewofFileEx',
        isRight: false,
      },
      {
        text: 'CreateFileMapping, MapViewOfFileEx, LoadLibrary',
        isRight: false,
      },
      {
        text: 'CreateFile, MapViewOfFileEx, CreateFileMapping',
        isRight: false,
      },
      {
        text: 'MapViewOfFileEx, CreateFile, CreateFileMapping',
        isRight: false,
      },
      {
        text: 'CreateFile, CreateFileMapping, MapViewofFileEx',
        isRight: false,
      },
    ],
  },
  {
    question: 'Какое действие в командной строке выполняет команда CHKDSK?',
    answers: [
      { text: 'проверка диска', isRight: false },
      { text: 'архивирование диска', isRight: false },
      { text: 'форматирование диска', isRight: false },
      { text: 'перемещение диска', isRight: false },
      { text: 'дефрагментация диска', isRight: false },
    ],
  },
  {
    question: 'Какой оператор осуществляет вывод потока данных в файл?',
    answers: [
      { text: 'cmd', isRight: false },
      { text: 'input', isRight: false },
      { text: '> > >', isRight: false },
      { text: '> (+)', isRight: false },
      { text: '<', isRight: false },
    ],
  },
  {
    question:
      'Из перечисленного: 1) аппаратура; 2) средства аппаратной поддержки; 3) ядро; 4) утилиты, системные обрабатывающие программы; 5) машинно-независимые компоненты - слоями ОС, построенной по классической архитектуре, являются',
    answers: [
      { text: '2, 3, 5', isRight: false },
      { text: '1, 2, 4', isRight: false },
      { text: '1, 5', isRight: false },
      { text: '1, 3, 4', isRight: false },
      { text: '1, 2, 3', isRight: false },
    ],
  },
  {
    question:
      'Как называется возможность наращивания вычислительных ресурсов системы',
    answers: [
      { text: 'конфигурируемостью', isRight: false },
      { text: 'расширяемостью', isRight: false },
      { text: 'наращиваемостью', isRight: false },
      { text: 'идентификацией', isRight: false },
      { text: 'масштабируемостью', isRight: false },
    ],
  },
  {
    question: 'Одна из транзитных частей операционных систем?',
    answers: [
      { text: 'драйверы устройств', isRight: false },
      { text: 'файлы', isRight: false },
      { text: 'системный загрузчик', isRight: false },
      { text: 'ядро', isRight: false },
      { text: 'прикладные программы', isRight: false },
    ],
  },
  {
    question:
      'Как называется информационная структура, которая содержит информацию, необходимую для возобновления выполнения процесса после прерывания и поэтому сохраняемую перед прерыванием?',
    answers: [
      { text: 'контекст', isRight: false },
      { text: 'поток', isRight: false },
      { text: 'процесс', isRight: false },
      { text: 'файл', isRight: false },
      { text: 'дескриптор', isRight: false },
    ],
  },
  {
    question: 'В ОС UNIX функции драйверов принтеров выполняют:',
    answers: [
      { text: 'системные вызовы', isRight: false },
      { text: 'фильтры печати(Никита тестом)', isRight: false },
      { text: 'утилиты', isRight: false },
      { text: 'сокеты', isRight: false },
      { text: 'специальные файлы устройств', isRight: false },
    ],
  },
  {
    question:
      'Как ОС Windows (настольной версии) динамически изменяет приоритет потока, ожидавшего некоторое событие и дождавшегося его?',
    answers: [
      {
        text: 'Уменьшает приоритет потока на 1, через квант времени увеличивает его на 1 до базового приоритета',
        isRight: false,
      },
      {
        text: 'Уменьшает приоритет потока на 2, через квант времени увеличивает его на 1, еще через квант времени увеличивает его на 1 до базового приоритета',
        isRight: false,
      },
      { text: 'Никак не изменяет', isRight: false },
      {
        text: 'Увеличивает приоритет потока на 2, через квант времени уменьшает его на 1, еще через квант времени уменьшает его на 1 до базового приоритета',
        isRight: false,
      },
      {
        text: 'Увеличивает приоритет потока на 1, через квант времени уменьшает его на 1 до базового приоритета',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Наиболее широко для создания резервных копий файловых систем UNIX используются команды',
    answers: [
      { text: 'dump', isRight: false },
      { text: 'backup и restore', isRight: false },
      { text: 'dump и restore', isRight: false },
      { text: 'cat и paste', isRight: false },
      { text: 'backup и tar', isRight: false },
    ],
  },
  {
    question:
      'Что произойдет, если в программе с графическим пользовательским интерфейсом Windows в оконной процедуре не выполнить процедуру DefWindowProc?',
    answers: [
      {
        text: 'Программа перестанет получать клавиатурные сообщения',
        isRight: false,
      },
      {
        text: 'Программа перестанет получать сообщения двойного щелчка манипулятора мыши',
        isRight: false,
      },
      { text: 'Ничего не изменится', isRight: false },
      {
        text: 'Программа перестанет получать все клавиатурные сообщения и все сообщения манипулятора мыши',
        isRight: false,
      },
      {
        text: 'Заголовок, рамка и другие стандартные элементы окна не будут нарисованы на экране (+)',
        isRight: false,
      },
    ],
  },
  {
    question: 'Какой фирмой выпускается операционная система MacOS?',
    answers: [
      { text: 'Acer', isRight: false },
      { text: 'Apple', isRight: false },
      { text: 'IBM', isRight: false },
      { text: 'HP', isRight: false },
      { text: 'Windows', isRight: false },
    ],
  },
  {
    question: 'Основой структуры тома в файловой системе NTFS является',
    answers: [
      { text: 'FAT32', isRight: false },
      { text: 'главная таблица файлов', isRight: false },
      { text: 'таблица индексных дескрипторов', isRight: false },
      { text: 'FAT', isRight: false },
      { text: 'суперблок', isRight: false },
    ],
  },
  {
    question: 'Дать определение невытесняющей многозадачности',
    answers: [
      {
        text: 'режим, при котором переключение процессов возможно только, когда работающий процесс вызовет системную функцию',
        isRight: false,
      },
      {
        text: 'режим многозадачности, при котором переключение процессов происходит через определенные кванты времени',
        isRight: false,
      },
      {
        text: 'режим многозадачности, при котором переключение процессов возможно в любой момент времени',
        isRight: false,
      },
      {
        text: 'режим многозадачности, при котором переключение процессов выполняется поочередно в порядке приоритетов',
        isRight: false,
      },
      {
        text: 'режим многозадачности, при котором каждый новый процесс монопольно занимает процессорное время, а состояние остальных процессов записывается в файл подкачки',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Что такое переадресация процедуры к другой DLL-библиотеке ОС Windows',
    answers: [
      {
        text: 'Создание в разделе экспорта DLL записи, указывающей на другую процедуру в другой DLL-библиотеке (Даша)',
        isRight: false,
      },
      {
        text: 'Замена в программе кода процедуры DLL-библиотеки',
        isRight: false,
      },
      {
        text: 'Замена в программе указателя на другую процедуру в другой DLL-библиотеке',
        isRight: false,
      },
      {
        text: 'Создание новой DLL-библиотеки, вызывающей другую DLL-библиотеку',
        isRight: false,
      },
      {
        text: 'Создание в разделе импорта DLL записи, указывающей на другую процедуру в другой DLL-библиотеке',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Задача поддержания очередной заявок на ресурсы, одновременно используемые разными процессами, ложится на',
    answers: [
      { text: 'аппаратное обеспечение', isRight: false },
      { text: 'приложение пользователя', isRight: false },
      { text: 'системного программиста', isRight: false },
      { text: 'драйвера пользователя', isRight: false },
      { text: 'операционную систему', isRight: false },
    ],
  },
  {
    question:
      'Открытие объекта ядра, созданного другим процессом , осуществляется по',
    answers: [
      { text: 'временной метке объекта', isRight: false },
      { text: 'номеру объекта', isRight: false },
      { text: 'ключу объекта в реестре', isRight: false },
      { text: 'дайджесту объекта', isRight: false },
      { text: 'имени объекта', isRight: false },
    ],
  },
  {
    question:
      'Как называются программы, позволяющие создавать копии файлов меньшего размера и объединять копии нескольких файлов в один архивный файл?',
    answers: [
      { text: 'файловыми менеджерами', isRight: false },
      { text: 'антивирусными', isRight: false },
      { text: 'системными', isRight: false },
      { text: 'папками', isRight: false },
      { text: 'архиваторами', isRight: false },
    ],
  },
  {
    question:
      'Какое определение шрифта ОС Windows из перечисленных является наиболее точным?',
    answers: [
      {
        text: 'Множество символов со схожими размерами и начертанием контуров',
        isRight: false,
      },
      { text: 'Множество символов с одинаковой шириной', isRight: false },
      { text: 'Множество символов с одинаковой гарнитурой', isRight: false },
      { text: 'Множество символов с одинаковым кеглем', isRight: false },
      { text: 'Множество символов с одинаковыми засечками', isRight: false },
    ],
  },
  {
    question: 'К операционным системам относятся',
    answers: [
      { text: 'MS-DOS, Windows 8', isRight: false },
      { text: 'MS-Word, WordPad, PowerPoint, Windows 10', isRight: false },
      { text: 'MS-Office, Windows 10', isRight: false },
      { text: 'Photoshop', isRight: false },
      { text: 'MS-Office', isRight: false },
    ],
  },
  {
    question: 'Где содержится главная загрузочная запись (MBR)?',
    answers: [
      { text: 'в самом первом цилиндре на винчестере', isRight: false },
      { text: 'в самой первой дорожке на винчестере', isRight: false },
      { text: 'в самом первом секторе на винчестере', isRight: false },
      { text: 'в операционной системе', isRight: false },
      { text: 'в самой первой части винчестера', isRight: false },
    ],
  },
  {
    question: 'Какое действие в командной строке выполняет команда МOVE?',
    answers: [
      { text: 'копирование файлов', isRight: false },
      { text: 'удаление файлов', isRight: false },
      { text: 'тестирование файлов', isRight: false },
      { text: 'изменение атрибутов файла', isRight: false },
      { text: 'перемещение файлов', isRight: false },
    ],
  },
  {
    question:
      'Какие разделы Реестра Windows являются подлинно корневыми, а какие — лишь короткими путями внутри корневых разделов?',
    answers: [
      {
        text: 'Корневые разделы: HKEY_CURRENT_CONFIG, HKEY_CURRENT_USER. Короткие пути: HKEY_LОСAL_MACHINE, HKEY_USERS, HKEY_CLASSES_ROOT',
        isRight: false,
      },
      {
        text: 'Корневые разделы: HKEY_CLASSES_ROOT, HKEY_CURRENT_USER. Короткие пути: HKEY_LОСAL_MACHINE, HKEY_USERS, HKEY_CURRENT_CONFIG',
        isRight: false,
      },
      {
        text: 'Корневые разделы: HKEY_LОСAL_MACHINE, HKEY_USERS. Короткие пути: HKEY_CURRENT_CONFIG, HKEY_CLASSES_ROOT, HKEY_CURRENT_USER',
        isRight: false,
      },
      {
        text: 'Корневые разделы: HKEY_CURRENT_CONFIG, HKEY_CLASSES_ROOT. Короткие пути: HKEY_LОСAL_MACHINE, HKEY_USERS, HKEY_CURRENT_USER',
        isRight: false,
      },
      {
        text: 'Корневые разделы: HKEY_USERS, HKEY_CURRENT_CONFIG. Короткие пути: HKEY_LОСAL_MACHINE, HKEY_CLASSES_ROOT, HKEY_CURRENT_USER',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Какой процедурой ОС Windows нужно воспользоваться, чтобы загрузить растровое изображение из произвольного файла на диске?',
    answers: [
      { text: 'LoadBitmap', isRight: false },
      { text: 'LoadImage', isRight: false },
      { text: 'LoadResource', isRight: false },
      { text: 'LoadCursor', isRight: false },
      { text: 'LoadIcon', isRight: false },
    ],
  },
  {
    question: 'Как называется запрос на прерывание?',
    answers: [
      { text: 'Interrupt Dispatch Table', isRight: false },
      { text: 'Memory AllОСation Request (MAR)', isRight: false },
      { text: 'Request', isRight: false },
      { text: 'Buffer Request (BR)', isRight: false },
      { text: 'Interrupt Request (IRQ)', isRight: false },
    ],
  },
  {
    question:
      'Сколькими переключениями режимов процессора сопровождается выполнение системного вызова при микроядерной организации ОС',
    answers: [
      { text: 'тремя', isRight: false },
      { text: 'шестью', isRight: false },
      { text: 'четырьмя(Никита тестом)', isRight: false },
      { text: 'двумя', isRight: false },
      { text: 'пятью', isRight: false },
    ],
  },
  {
    question:
      'Выберите наиболее полный список сообщений, генерируемых драйвером клавиатуры ОС Windows?',
    answers: [
      {
        text: 'WM_KEYDOWN, WM_KEYUP, WM_LBUTTONDOWN, WM_LBUTTONUP',
        isRight: false,
      },
      {
        text: 'WM_KEYDOWN, WM_KEYUP, WM_SYSKEYDOWN, WM_SYSKEYUP, WM_LBUTTONDOWN, WM_LBUTTONUP',
        isRight: false,
      },
      { text: 'WM_KEYDOWN, WM_KEYUP', isRight: false },
      { text: 'WM_SYSKEYDOWN, WM_SYSKEYUP', isRight: false },
      {
        text: 'WM_KEYDOWN, WM_KEYUP, WM_SYSKEYDOWN, WM_SYSKEYUP(1)',
        isRight: false,
      },
    ],
  },
  {
    question: 'ОС Linux распространяется по лицензии:',
    answers: [
      { text: 'GNU', isRight: false },
      { text: 'Линуса Торвальдса', isRight: false },
      { text: 'компании Sun', isRight: false },
      { text: 'MFIT', isRight: false },
      { text: 'фирмы Microsoft', isRight: false },
    ],
  },
  {
    question: 'В привилегированном режиме работы в ОС выполняются',
    answers: [
      { text: 'наиболее важные пользовательские приложения', isRight: false },
      {
        text: 'модули ядра ОС и наиболее важные пользовательские приложения',
        isRight: false,
      },
      { text: 'модули ядра ОС', isRight: false },
      { text: 'пользовательские приложения', isRight: false },
      {
        text: 'модули ядра ОС и наиболее важные вспомогательные модули ОС',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Какие операционные системы управляют разделением совместно используемых задачами ресурсов?',
    answers: [
      { text: 'однозадачные', isRight: false },
      { text: 'однопоточные', isRight: false },
      { text: 'многопользовательские', isRight: false },
      { text: 'многопроцессорные', isRight: false },
      { text: 'многозадачные', isRight: false },
    ],
  },
  {
    question: 'Какой тип ОС не относится к многозадачным?',
    answers: [
      { text: 'система временной обработки', isRight: false },
      { text: 'система реального времени', isRight: false },
      { text: 'система системной обработки', isRight: false },
      { text: 'система индивидуальной обработки (+)', isRight: false },
      { text: 'система пакетной обработки', isRight: false },
    ],
  },
  {
    question:
      'Какой таймер ОС Windows точнее, ожидаемый таймер (waitable timer) или оконный таймер (window timer) и почему?',
    answers: [
      {
        text: 'Ожидаемый таймер и оконный таймер одинаково точны',
        isRight: false,
      },
      {
        text: 'Оконный таймер точнее, потому что ожидаемый таймер тратит время на получение сообщения из очереди сообщений',
        isRight: false,
      },
      {
        text: 'Ожидаемый таймер точнее, потому что с ним поток не тратит время на получение сообщения из очереди сообщений',
        isRight: false,
      },
      {
        text: 'Ожидаемый таймер точнее, потому что оконный таймер не позволяет задать промежуток времени в миллисекундах',
        isRight: false,
      },
      {
        text: 'Оконный таймер точнее, потому что ожидаемый таймер не позволяет задать промежуток времени в миллисекундах',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Какое название носят современные операционные системы компании Microsoft?',
    answers: [
      { text: 'Windows (+)', isRight: false },
      { text: 'Linus', isRight: false },
      { text: 'Ubuntu', isRight: false },
      { text: 'Solaris', isRight: false },
      { text: 'MacOS', isRight: false },
    ],
  },
  {
    question: 'Функция CreateRemoteThread ОС Windows предназначена для',
    answers: [
      {
        text: 'создания потока в другом процессе локального компьютера (+)',
        isRight: false,
      },
      {
        text: 'создания потока в текущем процессе локального компьютера',
        isRight: false,
      },
      {
        text: 'создания потока в системном процессе ядра операционной системы',
        isRight: false,
      },
      { text: 'создания потока на удаленном компьютере', isRight: false },
      {
        text: 'создания потока на удаленном компьютере в системном процессе ядра операционной системы',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Как в 32-х разрядной DLL-библиотеке ОС Windows выглядит идентификатор функции экспортированной как __declspec(dllexport) int __cdecl Min(int x, int y)?',
    answers: [
      { text: '__Min@0', isRight: false },
      { text: 'Min', isRight: false },
      { text: 'Min1', isRight: false },
      { text: 'Min@0', isRight: false },
      { text: '__Min0', isRight: false },
    ],
  },
  {
    question:
      'Почему в структуре XFORM, кодирующей матрицу трансформации в ОС Windows, всего 6 полей, в то время как матрица трансформации предполагает размеры 3*3?',
    answers: [
      {
        text: 'Структура XFORM кодирует первые две строки матрицы трансформации, а последняя строка состоит из случайных значений',
        isRight: false,
      },
      {
        text: 'Структура XFORM кодирует диагональ и верхнюю половину матрицы, для чего достаточно 6 значений, остальные значения получаются транспонированием верхней половины матрицы',
        isRight: false,
      },
      {
        text: 'Структура XFORM кодирует первые два столбца матрицы трансформации, а последний столбец состоит из констант 0, 0, 1',
        isRight: false,
      },
      {
        text: 'Матрица трансформации является симметричной, поэтому для ее кодирования достаточно 6 полей в структуре XFORM',
        isRight: false,
      },
      {
        text: 'Структура XFORM кодирует диагональ и нижнюю половину матрицы, для чего достаточно 6 значений, остальные значения получаются транспонированием нижней половины матрицы',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Какой номер прерывания используется на старых процессорах для перехода в режим ядра в WinAPI?',
    answers: [
      { text: '2', isRight: false },
      { text: '15', isRight: false },
      { text: '0x2E', isRight: false },
      { text: '20', isRight: false },
      { text: '0', isRight: false },
    ],
  },
  {
    question: 'Машинный код - это',
    answers: [
      {
        text: 'отображение программы на языке высокого уровня в шестнадцатеричном представлении (hех-коды), кодирующих соответствующие символы',
        isRight: false,
      },
      {
        text: 'кодировка символов, используемая процессором для представления символов в двоичном виде',
        isRight: false,
      },
      {
        text: 'двоичные инструкции, непосредственно выполняемые процессором, определяемые архитектурой данного процессора',
        isRight: false,
      },
      {
        text: 'отображение программы на языке высокого уровня в виде бит, кодирующих соответствующие символы',
        isRight: false,
      },
      { text: 'ресурсы вычислительной системы', isRight: false },
    ],
  },
  {
    question: 'Какой вид многозадачности не существует?',
    answers: [
      { text: 'псевдопараллельная многозадачность', isRight: false },
      {
        text: 'кооперативная (не вытесняющая) многозадачность',
        isRight: false,
      },
      { text: 'параллельная многозадачность', isRight: false },
      { text: 'вытесняющая многозадачность', isRight: false },
      { text: 'симметричная многозадачность', isRight: false },
    ],
  },
  {
    question:
      'Для управления технологическими процессами и техническими объектами применяются ОС',
    answers: [
      { text: 'квантования времени', isRight: false },
      { text: 'разделения времени', isRight: false },
      { text: 'реального времени', isRight: false },
      { text: 'квантового разделения времени', isRight: false },
      { text: 'заданного времени', isRight: false },
    ],
  },
  {
    question:
      'Какая процедура вывода текста в ОС Windows обеспечивает подбор прямоугольника для размещения текста?',
    answers: [
      { text: 'ExtTextOut', isRight: false },
      { text: 'TextOut', isRight: false },
      { text: 'DrawText и DrawTextEx', isRight: false },
      { text: 'TabbedTextOut', isRight: false },
      { text: 'PolyTextOut', isRight: false },
    ],
  },
  {
    question: 'Какой подсистемы управления нет в ОС?',
    answers: [
      { text: 'заданиями', isRight: false },
      { text: 'устройствами ввода-вывода', isRight: false },
      { text: 'процессами', isRight: false },
      { text: 'процессорами', isRight: false },
      { text: 'файловой системой', isRight: false },
    ],
  },
  {
    question:
      'Наиболее важной подсистемой окружения Windows NT, обеспечивающей GUI и управляющей вводом-выводом данных пользователя, является',
    answers: [
      { text: 'Win32', isRight: false },
      { text: 'POSIX', isRight: false },
      { text: 'DOS', isRight: false },
      { text: 'OS/2', isRight: false },
      { text: 'POS', isRight: false },
    ],
  },
  {
    question: 'Соглашение вызова функции задает',
    answers: [
      {
        text: 'последовательность вызова функций и порядок их доступа к общим ресурсам',
        isRight: false,
      },
      { text: 'ресурсы, доступные функции', isRight: false },
      { text: 'приоритет функции', isRight: false },
      {
        text: 'порядок передачи аргументов и возврата результата вызываемой функции',
        isRight: false,
      },
    ],
  },
];
