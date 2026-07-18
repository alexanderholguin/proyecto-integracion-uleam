const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

// Servir los archivos estáticos de la interfaz gráfica
app.use(express.static(path.join(__dirname, '../public')));

// Ruta API de respaldo para control de estado
app.get('/api/status', (req, res) => {
    res.status(200).json({ status: "success", backend: "operativo" });
});

module.exports = app;

if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
}