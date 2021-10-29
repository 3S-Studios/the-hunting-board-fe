import Head from "next/head";
import MainPage from "./home";

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Hunting Board</title>
        <meta
          name="description"
          content="Your app to find and manage your team."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainPage />
    </div>
  );
}
