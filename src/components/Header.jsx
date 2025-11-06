import { Video, Star } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-violet-600 text-white">
            <Video className="w-5 h-5" />
          </div>
          <span className="font-semibold tracking-tight">ڤیدیۆی یەکەم</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#steps" className="hover:text-gray-900">هەنگاوەکان</a>
          <a href="#tips" className="hover:text-gray-900">ئامۆژگاریەکان</a>
          <a href="#contact" className="hover:text-gray-900">پەیوەندی</a>
        </nav>
        <a href="#steps" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gray-900 text-white text-sm hover:bg-gray-800">
          <Star className="w-4 h-4" />
          دەستپێبکە
        </a>
      </div>
    </header>
  );
}
