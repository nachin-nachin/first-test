# ⚡ Comandos Rápidos - QR Wedding Seating

## 🚀 Deployment a GitHub + Netlify

### 1️⃣ Verificar Setup
```bash
./deploy-setup.sh
```

### 2️⃣ Subir a GitHub
```bash
# Inicializar Git
git init
git add .
git commit -m "Initial commit: QR Wedding Seating Pro"
git branch -M main

# Conectar con GitHub (reemplaza TU-USUARIO)
git remote add origin https://github.com/TU-USUARIO/qr-wedding-seating.git
git push -u origin main
```

### 3️⃣ Generar NEXTAUTH_SECRET
```bash
openssl rand -base64 32
```

### 4️⃣ Configurar Base de Datos (después de crear en Supabase)
```bash
# Actualiza .env con la URL de Supabase
DATABASE_URL="postgresql://postgres.xxx:PASSWORD@..."

# Ejecuta migraciones
npx prisma db push

# Carga datos de ejemplo
npx prisma db seed
```

---

## 💻 Desarrollo Local

### Iniciar Servidor
```bash
npm run dev
```
Abre: http://localhost:3000

### Base de Datos Local
```bash
# Aplicar cambios al schema
npm run db:push

# Cargar datos de ejemplo
npm run db:seed

# Abrir Prisma Studio (GUI)
npm run db:studio
```

### Build de Producción
```bash
npm run build
npm start
```

---

## 📊 URLs del Sistema

### Local
- Dashboard: http://localhost:3000
- Vista Invitado: http://localhost:3000/w/maria-y-juan-2025
- Demo: http://localhost:3000/demo

### Producción (después del deploy)
- Dashboard: https://tu-sitio.netlify.app
- Vista Invitado: https://tu-sitio.netlify.app/w/maria-y-juan-2025

---

## 🔐 Credenciales de Ejemplo

### Admin (desarrollo local)
- Email: admin@wedding.com
- Password: admin123

### Check-in PIN
- PIN: 1234

### Wedding Slug
- Slug: maria-y-juan-2025

---

## 📝 Datos de Ejemplo

### Invitados para Probar
- Ana García (Mesa 1)
- Carlos Rodríguez (Mesa 1)
- María López (Mesa 2)
- Juan Martínez (Mesa 2)
- Laura Sánchez (Mesa 3)

---

## 🛠️ Comandos Útiles

### Git
```bash
# Ver estado
git status

# Ver cambios
git diff

# Agregar todos los archivos
git add .

# Commit
git commit -m "Descripción"

# Push
git push

# Ver historial
git log --oneline
```

### NPM
```bash
# Instalar dependencias
npm install

# Actualizar dependencias
npm update

# Ver dependencias desactualizadas
npm outdated

# Limpiar cache
npm cache clean --force
```

### Prisma
```bash
# Generar cliente
npx prisma generate

# Aplicar cambios al schema
npx prisma db push

# Crear migración
npx prisma migrate dev --name nombre_migracion

# Ver datos en GUI
npx prisma studio

# Resetear base de datos
npx prisma migrate reset

# Cargar seeds
npx prisma db seed
```

---

## 🐛 Debugging

### Ver Logs en Desarrollo
```bash
# Terminal donde corre npm run dev
# Los logs aparecen automáticamente
```

### Ver Logs en Netlify
1. Netlify Dashboard
2. Deploys → Click en el último deploy
3. Deploy log

### Ver Logs en Supabase
1. Supabase Dashboard
2. Logs → Database

### Limpiar y Reinstalar
```bash
# Borrar node_modules y reinstalar
rm -rf node_modules package-lock.json
npm install

# Borrar .next y rebuildar
rm -rf .next
npm run build
```

---

## 📦 Importar/Exportar Datos

### Formato CSV para Importar
```csv
nombre,grupo,tags,mesa,asiento
Juan Pérez,Familia,👰,Mesa 1,1
María López,Amigos,🎓,Mesa 2,2
```

