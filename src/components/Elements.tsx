import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getElements } from "../api/api";
import { Datum } from "../types/types";

export default function Elements() {
  const [elements, setElements] = useState<Datum[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getAll() {
      const data = await getElements();
      setElements(data);
      setLoading(false);
    }
    getAll();
  }, []);

  const handleViewElement = (id: string, element: Datum) => {
    navigate(`/${id}`, { state: { element: element } });
  };

  return (
    <>
      {loading && <p>Cargando...</p>}
      <section className="grid grid-cols-12">
        {elements.map((element) => {
          return (
            <article
              key={element._id}
              className="flex flex-col border"
              onClick={() => handleViewElement(element._id, element)}
            >
              <span>{element.number}</span>
              <span>{element.symbol}</span>
              <span>{element.name}</span>
              <span>{element.atomic_mass}</span>
              <span>
                {element.shells.map((shell) => {
                  return `${shell} `;
                })}
              </span>
            </article>
          );
        })}
      </section>
    </>
  );
}
