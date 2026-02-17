import { useState } from "react";
import AddForm from "./components/AddForm";
import ShoppingList from "./components/ShoppingList";
import "./styles/index.scss";

function App() {
  const [varer, setVarer] = useState([
    { id: 1, navn: "Melk", antall: 2, kjopt: true },
    { id: 2, navn: "Brød", antall: 1, kjopt: false },
  ]);

  const leggTilVare = (navn, antall) => {
    const nyVare = {
      id: crypto.randomUUID(),
      navn,
      antall: Number(antall),
      kjopt: false
    }

    setVarer([nyVare, ...varer]);
  }

  const vareKjopt = (vareKj) => {
    setVarer(varer.map(vare => vare.id === vareKj ? {...vare, kjopt: !vare.kjopt} : vare));
  };

  const oppdaterAntall = (vareKj, nyAntall) => {
    if (nyAntall < 1) return;

    setVarer(varer.map(vare => vare.id === vareKj ? {...vare, antall: Number(nyAntall)} : vare));
  };

  return (
    <main className="container">
      <h1 className="tittel">Handleliste</h1>

      <AddForm onLeggTilVare={leggTilVare}/>

      <ShoppingList varer={varer} onVareKjopt={vareKjopt} onOppdaterAntall={oppdaterAntall}/>
    </main>
  );
}

export default App;