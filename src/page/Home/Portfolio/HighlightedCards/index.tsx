import { Card } from './Card'

export const HighlightedCards = () => {
  return (
    <section className="px-2 lg:px-0 pt-16">
      <h3 className="mb-4 text-2xl font-bold text-highlightForeground">
        Projetos em destaque
      </h3>

      <div className="grid md:grid-cols-2 gap-4">
        <Card
          name="FX Studios"
          description="Desenvolvi a interface do novo site da FX Studios, usando tecnologias como React, TypeScript, GSAP, Tailwind CSS, entre outros. O principal desafio foi integrar as animações com as tecnologias mais atuais."
          href="https://fxstudios.com.br"
        />

        <Card
          name="Clínica Quanta"
          description="Desenvolvi a interface do site da Clínica Quanta, usando tecnologias como React, TypeScript, Next.js, entre outros. Um dos principais desafio deste projeto foi a estruturação dos profissionais e das especialidades."
          href="https://quantaclinica.com.br"
        />

        <Card
          name="N.E.W.S. Logistics"
          description="Desenvolvi a interface do site da N.E.W.S. Logistics, usando tecnologias como React, TypeScript, Next.js, entre outros. Neste projeto, o principal desafio foi adicionar múltiplos idiomas no site."
          href="https://newslogistics.com.br"
        />

        <Card
          name="Carisma Home"
          description="Desenvolvi a interface do e-commerce da Carisma Home através da plataforma da TrayCommerce, usamdo tecnologias como JavaScript, SCSS (CSS) e Twig (PHP)."
          href="https://bhof.com.br"
        />
      </div>
    </section>
  )
}
