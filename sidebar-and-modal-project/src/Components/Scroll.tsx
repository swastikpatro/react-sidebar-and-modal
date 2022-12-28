import { useEffect } from 'react';
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';

var overScrollOptions = {
  enable: false,
  effect: 'bounce',
  damping: 0.15,
  maxOverscroll: 150,
};

var options = {
  damping: 0.07,
  alwaysShowTracks: true,
  plugins: {
    overscroll: { ...overScrollOptions },
  },
};

const Scroll = () => {
  useEffect(() => {
    Scrollbar.use(OverscrollPlugin);
    Scrollbar.init(document.body, options);

    return () => {
      if (Scrollbar) Scrollbar.destroy(document.body);
    };
  }, []);

  return null;
};

export default Scroll;
