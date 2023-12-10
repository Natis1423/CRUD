import {pool} from '../db.js'

export const getTareas= async (req,res)=>{
   try{
    const [result] = await pool.query('select * from inicio')
    res.json(result)
   }
   catch(error){
    return res.status(500).json({mensaje:error.mensaje})
   }
}
export const getTarea= async (req,res)=>{
try{
    const [result] = await pool.query('select * from inicio where id=?',[req.params.id])//Requerimiento de parametro en este caso el ID
    res.json(result)
}
catch(error){
    return res.status(500).json({mensaje:error.mensaje})
   }
}
export const createTareas= async (req,res)=>{
    try{
        const {correo,contraseña,rol}= req.body
    const [result]=await pool.query('Insert into inicio(correo,contraseña,rol) values (?,?,?)',[correo,contraseña,rol])
    res.json({
       id:result.insertid,correo,contraseña,rol
    })
    }
    catch(error){
        return res.status(500).json({mensaje:error.mensaje})
       }
}
export const updateTareas=async (req,res)=>{
  try{
    const [result]=await pool.query('update  inicio set ? where id=?',[req.body,req.params.id])
    res.json(result)
  }
  catch(error){
    return res.status(500).json({mensaje:error.mensaje})
   }
}
export const deleteTareas=async (req,res)=>{
    try{
        const [result]=await pool.query('delete  from inicio where id=?',[req.params.id])
    res.json(result)
    }
    catch(error){
        return res.status(500).json({mensaje:error.mensaje})
       }
}

