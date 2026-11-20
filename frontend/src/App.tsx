import { APIProvider } from "@vis.gl/react-google-maps";
import "./App.scss";
import Router from "./router/Router";

function App() {
  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <Router />
    </APIProvider>
  );
}

export default App;
