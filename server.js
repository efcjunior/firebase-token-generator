require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

// Define o diretório atual como público para servir arquivos estáticos
app.use(express.static(path.join(__dirname)));

// Endpoint para servir as variáveis do .env
app.get('/env', (req, res) => {
    res.json({
        firebaseConfig: {
            apiKey: process.env.FIREBASE_API_KEY_DEV,
            authDomain: process.env.FIREBASE_AUTH_DOMAIN,
            projectId: process.env.FIREBASE_PROJECT_ID,
            storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
            messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
            appId: process.env.FIREBASE_APP_ID,
            measurementId: process.env.FIREBASE_MEASUREMENT_ID,
        },
        recaptchaKey: process.env.RECAPTCHA_KEY,
        email: process.env.USER_EMAIL,
        password: process.env.USER_PASSWORD,
    });
});

// Qualquer rota que não seja /env redireciona para index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Inicia o servidor
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
