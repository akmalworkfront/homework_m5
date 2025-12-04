import data from '../../db/data.json'
import { Product } from '../Product/Product'
import { Row, Pagination } from 'antd';
import styles from "./Products.module.sass";

export const Products = () => {
  const { products } = data;
  const { images } = data;

  return (
    
    <div className="container">
      <h2 className="title">Geeks Shop</h2>
      <Row className={styles.products} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>

        {
          products?.map((product) => {
            const RandomCount = Math.floor(Math.random() * images.length)
            const RandomImg = images[RandomCount]
            return <Product key={product.id} product={product} image={RandomImg}/>
          })
        }

      </Row>

      <Pagination className={styles.pagination} align="center" defaultCurrent={1} total={50} />

    </div>

  )
}
