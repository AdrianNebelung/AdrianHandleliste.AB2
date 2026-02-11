import {useState} from "react";
import AddFrom from "./components/AddForm";
import ShoppingList from "./components/ShoppingList";
import "./styles/App.scss";

function App() {
    const [varer, setVarer] = useState([
        {id: 1, navn: "Melk", antall: 2, kjopt: true},
        {id: 2, navn: "Brød", antall: 1, kjopt: false}
    ]);

    const leggTilVare = (navn, antall) => {
        const nyVare = {
            id: crypto.randomUUID(),
            navn,
            antall: Number(antall),
            kjopt: false
        }
        setVarer(prev => [nyVare, ...prev]);
    }

    const handleKjop = (id) => {
        setVarer(prev => prev.map(vare => vare.id === id ? {...vare, kjopt: !vare.kjopt} : vare));
    }

    const oppdaterAntall = (id, nyAntall) => {
        if (nyAntall < 1) return;

        setVarer(prev => prev.map(vare => vare.id === id ? {...vare, antall: Number(nyAntall)} : vare));
    }

    return (
        <main className="container">
            <h1>Handleliste</h1>

            <AddFrom onLeggTilVare={leggTilVare}/>

            <ShoppingList varer={varer} onHandleKjop={handleKjop} onOppdaterAntall={oppdaterAntall}/>
        </main>
    );
}

export default App;