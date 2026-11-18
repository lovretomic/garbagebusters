import { Admin, Resource, ListGuesser } from "react-admin";
import { AdminLayout } from "./layout";
import dataProvider from "./dataProvider";
import { UserList } from "./lists/UserList";

const App = () => (
  <Admin dataProvider={dataProvider} layout={AdminLayout}>
    <Resource name="actions" list={ListGuesser} />
    <Resource name="associations" list={ListGuesser} />
    <Resource name="reports" list={ListGuesser} />
    <Resource name="statistics" list={ListGuesser} />
    <Resource name="users" list={UserList} />
    <Resource name="volunteers" list={ListGuesser} />
  </Admin>
);

export default App;
