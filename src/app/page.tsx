import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Richel Group style */}
      <section className="relative bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                4 yildan ortiq tajriba bilan 95 mamlakatda sizning yoningizdagi
                oilaviy kompaniya
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Biz mijozlarimiz bilan uzoq muddatli munosabatlarni qurishga
                sodiq bo'lgan agronomik yechimlar provayderimiziz
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                >
                  Loyihangizni boshlang
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3"
                >
                  Bizning loyihalarimiz
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-green-100 rounded-lg p-8 text-center">
                <div className="text-6xl font-bold text-green-600 mb-4">4+</div>
                <div className="text-xl text-gray-700">Yillik tajriba</div>
                <div className="text-lg text-gray-600 mt-2">
                  O'zbekistonda va Markaziy Osiyoda
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Va'dalarimiz videosini tomosha qiling
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <svg
                  className="w-16 h-16 text-gray-400 mx-auto mb-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-gray-600">Video hozircha mavjud emas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News/Events Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Tadbirlar
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-green-600 pl-4">
                  <h3 className="font-semibold text-gray-900">
                    My Plant & Garden 2026
                  </h3>
                  <p className="text-gray-600">Milan, Italiya. 18-20 fevral</p>
                  <a href="#" className="text-green-600 hover:text-green-700">
                    Batafsil...
                  </a>
                </div>
              </div>
              <div className="mt-6">
                <Button
                  variant="outline"
                  className="border-green-600 text-green-600"
                >
                  Barcha sanalar
                </Button>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Yangiliklar / Press
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-green-600 pl-4">
                  <h3 className="font-semibold text-gray-900">
                    Issiqxona bozori tez rivojlanmoqda
                  </h3>
                  <p className="text-gray-600">
                    Mijozlar tobora ko'proq xabardor bo'lishmoqda...
                  </p>
                  <a href="#" className="text-green-600 hover:text-green-700">
                    Batafsil...
                  </a>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h3 className="font-semibold text-gray-900">
                    Barqaror o'sish uchun yangi ishlab chiqarish
                  </h3>
                  <p className="text-gray-600">
                    Yangi ishlab chiqarish qurilmasi...
                  </p>
                  <a href="#" className="text-green-600 hover:text-green-700">
                    Batafsil...
                  </a>
                </div>
              </div>
              <div className="mt-6">
                <Button
                  variant="outline"
                  className="border-green-600 text-green-600"
                >
                  Hammasini ko'rish
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Navigation Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">UZ-GROW</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/about"
                    className="text-gray-600 hover:text-green-600"
                  >
                    Missiya, vizyon, qadriyatlar
                  </a>
                </li>
                <li>
                  <a
                    href="/history"
                    className="text-gray-600 hover:text-green-600"
                  >
                    Tarix va asoschilar
                  </a>
                </li>
                <li>
                  <a
                    href="/international"
                    className="text-gray-600 hover:text-green-600"
                  >
                    Xalqaro faoliyat
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-600 hover:text-green-600"
                  >
                    Mutaxassisliklar va xizmatlar
                  </a>
                </li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Yechimlarimiz
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/plastic-greenhouse"
                    className="text-gray-600 hover:text-green-600"
                  >
                    Plastik issiqxona
                  </a>
                </li>
                <li>
                  <a
                    href="/venlo-greenhouse"
                    className="text-gray-600 hover:text-green-600"
                  >
                    Venlo issiqxonalari
                  </a>
                </li>
                <li>
                  <a
                    href="/semi-closed"
                    className="text-gray-600 hover:text-green-600"
                  >
                    Yopiq issiqxona
                  </a>
                </li>
                <li>
                  <a
                    href="/photovoltaic"
                    className="text-gray-600 hover:text-green-600"
                  >
                    Fotovoltai issiqxona
                  </a>
                </li>
                <li>
                  <a
                    href="/equipment"
                    className="text-gray-600 hover:text-green-600"
                  >
                    Uskunalar
                  </a>
                </li>
              </ul>
            </div>

            {/* Your Job */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Sizning ishingiz
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/vegetable-growers"
                    className="text-gray-600 hover:text-green-600"
                  >
                    Sabzavot yetishtiruvchilar, tuproq ekinlari
                  </a>
                </li>
                <li>
                  <a
                    href="/suspended-crops"
                    className="text-gray-600 hover:text-green-600"
                  >
                    Sabzavot yetishtiruvchilar, osilgan ekinlar
                  </a>
                </li>
                <li>
                  <a
                    href="/horticulturists"
                    className="text-gray-600 hover:text-green-600"
                  >
                    Bog'dorchilar / O'simlikchilar
                  </a>
                </li>
                <li>
                  <a
                    href="/seed-growers"
                    className="text-gray-600 hover:text-green-600"
                  >
                    Urug' yetishtiruvchilar
                  </a>
                </li>
                <li>
                  <a
                    href="/young-plants"
                    className="text-gray-600 hover:text-green-600"
                  >
                    O'smcha yetishtiruvchilar
                  </a>
                </li>
              </ul>
            </div>

            {/* Other */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Boshqa</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/portfolio"
                    className="text-gray-600 hover:text-green-600"
                  >
                    Bizning referenslarimiz
                  </a>
                </li>
                <li>
                  <a
                    href="/news"
                    className="text-gray-600 hover:text-green-600"
                  >
                    Yangiliklar
                  </a>
                </li>
                <li>
                  <a
                    href="/agenda"
                    className="text-gray-600 hover:text-green-600"
                  >
                    Tadbirlar
                  </a>
                </li>
                <li>
                  <a
                    href="/press"
                    className="text-gray-600 hover:text-green-600"
                  >
                    Yangiliklar/Press
                  </a>
                </li>
                <li>
                  <a
                    href="/webtv"
                    className="text-gray-600 hover:text-green-600"
                  >
                    WebTV
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-600 hover:text-green-600"
                  >
                    Biz bilan bog'laning
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            UZ-GROW bilan hamkorlik qiling
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Biz sizning issiqxona loyihangizni amalga oshirishga tayyormiz. 4
            yillik tajriba va 100+ muvaffaqiyatli loyiha.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3"
          >
            Biz bilan bog'laning
          </Button>
        </div>
      </section>
    </div>
  );
}
