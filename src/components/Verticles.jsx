import React from 'react'
import Masonry from './Masonry'
import "./Verticles.css";

const Verticles = () => {
  const data = [
    { id: 1, image: 'https://picsum.photos/id/10/200/300', height: 400, name: 'Image 1' },
    { id: 2, image: 'https://picsum.photos/id/14/200/300', height: 300, name: 'Image 1' },
    { id: 3, image: 'https://picsum.photos/id/15/200/300', height: 300, name: 'Image 1' },
    { id: 4, image: 'https://picsum.photos/id/16/200/300', height: 300, name: 'Image 1' },
    { id: 5, image: 'https://picsum.photos/id/17/200/300', height: 300, name: 'Image 1' },
    { id: 6, image: 'https://picsum.photos/id/19/200/300', height: 300, name: 'Image 1' },
    { id: 7, image: 'https://picsum.photos/id/37/200/300', height: 200, name: 'Image 1' },
    { id: 8, image: 'https://picsum.photos/id/39/200/300', height: 300, name: 'Image 1' }
  ];

  return (
    <div>
      <div className="verticles">
        <h1>OUR VERTICLE</h1>
        <Masonry data={data} />
      </div>
    </div>
  )
}

export default Verticles
