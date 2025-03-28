import { Fijacion_salida } from "../models/index.model.js";

export const getAllFijacionSalida = async (req, res) => {
    try {    
        const fijaciones = await Fijacion_salida.findAll();
        res.json(fijaciones);
    } catch (error) {
        console.error("Error al obtener las fijaciones de salida:", error);
        res.status(500).json({ error: "Error al obtener las fijaciones de salida." });
    }
}

export const getFijacionSalida = async (req, res) => {
    try {
        const fijacion= await Fijacion_salida.findByPk(req.params.id);
        if(fijacion){
            res.json(fijacion)
        }else {
            res.status(404).json({ error: "Fijacion de salida no encontrada." });
        }
        
    }catch (error) {
        console.error("Error al obtener la fijacion de salida:", error);
        res.status(500).json({ error: "Error al obtener la fijacion de salida." });
    }
}