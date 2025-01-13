import Icon from "@/public/images/v2/icon9.png";
import Image from "next/image";
function FaqAccordion() {
	return (
		<>
			<div className="accordion Ligh4Med-accordion-section-v2" id="Ligh4Med-accordion2">
				<div className="accordion-item Ligh4Med-accordion-item">
					<h3 className="accordion-header Ligh4Med-accordion-header">
						<button
							className="accordion-button"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseOne"
						>
							Comment suivre mes données de santé ?
						</button>
						<div className="accordion-icon">
							<Image src={Icon} alt="Icon" />
						</div>
					</h3>
					<div
						id="collapseOne"
						className="accordion-collapse collapse show"
						data-bs-parent="#Ligh4Med-accordion2"
					>
						<div className="accordion-body Ligh4Med-accordion-body">
							Suivez votre santé à l'aide de l'application en suivant les signes vitaux, en gérant vos dossiers
							médicaux et en analysant les tendances de santé au fil du temps.
						</div>
					</div>
				</div>
				<div className="accordion-item Ligh4Med-accordion-item">
					<h3 className="accordion-header Ligh4Med-accordion-header">
						<button
							className="accordion-button"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseTwo"
						>
							Puis-je prendre rendez-vous avec un médecin via l'application ?
						</button>
						<div className="accordion-icon">
							<Image src={Icon} alt="Icon" />
						</div>
					</h3>
					<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#Ligh4Med-accordion2">
						<div className="accordion-body Ligh4Med-accordion-body">
							Oui, l'application vous permet de prendre rendez-vous avec des professionnels de santé en fonction
							de leur disponibilité.
						</div>
					</div>
				</div>
				<div className="accordion-item Ligh4Med-accordion-item">
					<h3 className="accordion-header Ligh4Med-accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseThree"
						>
							Comment accéder à mes dossiers médicaux ?
						</button>
						<div className="accordion-icon">
							<Image src={Icon} alt="Icon" />
						</div>
					</h3>
					<div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#Ligh4Med-accordion2">
						<div className="accordion-body Ligh4Med-accordion-body">
							Vous pouvez accéder à vos dossiers médicaux de manière sécurisée via l'application et les partager
							avec votre professionnel de santé si nécessaire.
						</div>
					</div>
				</div>
			</div>

			<div className="accordion Ligh4Med-accordion-section-v2 mt-24" id="Ligh4Med-accordion3">
				<div className="accordion-item Ligh4Med-accordion-item">
					<h3 className="accordion-header Ligh4Med-accordion-header">
						<button
							className="accordion-button"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseFour"
						>
							Quels services de santé sont disponibles sur l'application ?
						</button>
						<div className="accordion-icon">
							<Image src={Icon} alt="Icon" />
						</div>
					</h3>
					<div
						id="collapseFour"
						className="accordion-collapse collapse show"
						data-bs-parent="#Ligh4Med-accordion3"
					>
						<div className="accordion-body Ligh4Med-accordion-body">
							Vous pouvez accéder à divers services de santé tels que des consultations virtuelles, le suivi de
							santé et le suivi du bien-être.
						</div>
					</div>
				</div>
				<div className="accordion-item Ligh4Med-accordion-item">
					<h3 className="accordion-header Ligh4Med-accordion-header">
						<button
							className="accordion-button"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseFive"
						>
							Comment suivre mes médicaments via l'application ?
						</button>
						<div className="accordion-icon">
							<Image src={Icon} alt="Icon" />
						</div>
					</h3>
					<div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#Ligh4Med-accordion3">
						<div className="accordion-body Ligh4Med-accordion-body">
							L'application vous permet de gérer vos médicaments, de définir des rappels et de suivre votre
							historique des médicaments.
						</div>
					</div>
				</div>
				<div className="accordion-item Ligh4Med-accordion-item">
					<h3 className="accordion-header Ligh4Med-accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseSix"
						>
							Comment obtenir un second avis médical via l'application ?
						</button>
						<div className="accordion-icon">
							<Image src={Icon} alt="Icon" />
						</div>
					</h3>
					<div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#Ligh4Med-accordion3">
						<div className="accordion-body Ligh4Med-accordion-body">
							Vous pouvez demander un second avis auprès de différents spécialistes via l'application en partageant
							votre historique médical et vos résultats d'examen.
						</div>
					</div>
				</div>
			</div>

		</>
	);
}

export default FaqAccordion;
