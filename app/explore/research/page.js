import styles from "@/styles/Researches.module.css";
export default function Research() {
  const research_data = [
    {
      type: "heading",
      content: "Microgravity",
    },

    {
      type: "explanation",
      content:
        "The space station provides consistent, long-term access to microgravity. Eliminating the effects of Earth’s gravity on experiments is a game-changer across many disciplines, including research on living things and physical and chemical processes. For example, without gravity hot air does not rise, so flames become spherical and behave differently. Removing the forces of surface tension and capillary movement allows scientists to examine fluid behavior more closely.",
    },
    {
      type: "explanation",
      content:
        " The speed, pattern, and altitude of the space station’s orbit provide unique advantages. Traveling at 17,500 miles per hour, it circles the planet every 90 minutes, passing over a majority of Earth’s landmass and population centers in daylight and darkness. Its 250-mile-high altitude is low enough for detailed observation of features, atmospheric phenomena, and natural disasters from different angles and with varying lighting conditions. At the same time, the station is high enough to study how space radiation affects material durability and how organisms adapt and examine phenomena such as neutron stars and blackholes. The spacecraft also places observing instruments outside Earth’s atmosphere and magnetic field, which can interfere with observations from the ground.",
    },
    {
      type: "heading",
      content: "Crewed Laboratory",
    },
    {
      type: "explanation",
      content:
        " Other satellites in orbit contain scientific experiments and conduct Earth observations, but the space station also has crew members aboard to manage and maintain scientific activities. Human operators can respond to and assess events in real time, swap out experiment samples, troubleshoot, and observe results first-hand. Crew members also pack experiment samples and send them back to the ground for detailed analysis.",
    },
    {
      type: "heading",
      content: "Twenty Years and Counting",
    },
    {
      type: "explanation",
      content:
        "Thanks to the space station’s longevity, experiments can continue for months or even years. Scientists can design follow-up studies based on previous results, and every expedition offers the chance to expand the number of subjects for human research.",
    },
    {
      type: "explanation",
      content:
        "One area of long-term human research is on changes in vision, first observed when astronauts began spending months at a time in space. Scientists wondered whether fluids shifting from the lower to the upper body in microgravity caused increased pressure inside the head that changed eye shape. The Fluid Shifts investigation began in 2015 and continued to measure the extent of fluid shifts in multiple astronauts through 2020.1",
    },
    {
      type: "explanation",
      content:
        "Whether the original study is long or short, it can take years for research to go from the lab into practical applications. Many steps are involved, some of them lengthy. First, researchers must come up with a question and a possible answer, or hypothesis. For example, Fluid Shifts questioned what was causing vision changes and a possible answer was increased fluid pressure in the head. Scientists must then design an experiment to test the hypothesis, determining what data to collect and how to do so.",
    },
    {
      type: "explanation",
      content:
        "Getting research onto the space station in the first place takes time, too. NASA reviews proposals for scientific merit and relevance to the agency’s goals. Selected investigations are assigned to a mission, typically months in the future. NASA works with investigators to meet their science requirements, obtain approvals, schedule crew training, develop flight procedures, launch hardware and supplies, and collect any preflight data needed. Once the study launches, in-flight data collection begins. When scientists complete their data collection, they need time to analyze the data and determine what it means. This may take a year or more.",
    },
    {
      type: "explanation",
      content:
        "Scientists then write a paper about the results – which can take many months – and submit it to a scientific journal. Journals send the paper to other experts in the same field, a process known as peer review. According to one analysis, this review takes an average of 100 days.2 The editors may request additional analysis and revisions based on this review before publishing.",
    },
  ];
  return (
    <section className={styles.content}>
      {research_data.map((elem, index) =>
        elem.type === "heading" ? (
          <header key={index}>
            <h2>{elem.content}</h2>
          </header>
        ) : elem.type === "explanation" ? (
          <div key={index} className={styles.explanation}>
            <p>{elem.content}</p>
          </div>
        ) : null
      )}
    </section>
  );
}
