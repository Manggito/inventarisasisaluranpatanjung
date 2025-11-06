var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoads_2 = new ol.layer.Tile({
            'title': 'Google Roads',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenTopoMap_3 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://opentopomap.org/about#datenstand">OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_SUNGAI_4 = new ol.format.GeoJSON();
var features_SUNGAI_4 = format_SUNGAI_4.readFeatures(json_SUNGAI_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_4.addFeatures(features_SUNGAI_4);
var lyr_SUNGAI_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_4, 
                style: style_SUNGAI_4,
                popuplayertitle: 'SUNGAI',
                interactive: false,
                title: '<img src="styles/legend/SUNGAI_4.png" /> SUNGAI'
            });
var format_JALAN_5 = new ol.format.GeoJSON();
var features_JALAN_5 = format_JALAN_5.readFeatures(json_JALAN_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_5.addFeatures(features_JALAN_5);
var lyr_JALAN_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_5, 
                style: style_JALAN_5,
                popuplayertitle: 'JALAN',
                interactive: false,
                title: '<img src="styles/legend/JALAN_5.png" /> JALAN'
            });
var format_AREAFUNGSIONAL_6 = new ol.format.GeoJSON();
var features_AREAFUNGSIONAL_6 = format_AREAFUNGSIONAL_6.readFeatures(json_AREAFUNGSIONAL_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREAFUNGSIONAL_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREAFUNGSIONAL_6.addFeatures(features_AREAFUNGSIONAL_6);
var lyr_AREAFUNGSIONAL_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREAFUNGSIONAL_6, 
                style: style_AREAFUNGSIONAL_6,
                popuplayertitle: 'AREA FUNGSIONAL',
                interactive: true,
                title: '<img src="styles/legend/AREAFUNGSIONAL_6.png" /> AREA FUNGSIONAL'
            });
var format_JalurPipa_7 = new ol.format.GeoJSON();
var features_JalurPipa_7 = format_JalurPipa_7.readFeatures(json_JalurPipa_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalurPipa_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalurPipa_7.addFeatures(features_JalurPipa_7);
var lyr_JalurPipa_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalurPipa_7, 
                style: style_JalurPipa_7,
                popuplayertitle: 'Jalur Pipa',
                interactive: true,
                title: '<img src="styles/legend/JalurPipa_7.png" /> Jalur Pipa'
            });
var format_AREANOMENKLATUR_8 = new ol.format.GeoJSON();
var features_AREANOMENKLATUR_8 = format_AREANOMENKLATUR_8.readFeatures(json_AREANOMENKLATUR_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREANOMENKLATUR_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREANOMENKLATUR_8.addFeatures(features_AREANOMENKLATUR_8);
var lyr_AREANOMENKLATUR_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREANOMENKLATUR_8, 
                style: style_AREANOMENKLATUR_8,
                popuplayertitle: 'AREA NOMENKLATUR',
                interactive: true,
                title: '<img src="styles/legend/AREANOMENKLATUR_8.png" /> AREA NOMENKLATUR'
            });
var format_BANGUNANNOMENKLATUR_9 = new ol.format.GeoJSON();
var features_BANGUNANNOMENKLATUR_9 = format_BANGUNANNOMENKLATUR_9.readFeatures(json_BANGUNANNOMENKLATUR_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNANNOMENKLATUR_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNANNOMENKLATUR_9.addFeatures(features_BANGUNANNOMENKLATUR_9);
var lyr_BANGUNANNOMENKLATUR_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANGUNANNOMENKLATUR_9, 
                style: style_BANGUNANNOMENKLATUR_9,
                popuplayertitle: 'BANGUNAN NOMENKLATUR',
                interactive: false,
                title: '<img src="styles/legend/BANGUNANNOMENKLATUR_9.png" /> BANGUNAN NOMENKLATUR'
            });
