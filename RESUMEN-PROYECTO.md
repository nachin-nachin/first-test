# 📋 Resumen Ejecutivo - QR Wedding Seating

## 🎯 Objetivo del Proyecto

Sistema web completo para gestionar la asignación de mesas en bodas mediante códigos QR, permitiendo a los invitados encontrar su mesa de forma autónoma y al staff monitorear llegadas en tiempo real.

## ✨ Características Principales

### Para Invitados (Vista Pública)
- ✅ Acceso mediante escaneo de código QR
- ✅ Búsqueda inteligente con autocompletado (fuzzy search)
- ✅ Visualización de mesa y asiento asignado
- ✅ Confirmación de llegada con PIN de seguridad
- ✅ Interfaz mobile-first optimizada
- ✅ Sin necesidad de registro o login

### Para Administradores (Panel Admin)
- ✅ Dashboard con estadísticas en tiempo real
- ✅ Gestión completa de mesas (CRUD)
- ✅ Gestión completa de invitados (CRUD)
- ✅ Asignación de invitados a mesas y asientos
- ✅ Importación masiva desde CSV
- ✅ Exportación de listas a CSV
- ✅ Monitor de check-in en vivo con auto-refresh
- ✅ Búsqueda rápida de invitados
- ✅ Generación automática de código QR

## 🏗️ Arquitectura Técnica

### Stack Tecnológico
```
Frontend:
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui components

Backend:
- Next.js API Routes
- NextAuth.js (autenticación)
- Prisma ORM
- PostgreSQL

Librerías Clave:
- qrcode (generación QR)
- fuse.js (búsqueda fuzzy)
- csv-parse/stringify (import/export)
- bcryptjs (seguridad)
- zod (validaciones)
```

### Modelo de Datos

```
Wedding (Boda)
├── id, name, slug
├── checkinPinHash
└── timestamps

Table (Mesa)
├── id, weddingId
├── name, capacity, type
├── positionX, positionY (para mapa)
└── timestamps

Guest (Invitado)
├── id, weddingId
├── fullName, group, tagsJson
├── tableId, seatNumber
├── arrivedAt (check-in)
└── timestamps

AdminUser (Usuario Admin)
├── id, email, passwordHash
├── name, role
└── timestamps
```

## 📊 Flujos de Usuario

### Flujo Invitado
```
1. Escanea QR en entrada
   ↓
2. Abre web móvil (/w/[slug])
   ↓
3. Escribe su nombre
   ↓
4. Sistema busca con fuzzy matching
   ↓
5. Selecciona su nombre de sugerencias
   ↓
6. Ve su mesa y asiento
   ↓
7. (Opcional) Confirma llegada con PIN
   ↓
8. Sistema registra hora de llegada
```

### Flujo Administrador
```
1. Login en /admin/login
   ↓
2. Dashboard con estadísticas
   ↓
3. Crear mesas (capacidad, tipo)
   ↓
4. Importar invitados (CSV o manual)
   ↓
5. Asignar invitados a mesas
   ↓
6. Descargar QR del evento
   ↓
7. Imprimir y colocar QR
   ↓
8. Monitorear check-in en vivo
```

## 🔐 Seguridad Implementada

1. **Autenticación Admin**: NextAuth con credenciales
2. **PIN de Check-in**: Evita confirmaciones masivas no autorizadas
3. **Privacidad**: Invitados solo ven su propia asignación
4. **Búsqueda Limitada**: Fuzzy search sin exponer lista completa
5. **Validaciones**: Zod schemas en todas las APIs
6. **Hash de Passwords**: bcrypt para admin y PIN
7. **CSRF Protection**: Incluido en NextAuth

## 📁 Estructura del Proyecto

```
qr-wedding-seating/
├── prisma/
│   ├── schema.prisma          # Modelo de datos
│   └── seed.ts                # Datos de ejemplo
│
├── src/
│   ├── app/
│   │   ├── admin/             # Panel administrativo
│   │   │   ├── dashboard/     # Dashboard con QR
│   │   │   ├── tables/        # CRUD mesas
│   │   │   ├── guests/        # CRUD invitados
│   │   │   ├── checkin/       # Monitor en vivo
│   │   │   ├── login/         # Login admin
│   │   │   └── layout.tsx     # Layout con nav
│   │   │
│   │   ├── api/
│   │   │   ├── auth/          # NextAuth
│   │   │   ├── admin/         # APIs admin
│   │   │   │   ├── tables/
│   │   │   │   ├── guests/
│   │   │   │   ├── import/
│   │   │   │   └── export/
│   │   │   └── w/[slug]/      # APIs públicas
│   │   │       ├── lookup/    # Búsqueda invitado
│   │   │       └── checkin/   # Confirmar llegada
│   │   │
│   │   ├── w/[slug]/          # Vista pública invitados
│   │   ├── layout.tsx         # Layout global
│   │   ├── page.tsx           # Home
│   │   └── globals.css        # Estilos
│   │
│   ├── components/
│   │   └── ui/                # shadcn components
│   │       ├── button.tsx
│   │       ├── input.tsx
│   │       ├── card.tsx
│   │       ├── label.tsx
│   │       └── toast.tsx
│   │
│   └── lib/
│       ├── prisma.ts          # Cliente Prisma
│       ├── auth.ts            # Config NextAuth
│       └── utils.ts           # Utilidades
│
├── public/                    # Assets estáticos
│
├── .env.example               # Template variables
├── package.json               # Dependencias
├── tsconfig.json              # Config TypeScript
├── tailwind.config.ts         # Config Tailwind
├── next.config.js             # Config Next.js
│
├── README.md                  # Documentación completa
├── INSTRUCCIONES-RAPIDAS.md   # Setup rápido
├── CHECKLIST-IMPRESION-QR.md  # Guía impresión
├── ejemplo-invitados.csv      # Template CSV
└── verify-setup.js            # Script verificación
```

