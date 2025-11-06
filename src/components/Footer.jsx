export default function Footer() {
  return (
    <footer id="contact" className="border-t mt-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 text-center">
        <p className="text-gray-700">بەرنامەکە بۆ یارمەتیدانی دروستکردنی یەکەم ڤیدیۆی کوردیە.</p>
        <p className="text-sm text-gray-500 mt-2">© {new Date().getFullYear()} - هەموو مافەکان پارێزراون</p>
      </div>
    </footer>
  );
}
