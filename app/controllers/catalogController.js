
import * as homeDatamapper from "../datamapper/homeDatamapper.js"

export const catalogPage = async (req,res) => {
    try {
        const allCafe = await homeDatamapper.allCafe()
        res.render('catalogue',{allCafe})       
    } catch (error) {
        res.status(500).render("error",{title : "500", text : "Erreur serveur"});
    }
 
}