import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";

type Product = {
  title: string;
  price: number;
  tag: string;
  img: string;
};

type CartItem = Product & { qty: number };

const products: Product[] = [
  { title: "Mirage Sphere", price: 89, tag: "Print", img: "/images/sphere-desert.jpeg" },
  { title: "Cloud Stairway", price: 129, tag: "Limited", img: "/images/pink-cloud-ball.jpeg" },
  { title: "Glass Wheel", price: 75, tag: "Print", img: "/images/wheel-desert.jpeg" },
  { title: "Pink Reverie", price: 149, tag: "NFT", img: "/images/pink-bubbles.jpg" },
  { title: "Echo Chair", price: 65, tag: "Poster", img: "/images/tree-chair.jpeg" },
  { title: "Prism Bloom", price: 110, tag: "Print", img: "/images/portal-clouds.png" },
  { title: "Solar Drift", price: 95, tag: "Limited", img: "/images/mirror-desert.jpg" },
  { title: "Lunar Bed", price: 180, tag: "Original", img: "/images/glass-water.jpeg" },
];

const filters = ["All", "Print", "Limited", "Poster", "NFT", "Original"];

export default function Shop() {
  const [filter, setFilter] = useState("All");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkedOut, setCheckedOut] = useState(false);
  const [orderNum, setOrderNum] = useState("");

  const list = filter === "All" ? products : products.filter((p) => p.tag === filter);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.title === product.title);
      if (existing) {
        return prev.map((c) =>
          c.title === product.title ? { ...c, qty: c.qty + 1 } : c
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (title: string) => {
    setCart((prev) => prev.filter((c) => c.title !== title));
  };

  const updateQty = (title: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((c) =>
          c.title === title ? { ...c, qty: c.qty + delta } : c
        )
        .filter((c) => c.qty > 0)
    );
  };

  const totalItems = cart.reduce((s, c) => s + c.qty, 0);
  const totalPrice = cart.reduce((s, c) => s + c.price * c.qty, 0);

  const handleCheckout = () => {
    const id = "DTT-" + Math.random().toString(36).substring(2, 8).toUpperCase();
    setOrderNum(id);
    setCheckedOut(true);
    setCart([]);
  };

  const handleContinueShopping = () => {
    setCheckedOut(false);
    setCartOpen(false);
  };

  return (
    <PageTransition>
      <PageHeader
        eyebrow="Shop / Editions"
        title="Shop the collection"
        intro="Hand-curated AI generated prints, limited editions and originals. Every piece ships from our New York studio."
      />

      <section className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Filters + Cart toggle */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-3">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-5 py-2 text-sm border transition-colors ${
                  filter === f
                    ? "bg-neutral-900 text-[#f3f1ec] border-neutral-900"
                    : "border-neutral-900/20 hover:border-neutral-900"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <button
            onClick={() => setCartOpen(true)}
            className="relative rounded-full border border-neutral-900/20 hover:border-neutral-900 px-5 py-2 text-sm font-medium transition-colors flex items-center gap-2"
          >
            🛒 Cart
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-amber-400 text-neutral-900 text-[10px] font-bold grid place-items-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        {/* Product grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {list.map((p, i) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-neutral-200">
                <img
                  src={p.img}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest bg-[#f3f1ec]/90 px-2 py-1 rounded-full">
                  {p.tag}
                </span>
                <button
                  onClick={() => addToCart(p)}
                  className="absolute bottom-3 right-3 grid place-items-center w-10 h-10 rounded-full bg-neutral-900 text-[#f3f1ec] opacity-0 group-hover:opacity-100 transition-all hover:bg-amber-400 hover:text-neutral-900 hover:scale-110"
                >
                  +
                </button>
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <h3 className="font-serif font-semibold text-xl tracking-[-0.04em] text-black">{p.title}</h3>
                <span className="font-mono text-sm">${p.price}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {cartOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCartOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            />
            {/* Drawer */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-neutral-900/10">
                <h2 className="font-serif font-semibold text-2xl tracking-[-0.04em]">
                  Your Cart ({totalItems})
                </h2>
                <button
                  onClick={() => setCartOpen(false)}
                  className="w-10 h-10 rounded-full border border-neutral-900/20 grid place-items-center hover:bg-neutral-900 hover:text-white transition-colors text-lg"
                >
                  ✕
                </button>
              </div>

              {/* Items */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-neutral-400">
                    <div className="text-5xl mb-4">🛒</div>
                    <p className="font-medium">Your cart is empty</p>
                    <p className="text-sm mt-1">Browse the collection and add items</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <motion.div
                      key={item.title}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="flex gap-4"
                    >
                      <div className="w-20 h-24 rounded-xl overflow-hidden bg-neutral-200 flex-shrink-0">
                        <img src={item.img} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif font-semibold text-lg tracking-tight truncate">{item.title}</h4>
                        <p className="text-xs text-neutral-500 uppercase tracking-widest mt-0.5">{item.tag}</p>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center gap-2 border border-neutral-900/15 rounded-full">
                            <button
                              onClick={() => updateQty(item.title, -1)}
                              className="w-8 h-8 grid place-items-center text-sm hover:bg-neutral-100 rounded-full transition-colors"
                            >
                              −
                            </button>
                            <span className="text-sm font-mono w-5 text-center">{item.qty}</span>
                            <button
                              onClick={() => updateQty(item.title, 1)}
                              className="w-8 h-8 grid place-items-center text-sm hover:bg-neutral-100 rounded-full transition-colors"
                            >
                              +
                            </button>
                          </div>
                          <span className="font-mono text-sm font-medium">${item.price * item.qty}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.title)}
                        className="text-neutral-400 hover:text-red-500 transition-colors text-xs self-start mt-1"
                      >
                        ✕
                      </button>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Footer */}
              {checkedOut ? (
                <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 12, stiffness: 200 }}
                    className="w-20 h-20 rounded-full bg-emerald-100 grid place-items-center mb-6"
                  >
                    <span className="text-3xl">✓</span>
                  </motion.div>
                  <h3 className="font-serif font-semibold text-2xl tracking-tight">Order Confirmed!</h3>
                  <p className="text-sm text-neutral-500 mt-2">Your order <span className="font-mono font-bold text-black">{orderNum}</span> has been placed.</p>
                  <p className="text-xs text-neutral-400 mt-1">You'll receive a confirmation email shortly.</p>
                  <button
                    onClick={handleContinueShopping}
                    className="mt-8 rounded-full bg-neutral-900 text-white px-6 py-3 text-sm font-medium hover:bg-neutral-800 transition-colors"
                  >
                    Continue Shopping →
                  </button>
                </div>
              ) : cart.length > 0 ? (
                <div className="p-6 border-t border-neutral-900/10 space-y-4">
                  <div className="flex justify-between font-medium">
                    <span className="text-neutral-600">Subtotal</span>
                    <span className="font-mono text-lg">${totalPrice}</span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="w-full py-3.5 rounded-full bg-amber-400 text-neutral-900 font-bold text-sm hover:bg-amber-300 transition-colors"
                  >
                    Checkout → ${totalPrice}
                  </button>
                  <p className="text-[11px] text-center text-neutral-400">Free shipping on orders over $200</p>
                </div>
              ) : null}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
