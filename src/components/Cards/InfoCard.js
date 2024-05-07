import React from 'react'
import { Card, CardBody } from '@windmill/react-ui'
import VectorImg from '../../assets/img/Vector.png'

function InfoCard({ title, value, children: icon }) {
  const truncateValue = (value) => {
    const maxLength = 10; // Adjust this value as needed
    if (value.length <= maxLength) {
      return value;
    } else {
      const truncatedValue = value.substring(0, maxLength - 3) + '...';
      return truncatedValue;
    }
  }
  return (
    <Card>
      <CardBody className="flex items-center">
        {icon}
        <div className='overflow-hidden'>
          <div className='flex flex-row space-x-3 items-center'>
            <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">{title}</p>
            <p className="mb-2 text-xs font-light text-green-400">+0.02</p>
          </div>
          <div className='flex flex-row  '>
            <p className="text-xs font-light text-gray-600 dark:text-gray-400 overflow-hidden">{value}</p>
          </div>
          <div>
          <img
            aria-hidden="true"
            src={VectorImg}
            alt="Logo"
            className='mt-2 max-w-full'
          ></img>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default InfoCard
