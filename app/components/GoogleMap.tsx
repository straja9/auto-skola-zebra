'use client';

import { useEffect, useRef, useState } from 'react';

// Define interfaces for Google Maps types
interface GoogleMapType {
  Map: new (element: HTMLElement, options: MapOptions) => Map;
  Marker: new (options: MarkerOptions) => Marker;
  InfoWindow: new (options?: InfoWindowOptions) => InfoWindow;
  Animation: {
    DROP: number;
  };
  MapTypeId: {
    ROADMAP: string;
  };
}

interface Map {
  setCenter(latLng: LatLngLiteral): void;
  setZoom(zoom: number): void;
}

interface Marker {
  setPosition(latLng: LatLngLiteral): void;
  setMap(map: Map | null): void;
  addListener(eventName: string, handler: (e?: unknown) => void): void;
}

interface InfoWindow {
  open(map?: Map, anchor?: Marker): void;
  close(): void;
  setContent(content: string | Node): void;
}

interface LatLngLiteral {
  lat: number;
  lng: number;
}

interface MapOptions {
  center: LatLngLiteral;
  zoom: number;
  mapTypeId?: string;
  mapTypeControl?: boolean;
  styles?: Array<MapTypeStyle>;
}

interface MapTypeStyle {
  featureType?: string;
  elementType?: string;
  stylers: Array<{ [key: string]: number | string }>;
}

interface MarkerOptions {
  position: LatLngLiteral;
  map: Map;
  title?: string;
  animation?: number;
}

interface InfoWindowOptions {
  content?: string | Node;
}

// Add Google Maps to global window object
declare global {
  interface Window {
    google: {
      maps: GoogleMapType;
    };
  }
}

interface GoogleMapProps {
  className?: string;
}

export default function GoogleMap({ className = '' }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Load the Google Maps script only once
    if (!window.google && !document.querySelector('script[src*="maps.googleapis.com"]')) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;
      script.async = true;
      script.defer = true;
      script.onload = () => setLoaded(true);
      document.head.appendChild(script);
    } else {
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!loaded || !mapRef.current) return;

    try {
      // Coordinates for Auto Škola Zebra (from the image)
      const position = { lat: 44.755, lng: 19.695 }; // Approximate coordinates from the map
      
      // Create the map
      const map = new window.google.maps.Map(mapRef.current, {
        center: position,
        zoom: 15,
        mapTypeId: window.google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        styles: [
          {
            featureType: 'all',
            elementType: 'all',
            stylers: [
              { saturation: -100 },
            ]
          }, {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [
              { lightness: 100 },
              { visibility: 'simplified' }
            ]
          }
        ]
      });

      // Add a marker for the Auto Škola
      const marker = new window.google.maps.Marker({
        position,
        map,
        title: 'Auto Škola Zebra',
        animation: window.google.maps.Animation.DROP,
      });

      // Add info window
      const infowindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 8px; max-width: 200px;">
            <h3 style="margin: 0 0 8px; font-weight: bold;">Auto Škola Zebra</h3>
            <p style="margin: 0 0 5px;">Vojvode Mišića 31, Šabac 15000</p>
            <p style="margin: 0 0 5px;">Tel: 015/347 270</p>
            <p style="margin: 0 0 5px;">Mob: 066/347 270</p>
            <a href="https://goo.gl/maps/VZcPRhrcaTe82isb6" target="_blank" style="color: #3366CC;">Prikaži na Google Maps</a>
          </div>
        `,
      });

      // Show info window when marker is clicked
      marker.addListener('click', () => {
        infowindow.open(map, marker);
      });

      // Open info window by default
      infowindow.open(map, marker);

    } catch (error) {
      console.error('Error loading Google Maps:', error);
    }
  }, [loaded]);

  return (
    <div className={`w-full h-80 sm:h-96 rounded-xl overflow-hidden shadow-lg ${className}`} ref={mapRef}>
      {!loaded && (
        <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <div className="text-gray-500">Učitavanje mape...</div>
        </div>
      )}
    </div>
  );
} 