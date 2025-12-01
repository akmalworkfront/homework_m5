import { Carousel } from "antd"
import { UserCard } from "./UserCard"
const contentStyle = {
  padding: 40,
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#364d79"
};

const sliderSettings = {
  arrows: true,
  infinite: true,
  dotPlacement: "start",
  autoplay: {
    dotDuration: true,
  },
  autoplaySpeed: 2000,
};

export const UserList = ({ users }) => {
  return (
    <Carousel arrows dotPlacement="start" {...sliderSettings}>
      {users.map((user, index) => {
        if (!user.active) return
        return (
          <div key={index}>
            <div style={contentStyle}>
              <UserCard user={user} />
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};
