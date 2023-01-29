import React, { PropsWithChildren } from 'react'
import clsx from 'clsx'

const Glasspane = ({
  children,
  classname
}: PropsWithChildren<{
  classname: string
}>) => {
  return (
    <div
      className={clsx(
        'glass rounded-2xl border-solid border-2 border-gray-200',
        classname
      )}
    >
      {children}
    </div>
  )
}

export default Glasspane
