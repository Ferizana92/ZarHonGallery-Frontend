<<<<<<< HEAD
# ZarHonGallery-Frontend
=======
# ZarHonGallery

فروشگاه نمایشی زیورآلات طلای ۱۸ عیار با React، TypeScript و Vite.

## اجرا
```bash
npm install
npm run dev
```

## ساخت نسخه Production
```bash
npm run build
npm run preview
```

## ساختار
- `src/data/products.ts`: داده‌های نمونه محصولات
- `src/services/productService.ts`: لایه دسترسی به محصولات؛ در آینده با API جایگزین می‌شود.
- `src/types/product.ts`: مدل TypeScript محصول
- `src/App.tsx`: صفحه اصلی و تعاملات
- `src/styles/global.css`: Design System و Responsive Styles
- `public/images`: لوگوهای ارسالی برند

## اتصال به Backend
در زمان آماده شدن ASP.NET Core API، منطق دریافت داده در `productService.ts` و سرویس‌های مستقل مشتری/سفارش توسعه داده می‌شوند. فرم‌ها در نسخه فعلی فقط اعتبارسنجی سمت مرورگر و پیام موفقیت نمایشی دارند و اطلاعاتی به سرور ارسال نمی‌کنند.

## نکات محتوایی
قیمت‌ها، وزن‌ها و اجرت‌های فعلی داده‌های نمونه هستند و نباید به‌عنوان قیمت واقعی فروشگاه منتشر شوند. تصاویر محصولات از Unsplash بارگذاری می‌شوند و برای نمایش به اینترنت نیاز دارند.
>>>>>>> 4ca83f5 (Initial commit - ZarHon Gallery Frontend)
