import * as detailDatamapper from "../datamapper/detailDatamapper.js"

export const detailPage = async (req,res) => {
        try {
        const id = req.params.id
        const oneCafe = await detailDatamapper.oneCafe(id)
        res.render("detail", {oneCafe})    
    } catch (error) {
        console.log(error);
        res.status(500).render("error",{title : "500", text : "Erreur serveur"});
    }
    
}