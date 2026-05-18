var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_india_st_1 = new ol.format.GeoJSON();
var features_india_st_1 = format_india_st_1.readFeatures(json_india_st_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_india_st_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_india_st_1.addFeatures(features_india_st_1);
var lyr_india_st_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_india_st_1, 
                style: style_india_st_1,
                popuplayertitle: 'india_st',
                interactive: true,
    title: 'india_st<br />\
    <img src="styles/legend/india_st_1_0.png" /> 64473 - 1127355<br />\
    <img src="styles/legend/india_st_1_1.png" /> 1127355 - 2728990<br />\
    <img src="styles/legend/india_st_1_2.png" /> 2728990 - 26786588<br />\
    <img src="styles/legend/india_st_1_3.png" /> 26786588 - 72019024<br />\
    <img src="styles/legend/india_st_1_4.png" /> 72019024 - 199812341<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_india_st_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_india_st_1];
lyr_india_st_1.set('fieldAliases', {'STATE': 'STATE', 'Population': 'Population', 'Populati_1': 'Populati_1', });
lyr_india_st_1.set('fieldImages', {'STATE': 'TextEdit', 'Population': 'TextEdit', 'Populati_1': 'TextEdit', });
lyr_india_st_1.set('fieldLabels', {'STATE': 'inline label - always visible', 'Population': 'inline label - always visible', 'Populati_1': 'inline label - always visible', });
lyr_india_st_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});