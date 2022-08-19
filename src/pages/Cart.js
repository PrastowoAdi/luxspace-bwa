import Breadcrumb from "components/Breadcrumb";
import ShippingCart from "parts/Cart/ShippingCart";
import ShoppingCart from "parts/Cart/ShoppingCart";
import Document from "parts/Document";
import Footer from "parts/Footer";
import Header from "parts/Header";
import SiteMap from "parts/SiteMap";

export default function Cart() {
  return (
    <Document>
      <Header theme="black" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/cart", name: "Shopping Cart" },
        ]}
      />
      <section className="md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex -mx-4 flex-wrap">
            <ShoppingCart />
            <ShippingCart />
          </div>
        </div>
      </section>
      <SiteMap />
      <Footer />
    </Document>
  );
}
