import Head from 'next/head'
import { Box, Container, Paper, Button, ButtonGroup } from '@mui/material';
import { useEffect, useState } from 'react';

export default function Home() {

  const [pageIsMounted, setPageIsMounted] = useState(false)
  const[markers, setMarkers] = useState({})
  const[shownMarkers, setShownMarkers] = useState([])
  const[map, setMap] = useState()
  const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')
  mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXNwd29sZiIsImEiOiJjbDNzcWZmc3IwMGF4M2JubnBwdDQ4OWZjIn0.OIybLWKT69iP_IVYcOm0hw'


  const toggleMarkerCollection = (collectionName)=>{
    let copy = [...shownMarkers]
    const i = shownMarkers.indexOf(collectionName)
    if(!shownMarkers.includes(collectionName)){
      markers[collectionName].forEach((marker)=>{
        console.log(marker)
        marker.addTo(map)
      })
      copy.push(collectionName)
    } else {
      markers[collectionName].forEach((marker)=>{
        console.log(marker)
        marker.remove()
      })
      copy.splice(i,1)
    }
    setShownMarkers(copy)
  }


  useEffect(()=>{
    setMap(new mapboxgl.Map({
      container: 'jojo-map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-118.2437, 34.0522],
      zoom: 8
    }))
  }, [pageIsMounted])

  const createMarkers = ()=>{
    let mrkrs = {}
    const collections =['gold99', 'tacos38', 'filmingLocations']
    collections.forEach(async (collectionName)=>{
      mrkrs[collectionName] = []
      const data = await (await fetch('/api/' + collectionName)).json()
      data.features.forEach((feature)=>{
        let popUpHTML = `<h3>${feature.properties.Name}</h3>`
        if(feature.properties.description) {
          popUpHTML += `<p>${feature.properties.description}</p>`
        }
        const marker = new mapboxgl.Marker().setLngLat(feature.geometry.coordinates).setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML(popUpHTML)
          )
          mrkrs[collectionName].push(marker)
      })
      setMarkers(mrkrs)
    })
  }

  useEffect(()=>{
    if(map) {
      map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          trackUserLocation: true,
        })
      )
      createMarkers()
    }
  }, [map])


  return (
    <>
      <Head>
        <title>Jojo's Bizarre Map Venture</title>
        <link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
      </Head>
      <ButtonGroup
        variant="outlined"
        sx={{
          position: 'absolute',
          right: '3.5rem',
          top: '1rem',
          zIndex: '2',
          backgroundColor: 'white'
        }}>
        <Button 
          variant={ (shownMarkers.indexOf('gold99') >= 0) ? 'contained' : 'outlined' }
          onClick={()=>{
            toggleMarkerCollection('gold99')
          }}
        >
          Gold's 99
        </Button>
        <Button
          variant={ (shownMarkers.indexOf('tacos38') >= 0) ? 'contained' : 'outlined' }
          onClick={
            ()=>{
              toggleMarkerCollection('tacos38')
            }
          }
        >
          38 Tacos
        </Button>
        <Button
          variant={ (shownMarkers.indexOf('filmingLocations') >= 0) ? 'contained' : 'outlined' } 
          onClick={()=>{
            toggleMarkerCollection('filmingLocations')
          }}
        >
          Filming Locations
        </Button>
      </ButtonGroup>
      <div id="jojo-map" 
        style={{ 
          width: '100vw',
          height: '100vh',
          position: 'absolute',
          top: 0,
          left: 0
        }}
      >
      </div>
    </>
  )
}
