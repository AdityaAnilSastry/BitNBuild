// document.addEventListener("DOMContentLoaded", function() {
//     const events = [
//       { name: "Event 1", image: "even1.png", description: "Description of Event 1" },
//       { name: "Event 2", image: "event2.png", description: "Description of Event 2" },
//       { name: "Event 3", image: "event3.png", description: "Description of Event 3" },
//       { name: "Event 4", image: "event4.png", description: "Description of Event 4" },
//       { name: "Event 5", image: "event5.png", description: "Description of Event 5" }
//     ];
  
//     const eventsList = document.getElementById('events-list');
  
//     events.forEach(event => {
//       const eventCard = document.createElement('div');
//       eventCard.classList.add('event-card');
  
//       const img = document.createElement('img');
//       img.src = `images/${event.image}`;
//       img.alt = event.name;
//       img.classList.add('event-img');
  
//       const title = document.createElement('h2');
//       title.textContent = event.name;
//       title.classList.add('event-title');
  
//       const description = document.createElement('p');
//       description.textContent = event.description;
//       description.classList.add('event-description');
  
//       eventCard.appendChild(img);
//       eventCard.appendChild(title);
//       eventCard.appendChild(description);
  
//       eventsList.appendChild(eventCard);
//     });
//   });
  