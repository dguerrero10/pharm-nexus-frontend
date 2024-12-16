import { ThemeProvider } from "@emotion/react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import theme from "./ui/global-theme";
import { RouterProvider } from "react-router-dom";
import { router } from "./util/routerConfig";

export const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
