import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Message {
  id: number
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const botResponses: Record<string, string> = {
  greeting: "Hello! Welcome to Coach & Heal. I'm here to help you find the right support for your journey. How can I assist you today?",
  services: "We offer four main coaching services:\n\n1. Life Coaching — Find clarity and purpose\n2. Career Coaching — Advance your professional path\n3. Health Coaching — Build sustainable wellness habits\n4. World Business Coaching — Scale your world strategically\n\nWhich one interests you most?",
  coaching: "Our coaching sessions are personalized one-on-one experiences. Each program runs 6-16 weeks depending on your goals. We start with a free discovery call to understand where you are and where you want to be. Would you like to book one?",
  equipment: "We use gentle, non-invasive wellness devices like the BrainBit and MINDO headbands. They help us understand your body's natural patterns so we can personalize your coaching. But don't worry — they're completely optional!",
  pricing: "Our coaching programs vary based on duration and format. We offer flexible payment options to make our services accessible. The best way to get specific pricing is to book a free discovery call. Shall I help you with that?",
  contact: "You can reach us through:\n\nWhatsApp: +234 701 074 4142\nWhatsApp: +234 905 293 3182\nEmail: Ibe@coachandheal.store\n\nOr book a free discovery call right on our website!",
  lagos: "We have partner wellness centers across Lagos, Nigeria — including Victoria Island, Ikeja, and other areas. We also offer online coaching worldwide. Would you like to know about specific locations?",
  default: "I'd love to help you with that! For the most personalized response, I'd recommend booking a free discovery call with Coach Ibe. You can WhatsApp us at +234 701 074 4142 or +234 905 293 3182, or email Ibe@coachandheal.store. Is there anything else I can help with?",
}

function getResponse(input: string): string {
  const lower = input.toLowerCase()
  if (lower.match(/\b(hi|hello|hey|good|morning|afternoon|evening)\b/)) return botResponses.greeting
  if (lower.match(/\b(service|offer|program|what do you)\b/)) return botResponses.services
  if (lower.match(/\b(coach|session|1:1|one on one|program|week)\b/)) return botResponses.coaching
  if (lower.match(/\b(equipment|device|headband|brainbit|mindo|technology|eeg)\b/)) return botResponses.equipment
  if (lower.match(/\b(price|cost|how much|fee|payment|afford)\b/)) return botResponses.pricing
  if (lower.match(/\b(contact|reach|phone|email|whatsapp|telegram|call)\b/)) return botResponses.contact
  if (lower.match(/\b(lagos|venue|location|where|visit|office)\b/)) return botResponses.lagos
  return botResponses.default
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: botResponses.greeting,
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = () => {
    if (!input.trim()) return

    const userMsg: Message = {
      id: Date.now(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMsg])
    setInput('')

    setTimeout(() => {
      const botMsg: Message = {
        id: Date.now() + 1,
        text: getResponse(input),
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMsg])
    }, 800)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const quickActions = [
    { label: 'Our Services', message: 'What services do you offer?' },
    { label: 'Book a Call', message: 'How can I book a session?' },
    { label: 'Pricing', message: 'How much do your services cost?' },
    { label: 'Locations', message: 'Where are your Lagos locations?' },
  ]

  return (
    <>
      <motion.button
        className="chat-widget__trigger"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? 'Close chat' : 'Open chat assistant'}
      >
        {isOpen ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-widget"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="chat-widget__header">
              <div className="chat-widget__header-info">
                <div className="chat-widget__avatar">C&H</div>
                <div>
                  <div className="chat-widget__name">Coach & Heal</div>
                  <div className="chat-widget__status">
                    <span className="chat-widget__status-dot" />
                    Online now
                  </div>
                </div>
              </div>
              <button
                className="chat-widget__close"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="chat-widget__messages">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`chat-widget__message chat-widget__message--${msg.sender}`}
                >
                  <div className="chat-widget__bubble">
                    {msg.text.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < msg.text.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {messages.length <= 2 && (
              <div className="chat-widget__quick-actions">
                {quickActions.map((action, i) => (
                  <button
                    key={i}
                    className="chat-widget__quick-btn"
                    onClick={() => {
                      const userMsg: Message = {
                        id: Date.now(),
                        text: action.message,
                        sender: 'user',
                        timestamp: new Date(),
                      }
                      setMessages((prev) => [...prev, userMsg])
                      setTimeout(() => {
                        const botMsg: Message = {
                          id: Date.now() + 1,
                          text: getResponse(action.message),
                          sender: 'bot',
                          timestamp: new Date(),
                        }
                        setMessages((prev) => [...prev, botMsg])
                      }, 800)
                    }}
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            )}

            <div className="chat-widget__input-area">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="chat-widget__input"
              />
              <button
                className="chat-widget__send"
                onClick={sendMessage}
                disabled={!input.trim()}
                aria-label="Send message"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
