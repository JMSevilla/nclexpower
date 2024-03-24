import { Header, Footer, QContainer, CSQContainer, Card } from "@/components";
import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { InitA, InitQ } from "@/core/ssr/api";
import { SsrData } from "@/core/types";

interface userType {
  name: string;
  age: number;
}

interface Props {
  data?: any;
  error?: any;
  user: {};
}

export default function Home({ data, error }: Props) {
  console.log(data.prefetchQ);
  return (
    <div className="h-[71dvh] ">
      <Header />
      <QContainer questionaire={data.prefetchQ as SsrData["questionaire"]} />
      <Footer />
    </div>
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
