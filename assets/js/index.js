(async () => {
  const role = document.querySelector("#role");

  const write = (text) =>
    new Promise((resolve) => {
      let i = 0;
      const interval = setInterval(() => {
        if (i === text.length) {
          clearInterval(interval);
          setTimeout(() => resolve(), 2000);
          return;
        }
        role.innerHTML += text.charAt(i++);
      }, 120);
    });

  const erase = () =>
    new Promise((resolve) => {
      const interval = setInterval(() => {
        if (role.innerHTML.length === 0) {
          clearInterval(interval);
          resolve();
          return;
        }
        role.innerHTML = role.innerHTML.slice(0, role.innerHTML.length - 1);
      }, 80);
    });

  particlesJS.load("particles-js", "assets/js/particlesjs-config.json");

  while (true) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await write("Software developer");
    await erase();
    await write("Backend developer");
    await erase();
    await write("Frontend developer");
    await erase();
  }
})();
