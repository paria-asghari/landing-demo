export default function MainContent() {
  return (
    <div className="min-h-screen pt-20 w-full" style={{ backgroundColor: '#151d2e' }}>
      <div className="h-[300px] mx-6 mt-6 relative overflow-hidden rounded-xl">
        <img
          src="https://images.unsplash.com/photo-1684395882899-571db620132b"
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover rounded-xl"
        />
        <div className="absolute inset-0 flex flex-col justify-start p-6 z-10">
          <h1 className="text-white text-left text-3xl font-bold">
            Where players become champions.
          </h1>
          <h2 className="text-left text-2xl font-semibold mt-2" style={{ color: '#ffa203' }}>
            Play more. Win more.
          </h2>
          <button className="mt-4 px-6 py-2 rounded-full font-bold text-left w-fit" style={{ backgroundColor: '#ffa203', color: '#151d2e' }}>
            #free
          </button>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent rounded-xl" />
      </div>
      <div className="flex items-center mx-6 mt-8">
        <div className="flex-1 h-px" style={{ backgroundColor: '#4874a8' }} />
        <span className="px-4 text-sm font-semibold" style={{ color: '#4874a8' }}>Top Game</span>
        <div className="flex-1 h-px" style={{ backgroundColor: '#4874a8' }} />
      </div>
      <div className="grid grid-cols-4 gap-4 mx-6 mt-6 pb-8">
        <div className="h-[200px] rounded-xl overflow-hidden relative">
          <img src="https://images.unsplash.com/photo-1648793867022-a3046afe2e6f?q=80&w=2064&auto=format&fit=crop" alt="Game 1" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <h2 className="absolute bottom-4 left-4 right-4 text-sm font-bold text-center" style={{ color: '#ff9808' }}>Level up your mood</h2>
        </div>
        <div className="h-[200px] rounded-xl overflow-hidden relative">
          <img src="https://plus.unsplash.com/premium_photo-1719508640641-6ce96cf573c1?q=80&w=1740&auto=format&fit=crop" alt="Game 2" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <h2 className="absolute bottom-4 left-4 right-4 text-sm font-bold text-center" style={{ color: '#ff9808' }}>Only the best survive.</h2>
        </div>
        <div className="h-[200px] rounded-xl overflow-hidden relative">
          <img src="https://images.unsplash.com/photo-1732132966168-34cf0a39b840?q=80&w=1740&auto=format&fit=crop" alt="Game 3" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <h2 className="absolute bottom-4 left-4 right-4 text-sm font-bold text-center" style={{ color: '#ff9808' }}>Play more. Win more</h2>
        </div>
        <div className="h-[200px] rounded-xl overflow-hidden relative">
          <img src="https://images.unsplash.com/photo-1663255107091-d450616908b3?q=80&w=1548&auto=format&fit=crop" alt="Game 4" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <h2 className="absolute bottom-4 left-4 right-4 text-sm font-bold text-center" style={{ color: '#ff9808' }}>Built for real gamers</h2>
        </div>
      </div>
      <div className="flex items-center mx-6 mt-8 pb-8">
        <div className="flex-1 h-px" style={{ backgroundColor: '#4c75a6' }} />
        <span className="px-4 text-sm font-semibold" style={{ color: '#4c75a6' }}>Live Winners</span>
        <div className="flex-1 h-px" style={{ backgroundColor: '#4c75a6' }} />
      </div>
      <div className="mx-6 pb-8">
        <table className="w-full text-white">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="py-3 text-left text-sm font-semibold" style={{ color: '#4c75a6' }}>Game</th>
              <th className="py-3 text-left text-sm font-semibold" style={{ color: '#4c75a6' }}>Player</th>
              <th className="py-3 text-left text-sm font-semibold" style={{ color: '#4c75a6' }}>Time</th>
              <th className="py-3 text-left text-sm font-semibold" style={{ color: '#4c75a6' }}>Bet</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-700">
              <td className="py-4 align-middle">
                <div className="flex items-center gap-3">
                  <img src="https://plus.unsplash.com/premium_photo-1731887298566-d98788906f40?q=80&w=1552&auto=format&fit=crop" alt="" className="w-8 h-8 rounded-full object-cover" />
                  <span style={{ color: '#4875a8' }}>mystic forest</span>
                </div>
              </td>
              <td className="py-4 align-middle">
                <div className="flex items-center gap-3">
                  <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop" alt="" className="w-8 h-8 rounded-full object-cover" />
                  <span style={{ color: '#4875a8' }}>jerome bell</span>
                </div>
              </td>
              <td className="py-4 align-middle text-sm" style={{ color: '#4875a8' }}>02:30</td>
              <td className="py-4 align-middle text-sm" style={{ color: '#4875a8' }}>$250</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="py-4 align-middle">
                <div className="flex items-center gap-3">
                  <img src="https://plus.unsplash.com/premium_photo-1731887298566-d98788906f40?q=80&w=1552&auto=format&fit=crop" alt="" className="w-8 h-8 rounded-full object-cover" />
                  <span style={{ color: '#4875a8' }}>jungle japes</span>
                </div>
              </td>
              <td className="py-4 align-middle">
                <div className="flex items-center gap-3">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" alt="" className="w-8 h-8 rounded-full object-cover" />
                  <span style={{ color: '#4875a8' }}>tom henry</span>
                </div>
              </td>
              <td className="py-4 align-middle text-sm" style={{ color: '#4875a8' }}>02:30</td>
              <td className="py-4 align-middle text-sm" style={{ color: '#4875a8' }}>$250</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="py-4 align-middle">
                <div className="flex items-center gap-3">
                  <img src="https://plus.unsplash.com/premium_photo-1731887298566-d98788906f40?q=80&w=1552&auto=format&fit=crop" alt="" className="w-8 h-8 rounded-full object-cover" />
                  <span style={{ color: '#4875a8' }}>predatory cities</span>
                </div>
              </td>
              <td className="py-4 align-middle">
                <div className="flex items-center gap-3">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop" alt="" className="w-8 h-8 rounded-full object-cover" />
                  <span style={{ color: '#4875a8' }}>ralph edwards</span>
                </div>
              </td>
              <td className="py-4 align-middle text-sm" style={{ color: '#4875a8' }}>02:30</td>
              <td className="py-4 align-middle text-sm" style={{ color: '#4875a8' }}>$250</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}