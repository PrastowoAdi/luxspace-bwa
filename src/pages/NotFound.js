import Document from "parts/Document";
import Footer from "parts/Footer";
import Header from "parts/Header";
import PageErrorMessage from "parts/PageErrorMessage";
import SiteMap from "parts/SiteMap";

export default function NotFound() {
  return (
    <Document>
      <Header theme="black" />
      <PageErrorMessage />
      <SiteMap />
      <Footer />
    </Document>
  );
}
