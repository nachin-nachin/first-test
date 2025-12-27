# 🚀 Guía Completa: Deploy en GitHub + Netlify

## 📋 Resumen

Esta guía te llevará paso a paso para subir tu proyecto a GitHub y desplegarlo en Netlify.

**Tiempo estimado:** 15-20 minutos
**Costo:** $0 (100% gratis)

---

## ✅ PASO 1: Preparar el Proyecto

### 1.1 Verificar que todo funciona localmente

```bash
# Verifica que el servidor esté corriendo
npm run dev

# Abre http://localhost:3000 y prueba que todo funcione
```

### 1.2 Crear archivo .gitignore (ya existe)

Ya está creado, pero verifica que contenga:
```
node_modules/
.next/
.env
.env*.local
.vercel
dev.db
dev.db-journal
```

---

## 🐙 PASO 2: Subir a GitHub

### 2.1 Crear cuenta en GitHub (si no tienes)

1. Ve a https://github.com
2. Click en "Sign up"
3. Completa el registro

### 2.2 Crear nuevo repositorio

1. En GitHub, click en el botón **"+"** (arriba derecha)
2. Selecciona **"New repository"**
3. Configura:
   - **Repository name:** `qr-wedding-seating`
   - **Description:** "Sistema profesional de asignación de mesas para bodas con QR"
   - **Visibility:** Public (o Private si prefieres)
   - **NO marques** "Initialize with README" (ya tienes uno)
4. Click en **"Create repository"**

### 2.3 Inicializar Git y subir código

```bash
# 1. Inicializar git (si no está inicializado)
git init

# 2. Agregar todos los archivos
git add .

# 3. Hacer el primer commit
git commit -m "Initial commit: QR Wedding Seating Pro"

# 4. Renombrar la rama a main
git branch -M main

# 5. Conectar con tu repositorio de GitHub
# Reemplaza TU-USUARIO con tu nombre de usuario de GitHub
git remote add origin https://github.com/TU-USUARIO/qr-wedding-seating.git

# 6. Subir el código
git push -u origin main
```

**Si te pide credenciales:**
- Username: tu usuario de GitHub
- Password: usa un **Personal Access Token** (no tu contraseña)

**Crear Personal Access Token:**
1. GitHub → Settings → Developer settings
2. Personal access tokens → Tokens (classic)
3. Generate new token
4. Selecciona: `repo` (todos los permisos)
5. Copia el token y úsalo como password

---

## 🌐 PASO 3: Desplegar en Netlify

### 3.1 Crear cuenta en Netlify

1. Ve a https://netlify.com
2. Click en **"Sign up"**
3. Selecciona **"Sign up with GitHub"** (más fácil)
4. Autoriza Netlify

### 3.2 Crear nuevo sitio

1. En Netlify, click en **"Add new site"**
2. Selecciona **"Import an existing project"**
3. Click en **"Deploy with GitHub"**
4. Autoriza Netlify para acceder a tus repositorios
5. Busca y selecciona **"qr-wedding-seating"**

### 3.3 Configurar el build

Netlify detectará automáticamente Next.js, pero verifica:

```
Build command: npm run build
Publish directory: .next
```

**NO hagas deploy todavía**, primero configura las variables de entorno.

---

## 🔐 PASO 4: Configurar Variables de Entorno

### 4.1 Crear base de datos en Supabase

1. Ve a https://supabase.com
2. Click en **"Start your project"**
3. Crea una cuenta (con GitHub es más rápido)
4. Click en **"New project"**
5. Configura:
   - **Name:** `qr-wedding-seating`
   - **Database Password:** Crea una contraseña segura (guárdala)
   - **Region:** Elige la más cercana a tu país
   - **Plan:** Free
6. Click en **"Create new project"**
7. Espera 2-3 minutos mientras se crea

### 4.2 Obtener Connection String de Supabase

1. En tu proyecto de Supabase
2. Settings → Database
3. Busca **"Connection string"**
4. Selecciona **"Session mode"**
5. Copia la URL completa
6. Reemplaza `[YOUR-PASSWORD]` con tu contraseña