## 🚀 Instalación y Deploy

### Desarrollo Local (5 minutos)
```bash
# 1. Instalar
npm install

# 2. Configurar .env
cp .env.example .env
# Editar DATABASE_URL y secrets

# 3. Base de datos
npm run db:push
npm run db:seed

# 4. Iniciar
npm run dev
```

### Producción (Vercel + Supabase)
```bash
# 1. Base de datos en Supabase
# - Crear proyecto
# - Copiar connection string

# 2. Deploy en Vercel
vercel

# 3. Configurar variables de entorno
# - DATABASE_URL
# - NEXTAUTH_URL
# - NEXTAUTH_SECRET
# - NEXT_PUBLIC_APP_URL

# 4. Migraciones
npx prisma db push
npx prisma db seed
```

## 📊 Formato CSV para Importación

```csv
nombre,grupo,tags,mesa,asiento
Ana García,Familia Novia,👰💐,Mesa 1 - Familia Novia,1
Pedro López,Amigos,🎓,Mesa 3 - Amigos,2
```

**Columnas soportadas:**
- `nombre` / `name` / `fullName` (requerido)
- `grupo` / `group` (opcional)
- `tags` / `emojis` (opcional)
- `mesa` / `table` (opcional, debe coincidir exacto)
- `asiento` / `seat` (opcional, número)

## 🖨️ Impresión de QR - Recomendaciones

### Especificaciones
- **Tamaño papel**: A4 (21 x 29.7 cm)
- **Tamaño QR**: 15 x 15 cm mínimo
- **Resolución**: 300 DPI
- **Material**: Papel fotográfico o cartulina 250gr
- **Protección**: Plastificado o marco con vidrio

### Ubicaciones
- Entrada principal (2 copias)
- Mesa de recepción (1 copia)
- Área de cócteles (1 copia)
- Backup (1 copia)

### Contenido del Letrero
```
💒 Bienvenidos a nuestra boda

📱 ENCUENTRA TU MESA
1. Escanea este código QR
2. Escribe tu nombre
3. Ve tu mesa asignada

[CÓDIGO QR GRANDE]

🔐 PIN para check-in: 1234
```

## 📈 Métricas y Monitoreo

### Dashboard Admin muestra:
- Total de mesas creadas
- Total de invitados registrados
- Invitados asignados a mesas (%)
- Invitados que han llegado (%)

### Check-in en Vivo muestra:
- Lista de invitados que llegaron (con hora)
- Lista de invitados pendientes
- Actualización automática cada 5 segundos
- Búsqueda en tiempo real

## 🎨 Personalización

### Fácil de personalizar:
- ✅ Colores del tema (globals.css)
- ✅ Textos e idioma (directamente en componentes)
- ✅ Nombre de la boda (seed.ts)
- ✅ PIN de check-in (seed.ts)
- ✅ Campos adicionales (schema.prisma)

### Extensiones futuras posibles:
- 🔮 Mapa visual de mesas (drag & drop)
- 🔮 Notificaciones push al admin
- 🔮 Múltiples bodas en una instancia
- 🔮 Restricciones dietéticas
- 🔮 Confirmación de asistencia (RSVP)
- 🔮 Galería de fotos del evento

## 📞 Soporte y Documentación

### Archivos de ayuda incluidos:
- `README.md` - Documentación completa
- `INSTRUCCIONES-RAPIDAS.md` - Setup en 5 minutos
- `CHECKLIST-IMPRESION-QR.md` - Guía de impresión
- `ejemplo-invitados.csv` - Template de importación
- `verify-setup.js` - Script de verificación

### Comandos útiles:
```bash
npm run dev          # Desarrollo
npm run build        # Build producción
npm run db:push      # Sincronizar schema
npm run db:seed      # Cargar datos ejemplo
npm run db:studio    # GUI de base de datos
node verify-setup.js # Verificar instalación
```

## ✅ Checklist Pre-Evento

- [ ] Sistema en producción funcionando
- [ ] Todos los invitados cargados
- [ ] Todas las mesas asignadas
- [ ] QR impreso y probado
- [ ] PIN comunicado al staff
- [ ] WiFi verificado en el lugar
- [ ] Tablet de backup preparado
- [ ] Personal capacitado
- [ ] Plan B con lista impresa

## 🎉 Resultado Final

Un sistema profesional, seguro y fácil de usar que:
- ✅ Reduce filas en la entrada
- ✅ Elimina confusión de asignación de mesas
- ✅ Permite monitoreo en tiempo real
- ✅ Mejora la experiencia del invitado
- ✅ Facilita la logística del evento
- ✅ Se ve moderno y profesional

---

**Tiempo estimado de setup**: 30 minutos
**Tiempo estimado de configuración del evento**: 1-2 horas
**Costo de hosting**: $0 (Vercel free tier + Supabase free tier)

¡Perfecto para tu día especial! 💒✨
