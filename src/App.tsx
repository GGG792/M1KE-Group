import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Gamepad2, Zap, Code2, MessageCircle, Menu, X, ChevronRight, Terminal, User, Star, Download, Share2, Globe, Shield, Sparkles } from 'lucide-react'

const App = () => {
  const [activeTab, setActiveTab] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scripts = [
    { name: 'Auto Farm Pro', author: 'M1KE', downloads: '12.5K', stars: 489, category: 'Farm' },
    { name: 'God Mode', author: 'M1KE', downloads: '8.3K', stars: 342, category: 'Combat' },
    { name: 'Infinite Jump', author: 'ProPlayer', downloads: '6.7K', stars: 256, category: 'Movement' },
    { name: 'ESP Script', author: 'M1KE', downloads: '9.1K', stars: 401, category: 'Utility' },
    { name: 'Speed Hack', author: 'ScriptMaster', downloads: '7.8K', stars: 312, category: 'Movement' },
    { name: 'Killaura', author: 'M1KE', downloads: '11.2K', stars: 456, category: 'Combat' },
  ]

  const features = [
    { icon: Zap, title: '高速执行', desc: '毫秒级响应，流畅不卡顿' },
    { icon: Shield, title: '安全可靠', desc: '防封检测，稳定运行' },
    { icon: Code2, title: '简单易用', desc: '一键执行，新手友好' },
    { icon: Download, title: '免费脚本', desc: '海量脚本，免费使用' },
    { icon: Share2, title: '社区分享', desc: '活跃社区，共同成长' },
    { icon: Sparkles, title: '持续更新', desc: '每日更新，功能强大' },
  ]

  return (
    <div className="min-h-screen relative">
      {/* 粒子背景 */}
      <div id="particles" className="grid-bg" />

      {/* 导航栏 */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50 ? 'glass py-4' : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => setActiveTab('home')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
              <Gamepad2 className="w-6 h-6" />
            </div>
            <span className="font-display text-2xl font-bold neon-cyan">M1KE GROUP</span>
          </motion.div>

          {/* 桌面菜单 */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { id: 'home', label: '首页', icon: Gamepad2 },
              { id: 'scripts', label: '脚本库', icon: Code2 },
              { id: 'chat', label: '聊天区', icon: MessageCircle },
              { id: 'about', label: '关于', icon: User },
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeTab === item.id 
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="w-4 h-4" />
                <span className="font-medium">{item.label}</span>
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-bold text-white hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
            >
              加入社区
            </motion.button>
          </div>

          {/* 移动端菜单按钮 */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* 移动端菜单 */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {[
                  { id: 'home', label: '首页', icon: Gamepad2 },
                  { id: 'scripts', label: '脚本库', icon: Code2 },
                  { id: 'chat', label: '聊天区', icon: MessageCircle },
                  { id: 'about', label: '关于', icon: User },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id)
                      setIsMenuOpen(false)
                    }}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all hover:bg-white/5"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* 主内容区域 */}
      <main className="relative z-10 pt-24">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <HomePage key="home" features={features} scripts={scripts} setActiveTab={setActiveTab} />
          )}
          {activeTab === 'scripts' && (
            <ScriptsPage key="scripts" scripts={scripts} />
          )}
          {activeTab === 'chat' && (
            <ChatPage key="chat" />
          )}
          {activeTab === 'about' && (
            <AboutPage key="about" />
          )}
        </AnimatePresence>
      </main>

      {/* 页脚 */}
      <footer className="relative z-10 glass mt-20 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <Gamepad2 className="w-6 h-6" />
                </div>
                <span className="font-display text-xl font-bold">M1KE GROUP</span>
              </div>
              <p className="text-gray-400">最专业的罗布乐思脚本社区</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-cyan-400">快速链接</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">首页</a></li>
                <li><a href="#" className="hover:text-white transition-colors">脚本库</a></li>
                <li><a href="#" className="hover:text-white transition-colors">社区</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-cyan-400">脚本分类</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Farm</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Combat</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Movement</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-cyan-400">联系我们</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Discord: M1KE#0001</li>
                <li>Telegram: @m1ke_group</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>© 2024 M1KE GROUP. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const HomePage = ({ features, scripts, setActiveTab }: any) => {
  return (
    <div className="space-y-24">
      {/* Hero 区域 */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
              🎮 罗布乐思最强脚本社区
            </span>
            <h1 className="font-display text-6xl md:text-8xl font-black mb-6">
              <span className="neon-cyan">M1KE</span>
              <br />
              <span className="neon-purple">GROUP</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
              解锁无限可能，享受极致游戏体验！<br />
              海量免费脚本，安全稳定，持续更新
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('scripts')}
              className="btn-neon px-8 py-4 rounded-xl font-bold text-lg text-black"
            >
              浏览脚本 →
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('chat')}
              className="px-8 py-4 rounded-xl font-bold text-lg glass hover:bg-white/10 transition-all"
            >
              加入聊天
            </motion.button>
          </motion.div>
        </div>

        {/* 统计数据 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { num: '50K+', label: '社区成员', color: 'cyan' },
            { num: '200+', label: '优质脚本', color: 'purple' },
            { num: '1M+', label: '总下载量', color: 'cyan' },
            { num: '99%', label: '好评率', color: 'purple' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-2xl p-6 text-center card-glow"
            >
              <div className={`font-display text-4xl font-black mb-2 ${stat.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'}`}>
                {stat.num}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 功能特色 */}
      <section className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">为什么选择 <span className="neon-cyan">M1KE</span></h2>
          <p className="text-gray-400 text-lg">专业团队打造，只为更好的游戏体验</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl p-8 card-glow"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 热门脚本 */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">🔥 热门脚本</h2>
            <p className="text-gray-400 text-lg">最受欢迎的脚本推荐</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('scripts')}
            className="hidden md:flex items-center gap-2 px-6 py-3 glass rounded-xl hover:bg-white/10 transition-all"
          >
            查看全部 <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scripts.slice(0, 6).map((script: any, i: number) => (
            <ScriptCard key={i} script={script} />
          ))}
        </div>
      </section>

      {/* CTA 区域 */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10" />
          <div className="relative z-10">
            <Sparkles className="w-16 h-16 mx-auto mb-6 text-cyan-400 animate-pulse" />
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">准备好加入了吗？</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              加入我们的社区，获取最新脚本，与大神交流
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('chat')}
              className="btn-neon px-10 py-5 rounded-xl font-bold text-xl text-black"
            >
              立即加入 🚀
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

const ScriptCard = ({ script }: any) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="glass rounded-2xl p-6 card-glow cursor-pointer"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center">
          <Terminal className="w-6 h-6" />
        </div>
        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
          {script.category}
        </span>
      </div>
      <h3 className="font-display text-xl font-bold mb-2">{script.name}</h3>
      <p className="text-gray-400 text-sm mb-4">by {script.author}</p>
      <div className="flex items-center justify-between pt-4 border-t border-gray-800">
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <span className="flex items-center gap-1">
            <Download className="w-4 h-4" />
            {script.downloads}
          </span>
          <span className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400" />
            {script.stars}
          </span>
        </div>
        <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-sm font-bold text-white hover:shadow-lg transition-all">
          获取
        </button>
      </div>
    </motion.div>
  )
}

