"use client";

import { MantineProvider } from "@mantine/core";
import { ApolloWrapper } from "./ApolloWrapper";
export function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MantineProvider defaultColorScheme="auto">
      <ApolloWrapper>{children}</ApolloWrapper>
    </MantineProvider>
  );
}
