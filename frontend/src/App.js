import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Tasks from './pages/Tasks';
import Restaurants from './pages/Restaurants';
import AddRestaurantForm from './components/AddRestaurantForm';
import EditRestaurantForm from './components/EditRestaurantForm';
import RestaurantDetails from './pages/RestaurantDetails';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/restaurants/new" element={<AddRestaurantForm />} />
        <Route path="/restaurants/edit/:id" element={<EditRestaurantForm />} />
        <Route path="/restaurants/:restaurantId/menu/new" element={<AddMenuItemForm />} />
        <Route path="/restaurants/:id" element={<RestaurantDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
