import { Header, Footer, QContainer, CSQContainer, Card } from "@/components";
import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { InitA, InitQ } from "@/core/ssr/api";
import { SsrData } from "@/core/types";
import SimulatorLayout from '@/pages/Layout/simulatorLayout';
import { MyContext } from '@/core/Context/MyContext';

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

  return (
    <div className="h-fit min-h-[100dvh] ">

      {/* <MyContext.Provider value={{}}> */}
      <SimulatorLayout>
        <QContainer answer={data.prefetchA as SsrData["answer"]} questionaire={data.prefetchQ as SsrData["questionaire"]} />
      </SimulatorLayout>
      {/* </MyContext.Provider> */}
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
