'use client'

import { motion } from 'framer-motion'
import { marquee } from '@/lib/motion'

const logos = [
  { name: 'Unity', src: '/logos/unity.svg' },
  { name: 'React', src: '/logos/react.svg' },
  { name: 'Next.js', src: '/logos/nextjs.svg' },
  { name: 'TypeScript', src: '/logos/typescript.svg' },
  { name: 'Tailwind', src: '/logos/tailwind.svg' },
  { name: 'Framer Motion', src: '/logos/framer.svg' },
  { name: 'Vercel', src: '/logos/vercel.svg' },
  { name: 'GitHub', src: '/logos/github.svg' },
  { name: 'Node.js', src: '/logos/nodejs.svg' },
  { name: 'Express.js', src: '/logos/express.svg' },
  { name: 'Firebase', src: '/logos/firebase.svg' },
  { name: 'Supabase', src: '/logos/supabase.svg' },
  { name: 'Prisma', src: '/logos/prisma.svg' },
  { name: 'MongoDB', src: '/logos/mongodb.svg' },
  { name: 'PostgreSQL', src: '/logos/postgresql.svg' },
  { name: 'C#', src: '/logos/csharp.svg' },
  { name: 'Unreal Engine', src: '/logos/unrealengine.svg' },
  { name: 'Godot', src: '/logos/godot.svg' },
  { name: 'Photon', src: '/logos/photon.svg' },
  { name: 'Mirror', src: '/logos/mirror.svg' },
  { name: 'Netcode for GameObjects', src: '/logos/netcode.svg' },
  { name: 'Blender', src: '/logos/blender.svg' },
  { name: 'Docker', src: '/logos/docker.svg' },
  { name: 'Kubernetes', src: '/logos/kubernetes.svg' },
  { name: 'AWS', src: '/logos/aws.svg' },
  { name: 'Google Cloud', src: '/logos/googlecloud.svg' },
  { name: 'Azure', src: '/logos/azure.svg' },
  { name: 'TensorFlow', src: '/logos/tensorflow.svg' },
  { name: 'PyTorch', src: '/logos/pytorch.svg' },
  { name: 'OpenAI API', src: '/logos/openai.svg' },
  { name: 'LangChain', src: '/logos/langchain.svg' },
  { name: 'Pandas', src: '/logos/pandas.svg' },
  { name: 'NumPy', src: '/logos/numpy.svg' },
]

export default function LogoMarquee() {
  return (
    <section className="section-padding py-12 lg:py-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h3 className="font-heading font-semibold text-lg text-foreground/70 mb-2">
            Güvenilen Teknolojiler
          </h3>
          <p className="text-foreground/50 text-sm">
            React, Next.js, TypeScript, Tailwind CSS, Framer Motion, Node.js, Express.js, Firebase, Supabase, Prisma, MongoDB, PostgreSQL, Unity, C#, Unreal Engine, Godot, Photon, Mirror, Netcode for GameObjects, Blender, Vercel, GitHub, Docker, Kubernetes, AWS, Google Cloud, Azure, TensorFlow, PyTorch, OpenAI API, LangChain, Pandas, NumPy
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          
          <motion.div
            variants={marquee}
            animate="animate"
            className="flex space-x-12 lg:space-x-16"
            style={{ width: 'max-content' }}
          >
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <motion.div
                key={`first-${index}`}
                className="flex items-center justify-center h-12 lg:h-16 opacity-40 hover:opacity-70 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-16 lg:w-20 h-8 lg:h-10 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-primary-400 font-medium text-xs lg:text-sm">
                    {logo.name}
                  </span>
                </div>
              </motion.div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <motion.div
                key={`second-${index}`}
                className="flex items-center justify-center h-12 lg:h-16 opacity-40 hover:opacity-70 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-16 lg:w-20 h-8 lg:h-10 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-primary-400 font-medium text-xs lg:text-sm">
                    {logo.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
