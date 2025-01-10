import React from 'react'

interface StepperProps { 
    items: { label: string }[];
    activeItem: number;
    setActiveItem: (index: number) => void;
    className?: string;
}

const Stepper = (props:StepperProps) => {
  return (
      <div>
          {props.items.map((item, index) => (
              <>
                  <div>{index + 1}</div>
                  <p className="">{ item.label}</p>
              </>
          ))}
    </div>
  )
}

export default Stepper