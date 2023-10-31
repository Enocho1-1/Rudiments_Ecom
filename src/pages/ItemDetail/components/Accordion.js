import { useState } from "react"

export const Accordion = () => {
    const [show, setShow] = useState(false)
  return (
            <div>
                        <h2 id="accordion-flush-heading-1">
                            <button onClick={() => setShow(!show)} type="button" className="text-lg flex items-center justify-between max-tablet:justify-center w-full py-2 font-medium text-gray-500 border-b border-gray-200" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
                            <span className="text-xl font-Inconsolata text-slate-900">Product Detail</span>
                            { show ? (
                            <svg data-accordion-icon className="rotate-180 w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>) : (<svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>)}
                            </button>
                        </h2>   
                        { show && 
                            <div id="accordion-flush-body-1" className="" aria-labelledby="accordion-flush-heading-1">
                                <div className="py-2 border-b border-gray-200 dark:border-gray-700">
                                    <p className="font-Inconsolata text-lg mb-2 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, assumenda? Ullam veniam nihil reiciendis, totam eos ex quisquam animi nisi esse doloremque, qui quam adipisci maxime, corporis fuga odit! Expedita!</p>
                                </div>
                            </div> 
                        }                
                                        
                </div> 
  )
}
