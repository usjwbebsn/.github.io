# 🚀 Configuración Inicial en GitHub

## Paso 1: Crear el Repositorio

1. Ve a **github.com** y crea una nueva cuenta (si no tienes)
2. Haz clic en **"Create repository"** (Nuevo repositorio)
3. Nombre: `tvstudio` (o el que quieras)
4. Selecciona **Public** (para que sea accesible)
5. Clic en **"Create repository"**

---

## Paso 2: Subir los Archivos

### Opción A: Desde GitHub (Web) - La Más Fácil ⭐

1. **Abre tu repositorio** en GitHub
2. Haz clic en **"Add file"** → **"Upload files"**
3. **Arrastra y suelta** estos 6 archivos:
   - `index.html`
   - `channels.html`
   - `player.html`
   - `data.json`
   - `README.md`
   - `QUICK_GUIDE.md`

4. Haz clic en **"Commit changes"**
5. ¡Listo! Todos los archivos están subidos

### Opción B: Desde tu Computadora (Terminal/Git)

```bash
# En tu carpeta local
git init
git add .
git commit -m "Initial commit - TVStudio"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/tvstudio.git
git push -u origin main
```

---

## Paso 3: Activar GitHub Pages

1. Abre tu repositorio en GitHub
2. Ve a **Settings** (Configuración)
3. En el menú izquierdo, busca **Pages**
4. En "Source", selecciona **main** branch
5. Haz clic en **Save**
6. ¡Tu sitio estará en: `https://TU_USUARIO.github.io/tvstudio/`

---

## Paso 4: Editar Contenido en GitHub

Ahora cada vez que quieras agregar un canal, película o categoría:

### Para Agregar un Canal:

1. **Ve a tu repositorio** → `data.json`
2. Haz clic en el **lápiz** (Edit)
3. **Busca** la sección de canales que quieras editar
4. **Agrega** tu canal nuevo (ver ejemplos abajo)
5. Haz clic en **Commit changes**
6. ¡Recarga tu sitio web!** (Ctrl+F5)

---

## 📝 Ejemplos Rápidos

### Ejemplo 1: Agregar un Canal de Películas

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

**Agrega esto al final (antes del `]`):**
```json
,
{
  "id": 1010,
  "name": "TNT",
  "image": "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800&q=80",
  "accent": "linear-gradient(to right, #ff0000, #ff3300)",
  "streamUrl": "https://tu-link-del-stream.com/stream.m3u8"
}
```

### Ejemplo 2: Agregar una Nueva Categoría

**Busca:**
```json
"categories": [
```

**Agrega al final:**
```json
,
{
  "id": 9,
  "name": "Anime",
  "type": "Dibujado",
  "image": "https://images.unsplash.com/photo-...?w=800&q=80",
  "accent": "linear-gradient(to right, #8b00ff, #ff0080)"
}
```

**Luego agrega una sección en `"channels"`:**
```json
"9": [
  {
    "id": 9001,
    "name": "Anime HD",
    "image": "URL_AQUI",
    "accent": "linear-gradient(to right, #8b00ff, #ff0080)",
    "streamUrl": "tu-link-m3u8"
  }
]
```

### Ejemplo 3: Agregar un Canal Chileno

**Busca:**
```json
"chileanChannels": [
```

**Agrega al final (antes del `]`):**
```json
,
{
  "id": 110,
  "name": "Señal 3",
  "type": "Televisión Chilena",
  "image": "https://images.unsplash.com/photo-...?w=800&q=80",
  "accent": "linear-gradient(to right, #003300, #006600)",
  "category": 1,
  "streamUrl": "https://tu-stream-m3u8.com/senal3.m3u8"
}
```

---

## 🔄 Flujo de Trabajo Diario

```
1. Piensas: "Quiero agregar CNN al canal de noticias"
   ↓
2. Abres GitHub en tu navegador
   ↓
3. Repositorio → data.json → Editar (lápiz)
   ↓
4. Buscas "7": [ (canales de noticias)
   ↓
5. Pegas tu código nuevo
   ↓
6. Haces "Commit changes"
   ↓
7. Recargas tu sitio web
   ↓
8. ¡Tu nuevo canal aparece! ✨
```

---

## 📱 Cambios Reflejados Automáticamente

**¿Cómo funciona?**

```
Tu data.json en GitHub
      ↓
Tu sitio web lo lee
      ↓
Renderiza los canales
```

No necesitas:
- ❌ Compilar código
- ❌ Instalar librerías
- ❌ Usar terminal (a menos que quieras)
- ❌ Esperar a que se compile

¡Solo edita el JSON y listo!

---

## 🆘 Solución de Problemas

### Los cambios no aparecen
- **Solución:** Presiona `Ctrl + F5` (Windows) o `Cmd + Shift + R` (Mac)
- Espera 10 segundos (GitHub tarda en actualizar)

### Error: "Invalid JSON"
- Verifica en https://jsonlint.com/
- Busca comas faltantes o mal colocadas

### Mi sitio no carga en GitHub Pages
- Asegúrate que GitHub Pages está activado (Settings → Pages)
- La URL debe ser: `https://TU_USUARIO.github.io/tvstudio/`
- Espera 2-3 minutos después de activar Pages

### Necesito cambiar colores
- Usa https://uigradients.com/
- Copia el gradiente y pégalo en `accent`

---

## 💾 Backup de tu Trabajo

**GitHub es tu backup automático**, pero también puedes:

1. Descargar todo:
   - Repositorio → Code → Download ZIP

2. O clonar:
   ```bash
   git clone https://github.com/TU_USUARIO/tvstudio.git
   ```

---

## 🎯 Checklist: Todo Listo

- [ ] Repositorio creado en GitHub
- [ ] 6 archivos subidos
- [ ] GitHub Pages activado
- [ ] Puedo acceder a mi sitio en la URL
- [ ] Edité data.json correctamente
- [ ] Los cambios aparecen en el sitio
- [ ] Entiendo cómo agregar canales
- [ ] Sé dónde buscar imágenes (Unsplash)
- [ ] Tengo links de streams m3u8

---

## 📚 Documentación Rápida

| Necesito... | Ver... |
|------------|--------|
| Agregar contenido rápidamente | `QUICK_GUIDE.md` |
| Explicación detallada | `README.md` |
| Estructura JSON completa | `data.json` |
| Configurar GitHub | Este archivo |

---

## 🚀 Próximos Pasos

1. **Sube tus archivos** a GitHub
2. **Activa GitHub Pages**
3. **Edita data.json** con tus canales
4. **Comparte tu URL** con amigos/familia
5. **Actualiza** cuando quieras nuevos contenidos

¡Tu plataforma de TV personalizada está lista! 🎬✨
