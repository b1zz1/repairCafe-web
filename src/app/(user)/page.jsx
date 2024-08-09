import {Input} from "@/components/ui/input/input"

import WaveCafe from "@/components/ui/waveCafe"

const Home = () => {
  const name = "Ana"

  return (
      <>
        <h1 className={"text-2xl font-bold"}>Olá {name}, seja bem-vinda</h1>
        <Input type={"text"} size={"full"} placeholder={"Pesquisar"} />
        <WaveCafe />
      </>
  )
}

export default Home
