import React from "react"
import Particles from "react-tsparticles"

const ParticlesBackground = () => {
  return (
    <Particles
      options={{
        autoPlay: true,
        background: {
          color: {
            value: "#131320a9",
          },
          image: "",
          position: "",
          repeat: "",
          size: "",
          opacity: 1,
        },
        backgroundMask: {
          composite: "destination-out",
          cover: {
            color: {
              value: "#fff",
            },
            opacity: 1,
          },
          enable: false,
        },
        defaultThemes: {},
        delay: 0,
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        detectRetina: true,
        duration: 0,
        fpsLimit: 120,
        interactivity: {
          detectsOn: "window",
          events: {
            onClick: {
              enable: false,
              mode: [],
            },
            //@ts-ignore
            onDiv: {
              selectors: [],
              enable: false,
              mode: [],
              type: "circle",
            },
            onHover: {
              enable: false,
              mode: [],
              parallax: {
                enable: false,
                force: 2,
                smooth: 10,
              },
            },

            //@ts-ignore
            resize: {
              delay: 0.5,
              enable: true,
            },
          },
          modes: {
            attract: {
              distance: 200,
              duration: 0.4,

              //@ts-ignore
              easing: "ease-out-quad",
              factor: 1,
              maxSpeed: 50,
              speed: 1,
            },
            bounce: {
              distance: 200,
            },
            bubble: {
              distance: 200,
              duration: 0.4,
              mix: false,
              divs: {
                distance: 200,
                duration: 0.4,
                mix: false,
                selectors: [],
              },
            },
            connect: {
              distance: 80,
              links: {
                opacity: 0.5,
              },
              radius: 60,
            },
            grab: {
              distance: 100,
              links: {
                blink: false,
                consent: false,
                opacity: 1,
              },
            },
            push: {
              default: true,
              groups: [],
              quantity: 4,
            },
            remove: {
              quantity: 2,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
              factor: 100,
              speed: 100,
              maxSpeed: 50,
              //@ts-ignore
              easing: "ease-out-quad",

              //@ts-ignore
              divs: {
                distance: 200,
                duration: 0.4,
                factor: 100,
                speed: 1,
                maxSpeed: 50,
                easing: "ease-out-quad",
                selectors: [],
              },
            },
            slow: {
              factor: 3,
              radius: 200,
            },
            trail: {
              delay: 1,
              pauseOnStop: false,
              quantity: 1,
            },
            light: {
              area: {
                gradient: {
                  start: {
                    value: "#ffffff",
                  },
                  stop: {
                    value: "#000000",
                  },
                },
                radius: 1000,
              },
              shadow: {
                color: {
                  value: "#000000",
                },
                length: 2000,
              },
            },
          },
        },
        manualParticles: [],
        particles: {
          bounce: {
            horizontal: {
              random: {
                enable: false,
                minimumValue: 0.1,
              },
              value: 1,
            },
            vertical: {
              random: {
                enable: false,
                minimumValue: 0.1,
              },
              value: 1,
            },
          },
          collisions: {
            //@ts-ignore
            absorb: {
              speed: 2,
            },
            bounce: {
              horizontal: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
              vertical: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
            },
            enable: false,
            mode: "bounce",
            overlap: {
              enable: true,
              retries: 0,
            },
          },
          color: {
            value: "#fff",
            animation: {
              h: {
                count: 0,
                enable: false,
                offset: 0,
                speed: 1,
                //@ts-ignore
                decay: 0,
                sync: true,
              },
              s: {
                count: 0,
                enable: false,
                offset: 0,
                speed: 1,
                //@ts-ignore
                decay: 0,
                sync: true,
              },
              l: {
                count: 0,
                enable: false,
                offset: 0,
                speed: 1,
                //@ts-ignore
                decay: 0,
                sync: true,
              },
            },
          },
          groups: {
            z5000: {
              number: {
                value: 70,
              },
              zIndex: {
                value: 50,
              },
            },
            z7500: {
              number: {
                value: 30,
              },
              zIndex: {
                value: 75,
              },
            },
            z2500: {
              number: {
                value: 50,
              },
              zIndex: {
                value: 25,
              },
            },
            z1000: {
              number: {
                value: 40,
              },
              zIndex: {
                value: 10,
              },
            },
          },
          move: {
            angle: {
              offset: 0,
              value: 90,
            },
            attract: {
              distance: 200,
              enable: false,
              rotate: {
                x: 3000,
                y: 3000,
              },
            },
            //@ts-ignore
            center: {
              x: 50,
              y: 50,
              mode: "percent",
              radius: 0,
            },
            decay: 0,
            distance: {},
            direction: "none",
            drift: 0,
            enable: false,
            gravity: {
              acceleration: 9.81,
              enable: false,
              inverse: false,
              maxSpeed: 50,
            },
            path: {
              clamp: true,
              delay: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
              },
              enable: false,
              options: {},
            },
            outModes: {
              default: "out",
              bottom: "out",
              left: "out",
              right: "out",
              top: "out",
            },
            random: false,
            size: false,
            speed: 2,
            spin: {
              acceleration: 0,
              enable: false,
            },
            straight: false,
            trail: {
              enable: false,
              length: 10,
              fillColor: {
                value: "#000000",
              },
            },
            vibrate: false,
            warp: false,
          },
          number: {
            density: {
              enable: true,
              //@ts-ignore
              width: 1920,
              height: 1080,
            },
            limit: 0,
            value: 200,
          },
          opacity: {
            random: {
              enable: false,
              minimumValue: 0.1,
            },
            value: {
              min: 0.1,
              max: 1,
            },
            animation: {
              count: 0,
              enable: true,
              speed: 2,
              //@ts-ignore
              decay: 0,
              sync: false,
              destroy: "none",
              startValue: "random",
            },
          },
          reduceDuplicates: false,
          shadow: {
            blur: 0,
            color: {
              value: "#000",
            },
            enable: false,
            offset: {
              x: 0,
              y: 0,
            },
          },
          shape: {
            options: {},
            type: "circle",
          },
          size: {
            random: {
              enable: false,
              minimumValue: 1,
            },
            value: 1,
            animation: {
              count: 0,
              enable: false,
              speed: 5,
              //@ts-ignore
              decay: 0,
              sync: false,
              destroy: "none",
              startValue: "random",
            },
          },
          stroke: {
            width: 0,
          },
          zIndex: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
            opacityRate: 1,
            sizeRate: 1,
            velocityRate: 1,
          },
          life: {
            count: 0,
            delay: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 0,
              sync: false,
            },
            duration: {
              random: {
                enable: false,
                minimumValue: 0.0001,
              },
              value: 0,
              sync: false,
            },
          },
          rotate: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
            animation: {
              enable: false,
              speed: 0,
              //@ts-ignore
              decay: 0,
              sync: false,
            },
            direction: "clockwise",
            path: false,
          },
          destroy: {
            bounds: {},
            //@ts-ignore
            mode: "none",
            split: {
              count: 1,
              factor: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 3,
              },
              rate: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: {
                  min: 4,
                  max: 9,
                },
              },
              sizeOffset: true,
              particles: {},
            },
          },
          roll: {
            darken: {
              enable: false,
              value: 0,
            },
            enable: false,
            enlighten: {
              enable: false,
              value: 0,
            },
            mode: "vertical",
            speed: 25,
          },
          tilt: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
            animation: {
              enable: false,
              speed: 0,
              //@ts-ignore
              decay: 0,
              sync: false,
            },
            direction: "clockwise",
            enable: false,
          },
          twinkle: {
            lines: {
              enable: false,
              frequency: 0.05,
              opacity: 1,
            },
            particles: {
              enable: false,
              frequency: 0.05,
              opacity: 1,
            },
          },
          wobble: {
            distance: 5,
            enable: false,
            speed: {
              //@ts-ignore
              angle: 50,
              move: 10,
            },
          },
          orbit: {
            animation: {
              count: 0,
              enable: false,
              speed: 1,
              //@ts-ignore
              decay: 0,
              sync: false,
            },
            enable: false,
            opacity: 1,
            rotation: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 45,
            },
            width: 1,
          },
          links: {
            blink: false,
            color: {
              value: "#ffffff",
            },
            consent: false,
            distance: 100,
            enable: false,
            frequency: 1,
            opacity: 0.4,
            shadow: {
              blur: 5,
              color: {
                value: "#000",
              },
              enable: false,
            },
            triangles: {
              enable: false,
              frequency: 1,
            },
            width: 1,
            warp: false,
          },
          repulse: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
            enabled: false,
            distance: 1,
            duration: 1,
            factor: 1,
            speed: 1,
          },
        },
        pauseOnBlur: true,
        pauseOnOutsideViewport: true,
        responsive: [],
        smooth: false,
        style: {},
        themes: [],
        zLayers: 100,
        emitters: [],
      }}
    />

    // <Particles
    //   // init={particlesInit}
    //   id="tsparticles"
    //   options={{
    //     autoPlay: true,
    //     background: {
    //       color: {
    //         value: "#111111",
    //       },
    //       image: "",
    //       position: "",
    //       repeat: "",
    //       size: "",
    //       opacity: 1,
    //     },
    //     backgroundMask: {
    //       composite: "destination-out",
    //       cover: {
    //         color: {
    //           value: "#fff",
    //         },
    //         opacity: 1,
    //       },
    //       enable: false,
    //     },
    //     backgroundMode: {
    //       enable: true,
    //       zIndex: -1,
    //     },
    //     detectRetina: true,
    //     fpsLimit: 60,
    //     infection: {
    //       cure: true,
    //       delay: 0,
    //       enable: false,
    //       infections: 0,
    //       stages: [],
    //     },
    //     interactivity: {
    //       detectsOn: "window",
    //       events: {
    //         onClick: {
    //           enable: false,
    //           mode: [],
    //         },
    //         //@ts-ignore
    //         onDiv: {
    //           selectors: [],
    //           enable: false,
    //           mode: [],
    //           type: "circle",
    //         },
    //         onHover: {
    //           enable: false,
    //           mode: "attract",
    //           parallax: {
    //             enable: false,
    //             force: 2,
    //             smooth: 10,
    //           },
    //         },
    //         resize: false,
    //       },
    //       modes: {
    //         attract: {
    //           distance: 200,
    //           duration: 0.4,
    //           speed: 1,
    //         },
    //         bounce: {
    //           distance: 200,
    //         },
    //         bubble: {
    //           distance: 200,
    //           duration: 0.4,
    //         },
    //         connect: {
    //           distance: 80,
    //           links: {
    //             opacity: 0.5,
    //           },
    //           radius: 60,
    //         },
    //         grab: {
    //           distance: 100,
    //           links: {
    //             blink: false,
    //             consent: false,
    //             opacity: 1,
    //           },
    //         },
    //         light: {
    //           area: {
    //             gradient: {
    //               start: {
    //                 value: "#ffffff",
    //               },
    //               stop: {
    //                 value: "#000000",
    //               },
    //             },
    //             radius: 1000,
    //           },
    //           shadow: {
    //             color: {
    //               value: "#000000",
    //             },
    //             length: 2000,
    //           },
    //         },
    //         push: {
    //           quantity: 4,
    //         },
    //         remove: {
    //           quantity: 2,
    //         },
    //         repulse: {
    //           distance: 200,
    //           duration: 0.4,
    //           speed: 1,
    //         },
    //         slow: {
    //           factor: 3,
    //           radius: 200,
    //         },
    //         trail: {
    //           delay: 0.005,
    //           quantity: 5,
    //           particles: {
    //             color: {
    //               value: "#ff0000",
    //               animation: {
    //                 enable: true,
    //                 speed: 400,
    //                 sync: true,
    //               },
    //             },
    //             collisions: {
    //               enable: false,

    //               bounce: {
    //                 horizontal: {
    //                   //@ts-ignore
    //                   random: {},
    //                 },
    //                 vertical: {
    //                   //@ts-ignore
    //                   random: {},
    //                 },
    //               },
    //             },
    //             links: {
    //               enable: false,
    //               shadow: {},
    //               triangles: {},
    //             },
    //             move: {
    //               outMode: "destroy",
    //               speed: 5,

    //               //@ts-ignore
    //               angle: {},
    //               attract: {
    //                 rotate: {},
    //               },
    //               gravity: {},
    //               noise: {
    //                 delay: {
    //                   //@ts-ignore
    //                   random: {},
    //                 },
    //               },

    //               //@ts-ignore
    //               outModes: {},
    //               trail: {},
    //             },
    //             size: {
    //               value: 5,
    //               animation: {
    //                 enable: true,
    //                 speed: 5,
    //                 minimumValue: 1,
    //                 sync: true,
    //                 startValue: "min",
    //                 destroy: "max",
    //               },

    //               //@ts-ignore
    //               random: {},
    //             },
    //             bounce: {
    //               horizontal: {
    //                 //@ts-ignore
    //                 random: {},
    //               },
    //               vertical: {
    //                 //@ts-ignore
    //                 random: {},
    //               },
    //             },
    //             life: {
    //               delay: {
    //                 //@ts-ignore
    //                 random: {},
    //               },
    //               duration: {
    //                 //@ts-ignore
    //                 random: {},
    //               },
    //             },
    //             number: {
    //               density: {},
    //             },
    //             opacity: {
    //               animation: {},
    //               //@ts-ignore
    //               random: {},
    //             },
    //             rotate: {
    //               animation: {},
    //             },
    //             shadow: {
    //               offset: {},
    //             },
    //             shape: {},

    //             //@ts-ignore
    //             stroke: {
    //               color: {
    //                 value: "",
    //                 animation: {
    //                   enable: false,
    //                   speed: 0,
    //                   sync: false,
    //                 },
    //               },
    //             },
    //             twinkle: {
    //               lines: {},
    //               particles: {},
    //             },
    //           },
    //         },
    //       },
    //     },
    //     manualParticles: [],
    //     motion: {
    //       disable: false,
    //       reduce: {
    //         factor: 16,
    //         value: true,
    //       },
    //     },
    //     particles: {
    //       bounce: {
    //         horizontal: {
    //           random: {
    //             enable: false,
    //             minimumValue: 12,
    //           },
    //           value: 1,
    //         },
    //         vertical: {
    //           random: {
    //             enable: false,
    //             minimumValue: 0.1,
    //           },
    //           value: 1,
    //         },
    //       },
    //       collisions: {
    //         bounce: {
    //           horizontal: {
    //             random: {
    //               enable: false,
    //               minimumValue: 0.1,
    //             },
    //             value: 1,
    //           },
    //           vertical: {
    //             random: {
    //               enable: false,
    //               minimumValue: 0.1,
    //             },
    //             value: 1,
    //           },
    //         },
    //         enable: true,
    //         mode: "bounce",
    //       },
    //       color: {
    //         value: "#cecece",
    //         animation: {
    //           enable: false,
    //           speed: 100,
    //           sync: false,
    //         },
    //       },
    //       life: {
    //         count: 37,
    //         delay: {
    //           random: {
    //             enable: false,
    //             minimumValue: 0,
    //           },
    //           value: 0,
    //           sync: false,
    //         },
    //         duration: {
    //           random: {
    //             enable: false,
    //             minimumValue: 0.0001,
    //           },
    //           value: 0,
    //           sync: true,
    //         },
    //       },
    //       links: {
    //         blink: true,
    //         color: {
    //           value: "random",
    //         },
    //         consent: false,
    //         distance: 100,
    //         enable: true,
    //         frequency: 0,
    //         opacity: 1,

    //         shadow: {
    //           //@ts-ignore
    //           blur: false,
    //           color: {
    //             value: "#00ff00",
    //           },
    //           enable: false,
    //         },
    //         triangles: {
    //           enable: false,
    //           frequency: 0,
    //         },
    //         width: 1,
    //         warp: false,
    //       },
    //       move: {
    //         angle: {
    //           offset: 45,
    //           value: 90,
    //         },
    //         attract: {
    //           enable: false,
    //           rotate: {
    //             x: 3000,
    //             y: 3000,
    //           },
    //         },
    //         direction: "none",
    //         distance: 0,
    //         enable: true,
    //         gravity: {
    //           acceleration: 9.81,
    //           enable: false,
    //           maxSpeed: 50,
    //         },
    //         noise: {
    //           delay: {
    //             random: {
    //               enable: false,
    //               minimumValue: 0,
    //             },
    //             value: 0,
    //           },
    //           enable: false,
    //         },
    //         outModes: {
    //           default: "out",
    //         },
    //         random: false,
    //         size: false,
    //         speed: 2,
    //         straight: false,
    //         trail: {
    //           enable: false,
    //           length: 10,
    //           fillColor: {
    //             value: "#000000",
    //           },
    //         },
    //         vibrate: false,
    //         warp: false,
    //       },
    //       number: {
    //         density: {
    //           enable: true,
    //           area: 800,
    //           factor: 1000,
    //         },
    //         limit: 0,
    //         value: 100,
    //       },
    //       opacity: {
    //         random: {
    //           enable: true,
    //           minimumValue: 0.3,
    //         },
    //         value: 0.8,
    //         animation: {
    //           enable: true,
    //           minimumValue: 0.3,
    //           speed: 0.5,
    //           sync: false,
    //         },
    //       },
    //       reduceDuplicates: false,
    //       rotate: {
    //         random: false,
    //         value: 0,
    //         animation: {
    //           enable: false,
    //           speed: 0,
    //           sync: false,
    //         },
    //         direction: "clockwise",
    //         path: false,
    //       },
    //       shadow: {
    //         blur: 51,
    //         color: {
    //           value: "#000000",
    //         },
    //         enable: false,
    //         offset: {
    //           x: 0,
    //           y: 0,
    //         },
    //       },
    //       shape: {
    //         options: {},
    //         type: "circle",
    //       },
    //       size: {
    //         random: {
    //           enable: true,
    //           minimumValue: 1,
    //         },
    //         value: 3,
    //         animation: {
    //           destroy: "none",
    //           enable: true,
    //           minimumValue: 1,
    //           speed: 3,
    //           startValue: "max",
    //           sync: false,
    //         },
    //       },
    //       //@ts-ignore
    //       stroke: {
    //         width: 0,
    //         color: {
    //           value: "",
    //           animation: {
    //             enable: false,
    //             speed: 0,
    //             sync: false,
    //           },
    //         },
    //       },
    //       twinkle: {
    //         lines: {
    //           enable: false,
    //           frequency: 0.05,
    //           opacity: 1,
    //         },
    //         particles: {
    //           enable: false,
    //           frequency: 13,
    //           opacity: 1,
    //         },
    //       },
    //     },
    //     pauseOnBlur: false,
    //     pauseOnOutsideViewport: true,
    //     themes: [],
    //   }}
    // />
  )
}

export { ParticlesBackground }