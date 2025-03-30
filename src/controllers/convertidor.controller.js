import Convertidor from "../models/index.model.js";

export const getAllConvertidores = async (req, res) => {
    try {
        const convertidores = await Convertidor.findAll();
        res.json(convertidores);
    } catch (error) {
        console.error("Error al obtener los convertidores:", error);
        res.status(500).json({ error: "Error al obtener los convertidores" });
    }
};

export const getConvertidor = async (req, res) => {
    try {
        const convertidor = await Convertidor.findByPk(req.params.id);
        if (convertidor) {
            res.json(convertidor);
        } else {
            res.status(404).json({ error: "Convertidor no encontrado" });
        }
    } catch (error) {
        console.error("Error al obtener el convertidor:", error);
        res.status(500).json({ error: "Error al obtener el convertidor" });
    }
};

export const createConvertidor = async (req, res) => {
    try {
        const convertidor = await Convertidor.create(req.body);
        res.status(201).json(convertidor);
    } catch (error) {
        console.error("Error al crear el convertidor:", error);
        res.status(500).json({ error: "Error al crear el convertidor" });
    }
};

export const updateConvertidor = async (req,) => {
    try {
        const convertidor = await Convertidor.findByPk(req.params.id);
        if (convertidor) {
            await convertidor.update(req.body);
            res.json(convertidor);
        } else {
            res.status(404).json({ error: "Convertidor no encontrado" });
        }
    } catch (error) {
        console.error("Error al actualizar el convertidor:", error);
        res.status(500).json({ error: "Error al actualizar el convertidor" });
    }
}

export const deleteConvertidor = async (req, res) => {
    try {
        const convertidor = await Convertidor.findByPk(req.params.id);
        if (convertidor) {
            await convertidor.destroy();
            res.json({ message: "Convertidor eliminado correctamente" });
        } else {
            res.status(404).json({ error: "Convertidor no encontrado" });
        }
    } catch (error) {
        console.error("Error al eliminar el convertidor:", error);
        res.status(500).json({ error: "Error al eliminar el convertidor" });
    }
}
