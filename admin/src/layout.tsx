import type { ReactNode } from "react";
import { CheckForApplicationUpdate, Layout } from "react-admin";

export const AdminLayout = ({ children }: { children: ReactNode }) => (
  <Layout>
    {children}
    <CheckForApplicationUpdate />
  </Layout>
);
