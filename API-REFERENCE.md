# 🔌 API Reference - QR Wedding Seating

## 📋 Índice

- [Autenticación](#autenticación)
- [APIs Públicas](#apis-públicas)
- [APIs Admin](#apis-admin)
- [Modelos de Datos](#modelos-de-datos)
- [Códigos de Error](#códigos-de-error)

---

## 🔐 Autenticación

### Login Admin

**Endpoint**: `POST /api/auth/signin`

**Body**:
```json
{
  "email": "admin@wedding.com",
  "password": "admin123"
}
```

**Response**:
```json
{
  "user": {
    "id": "clx...",
    "email": "admin@wedding.com",
    "name": "Admin"
  }
}
```

---

## 🌐 APIs Públicas

### 1. Buscar Invitado

**Endpoint**: `POST /api/w/[slug]/lookup`

**Descripción**: Búsqueda fuzzy de invitados por nombre

**Body**:
```json
{
  "name": "ana"
}
```

**Response**:
```json
{
  "guests": [
    {
      "id": "clx...",
      "fullName": "Ana García",
      "group": "Familia Novia",
      "tagsJson": "👰,💐",
      "seatNumber": 1,
      "arrivedAt": null,
      "table": {
        "name": "Mesa 1 - Familia Novia",
        "capacity": 8
      }
    }
  ]
}
```

**Notas**:
- Búsqueda case-insensitive
- Usa Fuse.js con threshold 0.4
- Máximo 5 resultados
- No requiere autenticación

---

### 2. Confirmar Llegada (Check-in)

**Endpoint**: `POST /api/w/[slug]/checkin`

**Descripción**: Marca la llegada de un invitado

**Body**:
```json
{
  "guestId": "clx...",
  "pin": "1234"
}
```

**Response Success**:
```json
{
  "success": true,
  "guest": {
    "id": "clx...",
    "fullName": "Ana García",
    "arrivedAt": "2025-12-27T18:30:00.000Z"
  }
}
```

**Response Error (PIN incorrecto)**:
```json
{
  "error": "PIN incorrecto"
}
```

**Códigos de Estado**:
- `200` - Check-in exitoso
- `400` - Datos faltantes
- `403` - PIN incorrecto
- `404` - Invitado o boda no encontrada

---

## 🔒 APIs Admin

> **Nota**: Todas las APIs admin requieren autenticación con NextAuth

### Mesas (Tables)

#### Listar Mesas

**Endpoint**: `GET /api/admin/tables`

**Response**:
```json
[
  {
    "id": "clx...",
    "weddingId": "clx...",
    "name": "Mesa 1 - Familia Novia",
    "capacity": 8,
    "type": "VIP",
    "positionX": 100,
    "positionY": 100,
    "_count": {
      "guests": 5
    }
  }
]
```

---

#### Crear Mesa

**Endpoint**: `POST /api/admin/tables`

**Body**:
```json
{
  "name": "Mesa 4 - Amigos",
  "capacity": 6,
  "type": "Regular",
  "positionX": 200,
  "positionY": 300
}
```

**Response**:
```json
{
  "id": "clx...",
  "weddingId": "clx...",
  "name": "Mesa 4 - Amigos",
  "capacity": 6,
  "type": "Regular",
  "positionX": 200,
  "positionY": 300,
  "createdAt": "2025-12-27T18:00:00.000Z",
  "updatedAt": "2025-12-27T18:00:00.000Z"
}
```

**Validaciones**:
- `name`: string, requerido, min 1 char
- `capacity`: number, requerido, min 1
- `type`: string, opcional
- `positionX`: number, opcional
- `positionY`: number, opcional

---

#### Actualizar Mesa

**Endpoint**: `PUT /api/admin/tables`

**Body**:
```json
{
  "id": "clx...",
  "name": "Mesa 4 - Amigos Cercanos",
  "capacity": 8,
  "type": "VIP"
}
```

**Response**: Igual que crear mesa

---

#### Eliminar Mesa

**Endpoint**: `DELETE /api/admin/tables?id=clx...`

**Response**:
```json
{
  "success": true
}
```

**Nota**: Los invitados asignados a esta mesa quedarán sin mesa (tableId = null)

---

### Invitados (Guests)

#### Listar Invitados

**Endpoint**: `GET /api/admin/guests`

**Response**:
```json
[
  {
    "id": "clx...",
    "weddingId": "clx...",
    "fullName": "Ana García",
    "group": "Familia Novia",
    "tagsJson": "👰,💐",
    "seatNumber": 1,
    "arrivedAt": "2025-12-27T18:30:00.000Z",
    "table": {
      "id": "clx...",
      "name": "Mesa 1 - Familia Novia"
    }
  }
]
```

---

#### Crear Invitado

**Endpoint**: `POST /api/admin/guests`

**Body**:
```json
{
  "fullName": "María López",
  "group": "Amigos",
  "tagsJson": "🎓,🎨",
  "tableId": "clx...",
  "seatNumber": 3
}
```

**Response**:
```json
{
  "id": "clx...",
  "weddingId": "clx...",
  "fullName": "María López",
  "group": "Amigos",
  "tagsJson": "🎓,🎨",
  "tableId": "clx...",
  "seatNumber": 3,
  "arrivedAt": null,
  "createdAt": "2025-12-27T18:00:00.000Z",
  "updatedAt": "2025-12-27T18:00:00.000Z"
}
```

**Validaciones**:
- `fullName`: string, requerido, min 1 char
- `group`: string, opcional, nullable
- `tagsJson`: string, opcional, nullable
- `tableId`: string, opcional, nullable
- `seatNumber`: number, opcional, nullable

---

#### Actualizar Invitado

**Endpoint**: `PUT /api/admin/guests`

**Body**:
```json
{
  "id": "clx...",
  "fullName": "María López García",
  "group": "Amigos Cercanos",
  "tableId": "clx...",
  "seatNumber": 5
}
```

**Response**: Igual que crear invitado

---

#### Eliminar Invitado

**Endpoint**: `DELETE /api/admin/guests?id=clx...`

**Response**:
```json
{
  "success": true
}
```

---

### Importar/Exportar

#### Importar CSV

**Endpoint**: `POST /api/admin/import`

**Content-Type**: `multipart/form-data`

**Body**:
```
file: [archivo.csv]
```

**Formato CSV**:
```csv
nombre,grupo,tags,mesa,asiento
Ana García,Familia,👰,Mesa 1,1
Pedro López,Amigos,🎓,Mesa 2,2
```

**Response**:
```json
{
  "success": true,
  "imported": 15
}
```

**Notas**:
- Columnas flexibles: `nombre`/`name`/`fullName`
- Mesa debe coincidir exactamente con nombre existente
- Si mesa no existe, tableId será null
- Crea todos los invitados, no actualiza existentes

---

#### Exportar CSV

**Endpoint**: `GET /api/admin/export`

**Response**: Archivo CSV

**Content-Type**: `text/csv`

**Formato**:
```csv
nombre,grupo,tags,mesa,asiento,llegada
Ana García,Familia Novia,👰💐,Mesa 1 - Familia Novia,1,27/12/2025 18:30:00
Pedro López,Amigos,🎓,Mesa 2 - Amigos,2,
```

**Notas**:
- Ordenado por: mesa, asiento, nombre
- Fecha en formato español (es-ES)
- Campos vacíos si no hay datos

---

## 📊 Modelos de Datos

### Wedding (Boda)

```typescript
{
  id: string              // cuid
  name: string            // "Boda de María y Juan"
  slug: string            // "maria-y-juan-2025" (único)
  checkinPinHash: string  // bcrypt hash del PIN
  createdAt: Date
  updatedAt: Date
}
```

---

### Table (Mesa)

```typescript
{
  id: string
  weddingId: string
  name: string            // "Mesa 1 - Familia Novia"
  capacity: number        // 8
  type: string | null     // "VIP", "Regular", etc.
  positionX: number | null // Para mapa visual
  positionY: number | null
  createdAt: Date
  updatedAt: Date
}
```

---

### Guest (Invitado)

```typescript
{
  id: string
  weddingId: string
  fullName: string        // "Ana García"
  group: string | null    // "Familia Novia"
  tagsJson: string | null // "👰,💐"
  tableId: string | null
  seatNumber: number | null // 1, 2, 3...
  arrivedAt: Date | null  // Timestamp de check-in
  createdAt: Date
  updatedAt: Date
}
```

---

### AdminUser (Usuario Admin)

```typescript
{
  id: string
  email: string           // Único
  passwordHash: string    // bcrypt
  name: string | null
  role: string            // "admin"
  emailVerified: Date | null
  image: string | null
  createdAt: Date
  updatedAt: Date
}
```

---

## ⚠️ Códigos de Error

### Errores Comunes

#### 400 Bad Request
```json
{
  "error": "Missing id"
}
```

```json
{
  "error": [
    {
      "path": ["name"],
      "message": "Required"
    }
  ]
}
```

#### 401 Unauthorized
```json
{
  "error": "Unauthorized"
}
```

#### 403 Forbidden
```json
{
  "error": "PIN incorrecto"
}
```

#### 404 Not Found
```json
{
  "error": "Wedding not found"
}
```

```json
{
  "error": "Guest not found"
}
```

#### 500 Internal Server Error
```json
{
  "error": "Internal error"
}
```

```json
{
  "error": "Import failed"
}
```

---

## 🧪 Ejemplos de Uso

### Ejemplo 1: Flujo completo de invitado

```javascript
// 1. Buscar invitado
const searchRes = await fetch('/api/w/maria-y-juan-2025/lookup', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'ana garcia' })
});
const { guests } = await searchRes.json();
const guest = guests[0];

// 2. Confirmar llegada
const checkinRes = await fetch('/api/w/maria-y-juan-2025/checkin', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    guestId: guest.id,
    pin: '1234'
  })
});
const { success } = await checkinRes.json();
```

---

### Ejemplo 2: Crear mesa y asignar invitados (Admin)

```javascript
// 1. Crear mesa
const tableRes = await fetch('/api/admin/tables', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Mesa 5 - Trabajo',
    capacity: 6,
    type: 'Regular'
  })
});
const table = await tableRes.json();

// 2. Crear invitado asignado a esa mesa
const guestRes = await fetch('/api/admin/guests', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    fullName: 'Carlos Méndez',
    group: 'Trabajo',
    tableId: table.id,
    seatNumber: 1
  })
});
const guest = await guestRes.json();
```

---

### Ejemplo 3: Importar invitados desde CSV

```javascript
const formData = new FormData();
formData.append('file', csvFile);

const res = await fetch('/api/admin/import', {
  method: 'POST',
  body: formData
});

const { success, imported } = await res.json();
console.log(`Importados: ${imported} invitados`);
```

---

### Ejemplo 4: Exportar lista de invitados

```javascript
const res = await fetch('/api/admin/export');
const blob = await res.blob();
const url = window.URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = 'invitados.csv';
a.click();
```

---

## 🔍 Tips de Desarrollo

### Validación con Zod

Todas las APIs usan Zod para validación:

```typescript
import { z } from 'zod';

const guestSchema = z.object({
  fullName: z.string().min(1),
  group: z.string().nullable().optional(),
  tableId: z.string().nullable().optional(),
  seatNumber: z.number().nullable().optional(),
});

const data = guestSchema.parse(body);
```

### Manejo de Errores

```typescript
try {
  const data = schema.parse(body);
  // ... lógica
} catch (error) {
  if (error instanceof z.ZodError) {
    return NextResponse.json({ error: error.errors }, { status: 400 });
  }
  return NextResponse.json({ error: 'Internal error' }, { status: 500 });
}
```

### Autenticación en APIs

```typescript
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

const session = await getServerSession(authOptions);
if (!session) {
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
}
```

---

## 📚 Recursos Adicionales

- [Prisma Docs](https://www.prisma.io/docs)
- [NextAuth.js Docs](https://next-auth.js.org)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [Zod Docs](https://zod.dev)

---

¿Preguntas? Revisa el README.md o INSTRUCCIONES-RAPIDAS.md
