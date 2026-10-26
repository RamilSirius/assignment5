# EduSphere — Assignment 5: Advanced JavaScript and DOM Manipulation

Team **The Ethernet**, group **SE-2510**: Ramil Zhunussov, Maxim Batyushkin, Azamat Mustafin.

The EduSphere online-learning site from Assignment 3, now with interactive features
written in plain JavaScript.

**Live site:** https://ramilsirius.github.io/assignment5/

## Where each requirement is

| Requirement | Where |
|---|---|
| Selecting elements, `textContent` / `innerHTML` | Greeting and cohort card (`js/home.js`), catalogue (`js/courses.js`) |
| Dynamic styles / Day–Night theme | 🌙 button in the navbar on every page (`js/main.js`), progress bars via `style.width` |
| Attributes: rating stars | `querySelectorAll('.star')` on each course card (`js/courses.js`) |
| Attributes: greeting + name input | Home page hero (`js/home.js`) |
| Attributes: Read More | "Show syllabus" on each course card, toggles `style.display` |
| Button event listeners | Reserve a place, Say hi, Enrol now, Next / Back, Clear form |
| Keyboard events | Arrow keys / Home / End move focus between navbar links (`js/main.js`) |
| Callbacks | Multi-step enrolment form: `changeStep(direction, showStep)` |
| Switch statements | Time-of-day greeting, duration filter, form step validation, arrow keys |
| Objects and methods | `cohort` object (`freePlaces()`, `percentTaken()`, `reserve()`), course objects |
| Arrays and loops | `courses` array rendered with loops; `for` loop counts courses per level |
| Higher-order functions | `filter`, `map`, `forEach`, `reduce`, `find` |
| Sounds | `sounds/*.wav`, played by `playSound()`; rewound before each play so they never overlap |
| Animations | Cards fade in one by one, star jump, greeting "pop", form shake on error, highlight |
| Separation of concerns | No inline `<script>`, `style=""` or `onclick` in the HTML |

## Files

```
index.html, courses.html, …   pages (HTML)
css/bootstrap-theme.css       brand colours (Assignment 3)
css/interactive.css           night theme, stars, animations (Assignment 5)
js/main.js                    shared: sounds, theme switch, keyboard navigation
js/home.js                    home page: greeting, cohort card
js/courses.js                 catalogue, filters, rating, enrolment form
js/contact.js                 contact form validation
sounds/                       click.wav, star.wav, success.wav
```
