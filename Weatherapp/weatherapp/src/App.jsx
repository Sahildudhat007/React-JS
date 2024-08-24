import React from 'react';
// css link
import './style/style.css'

// react icon 
import { CloudSun } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { MoveRight } from 'lucide-react';
import { CloudDrizzle } from 'lucide-react';
import { Eye } from 'lucide-react';
import { Sun } from 'lucide-react';
import { Gauge } from 'lucide-react';
import { Wind } from 'lucide-react';
import { Droplets } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Sunrise } from 'lucide-react';
import { Sunset } from 'lucide-react';
import { SunMedium } from 'lucide-react';

function App() {

  let products = ["Apple", "Samsung", "Sony", "Asus", "LG", "hp", "Dell", "lenova"];
  let items = ['FirstItem', 'SecondItem', 'ThirdItem', 'FourthItem', 'FifthItem'];

  return (
    <>
      <center className='container mx-auto px-10 w-[100%] max-w-[50%]'>
        <h1 className='text-3xl font-semibold'>Products List</h1>
        <ul className='border mt-5'>
          {products.map((items) => (
            <li className='border text-lg text-left bg-red-300 text-white py-2 pl-2'>{items}</li>
          ))}
        </ul>
      </center>

      <center>
        <div className='container mx-auto px-10 w-[100%] max-w-[50%]'>
          <h1 className='mb-5 text-2xl font-bold'>Item List</h1>
          <ul className='border bg-slate-400'>
            {items.map((list) => (
              <li className='border py-2 text-white'>{list}</li>
            ))}
          </ul>
        </div>
      </center>
    </>
  )
}

export default App