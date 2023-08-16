import "../styles/globals.css";
import "../styles/editor.scss";
import "../styles/cards.css";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={router.pathname}>
        <Component {...pageProps} />
        <motion.div
          className="slide-in"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="backg text-white flex justify-center items-center font-semibold text-2xl">
            jello
          </h1>
        </motion.div>
        <motion.div
          className="slide-out"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default App;
