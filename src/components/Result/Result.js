import React from 'react';
import style from './Result.module.scss'

const Result = ({ city, temp, wind, clouds, pressure, date }) => {
  return (
    <>
      <div className={style.result_wrapper}>
        <div className={style.result_cityBox}>
          <h2>{city}</h2>
        </div>
        <div className={style.result_infoBox}>
          <div className={style.result_tempBox}>
            <h2>{temp}</h2>
          </div>
          <div className={style.result_dataBox}>
            <div className={style.result_windBox}>
              <h2>{wind ? wind + ' m/s' : null} </h2>
            </div>
            <div className={style.result_pressureBox}>
              <h2>{pressure ? pressure + ' hPa' : null} </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Result;