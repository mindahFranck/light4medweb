import AppleStore from "@/public/images/v2/app-store.png";
import PlayStore from "@/public/images/v2/play-store.png";
import Shape1 from "@/public/images/v2/shape1.png";
import Shape2 from "@/public/images/v2/shape2.png";
import Thumb1 from "@/public/images/v2/thumb1.png";
import Image from "next/image";
import FadeInUp from "../../../animation/FadeInUp";

function Hero() {
	return (
		<div className="section Light4Med-section-padding4" id="hero">
			<div className="container">
				<div className="row">
					<div className="col-lg-7">
						<div className="Light4Med-hero-content">
							<h1
								className="slider-custom-anim-left"
								data-ani="slider-custom-anim-left"
								data-ani-delay="0.3s"
							>
								Light4Med - Votre santé, notre priorité
							</h1>
							<p>
								Light4Med est votre compagnon santé tout-en-un, vous offrant des actualités médicales, 
								un podomètre intégré, un suivi des cycles menstruels, et des outils pour surveiller 
								et gérer votre grossesse en toute sérénité.
							</p>
							<div className="extra-mt">
								<div className="Light4Med-app-wrap position-relative">
									{/* <a target="_blank" href="https://www.apple.com/app-store/">
										<Image src={AppleStore} alt="Apple Store" />
									</a> */}

									<a target="_blank" href="https://playstore.com/">
										<Image src={PlayStore} alt="Play Store" />
									</a>
									<div className="hero2-shape">
										<Image src={Shape1} alt="Shape" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-5">
						<FadeInUp className="Light4Med-hero-thumb2">
							<Image src={Thumb1} alt="Illustration santé" />
							<div className="Light4Med-hero-shape-v2">
								<Image src={Shape2} alt="Shape2" />
							</div>
						</FadeInUp>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
