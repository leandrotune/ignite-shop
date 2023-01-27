import { useRouter } from 'next/router';
import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/pages/product';

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>
        
      </ImageContainer>
      <ProductDetails>
        <h1>Camiseta x</h1>
        <span>R$ 79,99</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos deserunt, ab assumenda ea, consequuntur recusandae quo aspernatur delectus mollitia ullam molestias quasi fuga. Inventore, fuga cupiditate sit corrupti saepe atque.</p>

        <button>
          comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}