const ScriptsPage = ({ scripts }: any) => {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Farm', 'Combat', 'Movement', 'Utility']

  const filteredScripts = scripts.filter((s: any) => {
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || s.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="font-display text-5xl font-bold mb-4">
          <span className="neon-cyan">脚本库</span>
        </h1>
        <p className="text-gray-400 text-lg">发现最强大的罗布乐思脚本</p>
      </motion.div>

      {/* 搜索和筛选 */}
      <div className="glass rounded-2xl p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 w-full">
            <input
              type="text"
              placeholder="搜索脚本..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-black/30 border border-gray-700 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500'
                    : 'glass hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 脚本网格 */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredScripts.map((script: any, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <ScriptCard script={script} />
          </motion.div>
        ))}
      </div>

      {filteredScripts.length === 0 && (
        <div className="text-center py-20">
          <Globe className="w-20 h-20 mx-auto mb-4 text-gray-600" />
          <p className="text-gray-400 text-lg">没有找到相关脚本</p>
        </div>
      )}
    </div>
  )
}

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { id: 1, user: 'M1KE', message: '欢迎来到 M1KE GROUP 社区！', time: '10:30', isBot: true },
    { id: 2, user: 'ProPlayer', message: '有新脚本吗？', time: '10:32', isBot: false },
    { id: 3, user: 'M1KE', message: '刚更新了 Auto Farm Pro 2.0，去脚本库看看！', time: '10:33', isBot: true },
    { id: 4, user: 'ScriptMaster', message: '太好了，我正好需要！', time: '10:35', isBot: false },
  ])
  const [newMessage, setNewMessage] = useState('')

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          user: 'You',
          message: newMessage,
          time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }),
          isBot: false,
        },
      ])
      setNewMessage('')
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="font-display text-5xl font-bold mb-4">
          <span className="neon-purple">聊天区</span>
        </h1>
        <p className="text-gray-400 text-lg">和社区成员一起交流讨论</p>
      </motion.div>

      <div className="glass rounded-2xl overflow-hidden">
        {/* 聊天头部 */}
        <div className="p-4 border-b border-gray-800 flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
            <MessageCircle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg">M1KE GROUP 社区</h3>
            <p className="text-green-400 text-sm flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              1,234 人在线
            </p>
          </div>
        </div>

        {/* 消息区域 */}
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, x: msg.isBot ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              className={`flex gap-3 ${msg.user === 'You' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                msg.isBot 
                  ? 'bg-gradient-to-br from-cyan-500 to-purple-500'
                  : 'bg-gradient-to-br from-purple-500 to-pink-500'
              }`}>
                {msg.isBot ? <Terminal className="w-5 h-5" /> : <User className="w-5 h-5" />}
              </div>
              <div className={`max-w-xs md:max-w-md ${msg.user === 'You' ? 'text-right' : ''}`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-sm">{msg.user}</span>
                  <span className="text-gray-500 text-xs">{msg.time}</span>
                </div>
                <div className={`px-4 py-3 rounded-2xl ${
                  msg.user === 'You'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500'
                    : msg.isBot
                    ? 'glass'
                    : 'glass'
                }`}>
                  {msg.message}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 输入区域 */}
        <div className="p-4 border-t border-gray-800">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="输入消息..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              className="flex-1 px-4 py-3 bg-black/30 border border-gray-700 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={sendMessage}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-bold text-white"
            >
              发送
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}

