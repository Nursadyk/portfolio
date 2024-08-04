"use client";
import Layout from "@/components/layout/Layout";
import React, { FC, ReactNode } from "react";
interface IpropsChildren {
  children: ReactNode;
}
const LayoutClient: FC<IpropsChildren> = ({ children }) => {
  return (
    <>
      <Layout>{children}</Layout>
    </>
  );
};

export default LayoutClient;
