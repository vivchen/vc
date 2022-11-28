import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col justify-center py-2">
      <Head>
        <title>Vivian Chen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-col items-center justify-center pt-20 pb-20 text-center">
        <h1 className="text-5xl font-bold max-w-4xl">
          I’m Vivian, a Creative Technologist, Senior Front-end Engineer, and maker based in Victoria, BC
        </h1>
      </main>

      <section className='max-w-5xl px-40 pb-20'>
        <p className="mt-3 text-xl">
          I currently work as a Senior front-end engineer at <a rel="noopener noreferrer" className='text-blue-600' href="https://www.rew.ca/" target="_blank">REW</a> where I help the frontend team plan out releases and improve their workflows and processes in a way that is collaborative and respectful of our team, stakeholders and organization.
        </p>
        <p className="mt-3 text-xl">
          Coming from an engineering background I understand what it means to build products that are high-quality, cohesive, and scalable. I have built awareness for the small details, which is helpful for working through requirements, visualizations, models, and prototypes with cross-functional team members.
        </p>
        <p className="mt-3 text-xl">
          I feel at ease working with designers, engineers, data scientists and other business-oriented individuals. I can confidently approach problem-solving and actively maintain a holistic viewpoint through various phases.
        </p>
        <p className="mt-3 text-xl">
          When I’m not at my desk in Victoria, BC, you can probably find me outside in one my favourite <a className="text-blue-600" target="_blank" href="https://www.google.com/maps/place/Swan+Lake+Christmas+Hill+Nature+Sanctuary/@48.4656689,-123.6546428,11z/data=!4m10!1m2!2m1!1sswan+lake!3m6!1s0x548f73b45f67fb5d:0x2628987754890df9!8m2!3d48.4656689!4d-123.3744914!15sCglzd2FuIGxha2VaCyIJc3dhbiBsYWtlkgEPbmF0dXJlX3ByZXNlcnZlmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVJMZUdRMmNXUkJFQUXgAQA!16zL20vMGQ0c2Nw">places</a> looking for barred owls.
        </p>
      </section>

      <section className='max-w-5xl px-40 pb-20'>
        <a className='block text-blue-600' href="mailto:vivianchen@hey.com">Email →</a>
        <a className='block text-blue-600' target="_blank" href="https://www.linkedin.com/in/chenvivian/">LinkedIn →</a>
      </section>

      <footer className="h-24 w-full text-center border-t py-20">
        <span className='block'>Built with{' '}&hearts;</span>
        <span className='block'>© 2022 | Vivian Chen</span>
      </footer>
    </div>
  )
}

export default Home
