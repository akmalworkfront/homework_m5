import { Card, Image } from "antd"

export const UserCard = ({ user }) => {
  return (
    
    <Card title={user.name}>
       <Image
        width={200}
        alt={user.name}
        src={user.img}
      />
      <p>Возраст: {user.age}</p>
      <p>Город: {user.city}</p>
    </Card>
  )
}