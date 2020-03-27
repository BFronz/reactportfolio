import  React from "react";
import { Card, CardColumns} from 'react-bootstrap';



export const Portfolio = () => (
    
  <CardColumns>

  <Card>
    <Card.Img variant="top" src="../assets/projects/project-flipcards-new.png" height="180px" width="180px" />
    <Card.Body>
      <Card.Title>FlipCards</Card.Title>
      <Card.Text>
      Welcome to FlipCards, node express handelbars built site designed to test your coding knowledge in different languages and prepare you for job interviews. Check out the different decks of flashcards to test your coding knowledge.
      </Card.Text>
      <Card.Link href="https://github.com/BFronz/FlipCards"><i class="fas fa-external-link-alt"></i>Find out more</Card.Link>
    </Card.Body>
  </Card>

  <Card>
    <Card.Img variant="top" src="../assets/projects/project-burger.png" height="170px" width="180px"/>
    <Card.Body>
      <Card.Title>Burger</Card.Title>
      <Card.Text>
      A fun burger logger. Users input burgers (stored in a mySQL table). Burgers available to be devoured are listed on the left (modified in the table). Press the "Devour Burger" button and devoured burgers are moved the Devoured list on the right. Built with MySQL, Node, Express, Express Handlebars, ORM and Javascript.
      </Card.Text>
      <Card.Link href="https://github.com/BFronz/Burger"><i class="fas fa-external-link-alt"></i>Find out more</Card.Link>
    </Card.Body>
  </Card>

  <Card>
    <Card.Img variant="top" src="../assets/projects/project-workdayscheduler.png" height="180px" width="180px"/>
    <Card.Body>
      <Card.Title>Work Day Scheduler</Card.Title>
      <Card.Text>
      Calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. Color coded timeblocks easily show hours of the day.
      </Card.Text>
      <Card.Link href="https://github.com/BFronz/WorkDayScheduler"><i class="fas fa-external-link-alt"></i>Find out more</Card.Link>
    </Card.Body>
  </Card>

  <Card className="pb-4">
    <Card.Img variant="top" src="../assets/projects/project-hipgrandpa.png" height="193px" width="180px" />
    <Card.Body>
      <Card.Title>Hip Grandpa</Card.Title>
      <Card.Text>
      Hip Grandpa will help users with the difficult task of keeping up with today's fast paced technological trends and innovations. API driven site using javascript and jQuery. API categories include: News, Holiday Helper, Daily Music Trends, Jokes and Tech How to Videos.
      </Card.Text>
      <Card.Link href="https://github.com/BFronz/hipGrandpa/"><i class="fas fa-external-link-alt"></i>Find out more</Card.Link>
    </Card.Body>
  </Card>


  <Card>
    <Card.Img variant="top" src="../assets/projects/project-weatherdashboard.png" height="154px" width="180px" />
    <Card.Body>
      <Card.Title>Weather Dashboard</Card.Title>
      <Card.Text>
      A Javascript, Ajax and API weather application that displays current and 5-day forecasts for US cities. Searched cities are saved. OpenWeather API is used to retrieve weather data for cities. All weather is up to date often less that 3 hours old. Last city search is displayed.
      </Card.Text>
      <Card.Link href="https://github.com/BFronz/WeatherDashboard"><i class="fas fa-external-link-alt"></i>Find out more</Card.Link>
    </Card.Body>
  </Card>


  <Card>
    <Card.Img variant="top" src="../assets/projects/project-codequiz.png" height="170px" width="180px" />
    <Card.Body>
      <Card.Title>Code Quiz</Card.Title>
      <Card.Text>
      Created timed quiz on coding fundamentals that stores high scores. The app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It features a clean and polished user interface and is responsive, ensuring that it adapts to multiple screen sizes.
      </Card.Text>
      <Card.Link href="https://github.com/BFronz/CodeQuiz"><i class="fas fa-external-link-alt"></i>Find out more</Card.Link>
    </Card.Body>
  </Card>


</CardColumns>


  

    
)
