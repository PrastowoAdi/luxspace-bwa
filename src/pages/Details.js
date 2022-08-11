import Breadcrumb from "components/Breadcrumb";
import ProjectDetail from "parts/Details/ProjectDetail";
import Suggestion from "parts/Details/Suggestion";
import Footer from "parts/Footer";
import Header from "parts/Header";
import SiteMap from "parts/SiteMap";

export default function Details() {
  return (
    <>
      <Header theme="black" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/9123", name: "Office Room" },
          { url: "/categories/9123/products/7888", name: "Details" },
        ]}
      />
      <ProjectDetail />
      <Suggestion />
      <SiteMap />
      <Footer />
    </>
  );
}
