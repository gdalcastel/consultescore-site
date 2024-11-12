import { useEffect, useState } from 'react';

export default function useObserverWidthElement(nameCarousel: string) {
  const [width, setWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    const yourElement = document.getElementById(`${nameCarousel}`);

    const elementResizeObserver = new ResizeObserver((entries) => {
      const newWidth = entries[0]?.contentRect.width;
      setWidth(newWidth);
    });
    if (yourElement) {
      elementResizeObserver.observe(yourElement);
    }

    return () => {
      if (yourElement) {
        elementResizeObserver.unobserve(yourElement);
      }
    };
  }, []);

  return width;
}
