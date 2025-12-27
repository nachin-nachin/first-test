# 🚀 Deploy Rápido - QR Wedding Seating

## ⚡ Setup en 3 Comandos

```bash
# 1. Ejecuta el script de preparación
./deploy-setup.sh

# 2. Sube a GitHub
git add .
git commit -m "Initial commit"
git push -u origin main

# 3. Despliega en Netlify
# (Desde la interfaz web de Netlify)
```

---

## 📋 Checklist Rápido

### Antes de empezar:
- [ ] Node.js 18+ instalado
- [ ] Git instalado
- [ ] Cuenta en GitHub
- [ ] Cuenta en Supabase
- [ ] Cuenta en Netlify

### Archivos necesarios (ya incluidos):
- [x] `netlify.toml` - Configuración de Netlify
- [x] `.gitignore` - Archivos a ignorar
- [x] `.gitattributes` - Configuración de Git
- [x] `package.json` - Dependencias
- [x] `README.md` - Documentación

---

## 🎯 Opción 1: Deploy Automático (Recomendado)

### Paso 1: Ejecuta el script
```bash
./deploy-setup.sh
```

Este script:
- ✅ Verifica que todo esté instalado
- ✅ Genera NEXTAUTH_SECRET
- ✅ Inicializa Git
- ✅ Te da instrucciones específicas

### Paso 2: Sigue las instrucciones
El script te dirá exactamente qué hacer.

---

## 🎯 Opción 2: Manual

### 1. GitHub

```bash
# Inicializar Git
git init
git add .
git commit -m "Initial commit: QR Wedding Seating Pro"
git branch -M main

# Crear repo en GitHub y conectar
git remote add origin https://github.com/TU-USUARIO/qr-wedding-seating.git
git push -u origin main
```

### 2. Supabase

1. Crea proyecto en https://supabase.com
2. Copia Connection String
3. Ejecuta migraciones:
```bash
DATABASE_URL='tu-url' npx prisma db push
DATABASE_URL='tu-url' npx prisma db seed
```

### 3. Netlify

1. Import from GitHub
2. Agrega variables de entorno:
   - `DATABASE_URL`
   - `NEXTAUTH_URL`
   - `NEXTAUTH_SECRET`
   - `NEXT_PUBLIC_APP_URL`
3. Deploy

---

## 🔐 Variables de Entorno

### Generar NEXTAUTH_SECRET:
```bash
openssl rand -base64 32
```

### Variables necesarias en Netlify:

```env
DATABASE_URL=postgresql://postgres.xxx:PASSWORD@...
NEXTAUTH_URL=https://tu-sitio.netlify.app
NEXTAUTH_SECRET=tu-secret-generado
NEXT_PUBLIC_APP_URL=https://tu-sitio.netlify.app
```

---

## 📚 Documentación Completa

- **Guía completa:** `DEPLOY-GITHUB-NETLIFY.md`
- **Pasos rápidos:** `PASOS-RAPIDOS.md`
- **FAQ:** `FAQ-PRODUCCION.md`

---

## 🆘 Problemas Comunes

### "Build failed"
```bash
# Verifica localmente
npm run build

# Si funciona, revisa variables de entorno en Netlify
```

### "Database error"
```bash
# Verifica DATABASE_URL
# Ejecuta migraciones
npx prisma db push
```

### "NextAuth error"
```bash
# Verifica NEXTAUTH_SECRET y NEXTAUTH_URL
# Redeploy en Netlify
```

---

## ✅ Verificar Deploy

1. Abre tu URL de Netlify
2. Prueba el dashboard
3. Prueba la vista de invitado: `/w/maria-y-juan-2025`
4. Busca "Ana García"
5. Debería mostrar su mesa

---

## 💰 Costo

**$0 USD** usando planes gratuitos:
- GitHub: Gratis
- Netlify: Gratis (100 GB/mes)
- Supabase: Gratis (500 MB)

---

## 🎉 ¡Listo!

Tu sistema estará en:
```
https://tu-sitio.netlify.app
```

**Comparte esta URL con tus invitados!** 💒✨

---

## 📞 Soporte

- Guía completa: `DEPLOY-GITHUB-NETLIFY.md`
- FAQ: `FAQ-PRODUCCION.md`
- Issues: GitHub Issues en tu repo
