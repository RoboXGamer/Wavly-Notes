import React from "react";

function RootLayout({ children }: { children: React.ReactNode }) {
	return <React.Fragment>{children}</React.Fragment>;
}

export default RootLayout;
