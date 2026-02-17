function ShoppingItem({ vare, onVareKjopt, onOppdaterAntall }) {
    return (
        // På denne li har jeg sett på eksempel ifra AI (Gemini) på hvordan man lager Ternary Operator inni en className. Som gjør at den vil endre styling etter at man har brukt checkbox.
        <li className={`shopping-item ${vare.kjopt ? "shopping-item-kjopt" : ""}`}>
            {/* Her har jeg lagt til to label en input hver. Den første label er for checkbox og den andre er for antallet man kan legge til på varen */}
            <label className="shopping-item-label" htmlFor={`checkbox-${vare.id}`}>
                <input id={`checkbox-${vare.id}`} type="checkbox" className="shopping-item-checkbox" checked={vare.kjopt} onChange={() => onVareKjopt(vare.id)}/>
                {vare.navn}
            </label>

            <label className="shopping-item-antall" htmlFor={`antall-${vare.id}`}>
                Antall:
                <input id={`antall-${vare.id}`} type="number" className="shopping-item-number" min="1" value={vare.antall} onChange={(e) => onOppdaterAntall(vare.id, e.target.value)}/>
            </label>
        </li>
    );
}

export default ShoppingItem;