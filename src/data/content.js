export const menu = [
  { label: 'Кому помогаем', href: '#cases' },
  { label: 'Программы', href: '#programs' },
  { label: 'Отчёты', href: '#results' },
  { label: 'Новости', href: '#news' },
  { label: 'Контакты', href: '#footer' }
];

export const urgentCases = [
  {
    id: 'eva-krylova',
    name: 'Ева Крылова',
    city: 'г. Самара',
    diagnosis: 'Ретинопатия недоношенных, риск отслойки сетчатки',
    collected: 186000,
    target: 420000
  },
  {
    id: 'ilya-tarasov',
    name: 'Илья Тарасов',
    city: 'г. Тула',
    diagnosis: 'Частичная атрофия зрительного нерва, косоглазие',
    collected: 54000,
    target: 260000
  },
  {
    id: 'sofiya-nechaeva',
    name: 'София Нечаева',
    city: 'г. Пермь',
    diagnosis: 'Врождённая катаракта, нужна операция и реабилитация',
    collected: 97000,
    target: 310000
  }
];

export const programs = [
  {
    id: 'future',
    title: 'Смотри в будущее',
    text: 'Экстренная помощь детям с тяжёлыми заболеваниями зрения в регионах России.'
  },
  {
    id: 'family',
    title: 'Семья рядом',
    text: 'Психологическая и социальная поддержка родителей, сопровождение на каждом этапе.'
  },
  {
    id: 'school',
    title: 'Школа врачей',
    text: 'Стажировки офтальмологов и обмен опытом с ведущими федеральными центрами.'
  }
];

export const stats = [
  { id: 'money', value: '212 млн ₽', label: 'направлено на лечение и реабилитацию' },
  { id: 'children', value: '1 284', label: 'детям помогли сохранить зрение' },
  { id: 'regions', value: '41', label: 'регион подключён к программам фонда' }
];

export const news = [
  {
    id: 'tver-cabinet',
    title: 'Открыли новый кабинет ранней диагностики в Твери',
    date: '18 апреля 2026'
  },
  { id: 'volunteers', title: 'Запустили набор волонтёров-наставников', date: '2 апреля 2026' },
  {
    id: 'run',
    title: 'Благотворительный забег «Вижу цель» собрал 3,4 млн ₽',
    date: '27 марта 2026'
  }
];
