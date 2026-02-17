function ShoppingItem({ vare, onVareKjopt, onOppdaterAntall }) {
    return (
        <li className={`shopping-item ${vare.kjopt ? "shopping-item-kjopt" : ""}`}>
            <label className="shopping-item-label" id="checkbox">
                <input htmlFor="checkbox" type="checkbox" className="shopping-item-checkbox" checked={vare.kjopt} onChange={() => onVareKjopt(vare.id)}/>
                {vare.navn}
            </label>

            <label className="shopping-item-antall" id="antall">
                Antall:
                <input htmlFor="antall" type="number" className="shopping-item-number" min="1" value={vare.antall} onChange={(e) => onOppdaterAntall(vare.id, e.target.value)}/>
            </label>
        </li>
    );
}

export default ShoppingItem;