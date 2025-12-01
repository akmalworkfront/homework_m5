import { UserList } from "./components/UserList"
const array = [
  {
    name: "Oliver Thompson",
    age: 26,
    city: "London, UK",
    active: true,
    img: "https://i.pravatar.cc/200?img=15"
  },
  {
    name: "Liam Anderson",
    age: 34,
    city: "Toronto, Canada",
    active: false,
    img: "https://i.pravatar.cc/200?img=52"
  },
  {
    name: "Ethan Carter",
    age: 29,
    city: "New York, USA",
    active: true,
    img: "https://i.pravatar.cc/200?img=32"
  },
  {
    name: "Mateo Fernandez",
    age: 24,
    city: "Madrid, Spain",
    active: true,
    img: "https://i.pravatar.cc/200?img=44"
  },
  {
    name: "Luca Romano",
    age: 31,
    city: "Rome, Italy",
    active: false,
    img: "https://i.pravatar.cc/200?img=56"
  },
  {
    name: "Hans Müller",
    age: 37,
    city: "Berlin, Germany",
    active: true,
    img: "https://i.pravatar.cc/200?img=70"
  },
  {
    name: "Satoshi Nakamura",
    age: 30,
    city: "Tokyo, Japan",
    active: true,
    img: "https://i.pravatar.cc/200?img=12"
  },
  {
    name: "Chen Wei",
    age: 27,
    city: "Shanghai, China",
    active: false,
    img: "https://i.pravatar.cc/200?img=60"
  }
];

function App() {
  return (
    <div className="container">
      <UserList users={array} />
    </div>
  )
}

export default App