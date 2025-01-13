import Thumb2 from "@/public/images/v2/contentthumb2.png";
import Icon6 from "@/public/images/v2/icon6.png";
import Icon7 from "@/public/images/v2/icon7.png";
import Icon8 from "@/public/images/v2/icon8.png";
import Image from "next/image";
import FadeInRight from "../../../animation/FadeInRight";
import TextSplitFadeIn from "../../../animation/TextSplitFadeIn";
function AboutOne() {
	return (
		<section className="section Ligh4Med-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 order-lg-2">
						<FadeInRight className="about-thumb ml-50">
							<Image src={Thumb2} alt="Thumb2" />
						</FadeInRight>
					</div>
					<div className="col-lg-7">
						<div className="Ligh4Med-default-content">
							<div className="tg-heading-subheading ">
								<h2 className="tac">
									<TextSplitFadeIn>Suivi de santé simplifié, et disponible 
										 partout</TextSplitFadeIn>
								</h2>
							</div>
							<p className="tac">
								Notre application mobile intuitive est conçue pour votre bien-être, vous permettant de suivre, gérer et améliorer votre santé facilement — à tout moment, où que vous soyez.
							</p>
							<div className="extra-mt">
								<div className="Ligh4Med-content-iconbox-wrap">
									<div className="Ligh4Med-iconbox-icon">
										<Image src={Icon6} alt="Icône 6" />
									</div>
									<div className="Ligh4Med-iconbox-data">
										<h4>Suivi complet de la santé</h4>
										<p>
											Surveillez vos signes vitaux, définissez des objectifs personnalisés et suivez vos progrès dans un seul et même endroit pour un mode de vie plus sain.
										</p>
									</div>
								</div>
								<div className="Ligh4Med-content-iconbox-wrap">
									<div className="Ligh4Med-iconbox-icon">
										<Image src={Icon7} alt="Icône 7" />
									</div>
									<div className="Ligh4Med-iconbox-data">
										<h4>Vos données sont sécurisées</h4>
										<p>
											Des mesures de sécurité avancées, comme l'authentification à deux facteurs et le chiffrement des données, protègent vos informations sensibles.
										</p>
									</div>
								</div>
								<div className="Ligh4Med-content-iconbox-wrap">
									<div className="Ligh4Med-iconbox-icon">
										<Image src={Icon8} alt="Icône 8" />
									</div>
									<div className="Ligh4Med-iconbox-data">
										<h4>Un soutien à tout moment</h4>
										<p>
											Accédez à une assistance experte et à des conseils personnalisés à tout moment pour vous aider à rester sur la bonne voie dans votre parcours santé.
										</p>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutOne;
