'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Section from '@/components/Section'
import ProjectCard from '@/components/ProjectCard'
import CTA from '@/components/CTA'
import { staggerContainer, staggerItem } from '@/lib/motion'

const allProjects = [
  {
    title: 'Ferman',
    description: 'Ferman, Osmanlı esintili kart kaydırma tabanlı bir mobil oyun. Oyuncular, karşılarına çıkan olay kartlarını sağa ya da sola kaydırarak kararlar verir ve kendi hükümdarlıklarının kaderini şekillendirir. Her seçim, halkın refahını, ordunun gücünü ve devletin dengesini etkiler. Basit ama derin karar mekanikleriyle Ferman, her hamlede “tahtı korumak mı yoksa yıkıma sürüklenmek mi?” sorusunu sorduran sürükleyici bir deneyim sunar.',
    image: '/images/project-2.jpg',
    tags: ['Unity', 'C#', '2D', 'Mobile', 'Animation'],
    category: 'game',
    liveUrl: '#',
    githubUrl: '#',
  },

  {
    title: 'Scanny',
    description: 'Scanny, ders notlarını tarayıp özetleyen ve bu özetlerden kişisel quizler oluşturan yapay zekâ destekli bir mobil uygulamadır. Öğrencilerin öğrenme sürecini hızlandırır, bilgiyi pekiştirir ve sınavlara daha verimli hazırlanmalarını sağlar.',
    image: '/images/project-4.jpg',
    tags: ['React Native', 'Firebase', 'Charts', 'Push Notifications'],
    category: 'mobile',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Wizardius',
    description: 'Wizardius, büyü ve stratejiyi bir araya getiren retro tarzda bir piksel sanat oyunu. Oyuncular, gizemli diyarları keşfederken farklı büyüler öğrenir, yaratıklarla savaşır ve kendi sihirli yolculuklarını şekillendirir. Basit ama bağımlılık yapan oynanışıyla Wizardius, hem nostaljik hem de yenilikçi bir deneyim sunar.',
    image: '/images/project-5.jpg',
    tags: ['Unity', 'C#', '3D', 'Multiplayer', 'Photon'],
    category: 'game',
    liveUrl: '#',
    githubUrl: '#',
  },
  
  {
    title: 'StuFinance',
    description: 'StuFinance, öğrencilerin gelir ve giderlerini kolayca takip ederek bütçelerini yönetmelerini sağlayan pratik bir finans uygulamasıdır. Harcamalarınızı kategorilere ayırın, gelirlerinizi kaydedin ve grafiklerle bütçe dengenizi anlık olarak görün.',
    image: '/images/project-7.jpg',
    tags: ['React Native', 'Firebase', 'Maps', 'Payment', 'Real-time'],
    category: 'mobile',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Crusader Tycoon',
    description: 'Orta Çağ temalı bir strateji ve yönetim oyunu. Oyuncular, küçük bir orduyla başlayıp kalelerini güçlendirir, birliklerini yönetir ve farklı savaş senaryolarında düşmanlara karşı mücadele eder. Kuşatma, meydan muharebesi ve kale savunması gibi dinamik savaşlarla dolu Crusader Tycoon, tarihsel birliklerle gerçekçi bir strateji deneyimi sunarken, düşman tarafında fantastik sürprizler de barındırır.',
    image: '/images/project-8.jpg',
    tags: ['Unity', 'C#', '2D', 'Puzzle', 'Level Editor'],
    category: 'game',
    liveUrl: '#',
    githubUrl: '#',
  },

  
   
]

const categories = [
  { id: 'all', name: 'Tümü' },
  { id: 'web', name: 'Web Geliştirme' },
  { id: 'game', name: 'Oyun Geliştirme' },
  { id: 'mobile', name: 'Mobil Uygulama' },
]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects = activeCategory === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeCategory)

  return (
    <div className="relative">
      {/* Hero Section */}
      <Section className="pt-8 lg:pt-16">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            variants={staggerItem}
            className="font-heading font-bold text-4xl lg:text-5xl xl:text-6xl text-foreground mb-6"
          >
            Projelerimiz
          </motion.h1>
          <motion.p
            variants={staggerItem}
            className="text-foreground/70 text-lg lg:text-xl leading-relaxed mb-8"
          >
            Son dönemde tamamladığımız projelerden bir seçki. Her biri farklı 
            teknolojiler ve yaklaşımlarla geliştirildi. Web geliştirmeden oyun 
            geliştirmeye kadar geniş bir yelpazede çalışıyoruz.
          </motion.p>
        </motion.div>
      </Section>

      {/* Filter Section */}
      <Section className="bg-accent-900/20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={staggerItem} className="text-center mb-12">
            <h2 className="font-heading font-semibold text-2xl lg:text-3xl text-foreground mb-6">
              Kategoriye Göre Filtrele
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-primary-500 text-white'
                      : 'glass text-foreground/70 hover:text-foreground hover:glass-strong'
                  }`}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Projects Grid */}
      <Section>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  liveUrl={project.liveUrl}
                  githubUrl={project.githubUrl}
                />
              </motion.div>
            ))}
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-foreground/50 text-lg">
                Bu kategoride henüz proje bulunmuyor.
              </p>
            </motion.div>
          )}
        </motion.div>
      </Section>

      {/* Stats Section */}
      <Section className="bg-accent-900/20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={staggerItem} className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">
              Proje İstatistikleri
            </h2>
            <p className="text-foreground/70 text-lg max-w-3xl mx-auto">
              Bugüne kadar tamamladığımız projelerin sayısal verileri
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '5+', label: 'Tamamlanan Proje' },
              { number: '10+', label: 'Web Uygulaması' },
              { number: '3+', label: 'Oyun Projesi' },
              { number: '2+', label: 'Mobil Uygulama' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="font-heading font-bold text-3xl lg:text-4xl gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-foreground/60 text-sm lg:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* CTA Section */}
      <CTA
        title="Sizin Projenizi de Yapalım"
        description="Benzer projeler geliştirmek veya tamamen yeni bir fikrinizi hayata geçirmek için bizimle iletişime geçin."
        primaryButton={{
          text: 'Proje Başlat',
          href: '/contact',
        }}
        secondaryButton={{
          text: 'Hizmetlerimizi İncele',
          href: '/services',
        }}
      />
    </div>
  )
}
