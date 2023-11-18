import Link from 'next/link'

export default function Home() {
	return (
		<>
			<div className="h-screen pb-14 bg-right bg-cover" style={{ backgroundImage: 'url(bg.svg)' }}>
				<div className="w-full container mx-auto p-6">
						
					<div className="w-full flex items-center justify-between">
						<a className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"  href="#"> 
							<svg className="h-8 fill-current text-indigo-600 pr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
								<path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z"/></svg>
								Image Tools
						</a>
						
						<div className="flex w-1/2 justify-end content-center">	
							<Link href="/pages/draw-ui" className="inline-block text-black-300 no-underline hover:text-purple-800 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4" data-tippy-content="@twitter_handle">
								Online drawing board
							</Link>	
						</div>
					</div>
				</div>

				<div className="container pt-16 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center justify-between">
					
					<div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
						<h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">Convert Design UI or Image to HTML and CSS Code Online with GPT-4 Vision</h1>
						<p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">Transform UI designs or images into high-quality HTML, CSS, and JavaScript code with ease.</p>
					
						<p className="text-blue-400 font-bold pb-8 lg:pb-6 text-center md:text-left fade-in">

						</p>
						<div className="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
							
							<Link href="/pages/draw-ui"
								className="rounded-full bg-purple-800 text-white py-3 px-4"
							>Start Drawing</Link>
						</div>

					</div>
					
					<div className="w-full xl:w-2/5 py-6 overflow-y-hidden">
						<img src="draw-demo.png" alt="" />
					</div>
					
					<div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
						<a className="text-gray-500 no-underline hover:no-underline" href="#">&copy; Image Tools 2023</a>
					</div>
					
				</div>
				

			</div>
		</>
	)
}