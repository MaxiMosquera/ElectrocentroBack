import {Eje_salida} from "../models/index.model.js";

export const getAllEjeSalida = async (req, res) => {
    try {
        const ejes = await Eje_salida.findAll();
        res.json(ejes);
    } catch (error) {
        console.error("Error al obtener los ejes de salida:", error);
        res.status(500).json({ error: "Error al obtener los ejes de salida." });
    }
};

export const getEjeSalida = async (req,res) => {
    try{
        const eje = await Eje_salida.findByPk(req.params.id);
        if(eje){
            res.json(eje)
        }else {
            res.status(404).json({ error: "Eje de salida no encontrado." });
        }
    }catch (error) {
        console.error("Error al obtener el eje de salida:", error);
        res.status(500).json({ error: "Error al obtener el eje de salida." });
    }
};