"use client";
import Thumb2Img from "@/public/images/v2/t-thumb2.png";
import Thumb3Img from "@/public/images/v2/t-thumb3.png";
import Thumb1Img from "@/public/images/v2/textimonialthumb.png";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TextSplitFadeIn from "../../../animation/TextSplitFadeIn";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
	{
		id: crypto.randomUUID(),
		rating: 5,
		content:
		  "Je suis vraiment satisfait de vos services. C’est un véritable soulagement de travailler avec un médecin qui se soucie réellement des besoins, des situations et des préférences de ses patients. Je recommande vivement ce professionnel de santé.",
		author: "Jean Dupont",
		designation: "Patient",
		img: Thumb2Img,
	  },
	  {
		id: crypto.randomUUID(),
		rating: 5,
		content:
		  "Grâce à vos soins, j’ai retrouvé une meilleure qualité de vie. Le suivi médical est excellent, et je me sens toujours écouté et pris en charge. Je recommande vivement vos services.",
		author: "Sophie Martin",
		designation: "Patient",
		img: Thumb1Img,
	  },
	  {
		id: crypto.randomUUID(),
		rating: 5,
		content:
		  "Un professionnel de santé à l’écoute et compétent. Je suis très satisfait de l’accompagnement et du traitement que j’ai reçu. Je recommande sans hésiter.",
		author: "Marc Lefevre",
		designation: "Patient",
		img: Thumb3Img,
	  },
	  {
		id: crypto.randomUUID(),
		rating: 5,
		content:
		  "L’équipe médicale a été très attentive à mes besoins. Le suivi personnalisé a été un réel atout pour ma guérison. Très satisfait de l’accompagnement.",
		author: "Claire Durand",
		designation: "Patient",
		img: Thumb2Img,
	  },
	  {
		id: crypto.randomUUID(),
		rating: 5,
		content:
		  "Un service irréprochable. Mes rendez-vous ont toujours été bien organisés, et les médecins sont très professionnels. Je recommande vivement cet établissement.",
		author: "Louis Petit",
		designation: "Patient",
		img: Thumb1Img,
	  },
	  {
		id: crypto.randomUUID(),
		rating: 5,
		content:
		  "J’ai trouvé enfin un médecin qui prend le temps d’écouter et de proposer des solutions adaptées. Très satisfait du service et du suivi médical.",
		author: "Isabelle Lefevre",
		designation: "Patient",
		img: Thumb3Img,
	  },
	  
];

const swiperSettings = {
	slidesPerView: 1,
	navigation: true,
	modules: [Navigation],
};

function Testimonials() {
	return (
		<section className="section Ligh4Med-section-padding2" style={{ paddingTop: '0px !important' }}   id="testimonial">
			<div className="container">
				<div className="Ligh4Med-section-title center">
					<div className="tg-heading-subheading">
						<h2>
							<TextSplitFadeIn>Plusieurs Personnes Nous Font Confiance</TextSplitFadeIn>
						</h2>
					</div>
				</div>
				<div className="position-ralatiove">
					<div className="Ligh4Med-testimonial-2column-slider">
						{
							<Swiper {...swiperSettings}>
								{testimonialsData.map((testimonial) => (
									<SwiperSlide key={testimonial.id}>
										<TestimonialCard testimonial={testimonial} />
									</SwiperSlide>
								))}
							</Swiper>
						}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Testimonials;
