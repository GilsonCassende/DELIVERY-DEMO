import { useState } from 'react';
import { Flame, Clock, MapPin, Star, MessageCircle, ChevronRight } from 'lucide-react';

/**
 * Energy & Velocity Design System
 * - Cores: Vermelho (#EF4444) + Laranja (#F97316)
 * - Tipografia: Poppins Bold para headlines, Inter Regular para body
 * - Animações: 200-300ms, rápidas e dinâmicas
 * - Layout: Mobile-first, botões full-width, foco em conversão
 */

const WHATSAPP_NUMBER = '5511999999999'; // Substituir com número real
const WHATSAPP_MESSAGE = 'Olá! Gostaria de fazer um pedido!';

const openWhatsApp = (product?: string) => {
  const message = product 
    ? `Olá! Gostaria de pedir: ${product}`
    : WHATSAPP_MESSAGE;
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
};

export default function Home() {
  const [selectedCombo, setSelectedCombo] = useState<number | null>(null);

  const combos = [
    {
      id: 1,
      name: 'Combo Gourmet',
      description: 'Burger premium + batata + refrigerante',
      price: 'R$ 49,90',
      badge: 'MAIS VENDIDO',
      image: 'https://private-us-east-1.manuscdn.com/sessionFile/521O742Iaw0CifDDTuS1ux/sandbox/a7s5oKk08YLroNt3TH9KWK-img-1_1771614680000_na1fn_aGVyby1idXJnZXI.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNTIxTzc0MklhdzBDaWZERFR1UzF1eC9zYW5kYm94L2E3czVvS2swOFlMcm9OdDNUSDlLV0staW1nLTFfMTc3MTYxNDY4MDAwMF9uYTFmbl9hR1Z5YnkxaWRYSm5aWEkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Ymxty6UEjKj6vvtbZimnKDTFMkrKew-~158o39c124QC~rHWsMA2Z~0ny8q0njqEYFmsyRRmDHQnYA7zAKu2E1uKlZshLqd26NS9t1P2mbvBO1EnwF7Alw3xKMfOYtfn1RLjyFo-Mo3fF7OonHqW-VPkr011cN195EagBwNfSlQPULzvnLNuWFMFiPmBFz9b640q~q4OLK8LD8E57gyEK5wqaYMcd41cx5vQAC1CqHuJ8UnWTShfK61PWHXCYCYwUiCuqZqQIC5JXfbzP9bOlo5ewnMi6Y7yh9PbCAkB7MlodfOYw4cxjrRfiFmLrBBCalKqROtoUinvh6wVQw4WYQ__',
    },
    {
      id: 2,
      name: 'Combo Pizza',
      description: 'Pizza grande + bebida + sobremesa',
      price: 'R$ 59,90',
      badge: 'NOVO',
      image: 'https://private-us-east-1.manuscdn.com/sessionFile/521O742Iaw0CifDDTuS1ux/sandbox/a7s5oKk08YLroNt3TH9KWK-img-2_1771614677000_na1fn_cGl6emEtY29tYm8.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNTIxTzc0MklhdzBDaWZERFR1UzF1eC9zYW5kYm94L2E3czVvS2swOFlMcm9OdDNUSDlLV0staW1nLTJfMTc3MTYxNDY3NzAwMF9uYTFmbl9jR2w2ZW1FdFkyOXRZbTgucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=oaiz3eOnvxw7gFnadF7v70wjZqN9cVaxVOvZcsLls11SVGu4A09ZdehKVoGx-~NikURpYKAjD3MecxRglgRHOzo7BECNWbXhc~8wJWqA0GAdCyXeZYGPsBSPI9KKdaly5U7cq0pLWnCElCahmAz9i3AO30Uk6~MAp~VZ~sRhOT8ayYloAXIICoSdf7QuLPEK8~~L~iUiE~4CFMvZgw73sRehdCJ4pswu9sDzGjLrywlRs2nhxh1aS8EoSZYJtwV5G6tMNMh~A~lHg8py-Zdpsrib4tbBaGfp6kHapMYYXOQVMerypBAosoYUYlQgtIM442C3dsv7N4EzWzmLn6hd4Q__',
    },
    {
      id: 3,
      name: 'Combo Sushi',
      description: 'Sushi premium + sopa + bebida',
      price: 'R$ 69,90',
      badge: 'PREMIUM',
      image: 'https://private-us-east-1.manuscdn.com/sessionFile/521O742Iaw0CifDDTuS1ux/sandbox/a7s5oKk08YLroNt3TH9KWK-img-3_1771614681000_na1fn_c3VzaGktcGxhdHRlcg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNTIxTzc0MklhdzBDaWZERFR1UzF1eC9zYW5kYm94L2E3czVvS2swOFlMcm9OdDNUSDlLV0staW1nLTNfMTc3MTYxNDY4MTAwMF9uYTFmbl9jM1Z6YUdrdGNHeGhkSFJsY2cucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Rzjr6h6bbLzkFQNni3MTKYL5aIBwQmXiM8L0trchlk9W1xpPxyKukqiIdLs1SYcvdDdCxH1t1QiTlrQN2yQM9n2Z8z2KYSYMU1czdiXqs~E97ezQhLNfsPdI0CtASOBSOEKK56Ou3qnJx~SMaD8Y6BRDnrFU3MMGGtkZ-bOIQ358D50fVYsLB9nkIR8MLxBXdKlt6qXwi~ZcqOU2g0pPcSHL85mA5DvoP1hBYde~6NY04OUpGaAL5txEvEMTHQwjuXs70hEToQSLj-6Ar3KsnJXd~CPLOhDH357EpslU5RdNors6gPLb~znaZOVNn40XUVlYmqGwKS1~~QVakOxoqA__',
    },
  ];

  const dishes = [
    { id: 1, name: 'Burger Clássico', price: 'R$ 24,90', image: 'https://private-us-east-1.manuscdn.com/sessionFile/521O742Iaw0CifDDTuS1ux/sandbox/a7s5oKk08YLroNt3TH9KWK-img-1_1771614680000_na1fn_aGVyby1idXJnZXI.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNTIxTzc0MklhdzBDaWZERFR1UzF1eC9zYW5kYm94L2E3czVvS2swOFlMcm9OdDNUSDlLV0staW1nLTFfMTc3MTYxNDY4MDAwMF9uYTFmbl9hR1Z5YnkxaWRYSm5aWEkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Ymxty6UEjKj6vvtbZimnKDTFMkrKew-~158o39c124QC~rHWsMA2Z~0ny8q0njqEYFmsyRRmDHQnYA7zAKu2E1uKlZshLqd26NS9t1P2mbvBO1EnwF7Alw3xKMfOYtfn1RLjyFo-Mo3fF7OonHqW-VPkr011cN195EagBwNfSlQPULzvnLNuWFMFiPmBFz9b640q~q4OLK8LD8E57gyEK5wqaYMcd41cx5vQAC1CqHuJ8UnWTShfK61PWHXCYCYwUiCuqZqQIC5JXfbzP9bOlo5ewnMi6Y7yh9PbCAkB7MlodfOYw4cxjrRfiFmLrBBCalKqROtoUinvh6wVQw4WYQ__' },
    { id: 2, name: 'Pizza Pepperoni', price: 'R$ 34,90', image: 'https://private-us-east-1.manuscdn.com/sessionFile/521O742Iaw0CifDDTuS1ux/sandbox/a7s5oKk08YLroNt3TH9KWK-img-2_1771614677000_na1fn_cGl6emEtY29tYm8.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNTIxTzc0MklhdzBDaWZERFR1UzF1eC9zYW5kYm94L2E3czVvS2swOFlMcm9OdDNUSDlLV0staW1nLTJfMTc3MTYxNDY3NzAwMF9uYTFmbl9jR2w2ZW1FdFkyOXRZbTgucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=oaiz3eOnvxw7gFnadF7v70wjZqN9cVaxVOvZcsLls11SVGu4A09ZdehKVoGx-~NikURpYKAjD3MecxRglgRHOzo7BECNWbXhc~8wJWqA0GAdCyXeZYGPsBSPI9KKdaly5U7cq0pLWnCElCahmAz9i3AO30Uk6~MAp~VZ~sRhOT8ayYloAXIICoSdf7QuLPEK8~~L~iUiE~4CFMvZgw73sRehdCJ4pswu9sDzGjLrywlRs2nhxh1aS8EoSZYJtwV5G6tMNMh~A~lHg8py-Zdpsrib4tbBaGfp6kHapMYYXOQVMerypBAosoYUYlQgtIM442C3dsv7N4EzWzmLn6hd4Q__' },
    { id: 3, name: 'Sushi Premium', price: 'R$ 44,90', image: 'https://private-us-east-1.manuscdn.com/sessionFile/521O742Iaw0CifDDTuS1ux/sandbox/a7s5oKk08YLroNt3TH9KWK-img-3_1771614681000_na1fn_c3VzaGktcGxhdHRlcg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNTIxTzc0MklhdzBDaWZERFR1UzF1eC9zYW5kYm94L2E3czVvS2swOFlMcm9OdDNUSDlLV0staW1nLTNfMTc3MTYxNDY4MTAwMF9uYTFmbl9jM1Z6YUdrdGNHeGhkSFJsY2cucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Rzjr6h6bbLzkFQNni3MTKYL5aIBwQmXiM8L0trchlk9W1xpPxyKukqiIdLs1SYcvdDdCxH1t1QiTlrQN2yQM9n2Z8z2KYSYMU1czdiXqs~E97ezQhLNfsPdI0CtASOBSOEKK56Ou3qnJx~SMaD8Y6BRDnrFU3MMGGtkZ-bOIQ358D50fVYsLB9nkIR8MLxBXdKlt6qXwi~ZcqOU2g0pPcSHL85mA5DvoP1hBYde~6NY04OUpGaAL5txEvEMTHQwjuXs70hEToQSLj-6Ar3KsnJXd~CPLOhDH357EpslU5RdNors6gPLb~znaZOVNn40XUVlYmqGwKS1~~QVakOxoqA__' },
    { id: 4, name: 'Chocolate Cake', price: 'R$ 14,90', image: 'https://private-us-east-1.manuscdn.com/sessionFile/521O742Iaw0CifDDTuS1ux/sandbox/a7s5oKk08YLroNt3TH9KWK-img-4_1771614683000_na1fn_ZGVzc2VydC1zaG93Y2FzZQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNTIxTzc0MklhdzBDaWZERFR1UzF1eC9zYW5kYm94L2E3czVvS2swOFlMcm9OdDNUSDlLV0staW1nLTRfMTc3MTYxNDY4MzAwMF9uYTFmbl9aR1Z6YzJWeWRDMXphRzkzWTJGelpRLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=FC0dudsJxox5QnFF-YikL8zZ7Pb6PTzcOzW9fHBycvjxRb4MTtFJ-4nw1NBcKT6ulJfhrDRw~HsR2l1U45Z26GNQIqOfuvYh4aKshCvQrA2FYlTzJmTRo5XfSRrJ0nFwgbez~X3zAIw37dOxRMHhukb7NLyPuBysEg6FuajHJYQCUZ6i43ol8VEwmanJhx27n28zg2P1Tcgfc~2lb7LS7ZoVTl6E~NJSCI9txgUnnjvfw-USLLVCt88CPX2fb4315yx4STekOAbBpiWPs3owl5-EqnCg2G5cQ7AGW~bNKJZgxjpRkwrpAWIfVkL38J74-90zNIw9K-gLSbW~e0A5Sw__' },
  ];

  const reviews = [
    { name: 'João Silva', rating: 5, text: 'Entrega rápida e comida deliciosa! Recomendo!' },
    { name: 'Maria Santos', rating: 5, text: 'Melhor delivery da região. Voltarei com certeza!' },
    { name: 'Pedro Costa', rating: 5, text: 'Qualidade excelente, preço justo. Perfeito!' },
  ];

  const steps = [
    { number: 1, title: 'Escolha', description: 'Veja nossos pratos deliciosos' },
    { number: 2, title: 'Peça', description: 'Envie seu pedido pelo WhatsApp' },
    { number: 3, title: 'Receba', description: 'Entrega rápida na sua porta' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Fixo */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Flame className="w-8 h-8 text-red-500" />
            <h1 className="text-2xl font-bold text-red-500">FoodFire</h1>
          </div>
          <button
            onClick={() => openWhatsApp()}
            className="btn-primary !w-auto px-6 py-2 text-sm"
          >
            Pedir Agora
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-white to-gray-50 section-divider">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Peça agora.<br />
              <span className="text-red-500">Entrega rápida.</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Comida deliciosa entregue na sua porta em minutos. Qualidade garantida!
            </p>
            <button
              onClick={() => openWhatsApp()}
              className="btn-primary mb-4"
            >
              <MessageCircle className="inline mr-2 w-5 h-5" />
              Pedir pelo WhatsApp
            </button>
            <div className="flex gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-500" />
                <span>30-40 min</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-orange-500" />
                <span>Entrega grátis</span>
              </div>
            </div>
          </div>
          <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/521O742Iaw0CifDDTuS1ux/sandbox/a7s5oKk08YLroNt3TH9KWK-img-1_1771614680000_na1fn_aGVyby1idXJnZXI.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNTIxTzc0MklhdzBDaWZERFR1UzF1eC9zYW5kYm94L2E3czVvS2swOFlMcm9OdDNUSDlLV0staW1nLTFfMTc3MTYxNDY4MDAwMF9uYTFmbl9hR1Z5YnkxaWRYSm5aWEkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Ymxty6UEjKj6vvtbZimnKDTFMkrKew-~158o39c124QC~rHWsMA2Z~0ny8q0njqEYFmsyRRmDHQnYA7zAKu2E1uKlZshLqd26NS9t1P2mbvBO1EnwF7Alw3xKMfOYtfn1RLjyFo-Mo3fF7OonHqW-VPkr011cN195EagBwNfSlQPULzvnLNuWFMFiPmBFz9b640q~q4OLK8LD8E57gyEK5wqaYMcd41cx5vQAC1CqHuJ8UnWTShfK61PWHXCYCYwUiCuqZqQIC5JXfbzP9bOlo5ewnMi6Y7yh9PbCAkB7MlodfOYw4cxjrRfiFmLrBBCalKqROtoUinvh6wVQw4WYQ__"
              alt="Burger Gourmet"
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Combos Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Combos Irresistíveis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            {combos.map((combo) => (
              <div
                key={combo.id}
                className="card-hover bg-white rounded-lg overflow-hidden shadow-lg"
                onMouseEnter={() => setSelectedCombo(combo.id)}
                onMouseLeave={() => setSelectedCombo(null)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={combo.image}
                    alt={combo.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {combo.badge}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {combo.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{combo.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-red-500">
                      {combo.price}
                    </span>
                  </div>
                  <button
                    onClick={() => openWhatsApp(combo.name)}
                    className="btn-secondary"
                  >
                    Quero esse
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mais Pedidos Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Mais Pedidos
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 stagger-children">
            {dishes.map((dish) => (
              <div
                key={dish.id}
                className="card-hover bg-white rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-32 object-cover"
                />
                <div className="p-3">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">
                    {dish.name}
                  </h3>
                  <p className="text-red-500 font-bold text-sm mb-3">
                    {dish.price}
                  </p>
                  <button
                    onClick={() => openWhatsApp(dish.name)}
                    className="w-full bg-red-500 hover:bg-red-600 text-white text-xs font-bold py-2 px-2 rounded transition-all duration-200"
                  >
                    Pedir
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Como Funciona
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {steps.map((step) => (
              <div key={step.number} className="text-center fade-in-up">
                <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
                {step.number < 3 && (
                  <ChevronRight className="w-6 h-6 text-red-500 mx-auto mt-4 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avaliações Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            O que Nossos Clientes Dizem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="card-hover bg-gray-50 rounded-lg p-6 shadow-md"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">{review.text}</p>
                <p className="font-bold text-gray-900">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-orange-500 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Com fome? Peça agora.</h2>
          <p className="text-lg mb-8 opacity-90">
            Entrega rápida, comida deliciosa, preço justo. Tudo no WhatsApp!
          </p>
          <button
            onClick={() => openWhatsApp()}
            className="bg-white text-red-500 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl text-lg"
          >
            <MessageCircle className="inline mr-2 w-6 h-6" />
            Pedir Agora pelo WhatsApp
          </button>
        </div>
      </section>

      {/* Botão Flutuante WhatsApp */}
      <button
        onClick={() => openWhatsApp()}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 active:scale-95 pulse-glow z-40"
        aria-label="Abrir WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container text-center">
          <p className="mb-2">© 2024 FoodFire - Delivery de Comida</p>
          <p className="text-sm">
            Peça agora pelo WhatsApp e aproveite nossas promoções!
          </p>
        </div>
      </footer>
    </div>
  );
}
