import react from "react"
import Alert from "components/Alert/Alert"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col space-y-5 max-w-7xl mx-auto items-center justify-center">
      <Alert>
        <span alert-title="">Alert Tiltem</span>
        <span>Alert Description</span>
      </Alert>
      <Alert variant="info"/>
      <Alert variant="success"/>
      <Alert variant="warning"/>
      <Alert variant="danger"/>
    </div>
  )
}