var format_KETERANGANKERUSAKANSALURAN_10 = new ol.format.GeoJSON();
var features_KETERANGANKERUSAKANSALURAN_10 = format_KETERANGANKERUSAKANSALURAN_10.readFeatures(json_KETERANGANKERUSAKANSALURAN_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KETERANGANKERUSAKANSALURAN_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KETERANGANKERUSAKANSALURAN_10.addFeatures(features_KETERANGANKERUSAKANSALURAN_10);
var lyr_KETERANGANKERUSAKANSALURAN_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KETERANGANKERUSAKANSALURAN_10, 
                style: style_KETERANGANKERUSAKANSALURAN_10,
                popuplayertitle: 'KETERANGAN KERUSAKAN SALURAN',
                interactive: true,
    title: 'KETERANGAN KERUSAKAN SALURAN<br />\
    <img src="styles/legend/KETERANGANKERUSAKANSALURAN_10_0.png" /> Baik<br />' });
var format_JENISSALURAN_11 = new ol.format.GeoJSON();
var features_JENISSALURAN_11 = format_JENISSALURAN_11.readFeatures(json_JENISSALURAN_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JENISSALURAN_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JENISSALURAN_11.addFeatures(features_JENISSALURAN_11);
var lyr_JENISSALURAN_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JENISSALURAN_11, 
                style: style_JENISSALURAN_11,
                popuplayertitle: 'JENIS SALURAN',
                interactive: true,
    title: 'JENIS SALURAN<br />\
    <img src="styles/legend/JENISSALURAN_11_0.png" /> Saluran Sekunder<br />' });
var format_Tikungan_12 = new ol.format.GeoJSON();
var features_Tikungan_12 = format_Tikungan_12.readFeatures(json_Tikungan_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tikungan_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tikungan_12.addFeatures(features_Tikungan_12);
var lyr_Tikungan_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tikungan_12, 
                style: style_Tikungan_12,
                popuplayertitle: 'Tikungan',
                interactive: true,
                title: '<img src="styles/legend/Tikungan_12.png" /> Tikungan'
            });
var format_Titik_Per_50_m_13 = new ol.format.GeoJSON();
var features_Titik_Per_50_m_13 = format_Titik_Per_50_m_13.readFeatures(json_Titik_Per_50_m_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Titik_Per_50_m_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Titik_Per_50_m_13.addFeatures(features_Titik_Per_50_m_13);
var lyr_Titik_Per_50_m_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Titik_Per_50_m_13, 
                style: style_Titik_Per_50_m_13,
                popuplayertitle: 'Titik_Per_50_m',
                interactive: true,
                title: '<img src="styles/legend/Titik_Per_50_m_13.png" /> Titik_Per_50_m'
            });
var format_Box_Alva_Valve_14 = new ol.format.GeoJSON();
var features_Box_Alva_Valve_14 = format_Box_Alva_Valve_14.readFeatures(json_Box_Alva_Valve_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Box_Alva_Valve_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Box_Alva_Valve_14.addFeatures(features_Box_Alva_Valve_14);
var lyr_Box_Alva_Valve_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Box_Alva_Valve_14, 
                style: style_Box_Alva_Valve_14,
                popuplayertitle: 'Box_Alva_Valve',
                interactive: true,
                title: '<img src="styles/legend/Box_Alva_Valve_14.png" /> Box_Alva_Valve'
            });
var format_Bangunan_Air_15 = new ol.format.GeoJSON();
var features_Bangunan_Air_15 = format_Bangunan_Air_15.readFeatures(json_Bangunan_Air_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_Air_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_Air_15.addFeatures(features_Bangunan_Air_15);
var lyr_Bangunan_Air_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_Air_15, 
                style: style_Bangunan_Air_15,
                popuplayertitle: 'Bangunan_Air',
                interactive: true,
                title: '<img src="styles/legend/Bangunan_Air_15.png" /> Bangunan_Air'
            });
var format_Bangunan_Bagi_16 = new ol.format.GeoJSON();
var features_Bangunan_Bagi_16 = format_Bangunan_Bagi_16.readFeatures(json_Bangunan_Bagi_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_Bagi_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_Bagi_16.addFeatures(features_Bangunan_Bagi_16);
var lyr_Bangunan_Bagi_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_Bagi_16, 
                style: style_Bangunan_Bagi_16,
                popuplayertitle: 'Bangunan_Bagi',
                interactive: true,
                title: '<img src="styles/legend/Bangunan_Bagi_16.png" /> Bangunan_Bagi'
            });
