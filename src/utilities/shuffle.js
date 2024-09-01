

// Combine and shuffle two arrays
const shuffle = () => {
	const assets = [
	  { image: '/assets/css.svg' },
	  { image: '/assets/html5.svg' },
	  { image: '/assets/jquery.svg'},
	  { image: '/assets/js.svg' },
	  { image: '/assets/next.svg' },
	  { image: '/assets/node.svg' },
	  { image: '/assets/react.svg'},
	  { image: '/assets/ts.svg' },
	];
	return [...assets, ...assets]
	  .sort(() => Math.random() - 0.5)
	  .map((card) => ({ ...card, id: Math.random() }));
  };
  
  export default shuffle;
  