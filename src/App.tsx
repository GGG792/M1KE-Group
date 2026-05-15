import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Gamepad2, Zap, Code2, MessageCircle, Menu, X, ChevronRight, 
  Terminal, User, Star, Download, Share2, Globe, Shield, Sparkles, 
  Search as SearchIcon, Copy, Check, Video, ExternalLink 
} from 'lucide-react'

const App = () => {
  const [activeTab, setActiveTab] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [selectedScript, setSelectedScript] = useState<any>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scripts = [
    {
      id: 1,
      name: 'Auto Farm Pro',
      author: 'M1KE',
      downloads: '12.5K',
      stars: 489,
      category: 'Farm',
      description: '全自动挂机刷资源脚本，支持多种游戏模式',
      video: 'https://example.com/video1.mp4',
      code: `-- Auto Farm Pro 2.0
local Players = game:GetService("Players")
local LocalPlayer = Players.LocalPlayer

local AutoFarm = {
    Enabled = true,
    AutoCollect = true,
    AutoKill = true
}

function AutoFarm:Collect()
    while self.Enabled do
        for _, obj in pairs(game.Workspace:GetChildren()) do
            if obj:FindFirstChild("TouchInterest") then
                local hrp = LocalPlayer.Character:FindFirstChild("HumanoidRootPart")
                if hrp then
                    hrp.CFrame = obj.CFrame + Vector3.new(0, 3, 0)
                    wait(0.3)
                end
            end
        end
        wait(0.1)
    end
end

spawn(function() AutoFarm:Collect() end)
print("Auto Farm Pro 启动成功！")`
    },
    {
      id: 2,
      name: 'God Mode',
      author: 'M1KE',
      downloads: '8.3K',
      stars: 342,
      category: 'Combat',
      description: '无敌模式，不掉血，无限蓝，超级跳',
      video: 'https://example.com/video2.mp4',
      code: `-- God Mode 1.8
local Players = game:GetService("Players")
local LocalPlayer = Players.LocalPlayer

while true do wait()
    local char = LocalPlayer.Character
    if char then
        local hum = char:FindFirstChild("Humanoid")
        if hum then
            hum.Health = math.huge
            hum.MaxHealth = math.huge
            hum.WalkSpeed = 50
            hum.JumpPower = 100
        end
    end
end`
    },
    {
      id: 3,
      name: 'Infinite Jump',
      author: 'ProPlayer',
      downloads: '6.7K',
      stars: 256,
      category: 'Movement',
      description: '无限连跳，飞天功能，超级跳',
      video: 'https://example.com/video3.mp4',
      code: `-- Infinite Jump Ultimate
local UIS = game:GetService("UserInputService")
local Players = game:GetService("Players")
local LocalPlayer = Players.LocalPlayer

UIS.JumpRequest:Connect(function()
    local hum = LocalPlayer.Character:FindFirstChild("Humanoid")
    hum:ChangeState(Enum.HumanoidStateType.Jumping)
end)
print("无限连跳已开启！")`
    },
    {
      id: 4,
      name: 'ESP Script',
      author: 'M1KE',
      downloads: '9.1K',
      stars: 401,
      category: 'Utility',
      description: '透视脚本，玩家、物品、怪物显示框',
      video: 'https://example.com/video4.mp4',
      code: `-- ESP Ultimate
local Players = game:GetService("Players")
local RunService = game:GetService("RunService")

for _, player in pairs(Players:GetPlayers()) do
    if player ~= Players.LocalPlayer then
        local char = player.Character or player.CharacterAdded:Wait()
        local hrp = char:FindFirstChild("HumanoidRootPart")
        
        local box = Instance.new("BoxHandleAdornment")
        box.Adornee = hrp
        box.AlwaysOnTop = true
        box.Size = Vector3.new(4, 6, 4)
        box.Color3 = Color3.new(1, 0, 0)
        box.Transparency = 0.5
        box.Parent = hrp
    end
end
print("ESP 已开启！")`
    },
    {
      id: 5,
      name: 'Speed Hack',
      author: 'ScriptMaster',
      downloads: '7.8K',
      stars: 312,
      category: 'Movement',
      description: '加速脚本，速度可调，疾跑加速',
      video: 'https://example.com/video5.mp4',
      code: `-- Speed Hack Pro
local Players = game:GetService("Players")
local LocalPlayer = Players.LocalPlayer

while true do wait()
    local char = LocalPlayer.Character
    if char then
        local hum = char:FindFirstChild("Humanoid")
        hum.WalkSpeed = 60
    end
end`
    },
    {
      id: 6,
      name: 'Killaura',
      author: 'M1KE',
      downloads: '11.2K',
      stars: 456,
      category: 'Combat',
      description: '自动锁头，锁敌，自动攻击',
      video: 'https://example.com/video6.mp4',
      code: `-- Killaura 4.0
local Players = game:GetService("Players")
local RunService = game:GetService("RunService")
local LocalPlayer = Players.LocalPlayer

function getClosestEnemy()
    local closest = nil
    local maxDist = 30
    
    for _, player in pairs(Players:GetPlayers()) do
        if player ~= LocalPlayer then
            local char = player.Character
            if char and char:FindFirstChild("HumanoidRootPart") then
                local dist = (char.HumanoidRootPart.Position - LocalPlayer.Character.HumanoidRootPart.Position).Magnitude
                if dist < maxDist then
                    closest = player
                    maxDist = dist
                end
            end
        end
    end
    return closest
end

local lastAttack = 0
RunService.RenderStepped:Connect(function()
    local target = getClosestEnemy()
    if target then
        local hrp = target.Character:FindFirstChild("HumanoidRootPart")
        if hrp and os.clock() - lastAttack > 0.1 then
            LocalPlayer.Character.HumanoidRootPart.CFrame = hrp.CFrame + Vector3.new(0, 3, 0)
            lastAttack = os.clock()
        end
    end
end)
print("Killaura 已启动！")`
    },
    {
      id: 7,
      name: 'Fly Hack',
      author: 'M1KE',
      downloads: '15.3K',
      stars: 623,
      category: 'Movement',
      description: '飞行脚本，自由飞行，穿墙模式',
      video: 'https://example.com/video7.mp4',
      code: `-- Fly Script 2.0
local UIS = game:GetService("UserInputService")
local Players = game:GetService("Players")
local LocalPlayer = Players.LocalPlayer

local Flying = false
local FlySpeed = 100

UIS.InputBegan:Connect(function(input, gameProcessed)
    if input.KeyCode == Enum.KeyCode.F then
        Flying = not Flying
        print("飞行: " .. tostring(Flying))
    end
end)

game:GetService("RunService").RenderStepped:Connect(function()
    if Flying then
        local hrp = LocalPlayer.Character:FindFirstChild("HumanoidRootPart")
        local cam = workspace.CurrentCamera
        if hrp and cam then
            local vel = Vector3.new(0, 0, 0)
            if UIS:IsKeyDown(Enum.KeyCode.W) then vel = vel + cam.CFrame.lookVector end
            if UIS:IsKeyDown(Enum.KeyCode.S) then vel = vel - cam.CFrame.lookVector end
            if UIS:IsKeyDown(Enum.KeyCode.A) then vel = vel - cam.CFrame.RightVector end
            if UIS:IsKeyDown(Enum.KeyCode.D) then vel = vel + cam.CFrame.RightVector end
            if UIS:IsKeyDown(Enum.KeyCode.Space) then vel = vel + Vector3.new(0, 1, 0) end
            if UIS:IsKeyDown(Enum.KeyCode.LeftControl) then vel = vel - Vector3.new(0, 1, 0) end
            hrp.Velocity = vel * FlySpeed
            hrp.CFrame = CFrame.new(hrp.CFrame.p, hrp.CFrame.p + cam.CFrame.lookVector)
        end
    end
end)
print("Fly Script 已加载！")`
    },
    {
      id: 8,
      name: 'Teleport Script',
      author: 'ProPlayer',
      downloads: '7.2K',
      stars: 308,
      category: 'Utility',
      description: '传送脚本，传送到指定位置，记录点',
      video: 'https://example.com/video8.mp4',
      code: `-- Teleport Script
local Players = game:GetService("Players")
local LocalPlayer = Players.LocalPlayer

local Pos1 = nil

game:GetService("UserInputService").InputBegan:Connect(function(input)
    if input.KeyCode == Enum.KeyCode.One then
        local hrp = LocalPlayer.Character:FindFirstChild("HumanoidRootPart")
        if hrp then
            Pos1 = hrp.CFrame
            print("位置1已保存！")
        end
    end
    if input.KeyCode == Enum.KeyCode.Two then
        if Pos1 then
            local hrp = LocalPlayer.Character:FindFirstChild("HumanoidRootPart")
            hrp.CFrame = Pos1
            print("已传送到位置1！")
        end
    end
end)`
    }
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
              { id: 'chat', label: 'QQ群', icon: MessageCircle },
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
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://qm.qq.com/q/your-link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-bold text-white hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
            >
              QQ群: 1104598406
            </motion.a>
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
                  { id: 'chat', label: 'QQ群', icon: MessageCircle },
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
              <div className="px-6 pb-6">
                <a href="https://qm.qq.com/q/your-link" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-bold text-white">
                  <MessageCircle className="w-5 h-5" />
                  QQ群: 1104598406
                </a>
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
            <ScriptsPage key="scripts" scripts={scripts} setSelectedScript={setSelectedScript} />
          )}
          {activeTab === 'chat' && (
            <QQGroupPage key="chat" />
          )}
          {activeTab === 'about' && (
            <AboutPage key="about" />
          )}
        </AnimatePresence>
      </main>

      {/* 脚本详情弹窗 */}
      <AnimatePresence>
        {selectedScript && (
          <ScriptModal
            script={selectedScript}
            onClose={() => setSelectedScript(null)}
          />
        )}
      </AnimatePresence>

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
              <div className="mt-4 p-4 glass rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
                <p className="text-cyan-400 font-bold flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  QQ群: 1104598406
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-cyan-400">快速链接</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('home'); }} className="hover:text-white transition-colors">首页</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('scripts'); }} className="hover:text-white transition-colors">脚本库</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('chat'); }} className="hover:text-white transition-colors">QQ群</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-cyan-400">脚本分类</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Farm</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Combat</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Movement</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Utility</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-cyan-400">联系我们</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  QQ群: 1104598406
                </li>
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
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://qm.qq.com/q/your-link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl font-bold text-lg glass hover:bg-white/10 transition-all"
            >
              加入QQ群
            </motion.a>
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

      {/* 视频展示区域 */}
      <section className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">🎬 宣传视频</h2>
          <p className="text-gray-400 text-lg">观看 M1KE GROUP 介绍视频</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30"
        >
          <div className="aspect-video bg-black/40 rounded-2xl flex items-center justify-center border-2 border-dashed border-cyan-500/30 relative overflow-hidden">
            {/* 模拟视频封面 */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/50 to-purple-900/50 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center animate-pulse">
                  <Play className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">M1KE GROUP 宣传视频</h3>
                <p className="text-gray-300">点击播放精彩介绍</p>
                <div className="mt-4 flex items-center justify-center gap-2 text-cyan-400">
                  <Video className="w-5 h-5" />
                  <span>时长: 3:45</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-400 mb-4">视频正在上传中，敬请期待！</p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://qm.qq.com/cgi-bin/qm/qr?k=placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-bold text-white"
            >
              <MessageCircle className="w-5 h-5" />
              加入QQ群获取最新视频
            </motion.a>
          </div>
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

const ScriptCard = ({ script, onClick }: any) => {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="glass rounded-2xl p-6 card-glow cursor-pointer"
      onClick={() => onClick && onClick(script)}
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
      <p className="text-gray-400 text-sm mb-2 line-clamp-2">{script.description}</p>
      <p className="text-gray-500 text-xs mb-4">by {script.author}</p>
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
        {onClick ? (
          <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-sm font-bold text-white hover:shadow-lg transition-all">
            查看详情
          </button>
        ) : (
          <button onClick={(e) => { e.stopPropagation(); copyCode(); }} className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-sm font-bold text-white hover:shadow-lg transition-all flex items-center gap-1">
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? '已复制' : '复制'}
          </button>
        )}
      </div>
    </motion.div>
  )
}

