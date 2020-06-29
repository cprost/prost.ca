const params = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 4000,
      }
    },
    color: {
      value: '#FFFFFF',
    },
    size: {
      value: 50,
      random: true,
      anim: {
        enable: true,
        speed: 5,
        size_min: 20,
      },
    },
    opacity: {
      value: 0.5,
      animation: {
        enable: true,
        opacity_min: 0.1,
        speed: 0.2,
      },
      random: {
        enable: true,
        minimumValue: 0.5,
      }
    },
    move: {
      bounce: false,
      out_mode: 'out',
    },
    line_linked: {
      enable: false,
    },
  },
  interactivity: {
    detect_on: 'window',
    events: {
      onclick: {
        enable: true,
        mode: 'repulse',
      }
    },
    modes: {
      repulse: {
        distance: 150,
        duration: 0.8,
      }
    }
  }
}

export default params