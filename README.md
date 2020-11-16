Custom layers for pydeck
========================

This repo is an example of how to create a custom deck.gl layer for use in pydeck.

To get started with this example repo, install the dependencies:

```bash
yarn
python3 -m venv env
. env/bin/activate
pip install -r pydeck_example/requirements.txt
```

Then execute the following to a pydeck script and serve the JavaScript bundle:

```bash
python pydeck_example/labeled_geojson_layer.py
webpack serve --progress
```

Navigate to http://localhost:8080/custom\_layer.html in your browser, which should render the visualization.

You can deploy your project to NPM and host the your bundle on unpkg, which you can see in the
[custom layer example in the pydeck docs](https://pydeck.gl/gallery/custom_layer.html).
