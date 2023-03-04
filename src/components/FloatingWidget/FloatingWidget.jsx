import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function FloatingWidget({statusMessage,accountName,phoneNumber}) {

  return (
    <FloatingWhatsApp statusMessage={statusMessage} accountName={accountName} phoneNumber={phoneNumber} />
  )
    
  
}