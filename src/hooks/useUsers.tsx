import { useQuery } from "react-query";
import { api } from "../services/api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

export const getUsers = async () => {
  const { data } = await api.get<{ users: User[] }>("users");
  const users = data.users.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: new Date(user.createdAt).toLocaleString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
  }));
  return users;
};

export const useUsers = () => {
  return useQuery("users", getUsers, { staleTime: 60 * 60 * 5 });
};
