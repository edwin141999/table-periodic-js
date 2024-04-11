import { useLocation } from "react-router-dom";
import { Datum } from "../types/types";

export default function Element() {
  const location = useLocation();
  const element = location.state.element as Datum;

  return (
    <section>
      <h1>{element.name}</h1>
      <h1>{element.category}</h1>
    </section>
  );
}
