import { List, Datagrid, TextField, EmailField } from "react-admin";

export const UserList = () => (
  <List>
    <Datagrid>
      <TextField source="id" label="ID" />
      <TextField source="name" label="Name" />
      <TextField source="surname" label="Surname" />
      <TextField source="username" label="Username" />
      <EmailField source="email" label="Email" />
    </Datagrid>
  </List>
);
