# ❓ Preguntas Frecuentes - Producción

## 🌐 Despliegue y Hosting

### ¿Cuánto cuesta poner esto en internet?
**$0 USD** usando los planes gratuitos de:
- Vercel (hosting)
- Supabase (base de datos)

Opcional: Dominio personalizado ($10-15/año)

### ¿Necesito saber programar para desplegarlo?
No. Solo necesitas:
1. Seguir los pasos de `PASOS-RAPIDOS.md`
2. Copiar y pegar algunos comandos
3. Configurar 4 variables de entorno

### ¿Cuánto tiempo toma desplegarlo?
**15-20 minutos** si sigues la guía paso a paso.

### ¿Puedo usar mi propio dominio?
Sí. En Vercel:
1. Settings → Domains
2. Agrega tu dominio
3. Configura los DNS según las instrucciones

---

## 📱 QR y Acceso

### ¿El QR funciona sin internet?
No. Los invitados necesitan:
- Internet (WiFi o datos móviles)
- Celular con cámara

**Solución:** Asegúrate de que haya WiFi en el lugar del evento.

### ¿Qué pasa si no hay WiFi en el lugar?
Opciones:
1. Usa tu celular como hotspot
2. Contrata WiFi temporal para el evento
3. Ten lista impresa como plan B

### ¿Funciona en todos los celulares?
Sí, funciona en:
- ✅ iPhone (iOS 11+)
- ✅ Android (5.0+)
- ✅ Cualquier celular con cámara y navegador

### ¿Necesito una app especial para escanear?
No. La cámara nativa del celular escanea QR automáticamente.

---

## 🖨️ Impresión del QR

### ¿Qué tamaño debe tener el QR?
**Mínimo:** 15 x 15 cm
**Recomendado:** 20 x 20 cm

Mientras más grande, más fácil de escanear.

### ¿En qué material lo imprimo?
Opciones:
- Papel fotográfico (brillante)
- Cartulina gruesa (250-300 gr)
- Foam board (para exterior)

**Importante:** Plastifica o enmarca para protegerlo.

### ¿Cuántas copias necesito?
**Mínimo:** 2 copias
**Recomendado:** 3-4 copias

Ubicaciones:
- Entrada principal (2)
- Mesa de recepción (1)
- Área de cócteles (1)

### ¿Puedo imprimir en blanco y negro?
Sí, pero asegúrate de que haya buen contraste.
Negro sobre blanco es ideal.

---

## 👥 Gestión de Invitados

### ¿Cómo cargo mis invitados?
Dos formas:
1. **Manual:** Desde el dashboard, uno por uno
2. **CSV:** Importa desde Excel (más rápido)

### ¿Puedo importar desde Excel?
Sí. Guarda tu Excel como CSV y usa la función de importación.

Formato:
```csv
nombre,grupo,tags,mesa,asiento
Ana García,Familia,👰,Mesa 1,1
```

### ¿Puedo cambiar mesas durante el evento?
Sí. Desde el dashboard puedes:
- Reasignar invitados
- Cambiar asientos
- Agregar invitados nuevos

Los cambios son instantáneos.

### ¿Qué pasa si un invitado no está en la lista?
Agrégalo rápidamente desde el dashboard:
1. Tab "Invitados"
2. "Nuevo Invitado"
3. Asigna mesa
4. Listo en 30 segundos

---

## ✅ Check-in

### ¿Para qué sirve el PIN?
El PIN (1234) evita que cualquiera marque llegadas falsas.
Solo quien esté en el evento conoce el PIN.

### ¿Puedo cambiar el PIN?
Sí. Edita `prisma/seed.ts`:
```typescript
const pinHash = await bcrypt.hash('TU-PIN', 10)
```

### ¿Es obligatorio el check-in?
No. Los invitados pueden solo ver su mesa sin confirmar llegada.

### ¿Puedo ver quién llegó en tiempo real?
Sí. El dashboard se actualiza automáticamente cada 5 segundos.

---

## 🔧 Problemas Técnicos

### "El QR no escanea"
Causas comunes:
- QR muy pequeño (< 10cm)
- Poca iluminación
- QR borroso o dañado

**Solución:**
- Imprime más grande
- Mejora la iluminación
- Imprime en mejor calidad

### "La página no carga"
Verifica:
1. ¿Hay internet?
2. ¿El sitio está desplegado en Vercel?
3. ¿La URL es correcta?

### "Un invitado no aparece al buscar"
Verifica:
1. ¿Está cargado en la base de datos?
2. ¿El nombre está bien escrito?
3. Intenta con variaciones del nombre

