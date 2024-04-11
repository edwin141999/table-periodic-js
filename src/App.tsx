import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  // TODO: Depende su fase, cambiarle el color
  // HACER QUE PUEDA VER MAS DETALLADO LA INFORMACIÓN DE CADA ELEMENTO

  return (
    <section className="m-5">
      <nav className="flex flex-row justify-between my-5">
        <ul>
          <Link to={"/"}>Home</Link>
        </ul>
        <ul>
          <li>Estados de la materia</li>
        </ul>
      </nav>
      <Outlet />
    </section>
  );
}

export default App;
