import React, { useState, useEffect } from 'react'

import CTA from '../components/CTA'
import InfoCard from '../components/Cards/InfoCard'
import ChartCard from '../components/Chart/ChartCard'
import { Doughnut, Line } from 'react-chartjs-2'
import ChartLegend from '../components/Chart/ChartLegend'
import PageTitle from '../components/Typography/PageTitle'
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon } from '../icons'
import RoundIcon from '../components/RoundIcon'
import response from '../utils/demo/tableData'
import InscribeImg from '../assets/img/Inscribe.png'
import StarImg from '../assets/img/star.png'
import PortImg from '../assets/img/portfolio.png'
import CryptoNameImg from '../assets/img/cryptoname.png'
import VectorImg from '../assets/img/Vector1.png'
import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Avatar,
  Badge,
  Pagination,
} from '@windmill/react-ui'

import { Button } from '@windmill/react-ui'

function Dashboard() {
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])

  // pagination setup
  const resultsPerPage = 10
  const totalResults = response.length

  // pagination change control
  function onPageChange(p) {
    setPage(p)
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage))
  }, [page])

  return (
    <>
      <PageTitle>Trending Tokens</PageTitle>

      {/* <!-- Cards --> */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="Inscribe" value="0x1a5fC432B7a61d36cBA3295b5C9d40E124C6A6F7">
          <img src={InscribeImg} alt='Inscribe' className='mr-4'></img>
        </InfoCard>

        <InfoCard title="Inscribe" value="0x1a5fC432B7a61d36cBA3295b5C9d40E124C6A6F7">
          <img src={InscribeImg} alt='Inscribe' className='mr-4'></img>
        </InfoCard>

        <InfoCard title="Inscribe" value="0x1a5fC432B7a61d36cBA3295b5C9d40E124C6A6F7">
          {/* <RoundIcon
            icon={ChatIcon}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          /> */}
          <img src={InscribeImg} alt='Inscribe' className='mr-4'></img>
        </InfoCard>

        <InfoCard title="Inscribe" value="0x1a5fC432B7a61d36cBA3295b5C9d40E124C6A6F7">
          <img src={InscribeImg} alt='Inscribe' className='mr-4'></img>
        </InfoCard>
      </div>


      <div className='flex flex-row bg-[#d5d6d7] items-center'>
        <PageTitle>Top Cryptocurrency Prices</PageTitle>
        <div className='hidden md:flex md:flex-row md:space-x-6 md:ml-auto md:mr-3 md:items-center'>
          <div className='text-xs text-gray-200 flex flex-row items-center space-x-1'><img src={StarImg} alt='starimg' className='w-4 h-4'/><div>WatchList</div></div>
          <div className='text-xs text-gray-200 flex flex-row items-center space-x-1'><img src={PortImg} alt='portimg' className='w-4 h-4'/><div>Portfolio</div></div>
          <div className='text-xs text-gray-200 flex flex-row'>Categories: <div className='flex flex-row ml-4 space-x-2' style={{ color: '#BEBBBB' }}><div>DeFi</div> <div>Tokens</div> <div>NFT</div></div></div>
          <Button>
              Filters
          </Button>
        </div>
      </div>
      <TableContainer className="mb-8">
        <Table>
          <TableHeader>
            <tr>
              <TableCell>#</TableCell>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>PRICE</TableCell>
              <TableCell>CHART</TableCell>
              <TableCell>MARKETCAP</TableCell>
              <TableCell>LAUNCHED</TableCell>
              <TableCell>LIQUIDITY</TableCell>
              <TableCell>30MIN</TableCell>
              <TableCell>1HR</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {/* {data.map((user, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <Avatar className="hidden mr-3 md:block" src={user.avatar} alt="User image" />
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{user.job}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm">$ {user.amount}</span>
                </TableCell>
                <TableCell>
                  <Badge type={user.status}>{user.status}</Badge>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{new Date(user.date).toLocaleDateString()}</span>
                </TableCell>
              </TableRow>
            ))} */}
            <TableRow className="text-xs">
              <TableCell><img src={StarImg} alt='starimg' className='w-4 h-4'/></TableCell>
              <TableCell>1</TableCell>
              <TableCell>
                <div className='flex flex-row space-x-2'>
                  <img src={CryptoNameImg} alt='cryptoimg'></img><span>PePe</span>
                </div> 
              </TableCell>
              <TableCell>
                $0.000001
              </TableCell>
              <TableCell>
                <img src={VectorImg} alt='VectorImg'></img>
              </TableCell>
              <TableCell>
                $240,402,693.11
              </TableCell>
              <TableCell>
                74 days ago
              </TableCell>
              <TableCell>
                <p>$1,804,994</p>
                <p>$5,985,502</p>
              </TableCell>
              <TableCell className="text-red-600">
                -0.06
              </TableCell>
              <TableCell className="text-green-400">
                +0.02
              </TableCell>
            </TableRow>
            <TableRow className="text-xs">
              <TableCell><img src={StarImg} alt='starimg' className='w-4 h-4'/></TableCell>
              <TableCell>1</TableCell>
              <TableCell>
                <div className='flex flex-row space-x-2'>
                  <img src={CryptoNameImg} alt='cryptoimg'></img><span>PePe</span>
                </div> 
              </TableCell>
              <TableCell>
                $0.000001
              </TableCell>
              <TableCell>
                <img src={VectorImg} alt='VectorImg'></img>
              </TableCell>
              <TableCell>
                $240,402,693.11
              </TableCell>
              <TableCell>
                74 days ago
              </TableCell>
              <TableCell>
                <p>$1,804,994</p>
                <p>$5,985,502</p>
              </TableCell>
              <TableCell className="text-red-600">
                -0.06
              </TableCell>
              <TableCell className="text-green-400">
                +0.02
              </TableCell>
            </TableRow>
            <TableRow className="text-xs">
              <TableCell><img src={StarImg} alt='starimg' className='w-4 h-4'/></TableCell>
              <TableCell>1</TableCell>
              <TableCell>
                <div className='flex flex-row space-x-2'>
                  <img src={CryptoNameImg} alt='cryptoimg'></img><span>PePe</span>
                </div> 
              </TableCell>
              <TableCell>
                $0.000001
              </TableCell>
              <TableCell>
                <img src={VectorImg} alt='VectorImg'></img>
              </TableCell>
              <TableCell>
                $240,402,693.11
              </TableCell>
              <TableCell>
                74 days ago
              </TableCell>
              <TableCell>
                <p>$1,804,994</p>
                <p>$5,985,502</p>
              </TableCell>
              <TableCell className="text-red-600">
                -0.06
              </TableCell>
              <TableCell className="text-green-400">
                +0.02
              </TableCell>
            </TableRow>
            <TableRow className="text-xs">
              <TableCell><img src={StarImg} alt='starimg' className='w-4 h-4'/></TableCell>
              <TableCell>1</TableCell>
              <TableCell>
                <div className='flex flex-row space-x-2'>
                  <img src={CryptoNameImg} alt='cryptoimg'></img><span>PePe</span>
                </div> 
              </TableCell>
              <TableCell>
                $0.000001
              </TableCell>
              <TableCell>
                <img src={VectorImg} alt='VectorImg'></img>
              </TableCell>
              <TableCell>
                $240,402,693.11
              </TableCell>
              <TableCell>
                74 days ago
              </TableCell>
              <TableCell>
                <p>$1,804,994</p>
                <p>$5,985,502</p>
              </TableCell>
              <TableCell className="text-red-600">
                -0.06
              </TableCell>
              <TableCell className="text-green-400">
                +0.02
              </TableCell>
            </TableRow>
            <TableRow className="text-xs">
              <TableCell><img src={StarImg} alt='starimg' className='w-4 h-4'/></TableCell>
              <TableCell>1</TableCell>
              <TableCell>
                <div className='flex flex-row space-x-2'>
                  <img src={CryptoNameImg} alt='cryptoimg'></img><span>PePe</span>
                </div> 
              </TableCell>
              <TableCell>
                $0.000001
              </TableCell>
              <TableCell>
                <img src={VectorImg} alt='VectorImg'></img>
              </TableCell>
              <TableCell>
                $240,402,693.11
              </TableCell>
              <TableCell>
                74 days ago
              </TableCell>
              <TableCell>
                <p>$1,804,994</p>
                <p>$5,985,502</p>
              </TableCell>
              <TableCell className="text-red-600">
                -0.06
              </TableCell>
              <TableCell className="text-green-400">
                +0.02
              </TableCell>
            </TableRow>
            <TableRow className="text-xs">
              <TableCell><img src={StarImg} alt='starimg' className='w-4 h-4'/></TableCell>
              <TableCell>1</TableCell>
              <TableCell>
                <div className='flex flex-row space-x-2'>
                  <img src={CryptoNameImg} alt='cryptoimg'></img><span>PePe</span>
                </div> 
              </TableCell>
              <TableCell>
                $0.000001
              </TableCell>
              <TableCell>
                <img src={VectorImg} alt='VectorImg'></img>
              </TableCell>
              <TableCell>
                $240,402,693.11
              </TableCell>
              <TableCell>
                74 days ago
              </TableCell>
              <TableCell>
                <p>$1,804,994</p>
                <p>$5,985,502</p>
              </TableCell>
              <TableCell className="text-red-600">
                -0.06
              </TableCell>
              <TableCell className="text-green-400">
                +0.02
              </TableCell>
            </TableRow>
            <TableRow className="text-xs">
              <TableCell><img src={StarImg} alt='starimg' className='w-4 h-4'/></TableCell>
              <TableCell>1</TableCell>
              <TableCell>
                <div className='flex flex-row space-x-2'>
                  <img src={CryptoNameImg} alt='cryptoimg'></img><span>PePe</span>
                </div> 
              </TableCell>
              <TableCell>
                $0.000001
              </TableCell>
              <TableCell>
                <img src={VectorImg} alt='VectorImg'></img>
              </TableCell>
              <TableCell>
                $240,402,693.11
              </TableCell>
              <TableCell>
                74 days ago
              </TableCell>
              <TableCell>
                <p>$1,804,994</p>
                <p>$5,985,502</p>
              </TableCell>
              <TableCell className="text-red-600">
                -0.06
              </TableCell>
              <TableCell className="text-green-400">
                +0.02
              </TableCell>
            </TableRow>
            <TableRow className="text-xs">
              <TableCell><img src={StarImg} alt='starimg' className='w-4 h-4'/></TableCell>
              <TableCell>1</TableCell>
              <TableCell>
                <div className='flex flex-row space-x-2'>
                  <img src={CryptoNameImg} alt='cryptoimg'></img><span>PePe</span>
                </div> 
              </TableCell>
              <TableCell>
                $0.000001
              </TableCell>
              <TableCell>
                <img src={VectorImg} alt='VectorImg'></img>
              </TableCell>
              <TableCell>
                $240,402,693.11
              </TableCell>
              <TableCell>
                74 days ago
              </TableCell>
              <TableCell>
                <p>$1,804,994</p>
                <p>$5,985,502</p>
              </TableCell>
              <TableCell className="text-red-600">
                -0.06
              </TableCell>
              <TableCell className="text-green-400">
                +0.02
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            label="Table navigation"
            onChange={onPageChange}
          />
        </TableFooter>
      </TableContainer>
{/* 
      <PageTitle>Charts</PageTitle>
      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <ChartCard title="Revenue">
          <Doughnut {...doughnutOptions} />
          <ChartLegend legends={doughnutLegends} />
        </ChartCard>

        <ChartCard title="Traffic">
          <Line {...lineOptions} />
          <ChartLegend legends={lineLegends} />
        </ChartCard>
      </div> */}
    </>
  )
}

export default Dashboard
