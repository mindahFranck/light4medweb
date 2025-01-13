import TextSplitFadeIn from "../../../animation/TextSplitFadeIn";
import FaqAccordion from "./FaqAccordion";

function Faq() {
	return (
		<section className="section Ligh4Med-section-padding bg-light" id="faq">
			<div className="container">
				<div className="Ligh4Med-section-title center">
					<div className="tg-heading-subheading">
						<h2>
							<TextSplitFadeIn> Si vous avez des questions, demandez-nous ! </TextSplitFadeIn>
						</h2>
					</div>
				</div>
				<div className="Ligh4Med-accordion-wrap1 Ligh4Med-accordion-wrap2">
					<div className="Ligh4Med-accordion-section-wrapper">
						<FaqAccordion />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Faq;
