/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // All values from DESIGN.md. Do not change without updating DESIGN.md.
        background:        '#FAFAF8',
        surface:           '#F0EAD8',
        'surface-elevated':'#E8DFC8',
        border:            '#DDD5C0',
        'border-subtle':   '#EDE6D4',
        'text-primary':    '#1C1B19',
        'text-secondary':  '#6B6355',
        'text-tertiary':   '#9C9182',
        accent:            '#1B2B4B',
        'accent-hover':    '#243A60',
        'accent-active':   '#142038',
        'accent-light':    '#E8EDF5',
        'accent-light-border': '#C8D4E8',
        error:             '#B04040',
        success:           '#3A6B4A',
      },
      fontFamily: {
        cabinet: ['Cabinet Grotesk', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif:   ['"Instrument Serif"', 'serif'],
      },
      fontSize: {
        // clamp values for fluid typography. Matches DESIGN.md.
        'display':  ['clamp(64px, 9vw, 144px)', { lineHeight: '1.0',  letterSpacing: '-0.02em' }],
        'headline': ['clamp(32px, 4vw, 52px)',  { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'subhead':  ['clamp(20px, 2.5vw, 28px)',{ lineHeight: '1.25', letterSpacing: '-0.02em' }],
        'body-lg':  ['clamp(18px, 1.6vw, 22px)',{ lineHeight: '1.6' }],
        'body':     ['clamp(16px, 1.2vw, 18px)',{ lineHeight: '1.65' }],
        'label':    ['13px', { lineHeight: '1', letterSpacing: '0.08em' }],
        'label-sm': ['11px', { lineHeight: '1', letterSpacing: '0.10em' }],
        'editorial':['clamp(22px, 2.8vw, 36px)',{ lineHeight: '1.4' }],
      },
      maxWidth: {
        container: '1200px',
        reading:   '65ch',
        'reading-lg': '60ch',
      },
      spacing: {
        // Explicit section padding tokens
        'section': '96px',
        'section-mobile': '64px',
      },
      borderRadius: {
        btn:   '6px',
        card:  '8px',
        tag:   '4px',
        modal: '12px',
      },
      boxShadow: {
        // Warm-tinted elevation system from DESIGN.md
        'elevation-1': '0 1px 3px rgba(28,27,25,0.06), 0 1px 2px rgba(28,27,25,0.04)',
        'elevation-2': '0 4px 16px rgba(28,27,25,0.08), 0 2px 6px rgba(28,27,25,0.05)',
        'elevation-3': '0 12px 40px rgba(28,27,25,0.12), 0 4px 12px rgba(28,27,25,0.07)',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
