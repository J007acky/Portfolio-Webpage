let contactLi = document.getElementById('contact');
let AboutLi = document.getElementById('about');
let AcademicsLi = document.getElementById('academics');
let ProjectsLi = document.getElementById('projects');
uncheck = ()=>{
    contactLi.style.textDecoration = "none";
    ProjectsLi.style.textDecoration = "none";
    AcademicsLi.style.textDecoration = "none";
    AboutLi.style.textDecoration = "none";
}

AboutLi.addEventListener('click',function(){
    let contentP = document.getElementById('content');
    uncheck();
    contentP.innerHTML = "<h2>About Me : </h2><br>Hi, I'm Rahul Singh Rautela, born and raised in Jaipur. I'm a Coder and Tech Enthusiast, passionate about exploring the ever-evolving world of technology. My current interests are centered around the transformative potential of AI, and I'm actively learning and discovering more about this exciting field. I aspire to leverage my passion for AI and my experience in DevOps to develop innovative AI-driven DevOps solutions.<br><br>Currently, I am working as a DevOps Intern at WatchGuard Technology, where I'm gaining hands-on experience with a variety of DevOps tools and methodologies, further enhancing my technical skillset.<br><br>Outside of work, I'm a huge football lover—I stay up all night to watch my team win. I also enjoy watching movies and web series, and my favorite hobby is playing video games. On weekends, you'll find me in the kitchen, as I'm also a weekend chef, cooking up some basic dishes.";
    AboutLi.style.textDecoration = "underline";
    });

contactLi.addEventListener('click',function(){
    let contentP = document.getElementById('content');
    uncheck();
    contentP.innerHTML = '<strong>Email : </strong> rahulrautela21@gmail.com<br><strong>Contact No. : </strong> 99XXXXXX12<br><strong>LinkedIn : </strong> <a href="https://www.linkedin.com/in/rahul-singh-rautela-351166250">Rahul Singh Rautela</a><br></br>';
    contactLi.style.textDecoration = "underline";
});

AcademicsLi.addEventListener('click',function(){
    uncheck();
    let contentP = document.getElementById('content');
    contentP.innerHTML = '<h2>Academics & Qualification : </h2><br>-<strong>Higher Secondary : </strong> Grade Scored 79.60% <br>-<strong>Senior Secondary : </strong> Grade Scored 85.00% <br>-<strong>B.Tech : </strong> 8.3 SGPA <br><br><br><h2>Certifications : </h2><br>-<strong>Data Analysis with Python</strong> <br>-<strong>Machine Learning Specialization</strong> <br>-<strong>Python for Data Science, AI & Development</strong> <br>-<strong>Advanced Learning Algorithms</strong> <br><br><br><h2>Experience : </h2> <br><strong>AI Intern :</strong><br>Edunet Foundation - Internship <br>Jun 2023 - Jul 2023 <br><br><strong>DevOps Intern :</strong><br>WatchGuard Technologies - Internship <br>Jul 2024 - Present <br></br>';
    AcademicsLi.style.textDecoration = "underline";
})

ProjectsLi.addEventListener('click',function(){
    uncheck();
    let contentP = document.getElementById('content');
    contentP.innerHTML = "<h2>Projects : </h2><br><h3>AI Mental Fitness Tracker</h3>- Exploring Mental Fitness Tracker , I Chose how social media affects mental well-being.<br>- Using a dataset from Kaggle, I cleaned and visualized data, creating insightful graphs and charts to reveal trends.<br>- This project quietly spots key factors in mental health. I used two types of models, linear and random forest regression, to find insights. <br>- The outcome? The random forest model emerged as a more accurate predictor.<br><br><h3>Cinema Suggest</h3>- Cinema Suggest is a Movie Recommender System which primarily is based on cosine similarity.<br>- To use this recommender system, you just need to select your favourite movie and the system we give you 6 recommendation based on it.<br>- The similarity is calculated based on movie's characteristic like : genre, actors, directors, plot keywords, and more.<br>- The front-end of the recommender-system is based on streamlit, also the site is deployed using streamlit<br>- <a href='https://cinema-suggest.streamlit.app/'>Link to the website</a>";
    ProjectsLi.style.textDecoration = "underline";
})
