import "./Products.css";

const products = [

  {
    name: 'Beard Butter – Sandalwood (2oz)',
    price: '$16.00',
    image: '/images/BB_sandalwood.png',
    alt: 'Beard Butter – Sandalwood (2oz)',
    link: 'https://www.amazon.com/Badmaash-Beards-Butter-All-Natural-Conditioning/dp/B0DPN8SN8C?th=1',
  },
  {
    name: 'Beard Butter – Smokin Cedar (2oz)',
    price: '$16.00',
    image: '/images/BB_SmokinCedar.png',
    alt: 'Beard Butter – Smokin Cedar (2oz)',
    link: 'https://www.amazon.com/Badmaash-Beards-Butter-All-Natural-Conditioning/dp/B0DPLHNXHD?th=1',
  },

 {
    name: 'Beard Butter – Icy Springs (2oz)',
    price: '$16.00',
    image: '/images/BB_icySprings.png',
    alt: 'Beard Butter – Icy Springs (2oz)',
    link: 'https://www.amazon.com/Badmaash-Beards-Butter-All-Natural-Conditioning/dp/B0DPNHYBYK?th=1',
  },


  {
    name: 'Beard Butter – Masti Mint (2oz)',
    price: '$16.00',
    image: '/images/BB_MastiMint.png',
    alt: 'Beard Butter – Masti Mint (2oz)',
    link: 'https://www.amazon.com/Badmaash-Beards-Butter-All-Natural-Conditioning/dp/B0DPNJDWBY?th=1',
  },


  {
    name: 'Beard Oil – Smokin\' Cedar (1oz)',
    price: '$16.00',
    image: '/images/BO_SmokinCedar.png',
    alt: 'Beard Oil – Smokin\' Cedar (1oz)',
    link: 'https://www.amazon.com/dp/B0DPLKB85Y?ref=emc_s_m_5_i_atc&th=1',
  },
  {
    name: 'Beard Oil – Sandalwood (1oz)',
    price: '$16.00',
    image: '/images/BO_sandalwood.png',
    alt: 'Beard Oil – Sandalwood (1oz)',
    link: 'https://www.amazon.com/dp/B0DPR8VJS3?ref=emc_s_m_5_i_atc&th=1',
  },
 {
    name: 'Beard Oil – Masti Mint (1oz)',
    price: '$16.00',
    image: '/images/BO_MastiMint.png',
    alt: 'Beard Oil – Masti Mint (1oz)',
    link: 'https://www.amazon.com/dp/B0DPR7WN6J?ref=emc_s_m_5_i_atc&th=1',
  },

  {
    name: 'Beard Oil – Icy Springs (1oz)',
    price: '$16.00',
    image: '/images/BO_icySprings.png',
    alt: 'Beard Oil – Icy Springs (1oz)',
    link: 'https://www.amazon.com/dp/B0DPR6LLW9?ref=emc_s_m_5_i_atc&th=1',
  },

  {
    name: 'Beard Butter 4-Pack Sampler',
    price: '$22.00',
    image: '/images/BB_sampler.png',
    alt: 'Beard Butter 4-Pack Sampler',
    link: 'https://www.amazon.com/dp/B0DPXQQB44/ref=sspa_dk_hqp_detail_aax_0?psc=1&sp_csd=d2lkZ2V0TmFtZT1zcF9ocXBfc2hhcmVk',
  },

];

export default function Products() {
  return (
    <div className="products-page">
      <h2>Badmaash Beards Products</h2>
      <div className="product-grid">
        {products.map((product, idx) => (
          <div className="product-card" key={idx}>
            <img src={product.image} alt={product.alt} className="product-image" />
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


//sources:
//Responsive React Cards | Mobile First Shopping Cards
//https://www.youtube.com/watch?v=3_gakM-y7hE


//Shopping Cart In React Js For Newbies
//https://www.youtube.com/watch?v=NJ1inoC1L1k


//How To Create An Advanced Shopping Cart With React and TypeScript
//https://www.youtube.com/watch?v=lATafp15HWA


//https://stackoverflow.com/questions/70293669/responsive-card-grid-in-react