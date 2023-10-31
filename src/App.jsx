import './App.css'
function App() {
  const data = [{
    name: "Leo",
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/et00351731-vbtpleamzc-landscape.jpg",
    rating: 90,
  },
  {
    name: "Vikaram",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSIca-ZrQJr9RPEQCqxZ8VYlblQlc2jBoH7g&usqp=CAU",
    rating: 95,
  },
   {
    name: "Kaithi",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTirX1vvsKXdLznn6_05AxNdFNzb0y_u34gGQ&usqp=CAU",
    rating: 92,
  }]
  
  return (
    <div className="app">
      {
      data.map((movie,idx)=>(
        <Movie
         key={idx}
        img={movie.img} 
        name={movie.name}
        rating={movie.rating}
        />
      ))
    }
    </div>
  )
}
export default App
//prop
//const prop={}
//prop.name="leo"
//prop={
//name:"Leo"
//}
//const {name}=prop

// eslint-disable-next-line react/prop-types
function Movie({ img, name, rating }) {

  return (
    <div className='movie-card'>
      <div className="img-sec">
        <img src={img} />
      </div>
      <div className='mvName-sec'>
        <h3>{name}</h3>
      </div>
      <div className='mvDetails'>
        <button>Watch Now</button>
        <p>Ratings : {rating}%</p>

      </div>
    </div>
  )
}
