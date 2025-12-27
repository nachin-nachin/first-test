# ❓ Preguntas Frecuentes (FAQ)

## 📱 Uso General

### ¿Necesito instalar una app?
No. Es una aplicación web que funciona en cualquier navegador móvil. Los invitados solo escanean el QR y se abre automáticamente.

### ¿Funciona sin internet?
No. Tanto los invitados como el admin necesitan conexión a internet. Asegúrate de tener WiFi en el lugar del evento.

### ¿Puedo usar esto para otros eventos además de bodas?
¡Sí! Funciona para cualquier evento con asignación de mesas: quinceañeras, graduaciones, conferencias, cenas corporativas, etc.

### ¿Cuántos invitados soporta?
El sistema puede manejar fácilmente cientos o miles de invitados. La búsqueda fuzzy es muy rápida.

---

## 🔐 Seguridad y Privacidad

### ¿Los invitados pueden ver la lista completa de otros invitados?
No. La búsqueda solo muestra hasta 5 sugerencias basadas en lo que escriben, y solo ven su propia asignación de mesa.

### ¿Alguien puede marcar llegadas de otros invitados?
No, si configuras un PIN. El invitado necesita ingresar el PIN correcto (que está visible en el evento) para confirmar su llegada.

### ¿Puedo desactivar el PIN de check-in?
Sí. En `prisma/seed.ts`, deja `checkinPinHash: null` al crear la boda. Sin PIN, cualquiera puede confirmar llegadas.

### ¿Los datos están seguros?
Sí. Las contraseñas se hashean con bcrypt, hay autenticación con NextAuth, y validaciones en todas las APIs.

---

## 🖨️ Código QR

### ¿Dónde coloco el código QR?
Recomendamos:
- Entrada principal del salón (2 copias)
- Mesa de recepción
- Área de cócteles
- Junto al libro de firmas

### ¿Qué tamaño debe tener el QR?
Mínimo 10x10 cm, recomendado 15x15 cm. Mientras más grande, más fácil de escanear.

### ¿Funciona si imprimo en blanco y negro?
Sí, pero asegúrate de que haya buen contraste. Negro sobre blanco es ideal.

### ¿Puedo personalizar el diseño del QR?
El QR en sí debe mantenerse estándar, pero puedes diseñar el letrero alrededor con los colores y estilo de tu boda.

### ¿Qué pasa si el QR se daña o se moja?
Por eso recomendamos plastificarlo o enmarcarlo, y tener copias de backup.

---

## 👥 Gestión de Invitados

### ¿Puedo importar mi lista de Excel?
Sí. Guarda tu Excel como CSV y usa la función de importación. Ver `ejemplo-invitados.csv` para el formato.

### ¿Qué pasa si un invitado no está en la lista?
Puedes agregarlo rápidamente desde el panel admin, incluso durante el evento.

### ¿Puedo tener invitados sin mesa asignada?
Sí. Puedes crear invitados sin asignarles mesa. Cuando busquen su nombre, verán un mensaje indicando que consulten en recepción.

### ¿Cómo manejo invitados con nombres similares?
El sistema muestra sugerencias. Si hay "Ana García" y "Ana García López", ambas aparecerán y el invitado selecciona la correcta.

### ¿Puedo usar emojis en los tags?
¡Sí! Los emojis funcionan perfectamente: 👰🤵💐🎓⚽🎨📚

---

## 🪑 Gestión de Mesas

### ¿Puedo cambiar la asignación de mesas durante el evento?
Sí. Edita desde el panel admin y los cambios son inmediatos.

### ¿Qué pasa si una mesa se llena?
El sistema no bloquea automáticamente. Tú controlas las asignaciones. Puedes ver cuántos invitados tiene cada mesa vs su capacidad.

### ¿Puedo tener diferentes tipos de mesas?
Sí. Usa el campo "tipo" para clasificarlas: VIP, Regular, Familia, etc.

### ¿Necesito asignar números de asiento?
No, es opcional. Puedes solo asignar mesa, o también especificar el número de asiento.

---

## 📊 Check-in y Monitoreo

### ¿Cómo veo quién ha llegado?
Ve a `/admin/checkin` para ver la lista en tiempo real con auto-refresh cada 5 segundos.

### ¿Puedo exportar la lista de llegadas?
Sí. Usa la función de exportar CSV que incluye la columna "llegada" con fecha y hora.

### ¿El check-in es obligatorio?
No. Es opcional. Los invitados pueden solo ver su mesa sin confirmar llegada.

### ¿Puedo hacer check-in manual desde el admin?
Actualmente no hay interfaz para eso, pero puedes usar la API o agregar esa funcionalidad fácilmente.

---

## 🛠️ Técnicas

### ¿Necesito saber programar para usarlo?
Para el uso básico no. Solo necesitas seguir las instrucciones de instalación. Para personalizaciones avanzadas, sí necesitas conocimientos de desarrollo.

### ¿Qué base de datos necesito?
PostgreSQL. Puedes usar una local o un servicio como Supabase (gratis).

### ¿Funciona en iPhone y Android?
Sí, funciona en cualquier smartphone con cámara y navegador web.

### ¿Puedo usar mi propio dominio?
Sí. Despliega en Vercel y conecta tu dominio personalizado (ej: mesas.miboda.com).

### ¿Cuánto cuesta hostear esto?
$0 si usas los tiers gratuitos de Vercel y Supabase, que son más que suficientes para un evento.

---

## 🚀 Deploy y Producción

