import React from 'react'
import { useRef, useState } from 'react'
import data from './AccordionData';

// react icon 
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { HiArrowLongRight } from "react-icons/hi2";


// css link
import './accordion.css'

//  accordionitem component
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    const contentHeight = useRef()
    return (
        <div className="wrapper border-t border-black py-1" >
            <button className={`question-container ${isOpen ? 'active' : ''}`} onClick={onClick} >
                <HiOutlineArrowSmallRight className={`arrow ${isOpen ? 'active' : ''} text-xl mr-3`} />
                <p className='question-content text-lg'>{question}</p>
            </button>

            <div ref={contentHeight} className="answer-container ml-11" style={
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
const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const handleItemClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className='accordion container mx-auto max-sm-px-1'>
            {data.map((item, index) => (
                <AccordionItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={activeIndex === index}
                    onClick={() => handleItemClick(index)}
                />
            ))}
            <div className='mt-8'>
                <button className='exp-btn text-xs flex items-center'>Explore Collection <HiArrowLongRight className='text-lg mt-1 ml-1' /> </button>
            </div>
        </div>
    )
}

export default Accordion;