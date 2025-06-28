import { ReactNode } from "react"
import { Pressable, PressableProps } from "react-native"

type Props = {
  children: ReactNode
} & PressableProps

export default function Button({ children, ...rest }: Props) {
  return <Pressable {...rest}>{children}</Pressable>
}
