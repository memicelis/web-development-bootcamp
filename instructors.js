const instructorsData = [
  {
    name: 'Sara Garcia',
    title: 'Web Development Instructor',
    description:
      'Sara is a talented web developer with a passion for teaching. She enjoys sharing her knowledge of frontend development with aspiring web developers.',
    img: './images/sara.jpg',
  },
  {
    name: 'Alex Chen',
    title: 'Data Science Instructor',
    description:
      'Alex is a data science enthusiast and loves teaching others how to extract valuable insights from data. His expertise lies in machine learning and data visualization.',
    img: './images/alex.jpg',
  },
  {
    name: 'Lily Johnson',
    title: 'UI/UX Design Instructor',
    description:
      'Lily is a creative UI/UX designer with a strong background in user-centered design. She enjoys mentoring young designers and helping them develop their skills.',
    img: './images/lily.jpg',
  },
  {
    name: 'Jake Thompson',
    title: 'Mobile App Development Instructor',
    description:
      'Jake is an experienced mobile app developer who is passionate about building innovative and user-friendly applications.',
    img: './images/jake.jpg',
  },
  {
    name: 'Ella Martinez',
    title: 'Game Development Instructor',
    description:
      'Ella is a game development expert with a specialization in Unity and Unreal Engine. She enjoys guiding young game developers on their journey to create exciting games.',
    img: './images/ella.jpg',
  },
  {
    name: 'Max Wilson',
    title: 'Cybersecurity Instructor',
    description:
      'Max is a cybersecurity specialist with extensive knowledge of ethical hacking and network security. He loves to teach students about securing digital assets.',
    img: './images/max.jpg',
  },
];

const instructorsSection = document.querySelector('.instructors-section');

const instructorsTitle = document.createElement('h3');
instructorsTitle.classList.add('instructors-title');
instructorsTitle.innerHTML = 'Featured Instructors';
instructorsSection.appendChild(instructorsTitle);

const titleSeparator = document.createElement('hr');
titleSeparator.classList.add('title-separator');
instructorsSection.appendChild(titleSeparator);

const instructors = document.createElement('div');
instructors.classList.add('flex-instructors');
instructorsSection.appendChild(instructors);

instructorsData.forEach((ins) => {
  const instructor = document.createElement('article');
  instructor.classList.add('instructor');
  instructor.innerHTML = `
  <div class="bg-img">
  <img src="./images/bg-img-bg.jpg"  alt="Image with black squares" />
  </div>
  <div class = "instructors-img">
  <img src=${ins.img} alt="instructor image">
  </div>
  <div class="instructor-right-block">
  <h3 class="instructor-name">${ins.name}</h3>
  <h5 class="instructor-title">${ins.title}</h5>
  <hr class="instructor-hr">
  <p class="instructor-description"> ${ins.description}</p>
  </div>
  </div>
 `;
  instructors.appendChild(instructor);
});
