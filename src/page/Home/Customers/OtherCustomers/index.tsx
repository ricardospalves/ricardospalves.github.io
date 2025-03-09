import { List } from '@/components/List'
import { LIST } from './list'

export const OtherCustomers = () => {
  return (
    <section className="px-2 lg:px-0 pt-16">
      <h3
        id="outros-clientes"
        className="mb-4 text-2xl font-bold text-highlightForeground"
      >
        Outros clientes
      </h3>

      <List.Root className="md:columns-2 lg:columns-3">
        {LIST.map(({ name }) => {
          return <List.Item key={name}>{name}</List.Item>
        })}
      </List.Root>
    </section>
  )
}
