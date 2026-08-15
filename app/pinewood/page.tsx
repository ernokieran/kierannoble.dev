import { DefaultTemplate } from '@/components/templates/DefaultTemplate';
import { Section } from '@/components/layout/Section';
import { Row } from '@/components/layout/Row';
import { Column } from '@/components/layout/Column';

export default function PinewoodPage() {
  return (
    <DefaultTemplate project="pinewood">
      <Section
        logoUrl="/img/Projects/Pinewood/logo.svg"
        subtitle="Senior Software Developer @ Pinewood.AI"
        type="primary"
        alignment="centered"
      >
        <p>
          I&apos;ve spent five years at <a href="https://pinewood.ai" target="_blank" rel="noopener noreferrer">Pinewood.AI</a>, starting as a placement student in 2021 and working my way up to Senior Software Developer. Pinewood.AI builds the Automotive Intelligence Platform - a cloud-native dealership management system used by over 2,000 dealers across 36 countries, with 50,000+ people using it every day.
        </p>
        <p>
          Along the way I&apos;ve gone from shipping customer-facing features to owning core parts of the platform outright, and expanded into DevOps and systems management without ever leaving full stack development behind.
        </p>
      </Section>

      <Section type="secondary" title="From Placement to Senior Developer">
        <p>
          I joined Pinewood on a software development placement, working across front-end and back-end for dealership brands including Evans Halshaw, Stratstone, and Car Store - building and improving UI components with ASP.NET MVC and APIs, and getting hands-on with enterprise-scale development, agile practice, deployments, and code review from day one.
        </p>
        <p>
          That led to a zero-hours contract through my final year of university, then a graduate role once I finished, working on the internal framework other teams build on. From there I moved into Software Developer and now Senior Software Developer, taking on more ownership at each step.
        </p>
      </Section>

      <Section alignment="left" title="The Framework Behind Every Page">
        <p>
          Every team at Pinewood.AI builds on top of the internal web framework I&apos;ve worked on since joining as a graduate - every page across our core apps runs through it, and every request hits it. I&apos;ve contributed across its whole lifetime: from early groundwork to the mature, accessibility-focused framework now being rolled out worldwide, built on Razor Pages with a deliberate focus on modern web standards and accessibility.
        </p>
        <p>
          My most notable piece of it is the validation engine most of the company&apos;s forms now rely on, alongside a wide range of features and fixes contributed throughout its evolution. Working at that layer means every improvement compounds - it shows up across every application built on it, not just one screen.
        </p>
      </Section>

      <Section type="secondary" alignment="right" title="Embedded Business Intelligence">
        <p>
          Pinewood.AI&apos;s Business Intelligence product embeds real-time, role-specific dashboards directly into the dealer platform, so teams get their reporting without logging into a separate tool. I designed and built the backend that makes that possible: multi-tenanted so each organisation&apos;s data stays its own, automated management of report embed tokens, the ability to update reports in place rather than redeploy them, the UI for the embeds themselves, and full row-level security to keep every dealer group&apos;s data properly isolated.
        </p>
        <p>I took it end to end - design through delivery - quickly enough that it&apos;s now used by some of our largest dealer group customers.</p>
      </Section>

      <Section type="tertiary" alignment="left" title="Permissions &amp; Audit, Built From Scratch">
        <p>
          The permissions system behind the platform is fully custom - roles, permissions, groups, and user assignments that can be scoped down to individual locations, with expiry built in so access doesn&apos;t just accumulate forever. I designed and own it end to end.
        </p>
        <p>
          Every part of it is audited, because a permission system nobody can audit isn&apos;t really a permission system - I built that audit trail myself, from the data model up, so every grant, change, and expiry is traceable after the fact rather than taken on trust.
        </p>
      </Section>

      <Section type="secondary" alignment="left" title="Prototyping Fast: An AI Booking Assistant">
        <p>
          I also built a proof-of-concept chatbot on top of the OpenAI API, wired into real vehicle data with a set of custom actions so it could actually do things for a user - book a service appointment, pull a vehicle valuation - rather than just answer questions about them. I took it from nothing to a working platform other automations could build on in under a week.
        </p>
        <p>It didn&apos;t end up going into production, but it proved out how quickly this kind of tooling can go from an idea to something real, working end to end - which is exactly the kind of thing worth knowing before committing a team to it.</p>
      </Section>

      <Section type="tertiary" alignment="centered" title="Leading &amp; Mentoring">
        <p>
          I led development on that Power BI implementation myself, and I&apos;ve mentored a junior developer throughout - including running their early training when they joined as a placement student, and managing their workload since. I also do code review across the team day to day, which alongside mentoring is where a lot of quality gets safeguarded before anything ships. Across all of it, the constant has been delivering complex features independently and iterating quickly without sacrificing quality.
        </p>
      </Section>

      <Section type="secondary" alignment="right" title="Platform &amp; DevOps">
        <p>
          More recently I&apos;ve expanded into DevOps and platform engineering, working in Azure DevOps to manage the pipelines every team ships through. That&apos;s included upgrading applications and workflows onto modern tooling - .NET 10 among it - alongside speeding up build times, improving pipeline resilience, and expanding automated test coverage so more issues get caught before they reach production. I keep researching new tooling on top of that, looking for the next thing worth adopting rather than waiting for it to become a problem first.
        </p>
      </Section>

      <Section type="tertiary" alignment="centered" title="Taking the Initiative">
        <p>
          A lot of what I do isn&apos;t assigned to me directly. When something breaks at scale or a process is clearly slowing the team down, I&apos;d rather come forward with a fix than wait to be asked - working under pressure when a large-scale issue is happening right now, and taking the initiative to improve things afterwards so it doesn&apos;t happen the same way twice. That&apos;s taken me from writing application code into improving the hosting platform itself, usually because solving a problem properly meant going one layer down rather than working around it.
        </p>
      </Section>

      <Section type="primary" alignment="centered" title="Day to Day">
        <Row equal>
          <Column>
            <h4 className="section__subtitle">Frontend</h4>
            <ul>
              <li>TypeScript</li>
              <li>Next.js</li>
              <li>React</li>
            </ul>
          </Column>
          <Column>
            <h4 className="section__subtitle">Backend</h4>
            <ul>
              <li>C# / .NET</li>
              <li>ASP.NET / Razor Pages</li>
              <li>Power BI Embedded</li>
            </ul>
          </Column>
          <Column>
            <h4 className="section__subtitle">Cloud &amp; AI</h4>
            <ul>
              <li>Azure DevOps / CI/CD</li>
              <li>Custom RBAC &amp; audit systems</li>
              <li>OpenAI API integration</li>
            </ul>
          </Column>
        </Row>
        <p>You can read more about Pinewood.AI&apos;s platform at <a href="https://pinewood.ai" target="_blank" rel="noopener noreferrer">pinewood.ai</a>.</p>
      </Section>
    </DefaultTemplate>
  );
}
