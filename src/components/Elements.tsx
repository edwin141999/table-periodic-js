import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getElements } from "../api/api";
import { CATEGORIES } from "../services/utils/categories";
import { Datum } from "../types/types";

export default function Elements() {
  const [elements, setElements] = useState<Datum[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getAll() {
      const data = await getElements();
      setElements(data);
      setLoading(false);
    }
    getAll();
  }, []);

  const colorBackground = (element: Datum) => {
    let color = "";
    CATEGORIES.map((category) => {
      if (category.category === element.category) {
        color = category.color;
      }
    });
    return color;
  };

  return (
    <>
      {loading ? (
        <p className="text-center">Cargando...</p>
      ) : (
        <section className="grid grid-cols-18 gap-1">
          {elements.map((element) => {
            return (
              <Link
                to={`/${element._id}`}
                key={element._id}
                state={{ element: element }}
                style={{
                  gridColumn: `${element.xpos}`,
                  gridRow: `${element.ypos}`,
                }}
                className="hover:scale-110 transition-transform ease-in-out duration-300 "
              >
                <article
                  className="flex flex-col text-black font-semibold h-full text-start p-1"
                  style={{
                    backgroundColor: `#${colorBackground(element)}`,
                  }}
                >
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-[10px]">
                        {element.atomic_mass.toFixed(4)}
                      </span>
                      <span className="text-[8px]">
                        {element.ionization_energies[0]}
                      </span>
                    </div>
                    <span className="font-bold">{element.number}</span>
                  </div>
                  <span className="text-lg font-bold">{element.symbol}</span>
                  <span className="text-xs">{element.name}</span>
                  <span className="text-[8px]">
                    {element.shells.map((shell) => {
                      return `${shell} `;
                    })}
                  </span>
                </article>
              </Link>
            );
          })}
        </section>
      )}
    </>
  );
}
