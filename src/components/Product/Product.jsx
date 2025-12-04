import { Card, Col, Button } from 'antd';
import styles from "./Product.module.sass";

const { Meta } = Card;
export const Product = ({ product, image }) => {
  
  const handleClick = (param) => {
    console.log(`ID товара: ${param}`);
  }

  return (
    <Col className="gutter-row" span={6}>
     
        <Card className={styles.productCard}
          hoverable
          cover={
            <img
              draggable={false}
              alt={product.name}
              src={image}
            />
          }
        >
          <Meta className={styles.product__name} title={product.name}/>
          <Button 
            type="primary"
            className={styles.product__btn}
            onClick={() => (handleClick(product.id))}
            >Buy now</Button>
        </Card>
      
    </Col>
  )
}
