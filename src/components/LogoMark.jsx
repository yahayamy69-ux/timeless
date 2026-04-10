function LogoMark({ compact = false }) {
  return (
    <div className="relative flex flex-col items-center text-center">
      <div className="absolute inset-0 mx-auto my-auto h-48 w-48 rounded-full border border-transparent bg-white/5 opacity-10" />
      <div className="absolute inset-0 mx-auto my-auto h-72 w-72 rounded-full border border-transparent bg-white/2 opacity-5" />
      <div className="relative z-10 flex flex-col items-center gap-4">
        {compact ? (
          <div className="flex flex-col items-center gap-1">
            <div className="text-[1rem] font-serif leading-none tracking-[0.18em] text-white">
              TIMELESS
            </div>
            <div className="flex items-center gap-4 uppercase tracking-[0.58em] text-[#C9A84C] text-[0.72rem] font-display font-[200]">
              <span>By Emjay</span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <div className="text-5xl font-serif uppercase tracking-[0.18em] text-white">TIMELESS</div>
            <div className="text-xs uppercase tracking-[0.58em] text-[#C9A84C] font-display font-[200]">BY EMJAY</div>
          </div>
        )}
        {!compact && (
          <div className="text-center text-[0.95rem] italic font-serif font-[300] text-[#8A7A56] leading-tight">
            Time never looked this good on you.
          </div>
        )}
      </div>
    </div>
  );
}

export default LogoMark;
