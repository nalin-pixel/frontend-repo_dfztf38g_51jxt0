import { Lightbulb, Sparkles } from "lucide-react";

export default function Tips() {
  return (
    <section id="tips" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-2xl bg-yellow-50 border border-yellow-200 p-6">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-6 h-6 text-yellow-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-yellow-900">ئامۆژگاری خێرا</h3>
              <ul className="mt-2 text-yellow-900/90 list-disc ps-5 space-y-1 text-sm">
                <li>کلیپەکان کورت بنێ، 15-45 چرکە باشترە.</li>
                <li>دەنگی پاک گرنگە؛ نزیک لە میکروفۆن بە.</li>
                <li>نوسینی سەرەکی کورت و جێگیر بەکاربەرە.</li>
                <li>ڕۆشنایی پێش ڕوی متمانە بخە.</li>
                <li>داهێنانی ڕەنگ و هێما یەک گونجاو بنێ.</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm text-yellow-900/80">
            <Sparkles className="w-4 h-4" />
            ئامادەی باشترکردنیت؟ هەنگاوەکان لە ژێرەوەن.
          </div>
        </div>
      </div>
    </section>
  );
}
