import {useState} from "react";
import { GENRES } from "./data/Livre.js";

const FORM_VIDE = { titre: "", auteur: "", annee: "", genre: "Roman", lu: false };

function FormulaireLivre({ livre, onAjouter, onEnregistrer, onAnnuler })  {
    let enModification = (livre !== null);

    const [form, setForm] = useState( FORM_VIDE);
    const [erreur, setErreur] = useState("");
    if (enModification && form.id !==livre.id) {
        setForm({ ...livre, annee: livre.annee.toString() });
    }

    function handleChange(e) {
        const { name, value, type, checked } = e.target;
        setForm({...form,[name]: type === "checkbox" ? checked : value, });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!form.titre || !form.auteur) {
            setErreur(" Le titre et l'auteur sont obligatoires.");
        } 
     return 

     setErreur(" ");
        if (form.annee && isNaN(Number(form.annee))) {
            setErreur(" L'année doit être un nombre."); // Vérification si l'année est un nombre
            return;
        }

        setErreur(" ");
        if (enModification) {
            onEnregistrer({ ...form, id: livre.id, annee:  Number(form.annee) });
            setForm(FORM_VIDE);
            enModification = false;
        } else {
            onAjouter({ ...form, annee: Number(form.annee) });
            setForm(FORM_VIDE);
            enModification = false;
        }
   }
        return (
            <form className="card bg-base-100 shadow" onSubmit={handleSubmit}>
                <div className="card-body">
                    <h2 className="card-title">{enModification ? "Modifier le livre" : "Nouveau livre"}</h2>
                    { // Affichage du message d'erreur si nécessaire
                    (erreur ?
                    ( <div className="label label-error text-sm">
                            <span>{erreur}</span>
                    </div>
                    ) :null
                    )}

                        <fieldset>
                            <legend className="fieldset-legend">Titre</legend>
                            <input className="input w-full" name="titre" placeholder="Ex: Le Petit Prince" value={form.titre}onChange={handleChange}/>
                            
                            <legend className="fieldset-legend">Auteur</legend>
                            <input className="input w-full" name="auteur" placeholder="Ex: Antoine de Saint-Exupéry" value={form.auteur} onChange={handleChange} />

                            <legend className="fieldset-legend">Genre</legend>
                            <select className="select w-full" name="genre" value={form.genre} onChange={handleChange}>
                                {GENRES.map((genre) => (<option key={genre} value={genre}> {genre}</option>))}
                            </select>

                        <legend className="fieldset-legend">Année de publication</legend>    
                        <input className="input w-full" name="annee" placeholder="Ex: 1943" value={form.annee} onChange={handleChange} />

                        <label className="label cursor-pointer gap-3 mt-3">
                        <input type="checkbox" className="checkbox  toggle-success" name="lu" checked={form.lu} onChange={handleChange}  />
                            <span className="label-text"> Deje Lu</span>
                            </label>

                        </fieldset>   

                            <div className="card-actions justify-end mt-2">
                                {( enModification ? 
                                    <button type="button" className="btn btn-ghost" onClick={onAnnuler}>
                                        Annuler
                                    </button>
                                : null
                                )}  

                                {( enModification ?
                                    <button type="submit" className="btn btn-primary">
                                        Enregistrer
                                    </button>
                                    :
                                    <button type="submit" className="btn btn-primary">
                                        Ajouter
                                    </button>
                                )}
                            </div>
                    </div>
                </form>
           );
    }

    export default FormulaireLivre;