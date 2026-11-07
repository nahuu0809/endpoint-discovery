# Endpoint Discovery

Script de Node.js con Playwright que abre un sitio de listados en un navegador visible y **muestra en consola las llamadas de red que devuelven JSON** (búsqueda, inventario, etc.). Sirve para ver de dónde sale la información de una página antes de decidir cómo extraerla.

## Cómo funciona

1. Abre Chromium (no headless) y navega a la URL indicada.
2. Escucha cada respuesta de red. Si la URL contiene `search`, `inventory` o `cars`, la imprime.
3. Intenta leer el cuerpo como JSON y lo imprime también.

## Uso

```bash
npm install
npx playwright install chromium

# la URL del sitio se pasa por variable de entorno
TARGET_URL="https://sitio-de-ejemplo.com/listado" node playwr.js
```

En PowerShell: `$env:TARGET_URL = "https://sitio-de-ejemplo.com/listado"; node playwr.js`.

Las palabras clave del filtro (`search`, `inventory`, `cars`) están en `playwr.js`. Cambialas según el tipo de sitio.

## Uso responsable

Es una herramienta de observación: ve lo mismo que ve el navegador al navegar. Antes de automatizar pedidos a un sitio, revisá sus términos de uso y su `robots.txt`.

## Notas

- Es un experimento corto, sin tests ni configuración.
- Los scripts de terceros que se descargan al navegar (por ejemplo bibliotecas de analítica) no forman parte de este repositorio.

## Créditos

Usa [Playwright](https://playwright.dev) (Microsoft, Apache-2.0).

## Licencia

Código bajo [licencia MIT](LICENSE). © 2026 Nahuel Emiliano Diaz.
