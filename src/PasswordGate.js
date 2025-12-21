import { useState } from 'react';

const PASSWORD = 'wadmore2026';

export default function PasswordGate({ children }) {
  const [unlocked, setUnlocked] = useState(
    sessionStorage.getItem('wadmore-access') === 'true'
  );
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === PASSWORD) {
      sessionStorage.setItem('wadmore-access', 'true');
      setUnlocked(true);
    } else {
      setError(true);
    }
  };

  if (unlocked) return children;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column', fontFamily: 'sans-serif' }}>
      <h2>Wadmore Preview</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ padding: '8px', marginRight: '8px' }}
        />
        <button type="submit" style={{ padding: '8px 16px' }}>Enter</button>
      </form>
      {error && <p style={{ color: 'red' }}>Incorrect password</p>}
    </div>
  );
}
