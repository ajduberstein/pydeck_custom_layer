/* global window, global */

/** 
 * The global variable and default export in this file become the library name passed to pydeck.
 *  
 *  Example in this directory at dev_demo.py:
 *
 *  pydeck.settings.custom_libraries = [
 *      {
 *          "libraryName": "LabeledGeoJsonLayerLibrary",
 *          "resourceUri": "https://localhost:8080/dist/bundle.js",
 *      }
 *   ]
 *
 *  Example from Google Earth Engine layers:
 *
 *  https://github.com/UnfoldedInc/earthengine-layers/blob/9b2fddfcc570bf99c4ecbec7da2c7f5037d20001/py/pydeck_earthengine_layers/pydeck_earthengine_layers.py#L95
 *
 */ 

import { LabeledGeoJsonLayer } from "./labeled-geojson-layer";

const _global = typeof window === 'undefined' ? global : window;
_global.LabeledGeoJsonLayerLibrary = {LabeledGeoJsonLayer};

export default LabeledGeoJsonLayerLibrary;

