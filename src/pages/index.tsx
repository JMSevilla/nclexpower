import { Header, Footer, QContainer } from "@/components";
import React from "react";
import { GetServerSideProps } from "next";
import { InitA, InitQ } from "@/core/ssr/api";

interface Props {
  data?: any;
  error?: any;
}

export default function Home({ data, error }: Props) {
  console.log(data);
  return (
    <>
      <Header />
      <QContainer />
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const prefetchQ = await InitQ();
    const prefetchA = await InitA();
    return {
      props: {
        data: { prefetchQ, prefetchA },
      },
    };
  } catch (error) {
    return { props: { error } };
  }
};
