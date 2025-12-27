# 💒 QR Wedding Seating

Sistema profesional de asignación de mesas para bodas con código QR.

> ✅ **LISTO PARA GITHUB Y NETLIFY** - Deploy en 20 minutos

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-5-2D3748)](https://www.prisma.io/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

## 🚀 Deploy Rápido

### ¿Listo para subir a producción?

```bash
# 1. Ejecuta el script de verificación
./deploy-setup.sh

# 2. Sigue la guía completa
# Lee: DEPLOY-GITHUB-NETLIFY.md
```

**Tiempo total:** 20 minutos | **Costo:** $0 USD

📖 **Documentación completa:** [`LISTO-PARA-DEPLOY.md`](LISTO-PARA-DEPLOY.md)

---

## 🎯 Características

### 🎨 Dashboard PRO
- ✅ **Vista General** - Estadísticas en tiempo real
- ✅ **Gestión de Mesas** - CRUD completo con capacidad
- ✅ **Gestión de Invitados** - CRUD con búsqueda fuzzy
- ✅ **Import/Export CSV** - Carga masiva de invitados
- ✅ **QR Generado** - Descarga directa desde dashboard
- ✅ **Features PRO**:
  - 🗺️ Mapa interactivo drag & drop
  - 📊 Estadísticas avanzadas con gráficos
  - 🔔 Notificaciones en tiempo real
  - ⚡ Acciones rápidas

### 📱 Vista Invitado (Público)
- ✅ Escanear QR y buscar nombre
- ✅ Ver mesa y asiento asignado
- ✅ Confirmar llegada con PIN
- ✅ Diseño mobile-first con animaciones

## 🚀 Instalación

### Requisitos
- Node.js 18+
- PostgreSQL (o usar Supabase)
- npm o yarn

### Paso 1: Clonar e instalar dependencias

```bash
npm install
```

### Paso 2: Configurar base de datos

Copia el archivo de ejemplo:
```bash
cp .env.example .env
```

Edita `.env` con tus credenciales:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/qr_wedding_seating"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="genera-un-secret-aleatorio-aqui"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

Para generar `NEXTAUTH_SECRET`:
```bash
openssl rand -base64 32
```

### Paso 3: Crear base de datos y ejecutar migraciones

```bash
npm run db:push
```

### Paso 4: Cargar datos de ejemplo

```bash
npm run db:seed
```

Esto creará:
- 1 usuario admin (admin@wedding.com / admin123)
- 1 boda de ejemplo
- 3 mesas
- 15 invitados
- PIN de check-in: 1234

### Paso 5: Iniciar servidor de desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## 📱 Uso

### Panel Admin
1. Ve a `/admin/login`
2. Ingresa: `admin@wedding.com` / `admin123`
3. Gestiona mesas, invitados y check-in

### Vista de Invitado
1. Escanea el QR o ve a `/w/maria-y-juan-2025`
2. Escribe tu nombre
3. Ve tu mesa asignada
4. Confirma llegada con PIN: `1234`

## 📊 Importar Invitados CSV

Formato del CSV:

```csv
nombre,grupo,tags,mesa,asiento
Ana García,Familia Novia,👰💐,Mesa 1 - Familia Novia,1
Pedro López,Amigos,🎓,Mesa 3 - Amigos Universidad,2
```

Columnas soportadas:
- `nombre` o `name` o `fullName` (requerido)
- `grupo` o `group` (opcional)
- `tags` o `emojis` (opcional)
- `mesa` o `table` (opcional, debe coincidir con nombre exacto)
- `asiento` o `seat` (opcional, número)

## 🖨️ Imprimir Código QR

### Recomendaciones:
- **Tamaño**: A4 (21 x 29.7 cm) o Letter
- **Ubicación**: Entrada del salón, mesas de recepción
- **Cantidad**: 2-3 copias en diferentes ubicaciones
- **Material**: Papel fotográfico o cartulina
- **Protección**: Enmarcado o plastificado

### Pasos:
1. Ve al Dashboard admin
2. Descarga la imagen del QR
3. Imprime en alta calidad
4. Agrega texto: "Escanea para encontrar tu mesa"

### Texto sugerido para el letrero:

```
💒 Bienvenidos a nuestra boda

📱 ENCUENTRA TU MESA
1. Escanea este código QR
2. Escribe tu nombre
3. Ve tu mesa asignada

🔐 PIN para check-in: 1234
```

## 🔐 Seguridad

- ✅ Autenticación con NextAuth
- ✅ PIN para check-in (evita confirmaciones masivas)
- ✅ Los invitados solo ven su propia asignación
- ✅ Búsqueda fuzzy sin exponer lista completa
- ✅ Validaciones con Zod

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Base de datos**: PostgreSQL + Prisma ORM
- **Autenticación**: NextAuth.js
- **UI**: Tailwind CSS + shadcn/ui
- **QR**: qrcode library
- **Búsqueda**: Fuse.js (fuzzy search)
- **CSV**: csv-parse / csv-stringify

## 📁 Estructura del Proyecto

```
qr-wedding-seating/
├── prisma/
│   ├── schema.prisma      # Modelo de datos
│   └── seed.ts            # Datos de ejemplo
├── src/
│   ├── app/
│   │   ├── admin/         # Panel administrativo
│   │   ├── api/           # API routes
│   │   └── w/[slug]/      # Vista pública invitados
│   ├── components/ui/     # Componentes shadcn
│   └── lib/               # Utilidades y config
└── public/
```

## 🚢 Deploy en Producción

### 🎯 Opción Recomendada: GitHub + Netlify + Supabase

**100% GRATIS** - Sin tarjeta de crédito

#### Guía Completa Paso a Paso
📖 Lee: [`DEPLOY-GITHUB-NETLIFY.md`](DEPLOY-GITHUB-NETLIFY.md)

#### Resumen Rápido
```bash
# 1. Verificar setup
./deploy-setup.sh

# 2. Subir a GitHub
git add .
git commit -m "Initial commit"
git push

# 3. Crear base de datos en Supabase
# https://supabase.com

# 4. Deploy en Netlify
# https://netlify.com
# Import from GitHub

# 5. Configurar variables de entorno
# DATABASE_URL, NEXTAUTH_URL, NEXTAUTH_SECRET, NEXT_PUBLIC_APP_URL

# 6. Migrar base de datos
npx prisma db push
npx prisma db seed
```

**Tiempo:** 20 minutos | **Costo:** $0

#### Documentación Adicional
- 📋 [`CHECKLIST-DEPLOY.md`](CHECKLIST-DEPLOY.md) - Lista de verificación
- ⚡ [`COMANDOS-RAPIDOS.md`](COMANDOS-RAPIDOS.md) - Comandos útiles
- ❓ [`FAQ-PRODUCCION.md`](FAQ-PRODUCCION.md) - Preguntas frecuentes
- ✅ [`VERIFICACION-FINAL.md`](VERIFICACION-FINAL.md) - Estado del proyecto

### Otras Opciones

#### Vercel + Supabase
Similar a Netlify, sigue la misma configuración.

#### Railway / Render
Configura variables de entorno y conecta tu repositorio.

## 🎨 Personalización

### Cambiar colores del tema:
Edita `src/app/globals.css` y modifica las variables CSS.

### Cambiar textos:
Todos los textos están en español y pueden editarse directamente en los componentes.

### Agregar campos personalizados:
1. Modifica `prisma/schema.prisma`
2. Ejecuta `npm run db:push`
3. Actualiza los formularios correspondientes

## 📝 Comandos Útiles

```bash
npm run dev          # Desarrollo
npm run build        # Build producción
npm run start        # Servidor producción
npm run db:push      # Sincronizar schema
npm run db:seed      # Cargar datos ejemplo
npm run db:studio    # Abrir Prisma Studio
```

## 📚 Documentación Completa

### 🚀 Deployment
- [`LISTO-PARA-DEPLOY.md`](LISTO-PARA-DEPLOY.md) ⭐ - Estado y próximos pasos
- [`DEPLOY-GITHUB-NETLIFY.md`](DEPLOY-GITHUB-NETLIFY.md) ⭐ - Guía completa paso a paso
- [`CHECKLIST-DEPLOY.md`](CHECKLIST-DEPLOY.md) - Lista de verificación
- [`COMANDOS-RAPIDOS.md`](COMANDOS-RAPIDOS.md) ⭐ - Comandos útiles
- [`VERIFICACION-FINAL.md`](VERIFICACION-FINAL.md) - Estado del proyecto

### 📖 Uso y Features
- [`CARACTERISTICAS-PRO.md`](CARACTERISTICAS-PRO.md) - Documentación features PRO
- [`FAQ-PRODUCCION.md`](FAQ-PRODUCCION.md) - Preguntas frecuentes
- [`INSTRUCCIONES-RAPIDAS.md`](INSTRUCCIONES-RAPIDAS.md) - Uso rápido
- [`API-REFERENCE.md`](API-REFERENCE.md) - Referencia de API

### 🎨 Recursos
- [`LETRERO-QR-IMPRIMIBLE.html`](LETRERO-QR-IMPRIMIBLE.html) ⭐ - Plantilla para imprimir
- [`CHECKLIST-IMPRESION-QR.md`](CHECKLIST-IMPRESION-QR.md) - Guía de impresión
- [`RESUMEN-PROYECTO.md`](RESUMEN-PROYECTO.md) - Resumen general
- [`INDICE-DOCUMENTACION.md`](INDICE-DOCUMENTACION.md) - Índice completo

⭐ = Más importantes

## 🐛 Troubleshooting

### Error de conexión a base de datos
- Verifica que PostgreSQL esté corriendo
- Revisa el `DATABASE_URL` en `.env`
- Prueba la conexión: `npx prisma db push`

### Error de autenticación
- Verifica que `NEXTAUTH_SECRET` esté configurado
- Limpia cookies del navegador
- Revisa que `NEXTAUTH_URL` coincida con tu dominio

### QR no funciona
- Verifica que `NEXT_PUBLIC_APP_URL` esté correcto
- Asegúrate de que el slug de la boda existe
- Prueba la URL manualmente primero

## 📄 Licencia

MIT - Úsalo libremente para tu boda o eventos.

## 🤝 Contribuciones

¡Pull requests son bienvenidos! Para cambios mayores, abre un issue primero.

---

Hecho con ❤️ para tu día especial
