# 🚀 Guía Completa: De Local a Producción

## 📋 Pasos para Hacer tu Sistema Accesible en Internet

### ✅ PASO 1: Desplegar en Vercel (GRATIS)

**Vercel es perfecto porque:**
- ✅ Gratis para proyectos personales
- ✅ Deploy automático en 5 minutos
- ✅ HTTPS incluido (seguro)
- ✅ URL personalizada gratis

#### 1.1 Crear cuenta en Vercel

1. Ve a https://vercel.com
2. Click en "Sign Up"
3. Usa tu cuenta de GitHub, GitLab o email

#### 1.2 Subir tu proyecto

**Opción A: Desde GitHub (Recomendado)**

```bash
# 1. Inicializa git en tu proyecto
git init
git add .
git commit -m "Initial commit"

# 2. Crea un repositorio en GitHub
# Ve a github.com y crea un nuevo repositorio

# 3. Sube tu código
git remote add origin https://github.com/TU-USUARIO/qr-wedding-seating.git
git push -u origin main
```

Luego en Vercel:
1. Click en "New Project"
2. Importa tu repositorio de GitHub
3. Vercel detectará Next.js automáticamente
4. Click en "Deploy"

**Opción B: Desde CLI**

```bash
# 1. Instala Vercel CLI
npm install -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel

# 4. Sigue las instrucciones en pantalla
```

#### 1.3 Configurar Variables de Entorno en Vercel

En el dashboard de Vercel:
1. Ve a tu proyecto
2. Settings → Environment Variables
3. Agrega estas variables:

```
DATABASE_URL=tu-url-de-supabase-aqui
NEXTAUTH_URL=https://tu-proyecto.vercel.app
NEXTAUTH_SECRET=genera-uno-nuevo-con-openssl
NEXT_PUBLIC_APP_URL=https://tu-proyecto.vercel.app
```

---

### ✅ PASO 2: Base de Datos en Supabase (GRATIS)

**Supabase es perfecto porque:**
- ✅ PostgreSQL gratis
- ✅ 500MB de almacenamiento
- ✅ Backups automáticos

#### 2.1 Crear cuenta en Supabase

1. Ve a https://supabase.com
2. Click en "Start your project"
3. Crea una cuenta (GitHub recomendado)

#### 2.2 Crear proyecto

1. Click en "New Project"
2. Nombre: `qr-wedding-seating`
3. Database Password: **Guarda esta contraseña**
4. Region: Elige la más cercana a tu país
5. Click en "Create new project"
6. Espera 2-3 minutos

#### 2.3 Obtener Connection String

1. En tu proyecto de Supabase
2. Settings → Database
3. Busca "Connection string"
4. Copia la que dice "Session mode"
5. Reemplaza `[YOUR-PASSWORD]` con tu contraseña

Ejemplo:
```
postgresql://postgres.xxx:TU-PASSWORD@aws-0-us-west-1.pooler.supabase.com:5432/postgres
```

#### 2.4 Configurar la base de datos

Desde tu computadora local:

```bash
# 1. Actualiza .env con la URL de Supabase
DATABASE_URL="postgresql://postgres.xxx:..."

# 2. Ejecuta las migraciones
npx prisma db push

# 3. Carga los datos de ejemplo
npx prisma db seed
```

---

### ✅ PASO 3: Generar NEXTAUTH_SECRET

```bash
openssl rand -base64 32
```

Copia el resultado y úsalo en Vercel.

---

### ✅ PASO 4: Redeploy en Vercel

1. Ve a tu proyecto en Vercel
2. Deployments → Click en los 3 puntos → Redeploy
3. Espera 1-2 minutos

---

### ✅ PASO 5: Verificar que Funciona

Tu URL será algo como: `https://qr-wedding-seating.vercel.app`

Prueba:
1. `https://tu-proyecto.vercel.app` → Dashboard
2. `https://tu-proyecto.vercel.app/w/maria-y-juan-2025` → Vista invitado

---

## 📱 PASO 6: Imprimir el QR

### 6.1 Descargar el QR

1. Abre tu dashboard en producción
2. Click derecho en el QR
3. "Guardar imagen como..."
4. Guarda como `qr-boda.png`

### 6.2 Crear el Letrero

Usa este diseño en Canva, PowerPoint o Word:

```
┌─────────────────────────────────────┐
│                                     │
│     💒 Bienvenidos a nuestra        │
│            Boda                     │
│                                     │
│   📱 ENCUENTRA TU MESA              │
│                                     │
│   [    CÓDIGO QR AQUÍ    ]          │
│      (15cm x 15cm mínimo)           │
│                                     │
│   Instrucciones:                    │
│   1. Escanea con tu celular         │
│   2. Escribe tu nombre              │
│   3. Ve tu mesa asignada            │
│                                     │
│   🔐 PIN para confirmar: 1234       │
│                                     │
└─────────────────────────────────────┘
```

