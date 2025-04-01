import { ArranqueSuave } from "../models/index.model.js";

export const getAllArranqueSuave = async (req, res) => {
    try {
        const arranqueSuave = await ArranqueSuave.findAll();
        res.json(arranqueSuave);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getArranqueSuave = async (req,res) => {
    try{
        const arranqueSuave = await ArranqueSuave.findByPk(req.params.id);
         if (arranqueSuave) {
            res.json(arranqueSuave)
        }else{
            res.status(404).json({ error: "Arranque suave no encontrado." });
    }   
    }catch (error) {
    console.error("Error al obtener el arranque suave:", error);
    res.status(500).json({ error: "Error al obtener el arranque suave." });
}
}

export const createArranqueSuave = async (req, res) => {
    try {
        const arranqueSuave = await ArranqueSuave.create(req.body);
        res.status(201).json(arranqueSuave);
    } catch (error) {
        console.error("Error al crear el arranque suave:", error);
        res.status(500).json({ error: "Error al crear el arranque suave." });
    }
};

export const updateArranqueSuave = async (req, res) => {
    try{
        const arranqueSuave = await ArranqueSuave.findByPk(req.params.id);
        if (arranqueSuave) {
            await arranqueSuave.update(req.body);
            res.json(arranqueSuave);
        } else {
            res.status(404).json({ error: "Arranque suave no encontrado." });
        }
    }catch{
        console.error("Error al actualizar el arranque suave:", err);
    }
}

export const deleteArranqueSuave = async (req) => {
    try {
        await ArranqueSuave.destroy({ where: { id: req.params.id } });
    } catch (error) {
        console.error("Error al eliminar el arranque suave:", error);    
    }
}