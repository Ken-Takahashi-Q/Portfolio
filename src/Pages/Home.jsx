import React from 'react'
import '../styles/home.css'

export default function Home() {
    return (
        <main className="App">
			<div class="upper">
				<div class="left_side">
					
				<div class="section" style="margin-top: 2.2rem;">
					<div class="profile_cover">
						
					</div>
					<div class="profile">
						<a id="a_profile_img" href="https://www.linkedin.com/in/k-tkhashi/">
							<img class="profile_img" src="Home/profile.jpg" alt="profile" />
						</a>
						
						<div class="contact">
							<button
								class="link_btn"
								id="github"
								style="background-color: black;"
								href="https://github.com/Ken-Takahashi-Q"
								target="_blank"
								type="button"
							>
								<h2>GitHub</h2>
								<img src="Home/logo-github.png" target="_blank" alt="github-logo" />
							</button>

							<button
								class="link_btn"
								id="linkedin"
								style="background-color: rgb(232, 232, 232);"
								href=""
								target="_blank"
								type="button"
							>
								<h2 style="color: black;">LinkedIn</h2>
								<img src="Home/logo-linkedin.png" alt="linkedin-logo" />
							</button>
						</div>
					</div>

					<div class="info">
						<h1>Yathip Takahashi</h1>
						<h2>Electrical Engineering, Chulalongkorn University</h2>	
						<p style="margin-top: 0.5rem">Bangkok, Thailand</p>
					</div>

					<div class="open_to_long">
						<div class="open_to">
							<h3><b>Open to work</b></h3>
							<h4><span>Front End Developer</span>, <span>Software Engineer</span>, <span>Data Scientist</span></h4>
						</div>
					</div>
				</div>

				<div class="section">
					<h1 style="margin-bottom: 1rem;">About</h1>
					<p>&emsp; A recent graduate. Love designing and building website, starting with internship using React. Proficient in Python, experienced in deep learning. Updating this portfolio daily.</p>
				</div>

				<div class="section">
					<h1 style="margin-bottom: 1rem;">Experience</h1>
					
					<h2 style="margin-bottom: 0.5rem;">Undergraduate Project</h2>
					<h3>Image super-resolution</h3>
					<p >Using deep learning techniques to improved the quality and realism of upscaled images obtained from neural networks</p>
					<a style="padding-bottom:1rem; margin: 1rem 0 1rem 0; width: 100%; border-bottom: 1px solid gray;" href="#project">
						<button class="credential" style="margin-top: 0; width: 8rem;">More Details</button>
					</a>
					
					<h2 style="margin-bottom: 0.5rem;">Internship 5G AI / IoT Innovation Center </h2>
					<ul style="margin-left: 1rem;">
						<li><p>Developed an IoT devices monitoring website using React</p></li>
						<li><p>Implemented NLP machine learning models for a text-to-speech application for client using BERT and Transformer</p></li>
					</ul>
				</div>

				<div class="section">
					<h1>Licenses & certifications</h1>
					<div class="license">
						<div>
							<img class="license_icon" src="Home/logo-ielts.jpg" alt="logo" />
						</div>
						<div class="license_details">
							<h3>IELTS Academic 7.0</h3>
							<h4>IELTS Official</h4>
							<p>Issued March 2, 2022</p>
						</div>
					</div>

					<div class="license">
						<div>
							<img class="license_icon" src="Home/logo-google.webp" alt="logo" />
						</div>
						<div class="license_details">
							<h3>Google Data Analytics Specialization</h3>
							<h4>Coursera</h4>
							<p>Issued May 26, 2021</p>
							<a href="https://www.coursera.org/account/accomplishments/specialization/certificate/2P3UBDKWSM6Z" target="_blank"><button class="credential">Show credential</button></a>
						</div>
					</div>

					<div class="license">
						<div>
							<img class="license_icon" src="Home/logo-coursera.png" alt="logo" />
						</div>
						<div class="license_details">
							<h3>SQL for Data Science</h3>
							<h4>Coursera</h4>
							<p>Issued Jan, 2021</p>
							<a href="https://www.coursera.org/account/accomplishments/specialization/certificate/2P3UBDKWSM6Z" target="_blank"><button class="credential">Show credential</button></a>
						</div>
					</div>

					<div class="license">
						<div>
							<img class="license_icon" src="Home/logo-coursera.png" alt="logo" />
						</div>
						<div class="license_details">
							<h3>Financial Markets (with Honors)</h3>
							<h4>Coursera</h4>
							<p>Issued Aug, 2020</p>
							<a href="https://www.coursera.org/account/accomplishments/certificate/PSQJ8Q7K28LL" target="_blank"><button class="credential">Show credential</button></a>
						</div>
					</div>
					
					<div class="license">
						<div>
							<img class="license_icon" src="Home/logo-coursera.png" alt="logo" />
						</div>
						<div class="license_details">
							<h3>Python and Statistics for Financial Analysis</h3>
							<h4>Coursera</h4>
							<p>Issued Jul, 2020</p>
							<a href="https://www.coursera.org/account/accomplishments/certificate/PS3BWCZNY5US" target="_blank"><button class="credential">Show credential</button></a>
						</div>
					</div>
				</div>

				<div class="section">
					<h1 style="margin-bottom: 1rem;">Skills</h1>
					<h2>Proficient</h2>
					<p style="margin-bottom: 1rem;">Python, PyTorch, HTML/CSS, JavaScript, SQL, Tailwind</p>
					
					<h2>Familiar</h2>
					<p style="padding-bottom: 1rem; margin-bottom: 1rem; width: 100%; border-bottom: 1px solid gray;">React, C, Next.js, MATLAB</p>

					<h2><b>Relevant courses</b></h2>
					<ul style="padding-left: 1rem;">
						<li><p>Embedded Systems</p></li>
						<li><p>Image Processing</p></li>
						<li><p>Data Communication</p></li>
						<li><p>Telecommunication Transmission</p></li>
					</ul>
					
				</div>

				<div class="section">
					<h1 style="margin-bottom: 1rem;">Languages</h1>
					<ul style="padding-left: 1rem;">
						<li><p>Thai (native)</p></li>
						<li><p>English IELTS 7 (CEFR C1 equivalent)</p></li>
						<li><p>Japanese N2 (Pre-advanced)</p></li>
					</ul>
				</div>

				<div class="section">
					<h1 style="margin-bottom: 1rem;">Suggests for employer</h1>
					<div class="resume" style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
						<h4>Resume<br/><span><p>updated Feb 2023</p></span></h4>
						
						<a href="Home/Resume_Yathip Takahashi.pdf" target="_blank"><button class="credential" style="margin-top: 0; width: 8rem;">See resume</button></a>
					</div>
					
				</div>

				<div class="section" id="project">
					<h1 style="margin-bottom: 1rem;">Graduation Project</h1>
					<div class="resume" style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
						<h4>Face Image Super-Resolution Using Neural Network<br/><span><p style="font-size: 0.8rem;">*Simplified version</p></span></h4>
						
						<a href="Home/Sr-Project.pdf" target="_blank"><button class="credential" style="margin-top: 0; width: 8rem;">See Details</button></a>
					</div>
					
				</div>

				</div>
			</div>

			<div class="right_side">
				<div class="difficulty">
					<p>Beginner</p>
					<button id="btn_beginner"><span class="dot-1"></span></button>
					<button id="btn_medium"><span class="dot-2"></span></button>
					<button id="btn_hard"><span class="dot-3"></span></button>
					<button id="btn_master"><span class="dot-4"></span></button>
					<p>Master</p>
				</div>

				<div class="grid-container">
					<a class="go" href="02-Product Preview">
						<div class="card" style="background-image: url(Home/02.jpeg);">
							<div class="preview">
								<img src="Home/02.jpeg" alt="preview" />
							</div>

							<div class="cover">
								<div class="frame">
									<p>1-Product Preview</p>
									<h4 class="beginner">Beginner</h4>
								</div>
							</div>

							<div class="overlay">
								<img class="logo" src="Home/logo-html-2.png" alt="logo-html" />
								<img class="logo" src="Home/logo-css.png" alt="logo-css" />
							</div>
						</div>
					</a>

					<a class="go" href="02-Form/">
						<div class="card-test" style="background-image: url(Home/02F.jpeg);">
							<div class="cover-test">
								<div class="frame">
									<p>2-Form</p>
									<h4 class="beginner">Beginner</h4>
								</div>
							</div>

							<div class="overlay">
								<img class="logo" src="Home/logo-html-2.png" alt="logo-html" />
								<img class="logo" src="Home/logo-css.png" alt="logo-css" />
							</div>
						</div>
					</a>

					<a class="go" href="03-Four Cards">
						<div class="card" style="background-image: url(Home/03.jpeg);">
							<div class="preview">
								<img src="Home/03.jpeg" alt="preview" />
							</div>

							<div class="cover">
								<div class="frame">
									<p>3-Four Cards</p>
									<h4 class="beginner">Beginner</h4>
								</div>
							</div>

							<div class="overlay">
								<img class="logo" src="Home/logo-html-2.png" alt="logo-html" />
								<img class="logo" src="Home/logo-css.png" alt="logo-css" />
							</div>
						</div>
					</a>
					
					<a class="go" href="04-Coming Soon">
						<div class="card" style="background-image: url(Home/04.jpeg);">
							<div class="preview">
								<img src="Home/04.jpeg" alt="preview" />
							</div>

							<div class="cover">
								<div class="frame">
									<p>4-Coming Soon</p>
									<h4 class="beginner">Beginner</h4>
								</div>
							</div>

							<div class="overlay">
								<img class="logo" src="Home/logo-html-2.png" alt="logo-html" />
								<img class="logo" src="Home/logo-css.png" alt="logo-css" />
							</div>
						</div>
					</a>

					<a class="go" href="05-Testimonial">
						<div class="card" style="background-image: url(Home/05.jpeg);">
							<div class="preview">
								<img src="Home/05.jpeg" alt="preview" />
							</div>

							<div class="cover">
								<div class="frame">
									<p>5-Testimonial</p>
									<h4 class="intermediate">Intermediate</h4>
								</div>
							</div>

							<div class="overlay">
								<img class="logo" src="Home/logo-html-2.png" alt="logo-html" />
								<img class="logo" src="Home/logo-css.png" alt="logo-css" />
							</div>
						</div>
					</a>

					<a class="go" href="06-Advice API">
						<div class="card" style="background-image: url(Home/06.jpeg);">
							<div class="preview">
								<img src="Home/06.jpeg" alt="preview" />
							</div>

							<div class="cover">
								<div class="frame">
									<p>6-Advice API</p>
									<h4 class="intermediate">Intermediate</h4>
								</div>
							</div>

							<div class="overlay">
								<img class="logo" src="Home/logo-html-2.png" alt="logo-html" />
								<img class="logo" src="Home/logo-css.png" alt="logo-css" />
								<img class="logo" src="Home/logo-js.png" alt="logo-js" />
							</div>
						</div>
					</a>

					<a class="go" href="07-Notification Page">
						<div class="card" style="background-image: url(Home/07.jpeg);">
							<div class="preview">
								<img src="Home/07.jpeg" alt="preview" />
							</div>

							<div class="cover">
								<div class="frame">
									<p>7-Notification Page</p>
									<h4 class="intermediate">Intermediate</h4>
								</div>
							</div>

							<div class="overlay">
								<img class="logo" src="Home/logo-html-2.png" alt="logo-html" />
								<img class="logo" src="Home/logo-css.png" alt="logo-css" />
								<img class="logo" src="Home/logo-js.png" alt="logo-js" />
							</div>
						</div>
					</a>

					<a class="go" href="08-Credit Card">
						<div class="card" style="background-color: rgb(62, 21, 88);">
							<div class="preview">
								<img src="Home/08.png" alt="preview" />
							</div>

							<div class="cover">
								<div class="frame">
									<p>8-Credit Card</p>
									<h4 class="intermediate">Intermediate</h4>
								</div>
							</div>

							<div class="overlay">
								<img class="logo" src="Home/logo-html-2.png" alt="logo-html" />
								<img class="logo" src="Home/logo-css.png" alt="logo-css" />
								<img class="logo" src="Home/logo-js.png" alt="logo-js" />
							</div>
						</div>
					</a>

					<a class="go" href="09-Expense Chart">
						<div class="card" style="background-image: url(Home/09.jpeg);">
							<div class="preview">
								<img src="Home/09.jpeg" alt="preview" />
							</div>

							<div class="cover">
								<div class="frame">
									<p>9-Expense Chart</p>
									<h4 class="intermediate">Intermediate</h4>
								</div>
							</div>

							<div class="overlay">
								<img class="logo" src="Home/logo-html-2.png" alt="logo-html" />
								<img class="logo" src="Home/logo-css.png" alt="logo-css" />
								<img class="logo" src="Home/logo-js.png" alt="logo-js" />
							</div>
						</div>
					</a>
					
					{/* <a class="go" href="10-Tracking Dashboard">
						<div class="card" style="background-color: gray;">
							<div class="preview">
								<img src="" alt="unfinished" />
							</div>

							<div class="cover">
								<div class="frame">
									<p>10-Tracking Dashboard</p>
									<h4 class="intermediate">Intermediate</h4>
								</div>
							</div>

							<div class="overlay">
								<img class="logo" src="Home/logo-html-2.png" alt="logo-html" />
								<img class="logo" src="Home/logo-css.png" alt="logo-css" />
								<img class="logo" src="Home/logo-js.png" alt="logo-js" />
							</div>
						</div>
					</a> */}

					<a class="go" href="11-Parallax Page/">
						<div class="card" style="background-image: url(Home/11.jpeg);">
							<div class="preview">
								<img src="Home/11.jpeg" alt="preview" />
							</div>

							<div class="cover">
								<div class="frame">
									<p>11-Parallax Page</p>
									<h4 class="intermediate">Intermediate</h4>
								</div>
							</div>

							<div class="overlay">
								<img class="logo" src="Home/logo-html-2.png" alt="logo-html" />
								<img class="logo" src="Home/logo-css.png" alt="logo-css" />
								<img class="logo" src="Home/logo-js.png" alt="logo-js" />
							</div>
						</div>
					</a>

					<a class="go" href="12-Calculator App">
						<div class="card" style="background-image: url(Home/12.jpeg);">
							<div class="preview">
								<img src="Home/12.jpeg" alt="Calculator App" />
							</div>

							<div class="cover">
								<div class="frame">
									<p>12-Calculator App</p>
									<h4 class="hard">Hard</h4>
								</div>
							</div>

							<div class="overlay">
								<img class="logo" src="Home/logo-html-2.png" alt="logo-html" />
								<img class="logo" src="Home/logo-css.png" alt="logo-css" />
								<img class="logo" src="Home/logo-js.png" alt="logo-js" />
							</div>
						</div>
					</a>

					<a class="go" href="13-Theme Switcher">
						<div class="card" style="background-image: url(Home/13\ temp.jpeg);">
							<div class="preview">
								<img src="Home/13 temp.jpeg" alt="13-Theme Switcher" />
							</div>

							<div class="cover">
								<div class="frame">
									<p>13-Theme Switcher</p>
									<h4 class="intermediate">Intermediate</h4>
								</div>
							</div>

							<div class="overlay">
								<img class="logo" src="Home/logo-html-2.png" alt="logo-html" />
								<img class="logo" src="Home/logo-css.png" alt="logo-css" />
								<img class="logo" src="Home/logo-js.png" alt="logo-js" />
							</div>
						</div>
					</a>

				</div>

			</div>

			<div class="upper">
				<div class="left_side">
					
				<div class="section" style="margin-top: 2.2rem;">
					<div class="profile_cover">
						
					</div>
					<div class="profile">
						<a id="a_profile_img" href="https://www.linkedin.com/in/k-tkhashi/">
							<img class="profile_img" src="Home/profile.jpg" alt="profile" />
						</a>
						
						<div class="contact">
							<button
								class="link_btn"
								id="github"
								style="background-color: black;"
								href="https://github.com/Ken-Takahashi-Q"
								target="_blank"
								type="button"
							>
								<h2>GitHub</h2>
								<img src="Home/logo-github.png" target="_blank" alt="github-logo" />
							</button>

							<button
								class="link_btn"
								id="linkedin"
								style="background-color: rgb(232, 232, 232);"
								href=""
								target="_blank"
								type="button"
							>
								<h2 style="color: black;">LinkedIn</h2>
								<img src="Home/logo-linkedin.png" alt="linkedin-logo" />
							</button>
						</div>
					</div>

					<div class="info">
						<h1>Yathip Takahashi</h1>
						<h2>Electrical Engineering, Chulalongkorn University</h2>	
						<p style="margin-top: 0.5rem">Bangkok, Thailand</p>
					</div>

					<div class="open_to_long">
						<div class="open_to">
							<h3><b>Open to work</b></h3>
							<h4><span>Front End Developer</span>, <span>Software Engineer</span>, <span>Data Scientist</span></h4>
						</div>
					</div>
				</div>

				<div class="section">
					<h1 style="margin-bottom: 1rem;">About</h1>
					<p>&emsp; A recent graduate. Love designing and building website, starting with internship using React. Proficient in Python, experienced in deep learning. Updating this portfolio daily.</p>
				</div>

				<div class="section">
					<h1 style="margin-bottom: 1rem;">Experience</h1>
					
					<h2 style="margin-bottom: 0.5rem;">Undergraduate Project</h2>
					<h3>Image super-resolution</h3>
					<p >Using deep learning techniques to improved the quality and realism of upscaled images obtained from neural networks</p>
					<a style="padding-bottom:1rem; margin: 1rem 0 1rem 0; width: 100%; border-bottom: 1px solid gray;" href="#project">
						<button class="credential" style="margin-top: 0; width: 8rem;">More Details</button>
					</a>
					
					<h2 style="margin-bottom: 0.5rem;">Internship 5G AI / IoT Innovation Center </h2>
					<ul style="margin-left: 1rem;">
						<li><p>Developed an IoT devices monitoring website using React</p></li>
						<li><p>Implemented NLP machine learning models for a text-to-speech application for client using BERT and Transformer</p></li>
					</ul>
				</div>

				<div class="section">
					<h1>Licenses & certifications</h1>
					<div class="license">
						<div>
							<img class="license_icon" src="Home/logo-ielts.jpg" alt="logo" />
						</div>
						<div class="license_details">
							<h3>IELTS Academic 7.0</h3>
							<h4>IELTS Official</h4>
							<p>Issued March 2, 2022</p>
						</div>
					</div>

					<div class="license">
						<div>
							<img class="license_icon" src="Home/logo-google.webp" alt="logo" />
						</div>
						<div class="license_details">
							<h3>Google Data Analytics Specialization</h3>
							<h4>Coursera</h4>
							<p>Issued May 26, 2021</p>
							<a href="https://www.coursera.org/account/accomplishments/specialization/certificate/2P3UBDKWSM6Z" target="_blank"><button class="credential">Show credential</button></a>
						</div>
					</div>

					<div class="license">
						<div>
							<img class="license_icon" src="Home/logo-coursera.png" alt="logo" />
						</div>
						<div class="license_details">
							<h3>SQL for Data Science</h3>
							<h4>Coursera</h4>
							<p>Issued Jan, 2021</p>
							<a href="https://www.coursera.org/account/accomplishments/specialization/certificate/2P3UBDKWSM6Z" target="_blank"><button class="credential">Show credential</button></a>
						</div>
					</div>

					<div class="license">
						<div>
							<img class="license_icon" src="Home/logo-coursera.png" alt="logo" />
						</div>
						<div class="license_details">
							<h3>Financial Markets (with Honors)</h3>
							<h4>Coursera</h4>
							<p>Issued Aug, 2020</p>
							<a href="https://www.coursera.org/account/accomplishments/certificate/PSQJ8Q7K28LL" target="_blank"><button class="credential">Show credential</button></a>
						</div>
					</div>
					
					<div class="license">
						<div>
							<img class="license_icon" src="Home/logo-coursera.png" alt="logo" />
						</div>
						<div class="license_details">
							<h3>Python and Statistics for Financial Analysis</h3>
							<h4>Coursera</h4>
							<p>Issued Jul, 2020</p>
							<a href="https://www.coursera.org/account/accomplishments/certificate/PS3BWCZNY5US" target="_blank"><button class="credential">Show credential</button></a>
						</div>
					</div>
				</div>

				<div class="section">
					<h1 style="margin-bottom: 1rem;">Skills</h1>
					<h2>Proficient</h2>
					<p style="margin-bottom: 1rem;">Python, PyTorch, HTML/CSS, JavaScript, SQL, Tailwind</p>
					
					<h2>Familiar</h2>
					<p style="padding-bottom: 1rem; margin-bottom: 1rem; width: 100%; border-bottom: 1px solid gray;">React, C, Next.js, MATLAB</p>

					<h2><b>Relevant courses</b></h2>
					<ul style="padding-left: 1rem;">
						<li><p>Embedded Systems</p></li>
						<li><p>Image Processing</p></li>
						<li><p>Data Communication</p></li>
						<li><p>Telecommunication Transmission</p></li>
					</ul>
					
				</div>

				<div class="section">
					<h1 style="margin-bottom: 1rem;">Languages</h1>
					<ul style="padding-left: 1rem;">
						<li><p>Thai (native)</p></li>
						<li><p>English IELTS 7 (CEFR C1 equivalent)</p></li>
						<li><p>Japanese N2 (Pre-advanced)</p></li>
					</ul>
				</div>

				<div class="section">
					<h1 style="margin-bottom: 1rem;">Suggests for employer</h1>
					<div class="resume" style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
						<h4>Resume<br/><span><p>updated Feb 2023</p></span></h4>
						
						<a href="Home/Resume_Yathip Takahashi.pdf" target="_blank"><button class="credential" style="margin-top: 0; width: 8rem;">See resume</button></a>
					</div>
					
				</div>

				<div class="section" id="project">
					<h1 style="margin-bottom: 1rem;">Graduation Project</h1>
					<div class="resume" style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
						<h4>Face Image Super-Resolution Using Neural Network<br/><span><p style="font-size: 0.8rem;">*Simplified version</p></span></h4>
						
						<a href="Home/Sr-Project.pdf" target="_blank"><button class="credential" style="margin-top: 0; width: 8rem;">See Details</button></a>
					</div>
					
				</div>

			</div>

			<div class="right_side">
				<div class="difficulty">
					<p>Beginner</p>
					<button id="btn_beginner"><span class="dot-1"></span></button>
					<button id="btn_medium"><span class="dot-2"></span></button>
					<button id="btn_hard"><span class="dot-3"></span></button>
					<button id="btn_master"><span class="dot-4"></span></button>
					<p>Master</p>
				</div>

			<div class="grid-container">
				<a class="go" href="02-Product Preview">
					<div class="card" style="background-image: url(Home/02.jpeg);">
						<div class="preview">
							<img src="Home/02.jpeg" alt="preview" />
						</div>

						<div class="cover">
							<div class="frame">
								<p>1-Product Preview</p>
								<h4 class="beginner">Beginner</h4>
							</div>
						</div>

						<div class="overlay">
							<img class="logo" src="Home/logo-html-2.png" alt="logo-html" />
							<img class="logo" src="Home/logo-css.png" alt="logo-css" />
						</div>
					</div>
				</a>

				<a class="go" href="02-Form/">
					<div class="card-test" style="background-image: url(Home/02F.jpeg);">
						<div class="cover-test">
							<div class="frame">
								<p>2-Form</p>
								<h4 class="beginner">Beginner</h4>
							</div>
						</div>

						<div class="overlay">
							<img class="logo" src="Home/logo-html-2.png" alt="logo-html" />
							<img class="logo" src="Home/logo-css.png" alt="logo-css" />
						</div>
					</div>
				</a>

				<a class="go" href="03-Four Cards">
					<div class="card" style="background-image: url(Home/03.jpeg);">
						<div class="preview">
							<img src="Home/03.jpeg" alt="preview" />
						</div>

						<div class="cover">
							<div class="frame">
								<p>3-Four Cards</p>
								<h4 class="beginner">Beginner</h4>
							</div>
						</div>

						<div class="overlay">
							<img class="logo" src="Home/logo-html-2.png" alt="logo-html" />
							<img class="logo" src="Home/logo-css.png" alt="logo-css" />
						</div>
					</div>
				</a>
				
				<a class="go" href="04-Coming Soon">
					<div class="card" style="background-image: url(Home/04.jpeg);">
						<div class="preview">
							<img src="Home/04.jpeg" alt="preview" />
						</div>

						<div class="cover">
							<div class="frame">
								<p>4-Coming Soon</p>
								<h4 class="beginner">Beginner</h4>
							</div>
						</div>

						<div class="overlay">
							<img class="logo" src="Home/logo-html-2.png" alt="logo-html" />
							<img class="logo" src="Home/logo-css.png" alt="logo-css" />
						</div>
					</div>
				</a>

				<a class="go" href="05-Testimonial">
					<div class="card" style="background-image: url(Home/05.jpeg);">
						<div class="preview">
							<img src="Home/05.jpeg" alt="preview" />
						</div>

						<div class="cover">
							<div class="frame">
								<p>5-Testimonial</p>
								<h4 class="intermediate">Intermediate</h4>
							</div>
						</div>

						<div class="overlay">
							<img class="logo" src="Home/logo-html-2.png" alt="logo-html" />
							<img class="logo" src="Home/logo-css.png" alt="logo-css" />
						</div>
					</div>
				</a>

				<a class="go" href="06-Advice API">
					<div class="card" style="background-image: url(Home/06.jpeg);">
						<div class="preview">
							<img src="Home/06.jpeg" alt="preview" />
						</div>

						<div class="cover">
							<div class="frame">
								<p>6-Advice API</p>
								<h4 class="intermediate">Intermediate</h4>
							</div>
						</div>

						<div class="overlay">
							<img class="logo" src="Home/logo-html-2.png" alt="logo-html" />
							<img class="logo" src="Home/logo-css.png" alt="logo-css" />
							<img class="logo" src="Home/logo-js.png" alt="logo-js" />
						</div>
					</div>
				</a>

				<a class="go" href="07-Notification Page">
					<div class="card" style="background-image: url(Home/07.jpeg);">
						<div class="preview">
							<img src="Home/07.jpeg" alt="preview" />
						</div>

						<div class="cover">
							<div class="frame">
								<p>7-Notification Page</p>
								<h4 class="intermediate">Intermediate</h4>
							</div>
						</div>

						<div class="overlay">
							<img class="logo" src="Home/logo-html-2.png" alt="logo-html" />
							<img class="logo" src="Home/logo-css.png" alt="logo-css" />
							<img class="logo" src="Home/logo-js.png" alt="logo-js" />
						</div>
					</div>
				</a>

				<a class="go" href="08-Credit Card">
					<div class="card" style="background-color: rgb(62, 21, 88);">
						<div class="preview">
							<img src="Home/08.png" alt="preview" />
						</div>

						<div class="cover">
							<div class="frame">
								<p>8-Credit Card</p>
								<h4 class="intermediate">Intermediate</h4>
							</div>
						</div>

						<div class="overlay">
							<img class="logo" src="Home/logo-html-2.png" alt="logo-html" />
							<img class="logo" src="Home/logo-css.png" alt="logo-css" />
							<img class="logo" src="Home/logo-js.png" alt="logo-js" />
						</div>
					</div>
				</a>

				<a class="go" href="09-Expense Chart">
					<div class="card" style="background-image: url(Home/09.jpeg);">
						<div class="preview">
							<img src="Home/09.jpeg" alt="preview" />
						</div>

						<div class="cover">
							<div class="frame">
								<p>9-Expense Chart</p>
								<h4 class="intermediate">Intermediate</h4>
							</div>
						</div>

						<div class="overlay">
							<img class="logo" src="Home/logo-html-2.png" alt="logo-html" />
							<img class="logo" src="Home/logo-css.png" alt="logo-css" />
							<img class="logo" src="Home/logo-js.png" alt="logo-js" />
						</div>
					</div>
				</a>
				
				{/* <a class="go" href="10-Tracking Dashboard">
					<div class="card" style="background-color: gray;">
						<div class="preview">
							<img src="" alt="unfinished" />
						</div>

						<div class="cover">
							<div class="frame">
								<p>10-Tracking Dashboard</p>
								<h4 class="intermediate">Intermediate</h4>
							</div>
						</div>

						<div class="overlay">
							<img class="logo" src="Home/logo-html-2.png" alt="logo-html" />
							<img class="logo" src="Home/logo-css.png" alt="logo-css" />
							<img class="logo" src="Home/logo-js.png" alt="logo-js" />
						</div>
					</div>
				</a> */}

				<a class="go" href="11-Parallax Page/">
					<div class="card" style="background-image: url(Home/11.jpeg);">
						<div class="preview">
							<img src="Home/11.jpeg" alt="preview" />
						</div>

						<div class="cover">
							<div class="frame">
								<p>11-Parallax Page</p>
								<h4 class="intermediate">Intermediate</h4>
							</div>
						</div>

						<div class="overlay">
							<img class="logo" src="Home/logo-html-2.png" alt="logo-html" />
							<img class="logo" src="Home/logo-css.png" alt="logo-css" />
							<img class="logo" src="Home/logo-js.png" alt="logo-js" />
						</div>
					</div>
				</a>

				<a class="go" href="12-Calculator App">
					<div class="card" style="background-image: url(Home/12.jpeg);">
						<div class="preview">
							<img src="Home/12.jpeg" alt="Calculator App" />
						</div>

						<div class="cover">
							<div class="frame">
								<p>12-Calculator App</p>
								<h4 class="hard">Hard</h4>
							</div>
						</div>

						<div class="overlay">
							<img class="logo" src="Home/logo-html-2.png" alt="logo-html" />
							<img class="logo" src="Home/logo-css.png" alt="logo-css" />
							<img class="logo" src="Home/logo-js.png" alt="logo-js" />
						</div>
					</div>
				</a>

				<a class="go" href="13-Theme Switcher">
					<div class="card" style="background-image: url(Home/13\ temp.jpeg);">
						<div class="preview">
							<img src="Home/13 temp.jpeg" alt="13-Theme Switcher" />
						</div>

						<div class="cover">
							<div class="frame">
								<p>13-Theme Switcher</p>
								<h4 class="intermediate">Intermediate</h4>
							</div>
						</div>

						<div class="overlay">
							<img class="logo" src="Home/logo-html-2.png" alt="logo-html" />
							<img class="logo" src="Home/logo-css.png" alt="logo-css" />
							<img class="logo" src="Home/logo-js.png" alt="logo-js" />
						</div>
					</div>
				</a>

			</div>

			</div>

			</div>
		</main>
    )
}
