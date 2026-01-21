# 🕶️ Ópticas Santa Cruz de la Sierra

Mapa interactivo con ópticas de Santa Cruz (datos OSM).

**Live:** https://odoolargotek.github.io/opticas-scz-map/

## Actualizar datos
1. https://overpass-turbo.eu/
2. `[out:json]; area[name="Santa Cruz de la Sierra"]->.a; nwr["shop"="optician"](.a); out geom;`
3. Export GeoJSON → Copiar a data.js
