import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

const plusJakartaSans = Plus_Jakarta_Sans({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Sendiko",
	description: "Portfolio Sendiko",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<link rel="icon" href="/icon.svg" sizes="any" />

			<body
				suppressHydrationWarning={true}
				className={`${plusJakartaSans.className} antialiased`}>
				<Suspense fallback={<>Loading...</>}>{children}</Suspense>
			</body>
		</html>
	);
}
