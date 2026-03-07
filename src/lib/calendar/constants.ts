export const CALENDAR_IDS = {
  container: "calendar-container",
  prevMonthButton: "prev-month",
  nextMonthButton: "next-month",
  monthHeader: "current-month-year",
  grid: "calendar-grid",
  modal: "day-modal",
  closeModalButton: "close-modal",
  modalTitle: "modal-title",
  modalEvents: "modal-events",
  noEventsMessage: "no-events-msg",
} as const;

export const CALENDAR_WEEKDAYS = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
] as const;
