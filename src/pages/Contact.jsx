import { useParams } from 'react-router-dom'
import Card from '../components/Card'
export default function Contact() {
  const { contactId } = useParams()

  return (
    <div>
      <h1>Contact {contactId}</h1>
      <Card />
    </div>
  )
}
