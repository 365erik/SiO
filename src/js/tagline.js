const quips = ["I'm not making you read this!", "Who's still blogging in 2021!?", "All taglines are random."];

const tagline = ({ taglineID }) => {
		const el = document.getElementById(taglineID);
		if (el) {
				el.innerText = `: ${quips[ Math.floor(Math.random() * quips.length) ]}`;
		}
}

export default tagline;
