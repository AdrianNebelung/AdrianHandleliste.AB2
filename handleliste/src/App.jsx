import { useState } from "react";
import AddForm from "./components/AddForm";
import ShoppingList from "./components/ShoppingList";
import "./styles/index.scss";

function App() {
  const [varer, setVarer] = useState([
    { id: 1, navn: "Melk", antall: 2, kjopt: true },
    { id: 2, navn: "Brød", antall: 1, kjopt: false },
  ]);


  {/* Legger til ny vare helt øverst i listen */}
  const leggTilVare = (navn, antall) => {
    const nyVare = {
      id: crypto.randomUUID(), // Her vil det bli generert en tilfeldig kryptert id for varen.
      navn, // Navet på varen vil komme opp (ut ifra bruker input).
      antall: Number(antall), // Antallet vil også komme opp og konverteres til tall (ut ifra brukerinput).
      kjopt: false // Kjøp er satt inn false for at det skal virke mer realistisk når man legger til en vare på listen.
    }

    setVarer([nyVare, ...varer]);
  }

  {/* Varekjopt bestemmer om varen er kjøpt eller ikke ut ifra statusen på id-en, utifra om man checked checkboxen eller ikke. */}
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

      {/* Her så vil den nye varen bli lagt til.*/}
      <AddForm onLeggTilVare={leggTilVare}/>

      {/* Her vil vare listen over varene bli vist. */}
      <ShoppingList varer={varer} onVareKjopt={vareKjopt} onOppdaterAntall={oppdaterAntall}/>
    </main>
  );
}

export default App;