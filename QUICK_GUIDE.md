# ⚡ Guía Rápida - Editar TVStudio en GitHub

## 🚀 3 Pasos para Agregar Contenido

### Paso 1️⃣: Abre data.json en GitHub
```
Tu Repositorio → data.json → Haz clic en el lápiz (Edit)
```

### Paso 2️⃣: Copia y Modifica (Ejemplos abajo)

### Paso 3️⃣: Guarda
```
"Commit changes" → Escribe un mensaje → "Commit changes"
¡Los cambios aparecen automáticamente! (puede tardar unos segundos)
```

---

## 📺 Ejemplo: Agregar un Canal Nuevo

**Busca en data.json:**
```json
"1": [
  {
    "id": 1001,
    "name": "Cine Premium",
    ...
  }
]
```

**Agrega tu canal (dentro del array, con coma antes):**
```json
,
{
  "id": 1099,
  "name": "Mi Nuevo Canal",
  "image": "https://images.unsplash.com/photo-...?w=800&q=80",
  "accent": "linear-gradient(to right, #ff0000, #ff6600)",
  "streamUrl": "https://mi-stream.com/stream.m3u8"
}
```

---

## 🔗 Ejemplo: Agregar un Canal Chileno

**Busca:**
```json
"chileanChannels": [
```

**Agrega al final del array (antes del `]` final):**
```json
,
{
  "id": 200,
  "name": "Mi Canal Chile",
  "type": "Televisión Chilena",
  "image": "https://images.unsplash.com/photo-...?w=800&q=80",
  "accent": "linear-gradient(to right, #00ff00, #00aa00)",
  "category": 1,
  "streamUrl": "https://mi-stream.com/stream.m3u8"
}
```

---

## 🎨 Colores (Gradientes)

Copia y pega los que quieras:

| Color | Código |
|-------|--------|
| 🔴 Rojo | `linear-gradient(to right, #ec4899, #f472b6)` |
| 🔵 Azul | `linear-gradient(to right, #3b82f6, #60a5fa)` |
| 🟢 Verde | `linear-gradient(to right, #10b981, #34d399)` |
| 🟡 Naranja | `linear-gradient(to right, #f59e0b, #fbbf24)` |
| 🟣 Morado | `linear-gradient(to right, #8b5cf6, #a78bfa)` |
| 🔵 Cyan | `linear-gradient(to right, #06b6d4, #0ea5e9)` |

**O crea el tuyo:** https://uigradients.com/

---

## 🖼️ Imágenes (URLs)

Busca en **https://unsplash.com/**

Copia la URL y agrega `?w=800&q=80` al final:

```
https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800&q=80
```

---

## ⚠️ Errores Comunes

### ❌ "Invalid JSON"
**Problema:** Olvidaste una coma
```json
{
  "id": 1001,
  "name": "Canal"
}  ← Falta , si hay más elementos
{
  "id": 1002
}
```

**Solución:**
```json
{
  "id": 1001,
  "name": "Canal"
},  ← Agrega coma
{
  "id": 1002
}
```

### ❌ Los cambios no aparecen
- Presiona `Ctrl + F5` (Windows) o `Cmd + Shift + R` (Mac)
- Espera 10 segundos (caché)

### ❌ ID duplicado
- Cada `id` debe ser único
- Si agregas un canal en categoría 1, usa un id que no exista (ej: 1099)

---

## 📝 Estructura Completa

```json
{
  "categories": [...],
  "channels": {
    "1": [...],
    "2": [...],
    ...
  },
  "chileanChannels": [...]
}
```

**IDs para Canales:**
- Categoría 1 (Películas): 1000-1099
- Categoría 2 (Series): 2000-2099
- Categoría 3: 3000-3099
- ... y así sucesivamente
- Canales Chilenos: 100-199

---

## 🧪 Verificar JSON

Si tienes dudas si tu JSON es válido:
1. Copia todo el contenido de data.json
2. Ve a https://jsonlint.com/
3. Pega y verifica ✅

---

## 💾 Pasos en Imágenes (Resumen)

1. **Repositorio** → data.json → 🖊️ Edit
2. **Modifica** y copia tu contenido nuevo
3. **Scroll Down** → "Commit changes"
4. **Mensaje** (ej: "Agregué CNN Plus")
5. **Commit changes** ✅
6. **¡Listo!** Recarga tu web

---

## 🆘 Necesitas Ayuda?

Consulta el README.md completo para más información:
- Estructuras avanzadas
- Troubleshooting
- Ejemplos detallados

¡Disfruta creando! 🎬✨
