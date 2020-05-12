import React from 'react'

class ProgrammingBackground extends React.Component {
    render(){
        return(
        <span className='border-1px width-50pct inline-block'>
            <p className='margin-20px font-family-lobster font-size-30px'>Programming Background</p>
            <ul className='margin-20px'>
              <li className='margin-b-10px'>2019/Jun/10: Started studying programming</li>
              <li className='margin-b-10px'>Programming Language: JavaScript</li>
              <li className='margin-b-10px'>Front-End: React.js</li>
              <li className='margin-b-10px'>Back-End: Node.js</li>
              <li className='margin-b-10px'>Graphing Library: Recharts</li>
            </ul>
            <p className='margin-20px font-family-lobster font-size-20px'>Why did Codey start studying Programming?</p>
            <p className='margin-20px'>Codey believes that programming skills will be more in demand as time progresses.</p>
            <p className='margin-20px font-family-lobster font-size-20px'>Other things about Codey?</p>
            <p className='margin-20px'>
                Codey works hard, is very dedicated to his craft, spends a lot of time everyday learning.
                Guaranteed you won't regret hiring Codey!
            </p>
        </span>
        )
    }
}

export default ProgrammingBackground