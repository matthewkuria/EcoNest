"use client";   
import React, { useState } from 'react'
import Stepper from './Stepper'


const steps = [
    { label: 'Basic Info' },
    { label: 'Location' },
    { label: 'Details' },
    { label: 'Photos' },
    { label: 'Finish' },
 ]
const AddPropertiesForm = () => {
    const [ step, setStep ] = useState(0)
  return (
      <div>
          <Stepper items={steps} activeItem={step} setActiveItem={setStep} />
    </div>
  )
}

export default AddPropertiesForm