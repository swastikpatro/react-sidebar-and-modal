import { useEffect } from 'react';

function useDisableScroll(isOpenState: boolean): void {
  useEffect(() => {
    if (isOpenState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpenState]);
}

export default useDisableScroll;
