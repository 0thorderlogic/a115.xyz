export interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  end: string | null;
  isAllDay: boolean;
  link: string;
  location: string | null;
  description: string | null;
  hangoutLink: string | null;
  attendeesCount: number;
}

interface RawGoogleCalendarDate {
  dateTime?: string;
  date?: string;
}

export interface RawGoogleCalendarEvent {
  id?: string;
  summary?: string;
  start?: RawGoogleCalendarDate;
  end?: RawGoogleCalendarDate;
  htmlLink?: string;
  location?: string;
  description?: string;
  hangoutLink?: string;
  attendees?: unknown[];
}

export interface RawGoogleCalendarResponse {
  items?: RawGoogleCalendarEvent[];
}
