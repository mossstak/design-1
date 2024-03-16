import { useState, useEffect } from 'react'

const Card = () => {
  const [card, setCard] = useState([])

  useEffect(() => {
    fetch('./data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((myJson) => {
        setCard(myJson.Data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [])

  return (
    <div className="box-border m-0 p-0">
      {/* Card Layout */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {card.map((data) => (
          <div
            key={data.id}
            className="w-[300px] h-[300px] bg-gray-300 p-3 rounded-xl"
          >
            <h1 className="text-center text-3xl">{data.name}</h1>
            <p className="text-center">{data.subtext}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card
