import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Visit from "./pages/Visit";
import About from "./pages/About";
import News from "./pages/News";
import Tools from "./pages/Tools";
import Chat from "./pages/Chat";
import Article from "./pages/Article";
import ToolDetail from "./pages/ToolDetail";
import PromptApp from "./pages/PromptApp";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/visit" element={<Visit />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/article" element={<Article />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/tools/detail" element={<ToolDetail />} />
        <Route path="/tools/app" element={<PromptApp />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-white text-neutral-950">
        <Header />
        <AnimatedRoutes />
        <Footer />
        <ScrollToTop />
      </div>
    </HashRouter>
  );
}
