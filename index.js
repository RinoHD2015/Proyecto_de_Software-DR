// Importar dependencias
const express = require("express");
const morgan = require("morgan");

// Importar funciones de conexión a MongoDB
const { connectToMongo, getDb, ObjectId } = require("./db");

// Crear aplicación Express
const app = express();
const port = 3000;

// Middleware para logging de peticiones HTTP
app.use(morgan("dev"));

// Middleware para parsear el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Ruta principal
//app.get("/usuarios", (req, res) => {
//   res.send("Hello World! :D 2025");
//});

// Endpoint para obtener todos los Usuarios
app.get("/Usuarios", async (req, res) => {
    try {
        const db = getDb();
        const usuarios = await db.collection("Usuarios").find().toArray();
        res.status(200).json(usuarios);
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        res.status(500).json({
            error: "Error al obtener los usuarios",
        });
    }
});

// Endpoint para obtener un Usuario por ID
app.get("/Usuarios/:id", async (req, res) => {
    try {
        const db = getDb();
        const id = req.params.id;
        const usuario = await db.collection("Usuarios").findOne({ _id: new ObjectId(id) });
        if (!usuario) {
            return res.status(404).json({
                error: "Usuario no encontrado",
            });
        }
        res.status(200).json(usuario);
    } catch (error) {
        console.error("Error al obtener el usuario:", error);
        res.status(500).json({
            error: "Error al obtener el usuario",
        });
    }
});

// Endpoint para guardar Usuario
const bcrypt = require("bcrypt");
app.post("/Usuarios", async (req, res) => {
    try {
        const db = getDb();
        const { usuario, contraseña } = req.body;

        // Validación básica
        if (!usuario || !contraseña) {
            return res.status(400).json({
                error: "Se requieren usuario y contraseña",
            });
        }

        // Hash de la contraseña
        const contraseñaHash = await bcrypt.hash(contraseña, 10);

        const resultado = await db.collection("Usuarios").insertOne({
            usuario,
            contraseña: contraseñaHash,
            fechaCreacion: new Date(),
        });

        res.status(201).json({
            message: "Usuario guardado exitosamente",
            usuarioId: resultado.insertedId,
        });
    } catch (error) {
        console.error("Error al guardar el usuario:", error);
        res.status(500).json({
            error: "Error al guardar el usuario",
        });
    }
});

// Endpoint para verificar Usuario
app.post("/login", async (req, res) => {
    try {
        const db = getDb();
        const { usuario, contraseña } = req.body;

        // Validación básica
        if (!usuario || !contraseña) {
            return res.status(400).json({
                error: "Se requieren usuario y contraseña",
            });
        }

        // Buscar usuario en la base de datos
        const usuarioEncontrado = await db.collection("Usuarios").findOne({ usuario });

        if (!usuarioEncontrado) {
            return res.status(401).json({
                error: "Error en la autenticación: usuario no encontrado",
            });
        }

        // Comparar contraseñas
        const esValida = await bcrypt.compare(contraseña, usuarioEncontrado.contraseña);

        if (!esValida) {
            return res.status(401).json({
                error: "Error en la autenticación: contraseña incorrecta",
            });
        }

        res.status(200).json({
            message: "Autenticación satisfactoria",
        });
    } catch (error) {
        console.error("Error en la autenticación:", error);
        res.status(500).json({
            error: "Error en el servidor",
        });
    }
});

// Endpoint para actualizar un Usuario
app.put("/Usuarios/:id", async (req, res) => {
    try {
        const db = getDb();
        const id = req.params.id;
        const { usuario, contraseña } = req.body;
        // Validación básica
        if (!usuario || !contraseña) {
            return res.status(400).json({
                error: "Se requieren usuario y contraseña",
            });
        }
        // Hash de la nueva contraseña
        const contraseñaHash = await bcrypt.hash(contraseña, 10);
        const resultado = await db.collection("Usuarios").updateOne(
            { _id: new ObjectId(id) },
            {
                $set: {
                    usuario,
                    contraseña: contraseñaHash,
                    fechaActualizacion: new Date(),
                },
            }
        );
        if (resultado.matchedCount === 0) {
            return res.status(404).json({
                error: "Usuario no encontrado",
            });
        }
        res.status(200).json({
            message: "Usuario actualizado exitosamente",
        });
    } catch (error) {
        console.error("Error al actualizar el usuario:", error);
        res.status(500).json({
            error: "Error al actualizar el usuario",
        });
    }
});

