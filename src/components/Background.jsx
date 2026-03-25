import Particles from "react-tsparticles";

export default function Background() {
  return (
    <Particles
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: "gray-900 dark:gray-100",
          },
        },
        particles: {
          number: {
            value: 50,
          },
          size: {
            value: 2,
          },
          move: {
            enable: true,
            speed: 1,
          },
          opacity: {
            value: 0.5,
          },
        },
      }}
      className="w-full h-full"
    />
  );
}
