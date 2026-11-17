import { COULEURS_GENRE } from "./data/Livre";

function CarteLivre({ livre, estEnModification, onModifier, onSupprimer, onBasculerLu }) {
    const live = livre.lu ? "Lu" : "A lire";

    return (
        <div className={"card bg-base-100 shadow" + (estEnModification ? " ring-2 ring-primary" : "")}>
            <div className="card-body">
                <div className="flex justify-between items-start gap-2">
                    <h3 className="card-title">{livre.titre}</h3>
                    <span className={"badge " + (livre.lu ? "badge-success" : "badge-ghost")}>{live}</span>
                </div>
                <p className="text-sm text-gray-500">{livre.auteur} - {livre.annee}</p>
                <span className={"badge " + COULEURS_GENRE[livre.genre]}>{livre.genre}</span>
                <div className="card-actions items-center justify-between mt-2">
                    <label htmlFor="lu" className="label cursor-pointer">
                        <input type="checkbox" className="checkbox checkbox-success checkbox-sm" checked={livre.lu} onChange={() => onBasculerLu(livre.id)} />
                        <span className="label-text">Lu</span>
                    </label>
                    <div className="flex gap-2">
                        <button className="btn btn-sm btn-primary" onClick={() => onModifier(livre.id)}>Modifier</button>
                        <button className="btn btn-sm btn-error" onClick={() => onSupprimer(livre.id)}>Supprimer</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarteLivre;