export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-gray-900">
            ڤیدیۆیەکی سادە و جوان بە کوردی دروست بکە
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed">
            ئەم ڕێنوماییە بۆ یارمەتیدانتانە تا یەکەم ڤیدیۆکەتان بە خێرایی و بێ ئاڕاستەدرۆست بکەن. هەموو شتێک بە زمانی کوردی ڕوونکراوەتەوە.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#steps" className="px-5 py-3 rounded-md bg-violet-600 text-white hover:bg-violet-700 transition">هەنگاوەکان ببینە</a>
            <a href="#tips" className="px-5 py-3 rounded-md border border-gray-300 text-gray-800 hover:bg-gray-50 transition">هەنگاوە باشەکان</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-video rounded-xl border bg-white shadow-sm overflow-hidden">
            <div className="w-full h-full grid place-items-center text-center p-8">
              <span className="text-sm text-gray-500">نمونەی سڕینەوەی ڤیدیۆ</span>
              <div className="mt-3 text-7xl">🎬</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
