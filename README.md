# 📺 TVStudio - Guía de Edición

¡Bienvenido! Esta guía te muestra cómo agregar, editar y eliminar contenido en tu plataforma TVStudio desde GitHub.

## 📁 Estructura de Archivos

```
tu-repositorio/
├── index.html           (Página principal)
├── channels.html        (Página de canales)
├── player.html          (Reproductor)
├── data.json            (ARCHIVO A EDITAR) ⭐
└── README.md            (Este archivo)
```

---

## 🎯 Cómo Editar data.json en GitHub

### Paso 1: Abre el archivo data.json
1. Ve a tu repositorio en GitHub
2. Haz clic en `data.json`
3. Haz clic en el icono de **lápiz** (Edit) en la esquina superior derecha

### Paso 2: Realiza tus cambios
Edita el contenido según necesites (ver ejemplos abajo)

### Paso 3: Guarda los cambios
1. Baja hasta el final de la página
2. En "Commit changes", agrega un mensaje descriptivo (ej: "Agregué canal TNT")
3. Haz clic en **"Commit changes"**

¡Listo! Los cambios se reflejarán en tu sitio automáticamente.

---

## 📝 Ejemplos de Edición

### Agregar una Nueva Categoría

Encuentra la sección `"categories"` en data.json y agrega:

```json
{
  "id": 9,
  "name": "Acción",
  "type": "Películas de Acción",
  "image": "https://images.unsplash.com/photo-...?w=800&q=80",
  "accent": "linear-gradient(to right, #ff0000, #ff6600)"
}
```

**Campos obligatorios:**
- `id`: Número único (aumenta el último número +1)
- `name`: Nombre visible
- `type`: Subtítulo o tipo
- `image`: URL de una imagen (busca en unsplash.com)
- `accent`: Gradiente CSS para el color

---

### Agregar un Nuevo Canal a una Categoría

Busca `"channels"` → `"1"` (o el ID de la categoría que desees)

Agrega dentro del array:

```json
{
  "id": 1007,
  "name": "Películas de Terror",
  "image": "https://images.unsplash.com/photo-...?w=800&q=80",
  "accent": "linear-gradient(to right, #8b0000, #ff0000)",
  "streamUrl": "https://tu-url-m3u8.com/stream.m3u8"
}
```

**Campos:**
- `id`: Número único para el canal
- `name`: Nombre del canal
- `image`: URL de imagen
- `accent`: Color gradiente
- `streamUrl`: URL del archivo m3u8 o HLS ⭐

---

### Agregar un Canal Chileno

Busca `"chileanChannels"` y agrega:

```json
{
  "id": 109,
  "name": "Mi Canal",
  "type": "Televisión Chilena",
  "image": "https://images.unsplash.com/photo-...?w=800&q=80",
  "accent": "linear-gradient(to right, #00ff00, #00aa00)",
  "category": 1,
  "streamUrl": "https://tu-url-m3u8.com/stream.m3u8"
}
```

**Campos:**
- `id`: Número único
- `name`: Nombre del canal
- `type`: Siempre "Televisión Chilena"
- `image`: URL de imagen
- `accent`: Color gradiente
- `category`: ID de la categoría a la que pertenece
- `streamUrl`: URL del stream

---

## 🔗 Dónde Encontrar Enlaces m3u8

### Opciones para encontrar streams:

1. **IPTV Legales:**
   - Servicios de streaming (Netflix, Disney+, etc. tienen sus propios m3u8)
   - Canales públicos

2. **Prueba:**
   - `https://test-streams.mux.dev/x36xhzz/x3 rush.m3u8` (Stream de prueba)

3. **Agregar tus propios streams:**
   - Reemplaza la URL en `streamUrl` con tu enlace m3u8

---

## 🎨 Buscar Imágenes Bonitas

Para las URLs de `image`, usa:

1. **Unsplash** (Gratis y bonito)
   - Busca en: https://unsplash.com
   - Copia la URL de la imagen con `?w=800&q=80` al final

2. **Ejemplo de URL:**
   ```
   https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800&q=80
   ```

---

## 🎨 Colores y Gradientes

El campo `accent` usa gradientes CSS. Ejemplos:

```
"accent": "linear-gradient(to right, #ec4899, #f472b6)"   // Rosa
"accent": "linear-gradient(to right, #3b82f6, #60a5fa)"   // Azul
"accent": "linear-gradient(to right, #10b981, #34d399)"   // Verde
"accent": "linear-gradient(to right, #f59e0b, #fbbf24)"   // Naranja
"accent": "linear-gradient(to right, #8b5cf6, #a78bfa)"   // Morado
```

**Cómo crear el tuyo:**
1. Ve a https://uigradients.com/
2. Elige un gradiente
3. Copia el código CSS
4. Pégalo en el campo `accent`

---

## ⚠️ Errores Comunes

### Error: "Invalid JSON"
- **Causa:** Olvidaste una coma `,` al final de los elementos
- **Solución:** Agrega comas entre los elementos del array

### ❌ Incorrecto:
```json
{
  "id": 1001,
  "name": "Mi Canal"
}  // ← Falta coma aquí si hay más elementos
{
  "id": 1002,
  "name": "Otro Canal"
}
```

### ✅ Correcto:
```json
{
  "id": 1001,
  "name": "Mi Canal"
},
{
  "id": 1002,
  "name": "Otro Canal"
}
```

### Error: Cambios no se reflejan
- **Causa:** El navegador cachea el archivo
- **Solución:** Presiona `Ctrl + F5` o `Cmd + Shift + R` para limpiar caché

---

## 📋 Checklist para Agregar Contenido

Cuando agregues un nuevo elemento:

- [ ] ID es único (no se repite)
- [ ] Nombre es descriptivo
- [ ] Imagen URL es válida
- [ ] Gradiente tiene dos colores
- [ ] streamUrl es una URL válida (o déjala en blanco)
- [ ] Comas están en el lugar correcto
- [ ] JSON válido (prueba en https://jsonlint.com/)

---

## 🚀 Estructura Completa de data.json

```json
{
  "categories": [
    {
      "id": numero,
      "name": "nombre",
      "type": "tipo",
      "image": "url",
      "accent": "gradiente"
    }
  ],
  "channels": {
    "1": [
      {
        "id": numero,
        "name": "nombre",
        "image": "url",
        "accent": "gradiente",
        "streamUrl": "url-m3u8"
      }
    ]
  },
  "chileanChannels": [
    {
      "id": numero,
      "name": "nombre",
      "type": "Televisión Chilena",
      "image": "url",
      "accent": "gradiente",
      "category": id-categoria,
      "streamUrl": "url-m3u8"
    }
  ]
}
```

---

## 💡 Tips Avanzados

### Cambiar orden de canales
Solo reordena los elementos en el array. El orden en el JSON será el orden que se muestra.

### Eliminar un canal
Simplemente borra el objeto `{}` completo incluyendo la coma anterior/siguiente.

### Editar múltiples cosas
Puedes editar todo en un solo commit. GitHub guardará todos los cambios.

---

## ❓ ¿Preguntas?

Si tienes dudas sobre JSON o gradientes:
- JSON: https://www.json.org/
- Gradientes: https://uigradients.com/
- Imágenes: https://unsplash.com/

¡Disfruta creando contenido para tu plataforma! 🎬✨
