import type { Metadata } from "next";
import "@/styles/globals.css";
import siteConfig from "@/config/config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = siteConfig;

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="flex flex-col relative min-h-screen items-center">
				<Header />
				<main className="flex flex-col gap-2 p-4">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
