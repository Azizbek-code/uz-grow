import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function PlasticGreenhousePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Plastik issiqxona qurish
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Zamonaviy plastik qoplamali issiqxonalar - samarali va arzon yechim
            </p>
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 organic-hover"
            >
              Bepul konsultatsiya
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Plastik issiqxonalarning afzalliklari
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="organic-hover">
                <CardHeader>
                  <CardTitle className="text-green-600">Energiya tejamkorlik</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Plastik qoplama yorug'likni yaxshi o'tkazadi, qishda isitish xarajatlarini kamaytiradi.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="organic-hover">
                <CardHeader>
                  <CardTitle className="text-green-600">Oson o'rnatish</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Yengil va moslashuvchan materiallar, tez va oson o'rnatish jarayonini ta'minlaydi.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="organic-hover">
                <CardHeader>
                  <CardTitle className="text-green-600">Uzoq muddatli xizmat</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Zamonaviy plastiklar UV nurlariga chidamli, 10+ yil xizmat qiladi.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="organic-hover">
                <CardHeader>
                  <CardTitle className="text-green-600">Arzon narx</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Shisha va polikarbonatga qaraganda ancha arzon, yuqori ROI ta'minlaydi.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="organic-hover">
                <CardHeader>
                  <CardTitle className="text-green-600">Yaxshi ventilyatsiya</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Ventilyatsiya oynalari bilan jihozlangan, iqlim nazorati oson.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="organic-hover">
                <CardHeader>
                  <CardTitle className="text-green-600">Ekologik toza</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Qayta ishlash materiallari, atrof-muhit uchun xavfsiz.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Plastik issiqxona loyihasini boshlang
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Mutaxassislarimiz siz uchun eng yaxshi yechimni tanlaydi va loyihani amalga oshiradi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 organic-hover"
            >
              Hisoblash so'rovi
            </Button>
            <Button
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 organic-hover"
            >
              Mutaxassis bilan bog'lanish
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
