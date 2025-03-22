import {Usuario} from "../models/index.model.js";

export const getAllUsers = async (res) => {
    try {
        const users = await Usuario.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los usuarios." });
    }
};

export const getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: "Usuario no encontrado." });
        }
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el usuario." });
    }
};

export const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: "Error al crear el usuario." });
    }
};

export const updateUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            await user.update(req.body);
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: "Usuario no encontrado." });
        }
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar el usuario." });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            await user.destroy();
            res.json({ message: "Usuario eliminado correctamente." });
        } else {
            res.status(404).json({ error: "Usuario no encontrado." });
        }
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar el usuario." });
    }
};