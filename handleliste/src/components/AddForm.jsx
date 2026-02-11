import { useState } from "react";

function AddForm({onLeggTilVare}) {
    const [navn, setNavn] = useState("");
    const [antall, setAntall] = useState("");
    const [error, setError] = useState("");

    const sendVare = (e) => {
        e.preventDefault();

        if (!navn.trim() && !antall) {
            setError("Du må skrive vare og antall.");
            return;
        }

        if (!navn.trim()) {
            setError("Skriv inn navn på varen.");
            return;
        }

        if (!antall || antall < 1) {
            setError("Antall må være større enn 0");
            return;
        }

        onLeggTilVare(navn.trim(), antall);
        setNavn("");
        setAntall("");
        setError("");
    }

    return ( 
        <form className="add-form" onSubmit={sendVare}>
            <div className="input">
                <label>
                    <h4>Vare</h4>
                    <input type="text" placeholder="Legg til vare" value={navn} onChange={(e) => setNavn(e.target.value)}/>
                </label>

                <label>
                    <h4>Antall</h4>
                    <input type="number" min="1" placeholder="1" onChange={(e) => setAntall(e.target.value)}/>
                </label>
            </div>

            <button type="submit">Legg til</button>

            {error && <p className="error-melding">{error}</p>}
        </form>
    );
}

export default AddForm;