import { ExternalLink } from '@/components/ExternalLink'
import { Card } from './Card'

export const Highlighted = () => {
  return (
    <section className="px-2 lg:px-0 pt-16">
      <h3
        id="clientes-em-destaque"
        className="mb-4 text-2xl font-bold text-highlightForeground"
      >
        Clientes em destaque
      </h3>

      <div className="grid md:grid-cols-2 gap-4">
        <Card name="VR Benefícios">
          <p>
            A VR Benefícios é uma empresa do segmento de benefícios para
            empresas, oferecendo produtos como vale-alimentação, vale-refeição,
            vale-cultura, entre outros.
          </p>

          <p>
            Para a VR Benefícios desenvolvi principalmente landing pages e
            formulários de cadastro.
          </p>
        </Card>

        <Card name="Morana">
          <p>
            A Morana é uma das maiores redes de acessórios femininos do Brasil,
            com mais de 300 pontos de venda em território nacional e também
            presente internacionalmente.
          </p>

          <p>
            Para a Morana desenvolvi principalmente websites, projetos internos
            e o{' '}
            <ExternalLink
              href="https://moranablog.com.br"
              className="underline text-highlightForeground"
            >
              Morana Blog
            </ExternalLink>
            .
          </p>
        </Card>

        <Card name="Be180">
          <p>
            A Be180 é uma mediatech que conecta marcas e pessoas por meio de
            projetos de comunicação urbana.
          </p>

          <p>
            Para a Be180 desenvolvi a interface de projetos da Amstel e
            Coca-Cola FanFeat.
          </p>
        </Card>

        <Card name="FX Studios">
          <p>
            A FX Studios é uma produtora líder há mais de 27 anos no mercado de
            produção de áudio.
          </p>

          <p>
            Desenvolvi a interface do novo site da{' '}
            <ExternalLink
              href="https://fxstudios.com.br"
              className="underline text-highlightForeground"
            >
              FX Studios
            </ExternalLink>
            .
          </p>
        </Card>
      </div>
    </section>
  )
}
