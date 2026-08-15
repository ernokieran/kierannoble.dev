import { DefaultTemplate } from '@/components/templates/DefaultTemplate';
import { Section } from '@/components/layout/Section';
import { Media } from '@/components/media/Media';
import { OptimizedImage } from '@/components/media/OptimizedImage';
import { getSlideshowImages } from '@/lib/slideshow';

export default async function MetrdPage() {
  const displaySlideshow = await getSlideshowImages([
    '/img/Projects/Metrd/display.webp',
  ]);

  const architectureSlideshow = await getSlideshowImages([
    '/img/Projects/Metrd/diagrams/architecture.webp',
  ]);

  return (
    <DefaultTemplate project="metrd">
      <Section
        logoUrl="/img/Projects/Metrd/logo.svg"
        subtitle="A self-hosted dashboard for solar, battery, and grid energy"
        type="primary"
        alignment="centered"
      >
        <p>
          metrd is mine end to end - the idea, the architecture, the code, the pipeline it ships through, and the plan for where it goes next. It&apos;s a live display that shows a household exactly where its power is coming from and where it&apos;s going, reading straight from solar inverters and forecasting services without ever sending a command back to them.
        </p>
        <p>
          More people are generating their own clean energy every year. metrd exists so that generation doesn&apos;t go to waste just because it&apos;s invisible - so a full battery or a sunny afternoon actually gets used, instead of being quietly wasted while the grid takes over unnoticed.
        </p>
      </Section>

      <Section
        type="secondary"
        title="The Idea"
        subtitle="Most home energy monitoring is built around locking you in, not showing you your own data."
      >
        <p>Buy a solar inverter or a battery and you usually inherit whichever app the manufacturer bundled with it - cluttered, chasing a subscription, or simply unusable the moment you mix hardware from two different brands. Very little of it asks what the person watching the dashboard actually wants: a clear, honest, live picture of the clean energy they&apos;re already generating.</p>
        <p>metrd is built directly against that gap - self-hosted, hardware-agnostic, and focused on one job. You keep the data, you keep control of it, and it runs on hardware you already own rather than a subscription you have to keep paying for.</p>
      </Section>

      <Section alignment="left" title="Designing the Display">
        <p>The centrepiece of metrd is a display: a live diagram of energy flowing between solar, battery, grid, and house, built from up to four sections arranged so power visually flows between them. Only the sections a given install actually has hardware for appear - if there&apos;s no battery configured, the diagram simply doesn&apos;t show one, rather than a greyed-out placeholder pretending it exists.</p>
        <p>A connecting line only lights up when there&apos;s real flow to show, and it runs in whichever direction power is actually moving - the same line between grid and house reverses when you go from importing to exporting. I spent real time on the failure case too: if a reading stalls or a connection drops, that section&apos;s value simply stops updating rather than dropping to zero, so a paused feed never gets misread as an actual power outage.</p>
        <Media slideshow={displaySlideshow}>
          <OptimizedImage
            path="/img/Projects/Metrd/display.webp"
            alt="Screenshot of metrd's live display: Solar generating 2,019W, Battery idle at 0W and fully charged, House drawing 820W, and Grid exporting 1,229W, with lit flow lines running from Solar into House and Solar into Grid."
            width={700}
          />
        </Media>
      </Section>

      <Section type="secondary" alignment="left" title="Talking to Real Hardware">
        <p>metrd reads from SolaX inverters - locally over the network or via SolaX Cloud - covering thirteen inverter families across several hardware and firmware revisions, handled automatically so nobody has to know their exact revision to connect one. Solcast supplies solar forecasts for the hours and days ahead, rate-limited on a daily allowance that metrd tracks itself, pausing forecast polling automatically once it&apos;s used up rather than surfacing an error, and resuming again the next day without anyone touching it.</p>
        <p>Every integration is built behind the same adapter pattern, so bringing in another inverter or battery brand is a new adapter, not new architecture - and every credential an install stores for one is encrypted at rest.</p>
      </Section>

      <Section type="tertiary" alignment="left" title="Built to Scale With Less">
        <p>metrd is meant to run comfortably on something like a Raspberry Pi, not a spare server, so keeping it frugal is a design decision, not an afterthought. Reference data that rarely changes is served from an in-process cache instead of hitting the database on every request, and reading history is bucketed down over time - full resolution while it&apos;s recent, progressively compressed the further back it goes - so it stays useful without growing forever. The layered architecture keeps every database round trip confined to a repository, which makes it straightforward to see, and control, exactly where a query happens.</p>
        <p>That target isn&apos;t just a claim - every published image is built for both amd64 and arm64, so the same release that runs on a server runs on a Pi.</p>
      </Section>

      <Section type="secondary" alignment="left" title="A Design System, Not Just Screens">
        <p>The app&apos;s UI is built on a shared component package rather than one-off screens - buttons, tables, dialogs, and a confirm-delete pattern used everywhere something destructive happens, plus page templates that cover the empty state and the filtered-list state the same way every time instead of reinventing them per page. The dashboard&apos;s management screens - displays, tariffs, reading-bucket defaults - are all built from that same small set of templates, so a new management page is mostly configuration, not new UI work.</p>
        <p>Design tokens are generated from a single source and checked in CI, so the code and the design can&apos;t silently drift apart - if someone changes a token without regenerating it, the build catches it rather than a reviewer having to notice by eye.</p>
        <p>Accessibility is built in rather than bolted on: landmark roles and ARIA attributes throughout, a labelled primary navigation with <code>aria-current</code> on the active page, and accessible labelling on interactive elements like dialogs, by default rather than as an afterthought once something already shipped.</p>
      </Section>

      <Section type="tertiary" alignment="centered" title="Architecture">
        <p>Three deployable pieces and a shared package, built and released independently: an ASP.NET Core API layered <code>Service → Business → Data</code> with a dependency-free Integration layer for third-party clients, a Next.js app that talks to it live over SignalR, and a documentation and marketing site that ships on its own. The App&apos;s API client is generated straight from the API&apos;s own controllers and SignalR hubs, so there&apos;s no separate schema to keep in sync by hand.</p>
        <Media slideshow={architectureSlideshow}>
          <OptimizedImage
            path="/img/Projects/Metrd/diagrams/architecture.webp"
            alt="Architecture diagram: SolaX Local, SolaX Cloud, and Solcast feed into an Integration layer, which feeds the API's Service, Business, and Data layers in sequence down to PostgreSQL. The App talks to the Service layer live over SignalR and uses a generated client. The Site is a separate, standalone docs and marketing app. Docker packages amd64 and arm64 images, published to GHCR, run together with one docker-compose.yml."
            width={650}
          />
        </Media>
      </Section>

      <Section type="secondary" alignment="left" title="Shipping It Like Production Software">
        <p>Every change goes through the same gate a team would enforce: the API builds in Release, checks for an Entity Framework migration that was written but never committed, then runs the full test suite with coverage. The App installs, lints, and builds. Docker builds both images and brings the whole stack up with Compose, then smoke-tests it for real - hitting the actual health and version endpoints through the app&apos;s proxy rather than just trusting the containers started.</p>
        <p>Releases are multi-architecture: each platform builds in parallel, and the resulting digests are merged into a single manifest and pushed to GitHub Container Registry tagged by version and latest. Self-hosting it is one file - a single <code>docker-compose.yml</code> brings up Postgres, the API, and the App together, migrations apply automatically on first run, and every service exposes its own health check.</p>
      </Section>

      <Section type="tertiary" alignment="left" title="Documented Like It's Not Just Me">
        <p>metrd has a public docs site covering both using it and building it - because when there&apos;s no second reviewer, the documentation and the tooling have to catch what a teammate normally would. A set of custom Roslyn analysers enforce naming, file structure, and member ordering at compile time, several with automatic fixes available in-editor, alongside strict TypeScript, ESLint, and Prettier on the frontend. Writing it this way from day one means it&apos;s already in the shape it would need to be to hand off or open up.</p>
      </Section>

      <Section type="primary" alignment="centered" title="What's Next">
        <p>The roadmap is a direction of travel, not a promise, but it&apos;s a deliberate one: GivEnergy support next, since the adapter pattern behind SolaX was built to generalise rather than be a one-off. Octopus Energy tariff data so cost and value show up alongside the watts, not just a separate bill to do the maths against yourself. An EV charger as another node on the display. Alerts when a device goes quiet or a battery gets stuck. A proper historical trends view, separate from the live display, for spotting patterns rather than watching the current moment. And multi-user accounts, so a display can be shared without sharing the whole account.</p>
      </Section>

      <Section type="secondary" alignment="centered" title="Where It Stands">
        <p>metrd is in active alpha. The docs and product live publicly at <a href="https://metrd.io" target="_blank" rel="noopener noreferrer">metrd.io</a>; the source is currently private while it&apos;s this early, but the architecture, the docs, and the pipeline are already built as if someone else is going to read them - because eventually, someone will.</p>
      </Section>
    </DefaultTemplate>
  );
}
