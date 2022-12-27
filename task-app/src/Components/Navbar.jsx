import React from "react";
import { connect } from "react-redux";

const Navbar = ({ links }) => {
	return (
		<nav>
			{links && (
				<ul>
					{links.map((link) => (
						<li key={link.id}>
							<a href={link.url}>{link.text}</a>
						</li>
					))}
				</ul>
			)}
		</nav>
	);
};

const mapStateToProps = (state) => {
	return {
		links: state.links,
	};
};

export default connect(mapStateToProps)(Navbar);
