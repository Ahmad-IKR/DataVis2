var graph1 = "js/emissions.vg.json";
var graph2 = "js/choropleth_map.vg.json";
var graph3 = "js/sea_levels.vg.json";
var graph4 = "js/weatherevents.vg.json";
var graph5 = "js/footprint.vg.json";


vegaEmbed('#emissions', graph1).then(function(result) {
}).catch(console.error);
vegaEmbed('#tempMap', graph2).then(function(result) {
}).catch(console.error);
vegaEmbed('#sealevel', graph3).then(function(result) {
}).catch(console.error);
vegaEmbed('#weathermap', graph4).then(function(result) {
}).catch(console.error);
vegaEmbed('#footprint', graph5).then(function(result) {
}).catch(console.error);