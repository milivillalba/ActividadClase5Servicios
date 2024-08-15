const ctrl = {}


 export const getProducts = (req,res) =>{
    return req.json({
        msg:'Todos los productos'
    })
 }