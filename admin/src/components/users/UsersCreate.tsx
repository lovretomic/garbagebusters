import { Create, SimpleForm, TextInput, PasswordInput, required, email } from "react-admin";

export const UsersCreate = () => (
  <Create title="Create User">
    <SimpleForm>
      <TextInput source="name" label="Name" validate={required()} fullWidth />
      <TextInput source="surname" label="Surname" validate={required()} fullWidth />
      <TextInput source="username" label="Username" validate={required()} fullWidth />
      <TextInput
        type="email"
        source="email"
        label="Email"
        validate={[required(), email()]}
        fullWidth
      />
      <PasswordInput source="password" label="Password" validate={required()} fullWidth />
    </SimpleForm>
  </Create>
);
