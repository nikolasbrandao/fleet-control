import React from 'react'
import { ToastContainer, Flip } from 'react-toastify'

const ToastWrapper = () => (
  <ToastContainer
    position='top-center'
    hideProgressBar
    closeOnClick
    transition={Flip}
  />
)

export default ToastWrapper
