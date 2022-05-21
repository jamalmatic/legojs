import react from "react"
import Alert from "components/Alert/Alert"

export default function Home() {
  return (
    <>
      <Alert/>
      <Alert variant="info"/>
      <Alert variant="success"/>
      <Alert variant="warning"/>
      <Alert variant="danger"/>
    </>
  )
}

