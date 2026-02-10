import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  const goToContact = () => {
    navigate('/contact')
  }

  return (
    <>
      <p>Home page lad</p>
      <button onClick={goToContact}>Contact page</button>
    </>
  )
}
