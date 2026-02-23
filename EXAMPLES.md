# 📖 Ejemplos de Estructura - Copia y Pega

Este archivo tiene ejemplos completos que puedes copiar y pegar en tu data.json.

---

## 📺 Ejemplo: Agregar 3 Canales Nuevos a Películas

En data.json, busca `"1": [` y agrega esto al final de la lista (antes del `]`):

```json
,
{
  "id": 1010,
  "name": "TNT",
  "image": "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800&q=80",
  "accent": "linear-gradient(to right, #ff0000, #ff3300)",
  "streamUrl": "https://ejemplo.com/tnt.m3u8"
},
{
  "id": 1011,
  "name": "HBO",
  "image": "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&q=80",
  "accent": "linear-gradient(to right, #333333, #666666)",
  "streamUrl": "https://ejemplo.com/hbo.m3u8"
},
{
  "id": 1012,
  "name": "Star+",
  "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  "accent": "linear-gradient(to right, #0066ff, #0099ff)",
  "streamUrl": "https://ejemplo.com/star.m3u8"
}
```

---

## 🎬 Ejemplo: Agregar Nueva Categoría (Anime)

### Paso 1: Agregar a "categories"

Busca `"categories": [` y agrega al final (antes del `]`):

```json
,
{
  "id": 9,
  "name": "Anime",
  "type": "Dibujado",
  "image": "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=800&q=80",
  "accent": "linear-gradient(to right, #8b00ff, #ff0080)"
}
```

### Paso 2: Agregar a "channels"

Busca `"8": [` y agrega después:

```json
,
"9": [
  {
    "id": 9001,
    "name": "Crunchyroll",
    "image": "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=800&q=80",
    "accent": "linear-gradient(to right, #ffcc00, #ff9900)",
    "streamUrl": "https://ejemplo.com/crunchyroll.m3u8"
  },
  {
    "id": 9002,
    "name": "AnimeFlix",
    "image": "https://images.unsplash.com/photo-1537381052736-fe75ced1d556?w=800&q=80",
    "accent": "linear-gradient(to right, #ff1493, #ff69b4)",
    "streamUrl": "https://ejemplo.com/animeflix.m3u8"
  },
  {
    "id": 9003,
    "name": "Anime Plus",
    "image": "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80",
    "accent": "linear-gradient(to right, #00ccff, #0099ff)",
    "streamUrl": "https://ejemplo.com/animeplus.m3u8"
  }
]
```

---

## 🇨🇱 Ejemplo: Agregar 2 Canales Chilenos Nuevos

Busca `"chileanChannels": [` y agrega al final (antes del `]`):

```json
,
{
  "id": 110,
  "name": "Señal 3",
  "type": "Televisión Chilena",
  "image": "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&q=80",
  "accent": "linear-gradient(to right, #003300, #006600)",
  "category": 3,
  "streamUrl": "https://ejemplo.com/senal3.m3u8"
},
{
  "id": 111,
  "name": "Vía X",
  "type": "Televisión Chilena",
  "image": "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800&q=80",
  "accent": "linear-gradient(to right, #ff0000, #ff3300)",
  "category": 4,
  "streamUrl": "https://ejemplo.com/viax.m3u8"
}
```

---

## 🎨 Colores Listos para Copiar

```json
"accent": "linear-gradient(to right, #ec4899, #f472b6)"      // Rosa
"accent": "linear-gradient(to right, #3b82f6, #60a5fa)"      // Azul
"accent": "linear-gradient(to right, #10b981, #34d399)"      // Verde
"accent": "linear-gradient(to right, #f59e0b, #fbbf24)"      // Naranja
"accent": "linear-gradient(to right, #8b5cf6, #a78bfa)"      // Morado
"accent": "linear-gradient(to right, #06b6d4, #0ea5e9)"      // Cyan
"accent": "linear-gradient(to right, #ef4444, #f87171)"      // Rojo
"accent": "linear-gradient(to right, #f97316, #fb923c)"      // Naranja Oscuro
"accent": "linear-gradient(to right, #06b6d4, #0891b2)"      // Teal
"accent": "linear-gradient(to right, #d946ef, #f472b6)"      // Fuchsia
"accent": "linear-gradient(to right, #6366f1, #818cf8)"      // Indigo
"accent": "linear-gradient(to right, #0ea5e9, #0284c7)"      // Sky Blue
"accent": "linear-gradient(to right, #a16207, #b45309)"      // Marrón
"accent": "linear-gradient(to right, #16a34a, #22c55e)"      // Verde Claro
"accent": "linear-gradient(to right, #991b1b, #dc2626)"      // Rojo Oscuro
```

---

## 🖼️ URLs de Imágenes Bonitas

### Películas/Cine
```
https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800&q=80
https://images.unsplash.com/photo-1489599849228-5ab3250baee5?w=800&q=80
https://images.unsplash.com/photo-1495146853494-d71bcdd2d058?w=800&q=80
```

### Series/TV
```
https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&q=80
https://images.unsplash.com/photo-1517604712202-14319c0bce4f?w=800&q=80
```

### Documentales
```
https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80
https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?w=800&q=80
```

### Deportes
```
https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80
https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80
```

### Infantil
```
https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80
https://images.unsplash.com/photo-1535016120754-be64f06b1371?w=800&q=80
```

### Música
```
https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=800&q=80
https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80
```

### Noticias
```
https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&q=80
https://images.unsplash.com/photo-1579373903181-fd4c4557015d?w=800&q=80
```

### Cocina
```
https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&q=80
https://images.unsplash.com/photo-1495577846210-6f4ee915583e?w=800&q=80
```

### Anime
```
https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=800&q=80
https://images.unsplash.com/photo-1537381052736-fe75ced1d556?w=800&q=80
```

---

## 🔗 URLs de Streams m3u8 de Prueba

```
https://test-streams.mux.dev/x36xhzz/x3 rush.m3u8
https://test-streams.mux.dev/simple-live.m3u8
https://bitdash-a.akamaihd.net/content/M1210/m3u8s/M1210.m3u8
```

**Nota:** Usa estas para probar. Para canales reales, necesitas URLs oficiales.

---

## ✅ Checklist al Agregar Contenido

Cuando copies y pegues código:

- [ ] **ID único:** No se repite en la misma categoría
- [ ] **Coma:** Hay coma antes de cada nuevo elemento
- [ ] **Comillas:** Todas las strings tienen comillas `""`
- [ ] **Colchetes:** Están balanceados `{ } [ ]`
- [ ] **Image URL:** Es válida y termina con `?w=800&q=80`
- [ ] **Accent:** Tiene dos colores en el gradiente
- [ ] **streamUrl:** Es una URL válida o está vacía

---

## 🚀 Copiar/Pegar Rápido

1. Selecciona el código que necesitas
2. Presiona `Ctrl + C` (copiar)
3. Ve a GitHub → data.json → Editar
4. Ve al lugar donde quieres pegarlo
5. Presiona `Ctrl + V` (pegar)
6. Ajusta los valores (nombres, URLs, etc)
7. Commit changes ✅

---

## 💡 Tips

- **Para probar:** Usa las URLs de streams de prueba arriba
- **Para cambiar colores:** Ve a https://uigradients.com/
- **Para agregar imágenes:** Busca en https://unsplash.com/
- **Para validar:** Prueba tu JSON en https://jsonlint.com/

¡Disfruta personalizando tu plataforma! 🎬✨
