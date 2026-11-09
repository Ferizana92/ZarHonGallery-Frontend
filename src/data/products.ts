import type { GoldProduct } from '../types/product'

export const products: GoldProduct[] = [
  { id: 1, name: 'گردنبند ونوس', description: 'زنجیر ظریف با آویز مینیمال؛ انتخابی لطیف برای استفاده روزمره.', price: 42850000, weight: 1.42, manufacturingFee: 18, karat: 18, category: 'necklace', image: '/images/necklace-venus.jpg', popular: true, tag: 'پرفروش' },
  { id: 2, name: 'دستبند کارتیه ظریف', description: 'ترکیبی از سادگی و درخشش با زنجیری سبک و چشم‌نواز.', price: 56400000, weight: 2.86, manufacturingFee: 20, karat: 18, category: 'bracelet', image: '/images/Cartier.jpg', popular: true },
  { id: 3, name: 'گوشواره میخی سلین', description: 'فرمی ساده و مدرن برای درخششی آرام در هر موقعیت.', price: 81950000, weight: 3.98, manufacturingFee: 17, karat: 18, category: 'earring', image: '/images/goosh.jpg', popular: true, tag: 'ظریف و روزمره' },
  { id: 4, name: 'انگشتر موج', description: 'خطوط نرم و سیال با پرداختی براق و طراحی متفاوت.', price: 54200000, weight: 2.55, manufacturingFee: 19, karat: 18, category: 'ring', image: '/images/Ring.jpg', popular: true },
  { id: 5, name: 'پابند آوا', description: 'زنجیری سبک با جزئیات کوچک و دلنشین برای استایل تابستانی.', price: 80900000, weight: 4.18, manufacturingFee: 18, karat: 18, category: 'anklet', image: '/images/Paband.jpg', popular: false },
  { id: 6, name: 'گردنبند هاله', description: 'آویز دایره‌ای الهام‌گرفته از فرم‌های مینیمال و ماندگار.', price: 78700000, weight: 2.05, manufacturingFee: 21, karat: 18, category: 'necklace', image: '/images/neck.jpg', popular: true, tag: 'تازه رسیده' },
  { id: 7, name: 'دستبند زنجیری نور', description: 'مدلی کلاسیک با جلوه‌ای امروزی و قابلیت ست شدن با ساعت.', price: 75300000, weight: 1.72, manufacturingFee: 18, karat: 18, category: 'bracelet', image: '/images/Cartier.jpg', popular: false },
  { id: 8, name: 'انگشتر مینیمال', description: 'حلقه‌ای باریک و ظریف؛ مناسب برای استفاده تکی یا ترکیبی.', price: 19800000, weight: 1.06, manufacturingFee: 16, karat: 18, category: 'ring', image: '/images/Moj.jpg', popular: false },
]
export const categoryLabels: Record<string, string> = {
  all: 'همه محصولات', necklace: 'گردنبند', bracelet: 'دستبند', earring: 'گوشواره', anklet: 'پابند', ring: 'انگشتر',
}
export const formatPrice = (price: number) => new Intl.NumberFormat('fa-IR').format(price) + ' تومان' 