### "El dashboard no muestra datos"
Verifica:
1. ¿La base de datos tiene datos?
2. ¿Las variables de entorno están correctas?
3. Revisa los logs en Vercel

---

## 💾 Datos y Backup

### ¿Dónde se guardan los datos?
En Supabase (PostgreSQL en la nube).
Tus datos están seguros y con backup automático.

### ¿Puedo exportar los datos?
Sí. Desde el dashboard:
- Tab "Invitados"
- "Exportar CSV"
- Incluye quién llegó y a qué hora

### ¿Qué pasa si borro algo por error?
Supabase hace backups automáticos.
Puedes restaurar desde:
Settings → Database → Backups

### ¿Los datos son privados?
Sí. Solo tú (admin) puedes ver todos los datos.
Los invitados solo ven su propia asignación.

---

## 🎨 Personalización

### ¿Puedo cambiar los colores?
Sí. Edita `src/app/globals.css` y modifica las variables CSS.

### ¿Puedo cambiar el nombre de la boda?
Sí. Edita `prisma/seed.ts`:
```typescript
slug: 'tu-boda-2025',
```

### ¿Puedo agregar un logo?
Sí. Agrega tu logo en `public/` y modifícalo en los componentes.

### ¿Puedo cambiar los textos?
Sí. Todos los textos están en español en los componentes.
Edítalos directamente.

---

## 📊 Capacidad y Límites

### ¿Cuántos invitados soporta?
**Miles.** El sistema puede manejar fácilmente:
- 500+ invitados
- 50+ mesas
- Búsquedas instantáneas

### ¿Cuántas personas pueden usar el sistema al mismo tiempo?
**Cientos.** Vercel y Supabase escalan automáticamente.

### ¿Hay límite de almacenamiento?
Plan gratuito de Supabase:
- 500 MB de almacenamiento
- Más que suficiente para cualquier boda

---

## 🔐 Seguridad

### ¿Es seguro?
Sí. El sistema usa:
- HTTPS (conexión encriptada)
- Autenticación para admin
- PIN para check-in
- Base de datos segura

### ¿Los invitados pueden ver datos de otros?
No. Cada invitado solo ve su propia asignación.

### ¿Alguien puede hackear el sistema?
El sistema usa las mejores prácticas de seguridad.
Vercel y Supabase son plataformas profesionales y seguras.

---

## 💰 Costos Ocultos

### ¿Hay costos adicionales?
No. El plan gratuito incluye todo lo necesario.

### ¿Qué pasa si supero el plan gratuito?
Muy difícil para una boda. Pero si pasa:
- Vercel: $20/mes
- Supabase: $25/mes

### ¿Tengo que pagar después del evento?
No. Puedes:
1. Dejar el proyecto activo (gratis)
2. Pausarlo en Vercel
3. Eliminarlo completamente

---

## 📅 Después del Evento

### ¿Puedo reutilizar el sistema?
Sí. Puedes:
1. Limpiar la base de datos
2. Cargar nuevos datos
3. Usarlo para otro evento

### ¿Cómo descargo los datos finales?
1. Exporta CSV desde el dashboard
2. Backup de Supabase
3. Guarda en tu computadora

### ¿Debo eliminar el proyecto?
No es necesario. Puedes dejarlo activo (gratis) o eliminarlo.

---

## 🆘 Soporte

### ¿Dónde pido ayuda?
1. Lee `GUIA-DESPLIEGUE-PRODUCCION.md`
2. Revisa `PASOS-RAPIDOS.md`
3. Consulta los logs en Vercel
4. Revisa la documentación de Supabase

### ¿Hay soporte técnico?
Este es un proyecto open source.
Para soporte comercial, contrata a un desarrollador.

---

## ✅ Checklist Pre-Evento

**1 semana antes:**
- [ ] Sistema desplegado y funcionando
- [ ] Todos los invitados cargados
- [ ] Todas las mesas asignadas
- [ ] QR probado con varios celulares
- [ ] WiFi verificado en el lugar

**1 día antes:**
- [ ] QR impreso y plastificado
- [ ] Copias de backup listas
- [ ] Dashboard probado en tablet
- [ ] Personal capacitado
- [ ] Plan B preparado

**Día del evento:**
- [ ] QR colocados en ubicaciones
- [ ] Dashboard abierto y monitoreando
- [ ] WiFi funcionando
- [ ] Personal asignado para ayudar

---

¿Más preguntas? Lee la documentación completa. 📚
