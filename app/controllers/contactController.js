export const contactPage = (req,res) => {
        res.render('contact')        
}

export const form = (req, res) => {
        console.log(req.body.name, req.body.surname, req.body.email, req.body.message)
        res.status(200).redirect('contact')
}