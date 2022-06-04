export const parseEnv = () => {
    const vars = process.env;
    for (let key in vars) {
      if (key.match(/^RSS_/)) {
        console.log(`${key}=${vars[key]}`);
      }
    }
  };