export default function SectionHeader({ title, subtitle, centered = true, light = false }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className={`text-3xl sm:text-4xl font-bold font-serif mb-4 ${light ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-primary-100' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
      <div className={`w-16 h-1 rounded-full mt-4 ${centered ? 'mx-auto' : ''} ${light ? 'bg-primary-400' : 'bg-primary-600'}`} />
    </div>
  )
}
