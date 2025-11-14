// Test file for *.style.* syntax highlighting

this.style.main`
	& {
		width: 60px;
		height: 100vh;
		background-color: #${THEME.mix(THEME.accent_4, THEME.bg_1, 0.2)};
		transform: translateX(-100%);
		transition: transform 0.3s ease;
	}

	&.open {
		transform: translateX(0);
	}

	.elements-container {
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding: 10px;
	}
`;

// Other examples
component.style.header`
	h1 {
		font-size: 2rem;
		color: blue;
	}
`;

app.style.button`
	.btn {
		padding: 10px 20px;
		border: none;
		border-radius: 4px;
	}
`;

// Test with underscores
elem.style.side_bar`
	.sidebar {
		width: 250px;
		background: #f0f0f0;
	}
`;

component.style.main_content`
	.content {
		padding: 20px;
		margin: 0 auto;
	}
`;
