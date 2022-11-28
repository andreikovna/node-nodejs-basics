const parseArgs = () => {
  const args = process.argv.slice(2);
  console.log(
    args
      .reduce((acc, argument, index) => {
        const result =
          index % 2 === 0
            ? `${argument.replace("--", "")} is `
            : `${argument}, `;
        return acc + result;
      }, "")
      .slice(0, -2)
  );
};

parseArgs();
