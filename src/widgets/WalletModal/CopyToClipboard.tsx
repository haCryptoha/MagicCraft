import React, { useState } from 'react'

interface Props {
  toCopy: string
}

const CopyToClipboard: React.FC<Props> = ({ toCopy, children, ...props }) => {
  return (
    <button
      type="button"
      onClick={() => {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(toCopy)
        }
      }}
      {...props}
    >
      {children}
    </button>
  )
}

export default CopyToClipboard
