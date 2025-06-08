export const Marquee = () => {
  return (
    <div className="relative flex overflow-x-hidden bg-backgroundDark">
      <div className="animate-marquee whitespace-nowrap py-8">
        <span className="text-4xl font-bold text-light mx-4">Transformando o Brasil 100% Onchain</span>
        <span className="text-4xl font-bold text-secondary mx-4">Transformando o Brasil 100% Onchain</span>
        <span className="text-4xl font-bold text-light mx-4">Transformando o Brasil 100% Onchain</span>
        <span className="text-4xl font-bold text-secondary mx-4">Transformando o Brasil 100% Onchain</span>
      </div>

      <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-8">
        <span className="text-4xl font-bold text-light mx-4">Transformando o Brasil 100% Onchain</span>
        <span className="text-4xl font-bold text-secondary mx-4">Transformando o Brasil 100% Onchain</span>
        <span className="text-4xl font-bold text-light mx-4">Transformando o Brasil 100% Onchain</span>
        <span className="text-4xl font-bold text-secondary mx-4">Transformando o Brasil 100% Onchain</span>
      </div>
    </div>
  )
}
