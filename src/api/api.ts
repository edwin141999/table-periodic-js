import { Datum } from "../types/types";

export const getElements = async (): Promise<Datum[]> => {
  return fetch("https://kineticzephyr.onrender.com/periodictable")
    .then((res) => res.json())
    .then((data) => {
      return data.data;
    });
};
