import React from 'react'
import { useRef, useState } from 'react'
import data from './FaqData'

// css
import './faq.css'

//  faq component
const FaqItem = ({ question, answer, isOpen, onClick }) => {
    const contentHeight = useRef()
    return (
        <div className="wrapper border border-gray-200 p-3 py-1 md:py-2" >
            <button className={`question-container hover:text-teal-600 ${isOpen ? 'active' : ''}`} onClick={onClick} >
                {/* <HiOutlineArrowSmallRight className={`arrow ${isOpen ? 'active' : ''} text-xl mr-3`} /> */}
                <p className='question-content text-xl'>{question}</p>
            </button>

            <div ref={contentHeight} className="answer-container ml-3" style={
                isOpen
                    ? { height: contentHeight.current.scrollHeight }
                    : { height: "0px" }
            }>
                <p className="answer-content py-3 text-md text-stone-700">{answer}</p>
            </div>
        </div>
    )
}

// main faq component
const Accordions = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const handleItemClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className='accordion container mx-auto max-sm-px-1 grid md:grid-cols-1 lg:grid-cols-2 gap-5'>
            {data.map((item, index) => (
                <FaqItem
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
