import { classNames } from '@/utils/classNames'
import { ComponentPropsWithoutRef, ElementType } from 'react'

type AsProp<E extends ElementType = 'div'> = {
  as?: E
}

type ContainerOwnProps<E extends ElementType = 'div'> = AsProp<E> & {
  className?: string
}

type NativeProps<E extends ElementType = 'div'> = ComponentPropsWithoutRef<E>

type NativePropsWithoutContainerOwnProps<E extends ElementType = 'div'> = Omit<
  NativeProps<E>,
  keyof ContainerOwnProps<E>
>

export type ContainerProps<E extends ElementType = 'div'> =
  ContainerOwnProps<E> & NativePropsWithoutContainerOwnProps<E>

export const Container = <E extends ElementType = 'div'>({
  as,
  className,
  ...props
}: ContainerProps<E>) => {
  const Component = as || 'div'

  return (
    <Component
      className={classNames([
        'max-w-prose lg:max-w-5xl w-full mx-auto',
        className,
      ])}
      {...props}
    />
  )
}
