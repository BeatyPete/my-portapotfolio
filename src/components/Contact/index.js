import React from "react";
import { motion, AnimatePresence } from "framer-motion"

function Contact() {
    
  return (
    <main>
      <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
      <h3>contact</h3>
      </motion.div>
    </main>
  );
}

export default Contact;