import Logo from "@/public/images/logo/logo-white.svg";
import Image from "next/image";
import Link from "next/link";
function HeaderTwo() {
	return (
		<div className="Ligh4Med-form-header">
			<div className="container">
				<div className="Ligh4Med-form-header-logo">
					<Link href="/">
						<Image src={Logo} alt="logo" />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default HeaderTwo;
