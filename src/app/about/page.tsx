'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Section from '@/components/Section'
import CTA from '@/components/CTA'
import { staggerContainer, staggerItem } from '@/lib/motion'
import { 
  Target, 
  Users, 
  Lightbulb, 
  Award,
  Code,
  Gamepad2,
  Palette,
  Zap
} from 'lucide-react'

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Kalite Odaklı',
    description: 'Her projede en yüksek kalite standartlarını hedefliyoruz. Kod kalitesi, performans ve kullanıcı deneyimi önceliğimiz.'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Müşteri Memnuniyeti',
    description: 'Müşterilerimizin ihtiyaçlarını anlayıp, beklentilerini aşan çözümler sunuyoruz. Sürekli iletişim ve şeffaflık ilkemiz.'
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'İnovasyon',
    description: 'En yeni teknolojileri takip ediyor, projelerimizde modern yaklaşımlar kullanıyoruz. Sürekli öğrenme ve gelişim odaklıyız.'
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Güvenilirlik',
    description: 'Zamanında teslimat, kaliteli çözümler ve uzun vadeli destek sunuyoruz. Güvenilir iş ortağı olmak temel değerimiz.'
  }
]

const timeline = [
  {
    year: '2024',
    title: 'Kuruluş',
    description: 'D-RECTIVE Interactive olarak yazılım geliştirme yolculuğumuza başladık.'
  },
  {
    year: '2024',
    title: 'İlk Projeler',
    description: 'Web geliştirme alanında ilk başarılı projelerimizi tamamladık.'
  },
  {
    year: '2025',
    title: 'Oyun Geliştirme',
    description: 'Unity ile oyun geliştirme hizmetlerimizi ekledik ve ilk oyun projelerimizi hayata geçirdik.'
  },
  {
    year: '2025',
    title: 'Büyüme',
    description: '10+ proje tamamladık ve müşteri portföyümüzü genişlettik.'
  }
]

const team = [
  {
    name: 'Efe Arda Arıç',
    role: 'Kurucu & Proje Yöneticisi',
    image: '/images/Arda.jpg',
    skills: ['Swift', 'Python', 'TypeScript', 'Unity']
  },
  {
    name: 'Yusuf Güneş',
    role: 'Kurucu & Oyun Tasarımcısı',
    image: '/images/Yusuf.jpg',
    skills: ['Unity', 'C#', 'C++']
  },
  {
    name: 'Haris Bedirhan Büyükbayrak',
    role: 'Kurucu & Sanat Direktörü',
    image: '/images/Haris.jpg',
    skills: ['Unity', 'C#', '3D Modeling', 'Game Design']
  },
  {
    name: 'Muhammed Yasir Polat',
    role: 'Oyun Geliştirici',
    image: '/images/Yasir.jpg',
    skills: ['Unity', 'C#', 'C++', 'SQL']
  },
  {
    name: 'Mehmet Efe Gürmarmara',
    role: 'Yazılım Geliştirici',
    image: '/images/Marmara.jpg',
    skills: ['Python', 'Figma', 'R']
  }
]

const technologies = [
  { name: 'Next.js', icon: <Code className="w-5 h-5" />, category: 'Frontend' },
  { name: 'React', icon: <Code className="w-5 h-5" />, category: 'Frontend' },
  { name: 'TypeScript', icon: <Code className="w-5 h-5" />, category: 'Language' },
  { name: 'Unity', icon: <Gamepad2 className="w-5 h-5" />, category: 'Game' },
  { name: 'Framer Motion', icon: <Palette className="w-5 h-5" />, category: 'Animation' },
  { name: 'Tailwind CSS', icon: <Palette className="w-5 h-5" />, category: 'Styling' },
  { name: 'Node.js', icon: <Zap className="w-5 h-5" />, category: 'Backend' },
  { name: 'PostgreSQL', icon: <Zap className="w-5 h-5" />, category: 'Database' }
]

