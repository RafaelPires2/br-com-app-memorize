import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const formattedCurrentDate = () => {
  const currentDate = new Date();

  const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const dayOfWeekAbbreviated = daysOfWeek[currentDate.getDay()];

  return `${dayOfWeekAbbreviated}, ${format(currentDate, "dd 'de' MMMM, yyyy", { locale: ptBR })}`;
};
