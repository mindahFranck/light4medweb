import Thumb2 from "@/public/images/v2/contentthumb2.png";
import Image from "next/image";
import Link from "next/link";
import FadeInLeft from "../../../animation/FadeInLeft";
import FadeInUp from "../../../animation/FadeInUp";
import TextSplitFadeIn from "../../../animation/TextSplitFadeIn";
function CtaOne() {
	return (
		<section className="section Ligh4Med-section-padding2 bg-light">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<FadeInLeft className="about-thumb mr-50 ">
							<Image src={Thumb2} alt="Thumbs 2" />
						</FadeInLeft>
					</div>
					<div className="col-lg-7">
						<div className="Ligh4Med-default-content tac">
							<div className="tg-heading-subheading">
								<h2>
									<TextSplitFadeIn>
										Gérez votre santé, suivez vos progrès et accédez à des conseils personnalisés.
									</TextSplitFadeIn>
								</h2>
							</div>
							<p>
								Grâce à cette application, suivez facilement vos paramètres de santé, comme votre activité quotidienne, votre qualité de sommeil et vos signes vitaux. Obtenez des informations précieuses sur votre bien-être et prenez des décisions éclairées pour une vie plus saine.
							</p>
							<p>
								Vous aurez également accès à une gamme complète d'outils pour surveiller vos progrès, définir des objectifs de santé personnalisés et rester à jour sur vos rendez-vous et traitements — tout cela sur une plateforme sécurisée.
							</p>
							<p>
								Protégez vos données de santé grâce à des mesures de sécurité de pointe, assurant que vos informations restent privées et accessibles uniquement par vous.
							</p>

							<FadeInUp className="extra-mt">
								<Link className="Ligh4Med-default-btn pill" data-text="Sign up now" href="/sign-up">
									<span className="button-wraper">Sign up now</span>
								</Link>
							</FadeInUp>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default CtaOne;