Ejemplo:
```
postgresql://postgres.xxx:TU-PASSWORD@aws-0-us-west-1.pooler.supabase.com:5432/postgres
```

### 4.3 Generar NEXTAUTH_SECRET

En tu terminal local:
```bash
openssl rand -base64 32
```

Copia el resultado.

### 4.4 Agregar variables en Netlify

1. En Netlify, en la configuración del sitio
2. Ve a **"Site settings"** → **"Environment variables"**
3. Click en **"Add a variable"**
4. Agrega estas 4 variables:

**Variable 1:**
```
Key: DATABASE_URL
Value: postgresql://postgres.xxx:TU-PASSWORD@...
```

**Variable 2:**
```
Key: NEXTAUTH_URL
Value: https://tu-sitio.netlify.app
```
(Netlify te dará esta URL después del deploy, por ahora pon una temporal)

**Variable 3:**
```
Key: NEXTAUTH_SECRET
Value: (el resultado de openssl rand -base64 32)
```

**Variable 4:**
```
Key: NEXT_PUBLIC_APP_URL
Value: https://tu-sitio.netlify.app
```

---

## 🚀 PASO 5: Deploy Inicial

### 5.1 Hacer el primer deploy

1. En Netlify, click en **"Deploy site"**
2. Espera 2-5 minutos
3. Netlify te dará una URL como: `https://random-name-123.netlify.app`

### 5.2 Actualizar las variables de entorno

1. Copia la URL que te dio Netlify
2. Ve a **Site settings** → **Environment variables**
3. Edita `NEXTAUTH_URL` y `NEXT_PUBLIC_APP_URL`
4. Pon la URL real de Netlify

### 5.3 Redeploy

1. Ve a **Deploys**
2. Click en **"Trigger deploy"** → **"Deploy site"**
3. Espera 2-3 minutos

---

## 🗄️ PASO 6: Configurar Base de Datos

### 6.1 Ejecutar migraciones

Desde tu computadora local:

```bash
# 1. Actualiza tu .env local con la URL de Supabase
DATABASE_URL="postgresql://postgres.xxx:..."

# 2. Ejecuta las migraciones
npx prisma db push

# 3. Carga los datos de ejemplo
npx prisma db seed
```

---

## ✅ PASO 7: Verificar que Funciona

### 7.1 Probar el sitio

1. Abre tu URL de Netlify: `https://tu-sitio.netlify.app`
2. Deberías ver el dashboard
3. Prueba la vista de invitado: `https://tu-sitio.netlify.app/w/maria-y-juan-2025`
4. Busca "Ana García"
5. Debería mostrar su mesa

### 7.2 Si algo no funciona

**Ver logs en Netlify:**
1. Deploys → Click en el último deploy
2. Ve a "Deploy log"
3. Busca errores

**Problemas comunes:**
- Variables de entorno mal configuradas
- Base de datos sin datos
- Connection string incorrecto

---

## 🎨 PASO 8: Personalizar URL (Opcional)

### 8.1 Cambiar nombre del sitio

1. En Netlify: Site settings → Site details
2. Click en **"Change site name"**
3. Elige un nombre: `mi-boda-2025`
4. Tu URL será: `https://mi-boda-2025.netlify.app`

### 8.2 Usar dominio personalizado (Opcional)

Si tienes un dominio propio:

1. En Netlify: Domain settings
2. Click en **"Add custom domain"**
3. Sigue las instrucciones para configurar DNS
4. Costo: $10-15/año por el dominio

---

## 📱 PASO 9: Generar y Descargar QR

### 9.1 Acceder al dashboard

1. Abre: `https://tu-sitio.netlify.app`
2. Ve a la pestaña "Vista General"
3. Verás el QR generado

### 9.2 Descargar el QR

1. Click derecho en el QR
2. "Guardar imagen como..."
3. Guarda como `qr-boda.png`

### 9.3 Imprimir

1. Abre `LETRERO-QR-IMPRIMIBLE.html` en tu navegador
2. Pega el QR en el espacio indicado
3. Imprime en A4
4. Usa papel fotográfico o cartulina
5. Plastifica o enmarca

---

