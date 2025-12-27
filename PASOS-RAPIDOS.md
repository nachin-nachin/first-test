# ⚡ Pasos Rápidos: De Local a Producción

## 🎯 Objetivo
Hacer que tu sistema funcione en internet para que los invitados puedan escanear el QR en el evento.

---

## 📝 RESUMEN EN 5 PASOS

### 1️⃣ Crear cuenta en Vercel (2 min)
- Ve a https://vercel.com
- Sign up con GitHub o email
- **GRATIS**

### 2️⃣ Crear cuenta en Supabase (3 min)
- Ve a https://supabase.com
- Crea proyecto "qr-wedding-seating"
- Guarda la contraseña de la base de datos
- Copia el "Connection String"
- **GRATIS**

### 3️⃣ Subir código a GitHub (5 min)
```bash
git init
git add .
git commit -m "Initial commit"
# Crea repo en github.com
git remote add origin https://github.com/TU-USUARIO/qr-wedding-seating.git
git push -u origin main
```

### 4️⃣ Deploy en Vercel (3 min)
- En Vercel: "New Project"
- Importa tu repo de GitHub
- Agrega variables de entorno:
  - `DATABASE_URL` = tu connection string de Supabase
  - `NEXTAUTH_URL` = https://tu-proyecto.vercel.app
  - `NEXTAUTH_SECRET` = (genera con `openssl rand -base64 32`)
  - `NEXT_PUBLIC_APP_URL` = https://tu-proyecto.vercel.app
- Click "Deploy"

### 5️⃣ Configurar base de datos (2 min)
```bash
# Actualiza .env local con URL de Supabase
DATABASE_URL="postgresql://..."

# Ejecuta migraciones
npx prisma db push
npx prisma db seed
```

---

## 🎉 ¡LISTO!

Tu sistema estará en: `https://tu-proyecto.vercel.app`

---

## 📱 PARA EL DÍA DEL EVENTO

### A. Descargar el QR
1. Abre `https://tu-proyecto.vercel.app`
2. Click derecho en el QR → Guardar imagen
3. Guarda como `qr-boda.png`

### B. Imprimir el Letrero
1. Abre el archivo `LETRERO-QR-IMPRIMIBLE.html` en tu navegador
2. Pega el QR en el espacio indicado (edita el HTML)
3. Imprime en A4 (21 x 29.7 cm)
4. Usa papel fotográfico o cartulina gruesa
5. Plastifica o enmarca

**O más fácil:**
1. Crea un diseño en Canva/PowerPoint
2. Inserta el QR (15cm x 15cm mínimo)
3. Agrega el texto del letrero
4. Imprime

### C. Colocar en el Evento
**Ubicaciones:**
- ✅ Entrada principal (2 copias)
- ✅ Mesa de recepción
- ✅ Área de cócteles

**Altura:** 1.20 - 1.50 metros del suelo

---

## 🔍 VERIFICAR QUE FUNCIONA

### Prueba desde tu celular:
1. Escanea el QR impreso
2. Debe abrir: `https://tu-proyecto.vercel.app/w/maria-y-juan-2025`
3. Busca "Ana García"
4. Debe mostrar su mesa

### Si no funciona:
- Verifica que el sitio esté desplegado en Vercel
- Verifica que la base de datos tenga datos
- Verifica que haya WiFi en el lugar del evento

---

## 📊 EL DÍA DEL EVENTO

### Dashboard para ti:
`https://tu-proyecto.vercel.app`

**Podrás:**
- Ver quién ha llegado en tiempo real
- Agregar invitados de último momento
- Buscar mesas rápidamente
- Ver estadísticas

### Vista para invitados:
`https://tu-proyecto.vercel.app/w/maria-y-juan-2025`

**Ellos podrán:**
- Buscar su nombre
- Ver su mesa y asiento
- Confirmar llegada con PIN: 1234

---

## 💡 TIPS IMPORTANTES

### Antes del evento:
✅ Prueba el QR con varios celulares
✅ Verifica WiFi en el lugar
✅ Carga todos los invitados
✅ Asigna todas las mesas
✅ Imprime copias de backup del QR

### Durante el evento:
✅ Ten el dashboard abierto en una tablet
✅ Asigna personal para ayudar con el QR
✅ Ten lista impresa como plan B

---

## 🆘 PROBLEMAS COMUNES

**"El QR no escanea"**
→ Verifica iluminación, tamaño del QR (mín 15cm)

**"No hay internet"**
→ Usa tu celular como hotspot, o ten lista impresa

**"Un invitado no aparece"**
→ Agrégalo desde el dashboard en el momento

---

## 💰 COSTO TOTAL

**$0 USD** (usando planes gratuitos de Vercel y Supabase)

**Opcional:**
- Dominio personalizado: $10-15/año
- Impresión del QR: $5-10

---

## 📞 AYUDA

Lee la guía completa: `GUIA-DESPLIEGUE-PRODUCCION.md`

---

## ✅ CHECKLIST FINAL

**Antes del evento:**
- [ ] Sistema desplegado en Vercel
- [ ] Base de datos funcionando
- [ ] Invitados cargados
- [ ] Mesas asignadas
- [ ] QR impreso y probado
- [ ] WiFi verificado

**Día del evento:**
- [ ] QR colocados
- [ ] Dashboard abierto
- [ ] Personal asignado
- [ ] Plan B listo

---

¡Disfruta tu evento! 🎉💒
