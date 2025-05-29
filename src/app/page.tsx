import Footer from "@/components/footer";
import Hero from "@/components/hero";
import NavBar from "@/components/navbar";
import ProductList from "@/components/productList";

export default function Home() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <NavBar />
        <Hero />
        <ProductList />
        <Footer />
      </div>
    </>
  );
}
