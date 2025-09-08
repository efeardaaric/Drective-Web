'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Section from '@/components/Section'
import { staggerContainer, staggerItem } from '@/lib/motion'
import { Calendar, User, ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'Next.js 14 ile Modern Web Geliştirme',
    excerpt: 'Next.js 14&apos;ün yeni özelliklerini keşfedin ve performanslı web uygulamaları nasıl geliştirilir öğrenin.',
    content: 'Next.js 14, React tabanlı web uygulamaları geliştirmek için en güncel araçlardan biri. App Router, Server Components ve daha fazlası...',
    image: '/images/project-1.jpg',
    author: 'Efe Arda Arıç',
    date: '2024-01-15',
    readTime: '5 dk',
    tags: ['Next.js', 'React', 'Web Development'],
    slug: 'nextjs-14-modern-web-development'
  },
  {
    id: 2,
    title: 'Unity ile Oyun Geliştirmeye Başlangıç',
    excerpt: 'Unity oyun motoru ile 2D ve 3D oyunlar geliştirmeye başlamak için temel kavramları öğrenin.',
    content: 'Unity, hem 2D hem de 3D oyun geliştirme için güçlü bir araç. C# programlama dili ile oyun mekaniklerini nasıl oluşturacağınızı keşfedin.',
    image: '/images/project-2.jpg',
    author: 'Mehmet Kaya',
    date: '2024-01-10',
    readTime: '8 dk',
    tags: ['Unity', 'Game Development', 'C#'],
    slug: 'unity-game-development-basics'
  },
  {
    id: 3,
    title: 'Framer Motion ile Etkileşimli Animasyonlar',
    excerpt: 'React uygulamalarınızda Framer Motion kullanarak etkileşimli ve akıcı animasyonlar oluşturun.',
    content: 'Framer Motion, React uygulamalarında güçlü animasyonlar oluşturmak için mükemmel bir kütüphane. Scroll animasyonları, hover efektleri ve daha fazlası.',
    image: '/images/project-3.jpg',
    author: 'Ayşe Demir',
    date: '2024-01-05',
    readTime: '6 dk',
    tags: ['Framer Motion', 'React', 'Animations'],
    slug: 'framer-motion-interactive-animations'
  },
  {
    id: 4,
    title: 'TypeScript ile Daha Güvenli Kod',
    excerpt: 'TypeScript&apos;in avantajlarını keşfedin ve JavaScript projelerinizde nasıl kullanacağınızı öğrenin.',
    content: 'TypeScript, JavaScript&apos;e statik tip kontrolü ekleyerek daha güvenli ve sürdürülebilir kod yazmanızı sağlar.',
    image: '/images/project-4.jpg',
    author: 'Zeynep Özkan',
    date: '2024-01-01',
    readTime: '7 dk',
    tags: ['TypeScript', 'JavaScript', 'Development'],
    slug: 'typescript-safer-code'
  },
  {
    id: 5,
    title: 'Tailwind CSS ile Hızlı UI Geliştirme',
    excerpt: 'Utility-first CSS framework Tailwind CSS ile hızlı ve tutarlı arayüzler tasarlayın.',
    content: 'Tailwind CSS, önceden tanımlanmış utility sınıfları ile hızlı prototipleme ve tutarlı tasarım sistemleri oluşturmanızı sağlar.',
    image: '/images/project-5.jpg',
    author: 'Efe Arda Arıç',
    date: '2023-12-28',
    readTime: '4 dk',
    tags: ['Tailwind CSS', 'CSS', 'UI Design'],
    slug: 'tailwind-css-rapid-ui-development'
  },
  {
    id: 6,
    title: 'Web Performans Optimizasyonu',
    excerpt: 'Web uygulamalarınızın performansını artırmak için Core Web Vitals ve optimizasyon teknikleri.',
    content: 'Web performansı, kullanıcı deneyiminin kritik bir parçası. Core Web Vitals metriklerini anlayın ve uygulamalarınızı optimize edin.',
    image: '/images/project-6.jpg',
    author: 'Mehmet Kaya',
    date: '2023-12-25',
    readTime: '9 dk',
    tags: ['Performance', 'Web Vitals', 'Optimization'],
    slug: 'web-performance-optimization'
  }
]

export default function BlogPage() {
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
            Blog
          </motion.h1>
          <motion.p
            variants={staggerItem}
            className="text-foreground/70 text-lg lg:text-xl leading-relaxed mb-8"
          >
            Teknoloji dünyasından güncel haberler, geliştirme ipuçları ve 
            deneyimlerimizi paylaştığımız blog sayfamız. Web geliştirme, 
            oyun geliştirme ve tasarım konularında derinlemesine içerikler.
          </motion.p>
        </motion.div>
      </Section>

      {/* Featured Post */}
      <Section className="bg-accent-900/20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={staggerItem} className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">
              Öne Çıkan Yazı
            </h2>
          </motion.div>
          
          <motion.article
            variants={staggerItem}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="glass-strong rounded-2xl overflow-hidden hover:glass-strong transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-full">
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 text-sm text-foreground/60 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(blogPosts[0].date).toLocaleDateString('tr-TR')}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                
                <h3 className="font-heading font-bold text-2xl lg:text-3xl text-foreground mb-4">
                  {blogPosts[0].title}
                </h3>
                
                <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                  {blogPosts[0].excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {blogPosts[0].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary-500/10 text-primary-400 text-xs font-medium rounded-full border border-primary-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link
                  href={`/blog/${blogPosts[0].slug}`}
                  className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-200 font-medium"
                >
                  <span>Devamını Oku</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.article>
        </motion.div>
      </Section>

      {/* Blog Posts Grid */}
      <Section>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={staggerItem} className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">
              Tüm Yazılar
            </h2>
            <p className="text-foreground/70 text-lg max-w-3xl mx-auto">
              Teknoloji dünyasından güncel içerikler ve geliştirme deneyimlerimiz
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                variants={staggerItem}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="glass rounded-xl overflow-hidden hover:glass-strong transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-foreground/60 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('tr-TR')}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-3 group-hover:text-primary-400 transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary-500/10 text-primary-400 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-200 text-sm font-medium"
                  >
                    <span>Devamını Oku</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Newsletter Signup */}
      <Section className="bg-accent-900/20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div
            variants={staggerItem}
            className="glass-strong rounded-2xl p-8 lg:p-12 text-center"
          >
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">
              Blog Güncellemelerini Kaçırmayın
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto mb-8">
              Yeni yazılarımızdan haberdar olmak için e-posta listemize katılın. 
              Haftalık teknoloji güncellemeleri ve geliştirme ipuçları.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-3 bg-background/50 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-colors duration-200"
              />
              <button className="btn-primary px-6 py-3 whitespace-nowrap">
                Abone Ol
              </button>
            </div>
          </motion.div>
        </motion.div>
      </Section>
    </div>
  )
}

