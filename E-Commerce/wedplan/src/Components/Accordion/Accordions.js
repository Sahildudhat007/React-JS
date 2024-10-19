import React from 'react'
import { useRef, useState } from 'react'
import data from './AccordionsData'

// css
import './accordions.css'

//  accordionitem component
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    const contentHeight = useRef()
    return (
        <div className="wrapper border-b border-gray-200 py-2" >
            <button className={`question-container ${isOpen ? 'active' : ''}`} onClick={onClick} >
                {/* <HiOutlineArrowSmallRight className={`arrow ${isOpen ? 'active' : ''} text-xl mr-3`} /> */}
                <p className='question-content text-xl'>{question}</p>
            </button>

            <div ref={contentHeight} className="answer-container ml-5" style={
                isOpen
                    ? { height: contentHeight.current.scrollHeight }
                    : { height: "0px" }
            }>
                <p className="answer-content py-3 text-md text-stone-700">{answer}</p>
            </div>
        </div>
    )
}

// main Accordion component
const Accordions = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const handleItemClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className='accordion container mx-auto'>
            {data.map((item, index) => (
                <AccordionItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={activeIndex === index}
                    onClick={() => handleItemClick(index)}
                />
            ))}
        </div>
    )
}

export default Accordions
