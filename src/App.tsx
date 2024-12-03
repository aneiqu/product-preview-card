import "./App.css";
import cartIcon from "./assets/icon-cart.svg";
import productImgDesktop from "./assets/image-product-desktop.jpg";
import productImgMobile from "./assets/image-product-mobile.jpg";

function App() {
  return (
    <div className='item-container'>
      <picture>
        <source media='(min-width: 600px)' srcSet={productImgDesktop} />
        <img src={productImgMobile} alt='Chanel perfume' className='product-img' />
      </picture>
      <div className='product-info'>
        <p id='product-category'>PERFUME</p>
        <p id='product-name'>Gabrielle Essence Eau De Parfum</p>
        <p id='product-description'>
          A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator
          for the House of CHANEL.
        </p>
        <div id='product-price'>
          <p id='product-price-discount'>$149.99</p>
          <p id='product-price-normal'>$169.99</p>
        </div>
        <button id='cart-button'>
          <img id='cart-icon' src={cartIcon} alt='Cart icon' />
          <p id='cart-text'>Add to Cart</p>
        </button>
      </div>
    </div>
  );
}

export default App;