const AboutPage = () => {
  const members = [
    { name: 'M1KE', role: '创始人', avatar: '👑' },
    { name: 'ProPlayer', role: '脚本开发', avatar: '🎮' },
    { name: 'ScriptMaster', role: '技术支持', avatar: '💻' },
    { name: 'GameHacker', role: '测试员', avatar: '🔍' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="font-display text-5xl font-bold mb-4">
          关于 <span className="neon-cyan">M1KE GROUP</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          我们是一群热爱游戏的技术宅，致力于打造最好的罗布乐思脚本社区
        </p>
      </motion.div>

      {/* 我们的故事 */}
      <section className="mb-16">
        <div className="glass rounded-3xl p-10">
          <h2 className="font-display text-3xl font-bold mb-6 text-center neon-purple">我们的故事</h2>
          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>
              M1KE GROUP 成立于 2022 年，由一群热爱罗布乐思的玩家创建。
              我们发现市场上的脚本要么质量参差不齐，要么收费高昂，
              于是决定自己动手，为社区提供高质量、免费的脚本。
            </p>
            <p>
              经过两年的发展，我们已经拥有 50,000+ 社区成员，
              200+ 优质脚本，总下载量超过 100 万次！
            </p>
            <p>
              我们的使命是：让每一个罗布乐思玩家都能享受到脚本带来的乐趣，
              无论是新手还是老玩家，都能在这里找到适合自己的脚本。
            </p>
          </div>
        </div>
      </section>

      {/* 团队成员 */}
      <section className="mb-16">
        <h2 className="font-display text-3xl font-bold mb-8 text-center">团队成员</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl p-8 text-center card-glow"
            >
              <div className="text-6xl mb-4">{member.avatar}</div>
              <h3 className="font-display text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 时间线 */}
      <section>
        <h2 className="font-display text-3xl font-bold mb-8 text-center">发展历程</h2>
        <div className="space-y-6">
          {[
            { year: '2022', title: 'M1KE GROUP 成立', desc: '一个小团队，一个大梦想' },
            { year: '2023', title: '社区破万', desc: '10,000 成员，100 个脚本' },
            { year: '2024', title: '全面升级', desc: '新网站，新脚本，新体验' },
            { year: '未来', title: '更多可能', desc: '敬请期待...' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center font-display text-2xl font-black flex-shrink-0">
                {item.year}
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

const Search = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
)

export default App
