'use client';

export default function BantuanSection() {
  return (
    <section className="w-full py-20 px-4 md:px-12 flex justify-center items-center min-h-[600px]">
      

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-2 items-start">
        
        {/* Space plang dari bg */}
        <div className="hidden lg:block">
        </div>

        {/* Hotline Krisis */}
        <div className="flex justify-center">
          <div className="bg-white rounded-[35px] p-8 w-full max-w-[330px] shadow-xl flex flex-col items-center text-center border border-gray-100">
            
            <div className="w-28 h-28 bg-[#D2E6F7] rounded-full mb-6"></div>

            <h3 className="text-[#2B6CB0] text-2xl font-bold mb-4">
              Hotline Krisis 24/7
            </h3>
            
            <p className="text-black text-sm font-medium leading-relaxed mb-8 h-[60px] flex items-center">
              Hubungi kami kapan saja. <br/>
              Kami ada untuk <br/>
              mendengarkan.
            </p>
            
            <button className="w-full py-3 bg-[#6BA5D6] hover:bg-[#5A94C5] text-white text-lg font-semibold rounded-xl transition-colors shadow-md">
              Hubungi Kami
            </button>
          </div>
        </div>

        {/* Konsultasi */}
        <div className="flex justify-center">
          <div className="bg-white rounded-[35px] p-8 w-full max-w-[330px] shadow-xl flex flex-col items-center text-center border border-gray-100">
            
            <div className="w-28 h-28 bg-[#D2E6F7] rounded-full mb-6"></div>
            
            <h3 className="text-[#2B6CB0] text-2xl font-bold mb-4">
              Konsultasi
            </h3>
            
            <p className="text-black text-sm font-medium leading-relaxed mb-8 h-[60px] flex items-center justify-center">
              Temukan psikolog atau konselor <br/>
              dalam Penanganan Trauma <br/>
              Pasca Bencana (PTSD)
            </p>
            
            <button className="w-full py-3 bg-[#6BA5D6] hover:bg-[#5A94C5] text-white text-lg font-semibold rounded-xl transition-colors shadow-md">
              Jadwalkan Sesi
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}