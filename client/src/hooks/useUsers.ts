import useSWR from "swr";

export interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

// Define a common fetcher function
const fetcher = (url: string) =>
  fetch(url, { credentials: "include" }).then((res) => res.json());

export default function useUsers() {
  const { data, error, mutate } = useSWR<User[]>(
    `${API_URL}/api/users/all`,
    fetcher
  );

  return {
    users: data,
    isLoading: !data && !error,
    isError: error,
    mutate,
  };
}
