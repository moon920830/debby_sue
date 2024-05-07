import React , { useState } from 'react'

import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'
import InfoCard from '../components/Cards/InfoCard'
import { Card, CardBody } from '@windmill/react-ui'
import { CartIcon, ChatIcon, MoneyIcon, PeopleIcon } from '../icons'
import RoundIcon from '../components/RoundIcon'
import AegisImg from '../assets/img/Aegis.png'
import QuestionImg from '../assets/img/quesqtiontag.png'
import StarImg from '../assets/img/star2.png'
import FinanceImg from '../assets/img/financeChart.png'
import {
  SearchIcon,
} from '../icons'
import { Input } from '@windmill/react-ui'
import {
  doughnutLegends,
  doughnutOptions,
} from '../utils/demo/chartsData'
import ChartCard from '../components/Chart/ChartCard'
import { Doughnut,} from 'react-chartjs-2'
import ChartLegend from '../components/Chart/ChartLegend'
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
import InscribeImg from '../assets/img/Inscribe.png'
import StarImg1 from '../assets/img/star.png'
import PortImg from '../assets/img/portfolio.png'
import CryptoNameImg from '../assets/img/cryptoname.png'
import VectorImg from '../assets/img/Vector1.png'
import { Button } from '@windmill/react-ui'
import response from '../utils/demo/tableData'

