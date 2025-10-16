// ========================================
// RUTA: /routes/alertas.js
// Descripción: Endpoint para generar alertas
// de reabastecimiento de productos.
// ========================================

const express = require("express");
const { getDb } = require("./db"); // Asegúrate de que esta ruta sea correcta

const router = express.Router();

/**
 * @route GET /Alertas/Reabastecimiento
 * @description Devuelve los productos cuyo stock es igual o inferior al mínimo permitido
 * @access Público (puedes agregar autenticación más adelante)
 */
router.get("/Reabastecimiento", async (req, res) => {
    try {
        const db = getDb();

        // Consultar los productos en la base de datos
        const productos = await db.collection("Productos").find().toArray();

        // Filtrar los productos con bajo stock
        const productosConBajoStock = productos.filter(p => p.stock <= (p.stockMinimo || 5));

        // Si no hay alertas, responder con un mensaje
        if (productosConBajoStock.length === 0) {
            return res.status(200).json({
                message: "Todos los productos tienen stock suficiente.",
                data: [],
            });
        }

        // Enviar respuesta con los productos en alerta
        res.status(200).json({
            message: "Productos con bajo nivel de inventario encontrados.",
            data: productosConBajoStock,
        });

    } catch (error) {
        console.error("Error al obtener alertas de reabastecimiento:", error);
        res.status(500).json({
            error: "Error al obtener alertas de reabastecimiento. Intenta nuevamente.",
        });
    }
});

module.exports = router;
 