// Endpoint para eliminar un Usuario
app.delete("/Usuarios/:id", async (req, res) => {
    try {
        const db = getDb();
        const id = req.params.id;
        const resultado = await db.collection("Usuarios").deleteOne({ _id: new ObjectId(id) });
        if (resultado.deletedCount === 0) {
            return res.status(404).json({
                error: "Usuario no encontrado",
            });
        }
        res.status(200).json({
            message: "Usuario eliminado exitosamente",
        });
    } catch (error) {
        console.error("Error al eliminar el usuario:", error);
        res.status(500).json({ 
            error: "Error al eliminar el usuario",
        });
    }
});


//Endpoint para guardar un Cliente
app.post("/Clientes", async (req, res) => {
    try {
        const db = getDb();
        const { nombre, email, telefono } = req.body;

        const resultado = await db.collection("Clientes").insertOne({
            nombre,
            email,
            telefono,
            fechaCreacion: new Date(),
        });
        res.status(201).json({
            message: "Cliente guardado exitosamente",
            clienteId: resultado.insertedId,
        });
    } catch (error) {
        console.error("Error al guardar el cliente:", error);
        res.status(500).json({
            error: "Error al guardar el cliente",
        });
    }
});

// Endpoint para obtener todos los Clientes
app.get("/Clientes", async (req, res) => {
    try {
        const db = getDb();
        const clientes = await db.collection("Clientes").find().toArray();
        res.status(200).json(clientes);
    } catch (error) {
        console.error("Error al obtener los clientes:", error);
        res.status(500).json({
            error: "Error al obtener los clientes",
        });
    }
});

// Endpoint para obtener un Cliente por ID
app.get("/Clientes/:id", async (req, res) => {
    try {
        const db = getDb();
        const id = req.params.id;
        const cliente = await db.collection("Clientes").findOne({ _id: new ObjectId(id) });
        if (!cliente) {
            return res.status(404).json({
                error: "Cliente no encontrado",
            });
        }
        res.status(200).json(cliente);
    } catch (error) {
        console.error("Error al obtener el cliente:", error);
        res.status(500).json({
            error: "Error al obtener el cliente",
        });
    }
});
    
// Endpoint para actualizar un Cliente
app.put("/Clientes/:id", async (req, res) => {
    try {
        const db = getDb();
        const id = req.params.id;
        const { nombre, email, telefono } = req.body;
        const resultado = await db.collection("Clientes").updateOne(
            { _id: new ObjectId(id) },
            {
                $set: {
                    nombre,
                    email,
                    telefono,
                    fechaActualizacion: new Date(),
                },
            }
        );
        if (resultado.matchedCount === 0) {
            return res.status(404).json({
                error: "Cliente no encontrado",
            });
        }
        res.status(200).json({
            message: "Cliente actualizado exitosamente",
        });
    } catch (error) {
        console.error("Error al actualizar el cliente:", error);
        res.status(500).json({
            error: "Error al actualizar el cliente",
        });
    }
});

// Endpoint para eliminar un Cliente
app.delete("/Clientes/:id", async (req, res) => {
    try { 
        const db = getDb(); 
        const id = req.params.id;
        const resultado = await db.collection("Clientes").deleteOne({ _id: new ObjectId(id) });
        if (resultado.deletedCount === 0) {
            return res.status(404).json({
                error: "Cliente no encontrado",
            });
        }
        res.status(200).json({
            message: "Cliente eliminado exitosamente",
        });
    } catch (error) {
        console.error("Error al eliminar el cliente:", error);
        res.status(500).json({
            error: "Error al eliminar el cliente",
        });
    }
});

// Endpoint para guardar un Proveedor
app.post("/Proveedores", async (req, res) => {
    try {
        const db = getDb();
        const { nombre, email, telefono } = req.body;
        const resultado = await db.collection("Proveedores").insertOne({
            nombre,
            email,
            telefono,
            fechaCreacion: new Date(),
        });
        res.status(201).json({
            message: "Proveedor guardado exitosamente",
            proveedorId: resultado.insertedId,
        });
    } catch (error) {
        console.error("Error al guardar el proveedor:", error);
        res.status(500).json({
            error: "Error al guardar el proveedor",
        });
    }
});

// Endpoint para obtener todos los Proveedores
app.get("/Proveedores", async (req, res) => {
    try {
        const db = getDb();
        const proveedores =await db.collection("Proveedores").find().toArray();
        res.status(200).json(proveedores);
    } catch (error) {
        console.error("Error al obtener los proveedores:", error);
        res.status(500).json({
            error: "Error al obtener los proveedores",
        });
    }
});

// Endpoint para obtener un Proveedor por ID
app.get("/Proveedores/:id", async (req, res) => {
    try {
        const db = getDb();
        const id = req.params.id;
        const proveedor = await db.collection("Proveedores").findOne({ _id: new ObjectId(id) });
        if (!proveedor) {
            return resolveSoa.status(404).json({
                error: "Proveedor no encontrado",
            });
        }res.status(200).json(proveedor);
    } catch (error) {
        console.error("Error al obtener el Proveedor:", error);
        res.status(500).json({
            error: "Error al obtener el Proveedor",
        });
    }
});

