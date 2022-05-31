import Head from 'next/head'
import { Box, Container, Paper, Button, ButtonGroup } from '@mui/material';
import { useEffect, useState } from 'react';

export default function Home() {

  const [pageIsMounted, setPageIsMounted] = useState(false)
  const[currentData, setCurrentData] = useState({})
  const [currentMarkers, setCurrentmarkers] = useState([])
  const[map, setMap] = useState()
  const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')
  mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXNwd29sZiIsImEiOiJjbDNzcWZmc3IwMGF4M2JubnBwdDQ4OWZjIn0.OIybLWKT69iP_IVYcOm0hw'

  
  const setDefaultData = async () => {
    changeData('tacos38')
  }

  const changeData = async (name) => {
    setCurrentData(await (await fetch('/api/' + name)).json())
  }

  const clearCurrentMarkers = ()=>{
    currentMarkers.forEach((marker, index)=>{
      marker.remove()
    })
    console.log(currentMarkers)
  }
  
  useEffect(()=>{
    setMap(new mapboxgl.Map({
      container: 'jojo-map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-118.2437, 34.0522],
      zoom: 8
    }))
    setDefaultData()
  }, [pageIsMounted])

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
    }
  }, [map])

  useEffect(()=>{
      console.log(currentData)
      if(currentData.features) {
        clearCurrentMarkers()
        currentData.features.forEach((feature)=>{
          let popUpHTML = `<h3>${feature.properties.Name}</h3>`
          if(feature.properties.description) {
            popUpHTML += `<p>${feature.properties.description}</p>`
          }
          const marker = new mapboxgl.Marker().setLngLat(feature.geometry.coordinates).setPopup(
            new mapboxgl.Popup({ offset: 25 })
              .setHTML(popUpHTML)
            ).addTo(map)
          currentMarkers.push(marker)
        })
      }
  }, [currentData, map])


  return (
    <>
          <Head>
            <title>Jojo's Bizarre Map Venture</title>
            <link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
          </Head>
            <ButtonGroup
              // variant="outlined"
              sx={{
                position: 'absolute',
                right: '3.5rem',
                top: '1rem',
                zIndex: '2',
                backgroundColor: 'white'
              }}>
              <Button onClick={()=>{
                changeData('gold99')
              }}>
                Gold's 99
              </Button>
              <Button 
                onClick={()=>{
                  changeData('tacos38')
                }}
              >
                38 Tacos
              </Button>
              <Button onClick={()=>{
                changeData('filmingLocations')
              }}>
                Filming Locations
              </Button>
            </ButtonGroup>
            {/* <Button color='error'
              onClick={clearCurrentMarkers}
            >
              Delete Markers
            </Button> */}
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
