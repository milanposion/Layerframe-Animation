import Head from "next/head";
import { motion } from "framer-motion";

import Scene1 from "../components/Scene1";
import Layout from "../components/Layout";
import Link from 'next/link'

const Home = () => (
  <div className="font-display">
    <Head>
      <title>Layerframe animation</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className='overflow-x-hidden hidden md:block'>
      <motion.div
        animate={{
          scale: [1, 0, 30],
          y: [0, 0, 1700],
        }}
        transition={{
          duration: 0.4,
          delay: .8,
          type: "spring",
          ease: "easeInOut",
        }}
      >
        <Scene1 />
      </motion.div>
    </div>

    <Layout>
      <motion.div
        className="absolute top-0 bg-blue pt-40"
        animate={{
          opacity: [0, 1],
        }}
        transition={{
          delay: 1.1,
          duration: 0.05,
          ease: 'easeIn'
        }}
      >
        <div className="md:flex p-4 md:px-56 items-center md:mb-40 pb-20">
          <img src="/heroImage.jpg" alt="Busy sidewalk" className='md:w-1/2 mb-2 md:mb-0 mr-6 shadow-md' />

          <div className='md:w-1/2 md:-ml-20 md:mt-32'>
            <h1 className='text-white text-5xl font-heading font-bold mb-4'>Layerframe</h1>

            <p className='text-white mb-6 text-xs md:text-lg'>Lorem ipsum dolor sit amet, consectetur Hire Me, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <button className='bg-gray-300 font-bold uppercase rounded px-6 py-3 shadow transform transition hover:shadow-md hover:scale-110 ease-in-out duration-100 w-full md:w-auto'>
              <a href="https://drewclem.com">Let's Chat</a>
            </button>
          </div>
        </div>

        <div className='p-4 pt-12 md:p-4 bg-white text-blue'>
          <div className='container mx-auto md:flex justify-between'>
            <div className='md:pr-4 md:-mt-20 mb-10 md:mb-0'>
              <img src="https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg" alt="Business meeting" className='w-full shadow-md mb-3'/>
              <h2 className='font-heading text-2xl font-semibold mb-3'>Lorem Ipsum</h2>
              <p className='opacity-75 text-black mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Hire Me tempor incididunt ut labore et dolore magna aliqua.</p>
              <a href='/' className='underline'>Learn More</a>
            </div>

            <div className='md:px-4 md:-mt-20 mb-10 md:mb-0'>
              <img src="https://cdn.pixabay.com/photo/2016/02/19/11/19/office-1209640_960_720.jpg" alt="Business meeting" className='w-full shadow-md mb-3'/>

              <h2 className='font-heading text-2xl font-semibold mb-3'>Lorem Ipsum</h2>

              <p className='opacity-75 text-black mb-3'>Lorem ipsum Hire Me amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.</p>

              <a href='/' className='underline'>Learn More</a>
            </div>

            <div className='md:pl-4 md:-mt-20'>
              <img src="https://cdn.pixabay.com/photo/2015/05/31/15/14/woman-792162_960_720.jpg" alt="Business meeting" className='w-full shadow-md mb-3'/>

              <h2 className='font-heading text-2xl font-semibold mb-3'>Lorem Ipsum</h2>

              <p className='opacity-75 text-black mb-3'>Lorem ipsum dolor Hire Me, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

              <a href='/' className='underline'>Learn More</a>
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  </div>
);

export default Home;
