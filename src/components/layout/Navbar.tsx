import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/features", label: "Features" },
	{ href: "/download", label: "Download" },
	{ href: "/team", label: "Team" },
	{ href: "/partners", label: "Partner" },
	{ href: "/about", label: "Über uns" },
];

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();

	return (
		<header className="fixed top-0 left-0 right-0 z-50">
			<nav className="glass mx-4 mt-4 rounded-2xl">
				<div className="container flex h-16 items-center justify-between">
					{/* Logo */}
					<Link to="/" className="flex items-center gap-3">
						{/* Ersetzt die E-Kachel durch das echte Logo */}
						<img
							src="/logo.png"
							alt="Eduxel Logo"
							className="w-10 h-10 rounded-xl object-contain"
						/>
						<span className="font-display font-bold text-xl text-foreground">
							Eduxel
						</span>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center gap-1">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								to={link.href}
								className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
									location.pathname === link.href
										? "bg-primary/10 text-primary"
										: "text-muted-foreground hover:text-foreground hover:bg-secondary"
								}`}
							>
								{link.label}
							</Link>
						))}
					</div>

					{/* Desktop CTA */}
					<div className="hidden md:flex items-center gap-3">
						<Button variant="ghost" size="sm" asChild>
							<a
								href="https://github.com/EduCore-Development/eduxel-desktop-application"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Github className="w-4 h-4" />
								GitHub
							</a>
						</Button>
						<Button size="sm" asChild>
							<Link to="/donate">Unterstützen</Link>
						</Button>
					</div>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
						onClick={() => setIsOpen(!isOpen)}
						aria-label="Toggle menu"
					>
						{isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
					</button>
				</div>

				{/* Mobile Navigation */}
				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							className="md:hidden border-t border-border overflow-hidden"
						>
							<div className="container py-4 flex flex-col gap-2">
								{navLinks.map((link) => (
									<Link
										key={link.href}
										to={link.href}
										onClick={() => setIsOpen(false)}
										className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
											location.pathname === link.href
												? "bg-primary/10 text-primary"
												: "text-muted-foreground hover:text-foreground hover:bg-secondary"
										}`}
									>
										{link.label}
									</Link>
								))}
								<div className="flex gap-2 mt-2 pt-2 border-t border-border">
									<Button
										variant="outline"
										size="sm"
										className="flex-1"
										asChild
									>
										<a
											href="https://github.com/educore-development/eduxel"
											target="_blank"
											rel="noopener noreferrer"
										>
											<Github className="w-4 h-4" />
											GitHub
										</a>
									</Button>
									<Button size="sm" className="flex-1" asChild>
										<Link to="/donate" onClick={() => setIsOpen(false)}>
											Unterstützen
										</Link>
									</Button>
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</nav>
		</header>
	);
}
