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
      <header>
        <Container sx={{my:5}}>
          <h1>
            Jojo's Bizarre Map Venture
          </h1>
        </Container>
      </header>
      <Container component="main">
          <Paper sx={{p:2.5}}>
            <ButtonGroup variant="contained" sx={{mb:2.5}}>
              <Button onClick={()=>{
                changeData('gold99')
              }}>
                Gold's 99
              </Button>
              <Button onClick={()=>{
                changeData('tacos38')
              }}>
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
            <Box>
              <div id="jojo-map" style={{width: '100%', height: '600px'}}>
              </div>
            </Box>
          </Paper>
      </Container>
    </>
  )
}