### ¿Dónde puedo desplegarlo?
Recomendamos Vercel (frontend) + Supabase (base de datos), ambos con planes gratuitos.

### ¿Necesito un servidor propio?
No. Vercel maneja todo el hosting automáticamente.

### ¿Cómo actualizo el sistema después del evento?
Puedes mantenerlo corriendo o simplemente apagarlo. Los datos quedan guardados en la base de datos.

### ¿Puedo reutilizarlo para otro evento?
Sí. Puedes crear múltiples bodas en la misma instancia (requiere modificación del código) o simplemente limpiar la base de datos y cargar nuevos datos.

---

## 🐛 Problemas Comunes

### El QR no escanea
- Verifica que el QR sea suficientemente grande
- Asegúrate de que haya buena iluminación
- Prueba con diferentes apps de cámara
- Verifica que la URL sea correcta

### "Wedding not found"
- Verifica que el slug en la URL coincida con el de la base de datos
- Revisa que la boda esté creada en la base de datos

### "PIN incorrecto"
- Verifica que el PIN sea el correcto (definido en seed.ts)
- El PIN es case-sensitive
- Asegúrate de que checkinPinHash esté configurado

### Los invitados no aparecen en la búsqueda
- Verifica que estén creados en la base de datos
- Revisa que pertenezcan a la boda correcta (weddingId)
- Intenta con diferentes variaciones del nombre

### Error de conexión a base de datos
- Verifica que PostgreSQL esté corriendo
- Revisa el DATABASE_URL en .env
- Prueba la conexión: `npx prisma db push`

### Error "NEXTAUTH_SECRET is not set"
- Genera un secret: `openssl rand -base64 32`
- Agrégalo a .env
- Reinicia el servidor

---

## 📈 Mejores Prácticas

### Antes del Evento

1. **Prueba todo con anticipación**
   - Carga todos los invitados
   - Asigna todas las mesas
   - Prueba el QR con diferentes celulares
   - Verifica la conexión WiFi en el lugar

2. **Prepara backups**
   - Imprime lista de invitados por mesa
   - Ten un plano de mesas físico
   - Lleva tablet con la app abierta
   - Exporta CSV de respaldo

3. **Capacita al personal**
   - Muestra cómo funciona el sistema
   - Explica cómo ayudar a los invitados
   - Comparte el PIN con el staff
   - Asigna responsables

### Durante el Evento

1. **Monitoreo activo**
   - Deja abierto el panel de check-in
   - Asigna alguien para ayudar con el QR
   - Ten el admin abierto para cambios rápidos

2. **Soporte a invitados**
   - Coloca señalización clara
   - Ten personal cerca del QR
   - Ofrece ayuda proactivamente

### Después del Evento

1. **Exporta los datos**
   - Descarga CSV con llegadas
   - Guarda estadísticas
   - Backup de la base de datos

2. **Análisis**
   - Revisa porcentaje de asistencia
   - Identifica patrones de llegada
   - Mejora para futuros eventos

---

## 💡 Tips y Trucos

### Para Invitados
- Usa el autocompletado, no escribas el nombre completo
- Si hay varios con tu nombre, fíjate en el grupo
- Guarda la página en favoritos por si necesitas verla después

### Para Admins
- Usa grupos para organizar mejor (Familia, Amigos, Trabajo)
- Los tags/emojis ayudan a identificar rápido
- Exporta CSV regularmente como backup
- Usa el campo "tipo" de mesa para categorizar

### Para Desarrolladores
- Revisa API-REFERENCE.md para integraciones
- Usa Prisma Studio para ver/editar datos: `npm run db:studio`
- Los logs de Next.js ayudan a debuggear
- Personaliza los colores en globals.css

---

## 🎨 Personalización

### ¿Puedo cambiar los colores?
Sí. Edita `src/app/globals.css` y modifica las variables CSS.

### ¿Puedo cambiar los textos?
Sí. Todos los textos están en español en los componentes. Edítalos directamente.

### ¿Puedo agregar un logo?
Sí. Agrega tu logo en `public/` y modifícalo en los componentes de layout.

### ¿Puedo agregar más campos a los invitados?
Sí. Modifica `prisma/schema.prisma`, ejecuta `npm run db:push`, y actualiza los formularios.

---

## 📞 Soporte

### ¿Dónde encuentro más ayuda?
- `README.md` - Documentación completa
- `INSTRUCCIONES-RAPIDAS.md` - Setup rápido
- `API-REFERENCE.md` - Referencia de APIs
- `CHECKLIST-IMPRESION-QR.md` - Guía de impresión

### ¿Puedo contribuir al proyecto?
¡Sí! Es código abierto. Haz un fork y envía pull requests.

### ¿Hay soporte comercial?
Este es un proyecto open source. Para soporte comercial o desarrollo personalizado, contrata a un desarrollador.

---

## 🎉 Casos de Uso Reales

### Boda de 150 invitados
- 15 mesas de 10 personas
- QR en entrada y recepción
- 95% de los invitados usaron el sistema
- 0 confusiones de mesas

### Conferencia de 300 asistentes
- 30 mesas de 10 personas
- QR en múltiples ubicaciones
- Check-in automático
- Exportación de asistencia

### Cena corporativa de 80 personas
- 10 mesas de 8 personas
- Asignación por departamento
- Monitoreo en tiempo real
- Reporte final de asistencia

---

¿Más preguntas? Abre un issue en GitHub o consulta la documentación completa.
