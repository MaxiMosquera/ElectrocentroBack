import {Tipo_entrada} from '../models/index.model.js';

export const getAllTipoEntrada = async (req, res) => {
    try {
        const tipos = await Tipo_entrada.findAll();
        res.json(tipos);
    } catch (error) {
        console.error("Error al obtener los tipos de entrada:", error);
        res.status(500).json({ error: "Error al obtener los tipos de entrada." });
    }
};

export const getTipoEntrada = async (req, res) => {
    try {
        const tipoEntrada = await Tipo_entrada.findByPk(req.params.id);
        if (tipoEntrada) {
            res.json(tipoEntrada);
        } else {
            res.status(404).json({ error: "Tipo de entrada no encontrado." });
        }
    } catch (error) {
        console.error("Error al obtener el tipo de entrada:", error);
        res.status(500).json({ error: "Error al obtener el tipo de entrada." });}
};