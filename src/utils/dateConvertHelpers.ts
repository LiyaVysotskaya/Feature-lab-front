import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';

export const convertDateToShortFormat = (dateString: string) => {
  const date = parseISO(dateString);
  return format(date, 'dd.MM.yyyy');
};

export const convertDateToLongFormat = (dateString: string) => {
  const date = parseISO(dateString);
  return format(date, 'dd MMMM yyyy', { locale: ru });
};
