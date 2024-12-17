import { useState, useRef } from 'react'
import propTypes from 'prop-types'

import data from "./AccordionData";

// react icon 
import { HiOutlineArrowSmallRight } from "react-icons/hi2";

// css link
import './accordion.css'

//  accordionitem component
const AccordionItem = ({ question, answer, isOpen, onClick }) => {

    const contentHeight = useRef()

    return (
        <div className="wrapper border-b border-gray-300 py-1" >
            <button className={`question-container ${isOpen ? 'active' : ''} flex justify-between`} onClick={onClick} >
                <p className='question-content text-lg'>{question}</p>
                <HiOutlineArrowSmallRight className={`arrow ${isOpen ? 'active' : ''} text-xl mr-3`} />
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

AccordionItem.propTypes = {
    question: propTypes.string,
    answer: propTypes.string,
    isOpen: propTypes.string,
    onClick: propTypes.string
}

// main Accordion component
const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const handleItemClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <>
            <div className='accordion container mx-auto px-5 md:px-10 mb-[150px]'>
                <div className='mb-6 py-[60px]'>
                    <div className='border-b border-[#0003] pb-4'>
                        <h2 className='text-4xl'>Have Any Questions?</h2>
                    </div>
                </div>
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
        </>
    )
}

export default Accordion
