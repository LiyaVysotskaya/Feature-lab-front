import { TDocument } from '../types/data';

export const docs = [
  {
    id: 11,
    name: 'Pay',
    description: 'название/описание о чем речь вообще  50–100 знаков, на 2 строчки максимум',
    doctype: {
      id: 3,
      name: 'Оплаты',
    },
    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    pub_date: '2024-03-12T14:42:12.928582Z',
  },
  {
    id: 10,
    name: 'Dog 2 no proj',
    description: 'название/описание о чем речь вообще  50–100 знаков, на 2 строчки максимум',
    doctype: {
      id: 1,
      name: 'Договоры',
    },
    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    pub_date: '2024-03-12T14:41:33.794951Z',
  },
  {
    id: 8,
    name: 'Макет che noProj',
    description:
      'Кратенькое описание что вообще происходит на этом этапе. На 2–3 строчки максимум.',
    doctype: {
      id: 4,
      name: 'Макеты',
    },
    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    pub_date: '2024-02-15T08:49:28.799939Z',
  },
  {
    id: 1,
    name: 'Дог che noProj',
    description: 'название/описание о чем речь вообще  50–100 знаков, на 2 строчки максимум',
    doctype: {
      id: 1,
      name: 'Договоры',
    },
    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    pub_date: '2024-02-15T08:02:22.032386Z',
  },
  {
    id: 1,
    name: 'Дог che noProj',
    description: 'название/описание о чем речь вообще  50–100 знаков, на 2 строчки максимум',
    doctype: {
      id: 1,
      name: 'Приложение 111',
    },
    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    pub_date: '2024-02-15T08:02:22.032386Z',
  },
  {
    id: 1,
    name: 'Кот vys noProj',
    description: 'нормальное влезающее описание без суперпупердлинныхотвратительных слов',
    doctype: {
      id: 1,
      name: 'London is the capital...',
    },
    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    pub_date: '2024-02-15T08:02:22.032386Z',
  },
  {
    id: 1,
    name: 'Кот vys noProj',
    description: 'нормальное влезающее описание без суперпупердлинныхотвратительных слов',
    doctype: {
      id: 1,
      name: 'ABC',
    },
    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    pub_date: '2024-02-15T08:02:22.032386Z',
  },
] as TDocument[];
