import { MessageCircle, MinusCircle, PlusCircle } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Assistant() {
  const [isOpen, setIsOpen] = useState(true);
  const [message, setMessage] = useState("");

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="bg-card rounded-lg shadow-xl p-4 mb-4 w-80"
          >
            <div className="flex flex-col h-64">
              <div className="flex-1 overflow-y-auto mb-4 p-4 bg-muted rounded">
                <p className="text-foreground-muted">
                  ¡Hola! ¿En qué puedo ayudarte hoy?
                </p>
              </div>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary"
                  onClick={() => setMessage("")}
                >
                  <MessageCircle className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary text-foreground p-4 rounded-full shadow-lg hover:bg-primary transition-colors"
      >
        {isOpen ? (
          <MinusCircle className="h-6 w-6" />
        ) : (
          <PlusCircle className="h-6 w-6" />
        )}
      </button>
    </div>
  );
}
