import http from "../utils/axios/request";

export const getNoteList = () => {
  return http({
    url: "/noteInfo",
    method: "GET",
  });
}

export const addNote = (data) => {
  return http({
    url: "/noteInfo",
    method: "POST",
    data
  });
}