import React, { useRef } from 'react'
import { StyleSheet, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

import Autocomplete from '@components/Autocomplete'

const HomeScreen = ({ navigation }) => {
  //
  // ─── INITIAL VALUES ──────────────────────────────────────────────────────────────────
  //

  const mapRef = useRef(null)
  const initialCamera = {
    center: {
      latitude: 3.14729789110778,
      longitude: 101.69954909737643,
    },
    heading: 0,
    pitch: 90,
    altitude: 0.05,
    zoom: 15,
  }

  //
  // ─── HOOKS ──────────────────────────────────────────────────────────────────
  //

  const [camera, setCamera] = React.useState(initialCamera)

  //
  // ─── METHODS ────────────────────────────────────────────────────────────────────
  //

  const _animateToLocation = ({ latitude, longitude }) => {
    const newCamera = {
      ...initialCamera,
      center: {
        latitude: latitude,
        longitude: longitude,
      },
    }

    setCamera(newCamera)

    setTimeout(() => mapRef.current?.animateCamera(newCamera, { duration: 1000 }), 1000)
  }

  //
  // ─── RENDER ─────────────────────────────────────────────────────────────────────
  //

  return (
    <View style={styles.container}>
      <MapView style={styles.map} ref={mapRef} initialCamera={camera}>
        <Marker
          coordinate={{ latitude: camera.center.latitude, longitude: camera.center.longitude }}
        />
      </MapView>

      <Autocomplete
        onPressHistoryLog={() => navigation.navigate('SearchedHistory')}
        onSelectResult={data => {
          const locationData = data.value

          _animateToLocation({
            latitude: locationData.latitude,
            longitude: locationData.longitude,
          })
        }}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  map: {
    width: '100%',
    height: '100%',
  },
})
