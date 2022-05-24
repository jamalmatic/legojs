import react from "react"
import Alert from "components/Alert/Alert"
import Button from "components/Button"

export default function Home() {
  return (
    <div className="bg-green-300 min-h-screen flex flex-col space-y-5 max-w-7xl mx-auto items-center justify-center">
      <Alert />
      <Button variant='default outline' disabled/>
      <Button variant='default' disabled/>
      <Alert variant="info"/>
      <Button variant='primary outline small' disabled/>
      <Button variant='primary outline medium'/>
      <Button variant='primary outline large'/>
      <Alert variant="success"/>
      <Button variant='primary' disabled/>
      <Button variant='secondary'/>
      <Button variant='secondary outline'/>
      <Alert variant="warning"/>
      <Alert variant="error"/>
      <Alert variant="primary"/>
    </div>
  )
}

