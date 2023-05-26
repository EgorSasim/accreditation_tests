import { Question } from 'src/app/common/questions/questions.typings';

export const YAP: Question[] = [
  {
    question: '1. Формальный язык — это:',
    answers: [
      {
        text: 'множество лексем, построенных из символов некоторого алфавита, применяемых для обозначения переменных',
        isRight: false,
      },
      {
        text: 'язык программирования, который не может быть применён для решения реальных задач, но имеет теоретическую ценность',
        isRight: false,
      },
      {
        text: 'язык программирования, в котором используются максимально краткие обозначения для большинства его конструкций',
        isRight: false,
      },
      {
        text: 'множество строк над некоторым алфавитом, удовлетворяющих правилам некоторой грамматики',
        isRight: true,
      },
      {
        text: 'язык программирования, программы на котором выполняются не напрямую процессором, а т.н. «виртуальной машиной»',
        isRight: false,
      },
    ],
  },
  {
    question: '2. Токен (в теории трансляторов) — это:',
    answers: [
      {
        text: 'структура данных, содержащая информация о выделенной транслятором лексеме, в т.ч. о классе этой лексемы',
        isRight: true,
      },
      { text: 'правило подстановки в грамматике', isRight: false },
      {
        text: 'часть программы, в которой под данным идентификатором подразумевается данный элемент программы',
        isRight: false,
      },
      {
        text: 'структура данных, представляющая в памяти транслятора структуру анализируемой программы',
        isRight: false,
      },
      {
        text: 'элемент грамматики, который не может быть раскрыт в более сложную конструкцию',
        isRight: false,
      },
    ],
  },
  {
    question:
      '3. Если среди int, short int, long int, char и long long int размеры всех типов различны, то по возрастанию размеров четвёртым будет:',
    answers: [
      { text: 'char', isRight: false },
      { text: 'long int', isRight: true },
      { text: 'int', isRight: false },
      { text: 'long long int', isRight: false },
      { text: 'short int', isRight: false },
    ],
  },
  {
    question:
      '4. Выберите конструкцию языка С, которая задаёт другой тип данных по сравнению с остальными:',
    answers: [
      { text: 'long int', isRight: false },
      { text: 'signed long long', isRight: true },
      { text: 'signed long', isRight: false },
      { text: 'long', isRight: false },
      { text: 'signed long int', isRight: false },
    ],
  },
  {
    question:
      '5. Побочным эффектом операции постфиксного декремента в языке С является:',
    answers: [
      {
        text: 'уменьшение значения операнда на 1 после остальных вычислений',
        isRight: false,
      },
      {
        text: 'уменьшение значения операнда на 1 до остальных вычислений',
        isRight: false,
      },
      {
        text: 'запись в операнд значения, которое на 1 меньше его первоначального значения',
        isRight: true,
      },
      { text: 'вычисление значения операнда', isRight: false },
      {
        text: 'постфиксный декремент в языке С — это оператор, а не операция',
        isRight: false,
      },
    ],
  },
  {
    question:
      '6. Выберите описание функции соответствующее прототипу float func(int а, double b, ...)',
    answers: [
      {
        text: 'функция, возвращающая значение типа float и принимающая обязательные параметры а типа int и b типа double, а также произвольное количество параметров любого типа',
        isRight: true,
      },
      {
        text: 'функция, возвращающая значение типа float и принимающая обязательные параметры а типа int и b типа double, а также произвольное количество параметров типа',
        isRight: false,
      },
      {
        text: 'функция, возвращающая значение типа float и принимающая обязательные параметры а типа int и b типа double, а также дополнительные параметры в количестве, равном значению параметра а',
        isRight: false,
      },
      { text: 'приведённый прототип содержит ошибку', isRight: false },
      {
        text: 'функция, возвращающая значение типа float и принимающая обязательные параметры а типа int и b типа double, а также один дополнительный параметр произвольного типа',
        isRight: false,
      },
    ],
  },
  {
    question:
      '7. Результатом вычисления операции «запятая» в языке С является:',
    answers: [
      { text: '«запятая» в языке С не может быть операцией', isRight: false },
      { text: 'запись значения в левый операнд', isRight: false },
      { text: 'запись значения в правый операнд', isRight: false },
      { text: 'значение правого операнда', isRight: true },
      { text: 'значение левого операнда', isRight: false },
    ],
  },
  {
    question:
      '8. Если среди int, short int, long int, char и long long int размеры всех типов различны, то по убыванию размеров вторым будет:',
    answers: [
      { text: 'char', isRight: false },
      { text: 'long long int', isRight: false },
      { text: 'long int', isRight: true },
      { text: 'short int', isRight: false },
      { text: 'int', isRight: false },
    ],
  },
  {
    question:
      '9. Результатом вычисления операции постфиксного инкремента в языке С является:',
    answers: [
      {
        text: 'увеличение значения операнда на 1 после остальных вычислений',
        isRight: false,
      },
      {
        text: 'значение, которое на 1 больше, чем значение операнда',
        isRight: false,
      },
      {
        text: 'постфиксный инкремент в языке С — это оператор, а не операция',
        isRight: false,
      },
      { text: 'значение операнда', isRight: true },
      {
        text: 'увеличение значения операнда на 1 до остальных вычислений',
        isRight: false,
      },
    ],
  },
  {
    question:
      '10. Каким будет результат выполнения следующего фрагмента кода на языке С?(x = 42; y=x++ + 5)',
    answers: [
      { text: 'х=43, у=48', isRight: false },
      { text: 'в коде есть случай неопределённого поведения', isRight: false },
      { text: 'х=43, у=47', isRight: true },
      { text: 'х= 42, у=48', isRight: false },
      { text: 'x= 42, у=47', isRight: false },
    ],
  },
  {
    question: '11. Инструкция CWD',
    answers: [
      {
        text: 'расширяет значение в регистре АL до 4 байт и записывает его в АХ',
        isRight: false,
      },
      {
        text: 'расширяет значение в регистре АХ до 4 байт и записывает его в ЕАХ',
        isRight: false,
      },
      {
        text: 'расширяет значение в регистре АХ до 4 байт и записывает его в DХ: АХ',
        isRight: true,
      },
      {
        text: 'расширяет значение в регистре АL до 4 байт и записывает его в DL:АL',
        isRight: false,
      },
      {
        text: 'расширяет значение произвольного двухбайтового операнда до 4 байт и записывает его в операнд-приёмник',
        isRight: false,
      },
    ],
  },
  {
    question: '12. Инструкция MOVZX:',
    answers: [
      {
        text: 'копирует значение из регистра в регистр и обнуляет операнд-источник',
        isRight: false,
      },
      { text: 'выполняет знаковое расширение числа', isRight: false },
      { text: 'копирует значение в регистр ZХ', isRight: false },
      { text: 'выполняет беззнаковое расширение числа', isRight: true },
      {
        text: 'копирует данные из памяти по адресу DS:ST в память по адресу ЕS:DI',
        isRight: false,
      },
    ],
  },
  {
    question:
      '13. При сравнениях больше/меньше для знаковых чисел используются инструкции условного перехода:',
    answers: [
      { text: 'Jp/jm', isRight: false },
      { text: 'Jb/jm', isRight: false },
      { text: 'Ja/jb', isRight: false },
      { text: 'Jg/jl', isRight: true },
      { text: 'Js/jz', isRight: false },
    ],
  },
  {
    question: '14. Инструкция для умножения знаковых чисел называется:',
    answers: [
      { text: 'Mul', isRight: false },
      { text: 'Times', isRight: false },
      { text: 'Div', isRight: false },
      { text: 'Imul', isRight: true },
      { text: 'Mod', isRight: false },
    ],
  },
  {
    question: '15. Инструкция SHL:',
    answers: [
      { text: 'выполняет логический сдвиг влево', isRight: true },
      { text: 'выполняет логический сдвиг вправо', isRight: false },
      { text: 'выполняет арифметический сдвиг вправо', isRight: false },
      { text: 'выполняет циклический сдвиг влево', isRight: false },
      {
        text: 'выполняет расширенный циклический сдвиг влево через флаг СЕ',
        isRight: false,
      },
    ],
  },
  {
    question: '16. Видеоадаптер — это:',
    answers: [
      {
        text: 'устройство, преобразующее изображение на экране в видеопоток, который можно транслировать по сети',
        isRight: false,
      },
      {
        text: 'устройство, преобразующее графический образ в ОЗУ или памяти самого адаптера в форму, пригодную для вывода на экран',
        isRight: true,
      },
      {
        text: 'программное средство, обеспечивающее кодирование и декодирование видеозаписей',
        isRight: false,
      },
      {
        text: 'устройство, позволяющее преобразовывать видеосигнал HDMI в VGA и/или обратно',
        isRight: false,
      },
      {
        text: 'устройство, позволяющее перехватывать изображение с монитора',
        isRight: false,
      },
    ],
  },
  {
    question:
      '17. Префиксы REP/REPE/REPNE в своей работе используют и изменяют значение регистра:',
    answers: [
      { text: 'IP', isRight: false },
      { text: 'SP', isRight: false },
      { text: 'CL', isRight: false },
      { text: 'CX', isRight: true },
      { text: 'AX', isRight: false },
    ],
  },
  {
    question:
      '18. Какой из перечисленных регистров в большинстве соглашений вызова используется для возврата целочисленных значений из функций?',
    answers: [
      { text: '(E)SP', isRight: false },
      { text: '(E)SI', isRight: false },
      { text: '(E)AX', isRight: true },
      { text: '(E)BX', isRight: false },
      { text: '(E)IP', isRight: false },
    ],
  },
  {
    question: '19. Инструкция PUSHA:',
    answers: [
      { text: 'помещает в стек значение регистра FLAGS', isRight: false },
      { text: 'помещает в стек значение регистра АХ', isRight: false },
      {
        text: 'помещает в стек значения всех регистров общего назначения',
        isRight: true,
      },
      { text: 'помещает в стек значение регистра FS', isRight: false },
      { text: 'помещает в стек значение регистра SP', isRight: false },
    ],
  },
  {
    question: '20. Основная операция, выполняемая инструкцией SCASW:',
    answers: [
      { text: 'Рисование на экране', isRight: false },
      { text: 'Сравнение АL и байта по адресу DS:SI', isRight: false },
      {
        text: 'Сравнение АХ и слова (2 байта) по адресу DS:SI',
        isRight: false,
      },
      {
        text: 'Сравнение АХ и слова (2 байта) по адресу ES:DI',
        isRight: true,
      },
      { text: 'Сравнение АЕ и байта по адресу ES:DI', isRight: false },
    ],
  },
  {
    question:
      '21. Математическая абстракция, реализация которой является лексический анализатор:',
    answers: [
      { text: 'множество', isRight: false },
      { text: 'производная', isRight: false },
      { text: 'первообразная', isRight: false },
      { text: 'конечный автомат', isRight: true },
      { text: 'матрица', isRight: false },
    ],
  },
  {
    question:
      '22. Каким будет результат выполнения следующего фрагмента кода на языке С? (int х = 0; if (х = 0) printf(“then"); else printf(“else");',
    answers: [
      { text: 'Обе ветви оператора if будут проигнорированы', isRight: false },
      { text: 'Вывод текста «else»', isRight: true },
      { text: 'Вывод текста «then»', isRight: false },
      { text: 'Код содержит случай неопределённого поведения', isRight: false },
      { text: 'Код содержит ошибку и не будет скомпилирован', isRight: false },
    ],
  },
  {
    question:
      '23. Если среди int, short int, long int, char и long long int размеры всех типов различны, то по убыванию размеров пятым будет:',
    answers: [
      { text: 'char', isRight: true },
      { text: 'long int', isRight: false },
      { text: 'int', isRight: false },
      { text: 'long long int', isRight: false },
      { text: 'short int', isRight: false },
    ],
  },
  {
    question:
      '24. Результатом вычисления операции префиксного инкремента в языке С является:',
    answers: [
      {
        text: 'уменьшение значения операнда на 1 после остальных вычислений',
        isRight: false,
      },
      {
        text: 'значение, которое на 1 больше, чем значение операнда',
        isRight: true,
      },
      {
        text: 'префиксный декремент в языке С — это оператор, а не операция',
        isRight: false,
      },
      { text: 'значение операнда', isRight: false },
      {
        text: 'уменьшение значения операнда на 1 до остальных вычислений',
        isRight: false,
      },
    ],
  },
  {
    question: '25. Побитовая операция И в языке С обозначается:',
    answers: [
      { text: '~', isRight: false },
      { text: '&&', isRight: false },
      { text: '&', isRight: true },
      { text: '&=', isRight: false },
      { text: '|', isRight: false },
    ],
  },
  {
    question:
      '26. Каким будет результат выполнения следующего фрагмента кода на языке С? (int x = 45; if (45 == х || 1 == printf("1”)) printf("1");',
    answers: [
      { text: 'Не будет выведено ничего', isRight: false },
      { text: 'Код содержит ошибку и не будет скомпилирован', isRight: false },
      { text: 'Вывод текста «11»', isRight: false },
      { text: 'Код содержит случай неопределенного поведения', isRight: false },
      { text: 'Вывод текста “1”', isRight: true },
    ],
  },
  {
    question:
      '27. Класс хранения в языке C, позволяющий рекомендовать компилятору размещение локальной переменной в регистре общего назначения',
    answers: [
      { text: 'static', isRight: false },
      { text: 'extern', isRight: false },
      { text: 'local', isRight: false },
      { text: 'register', isRight: true },
      { text: 'auto', isRight: false },
    ],
  },
  {
    question:
      'Имеется следующий фрагмент кода на языке С: (int x =10; y=3; Результатом вычисления выражения x/y будет число:)',
    answers: [
      { text: 'NAN', isRight: false },
      {
        text: '(3), округленное для представления с конечным количеством знаков мантиссы',
        isRight: false,
      },
      { text: '1', isRight: false },
      { text: '3', isRight: true },
      { text: '(3)', isRight: false },
    ],
  },
  {
    question: 'Инструкция для деления знаковых чисел называется:',
    answers: [
      { text: 'split', isRight: false },
      { text: 'del', isRight: false },
      { text: 'idiv', isRight: true },
      { text: 'div', isRight: false },
      { text: 'mod', isRight: false },
    ],
  },
  {
    question: 'Инструкция CLC:',
    answers: [
      { text: 'обнуляет регистр CL', isRight: false },
      {
        text: 'расширяет значение в регистре CL и записывает его в СХ',
        isRight: false,
      },
      { text: 'устанавливает флаг CF в значение 1', isRight: false },
      { text: 'устанавливает флаг CF в значение 0', isRight: true },
      { text: 'обнуляет регистр сх', isRight: false },
    ],
  },
  {
    question:
      'Если перед выполнением в реальном режиме (real-address mode) строковой инструкции с префиксом повторения CX = 0, то:',
    answers: [
      { text: 'инструкция выполнится один раз', isRight: false },
      { text: 'инструкция выполнится 65536 раз', isRight: true },
      { text: 'инструкция выполнится 65535 раз', isRight: false },
      { text: 'инструкция не будет выполнена ни разу', isRight: false },
      { text: 'инструкция будет выполняться бесконечно', isRight: false },
    ],
  },
  {
    question:
      'Какая из перечисленных инструкций никогда не изменяет значений своих операндов?',
    answers: [
      { text: 'sub', isRight: false },
      { text: 'or', isRight: false },
      { text: 'mov', isRight: false },
      { text: 'and', isRight: false },
      { text: 'cmp', isRight: true },
    ],
  },
  {
    question: 'Инструкция SAR:',
    answers: [
      {
        text: 'выполняет расширенный циклический сдвиг вправо через флаг СЕ',
        isRight: false,
      },
      { text: 'выполняет арифметический сдвиг влево.', isRight: false },
      { text: 'выполняет арифметический сдвиг вправо.', isRight: true },
      { text: 'выполняет циклический сдвиг вправо.', isRight: false },
      { text: 'выполняет логический сдвиг влево', isRight: false },
    ],
  },
  {
    question:
      'Какая инструкция позволяет копировать значения между операндами равных размеров?',
    answers: [
      { text: 'mov', isRight: true },
      { text: 'sub', isRight: false },
      { text: 'copy', isRight: false },
      { text: 'assign', isRight: false },
      { text: 'add', isRight: false },
    ],
  },
  {
    question: 'Инструкция SBB :',
    answers: [
      {
        text: 'выполняет побитовый сдвиг с увеличение числа в меньшую сторону',
        isRight: false,
      },
      { text: 'записывает два байта в памяти по адресу ES:DI', isRight: false },
      {
        text: 'расширяет значения младшего бита АХ и записывает его в младший байт ВХ',
        isRight: false,
      },
      { text: 'выполняет вычитание с учетом значения флаг CF', isRight: true },
      {
        text: 'выполняет побитовый сдвиг с увеличением числа в большую сторону',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Какое из перечисленных утверждений об обработке прерываний в реальном режиме (real-address mode) НЕправильное?',
    answers: [
      {
        text: 'при вызове обработчика прерывания в стек помещаются значения регистров FLAGS, CS и IP',
        isRight: false,
      },
      {
        text: 'Если IF=0, обработка аппаратных прерываний не осуществляется',
        isRight: false,
      },
      {
        text: 'номер прерывания зависит от источника и/или причины прерывания',
        isRight: false,
      },
      {
        text: 'используя номер прерывания в качестве индекса в таблицу векторов прерываний, процессор определяет адрес обработчика прерывания',
        isRight: false,
      },
      {
        text: 'если IF = 1, обработка программных прерываний не осуществляется',
        isRight: true,
      },
    ],
  },
  {
    question: 'Побитовая операция ИЛИ в языке С обозначается:',
    answers: [
      { text: '||', isRight: false },
      { text: '&', isRight: false },
      { text: '|=', isRight: false },
      { text: '|', isRight: true },
      { text: '~', isRight: false },
    ],
  },
  {
    question:
      'Нисходящий метод синтаксического анализа, заключающейся в выборе на каждом этапе разбора единственной возможной продукции на основе информации из таблицы разбора:',
    answers: [
      { text: 'левая факторизация', isRight: false },
      { text: 'метод введения переменной состояния', isRight: false },
      { text: 'восходящий разбор', isRight: false },
      { text: 'метод рекурсивного спуска', isRight: false },
      { text: 'предиктивный анализ', isRight: true },
    ],
  },
  {
    question: 'Какие из формальных языков - самые простые?',
    answers: [
      { text: 'неконтекстные языки', isRight: false },
      { text: 'регулярные языки', isRight: true },
      { text: 'контекстно-зависимые языки', isRight: false },
      { text: 'контекстно-свободные языки', isRight: false },
      { text: 'неограниченный языки', isRight: false },
    ],
  },
  {
    question:
      'Имеется следующий фрагмент кода на языке С: ( int arr[4][3] = { {1}, {2}, {3}, {4} };) Этот фрагмент кода:',
    answers: [
      {
        text: 'объявляет двумерный массив arr, в котором элементы четырёх столбцов проинициализированы заданными значениями',
        isRight: false,
      },
      {
        text: 'программа с таким фрагментом кода не будет скомпилирована',
        isRight: false,
      },
      {
        text: 'объявляет двумерный массив arr, в котором элементы четырёх строк проинициализированы заданными значениями',
        isRight: false,
      },
      {
        text: 'объявляет двумерный массив arr, в котором элементы первого столбца проинициализированы заданными значениями, а остальные элементы равны 0',
        isRight: true,
      },
      {
        text: 'объявляет двумерный массив arr, в котором элементы первого столбца проинициализированы заданными значениями, а значения остальных элементов не определены',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Результатом вычисления операции постфиксного декремента в языке С является:',
    answers: [
      { text: 'значение операнда', isRight: true },
      {
        text: 'постфиксный декремент в языке С - это оператор, а не операция',
        isRight: false,
      },
      {
        text: 'значение, которое на 1 меньше, чем значение операнда',
        isRight: false,
      },
      {
        text: 'уменьшение значения операнда на 1 после остальных вычислений',
        isRight: false,
      },
      {
        text: 'уменьшение значения операнда на 1 до остальных вычислений',
        isRight: false,
      },
    ],
  },
  {
    question:
      'В языке С для обозначения типа, состоящего из полей различных типов, начинающихся с одного и того же места в памяти, применяется ключевое слово:',
    answers: [
      { text: 'class', isRight: false },
      { text: 'struct', isRight: false },
      { text: 'union', isRight: true },
      { text: 'record', isRight: false },
      { text: 'absolute', isRight: false },
    ],
  },
  {
    question:
      'Директива препроцессора языка С для отмены объявления символической константы или макроса:',
    answers: [
      { text: '#destroy', isRight: false },
      { text: '#undo', isRight: false },
      { text: '#delete', isRight: false },
      { text: '#undef', isRight: true },
      { text: 'у процессора языка С нет такой возможности', isRight: false },
    ],
  },
  {
    question: 'Функция стандартной библиотеки языка С для копирования строки:',
    answers: [
      { text: 'в стандартной библиотеки языка С', isRight: false },
      { text: 'strcmp', isRight: false },
      { text: 'strcpy', isRight: true },
      { text: 'strlen', isRight: false },
      { text: 'strmov', isRight: false },
    ],
  },
  {
    question: 'Операция разыменования указателя в языке С обозначается:',
    answers: [
      {
        text: 'такой операции в языке С нет, т.к. в нем разыменование указателей производится автоматически',
        isRight: false,
      },
      { text: '^', isRight: false },
      { text: '*', isRight: true },
      { text: '&', isRight: false },
      { text: '@', isRight: false },
    ],
  },
  {
    question:
      'Функции, машинный код которых подлежит подстановке в точку вызова, называется:',
    answers: [
      { text: 'typedef-функции', isRight: false },
      { text: 'inline-функции', isRight: true },
      { text: 'define-цункции', isRight: false },
      { text: 'volatile-функции', isRight: false },
      { text: 'анонимные-функции', isRight: false },
    ],
  },
  {
    question: 'В чём заключается ошибка в записи инструкции mov ax,bh?',
    answers: [
      {
        text: 'Хотя бы один операнд mov всегда должен быть операндом в памяти',
        isRight: false,
      },
      { text: 'Оба операнда одновременно являются регистрами', isRight: false },
      { text: 'Инструкция mov не может работать с регистрами', isRight: false },
      { text: 'Регистр АХ нельзя изменять напрямую', isRight: false },
      { text: 'Операнды имеют разные размеры', isRight: true },
    ],
  },
  {
    question:
      'Какого регистра общего назначения нет у процессоров архитектуры IA-32?',
    answers: [
      { text: 'dx', isRight: false },
      { text: 'ax', isRight: false },
      { text: 'ex', isRight: true },
      { text: 'bx', isRight: false },
      { text: 'cx', isRight: false },
    ],
  },
  {
    question:
      'Какая из перечисленных инструкций предназначена НЕ для обмена командами и данными с внешними устройствами?',
    answers: [
      { text: 'insb/insw', isRight: false },
      { text: 'in', isRight: false },
      { text: 'out', isRight: false },
      { text: 'int', isRight: true },
      { text: 'outsb/outsw', isRight: false },
    ],
  },
  {
    question:
      'Какой из перечисленных флагов влияет на обработку процессором аппаратных прерываний?',
    answers: [
      { text: 'ZF', isRight: false },
      { text: 'CF', isRight: false },
      { text: 'IF', isRight: true },
      { text: 'DF', isRight: false },
      { text: 'SF', isRight: false },
    ],
  },
  {
    question:
      'Значение какого сегментного регистра используется процессором при работе со стеком?',
    answers: [
      { text: 'DS', isRight: false },
      { text: 'CS', isRight: false },
      { text: 'FS', isRight: false },
      { text: 'SS', isRight: true },
      { text: 'ES', isRight: false },
    ],
  },
  {
    question: 'У инструкции DIV:',
    answers: [
      { text: '2 операнда', isRight: false },
      { text: '4 операнда', isRight: false },
      { text: 'нет операндов', isRight: false },
      { text: '1 операнд', isRight: true },
      { text: '3 операнда', isRight: false },
    ],
  },
  {
    question: 'Область видимости — это',
    answers: [
      {
        text: 'структура данных, содержащая информация о выделенной транслятором лексеме, в т.ч. о классе этой лексемы',
        isRight: false,
      },
      {
        text: 'часть программы, в которой под данным идентификатором подразумевается данный элемент программы',
        isRight: true,
      },
      {
        text: 'элемент грамматики, который не может быть раскрыт в более сложную конструкцию',
        isRight: false,
      },
      { text: 'правило подстановки в грамматике', isRight: false },
      {
        text: 'структура данных, представляющая в памяти транслятора структуру анализируемой программы',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Функция стандартной библиотеки языка C для записи произвольного блока данных в ранее открытый файл:',
    answers: [
      { text: 'fstore', isRight: false },
      { text: 'fwrite', isRight: true },
      {
        text: 'в стандартной библиотеке языка C нет такой функции',
        isRight: false,
      },
      { text: 'fsave', isRight: false },
      { text: 'fput', isRight: false },
    ],
  },
  {
    question:
      'Этап работы транслятора, заключающийся в уточнении смысла отдельных частей программы, в т.ч. работе с типами, областями видимости и т.п.:',
    answers: [
      { text: 'оптимизация', isRight: false },
      { text: 'генерация кода', isRight: false },
      { text: 'емантический анализ', isRight: true },
      { text: 'интаксический анализ', isRight: false },
      { text: 'ексический анализ', isRight: false },
    ],
  },
  {
    question: 'Логическая операция ИЛИ в языке C обозначается:',
    answers: [
      { text: '||', isRight: true },
      { text: '|', isRight: false },
      { text: '~', isRight: false },
      { text: '|=', isRight: false },
      { text: '&', isRight: false },
    ],
  },
  {
    question:
      'Макрос, который используется в функциях с переменным числом параметров для инициализации работы с «переменными параметрами»:',
    answers: [
      { text: 'va_start', isRight: true },
      { text: 'va_arg', isRight: false },
      {
        text: 'в языке C не поддерживаются функции с переменным числом параметров',
        isRight: false,
      },
      { text: 'va_list', isRight: false },
      { text: 'va_end', isRight: false },
    ],
  },
  {
    question:
      'В языке C модификатор const, использованный при объявлении переменной:',
    answers: [
      {
        text: 'запрещает изменение значения этой переменной в тексте программы',
        isRight: true,
      },
      {
        text: 'означает, что переменная должна быть размещена в постоянном запоминающем устройства (ПЗУ)',
        isRight: false,
      },
      {
        text: 'означает, что переменная должна всегда располагаться в одном и том же месте оперативной памяти',
        isRight: false,
      },
      {
        text: 'переменная не может быть объявлена с модификатором const',
        isRight: false,
      },
      {
        text: 'задаёт способ передачи этой переменной в качестве параметра функций',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Макрос, который используется в функциях с переменным числом параметров для получения значения очередного «переменного параметра»:',
    answers: [
      { text: 'a_list', isRight: false },
      { text: 'va_start', isRight: false },
      { text: 'va_end', isRight: false },
      {
        text: 'в языке C не поддерживаются функции с переменным числом параметров',
        isRight: false,
      },
      { text: 'va_arg', isRight: true },
    ],
  },
  {
    question: 'Минимальный размер типа char в языке C составляет…',
    answers: [
      { text: '16 бит', isRight: false },
      { text: '8 бит', isRight: true },
      { text: '9 бит', isRight: false },
      { text: '7 бит', isRight: false },
      { text: '15 бит', isRight: false },
    ],
  },
  {
    question:
      'Запись операции явного преобразования типов в языке C имеет вид:',
    answers: [
      { text: 'тип', isRight: false },
      { text: 'выражение(тип)', isRight: false },
      { text: 'тип(выражение)', isRight: false },
      { text: 'выражение -> тип', isRight: false },
      { text: '(тип)выражение', isRight: true },
    ],
  },
  {
    question:
      'Функция стандартной библиотеки языка C для определения длины строки:',
    answers: [
      { text: 'strcpy', isRight: false },
      { text: 'strlen', isRight: true },
      { text: 'strcmp', isRight: false },
      { text: 'strmov', isRight: false },
      {
        text: 'в стандартной библиотеке языка C нет такой функции',
        isRight: false,
      },
    ],
  },
  {
    question: 'Логическая операция И в языке C обозначается:',
    answers: [
      { text: '&', isRight: false },
      { text: '&=', isRight: false },
      { text: '|', isRight: false },
      { text: '&&', isRight: true },
      { text: '~', isRight: false },
    ],
  },
  {
    question:
      'Директива препроцессора языка C для объявления символических констант:',
    answers: [
      { text: '#create', isRight: false },
      { text: 'у препроцессора языка C нет такой возможности', isRight: false },
      { text: '#define', isRight: true },
      { text: '#const', isRight: false },
      { text: '#replace', isRight: false },
    ],
  },
  {
    question:
      'Если среди int, short int, long int, char и long long int размеры всех типов различны, то по возрастанию размеров пятым будет:',
    answers: [
      { text: 'short int', isRight: false },
      { text: 'int', isRight: false },
      { text: 'long long int', isRight: true },
      { text: 'char', isRight: false },
      { text: 'long int', isRight: false },
    ],
  },
  {
    question:
      'Вершиной стека в реальном режиме (real-address mode) считается элемент данных, расположенный по адресу:',
    answers: [
      { text: 'SS:SP', isRight: true },
      { text: 'ES:DI', isRight: false },
      { text: 'EIP', isRight: false },
      { text: 'DS:SI', isRight: false },
      { text: 'CS:IP', isRight: false },
    ],
  },
  {
    question:
      'В каком режиме процессоры архитектуры Intel IA-32 начинают работу в момент включения питания?',
    answers: [
      { text: 'IA-32e Mode', isRight: false },
      { text: 'System Management Mode', isRight: false },
      { text: 'Real-Address Mode', isRight: true },
      { text: 'Virtual-8086 Mode', isRight: false },
      { text: 'Protected Mode', isRight: false },
    ],
  },
  {
    question: 'Для помещения значения в стек используется инструкция:',
    answers: [
      { text: 'push', isRight: true },
      { text: 'pull', isRight: false },
      { text: 'retf', isRight: false },
      { text: 'pop', isRight: false },
      { text: 'iret', isRight: false },
    ],
  },
  {
    question: 'Флаг CF:',
    answers: [
      {
        text: 'включает/отключает обработку аппаратных прерываний',
        isRight: false,
      },
      { text: 'равен 1, если CX = 0, и наоборот', isRight: false },
      {
        text: 'влияет на преобразование чисел с расширением (увеличением разрядности)',
        isRight: false,
      },
      {
        text: 'становится равным 1 в случае переноса из/заёма в старший разряд при сложении вычитании',
        isRight: true,
      },
      {
        text: 'влияет на направление обработки строковых данных',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Инструкция LOOP для подсчёта количества оставшихся итераций использует регистр:',
    answers: [
      { text: 'AX', isRight: false },
      { text: 'IP', isRight: false },
      { text: 'SI', isRight: false },
      { text: 'CX', isRight: true },
      { text: 'FLAGS', isRight: false },
    ],
  },
  {
    question: 'Префиксы REPE и REPNE в своей работе используют значение флага:',
    answers: [
      { text: 'CF', isRight: false },
      { text: 'ZF', isRight: true },
      { text: 'SF', isRight: false },
      { text: 'IF', isRight: false },
      { text: 'DF', isRight: false },
    ],
  },
  {
    question: 'Обработчик прерывания — это:',
    answers: [
      {
        text: 'таблица в оперативной памяти, используемая для обработки прерываний',
        isRight: false,
      },
      { text: 'внешние устройства, подключённые к компьютеру', isRight: false },
      { text: 'процессор', isRight: false },
      {
        text: 'фрагмент кода (программа, процедура), которой передаётся управление при возникновении прерывания',
        isRight: true,
      },
      {
        text: 'рограммист, который в своей программе использует прерывания',
        isRight: false,
      },
    ],
  },
  {
    question:
      'При умножении двух произвольных 8-битных чисел для записи результата потребуется:',
    answers: [
      { text: 'Не меньше 16 байт', isRight: false },
      { text: 'Не больше 16 байт', isRight: false },
      { text: 'Не меньше 16 бит', isRight: false },
      { text: 'Не меньше 32 бит', isRight: false },
      { text: 'Не больше 16 бит', isRight: true },
    ],
  },
  {
    question: 'Инструкция STI:',
    answers: [
      { text: 'устанавливает флаг IF в значение 0', isRight: false },
      { text: 'считывает значение с вершины стека в регистр', isRight: false },
      {
        text: 'преобразует значение регистра SI в знаковое целое число',
        isRight: false,
      },
      {
        text: 'обеспечивает возврат из обработчика прерывания',
        isRight: false,
      },
      { text: 'устанавливает флаг IF в значение 1', isRight: true },
    ],
  },
  {
    question: 'При знаковом расширении числа:',
    answers: [
      {
        text: 'старшая часть результата равна исходному значению, младшая заполняется нулями',
        isRight: false,
      },
      {
        text: 'старшая часть результата заполняется нулями, младшая равна исходному значению',
        isRight: false,
      },
      {
        text: 'старшая часть результата заполняется единицами, младшая равна исходному значению',
        isRight: false,
      },
      {
        text: 'старшая часть результата заполняется значением знакового бита исходного числа, младшая равна исходному значению',
        isRight: true,
      },
      {
        text: 'старшая часть результата равна исходному значению, младшая заполняется единицами',
        isRight: false,
      },
    ],
  },
  {
    question: 'Для извлечения значения из стека используется инструкция:',
    answers: [
      { text: 'call', isRight: false },
      { text: 'pop', isRight: true },
      { text: 'pull', isRight: false },
      { text: 'push', isRight: false },
      { text: 'int', isRight: false },
    ],
  },
  {
    question: 'Основная операция, выполняемая инструкцией STOSW:',
    answers: [
      { text: '[DS:SI] AX', isRight: false },
      { text: '[ES:DI] AL', isRight: false },
      { text: '[ES:DI] AX', isRight: true },
      { text: 'AX [ES:DI]', isRight: false },
      { text: '[DS:SI] AL', isRight: false },
    ],
  },
  {
    question:
      'Инструкция, позволяющая вычислить и записать в произвольный регистр эффективный адрес операнда в памяти, называется:',
    answers: [
      { text: 'lea', isRight: true },
      { text: 'adc', isRight: false },
      { text: 'lds', isRight: false },
      { text: 'clc', isRight: false },
      { text: 'les', isRight: false },
    ],
  },
  {
    question: 'Стек в архитектуре IA-32:',
    answers: [
      {
        text: '«растёт» по мере добавления элементов от больших адресов к меньшим',
        isRight: true,
      },
      { text: 'имеет ограниченный размер — 16 бит', isRight: false },
      { text: 'имеет ограниченный размер — 16 байт', isRight: false },
      {
        text: 'состоит из элементов, каждый из которых, кроме последнего, содержит указатель на следующий элемент',
        isRight: false,
      },
      {
        text: '«растёт» по мере добавления элементов от меньших адресов к большим',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Какая из перечисленных инструкций оставит в регистре AX значение, отличное от остальных?',
    answers: [
      { text: 'or ah, $FF', isRight: true },
      { text: 'xor ah, ah', isRight: false },
      { text: 'and ah, 0', isRight: false },
      { text: 'mov ah, 0', isRight: false },
      { text: 'movzx ax, al', isRight: false },
    ],
  },
  {
    question: 'Инструкция RCR:',
    answers: [
      {
        text: 'выполняет расширенный циклический сдвиг влево через флаг CF',
        isRight: false,
      },
      {
        text: 'выполняет расширенный циклический сдвиг вправо через флаг CF',
        isRight: true,
      },
      { text: 'выполняет циклический сдвиг вправо.', isRight: false },
      { text: 'выполняет логический сдвиг вправо', isRight: false },
      { text: 'выполняет арифметический сдвиг вправо', isRight: false },
    ],
  },
  {
    question: 'Инструкция STC:',
    answers: [
      { text: 'устанавливает флаг CF в значение 0', isRight: false },
      {
        text: 'записывает в регистр CL значение, в котором все биты единичные',
        isRight: false,
      },
      {
        text: 'расширяет значение в регистре CL, заполняя старшую часть единицами, и записывает его в CX',
        isRight: false,
      },
      { text: 'устанавливает флаг CF в значение 1', isRight: true },
      {
        text: 'записывает в регистр CX значение, в котором все биты единичные',
        isRight: false,
      },
    ],
  },
  {
    question: 'Инструкция для деления беззнаковых чисел называется:',
    answers: [
      { text: 'Split', isRight: false },
      { text: 'Del', isRight: false },
      { text: 'Div', isRight: true },
      { text: 'Idiv', isRight: false },
      { text: 'mod', isRight: false },
    ],
  },
  {
    question:
      'Программа, выполняющая действия, предписанные исходным кодом другой программы, самостоятельно, БЕЗ явного преобразования этой программы в объектный (машинный) код целиком:',
    answers: [
      { text: 'компоновщик', isRight: false },
      { text: 'операционная система', isRight: false },
      { text: 'препроцессор', isRight: false },
      { text: 'интерпретатор', isRight: true },
      { text: 'процессор', isRight: false },
    ],
  },
  {
    question:
      'Этап работы транслятора, заключающийся в построении результирующего представления анализируемой программы на целевом языке:',
    answers: [
      { text: 'семантический анализ', isRight: false },
      { text: 'генерация кода', isRight: true },
      { text: 'лексический анализ', isRight: false },
      { text: 'оптимизация', isRight: false },
      { text: 'синтаксический анализ', isRight: false },
    ],
  },
  {
    question:
      'Тип данных, который используется в функциях с переменным числом параметров для работы с «переменными параметрами»:',
    answers: [
      {
        text: 'B языке С не поддерживаются функции с переменным числом параметров',
        isRight: false,
      },
      { text: 'va_end', isRight: false },
      { text: 'va_arg', isRight: false },
      { text: 'va_list', isRight: true },
      { text: 'va_start', isRight: false },
    ],
  },
  {
    question:
      'Символы %X в форматной строке функции printf означают, что очередное значение следует рассматривать и форматировать:',
    answers: [
      { text: 'как целое 16-чное число без знака', isRight: true },
      { text: 'как вещественное число', isRight: false },
      { text: 'как целое 10-чное число со знаком', isRight: false },
      { text: 'как целое 8-чное число без знака', isRight: false },
      { text: 'как символьную величину', isRight: false },
    ],
  },
  {
    question:
      'Директива препроцессора языка C для объявления символических макросов:',
    answers: [
      { text: '#create', isRight: false },
      { text: 'у препроцессора языка C нет такой возможности', isRight: false },
      { text: '#define', isRight: true },
      { text: '#macro', isRight: false },
      { text: '#macros', isRight: false },
    ],
  },
  {
    question:
      'Побочным эффектом операции постфиксного инкремента в языке С является:',
    answers: [
      {
        text: 'увеличение значения операнда на 1 после остальных вычислений',
        isRight: false,
      },
      { text: 'вычисление значения операнда', isRight: false },
      {
        text: 'постфиксный инкремент в языке С — это оператор, а не операция',
        isRight: false,
      },
      {
        text: 'запись в операнд значения, которое на 1 больше его первоначального значения',
        isRight: true,
      },
      {
        text: 'увеличение значения операнда на 1 до остальных вычислений',
        isRight: false,
      },
    ],
  },
  {
    question: 'Функция стандартной библиотеки языка С для сравнения строк:',
    answers: [
      { text: 'strlen', isRight: false },
      { text: 'strcmp', isRight: true },
      {
        text: 'в стандартной библиотеке языка С нет такой функции',
        isRight: false,
      },
      { text: 'strmov', isRight: false },
      { text: 'strcpy', isRight: false },
    ],
  },
  {
    question:
      'Побочным эффектом операции префиксного декремента в языке С является:',
    answers: [
      {
        text: 'уменьшение значения операнда на 1 после остальных вычислений',
        isRight: false,
      },
      {
        text: 'уменьшение значения операнда на 1 до остальных вычислений',
        isRight: true,
      },
      {
        text: 'запись в операнд значения, которое на 1 меньше его первоначального значения',
        isRight: false,
      },
      { text: 'вычисление значения операнда', isRight: false },
      {
        text: 'префиксный декремент в языке С — это оператор, а не операция',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Какое из перечисленных соглашений вызова предполагает передачу всех параметров через стек справа налево с их удалением из стека вызываемой процедурой:',
    answers: [
      { text: 'ccall/cdecl', isRight: false },
      { text: 'pascal', isRight: false },
      { text: 'fastcall', isRight: false },
      { text: 'stdcall', isRight: true },
      { text: 'comcall/safecall', isRight: false },
    ],
  },
  {
    question: 'Инструкция MOVSX :',
    answers: [
      {
        text: 'копирует данные из памяти по адресу DS:SI в память по адресу ЕS:DI',
        isRight: false,
      },
      { text: 'копирует значение из регистра в вершину стека', isRight: false },
      { text: 'копирует значение в регистр SX', isRight: false },
      { text: 'выполняет знаковое расширение числа', isRight: true },
      { text: 'выполняет беззнаковое расширение числа', isRight: false },
    ],
  },
  {
    question:
      'Чтобы FASM создал СОМ-приложение для MS-DOS, нужно в тексте программы написать:',
    answers: [
      { text: 'org 100h', isRight: true },
      { text: 'entry СОМ', isRight: false },
      { text: 'format МZ', isRight: false },
      { text: 'section', isRight: false },
      { text: 'iret', isRight: false },
    ],
  },
  {
    question:
      'Этап выполнения инструкции процессором, на котором происходит её считывание из памяти, называется',
    answers: [
      { text: 'Read', isRight: false },
      { text: 'Fetch', isRight: true },
      { text: 'Decode', isRight: false },
      { text: 'Execute', isRight: false },
      { text: 'Write-Back', isRight: false },
    ],
  },
  {
    question: 'Инструкция RCL:',
    answers: [
      {
        text: 'выполняет расширенный циклический сдвиг влево через флаг СF',
        isRight: true,
      },
      { text: 'выполняет арифметический сдвиг влево', isRight: false },
      { text: 'выполняет циклический сдвиг влево', isRight: false },
      {
        text: 'выполняет расширенный циклический сдвиг вправо через флаг CF',
        isRight: false,
      },
      { text: 'выполняет логический сдвиг влево', isRight: false },
    ],
  },
  {
    question:
      'Назначение функции имени, включающего в себя дополнительно информацию о соглашении вызова, наборе параметров и других характеристиках функции, для использования на этапе компоновки называется:',
    answers: [
      { text: 'прототипирование', isRight: false },
      { text: 'соглашение об именовании', isRight: false },
      { text: 'сборка', isRight: false },
      { text: 'декорирование имени', isRight: true },
      { text: 'объявление функции', isRight: false },
    ],
  },
  {
    question:
      'Нисходящий метод синтаксического анализа, заключающийся в переборе возможных продукций для каждого из нетерминалов:',
    answers: [
      { text: 'метод рекурсивного спуска', isRight: true },
      { text: 'восходящий разбор', isRight: false },
      { text: 'предиктивный анализ', isRight: false },
      { text: 'левая факторизация', isRight: false },
      { text: 'метод введения переменной состояния', isRight: false },
    ],
  },
  {
    question: 'Инструкция SHR:',
    answers: [
      { text: 'выполняет логический сдвиг вправо', isRight: true },
      {
        text: 'выполняет расширенный циклический сдвиг вправо через флаг CF',
        isRight: false,
      },
      { text: 'выполняет арифметический сдвиг вправо', isRight: false },
      { text: 'выполняет логический сдвиг влево', isRight: false },
      { text: 'выполняет циклический сдвиг вправо', isRight: false },
    ],
  },
  {
    question:
      'Прерывания для какой из перечисленных ситуаций продолжат обрабатываться, если IF = 0:',
    answers: [
      { text: 'нажатие клавиши на клавиатуре', isRight: false },
      { text: 'истечение интервала таймера', isRight: false },
      { text: 'перемещение мыши', isRight: false },
      { text: 'выполнение инструкции int', isRight: true },
      { text: 'щелчок кнопкой мыши', isRight: false },
    ],
  },
  {
    question:
      'При записи операнда в памяти в реальном режиме (real-address mode) НЕЛЬЗЯ:',
    answers: [
      {
        text: 'задавать эффективный адрес только константной величиной, без использования регистров',
        isRight: false,
      },
      {
        text: 'использовать при задании эффективного адреса регистры AX, CX, DX или SP, а также одновременно два регистра из пары BX/BP или SI/DI',
        isRight: true,
      },
      {
        text: 'использовать при задании эффективного адреса больше одного регистра общего назначения',
        isRight: false,
      },
      {
        text: 'использовать при задании эффективного адреса одновременно регистр и константную величину',
        isRight: false,
      },
      {
        text: 'указывать сегмент, в котором расположен операнд в памяти',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Выберите правильный пример объявления переменной-указателя на языке C:',
    answers: [
      { text: 'pointer x;', isRight: false },
      { text: 'float *x;', isRight: true },
      { text: 'float x*;', isRight: false },
      { text: 'float x&;', isRight: false },
      { text: 'float &x;', isRight: false },
    ],
  },
  {
    question:
      'В языке C модификатор volatile, использованный при объявлении переменной:',
    answers: [
      {
        text: 'запрещает передачу этой переменной в качестве параметра функций',
        isRight: false,
      },
      {
        text: 'означает, что переменная должна размещаться в регистре внешнего устройства, идентификатор которого указывается при объявлении',
        isRight: false,
      },
      {
        text: 'означает, что переменная должна быть размещена в постоянном запоминающем устройства (ПЗУ)',
        isRight: false,
      },
      {
        text: 'переменная не может быть объявлена с модификатором volatile',
        isRight: false,
      },
      {
        text: 'запрещает оптимизацию компилятором доступа к этой программе, приводит к тому, что обращение всегда происходит в память',
        isRight: true,
      },
    ],
  },
  {
    question:
      'Если среди int, short int, long int, char и long long int размеры всех типов различны, то по возрастанию размеров третьим будет:',
    answers: [
      { text: 'char', isRight: false },
      { text: 'int', isRight: true },
      { text: 'long int', isRight: false },
      { text: 'long long int', isRight: false },
      { text: 'short int', isRight: false },
    ],
  },
  {
    question:
      'Какого из перечисленных способов задания целочисленных типов данных не предусмотрено в языке C?',
    answers: [
      { text: 'short short int', isRight: true },
      { text: 'unsigned char', isRight: false },
      { text: 'long long int', isRight: false },
      { text: 'signed long int', isRight: false },
      { text: 'signed short', isRight: false },
    ],
  },
  {
    question: 'Сегментом в реальном режиме (real-address mode) называется:',
    answers: [
      {
        text: 'область памяти размером 64 КБ, начинающаяся с физического адреса кратного 16 байтам',
        isRight: true,
      },
      {
        text: 'область памяти размером 64 байта, начинающаяся с физического адреса кратного 16 КБайтам',
        isRight: false,
      },
      {
        text: 'область памяти размером 16 байт, начинающаяся с физического адреса кратного 64 КБайтам',
        isRight: false,
      },
      {
        text: 'область памяти размером 16 КБ, начинающаяся с физического адреса кратного 64 байтам',
        isRight: false,
      },
      {
        text: 'значение в каком-либо из регистров CS, DS, ES, FS, GS, SS',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Каким будет результат выполнения следующего фрагмента кода на С ? (x = 42;  x = 98; x ^= y ^= x ^= y; )',
    answers: [
      { text: 'x = 98, y = 42;', isRight: false },
      { text: 'x = 42, y = 98;', isRight: false },
      { text: 'x = 0, y = 0;', isRight: false },
      { text: 'x = -42, y= -98;', isRight: false },
      { text: 'в коде есть случай неопределенного поведения', isRight: true },
    ],
  },
  {
    question:
      'Каким будет результат выполнения следующего фрагмента кода на языке С? (int x = 0; if (0 == x) printf(“then”); else printf(“else”))',
    answers: [
      { text: 'вывод текста then', isRight: true },
      { text: 'вывод текста else', isRight: false },
      { text: 'обе ветви оператора if будут проигнорированы', isRight: false },
      { text: 'код содержит случай неопределенного поведения', isRight: false },
      { text: 'код содержит ошибку и не будет скомпилирован', isRight: false },
    ],
  },
  {
    question:
      'Функция стандартной библиотеки языка С для чтения произвольного блока данных из ранее открытого файла',
    answers: [
      {
        text: 'в стандартной библиотеке языка С нет такой функции',
        isRight: false,
      },
      { text: 'fread', isRight: true },
      { text: 'fblock', isRight: false },
      { text: 'fget', isRight: false },
      { text: 'fload', isRight: false },
    ],
  },
  {
    question: 'Инструкция LEA',
    answers: [
      {
        text: 'обращается к зadcаданному операнду в памяти и записывает него эффективный адрес',
        isRight: false,
      },
      { text: 'выполняет побитовый сдвиг', isRight: false },
      { text: 'загружает значение из памяти в регистр EAX', isRight: false },
      {
        text: 'обращается к заданному операнду в памяти и считывает из него эффективный адрес',
        isRight: false,
      },
      {
        text: 'вычисляет эффективный адрес, не обращаясь к операнду в памяти, что позволяет использовать ее для выполнения простых арифметических действий, не связанных с адресами',
        isRight: true,
      },
    ],
  },
  {
    question: 'Инструкция ADC',
    answers: [
      {
        text: 'расширяет беззнаковое значение в регистре CX и записывает его в DX:AX',
        isRight: false,
      },
      {
        text: 'преобразует значение в паре регистров DX:AX в регистр CX',
        isRight: false,
      },
      { text: 'выполняет сложение комплексных чисел', isRight: false },
      { text: 'выполняет сложение с учетом значения флага CF', isRight: true },
      {
        text: 'расширяет знаковое значение в регистре CX и записывает его в DX:AX',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Какое из перечисленных утверждений об обработке вещественных чисел процессорами архитектуры ІА-32 НЕправильное?',
    answers: [
      {
        text: 'для работы с вещественными числами можно использовать FPU - математический сопроцессор х87, который в современных моделях процессора является встроенным',
        isRight: false,
      },
      {
        text: 'х87 FPU поддерживает три вещественных формата: 32-, 64- и 80- битные вещественные числа с плавающей точкой',
        isRight: false,
      },
      {
        text: 'для работы с вещественными числами с использованием х87 FPU используется отдельный набор из 8 регистров, причём доступ к ним организован по принципу стека',
        isRight: false,
      },
      {
        text: 'х87 FPU поддерживает три целочисленных формата: 16-, 32- и 64- битные знаковые целые числа',
        isRight: false,
      },
      {
        text: 'для выполнения арифметических действий над вещественными числами используются те же инструкции (ADD, SUB, MUL, DIV), что и над целочисленными',
        isRight: true,
      },
    ],
  },
  {
    question: 'Инструкция ROL',
    answers: [
      {
        text: 'выполняет расширенный циклический сдвиг влево через флаг CF',
        isRight: false,
      },
      { text: 'выполняет циклический сдвиг влево', isRight: true },
      { text: 'выполняет арифметический сдвиг влево', isRight: false },
      { text: 'выполняет логический сдвиг влево', isRight: false },
      { text: 'выполняет циклический сдвиг вправо', isRight: false },
    ],
  },
  {
    question:
      'Как называется регистр программного счетчика(указатель инструкций) в процессорах архитектуры IA-32?',
    answers: [
      { text: '(E)DI', isRight: false },
      { text: '(E)IP', isRight: true },
      { text: '(E)CX', isRight: false },
      { text: 'E(SP)', isRight: false },
      { text: 'E(SI)', isRight: false },
    ],
  },
  {
    question: 'Инструкция RETF:',
    answers: [
      {
        text: 'извлекает из стека два значения, помещая их в регистры FLAGS и IP, а также извлекает дополнительно столько байт, сколько задано необязательным операндом',
        isRight: false,
      },
      {
        text: 'извлекает из стека два значения, помещая их в регистры CS и IP, а также извлекает дополнительно столько байт, сколько задано необязательным операндом',
        isRight: true,
      },
      {
        text: 'извлекает из стека столько байт, сколько задано обязательным операндом',
        isRight: false,
      },
      {
        text: 'извлекает из стека столько байт, сколько задано необязательным операндом',
        isRight: false,
      },
      {
        text: 'извлекает из стека два значения, помещая их в регистры FLAGS и IP, а также извлекает дополнительно столько байт, сколько задано обязательным операндом',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Какое из перечисленных соглашений вызова предполагает передачу всех параметров через стек слева направо с их удалением из стека вызываемой процедурой?',
    answers: [
      { text: 'ccall/cdecl', isRight: false },
      { text: 'fastcall', isRight: false },
      { text: 'pascal', isRight: true },
      { text: 'stdcall', isRight: false },
      { text: 'comcall/safecall', isRight: false },
    ],
  },
  {
    question: 'Основная операция, выполняемая инструкцией STOSB:',
    answers: [
      { text: '[ES:DI] AX', isRight: false },
      { text: '[ES:DI] AL', isRight: true },
      { text: '[DS:SI] AX', isRight: false },
      { text: '[DS:SI] AL', isRight: false },
      { text: 'AL [ES:DI]', isRight: false },
    ],
  },
  {
    question:
      'Какой символ принято использовать для обозначения начала комментария в языке ассемблера?',
    answers: [
      { text: '#', isRight: false },
      { text: '/', isRight: false },
      { text: '!', isRight: false },
      { text: ';', isRight: true },
      { text: '?', isRight: false },
    ],
  },
  {
    question:
      'Какое из перечисленных утверждений об отличиях реального (real-address) и защищённого (protected) режимов НЕправильное?',
    answers: [
      {
        text: 'в реальном режиме все программы выполняются с одним уровнем привилегий, а в защищённом режиме ОС может ограничивать возможности прикладных программ',
        isRight: false,
      },
      {
        text: 'в реальном режиме можно использовать любые инструкции с любыми размерами операндов, а защищённый режим ограничен только 8-битными операндами и нужен для совместимости со старыми процессорами',
        isRight: true,
      },
      {
        text: 'в реальном режиме расположение сегментов заранее предопределено и не может быть изменено, а в защищённом режиме расположение сегментов выбирается операционной системой',
        isRight: false,
      },
      {
        text: 'в реальном режиме физический адрес вычисляется по формуле Seg * 16 + Ofs, а в защищённом режиме преобразование адресов может происходить сложнее',
        isRight: false,
      },
      {
        text: 'в реальном режиме инструкции для работы с портами можно выполнять без ограничений, а в защищённом режиме прямая работа с оборудованием для прикладных программ ограничивается',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Каким образом строковые инструкции изменяют значения регистров SI и/или DI?',
    answers: [
      {
        text: 'увеличивают, если DF = 0, уменьшают, если DF = 1',
        isRight: true,
      },
      {
        text: 'увеличивают, если DF = 1, уменьшают, если DF = 0',
        isRight: false,
      },
      { text: 'всегда уменьшают', isRight: false },
      { text: 'всегда увеличивают', isRight: false },
      { text: 'обнуляют', isRight: false },
    ],
  },
  {
    question:
      'В инструкциях, реализующих побитовые сдвиги, количество разрядов для сдвига может быть задано регистром:',
    answers: [
      { text: 'SP', isRight: false },
      { text: 'CX', isRight: false },
      { text: 'CL', isRight: true },
      { text: 'CF', isRight: false },
      { text: 'CH', isRight: false },
    ],
  },
  {
    question: 'Флаг DF:',
    answers: [
      {
        text: 'становится равным 1 в случае переноса из/заёма в старший разряд при сложении вычитании',
        isRight: false,
      },
      {
        text: 'включает/отключает обработку аппаратных прерываний',
        isRight: false,
      },
      {
        text: 'влияет на направление обработки строковых данных',
        isRight: true,
      },
      { text: 'равен 1, если CX = 0, и наоборот', isRight: false },
      {
        text: 'влияет на преобразование чисел с расширением (увеличением разрядности)',
        isRight: false,
      },
    ],
  },
  {
    question: 'Класс хранения в языке С, применяемый для объявления типов',
    answers: [
      { text: 'typedef', isRight: true },
      { text: 'maketype', isRight: false },
      { text: 'autotype', isRight: false },
      { text: 'define', isRight: false },
      { text: 'volatile', isRight: false },
    ],
  },
  {
    question:
      'Имеется следующий фрагмент кода на языке C: ( int a[5]; int *p1, *p2, x; p1 = &a[1]; p2 = &a[3]; x = p2 - p1;) \tПоследняя строка в этом фрагменте кода:',
    answers: [
      { text: 'содержит случай неопределённого поведения', isRight: false },
      {
        text: 'записывает в переменную x разность значений элементов массива a с индексами 0 и 2',
        isRight: false,
      },
      {
        text: 'записывает в переменную x разность значений элементов массива a с индексами 1 и 3',
        isRight: false,
      },
      {
        text: 'записывает в переменную x расстояние (в байтах) между элементами массива a с индексами 1 и 3',
        isRight: false,
      },
      {
        text: 'записывает в переменную x расстояние (в элементах типа int) между элементами массива a с индексами 1 и 3',
        isRight: true,
      },
    ],
  },
  {
    question:
      'Часть объявления функции в языке C, содержащая её название, список параметров и тип возвращаемого значения, называется:',
    answers: [
      { text: 'проект', isRight: false },
      { text: 'аргумент', isRight: false },
      { text: 'соглашение вызова', isRight: false },
      { text: 'прототип', isRight: true },
      { text: 'пролог', isRight: false },
    ],
  },
  {
    question: 'Побитовая операция исключающее-ИЛИ в языке C обозначается:',
    answers: [
      { text: '|=', isRight: false },
      { text: '|', isRight: false },
      { text: '^', isRight: true },
      { text: '~', isRight: false },
      { text: '&', isRight: false },
    ],
  },
  {
    question:
      'Имеется следующий фрагмент кода на языке C: (int a[5]; int *p1, *p2; p1 = &a[0]; p2 = &a[3]; if (p1 > p2) printf("Yes");) Этот фрагмент кода:',
    answers: [
      {
        text: 'не выведет на экран ничего, т.к. условие в операторе if будет ложным',
        isRight: true,
      },
      {
        text: 'может вывести или не вывести сообщение «Yes» в зависимости от значений элементов a[0] и a[3]',
        isRight: false,
      },
      { text: 'содержит случай неопределённого поведения', isRight: false },
      {
        text: 'выведет на экран сообщение «Yes», т.к. условие в операторе if будет истинным',
        isRight: false,
      },
      {
        text: 'может вывести или не вывести сообщение «Yes» в зависимости размера типа int',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Директива препроцессора языка C для включения в исходный код программы содержимого другого файла',
    answers: [
      { text: '#include', isRight: true },
      { text: 'у препроцессора языка C нет такой возможности', isRight: false },
      { text: '#append', isRight: false },
      { text: '#line', isRight: false },
      { text: '#define', isRight: false },
    ],
  },
  {
    question:
      'В графических видеорежимах VGA-совместимых видеоадаптеров (например, режиме 13h) информация об изображении, хранящаяся в видеопамяти:',
    answers: [
      {
        text: 'представляет собой массив, элементы которого задают коды символов, которые должны отображаться',
        isRight: false,
      },
      {
        text: 'представляет собой массив, элементы которого задают номера цветов пикселей',
        isRight: true,
      },
      {
        text: 'представляет собой массив, элементы которого задают геометрические фигуры, из которых состоит изображение',
        isRight: false,
      },
      {
        text: 'представляет собой двунаправленный список, каждый элемент которого содержит указатели на следующий и предыдущий элементы',
        isRight: false,
      },
      {
        text: 'представляет собой однонаправленный список, каждый элемент которого содержит указатель на следующий элемент',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Какая из перечисленных инструкций не оказывает никакого влияния ни на какие регистры процессора?',
    answers: [
      { text: 'and ax, ax', isRight: false },
      { text: 'cmp ax, ax', isRight: false },
      { text: 'test ax, ax', isRight: false },
      { text: 'xchg ax, ax', isRight: true },
      { text: 'or ax, ax', isRight: false },
    ],
  },
  {
    question:
      'Функция стандартной библиотеки языка C для поиска первого вхождения заданного символа:',
    answers: [
      { text: 'strcmp', isRight: false },
      { text: 'strchr', isRight: true },
      {
        text: 'в стандартной библиотеке языка C нет такой функции',
        isRight: false,
      },
      { text: 'strsearch', isRight: false },
      { text: 'strfind', isRight: false },
    ],
  },
  {
    question:
      'Результатом вычисления операции префиксного декремента в языке C является:',
    answers: [
      {
        text: 'уменьшение значения операнда на 1 после остальных вычислений',
        isRight: false,
      },
      {
        text: 'префиксный декремент в языке C — это оператор, а не операция',
        isRight: false,
      },
      {
        text: 'уменьшение значения операнда на 1 до остальных вычислений',
        isRight: false,
      },
      { text: 'значение операнда', isRight: false },
      {
        text: 'значение, которое на 1 меньше, чем значение операнда',
        isRight: true,
      },
    ],
  },
  {
    question:
      'Операция взятия остатка от целочисленного деления в языке C обозначается знаком:',
    answers: [
      { text: '/', isRight: false },
      { text: '@', isRight: false },
      { text: '#', isRight: false },
      { text: '&', isRight: false },
      { text: '%', isRight: true },
    ],
  },
  {
    question:
      'Формальные параметры функции main() в программе на языке C описывают:',
    answers: [
      { text: 'версию операционной системы и её точку входа', isRight: false },
      {
        text: 'параметры, переданные программе при запуске через командную строку',
        isRight: true,
      },
      { text: 'параметры окна программы', isRight: false },
      { text: 'у функции main() не может быть параметров', isRight: false },
      {
        text: 'код ошибки или успешного завершения программы.',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Каким будет результат выполнения следующего фрагмента кода на языке C? (int x = 93; if (x = 39) printf("then"); else printf("else");)',
    answers: [
      { text: 'Вывод текста «then»', isRight: true },
      { text: 'Код содержит ошибку и не будет скомпилирован', isRight: false },
      { text: 'Вывод текста «else»', isRight: false },
      { text: 'Код содержит случай неопределённого поведения', isRight: false },
      { text: 'Обе ветви оператора if будут проигнорированы', isRight: false },
    ],
  },
  {
    question:
      'В языке C для обозначения типа, состоящего из полей различных типов, располагающихся последовательно, применяется ключевое слово:',
    answers: [
      { text: 'struct', isRight: true },
      { text: 'class', isRight: false },
      { text: 'специальное ключевое слово не требуется', isRight: false },
      { text: 'array', isRight: false },
      { text: 'record', isRight: false },
    ],
  },
  {
    question:
      'Символы %c в форматной строке функции printf означают, что очередное значение следует рассматривать и форматировать:',
    answers: [
      { text: 'как целое 8-чное число без знака', isRight: false },
      { text: 'как целое 16-чное число без знака', isRight: false },
      { text: 'как вещественное число', isRight: false },
      { text: 'как целое 10-чное число со знаком', isRight: false },
      { text: 'как символьную величину', isRight: true },
    ],
  },
  {
    question:
      'Этап работы транслятора, заключающийся в разбиении исходного кода на минимальные группы символов, имеющие самостоятельный смысл в программе:',
    answers: [
      { text: 'оптимизация', isRight: false },
      { text: 'синтаксический анализ', isRight: false },
      { text: 'генерация кода', isRight: false },
      { text: 'семантический анализ', isRight: false },
      { text: 'лексический анализ', isRight: true },
    ],
  },
  {
    question: 'Какой тип в языке C имеет символьный литерал?',
    answers: [
      { text: 'long', isRight: false },
      { text: 'char', isRight: true },
      { text: 'wchar или wchar_t', isRight: false },
      { text: 'int', isRight: false },
      { text: 'short int', isRight: false },
    ],
  },
  {
    question: 'Инструкция RET:',
    answers: [
      {
        text: 'извлекает из стека значения регистров SS:SP перемещает по этому адресу вершину стека',
        isRight: false,
      },
      {
        text: 'извлекает из стека значение регистра AX и передаёт управление инструкции, заданной меткой',
        isRight: false,
      },
      {
        text: 'извлекает из стека значение регистра FLAGS и передаёт управление инструкции, заданной меткой',
        isRight: false,
      },
      {
        text: 'извлекает из стека значение регистра CX и повторяет следующую инструкцию заданное этим значением количество раз',
        isRight: false,
      },
      {
        text: 'извлекает из стека адрес возврата из процедуры и передаёт управление по этому адресу',
        isRight: true,
      },
    ],
  },
  {
    question: 'Основная операция, выполняемая инструкцией LODSW:',
    answers: [
      { text: 'AX [ES:DI]Флаг IF', isRight: false },
      { text: 'AL [DS:SI]', isRight: false },
      { text: 'AL [ES:DI]', isRight: false },
      { text: '[ES:DI] AX', isRight: false },
      { text: 'AX [DS:SI]', isRight: true },
    ],
  },
  {
    question:
      'Какая из перечисленных инструкций в общем случае оставит в регистре AX значение, отличное от остальных?',
    answers: [
      { text: 'movzx ax, al', isRight: false },
      { text: 'mov ah, 0', isRight: false },
      { text: 'sub ah, ah', isRight: false },
      { text: 'xor ah, ah', isRight: false },
      { text: 'cbw', isRight: true },
    ],
  },
  {
    question:
      'Для какого вида операндов данные фактически хранятся внутри процессора?',
    answers: [
      { text: 'Операнд в памяти', isRight: false },
      { text: 'Константное значение (immediate)', isRight: false },
      { text: 'Регистр', isRight: true },
      { text: 'Функция', isRight: false },
      { text: 'Оператор', isRight: false },
    ],
  },
  {
    question: 'Флаг IF:',
    answers: [
      {
        text: 'включает/отключает обработку аппаратных прерываний',
        isRight: true,
      },
      {
        text: 'влияет на преобразование чисел с расширением (увеличением разрядности)',
        isRight: false,
      },
      {
        text: 'становится равным 1 в случае переноса из/заёма в старший разряд при сложении вычитании',
        isRight: false,
      },
      {
        text: 'влияет на направление обработки строковых данных',
        isRight: false,
      },
      { text: 'равен 1, если CX = 0, и наоборот', isRight: false },
    ],
  },
  {
    question:
      'Побочным эффектом операции префиксного инкремента в языке C является:',
    answers: [
      {
        text: 'увеличение значения операнда на 1 до остальных вычислений',
        isRight: false,
      },
      {
        text: 'префиксный инкремент в языке C — это оператор, а не операция',
        isRight: false,
      },
      { text: 'вычисление значения операнда', isRight: false },
      {
        text: 'запись в операнд значения, которое на 1 больше его первоначального значения',
        isRight: true,
      },
      { text: 'missing question', isRight: false },
    ],
  },
  {
    question:
      'Преобразование грамматики, результатом которого является отсутствие в грамматике нетерминалов, для которых выбор продукции при известном терминале из входной строки не является единственно возможным:',
    answers: [
      { text: 'неоднозначность', isRight: false },
      { text: 'левое порождение', isRight: false },
      { text: 'левая рекурсия', isRight: false },
      { text: 'левая факторизация', isRight: true },
      { text: 'левая ассоциативность', isRight: false },
    ],
  },
  {
    question:
      'Какая из перечисленных инструкций НЕЯВНО изменяет значения ровно двух регистров общего назначения?',
    answers: [
      { text: 'movsb', isRight: true },
      { text: 'loop', isRight: false },
      { text: 'iret', isRight: false },
      { text: 'Push', isRight: false },
      { text: 'scasw', isRight: false },
    ],
  },
  {
    question: 'Инструкция CMC:',
    answers: [
      { text: 'устанавливает флаг CF в значение 0', isRight: false },
      { text: 'инвертирует значение регистра CX', isRight: false },
      { text: 'инвертирует значение регистра CL', isRight: false },
      { text: 'инвертирует значение флага CF', isRight: true },
      { text: 'устанавливает флаг CF в значение 1', isRight: false },
    ],
  },
  {
    question:
      'Какой из сегментных регистров недоступен для записи в него значений с помощью инструкции MOV?',
    answers: [
      { text: 'ES', isRight: false },
      { text: 'SS', isRight: false },
      { text: 'CS', isRight: true },
      { text: 'DS', isRight: false },
      { text: 'FS', isRight: false },
    ],
  },
  {
    question:
      'Какое из следующих утверждений об обработке аппаратных прерываний НЕправильное?',
    answers: [
      {
        text: 'обработчик прерывания может завершаться инструкцией IRET',
        isRight: false,
      },
      {
        text: 'обработчик прерывания должен восстановить значения всех регистров по окончании своей работы',
        isRight: false,
      },
      {
        text: 'обработка аппаратных прерываний не выполняется, если IF = 0',
        isRight: false,
      },
      {
        text: 'обработчик прерывания определяется с помощью таблицы векторов прерываний',
        isRight: false,
      },
      {
        text: 'обработчик прерывания должен записать в регистр AX код ошибки или 0, если обработка прошла успешно',
        isRight: true,
      },
    ],
  },
  {
    question:
      'Директива DW позволяет задавать набор данных, каждый элемент которого имеет размер:',
    answers: [
      { text: '8 бит', isRight: false },
      { text: '2 байта', isRight: true },
      { text: '1 байт', isRight: false },
      { text: '2 бита', isRight: false },
      { text: '4 байта.', isRight: false },
    ],
  },
  {
    question:
      'Символы %d в форматной строке функции printf означают, что очередное значение следует рассматривать и форматировать:',
    answers: [
      { text: 'как целое 8-чное число без знака', isRight: false },
      { text: 'как целое 16-чное число без знака', isRight: false },
      { text: 'как вещественное число', isRight: false },
      { text: 'как целое 10-чное число со знаком', isRight: true },
      { text: 'как символьную величину', isRight: false },
    ],
  },
  {
    question: 'Функция стандартной библиотеки языка C для открытия файлов:',
    answers: [
      { text: 'fread', isRight: false },
      {
        text: 'в стандартной библиотеке языка C нет такой функции',
        isRight: false,
      },
      { text: 'fopen', isRight: true },
      { text: 'fstart', isRight: false },
      { text: 'fload', isRight: false },
    ],
  },
  {
    question:
      'Если среди int, short int, long int, char и long long int размеры всех типов различны, то по возрастанию размеров первым будет:',
    answers: [
      { text: 'short int', isRight: false },
      { text: 'long long int', isRight: false },
      { text: 'int', isRight: false },
      { text: 'char', isRight: true },
      { text: 'long int', isRight: false },
    ],
  },
  {
    question: 'Неявное преобразование типов в языке C:',
    answers: [
      {
        text: 'сводится к тому, что операнды «более вместительных» типов приводятся к «менее вместительным» типам',
        isRight: false,
      },
      {
        text: 'сводится к тому, что беззнаковые числа приводятся к знаковым',
        isRight: false,
      },
      { text: 'отсутствует', isRight: false },
      {
        text: 'сводится к тому, что операнды «менее вместительных» типов приводятся к «более вместительным» типам',
        isRight: true,
      },
      {
        text: 'сводится к тому, что знаковые числа приводятся к беззнаковым',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Если среди int, short int, long int, char и long long int размеры всех типов различны, то по убыванию размеров четвёртым будет:',
    answers: [
      { text: 'char', isRight: false },
      { text: 'long int', isRight: false },
      { text: 'int', isRight: false },
      { text: 'long long int', isRight: false },
      { text: 'short int', isRight: true },
    ],
  },
  {
    question: 'Побитовая операция НЕ в языке C обозначается:',
    answers: [
      { text: '!=', isRight: false },
      { text: '^', isRight: false },
      { text: '!', isRight: false },
      { text: '~', isRight: true },
      { text: '=~', isRight: false },
    ],
  },
  {
    question: 'Инструкция POPF:',
    answers: [
      {
        text: 'извлекает значение с вершины стека в регистр FS',
        isRight: false,
      },
      {
        text: 'извлекает значение с вершины стека в регистр SP',
        isRight: false,
      },
      {
        text: 'извлекает значение с вершины стека в регистр FLAGS',
        isRight: true,
      },
      {
        text: 'извлекает значения всех регистров общего назначения с вершины стека',
        isRight: false,
      },
      {
        text: 'извлекает значение с вершины стека в регистр AX',
        isRight: false,
      },
    ],
  },
  {
    question:
      'При сравнениях больше/меньше для беззнаковых чисел используются инструкции условного перехода:',
    answers: [
      { text: 'ja/jb', isRight: true },
      { text: 'jg/jl', isRight: false },
      { text: 'jp/jm', isRight: false },
      { text: 'js/jz', isRight: false },
      { text: 'jb/jm', isRight: false },
    ],
  },
  {
    question:
      'Перед какой из перечисленных инструкций НЕ могут использоваться префиксы REPE и REPNE',
    answers: [
      { text: 'cmpsb', isRight: false },
      { text: 'scasb', isRight: false },
      { text: 'movsw', isRight: true },
      { text: 'cmpsw', isRight: false },
      { text: 'scasw', isRight: false },
    ],
  },
  {
    question:
      'Какое из перечисленных утверждений о конвейерах в современных процессорах НЕправильное?',
    answers: [
      {
        text: 'инструкции условного и безусловного переходов могут снижать эффективность работы конвейера',
        isRight: false,
      },
      {
        text: 'для повышения эффективности конвейера применяют статическое и динамическое предсказание переходов',
        isRight: false,
      },
      {
        text: 'конвейерная архитектура повышает надёжность процессора за счёт замедления его работы',
        isRight: true,
      },
      {
        text: 'при работе конвейера могут возникать конфликты по данным, которые снижают эффективность работы конвейера',
        isRight: false,
      },
      {
        text: 'инструкции в конвейере могут выполняться не в том порядке, в котором записаны в программе, но результаты их работы будут видны программе в правильном порядке',
        isRight: false,
      },
    ],
  },
  {
    question: 'Язык(и) ассемблера относят к:',
    answers: [
      { text: 'языкам низкого уровня', isRight: true },
      { text: 'языкам разметки', isRight: false },
      { text: 'объектно-ориентированным языкам', isRight: false },
      { text: 'языкам 4-го поколения', isRight: false },
      { text: 'языкам высокого уровня', isRight: false },
    ],
  },
  {
    question: 'Какая из перечисленных инструкций эквивалентна инструкции cbw?',
    answers: [
      { text: 'movzx ax, al', isRight: false },
      { text: 'movsx ax, al', isRight: true },
      { text: 'or ah, -1', isRight: false },
      { text: 'mov ah, $FF', isRight: false },
      { text: 'xor ah, ah', isRight: false },
    ],
  },
  {
    question:
      '.Каким будет результат выполнения следующего фрагмента кода на языке C? (x = 10; y = x++; )',
    answers: [
      { text: 'x = 11, y = 10', isRight: true },
      { text: 'x = 11, y = 11', isRight: false },
      { text: 'x = 10, y = 11', isRight: false },
      { text: 'в коде есть случай неопределённого поведения', isRight: false },
      { text: 'x = 10, y = 10', isRight: false },
    ],
  },
  {
    question: 'Дерево разбора — это:',
    answers: [
      {
        text: 'структура данных, представляющая в памяти транслятора структуру анализируемой программы в соответствии с правилами грамматики',
        isRight: true,
      },
      {
        text: 'структура данных, представляющая в памяти транслятора структуру анализируемой программы в удобной для дальнейшей обработки форме, не связанной напрямую с правилами грамматики',
        isRight: false,
      },
      {
        text: 'структура данных, содержащая информацию об областях видимости анализируемой программы',
        isRight: false,
      },
      {
        text: 'структура данных, содержащая информацию о выделенной транслятором лексеме, в т.ч. о классе этой лексемы',
        isRight: false,
      },
      {
        text: 'структура данных, содержащая информацию о типах данных программы',
        isRight: false,
      },
    ],
  },
  {
    question: 'Выберите верное утверждение:',
    answers: [
      { text: 'В языке C нет целочисленных типов данных', isRight: false },
      {
        text: 'Размеры и диапазоны целочисленных типов данных в стандарте языка C не определены',
        isRight: false,
      },
      {
        text: 'Стандарт языка C определяет точные размеры и диапазоны целочисленных типов, причём для знаковых типов по стандарту используется обратный код',
        isRight: false,
      },
      {
        text: 'Стандарт языка C определяет точные размеры и диапазоны целочисленных типов, причём для знаковых типов по стандарту используется дополнительный код',
        isRight: false,
      },
      {
        text: 'В стандарте языка C определены минимальные диапазоны значений для целочисленных типов данных',
        isRight: true,
      },
    ],
  },
  {
    question:
      'Программа, выполняющая преобразование исходного кода другой программы в объектный (машинный) код:',
    answers: [
      { text: 'препроцессор', isRight: false },
      { text: 'процессор', isRight: false },
      { text: 'компилятор', isRight: true },
      { text: 'операционная система', isRight: false },
      { text: 'компоновщик', isRight: false },
    ],
  },
  {
    question:
      'Значение, возвращаемое функцией main() в программе на языке C, по соглашению означает:',
    answers: [
      {
        text: 'объём требуемой для работы программы оперативной памяти',
        isRight: false,
      },
      {
        text: 'код результата выполнения программы (0 — успешно, иначе — ошибка)',
        isRight: true,
      },
      { text: 'функция main() не может возвращать значение', isRight: false },
      {
        text: 'время, через которое программа должна быть автоматически запущена повторно (0 — повторный запуск не требуется)',
        isRight: false,
      },
      {
        text: 'количество открытых программой файлов, которые требуется закрыть автоматически',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Макрос, который используется в функциях с переменным числом параметров для завершения работы с «переменными параметрами»:',
    answers: [
      { text: 'va_list', isRight: false },
      { text: 'va_start', isRight: false },
      { text: 'va_end', isRight: true },
      { text: 'va_arg', isRight: false },
      {
        text: 'в языке C не поддерживаются функции с переменным числом параметров',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Если среди int, short int, long int, char и long long int размеры всех типов различны, то по убыванию размеров третьим будет:',
    answers: [
      { text: 'char', isRight: false },
      { text: 'short int', isRight: false },
      { text: 'long int', isRight: false },
      { text: 'int', isRight: true },
      { text: 'long long int', isRight: false },
    ],
  },
  {
    question:
      'Перед какой из перечисленных инструкций могут использоваться префиксы REPE и REPNE?',
    answers: [
      { text: 'lodsb', isRight: false },
      { text: 'stosw', isRight: false },
      { text: 'scasw', isRight: true },
      { text: 'lodsw', isRight: false },
      { text: 'movsb', isRight: false },
    ],
  },
  {
    question: 'Прерывание — это:',
    answers: [
      { text: 'инструкция int 21h', isRight: false },
      {
        text: 'состояние процессора, приводящее к прекращению его работы из-за возникновения ошибок',
        isRight: false,
      },
      {
        text: 'инициируемый определённым образом процесс, временно переключающий процессор на выполнение другой программы с последующим возобновлением выполнения прерванной программы',
        isRight: true,
      },
      {
        text: 'вызов процедуры/функции с помощью инструкции CALL',
        isRight: false,
      },
      { text: 'завершение работы программы', isRight: false },
    ],
  },
  {
    question:
      'Для операндов в памяти в архитектуре IA-32 по умолчанию номером сегмента считается значение в регистре:',
    answers: [
      { text: 'IP', isRight: false },
      { text: 'DS', isRight: true },
      { text: 'ES', isRight: false },
      { text: 'SS', isRight: false },
      { text: 'CS', isRight: false },
    ],
  },
  {
    question:
      'Какое из перечисленных соглашений вызова предполагает передачу всех параметров через стек с их удалением из стека вызывающей процедурой?',
    answers: [
      { text: 'ccall/cdecl', isRight: true },
      { text: 'stdcall', isRight: false },
      { text: 'fastcall', isRight: false },
      { text: 'comcall/safecall', isRight: false },
      { text: 'pascal', isRight: false },
    ],
  },
  {
    question: 'ε-замыкание (Е-замыкание) — это:',
    answers: [
      {
        text: 'множество состояний конечного автомата (НКА), достижимых из его начального состояния',
        isRight: false,
      },
      {
        text: 'ситуация в работе транслятора, когда требуется вернуться назад по тексту программы и возобновить анализ',
        isRight: false,
      },
      {
        text: 'множество состояний конечного автомата (НКА), достижимых из заданного посредством 0 или более ε-переходов',
        isRight: true,
      },
      {
        text: 'ситуация в работе синтаксического анализатора, когда возникает бесконечная рекурсия',
        isRight: false,
      },
      {
        text: 'множество заключительных состояний конечного автомата',
        isRight: false,
      },
    ],
  },
  {
    question: 'Функция стандартной библиотеки языка C для конкатенации строк:',
    answers: [
      { text: 'strcpy', isRight: false },
      { text: 'stradd', isRight: false },
      { text: 'strcat', isRight: true },
      {
        text: 'в стандартной библиотеке языка C нет такой функции',
        isRight: false,
      },
      { text: 'strmov', isRight: false },
    ],
  },
  {
    question: 'Как устроены строки в программах на языке C?',
    answers: [
      {
        text: 'массив символов, размеры строки никак не обозначаются',
        isRight: false,
      },
      { text: 'объект, имеющий свойство length', isRight: false },
      {
        text: 'массив символов, признаком конца строки является символ с кодом 0',
        isRight: true,
      },
      {
        text: 'массив символов, размеры строки и количество ссылок на неё задаются перед началом самих строковых данных',
        isRight: false,
      },
      {
        text: 'массив символов, первый элемент содержит фактическую длину строки',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Функция стандартной библиотеки языка C для выделения блока динамической памяти заданного размера:',
    answers: [
      { text: 'new', isRight: false },
      { text: 'free', isRight: false },
      { text: 'getmem', isRight: false },
      {
        text: 'стандартной библиотекой языка C не поддерживается динамическое выделение памяти',
        isRight: false,
      },
      { text: 'malloc', isRight: true },
    ],
  },
  {
    question: 'Понятие «соглашение вызова» НЕ включает в себя:',
    answers: [
      {
        text: 'способ передачи параметров в процедуру/функцию',
        isRight: false,
      },
      { text: 'правила использования регистров', isRight: false },
      { text: 'способ возврата значения из функции', isRight: false },
      {
        text: 'правила удаления параметров из стека (в случае передачи параметров через стек)',
        isRight: false,
      },
      { text: 'правила выбора имени для процедуры/функции', isRight: true },
    ],
  },
  {
    question: 'Инструкция CMP выполняет вычисления аналогичные инструкции:',
    answers: [
      { text: 'ror', isRight: false },
      { text: 'and', isRight: false },
      { text: 'sub', isRight: true },
      { text: 'int', isRight: false },
      { text: 'mul', isRight: false },
    ],
  },
  {
    question:
      'Как называется регистр программного счётчика (указатель инструкций) в процессорах архитектуры IA-32?',
    answers: [
      { text: '(E)SI', isRight: false },
      { text: '(E)SP', isRight: false },
      { text: '(E)IP', isRight: true },
      { text: '(E)DI', isRight: false },
      { text: '(E)CX', isRight: false },
    ],
  },
  {
    question:
      'Прерывания для какой из перечисленных ситуаций НЕ будут обрабатываться, если IF = 0:',
    answers: [
      { text: 'нажатие клавиши на клавиатуре', isRight: true },
      { text: 'выполнение инструкции INT', isRight: false },
      {
        text: 'достижение точки останова (INT3) при отладке/выполнении программы',
        isRight: false,
      },
      { text: 'целочисленное деление на 0', isRight: false },
      { text: 'выполнение недопустимой инструкции', isRight: false },
    ],
  },
  {
    question: 'При каждом выполнении инструкция LOOP:',
    answers: [
      { text: 'уменьшает значение регистра-счётчика', isRight: true },
      { text: 'увеличивает значение регистра-счётчика', isRight: false },
      { text: 'увеличивает значение регистра SI', isRight: false },
      {
        text: 'сохраняет в стек значение регистра программного счётчика',
        isRight: false,
      },
      { text: 'уменьшает значение регистра DI', isRight: false },
    ],
  },
  {
    question: 'Эффективный адрес (effective address) — это:',
    answers: [
      {
        text: 'сегмент операнда в памяти, которое фактически используется для доступа к нему и может быть задано в инструкции своим значением или выражением, содержащим простые арифметические операции над регистрами и константами',
        isRight: false,
      },
      {
        text: 'смещение операнда в памяти, которое фактически используется для доступа к нему и может быть задано в инструкции своим значением или выражением, содержащим простые арифметические операции над регистрами и константами',
        isRight: true,
      },
      {
        text: 'адрес выполняющегося в данный момент обработчика прерывания',
        isRight: false,
      },
      {
        text: 'совокупность сегмента и смещения операнда в памяти',
        isRight: false,
      },
      { text: 'адрес вершины стека', isRight: false },
    ],
  },
  {
    question: 'Операция взятия адреса в языке C обозначается:',
    answers: [
      { text: '&', isRight: true },
      { text: '@', isRight: false },
      { text: '*', isRight: false },
      { text: '^', isRight: false },
      {
        text: 'такой операции в языке C нет, т.к. в нём имя переменной уже является указателем',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Функция стандартной библиотеки языка C для создания копии строки в динамической памяти:',
    answers: [
      { text: 'strcpy', isRight: false },
      { text: 'stralloc', isRight: false },
      { text: 'strdup', isRight: true },
      {
        text: 'в стандартной библиотеке языка C нет такой функции',
        isRight: false,
      },
      { text: 'strmov', isRight: false },
    ],
  },
  {
    question:
      'Класс хранения в языке C, применяемый по умолчанию для глобальных переменных:',
    answers: [
      { text: 'extern', isRight: false },
      { text: 'global', isRight: false },
      { text: 'register', isRight: false },
      { text: 'auto', isRight: false },
      { text: 'static', isRight: true },
    ],
  },
  {
    question: 'Инструкция для умножения беззнаковых чисел называется:',
    answers: [
      { text: 'Mul', isRight: true },
      { text: 'Times', isRight: false },
      { text: 'Div', isRight: false },
      { text: 'Imul', isRight: false },
      { text: 'Mod', isRight: false },
    ],
  },
  {
    question:
      'Выберите правильный способ записи целочисленного литерала в языке ассемблера:',
    answers: [
      { text: '4Cd', isRight: false },
      { text: '4Cb', isRight: false },
      { text: '4Co', isRight: false },
      { text: '4Ch', isRight: true },
      { text: '4Cx', isRight: false },
    ],
  },
  {
    question: 'Инструкция CLD:',
    answers: [
      { text: 'обнуляет регистр DX', isRight: false },
      { text: 'устанавливает флаг DF в значение 0', isRight: true },
      {
        text: 'расширяет значение в регистре DL и записывает его в CX',
        isRight: false,
      },
      { text: 'устанавливает флаг DF в значение 1', isRight: false },
      { text: 'обнуляет регистр DL', isRight: false },
    ],
  },
  {
    question:
      'В какой из перечисленных флагов, как правило, записывается 1, если результат вычислений равен 0?',
    answers: [
      { text: 'SF', isRight: false },
      { text: 'DF', isRight: false },
      { text: 'IF', isRight: false },
      { text: 'CF', isRight: false },
      { text: 'ZF', isRight: true },
    ],
  },
  {
    question: 'Абстрактное синтаксическое дерево — это:',
    answers: [
      {
        text: 'структура данных, содержащая информацию о типах данных программы',
        isRight: false,
      },
      {
        text: 'структура данных, представляющая в памяти транслятора структуру анализируемой программы в удобной для дальнейшей обработки форме, не связанной напрямую с правилами грамматики',
        isRight: true,
      },
      {
        text: 'структура данных, содержащая информацию о выделенной транслятором лексеме, в т.ч. о классе этой лексемы',
        isRight: false,
      },
      {
        text: 'структура данных, содержащая информацию об областях видимости анализируемой программы',
        isRight: false,
      },
      {
        text: 'структура данных, представляющая в памяти транслятора структуру анализируемой программы в соответствии с правилами грамматики',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Функция стандартной библиотеки языка C для принудительной записи накопленных в файловом буфере данных:',
    answers: [
      { text: 'fstore', isRight: false },
      { text: 'fflush', isRight: true },
      { text: 'fsave', isRight: false },
      {
        text: 'в стандартной библиотеке языка C нет такой функции',
        isRight: false,
      },
      { text: 'fwrite', isRight: false },
    ],
  },
  {
    question:
      'Для объявления двумерного массива a размером 5×8 с элементами типа int в языке C следует записать:',
    answers: [
      { text: 'int a[] = {5, 8};', isRight: false },
      { text: 'int a[5; 8];', isRight: false },
      { text: 'int a[5] of int[8];', isRight: false },
      { text: 'int a[5][8];', isRight: true },
      { text: 'int a[5, 8];', isRight: false },
    ],
  },
  {
    question:
      'Функция стандартной библиотеки языка C для освобождения ранее выделенного блока динамической памяти:',
    answers: [
      { text: 'free', isRight: true },
      { text: 'delete', isRight: false },
      { text: 'dispose', isRight: false },
      {
        text: 'стандартной библиотекой языка C не поддерживается динамическое выделение памяти',
        isRight: false,
      },
      { text: 'malloc', isRight: false },
    ],
  },
  {
    question:
      'Какая из перечисленных инструкций не оказывает никакого влияния ни на какие регистры процессора?',
    answers: [
      { text: 'mov cx, cx', isRight: true },
      { text: 'and cx, cx', isRight: false },
      { text: 'or cx, 0', isRight: false },
      { text: 'test cx, 0', isRight: false },
      { text: 'cmp cx, 0', isRight: false },
    ],
  },
  {
    question:
      'Символы %f в форматной строке функции printf означают, что очередное значение следует рассматривать и форматировать:',
    answers: [
      { text: 'как целое 16-чное число без знака', isRight: false },
      { text: 'как символьную величину', isRight: false },
      { text: 'как вещественное число', isRight: true },
      { text: 'как целое 10-чное число со знаком', isRight: false },
      { text: 'как целое 8-чное число без знака', isRight: false },
    ],
  },
  {
    question:
      'Если среди int, short int, long int, char и long long int размеры всех типов различны, то по убыванию размеров первым будет:',
    answers: [
      { text: 'long int', isRight: false },
      { text: 'long long int', isRight: true },
      { text: 'int', isRight: false },
      { text: 'short int', isRight: false },
      { text: 'char', isRight: false },
    ],
  },
  {
    question: 'Основная операция, выполняемая инструкцией LODSB:',
    answers: [
      { text: 'AL [ES:DI]', isRight: false },
      { text: '[ES:DI] AL', isRight: false },
      { text: 'AX [ES:DI]', isRight: false },
      { text: 'AX [DS:SI]', isRight: false },
      { text: 'AL [DS:SI]', isRight: true },
    ],
  },
  {
    question: 'Инструкция CALL:',
    answers: [
      {
        text: 'передаёт управление инструкции, заданной меткой, ничего не записывая в стек',
        isRight: false,
      },
      {
        text: 'помещает в стек значение регистра FLAGS и передаёт управление инструкции, заданной меткой',
        isRight: false,
      },
      {
        text: 'помещает в стек адрес следующей инструкции и передаёт управление инструкции, заданной меткой',
        isRight: true,
      },
      {
        text: 'помещает в стек свой адрес и передаёт управление инструкции, заданной меткой',
        isRight: false,
      },
      {
        text: 'помещает в стек значение регистра AX и передаёт управление инструкции, заданной меткойандом',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Какая из перечисленных инструкций никогда не изменяет значений своих операндов?',
    answers: [
      { text: 'adc', isRight: false },
      { text: 'xor', isRight: false },
      { text: 'sbb', isRight: false },
      { text: 'not', isRight: false },
      { text: 'test', isRight: true },
    ],
  },
  {
    question: 'Основная операция, выполняемая инструкцией MOVSW:',
    answers: [
      { text: '[ES:DI] [DS:SI], 1 байт', isRight: false },
      { text: '[ES:DI] [DS:SI], 2 байта', isRight: true },
      { text: '[ES:DI] [CS:IP], 2 байта', isRight: false },
      { text: '[DS:SI] [ES:DI], 2 байта', isRight: false },
      { text: '[DS:SI] [ES:DI], 1 байт', isRight: false },
    ],
  },
  {
    question:
      'Функция стандартной библиотеки языка C для закрытия ранее открытых файлов:',
    answers: [
      { text: 'funload', isRight: false },
      { text: 'fclose', isRight: true },
      { text: 'freset', isRight: false },
      {
        text: 'в стандартной библиотеке языка C нет такой функции',
        isRight: false,
      },
      { text: 'fstop', isRight: false },
    ],
  },
  {
    question: 'Инструкция CLI:',
    answers: [
      { text: 'устанавливает флаг IF в значение 0', isRight: true },
      { text: 'инвертирует значение регистра CL', isRight: false },
      { text: 'устанавливает флаг IF в значение 1', isRight: false },
      { text: 'вызывает прерывание', isRight: false },
      {
        text: 'преобразует младшую часть регистра в знаковое целое число',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Результат работы инструкции SHL аналогичен результату работы инструкции:',
    answers: [
      { text: 'rol', isRight: false },
      { text: 'sal', isRight: true },
      { text: 'clc', isRight: false },
      { text: 'rcl', isRight: false },
      { text: 'stc', isRight: false },
    ],
  },
  {
    question: 'Инструкция SAL:',
    answers: [
      { text: 'выполняет арифметический сдвиг вправо', isRight: false },
      { text: 'выполняет логический сдвиг вправо', isRight: false },
      { text: 'выполняет арифметический сдвиг влево', isRight: true },
      { text: 'выполняет циклический сдвиг влево', isRight: false },
      {
        text: 'выполняет расширенный циклический сдвиг влево через флаг CF',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Какая из перечисленных инструкций может изменить значения сразу двух своих операндов?',
    answers: [
      { text: 'test', isRight: false },
      { text: 'xor', isRight: false },
      { text: 'xchg', isRight: true },
      { text: 'cmp', isRight: false },
      { text: 'and', isRight: false },
    ],
  },
  {
    question:
      'Каким будет результат выполнения следующего фрагмента кода на языке C? (x = 42; y = ++x + 5; )',
    answers: [
      { text: 'x = 42, y = 47', isRight: false },
      { text: 'x = 43, y = 47', isRight: false },
      { text: 'x = 42, y = 48', isRight: false },
      { text: 'x = 43, y = 48', isRight: true },
      { text: 'в коде есть случай неопределённого поведения', isRight: false },
    ],
  },
  {
    question: 'При беззнаковом расширении числа:',
    answers: [
      {
        text: 'старшая часть результата заполняется единицами, младшая равна исходному значению',
        isRight: false,
      },
      {
        text: 'старшая часть результата заполняется нулями, младшая равна исходному значению',
        isRight: true,
      },
      {
        text: 'старшая часть результата равна исходному значению, младшая заполняется единицами',
        isRight: false,
      },
      {
        text: 'старшая часть результата заполняется значением знакового бита исходного числа, младшая равна исходному значению',
        isRight: false,
      },
      {
        text: 'старшая часть результата равна исходному значению, младшая заполняется нулями',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Какая из перечисленных инструкций оставит в регистре AX значение, отличное от остальных?',
    answers: [
      { text: 'and ax, ax', isRight: true },
      { text: 'mov ax, 0', isRight: false },
      { text: 'xor ax, ax', isRight: false },
      { text: 'and ax, 0', isRight: false },
      { text: 'sub ax, ax', isRight: false },
    ],
  },
  {
    question: 'Основная операция, выполняемая инструкцией CMPSB:',
    answers: [
      { text: 'Сравнение байтов по адресам CS:IP и SS:SP', isRight: false },
      { text: 'Сравнение байтов по адресам DS:SI и ES:DI', isRight: true },
      {
        text: 'Сравнение слов (2 байта) по адресам DS:SI и ES:DI',
        isRight: false,
      },
      {
        text: 'Сравнение слов (2 байта) по адресам ES:SI и DS:DI',
        isRight: false,
      },
      { text: 'Сравнение байтов по адресам ES:SI и DS:DI', isRight: false },
    ],
  },
  {
    question: 'Инструкция TEST выполняет вычисления аналогичные инструкции:',
    answers: [
      { text: 'div', isRight: false },
      { text: 'rcl', isRight: false },
      { text: 'cbw', isRight: false },
      { text: 'sub', isRight: false },
      { text: 'and', isRight: true },
    ],
  },
  {
    question: 'Какая из перечисленных инструкций эквивалентна инструкции je?',
    answers: [
      { text: 'jnz', isRight: false },
      { text: 'jb', isRight: false },
      { text: 'jc', isRight: false },
      { text: 'ja', isRight: false },
      { text: 'jz', isRight: true },
    ],
  },
  {
    question:
      'Имеется следующий фрагмент кода на языке C: (int arr[5] = {3, 5, 8, 13};) Значение элемента arr[4] будет:',
    answers: [
      { text: '0', isRight: true },
      { text: '14', isRight: false },
      { text: 'не определено', isRight: false },
      {
        text: 'программа с таким фрагментом кода не будет скомпилирована',
        isRight: false,
      },
      { text: '21', isRight: false },
    ],
  },
  {
    question:
      'Какой из перечисленных флагов управляет работой инструкций для обработки строковых данных и массивов?',
    answers: [
      { text: 'ZF', isRight: false },
      { text: 'IF', isRight: false },
      { text: 'DF', isRight: true },
      { text: 'CF', isRight: false },
      { text: 'SF', isRight: false },
    ],
  },
  {
    question:
      'Этап работы транслятора, заключающийся в замене внутреннего представления анализируемой программы эквивалентным, но имеющим лучшие характеристики:',
    answers: [
      { text: 'лексический анализ', isRight: false },
      { text: 'оптимизация', isRight: true },
      { text: 'синтаксический анализ', isRight: false },
      { text: 'семантический анализ', isRight: false },
      { text: 'генерация кода', isRight: false },
    ],
  },
  {
    question: 'Инструкция POPA:',
    answers: [
      {
        text: 'извлекает значение с вершины стека в регистр FS',
        isRight: false,
      },
      {
        text: 'извлекает значение всех регистров общего назначения с вершины стека',
        isRight: true,
      },
      { text: 'извлекает с вершины стека в регистр AX', isRight: false },
      {
        text: 'извлекает значение с вершины стека в регистр SP',
        isRight: false,
      },
      {
        text: 'извлекает значение с вершины стека в регистр FLAGS',
        isRight: false,
      },
    ],
  },
  {
    question: 'Младшая часть регистра AX называется:',
    answers: [
      { text: 'EAX', isRight: false },
      {
        text: 'у младшей части регистра AX нет отдельного названия',
        isRight: false,
      },
      { text: 'AH', isRight: false },
      { text: 'AL', isRight: true },
      { text: 'RAX', isRight: false },
    ],
  },
  {
    question:
      'Какое из перечисленных действий не выполняется процессором при вызове обработчика прерывания:',
    answers: [
      { text: 'флаг IF устанавливается в значение 0', isRight: false },
      { text: 'в стек помещается значение регистра CS', isRight: false },
      { text: 'в стек помещается значение регистра FLAGS', isRight: false },
      { text: 'в стек помещается значение регистра IP', isRight: false },
      { text: 'регистр СХ обнуляется', isRight: true },
    ],
  },
  {
    question: 'Точка входа в программе на языке C представлена:',
    answers: [
      { text: 'блоком begin...end.', isRight: false },
      { text: 'в программах на языке C нет точек входа', isRight: false },
      { text: 'функцией с именем main', isRight: true },
      { text: 'блоком операторов в фигурных скобках', isRight: false },
      { text: 'функцией с именем start', isRight: false },
    ],
  },
  {
    question: 'Максимальный размер COM-программы для MS-DOS составляет:',
    answers: [
      { text: '16 байт', isRight: false },
      { text: '16 КБ', isRight: false },
      { text: '640 КБ', isRight: false },
      { text: '64 КБ', isRight: true },
      { text: '1 МБ', isRight: false },
    ],
  },
  {
    question:
      'Выберите фрагмент кода на языке C, в котором обе объявленные переменные — указатели:',
    answers: [
      { text: 'double x*, y*;', isRight: false },
      { text: 'double* x, y;', isRight: false },
      { text: 'double& x, y;', isRight: false },
      { text: 'double &x, &y;', isRight: false },
      { text: 'double *x, *y;', isRight: true },
    ],
  },
  {
    question:
      'Имеется следующий фрагмент кода на языке C: (int arr[4][3] = { {1, 3, 5}, {2, 4, 6}, {3, 5, 7} };) Этот фрагмент кода:',
    answers: [
      {
        text: 'программа с таким фрагментом кода не будет скомпилирована',
        isRight: false,
      },
      {
        text: 'объявляет двумерный массив arr, в котором три столбца проинициализированы заданными значениями, а значения элементов четвёртого столбца не определены',
        isRight: false,
      },
      {
        text: 'объявляет двумерный массив arr, в котором три строки проинициализированы заданными значениями, а значения элементов четвёртой строки не определены',
        isRight: false,
      },
      {
        text: 'объявляет двумерный массив arr, в котором три строки проинициализированы заданными значениями, а элементы четвёртой строки содержат нулевые значения',
        isRight: true,
      },
      {
        text: 'объявляет двумерный массив arr, в котором три столбца проинициализированы заданными значениями, а элементы четвёртого столбца содержат нулевые значения',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Функция стандартной библиотеки языка C для определения текущей позиции в открытом файле:',
    answers: [
      {
        text: 'в стандартной библиотеке языка C нет такой функции',
        isRight: false,
      },
      { text: 'fposget', isRight: false },
      { text: 'ftell', isRight: true },
      { text: 'freadpos', isRight: false },
      { text: 'filepos', isRight: false },
    ],
  },
  {
    question:
      'Имеется следующий фрагмент кода на языке C: (int arr[] = {1, 3, 5};) Этот фрагмент кода:',
    answers: [
      {
        text: 'объявляет одномерный массив arr из 3 элементов и инициализирует их значениями 1, 3 и 5',
        isRight: true,
      },
      {
        text: 'объявляет переменную-указатель и помещает в неё адрес области памяти, где будут записаны числа, указанные в фигурных скобках',
        isRight: false,
      },
      {
        text: 'объявляет трёхмерный массив arr с размерностями 1×3×5',
        isRight: false,
      },
      {
        text: 'объявляет перечислимый тип данных, множество значений которого задано в фигурных скобках',
        isRight: false,
      },
      {
        text: 'программа с таким фрагментом кода не будет скомпилирована',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Имеется следующий фрагмент кода на языке С: (int a[5]; int *p; p = a + 3;) Последняя строка в этом фрагменте кода:',
    answers: [
      {
        text: 'записывает в переменную р значение элемента массива а с индексом 3',
        isRight: false,
      },
      {
        text: 'записывает в переменную р адрес элемента массива а с индексом 3',
        isRight: true,
      },
      {
        text: 'записывает в переменную р адрес элемента массива а с индексом 2',
        isRight: false,
      },
      {
        text: 'записывает в переменную р значение элемента массива а с индексом 2',
        isRight: false,
      },
      { text: 'содержит случай неопределённого поведения', isRight: false },
    ],
  },
  {
    question: 'Инструкция CBW:',
    answers: [
      {
        text: 'расширяет значение в регистре AX до 2 байт и записывает его в EAX',
        isRight: false,
      },
      {
        text: 'расширяет значение в регистре AX до 2 байт и записывает его в DX:AX',
        isRight: false,
      },
      {
        text: 'расширяет значение произвольного однобайтового операнда до 2 байт и записывает его в операнд-приёмник',
        isRight: false,
      },
      {
        text: 'расширяет значение в регистре AL до 2 байт и записывает его в DL:AL',
        isRight: false,
      },
      {
        text: 'расширяет значение в регистре AL до 2 байт и записывает его в AX',
        isRight: true,
      },
    ],
  },
  {
    question: 'Терминал — это:',
    answers: [
      {
        text: 'структура данных, содержащая информация о выделенной транслятором лексеме, в т.ч. о классе этой лексемы',
        isRight: false,
      },
      { text: 'правило подстановки в грамматике', isRight: false },
      {
        text: 'элемент грамматики, который не может быть раскрыт в более сложную конструкцию',
        isRight: true,
      },
      {
        text: 'структура данных, представляющая в памяти транслятора структуру анализируемой программы',
        isRight: false,
      },
      {
        text: 'часть программы, в которой под данным идентификатором подразумевается данный элемент программы',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Какое ограничение на использование операндов в памяти накладывается для процессоров архитектуры IA-32?',
    answers: [
      { text: 'Значение операнда в памяти нельзя изменять', isRight: false },
      {
        text: 'Размер операнда в памяти не может быть меньше 32 байт',
        isRight: false,
      },
      {
        text: 'Адрес операнда в памяти нельзя задавать с помощью значений в регистрах',
        isRight: false,
      },
      {
        text: 'У инструкции не может быть больше одного явно заданного операнда в памяти',
        isRight: true,
      },
      {
        text: 'Адрес операнда в памяти должен быть кратен 128',
        isRight: false,
      },
    ],
  },
  {
    question: 'Инструкция iret:',
    answers: [
      {
        text: 'возвращает управление прерванной программе путём восстановления из стека значений регистров FLAGS, CS и IP',
        isRight: true,
      },
      {
        text: 'возвращает управление прерванной программу путём восстановления из стека значения регистра FLAGS',
        isRight: false,
      },
      { text: 'завершает работу программы', isRight: false },
      {
        text: 'позволяет завершить функцию с возвращаемым значением, равным значению операнда',
        isRight: false,
      },
      {
        text: 'возвращает управление прерванной программу путём восстановления из стека значений регистров CS и IP',
        isRight: false,
      },
    ],
  },
  {
    question: 'Флаг ZF:',
    answers: [
      {
        text: 'обычно содержит 1, если последний вычисленный результат равен 0, и наоборот',
        isRight: true,
      },
      { text: 'равен 1, если СХ = 0, и наоборот', isRight: false },
      {
        text: 'включает/отключает обработку аппаратных прерываний',
        isRight: false,
      },
      {
        text: 'становится равным 1 в случае переноса из/заёма в старший разряд при сложении вычитании',
        isRight: false,
      },
      {
        text: 'влияет на направление обработки строковых данных',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Имеется следующий фрагмент кода на языке C: (int arr[5] = {}; Значение элемента arr[4] будет:)',
    answers: [
      { text: '4', isRight: false },
      { text: '0', isRight: true },
      {
        text: 'программа с таким фрагментом кода не будет скомпилирована',
        isRight: false,
      },
      { text: '5', isRight: false },
      { text: 'не определено', isRight: false },
    ],
  },
  {
    question:
      'Инструкция LООР для подсчёта количества оставшихся итераций использует регистр:',
    answers: [
      { text: 'CX', isRight: true },
      { text: 'IP', isRight: false },
      { text: 'AX', isRight: false },
      { text: 'SI', isRight: false },
      { text: 'FLAGS', isRight: false },
    ],
  },
  {
    question:
      'Функция стандартной библиотеки языка С для поиска первого вхождения заданного символа:',
    answers: [
      { text: 'strchr', isRight: true },
      { text: 'strfind', isRight: false },
      {
        text: 'в стандартной библиотеке языка С нет такой функции',
        isRight: false,
      },
      { text: 'strsearch', isRight: false },
      { text: 'strcmp', isRight: false },
    ],
  },
  {
    question: 'Основная операция, выполняемая инструкцией MOVSB:',
    answers: [
      { text: '[ES:DI] [DS:SI], 1 байт', isRight: true },
      { text: '[ES:DI] [DS:SI], 2 байта', isRight: false },
      { text: '[DS:SI] [ES:DI], 2 байта', isRight: false },
      { text: '[ES:DI] [CS:IP], 2 байта', isRight: false },
      { text: '[DS:SI] [ES:DI], 1 байт', isRight: false },
    ],
  },
  {
    question:
      'При вызове функции scanf фактические параметры, следующие после форматной строки:',
    answers: [
      {
        text: 'должны быть адресами областей памяти, в которые должны записываться вводимые значения',
        isRight: true,
      },
      { text: 'должны быть массивами', isRight: false },
      {
        text: 'должны быть переменными, расположенными в памяти последовательно',
        isRight: false,
      },
      { text: 'должны всегда начинаться с амперсанда &', isRight: false },
      { text: 'должны быть переменными размером не менее int', isRight: false },
    ],
  },
  {
    question:
      'Какая из перечисленных инструкций не является инструкцией перехода (не может использоваться для передачи управления другой части программы)?',
    answers: [
      { text: 'nop', isRight: true },
      { text: 'jmp', isRight: false },
      { text: 'loop', isRight: false },
      { text: 'call', isRight: false },
      { text: 'retf', isRight: false },
    ],
  },
  {
    question: 'Логическая операция НЕ в языке C обозначается:',
    answers: [
      { text: '^', isRight: false },
      { text: '!=', isRight: false },
      { text: '=~', isRight: false },
      { text: '~', isRight: false },
      { text: '!', isRight: true },
    ],
  },
  {
    question: 'Инструкция STD:',
    answers: [
      { text: 'устанавливает флаг DF в значение 0', isRight: false },
      {
        text: 'вызывает процедуру по соглашению вызова stdcall',
        isRight: false,
      },
      {
        text: 'записывает в регистр DX значение, в котором все биты единичные',
        isRight: false,
      },
      {
        text: 'записывает в регистр DL значение, в котором все биты единичные',
        isRight: false,
      },
      { text: 'устанавливает флаг DF в значение 1', isRight: true },
    ],
  },
  {
    question:
      'В какой из перечисленных флагов, как правило, записывается знаковый бит результата?',
    answers: [
      { text: 'IF', isRight: false },
      { text: 'CF', isRight: false },
      { text: 'DF', isRight: false },
      { text: 'ZF', isRight: false },
      { text: 'SF', isRight: true },
    ],
  },
  {
    question:
      'В языке C для обозначения типа, состоящего из полей различных типов, начинающихся с одного и того же места в памяти, применяется ключевое слово:',
    answers: [
      { text: 'struct', isRight: false },
      { text: 'union', isRight: true },
      { text: 'class', isRight: false },
      { text: 'absolute', isRight: false },
      { text: 'record', isRight: false },
    ],
  },
  {
    question: 'Директива препроцессора языка C для объявления макросов:',
    answers: [
      { text: 'у препроцессора языка C нет такой возможности', isRight: false },
      { text: '#define', isRight: true },
      { text: '#macros', isRight: false },
      { text: '#macro', isRight: false },
      { text: '#create', isRight: false },
    ],
  },
  {
    question: 'Сегменты в реальном режиме (real-address mode):',
    answers: [
      {
        text: 'расположены с наложением друг на друга, начинаясь каждые 16 байт',
        isRight: true,
      },
      { text: 'начинаются с физического адреса $A000', isRight: false },
      { text: 'расположены непосредственно друг за другом', isRight: false },
      {
        text: 'расположены с наложением друг на друга, начинаясь каждые 16 бит',
        isRight: false,
      },
      {
        text: 'располагаются произвольно в соответствии с выбранными ОС настройками',
        isRight: false,
      },
    ],
  },
  {
    question: 'Инструкция PUSHF:',
    answers: [
      { text: 'помещает в стек значение регистра AX', isRight: false },
      { text: 'помещает в стек значение регистра FS', isRight: false },
      { text: 'помещает в стек значение регистра FLAGS [3]', isRight: true },
      { text: 'помещает в стек значение регистра SP', isRight: false },
      {
        text: 'помещает в стек значения всех регистров общего назначения',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Какая из перечисленных инструкций НЕ использует никаких регистров общего назначения НЕЯВНО?',
    answers: [
      { text: 'shl', isRight: true },
      { text: 'stosw', isRight: false },
      { text: 'loop', isRight: false },
      { text: 'idiv', isRight: false },
      { text: 'mul', isRight: false },
    ],
  },
  {
    question:
      'В текстовых видеорежимах при записи изображения в видеопамяти НЕ хранится:',
    answers: [
      {
        text: 'информация о том, должен ли символ мигать, или его яркости [3]',
        isRight: false,
      },
      { text: 'код символа, отображаемого в знакоместе', isRight: false },
      {
        text: 'информация о расположении знакоместа на экране // попробуйте этот варик',
        isRight: true,
      },
      { text: 'цвет фона знакоместа', isRight: false },
      { text: 'цвет символа, отображаемого в знакоместе', isRight: false },
    ],
  },
  {
    question:
      'Значение какого сегментного регистра используется процессором при считывании машинного кода?',
    answers: [
      { text: 'DS', isRight: false },
      { text: 'SS', isRight: false },
      { text: 'FS', isRight: false },
      { text: 'CS', isRight: true },
      { text: 'ES', isRight: false },
    ],
  },
  {
    question:
      'Инструкция, позволяющая изменить знак числа на противоположный без изменения модуля числа, называется:',
    answers: [
      { text: 'not', isRight: false },
      { text: 'inv', isRight: false },
      { text: 'min', isRight: false },
      { text: 'sgn', isRight: false },
      { text: 'neg', isRight: true },
    ],
  },
  {
    question: 'REP — это:',
    answers: [
      { text: 'директива ассемблера', isRight: false },
      { text: 'метка', isRight: false },
      { text: 'инструкция', isRight: false },
      { text: 'название регистра', isRight: false },
      { text: 'префикс', isRight: true },
    ],
  },
  {
    question: 'Побочным эффектом операции присваивания в языке C является:',
    answers: [
      { text: 'запись значения в правый операнд', isRight: false },
      { text: 'вычисление значения левого операнда', isRight: false },
      { text: 'вычисление значения правого операнда', isRight: false },
      {
        text: 'присваивание в языке C — это оператор, а не операция',
        isRight: false,
      },
      { text: 'запись значения в левый операнд', isRight: true },
    ],
  },
  {
    question:
      'Какого сегментного регистра нет у процессоров архитектуры IA-32?',
    answers: [
      { text: 'KS', isRight: true },
      { text: 'DS', isRight: false },
      { text: 'SS', isRight: false },
      { text: 'CS', isRight: false },
      { text: 'ES', isRight: false },
    ],
  },
  {
    question: 'Операция «не равно» в языке C обозначается:',
    answers: [
      { text: '~=', isRight: false },
      { text: '!=', isRight: true },
      { text: '=~', isRight: false },
      { text: '!', isRight: false },
      { text: '==', isRight: false },
    ],
  },
  {
    question: 'Инструкция RСR:',
    answers: [
      { text: 'выполняет логический сдвиг вправо', isRight: false },
      { text: 'выполняет арифметический сдвиг вправо', isRight: false },
      {
        text: 'выполняет расширенный циклический сдвиг вправо через флаг CF',
        isRight: true,
      },
      { text: 'выполняет циклический сдвиг вправо', isRight: false },
      {
        text: 'выполняет расширенный циклический сдвиг влево через флаг CF',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Директива DB позволяет задавать набор данных, каждый элемент которого имеет размер:',
    answers: [
      { text: '16 бит', isRight: false },
      { text: '2 байта', isRight: false },
      { text: '1 байт', isRight: true },
      { text: '1 бит', isRight: false },
      { text: '4 байта', isRight: false },
    ],
  },
  {
    question: 'Основная операция, выполняемая инструкцией CMPSW:',
    answers: [
      { text: 'Сравнение байтов по адресам ES:SI и DS:DI', isRight: false },
      { text: 'Сравнение байтов по адресам CS:IP и SS:SP', isRight: false },
      {
        text: 'Сравнение слов (2 байта) по адресам DS:SI и ES:DI [4]',
        isRight: true,
      },
      {
        text: 'Сравнение слов (2 байта) по адресам ES:SI и DS:DI',
        isRight: false,
      },
      { text: 'Сравнение байтов по адресам DS:SI и ES:DI', isRight: false },
    ],
  },
  {
    question:
      'Каким будет результат выполнения следующего фрагмента кода на языке C? (int x; int y = (x = 3, 3 * x);)',
    answers: [
      { text: 'Значение x не определено, y = 9', isRight: false },
      { text: 'x = 3, y = 9', isRight: true },
      { text: 'x = 3, y = 3', isRight: false },
      { text: 'Код содержит случай неопределённого поведения', isRight: false },
      { text: 'x = 3, значение y не определено', isRight: false },
    ],
  },
  {
    question:
      'Этап работы транслятора, заключающийся в определении структуры анализируемой программы, взаимосвязей между отдельными образующими её лексемами:',
    answers: [
      { text: 'синтаксический анализ', isRight: true },
      { text: 'семантический анализ', isRight: false },
      { text: 'оптимизация', isRight: false },
      { text: 'генерация кода', isRight: false },
      { text: 'лексический анализ', isRight: false },
    ],
  },
  {
    question:
      'Этап выполнения инструкции процессором, на котором происходит разбор её машинного кода, называется:',
    answers: [
      { text: 'Write-Back', isRight: false },
      { text: 'Read', isRight: false },
      { text: 'Decode', isRight: true },
      { text: 'Execute', isRight: false },
      { text: 'Fetch', isRight: false },
    ],
  },
  {
    question:
      'Функция стандартной библиотеки языка C для изменения текущей позиции в открытом файле:',
    answers: [
      { text: 'fseek', isRight: true },
      { text: 'fmove', isRight: false },
      {
        text: 'в стандартной библиотеке языка C нет такой функции',
        isRight: false,
      },
      { text: 'fpos', isRight: false },
      { text: 'fchange', isRight: false },
    ],
  },
  {
    question: 'Для вызова большинства функций MS-DOS используется инструкция:',
    answers: [
      { text: 'clc', isRight: false },
      { text: 'mov ah, $09', isRight: false },
      { text: 'stosw', isRight: false },
      { text: 'push fs', isRight: false },
      { text: 'int 21h', isRight: true },
    ],
  },
  {
    question: 'Основная операция, выполняемая инструкцией SCASB:',
    answers: [
      { text: 'Сравнение AL и байта по адресу ES:DI', isRight: true },
      { text: 'Рисование на экране', isRight: false },
      {
        text: 'Сравнение AX и слова (2 байта) по адресу DS:SI',
        isRight: false,
      },
      { text: 'Сравнение AL и байта по адресу DS:SI', isRight: false },
      {
        text: 'Сравнение AX и слова (2 байта) по адресу ES:DI',
        isRight: false,
      },
    ],
  },
  {
    question:
      'В какой из перечисленных флагов записывается 1, если при сложении чисел возник перенос из старшего разряда?',
    answers: [
      { text: 'SF', isRight: false },
      { text: 'IF', isRight: false },
      { text: 'DF', isRight: false },
      { text: 'ZF', isRight: false },
      { text: 'CF', isRight: true },
    ],
  },
  {
    question:
      'Результатом вычисления операции присваивания в языке C является:',
    answers: [
      { text: 'значение левого операнда', isRight: false },
      {
        text: 'присваивание в языке C — это оператор, а не операция',
        isRight: false,
      },
      { text: 'запись значения в левый операнд', isRight: false },
      { text: 'запись значения в правый операнд', isRight: false },
      { text: 'значение правого операнда', isRight: true },
    ],
  },
  {
    question:
      'В языке C для обозначения типа, включающего в себя только перечисленные программистом значения (перечисляемого типа), применяется ключевое слово:',
    answers: [
      { text: 'object', isRight: false },
      { text: 'class', isRight: false },
      { text: 'специальное ключевое слово не требуется', isRight: false },
      { text: 'enum', isRight: true },
      { text: 'array', isRight: false },
    ],
  },
  {
    question:
      'Выберите НЕправильное утверждение о таблице векторов прерываний в реальном режиме (real-address mode):',
    answers: [
      { text: 'не может быть изменена программно', isRight: true },
      { text: 'расположена по адресу $0000:$0000', isRight: false },
      {
        text: 'представляет собой массив адресов (указателей)',
        isRight: false,
      },
      { text: 'содержит 256 элементов', isRight: false },
      {
        text: 'каждый элемент состоит из 4 байт — номера сегмента (2 байта) и смещения (2 байта) первой инструкции обработчика прерывания',
        isRight: false,
      },
    ],
  },
  {
    question:
      'При задании 16-битного смещения для операнда в памяти в реальном режиме (real-address mode) НЕЛЬЗЯ использовать регистр:',
    answers: [
      { text: 'SP', isRight: true },
      { text: 'BX', isRight: false },
      { text: 'BP', isRight: false },
      { text: 'DI', isRight: false },
      { text: 'SI', isRight: false },
    ],
  },
  {
    question:
      'Инструкции условного перехода выполняют или не выполняют переход в зависимости от:',
    answers: [
      { text: 'количества ядер в процессоре', isRight: false },
      { text: 'значений флагов', isRight: true },
      { text: 'расположения метки по отношению к инструкции', isRight: false },
      { text: 'значения регистра AX', isRight: false },
      { text: 'режима работы процессора', isRight: false },
    ],
  },
  {
    question: 'Полный адрес в реальном режиме (real-address mode) состоит из:',
    answers: [
      {
        text: 'значения в регистре CS и значения в регистра SP',
        isRight: false,
      },
      {
        text: 'номера сегмента (16 бит) и смещения (16 бит) искомых данных относительно начала этого сегмента',
        isRight: true,
      },
      {
        text: '32 битного числа, задающего расстояние от начала оперативной памяти до искомых данных',
        isRight: false,
      },
      {
        text: 'номера сегмента (16 байт) и смещения (16 байт) искомых данных относительно начала этого сегмента',
        isRight: false,
      },
      { text: 'сегмента и сдвига', isRight: false },
    ],
  },
  {
    question:
      'Имеется следующих фрагмент кода на языке С (int x = 10, y = 3;) Результатом вычисления выражения x / y будет число',
    answers: [
      {
        text: '(3), округлённое для представления с конечным количеством знаков мантиссы',
        isRight: false,
      },
      { text: '(3)', isRight: false },
      { text: '1', isRight: false },
      { text: 'NaN', isRight: false },
      { text: '3', isRight: true },
    ],
  },
  {
    question:
      'Если среди int, short int, long int, char и long long int размеры всех типов различны, то по возрастанию размеров вторым будет:',
    answers: [
      { text: 'long long int', isRight: false },
      { text: 'short int', isRight: true },
      { text: 'long int', isRight: false },
      { text: 'char', isRight: false },
      { text: 'int', isRight: false },
    ],
  },
  {
    question: 'Продукция — это:',
    answers: [
      {
        text: 'структура данных, представляющая в памяти транслятора структуру анализируемой программы',
        isRight: false,
      },
      {
        text: 'часть программы, в которой под данным идентификатором подразумевается данный элемент программы',
        isRight: false,
      },
      {
        text: 'элемент грамматики, который не может быть раскрыт в более сложную конструкцию',
        isRight: false,
      },
      { text: 'правило подстановки в грамматике', isRight: true },
      {
        text: 'структура данных, содержащая информацию о выделенной транслятором лексеме, в т.ч. о классе этой лексемы',
        isRight: false,
      },
    ],
  },
  {
    question: 'Смещением в реальном режиме (real-address mode) называется:',
    answers: [
      {
        text: 'расстояние в 16-битных параграфах от начала оперативной памяти до начала какого-либо сегмента',
        isRight: false,
      },
      {
        text: 'расстояние в байтах от начала оперативной памяти до начала какого-либо сегмента',
        isRight: false,
      },
      {
        text: 'расстояние в 16-байтовых параграфах от начала оперативной памяти до начала какого-либо сегмента',
        isRight: false,
      },
      { text: 'действие, выполняемое инструкциями SHL и SHR', isRight: false },
      {
        text: 'часть адреса, равная количеству байт от начала некоторого сегмента до начала данных по этому адресу',
        isRight: true,
      },
    ],
  },
  {
    question: 'Стек в архитектуре IA-32:',
    answers: [
      { text: 'расположен в оперативной памяти', isRight: true },
      { text: 'расположен на диске', isRight: false },
      { text: 'расположен в ПЗУ', isRight: false },
      { text: 'расположен внутри процессора', isRight: false },
      {
        text: 'создаётся самой программой путём вызова специальной функции операционной системы',
        isRight: false,
      },
    ],
  },
  {
    question: 'Необязательный операнд инструкции RET:',
    answers: [
      {
        text: 'задаёт количество байт, которые суммарно должны быть извлечены из стека (включая адрес возврата)',
        isRight: false,
      },
      {
        text: 'задаёт количество элементов, которые дополнительно должны быть извлечены из стека после извлечения адреса возврата',
        isRight: false,
      },
      {
        text: 'задаёт количество байт, которые дополнительно должны быть извлечены из стека перед извлечением адреса возврата',
        isRight: false,
      },
      {
        text: 'задаёт количество байт, которые дополнительно должны быть извлечены из стека после извлечения адреса возврата',
        isRight: true,
      },
      {
        text: 'задаёт количество элементов, которые дополнительно должны быть извлечены из стека перед извлечением адреса возврата',
        isRight: false,
      },
    ],
  },
  {
    question:
      'Класс хранения в языке С, применяемый по умолчанию для локальных переменных:',
    answers: [
      { text: 'static', isRight: false },
      { text: 'auto', isRight: true },
      { text: 'extern', isRight: false },
      { text: 'local', isRight: false },
      { text: 'register', isRight: false },
    ],
  },
  {
    question:
      'Функция стандартной библиотеки языка C для изменения размера ранее выделенного блока динамической памяти:',
    answers: [
      { text: 'free', isRight: false },
      {
        text: 'стандартной библиотекой языка C не поддерживается динамическое выделение памяти',
        isRight: false,
      },
      { text: 'malloc', isRight: false },
      { text: 'realloc', isRight: true },
      { text: 'calloc', isRight: false },
    ],
  },
  {
    question: 'Инструкция ROR:',
    answers: [
      { text: 'выполняет циклический сдвиг влево', isRight: false },
      { text: 'выполняет логический сдвиг вправо', isRight: false },
      { text: 'выполняет арифметический сдвиг вправо', isRight: false },
      {
        text: 'выполняет расширенный циклический сдвиг вправо через флаг CF',
        isRight: false,
      },
      { text: 'выполняет циклический сдвиг вправо', isRight: true },
    ],
  },
  {
    question: 'У инструкции MUL:',
    answers: [
      { text: 'Нет операндов', isRight: false },
      { text: '3 операнда', isRight: false },
      { text: '1 операнд', isRight: true },
      { text: '4 операнда', isRight: false },
      { text: '2 операнда', isRight: false },
    ],
  },
  {
    question:
      'Какой из перечисленных приёмов ускорения выполнения программ на аппаратном уровне НЕ применяется?',
    answers: [
      { text: 'выполнение инструкций в конвейере', isRight: false },
      {
        text: 'кэширование результатов декодирования инструкций',
        isRight: false,
      },
      { text: 'предсказание переходов', isRight: false },
      { text: 'спекулятивное выполнение инструкций', isRight: false },
      { text: 'загрузка и выполнение программы в облаке', isRight: true },
    ],
  },
  {
    question:
      'В инструкциях, реализующих побитовые сдвиги, количество разрядов для сдвига может быть задано регистром',
    answers: [
      { text: 'CX', isRight: false },
      { text: 'CL', isRight: true },
      { text: 'SP', isRight: false },
      { text: 'CH', isRight: false },
      { text: 'CF', isRight: false },
    ],
  },
  {
    question:
      'Тип данных, который используется функциями стандартной библиотеки языка С для идентификации открытых файлов:',
    answers: [
      { text: 'Text', isRight: false },
      { text: 'FILE', isRight: false },
      { text: 'FILE', isRight: false },
      { text: 'FILE *', isRight: true },
      { text: 'file of', isRight: false },
    ],
  },
  {
    question: 'Дальний вызов процедуры отличается от ближнего:',
    answers: [
      {
        text: 'необходимостью поддержки объектно-ориентированного программирования',
        isRight: false,
      },
      { text: 'необходимостью обрабатывать прерывания', isRight: false },
      {
        text: 'необходимостью сохранять в стек не только смещение следующей после CALL инструкции, но и номер сегмента',
        isRight: false,
      },
      {
        text: 'необходимостью передавать параметры через стек',
        isRight: true,
      },
      {
        text: 'необходимостью сохранять в стек значение регистра FLAGS',
        isRight: false,
      },
    ],
  },
  {
    question:
      'При считывании очередной инструкции в реальном режиме (real-address mode) используется адрес:',
    answers: [
      { text: 'SS:SP', isRight: false },
      { text: 'ES:DI', isRight: false },
      { text: 'DS:SI', isRight: false },
      { text: 'CS:IP', isRight: true },
      { text: 'EIP', isRight: false },
    ],
  },
  {
    question:
      'Для объявления двумерного массива с размером 5х8 с элементами типа int в языке Си следует записать:',
    answers: [
      { text: 'int a[5, 8];', isRight: false },
      { text: 'int a = {5, 8};', isRight: false },
      { text: 'int a[5][8];', isRight: true },
      { text: 'int a[5] of int[8];', isRight: false },
      { text: 'int a[5; 8];', isRight: false },
    ],
  },
  {
    question:
      'Какое из перечисленных соглашений вызова предполагает передачу части параметров через регистры общего назначения?',
    answers: [
      { text: 'stdcall', isRight: false },
      { text: 'pascal', isRight: false },
      { text: 'ccall/cdecl', isRight: false },
      { text: 'fastcall', isRight: true },
      { text: 'comcall/safecall', isRight: false },
    ],
  },
  {
    question:
      'Символы %с в форматной строке функции printf означают, что очередное значение следует рассматривать и форматировать:',
    answers: [
      { text: 'как целое 8-чное число без знака', isRight: false },
      { text: 'как целое 10-чное число со знаком', isRight: false },
      { text: 'как вещественное число', isRight: false },
      { text: 'как символьную величину', isRight: true },
      { text: 'как целое 16-чное число без знака', isRight: false },
    ],
  },
  {
    question:
      'Каким будет результат выполнения следующего фрагмента кода на языке С? (int x = 45; if (45 == x | 1 == printf("1")) printf("1");)',
    answers: [
      { text: 'Не будет выведено ничего', isRight: false },
      { text: 'Код содержит ошибку и не будет скомпилирован', isRight: false },
      { text: 'Код содержит случай неопределённого поведения', isRight: false },
      { text: 'ВЫВОД текста «11»', isRight: true },
      { text: 'ВЫВОД текста «1»', isRight: false },
    ],
  },
  {
    question: 'Какая из вышеперечисленных инструкций эквивалентна cbw?',
    answers: [
      { text: 'or ah,-1', isRight: false },
      { text: 'mov ah, $FF', isRight: false },
      { text: 'movzx ax,al', isRight: false },
      { text: 'xor ah,ah', isRight: false },
      { text: 'movsx ax,al', isRight: true },
    ],
  },
  {
    question:
      'Математическая абстракция, реализацией которой является лексический анализатор:',
    answers: [
      { text: 'первообразная', isRight: false },
      { text: 'производная', isRight: false },
      { text: 'множество', isRight: false },
      { text: 'конечный автомат', isRight: true },
      { text: 'матрица', isRight: false },
    ],
  },
  {
    question:
      'Каким будет результат выполнения следующего фрагмента кода на языке C? (x = 10; y = ++x;)',
    answers: [
      { text: 'x = 10, y = 11', isRight: false },
      { text: 'x = 11, y = 10', isRight: false },
      { text: 'x = 11, y = 11', isRight: true },
      { text: 'x = 10, y = 10', isRight: false },
      { text: 'В коде есть случай неопределённого поведения', isRight: false },
    ],
  },
  {
    question:
      'Каким будет результат выполнения следующего фрагмента кода на языке C? (int x = 0; if (0 = x) printf("then"); else printf("else");)',
    answers: [
      { text: 'Код содержит случай неопределённого поведения', isRight: false },
      { text: 'Код содержит ошибку и не будет скомпилирован', isRight: true },
      { text: 'Вывод текста «then»', isRight: false },
      { text: 'Обе ветви оператора if будут проигнорированы', isRight: false },
      { text: 'Вывод текста «else»', isRight: false },
    ],
  },
  {
    question: 'Инструкция RСL:',
    answers: [
      { text: 'выполняет циклический сдвиг влево', isRight: false },
      { text: 'выполняет логический сдвиг влево', isRight: false },
      {
        text: 'выполняет расширенный циклический сдвиг вправо через флаг CF',
        isRight: false,
      },
      {
        text: 'выполняет расширенный циклический сдвиг вправо через флаг CF',
        isRight: false,
      },
      {
        text: 'выполняет расширенный циклический сдвиг влево через флаг CF',
        isRight: true,
      },
    ],
  },
];
