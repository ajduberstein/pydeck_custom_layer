import pydeck

# Specify the name of your library, see index.js in the js/ directory
pydeck.settings.custom_libraries = [
    {
        "libraryName": "LabeledGeoJsonLayerLibrary",
        "resourceUri": "http://localhost:8080/dist/bundle.js",
    }
]

DATA_URL = (
    "https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json"
)

custom_layer = pydeck.Layer(
    "LabeledGeoJsonLayer",
    data=DATA_URL,
    filled=False,
    billboard=False,
    get_line_color=[180, 180, 180],
    get_label="properties.name",
    get_label_size=200000,
    get_label_color=[0, 255, 255],
    label_size_units='"meters"',
    line_width_min_pixels=1,
)

view_state = pydeck.ViewState(latitude=0, longitude=0, zoom=1)

r = pydeck.Deck(custom_layer, initial_view_state=view_state, map_provider=None)

r.to_html("custom_layer.html", css_background_color="#333")
