# ⚡ Instrucciones Rápidas - QR Wedding Seating

## 🚀 Setup en 5 Minutos

### 1. Instalar dependencias
```bash
npm install
```

### 2. Configurar base de datos

Crea el archivo `.env`:
```bash
cp .env.example .env
```

Edita `.env` y configura tu PostgreSQL:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/qr_wedding_seating"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="tu-secret-aleatorio-aqui"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

**Generar NEXTAUTH_SECRET:**
```bash
openssl rand -base64 32
```

### 3. Crear base de datos
```bash
npm run db:push
```

### 4. Cargar datos de ejemplo
```bash
npm run db:seed
```

### 5. Iniciar servidor
```bash
npm run dev
```

Abre: http://localhost:3000

## 🔑 Credenciales de Prueba

**Admin:**
- Email: `admin@wedding.com`
- Password: `admin123`

**Boda de ejemplo:**
- URL: http://localhost:3000/w/maria-y-juan-2025
- PIN check-in: `1234`

## 📍 Rutas Principales

### Público
- `/` - Home
- `/w/[slug]` - Vista de invitado (escanear QR)

### Admin
- `/admin/login` - Login
- `/admin/dashboard` - Dashboard con QR
- `/admin/tables` - Gestionar mesas
- `/admin/guests` - Gestionar invitados
- `/admin/checkin` - Check-in en vivo

## 🎯 Flujo de Uso

### Como Admin:
1. Login en `/admin/login`
2. Crear mesas en `/admin/tables`
3. Crear invitados en `/admin/guests` (o importar CSV)
4. Asignar invitados a mesas
5. Descargar QR del dashboard
6. Imprimir QR (ver CHECKLIST-IMPRESION-QR.md)
7. Monitorear llegadas en `/admin/checkin`

### Como Invitado:
1. Escanear QR (o ir a `/w/[slug]`)
2. Escribir nombre
3. Ver mesa asignada
4. Confirmar llegada con PIN

## 📊 Importar Invitados CSV

Formato del archivo:
```csv
nombre,grupo,tags,mesa,asiento
Ana García,Familia,👰,Mesa 1,1
Pedro López,Amigos,🎓,Mesa 2,2
```

Ver `ejemplo-invitados.csv` para referencia.

## 🛠️ Comandos Útiles

```bash
npm run dev          # Desarrollo
npm run build        # Build producción
npm run start        # Servidor producción
npm run db:push      # Sincronizar schema
npm run db:seed      # Cargar datos ejemplo
npm run db:studio    # Abrir Prisma Studio (GUI)
```

## 🐛 Problemas Comunes

### Error: "Can't reach database server"
```bash
# Verifica que PostgreSQL esté corriendo
# En Mac:
brew services start postgresql

# En Linux:
sudo systemctl start postgresql

# Verifica la conexión:
psql -U user -d qr_wedding_seating
```

### Error: "Invalid `prisma.xxx()` invocation"
```bash
# Regenera el cliente de Prisma:
npx prisma generate
npm run db:push
```

### Error: "NEXTAUTH_SECRET is not set"
```bash
# Genera un secret:
openssl rand -base64 32

# Agrégalo a .env:
NEXTAUTH_SECRET="el-secret-generado"
```

## 🚢 Deploy Rápido (Vercel + Supabase)

### 1. Base de datos en Supabase
1. Crea cuenta en https://supabase.com
2. Crea nuevo proyecto
3. Ve a Settings > Database
4. Copia "Connection string" (modo "Session")
5. Reemplaza `[YOUR-PASSWORD]` con tu password

### 2. Deploy en Vercel
```bash
npm install -g vercel
vercel
```

### 3. Configurar variables en Vercel
En el dashboard de Vercel, agrega:
- `DATABASE_URL` (de Supabase)
- `NEXTAUTH_URL` (tu dominio de Vercel)
- `NEXTAUTH_SECRET` (genera uno nuevo)
- `NEXT_PUBLIC_APP_URL` (tu dominio de Vercel)

### 4. Ejecutar migraciones
```bash
# Desde tu local, con DATABASE_URL de producción:
npx prisma db push
npx prisma db seed
```

## 📱 Probar en Móvil (Local)

### 1. Obtén tu IP local:
```bash
# Mac/Linux:
ifconfig | grep "inet "

# Windows:
ipconfig
```

### 2. Actualiza .env:
```env
NEXT_PUBLIC_APP_URL="http://TU-IP:3000"
```

### 3. Accede desde tu móvil:
```
http://TU-IP:3000/w/maria-y-juan-2025
```

## 🎨 Personalización Rápida

### Cambiar nombre de la boda:
Edita `prisma/seed.ts`:
```typescript
name: 'Tu Boda',
slug: 'tu-boda-2025',
```

Luego:
```bash
npm run db:seed
```

### Cambiar PIN de check-in:
En `prisma/seed.ts`:
```typescript
const pinHash = await bcrypt.hash('TU-PIN', 10)
```

### Cambiar colores:
Edita `src/app/globals.css` - variables CSS al inicio.

## 📞 Soporte

- 📖 Ver README.md completo
- 🖨️ Ver CHECKLIST-IMPRESION-QR.md
- 📄 Ver ejemplo-invitados.csv

## ✅ Checklist Pre-Evento

- [ ] Sistema funcionando en producción
- [ ] Todos los invitados cargados
- [ ] Todas las mesas asignadas
- [ ] QR impreso y probado
- [ ] PIN comunicado al staff
- [ ] Conexión WiFi verificada en el lugar
- [ ] Tablet de backup preparado
- [ ] Personal capacitado

¡Listo para tu evento! 🎉
