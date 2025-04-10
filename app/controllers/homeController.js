import * as homeDatamapper from "../datamapper/homeDatamapper.js"

export const homePage = async (req,res) => {
    try {
        const allCafe = await homeDatamapper.allCafe()
        res.render('home',{allCafe})        
    } catch (error) {
        console.log(error);
        res.status(500).render("error",{title : "500", text : "Erreur serveur"});
    }

}