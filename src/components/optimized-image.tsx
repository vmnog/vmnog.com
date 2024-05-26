'use client';

import { Blurhash } from "react-blurhash";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Skeleton } from "./ui/skeleton";

const OptimizedImage = ({ src, alt, width, height, blurHash }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHashLoaded, setIsHashLoaded] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isHashLoaded) {
      timer = setTimeout(() => {
        setIsLoaded(true);
      }, 500);
    }
    return () => clearTimeout(timer);
  }, [isHashLoaded]);

  return (
    <div className="flex justify-center w-full mt-5">
      <div style={{ position: 'relative', width, height, aspectRatio: `${width} / ${height}` }}>
        {!isHashLoaded && (
          <Skeleton className="absolute top-0 left-0 w-full h-full" />
        )}

        {!isLoaded && blurHash && (
          <Blurhash
            hash={blurHash}
            width="100%"
            height="100%"
            resolutionX={32}
            resolutionY={32}
            punch={1}
            style={{ position: 'absolute', top: 0, left: 0, objectFit: 'cover' }}
            onLoad={() => setIsHashLoaded(true)}
          />
        )}

        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          onLoadingComplete={() => setIsHashLoaded(true)}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            visibility: isLoaded ? 'visible' : 'hidden',
            opacity: isLoaded ? 1 : 0,
          }}
        />
      </div>
    </div>
  );
};

export default OptimizedImage;
