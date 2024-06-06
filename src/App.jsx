
import AppRoutes from './Routes'; // Import your routes
import Navbar from './compenents/NavigationMenu';

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRoutes />
    </div>
  );
};

export default App;

