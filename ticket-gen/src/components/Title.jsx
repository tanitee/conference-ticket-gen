import logo from '../assets/images/logo-full.svg'


const Title = () => {
  return (
    <>
      <div className="logo-cont">
        <img src={logo} alt="Logo" />
      </div>

      <div className="ticket">
        <div className="title-cont">
          <p>Your Journey to coding conf <span> 2025 Starts Here!</span> </p>
        </div>

        <p className="tagline">Secure your spot at next year's biggest coding conference.</p>

      </div>
    </>
  )
}

export default Title