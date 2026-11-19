 
import { useEffect, useState } from "react";
import axios from "axios";
 
interface Hotel {
  id: number;
  name: string;
  city: string;
  price: number;
}
 
function App() {
 
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
 
    axios.get<Hotel[]>("http://localhost:5018/api/hotels")
      .then(response => {
        setHotels(response.data);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => setLoading(false));
 
  }, []);
 
  if (loading) return <h2>Loading hotels...</h2>;
 
  return (
    <div>
      <h1>Hotel Booking - React Vite</h1>
 
      {hotels.map(hotel => (
        <div key={hotel.id}>
          <h2>{hotel.name}</h2>
          <p>City: {hotel.city}</p>
          <p>Price: ₹{hotel.price}</p>
        </div>
      ))}
    </div>
  );
}
 
export default App;
 