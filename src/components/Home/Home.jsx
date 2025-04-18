import { pizzaData } from "../../data"
import Pizza from "../Pizza/Pizza"
import { useEffect, useState } from "react"

const pizza = pizzaData.map((pizza) => (
  pizza.name
))

const Home = () => {
  const [pizzaData, setPizzaData] = useState({})

  useEffect(() => (
    setPizzaData(pizza)
  ), [])

  return (
    <>
      <Pizza />
      <Pizza />
      <Pizza />
    </>
  )
}

export default Home