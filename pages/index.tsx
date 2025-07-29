
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{
      background: '#0f0f0f',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '60px 20px',
      minHeight: '100vh',
      margin: 0
    }}>
      {/* Header */}
      <h1 style={{
        fontSize: '3.8rem',
        margin: '0 0 10px',
        color: '#00ff88',
        textShadow: '0 0 15px rgba(0, 255, 136, 0.4)'
      }}>
        nightcrawler1222
      </h1>
      <p style={{
        fontSize: '1.4rem',
        color: '#aaa',
        marginBottom: '60px'
      }}>
        Content Creator • Streamer • YouTuber
      </p>

      {/* Video Grid */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '30px',
        maxWidth: '1000px',
        margin: '0 auto 60px'
      }}>
        {/* YouTube */}
        <div style={cardStyle}>
          <h3 style={{ color: '#FF0000', margin: '0 0 15px' }}>YouTube</h3>
          <iframe
            width="300"
            height="180"
            src="https://www.youtube.com/embed/jaPxxzlrhx8"
            title="YouTube"
            frameBorder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: '10px' }}
          ></iframe>
        </div>

        {/* TikTok */}
        <div style={cardStyle}>
          <h3 style={{ color: '#00F2EA', margin: '0 0 15px' }}>TikTok</h3>
          <a href="https://tiktok.com/@nightcrawler1222" target="_blank" rel="noreferrer">
            <img
              src="https://via.placeholder.com/300x180/000000/00F2EA?text=TikTok+%40nightcrawler1222"
              alt="TikTok"
              style={{ width: '300px', height: '180px', borderRadius: '10px' }}
            />
          </a>
        </div>

        {/* Instagram */}
        <div style={cardStyle}>
          <h3 style={{ color: '#E4405F', margin: '0 0 15px' }}>Instagram</h3>
          <a href="https://instagram.com/nightcrawler1222" target="_blank" rel="noreferrer">
            <img
              src="https://via.placeholder.com/300x180/000000/E4405F?text=Instagram+%40nightcrawler1222"
              alt="Instagram"
              style={{ width: '300px', height: '180px', borderRadius: '10px' }}
            />
          </a>
        </div>
      </div>

      {/* Pay to Chat */}
      <div style={{
        margin: '60px auto',
        maxWidth: '600px',
        padding: '30px',
        background: 'rgba(20, 20, 20, 0.7)',
        borderRadius: '15px',
        border: '1px solid #333'
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '15px' }}>Want to Talk?</h2>
        <p style={{ color: '#ccc', marginBottom: '25px' }}>
          Pay to unlock private time with me.
        </p>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center'
        }}>
          {/* $1 — 5-Minute Chat Button (Ko-fi) */}
          <a
            href="https://ko-fi.com/nightcrawler1222"
            target="_blank"
            style={{
              background: 'linear-gradient(90deg, #0066ff, #0099ff)',
              color: 'white',
              padding: '15px 35px',
              border: 'none',
              borderRadius: '50px',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              textDecoration: 'none',
              boxShadow: '0 5px 15px rgba(0, 102, 255, 0.4)',
              display: 'inline-block',
              margin: '10px'
            }}
          >
            $1 — 5 Minutes Chat
          </a>

          {/* $10 Button */}
          <a
            href="https://ko-fi.com/nightcrawler1222"
            target="_blank"
            style={{
              background: 'linear-gradient(90deg, #00cc66, #00ff88)',
              color: 'white',
              padding: '15px 35px',
              border: 'none',
              borderRadius: '50px',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              textDecoration: 'none',
              boxShadow: '0 5px 15px rgba(0, 204, 102, 0.4)',
              display: 'inline-block',
              margin: '10px'
            }}
          >
            $10 — 20 Minutes Chat
          </a>
        </div>
      </div>

      <footer style={{
        marginTop: '80px',
        color: '#666',
        fontSize: '0.9rem'
      }}>
        &copy; {new Date().getFullYear()} nightcrawler1222. All rights reserved.
      </footer>
    </div>
  );
}

// Card style for socials
const cardStyle = {
  background: '#1a1a1a',
  padding: '20px',
  borderRadius: '12px',
  width: '300px',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)'
};
