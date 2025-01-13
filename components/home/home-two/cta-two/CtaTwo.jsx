import Thumb2 from "@/public/images/v2/ctathumb.png";
import Shape1 from "@/public/images/v2/shape1.png";
import Shape3 from "@/public/images/v2/shape3.png";
import Image from "next/image";
import Link from "next/link";
import FadeInUp from "../../../animation/FadeInUp";
import TextSplitFadeIn from "../../../animation/TextSplitFadeIn";
function CtaTwo() {
	return (
		<section className="Ligh4Med-section-padding2 position-ralatiove">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<div className="Ligh4Med-cta-thumb mr-50">
							<Image src={Thumb2} alt="Thumbs" />
						</div>
						<div className="Ligh4Med-ctathumb-shape">
							<Image src={Shape3} alt="Shape" />
						</div>
					</div>
					<div className="col-lg-7 d-flex align-items-center">
						<div className="Ligh4Med-default-content ml-30">
							<div className="tg-heading-subheading">
								<h2>
									<TextSplitFadeIn> Téléchargez et commencez votre suivi de
										 santé personnalisé </TextSplitFadeIn>
								</h2>
							</div>
							<p>
								Commencez votre parcours de santé de manière simple et intuitive ! Téléchargez notre application conviviale, créez un compte en quelques minutes, et accédez à un suivi complet de votre bien-être. Suivez vos progrès en matière de santé, d'activité physique, et plus encore.
							</p>
							<FadeInUp className="extra-mt">
								<Link className="Ligh4Med-default-btn pill" data-text="Inscrivez-vous maintenant" href="/sign-up">
									<span className="button-wraper">Inscrivez-vous maintenant</span>
								</Link>
							</FadeInUp>
						</div>
						<div className="Ligh4Med-ctathumb-shape2">
							<Image src={Shape1} alt="Shape" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default CtaTwo;
