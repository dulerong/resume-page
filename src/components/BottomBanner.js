import React from 'react';

class BottomBanner extends React.Component {
    render(){
        return(
        <div className='bottomBanner'>
            <div className='desktop height-100pct'>
                <div className='bottomBannerInfo'>
                    <p>TEL: +(81)90-2754-7666 / E-MAIL: codeydu@hotmail.com</p>
                    <p>COPYRIGHT <i className="fa fa-copyright"></i> 2020 CODEY DU. ABSOLUTELY NO RIGHTS RESERVED.</p>
                    <p>JUST TRYING TO FIND A JOB</p>
                </div>
            </div>
            <div className='mobile height-100pct'>
                <div className='bottomBannerInfo'>
                    <p>TEL: +(81)90-2754-7666</p>
                    <p>E-MAIL: codeydu@hotmail.com</p>
                    <p>COPYRIGHT <i className="fa fa-copyright"></i> 2020 CODEY DU.</p>
                    <p>ABSOLUTELY NO RIGHTS RESERVED.</p>
                    <p>JUST TRYING TO FIND A JOB</p>
                </div>
            </div>
        </div>
        )
    }
}

export default BottomBanner