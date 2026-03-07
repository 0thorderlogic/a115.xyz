import { format, isValid, parseISO } from "date-fns";

function safeParseIsoDate(isoDate: string): Date | null {
  const parsed = parseISO(isoDate);
  return isValid(parsed) ? parsed : null;
}

export function formatMonthYear(date: Date): string {
  return format(date, "MMMM yyyy");
}

export function formatDayNumber(date: Date): string {
  return format(date, "d");
}

export function formatReadableDay(date: Date): string {
  return format(date, "EEEE, MMMM do yyyy");
}

export function formatTimeFromIso(isoDate: string): string {
  const parsed = safeParseIsoDate(isoDate);
  return parsed ? format(parsed, "h:mm a") : "";
}

export function dayKeyFromDate(date: Date): string {
  return format(date, "yyyy-MM-dd");
}

export function dayKeyFromIso(isoDate: string): string | null {
  const parsed = safeParseIsoDate(isoDate);
  return parsed ? dayKeyFromDate(parsed) : null;
}
