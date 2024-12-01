# Projekt Sammanfattning

## README.md: Projektreflektion

- Du sammanfattar ditt projekt i README.md och reflekterar kring styrkor och ev brister. Max 500 ord.

Portfolio-sidan innehåller mitt CV och hämtad information från GitHub på mina tidigare projekt. Designen skiljer sig något från U01-projektet, då jag tog mig friheten att ändra sida utseendet efter eget tycke. 

Jag har lagt ner mycket tid på att få mina JavaScript-funktioner att fungera och att kunna hämta information från GitHubs API samt en JSON-fil. En utmaning jag har stött på är att stylingen av svaren från anropen är knepigare, vilket gör att sidan inte blev så snygg som jag hade önskat. Trots detta har jag lärt mig mycket av projektet, och en styrka i projektet är att jag har tre JavaScript-funktioner som fungerar som de ska.

Det har blivit lättare att hålla reda på alla HTML- och CSS-filer tack vare att jag delat upp min CSS i flera filer, vilket gör det enklare att hitta och styla olika element för varje sida. En brist i den nuvarande lösningen är att min `getRepos`-funktion gör anrop till GitHub utan autentisering. Det leder till att jag slår i en gräns som blockerar anropen. Detta händer när sidan laddas om för många gånger, vilket jag upplevde under CSS-stylingsprocessen. I en miljö med många användare hade jag behövt använda en autentisering nyckel för att öka limit enligt GitHubs dokumentation, vilket skulle vara passande i en produktionsmiljö.

Jag har även lagt till en `sleep`-funktion när repos laddas in för att simulera en längre laddningstid och för att demonstrera min spinner.

En till brist jag har märkt är att jag borde ha gjort mer github commits, så att man inte förlorar någon kod om något skulle hända med datorn. 
URL för Netlify för portfoliosidan: https://portfolio-cv-es.netlify.app/

---

## Frågor och Svar

1. **Vad kan man utveckla med hjälp av JavaScript inom frontend?**

   Som frontend-utvecklare kan man använda JavaScript (JS) för att utveckla ett brett utbud av interaktiva, responsiva och användarvänliga applikationer och webbplatser. Med JS kan man skapa dynamiska webbplatser såsom sociala medieplattformar, e-handelssajter och nyhetssidor. För e-handelssajter kan man till exempel bygga funktioner som rullgardinsmenyer, popup-fönster, flikar och formulärvalideringar. Ramverk som Next.js (för React) underlättar också byggandet av effektiva e-handelsplattformar, med kundvagnsfunktionalitet och kassaformulär. JS möjliggör smidiga användarupplevelser såsom "Single Page Applications" där innehållet laddas dynamiskt utan att ladda om sidan. För interaktivitet och användarengagemang kan man skapa komplexa animationer och övergångar, såsom animerade laddningssnurrar och hovringseffekter. JS används även för mobila applikationer med ramverk som React Native eller Ionic. Frontend-utvecklare kan skapa små automatiseringsverktyg, såsom bokmärkesverktyg, UI-baserad automatisering och skrapningsverktyg. JavaScript är flexibelt och kraftfullt och möjliggör bygget av allt från enkla till komplexa webbplatser och applikationer. Verktyg som React, Vue.js, Angular, D3.js, GSAP och Three.js kompletterar också JavaScript i frontend-utveckling.

2. **Vad är JSON och hur används det inom frontend?**

   JavaScript Object Notation (JSON) är ett standardiserat textbaserat format för att strukturera data baserat på JavaScripts objekt-syntax. Det är populärt bland utvecklare på grund av sin flexibilitet, enkelhet och läsbarhet. JSON används ofta för dataöverföring i webbapplikationer, såsom när data skickas från en server till en klient för visning på en webbsida. Det representerar data i nyckel-värdepar och används av många API:er som svarar med data i JSON-format. Frontend-applikationer använder API-förfrågningar och tar emot JSON-data som svar. JSON-data kan lagras i lokal eller sessionslagring i webbläsaren, vilket möjliggör att applikationer kan behålla informationen under och mellan sessioner. I ramverk som React kan JSON-data representera applikationens tillstånd, vilket hjälper till att hålla komponenters data strukturerad.

3. **Vad är HTTP och varför bör man som frontendutvecklare ha kunskap om det och dess protokoll?**

   HTTP står för Hypertext Transfer Protocol och är ett kommunikationsprotokoll för att överföra förfrågningar och svar mellan en klient och en server. En typisk HTTP-klient är en webbläsare som hämtar data, såsom HTML-filer och bilder, från en webbserver. Detta möjliggör att en webbläsare kan läsa in och visa innehåll från olika webbplatser. Som frontendutvecklare är det viktigt att förstå principerna för både REST- och HTTP/HTTPS-protokoll. Vanliga HTTP-kommandon inkluderar GET (hämta data), POST (skicka data till servern), PUT (uppdatera data) och DELETE (ta bort data). Frontendutvecklare interagerar ofta med API:er som förlitar sig på HTTP, och en förståelse för HTTP möjliggör korrekt hantering av svar och felsökning av nätverksproblem. Detta leder också till renare och effektivare kod vid API-integrering.
