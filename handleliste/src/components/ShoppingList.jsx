import ShoppingItem from "./ShoppingItem";

function ShoppingList({ varer, onVareKjopt, onOppdaterAntall }) {
    return (
        <section className="shopping-list">
            <h2 className="shopping-list-tittel">Varer</h2>

            <ul className="shopping-list-varer">
                {/* Her har jeg bruk conditional rendering for at denne koden skal fungere ut ifra spesielle omstendigheter */}
                {varer.map(vare => (
                    <ShoppingItem key={vare.id} vare={vare} onVareKjopt={onVareKjopt} onOppdaterAntall={onOppdaterAntall}/>
                ))}
            </ul>
        </section>
    );
}

export default ShoppingList;