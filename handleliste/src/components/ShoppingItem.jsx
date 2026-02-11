function ShoppingItem({vare, onHandleKjop, onOppdaterAntall}) {
    
    return (
        <li className={`handle-vare ${vare.kjopt ? "kjopt" : ""}`}>
            <label className="checkbox">
                <input type="checkbox" checked={vare.kjopt} onChange={() => onHandleKjop(vare.id)}/>
                <span className="vare-navn">{vare.navn}</span>
            </label>

            <div className="antall">
                <label htmlFor={`antall-${vare.id}`}>Antall:</label>
                <input id={`antall-${vare.id}`} type="number" min="1" value={vare.antall} onChange={(e) => onOppdaterAntall(vare.id, e.target.value)}/>
            </div>
        </li>
    );
}

export default ShoppingItem;