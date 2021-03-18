import React from "react";
import { motion } from "framer-motion"

function Contact() {
    
  return (
    <main>
      <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
      <h3>contact</h3>
      <form>
        <label for="name">Name:</label>
        <input type="text" id='name' name="name"></input>
        <label for="email">Email address:</label>
        <input type="text" id='email' name="email"></input>
        <label for="message">Message:</label>
        <input type="text" id='message' name="message"></input>
        <button>Submit</button>
      </form>
      </motion.div>
    </main>
  );
}

export default Contact;