### Importar desde Dashboard
1. Abre el dashboard
2. Pestaña "Invitados"
3. Click "Importar CSV"
4. Selecciona archivo
5. ¡Listo!

### Exportar desde Dashboard
1. Abre el dashboard
2. Pestaña "Invitados"
3. Click "Exportar CSV"
4. Se descarga automáticamente

---

## 🎨 Personalización

### Cambiar Wedding Slug
1. Edita `prisma/seed.ts`
2. Cambia `slug: "maria-y-juan-2025"`
3. Ejecuta: `npm run db:seed`

### Cambiar PIN de Check-in
1. Edita `prisma/seed.ts`
2. Cambia el PIN en el hash
3. Ejecuta: `npm run db:seed`

### Cambiar Colores
1. Edita `src/app/globals.css`
2. Modifica las variables CSS
3. Guarda y recarga

---

## 🔄 Actualizaciones

### Actualizar Código en Producción
```bash
# 1. Hacer cambios en el código
# 2. Commit y push
git add .
git commit -m "Descripción del cambio"
git push

# 3. Netlify hace deploy automático (2-3 min)
```

### Forzar Redeploy en Netlify
1. Netlify Dashboard
2. Deploys
3. Trigger deploy → Deploy site

---

## 📱 Generar QR

### Desde Dashboard
1. Abre: http://localhost:3000 (o tu URL de producción)
2. Pestaña "Vista General"
3. Click derecho en el QR
4. "Guardar imagen como..."

### Imprimir QR
1. Abre `LETRERO-QR-IMPRIMIBLE.html`
2. Pega el QR
3. Imprime en A4
4. Usa papel fotográfico
5. Plastifica o enmarca

---

## 🆘 Problemas Comunes

### "npm run dev" no funciona
```bash
# Reinstalar dependencias
rm -rf node_modules
npm install
```

### "Database connection failed"
```bash
# Verifica DATABASE_URL en .env
# Debe ser: file:./dev.db (local)
# O: postgresql://... (producción)
```

### "Build failed" en Netlify
```bash
# Verifica variables de entorno en Netlify
# Deben estar todas configuradas:
# - DATABASE_URL
# - NEXTAUTH_URL
# - NEXTAUTH_SECRET
# - NEXT_PUBLIC_APP_URL
```

### QR no funciona
```bash
# Verifica NEXT_PUBLIC_APP_URL
# Debe ser la URL correcta de producción
# Redeploy después de cambiar
```

---

## 📖 Documentación Completa

- `VERIFICACION-FINAL.md` - Estado del proyecto
- `DEPLOY-GITHUB-NETLIFY.md` - Guía completa de deploy
- `README-DEPLOY.md` - Referencia rápida
- `CHECKLIST-DEPLOY.md` - Lista de verificación
- `FAQ-PRODUCCION.md` - Preguntas frecuentes
- `CARACTERISTICAS-PRO.md` - Features PRO

---

## ✅ Checklist Rápido

### Antes de Deploy
- [ ] `./deploy-setup.sh` ejecutado
- [ ] Repositorio GitHub creado
- [ ] Código subido a GitHub
- [ ] Cuenta Supabase creada
- [ ] Connection string copiado
- [ ] NEXTAUTH_SECRET generado

### Durante Deploy
- [ ] Sitio creado en Netlify
- [ ] Variables de entorno configuradas
- [ ] Primer deploy exitoso
- [ ] URLs actualizadas
- [ ] Redeploy realizado

### Después de Deploy
- [ ] Base de datos migrada
- [ ] Seeds cargados
- [ ] Sitio probado
- [ ] QR descargado
- [ ] QR impreso

---

## 🎯 Siguiente Paso

**EJECUTA AHORA:**
```bash
./deploy-setup.sh
```

Luego sigue la guía en `DEPLOY-GITHUB-NETLIFY.md`

---

**¡Éxito! 🚀💒**
