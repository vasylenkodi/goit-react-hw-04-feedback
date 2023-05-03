import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import css from './statistics.module.css';

export default function Statistics({ data, stats }) {

  const dataPairs = [];

  for (let i = 0; i < data.length; i+= 1) {
    dataPairs.push(`${stats[i]}: ${data[i]}`);
  }

    return (
      <ul className={css.statisticsList}>
        {dataPairs.map(dataPair => {
          return (
            <li className={css.statisticsListItem} key={shortid.generate()}>
              {dataPair}
            </li>
          );
        })}
      </ul>
    );
}

Statistics.propTypes = {
    data: PropTypes.array,
    stats: PropTypes.arrayOf(PropTypes.string),
  };

