import { motion } from 'motion/react';
import { Sparkles, Minus, MapPin, Clock, Info } from 'lucide-react';
import React from 'react';

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`py-24 md:py-40 px-6 ${className}`}>
      <div className="max-w-5xl mx-auto">
        {children}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-50 bg-zen-bg/80 backdrop-blur-md border-b border-zen-sand/50">
        <div className="text-xl tracking-[0.2em] font-light">心地頌缽</div>
        <a href="#booking" className="text-sm font-sans tracking-widest uppercase hover:text-zen-gold transition-colors">預約體驗</a>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1601614948834-8c763b2169cf?q=80&w=2938&auto=format&fit=crop" 
            alt="Singing Bowl Background" 
            className="w-full h-full object-cover opacity-15 mix-blend-multiply filter sepia-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zen-bg"></div>
        </motion.div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-zen-gold mb-6 flex justify-center"
          >
            <Sparkles className="w-6 h-6 animate-pulse opacity-70" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="title-text mb-8"
          >
            心地頌缽音療
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-lg md:text-xl font-sans tracking-wide max-w-2xl mx-auto text-zen-olive/80"
          >
            Singing Bowl Sound Therapy<br />
            獲得屬於你的身心靈平靜與安穩
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-20 flex justify-center"
          >
            <div className="w-[1px] h-24 bg-gradient-to-b from-zen-ink/40 to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <Section className="bg-white">
        <FadeIn>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl text-zen-ink mb-2">源自古老的</h2>
              <h2 className="text-4xl text-zen-ink mb-8">自然療法</h2>
              <div className="w-12 h-px bg-zen-gold mb-8"></div>
              <p className="mb-6 leading-relaxed">
                頌缽音療（Singing Bowl Sound Therapy）是源自尼泊爾的一種古老傳統自然療法，不涉及任何宗教，其原理是純然的科學。
              </p>
              <p className="leading-relaxed">
                透過聲波正向改善聽者腦波狀態，釋放壓力，透過震動促進皮下組織血液循環，緩解疼痛，在歐美各地已經非常普遍運用於輔助醫療上。只要舒服地躺著放鬆與放空，享受缽音交響沐浴與靜心冥想，從中感受寧靜，降低情緒波動。
              </p>
            </div>
            <div className="relative aspect-[4/5] rounded-tl-[100px] rounded-br-[100px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=2625&auto=format&fit=crop" 
                alt="Meditation" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Course Flow */}
      <Section>
        <FadeIn>
          <div className="text-center mb-20">
            <h2 className="text-4xl mb-4">90分鐘沉浸式體驗</h2>
            <p className="uppercase tracking-[0.2em] font-sans text-xs text-zen-olive">Immersive Experience</p>
          </div>
          
          <div className="space-y-16 max-w-3xl mx-auto">
            <div className="flex gap-8 group">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-zen-sand flex items-center justify-center font-sans text-sm text-zen-gold group-hover:bg-zen-gold group-hover:text-white transition-colors">10</div>
                <div className="w-px h-full bg-zen-sand mt-4"></div>
              </div>
              <div className="pb-8">
                <h3 className="text-2xl mb-2 flex items-center gap-4">
                  基礎介紹
                  <span className="text-sm font-sans tracking-widest text-zen-olive">MIN</span>
                </h3>
                <p>簡單的認識頌缽，了解即將體驗的頻率與共振原理。</p>
              </div>
            </div>

            <div className="flex gap-8 group">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-zen-sand flex items-center justify-center font-sans text-sm text-zen-gold group-hover:bg-zen-gold group-hover:text-white transition-colors">60</div>
                <div className="w-px h-full bg-zen-sand mt-4"></div>
              </div>
              <div className="pb-8">
                <h3 className="text-2xl mb-2 flex items-center gap-4">
                  音浴理療
                  <span className="text-sm font-sans tracking-widest text-zen-olive">MIN</span>
                </h3>
                <p className="mb-4">以放鬆的坐姿，接納淨化儀式，潔淨空間、除去雜念。</p>
                <p>以舒適的躺姿，享受頌缽音頻環繞與定點七脈輪共振，疏通身體能量開關。</p>
              </div>
            </div>

            <div className="flex gap-8 group">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-zen-sand flex items-center justify-center font-sans text-sm text-zen-gold group-hover:bg-zen-gold group-hover:text-white transition-colors">20</div>
              </div>
              <div>
                <h3 className="text-2xl mb-2 flex items-center gap-4">
                  正念冥想與顯化引導
                  <span className="text-sm font-sans tracking-widest text-zen-olive">MIN</span>
                </h3>
                <p className="mb-4">透過冥想練習，把思緒留在當下，觀察自身細微的情緒流動，達到接受、不評價的穩定情緒狀態。</p>
                <p>以淺顯易懂的顯化步驟，向宇宙傳遞能量，接受同頻的正向回饋。</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Target Audience & Info */}
      <Section className="bg-zen-ink text-zen-bg">
        <FadeIn>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl mb-12 text-white">適合對象</h2>
              <ul className="space-y-8">
                <li className="flex gap-4">
                  <Minus className="text-zen-gold shrink-0 mt-2" />
                  <p className="text-zen-sand font-sans">對頌缽音療充滿好奇、並想透過冥想引導探索內心深層平靜的初心者。</p>
                </li>
                <li className="flex gap-4">
                  <Minus className="text-zen-gold shrink-0 mt-2" />
                  <p className="text-zen-sand font-sans">平時工作壓力大、失眠、睡眠品質不佳，容易焦慮緊張想放鬆的朋友。</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/5 p-8 border border-white/10 rounded-2xl">
              <h2 className="text-2xl mb-8 text-white">課程資訊</h2>
              <div className="space-y-6 font-sans text-zen-sand">
                <div className="flex gap-4">
                  <MapPin className="text-zen-gold shrink-0 w-5 h-5 mt-1" />
                  <div>
                    <h4 className="text-white mb-1 font-serif text-xl tracking-wider">課程地點</h4>
                    <p className="text-sm">心地工作室 － 捷運永春站4號出口，步行約5分鐘。<br/><span className="text-xs opacity-70">（報名後提供詳細地址）</span></p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="text-zen-gold shrink-0 w-5 h-5 mt-1" />
                  <div>
                    <h4 className="text-white mb-1 font-serif text-xl tracking-wider">開放時段</h4>
                    <p className="text-sm">週ㄧ至五及週六<br/>14:00－15:30、16:00－17:30</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Info className="text-zen-gold shrink-0 w-5 h-5 mt-1" />
                  <div>
                    <h4 className="text-white mb-1 font-serif text-xl tracking-wider">貼心提醒</h4>
                    <ul className="text-sm space-y-2 list-disc list-inside opacity-80">
                      <li>備有泡棉床墊、枕頭、喀什米爾毯子</li>
                      <li>請穿著舒適衣服，避免裙子、牛仔褲、金屬及連帽</li>
                      <li>音療前避免過於飽食，結束後備有小茶點</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Booking Form Interface */}
      <Section className="bg-white" id="booking">
        <FadeIn>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl mb-4">預約體驗</h2>
              <p className="font-sans text-sm text-zen-olive tracking-widest uppercase">Reservation</p>
            </div>
            
            <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); alert('感謝您的預約，我們會盡快與您聯繫！'); }}>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <label className="zen-label">姓名 Name</label>
                  <input required type="text" className="zen-input" placeholder="您的姓名" />
                </div>
                <div className="flex-1">
                  <label className="zen-label">聯絡電話 Phone</label>
                  <input required type="tel" className="zen-input" placeholder="09xx-xxx-xxx" />
                </div>
              </div>

              <div>
                <label className="zen-label">方案選擇 Plan</label>
                <div className="grid grid-cols-2 gap-4 mt-3">
                  <label className="relative flex items-center justify-center p-6 border border-zen-sand cursor-pointer hover:border-zen-gold transition-colors has-[:checked]:border-zen-ink has-[:checked]:bg-zen-bg">
                    <input type="radio" name="plan" value="single" className="absolute opacity-0" required defaultChecked />
                    <div className="text-center">
                      <div className="font-serif text-xl mb-1">個人音療</div>
                      <div className="text-zen-gold font-sans text-sm">1人 / $2,000 NTD</div>
                    </div>
                  </label>
                  <label className="relative flex items-center justify-center p-6 border border-zen-sand cursor-pointer hover:border-zen-gold transition-colors has-[:checked]:border-zen-ink has-[:checked]:bg-zen-bg">
                    <input type="radio" name="plan" value="group" className="absolute opacity-0" required />
                    <div className="text-center">
                      <div className="font-serif text-xl mb-1">團體音療</div>
                      <div className="text-zen-gold font-sans text-sm">2人 / $3,600 NTD</div>
                      <div className="text-[10px] text-zen-olive font-sans mt-1">一位代表填寫即可</div>
                    </div>
                  </label>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <label className="zen-label">預計日期 Date</label>
                  <input required type="date" className="zen-input" />
                </div>
                <div className="flex-1">
                  <label className="zen-label">偏好時段 Time</label>
                  <select required className="zen-input cursor-pointer appearance-none">
                    <option value="" disabled selected>選擇時段</option>
                    <option value="14:00">14:00 － 15:30</option>
                    <option value="16:00">16:00 － 17:30</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="zen-label">備註事項 Notes (選填)</label>
                <textarea className="zen-input resize-none h-24" placeholder="有任何想預先讓我們知道的身體狀況，或特別期待改善的部分嗎？"></textarea>
              </div>

              <div className="pt-8 text-center">
                <button type="submit" className="zen-button w-full md:w-auto">
                  送出預約表單 Submit Request
                </button>
              </div>
            </form>
          </div>
        </FadeIn>
      </Section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center border-t border-zen-sand">
        <div className="text-2xl tracking-[0.2em] mb-4">心地頌缽</div>
        <div className="font-sans text-sm text-zen-olive space-y-2">
          <p>Singing Bowl Sound Therapy</p>
          <p className="opacity-60 text-xs mt-8">© 2024 心地工作室. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
