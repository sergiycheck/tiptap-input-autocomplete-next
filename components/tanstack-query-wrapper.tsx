"use client";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

export interface AutoCompleteItem {
  name: string;
  category: string;
  value: number;
  id: string;
}
export const getDataForAutocomplete = async (): Promise<AutoCompleteItem[]> => {
  return fetch("https://652f91320b8d8ddac0b2b62b.mockapi.io/autocomplete")
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

export const TanstackQueryWrapper = ({ children }: { children: React.ReactNode }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