var format_Rumah_Pompa_17 = new ol.format.GeoJSON();
var features_Rumah_Pompa_17 = format_Rumah_Pompa_17.readFeatures(json_Rumah_Pompa_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumah_Pompa_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumah_Pompa_17.addFeatures(features_Rumah_Pompa_17);
var lyr_Rumah_Pompa_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumah_Pompa_17, 
                style: style_Rumah_Pompa_17,
                popuplayertitle: 'Rumah_Pompa',
                interactive: true,
                title: '<img src="styles/legend/Rumah_Pompa_17.png" /> Rumah_Pompa'
            });
var group_TITIKAKSESSORIS = new ol.layer.Group({
                                layers: [lyr_Box_Alva_Valve_14,lyr_Bangunan_Air_15,lyr_Bangunan_Bagi_16,lyr_Rumah_Pompa_17,],
                                fold: 'open',
                                title: 'TITIK AKSESSORIS'});
var group_TITIKKETERANGAN = new ol.layer.Group({
                                layers: [lyr_Tikungan_12,lyr_Titik_Per_50_m_13,],
                                fold: 'open',
                                title: 'TITIK KETERANGAN'});
var group_SKEMANOMENKLATUR = new ol.layer.Group({
                                layers: [lyr_AREANOMENKLATUR_8,lyr_BANGUNANNOMENKLATUR_9,],
                                fold: 'open',
                                title: 'SKEMA NOMENKLATUR'});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleRoads_2.setVisible(true);lyr_OpenTopoMap_3.setVisible(true);lyr_SUNGAI_4.setVisible(true);lyr_JALAN_5.setVisible(true);lyr_AREAFUNGSIONAL_6.setVisible(true);lyr_JalurPipa_7.setVisible(true);lyr_AREANOMENKLATUR_8.setVisible(true);lyr_BANGUNANNOMENKLATUR_9.setVisible(true);lyr_KETERANGANKERUSAKANSALURAN_10.setVisible(true);lyr_JENISSALURAN_11.setVisible(true);lyr_Tikungan_12.setVisible(true);lyr_Titik_Per_50_m_13.setVisible(true);lyr_Box_Alva_Valve_14.setVisible(true);lyr_Bangunan_Air_15.setVisible(true);lyr_Bangunan_Bagi_16.setVisible(true);lyr_Rumah_Pompa_17.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_GoogleSatellite_1,lyr_GoogleRoads_2,lyr_OpenTopoMap_3,lyr_SUNGAI_4,lyr_JALAN_5,lyr_AREAFUNGSIONAL_6,lyr_JalurPipa_7,group_SKEMANOMENKLATUR,lyr_KETERANGANKERUSAKANSALURAN_10,lyr_JENISSALURAN_11,group_TITIKKETERANGAN,group_TITIKAKSESSORIS];
