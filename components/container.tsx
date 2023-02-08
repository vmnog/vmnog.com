type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="sm:container mx-auto px-5">{children}</div>
}

export default Container