const ScriptsPage = ({ scripts, setSelectedScript }: any) => {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Farm', 'Combat', 'Movement', 'Utility']

  const filteredScripts = scripts.filter((s: any) => {
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase()) || 
                          s.description.toLowerCase().includes(search.toLowerCase()) ||
                          s.author.toLowerCase().includes(search.toLowerCase())
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
              placeholder="搜索脚本名称、描述或作者..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-black/30 border border-gray-700 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors"
            />
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
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

      {/* 搜索结果统计 */}
      <div className="mb-6 text-gray-400">
        找到 {filteredScripts.length} 个脚本
      </div>

      {/* 脚本网格 */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredScripts.map((script: any, i: number) => (
          <motion.div
            key={script.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <ScriptCard script={script} onClick={() => setSelectedScript(script)} />
          </motion.div>
        ))}
      </div>

      {filteredScripts.length === 0 && (
        <div className="text-center py-20">
          <Globe className="w-20 h-20 mx-auto mb-4 text-gray-600" />
          <p className="text-gray-400 text-lg">没有找到相关脚本，试试其他关键词</p>
        </div>
      )}
    </div>
  )
}

const QQGroupPage = () => {
  const [groupStats, setGroupStats] = useState({
    memberCount: 2847,
    onlineCount: 342,
    messageCount: 15623
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setGroupStats(prev => ({
        memberCount: prev.memberCount + Math.floor(Math.random() * 3),
        onlineCount: Math.max(100, prev.onlineCount + Math.floor(Math.random() * 10) - 5),
        messageCount: prev.messageCount + Math.floor(Math.random() * 5)
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="font-display text-5xl font-bold mb-4">
          <span className="neon-purple">QQ群</span>
        </h1>
        <p className="text-gray-400 text-lg">加入我们的QQ群，获取最新脚本</p>
      </motion.div>

      <div className="space-y-8">
        {/* QQ群卡片 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass rounded-3xl p-8 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30"
        >
          <div className="text-center mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-3xl mx-auto mb-6 flex items-center justify-center animate-pulse">
              <MessageCircle className="w-16 h-16" />
            </div>
            <h2 className="font-display text-3xl font-bold mb-4 neon-cyan">M1KE GROUP</h2>
            <p className="text-2xl font-bold text-white mb-2">QQ群号: 1104598406</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="glass rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl mx-auto mb-3 flex items-center justify-center">
                <User className="w-6 h-6 text-green-400" />
              </div>
              <p className="text-green-400 font-bold text-2xl">{groupStats.memberCount.toLocaleString()}</p>
              <p className="text-gray-400 text-sm">群成员</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl mx-auto mb-3 flex items-center justify-center">
                <Terminal className="w-6 h-6 text-cyan-400" />
              </div>
              <p className="text-cyan-400 font-bold text-2xl">{groupStats.onlineCount.toLocaleString()}</p>
              <p className="text-gray-400 text-sm">在线人数</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-xl mx-auto mb-3 flex items-center justify-center">
                <Zap className="w-6 h-6 text-yellow-400" />
              </div>
              <p className="text-yellow-400 font-bold text-2xl">{groupStats.messageCount.toLocaleString()}</p>
              <p className="text-gray-400 text-sm">今日消息</p>
            </div>
          </div>

          <div className="text-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://qm.qq.com/cgi-bin/qm/qr?k=placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon inline-flex items-center gap-2 px-10 py-4 rounded-xl font-bold text-xl text-black"
            >
              <MessageCircle className="w-6 h-6" />
              立即加入QQ群
            </motion.a>
          </div>
        </motion.div>

        {/* 群公告 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-3xl p-8"
        >
          <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            群公告
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
              <p className="text-cyan-300">🎉 欢迎加入M1KE GROUP！</p>
            </div>
            <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl">
              <p className="text-purple-300">📢 每日更新脚本，每周更新速度超快！</p>
            </div>
            <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
              <p className="text-green-300">✅ 所有脚本免费使用！</p>
            </div>
          </div>
        </motion.div>

        {/* 群规 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-3xl p-8"
        >
          <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-cyan-400" />
            群规
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>文明交流，禁止辱骂</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>禁止发布广告</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>禁止恶意刷屏</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>禁止恶意举报</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>互帮互助，共同进步</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}

const ScriptModal = ({ script, onClose }: any) => {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(script.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative glass rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center">
              <Terminal className="w-8 h-8" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold">{script.name}</h2>
              <p className="text-gray-400">by {script.author}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <span className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
            {script.category}
          </span>
          <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium flex items-center gap-1">
            <Download className="w-4 h-4" />
            {script.downloads}
          </span>
          <span className="px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium flex items-center gap-1">
            <Star className="w-4 h-4" />
            {script.stars}
          </span>
        </div>

        <p className="text-gray-300 mb-6">{script.description}</p>

        {script.video && (
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3 text-cyan-400 font-bold">
              <Video className="w-5 h-5" />
              使用教程视频
            </div>
            <div className="aspect-video bg-black/40 rounded-xl flex items-center justify-center border border-gray-700">
              <div className="text-center">
                <Play className="w-16 h-16 mx-auto mb-2 text-gray-500" />
                <p className="text-gray-400">视频预览</p>
                <a
                  href={script.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  打开视频
                </a>
              </div>
            </div>
          </div>
        )}

        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-display text-lg font-bold text-white">脚本代码</h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={copyCode}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-sm font-bold text-white"
            >
              {copied ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              {copied ? '已复制' : '复制代码'}
            </motion.button>
          </div>
          <pre className="bg-black/50 border border-gray-800 rounded-xl p-4 overflow-x-auto max-h-96 overflow-y-auto">
            <code className="font-mono text-sm text-green-400">{script.code}</code>
          </pre>
        </div>

        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={copyCode}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-bold text-white"
          >
            <Copy className="w-5 h-5" />
            {copied ? '已复制' : '复制脚本'}
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://qm.qq.com/q/your-link"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 glass rounded-xl font-bold text-white hover:bg-white/10 transition-all"
          >
            进群交流
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
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

const CheckCircle2 = (props: any) => (
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
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="m9 11 3 3L22 4" />
  </svg>
)

const Play = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
)

export default App
