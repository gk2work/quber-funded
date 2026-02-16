import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OfferBar from "../components/OfferBar";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <OfferBar />

      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
