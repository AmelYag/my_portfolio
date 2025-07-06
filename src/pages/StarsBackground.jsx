import { Particles } from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const StarsBackground = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "#000000" },
        fullScreen: { enable: true, zIndex: 0 },
        particles: {
          number: { value: 100 },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          size: { value: 1.5 },
          opacity: { value: 0.8 },
          move: {
            enable: true,
            speed: 0.3,
            direction: "none",
            random: true,
            outModes: { default: "bounce" },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default StarsBackground;
