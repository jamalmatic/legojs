module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : {
          DEFAULT : '#570DF8',
          contrast : '#FFFFFF',
          light : {
            DEFAULT : '#88BCFF',
            contrast : '#111827',
          },
          dark : {
            DEFAULT : '#80006E',
            contrast : '#FFFFFF',
          }
        },
        secondary : {
          DEFAULT : '#F000B8',
          contrast : '#FFFFFF',
          light : {
            DEFAULT : '#E044FA',
            contrast : '#111827',
          },
          dark : {
            DEFAULT : '#BA003C',
            contrast : '#FFFFFF',
          }
        },
        accent : {
          DEFAULT : '#37CDBE',
          contrast : '#111827',
          light : {
            DEFAULT : '#69DEA7',
            contrast : '#111827',
          },
          dark : {
            DEFAULT : '#25779E',
            contrast : '#FFFFFF',
          }
        },
        neutral : {
          DEFAULT : '#3D4451',
          contrast : '#FFFFFF',
          light : {
            DEFAULT : '#D8DDDA',
            contrast : '#241E29',
          },
          dark : {
            DEFAULT : '#241E29',
            contrast : '#FFFFFF',
          }
        },
        info : {
          DEFAULT : '#3ABFF8',
          contrast : '#111827',
          light : {
            DEFAULT : '#6AFFF4',
            contrast : '#241E29',
          },
          dark : {
            DEFAULT : '#2750BF',
            contrast : '#ffffff',
          }
        },
        success : {
          DEFAULT : '#36D399',
          contrast : '#241E29',
          light : {
            DEFAULT : '#68E388',
            contrast : '#241E29',
          },
          dark : {
            DEFAULT : '#249BA2',
            contrast : '#FFFFFF',
          }
        },
        warning : {
          DEFAULT : '#FBBD23',
          contrast : '#241E29',
          light : {
            DEFAULT : '#FF9258',
            contrast : '#241E29',
          },
          dark : {
            DEFAULT : '#AABF15',
            contrast : '#ffffff',
          }
        },
        error : {
          DEFAULT : '#F82035',
          contrast : '#241E29',
          light : {
            DEFAULT : '#FF56A6',
            contrast : '#241E29',
          },
          dark : {
            DEFAULT : '#DC2F19',
            contrast : '#FFFFFF',
          }
        },
      },
    },
  },
  plugins: [],
}
