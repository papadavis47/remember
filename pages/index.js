import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-2 bg-orange-500">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <h1 className="text-3xl font-bold ">Reminders to Stay On Path</h1>
      </main>

      <footer className="flex items-center justify-center w-full h-24 my-0 bg-blue-400 border-t ">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Experiment by John William Davis
          <img
            src="/lightning.svg"
            alt="LightningBolt Logo"
            className="h-8 ml-2"
          />
        </a>
      </footer>
    </div>
  )
}
