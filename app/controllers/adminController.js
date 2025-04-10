import * as cafeDataMapper from "../datamapper/cafeDatamapper.js"

export const adminPage = (req,res) => {
    res.render('admin')        
};

export const createCafe = async (req, res) => {
    try {
        const newCafe = await cafeDataMapper.createCafe(req.body)
        res.status(200).redirect('admin')    
    } catch (error) {
        res.status(500).render("error",{title : "500", text : "Erreur serveur"});
    }
    
};

export const filtreCafe = async (req, res) =>{
    try {
        const filtreCafe = await cafeDataMapper.filtreCafe()
        console.log(filtreCafe)
        const allCafe = await cafeDataMapper.allCafe()
        res.render('admin',{filtreCafe, allCafe})
    } catch (error) {
        res.status(500).render("error",{title : "500", text : "Erreur serveur"});
    }
}

export const deleteCafe = async(req,res) =>{
    try {
        const deleteCafe = await cafeDataMapper.deleteCafe(req.body.deleteCafe)
        res.status(200).redirect('admin') 
    } catch (error) {
        res.status(500).render("error",{title : "500", text : "Erreur serveur"});
    }
}

export const modifyCafe = async (req,res) => {
try {
    const modifyCafe = await cafeDataMapper.modifyCafe(req.body.modifyItem, req.body.insertion, req.body.nomCafe)
    res.status(200).redirect('admin') 
} catch (error) {
    console.log(error)
    res.status(500).render("error",{title : "500", text : "Erreur serveur"});
}
}