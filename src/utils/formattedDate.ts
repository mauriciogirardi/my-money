export default function formattedDate(date: string) {
  return new Intl.DateTimeFormat('pt-BR').format(new Date(date));
}
