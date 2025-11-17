import Componente1 from "@/components/Componente1/Componente1"

export default function page() {
  

  //variaveis
  const magia = <p>JavaScript em HTML</p>
  const frase = "Acho que vou gostar disto!"

  //renderização
  return(
    <div>
      <h2>Viva o Next!</h2>
      <p>O React e o Next.js!</p>
      {magia}
      <p><strong>{frase}</strong></p>
      <Componente1 />
      <Componente1 />
      <Componente1 />
    </div>
    
  )
}
