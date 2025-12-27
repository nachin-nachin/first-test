# ✅ Checklist de Deploy

## 📋 Pre-Deploy

### Preparación Local
- [ ] Node.js 18+ instalado
- [ ] Git instalado
- [ ] Proyecto funciona localmente (`npm run dev`)
- [ ] Todas las dependencias instaladas (`npm install`)
- [ ] Build funciona sin errores (`npm run build`)

### Cuentas Necesarias
- [ ] Cuenta en GitHub creada
- [ ] Cuenta en Supabase creada
- [ ] Cuenta en Netlify creada

---

## 🐙 GitHub

### Preparar Repositorio
- [ ] Ejecutado `./deploy-setup.sh`
- [ ] Git inicializado (`git init`)
- [ ] Archivos agregados (`git add .`)
- [ ] Primer commit hecho (`git commit -m "Initial commit"`)

### Crear Repositorio en GitHub
- [ ] Repositorio creado en GitHub
- [ ] Nombre: `qr-wedding-seating`
- [ ] Visibilidad configurada (Public/Private)

### Subir Código
- [ ] Remote agregado (`git remote add origin ...`)
- [ ] Código subido (`git push -u origin main`)
- [ ] Verificado en GitHub que todo está subido

---

## 🗄️ Supabase

### Crear Proyecto
- [ ] Proyecto creado en Supabase
- [ ] Nombre: `qr-wedding-seating`
- [ ] Región seleccionada
- [ ] Password guardado en lugar seguro

### Obtener Credenciales
- [ ] Connection String copiado
- [ ] Password reemplazado en la URL
- [ ] URL guardada para usar en Netlify

### Configurar Base de Datos
- [ ] Migraciones ejecutadas (`npx prisma db push`)
- [ ] Datos de ejemplo cargados (`npx prisma db seed`)
- [ ] Verificado en Supabase Table Editor que hay datos

---

## 🌐 Netlify

### Crear Sitio
- [ ] Sitio creado desde GitHub
- [ ] Repositorio `qr-wedding-seating` seleccionado
- [ ] Build command: `npm run build`
- [ ] Publish directory: `.next`

### Variables de Entorno
- [ ] `DATABASE_URL` agregado (de Supabase)
- [ ] `NEXTAUTH_SECRET` generado y agregado
- [ ] `NEXTAUTH_URL` agregado (URL de Netlify)
- [ ] `NEXT_PUBLIC_APP_URL` agregado (URL de Netlify)

### Deploy Inicial
- [ ] Primer deploy completado
- [ ] URL de Netlify obtenida
- [ ] Variables actualizadas con URL real
- [ ] Redeploy ejecutado

---

## ✅ Verificación

### Funcionalidad Básica
- [ ] Dashboard abre: `https://tu-sitio.netlify.app`
- [ ] Vista invitado funciona: `/w/maria-y-juan-2025`
- [ ] Búsqueda de invitados funciona
- [ ] Se muestran las mesas correctamente

### Funcionalidad Avanzada
- [ ] Pestaña PRO funciona
- [ ] Drag & Drop funciona
- [ ] Estadísticas se muestran
- [ ] Notificaciones aparecen
- [ ] QR se genera correctamente

### Datos
- [ ] Invitados de ejemplo visibles
- [ ] Mesas de ejemplo visibles
- [ ] Check-in funciona con PIN 1234
- [ ] Exportar CSV funciona

---

## 📱 QR y Evento

### Generar QR
- [ ] QR descargado del dashboard
- [ ] Imagen guardada como `qr-boda.png`
- [ ] QR probado con celular
- [ ] QR abre la URL correcta

### Preparar Letrero
- [ ] `LETRERO-QR-IMPRIMIBLE.html` editado
- [ ] QR pegado en el letrero
- [ ] Letrero impreso en A4
- [ ] Material adecuado (fotográfico/cartulina)
- [ ] Plastificado o enmarcado

### Ubicación
- [ ] Ubicaciones definidas (entrada, recepción, etc.)
- [ ] Cantidad de copias decidida (mínimo 2)
- [ ] Soportes/marcos preparados
- [ ] Plan de colocación definido

---

## 👥 Datos Reales

### Preparar Invitados
- [ ] Lista de invitados completa
- [ ] CSV preparado con formato correcto
- [ ] Grupos definidos
- [ ] Tags/emojis decididos (opcional)

