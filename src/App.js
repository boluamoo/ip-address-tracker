import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import IPDetails from './components/IPDetails'
import Map from './components/Map'

export const IPContext = React.createContext()

export default function App() {
  const [ipAddress, setIPAddress] = useState('')
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then((response) => response.json())
      .then((data) => setIPAddress(data.ip))
      .catch((error) => console.log(error))
  }, [])

  const [apiData, setApiData] = useState(null)
  useEffect(() => {
    if (!ipAddress) return
    const URL = `http://ip-api.com/json/${ipAddress}`
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setApiData(data)
      })
  }, [ipAddress])

  return (
    <IPContext.Provider value={ipAddress}>
      <div className="min-h-screen overflow-hidden flex flex-col">
        <div className="flex flex-col items-center bg-[url('assets/pattern-bg-mobile.png')] sm:bg-[url('assets/pattern-bg-desktop.png')] bg-cover bg-center h-[50svh] gap-8 font-sans px-[5%] max-h-[307px] sm:h-[200px] pt-2 relative">
          <div className="title text-white text-lg">IP Address Tracker</div>
          <div className="ip-input w-full flex max-w-[500px] overflow-hidden rounded-xl h-12">
            <input
              type="text"
              className="w-full py-[5%] outline-none text-[18px] pl-[8%]"
              placeholder={ipAddress}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              id="ipInput"
            ></input>
            <div
              className="w-[15%] bg-black flex justify-center items-center cursor-pointer"
              onClick={() => {
                setIPAddress(inputValue)
              }}
            >
              <MdKeyboardArrowRight style={{ color: 'white' }} size={30} />
            </div>
          </div>
          <IPDetails apiData={apiData} />
        </div>
        <Map apiData={apiData} />
      </div>
    </IPContext.Provider>
  )
}
