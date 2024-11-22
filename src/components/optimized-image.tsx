'use client';

import { Blurhash } from "react-blurhash";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Skeleton } from "./ui/skeleton";

const OptimizedImage = ({ src, alt, width, height, blurHash }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHashLoaded, setIsHashLoaded] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    if (isHashLoaded) {
      const timer = setTimeout(() => {
        setShowImage(true);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isHashLoaded]);

  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => {
        setIsHashLoaded(true);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  return (
    <div className="flex justify-center w-full mt-5">
      <div style={{ position: 'relative', width: '100%', maxWidth: width, aspectRatio: `${width} / ${height}` }}>
        {!isHashLoaded && (
          <Skeleton className="absolute inset-0 w-full h-full" />
        )}

        {!showImage && blurHash && (
          <Blurhash
            hash={blurHash}
            width="100%"
            height="100%"
            resolutionX={32}
            resolutionY={32}
            punch={1}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            onLoad={() => setIsHashLoaded(true)}
          />
        )}

        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          onLoadingComplete={() => setIsLoaded(true)}
          style={{
            visibility: showImage ? 'visible' : 'hidden',
            opacity: showImage ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
          }}
        />
      </div>
    </div>
  );
};

export default OptimizedImage;
