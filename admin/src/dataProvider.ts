import type { DataProvider } from "react-admin";
import { api } from "./axios";

const dataProvider: DataProvider = {
  getList: async (resource) => {
    const { data } = await api.get(`/${resource}`);

    return {
      data: data,
      total: data.length,
    };
  },

  getOne: async () => {
    throw new Error("Method not implemented.");
  },

  getMany: async () => {
    throw new Error("Method not implemented.");
  },

  getManyReference: async () => {
    throw new Error("Method not implemented.");
  },
  create: async (resource, params) => {
    const { data } = await api.post(`/${resource}`, params.data);

    return {
      data: {
        ...data,
        id: data.ID_User ?? data.id,
      },
    };
  },

  update: async () => {
    throw new Error("Method not implemented.");
  },

  updateMany: async () => {
    throw new Error("Method not implemented.");
  },

  delete: async () => {
    throw new Error("Method not implemented.");
  },

  deleteMany: async () => {
    throw new Error("Method not implemented.");
  },
};

export default dataProvider;
