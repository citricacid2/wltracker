import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { useState } from 'react'
import { Line } from 'react-chartjs-2'


export default function Home() {
  const [data, setData] = useState([
    {weight: 100, year: 2020, month: 10, day: 7},
    {weight: 99, year: 2020, month: 10, day: 7},
    {weight: 98, year: 2020, month: 10, day: 7},
    {weight: 102, year: 2020, month: 10, day: 7},

  ])


  return (
    <div className='p-5'>
      <h1 className='title has-text-white'>
        Tracker
      </h1>
      <div className="columns">
        <div className="column is-half is-full-mobile">
          <div className="box">
            <table className="table is-hoverable is-fullwidth">
              <thead>
                <tr>
                  <th>Change</th>
                  <th>Total Change</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => {
                  const change = index ? item.weight - data[index-1].weight : item.weight - data[0].weight
                  return (
                    <tr key={index}>
                      <td>
                        <div className="tags has-addons">
                          <span className="tag">
                            {change}
                          </span>
                          {
                            change > 0 &&
                            <span className='tag is-danger'>
                              lbs
                            </span>
                          }
                          {
                            change <= 0 &&
                            <span className='tag is-success'>
                              lbs
                            </span>
                          }
                        </div>
                      </td>
                      <td>
                        <div className="tags has-addons">
                          <span className="tag">
                            {item.weight - data[0].weight}
                          </span>
                          {
                            change > 0 &&
                            <span className='tag is-danger'>
                              lbs
                            </span>
                          }
                          {
                            change <= 0 &&
                            <span className='tag is-success'>
                              lbs
                            </span>
                          }
                        </div>
                      </td>
                      <td>{item.month}/{item.day}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="column is-half is-full-mobile">
          <div className="box">
            <h2 className="subtitle">Chart</h2>
            <Line data={{
              labels: data.map(item => item.month + '/' + item.day),
              datasets: [
                {
                  label: 'Weight',
                  data: data.map(item => item.weight - data[0].weight),
                }
              ]
            }}/>
          </div>
        </div>
      </div>
    </div>
  )
}
