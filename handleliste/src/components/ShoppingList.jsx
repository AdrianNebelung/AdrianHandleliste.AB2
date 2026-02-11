import ShoppingItem from "./ShoppingItem";

function ShoppingList({varer, onHandleKjop, onOppdaterAntall}) {


    return (
        <ul className="handle-liste">
            {varer.map(vare => (
                <ShoppingItem key={vare.id} vare={vare} onHandleKjop={onHandleKjop} onOppdaterAntall={onOppdaterAntall}/>))}
        </ul>
    );
}

export default ShoppingList;