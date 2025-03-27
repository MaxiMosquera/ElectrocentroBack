import {Reductor} from '../models/index.model.js'

export const getAllReductores = async (req, res) => {
    try {
        const reductores = await Reductor.findAll();
        console.log(reductores, "red")
        res.status(200).json(reductores);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los reductores." });
    }
};

export const getReductorById = async (req, res) => {
    try {
        const reductor = await Reductor.findByPk(req.params.id);
        if (reductor) {
            res.status(200).json(reductor);
        } else {
            res.status(404).json({ error: "Reductor no encontrado." });
        }
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el reductor." });
    }
};

export const createReductor = async (req, res) => {
    try {
        const reductor = await Reductor.create(req.body);
        res.status(201).json(reductor);
    } catch (error) {
        res.status(500).json({ error: "Error al crear el reductor." });
    }
};

export const updateReductor = async (req, res) => {
    try {
        const reductor = await Reductor.findByPk(req.params.id);
        if (reductor) {
            await reductor.update(req.body);
            res.status(200).json(reductor);
        } else {
            res.status(404).json({ error: "Reductor no encontrado." });
        }
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar el reductor." });
    }
};

export const deleteReductor = async (req, res) => {
    try {
        const motor = await Reductor.findByPk(req.params.id);
        if (motor) {
            await motor.destroy();
            res.json({ message: "Motor eliminado correctamente." });
        } else {
            res.status(404).json({ error: "Motor no encontrado." });
        }
    } catch (error) {
        console.error("Error al eliminar el motor:", error);
        res.status(500).json({ error: "Error al eliminar el motor." });
    }
}                     