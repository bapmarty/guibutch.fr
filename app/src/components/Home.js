import PlainLogo from "../assets/images/logo.svg";

import "../assets/scss/components/Home.scss";

const Home = () => {
  return (
    <>
      <section className="home">
        <img src={PlainLogo} alt={"logo"} />
        <h1>Bienvenue sur le site officiel du guibutch</h1>
      </section>
    </>
  )
}

export default Home;