### 6.3 Especificaciones de Impresión

**Tamaño recomendado:**
- Papel: A4 (21 x 29.7 cm) o Letter
- QR: Mínimo 15 x 15 cm
- Resolución: 300 DPI

**Material:**
- Papel fotográfico (brillante)
- Cartulina gruesa (250-300 gr)
- Foam board (para exterior)

**Protección:**
- Plastificado (durabilidad)
- Marco con vidrio (elegante)
- Enmarcado (profesional)

### 6.4 Dónde Colocar el QR

**Ubicaciones estratégicas:**
1. ✅ **Entrada principal** (2 copias)
2. ✅ Mesa de recepción
3. ✅ Área de cócteles
4. ✅ Junto al libro de firmas

**Altura recomendada:**
- 1.20 - 1.50 metros del suelo
- A la altura de los ojos
- Fácil de escanear sin agacharse

---

## 🎯 PASO 7: Día del Evento

### Checklist Pre-Evento

**2 horas antes:**
- [ ] Verifica que el sitio esté funcionando
- [ ] Coloca los QR en sus ubicaciones
- [ ] Verifica WiFi en el lugar
- [ ] Ten el dashboard abierto en una tablet
- [ ] Comparte el PIN (1234) con el staff

**Durante el evento:**
- [ ] Monitor de check-in abierto
- [ ] Persona asignada para ayudar
- [ ] Tablet de backup disponible

**Plan B:**
- [ ] Lista impresa de invitados por mesa
- [ ] Plano de mesas físico

---

## 💡 TIPS PROFESIONALES

### Para el QR:
✅ Prueba escanearlo antes de imprimir
✅ Imprime copias de backup
✅ Usa colores de alto contraste
✅ No pongas el QR sobre fondos con patrones

### Para el WiFi:
✅ Verifica cobertura en la entrada
✅ Ten el password del WiFi visible
✅ Considera un router adicional si es necesario

### Para los Invitados:
✅ Pon instrucciones claras
✅ Ten personal para ayudar
✅ Ofrece búsqueda manual como backup

---

## 🔧 Solución de Problemas

### "El QR no escanea"
- Verifica que haya buena iluminación
- Asegúrate de que el QR sea suficientemente grande
- Prueba con diferentes apps de cámara

### "No hay internet en el lugar"
- Usa tu celular como hotspot
- Considera contratar WiFi temporal
- Ten el plan B (lista impresa)

### "Un invitado no aparece"
- Agrégalo rápidamente desde el dashboard
- Asígnale mesa en el momento
- Usa la búsqueda rápida

---

## 📊 Después del Evento

### Exportar Datos

```bash
# Desde el dashboard
1. Ve a la pestaña "Invitados"
2. Click en "Exportar CSV"
3. Guarda el archivo con las llegadas
```

### Backup de la Base de Datos

En Supabase:
1. Database → Backups
2. Download backup

---

## 💰 Costos

**GRATIS:**
- ✅ Vercel (hosting)
- ✅ Supabase (base de datos)
- ✅ Dominio .vercel.app

**OPCIONAL (si quieres):**
- 🔹 Dominio personalizado: $10-15/año
  - Ejemplo: `miboda.com`
  - Se configura en Vercel → Settings → Domains

**Total: $0 (o $10-15 si quieres dominio propio)**

---

## 🎨 Personalización

### Cambiar el nombre de la boda

Edita `prisma/seed.ts`:
```typescript
slug: 'tu-boda-2025',  // Cambia esto
```

Luego:
```bash
npx prisma db seed
```

### Cambiar el PIN

Edita `prisma/seed.ts`:
```typescript
const pinHash = await bcrypt.hash('TU-PIN', 10)
```

---

## ✅ Checklist Final

**Antes del evento:**
- [ ] Sistema desplegado en Vercel
- [ ] Base de datos en Supabase funcionando
- [ ] Todos los invitados cargados
- [ ] Todas las mesas asignadas
- [ ] QR impreso y probado
- [ ] WiFi verificado en el lugar
- [ ] Staff capacitado
- [ ] Plan B preparado

**El día del evento:**
- [ ] QR colocados en ubicaciones
- [ ] Dashboard abierto en tablet
- [ ] Monitor de check-in activo
- [ ] Personal de ayuda asignado

---

## 🆘 Soporte

Si tienes problemas:
1. Revisa los logs en Vercel
2. Verifica las variables de entorno
3. Prueba la conexión a la base de datos
4. Consulta la documentación

---

## 🎉 ¡Listo!

Tu sistema estará accesible desde cualquier lugar del mundo.
Los invitados podrán escanear el QR con sus celulares y ver su mesa.

**URL de ejemplo:**
- Dashboard: `https://tu-proyecto.vercel.app`
- Vista invitado: `https://tu-proyecto.vercel.app/w/maria-y-juan-2025`

¡Disfruta tu evento! 💒✨
