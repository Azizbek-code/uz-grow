'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Calendar, 
  Clock, 
  User, 
  Search,
  Filter,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

const categories = [
  { id: 'all', label: 'Barchasi' },
  { id: 'technology', label: 'Texnologiyalar' },
  { id: 'investment', label: 'Investitsiya' },
  { id: 'crops', label: 'Ekinlar' },
  { id: 'business', label: 'Biznes' }
]

const blogPosts = [
  {
    id: 1,
    title: 'Zamonaviy issiqxona avtomatlashtirish tizimlari',
    excerpt: 'IoT texnologiyalari asosida issiqxona iqtisodiyotini avtomatlashtirish va boshqarishning yangi imkoniyatlari',
    category: 'technology',
    author: 'Azizbek Karimov',
    date: '15 Mart, 2026',
    readTime: '5 daqiqa',
    image: '/images/blog/automation.jpg',
    featured: true,
    tags: ['IoT', 'Avtomatlashtirish', 'Texnologiya']
  },
  {
    id: 2,
    title: 'Issiqxona biznesining rentabelligi 2026',
    excerpt: 'Bozor tahlili va investitsiya imkoniyatlari: qaysi ekinlar eng ko\'p daromad keltiradi',
    category: 'investment',
    author: 'Dilnoza Raximova',
    date: '10 Mart, 2026',
    readTime: '7 daqiqa',
    image: '/images/blog/profitability.jpg',
    featured: true,
    tags: ['Investitsiya', 'Bozor', 'Daromad']
  },
  {
    id: 3,
    title: 'Qulupnay yetishtirish: Stellaq tizimining afzalliklari',
    excerpt: 'Golland uslubidagi qulupnay yetishtirish texnologiyalari va ularning O\'zbekiston sharoitlarida qo\'llanilishi',
    category: 'crops',
    author: 'Jasur Aliyev',
    date: '5 Mart, 2026',
    readTime: '6 daqiqa',
    image: '/images/blog/strawberry.jpg',
    featured: true,
    tags: ['Qulupnay', 'Stellaq', 'Texnologiya']
  },
  {
    id: 4,
    title: 'Energiya tejamkor issiqxona qurish usullari',
    excerpt: '30% gacha energiya tejab turadigan zamonaviy issiqxona qurish materiallari va texnologiyalari',
    category: 'technology',
    author: 'Gulnora Toshmatova',
    date: '28 Fevral, 2026',
    readTime: '8 daqiqa',
    image: '/images/blog/energy.jpg',
    featured: false,
    tags: ['Energiya', 'Qurilish', 'Ekologiya']
  },
  {
    id: 5,
    title: 'Tomorqa ekishidan eksportgacha: pomodor yetishtirish yo\'li',
    excerpt: 'O\'zbekiston pomidorlarini Yevropa bozoriga chiqarish tajribasi va talablari',
    category: 'business',
    author: 'Azizbek Karimov',
    date: '20 Fevral, 2026',
    readTime: '10 daqiqa',
    image: '/images/blog/export.jpg',
    featured: false,
    tags: ['Eksport', 'Pomidor', 'Biznes']
  },
  {
    id: 6,
    title: 'Issiqxona uchun optimal substrat tanlash',
    excerpt: 'Turli ekinlar uchun eng yaxshi substrat turlari va ularning tayyorlash usullari',
    category: 'crops',
    author: 'Dilnoza Raximova',
    date: '15 Fevral, 2026',
    readTime: '6 daqiqa',
    image: '/images/blog/substrate.jpg',
    featured: false,
    tags: ['Substrat', 'Ekinlar', 'Agrotexnika']
  },
  {
    id: 7,
    title: 'Issiqxona iqtisodiyoti: xarajatlar va daromadlar tahlili',
    excerpt: '1 gektar issiqxona uchun to\'liq xarajatlar hisobi va qaytish muddatlari',
    category: 'investment',
    author: 'Jasur Aliyev',
    date: '10 Fevral, 2026',
    readTime: '12 daqiqa',
    image: '/images/blog/economics.jpg',
    featured: false,
    tags: ['Iqtisodiyot', 'Xarajatlar', 'Hisob-kitob']
  },
  {
    id: 8,
    title: 'Issiqxona kasalliklari va ulardan himoya usullari',
    excerpt: 'Eng ko\'p uchraydigan issiqxona kasalliklari va ular bilan kurashishning zamonaviy usullari',
    category: 'crops',
    author: 'Gulnora Toshmatova',
    date: '5 Fevral, 2026',
    readTime: '9 daqiqa',
    image: '/images/blog/diseases.jpg',
    featured: false,
    tags: ['Kasalliklar', 'Himoya', 'Fitosanitariya']
  }
]

