
import CarteLivre from "./CarteLivre.jsx";

function ListeLivre({ livres, idEnModification, onModifier, onSupprimer, onBasculerLu }) {
    const nbLus = livres.filter((livre) => livre.lu).length;
    const nbTotal = livres.length;

    const modeModification = idEnModification !== null ;

        if (livres.length === 0) {
            return (
                <div className="alert alert-info">
                    <span>Ta bibliotheque est vide.  Ajoute ton premier livre !</span>
                </div>
            );
        }

    return (
         <section className="p-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Mes livres</h2>
                <span className="badge badge-info">{nbLus} / {nbTotal} Lus</span>
            </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {livres.map((livre) => (
                <CarteLivre
                    key={livre.id}
                    livre={livre}
                    estEnModification={modeModification && idEnModification === livre.id}
                    onModifier={onModifier}
                    onSupprimer={onSupprimer}
                    onBasculerLu={onBasculerLu}
                />
            ))
            }
        </div>
       </section>
    );
}

export default ListeLivre;