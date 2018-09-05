import styles from './home.css';
import { Carousel } from 'antd';


export default function() {
  return (
    <div className={styles.normal} >
      <Carousel autoplay effect="fade">
    <div><h3><img src={require('../assets/tupian1.jpg')} style={{margin:'auto'}}/></h3></div>
    <div><h3><img src={require('../assets/tupian2.jpg')} style={{margin:'auto'}}/></h3></div>
    <div><h3><img src={require('../assets/tupian3.jpg')} style={{margin:'auto'}}/></h3></div>
    <div><h3><img src={require('../assets/tupian4.jpg')} style={{margin:'auto'}} /></h3></div>
  </Carousel>
  


    </div>
  );
}
