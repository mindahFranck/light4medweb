"use client";
import CountUp from "react-countup";
function Counter() {
	return (
		<section className="section Ligh4Med-section-padding2 dark-bg" id="fact">
			<div id="Ligh4Med-counter"></div>
			<div className="container">
				<div className="Ligh4Med-counter-wrap">
					<div className="Ligh4Med-counter-data">
						<h2>
							<CountUp end={19} duration={3} redraw={true} enableScrollSpy />k
						</h2>
						<p>Nombre de Téléchqrgement</p>
					</div>
					<div className="Ligh4Med-counter-data">
						<h2>
							<CountUp end={5} duration={3} redraw={true} enableScrollSpy />
						</h2>
						<p>Actualités médicales disponibles</p>
					</div>
					<div className="Ligh4Med-counter-data">
						<h2>
							<CountUp end={80} duration={3} redraw={true} enableScrollSpy />%
						</h2>
						<p>Taux de satisfaction des utilisateurs</p>
					</div>
					<div className="Ligh4Med-counter-data">
						<h2>
							<CountUp end={100} duration={3} redraw={true} enableScrollSpy />
						</h2>
						<p>Grossesses suivies avec succès</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Counter;