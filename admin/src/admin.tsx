import { Admin, Resource, ListGuesser } from "react-admin";

const App = () => (
  <Admin>
    <Resource name="actions" list={ListGuesser} />
    <Resource name="associations" list={ListGuesser} />
    <Resource name="reports" list={ListGuesser} />
    <Resource name="statistics" list={ListGuesser} />
    <Resource name="users" list={ListGuesser} />
    <Resource name="volunteers" list={ListGuesser} />
  </Admin>
);

export default App;
