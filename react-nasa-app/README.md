NASA Picture of the Day - React App
Dette er et prosjekt jeg har laget ved hjelp av React for å vise Astronomy Picture of the Day (APOD) fra NASA, samt lage en søkefunksjon som lar brukeren søke etter bilder fra NASA sitt bildegalleri.

Hva Jeg Har Gjort
Jeg har laget en nettside som:

Henter og viser dagens bilde fra NASA.

Lar brukeren søke etter bilder relatert til temaer som "måne", "mars" eller "stjerner".

Bruker NASA sin API for å hente informasjon om bildene og vise det på nettsiden.

Funksjoner
Astronomy Picture of the Day (APOD): Vist automatisk når appen lastes, med bilde, tittel og beskrivelse.

Søkefunksjon: Brukeren kan skrive inn ord som "måne", "mars", eller "stjerner" i søkefeltet for å finne bilder relatert til disse temaene.

Feilhåndtering: Appen viser en "Laster..."-melding mens bildene hentes fra API-et og en passende feilmelding hvis noe går galt.

Teknologier Brukt
React: brukt d

Vite: En rask utviklingsserver for React, som gjør det enklere å komme i gang.

CSS: Brukt for enkel styling av applikasjonen.

NASA API: Brukt til å hente dagens bilde (APOD) samt til å søke etter bilder basert på spesifikke søkeord.


. Åpne nettsiden
Når serveren kjører, gå til http://localhost:5175/ for å se appen i aksjon. Du skal nå se dagens bilde fra NASA, og du kan prøve å søke etter bilder med spesifikke temaer.

Hvordan Appen Fungerer
Astronomy Picture of the Day (APOD)
Når appen lastes inn, gjør den en forespørsel til NASA sin API for å hente dagens bilde (APOD). Dette bildet vises sammen med en tittel og en kort beskrivelse.

Dagens bilde oppdateres automatisk hver dag.

Søkefunksjonalitet
I søkefeltet kan brukeren skrive inn ord som "month", "mars", "star" eller lignende. Når du trykker på søk, blir relevante bilder hentet fra NASA sitt bildegalleri og vist på nettsiden.

Søkeresultatene vises i et rutenett med bilde, tittel og beskrivelse.

Feilhåndtering
Hvis det er problemer med å hente data (f.eks. hvis internettforbindelsen er dårlig eller API-et har en feil), vil appen vise en "Laster..."-melding inntil bildene er lastet. Hvis noe går galt, vises en feilmelding.