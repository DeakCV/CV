module.exports = {
  content: [
    '/Users/connorchurchill/Desktop/Projects/DeakCV/DeakCV/CV/wwwroot/Static/*.html'
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF', 
        black: '#000000',
        babyBlue: '#B1D4E0',
        blue: '#2E8BC0',
        darkBlue: '#0C2D48',
        grey: '#A9A9A9'
      },
      padding: {
        sitepadding: '20px'
      },
      width: {
        'webkit-fill': '-webkit-fill-available',
      }, 
      fontFamily: {
        'roboto': ['"Kanit"', 'sans-serif']
      },
      maxWidth: {
        'sitewidth': '1200px',
        'panel-width': '50%',
        'desktop-up': '1600px'
      },
      minHeight: {
        'panel-height': '300px',
        'particles-height': '200vh'
      },
      screens: {
        'tablet-up': '800px'
      },

    },
  },
};
