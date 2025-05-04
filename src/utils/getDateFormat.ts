export default function getDateFormat(date: Date): string {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "p.m." : "a.m.";

  hours = hours % 12;
  hours = hours ? hours : 12;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  const timeString = `${hours}:${formattedMinutes} ${ampm}`;

  return timeString;
}
