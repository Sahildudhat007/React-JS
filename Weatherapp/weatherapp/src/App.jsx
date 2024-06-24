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

  return (
    <main>
      <div className='main-container'>
        <div className='weatherapp'>
          <div className='weather-loc-box p-3 gap-2 flex justify-between'>
            <div className='weather-location w-full p-6'>
              <div className='flex justify-between'>
                <h1 className='text-4xl flex font-semibold'>18&#176; <p className='flex flex-col ml-1'><span className='text-sm'>C</span><span className='text-sm'>F</span></p></h1>
                <p className='flex flex-col items-center'><CloudSun />Haze</p>
              </div>
              <div className='state'>
                <h2 className='text-3xl mt-2'>Los Angeles</h2>
                <p className='mb-6'>CA, United States</p>
                <p className='text-xs flex items-center'><MapPin size={12} strokeWidth={1} className='mr-1' /> Change Location</p>
              </div>
            </div>
            <div className='weather-time p-6 text-right w-full h-32'>
              <div className='mb-3'>
                <h1 className='text-2xl'>06:15PM</h1>
                <p className='text-xs'>Thursday, 19 Aug 2021</p>
              </div>
              <ul className='flex items-center justify-end'>
                <li className=''>
                  <a href="#" className='text-xs'>EST</a>
                </li>
                <li className='ml-4'>
                  <a href="#" className='text-xs'>GMT</a>
                </li>
                <li className='ml-4'>
                  <a href="#" className='text-xs'>IST</a>
                </li>
                <li className='ml-4'>
                  <a href="#" className='text-xs'>PDT</a>
                </li>
                <li className='ml-4'>
                  <a href="#" className='text-xs'>JST</a>
                </li>
                <li className='ml-4'>
                  <MoveRight size={20} strokeWidth={1} />
                </li>
              </ul>
            </div>
          </div>
          <div className='forecast-conainer p-3 flex justify-center gap-2'>
            <div className='forecast p-4'>
              <ul className='flex justify-between pb-3 mb-3 border-b'>
                <li>
                  <a href="#">Today's Forecast</a>
                </li>
                <li>
                  <a href="#">Today's Forecast</a>
                </li>
                <li>
                  <a href="#">Today's Forecast</a>
                </li>
              </ul>
              <div className='flex flex-wrap'>
                <div className='px-2'>
                  <p className='flex items-center mb-3'>
                    <CloudDrizzle size={22} strokeWidth={1} />
                    <span className='ml-5'>Humidity</span>
                    <span className='ml-10'>83%</span>
                  </p>
                  <p className='flex items-center mb-3'>
                    <Eye size={22} strokeWidth={1} />
                    <span className='ml-5'>Visibility</span>
                    <span className='ml-11'>Unlimited</span>
                  </p>
                  <p className='flex items-center mb-3'>
                    <Sun size={22} strokeWidth={1} />
                    <span className='ml-5'>UV Index</span>
                    <span className='ml-10'>0 of 10</span>
                  </p>
                </div>
                <div className='px-2'>
                  <p className='flex items-center mb-3'>
                    <Gauge size={22} strokeWidth={1} />
                    <span className='ml-5'>Pressure</span>
                    <span className='ml-11'>1011.9 mb</span>
                  </p>
                  <p className='flex items-center mb-3'>
                    <Wind size={22} strokeWidth={1} />
                    <span className='ml-5'>Visibility</span>
                    <span className='ml-11'>3 km/h</span>
                  </p>
                  <p className='flex items-center mb-3'>
                    <Droplets size={22} strokeWidth={1} />
                    <span className='ml-5'>UV Index</span>
                    <span className='ml-10'>16&#176;</span>
                  </p>
                </div>
              </div>
            </div>
            <div className='setting p-5'>
              <div className='flex justify-between'>
                <p>Today's</p>
                <Settings size={22} strokeWidth={1} />
              </div>
              <div>
                <ul className='flex flex-wrap justify-center py-5 px-5 gap-2'>
                  <li className='today flex flex-col items-center p-4 w-[100px]'>
                    {/* <a href="#"> */}
                    <Sunrise />
                    <p className='py-2'>Morning</p>
                    <h2>24&#176;c</h2>
                    {/* </a> */}
                  </li>
                  <li className='today flex flex-col items-center p-4 w-[100px]'>
                    {/* <a href="#"> */}
                    <SunMedium />
                    <p className='py-2'>Afternoon</p>
                    <h2>26&#176;c</h2>
                    {/* </a> */}
                  </li>
                  <li className='today flex flex-col items-center p-4 w-[100px]'>
                    {/* <a href="#"> */}
                    <Sunset />
                    <p className='py-2'>Evening</p>
                    <h2>18&#176;c</h2>
                    {/* </a> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App