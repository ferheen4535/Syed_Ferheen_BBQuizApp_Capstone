import React from 'react';

const products = [
  {
    name: 'Beard Butter 4-Pack Sampler',
    price: '$25.00',
    image: 'https://m.media-amazon.com/images/I/71CkD2g9x-L._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/Badmaash-Beards-Butter-4-Pack-Sampler/dp/B0DPXQQB44',
  },
  {
    name: 'Beard Butter – Sandalwood (2oz)',
    price: '$16.00',
    image: 'https://m.media-amazon.com/images/I/61V9cJZqYxL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/Badmaash-Beards-Butter-All-Natural-Conditioning/dp/B0DPLHNXHD',
  },

  {
    name: 'Beard Butter – Sandalwood (2oz)',
    price: '$16.00',
    image: 'https://m.media-amazon.com/images/I/61V9cJZqYxL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/Badmaash-Beards-Butter-All-Natural-Conditioning/dp/B0DPLHNXHD',
  },

  {
    name: 'Beard Butter – Sandalwood (2oz)',
    price: '$16.00',
    image: 'https://m.media-amazon.com/images/I/61V9cJZqYxL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/Badmaash-Beards-Butter-All-Natural-Conditioning/dp/B0DPLHNXHD',
  },

  {
    name: 'Beard Butter – Sandalwood (2oz)',
    price: '$16.00',
    image: 'https://m.media-amazon.com/images/I/61V9cJZqYxL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/Badmaash-Beards-Butter-All-Natural-Conditioning/dp/B0DPLHNXHD',
  },
  
  {
    name: 'Beard Oil – Smokin\' Cedar (1oz)',
    price: '$16.00',
    image: 'https://m.media-amazon.com/images/I/61vN4xM4Z6L._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/Badmaash-Beards-Beard-Oil-All-Natural/dp/B0DPLKB85Y',
  },
  {
    name: 'Beard Oil – Sandalwood (1oz)',
    price: '$16.00',
    image: 'https://m.media-amazon.com/images/I/61vN4xM4Z6L._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/Badmaash-Beards-Beard-Oil-All-Natural/dp/B0DPR8VJS3',
  },
{
    name: 'Beard Oil – Sandalwood (1oz)',
    price: '$16.00',
    image: 'https://m.media-amazon.com/images/I/61vN4xM4Z6L._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/Badmaash-Beards-Beard-Oil-All-Natural/dp/B0DPR8VJS3',
  },

  {
    name: 'Beard Oil – Sandalwood (1oz)',
    price: '$16.00',
    image: 'https://m.media-amazon.com/images/I/61vN4xM4Z6L._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/Badmaash-Beards-Beard-Oil-All-Natural/dp/B0DPR8VJS3',
  },

];

export default function Products() {
  return (
    <div className="products-page">
      <h2>Badmaash Beards Products</h2>
      <div className="product-grid">
        {products.map((product, idx) => (
          <div className="product-card" key={idx}>
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.price}</p>
            <a href={product.link} target="_blank" rel="noopener noreferrer">
              View on Amazon
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
