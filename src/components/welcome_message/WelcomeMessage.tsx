interface WelcomeMessageProps {
  onClick: () => void
}

export function WelcomeMessage({ onClick }: WelcomeMessageProps) {
  return <div className="WelcomeMessage">
    <div className="message-container">
      <h1>Hi, Taylor</h1>
      <h2>You have 6 medical bills ready from ABC Health System. You can pay your bills here or verify your identity to view full bill details.</h2>
    </div>
    <div className="controls">
      <div className="controls-container">
        <div className="summary">
          <p>Total due</p>
          <p>$600.00</p>
        </div>
        <button onClick={ onClick }>Pay total</button>
      </div>
    </div>
  </div>
}
