import { useEffect, useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { ArrowLeft, ArrowUpLeft, Award, Check, Clock3, Gem, Instagram, Menu as MenuIcon, MessageCircle, Phone, ShieldCheck, Sparkles, Truck, X } from 'lucide-react'
import { categoryLabels, formatPrice } from './data/products'
import { productService } from './services/productService'
import type { GoldProduct } from './types/product'

const categories = ['all', 'necklace', 'bracelet', 'earring', 'anklet', 'ring'] as const

function App() {
  const [items, setItems] = useState<GoldProduct[]>([])
  const [category, setCategory] = useState<string>('all')
  const [selected, setSelected] = useState<GoldProduct | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [orderSent, setOrderSent] = useState(false)
  const [contactSent, setContactSent] = useState(false)
  const [error, setError] = useState('')
  const [active, setActive] = useState('home')

  useEffect(() => { productService.getAll().then(setItems).catch(() => setError('دریافت محصول مورد نظر با مشکل روبه‌رو شد.')) }, [])
  useEffect(() => {
    const onScroll = () => {
      const sections = ['home', 'products', 'about', 'order', 'contact']
      const current = sections.reverse().find(id => {
        const el = document.getElementById(id)
        return el && el.getBoundingClientRect().top <= 150
      })
      if (current) setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const filtered = useMemo(() => category === 'all' ? items : items.filter(p => p.category === category), [items, category])
  const goTo = (id: string) => { setMobileOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }
  const submitOrder = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setOrderSent(true)
    e.currentTarget.reset()
  }
  const submitContact = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setContactSent(true)
    e.currentTarget.reset()
  }

  return <div className="site-shell">
    <div className="announcement"><Sparkles size={14} /> ظرافتی برای هر روز؛ مجموعه طلای ۱۸ عیار ZarHonGallery <span>•</span> پاسخگویی ۸ تا ۲۰</div>
    <header className="header">
      <div className="container nav-wrap">
        <button className="mobile-toggle icon-button" aria-label={mobileOpen ? 'بستن منو' : 'باز کردن منو'} aria-expanded={mobileOpen} onClick={() => setMobileOpen(v => !v)}>{mobileOpen ? <X /> : <MenuIcon />}</button>
        <a className="brand" href="#home" onClick={e => { e.preventDefault(); goTo('home') }}>
          <img src="/images/zarhon-mark.png" alt="نشان گربه و حروف ZH زرهن گالری" />
          <span><b>ZarHonGallery</b><small>GOLD · HONOR · BEAUTY</small></span>
        </a>
        <nav className="desktop-nav" aria-label="منوی اصلی">
          {[['home','خانه'],['products','محصولات'],['about','درباره ما'],['order','ثبت سفارش'],['contact','تماس با ما']].map(([id,label]) =>
            <button key={id} className={active === id ? 'nav-link active' : 'nav-link'} onClick={() => goTo(id)}>{label}</button>)}
        </nav>
        <button className="button button-dark nav-cta" onClick={() => goTo('order')}>مشاوره و سفارش <ArrowLeft size={16}/></button>
      </div>
      {mobileOpen && <nav className="mobile-nav" aria-label="منوی موبایل">
        {[['home','خانه'],['products','محصولات'],['about','درباره ما'],['order','ثبت سفارش'],['contact','تماس با ما']].map(([id,label]) =>
          <button key={id} onClick={() => goTo(id)}>{label}<ArrowUpLeft size={16}/></button>)}
      </nav>}
    </header>

    <main>
      <section id="home" className="hero">
        <div className="hero-image" role="img" aria-label="زیورآلات طلای ظریف و مینیمال  " />
          <div className="hero-stamp"><img src="/images/zarhon-mark.png" alt="" /><span>هر قطعه، یک روایت</span></div>
        <div className="hero-shade" />
        <div className="container hero-content">
          <div className="eyebrow light"><span/> GOLD · HONOR · BEAUTY <span/></div>
          <h1>زیبایی در جزئیات است؛<br/><em>درخشش از تو آغاز می‌شود.</em></h1>
          <p>مجموعه‌ای از طلای ۱۸ عیار ظریف و مینیمال؛ برای لحظه‌هایی که دوست داری به‌یادماندنی باشند.</p>
          <div className="hero-actions">
            <button className="button button-gold" onClick={() => goTo('products')}>طلای مورد علاقه‌ات را انتخاب کن <ArrowLeft size={17}/></button>
            <button className="text-button light-text" onClick={() => goTo('products')}>مشاهده مجموعه <ArrowUpLeft size={17}/></button>
          </div>
          <div className="hero-note"><span className="note-line"/> طراحی ظریف، انتخاب ماندگار</div>
        </div>
      </section>

      <section className="intro-strip">
        <div className="container intro-grid">
          <div><span className="intro-number">۰۱</span><b>انتخاب با سلیقه تو</b><small>مدل‌هایی برای استایل‌های متفاوت</small></div>
          <div><span className="intro-number">۰۲</span><b>طلای ۱۸ عیار</b><small>اطلاعات شفاف درباره مشخصات کالا</small></div>
          <div><span className="intro-number">۰۳</span><b>همراه خرید تو</b><small>برای دریافت راهنمایی در کنارت هستیم</small></div>
        </div>
      </section>

      <section id="products" className="section products-section">
        <div className="container">
          <div className="section-heading">
            <div><div className="eyebrow"><span/> THE COLLECTION <span/></div><h2>درخششِ <em>انتخاب تو</em></h2><p>از میان طراحی‌های ظریف و مینیمال، مدل محبوبت را پیدا کن.</p></div>
            <button className="underlined-link" onClick={() => { setCategory('all'); goTo('products') }}>مشاهده همه محصولات <ArrowLeft size={16}/></button>
          </div>
          <div className="filters" role="group" aria-label="فیلتر دسته‌بندی محصولات">
            {categories.map(c => <button key={c} className={category === c ? 'filter active' : 'filter'} onClick={() => setCategory(c)}>{categoryLabels[c]}</button>)}
          </div>
          {error && <div className="notice error">{error}</div>}
          {!items.length && !error && <div className="loading"><span className="spinner"/> در حال آماده‌سازی مجموعه...</div>}
          {!!items.length && !filtered.length && <div className="empty-state">در این دسته‌بندی محصولی ثبت نشده است.</div>}
          <div className="product-grid">
            {filtered.map((p, i) => <article className="product-card" key={p.id} style={{ animationDelay: `${i * 55}ms` }}>
              <button className="product-image" onClick={() => setSelected(p)} aria-label={`مشاهده جزئیات ${p.name}`}>
                <img src={p.image} alt={p.name} loading="lazy" />
                {p.tag && <span className="product-tag">{p.tag}</span>}
                <span className="image-action"><ArrowUpLeft size={18}/></span>
              </button>
              <div className="product-meta"><span>{categoryLabels[p.category]}</span><span><Gem size={13}/> طلای ۱۸ عیار</span></div>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <div className="product-bottom"><strong>{formatPrice(p.price)}</strong><button onClick={() => setSelected(p)}>جزئیات محصول <ArrowLeft size={15}/></button></div>
            </article>)}
          </div>
          <p className="price-disclaimer">قیمت‌های نمایش‌داده‌شده نمونه هستند و برای نمایش رابط کاربری استفاده شده‌اند؛ قیمت نهایی پس از استعلام روز و تأیید فروشگاه اعلام می‌شود.</p>
        </div>
      </section>

      <section className="brand-story" id="about">
        <div className="story-photo"><img src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1200&q=85" alt="جزئیات یک زیور طلایی ظریف" loading="lazy"/><div className="photo-caption">THE ART OF DETAILS <span>۱۸K GOLD</span></div></div>
        <div className="story-copy">
          <div className="eyebrow"><span/> OUR STORY <span/></div>
          <h2>هر قطعه،<br/><em>روایتی از سلیقه تو</em></h2>
          <p>ZarHonGallery با علاقه به زیبایی‌های ساده شکل گرفته است؛ جایی برای انتخاب زیورآلاتی که بدون اغراق می‌درخشند و با لحظه‌های روزمره همراه می‌شوند.</p>
          <p>ما باور داریم ارزش یک انتخاب، در هماهنگی آن با شخصیت و سلیقه توست. برای همین تلاش می‌کنیم در مسیر انتخاب، با اطلاعات روشن و راهنمایی صمیمانه کنارت باشیم.</p>
          <button className="button button-outline" onClick={() => goTo('contact')}>با ما در ارتباط باش <ArrowLeft size={16}/></button>
          <div className="story-signature">ZarHonGallery <Sparkles size={17}/></div>
        </div>
      </section>

      <section className="benefits section">
        <div className="container">
          <div className="center-heading"><div className="eyebrow"><span/> WHY ZARHON <span/></div><h2>خریدی با <em>آرامش خیال</em></h2><p>جزئیاتی که تجربه انتخاب و خرید را دلنشین‌تر می‌کنند.</p></div>
          <div className="benefit-grid">
            {[
              { icon: <Truck/>, title: 'ارسال هماهنگ‌ شده', desc: 'جزئیات و زمان ارسال پیش از نهایی شدن سفارش با شما هماهنگ می‌شود.' },
              { icon: <ShieldCheck/>, title: 'اطلاعات شفاف', desc: 'وزن، عیار و اجرت هر محصول همراه فاکتور معتبر ارائه می‌شود.' },
              { icon: <Award/>, title: 'طراحی ظریف', desc: 'تمرکز بر مدل‌های مینیمال و قابل استفاده در موقعیت‌های مختلف.' },
              { icon: <MessageCircle/>, title: 'مشاوره خرید', desc: 'برای انتخاب مدل مناسب می‌توانی پیش از سفارش با ما گفتگو کنی.' },
            ].map((item,i) => <div className="benefit" key={i}><div className="benefit-icon">{item.icon}</div><h3>{item.title}</h3><p>{item.desc}</p></div>)}
          </div>
        </div>
      </section>

      <section className="order-section" id="order">
        <div className="order-decoration"><img src="/images/zarhon-mark.png" alt=""/></div>
        <div className="container order-layout">
          <div className="order-copy"><div className="eyebrow light"><span/> YOUR SPECIAL ORDER <span/></div><h2>انتخابت را<br/><em>به ما بسپار</em></h2><p>مدل مورد نظرت را انتخاب کرده‌ای یا برای خرید طلا به راهنمایی نیاز داری؟ اطلاعاتت را ثبت کن تا برای هماهنگی با تو تماس بگیریم.</p><div className="order-contact"><Phone size={17}/><span>پاسخگویی همه‌روزه</span><b>۸ تا ۲۰</b></div></div>
          <form className="form-card" onSubmit={submitOrder}>
            <div className="form-title"><h3>درخواست سفارش و مشاوره</h3><span>فرم درخواست</span></div>
            {orderSent && <div className="notice success"><Check size={17}/> درخواستت ثبت شد. برای هماهنگی با تو تماس می‌گیریم.</div>}
            <div className="form-grid">
              <label>نام و نام خانوادگی<input name="name" required minLength={2} placeholder="نام شما"/></label>
              <label>شماره تماس<input name="phone" required inputMode="tel" pattern="09[0-9]{9}" title="شماره موبایل باید با 09 شروع شده و ۱۱ رقم باشد." placeholder="۰۹۱۲۱۲۳۴۵۶۷"/></label>
              <label>مدل مورد نظر<input name="model" placeholder="مثلاً دستبند ظریف"/></label>
              <label>وزن تقریبی (گرم)<input name="weight" type="number" min="0.1" step="0.01" placeholder="مثلاً ۲.۵"/></label>
              <label>روز مناسب تماس<input name="date" type="date" min={new Date().toISOString().split('T')[0]} required/></label>
              <label>زمان مناسب تماس<select name="time" required defaultValue=""><option value="" disabled>انتخاب زمان</option><option>۸ تا ۱۲</option><option>۱۲ تا ۱۶</option><option>۱۶ تا ۲۰</option></select></label>
              <label className="full-field">توضیحات بیشتر<textarea name="note" rows={3} placeholder="اگر مدل یا توضیح خاصی مدنظرت است بنویس..."/></label>
            </div>
            <button className="button button-dark submit-button" type="submit">ثبت درخواست <ArrowLeft size={17}/></button>
            <small className="form-hint">اطلاعات شما فقط برای پیگیری همین درخواست استفاده می‌شود.</small>
          </form>
        </div>
      </section>

      <section className="contact-section section" id="contact">
        <div className="container contact-layout">
          <div className="contact-info"><div className="eyebrow"><span/> SAY HELLO <span/></div><h2>برای یک انتخاب<br/><em>زیبا، گفتگو کنیم.</em></h2><p>پرسشی درباره محصولات داری؟ برای دریافت اطلاعات بیشتر یا مشاوره خرید با ما در ارتباط باش.</p>
            <a href="mailto:f.motevalian92@gmail.com" className="contact-row"><span className="contact-icon">@</span><span><small>ایمیل</small><b>f.motevalian92@gmail.com</b></span><ArrowUpLeft/></a>
            <a href="https://instagram.com/ZarHonGallery" target="_blank" rel="noreferrer" className="contact-row"><span className="contact-icon"><Instagram/></span><span><small>اینستاگرام</small><b>@ZarHonGallery</b></span><ArrowUpLeft/></a>
            <div className="contact-row"><span className="contact-icon"><Clock3/></span><span><small>ساعات پاسخگویی</small><b>هر روز، ساعت ۸ تا ۲۰</b></span></div>
          </div>
          <form className="contact-form" onSubmit={submitContact}><h3>پیامت را برای ما بنویس</h3>{contactSent && <div className="notice success"><Check size={17}/> پیام شما ثبت شد.</div>}
            <label>نام<input name="contactName" required placeholder="نام شما"/></label>
            <label>ایمیل<input name="email" type="email" required placeholder="example@email.com"/></label>
            <label>پیام<textarea name="message" rows={5} required minLength={5} placeholder="چطور می‌توانیم کمکتان کنیم؟"/></label>
            <button className="button button-dark" type="submit">ارسال پیام <ArrowLeft size={17}/></button>
          </form>
        </div>
      </section>
    </main>

    <footer className="footer"><div className="container footer-main">
      <div className="footer-brand"><img src="/images/zarhon-full-logo.png" alt="لوگوی ZarHonGallery"/><p>طلای ۱۸ عیار ظریف و مینیمال؛ انتخابی برای درخشش هر روز.</p></div>
      <div><h4>دسترسی سریع</h4><button onClick={() => goTo('home')}>خانه</button><button onClick={() => goTo('products')}>محصولات</button><button onClick={() => goTo('about')}>درباره ما</button><button onClick={() => goTo('order')}>ثبت سفارش</button></div>
      <div><h4>ارتباط با ما</h4><a href="mailto:f.motevalian92@gmail.com">f.motevalian92@gmail.com</a><a href="https://instagram.com/ZarHonGallery" target="_blank" rel="noreferrer">اینستاگرام ZarHonGallery</a><span>پاسخگویی: ۸ تا ۲۰</span></div>
      <div className="footer-note"><Gem/><p>زیبایی در سادگی‌ست؛<br/>در انتخابت بدرخش.</p></div>
    </div><div className="container footer-bottom"><span>© ۲۰۲۶ ZarHonGallery. تمامی حقوق محفوظ و متعلق به گالری ZarHonGallery است.</span><span>GOLD · HONOR · BEAUTY</span></div></footer>

    {selected && <div className="modal-backdrop" role="presentation" onMouseDown={e => { if (e.target === e.currentTarget) setSelected(null) }}>
      <section className="product-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className="modal-close icon-button" onClick={() => setSelected(null)} aria-label="بستن جزئیات"><X/></button>
        <div className="modal-image"><img src={selected.image} alt={selected.name}/></div>
        <div className="modal-content"><div className="eyebrow"><span/> PRODUCT DETAILS <span/></div><span className="modal-category">{categoryLabels[selected.category]}</span><h2 id="modal-title">{selected.name}</h2><p>{selected.description}</p><strong className="modal-price">{formatPrice(selected.price)}</strong>
          <div className="spec-list"><div><span>وزن تقریبی</span><b>{selected.weight.toLocaleString('fa-IR')} گرم</b></div><div><span>عیار</span><b>۱۸</b></div><div><span>اجرت ساخت</span><b>{selected.manufacturingFee.toLocaleString('fa-IR')}٪</b></div></div>
          <p className="modal-disclaimer">قیمت و مشخصات نهایی هنگام ثبت سفارش تأیید می‌شوند.</p><button className="button button-dark" onClick={() => { setSelected(null); goTo('order') }}>درخواست این محصول <ArrowLeft size={16}/></button>
        </div>
      </section>
    </div>}
  </div>
}
export default App