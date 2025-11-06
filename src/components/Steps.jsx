import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "ئامادەکاری",
    desc: "بابەت، دەق، و دەنگت دیاری بکە. مۆبایل بەکاربەرە و لە شوینێکی ڕوونگای باش جێگیر ببە.",
  },
  {
    title: "تۆمارکردن",
    desc: "کەمرە ڕاست بکەوە، فۆکۆس بکە و بە ئارامی قسە بکە. کلیپی کورت باشترە.",
  },
  {
    title: "دەستکاری",
    desc: "بۆشایی لەنێوان کلیپەکان ببڕە، دەنگ ڕاست بکە و هێمای نووسین زیاد بکە.",
  },
  {
    title: "بڵاوکردنەوە",
    desc: "سەردێڕ و وەسفێکی خاوەنی کلیلە وشە بنووسە و کلیپەکە لە سۆشیال میدیا بەش بکە.",
  },
];

export default function Steps() {
  return (
    <section id="steps" className="bg-gradient-to-b from-white to-gray-50 border-y">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">هەنگاوەکان</h2>
        <p className="text-gray-600 mt-2">بە ئێمەوە پەیڕەوی ئەم چوار هەنگاوە بکە.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-xl border bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-violet-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">{s.title}</h3>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
