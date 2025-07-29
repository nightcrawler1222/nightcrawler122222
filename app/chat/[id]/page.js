// app/chat/[id]/page.js
import { useState, useEffect } from 'react';

export default function ChatRoom({ id }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Simulate encrypted message sending
  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // In real app: encrypt with libsodium
    setMessages([...messages, {
      text: input,
      sender: 'you',
      time: new Date().toLocaleTimeString()
    }]);
    setInput('');
  };

  // Auto-scroll to bottom
  useEffect(() => {
    const chatBox = document.getElementById('chat-box');
    if (chatBox) chatBox.scrollTop = chatBox.scrollHeight;
  }, [messages]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      background: '#0f0f0f',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Header */}
      <div style={{
        padding: '15px 20px',
        background: '#1a1a1a',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h2 style={{ margin: 0, color: '#00ff88' }}>🔒 Private Chat</h2>
        <span style={{
          fontSize: '0.9rem',
          color: '#aaa'
        }}>
          Room: {id.slice(0, 6)}
        </span>
      </div>

      {/* Messages */}
      <div
        id="chat-box"
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}
      >
        {messages.length === 0 ? (
          <p style={{ color: '#666', textAlign: 'center', marginTop: '20px' }}>
            Start the conversation...
          </p>
        ) : (
          messages.map((msg, i) => (
            <div
              key={i}
              style={{
                alignSelf: msg.sender === 'you' ? 'flex-end' : 'flex-start',
                background: msg.sender === 'you' ? '#0070f3' : '#2a2a2a',
                padding: '10px 15px',
                borderRadius: '18px',
                maxWidth: '70%',
                wordWrap: 'break-word'
              }}
            >
              {msg.text}
              <div style={{
                fontSize: '0.7rem',
                color: '#ccc',
                textAlign: 'right',
                marginTop: '4px'
              }}>
                {msg.time}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Input */}
      <form onSubmit={sendMessage} style={{
        display: 'flex',
        padding: '10px 20px',
        background: '#1a1a1a',
        borderTop: '1px solid #333'
      }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a secure message..."
          style={{
            flex: 1,
            padding: '12px',
            border: 'none',
            borderRadius: '8px',
            marginRight: '10px'
          }}
        />
        <button
          type="submit"
          style={{
            background: '#00cc66',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            padding: '0 20px',
            fontWeight: 'bold'
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}

// Get the room ID from the URL
export async function getServerSideProps({ params }) {
  return { props: { id: params.id } };
}