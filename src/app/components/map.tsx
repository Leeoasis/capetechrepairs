"use client"
import { Loader } from '@googlemaps/js-api-loader';
import { version } from 'os';

import React, { useEffect } from 'react'

export default function Map() {
    const mapRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
      const initMap = async () => {
        const loader = new Loader({
          apiKey: process.env.AIzaSyC4OUywFNE7YHIwigfF0lTYX9JwUAfx1lo as string,
          version: 'weekly'
        })

        const { Map } = await loader.importLibrary('maps');

        const position = {
          lat: 37.7749,
          lng: -122.4194
        }

        const mapOptions: google.maps.MapOptions = {
          center: position,
          zoom: 17,
          mapId: 'e2f8b5a9b0b8b5e8'
        }

        const map = new Map(mapRef.current as HTMLDivElement, mapOptions);
      }

      initMap();
      
    }, [])

    return (
        <div style={{ height: '400px'}} ref={mapRef}/>
    )
}