import React, { Component } from 'react';
import styles from './home.css';
import ListDecorator from '../../component/ListDecorator';
import * as detaData from '../../../mock/detail';

const { detailData, announcement } = detaData;
export default function () {
  return (
    <div className={styles.normal}>
      <ListDecorator
        detailData={detailData}
        announcement={announcement}
      />
    </div>
  );
}
