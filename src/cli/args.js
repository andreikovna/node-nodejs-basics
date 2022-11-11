const parseArgs = () => {
    const args = process.argv.slice(2);
    args.forEach((argument, index) => {
        if (index === 0) {
            console.log(`propName is ${argument}`);
        } else console.log(`prop${index+1}Name is ${argument}`);
    })
};

parseArgs();
