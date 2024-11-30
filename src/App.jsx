import ItemListContainer from "./Componentes/ItemListContainer";
import Navbar from "./Componentes/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer texto="Hola coders" />
    </>
  );
}

export default App;
