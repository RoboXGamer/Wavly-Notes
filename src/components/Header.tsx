import Link from "next/link";
import React from "react";

import "@/styles/Header.css";

function Header() {
	return (
		<>
			{/* Header */}
			<header>
				{/* Logo */}
				<div className="logo">
					<Link href={"/"} className="link">
						Home
					</Link>
				</div>
				{/* Navbar */}
				<nav className="flex gap-x-2">
					<Link href={"/dashboard"} className="link">
						Dashboard
					</Link>
					<Link href={"/notes"} className="link">
						Notes
					</Link>
				</nav>
			</header>
		</>
	);
}

export default Header;