## 🔄 PASO 10: Actualizaciones Futuras

### Cuando hagas cambios en el código:

```bash
# 1. Guarda tus cambios
git add .
git commit -m "Descripción de los cambios"

# 2. Sube a GitHub
git push

# 3. Netlify detectará el cambio y hará deploy automático
# Espera 2-3 minutos
```

---

## 📊 PASO 11: Cargar tus Invitados Reales

### 11.1 Preparar CSV

Crea un archivo `mis-invitados.csv`:
```csv
nombre,grupo,tags,mesa,asiento
Juan Pérez,Familia,👰,Mesa 1,1
María López,Amigos,🎓,Mesa 2,2
```

### 11.2 Importar

1. Abre tu dashboard: `https://tu-sitio.netlify.app`
2. Ve a la pestaña "Invitados"
3. Click en "Importar CSV"
4. Selecciona tu archivo
5. ¡Listo!

---

## 🎯 CHECKLIST FINAL

**Antes del evento:**
- [ ] Sitio desplegado en Netlify
- [ ] Base de datos funcionando
- [ ] Todos los invitados cargados
- [ ] Todas las mesas asignadas
- [ ] QR descargado e impreso
- [ ] URL compartida con el staff
- [ ] Variables de entorno correctas
- [ ] Probado en varios dispositivos

**URLs importantes:**
- [ ] Dashboard: `https://tu-sitio.netlify.app`
- [ ] Vista invitado: `https://tu-sitio.netlify.app/w/maria-y-juan-2025`
- [ ] GitHub repo: `https://github.com/TU-USUARIO/qr-wedding-seating`

---

## 💰 COSTOS

**GRATIS:**
- ✅ GitHub (repositorio público)
- ✅ Netlify (100 GB bandwidth/mes)
- ✅ Supabase (500 MB database)

**Total: $0 USD**

**Opcional:**
- Dominio personalizado: $10-15/año

---

## 🆘 TROUBLESHOOTING

### "Build failed" en Netlify
```bash
# Verifica que el build funcione localmente
npm run build

# Si funciona local pero no en Netlify:
# - Revisa las variables de entorno
# - Verifica la versión de Node (debe ser 18+)
```

### "Database connection failed"
```bash
# Verifica el DATABASE_URL en Netlify
# Debe ser el connection string de Supabase
# Asegúrate de reemplazar [YOUR-PASSWORD]
```

### "NextAuth error"
```bash
# Verifica que NEXTAUTH_SECRET esté configurado
# Verifica que NEXTAUTH_URL sea la URL correcta de Netlify
```

### "QR no funciona"
```bash
# Verifica que NEXT_PUBLIC_APP_URL esté correcto
# Debe ser la URL de Netlify
# Redeploy después de cambiar variables
```

---

## 📞 SOPORTE

**Documentación:**
- Netlify: https://docs.netlify.com
- Supabase: https://supabase.com/docs
- Next.js: https://nextjs.org/docs

**Comunidad:**
- GitHub Issues: En tu repositorio
- Netlify Support: support.netlify.com
- Supabase Discord: supabase.com/discord

---

## 🎉 ¡LISTO!

Tu sistema está en producción y accesible desde cualquier lugar del mundo.

**URLs finales:**
- Dashboard: `https://tu-sitio.netlify.app`
- Vista invitado: `https://tu-sitio.netlify.app/w/tu-boda-2025`

**Comparte la URL del QR con tus invitados y disfruta tu evento!** 💒✨

---

## 📝 NOTAS ADICIONALES

### Límites del Plan Gratuito

**Netlify Free:**
- 100 GB bandwidth/mes
- 300 build minutes/mes
- Más que suficiente para una boda

**Supabase Free:**
- 500 MB database
- 2 GB bandwidth
- Suficiente para miles de invitados

### Monitoreo

**Ver estadísticas en Netlify:**
1. Analytics → Bandwidth
2. Ve cuántas visitas tienes
3. Monitorea el uso

**Ver datos en Supabase:**
1. Table Editor
2. Ve tus tablas
3. Edita datos si es necesario

---

¡Disfruta tu boda con tecnología profesional! 🚀💒
