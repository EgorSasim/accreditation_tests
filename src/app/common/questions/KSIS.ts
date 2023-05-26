import { Question } from 'src/app/common/questions/questions.typings';

export const KSIS: Question[] = [
  {
    question:
      'DNS-запрос, по которому DNS-клиент сам последовательно делает запросы на другие серверы, называется:',
    answers: [
      { text: 'прямым', isRight: false },
      { text: 'итеративным', isRight: false },
      { text: 'последовательным', isRight: false },
      { text: 'рекурсивным', isRight: false },
      { text: 'обратным', isRight: false },
    ],
  },
  {
    question:
      'Тип сетевой топологии, в которой рабочие станции расположены вдоль одного участка кабеля, называемого сегментом',
    answers: [
      { text: 'общая шина', isRight: false },
      { text: 'кольцо', isRight: false },
      { text: 'смешанная', isRight: false },
      { text: 'звезда', isRight: false },
      { text: 'дерево', isRight: false },
    ],
  },
  {
    question:
      'Укажите сетевое оборудование, которое в своей работе реализует функции 1-го (физического),2-го(канального) и 3-го(сетевого) уровней модели OSI:',
    answers: [
      { text: 'сетевая карта(nic)', isRight: false },
      { text: 'концентратор(hub)', isRight: false },
      { text: 'коммутатор(switch)', isRight: false },
      { text: 'мост(bridge)', isRight: false },
      { text: 'маршрутизатор(router)', isRight: false },
    ],
  },
  {
    question:
      'Какая топология описывает структуру связей и характер распространения сигналов по сети?',
    answers: [
      { text: 'топология', isRight: false },
      { text: 'физическая топология', isRight: false },
      { text: 'логическая топология', isRight: false },
      { text: 'общая шина', isRight: false },
      { text: 'информационная топология', isRight: false },
    ],
  },
  {
    question:
      'Если при передаче сигнала одна из его характеристик меняется по закону изменения другого сигнала, то такой процесс называется:',
    answers: [
      { text: 'модуляцией', isRight: false },
      { text: 'шифрованием', isRight: false },
      { text: 'кодированием', isRight: false },
      { text: 'скрэмблированием', isRight: false },
      { text: 'декодированием', isRight: false },
    ],
  },
  {
    question:
      'DNS-запрос, по которому DNS-клиент обращается к серверу за разрешением имени, а сервер не найдя соответствия начинает дальше сам обращаться к другим DNS-серверам называется:',
    answers: [
      { text: 'итеративным', isRight: false },
      { text: 'прямым', isRight: false },
      { text: 'рекурсивным', isRight: false },
      { text: 'последовательным', isRight: false },
      { text: 'обратным', isRight: false },
    ],
  },
  {
    question: 'Как передается сигнал в беспроводной сети?',
    answers: [
      {
        text: 'сигналы в беспроводной сети доступны только устройству-получателю',
        isRight: false,
      },
      { text: 'по кабелю', isRight: false },
      { text: 'в одном направлении от источника', isRight: false },
      { text: 'во всех направлениях от источника', isRight: false },
      {
        text: 'сигналы в беспроводной сети доступны только устройству-отправителю',
        isRight: false,
      },
    ],
  },
  {
    question: 'Основным недостатком физической топологии Звезда является:',
    answers: [
      { text: 'отказ всей сети при отказе центрального узла', isRight: false },
      { text: 'отказ всей сети при отказе любого узла', isRight: false },
      { text: 'высокая частота коллизий', isRight: false },
      {
        text: 'сохранение работоспособности сети при отказе центрального узла',
        isRight: false,
      },
      { text: 'отсутствие коллизий', isRight: false },
    ],
  },
  {
    question: 'Протокол HTTPS в отличие от протокола HTTP обеспечивает:',
    answers: [
      { text: 'Шифрование данных', isRight: false },
      { text: 'Кэширование ответов сервер', isRight: false },
      {
        text: 'Взаимодействие клиента с сервером в режиме «запрос-ответ»',
        isRight: false,
      },
      { text: 'Проверку формата данных', isRight: false },
      { text: 'Сжатие данных', isRight: false },
    ],
  },
  {
    question:
      'ПК получает свой IP-адрес от сервера DHCP. Если ПК отключается от сети для ремонта, что происходит с конфигурацией IP-адреса на сервере DHCP?',
    answers: [
      {
        text: 'адрес возвращается в пул адресов для повторного использования после истечения срока аренды',
        isRight: false,
      },
      {
        text: 'аренда адреса автоматически продлевается до возвращения ПК в сеть',
        isRight: false,
      },
      {
        text: 'конфигурация остается неизменной и ничего не меняется',
        isRight: false,
      },
      {
        text: 'адрес сразу возвращается в пул адресов для повторного использования',
        isRight: false,
      },
      {
        text: 'конфигурация сохраняется на сервере навсегда для повторного применения после возвращения ПК в сеть',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Какая из проблем может быть легко устранена с помощью повторителя?',
    answers: [
      { text: 'слишком малый трафик в сети', isRight: false },
      { text: 'слишком низкая скорость передачи данных', isRight: false },
      {
        text: 'слишком много типов несовместимого оборудования в сети',
        isRight: false,
      },
      {
        text: 'слишком слабый сигнал при передаче из одного конца сети в другой',
        isRight: false,
      },
      { text: 'слишком большой трафик в сети', isRight: false },
    ],
  },
  {
    question:
      'Какое из описаний конфликта в сети с общей средой передачи данных является наиболее точным?',
    answers: [
      { text: 'отказ от передачи данных в сеть двумя узлами', isRight: false },
      {
        text: 'результат поочередной передачи данных в сеть двумя узлами',
        isRight: false,
      },
      { text: 'отказ от передачи данных в сеть узлом', isRight: false },
      {
        text: 'результат одновременной передачи данных в сеть двумя узлами',
        isRight: false,
      },
      {
        text: 'результат повторной передачи данных в сеть узлом',
        isRight: false,
      },
    ],
  },
  {
    question: 'Какой тип модуляции использует изменение фазы несущего сигнала?',
    answers: [
      { text: 'амплитудная', isRight: false },
      { text: 'фазово-импульсная', isRight: false },
      { text: 'импульсная', isRight: false },
      { text: 'фазовая', isRight: false },
      { text: 'частотная', isRight: false },
    ],
  },
  {
    question:
      'Какой метод используется для доступа к разделяемой среде передачи в беспроводных сетях при предупреждении коллизий:',
    answers: [
      { text: 'CSMA/CA', isRight: false },
      { text: 'IPX/SPX', isRight: false },
      { text: 'MAC/LLC', isRight: false },
      { text: 'CSMA/DA', isRight: false },
      { text: 'TCP/IP', isRight: false },
    ],
  },
  {
    question:
      'Какие значения подменяются при передаче TCP-пакета из локальной сети в глобальную сеть через маршрутизатор с технологией «динамический NAT» (PAT):',
    answers: [
      { text: 'IP-адрес получателя и порт получателя', isRight: false },
      { text: 'IP-адрес отправителя', isRight: false },
      { text: 'IP-адрес получателя', isRight: false },
      { text: 'IP-адрес отправителя и порт отправителя', isRight: false },
      { text: 'IP-адрес отправителя и MAC-адрес отправителя', isRight: false },
    ],
  },
  {
    question:
      'Какое устройство объединяет в себе функции маршрутизатора, коммутатора и точки беспроводного доступа?',
    answers: [
      { text: 'коммутатор', isRight: false },
      { text: 'повторитель', isRight: false },
      { text: 'модем', isRight: false },
      { text: 'концентратор', isRight: false },
      { text: 'ISR', isRight: false },
    ],
  },
  {
    question:
      'Компьютер, предназначенный для совместного использования и обеспечивающий общий доступ к ресурсам, называется',
    answers: [
      { text: 'рабочая группа', isRight: false },
      { text: 'ведомый', isRight: false },
      { text: 'пользователь', isRight: false },
      { text: 'сервер', isRight: false },
      { text: 'рабочая станция', isRight: false },
    ],
  },
  {
    question: 'Выберите все уровни, входящие в модель OSI/ISO',
    answers: [
      {
        text: 'физический, канальный, сетевой, транспортный, сеансовый, представления, прикладной',
        isRight: false,
      },
      {
        text: 'прикладной, сеансовый, канальный, физический, деловой, транспортный',
        isRight: false,
      },
      {
        text: 'прикладной, сеансовый, представительский, физический, канальный',
        isRight: false,
      },
      {
        text: 'прикладной, сеансовый, представительский, физический, канальный, сетевой',
        isRight: false,
      },
      {
        text: 'физический, канальный, транспортный, прикладной',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Что позволяет организовывать пулы сетевых настроек для автоматического конфигурирования сетевых интерфейсов?',
    answers: [
      { text: 'HTTP', isRight: false },
      { text: 'DHCP сервер', isRight: false },
      { text: 'SMTP', isRight: false },
      { text: 'DNS сервер', isRight: false },
      { text: 'FTP', isRight: false },
    ],
  },
  {
    question:
      'Ресурсы какой архитектуры рассредоточены по всем взаимодействующим между собой системам',
    answers: [
      { text: 'клиент-серверной', isRight: false },
      { text: 'терминальной', isRight: false },
      { text: 'смешанной', isRight: false },
      { text: 'шлюза', isRight: false },
      { text: 'одноранговой', isRight: false },
    ],
  },
  {
    question:
      'Какой метод используется для доступа к разделяемой среде передачи в проводных сетях при обнаружении коллизий:',
    answers: [
      { text: 'CSMA/CD', isRight: false },
      { text: 'TCP/IP', isRight: false },
      { text: 'MAC/LLC', isRight: false },
      { text: 'CSMA/CA', isRight: false },
      { text: 'IPX/SPX', isRight: false },
    ],
  },
  {
    question: 'Выберите корректный IP-адрес компьютера в сети',
    answers: [
      { text: '1278.214.198', isRight: false },
      { text: '123.259.259.250', isRight: false },
      { text: '108.214.198.112', isRight: false },
      { text: '125.255.255.1120', isRight: false },
      { text: '18.274.198.0', isRight: false },
    ],
  },
  {
    question:
      'Какой из сетевых подуровней стандарта IEEE 802 определяет конфигурацию LAN и метод доступа к среде передачи данных?',
    answers: [
      { text: 'передача логических сигналов LLC', isRight: false },
      { text: 'интерфейс с устройством доступа AUI', isRight: false },
      { text: 'управление доступом к передающей среде МАС', isRight: false },
      { text: 'управление логическим каналом LLC', isRight: false },
      { text: 'передача физических сигналов PS', isRight: false },
    ],
  },
  {
    question:
      'Выберите пункт, который наиболее точно отражает причину гибкого разделения узлов на группы при использовании технологии VLAN:',
    answers: [
      {
        text: 'при перемещении узла его необходимо подключить к другому коммутатору',
        isRight: false,
      },
      {
        text: 'при перемещении узла из одной группы пользователей в другую его необходимо переместить физически',
        isRight: false,
      },
      {
        text: 'при перемещении узла к нему необходимо протянуть новый кабель',
        isRight: false,
      },
      {
        text: 'при перемещении узла необходимо добавить еще один коммутатор',
        isRight: false,
      },
      {
        text: 'при перемещении узла его просто необходимо логически включить в другую VLAN, к которой подключены пользователи другой группы',
        isRight: false,
      },
    ],
  },
  {
    question: 'Компьютер, подключенный к сети Internet, обязательно имеет',
    answers: [
      { text: 'антенну', isRight: false },
      { text: 'доменное имя', isRight: false },
      { text: 'IP-адрес', isRight: false },
      { text: 'URL-адрес', isRight: false },
      { text: 'беспроводную сетевую плату', isRight: false },
    ],
  },
  {
    question:
      'Какой из приведенных адресов, является широковещательным МАС-адресом:',
    answers: [
      { text: '255.255.255.255', isRight: false },
      { text: '01-00-5E-ad-44-ff', isRight: false },
      { text: '192.168.33.7', isRight: false },
      { text: 'ff-ff-ff-ff-ff-ff', isRight: false },
      { text: '00-7b-8c-9f-46-aa', isRight: false },
    ],
  },
  {
    question:
      'В каком типе кабеля световая электромагнитная волна распространяется по центру стеклянного проводника:',
    answers: [
      { text: 'одномодовое оптоволокно', isRight: false },
      { text: 'витая пара', isRight: false },
      { text: 'многомодовое оптоволокно', isRight: false },
      { text: 'коаксиальный кабель', isRight: false },
      { text: 'экранированная витая пара', isRight: false },
    ],
  },
  {
    question:
      'Какой из перечисленных протоколов является протоколом отправки электронной почты:',
    answers: [
      { text: 'HTTP', isRight: false },
      { text: 'IMAP', isRight: false },
      { text: 'POP3', isRight: false },
      { text: 'FTP', isRight: false },
      { text: 'SMTP', isRight: false },
    ],
  },
  {
    question:
      'Состояние разделяемой среды передачи, при которой два узла одновременно начинают передавать пакеты, называется:',
    answers: [
      { text: 'модуляцией', isRight: false },
      { text: 'кодированием', isRight: false },
      { text: 'дешифрацией', isRight: false },
      { text: 'конфликтом', isRight: false },
      { text: 'коллизией', isRight: false },
    ],
  },
  {
    question:
      'Какой из способов обновления данных веб-сайта по протоколу HTTP характеризуется: средней частотой обновления данных (режим, близкий к реальному времени); средним потреблением полосы пропускания канала связи (заголовки HTTP присутствуют в каждом цикле передачи данных туда и обратно); высокой нагрузкой на веб-сервер; малым временем задержки для событий малой интенсивности:',
    answers: [
      { text: 'Потоковая передача (Comet Streaming)', isRight: false },
      { text: 'Долгий опрос (Comet Long Polling)', isRight: false },
      { text: 'Периодический опрос (Ajax Polling)', isRight: false },
      { text: 'Веб-гнездо (Web Socket)', isRight: false },
      { text: 'Полное обновление страницы', isRight: false },
    ],
  },
  {
    question:
      'Какой тип NAT при трансляции подменяет не только адрес локального узла, но и его порт?',
    answers: [
      { text: 'динамический NAT (PAT)', isRight: false },
      { text: 'WAN', isRight: false },
      { text: 'статический NAT', isRight: false },
      { text: 'L2TP', isRight: false },
      { text: 'PPTP', isRight: false },
    ],
  },
  {
    question: 'Устройство, обеспечивающее сопряжение ПК с линией связи',
    answers: [
      { text: 'модем', isRight: false },
      { text: 'сетевой адаптер', isRight: false },
      { text: 'шлюз', isRight: false },
      { text: 'сетевой концентратор', isRight: false },
      { text: 'принтер', isRight: false },
    ],
  },
  {
    question:
      'Область сети, в которой все узлы обнаруживают коллизии называется :',
    answers: [
      { text: 'доменом рассылок', isRight: false },
      { text: 'доменом обнаружения', isRight: false },
      { text: 'доменом коллизий', isRight: false },
      { text: 'широковещательным доменом', isRight: false },
      { text: 'доменом ошибок', isRight: false },
    ],
  },
  {
    question:
      'Выберите протокол транспортного уровня с гарантированной доставкой',
    answers: [
      { text: 'IP', isRight: false },
      { text: 'Ethernet', isRight: false },
      { text: 'TCP', isRight: false },
      { text: 'UDP', isRight: false },
      { text: 'HTTP', isRight: false },
    ],
  },
  {
    question:
      'Какой из способов подключения к Интернет обеспечивает наибольшие возможности для доступа к информационным ресурсам?',
    answers: [
      {
        text: 'удалённый доступ по коммутируемому телефонному каналу',
        isRight: false,
      },
      {
        text: 'постоянное соединение по выделенному телефонному каналу',
        isRight: false,
      },
      { text: 'GPRS соединение через сотовый телефон', isRight: false },
      { text: 'доступ к телефонному каналу', isRight: false },
      {
        text: 'постоянное соединение по оптоволоконному каналу',
        isRight: false,
      },
    ],
  },
  {
    question: 'Сеансовый уровень модели OSI служит для:',
    answers: [
      {
        text: 'обеспечения передачи данных с требуемой степенью надежности',
        isRight: false,
      },
      {
        text: 'установления и поддержание сеанса связи между взаимодействующими узлами',
        isRight: false,
      },
      { text: 'проверки доступности разделяемой среды', isRight: false },
      {
        text: 'решения задач шифрования и дешифрования данных',
        isRight: false,
      },
      { text: 'определения маршрута через сеть', isRight: false },
    ],
  },
  {
    question: 'Сетевая топология-это:',
    answers: [
      { text: 'способ соединения компьютеров в сеть', isRight: false },
      { text: 'механизм обмена информации в сети', isRight: false },
      { text: 'характеристика основных элементов сети', isRight: false },
      { text: 'способ обмена информацией в сети', isRight: false },
      { text: 'путь следования логических пакетов', isRight: false },
    ],
  },
  {
    question: 'Маршрутизаторы определяют оптимальный путь на основе данных:',
    answers: [
      { text: 'таблицы маршрутизации', isRight: false },
      { text: 'таблицы коммутации', isRight: false },
      { text: 'ARP-таблицы', isRight: false },
      { text: 'таблицы соответствия', isRight: false },
      { text: 'DNS-таблицы', isRight: false },
    ],
  },
  {
    question:
      'К какому порядку относится домен by в доменном имени poit.bsuir.by:',
    answers: [
      { text: 'домен третьего уровня', isRight: false },
      { text: 'домен нулевого уровня', isRight: false },
      { text: 'домен корневого уровня', isRight: false },
      { text: 'домен первого уровня', isRight: false },
      { text: 'домен второго уровня', isRight: false },
    ],
  },
  {
    question:
      'Как сетевой уровень посылает пакеты от источника в пункт назначения?',
    answers: [
      { text: 'используя RIP-ответы', isRight: false },
      { text: 'используя ARP-ответы', isRight: false },
      { text: 'обращаясь к серверу имен', isRight: false },
      { text: 'используя IP-адрес', isRight: false },
      { text: 'обращаясь к мосту', isRight: false },
    ],
  },
  {
    question: 'Протокол – это',
    answers: [
      { text: 'управления передачи сообщениями', isRight: false },
      {
        text: 'способность компьютера посылать файлы через каналы передачи информации',
        isRight: false,
      },
      {
        text: 'стандарт передачи данных через компьютерную сеть',
        isRight: false,
      },
      { text: 'устройство для работы локальной сети', isRight: false },
      { text: 'средство для передачи данных по сети', isRight: false },
    ],
  },
  {
    question: 'Выберите протокол транспортного уровня без установки соединения',
    answers: [
      { text: 'HTTP', isRight: false },
      { text: 'UDP', isRight: false },
      { text: 'Ethernet', isRight: false },
      { text: 'TCP', isRight: false },
      { text: 'IP', isRight: false },
    ],
  },
  {
    question:
      'Отличительной чертой Манчестерского кодирования сигналов является',
    answers: [
      { text: 'отсутствие самосинхронизации', isRight: false },
      {
        text: 'невозможность передачи последовательностей одинаковых битов',
        isRight: false,
      },
      { text: 'короткое расстояние передачи сигнала', isRight: false },
      { text: 'наличие возврата уровня сигнала к 0', isRight: false },
      { text: 'кодирование битов перепадами уровня сигнала', isRight: false },
    ],
  },
  {
    question: 'К какому уровню ISO/OSI относится протокол FTP?',
    answers: [
      { text: 'сетевой', isRight: false },
      { text: 'физический', isRight: false },
      { text: 'транспортный', isRight: false },
      { text: 'прикладной', isRight: false },
      { text: 'канальный', isRight: false },
    ],
  },
  {
    question:
      'Оборудование, стоящее между двумя сетями, использующими одинаковые протоколы, называется',
    answers: [
      { text: 'шлюз', isRight: false },
      { text: 'брандмауэр', isRight: false },
      { text: 'модем', isRight: false },
      { text: 'шина', isRight: false },
      { text: 'мост', isRight: false },
    ],
  },
  {
    question:
      'Отличительной чертой Манчестерского кодирования сигналов является',
    answers: [
      { text: 'отсутствие самосинхронизации', isRight: false },
      {
        text: 'невозможность передачи последовательностей одинаковых битов',
        isRight: false,
      },
      { text: 'короткое расстояние передачи сигнала', isRight: false },
      { text: 'наличие возврата уровня сигнала к 0', isRight: false },
      { text: 'кодирование битов перепадами уровня сигнала', isRight: false },
    ],
  },
  {
    question: 'Применительно к сетевой модели OSI интерфейс-это?',
    answers: [
      {
        text: 'правила и стандарты взаимодействия между двумя сетевыми процессами',
        isRight: false,
      },
      {
        text: 'правила и стандарты взаимодействия между узлами на одном уровне',
        isRight: false,
      },
      {
        text: 'правила и стандарты взаимодействия между двумя уровнями одного узла',
        isRight: false,
      },
      {
        text: 'правила и стандарты взаимодействия между двумя уровнями одного узла',
        isRight: false,
      },
      {
        text: 'правила и стандарты взаимодействия между двумя узлам',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Какой из способов обновления данных веб-сайта по протоколу HTTP характеризуется: высокой частотой обновления данных (режим реального времени); низким потреблением полосы пропускания канала связи (заголовки HTTP отсутствуют при передаче данных); дуплексной передачей обновляемых данных между сервером и клиентом:',
    answers: [
      { text: 'потоковая передача (comet streaming)', isRight: false },
      { text: 'долгий опрос (comet long polling)', isRight: false },
      { text: 'полное обновление страницы', isRight: false },
      { text: 'периодический опрос (ajax polling)', isRight: false },
      { text: 'веб-гнездо (web socket)', isRight: false },
    ],
  },
  {
    question:
      'Какие значения подменяются при передаче UDP-пакета из глобальной сети в локальную сеть через маршрутизатор с технологией “статический NAT”',
    answers: [
      { text: 'IP-адрес отправителя и МАС-адрес отправителя', isRight: false },
      { text: 'IP-адрес получателя и порт получателя', isRight: false },
      { text: 'IP-адрес отправителя', isRight: false },
      { text: 'IP-адрес отправителя и порт отправителя', isRight: false },
      { text: 'IP-адрес получателя', isRight: false },
    ],
  },
  {
    question: 'К какому уровню ISO/OSI относится протокол POP3?',
    answers: [
      { text: 'прикладной', isRight: false },
      { text: 'сетевой', isRight: false },
      { text: 'канальный', isRight: false },
      { text: 'транспортный', isRight: false },
      { text: 'физический', isRight: false },
    ],
  },
  {
    question:
      'Какой протокол транспортного уровня необходимо использовать при работе сетевых приложений, для которых важна скорость передачи, но не важна надежность:',
    answers: [
      { text: 'IP', isRight: false },
      { text: 'UDP', isRight: false },
      { text: 'TCP', isRight: false },
      { text: 'ICMP', isRight: false },
      { text: 'ARP', isRight: false },
    ],
  },
  {
    question:
      'В какой топологии ЛВС каждая рабочая станция соединена с двумя другими рабочими станциями:',
    answers: [
      { text: 'общая шина', isRight: false },
      { text: 'дерево', isRight: false },
      { text: 'смешанная', isRight: false },
      { text: 'звезда', isRight: false },
      { text: 'кольцо', isRight: false },
    ],
  },
  {
    question: 'В чем состоит принцип работы технологии NAT:',
    answers: [
      { text: 'в маршрутизации пакетов', isRight: false },
      {
        text: 'в замене частного (локального) МАС-адреса, глобальным МАС-адресом в заголовке пакета',
        isRight: false,
      },
      {
        text: 'в замене частного (локального) адреса узла внутренней сети на глобальный IP-адрес',
        isRight: false,
      },
      {
        text: 'в замене частного IP-адреса шлюза по умолчанию глобальным IP-адресом',
        isRight: false,
      },
      { text: 'в коммутации пакетов', isRight: false },
    ],
  },
  {
    question: 'Выберите протокол транспортного уровня без гарантии доставки',
    answers: [
      { text: 'UDP', isRight: false },
      { text: 'TCP', isRight: false },
      { text: 'IP', isRight: false },
      { text: 'Ethernet', isRight: false },
      { text: 'HTTP', isRight: false },
    ],
  },
  {
    question: 'Какой метод доступа применяется в LAN Token Ring?',
    answers: [
      { text: 'позднее освобождения маркера', isRight: false },
      { text: 'раннего освобождения маркера', isRight: false },
      { text: 'передача маркера по физическому кольцу', isRight: false },
      { text: 'множественный доступ', isRight: false },
      { text: 'передача сообщений по шине', isRight: false },
    ],
  },
  {
    question:
      'Какие значения подменяются при передаче UDP-пакета из глобальной сети в локальную сеть через маршрутизатор с технологией “динамический NAT” (PAT):',
    answers: [
      { text: 'IP-адрес получателя и порт получателя', isRight: false },
      { text: 'IP-адрес получателя', isRight: false },
      { text: 'IP-адрес отправителя и МАС-адрес отправителя', isRight: false },
      { text: 'IP-адрес отправителя и порт отправителя', isRight: false },
      { text: 'IP-адрес отправителя', isRight: false },
    ],
  },
  {
    question:
      'Какой из перечисленных протоколов является протоколом передачи файлов:',
    answers: [
      { text: 'IMAP', isRight: false },
      { text: 'HTTP', isRight: false },
      { text: 'POP3', isRight: false },
      { text: 'FTP', isRight: false },
      { text: 'SMTP', isRight: false },
    ],
  },
  {
    question:
      'Выберите название протокола, который управляет потоком передаваемых данных:',
    answers: [
      { text: 'ARP', isRight: false },
      { text: 'TCP', isRight: false },
      { text: 'IP', isRight: false },
      { text: 'UDP', isRight: false },
      { text: 'ICMP', isRight: false },
    ],
  },
  {
    question: 'Локальные сети используют коммутацию',
    answers: [
      { text: 'адресов', isRight: false },
      { text: 'сообщений', isRight: false },
      { text: 'каналов', isRight: false },
      { text: 'протоколов', isRight: false },
      { text: 'пакетов', isRight: false },
    ],
  },
  {
    question:
      'Какой из перечисленных протоколов является текстовым протоколом прикладного уровня и на основе которого работает протокол WebSocket:',
    answers: [
      { text: 'SMTP', isRight: false },
      { text: 'IMAP', isRight: false },
      { text: 'HTTP', isRight: false },
      { text: 'FTP', isRight: false },
      { text: 'POP3', isRight: false },
    ],
  },
  {
    question:
      'Кабель (витая пара) для соединения компьютеров в сети состоит из:',
    answers: [
      { text: 'четырех проводников', isRight: false },
      { text: 'шести проводников', isRight: false },
      { text: 'восьми проводников', isRight: false },
      { text: 'девяти проводников', isRight: false },
      { text: 'двух проводников', isRight: false },
    ],
  },
  {
    question:
      'Какие способы передачи данных используются в современных компьютерных сетях?',
    answers: [
      { text: 'коммутация сообщений', isRight: false },
      { text: 'коммутация каналов', isRight: false },
      { text: 'коммутация пакетов', isRight: false },
      { text: 'коммутация ячеек', isRight: false },
      { text: 'коммутация папок', isRight: false },
    ],
  },
  {
    question:
      'В какой топологии ЛВС все рабочие станции присоединены к центральному узлу(например, к концентратору), который устанавливает, поддерживает и разрывает связи между рабочими станциями:',
    answers: [
      { text: 'общая шина', isRight: false },
      { text: 'кольцо', isRight: false },
      { text: 'дерево', isRight: false },
      { text: 'смешанная', isRight: false },
      { text: 'звезда', isRight: false },
    ],
  },
  {
    question: 'Граф физических связей машин в сети называется:',
    answers: [
      { text: 'топологией', isRight: false },
      { text: 'маршрутом', isRight: false },
      { text: 'рабочей группой', isRight: false },
      { text: 'шлюзом', isRight: false },
      { text: 'маршрутизацией', isRight: false },
    ],
  },
  {
    question:
      'Компьютеры или программы, переводящие данные из формата принятого в одной сети, в формат, принятый в другой сети:',
    answers: [
      { text: 'шины', isRight: false },
      { text: 'шлюзы', isRight: false },
      { text: 'мосты', isRight: false },
      { text: 'модем', isRight: false },
      { text: 'брандмауэры', isRight: false },
    ],
  },
  {
    question:
      'Что характеризует обновление данных веб-сайта по протоколу Web Socket:',
    answers: [
      {
        text: 'Дуплексная передача обновляемых данных между сервером и клиентом;',
        isRight: false,
      },
      { text: 'Всё из вышеперечисленного', isRight: false },
      { text: 'Высокая нагрузка на веб-сервер', isRight: false },
      {
        text: 'Присутствие заголовка HTTP в каждом цикле передачи данных туда и обратно',
        isRight: false,
      },
      {
        text: 'Невысокая частота обновления данных(отсутствие режима реального времени)',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Какое устройство используется для передачи данных по телефонным линиям связи?',
    answers: [
      { text: 'концентратор', isRight: false },
      { text: 'туннель', isRight: false },
      { text: 'коммутатор', isRight: false },
      { text: 'шлюз', isRight: false },
      { text: 'модем', isRight: false },
    ],
  },
  {
    question:
      'Устройство, которое на стороне передатчика обеспечивает преобразование цифрового сигнала компьютера в модулированный аналоговый сигнал, а на стороне приемника выполняет обратное преобразование сигналов:',
    answers: [
      { text: 'принтер', isRight: false },
      { text: 'модем', isRight: false },
      { text: 'сетевой коммутатор', isRight: false },
      { text: 'сканер', isRight: false },
      { text: 'сетевой адаптер', isRight: false },
    ],
  },
  {
    question: 'Наименее помехоустойчивыми линиями связи в сетях являются:',
    answers: [
      { text: 'на экранированной витой паре', isRight: false },
      { text: 'на коаксиальном медном кабеле', isRight: false },
      { text: 'на волоконнооптическом кабеле', isRight: false },
      { text: 'беспроводные(радиолинии)', isRight: false },
      { text: 'на неэкранированной витой паре', isRight: false },
    ],
  },
  {
    question:
      'Какое максимальное число устройств возможно подключить к IPv4-сети с маской 255.255.255.0:',
    answers: [
      { text: '254', isRight: false },
      { text: '128', isRight: false },
      { text: '255', isRight: false },
      { text: '126', isRight: false },
      { text: '256', isRight: false },
    ],
  },
  {
    question: 'Как правильно сократить IPv6 адрес 2001:db8:0:0:2bdf:0:0:7334:',
    answers: [
      { text: 'адреса сократить невозможно', isRight: false },
      { text: '2001:db8::0:2bdf:::7334', isRight: false },
      { text: '2001:db8:::2bdf:::7334', isRight: false },
      { text: '2001:db8::2bdf::7334', isRight: false },
      { text: '2001:db8::2bdf:0:0:7334', isRight: false },
    ],
  },
  {
    question:
      'Какая утилита определяет маршрут от отправителя к получателю и находит адреса всех маршрутизаторов, через которые проходят пакеты',
    answers: [
      { text: 'cmd', isRight: false },
      { text: 'nslookup', isRight: false },
      { text: 'telnet', isRight: false },
      { text: 'tracert', isRight: false },
      { text: 'ping', isRight: false },
    ],
  },
  {
    question:
      'Что характеризует раздел заголовка IP-дейтаргаммы “время существования”?',
    answers: [
      {
        text: 'время с момента отправки IP-дейтаграммы в сеть до момента получения подтверждения о правильности ее приема',
        isRight: false,
      },
      { text: 'око', isRight: false },
      {
        text: 'максимальное количество пересылок IP-дейтаграммы между маршрутизаторами',
        isRight: false,
      },
      { text: 'хранения IP-адресов компаний и организаций', isRight: false },
      {
        text: 'время повторной передачи ошибочной IP-дейтаграммы',
        isRight: false,
      },
    ],
  },
  {
    question: '«Трехкратным рукопожатием» называют',
    answers: [
      { text: 'разрыв соединения в протоколе UDP', isRight: false },
      { text: 'установку соединения в протоколе TCP', isRight: false },
      { text: 'установку соединения в протоколе UDP', isRight: false },
      { text: 'разрыв соединения в протоколе TCP', isRight: false },
      { text: 'установку соединения в протоколе HTTP', isRight: false },
    ],
  },
  {
    question:
      'Укажите сетевое оборудование, которое в своей работе реализует функции 1 -го (физического), 2-го (канального) уровней модели OSI:',
    answers: [
      { text: 'коммутатор (switch)', isRight: false },
      { text: 'маршрутизатор (router)', isRight: false },
      { text: 'мост (bridge)', isRight: false },
      { text: 'усилитель', isRight: false },
      { text: 'концентратор (hub)', isRight: false },
    ],
  },
  {
    question:
      'Группа связанных между собой компьютеров, серверов, принтеров, расположенных в пределах здания, офиса или комнаты называется',
    answers: [
      { text: 'корпоративная сеть', isRight: false },
      { text: 'глобальная сеть', isRight: false },
      { text: 'муниципальная сеть', isRight: false },
      { text: 'региональная сеть', isRight: false },
      { text: 'локальная сеть', isRight: false },
    ],
  },
  {
    question: 'К какому уровню ISO/OSI относится протокол TCP?',
    answers: [
      { text: 'физический', isRight: false },
      { text: 'представительный', isRight: false },
      { text: 'транспортный', isRight: false },
      { text: 'сетевой', isRight: false },
      { text: 'канальный', isRight: false },
    ],
  },
  {
    question: 'Что включает в себя понятие «Технология Wi-Fi»?',
    answers: [
      {
        text: 'стандарты на построение сетей беспроводной связи GSM',
        isRight: false,
      },
      {
        text: 'семейство стандартов передачи цифровых потоков данных по радиоканалам',
        isRight: false,
      },
      {
        text: 'стандарты на построение беспроводных локальных сетей WLAN',
        isRight: false,
      },
      { text: 'дифференциальное кодирование', isRight: false },
      {
        text: 'стандарты на построение беспроводных сетей средних и коротких расстояний Bluetooth',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Что характеризует обновление данных веб-сайта по протоколу Web Socket:',
    answers: [
      {
        text: 'Высокая частота обновления данных (режим реального времени), низкое потребление полосы пропускания канала связи (заголовки HTTP отсутствуют при передаче данных), дуплексная передача обновляемых данных между сервером и клиентом',
        isRight: false,
      },
      {
        text: 'Дуплексная передача обновляемых данных между сервером и клиентом, среднее потребление полосы пропускания канала связи (заголовки HTTP присутствуют при передаче данных)',
        isRight: false,
      },
      {
        text: 'Дуплексная передача обновляемых данных между сервером и клиентом, низкая частота обновления данных (отсутствует режим реального времени)',
        isRight: false,
      },
      {
        text: 'Высокая частота обновления данных (режим реального времени), среднее потребление полосы пропускания канала связи (заголовки HTTP присутствуют при передаче данных)',
        isRight: false,
      },
      {
        text: 'Низкое потребление полосы пропускания канала связи (заголовки HTTP отсутствуют при передаче данных), передача данных в одном направлении (от сервера клиенту)',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Какие протоколы призваны обеспечить надежность передачи данных при использовании протокола UDP?',
    answers: [
      { text: 'межсетевые протоколы', isRight: false },
      { text: 'протоколы уровня приложений', isRight: false },
      { text: 'протоколы транспортного уровня', isRight: false },
      { text: 'протоколы сетевого уровня', isRight: false },
      { text: 'протоколы управления передачей', isRight: false },
    ],
  },
  {
    question:
      'Какой уровень OSI отвечает за надежную передачу данных через физический канал?',
    answers: [
      { text: 'канальный', isRight: false },
      { text: 'физический', isRight: false },
      { text: 'прикладной', isRight: false },
      { text: 'сетевой', isRight: false },
      { text: 'сеансовый', isRight: false },
    ],
  },
  {
    question:
      'Маршрутизатор с технологией «динамический NAT» (PAT) решает, что TCP-пакет адресован узлу в локальной сети, а не самому маршрутизатору, если:',
    answers: [
      {
        text: 'IP-адрес узла отправителя присутствует в таблице маршрутизации',
        isRight: false,
      },
      {
        text: 'IP-адрес узла получателя является адресом локальной сети, а не глобальной сети',
        isRight: false,
      },
      {
        text: 'Значение порта получателя меньше максимального разрешённого значения для внутренних портов маршрутизатора',
        isRight: false,
      },
      {
        text: 'IP-адрес узла получателя присутствует в списке подменяемых адресов',
        isRight: false,
      },
      {
        text: 'Значение порта получателя больше максимального разрешённого значения для внутренних портов маршрутизатора',
        isRight: false,
      },
    ],
  },
  {
    question: 'Что проверяет команда tracert?',
    answers: [
      { text: 'функциональность конечного приложения', isRight: false },
      { text: 'сетевой путь до места назначения', isRight: false },
      { text: 'функциональность приложения', isRight: false },
      { text: 'функциональность сетевой интерфейсной платы', isRight: false },
      { text: 'полосу пропускания поставщика услуг Интернета', isRight: false },
    ],
  },
  {
    question:
      'Если основной шлюз был неправильно сконфигурирован на узле, каким образом это влияет на связь?',
    answers: [
      {
        text: 'узел может обменивать данными с узлами в других сетях, но не может обмениваться данными с узлами в своей локальной сети',
        isRight: false,
      },
      { text: 'это никак не влияет на связь', isRight: false },
      {
        text: 'узел может обмениваться данными с другими узлами своей локальной сети, но не может обмениваться данными с узлами в других сетях',
        isRight: false,
      },
      { text: 'влияет на сетевую таблицу', isRight: false },
      {
        text: 'узел не может обмениваться данными в своей локальной сети',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Постоянная и известная скорость передачи данных, а также низкий и постоянный уровень задержки передачи данных через сеть-это:',
    answers: [
      { text: 'Недостатки коммутации пакетов', isRight: false },
      { text: 'Недостатки коммутации каналов', isRight: false },
      { text: 'Достоинства коммутации каналов', isRight: false },
      { text: 'Достоинства коммутации пакетов', isRight: false },
      { text: 'Достоинства коммутации пакетов и каналов', isRight: false },
    ],
  },
  {
    question:
      'Какой кабель в основном используется для соединения компьютеров в локальной сети?',
    answers: [
      { text: 'локальный кабель', isRight: false },
      { text: 'витая пара', isRight: false },
      { text: 'оптоволокно', isRight: false },
      { text: 'коаксиальный кабель', isRight: false },
      { text: 'кросс кабель', isRight: false },
    ],
  },
  {
    question:
      'Как называется вид связи, при котором информация передается одновременно в двух направлениях?',
    answers: [
      { text: 'симплексный', isRight: false },
      { text: 'обратный', isRight: false },
      { text: 'прямой', isRight: false },
      { text: 'дуплексный', isRight: false },
      { text: 'полудуплексный', isRight: false },
    ],
  },
  {
    question:
      'Выберите широковещательный адрес для подсети, которой принадлежит IP-адрес 109.207.161.254/24',
    answers: [
      { text: '109.207.161.11', isRight: false },
      { text: '109.207.0.0', isRight: false },
      { text: '109.207.161.0', isRight: false },
      { text: '109.207.161.255', isRight: false },
      { text: '109.207.0.254', isRight: false },
    ],
  },
  {
    question: 'Какова роль скользящего окна в протоколе TCP?',
    answers: [
      {
        text: 'оно ограничивает объем поступающих данных, так что каждый сегмент должен посылаться по одному, что приводит к неэффективному использованию полосы пропускания',
        isRight: false,
      },
      {
        text: 'оно делает окно большим, поэтому за один раз может проходить больший объем данных, что приводит к более эффективному использованию полосы пропускания',
        isRight: false,
      },
      {
        text: 'оно позволяет во время TCP-сеанса динамически согласовывать размер окна, что приводит к более эффективному использованию полосы пропускания',
        isRight: false,
      },
      { text: 'оно ограничивает объем поступающих данных', isRight: false },
      {
        text: 'при приеме данных размер окна регулируется для каждого раздела дейтаграммы, что приводит к более эффективному использованию полосы пропускания',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Выберите методы протокола HTTP, которые используются для реализации веб-служб с программным интерфейсом в стиле REST:',
    answers: [
      { text: 'DELETE', isRight: false },
      { text: 'PUT', isRight: false },
      { text: 'GET', isRight: false },
      { text: 'GET, PUT, DELETE, POST', isRight: false },
      { text: 'POST', isRight: false },
    ],
  },
  {
    question: 'Какой адрес использует DHCP-клиент, чтобы найти DHCP-сервер:',
    answers: [
      { text: 'индивидуальный IP-адрес сервера', isRight: false },
      { text: 'loopback-адрес', isRight: false },
      { text: 'адрес, из блока частных адресов', isRight: false },
      { text: 'групповой адрес', isRight: false },
      { text: 'широковещательный адрес', isRight: false },
    ],
  },
  {
    question: 'Наиболее помехоустойчивыми линиями связи в сетях являются:',
    answers: [
      { text: 'беспроводные (радиолинии)', isRight: false },
      { text: 'на экранированной витой паре', isRight: false },
      { text: 'на волоконнооптическом кабеле', isRight: false },
      { text: 'на коаксиальном медном кабеле', isRight: false },
      { text: 'на неэкранированной витой паре', isRight: false },
    ],
  },
  {
    question:
      'Какой из перечисленных протоколов служит для доступа к почтовому ящику на сервере с нескольких устройств и позволяет пометить важные сообщения флагом, который хранится на сервере:',
    answers: [
      { text: 'SMTP', isRight: false },
      { text: 'IMAP', isRight: false },
      { text: 'POP3', isRight: false },
      { text: 'FTP', isRight: false },
      { text: 'HTTP', isRight: false },
    ],
  },
  {
    question:
      'Расширенная версия протокола передачи гипертекста, которая поддерживает сжатие заголовков и шифрование',
    answers: [
      { text: 'FTP', isRight: false },
      { text: 'HTTP', isRight: false },
      { text: 'DHCP', isRight: false },
      { text: 'HTTP/2', isRight: false },
      { text: 'POP3', isRight: false },
    ],
  },
  {
    question:
      'Что характеризует обновление данных веб-сайта по протоколу HTTP в режиме «периодический опрос» (Ajax Polling):',
    answers: [
      {
        text: 'Отсутствие блокировки пользовательского интерфейса',
        isRight: false,
      },
      {
        text: 'Большое потребление полосы пропускания канала связи',
        isRight: false,
      },
      { text: 'Высокая нагрузка на веб-сервер', isRight: false },
      { text: 'Всё из перечисленного', isRight: false },
      {
        text: 'Невысокая частота обновления данных (отсутствие режима реального времени)',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Выберите пункт, наиболее полно отражающий назначение протокола IMAP:',
    answers: [
      {
        text: 'Доступ к почтовому ящику с возможностью управления перемещением и хранением сообщений на сервере',
        isRight: false,
      },
      { text: 'Одноранговое взаимодействие «точка-точка»', isRight: false },
      {
        text: 'Извлечение электронной почты по принципу «загрузи-и-удали»',
        isRight: false,
      },
      { text: 'Приём и отправка электронной почты', isRight: false },
      { text: 'Отправка электронной почты', isRight: false },
    ],
  },
  {
    question: 'Что позволяет организовать службу разрешения доменных имён?',
    answers: [
      { text: 'FTP', isRight: false },
      { text: 'DHCP сервер', isRight: false },
      { text: 'DNS сервер', isRight: false },
      { text: 'HTTP', isRight: false },
      { text: 'RIP', isRight: false },
    ],
  },
  {
    question: 'Путь к запрашиваемому ресурсу в протоколе HTTP передаётся',
    answers: [
      { text: 'В стартовой строке запроса', isRight: false },
      { text: 'В одном из заголовков запроса', isRight: false },
      { text: 'В теле сообщения', isRight: false },
      { text: 'В конце сообщения', isRight: false },
      { text: 'В строке браузера (обозревателя Интернет)', isRight: false },
    ],
  },
  {
    question: 'К какому уровню ISO/OSI относится протокол IP?',
    answers: [
      { text: 'сетевой', isRight: false },
      { text: 'транспортный', isRight: false },
      { text: 'канальный', isRight: false },
      { text: 'прикладной', isRight: false },
      { text: 'физический', isRight: false },
    ],
  },
  {
    question: 'На каких устройствах сети работает NAT:',
    answers: [
      { text: 'коммутаторы', isRight: false },
      { text: 'повторители', isRight: false },
      { text: 'маршрутизаторы (шлюзы по умолчанию)', isRight: false },
      { text: 'усилители', isRight: false },
      { text: 'модемы', isRight: false },
    ],
  },
  {
    question: 'Представительный уровень модели OSI служит для:',
    answers: [
      {
        text: 'согласования скоростей передачи и приема информации',
        isRight: false,
      },
      {
        text: 'преодоления различий представления, шифрования и дешифрования и сжатия данных',
        isRight: false,
      },
      {
        text: 'организации продвижения данных через составную сеть',
        isRight: false,
      },
      {
        text: 'обеспечения передачи данных с требуемой степенью надежности',
        isRight: false,
      },
      {
        text: 'предоставления разнообразных протоколов, с помощью которых приложения получают доступ к сети',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Какой тип записи DNS хранит соответствие имени и DNS-сервера домена?',
    answers: [
      { text: 'NS', isRight: false },
      { text: 'MX', isRight: false },
      { text: 'AAAA', isRight: false },
      { text: 'CNAME', isRight: false },
      { text: 'A', isRight: false },
    ],
  },
  {
    question:
      'Какой тип сервера динамически присваивает IP-адрес новому узлу в сети?',
    answers: [
      { text: 'ARP', isRight: false },
      { text: 'DNS', isRight: false },
      { text: 'HTTP', isRight: false },
      { text: 'RARP', isRight: false },
      { text: 'DHCP', isRight: false },
    ],
  },
  {
    question:
      'Для расширенного управления почтой с возможностью одновременной работы нескольких клиентов используется протокол.',
    answers: [
      { text: 'FTP', isRight: false },
      { text: 'HTTP', isRight: false },
      { text: 'IMAP', isRight: false },
      { text: 'DHCP', isRight: false },
      { text: 'POP3', isRight: false },
    ],
  },
  {
    question: 'Сетевой трафик-это:',
    answers: [
      {
        text: 'количество информации, передаваемое между двумя сетями в единицу времени',
        isRight: false,
      },
      {
        text: 'количество информации, передаваемое между двумя узлами сети в единицу времени',
        isRight: false,
      },
      {
        text: 'количество информации, передаваемое между сетевыми процессами в единицу времени',
        isRight: false,
      },
      {
        text: 'количество информации, передаваемое между двумя модемами в единицу времени',
        isRight: false,
      },
      {
        text: 'количество информации, передаваемое во всей сети, в единицу времени',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Какие значения подменяются при передаче UDP-пакета из локальной сети в глобальную сеть через маршрутизатор с технологией «статический NAT»:',
    answers: [
      { text: 'IP-адрес получателя', isRight: false },
      { text: 'IP-адрес отправителя', isRight: false },
      { text: 'IP-адрес отправителя и порт отправителя', isRight: false },
      { text: 'IP-адрес отправителя и MAC-адрес отправителя', isRight: false },
      { text: 'IP-адрес получателя и порт получателя', isRight: false },
    ],
  },
  {
    question: 'Для передачи файлов по сети используется протокол',
    answers: [
      { text: 'FTP', isRight: false },
      { text: 'IMAP', isRight: false },
      { text: 'HTTP', isRight: false },
      { text: 'DHCP', isRight: false },
      { text: 'POP3', isRight: false },
    ],
  },
  {
    question: 'Какой тип записи DNS хранит соответствие имени адресу IPv4?',
    answers: [
      { text: 'MX', isRight: false },
      { text: 'NS', isRight: false },
      { text: 'CNAME', isRight: false },
      { text: 'A', isRight: false },
      { text: 'AAAA', isRight: false },
    ],
  },
  {
    question:
      'Какое максимальное число устройств возможно подключить к IPv4-сети с маской /24?',
    answers: [
      { text: '256', isRight: false },
      { text: '257', isRight: false },
      { text: '255', isRight: false },
      { text: '254', isRight: false },
      { text: '126', isRight: false },
    ],
  },
  {
    question:
      'Протокол, который используется для определения локального адреса по IP-адресу',
    answers: [
      { text: 'HTTP', isRight: false },
      { text: 'ICMP', isRight: false },
      { text: 'RARP', isRight: false },
      { text: 'IMAP', isRight: false },
      { text: 'ARP', isRight: false },
    ],
  },
  {
    question:
      'Восстановление нескольких потоков данных, переданных по одному каналу связи, называется',
    answers: [
      { text: 'демультиплексирование', isRight: false },
      { text: 'сжатие', isRight: false },
      { text: 'проверка контрольной суммы', isRight: false },
      { text: 'мультиплексирование', isRight: false },
      { text: 'модуляция', isRight: false },
    ],
  },
  {
    question:
      'Какой из перечисленных протоколов не является текстовым протоколом прикладного уровня:',
    answers: [
      { text: 'POP3', isRight: false },
      { text: 'HTTP/2', isRight: false },
      { text: 'SMTP', isRight: false },
      { text: 'IMAP', isRight: false },
      { text: 'FTP', isRight: false },
    ],
  },
  {
    question: 'Сетевое гнездо (сокет), это',
    answers: [
      { text: 'незашифрованное соединение', isRight: false },
      {
        text: 'объект для доступа к возможностям стека TCP/IP',
        isRight: false,
      },
      { text: 'зашифрованное соединение', isRight: false },
      {
        text: 'разъем на сетевой карте, куда подключается патч-корд',
        isRight: false,
      },
      { text: 'способ подключения к сети', isRight: false },
    ],
  },
  {
    question:
      'Какая утилита определяет маршрут от отправителя к получателю и находит адреса всех маршрутизаторов, через которые проходит пакет',
    answers: [
      { text: 'ping', isRight: false },
      { text: 'telnet', isRight: false },
      { text: 'nslookup', isRight: false },
      { text: 'cmd', isRight: false },
      { text: 'tracert', isRight: false },
    ],
  },
  {
    question:
      'Топология, в которой для начала передачи данных используется специальный пакет - маркер называется:',
    answers: [
      { text: 'полносвязная топология', isRight: false },
      { text: 'звезда', isRight: false },
      { text: 'общая шина', isRight: false },
      { text: 'кольцо', isRight: false },
      { text: 'дерево', isRight: false },
    ],
  },
  {
    question:
      'Какой из приведенных ниже механизмов протокола TCP управляет объемом передаваемой информации?',
    answers: [
      { text: 'работа с окнами', isRight: false },
      { text: 'рукопожатие', isRight: false },
      { text: 'запись после ошибки', isRight: false },
      { text: 'широковещание', isRight: false },
      { text: 'восстановление после ошибки', isRight: false },
    ],
  },
  {
    question:
      'В какой топологии вся информация циркулирует по одному каналу, быстродействие сети зависит от количества подключенных узлов, характерна низкая безопасность, так как информация на каждом компьютере может быть доступна с любого другого компьютера:',
    answers: [
      { text: 'полносвязная топология', isRight: false },
      { text: 'звезда', isRight: false },
      { text: 'шина', isRight: false },
      { text: 'кольцо', isRight: false },
      { text: 'дерево', isRight: false },
    ],
  },
  {
    question:
      'Какое поведение сетевого экрана является наиболее безопасным из перечисленных?',
    answers: [
      { text: 'разрешить только входящие соединения', isRight: false },
      { text: 'разрешить все, что не запрещено', isRight: false },
      { text: 'запретить все, что не разрешено', isRight: false },
      { text: 'разрешить только исходящие соединения', isRight: false },
      { text: 'разрешить все соединения', isRight: false },
    ],
  },
  {
    question: 'Какой топологии не существует?',
    answers: [
      { text: 'последовательная топология', isRight: false },
      { text: 'топология звезда', isRight: false },
      { text: 'топология кольцо', isRight: false },
      { text: 'топология дерево', isRight: false },
      { text: 'топология общая шина', isRight: false },
    ],
  },
  {
    question: 'Стандартный протокол сети Интернет:',
    answers: [
      { text: 'ISO', isRight: false },
      { text: 'IP', isRight: false },
      { text: 'PPP', isRight: false },
      { text: 'SLIP', isRight: false },
      { text: 'OSI', isRight: false },
    ],
  },
  {
    question:
      'Какой канал передачи информации как правило используют для обеспечения надежного высокоскоростного соединения двух серверов?',
    answers: [
      { text: 'оптоволокно', isRight: false },
      { text: 'кросс кабель', isRight: false },
      { text: 'локальный кабель', isRight: false },
      { text: 'беспроводной', isRight: false },
      { text: 'коаксиальный кабель', isRight: false },
    ],
  },
  {
    question:
      'Какой тип модуляции использует изменение частоты несущего сигнала?',
    answers: [
      { text: 'частотная', isRight: false },
      { text: 'импульсная', isRight: false },
      { text: 'фазово-импульсная', isRight: false },
      { text: 'фазовая', isRight: false },
      { text: 'амплитудная', isRight: false },
    ],
  },
  {
    question: 'Выберите протокол транспортного уровня с установкой соединения',
    answers: [
      { text: 'HTTP', isRight: false },
      { text: 'TCP', isRight: false },
      { text: 'UDP', isRight: false },
      { text: 'Ethernet', isRight: false },
      { text: 'IP', isRight: false },
    ],
  },
  {
    question:
      'Согласованный набор протоколов разных уровней, достаточный для организации межсетевого взаимодействия называется?',
    answers: [
      { text: 'набором файлов', isRight: false },
      { text: 'пакетом протоколов', isRight: false },
      { text: 'набором протоколов', isRight: false },
      { text: 'стеком протоколов', isRight: false },
      { text: 'пакетом правил межсетевого взаимодействия', isRight: false },
    ],
  },
  {
    question:
      'Какой термин описывает передачу пакета между соседними маршрутизаторами при перемещении пакета между исходной сеть и сетью назначения?',
    answers: [
      { text: 'ячейка', isRight: false },
      { text: 'LOC', isRight: false },
      { text: 'переход (hop)', isRight: false },
      { text: 'сегмент', isRight: false },
      { text: 'IPS', isRight: false },
    ],
  },
  {
    question: 'Какая из функций является уникальной для маршрутизаторов?',
    answers: [
      { text: 'они отвечают на ARP-запросы', isRight: false },
      {
        text: 'они строят ARP-таблицы, которые описывают все сети, подключенные к ним',
        isRight: false,
      },
      {
        text: 'они принимают широковещательные сообщения и отправляют запрашиваемую информацию',
        isRight: false,
      },
      { text: 'они принимают и отправляют сообщения', isRight: false },
      {
        text: 'они устанавливают зависимость между MAC-адресами и IP-адресами',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Какая из следующих функций используется маршрутизатором для пересылки пакетов данных между сетями?',
    answers: [
      { text: 'передающая среда', isRight: false },
      { text: 'определение пути и коммутация', isRight: false },
      { text: 'широковещание и обнаружение коллизий', isRight: false },
      { text: 'приложение и передающая среда', isRight: false },
      { text: 'никакая из упомянутых', isRight: false },
    ],
  },
  {
    question:
      'Какое устройство обычно используется в качестве основного шлюза для компьютера?',
    answers: [
      {
        text: 'ближайший к компьютеру интерфейс маршрутизатора',
        isRight: false,
      },
      { text: 'сервер, управляемый ISP', isRight: false },
      { text: 'сетевая таблица', isRight: false },
      {
        text: 'интерфейс коммутатора, подсоединенный к компьютеру',
        isRight: false,
      },
      { text: 'сервер, управляемый центральным отделом ИТ', isRight: false },
    ],
  },
  {
    question:
      'Что характеризует обновление данных веб-сайта по протоколу HTTP в режиме «долгий опрос» (Comet Long Polling):',
    answers: [
      {
        text: 'Малое время задержки для событий малой интенсивности',
        isRight: false,
      },
      { text: 'Всё из вышеперечисленного', isRight: false },
      { text: 'Высокая нагрузка на веб-сервер', isRight: false },
      {
        text: 'Среднее потребление полосы пропускания канала связи (заголовки HTTP присутствуют в каждом цикле передачи данных туда и обратно)',
        isRight: false,
      },
      {
        text: 'Средняя частота обновления данных (режим, близкий к реальному времени)',
        isRight: false,
      },
    ],
  },
  {
    question: 'К какому уровню ISO/OSI относится протокол SSH?',
    answers: [
      { text: 'транспортный', isRight: false },
      { text: 'физический', isRight: false },
      { text: 'прикладной', isRight: false },
      { text: 'сетевой', isRight: false },
      { text: 'канальный', isRight: false },
    ],
  },
  {
    question:
      'IP-адрес узла, на который посылается пакет при пересылке его в другую сеть, называется:',
    answers: [
      { text: 'индивидуальным адресом', isRight: false },
      { text: 'адресом сети', isRight: false },
      { text: 'адресом шлюза по умолчанию', isRight: false },
      { text: 'неопределенным адресом', isRight: false },
      { text: 'адресом по умолчанию', isRight: false },
    ],
  },
  {
    question:
      'Какой из перечисленных протоколов является протоколом извлечения электронной почты по принципу «загрузи-и-удали» (без возможности перемещения сообщений между папками на сервере):',
    answers: [
      { text: 'IMAP', isRight: false },
      { text: 'POP3', isRight: false },
      { text: 'SMTP', isRight: false },
      { text: 'HTTP', isRight: false },
      { text: 'FTP', isRight: false },
    ],
  },
  {
    question: 'Как по-другому называется MAC-адрес?',
    answers: [
      { text: 'восьмеричный адрес', isRight: false },
      { text: 'адрес TCP/IP', isRight: false },
      { text: 'двоичный адрес', isRight: false },
      { text: 'троичный адрес', isRight: false },
      { text: 'физический адрес', isRight: false },
    ],
  },
  {
    question:
      'Компания хочет разместить собственный Web-сервер в своей локальной сети за NAT. Какой тип преобразования NAT необходимо использовать в этом случае:',
    answers: [
      { text: 'статический NAT', isRight: false },
      { text: 'NAT на основе портов (РАТ)', isRight: false },
      { text: 'прямой NAT', isRight: false },
      { text: 'динамический NAT', isRight: false },
      { text: 'обратный NAT', isRight: false },
    ],
  },
  {
    question:
      'Какой уровень OSI определяет синтаксис, форматы и структуры представления передаваемых данных (но не затрагивает семантику, значение данных)?',
    answers: [
      { text: 'физический', isRight: false },
      { text: 'прикладной', isRight: false },
      { text: 'канальный', isRight: false },
      { text: 'сетевой', isRight: false },
      { text: 'представительный', isRight: false },
    ],
  },
  {
    question:
      'Какой протокол гарантирует доставку пакетов данных в неизменном виде, последовательности и без потерь?',
    answers: [
      { text: 'TCP', isRight: false },
      { text: 'UDP', isRight: false },
      { text: 'HTTP', isRight: false },
      { text: 'RIP', isRight: false },
      { text: 'FTP', isRight: false },
    ],
  },
  {
    question: 'Применительно к сетевой модели OSI протокол-это?',
    answers: [
      {
        text: 'правила и стандарты взаимодействия между двумя сетевыми процессами',
        isRight: false,
      },
      {
        text: 'правила и стандарты взаимодействия между двумя уровнями',
        isRight: false,
      },
      {
        text: 'правила и стандарты взаимодействия между узлами на одном уровне',
        isRight: false,
      },
      {
        text: 'правила и стандарты взаимодействия между двумя уровнями одного узла',
        isRight: false,
      },
      {
        text: 'правила и стандарты взаимодействия между двумя узлами',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Какой уровень эталонной модели OSI может выполнять трансляцию между различными форматами данных, например между форматами ASCII и EBCDIC?',
    answers: [
      { text: 'сетевой уровень', isRight: false },
      { text: 'транспортный уровень', isRight: false },
      { text: 'сеансовый уровень', isRight: false },
      { text: 'уровень представлений', isRight: false },
      { text: 'уровень приложений', isRight: false },
    ],
  },
  {
    question:
      'Какой из перечисленных протоколов является протоколом доступа к почтовому ящику с возможностью управления перемещением и хранением сообщений на сервере:',
    answers: [
      { text: 'SMTP', isRight: false },
      { text: 'IMAP', isRight: false },
      { text: 'POP3', isRight: false },
      { text: 'HTTP', isRight: false },
      { text: 'FTP', isRight: false },
    ],
  },
  {
    question:
      'Какой из перечисленных протоколов не является протоколом прикладного уровня:',
    answers: [
      { text: 'Ethernet', isRight: false },
      { text: 'HTTP', isRight: false },
      { text: 'SMTP', isRight: false },
      { text: 'IMAP', isRight: false },
      { text: 'SSH', isRight: false },
    ],
  },
  {
    question:
      'DNS-запрос, по которому DNS-клиент обращается к серверу за разрешением имени, а сервер не найдя соответствия начинает дальше сам обращаться к другим DNS-серверам называется:',
    answers: [
      { text: 'прямым', isRight: false },
      { text: 'последовательным', isRight: false },
      { text: 'обратным', isRight: false },
      { text: 'итеративным', isRight: false },
      { text: 'рекурсивным', isRight: false },
    ],
  },
  {
    question:
      'При какой коммутации сеть образует между конечными узлами непрерывный составной физический канал из последовательно соединенных коммутаторами промежуточных канальных участков?',
    answers: [
      { text: 'коммутация сетей', isRight: false },
      { text: 'коммутация пакетов', isRight: false },
      { text: 'коммутация сообщений', isRight: false },
      { text: 'коммутация участков', isRight: false },
      { text: 'коммутация каналов', isRight: false },
    ],
  },
  {
    question:
      'Среди перечисленных вариантов выберите существующие типы DNS-запросов: 1.Итеративный 2.Рекурсивный 3.Смешанный 4.Периодический',
    answers: [
      { text: '4', isRight: false },
      { text: '1', isRight: false },
      { text: '1,2,3', isRight: false },
      { text: '3,4', isRight: false },
      { text: '2', isRight: false },
    ],
  },
  {
    question:
      'Выберите пункт, наиболее полно отражающий назначение протокола SMTP?',
    answers: [
      { text: 'Передача сообщений в сети', isRight: false },
      {
        text: 'Извлечение электронной почты по принципу “загрузи и удали”',
        isRight: false,
      },
      { text: 'Прием и отправка электронной почты', isRight: false },
      {
        text: 'Доступ к почтовому ящику с возможностью управления перемещением и хранением сообщений на сервере',
        isRight: false,
      },
      { text: 'Отправка электронной почты', isRight: false },
    ],
  },
  {
    question:
      'Следующие основные методы протокола HTTP небезопасными и не идемпотентными?',
    answers: [
      { text: 'GET, HEAD', isRight: false },
      { text: 'POST', isRight: false },
      { text: 'POST, PUT, DELETE', isRight: false },
      { text: 'GET, PUT, DELETE, POST', isRight: false },
      { text: 'PUT, DELETE', isRight: false },
    ],
  },
  {
    question: 'Протокол - это ?',
    answers: [
      {
        text: 'способность компьютера посылать файлы через каналы передачи информации',
        isRight: false,
      },
      { text: 'средство для передачи данных по сети', isRight: false },
      { text: 'управления передачи сообщениями', isRight: false },
      { text: 'устройство для работы локальной сети', isRight: false },
      {
        text: 'стандарт передачи данных через компьютерную сеть',
        isRight: false,
      },
    ],
  },
  {
    question: 'Что такое HTTPS?',
    answers: [
      {
        text: 'небезопасный протокол для передачи гипертекста',
        isRight: false,
      },
      { text: 'HTTP over SSL', isRight: false },
      { text: 'язык программирования гипертекста', isRight: false },
      { text: 'протокол сетевого уровня', isRight: false },
      { text: 'протокол безопасного шифрования от Google', isRight: false },
    ],
  },
  {
    question: 'IPV4-адреса?',
    answers: [
      {
        text: 'IPv4 состоит из 8-x октетов и служит для идентификации хостов на сетевом уровне.',
        isRight: false,
      },
      {
        text: 'IPv4 состоит из 4-х октетов и служит для идентификации хостов на сетевом уровне.',
        isRight: false,
      },
      {
        text: 'IPv4 состоит из 4 октетов и служит для идентификации хостов на физическом уровне.',
        isRight: false,
      },
      {
        text: 'IPv4 состоит из 16 октетов и служит для идентификации хостов на сетевом уровне.',
        isRight: false,
      },
      {
        text: 'IPv4 состоит из 6-и октетов и служит для идентификации хостов на сетевом уровне.',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Какой уровень ISO/OSI отвечает за физическую связь между узлами, выбор вида сигнала, его параметры , способ кодирования?',
    answers: [
      { text: 'канальный', isRight: false },
      { text: 'прикладной', isRight: false },
      { text: 'транспортный', isRight: false },
      { text: 'физический', isRight: false },
      { text: 'сетевой', isRight: false },
    ],
  },
  {
    question: 'Укажите способ кодирования сигналов в сети Bluetooth?',
    answers: [
      { text: 'манчестерское кодирование', isRight: false },
      { text: 'преобразование Фурье', isRight: false },
      { text: 'дифференциальное манчестерское кодирование', isRight: false },
      { text: 'частотная модуляция', isRight: false },
      { text: 'амплитудная модуляция', isRight: false },
    ],
  },
  {
    question:
      'Какой уровень ISO/OSI отвечает за преобразование данных во взаимно согласованные форматы, понятные всем участникам обмена, а также обеспечивает компрессию/декомпрессию, шифрование данных?',
    answers: [
      { text: 'сетевой', isRight: false },
      { text: 'канальный', isRight: false },
      { text: 'физический', isRight: false },
      { text: 'прикладной', isRight: false },
      { text: 'представительный', isRight: false },
    ],
  },
  {
    question:
      'Какой уровень модели OSI обеспечивает доступ к среде передачи и разрешение коллизий, адресацию узлов сети с помощью аппаратных (МАС) адресов и адресную передачу по этим адресам, контроль ошибок при передаче:',
    answers: [
      { text: 'канальный', isRight: false },
      { text: 'прикладной', isRight: false },
      { text: 'сетевой', isRight: false },
      { text: 'транспортный', isRight: false },
      { text: 'физический', isRight: false },
    ],
  },
  {
    question: 'Выберите некорректный адрес IPv6:',
    answers: [
      { text: '2001:db8::19:a2e:70:48', isRight: false },
      { text: '2001:db8:85a3:d3:19:a2e:70:48', isRight: false },
      { text: '::', isRight: false },
      { text: '2001::85a3:d3::70:48', isRight: false },
      { text: '::1', isRight: false },
    ],
  },
  {
    question: 'Сетевой уровень модели OSI служит для:',
    answers: [
      { text: 'определения маршрута через сеть', isRight: false },
      {
        text: 'обеспечения передачи данных с требуемой степенью надежности',
        isRight: false,
      },
      {
        text: 'установления логического соединения между взаимодействующими узлами',
        isRight: false,
      },
      {
        text: 'согласования скоростей передачи и приема информации',
        isRight: false,
      },
      {
        text: 'предоставления выбора требуемой степени надежности передачи данных между сетевыми процессами',
        isRight: false,
      },
    ],
  },
  {
    question: 'Как правильно сократить IPv6 адрес 2001:db8:4:3:2bdf:2:1:7334 ?',
    answers: [
      { text: '2001:db8::2bdf::7334', isRight: false },
      { text: '2001:db8:::2bdf:::7334', isRight: false },
      { text: 'адрес сократить невозможно', isRight: false },
      { text: '2001:db8::2bdf:0:0:7334', isRight: false },
      { text: '2001:db8::0:2bdf:::7334', isRight: false },
    ],
  },
  {
    question:
      'Какой из способов обновления данных веб-сайта по протоколу HTTP характеризуется: невысокой частотой обновления данных (отсутствием режима реального времени); большим потреблением полосы пропускания канала связи; высокой нагрузкой на веб-сервер; блокированием пользовательского интерфейса:',
    answers: [
      { text: 'Долгий опрос (Comet Long Polling)', isRight: false },
      { text: 'Веб-гнездо (Web Socket)', isRight: false },
      { text: 'Полное обновление страницы', isRight: false },
      { text: 'Периодический опрос (Ajax Polling)', isRight: false },
      { text: 'Потоковая передача (Comet Streaming)', isRight: false },
    ],
  },
  {
    question:
      'Какие направления трафика можно контролировать правилами межсетевого экрана?',
    answers: [
      { text: 'MAC, IP, домен', isRight: false },
      { text: 'входящие и исходящие', isRight: false },
      { text: 'внутренние и внешние', isRight: false },
      { text: 'прямые и косвенные', isRight: false },
      { text: 'порт, IP-адрес, приложение', isRight: false },
    ],
  },
  {
    question: 'Транспортный уровень модели OSI служит для:',
    answers: [
      { text: 'определения маршрута через сеть', isRight: false },
      {
        text: 'представления битов данных в виде электрических сигналов',
        isRight: false,
      },
      {
        text: 'решения задач шифрования и дешифрования данных',
        isRight: false,
      },
      { text: 'проверки доступности разделяемой среды', isRight: false },
      {
        text: 'предоставления выбора требуемой степени надежности передачи данных между сетевыми процессами',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Какой тип NAT обеспечивает установку соединения из глобальной сети с узлом в локальной сети?',
    answers: [
      { text: 'динамический NAT (PAT)', isRight: false },
      { text: 'WAN', isRight: false },
      { text: 'PPTP', isRight: false },
      { text: 'статический NAT', isRight: false },
      { text: 'L2TP', isRight: false },
    ],
  },
  {
    question:
      'Какое из приведенных ниже определений наилучшим образом описывает протокол маршрутизации?',
    answers: [
      {
        text: 'протокол, который выполняет маршрутизацию посредством реализованного в нем алгоритма',
        isRight: false,
      },
      {
        text: 'протокол, который определяет формат и использование полей в пакете данных',
        isRight: false,
      },
      {
        text: 'протокол, позволяющий пересылать пакеты между хост-машинами',
        isRight: false,
      },
      {
        text: 'протокол, который определяет, как и когда связываются MAC- и IP-адреса',
        isRight: false,
      },
      {
        text: 'протокол, который пересылает пакеты между компьютерами',
        isRight: false,
      },
    ],
  },
  {
    question:
      'К какому уровню ISO/OSI относится метод кодирования цифровых сигналов TTL?',
    answers: [
      { text: 'канальный', isRight: false },
      { text: 'транспортный', isRight: false },
      { text: 'физический', isRight: false },
      { text: 'прикладной', isRight: false },
      { text: 'сетевой', isRight: false },
    ],
  },
  {
    question:
      'Если в линии связи существует два направления передачи, то такая линия называется?',
    answers: [
      { text: 'полу-симплексная', isRight: false },
      { text: 'дуплексная', isRight: false },
      { text: 'симплексная', isRight: false },
      { text: 'беспроводная', isRight: false },
      { text: 'полудуплексная', isRight: false },
    ],
  },
  {
    question:
      'Какой из способов обновления данных веб-сайта по протоколу HTTP характеризуется: невысокой частотой обновления данных (отсутствием режима реального времени); большим потреблением полосы пропускания канала связи; высокой нагрузкой на веб-сервер; отсутствием блокировки пользовательского интерфейса:',
    answers: [
      { text: 'Периодический опрос (Ajax Polling)', isRight: false },
      { text: 'Полное обновление страницы', isRight: false },
      { text: 'Веб-гнездо (Web Socket)', isRight: false },
      { text: 'Долгий опрос (Comet Long Polling)', isRight: false },
      { text: 'Потоковая передача (Comet Streaming)', isRight: false },
    ],
  },
  {
    question: 'Служба DNS предназначена для:',
    answers: [
      { text: 'определения символьного имени по МАС-адресу', isRight: false },
      { text: 'определения МАС-адреса по IP-адресу', isRight: false },
      {
        text: 'определения IP-адреса по доменному( символьному) имени',
        isRight: false,
      },
      {
        text: 'определения МАС-адреса по доменному( символьному) имени',
        isRight: false,
      },
      { text: 'определения IP -адреса по МАС -адресу', isRight: false },
    ],
  },
  {
    question: 'Что не относится к сетевому оборудованию?',
    answers: [
      { text: 'коммутатор', isRight: false },
      { text: 'видеокарта', isRight: false },
      { text: 'концентратор', isRight: false },
      { text: 'сетевой адаптер', isRight: false },
      { text: 'маршрутизатор', isRight: false },
    ],
  },
  {
    question:
      'По какому виду кабеля информация передается не электрическим сигналом, а световым?',
    answers: [
      { text: 'оптоволоконному', isRight: false },
      { text: 'адаптер', isRight: false },
      { text: 'маршрутному', isRight: false },
      { text: 'витая пара', isRight: false },
      { text: 'коаксиальному', isRight: false },
    ],
  },
  {
    question:
      'Какой тип NAT при трансляции подменяет только адрес локального узла?',
    answers: [
      { text: 'статический NAT', isRight: false },
      { text: 'L2TP', isRight: false },
      { text: 'PPTP', isRight: false },
      { text: 'динамический NAT (PAT)', isRight: false },
      { text: 'WAN', isRight: false },
    ],
  },
  {
    question:
      'Следующие основные методы протокола HTTP являются безопасными и идемпотентными:',
    answers: [
      { text: 'GET, PUT, DELETE, POST', isRight: false },
      { text: 'GET, PUT', isRight: false },
      { text: 'PUT, DELETE, POST', isRight: false },
      { text: 'GET, HEAD', isRight: false },
      { text: 'POST', isRight: false },
    ],
  },
  {
    question: 'К какому уровню ISO/OSI относится протокол HTTP?',
    answers: [
      { text: 'транспортный', isRight: false },
      { text: 'физический', isRight: false },
      { text: 'сетевой', isRight: false },
      { text: 'прикладной', isRight: false },
      { text: 'канальный', isRight: false },
    ],
  },
  {
    question: 'Адрес какого типа используется в заголовке кадра Ethernet?',
    answers: [
      { text: 'IP-адрес назначения', isRight: false },
      { text: 'только IР-адреса', isRight: false },
      { text: 'только широковещательные адреса', isRight: false },
      { text: 'только MAC-адреса', isRight: false },
      { text: 'только логические адреса', isRight: false },
    ],
  },
  {
    question: 'Из каких двух подуровней состоит канальный уровень:',
    answers: [
      { text: 'MAC/LLC', isRight: false },
      { text: 'IPX/SPX', isRight: false },
      { text: 'TCP/IP', isRight: false },
      { text: 'ARP/RARP', isRight: false },
      { text: 'TCP/UDP', isRight: false },
    ],
  },
  {
    question: 'Отдельные медные проводники витой пары свивают для защиты от:',
    answers: [
      { text: 'внешних электромагнитных помех', isRight: false },
      { text: 'высокочастотных помех', isRight: false },
      { text: 'магнитных помех', isRight: false },
      { text: 'тепловых помех', isRight: false },
      { text: 'перекрестных помех', isRight: false },
    ],
  },
  {
    question:
      'Какой из приведенных адресов, не является индивидуальным МАС-адресом:',
    answers: [
      { text: '04-10-0d-ad-44-ff', isRight: false },
      { text: 'a2-b1-12-f1-8в-aу', isRight: false },
      { text: 'ff-ff-ff-ff-ff-ff', isRight: false },
      { text: '2a-2b-1c-2f-ae-ac', isRight: false },
      { text: 'aa-bb-1c-ff-8e-ad', isRight: false },
    ],
  },
  {
    question:
      'Какое сетевое устройство делит разделяемую среду передачи ( домен коллизий) на более мелкие сегменты коллизий и обрабатывает кадры канального уровня параллельно по всем портам:',
    answers: [
      { text: 'концентратор', isRight: false },
      { text: 'маршрутизатор', isRight: false },
      { text: 'повторитель', isRight: false },
      { text: 'коммутатор', isRight: false },
      { text: 'усилитель', isRight: false },
    ],
  },
  {
    question:
      'Какие значения подменяются при передаче TCP-пакета из локальной сети в глобальную сеть через маршрутизатор с технологией «статический NAT»:',
    answers: [
      { text: 'IP-адрес отправителя и порт отправителя', isRight: false },
      { text: 'IP-адрес отправителя и MAC-адрес отправителя', isRight: false },
      { text: 'IP-адрес получателя', isRight: false },
      { text: 'IP-адрес получателя и порт получателя', isRight: false },
      { text: 'IP-адрес отправителя', isRight: false },
    ],
  },
  {
    question: 'Звезда – это топология ЛВС, в которой:',
    answers: [
      { text: 'каждая станция подключается общему кабелю', isRight: false },
      {
        text: 'все рабочие станции присоединены к центральному узлу',
        isRight: false,
      },
      {
        text: 'каждая станция соединена с двумя другими станциями',
        isRight: false,
      },
      {
        text: 'последняя рабочая станция соединяется с первой',
        isRight: false,
      },
      {
        text: 'каждая рабочая станция соединяется со всеми другими станциями',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Тип DNS-запроса, при котором клиент делает рекурсивный запрос к DNS-серверу, который далее выполняет итеративный запрос, называется',
    answers: [
      { text: 'Рекурсивный', isRight: false },
      { text: 'Смешанный', isRight: false },
      { text: 'Периодический', isRight: false },
      { text: 'Итеративный', isRight: false },
      { text: 'Обратный', isRight: false },
    ],
  },
  {
    question: 'Выберите корректный IP-адрес компьютера в сети',
    answers: [
      { text: '180.244.250.999', isRight: false },
      { text: '123.255.255.255', isRight: false },
      { text: '1278.214.198', isRight: false },
      { text: '180.244.298.20', isRight: false },
      { text: '123.255.255.250', isRight: false },
    ],
  },
  {
    question:
      'Последовательность и формат сообщений, которыми обмениваются сетевые компоненты, лежащие на соседних уровнях (модели OSI) в одном узле, а также набор услуг, предоставляемый данным уровнем соседнему уровню, определяет:',
    answers: [
      { text: 'протокол', isRight: false },
      { text: 'пользователь', isRight: false },
      { text: 'интерфейс', isRight: false },
      { text: 'стек протоколов', isRight: false },
      { text: 'провайдер', isRight: false },
    ],
  },
  {
    question: 'Концентратор – это',
    answers: [
      { text: 'способ подключения двух компьютеров', isRight: false },
      {
        text: 'способность компьютера посылать файлы через каналы передачи информации',
        isRight: false,
      },
      {
        text: 'устройство для соединения компьютеров через телефонную линию',
        isRight: false,
      },
      {
        text: 'устройство для организации работы локальной сети',
        isRight: false,
      },
      { text: 'главный компьютер в локальной сети', isRight: false },
    ],
  },
  {
    question:
      'Узлу А необходимо узнать MAC-адрес узла В, расположенного в том же сегменте LAN. На все узлы в данном сегменте отправляется запрос на получение MAC-адреса узла В. Узел В отправляет ответ со своими MAC- адресом, а все другие узлы игнорируют запрос. Какой протокол используется в данном сценарии?',
    answers: [
      { text: 'ARP', isRight: false },
      { text: 'DNS', isRight: false },
      { text: 'WINS', isRight: false },
      { text: 'RIP', isRight: false },
      { text: 'DHCP', isRight: false },
    ],
  },
  {
    question:
      'Какой уровень ISO/OSI определяет порядок получения доступа к среде передачи данных?',
    answers: [
      { text: 'прикладной', isRight: false },
      { text: 'представительный', isRight: false },
      { text: 'физический', isRight: false },
      { text: 'канальный', isRight: false },
      { text: 'сетевой', isRight: false },
    ],
  },
  {
    question:
      'Какой из нижеперечисленных стеков сетевых протоколов наиболее распространенный?',
    answers: [
      { text: 'ISO', isRight: false },
      { text: 'NetBEUI', isRight: false },
      { text: 'IPX/SPX', isRight: false },
      { text: 'AppleTalk', isRight: false },
      { text: 'TCP/IP', isRight: false },
    ],
  },
  {
    question:
      'Какой тип модуляции использует изменение амплитуды несущего сигнала?',
    answers: [
      { text: 'фазовая', isRight: false },
      { text: 'фазово-импульсная', isRight: false },
      { text: 'частотная', isRight: false },
      { text: 'амплитудная', isRight: false },
      { text: 'импульсная', isRight: false },
    ],
  },
  {
    question:
      'Выберите методы протокола HTTP, которые используются для реализации протокола SOAP и веб-служб на его основе:',
    answers: [
      { text: 'DELETE', isRight: false },
      { text: 'GET, PUT, DELETE, POST', isRight: false },
      { text: 'PUT', isRight: false },
      { text: 'POST', isRight: false },
      { text: 'GET', isRight: false },
    ],
  },
  {
    question: 'Протокол WebSocket работает поверх протокола:',
    answers: [
      { text: 'HTTP', isRight: false },
      { text: 'ICMP', isRight: false },
      { text: 'UDP', isRight: false },
      { text: 'IP', isRight: false },
      { text: 'TCP', isRight: false },
    ],
  },
  {
    question:
      'Какой тип NAT заключается в выделении узлу локальной сети одного порта для доступа в глобальную сеть?',
    answers: [
      { text: 'L2TP', isRight: false },
      { text: 'динамический NAT (PAT)', isRight: false },
      { text: 'PPTP', isRight: false },
      { text: 'статический NAT', isRight: false },
      { text: 'WAN', isRight: false },
    ],
  },
  {
    question:
      'Какой вид технологии трансляции адресов позволяет организовать одновременный доступ нескольких клиентов во внешнюю сеть, используя только один внешний IP-адрес?',
    answers: [
      { text: 'статический NAT', isRight: false },
      { text: 'DNS', isRight: false },
      { text: 'VLAN', isRight: false },
      { text: 'PAT', isRight: false },
      { text: 'FTP', isRight: false },
    ],
  },
  {
    question: 'Доменные имена записываются:',
    answers: [
      { text: 'в прямом порядке', isRight: false },
      { text: 'в обратном порядке', isRight: false },
      { text: 'в смешанном порядке', isRight: false },
      { text: 'в любом порядке', isRight: false },
      { text: 'порядок не важен', isRight: false },
    ],
  },
  {
    question:
      'К какому уровню ISO/OSI относится метод кодирования цифровых сигналов NRZ?',
    answers: [
      { text: 'транспортный', isRight: false },
      { text: 'сетевой', isRight: false },
      { text: 'прикладной', isRight: false },
      { text: 'канальный', isRight: false },
      { text: 'физический', isRight: false },
    ],
  },
  {
    question:
      'Выберите метод протокола HTTP, который должен использоваться для реализации семантики добавления комментария к странице посетителем веб-сайта:',
    answers: [
      { text: 'HEAD', isRight: false },
      { text: 'POST', isRight: false },
      { text: 'PATCH', isRight: false },
      { text: 'TRACE', isRight: false },
      { text: 'PUT', isRight: false },
    ],
  },
  {
    question: 'На каких уровнях эталонной модели OSI работают глобальные сети?',
    answers: [
      { text: 'транспортный уровень', isRight: false },
      { text: 'физический и канальный уровни', isRight: false },
      { text: 'канальный уровень и уровень представлений', isRight: false },
      { text: 'канальный и сетевой уровни', isRight: false },
      { text: 'физический уровень и уровень приложений', isRight: false },
    ],
  },
  {
    question:
      'Географическая схема расположения компьютеров и прокладки кабелей называется',
    answers: [
      { text: 'логическая топология', isRight: false },
      { text: 'физическая топология', isRight: false },
      { text: 'информационная топология', isRight: false },
      { text: 'топология', isRight: false },
      { text: 'общая шина', isRight: false },
    ],
  },
  {
    question:
      'Какая таблица используется маршрутизатором для принятия решения о том, через какой интерфейс должен быть отправлен пакет данных?',
    answers: [
      { text: 'таблица рассылки', isRight: false },
      { text: 'таблица маршрутизации', isRight: false },
      { text: 'таблица RIP', isRight: false },
      { text: 'таблица ARP', isRight: false },
      { text: 'таблица MAC-адресов', isRight: false },
    ],
  },
  {
    question: 'Какую информацию дает проверка сети с помощью команды trace?',
    answers: [
      {
        text: 'определяет наличие записи в таблице маршрутизации для намеченного маршрутизатора',
        isRight: false,
      },
      { text: 'определяет, работает ли протокол данных', isRight: false },
      {
        text: 'показывает каждый маршрутизатор, через который проходит пакет на пути к пункту назначения',
        isRight: false,
      },
      { text: 'определяет, работает ли протокол канала', isRight: false },
      {
        text: 'определяет правильность функционирования приложений верхнего уровня',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Если предположить, что МАС-адреса нет в ARP-таблице, то как отправитель находит МАС-адрес пункта назначения?',
    answers: [
      {
        text: 'посылает широковещательное сообщение по всей локальной сети',
        isRight: false,
      },
      {
        text: 'посылает широковещательное сообщение по всей сети',
        isRight: false,
      },
      {
        text: 'в поисках адреса посылает сообщение по всем адресам',
        isRight: false,
      },
      { text: 'сверяется с таблицей маршрутизации', isRight: false },
      { text: 'сверяется с таблицей коммутации', isRight: false },
    ],
  },
  {
    question:
      'Задан адрес электронной почты в сети Интернет: user@gmail.com. Выберите имя домена верхнего уровня',
    answers: [
      { text: 'gmail', isRight: false },
      { text: 'com', isRight: false },
      { text: 'user', isRight: false },
      { text: 'user@', isRight: false },
      { text: 'gmail.com', isRight: false },
    ],
  },
  {
    question: 'ARP:',
    answers: [
      {
        text: 'протокол маршрутизации по заранее заданным таблицам',
        isRight: false,
      },
      {
        text: 'используется для преобразования доменного имени в IP-адрес',
        isRight: false,
      },
      {
        text: 'используется для получения машиной сетевого адреса при подключении к сети',
        isRight: false,
      },
      {
        text: 'используется для получения MAC-адреса хоста, по известному IP-адресу',
        isRight: false,
      },
      {
        text: 'используется для построения таблицы коммутации',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Сеть, не содержащая в своем составе выделенных серверов, называется:',
    answers: [
      { text: 'трехранговой', isRight: false },
      { text: 'одноранговой', isRight: false },
      { text: 'выделенной', isRight: false },
      { text: 'центализованной', isRight: false },
      { text: 'двухранговой', isRight: false },
    ],
  },
  {
    question:
      'Какой уровень ISO/OSI задает логическую топологию сети и отвечает за физическую адресацию узлов?',
    answers: [
      { text: 'физический', isRight: false },
      { text: 'канальный', isRight: false },
      { text: 'транспортный', isRight: false },
      { text: 'сетевой', isRight: false },
      { text: 'прикладной', isRight: false },
    ],
  },
  {
    question:
      'Как правильно сократить IPv6 адрес 2001:0db8:085a3:0:0:0:0370:7334 ?',
    answers: [
      { text: 'адрес сократить невозможно', isRight: false },
      { text: '2001:0db8:85a3::::0370:7334', isRight: false },
      { text: '2001:db8:85a3::370:7334', isRight: false },
      { text: '2001:db8:85a3::0::370:7334', isRight: false },
      { text: '::2001:0db8:85a3:370:7334', isRight: false },
    ],
  },
  {
    question: 'Какое из утверждений справедливо по отношению к сетям CSMA/CD?',
    answers: [
      {
        text: 'сигналы от передающего узла поступают к ближайшему маршрутизатору, который направляет их непосредственно адресату',
        isRight: false,
      },
      {
        text: 'сигналы посылаются непосредственно получателю, если его MAC- и IP-адрес известны отправителю (неправильно)',
        isRight: false,
      },
      {
        text: 'данные всегда посылаются в режиме широковещания',
        isRight: false,
      },
      {
        text: 'все устройства сети видят данные, анализируют адрес получателя и отбрасывают фрейм, если он адресован другому устройству(точно неправильно)',
        isRight: false,
      },
      { text: 'данные от узла поступают к маршрутизатору', isRight: false },
    ],
  },
  {
    question: 'Для чего используются межсетевые устройства?',
    answers: [
      {
        text: 'позволяют объединить отдельные сети, увеличить число узлов и протяженность сети',
        isRight: false,
      },
      { text: 'определяет, работает ли протокол данных', isRight: false },
      {
        text: 'обеспечивают резервные пути доставки сигнала, тем самым предотвращая его потерю и искажение',
        isRight: false,
      },
      { text: 'повышают защищенность сети', isRight: false },
      {
        text: 'повышают скорость передачи данных и уменьшают уровень электромагнитных помех в зданиях',
        isRight: false,
      },
    ],
  },
  {
    question:
      'На какие классы делятся компьютерные сети по территориальному признаку?',
    answers: [
      { text: 'локальные, региональные и глобальные', isRight: false },
      { text: 'проводные и беспроводные', isRight: false },
      { text: 'предприятий, организаций и корпораций', isRight: false },
      {
        text: 'передачи данных, хранения и обработки информации',
        isRight: false,
      },
      { text: 'сетевые и прикладные', isRight: false },
    ],
  },
  {
    question:
      'Какой протокол позволяет определить МАС-адрес узла по его IP-адресу:',
    answers: [
      { text: 'ICMP', isRight: false },
      { text: 'IPX', isRight: false },
      { text: 'ARP', isRight: false },
      { text: 'IP', isRight: false },
      { text: 'RARP', isRight: false },
    ],
  },
  {
    question:
      'Задан адрес в сети Интернет: mail.bsuir.by. Выберите имя домена верхнего уровня',
    answers: [
      { text: 'bsuir', isRight: false },
      { text: 'bsuir.by', isRight: false },
      { text: 'mail', isRight: false },
      { text: 'by', isRight: false },
      { text: 'mail.bsuir.by', isRight: false },
    ],
  },
  {
    question:
      'Какой протокол позволяет определить IP-адрес узла по его MAC-адресу:',
    answers: [
      { text: 'RARP', isRight: false },
      { text: 'IP', isRight: false },
      { text: 'ARP', isRight: false },
      { text: 'IPX', isRight: false },
      { text: 'ICMP', isRight: false },
    ],
  },
  {
    question:
      'В какой сетевой топологии передача информации по разделяемой среде регулируется с помощью специального пакета -маркера:',
    answers: [
      { text: 'шина', isRight: false },
      { text: 'звезда', isRight: false },
      { text: 'полносвязная топология', isRight: false },
      { text: 'дерево', isRight: false },
      { text: 'кольцо', isRight: false },
    ],
  },
  {
    question:
      'Как называется вид связи, при котором информация передается по одному каналу поочередно то в прямом, то в обратном направлении?',
    answers: [
      { text: 'дуплексный', isRight: false },
      { text: 'прямой', isRight: false },
      { text: 'полудуплексный', isRight: false },
      { text: 'симплексный', isRight: false },
      { text: 'обратный', isRight: false },
    ],
  },
  {
    question:
      'Какое количество МАС - адресов используется в заголовке канального уровня технологии Ethernet:',
    answers: [
      { text: 'один', isRight: false },
      { text: 'два', isRight: false },
      { text: 'МАС-адрес не используется', isRight: false },
      { text: 'три', isRight: false },
      { text: 'четыре', isRight: false },
    ],
  },
  {
    question: 'К какому уровню ISO/OSI относится протокол SMTP?',
    answers: [
      { text: 'физический', isRight: false },
      { text: 'сетевой', isRight: false },
      { text: 'транспортный', isRight: false },
      { text: 'канальный', isRight: false },
      { text: 'прикладной', isRight: false },
    ],
  },
  {
    question: 'Какой стек технологий поддерживается в современных ОС',
    answers: [
      { text: 'ВОЛС', isRight: false },
      { text: 'ЭМВОС', isRight: false },
      { text: 'OSI/ISO', isRight: false },
      { text: 'NCP', isRight: false },
      { text: 'TCP/IP', isRight: false },
    ],
  },
  {
    question: 'Канальный уровень модели OSI служит для:',
    answers: [
      {
        text: 'представления битов данных в виде электрических сигналов',
        isRight: false,
      },
      {
        text: 'согласования скоростей передачи и приема информации',
        isRight: false,
      },
      {
        text: 'передачи информации между двумя сетевыми процессами',
        isRight: false,
      },
      { text: 'управления доступом к разделяемой среде', isRight: false },
      { text: 'маршрутизации пакетов', isRight: false },
    ],
  },
  {
    question:
      'Тип сетевой топологии, в которой рабочие станции расположены вдоль одного участка кабеля, называемого сегментом',
    answers: [
      { text: 'общая шина', isRight: false },
      { text: 'кольцо', isRight: false },
      { text: 'звезда', isRight: false },
      { text: 'смешанная', isRight: false },
      { text: 'дерево', isRight: false },
    ],
  },
  {
    question: 'Протокол HTTP служит для:',
    answers: [
      { text: 'передачи файлов', isRight: false },
      { text: 'коммутация участков', isRight: false },
      { text: 'передачи гипертекста', isRight: false },
      { text: 'защиты информации', isRight: false },
      { text: 'управления передачи сообщениями', isRight: false },
    ],
  },
  {
    question: 'Отличительной чертой кодирования сигнала методом NRZ является',
    answers: [
      { text: 'наличие возврата уровня сигнала к 0', isRight: false },
      { text: 'самосинхронизация', isRight: false },
      { text: 'отсутствие возврата уровня сигнала к 0', isRight: false },
      { text: 'кодирование битов перепадами уровня сигнала', isRight: false },
      { text: 'короткое расстояние передачи сигнала', isRight: false },
    ],
  },
  {
    question: 'VLAN – это',
    answers: [
      { text: 'один из протоколов прикладного уровня', isRight: false },
      { text: 'разновидность динамической маршрутизации', isRight: false },
      {
        text: 'серверная часть DSL, размещается на стороне провайдера',
        isRight: false,
      },
      { text: 'виртуальная локальная сеть', isRight: false },
      { text: 'то же самое, что VPN', isRight: false },
    ],
  },
  {
    question:
      'Как называется технология, которая позволяет соединит несколько локальных, физически разнесенных сетей в одну через общедоступную сеть Интернет :',
    answers: [
      { text: 'NAT', isRight: false },
      { text: 'ATM', isRight: false },
      { text: 'Fame relay', isRight: false },
      { text: 'VPN', isRight: false },
      { text: 'VLAN', isRight: false },
    ],
  },
  {
    question:
      'Какой из перечисленных протоколов не является протоколом прикладного уровня:',
    answers: [
      { text: 'POP3', isRight: false },
      { text: 'UDP', isRight: false },
      { text: 'IMAP', isRight: false },
      { text: 'HTTP', isRight: false },
      { text: 'FTP', isRight: false },
    ],
  },
  {
    question: 'Что такое SMTP?',
    answers: [
      {
        text: 'Secure Mail Transfer Protocol - протокол MTP, инкапсулированный в SSL',
        isRight: false,
      },
      {
        text: 'Secure Mail Transfer Protocol - протокол MTP, инкапсулированный в TLS',
        isRight: false,
      },
      {
        text: 'Secure Management TCP-network Protocol - протокол управления TCP-сетями',
        isRight: false,
      },
      {
        text: 'Simple Message Transfer Protocol - упрощенный протокол передачи сообщений, более легкий в реализации, чем протокол MTP',
        isRight: false,
      },
      {
        text: 'Simple Mail Transfer Protocol - простой протокол передачи почты',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Тип DNS-запроса, при котором клиент сам опрашивает DNS-сервера по очереди, называется',
    answers: [
      { text: 'Рекурсивный', isRight: false },
      { text: 'Периодический', isRight: false },
      { text: 'Итеративный', isRight: false },
      { text: 'Смешанный', isRight: false },
      { text: 'Обратный', isRight: false },
    ],
  },
  {
    question: 'Брандмауэр (межсетевой экран)',
    answers: [
      {
        text: 'позволяет предотвращать несанкционированные изменения в компьютере, обеспечивает защиту, запрашивая разрешение перед совершением потенциально опасных для компьютера действий',
        isRight: false,
      },
      {
        text: 'может регулярно проверять наличие обновлений и автоматически их устанавливать',
        isRight: false,
      },
      {
        text: 'защищает компьютер, предотвращает несанкционированный доступ к нему из сети',
        isRight: false,
      },
      { text: 'автоматические устанавливает обновления', isRight: false },
      {
        text: 'показывает текущее состояние защиты компьютера и рекомендует меры по усилению безопасности',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Какой вид трансляции позволяет преобразовывать несколько внутренних адресов в один внешний',
    answers: [
      { text: 'MAC-IP', isRight: false },
      { text: 'PAT', isRight: false },
      { text: 'Static NAT', isRight: false },
      { text: 'NAT', isRight: false },
      { text: 'Point', isRight: false },
    ],
  },
  {
    question: 'IPv4-адреса:',
    answers: [
      {
        text: 'состоят из 4-х октетов и служат для идентификации хостов на сетевом уровне',
        isRight: false,
      },
      {
        text: 'состоят из 6-и октетов и служат для идентификации хостов на канальном уровне',
        isRight: false,
      },
      {
        text: 'состоят из 8-х октетов и служат для идентификации хостов на сетевом уровне',
        isRight: false,
      },
      {
        text: 'состоят из 4-х октетов и служат для идентификации хостов на физическом уровне',
        isRight: false,
      },
      {
        text: 'состоят из 16 октетов и служат для идентификации хостов на сетевом уровне',
        isRight: false,
      },
    ],
  },
  {
    question: 'Какое из описаний сигнала в сети является наилучшим?',
    answers: [
      { text: 'усиление данных', isRight: false },
      { text: 'преобразование команд', isRight: false },
      { text: 'преобразование данных', isRight: false },
      {
        text: 'электрические или оптические импульсы, кодирующие данные',
        isRight: false,
      },
      { text: 'официально установленные правила и процедуры', isRight: false },
    ],
  },
  {
    question:
      'Как называется вид связи, при котором информация передается только в одном направлении?',
    answers: [
      { text: 'дуплексный', isRight: false },
      { text: 'симплексный', isRight: false },
      { text: 'полудуплексный', isRight: false },
      { text: 'прямой', isRight: false },
      { text: 'обратный', isRight: false },
    ],
  },
  {
    question:
      'Маршрутизатор с технологией «статический NAT» решает, что TCP-пакет адресован узлу в локальной сети, а не самому маршрутизатору, если:',
    answers: [
      {
        text: 'IP-адрес узла получателя является адресом локальной сети, а не глобальной сети',
        isRight: false,
      },
      {
        text: 'Значение порта получателя меньше максимального разрешённого значения для внутренних портов маршрутизатора',
        isRight: false,
      },
      {
        text: 'IP-адрес узла получателя присутствует в списке подменяемых адресов',
        isRight: false,
      },
      {
        text: 'IP-адрес узла отправителя присутствует в таблице маршрутизации',
        isRight: false,
      },
      {
        text: 'Значение порта получателя больше максимального разрешённого значения для внутренних портов маршрутизатора',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Какой из перечисленных протоколов не является протоколом прикладного уровня:',
    answers: [
      { text: 'IMAP', isRight: false },
      { text: 'TCP', isRight: false },
      { text: 'POP3', isRight: false },
      { text: 'SMTP', isRight: false },
      { text: 'FTP', isRight: false },
    ],
  },
  {
    question:
      'Какой командой в ОС Windows можно просмотреть конфигурацию IP- адресов, выданных DHCP-сервером:',
    answers: [
      { text: 'ping', isRight: false },
      { text: 'tracert', isRight: false },
      { text: 'route', isRight: false },
      { text: 'ipconfig', isRight: false },
      { text: 'netstat', isRight: false },
    ],
  },
  {
    question:
      'Выберите название протокола, который обеспечивает надёжную доставку, используя механизм подтверждений и повторных передач потерянных или повреждённых данных:',
    answers: [
      { text: 'IP', isRight: false },
      { text: 'UDP', isRight: false },
      { text: 'ICMP', isRight: false },
      { text: 'TCP', isRight: false },
      { text: 'ARP', isRight: false },
    ],
  },
  {
    question: 'Основным протоколом при пользовании услуг WWW является:',
    answers: [
      { text: 'FTP', isRight: false },
      { text: 'DHCP', isRight: false },
      { text: 'TELNET', isRight: false },
      { text: 'HTTP', isRight: false },
      { text: 'SMTP', isRight: false },
    ],
  },
  {
    question:
      'Следующие основные методы протокола HTTP являются небезопасными и не идемпотентными:',
    answers: [
      { text: 'POST, PUT, DELETE', isRight: false },
      { text: 'GET, PUT, DELETE, POST', isRight: false },
      { text: 'GET, HEAD', isRight: false },
      { text: 'POST', isRight: false },
      { text: 'PUT, DELETE', isRight: false },
    ],
  },
  {
    question:
      'Выберите название протокола, который обеспечивает нумерацию отправляемых данных для упорядоченной сборки их на стороне получателя.',
    answers: [
      { text: 'ARP', isRight: false },
      { text: 'ICMP', isRight: false },
      { text: 'UDP', isRight: false },
      { text: 'TCP', isRight: false },
      { text: 'IP', isRight: false },
    ],
  },
  {
    question:
      'Тип DNS-запроса, при котором клиент отправляет запрос одному серверу, тот отправляет запрос другому серверу и так далее по цепочке, пока не будет достигнут конечный DNS-сервер, называется',
    answers: [
      { text: 'Периодический', isRight: false },
      { text: 'Рекурсивный', isRight: false },
      { text: 'Итеративный', isRight: false },
      { text: 'Смешанный', isRight: false },
      { text: 'Обратный', isRight: false },
    ],
  },
  {
    question:
      'Выберите пункт, наиболее полно отражающий назначение протокола POP3:',
    answers: [
      { text: 'Одноранговое взаимодействие «точка-точка»', isRight: false },
      {
        text: 'Извлечение электронной почты по принципу «загрузи-и-удали»',
        isRight: false,
      },
      {
        text: 'Доступ к почтовому ящику с возможностью управления перемещением и хранением сообщений на сервере',
        isRight: false,
      },
      { text: 'Отправка электронной почты', isRight: false },
      { text: 'Приём и отправка электронной почты', isRight: false },
    ],
  },
  {
    question:
      'Выбирете название протокола, который обеспечивает нумерацию отправляемых пакетов данных для упорядоченной сборки их на стороне получателя:',
    answers: [
      { text: 'ICMP', isRight: false },
      { text: 'UDP', isRight: false },
      { text: 'TCP', isRight: false },
      { text: 'ARP', isRight: false },
      { text: 'IP', isRight: false },
    ],
  },
  {
    question:
      'Эталонная модель OSI является многоуровневой. Какое из положений неправильно характеризует причину многоуровневости модели?',
    answers: [
      {
        text: 'многоуровневая модель стандартизирует интерфейсы',
        isRight: false,
      },
      {
        text: 'многоуровневая модель дает возможность разработчикам сконцентрировать усилия на более специализированных направлениях',
        isRight: false,
      },
      {
        text: 'многоуровневая модель предотвращает влияние изменений в одной области на другие области',
        isRight: false,
      },
      {
        text: 'многоуровневая модель имеет влияние в одной области на другие области',
        isRight: false,
      },
      { text: 'многоуровневая модель увеличивает сложность', isRight: false },
    ],
  },
  {
    question:
      'Какой уровень обеспечивает интерфейс между процессами и сетью, устанавливает логические каналы между процессами и обеспечивает передачу по этим каналам информационных блоков?',
    answers: [
      { text: 'физический', isRight: false },
      { text: 'сетевой', isRight: false },
      { text: 'канальный', isRight: false },
      { text: 'сеансовый', isRight: false },
      { text: 'транспортный', isRight: false },
    ],
  },
  {
    question:
      'Какой протокол предназначен для передачи гипертекста и используется по умолчанию 80-ый порт сервера',
    answers: [
      { text: 'FTP', isRight: false },
      { text: 'HTTP', isRight: false },
      { text: 'DNS', isRight: false },
      { text: 'DHCP', isRight: false },
      { text: 'SMTP', isRight: false },
    ],
  },
  {
    question:
      'Какие значения подменяются при передаче TCP-пакета из глобальной сети в локальную сеть через маршрутизатор с технологией “динамический NAT” (PAT):',
    answers: [
      { text: 'IP-адрес получателя', isRight: false },
      { text: 'IP-адрес отправителя и MAC-адрес отправителя', isRight: false },
      { text: 'IP-адрес отправителя и порт отправителя', isRight: false },
      { text: 'IP-адрес получателя и порт получателя', isRight: false },
      { text: 'IP-адрес отправителя', isRight: false },
    ],
  },
  {
    question:
      'Какой адрес использует сетевой адаптер при принятии решения о приеме кадров?',
    answers: [
      { text: 'MAC-адрес источника', isRight: false },
      { text: 'MAC-адрес назначения', isRight: false },
      { text: 'IP-адрес назначения', isRight: false },
      { text: 'IP-адрес источника', isRight: false },
      { text: 'IP-адрес', isRight: false },
    ],
  },
  {
    question:
      'Следующие основные методы протокола НТТР являются небезопасными и не идемпотентными:',
    answers: [
      { text: 'РОSТ, РОТ, РЕЕТЕ', isRight: false },
      { text: 'POST', isRight: false },
      { text: 'GET, PUT, DELETE, POST', isRight: false },
      { text: 'GET, HEAD', isRight: false },
      { text: 'PUT, DELETE', isRight: false },
    ],
  },
  {
    question:
      'Передача нескольких потоков данных по одному каналу связи (уплотнение канала) называется',
    answers: [
      { text: 'демультиплексирование', isRight: false },
      { text: 'проверка контрольной суммы', isRight: false },
      { text: 'модуляция', isRight: false },
      { text: 'мультиплексирование', isRight: false },
      { text: 'сжатие', isRight: false },
    ],
  },
  {
    question:
      'Какой протокол позволяет определить MAC-адрес узла по его IP-адресу:',
    answers: [
      { text: 'IPX', isRight: false },
      { text: 'ARP', isRight: false },
      { text: 'IP', isRight: false },
      { text: 'ICMP', isRight: false },
      { text: 'RARP', isRight: false },
    ],
  },
  {
    question:
      'Процесс определения (оптимального) пути доступа к объектам (компьютерам) сети',
    answers: [
      { text: 'маршрутизация', isRight: false },
      { text: 'трафик', isRight: false },
      { text: 'маршрут', isRight: false },
      { text: 'рабочая группа', isRight: false },
      { text: 'туннель', isRight: false },
    ],
  },
  {
    question: 'Какой тип записи DNS хранит соответствие имени адресу IPv6?',
    answers: [
      { text: 'AAAA', isRight: false },
      { text: 'A', isRight: false },
      { text: 'CNAME', isRight: false },
      { text: 'MX', isRight: false },
      { text: 'NS', isRight: false },
    ],
  },
  {
    question: 'Укажите какой топологии не существует:',
    answers: [
      { text: 'дерево', isRight: false },
      { text: 'кольцо', isRight: false },
      { text: 'шина', isRight: false },
      { text: 'снежинка', isRight: false },
      { text: 'морской узел', isRight: false },
    ],
  },
  {
    question:
      'Какой тип записи DNS хранит соответствие имени и почтового сервера домена:',
    answers: [
      { text: 'CNAME', isRight: false },
      { text: 'MX', isRight: false },
      { text: 'A', isRight: false },
      { text: 'NS', isRight: false },
      { text: 'AAAA', isRight: false },
    ],
  },
  {
    question:
      'Какое из перечисленных устройств восстанавливает амплитуду аналогового сигнала?',
    answers: [
      { text: 'маршрутизатор (router)', isRight: false },
      { text: 'мост (bridge)', isRight: false },
      { text: 'усилитель', isRight: false },
      { text: 'концентратор (hub)', isRight: false },
      { text: 'коммутатор (switch)', isRight: false },
    ],
  },
  {
    question: 'К какому уровню ISO/OSI относится протокол NRZ?',
    answers: [
      { text: 'прикладной', isRight: false },
      { text: 'канальный', isRight: false },
      { text: 'транспортный', isRight: false },
      { text: 'сетевой', isRight: false },
      { text: 'физический', isRight: false },
    ],
  },
  {
    question: 'Физический уровень модели OSI служит для:',
    answers: [
      {
        text: 'представления битов данных в виде электрических или световых сигналов',
        isRight: false,
      },
      { text: 'маршрутизация пакетов', isRight: false },
      { text: 'управление доступом к разделяемой среде', isRight: false },
      {
        text: 'передачи информации между двумя сетевыми процессами',
        isRight: false,
      },
      {
        text: 'создания барьеров на пути нежелательного трафика',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Принцип работы какого устройства основывается на заполнении логической матрицы МАС-адресами в ассоциативной памяти устройства?',
    answers: [
      { text: 'мост.', isRight: false },
      { text: 'туннель', isRight: false },
      { text: 'маршрутизатор', isRight: false },
      { text: 'концентратор', isRight: false },
      { text: 'коммутатор', isRight: false },
    ],
  },
  {
    question:
      'Какие значения подменяются при передаче ТСР-пакета из глобальной сети в локальную сеть через маршрутизатор с технологией «статический NAT»;',
    answers: [
      { text: 'IP-адрес получателя и порт получателя', isRight: false },
      { text: 'IP-адрес получателя', isRight: false },
      { text: 'IP-адрес отправителя', isRight: false },
      { text: 'IP-адрес получателя и МАС-адрес получателя', isRight: false },
      { text: 'IP-адрес отправителя и порт отправителя', isRight: false },
    ],
  },
  {
    question: 'К какому уровню ISO/OSI относится протокол UDP?',
    answers: [
      { text: 'транспортный', isRight: false },
      { text: 'сетевой', isRight: false },
      { text: 'представительный', isRight: false },
      { text: 'физический', isRight: false },
      { text: 'канальный', isRight: false },
    ],
  },
  {
    question: 'Отличительной чертой кодирования сигнала методом NRZ является',
    answers: [
      { text: 'короткое расстояние передачи сигнала', isRight: false },
      { text: 'кодирование битов перепадами уровня сигнала', isRight: false },
      { text: 'самосинхронизация', isRight: false },
      { text: 'наличие возврата уровня сигнала к 0', isRight: false },
      { text: 'отсутствие возврата уровня сигнала к 0', isRight: false },
    ],
  },
  {
    question:
      'Какой из перечисленных протоколов является протоколом доступа к почтовому ящику с возможностью управления перемещением и хранением сообщений на сервере:',
    answers: [
      { text: 'SMTP', isRight: false },
      { text: 'HTTP', isRight: false },
      { text: 'РОРЗ', isRight: false },
      { text: 'FTP', isRight: false },
      { text: 'IMAP', isRight: false },
    ],
  },
  {
    question: 'К какому уровню ISO/OSI относится протокол РОРЗ?',
    answers: [
      { text: 'физический', isRight: false },
      { text: 'сетевой', isRight: false },
      { text: 'канальный', isRight: false },
      { text: 'прикладной', isRight: false },
      { text: 'транспортный', isRight: false },
    ],
  },
  {
    question:
      'Какой из способов обновления данных веб-сайта по протоколу НТТР характеризуется: высокой частотой обновления данных (режим реального времени); низким потреблением полосы пропускания канала связи (заголовки НТТР отсутствуют при передаче данных); передачей в одном направлении (от сервера клиенту):',
    answers: [
      { text: 'Потоковая передача (Comet Streaming)', isRight: false },
      { text: 'Веб-гнездо (Web Socket)', isRight: false },
      { text: 'Полное обновление страницы', isRight: false },
      { text: 'Периодический опрос (Ajax Polling)', isRight: false },
      { text: 'Долгий опрос (Comet Long Polling)', isRight: false },
    ],
  },
  {
    question:
      'Какой командой можно просмотреть содержимое ARP- таблицы, которую узел ведет в памяти для уменьшения широковещательных рассылок, используемых ARP-протокола:',
    answers: [
      { text: 'ipconfig /all', isRight: false },
      { text: 'ping', isRight: false },
      { text: 'getmac', isRight: false },
      { text: 'netstat -a', isRight: false },
      { text: 'arp -a', isRight: false },
    ],
  },
  {
    question:
      'Выберите пункт, наиболее полно отражающий назначение протокола ІМАР:',
    answers: [
      {
        text: 'Доступ к почтовому ящику с возможностью управления перемещением и хранением сообщений на сервере',
        isRight: false,
      },
      {
        text: 'Извлечение электронной почты по принципу «загрузи-и-удали>>>',
        isRight: false,
      },
      { text: 'Одноранговое взаимодействие «точка-точка»', isRight: false },
      { text: 'Приём и отправка электронной почты', isRight: false },
      { text: 'Отправка электронной почты', isRight: false },
    ],
  },
  {
    question: 'К какому уровню ISO/OSI относится протокол ЅЅН?',
    answers: [
      { text: 'прикладной', isRight: false },
      { text: 'канальный', isRight: false },
      { text: 'транспортный', isRight: false },
      { text: 'физический', isRight: false },
      { text: 'сетевой', isRight: false },
    ],
  },
  {
    question:
      'Что характеризует обновление данных веб-сайта по протоколу HTTP в режиме «потоковая передача» (Comet Streaming):',
    answers: [
      {
        text: 'Высокая частота обновления данных (режим реального времени), низкое потребление полосы пропускания канала связи (заголовки HTTP отсутствуют при передаче данных), передача данных в одном направлении (от сервера к клиенту);',
        isRight: false,
      },
      {
        text: 'Передача данных в одном направлении (от сервера к клиенту), среднее потребление полосы пропускания канала связи (заголовки HTTP присутствуют при передаче данных);',
        isRight: false,
      },
      {
        text: 'Передача данных в одном направлении (от сервера к клиенту), низкая частота обновления данных (отсутствует режим реального времени);',
        isRight: false,
      },
      {
        text: 'Высокая частота обновления данных (режим реального времени), среднее потребление полосы пропускания канала связи (заголовки HTTP присутствуют при передаче данных);',
        isRight: false,
      },
      {
        text: 'Низкое потребление полосы канала связи (заголовки HTTP отсутствуют при передаче данных), дуплексная передача обновляемых данных между сервером и клиентов.',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Выберите название протокола, который устанавливает соединение и создает сеанс обмена данными между двумя сетевыми процессами, работающих на разных компьютерах:',
    answers: [
      { text: 'TCP', isRight: false },
      { text: 'ICMP', isRight: false },
      { text: 'ARP', isRight: false },
      { text: 'IP', isRight: false },
      { text: 'UDP', isRight: false },
    ],
  },
  {
    question:
      'К какому уровню ISO/OSI относится Манчестерский метод кодирования цифровых сигналов?',
    answers: [
      { text: 'сетевой;', isRight: false },
      { text: 'канальный;', isRight: false },
      { text: 'транспортный;', isRight: false },
      { text: 'прикладной;', isRight: false },
      { text: 'физический', isRight: false },
    ],
  },
  {
    question: 'Интернет - это:',
    answers: [
      { text: 'отраслевая сеть', isRight: false },
      { text: 'локальная сеть', isRight: false },
      { text: 'муниципальная', isRight: false },
      { text: 'региональная', isRight: false },
      { text: 'глобальная сеть', isRight: false },
    ],
  },
  {
    question: 'Какую основную функцию выполняет сервер DNS?',
    answers: [
      { text: 'поиск информации в сети INTERNET', isRight: false },
      { text: 'преобразование имен доменов в IP-адреса', isRight: false },
      { text: 'хранение IP-адресов компаний и организаций', isRight: false },
      { text: 'время повторной передачи ошибочного IP-адреса', isRight: false },
      { text: 'хранение информации в сети INTERNET', isRight: false },
    ],
  },
  {
    question:
      'Какой тип NAT требует наличия нескольких глобальных IP-адресов для одновременного доступа в глобальную сеть несколькими узлами из локальной сети?',
    answers: [
      { text: 'динамический NAT (PAT)', isRight: false },
      { text: 'PPTP', isRight: false },
      { text: 'WAN', isRight: false },
      { text: 'статический NAT', isRight: false },
      { text: 'L2TP', isRight: false },
    ],
  },
  {
    question:
      'Укажите сетевое оборудование, которое в своей работе реализует функции 1-ого (физического), 2-го (канального) уровней модели OSI?',
    answers: [
      { text: 'маршрутизатор', isRight: false },
      { text: 'усилитель', isRight: false },
      { text: 'мост', isRight: false },
      { text: 'концентратор', isRight: false },
      { text: 'коммутатор', isRight: false },
    ],
  },
  {
    question:
      'Какое из приведенных ниже описаний канального уровня эталонной модели OSI является наиболее исчерпывающим?',
    answers: [
      { text: 'обеспечивает услуги транспортным процессам', isRight: false },
      { text: 'передает данные другим уровням', isRight: false },
      { text: 'обеспечивает услуги прикладным процессам', isRight: false },
      {
        text: 'принимает слабый сигнал, очищает его, усиливает и отправляет дальше в сеть',
        isRight: false,
      },
      {
        text: 'обеспечивает надежную передачу данных по физическому каналу',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Какие значения подменяются при передаче UDP-пакета из локальной сети в глобальную сеть через маршрутизатор с технологией «динамический NAT» (PAT):',
    answers: [
      { text: 'IP-адрес отправителя', isRight: false },
      { text: 'IP-адрес получателя и порт получателя', isRight: false },
      { text: 'IP-адрес получателя', isRight: false },
      { text: 'IP-адрес отправителя и порт отправителя', isRight: false },
      { text: 'IP-адрес отправителя и MAC-адрес отправителя', isRight: false },
    ],
  },
  {
    question:
      'Что характеризует обновление данных веб-сайта по протоколу НТТР в режиме «потоковая передача» (Comet Streaming):',
    answers: [
      { text: 'Всё из перечисленного', isRight: false },
      {
        text: 'Невысокая частота обновления данных (отсутствие режима реального времени)',
        isRight: false,
      },
      {
        text: 'Отсутствие заголовков НТТР при передаче данных',
        isRight: false,
      },
      {
        text: 'Дуплексная передача обновляемых данных между сервером и клиентом',
        isRight: false,
      },
      { text: 'Высокая нагрузка на веб-сервер', isRight: false },
    ],
  },
  {
    question:
      'DNS-запрос, по которому DNS-клиент сам последовательно делает запросы на другие серверы, называется называется:',
    answers: [
      { text: 'прямым', isRight: false },
      { text: 'последовательным', isRight: false },
      { text: 'итеративным', isRight: false },
      { text: 'рекурсивным', isRight: false },
      { text: 'обратным', isRight: false },
    ],
  },
];
