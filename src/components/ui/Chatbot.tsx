"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send, User, Sparkles } from "lucide-react"
import Link from "next/link"

type Message = {
  id: string
  role: "user" | "ai"
  text: string | React.ReactNode
  options?: string[]
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "ai",
      text: "Welcome to Aurelia. I am your digital concierge. How may I assist you with your property search in Dubai today?",
      options: ["Looking to Buy", "Looking to Rent", "Connect with an Advisor"],
    },
  ])

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages, isTyping])

  const simulateResponse = (userText: string) => {
    setIsTyping(true)

    setTimeout(() => {
      let aiResponse: Message = { id: Date.now().toString(), role: "ai", text: "" }

      const text = userText.toLowerCase()

      if (text.includes("buy")) {
        aiResponse.text = "Excellent. Are you interested in ready-to-move-in luxury properties, or exclusive off-plan developments?"
        aiResponse.options = ["Ready Properties", "Off-Plan Investments"]
      } else if (text.includes("rent")) {
        aiResponse.text = "We have a highly curated selection of rental properties, from Downtown penthouses to Palm Jumeirah villas. What is your preferred location?"
        aiResponse.options = ["Palm Jumeirah", "Downtown Dubai", "Dubai Hills"]
      } else if (text.includes("advisor") || text.includes("maya") || text.includes("connect")) {
        aiResponse.text = (
          <div className="flex flex-col gap-3">
            <p>I can connect you directly with Maya Rahman, our Senior Property Advisor.</p>
            <a 
              href="https://wa.me/919113067486" 
              target="_blank" 
              rel="noreferrer"
              className="bg-champagne text-obsidian text-xs tracking-widest uppercase font-medium py-2 px-4 text-center hover:bg-warm-ivory transition-colors"
            >
              WhatsApp Maya
            </a>
          </div>
        )
      } else if (text.includes("off-plan") || text.includes("ready") || text.includes("palm") || text.includes("downtown")) {
        aiResponse.text = "Perfect. I have found several exclusive properties matching your criteria in our portfolio. Would you like me to schedule a private viewing or share the dossier?"
        aiResponse.options = ["Schedule Viewing", "Connect with an Advisor"]
      } else {
        aiResponse.text = "I understand. Since this is a highly personalized search, I recommend speaking directly with our private advisory team to discuss off-market opportunities."
        aiResponse.options = ["Connect with an Advisor"]
      }

      setMessages((prev) => [...prev, aiResponse])
      setIsTyping(false)
    }, 1200) // 1.2s delay for realism
  }

  const handleSend = (text: string) => {
    if (!text.trim()) return

    // Add user message
    const newUserMsg: Message = { id: Date.now().toString(), role: "user", text }
    
    // Remove options from previous message if exists
    setMessages((prev) => {
      const updated = [...prev]
      if (updated.length > 0) {
        delete updated[updated.length - 1].options
      }
      return [...updated, newUserMsg]
    })
    
    setInputValue("")
    simulateResponse(text)
  }

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, type: "spring" }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 p-4 bg-champagne text-obsidian rounded-full shadow-2xl hover:scale-105 transition-transform duration-300 ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Open Digital Concierge"
      >
        <MessageSquare size={24} strokeWidth={1.5} />
        {/* Unread dot indicator */}
        <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-champagne animate-pulse"></span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] w-[calc(100vw-3rem)] md:w-[400px] h-[600px] max-h-[80vh] bg-[#11110F] border border-muted-border/50 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-muted-border/30 bg-obsidian">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary-dark border border-champagne/30 flex items-center justify-center">
                  <Sparkles size={14} className="text-champagne" />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-lg text-warm-ivory leading-none">Aurelia AI</span>
                  <span className="text-[9px] tracking-widest text-champagne uppercase mt-1">Digital Concierge</span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-muted-ivory hover:text-champagne transition-colors p-1"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-grow overflow-y-auto p-5 flex flex-col gap-6 no-scrollbar bg-obsidian/50">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex flex-col gap-2 ${msg.role === "user" ? "items-end" : "items-start"}`}
                >
                  <div className="flex items-end gap-2 max-w-[85%]">
                    {msg.role === "ai" && (
                      <div className="w-6 h-6 rounded-full bg-secondary-dark flex-shrink-0 flex items-center justify-center border border-muted-border mb-1">
                        <Sparkles size={10} className="text-champagne" />
                      </div>
                    )}
                    
                    <div 
                      className={`p-4 text-sm font-light leading-relaxed ${
                        msg.role === "user" 
                          ? "bg-secondary-dark text-warm-ivory border border-muted-border/30" 
                          : "bg-transparent border border-muted-border/30 text-muted-ivory"
                      }`}
                    >
                      {msg.text}
                    </div>

                    {msg.role === "user" && (
                      <div className="w-6 h-6 rounded-full bg-champagne flex-shrink-0 flex items-center justify-center mb-1">
                        <User size={12} className="text-obsidian" />
                      </div>
                    )}
                  </div>

                  {/* Smart Options */}
                  {msg.options && msg.options.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2 ml-8">
                      {msg.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleSend(opt)}
                          className="text-[10px] tracking-widest uppercase border border-champagne/30 text-champagne px-3 py-1.5 hover:bg-champagne hover:text-obsidian transition-colors"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex items-end gap-2 max-w-[85%]">
                  <div className="w-6 h-6 rounded-full bg-secondary-dark flex-shrink-0 flex items-center justify-center border border-muted-border mb-1">
                    <Sparkles size={10} className="text-champagne" />
                  </div>
                  <div className="p-4 bg-transparent border border-muted-border/30 flex items-center gap-1.5 h-[52px]">
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-champagne rounded-full" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-champagne rounded-full" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-champagne rounded-full" />
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-muted-border/30 bg-obsidian">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(inputValue); }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about properties, areas, or advisors..."
                  className="flex-grow bg-secondary-dark border border-muted-border/50 text-sm text-warm-ivory px-4 py-3 focus:outline-none focus:border-champagne transition-colors"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-champagne text-obsidian p-3 hover:bg-warm-ivory transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
