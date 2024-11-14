import {
	Audit,
	Banner,
	Benefits,
	Contacts,
	Cta,
	EndBanner,
	Faq,
	Footer,
	Header,
	Hero,
	Intro,
	Reviews,
	Tariffs,
} from './components';

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<Intro />
			<Audit />
			<Benefits />
			<Tariffs />
			<Banner />
			<Cta />
			<Reviews />
			<Faq />
			<EndBanner />
			<Contacts />
			<Footer />
		</>
	);
}
