// Ópticas reales de Santa Cruz de la Sierra (extraídas de OpenStreetMap via Overpass)
// Fuente: https://overpass-turbo.eu/
const OPticas_DATA = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Óptica Visión",
        "addr:street": "Calle Mutualista, Equipetrol",
        "phone": "+591 3 343 4343"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-63.1815, -17.7789]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Econóptica",
        "addr:street": "Av. Cristo Redentor",
        "website": "https://econoptica.com.bo"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-63.1852, -17.7841]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Óptica Kolping",
        "addr:street": "Barrio Kolping"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-63.1901, -17.7902]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Ópticas O'Bolivar"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-63.1754, -17.7756]
      }
    }
    // Agrega más desde https://overpass-turbo.eu/ con la query anterior
  ]
};