### Preparar Mesas
- [ ] Cantidad de mesas definida
- [ ] Capacidad de cada mesa definida
- [ ] Nombres de mesas decididos
- [ ] Tipos de mesas definidos (VIP, Regular, etc.)

### Cargar Datos
- [ ] Mesas creadas en el dashboard
- [ ] Invitados importados desde CSV
- [ ] Invitados asignados a mesas
- [ ] Asientos asignados (opcional)
- [ ] Verificado que todos están asignados

---

## 🔐 Seguridad

### Credenciales
- [ ] NEXTAUTH_SECRET guardado en lugar seguro
- [ ] Password de Supabase guardado
- [ ] PIN de check-in comunicado al staff
- [ ] Acceso admin protegido

### Backup
- [ ] Backup de base de datos hecho
- [ ] CSV exportado como respaldo
- [ ] Lista impresa preparada (plan B)
- [ ] Credenciales guardadas en 2 lugares

---

## 📊 Pre-Evento

### 1 Semana Antes
- [ ] Sistema completamente funcional
- [ ] Todos los datos cargados
- [ ] QR impreso y probado
- [ ] Staff capacitado
- [ ] WiFi del lugar verificado

### 1 Día Antes
- [ ] Sistema probado nuevamente
- [ ] QR colocados en ubicaciones
- [ ] Tablet/iPad preparado para admin
- [ ] Plan B listo (lista impresa)
- [ ] Contactos de emergencia compartidos

### Día del Evento
- [ ] Dashboard abierto en tablet
- [ ] QR visibles y accesibles
- [ ] WiFi funcionando
- [ ] Personal asignado para ayudar
- [ ] Monitor de check-in activo

---

## 🎯 URLs Importantes

### Producción
```
Dashboard: https://tu-sitio.netlify.app
Vista Invitado: https://tu-sitio.netlify.app/w/tu-boda-2025
GitHub: https://github.com/TU-USUARIO/qr-wedding-seating
Netlify: https://app.netlify.com/sites/tu-sitio
Supabase: https://app.supabase.com/project/tu-proyecto
```

### Guardar en:
- [ ] Notas del celular
- [ ] Email
- [ ] Documento compartido con staff
- [ ] Impreso como backup

---

## 📞 Contactos de Emergencia

### Técnico
- [ ] Desarrollador: _______________
- [ ] Soporte Netlify: support.netlify.com
- [ ] Soporte Supabase: supabase.com/support

### Evento
- [ ] Coordinador: _______________
- [ ] Responsable técnico: _______________
- [ ] Backup: _______________

---

## 🎉 Post-Deploy

### Inmediatamente Después
- [ ] Probado en varios dispositivos
- [ ] Probado en diferentes navegadores
- [ ] Compartido URL con equipo
- [ ] Documentación revisada

### Antes del Evento
- [ ] Prueba final completa
- [ ] Datos verificados
- [ ] QR probado in-situ
- [ ] Staff capacitado

---

## 📊 Métricas de Éxito

### Técnicas
- [ ] Build time < 5 minutos
- [ ] Sitio carga en < 3 segundos
- [ ] 0 errores en consola
- [ ] Todas las funciones operativas

### Evento
- [ ] 90%+ de invitados usan el sistema
- [ ] 0 problemas técnicos mayores
- [ ] Staff satisfecho con el sistema
- [ ] Novios impresionados

---

## ✅ CHECKLIST FINAL

**Todo listo cuando:**
- [ ] ✅ Código en GitHub
- [ ] ✅ Sitio en Netlify
- [ ] ✅ Base de datos en Supabase
- [ ] ✅ Datos reales cargados
- [ ] ✅ QR impreso y colocado
- [ ] ✅ Staff capacitado
- [ ] ✅ Plan B preparado
- [ ] ✅ URLs compartidas
- [ ] ✅ Probado end-to-end

---

## 🎊 ¡LISTO PARA EL EVENTO!

Cuando todos los checkboxes estén marcados, tu sistema está 100% listo.

**¡Disfruta tu boda con tecnología profesional!** 💒✨

---

## 📝 Notas Adicionales

Usa este espacio para notas específicas de tu evento:

```
_____________________________________________

_____________________________________________

_____________________________________________

_____________________________________________

_____________________________________________
```
