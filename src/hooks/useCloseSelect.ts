import { useRef, useEffect } from 'react';

export default function UseCloseModals(closeSelect: () => void) {
  const selectRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickout(event: any) {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node) &&
        event?.target?.id !== 'buttonModal'
      ) {
        closeSelect();
      }
    }

    document.addEventListener('mousedown', handleClickout);

    return () => {
      document.removeEventListener('mousedown', handleClickout);
    };
  }, []);

  return { selectRef };
}
