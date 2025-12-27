import ProductBanner from "@/components/modules/banner/ProductBanner";
import Address from "@/components/modules/cart/Address";
import CartProducts from "@/components/modules/cart/CartProducts";
import Coupon from "@/components/modules/cart/Coupon";
import PaymentDetails from "@/components/modules/cart/PaymentDetails";

const CartPage = () => {
  return (
    // <NMContainer>
    // <ProductBanner title="Cart Page" path="Home - Cart" />
    <div className="gap-8 my-5">
      <ProductBanner title="Carted Products" path="Home - Cart" />
      <div className="flex flex-col justify-between items-start lg:flex-row gap-8 my-5">
        <CartProducts />
        <div className="flex flex-col gap-4">
          <Coupon />
          <Address />
          <PaymentDetails />
        </div>
      </div>
    </div>
    // </NMContainer>
  );
};

export default CartPage;
