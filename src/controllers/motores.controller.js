import { Motor } from "../models/index.model.js";

export const getAllMotores = async (req, res) => {
        try {
            const motores = await Motor.findAll();
            res.json(motores);
        } catch (error) {
            console.error("Error al obtener los motores:", error);
            res.status(500).json({ error: "Error al obtener los motores." });
        }
    };

export const getMotorById = async (req, res) => {
    try {
        const motor = await Motor.findByPk(req.params.id);
        if (motor) {
            res.json(motor);
        } else {
            res.status(404).json({ error: "Motor no encontrado." });
        }
    } catch (error) {
        console.error("Error al obtener el motor:", error);
        res.status(500).json({ error: "Error al obtener el motor." });
    }
}    

export const createMotor = async (req, res) => {
    try {
        const motor = await Motor.create(req.body);
        res.status(201).json(motor);
    } catch (error) {
        console.error("Error al crear el motor:", error);
        res.status(500).json({ error: "Error al crear el motor." });
    }
};
export const updateMotor = async (req,) => {
    try {
        const motor = await Motor.findByPk(req.params.id);
        if (motor) {
            await motor.update(req.body);
            res.json(motor);
        } else {
            res.status(404).json({ error: "Motor no encontrado." });
        }
    } catch (error) {
        console.error("Error al actualizar el motor:", error);
        res.status(500).json({ error: "Error al actualizar el motor." });
    }
} 

export const deleteMotor = async (req, res) => {
    try {
        const motor = await Motor.findByPk(req.params.id);
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