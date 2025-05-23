'use client';

import { useState } from 'react';

interface ContactMapProps {
  className?: string;
}

export default function ContactMap({ className = '' }: ContactMapProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`w-full h-80 sm:h-96 rounded-xl overflow-hidden shadow-lg ${className}`}>
      {!isLoaded && (
        <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <div className="text-gray-500">Učitavanje mape...</div>
        </div>
      )}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.99631216601!2d19.69067774237977!3d44.75442582521065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475bd6763f639b83%3A0x3ef8b60b3b3d6945!2sAuto%20%C5%A0kola%20%22Zebra%22!5e0!3m2!1sen!2srs!4v1701389897942!5m2!1sen!2srs"
        className="w-full h-full border-0"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={() => setIsLoaded(true)}
        style={{ opacity: isLoaded ? 1 : 0 }}
      ></iframe>
    </div>
  );
} 