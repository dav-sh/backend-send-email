# ✉️ Backend para Envío de Correos

Este es un backend simple para manejar el formulario de contacto de mi portafolio. Está construido con **Node.js** y **Express**, y utiliza **SMTP** para enviar correos.

## 🔗 Repositorio del Frontend  
El frontend de este proyecto está disponible en:  
🔗 [Repositorio del Frontend](https://github.com/dav-sh/portfolio-react)  
🔗 [Demo en Vivo](https://devbydav.netlify.app)

## 🛠️ Tecnologías Utilizadas  
- Node.js  
- Express  
- Nodemailer (para el envío de correos)  
- Dotenv (para variables de entorno)  

## 📥 Instalación y Uso  

1. Clonar el repositorio:  
   ```sh
   git clone https://github.com/dav-sh/backend-send-email.git
   cd backend-send-email
   ```
2. Instalar dependencias:  
   ```sh
   npm install
   ```
3. Crear un archivo `.env` y definir las variables necesarias:  
   ```env
   
        PORT = 5000 || XXXX
        SMTP_FROM = toemail@example.com
        SMTP_TO = toemail@example.com
        SMTP_PASS = your-password
        FRONTED_URL = https://example.example.com
   ```
4. Ejecutar el servidor en desarrollo:  
   ```sh
   npm run dev
   ```
5. Para producción:  
   ```sh
   npm start
   ```

## 📌 API Endpoints  
### `POST /api/email/send`  
**Descripción:** Envía un correo electrónico con la información proporcionada en el formulario de contacto.  

**Body (JSON):**  
```json
{
  "name": "Tu Nombre",
  "email": "tuemail@example.com",
  "subject": "Asunto del mensaje",
  "message": "Contenido del mensaje"
}
```

**Respuesta exitosa (200 OK):**  
```json
{
  "message": "Mail sent successfully"
}
```

