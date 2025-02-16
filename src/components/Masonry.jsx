import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { useTransition, a } from '@react-spring/web';
import { useNavigate } from "react-router-dom";

import './Masonry.css';

function Masonry({ data }) {
  const [columns, setColumns] = useState(2);
  const ref = useRef();
  const [width, setWidth] = useState(0);

  // Function to update the number of columns dynamically based on screen size
  useEffect(() => {
    const updateColumns = () => {
      if (window.matchMedia('(min-width: 1000px)').matches) {
        setColumns(4);
      } else if (window.matchMedia('(min-width: 600px)').matches) {
        setColumns(2);
      } else {
        setColumns(1); // Mobile
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  // Function to update the container width on resize
  useEffect(() => {
    if (!ref.current) return;
    
    const handleResize = () => setWidth(ref.current.offsetWidth);
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call to set width

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Generate Masonry layout
  const [heights, gridItems] = useMemo(() => {
    let heights = new Array(columns).fill(0);
    let newHeights = [...heights]; // Copy to prevent mutation

    let gridItems = data.map((child) => {
      const column = newHeights.indexOf(Math.min(...newHeights));
      const x = (width / columns) * column;
      const y = newHeights[column];
      newHeights[column] += child.height / 2; // Update height

      return { ...child, x, y, width: width / columns, height: child.height / 2 };
    });

    return [newHeights, gridItems];
  }, [columns, data, width]);

  // Animated transitions for Masonry layout
  const transitions = useTransition(gridItems, {
    keys: (item) => item.id, // Unique key for each item
    from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
    enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
    update: ({ x, y, width, height }) => ({ x, y, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  });

  const navigate = useNavigate();

  // Render the Masonry grid
  return (
    <div ref={ref} className="masonry" style={{ height: heights.length ? Math.max(...heights) : 'auto' }}>
      {transitions((style, item) => (
        <a.div key={item.id} style={style}>
          <h1 className='tile-title'>{item.name}</h1>
          <div
            onClick={ ()=>{navigate("/verticle", { state: { item } })}}
            style={{
              backgroundColor: '#ffffff', // Background color if image fails to load
              width: '100%',
              height: '100%',
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </a.div>
      ))}
    </div>
  );
}

export default Masonry;
