import { Header, Footer, QContainer, CSQContainer, Card } from "@/components";
import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { InitA, InitQ } from "@/core/ssr/api";

interface userType {
  name: string
  age: number
}

interface Props {
  data?: any;
  error?: any;
  user: {

  }

}

export default function Home({ data, error }: Props) {
  const [questionContainer, setQuestionContainer] = useState()

  useEffect(() => {
    InitQ().then(res => setQuestionContainer(res))

  }, [])

  return (
    <div className='h-[71dvh] '>
      <Header />
      <QContainer />
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