export default function AboutPage() {
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
          <motion.div
            variants={staggerItem}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-30 h-30 relative mb-6">
              <Image
                src="/logo.png"
                alt="D-RECTIVE Logo"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="font-heading font-bold text-4xl lg:text-5xl xl:text-6xl text-foreground">
              Hakkımızda
            </h1>
          </motion.div>
          <motion.p
            variants={staggerItem}
            className="text-foreground/70 text-lg lg:text-xl leading-relaxed mb-8"
          >
            D-RECTIVE Interactive olarak, modern teknolojilerle güçlü çözümler 
            üretmeyi hedefliyoruz. Web geliştirmeden oyun geliştirmeye kadar 
            geniş bir yelpazede hizmet veriyoruz.
          </motion.p>
        </motion.div>
      </Section>

      {/* Mission Section */}
      <Section className="bg-accent-900/20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <motion.div variants={staggerItem}>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">
              Misyonumuz
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-6">
            Drective Interactive, yazılım ve oyun geliştirme alanında yenilikçi çözümler üreten genç bir ekiptir. Mobil uygulamalardan PC oyunlarına kadar farklı dijital projeler geliştirerek kullanıcı deneyimini ön planda tutar. Hedefimiz, teknolojiyi eğlenceli ve işlevsel hale getirerek global ölçekte güvenilir bir stüdyo olmaktır.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed">
              Sürekli öğrenme ve gelişim odaklı yaklaşımımızla, en yeni 
              teknolojileri projelerimizde kullanarak müşterilerimize rekabet 
              avantajı sağlıyoruz.
            </p>
          </motion.div>
          
          <motion.div variants={staggerItem} className="relative">
            <div className="glass p-8 rounded-xl">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '10+', label: 'Proje' },
                  { number: '2+', label: 'Yıl Deneyim' },
                  { number: '100%', label: 'Müşteri Memnuniyeti' },
                  { number: '24/7', label: 'Destek' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="font-heading font-bold text-2xl lg:text-3xl gradient-text mb-2">
                      {stat.number}
                    </div>
                    <div className="text-foreground/60 text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Values Section */}
      <Section>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={staggerItem} className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">
              Değerlerimiz
            </h2>
            <p className="text-foreground/70 text-lg max-w-3xl mx-auto">
              Çalışma prensiplerimizi ve değerlerimizi oluşturan temel ilkeler
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="glass p-5 rounded-xl hover:glass-strong transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-lg flex items-center justify-center">
                    <div className="text-primary-500">
                      {value.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-1.5">
                      {value.title}
                    </h3>
                    <p className="text-foreground/70 text-sm leading-tight">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Timeline Section */}
      <Section className="bg-accent-900/20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={staggerItem} className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">
              Yolculuğumuz
            </h2>
            <p className="text-foreground/70 text-lg max-w-3xl mx-auto">
              D-RECTIVE Interactive&apos;in kuruluşundan bugüne kadar olan süreç
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500" />
              
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="relative flex items-start space-x-8 mb-12 last:mb-0"
                >
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center relative z-10">
                    <span className="text-white font-bold text-sm">
                      {item.year}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 glass p-6 rounded-xl">
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Team Section */}
      <Section>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={staggerItem} className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">
              Takımımız
            </h2>
            <p className="text-foreground/70 text-lg max-w-3xl mx-auto">
              Projelerinizi hayata geçiren deneyimli ve yetenekli ekibimiz
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="glass p-6 rounded-xl hover:glass-strong transition-all duration-300 text-center"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-400 text-sm mb-4">
                  {member.role}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-primary-500/10 text-primary-400 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Technologies Section */}
      <Section className="bg-accent-900/20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={staggerItem} className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">
              Kullandığımız Teknolojiler
            </h2>
            <p className="text-foreground/70 text-lg max-w-3xl mx-auto">
              Projelerimizde kullandığımız modern ve güçlü teknolojiler
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="glass p-4 rounded-lg hover:glass-strong transition-all duration-300 text-center group"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:from-primary-500/30 group-hover:to-secondary-500/30 transition-all duration-300">
                  <div className="text-primary-400 group-hover:text-primary-300 transition-colors duration-300">
                    {tech.icon}
                  </div>
                </div>
                <h3 className="font-medium text-sm text-foreground mb-1">
                  {tech.name}
                </h3>
                <p className="text-xs text-foreground/50">
                  {tech.category}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* CTA Section */}
      <CTA
        title="Bizimle Çalışmaya Hazır mısınız?"
        description="Takımımızla tanışın ve projelerinizi birlikte hayata geçirelim. Modern teknolojilerle güçlü çözümler üretmek için bizimle iletişime geçin."
        primaryButton={{
          text: 'İletişime Geç',
          href: '/contact',
        }}
        secondaryButton={{
          text: 'Projelerimizi İncele',
          href: '/projects',
        }}
      />
    </div>
  )
}
