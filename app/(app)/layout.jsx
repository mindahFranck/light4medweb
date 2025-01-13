import Footer from "@/components/home/home-two/footer";
import Header from "@/components/home/home-two/header/one-page";
export const metadata = {
	title: "Ligh4Med || Application Medicale",
	description: "Ligh4Med || Est une application d'aide aux utilisateurs dans le domaine de la médécine",
};
function OnePageLayoutTwo({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default OnePageLayoutTwo;