lyr_SUNGAI_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALAN_5.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_AREAFUNGSIONAL_6.set('fieldAliases', {'Id': 'Id', 'AREA': 'AREA', 'LUAS': 'LUAS', 'SATUAN': 'SATUAN', });
lyr_JalurPipa_7.set('fieldAliases', {'Id': 'Id', });
lyr_AREANOMENKLATUR_8.set('fieldAliases', {'Id': 'Id', 'AREA': 'AREA', 'PEMBAGIAN': 'PEMBAGIAN', 'LUAS': 'LUAS', 'SATUAN': 'SATUAN', });
lyr_BANGUNANNOMENKLATUR_9.set('fieldAliases', {'NAME': 'NAME', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'URUTAN': 'URUTAN', 'PEMBAGIAN': 'PEMBAGIAN', });
lyr_KETERANGANKERUSAKANSALURAN_10.set('fieldAliases', {'Id': 'Id', 'JENIS': 'JENIS', 'KATEGORI': 'KATEGORI', 'KETERANGAN': 'KETERANGAN', 'PANJANG': 'PANJANG', });
lyr_JENISSALURAN_11.set('fieldAliases', {'Id': 'Id', 'JENIS': 'JENIS', 'KATEGORI': 'KATEGORI', 'KETERANGAN': 'KETERANGAN', 'PANJANG': 'PANJANG', });
lyr_Tikungan_12.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_Titik_Per_50_m_13.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_Box_Alva_Valve_14.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_Bangunan_Air_15.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_Bangunan_Bagi_16.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_Rumah_Pompa_17.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_SUNGAI_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_JALAN_5.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_AREAFUNGSIONAL_6.set('fieldImages', {'Id': 'Range', 'AREA': 'TextEdit', 'LUAS': 'TextEdit', 'SATUAN': 'TextEdit', });
lyr_JalurPipa_7.set('fieldImages', {'Id': 'Range', });
lyr_AREANOMENKLATUR_8.set('fieldImages', {'Id': 'Range', 'AREA': 'TextEdit', 'PEMBAGIAN': 'TextEdit', 'LUAS': 'TextEdit', 'SATUAN': 'TextEdit', });
lyr_BANGUNANNOMENKLATUR_9.set('fieldImages', {'NAME': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'URUTAN': 'TextEdit', 'PEMBAGIAN': 'TextEdit', });
lyr_KETERANGANKERUSAKANSALURAN_10.set('fieldImages', {'Id': 'Range', 'JENIS': 'TextEdit', 'KATEGORI': 'TextEdit', 'KETERANGAN': 'TextEdit', 'PANJANG': 'TextEdit', });
lyr_JENISSALURAN_11.set('fieldImages', {'Id': 'Range', 'JENIS': 'TextEdit', 'KATEGORI': 'TextEdit', 'KETERANGAN': 'TextEdit', 'PANJANG': 'TextEdit', });
lyr_Tikungan_12.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'ExternalResource', 'FOTO_7': 'ExternalResource', 'FOTO_8': 'ExternalResource', });
lyr_Titik_Per_50_m_13.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'ExternalResource', 'FOTO_7': 'ExternalResource', 'FOTO_8': 'ExternalResource', });
lyr_Box_Alva_Valve_14.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'ExternalResource', 'FOTO_7': 'ExternalResource', 'FOTO_8': 'ExternalResource', });
lyr_Bangunan_Air_15.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'ExternalResource', 'FOTO_7': 'ExternalResource', 'FOTO_8': 'ExternalResource', });
lyr_Bangunan_Bagi_16.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'ExternalResource', 'FOTO_7': 'ExternalResource', 'FOTO_8': 'ExternalResource', });
lyr_Rumah_Pompa_17.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'ExternalResource', 'FOTO_7': 'ExternalResource', 'FOTO_8': 'ExternalResource', });
lyr_SUNGAI_4.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JALAN_5.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_AREAFUNGSIONAL_6.set('fieldLabels', {'Id': 'hidden field', 'AREA': 'hidden field', 'LUAS': 'inline label - visible with data', 'SATUAN': 'hidden field', });
lyr_JalurPipa_7.set('fieldLabels', {'Id': 'hidden field', });
lyr_AREANOMENKLATUR_8.set('fieldLabels', {'Id': 'hidden field', 'AREA': 'inline label - visible with data', 'PEMBAGIAN': 'inline label - visible with data', 'LUAS': 'inline label - visible with data', 'SATUAN': 'inline label - visible with data', });
lyr_BANGUNANNOMENKLATUR_9.set('fieldLabels', {'NAME': 'no label', 'X': 'no label', 'Y': 'no label', 'BUJUR': 'no label', 'LINTANG': 'no label', 'PANJANG': 'no label', 'URUTAN': 'no label', 'PEMBAGIAN': 'no label', });
lyr_KETERANGANKERUSAKANSALURAN_10.set('fieldLabels', {'Id': 'hidden field', 'JENIS': 'hidden field', 'KATEGORI': 'inline label - visible with data', 'KETERANGAN': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', });
lyr_JENISSALURAN_11.set('fieldLabels', {'Id': 'hidden field', 'JENIS': 'inline label - visible with data', 'KATEGORI': 'hidden field', 'KETERANGAN': 'hidden field', 'PANJANG': 'inline label - visible with data', });
lyr_Tikungan_12.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_Titik_Per_50_m_13.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_Box_Alva_Valve_14.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_Bangunan_Air_15.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_Bangunan_Bagi_16.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_Rumah_Pompa_17.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_Rumah_Pompa_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});