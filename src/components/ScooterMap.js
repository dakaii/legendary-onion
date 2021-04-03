import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { secrets } from '../constants/secrets';

export const MapContainer= () => {
    return (
      <Map google={this.props.google} zoom={14}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
}

export default GoogleApiWrapper({
  apiKey: (secrets.GOOGLE_MAPS_SECRET)
})(MapContainer)