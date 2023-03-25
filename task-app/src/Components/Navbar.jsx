import React from "react";
import { connect } from "react-redux";

const Navbar = ({ links }) => {
	return (
		<nav>
			<div className="navbar">
			{links && (
				<ul className="link">
					{links.map((link) => (
						<li key={link.id}>
							<a href={link.url}>{link.text}</a>
						</li>
					))}
				</ul>
			)}
			</div>
		</nav>
	);
};

const mapStateToProps = (state) => {
	return {
		links: state.links,
	};
};

export default connect(mapStateToProps)(Navbar);
