import {pool} from '../db.js'

export const getTareas= async (req,res)=>{
   try{
    const [result] = await pool.query('select * from establecimiento, servicio,manzanas,mujeres' )
    res.json(result)
   }
   catch(error){
    return res.status(500).json({mensaje:error.mensaje})
   }
}

export const getTarea= async (req,res)=>{
try{
    const [result] = await pool.query('select * from servicio where Cod_Serv=?',[req.params.Cod_Serv])//Requerimiento de parametro en este caso el ID
    res.json(result)
}
catch(error){
    return res.status(500).json({mensaje:error.mensaje})
   }
}

 export const createmu= async (req,res)=>{ //MUJERES
    try{
        const {Tipo_Documen,Documento,Primer_Nom,Segundo_Nom,Primer_Ape,Segundo_Ape,Tel,Correo_Elec,Ciudad,Direccion,Ocupacion,Serv_Participa}= req.body
    const [result]=await pool.query('Insert into mujeres(Tipo_Documen,Documento,Primer_Nom,Segundo_Nom,Primer_Ape,Segundo_Ape,Tel,Correo_Elec,Ciudad,Direccion,Ocupacion,Serv_Participa) values (?,?,?,?,?,?,?,?,?,?,?,?)',[Tipo_Documen,Documento,Primer_Nom,Segundo_Nom,Primer_Ape,Segundo_Ape,Tel,Correo_Elec,Ciudad,Direccion,Ocupacion,Serv_Participa])
    res.json({
       Id_Mujer:result.insertId_Mujer,Tipo_Documen,Documento,Primer_Nom,Segundo_Nom,Primer_Ape,Segundo_Ape,Tel,Correo_Elec,Ciudad,Direccion,Ocupacion,Serv_Participa
    })
    }
    catch(error){
        return res.status(400).json({mensaje:error.mensaje})
       }
}  
export const createmanza= async (req,res)=>{ //MANZANAS
    try{
        const {Nombre_Manzana,Localidad,Direccion2,Municipio,MujeresId_Mujer}= req.body
    const [result]=await pool.query('Insert into manzanas(Nombre_Manzana,Localidad,Direccion2,Municipio,MujeresId_Mujer) values (?,?,?,?,?)',[Nombre_Manzana,Localidad,Direccion2,Municipio,MujeresId_Mujer])
    res.json({
        Cod_Manzana :result.insertCod_Manzana,Nombre_Manzana,Localidad,Direccion2,Municipio,MujeresId_Mujer
    })
    }
    catch(error){
        return res.status(400).json({mensaje:error.mensaje})
       }
} 
export const createServici= async (req,res)=>{ //MANZANAS
    try{ 
        const {Nom_Serv,Categ_Serv,Tipo_Serv,Descrip,EstablecimientoCod_Establ}= req.body
    const [result]=await pool.query('Insert into servicio(Nom_Serv,Categ_Serv,Tipo_Serv,Descrip,EstablecimientoCod_Establ) values (?,?,?,?,?)',[Nom_Serv,Categ_Serv,Tipo_Serv,Descrip,EstablecimientoCod_Establ])
    res.json({
        Cod_Serv:result.insertCod_Serv,Nom_Serv,Categ_Serv,Tipo_Serv,Descrip,EstablecimientoCod_Establ
    })
    }
    catch(error){
        return res.status(400).json({mensaje:error.mensaje})
       }
} 
export const createTareas= async (req,res)=>{ //MANZANAS
    try{ 
        const {Nom_Establ,Responsable_Establ,Direccion1}= req.body
    const [result]=await pool.query('Insert into establecimiento(Nom_Establ,Responsable_Establ,Direccion1) values (?,?,?)',[Nom_Establ,Responsable_Establ,Direccion1])
    res.json({      
        Cod_Establ:result.insertCod_Establ,Nom_Establ,Responsable_Establ,Direccion1
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
        const [result]=await pool.query('delete from servicio where Cod_Serv=?',[req.params.Cod_Serv])
    res.json(result)
    }
    catch(error){
        return res.status(500).json({mensaje:error.mensaje})
       }
} 
export const deleteman=async (req,res)=>{
    try{
        const [result]=await pool.query('delete from manzanas where Cod_Manzana=?',[req.params.Cod_Manzana])
    res.json(result)
    }
    catch(error){
        return res.status(500).json({mensaje:error.mensaje})
       }
} 
/* export const deleteestabl=async (req,res)=>{
    try{
        const [result]=await pool.query('delete from servicio,establecimiento FROM servicio INNER JOIN establecimiento ON servicio.EstablecimientoCod_Establ = establecimiento.Cod_Establ WHERE establecimiento.Cod_Establ =?',[req.params.EstablecimientoCod_Establ])
    res.json(result)
    }
    catch(error){
        return res.status(500).json({mensaje:error.mensaje})
       }
}  */
export const deleteestabl = async (req, res) => {
    try {
        const { EstablecimientoCod_Establ } = req.params;

        const [result] = await pool.query(
            'DELETE servicio, establecimiento FROM servicio INNER JOIN establecimiento ON servicio.EstablecimientoCod_Establ = establecimiento.Cod_Establ WHERE establecimiento.Cod_Establ = ?',
            [EstablecimientoCod_Establ]
        );

        res.json(result);
    } catch (error) {
        return res.status(500).json({ mensaje: error.message });
    }
};
export const deletemujerymanzana = async (req, res) => {
    try {
        const { Id_Mujer } = req.params;
        await pool.query('DELETE FROM Manzanas WHERE MujeresId_Mujer = ?', [Id_Mujer]);
        const [result] = await pool.query('DELETE FROM Mujeres WHERE Id_Mujer = ?', [Id_Mujer]);

        res.json(result);
    } catch (error) {
        return res.status(500).json({ mensaje: error.message });
    }
};

