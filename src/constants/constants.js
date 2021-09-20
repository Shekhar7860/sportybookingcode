export const apiUrl = "http://139.59.47.49:3013/api";
// export const FACE_BOOK_APP_ID = 392389209143284;
export const FACE_BOOK_APP_ID = 404006364417995;
let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today
export const INITIAL_EVENTS = [
    {
      id: createEventId(),
      title: "North Rink",
      start: todayStr + "T09:00:00",
    },
    {
      id: createEventId(),
      title: "South Rink",
      start: todayStr + "T12:00:00",
    },
  ];
 export function createEventId() {
    return String(eventGuid++);
  }