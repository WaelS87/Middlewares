let admins = ['Ada', 'Vim', 'Greta', 'Tim'];

module.exports = (req,res,next) => {
    
    if (admins.includes(req.query.user)){
        next();
    }else {
        res.redirect('noEntry');
    }
}