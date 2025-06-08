import React, { useState, useEffect, useRef } from 'react';

const affirmations = {
  sad: "It's okay to feel sad. You're not alone, and this too shall pass.",
  confused: "Feeling confused is normal. Take your time to understand things.",
  frustrated: "Frustration is tough — remember to breathe and take one step at a time.",
  angry: "Anger is valid. Find healthy ways to express it and take care of yourself.",
  mad: "It's alright to feel mad sometimes. You're strong for facing it.",
  alone: "You are not invisible. There are people who care about you deeply.",
  scared: "Being scared is a natural feeling. You're safe here.",
  fearful: "Fear can be overwhelming, but you have the power to overcome it.",
  invisible: "You are seen and valued, even when it feels otherwise.",
  neglected: "Your feelings matter. You deserve love and attention.",
  unseen: "You are important, even if it feels like no one notices.",
  ugly: "Beauty is so much more than appearances. You are beautiful inside and out.",
  worthless: "You have worth beyond measure. Never forget that.",
  dumb: "You are capable and smart. Mistakes don’t define you.",
  stupid: "Don't be harsh on yourself. You are learning and growing every day.",
  slut: "You deserve respect and kindness, always.",
  whore: "You are worthy of love and dignity.",
  disgrace: "You are valuable and deserving of kindness.",
  vengeful: "It's okay to feel hurt. Focus on healing and peace.",
  forsaken: "You are never truly alone; support is here for you.",
  suffering: "Your pain is real and valid. Healing takes time.",
  down: "It's okay to feel down. Reach out when you need to.",
  unlovable: "You are lovable just as you are.",
  ashamed: "There is nothing to be ashamed of. You are human and worthy.",
  embarrassed: "Everyone makes mistakes. You are growing and learning."
};

function SafeChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('safeChatMessages')) || [];
    setMessages(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('safeChatMessages', JSON.stringify(messages));
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  function handleSend() {
    if (input.trim()) {
      const userMessage = {
        id: Date.now(),
        text: input.trim(),
        sender: 'user',
        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
      };

      setMessages((prev) => [...prev, userMessage]);

      // Check for keywords in input and respond
      const lowerText = input.toLowerCase();
      let foundAffirmation = null;

      Object.keys(affirmations).some((key) => {
        if (lowerText.includes(key)) {
          foundAffirmation = affirmations[key];
          return true;
        }
        return false;
      });

      if (foundAffirmation) {
        const botMessage = {
          id: Date.now() + 1,
          text: foundAffirmation,
          sender: 'bot',
          time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
        };

        // Reply after a short delay for realism
        setTimeout(() => {
          setMessages((prev) => [...prev, botMessage]);
        }, 700);
      }

      setInput('');
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Safe Chat</h2>
      <div style={styles.chatBox}>
        {messages.length === 0 ? (
          <p style={styles.noMessages}>No messages yet. Start sharing your thoughts...</p>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              style={{
                ...styles.message,
                ...(msg.sender === 'user' ? styles.userMessage : styles.botMessage)
              }}
            >
              <p style={styles.messageText}>{msg.text}</p>
              <small style={styles.timestamp}>{msg.time}</small>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>
      <textarea
        rows="3"
        placeholder="Write your thoughts here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        style={styles.textarea}
      />
      <button onClick={handleSend} style={styles.sendButton}>
        Send
      </button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '480px',
    margin: '20px auto',
    padding: '15px',
    borderRadius: '15px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    background: 'linear-gradient(135deg, #c3a5f5, #94c2f8)', // purple-blue gradient
    fontFamily: "'Poppins', sans-serif",
    color: '#222',
  },
  title: {
    textAlign: 'center',
    marginBottom: '15px',
    fontWeight: '700',
    color: '#2a0b75',
  },
  chatBox: {
    height: '300px',
    backgroundColor: '#fefefe',
    padding: '10px',
    borderRadius: '12px',
    overflowY: 'auto',
    boxShadow: 'inset 0 0 8px rgba(0,0,0,0.05)',
    marginBottom: '10px',
    fontSize: '16px',
  },
  noMessages: {
    color: '#999',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: '50px',
  },
  message: {
    maxWidth: '75%',
    padding: '10px 15px',
    borderRadius: '18px',
    marginBottom: '10px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    position: 'relative',
    wordWrap: 'break-word',
  },
  userMessage: {
    backgroundColor: '#7f5af0',
    color: 'white',
    marginLeft: 'auto',
    borderBottomRightRadius: '2px',
  },
  botMessage: {
    backgroundColor: '#d6cbf9',
    color: '#2a0b75',
    marginRight: 'auto',
    borderBottomLeftRadius: '2px',
  },
  messageText: {
    margin: 0,
    fontWeight: '500',
  },
  timestamp: {
    fontSize: '10px',
    color: '#555',
    position: 'absolute',
    bottom: '5px',
    right: '10px',
  },
  textarea: {
    width: '100%',
    borderRadius: '12px',
    border: '1px solid #bbb',
    padding: '10px',
    fontSize: '15px',
    resize: 'none',
    fontFamily: "'Poppins', sans-serif",
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },
  sendButton: {
    marginTop: '8px',
    width: '100%',
    padding: '12px',
    borderRadius: '12px',
    backgroundColor: '#7f5af0',
    color: 'white',
    border: 'none',
    fontWeight: '700',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.25s ease',
  }
};

export default SafeChat;



