import React from 'react'
import { Toaster } from 'react-hot-toast'

interface ToastProviderProps {
    children: React.ReactNode
}

const ToastProvider:React.FC<ToastProviderProps> = ({children}) => {
  return (
    <>
        <Toaster />
        {children}
    </>
  )
}

export default ToastProvider 