// Endpoint para actualizar un Proveedor
app.put("/Proveedores/:id", async (req, res) => {
    try {
        const db = getDb();
        const id = req.params.id;
        const { nombre, email, telefono } = req.body;
        const resultado = await db.collection("Proveedores").updateOne(
            { _id: new ObjectId(id) },
            {
                $set: {
                    nombre,
                    email,
                    telefono,
                    fechaActualizacion: new Date(),
                },
            }
        );
        if (resultado.matchedCount === 0) {
            return res.status(404).json({
                error: "Proveedor no encontrado",
            });
        }
        res.status(200).json({
            message: "Proveedor actualizado exitosamente",
        });
    } catch (error) {
        console.error("Error al actualizar el proveedor:", error);
        res.status(500).json({
            error: "Error al actualizar el proveedor",
        });
    }
});

// Endpoint para eliminar un Proveedor
app.delete("/Proveedores/:id", async (req, res) => {
    try {
        const db = getDb();
        const id = req.params.id;
        const resultado = await db.collection("Proveedores").deleteOne({ _id: new ObjectId(id) });
        if (resultado.deletedCount === 0) {
            return res.status(404).json({
                error: "Proveedor no encontrado",
            });
        }
        res.status(200).json({
            message: "Proveedor eliminado exitosamente",
        });
    } catch (error) {
        console.error("Error al eliminar el proveedor:", error);
        res.status(500).json({
            error: "Error al eliminar el proveedor",
        });
    }
});

// Endpoint para guardar un Producto
app.post("/Productos", async (req, res) => {
    try {
        const db = getDb();
        const { nombre, descripcion, precio, stock } = req.body;
        const resultado = await db.collection("Productos").insertOne({
            nombre,
            descripcion,
            precio,
            stock,
            fechaCreacion: new Date(),
        });
        res.status(201).json({
            message: "Producto guardado exitosamente",
            productoId: resultado.insertedId,
            });
            } catch (error) {
        console.error("Error al guardar el producto:", error);
        res.status(500).json({
            error: "Error al guardar el producto",
        });
    }
});

// Endpoint para obtener todos los Productos
app.get("/Productos", async (req, res) => {
    try {
        const db = getDb();
        const productos = await db. collection("Productos").find().toArray();
        res.status(200).json(productos);
    } catch (error) {
        console.error("Error al obtener los productos:", error);
        res.status(500).json({
            error: "Error al obtener los productos",
        });
    }
})

// Endpoint para obtener un Producto por ID
app.get("/Productos/:id", async (req, res) => {
    try {
        const db = getDb();
        const id = req.params.id;
        const producto = await db.collection("Productos").findOne({ _id: new ObjectId(id) });
        if (!producto) {
            return res.status(404).json({
                error: "Producto no encontrado",
            });
        }
        res.status(200).json(producto);
    } catch (error) {
        console.error("Error al obtener el producto:", error);
        res.status(500).json({
            error: "Error al obtener el producto",
        });
    }
});

// Endpoint para actualizar un Producto 
app.put("/Productos/:id", async (req, res) => {
    try {
        const db = getDb();
        const id = req.params.id;
        const { nombre, descripcion, precio, stock } = req.body;
        const resultado = await db.collection("Productos").updateOne(
            { _id: new ObjectId(id) },
            {
                $set: {
                    nombre,
                    descripcion,
                    precio,
                    stock,
                    fechaActualizacion: new Date(),
                },
            }
        );
        if (resultado.matchedCount === 0) {
            return res.status(404).json({
                error: "Producto no encontrado",
            });
        }
        res.status(200).json({
            message: "Producto actualizado exitosamente",
        });
    } catch (error) {
        console.error("Error al actualizar el producto:", error);
        res.status(500).json({
            error: "Error al actualizar el producto",
        });
    }
});

// Endpoint para eliminar un Producto
app.delete("/Productos/:id", async (req, res) => {
    try {
        const db = getDb();
        const id = req.params.id;
        const resultado = await db.collection("Productos").deleteOne({ _id: new ObjectId(id) });
        if (resultado.deletedCount === 0) {
            return res.status(404).json({
                error: "Producto no encontrado",
            });
        }
        res.status(200).json({
            message: "Producto eliminado exitosamente",
        });
    } catch (error) {
        console.error("Error al eliminar el producto:", error);
        res.status(500).json({
            error: "Error al eliminar el producto",
        });
    }
});


// Iniciar conexión a MongoDB y arrancar el servidor
connectToMongo()
    .then(() => {
        app.listen(port, () => {
            console.log(`Servidor escuchando en http://localhost:${port}`);
        });
    });

