import { CompositeLayer } from "@deck.gl/core";
import { ScatterplotLayer } from "@deck.gl/layers";

class LabeledGeoJsonLayer extends CompositeLayer {
  updateState({changeFlags}) {
    const {data} = this.props;
    if (changeFlags.dataChanged && data) {
      const labelData = (data.features || data)
        .flatMap((feature, index) => {
          const labelAnchors = getLabelAnchors(feature);
          return labelAnchors.map(p => this.getSubLayerRow({position: p}, feature, index));
        });

      this.setState({labelData});
    }
  }
  renderLayers() {
    const {
      getLabel,
      getLabelSize,
      getLabelColor,
      labelSizeUnits,
      labelBackground,
      billboard,
      fontFamily
    } = this.props;
    return [
      new GeoJsonLayer(this.props, this.getSubLayerProps({id: 'geojson'}), {
        data: this.props.data
      }),
      new TextLayer(this.getSubLayerProps({id: 'text'}), {
        data: this.state.labelData,
        billboard,
        sizeUnits: labelSizeUnits,
        backgroundColor: labelBackground,
        getPosition: d => d.position,
        getText: this.getSubLayerAccessor(getLabel),
        getSize: this.getSubLayerAccessor(getLabelSize),
        getColor: this.getSubLayerAccessor(getLabelColor)
      })
    ];
  }
}

LabeledGeoJsonLayer.layerName = 'LabeledGeoJsonLayer';
LabeledGeoJsonLayer.defaultProps = defaultProps;

export {LabeledGeoJsonLayer};