function Forms() {
  const [page, setPage] = useState(1)
  const totalResults = response.length
  const resultsPerPage = 10
  function onPageChange(p) {
    setPage(p)
  }
  return (
    <>
       <div className="grid gap-6 mb-8 md:grid-cols-10 mt-6">
        <Card className="md:col-span-6">
          <CardBody>
           <div className='grid gap-6 mb-8 lg:grid-cols-2'>
            <div className='flex flex-col space-y-4'>
              <div className='flex flex-row space-x-3 items-center'>
                <img src={AegisImg} alt='Aegis'></img>
                <div className=' text-white text-2xl'>Aegis Ai<span className=' text-gray-400 text-xl ml-2'>(AEGIS)</span></div>
              </div>
              <p className='text-sm text-gray-400'>Pioneering blockchain security with ai-enabled audit solutions. Our mission is to democratize smart contract security, empowering individuals and businesses, regardless of their technical expertise, to ensure the integrity and reliability of blockchain transactions.</p>
            </div>
            <div className='flex flex-col space-y-4'>
              <div className=' text-white text-2xl mt-2'>Aegis Ai Price<span className=' text-gray-400 text-xl ml-2'>(AEGIS)</span></div>
              <div className='flex flex-row'>
                <p className=' text-4xl text-green-400'>$0.1472</p>
                <p className=' border-green-400 px-3 py-2 m-auto text-green-400 border-2 rounded text-base'>26.54</p>
              </div>
              <div className='flex flex-row text-gray-400 text-xs space-x-1 overflow-hidden'>
                <p>AEGIS:</p><p>0x1a5fC432B7a61d36cBA3295b5C9d40E124C6A6F7</p>
              </div>
              <div className='flex flex-row text-gray-400 text-xs space-x-1 overflow-hidden'>
                <p>Paris:</p><p>0x1a5fC432B7a61d36cBA3295b5C9d40E124C6A6F7</p>
              </div>
            </div>
           </div>
           <div className='grid gap-6 mb-8 lg:grid-cols-2'>
            <div className='flex flex-col space-y-2 text-base text-gray-400'>
              <div className='flex flex-row'>
                <p className='flex flex-row items-center space-x-1'><p>Total Supply</p><img src={QuestionImg} alt="question tag" className='w-2 h-2'></img></p>
                <p className='ml-auto'>$100M</p>
              </div>
              <div className='flex flex-row'>
                <p className='flex flex-row items-center space-x-1'><p>LP Holder(s)</p><img src={QuestionImg} alt="question tag" className='w-2 h-2'></img></p>
                <p className='ml-auto'>$5M</p>
              </div>
              <div className='flex flex-row'>
                <p className='flex flex-row items-center space-x-1'><p>Opensource</p><img src={QuestionImg} alt="question tag" className='w-2 h-2'></img></p>
                <p className='ml-auto'>Yes</p>
              </div>
              <div className='flex flex-row'>
                <p className='flex flex-row items-center space-x-1'><p>Total Supply</p><img src={QuestionImg} alt="question tag" className='w-2 h-2'></img></p>
                <p className='ml-auto'>No</p>
              </div>
              <div className='flex flex-row'>
                <p className='flex flex-row items-center space-x-1'><p>Anti-whale</p><img src={QuestionImg} alt="question tag" className='w-2 h-2'></img></p>
                <p className='ml-auto'>Yes</p>
              </div>
              <div className='flex flex-row'>
                <p className='flex flex-row items-center space-x-1'><p>Ownership Renounced</p><img src={QuestionImg} alt="question tag" className='w-2 h-2'></img></p>
                <p className='ml-auto'>No</p>
              </div>
              <div className='flex flex-row'>
                <p className='flex flex-row items-center space-x-1'><p>Mintable</p><img src={QuestionImg} alt="question tag" className='w-2 h-2'></img></p>
                <p className='ml-auto'>Yes</p>
              </div>
              <div className='flex flex-row'>
                <p className='flex flex-row items-center space-x-1'><p>Blacklist</p><img src={QuestionImg} alt="question tag" className='w-2 h-2'></img></p>
                <p className='ml-auto'>No</p>
              </div>
            </div>
            <div className='flex flex-col space-y-2 text-base text-gray-400'>
              <div className='grid gap-6 mb-8 lg:grid-cols-2'>
                <div className='flex flex-col'>
                  <p className='flex flex-row items-center space-x-1'><p>Market Cap</p><img src={QuestionImg} alt="question tag" className='w-2 h-2'></img></p>
                  <p className='text-white text-xl'>$14.7M</p>
                </div>
                <div className='flex flex-col'>
                  <p className='flex flex-row items-center space-x-1'><p>Token Age</p><img src={QuestionImg} alt="question tag" className='w-2 h-2'></img></p>
                  <p className='text-white text-xl'>4M</p>
                </div>
              </div>
              <div className='grid gap-6 mb-8 lg:grid-cols-2'>
                <div className='fklex flex-col'>
                  <p className='flex flex-row items-center space-x-1'><p>Liquidity</p><img src={QuestionImg} alt="question tag" className='w-2 h-2'></img></p>
                  <p className='text-white text-xl'>$1.2M</p>
                </div>
                <div className='flex flex-col'>
                  <p className='flex flex-row items-center space-x-1'><p>Vol 24H</p><img src={QuestionImg} alt="question tag" className='w-2 h-2'></img></p>
                  <p className='text-white text-xl'>$156.4</p>
                </div>
              </div>
            </div>
           </div>
          </CardBody>
        </Card>

        <Card className="md:col-span-4">
          <CardBody>
            <div className='flex flex-col'>
              <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
                <div className="absolute inset-y-0 flex items-center pr-2 right-0">
                  <SearchIcon className="w-6 h-6" aria-hidden="true" />
                </div>
                <Input
                  className="pr-8 text-gray-700 py-4"
                  placeholder="Search Token here..."
                  aria-label="Search"
                />
              </div>
              <div className='flex justify-between text-base text-gray-400 mt-10 mx-1'>
                <div className='flex flex-row items-center space-x-3'><img src={StarImg} alt="startimg" className='w-4 h-4'></img><p>UniSwap</p></div>
                <div>Wallet Name</div>
                <div>Wallet Name</div>
              </div>
              <div className='flex flex-row mx-1 text-base text-gray-400 mt-10 items-center mb-4'>
                <img src={StarImg} alt="startimg" className='w-4 h-4'></img>
                <p className='ml-8'>UniSwapV2 AEGIS/ETH</p>
                <p className='ml-auto'>3.81M</p>             
              </div>
              <div className=' bg-gray-400 h-px w-full'></div>
              <div className='flex flex-row mx-1 text-base text-gray-400 mt-10 items-center mb-4'>
                <img src={StarImg} alt="startimg" className='w-4 h-4'></img>
                <p className='ml-8'>UniSwapV2 AEGIS/ETH</p>
                <p className='ml-auto'>3.81M</p>             
              </div>
              <div className=' bg-gray-400 h-px w-full'></div>
              <div className='flex flex-row mx-1 text-base text-gray-400 mt-10 items-center mb-4'>
                <img src={StarImg} alt="startimg" className='w-4 h-4'></img>
                <p className='ml-8'>UniSwapV2 AEGIS/ETH</p>
                <p className='ml-auto'>3.81M</p>             
              </div>
              <div className=' bg-gray-400 h-px w-full'></div>
              <div className='flex flex-row mx-1 text-base text-gray-400 mt-10 items-center mb-4'>
                <img src={StarImg} alt="startimg" className='w-4 h-4'></img>
                <p className='ml-8'>UniSwapV2 AEGIS/ETH</p>
                <p className='ml-auto'>3.81M</p>             
              </div>
              <div className=' bg-gray-400 h-px w-full'></div>
              <div className='flex flex-row mx-1 text-base text-gray-400 mt-10 items-center'>
                <img src={StarImg} alt="startimg" className='w-4 h-4'></img>
                <p className='ml-8'>UniSwapV2 AEGIS/ETH</p>
                <p className='ml-auto'>3.81M</p>             
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <img src={FinanceImg} alt="finance" className='mb-6'></img>
      <div className='grid gap-6 mb-8 md:grid-cols-10 mt-6'>
        <Card className="md:col-span-3">
          <CardBody>
            <div className=' text-white text-2xl'>Safety Overviews</div>
            <ChartCard title="">
              <Doughnut {...doughnutOptions} />
              <ChartLegend legends={doughnutLegends} />
            </ChartCard>
            <div className='flex flex-row'>
              <div className='w-4 h-4 bg-blue-600 rounded-full mt-3'></div>
              <div className='flex flex-col ml-2'>
                <p className='text-2xl text-blue-600'>Security</p>
                <p className='text-base text-gray-400'>No suspicous activity</p>
              </div>
              <div className='text-2xl text-blue-600 ml-auto'>90%</div>
            </div>
            <div className='flex flex-row'>
              <div className='w-4 h-4 bg-green-600 rounded-full mt-3'></div>
              <div className='flex flex-col ml-2'>
                <p className='text-2xl text-green-600'>Governance</p>
                <p className='text-base text-gray-400'>Sufficienty decentralized</p>
              </div>
              <div className='text-2xl text-green-600 ml-auto'>56%</div>
            </div>
            <div className='flex flex-row'>
              <div className='w-4 h-4 bg-red-600 rounded-full mt-3'></div>
              <div className='flex flex-col ml-2'>
                <p className='text-2xl text-red-600'>Community</p>
                <p className='text-base text-gray-400'>Very active community</p>
              </div>
              <div className='text-2xl text-red-600 ml-auto'>67%</div>
            </div>
            <div className='flex flex-row'>
              <div className='w-4 h-4 bg-purple-600 rounded-full mt-3'></div>
              <div className='flex flex-col ml-2'>
                <p className='text-2xl text-purple-600'>Market</p>
                <p className='text-base text-gray-400'>Active Trading</p>
              </div>
              <div className='text-2xl text-purple-600 ml-auto'>23%</div>
            </div>
          </CardBody>
        </Card>
        <Card className="md:col-span-7">
          <CardBody>
          <div className='flex flex-row bg-[#d5d6d7] items-center'>
              <div className=' text-white text-2xl'>Safety Overviews</div>
              <div className='hidden md:flex md:flex-row md:space-x-6 md:ml-auto md:mr-3 md:items-center'>
                <div className='text-xs text-gray-200 flex flex-row'>Categories: <div className='flex flex-row ml-4 space-x-2' style={{ color: '#BEBBBB' }}><div>DeFi</div> <div>Tokens</div> <div>NFT</div></div></div>
                <Button>
                    Filters
                </Button>
              </div>
            </div>
            <TableContainer className="mb-8 mt-8">
              <Table>
                <TableHeader>
                  <tr>
                    <TableCell>#</TableCell>
                    <TableCell>#</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>TIme</TableCell>
                  </tr>
                </TableHeader>
                <TableBody>
                  <TableRow className="text-xs">
                    <TableCell><img src={StarImg} alt='starimg' className='w-4 h-4'/></TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>
                      <div className='flex flex-row space-x-2 items-center'>
                        <img src={CryptoNameImg} alt='cryptoimg'></img><span>PePe</span>
                      </div> 
                    </TableCell>
                    <TableCell>
                      0X4efgh..djd
                    </TableCell>
                    <TableCell>
                      $216.05
                    </TableCell>
                    <TableCell className="text-green-400">
                      0.17764
                    </TableCell>
                    <TableCell>
                      4days
                    </TableCell>
                  </TableRow>
                  <TableRow className="text-xs">
                    <TableCell><img src={StarImg} alt='starimg' className='w-4 h-4'/></TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>
                      <div className='flex flex-row space-x-2 items-center'>
                        <img src={CryptoNameImg} alt='cryptoimg'></img><span>PePe</span>
                      </div> 
                    </TableCell>
                    <TableCell>
                      0X4efgh..djd
                    </TableCell>
                    <TableCell>
                      $216.05
                    </TableCell>
                    <TableCell className="text-green-400">
                      0.17764
                    </TableCell>
                    <TableCell>
                      4days
                    </TableCell>
                  </TableRow>
                  <TableRow className="text-xs">
                    <TableCell><img src={StarImg} alt='starimg' className='w-4 h-4'/></TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>
                      <div className='flex flex-row space-x-2 items-center'>
                        <img src={CryptoNameImg} alt='cryptoimg'></img><span>PePe</span>
                      </div> 
                    </TableCell>
                    <TableCell>
                      0X4efgh..djd
                    </TableCell>
                    <TableCell>
                      $216.05
                    </TableCell>
                    <TableCell className="text-green-400">
                      0.17764
                    </TableCell>
                    <TableCell>
                      4days
                    </TableCell>
                  </TableRow>
                  <TableRow className="text-xs">
                    <TableCell><img src={StarImg} alt='starimg' className='w-4 h-4'/></TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>
                      <div className='flex flex-row space-x-2 items-center'>
                        <img src={CryptoNameImg} alt='cryptoimg'></img><span>PePe</span>
                      </div> 
                    </TableCell>
                    <TableCell>
                      0X4efgh..djd
                    </TableCell>
                    <TableCell>
                      $216.05
                    </TableCell>
                    <TableCell className="text-green-400">
                      0.17764
                    </TableCell>
                    <TableCell>
                      4days
                    </TableCell>
                  </TableRow>
                  <TableRow className="text-xs">
                    <TableCell><img src={StarImg} alt='starimg' className='w-4 h-4'/></TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>
                      <div className='flex flex-row space-x-2 items-center'>
                        <img src={CryptoNameImg} alt='cryptoimg'></img><span>PePe</span>
                      </div> 
                    </TableCell>
                    <TableCell>
                      0X4efgh..djd
                    </TableCell>
                    <TableCell>
                      $216.05
                    </TableCell>
                    <TableCell className="text-green-400">
                      0.17764
                    </TableCell>
                    <TableCell>
                      4days
                    </TableCell>
                  </TableRow>
                  <TableRow className="text-xs">
                    <TableCell><img src={StarImg} alt='starimg' className='w-4 h-4'/></TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>
                      <div className='flex flex-row space-x-2 items-center'>
                        <img src={CryptoNameImg} alt='cryptoimg'></img><span>PePe</span>
                      </div> 
                    </TableCell>
                    <TableCell>
                      0X4efgh..djd
                    </TableCell>
                    <TableCell>
                      $216.05
                    </TableCell>
                    <TableCell className="text-green-400">
                      0.17764
                    </TableCell>
                    <TableCell>
                      4days
                    </TableCell>
                  </TableRow>
                  <TableRow className="text-xs">
                    <TableCell><img src={StarImg} alt='starimg' className='w-4 h-4'/></TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>
                      <div className='flex flex-row space-x-2 items-center'>
                        <img src={CryptoNameImg} alt='cryptoimg'></img><span>PePe</span>
                      </div> 
                    </TableCell>
                    <TableCell>
                      0X4efgh..djd
                    </TableCell>
                    <TableCell>
                      $216.05
                    </TableCell>
                    <TableCell className="text-green-400">
                      0.17764
                    </TableCell>
                    <TableCell>
                      4days
                    </TableCell>
                  </TableRow>
                  <TableRow className="text-xs">
                    <TableCell><img src={StarImg} alt='starimg' className='w-4 h-4'/></TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>
                      <div className='flex flex-row space-x-2 items-center'>
                        <img src={CryptoNameImg} alt='cryptoimg'></img><span>PePe</span>
                      </div> 
                    </TableCell>
                    <TableCell>
                      0X4efgh..djd
                    </TableCell>
                    <TableCell>
                      $216.05
                    </TableCell>
                    <TableCell className="text-green-400">
                      0.17764
                    </TableCell>
                    <TableCell>
                      4days
                    </TableCell>
                  </TableRow>
                  <TableRow className="text-xs">
                    <TableCell><img src={StarImg} alt='starimg' className='w-4 h-4'/></TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>
                      <div className='flex flex-row space-x-2 items-center'>
                        <img src={CryptoNameImg} alt='cryptoimg'></img><span>PePe</span>
                      </div> 
                    </TableCell>
                    <TableCell>
                      0X4efgh..djd
                    </TableCell>
                    <TableCell>
                      $216.05
                    </TableCell>
                    <TableCell className="text-green-400">
                      0.17764
                    </TableCell>
                    <TableCell>
                      4days
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
          </CardBody>
        </Card>
      </div>
    </>
  )
}

export default Forms
