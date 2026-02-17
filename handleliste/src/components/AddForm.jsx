import { useState } from "react";

function AddForm({ onLeggTilVare }) {
    const [navn, setNavn] = useState("");
    const [antall, setAntall] = useState("");
    const [error, setError] = useState("");

    const sendVare = (e) => {
        e.preventDefault();

        if (!navn && !antall) {
            setError("Du må skrive både vare og antall");
            return;
        }

        if (!navn) {
            setError("Skriv navn på varen");
            return;
        } 

        if (!antall || antall < 0) {
            setError("Antall må være et tall større enn 0");
            return;
        }

        onLeggTilVare(navn, antall);
        setNavn("");
        setAntall("");
        setError("");
    }

    return (
        <form onSubmit={sendVare} className="add-form">
            <h4>Vare:</h4>
                <label className="add-form-label" htmlFor="vare-navn">
                    <input id="vare-navn" className="add-form-input" type="text" value={navn} onChange={(e) => setNavn(e.target.value)} placeholder="Egg.."/>
                </label>

                <h4>Antall:</h4>
                    <label className="add-form-label" htmlFor="vare-antall">
                        <input id="vare-antall" className="add-form-input" type="number" min="1" value={antall} onChange={(e) => setAntall(e.target.value)} placeholder="1"/>
                    </label>

            <button type="submit" className="add-form-knapp">Legg til</button>

            {error && (
                <p role="alert" className="add-form-error">
                    {error}
                </p>
            )}
        </form>
    );
}

export default AddForm;