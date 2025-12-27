# ⚡ Inicio Rápido - QR Wedding Seating

```
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║              🚀 DEPLOY EN 3 PASOS SIMPLES                   ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

## 📍 Estás Aquí

```
[✅ Código Listo] → [⏳ Deploy] → [🎉 En Producción]
```

---

## 🎯 PASO 1: Verificar Setup (2 min)

```bash
./deploy-setup.sh
```

**Esto verifica:**
- ✅ Git instalado
- ✅ Node.js instalado
- ✅ Dependencias instaladas
- ✅ Genera NEXTAUTH_SECRET
- ✅ Muestra instrucciones

**Resultado:** Recibirás un secret y comandos exactos para continuar.

---

## 🎯 PASO 2: Subir a GitHub (5 min)

### A. Crear Repositorio
1. Ve a: https://github.com/new
2. Nombre: `qr-wedding-seating`
3. Click "Create repository"

### B. Subir Código
```bash
git add .
git commit -m "Initial commit: QR Wedding Seating Pro"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/qr-wedding-seating.git
git push -u origin main
```

**Resultado:** Tu código estará en GitHub.

---

## 🎯 PASO 3: Deploy en Netlify (15 min)

### A. Crear Base de Datos (5 min)
1. Ve a: https://supabase.com
2. Sign up (con GitHub)
3. "New project"
4. Nombre: `qr-wedding-seating`
5. Crea contraseña (guárdala)
6. Espera 2-3 minutos
7. Settings → Database → Connection string
8. Copia la URL completa

### B. Deploy en Netlify (5 min)
1. Ve a: https://netlify.com
2. Sign up (con GitHub)
3. "Add new site" → "Import from GitHub"
4. Selecciona `qr-wedding-seating`
5. Build settings (auto-detectados):
   - Build command: `npm run build`
   - Publish directory: `.next`

### C. Variables de Entorno (3 min)
En Netlify: Site settings → Environment variables

Agrega estas 4 variables:

```env
DATABASE_URL
postgresql://postgres.xxx:TU-PASSWORD@...

NEXTAUTH_URL
https://tu-sitio.netlify.app

NEXTAUTH_SECRET
(el que generó deploy-setup.sh)

NEXT_PUBLIC_APP_URL
https://tu-sitio.netlify.app
```

### D. Deploy y Actualizar (2 min)
1. Click "Deploy site"
2. Espera 2-5 minutos
3. Copia la URL de Netlify
4. Actualiza `NEXTAUTH_URL` y `NEXT_PUBLIC_APP_URL`
5. "Trigger deploy" → "Deploy site"

### E. Configurar Base de Datos (2 min)
```bash
DATABASE_URL="postgresql://..." npx prisma db push
DATABASE_URL="postgresql://..." npx prisma db seed
```

---

## ✅ ¡LISTO!

```
[✅ Código Listo] → [✅ Deploy] → [✅ En Producción]
```

**Tu sitio está en:** `https://tu-sitio.netlify.app`

---

## 📱 Próximos Pasos

### 1. Descargar QR
1. Abre: `https://tu-sitio.netlify.app`
2. Click derecho en el QR
3. "Guardar imagen como..."

### 2. Imprimir QR
1. Abre: `LETRERO-QR-IMPRIMIBLE.html`
2. Pega el QR
3. Imprime en A4
4. Plastifica o enmarca

### 3. Cargar tus Invitados
1. Crea archivo CSV:
```csv
nombre,grupo,tags,mesa,asiento
Juan Pérez,Familia,👰,Mesa 1,1
María López,Amigos,🎓,Mesa 2,2
```

2. Dashboard → Invitados → Importar CSV

### 4. Compartir URL
Comparte con tu staff:
```
Dashboard:
https://tu-sitio.netlify.app

Vista Invitado:
https://tu-sitio.netlify.app/w/maria-y-juan-2025
```

---

## 🆘 ¿Problemas?

### Build failed en Netlify
- Verifica variables de entorno
- Todas deben estar configuradas
- Redeploy después de agregar variables

### Database connection failed
- Verifica DATABASE_URL
- Debe ser el connection string de Supabase
- Reemplaza [YOUR-PASSWORD] con tu contraseña

### QR no funciona
- Verifica NEXT_PUBLIC_APP_URL
- Debe ser la URL de Netlify
- Redeploy después de cambiar

---

## 📖 Más Información

### Guías Completas
- [`LISTO-PARA-DEPLOY.md`](LISTO-PARA-DEPLOY.md) - Estado completo
- [`DEPLOY-GITHUB-NETLIFY.md`](DEPLOY-GITHUB-NETLIFY.md) - Guía detallada
- [`COMANDOS-RAPIDOS.md`](COMANDOS-RAPIDOS.md) - Comandos útiles

### FAQs
- [`FAQ-PRODUCCION.md`](FAQ-PRODUCCION.md) - Preguntas frecuentes
- [`CARACTERISTICAS-PRO.md`](CARACTERISTICAS-PRO.md) - Features PRO

---

## 💰 Costo Total

```
GitHub:    $0
Netlify:   $0
Supabase:  $0
─────────────
TOTAL:     $0
```

---

## ⏱️ Tiempo Total

```
Verificar setup:           2 min
Subir a GitHub:            5 min
Crear Supabase:            5 min
Deploy Netlify:            5 min
Variables de entorno:      3 min
Deploy y actualizar:       5 min
Configurar base de datos:  2 min
─────────────────────────────────
TOTAL:                    27 min
```

---

## 🎉 ¡Disfruta tu Boda!

```
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║     Tu sistema profesional está en producción               ║
║     y listo para tu evento especial.                        ║
║                                                              ║
║     ¡Felicidades! 💒✨                                       ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

---

**🚀 Comienza ahora:** `./deploy-setup.sh`
