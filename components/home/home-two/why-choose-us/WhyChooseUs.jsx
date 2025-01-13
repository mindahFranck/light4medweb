import Thumb from "@/public/images/v2/contentthumb2.png";
import Icon from "@/public/images/v2/icon9.png";
import Image from "next/image";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../../animation/FadeInStaggerTwo";
import FadeInUp from "../../../animation/FadeInUp";
import TextSplitFadeIn from "../../../animation/TextSplitFadeIn";
function WhyChooseUs() {
	return (
		<section className="section Ligh4Med-section-padding3">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<FadeInUp className="about-thumb mr-50 ">
							<Image src={Thumb} alt="Thumb" />
						</FadeInUp>
					</div>
					<div className="col-lg-7">
						<div className="Ligh4Med-default-content fs-19">
							<div className="tg-heading-subheading">
								<h2 className="tac">
									<TextSplitFadeIn>Suivi de santé rapide en seulement 3 étapes</TextSplitFadeIn>
								</h2>
							</div>
							<p className="tac">
								Une plateforme de gestion de la santé parmi les meilleures, offrant une interface conviviale pour suivre, analyser et gérer vos données de santé en quelques étapes simples.
							</p>
							<div className="extra-mt">
								<FadeInStaggerTwo className="accordion Ligh4Med-accordion-wrap1" id="Ligh4Med-accordion">
									<FadeInStaggerTwoChildren className="accordion-item Ligh4Med-accordion-item">
										<h3 className="accordion-header Ligh4Med-accordion-header">
											<button
												className="accordion-button"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne"
											>
												1. Téléchargez et créez un compte facilement
											</button>
											<div className="accordion-icon">
												<Image src={Icon} alt="Icon" />
											</div>
										</h3>
										<div
											id="collapseOne"
											className="accordion-collapse collapse show"
											data-bs-parent="#Ligh4Med-accordion"
										>
											<div className="accordion-body Ligh4Med-accordion-body">
												Démarrez votre suivi de santé en téléchargeant notre application facile à utiliser. Créez un compte sécurisé en quelques minutes.
											</div>
										</div>
									</FadeInStaggerTwoChildren>
									<FadeInStaggerTwoChildren className="accordion-item Ligh4Med-accordion-item">
										<h3 className="accordion-header Ligh4Med-accordion-header" id="headingOne">
											<button
												className="accordion-button"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseTwo"
											>
												2. Connectez votre appareil de santé et enregistrez vos données
											</button>
											<div className="accordion-icon">
												<Image src={Icon} alt="Icon" />
											</div>
										</h3>
										<div
											id="collapseTwo"
											className="accordion-collapse collapse"
											data-bs-parent="#Ligh4Med-accordion"
										>
											<div className="accordion-body Ligh4Med-accordion-body">
												Connectez facilement vos dispositifs de suivi de santé pour enregistrer vos données vitales et garder un œil sur votre bien-être.
											</div>
										</div>
									</FadeInStaggerTwoChildren>
									<FadeInStaggerTwoChildren className="accordion-item Ligh4Med-accordion-item">
										<h3 className="accordion-header Ligh4Med-accordion-header">
											<button
												className="accordion-button collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseThree"
											>
												3. Suivez vos progrès et ajustez votre routine de santé
											</button>
											<div className="accordion-icon">
												<Image src={Icon} alt="Icon" />
											</div>
										</h3>
										<div
											id="collapseThree"
											className="accordion-collapse collapse"
											data-bs-parent="#Ligh4Med-accordion"
										>
											<div className="accordion-body Ligh4Med-accordion-body">
												Analysez vos données de santé en temps réel et ajustez vos habitudes et votre routine pour améliorer votre bien-être général.
											</div>
										</div>
									</FadeInStaggerTwoChildren>
								</FadeInStaggerTwo>
							</div>

						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default WhyChooseUs;