export default function BlogPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPosts = filteredPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  const totalPages = Math.ceil(regularPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const paginatedPosts = regularPosts.slice(startIndex, startIndex + postsPerPage)

  return (
    <div className="min-h-screen bg-dark-green text-cream">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23c9a84c' stroke-width='0.3' opacity='0.5'%3E%3Cpath d='M0 60h120M60 0v120M30 0v120M90 0v120M0 30h120M0 90h120'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-8">
              <span className="block text-cream">Blog va</span>
              <span className="block text-gold italic">maqolalar</span>
            </h1>
            <p className="text-xl md:text-2xl text-cream/80 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
              Issiqxona texnologiyalari, agro-biznes va investitsiya boʻyicha soʻngi yangiliklar 
              va professional tavsiyalar. Bizning mutaxassislarimiz tomonidan yozilgan maqolalar.
            </p>

            {/* Search Bar */}
            <motion.div
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gold" />
                <input
                  type="text"
                  placeholder="Maqolalarni qidirish..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-dark-green/60 backdrop-blur-sm border border-gold/20 rounded-full text-cream placeholder-cream/50 focus:outline-none focus:border-gold/50 transition-colors duration-300"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 relative border-b border-gold/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gold text-dark-green'
                    : 'bg-dark-green/60 text-cream/70 hover:text-cream hover:bg-dark-green/80'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-4">
                Tanlangan maqolalar
              </h2>
              <p className="text-xl text-cream/70 max-w-2xl mx-auto">
                Eng muhim va o'qilishi kerak bo'lgan maqolalar
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-dark-green/60 backdrop-blur-sm border border-gold/20 rounded-2xl overflow-hidden group-hover:border-gold/40 transition-all duration-300">
                    {/* Image */}
                    <div className="aspect-video relative overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Calendar className="w-8 h-8 text-gold" />
                          </div>
                          <p className="text-cream/60 text-sm">Maqola rasmi</p>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-gold/20 text-gold text-sm rounded-full">
                          {post.category}
                        </span>
                        <span className="text-cream/60 text-sm">
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl font-semibold text-cream mb-3 group-hover:text-gold transition-colors duration-300">
                        {post.title}
                      </h3>

                      <p className="text-cream/70 leading-relaxed mb-4">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-dark-green/40 text-cream/60 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Meta */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-cream/60 text-sm">
                          <User className="w-4 h-4 mr-2" />
                          {post.author}
                        </div>
                        <div className="flex items-center text-cream/60 text-sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          {post.date}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-24 relative bg-dark-green/50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-4">
              Barcha maqolalar
            </h2>
            <p className="text-xl text-cream/70 max-w-2xl mx-auto">
              {filteredPosts.length} ta maqola topildi
            </p>
          </motion.div>

          {filteredPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    className="group"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-dark-green/60 backdrop-blur-sm border border-gold/20 rounded-2xl overflow-hidden group-hover:border-gold/40 transition-all duration-300">
                      {/* Image */}
                      <div className="aspect-video relative overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center">
                          <Calendar className="w-12 h-12 text-gold" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="px-3 py-1 bg-gold/20 text-gold text-sm rounded-full">
                            {post.category}
                          </span>
                          <span className="text-cream/60 text-sm">
                            {post.readTime}
                          </span>
                        </div>

                        <h3 className="font-serif text-lg font-semibold text-cream mb-3 group-hover:text-gold transition-colors duration-300">
                          {post.title}
                        </h3>

                        <p className="text-cream/70 leading-relaxed mb-4 text-sm">
                          {post.excerpt}
                        </p>

                        {/* Meta */}
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center text-cream/60">
                            <User className="w-4 h-4 mr-2" />
                            {post.author}
                          </div>
                          <div className="flex items-center text-cream/60">
                            <Calendar className="w-4 h-4 mr-2" />
                            {post.date}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-4 mt-12">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="p-2 text-gold hover:text-gold/80 disabled:text-cream/30 disabled:cursor-not-allowed transition-colors duration-300"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  
                  <div className="flex space-x-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-10 h-10 rounded-full font-medium transition-all duration-300 ${
                          currentPage === page
                            ? 'bg-gold text-dark-green'
                            : 'bg-dark-green/60 text-cream/70 hover:text-cream hover:bg-dark-green/80'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="p-2 text-gold hover:text-gold/80 disabled:text-cream/30 disabled:cursor-not-allowed transition-colors duration-300"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-cream/70 text-xl">
                Hech qanday maqola topilmadi
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-6">
              Yangiliklarni kuting
            </h2>
            <p className="text-xl text-cream/70 mb-8">
              Eng soʻnggi maqolalar, texnologiyalar va investitsiya imkoniyatlari haqida 
              birinchi boʻlib xabardor boʻling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email manzilingiz"
                className="flex-1 px-4 py-3 bg-dark-green/60 backdrop-blur-sm border border-gold/20 rounded-lg text-cream placeholder-cream/50 focus:outline-none focus:border-gold/50 transition-colors duration-300"
              />
              <button className="px-6 py-3 bg-gold text-dark-green font-semibold rounded-lg hover:bg-gold/90 transition-all duration-300 transform hover:scale-105">
                Obuna bo\'lish
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
