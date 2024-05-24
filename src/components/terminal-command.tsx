interface TerminalCommandProps {
  directory: string
  command: string
  output: string
}

export function TerminalCommand({
  directory,
  command,
  output
}: TerminalCommandProps) {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='hidden items-center gap-1 text-green-600 font-medium sm:text-2xl lg:text-4xl sm:flex'>
        vmnog@desktop
        <span className='text-primary font-medium'>:</span>
        <span className='text-blue-600 font-medium'>~/{directory}</span>
        <span className='text-primary font-medium'>$</span>
        <span className='text-primary font-medium'>{command}</span>
      </h1>
      <h2 className='text-4xl sm:text-5xl text-primary'>
        {output}&nbsp;
        <span className='text-primary animate-blink font-medium'>_</span>
      </h2>
    </div>
  )
}
