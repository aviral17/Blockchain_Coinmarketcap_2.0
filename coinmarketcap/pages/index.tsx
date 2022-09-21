import type { NextPage } from "next";
import Header from "../components/Header";
// import Head from "next/head";
// import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="mt-10" />
      {/* <Trending /> */}
      <div className="mt-20" />
      {/* <CMCtable /> */}
    </div>
  );
};

export default Home;
