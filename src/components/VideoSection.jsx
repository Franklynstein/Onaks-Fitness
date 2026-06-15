export default function VideoSection() {
  // Replace this with your YouTube video ID (the part after "v=" in the URL)
  const youtubeId = 'YOUR_VIDEO_ID'

  return (
    <section className="bg-[#050505] py-16 sm:py-20 font-['Plus_Jakarta_Sans']">
      <div className="max-w-4xl mx-auto px-[7vw] sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-4xl font-bold text-white mb-8">
          About <span className="text-[#00EB2B]">The Program</span>
        </h2>
        <div className="p-[1.5px] rounded-2xl bg-gradient-to-r from-[#00EB2B] to-[#00A0FB]">
          <div className="bg-[#151515] rounded-2xl p-3 sm:p-4">
            <div className="relative w-full overflow-hidden rounded-xl" style={{ paddingTop: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${youtubeId}`}
                title="About The Program"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
