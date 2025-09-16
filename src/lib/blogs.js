// lib/blogs.js

const blogs = [
  {
    id: "unit-converter-guide",
    title:
      "How to Guide: Step-by-Step Instructions to Build and Use a Unit Converter for Everyday Conversions",
    date: "10 September 2025",
    time: "09:15 AM",
    category: "Guides",
    image: "/hello.jpg",
    description:
      "Learn how to build and use a simple yet powerful unit converter. This guide covers everything from concept to implementation, with practical tips and examples.",
    toc: [
      "Introduction to Unit Converters",
      "Why Unit Conversion is Important",
      "Common Units People Convert",
      "How to Build a Simple Unit Converter",
      "Adding Multiple Units and Categories",
      "Best Practices for Accuracy",
      "Real-World Use Cases",
      "Conclusion and Next Steps",
    ],
    content: `
      <p>
        In this step-by-step <strong>how-to guide on building and using a unit converter</strong>, 
        you'll discover everything you need to know about making everyday conversions easier. 
        Unit converters are essential tools in education, engineering, science, cooking, and daily life. 
        Whether you're calculating meters to feet, Celsius to Fahrenheit, or kilograms to pounds, 
        having a reliable unit converter saves time and reduces mistakes.
      </p>

      <h2 id="introduction-to-unit-converters">Introduction to Unit Converters</h2>
      <p>
        A <em>unit converter</em> is a tool or application that translates one unit of measurement into another. 
        For example, converting kilometers into miles or ounces into grams. 
        The concept is simple, but the applications are incredibly broad and useful. 
        In fact, professional tools often rely on unit conversion in fields like architecture, physics, 
        and even financial analysis.
      </p>

      <h2 id="why-unit-conversion-is-important">Why Unit Conversion is Important</h2>
      <p>
        Without accurate conversions, recipes may fail, scientific experiments could go wrong, 
        and businesses might lose money. 
      </p>
      <p>
        Imagine baking a cake where the recipe is in cups and you mistakenly convert to milliliters incorrectly. 
        Or a construction project where feet and meters are mixed up—this can cause expensive errors. 
        That's why a <strong>unit converter</strong> is not just convenient but also crucial for accuracy and consistency.
      </p>

      <h2 id="common-units-people-convert">Common Units People Convert</h2>
      <ul class="list-disc pl-6 space-y-1">
        <li><strong>Length:</strong> meters ↔ feet, kilometers ↔ miles</li>
        <li><strong>Weight:</strong> kilograms ↔ pounds, grams ↔ ounces</li>
        <li><strong>Temperature:</strong> Celsius ↔ Fahrenheit ↔ Kelvin</li>
        <li><strong>Volume:</strong> liters ↔ gallons, milliliters ↔ cups</li>
        <li><strong>Time:</strong> seconds ↔ minutes ↔ hours</li>
        <li><strong>Digital:</strong> bytes ↔ kilobytes ↔ megabytes ↔ gigabytes</li>
      </ul>

      <h2 id="how-to-build-a-simple-unit-converter">How to Build a Simple Unit Converter</h2>
      <p>To build your own unit converter, follow these steps:</p>
      <ol class="list-decimal pl-6 space-y-1">
        <li>Identify the units you want to convert (e.g., meters ↔ feet).</li>
        <li>Define the conversion formulas or ratios (1 meter = 3.28084 feet).</li>
        <li>Write a function that takes input and applies the formula.</li>
        <li>Output the converted value in the target unit with proper formatting.</li>
      </ol>
      <p>
        For developers, this can be implemented in JavaScript or Python with just a few lines of code. 
        Beginners can even use Excel formulas to create a simple converter.
      </p>

      <h2 id="adding-multiple-units-and-categories">Adding Multiple Units and Categories</h2>
      <p>
        Once you have a basic converter, expand it by supporting multiple categories such as length, weight, 
        and temperature. Grouping units by category makes your converter more user-friendly and scalable.
      </p>
      <p>
        A dropdown or tab-based interface helps users quickly switch between categories like "Length", "Weight", 
        or "Time". This enhances usability and ensures the converter can serve different needs in one place.
      </p>

      <h2 id="best-practices-for-accuracy">Best Practices for Accuracy</h2>
      <ul class="list-disc pl-6 space-y-1">
        <li>Always use precise conversion ratios instead of rounded values.</li>
        <li>Round values only when displaying results, not during calculations.</li>
        <li>Provide users with decimal options for higher precision.</li>
        <li>Test your converter with real-world examples to ensure correctness.</li>
      </ul>

      <h2 id="real-world-use-cases">Real-World Use Cases</h2>
      <p>Unit converters are everywhere in daily life:</p>
      <ul class="list-disc pl-6 space-y-1">
        <li><strong>Students:</strong> Solve math and science homework problems.</li>
        <li><strong>Chefs:</strong> Adapt recipes with international measurements.</li>
        <li><strong>Engineers:</strong> Ensure precision in blueprints and technical projects.</li>
        <li><strong>Travelers:</strong> Convert distances, weights, and even currencies abroad.</li>
        <li><strong>Fitness Enthusiasts:</strong> Convert miles to kilometers or calories to joules.</li>
      </ul>

      <h2 id="conclusion-and-next-steps">Conclusion and Next Steps</h2>
      <p>
        By following this <strong>how-to guide on unit converters</strong>, 
        you now understand how they work, why they are important, and how to build one from scratch. 
      </p>
      <p>
        The next step is to either implement a digital converter using a programming language, 
        integrate a converter widget on your website, or use online tools that make conversions effortless. 
        Whether you are a student, professional, or hobbyist, a good unit converter will always save you time 
        and prevent costly mistakes.
      </p>
    `,
  },

  // ARTICLE 2: Temperature Converter History (Fully Expanded)
  {
    id: "temperature-converter-history",
    title:
      "History of Temperature Converters: From Mercury Thermometers to Digital Tools",
    date: "20 September 2025",
    time: "11:30 AM",
    category: "History",
    image: "/temperature.jpg",
    description:
      "Discover how temperature measurement and conversion evolved from early thermometers to modern scientific apps — a journey through science, culture, and technology.",
    toc: [
      "Introduction to Temperature Measurement",
      "The Birth of Thermometers in the 1600s",
      "Fahrenheit vs Celsius: The Battle of Scales",
      "Kelvin and the Rise of Absolute Science",
      "Mechanical Conversion: Slide Rules and Tables",
      "Digital Revolution: Apps, Calculators, and AI",
      "Everyday Uses Across Cultures and Professions",
      "Conclusion: Why Temperature Conversion Still Matters",
    ],
    content: `
      <p>
        Temperature is more than a number on a screen — it’s a story of human curiosity, scientific rivalry, and global standardization. 
        This <strong>history of temperature converters</strong> traces how we went from fragile glass tubes filled with mercury to 
        instant smartphone apps that convert between scales in milliseconds — and why it still matters today.
      </p>

      <h2 id="introduction-to-temperature-measurement">Introduction to Temperature Measurement</h2>
      <p>
        Before conversion was even possible, humans needed a way to <em>measure</em> temperature. 
        Early civilizations judged heat by touch or observation — “too hot to hold,” “frost on the grass.” 
        But as science, medicine, and industry advanced, subjective judgments weren’t enough. 
        The need for standardized, reproducible measurements gave birth to the thermometer — and eventually, the need to convert between competing scales.
      </p>

      <h2 id="the-birth-of-thermometers-in-the-1600s">The Birth of Thermometers in the 1600s</h2>
      <p>
        The first devices resembling thermometers appeared in Italy around the early 1600s. 
        Galileo Galilei and Santorio Santorio experimented with air thermoscopes — tubes where air expanded or contracted with heat. 
        These had no scale and were affected by air pressure, making them unreliable.
      </p>
      <p>
        By the mid-1600s, inventors like Ferdinand II de’ Medici sealed liquid (often alcohol) in glass tubes, 
        creating the first true “liquid-in-glass” thermometers. Still, each inventor used arbitrary reference points — 
        one might mark “coldest winter day” as 0, another “human body heat” as 12. Without standardization, comparing readings was meaningless.
      </p>

      <h2 id="fahrenheit-vs-celsius-the-battle-of-scales">Fahrenheit vs Celsius: The Battle of Scales</h2>
      <p>
        The 18th century saw the rise of two dominant temperature scales — each born from different philosophies and needs.
      </p>
      <ul class="list-disc pl-6 space-y-1">
        <li>
          <strong>Daniel Gabriel Fahrenheit (1724)</strong> — A German physicist who settled in Amsterdam, Fahrenheit wanted precision. 
          He used mercury (which expands linearly) and set his zero point based on a brine solution’s freezing point. 
          He defined 32°F as water’s freezing point and 96°F as human body temperature (later adjusted to 98.6°F). 
          His scale became popular in English-speaking countries for its fine gradations.
        </li>
        <li>
          <strong>Anders Celsius (1742)</strong> — A Swedish astronomer who proposed a 100-degree scale between water’s freezing (0°) and boiling (100°) points at sea level. 
          Ironically, Celsius originally set boiling at 0° and freezing at 100° — it was reversed after his death! 
          His logical, decimal-based system became the global scientific standard — now known as Centigrade, then Celsius.
        </li>
      </ul>
      <p>
        Converting between them became essential for international trade, science, and diplomacy. 
        The formula <code>°F = (°C × 9/5) + 32</code> became a staple in textbooks — and a headache for students worldwide.
      </p>

      <h2 id="kelvin-and-the-rise-of-absolute-science">Kelvin and the Rise of Absolute Science</h2>
      <p>
        In 1848, Lord Kelvin (William Thomson) introduced a revolutionary idea: a temperature scale with <strong>no negative numbers</strong>. 
        His “absolute thermodynamic scale” started at “absolute zero” — the theoretical point where all molecular motion stops (−273.15°C).
      </p>
      <p>
        Kelvin (K) became essential in physics, chemistry, and engineering. Converting to Kelvin is simple: 
        <code>K = °C + 273.15</code>. But its implications were profound — enabling calculations in thermodynamics, 
        quantum mechanics, and space exploration where precision matters down to the millionth of a degree.
      </p>
      <p>
        Suddenly, scientists needed to convert not just between two scales — but three. 
        A single lab might use Celsius for daily work, Kelvin for equations, and Fahrenheit for public communication.
      </p>

      <h2 id="mechanical-conversion-slide-rules-and-tables">Mechanical Conversion: Slide Rules and Tables</h2>
      <p>
        Before digital tools, engineers and scientists relied on:
      </p>
      <ul class="list-disc pl-6 space-y-1">
        <li><strong>Conversion tables</strong> — Printed in lab manuals, almanacs, and textbooks. Look up 25°C → find 77°F.</li>
        <li><strong>Slide rules</strong> — Analog calculators with temperature scales printed alongside. Align the cursors to convert on the fly.</li>
        <li><strong>Rotary calculators and nomograms</strong> — Graphical tools where you drew lines between scales to find equivalents.</li>
      </ul>
      <p>
        These tools required training — and were prone to human error. A misplaced decimal or misaligned slide could ruin an experiment or engineering calculation.
      </p>

      <h2 id="digital-revolution-apps-calculators-and-ai">Digital Revolution: Apps, Calculators, and AI</h2>
      <p>
        The 1970s brought handheld calculators with built-in conversion functions. 
        The 1990s introduced websites with JavaScript converters. 
        Today, your smartphone likely has at least three ways to convert temperatures:
      </p>
      <ol class="list-decimal pl-6 space-y-1">
        <li>Voice assistants: “Hey Siri, what’s 30 Celsius in Fahrenheit?”</li>
        <li>Pre-installed calculator apps with unit conversion modes.</li>
        <li>Dedicated weather or science apps that auto-convert based on location or preference.</li>
      </ol>
      <p>
        Modern tools even predict context — a recipe app might auto-convert oven temps based on your country. 
        AI-powered converters can explain <em>why</em> the conversion works — not just give the answer.
      </p>

      <h2 id="everyday-uses-across-cultures-and-professions">Everyday Uses Across Cultures and Professions</h2>
      <p>
        Temperature conversion isn’t just for scientists. It touches daily life in surprising ways:
      </p>
      <ul class="list-disc pl-6 space-y-1">
        <li><strong>Chefs</strong> adapting French recipes (Celsius) for American kitchens (Fahrenheit).</li>
        <li><strong>Travelers</strong> checking weather apps while abroad — “Is 20°C warm or cold?”</li>
        <li><strong>Parents</strong> reading fever charts from international pediatric sources.</li>
        <li><strong>Engineers</strong> working on global teams — American specs in °F, European in °C.</li>
        <li><strong>Climate scientists</strong> converting historical data across century-old records.</li>
      </ul>

      <h2 id="conclusion-why-temperature-conversion-still-matters">Conclusion: Why Temperature Conversion Still Matters</h2>
      <p>
        Though hidden behind apps and auto-conversions, the history of temperature scales reflects humanity’s quest for precision, 
        collaboration, and universal understanding. Even as the world slowly converges on Celsius, legacy systems (like Fahrenheit in the US) 
        ensure conversion remains a vital skill — and a fascinating window into scientific history.
      </p>
      <p>
        Next time you check the weather or preheat your oven, remember: you’re participating in a 400-year-old scientific tradition — 
        one degree at a time.
      </p>
    `,
  },

  // ARTICLE 3: History of Time Zones
  {
    id: "time-zones-history",
    title: "History of Time Zones: How the World Agreed to Tell Time",
    date: "22 September 2025",
    time: "10:00 AM",
    category: "History",
    image: "/timezones.jpg",
    description:
      "Explore how chaotic local times evolved into today’s global time zone system — and why noon isn’t noon everywhere.",
    toc: [
      "Before Time Zones: Local Solar Time",
      "Railroads and the Need for Standardization",
      "The 1884 International Meridian Conference",
      "GMT to UTC: Evolution of Global Time",
      "Daylight Saving Time Controversies",
      "Technology’s Role in Timekeeping",
      "Modern Challenges: Mars Time, Digital Nomads",
      "Conclusion: Why Time Zones Still Rule the World",
    ],
    content: `
      <p>
        Imagine booking a train in 1870: every town kept its own “noon” based on when the sun peaked overhead. 
        This <strong>history of time zones</strong> reveals how railroads, telegraphs, and global diplomacy forced the world to synchronize — 
        creating the system we rely on today for flights, Zoom calls, and stock markets.
      </p>

      <h2 id="before-time-zones-local-solar-time">Before Time Zones: Local Solar Time</h2>
      <p>
        Until the 19th century, time was hyperlocal. Boston’s noon differed from New York’s by 12 minutes. 
        Town clocks were set by sundials or astronomical observations. This worked for agrarian societies — 
        but collapsed with the rise of trains and telegraphs, where scheduling required precision across distances.
      </p>

      <h2 id="railroads-and-the-need-for-standardization">Railroads and the Need for Standardization</h2>
      <p>
        In 1883, North American railroads adopted four time zones to prevent scheduling chaos. 
        “Railroad Time” ignored municipal boundaries — a station in Indiana might follow Chicago time, not local sun time. 
        Passengers were confused, but crashes decreased. Efficiency won over tradition.
      </p>

      <h2 id="the-1884-international-meridian-conference">The 1884 International Meridian Conference</h2>
      <p>
        Delegates from 25 nations met in Washington D.C. to standardize global time. Key decisions:
      </p>
      <ul class="list-disc pl-6 space-y-1">
        <li>Greenwich, England, became Prime Meridian (0° longitude).</li>
        <li>The world divided into 24 time zones, each 15° of longitude wide.</li>
        <li>Universal Day would start at Greenwich Midnight.</li>
      </ul>
      <p>
        France abstained (preferring Paris Meridian), and some nations delayed adoption for decades — but the framework stuck.
      </p>

      <h2 id="gmt-to-utc-evolution-of-global-time">GMT to UTC: Evolution of Global Time</h2>
      <p>
        Greenwich Mean Time (GMT) ruled until 1972, when atomic clocks revealed Earth’s rotation wasn’t perfectly regular. 
        Coordinated Universal Time (UTC) replaced it — based on atomic time but adjusted with “leap seconds” to stay aligned with Earth’s spin.
      </p>

      <h2 id="daylight-saving-time-controversies">Daylight Saving Time Controversies</h2>
      <p>
        First proposed in 1895, DST aimed to save energy by shifting daylight to evening hours. 
        Adopted during WWI, it’s now a global patchwork: Arizona ignores it, Europe debates abolishing it, and farmers have always hated it. 
        Studies show minimal energy savings — but massive disruption to sleep and health.
      </p>

      <h2 id="technologys-role-in-timekeeping">Technology’s Role in Timekeeping</h2>
      <p>
        From sundials to atomic clocks, tech drove precision:
      </p>
      <ol class="list-decimal pl-6 space-y-1">
        <li>Mechanical clocks (14th century) enabled town synchronization.</li>
        <li>Telegraph time signals (1850s) let railroads sync across regions.</li>
        <li>Atomic clocks (1955) made microsecond accuracy possible.</li>
        <li>GPS satellites (1978) now broadcast time signals used by phones and power grids.</li>
      </ol>

      <h2 id="modern-challenges-mars-time-digital-nomads">Modern Challenges: Mars Time, Digital Nomads</h2>
      <p>
        Today’s issues:
      </p>
      <ul class="list-disc pl-6 space-y-1">
        <li><strong>Mars missions</strong> use “Mars Sol” (24h 39m) — forcing Earth teams to live on Martian time.</li>
        <li><strong>Digital nomads</strong> juggle 3+ time zones for work, family, and clients.</li>
        <li><strong>Financial markets</strong> require microsecond sync across continents.</li>
      </ul>

      <h2 id="conclusion-why-time-zones-still-rule-the-world">Conclusion: Why Time Zones Still Rule the World</h2>
      <p>
        Despite apps that auto-convert and calendars that adjust, time zones remain foundational to global coordination. 
        They’re a triumph of human cooperation — proving that even something as abstract as “time” can be standardized across cultures, 
        continents, and centuries.
      </p>
    `,
  },

  // ARTICLE 4: History of Maps
  {
    id: "maps-history",
    title: "History of Maps: From Clay Tablets to Google Earth",
    date: "24 September 2025",
    time: "02:15 PM",
    category: "History",
    image: "/maps.jpg",
    description:
      "Trace the evolution of cartography — from ancient Babylonian clay maps to real-time satellite navigation — and how maps shaped human civilization.",
    toc: [
      "Earliest Maps: Symbols on Stone and Clay",
      "Greek and Roman Advances in Geography",
      "Medieval Mappa Mundi and Religious Cartography",
      "Age of Exploration: Mercator and Global Trade",
      "Military Mapping and National Borders",
      "Aerial Photography to Satellite Imaging",
      "Digital Revolution: GPS, Google Maps, and GIS",
      "Conclusion: Maps as Power, Art, and Identity",
    ],
    content: `
      <p>
        Maps are more than tools for navigation — they’re mirrors of culture, power, and human imagination. 
        This <strong>history of maps</strong> explores how we went from scratching landmarks in dirt to viewing live traffic on smartphones — 
        and how each era’s maps reveal what societies valued most.
      </p>

      <h2 id="earliest-maps-symbols-on-stone-and-clay">Earliest Maps: Symbols on Stone and Clay</h2>
      <p>
        The oldest known map, carved on a 25,000-year-old mammoth tusk, shows a mountain, river, and valleys in what’s now the Czech Republic. 
        More practical was the 2300 BCE Babylonian clay tablet — a simple city map with labeled streets, canals, and temples. 
        These weren’t for “navigation” but for recording ownership, planning construction, or honoring gods.
      </p>

      <h2 id="greek-and-roman-advances-in-geography">Greek and Roman Advances in Geography</h2>
      <p>
        Greeks introduced mathematical cartography. Anaximander (610–546 BCE) drew the first “world map” with Europe, Asia, and Libya. 
        Eratosthenes (276–194 BCE) calculated Earth’s circumference with shocking accuracy — and divided the globe into climate zones. 
        Romans focused on practicality: their <em>itineraria</em> were route maps for soldiers and merchants, listing distances between towns.
      </p>

      <h2 id="medieval-mappa-mundi-and-religious-cartography">Medieval Mappa Mundi and Religious Cartography</h2>
      <p>
        Medieval European maps, like the Hereford Mappa Mundi (1300), placed Jerusalem at the center — not for accuracy, but theology. 
        East (where Eden lay) was at the top. Sea monsters and mythical lands filled unknown regions. Maps were devotional objects, not navigational aids.
      </p>

      <h2 id="age-of-exploration-mercator-and-global-trade">Age of Exploration: Mercator and Global Trade</h2>
      <p>
        As ships crossed oceans, old maps failed. Gerardus Mercator’s 1569 projection solved a critical problem: 
        it allowed navigators to plot straight-line courses (rhumb lines) across curved Earth. 
        Though it distorted size (Greenland = Africa? No!), it became the standard for sea charts — and later, school classrooms.
      </p>

      <h2 id="military-mapping-and-national-borders">Military Mapping and National Borders</h2>
      <p>
        Napoleon’s army mapped Europe block by block. The British Ordnance Survey (1791) began to tax and control land. 
        Post-WWI treaties redrew borders using maps — often ignoring ethnic realities, planting seeds for future conflict. 
        Maps became tools of empire and bureaucracy.
      </p>

      <h2 id="aerial-photography-to-satellite-imaging">Aerial Photography to Satellite Imaging</h2>
      <p>
        WWI planes took photos for trench mapping. By WWII, aerial reconnaissance shaped battle strategy. 
        The 1960 launch of CORONA, the first spy satellite, gave the US detailed USSR maps. 
        Civilian use exploded with Landsat (1972) — monitoring crops, deforestation, urban sprawl from space.
      </p>

      <h2 id="digital-revolution-gps-google-maps-and-gis">Digital Revolution: GPS, Google Maps, and GIS</h2>
      <p>
        The 1990s brought Geographic Information Systems (GIS) — layering data like population, roads, and weather onto digital maps. 
        GPS (fully operational in 1995) gave civilians meter-level accuracy. Google Maps (2005) added street view, traffic, and business reviews — 
        turning maps into interactive, real-time platforms.
      </p>
      <p>
        Today, you can watch deforestation in the Amazon, tour the Louvre, or find the nearest taco truck — all from a device in your pocket.
      </p>

      <h2 id="conclusion-maps-as-power-art-and-identity">Conclusion: Maps as Power, Art, and Identity</h2>
      <p>
        Maps have justified conquests, inspired explorers, saved lives in disasters, and helped us find coffee shops. 
        They reflect not just geography, but politics, bias, and dreams. As digital twins of Earth emerge and Mars rovers map alien terrain, 
        one truth remains: humans will always need to draw — and understand — the world around them.
      </p>
    `,
  },

  // ARTICLE 5: History of Writing Systems
  {
    id: "writing-systems-history",
    title: "History of Writing Systems: Cuneiform to Emojis",
    date: "26 September 2025",
    time: "09:45 AM",
    category: "History",
    image: "/writing.jpg",
    description:
      "How humans evolved from pressing symbols into clay to texting with emojis — a 5,000-year journey of communication.",
    toc: [
      "Why Writing Was Invented (Hint: Not for Poetry)",
      "Cuneiform, Hieroglyphs, and Early Scripts",
      "Alphabets: Phoenician, Greek, Latin",
      "Printing Press and Mass Literacy",
      "Typewriters, Computers, and Digital Text",
      "Emojis, GIFs, and the New Visual Language",
      "Lost Scripts and Undeciphered Codes",
      "Conclusion: Writing as Humanity’s Greatest Tool",
    ],
    content: `
      <p>
        Writing didn’t begin as art or storytelling — it began as accounting. 
        This <strong>history of writing systems</strong> traces how humans evolved from tally marks on clay to sending heart-eyed emojis — 
        and how each innovation reshaped society, power, and thought.
      </p>

      <h2 id="why-writing-was-invented-hint-not-for-poetry">Why Writing Was Invented (Hint: Not for Poetry)</h2>
      <p>
        Around 3400 BCE in Mesopotamia, temple scribes pressed reed styluses into wet clay to record grain, goats, and taxes. 
        Writing was born not for literature, but for bureaucracy. The earliest texts? Receipts, inventories, contracts.
      </p>

      <h2 id="cuneiform-hieroglyphs-and-early-scripts">Cuneiform, Hieroglyphs, and Early Scripts</h2>
      <ul class="list-disc pl-6 space-y-1">
        <li><strong>Cuneiform (Sumer, 3400 BCE)</strong> — Wedge-shaped symbols for record-keeping. Evolved to record laws (Code of Hammurabi) and epics (Gilgamesh).</li>
        <li><strong>Hieroglyphs (Egypt, 3200 BCE)</strong> — Sacred pictographs for temples and tombs. Later simplified into hieratic and demotic scripts for daily use.</li>
        <li><strong>Indus Script (2600 BCE)</strong> — Still undeciphered. Found on seals across the Indus Valley — possibly administrative or religious.</li>
      </ul>

      <h2 id="alphabets-phoenician-greek-latin">Alphabets: Phoenician, Greek, Latin</h2>
      <p>
        The Phoenicians (1050 BCE) revolutionized writing by creating an alphabet — 22 symbols for consonant sounds. 
        Greeks added vowels (800 BCE), making reading accessible to non-elites. Romans adapted it into Latin — now the basis of English, Spanish, French, and more.
      </p>
      <p>
        Alphabets democratized literacy. You didn’t need to memorize 1,000 characters — just 26 letters.
      </p>

      <h2 id="printing-press-and-mass-literacy">Printing Press and Mass Literacy</h2>
      <p>
        Gutenberg’s movable type (1440) shattered the Church’s monopoly on texts. Bibles, pamphlets, and newspapers spread like wildfire. 
        Literacy rates soared. Ideas — scientific, political, religious — could replicate faster than ever. The Reformation, Enlightenment, and revolutions followed.
      </p>

      <h2 id="typewriters-computers-and-digital-text">Typewriters, Computers, and Digital Text</h2>
      <p>
        The typewriter (1860s) standardized fonts and sped up documentation. QWERTY layout was designed to prevent jamming — not efficiency. 
        Computers introduced ASCII (1963), then Unicode (1991), allowing global scripts to coexist digitally. Email, blogs, tweets — text became instant and global.
      </p>

      <h2 id="emojis-gifs-and-the-new-visual-language">Emojis, GIFs, and the New Visual Language</h2>
      <p>
        In 1999, Shigetaka Kurita created 176 emojis for Japanese mobile users. Today, over 3,600 exist. 
        Emojis add tone and emotion to sterile text. GIFs and memes became the new hieroglyphs — conveying complex ideas in a glance.
      </p>
      <p>
        We’ve come full circle: from pictographs on stone to pictographs on screens.
      </p>

      <h2 id="lost-scripts-and-undeciphered-codes">Lost Scripts and Undeciphered Codes</h2>
      <p>
        Some scripts remain mysteries:
      </p>
      <ul class="list-disc pl-6 space-y-1">
        <li><strong>Linear A (Crete, 1800 BCE)</strong> — Possibly Minoan language. Undeciphered.</li>
        <li><strong>Rongorongo (Easter Island, 1200 CE)</strong> — Carved glyphs on wood. Meaning unknown.</li>
        <li><strong>Voynich Manuscript (15th century)</strong> — Illustrated book in unknown script. Possibly hoax, possibly cipher.</li>
      </ul>

      <h2 id="conclusion-writing-as-humanitys-greatest-tool">Conclusion: Writing as Humanity’s Greatest Tool</h2>
      <p>
        Writing enabled laws, libraries, science, and love letters. It preserved voices across millennia. 
        Today, whether you’re typing a novel or sending a 💖, you’re participating in one of humanity’s most powerful inventions — 
        the ability to make thought visible, permanent, and shareable.
      </p>
    `,
  },

  // ARTICLE 6: History of Money
  {
    id: "money-history",
    title: "History of Money: From Cowrie Shells to Bitcoin",
    date: "28 September 2025",
    time: "01:30 PM",
    category: "History",
    image: "/money.jpg",
    description:
      "Explore how money evolved from barter to blockchain — and why trust, not metal or code, has always been its foundation.",
    toc: [
      "Barter Systems and Their Limitations",
      "Commodity Money: Salt, Shells, Livestock",
      "First Coins: Lydia, China, India",
      "Paper Money and the Rise of Banks",
      "Gold Standard and Fiat Currencies",
      "Credit Cards, ATMs, Digital Wallets",
      "Cryptocurrencies and Decentralized Finance",
      "Conclusion: What Is Money, Really?",
    ],
    content: `
      <p>
        Money is not coins, paper, or Bitcoin — it’s a shared belief. 
        This <strong>history of money</strong> reveals how humans moved from trading goats for grain to trading digital tokens — 
        and how each form reflected the values, technologies, and trust systems of its time.
      </p>

      <h2 id="barter-systems-and-their-limitations">Barter Systems and Their Limitations</h2>
      <p>
        “I’ll give you three chickens for your axe.” Barter worked in small tribes — but failed at scale. 
        What if you had chickens but needed shoes — and the shoemaker wanted wheat? The “double coincidence of wants” made trade inefficient.
      </p>

      <h2 id="commodity-money-salt-shells-livestock">Commodity Money: Salt, Shells, Livestock</h2>
      <p>
        Societies began using universally desired items as money:
      </p>
      <ul class="list-disc pl-6 space-y-1">
        <li><strong>Salt</strong> — Roman soldiers were sometimes paid in salt (“salary” derives from “sal”).</li>
        <li><strong>Cowrie shells</strong> — Used across Africa, Asia, and Oceania for 4,000 years. Durable, hard to counterfeit.</li>
        <li><strong>Cattle</strong> — “Capital” comes from Latin “caput” (head of cattle). Wealth was measured in herds.</li>
      </ul>

      <h2 id="first-coins-lydia-china-india">First Coins: Lydia, China, India</h2>
      <p>
        Around 600 BCE, the Kingdom of Lydia (modern Turkey) minted the first standardized coins — lumps of electrum stamped with a lion. 
        Value came from metal content + royal guarantee. China developed bronze “knife money” and later paper notes (7th century CE). 
        India’s punch-marked coins circulated across trade routes.
      </p>

      <h2 id="paper-money-and-the-rise-of-banks">Paper Money and the Rise of Banks</h2>
      <p>
        Song Dynasty China (1000 CE) issued paper “flying money” to avoid hauling heavy coins. 
        European banks followed — issuing paper receipts for gold deposits. These receipts became currency. 
        The Bank of England (1694) institutionalized this — creating the model for modern central banking.
      </p>

      <h2 id="gold-standard-and-fiat-currencies">Gold Standard and Fiat Currencies</h2>
      <p>
        Under the gold standard (1870s–1971), paper money could be exchanged for gold. It stabilized global trade — but limited economic flexibility. 
        In 1971, Nixon ended convertibility. Modern “fiat” money (USD, EUR, JPY) has value because governments say so — and we believe them.
      </p>

      <h2 id="credit-cards-atms-digital-wallets">Credit Cards, ATMs, Digital Wallets</h2>
      <p>
        Diners Club (1950) launched the first credit card. ATMs (1967) made cash accessible 24/7. 
        PayPal (1998), Apple Pay (2014), and Alipay turned phones into wallets. Physical money is vanishing — in Sweden, cash is nearly extinct.
      </p>

      <h2 id="cryptocurrencies-and-decentralized-finance">Cryptocurrencies and Decentralized Finance</h2>
      <p>
        Bitcoin (2009) proposed money without banks or governments — secured by cryptography and blockchain. 
        Ethereum (2015) added “smart contracts.” DeFi apps now lend, borrow, and trade without intermediaries. 
        Critics call it volatile; fans call it freedom.
      </p>

      <h2 id="conclusion-what-is-money-really">Conclusion: What Is Money, Really?</h2>
      <p>
        Money is memory (who owes what), trust (we agree it has value), and power (who controls it). 
        From shells to Satoshi, its form changes — but its function remains: to reduce friction in human exchange. 
        The next evolution? Central bank digital currencies (CBDCs), biometric payments, or AI-managed universal basic income. 
        One thing’s certain: money will keep evolving — because we will.
      </p>
    `,
  },

  // ARTICLE 7: History of Clocks
  {
    id: "clocks-history",
    title:
      "History of Clocks: Measuring Time from Sundials to Atomic Precision",
    date: "30 September 2025",
    time: "11:00 AM",
    category: "History",
    image: "/clocks.jpg",
    description:
      "How humanity tamed time — from shadow sticks to cesium atoms — and why controlling time meant controlling society.",
    toc: [
      "Ancient Timekeeping: Sundials, Water Clocks, Candle Clocks",
      "Mechanical Clocks and the Rise of Cities",
      "Pendulum Clocks and Scientific Revolution",
      "Pocket Watches, Railroads, and Punctuality",
      "Quartz Crisis and Digital Displays",
      "Atomic Clocks and Redefining the Second",
      "Smartwatches and the Quantified Self",
      "Conclusion: Time as Technology, Culture, and Control",
    ],
    content: `
      <p>
        Time was once measured by the sun’s arc — now by atomic vibrations. 
        This <strong>history of clocks</strong> explores how humans went from watching shadows to syncing global finance with nanosecond precision — 
        and how each innovation reshaped work, worship, and warfare.
      </p>

      <h2 id="ancient-timekeeping-sundials-water-clocks-candle-clocks">Ancient Timekeeping: Sundials, Water Clocks, Candle Clocks</h2>
      <p>
        Egyptians used obelisks as sundials (3500 BCE). Greeks and Chinese refined water clocks (clepsydra) — dripping water moved gears or floated markers. 
        Medieval monks burned calibrated candles or incense sticks to time prayers. All were weather-dependent and inaccurate — but better than nothing.
      </p>

      <h2 id="mechanical-clocks-and-the-rise-of-cities">Mechanical Clocks and the Rise of Cities</h2>
      <p>
        Tower clocks appeared in 14th-century Europe (e.g., Salisbury Cathedral, 1386). Driven by weights and gears, they rang bells to mark hours. 
        No minute hands yet — time was communal, not personal. Clock towers symbolized civic pride and order. Workdays began and ended by the chime.
      </p>

      <h2 id="pendulum-clocks-and-scientific-revolution">Pendulum Clocks and Scientific Revolution</h2>
      <p>
        Christiaan Huygens’ pendulum clock (1656) reduced error from 15 mins/day to 15 secs/day. 
        Suddenly, scientists could measure heartbeats, planetary orbits, and falling objects precisely. 
        Newton’s laws, Boyle’s gas experiments — all relied on accurate timekeeping.
      </p>

      <h2 id="pocket-watches-railroads-and-punctuality">Pocket Watches, Railroads, and Punctuality</h2>
      <p>
        Portable timepieces became status symbols (1700s). But railroads (1800s) made them essential. 
        Trains needed synchronized schedules — leading to standardized time zones (see Article 3). 
        “Punctuality” became a moral virtue. Factory whistles, school bells, punch cards — society marched to the clock’s beat.
      </p>

      <h2 id="quartz-crisis-and-digital-displays">Quartz Crisis and Digital Displays</h2>
      <p>
        Quartz clocks (1927) used crystal vibrations — 100x more accurate than mechanical ones. 
        In the 1970s, cheap quartz watches from Japan (“Quartz Crisis”) nearly destroyed Swiss mechanical watch industry. 
        LEDs then LCDs made time digital — silent, precise, and everywhere: microwaves, VCRs, car dashboards.
      </p>

      <h2 id="atomic-clocks-and-redefining-the-second">Atomic Clocks and Redefining the Second</h2>
      <p>
        Atomic clocks (1955) measure electron transitions in cesium atoms. Accuracy: 1 second in 100 million years. 
        In 1967, the “second” was redefined by atomic resonance — not Earth’s rotation. 
        GPS, stock markets, and power grids now rely on atomic time. Without it, modern civilization would desynchronize.
      </p>

      <h2 id="smartwatches-and-the-quantified-self">Smartwatches and the Quantified Self</h2>
      <p>
        Apple Watch (2015) turned timepieces into health monitors — tracking steps, heart rate, sleep. 
        We no longer just measure time — we measure how we spend it. Notifications, timers, calendars — time is now fragmented, optimized, and gamified.
      </p>

      <h2 id="conclusion-time-as-technology-culture-and-control">Conclusion: Time as Technology, Culture, and Control</h2>
      <p>
        Clocks didn’t just tell time — they shaped it. Monasteries structured prayer. Factories structured labor. 
        Smartphones now structure attention. As we move toward AI schedulers and neural time perception tech, 
        one question remains: Are we mastering time — or letting it master us?
      </p>
    `,
  },

  // ARTICLE 8: History of the Internet
  {
    id: "internet-history",
    title:
      "History of the Internet: From Military Network to Global Culture Engine",
    date: "02 October 2025",
    time: "03:00 PM",
    category: "History",
    image: "/internet.jpg",
    description:
      "The wild, accidental, revolutionary story of how a Pentagon project became the world’s central nervous system.",
    toc: [
      "Cold War Origins: ARPANET and Packet Switching",
      "Birth of Email, FTP, and Early Protocols",
      "World Wide Web: Tim Berners-Lee’s Invention",
      "Dot-com Boom, Bust, and Rebirth",
      "Web 2.0: Social Media, User Content, Virality",
      "Mobile Internet and the App Economy",
      "AI, Algorithms, and the Attention Economy",
      "Conclusion: Who Controls the Internet Now?",
    ],
    content: `
      <p>
        The internet wasn’t designed to share memes or stream movies — it was built to survive nuclear war. 
        This <strong>history of the internet</strong> traces its journey from a Pentagon experiment to the planet’s most powerful cultural, economic, and political force.
      </p>

      <h2 id="cold-war-origins-arpnet-and-packet-switching">Cold War Origins: ARPANET and Packet Switching</h2>
      <p>
        In 1969, the U.S. Department of Defense launched ARPANET — linking four university computers. 
        Its goal: create a decentralized network that could withstand attack. Data was broken into “packets,” rerouted dynamically — the birth of packet switching.
      </p>
      <p>
        The first message? “LO” — the system crashed before “LOGIN” finished.
      </p>

      <h2 id="birth-of-email-ftp-and-early-protocols">Birth of Email, FTP, and Early Protocols</h2>
      <p>
        Ray Tomlinson sent the first networked email in 1971 — choosing “@” to separate user and machine. 
        FTP (1971) allowed file transfers. TCP/IP (1983) became the universal language — letting different networks interconnect. 
        The “internet” was born — a network of networks.
      </p>

      <h2 id="world-wide-web-tim-berners-lees-invention">World Wide Web: Tim Berners-Lee’s Invention</h2>
      <p>
        In 1989, at CERN, Tim Berners-Lee proposed a system of “hypertext” documents linked across the internet. 
        He created HTML (structure), HTTP (transfer), and URLs (addresses). The first website (info.cern.ch) went live in 1991 — explaining the Web itself.
      </p>
      <p>
        Crucially, Berners-Lee refused to patent it. The Web remained open — and exploded.
      </p>

      <h2 id="dot-com-boom-bust-and-rebirth">Dot-com Boom, Bust, and Rebirth</h2>
      <p>
        1995–2000: Venture capital flooded into “.com” startups. Pets.com, Webvan, Boo.com burned billions. 
        The bubble burst in 2000 — but survivors like Amazon and eBay laid the foundation for e-commerce. 
        Broadband replaced dial-up. Google (1998) organized the chaos.
      </p>

      <h2 id="web-20-social-media-user-content-virality">Web 2.0: Social Media, User Content, Virality</h2>
      <p>
        Mid-2000s: Websites became platforms. Users generated content — blogs (WordPress), videos (YouTube), profiles (MySpace → Facebook). 
        “Like,” “Share,” “Retweet” turned attention into currency. Virality became the goal — and the business model.
      </p>

      <h2 id="mobile-internet-and-the-app-economy">Mobile Internet and the App Economy</h2>
      <p>
        iPhone (2007) + App Store (2008) put the internet in pockets. Uber, Instagram, TikTok — apps became gateways to services, not websites. 
        GPS, cameras, sensors made phones context-aware. The internet was no longer “visited” — it was lived in.
      </p>

      <h2 id="ai-algorithms-and-the-attention-economy">AI, Algorithms, and the Attention Economy</h2>
      <p>
        Today, AI curates your feed, recommends videos, answers questions. Algorithms optimize for “engagement” — not truth or well-being. 
        We don’t surf the web — we’re guided by invisible hands. Data is the new oil; attention, the new currency.
      </p>

      <h2 id="conclusion-who-controls-the-internet-now">Conclusion: Who Controls the Internet Now?</h2>
      <p>
        From Pentagon to Silicon Valley to AI labs — control keeps shifting. Governments censor. Corporations monetize. Hackers disrupt. 
        Yet, it remains astonishingly open. The next chapter? Decentralized web (Web3), AI agents, brain-computer interfaces. 
        The internet’s history proves one thing: whatever we build, humans will use it in ways no one predicted.
      </p>
    `,
  },

  // ARTICLE 9: History of Photography
  {
    id: "photography-history",
    title:
      "History of Photography: Capturing Light from Daguerreotypes to Selfies",
    date: "04 October 2025",
    time: "10:30 AM",
    category: "History",
    image: "/photography.jpg",
    description:
      "How we learned to freeze moments in time — and how that changed art, memory, and truth forever.",
    toc: [
      "Camera Obscura and Early Experiments",
      "Daguerreotype and the First Public Photos",
      "Kodak and ‘You Press the Button, We Do the Rest’",
      "35mm, Leica, and the Rise of Photojournalism",
      "Polaroid, Disposable Cameras, and Instant Gratification",
      "Digital Revolution: Pixels Replace Film",
      "Smartphone Cameras and the Age of the Selfie",
      "Conclusion: Photography as Memory, Evidence, and Art",
    ],
    content: `
      <p>
        Photography didn’t just capture images — it changed how we see ourselves, our history, and our world. 
        This <strong>history of photography</strong> traces the journey from pinhole projections to trillion-pixel smartphone sensors — 
        and how each leap turned moments into memories, evidence, and art.
      </p>

      <h2 id="camera-obscura-and-early-experiments">Camera Obscura and Early Experiments</h2>
      <p>
        Ancient Greeks and Chinese knew that light passing through a pinhole projects an inverted image. 
        Artists like da Vinci used “camera obscura” (dark room) devices to trace scenes. But images vanished — until chemistry met optics.
      </p>

      <h2 id="daguerreotype-and-the-first-public-photos">Daguerreotype and the First Public Photos</h2>
      <p>
        In 1839, Louis Daguerre unveiled his process: polish silver-plated copper, expose to iodine vapor, develop with mercury fumes. 
        Result: a unique, mirror-like image. Exposure times: minutes. Subjects had to sit perfectly still — hence stern, blink-free portraits.
      </p>
      <p>
        The first selfie? Robert Cornelius, 1839 — he ran into frame, sat for a minute, then covered the lens.
      </p>

      <h2 id="kodak-and-you-press-the-button-we-do-the-rest">Kodak and ‘You Press the Button, We Do the Rest’</h2>
      <p>
        George Eastman’s Kodak camera (1888) came pre-loaded with film for 100 exposures. 
        After shooting, you mailed the whole camera back to Kodak for developing. Slogan: “You press the button, we do the rest.” 
        Photography was now for everyone — not just professionals.
      </p>

      <h2 id="35mm-leica-and-the-rise-of-photojournalism">35mm, Leica, and the Rise of Photojournalism</h2>
      <p>
        Leica’s compact 35mm camera (1925) used movie film. Lightweight and quiet, it let photographers capture life as it happened. 
        Robert Capa’s D-Day photos, Dorothea Lange’s Depression portraits — photojournalism shaped public opinion and history.
      </p>

      <h2 id="polaroid-disposable-cameras-and-instant-gratification">Polaroid, Disposable Cameras, and Instant Gratification</h2>
      <p>
        Edwin Land’s Polaroid (1948) developed photos in 60 seconds — magic for parties and ID photos. 
        Fujifilm’s disposable camera (1986) cost $10, took 27 shots, then got trashed. Photography became casual, spontaneous, ephemeral.
      </p>

      <h2 id="digital-revolution-pixels-replace-film">Digital Revolution: Pixels Replace Film</h2>
      <p>
        NASA used digital sensors in 1960s space probes. Consumer digital cameras arrived in the 1990s (Apple QuickTake, Sony Mavica). 
        No film, no developing — just memory cards and LCD screens. Mistakes cost nothing. Quantity exploded. Quality caught up.
      </p>

      <h2 id="smartphone-cameras-and-the-age-of-the-selfie">Smartphone Cameras and the Age of the Selfie</h2>
      <p>
        iPhone 4 (2010) made front-facing cameras mainstream. Instagram (2010) added filters. 
        Selfies became a global language — from bathroom mirrors to Mount Everest. 
        We now take more photos every 2 minutes than all of humanity did in the 1800s.
      </p>

      <h2 id="conclusion-photography-as-memory-evidence-and-art">Conclusion: Photography as Memory, Evidence, and Art</h2>
      <p>
        Photos prove crimes, reunite families, win wars, start movements. They preserve birthdays, sunsets, revolutions. 
        They lie (deepfakes), manipulate (filters), and overwhelm (1 trillion photos/year). 
        Yet, at its core, photography remains what it always was: a way to say, “I was here. This mattered. Remember this.”
      </p>
    `,
  },

  // ARTICLE 10: History of Medicine
  {
    id: "medicine-history",
    title: "History of Medicine: From Herbal Remedies to Genetic Engineering",
    date: "06 October 2025",
    time: "08:15 AM",
    category: "History",
    image: "/medicine.jpg",
    description:
      "The dramatic, often gruesome, always inspiring story of how humans fought disease — and won.",
    toc: [
      "Ancient Healing: Egypt, China, Greece",
      "Middle Ages: Plague, Humors, and Barber-Surgeons",
      "Renaissance Anatomy and the Scientific Method",
      "Germ Theory, Vaccines, and Antiseptics",
      "Antibiotics, Imaging, and Modern Hospitals",
      "Genomics, CRISPR, and Personalized Medicine",
      "Pandemics: 1918 Flu to COVID-19",
      "Conclusion: The Never-Ending Battle for Health",
    ],
    content: `
      <p>
        Medicine is humanity’s longest war — against pain, infection, and death. 
        This <strong>history of medicine</strong> reveals how we went from praying to gods to editing genes — 
        and how each breakthrough saved millions, reshaped societies, and redefined what it means to be human.
      </p>

      <h2 id="ancient-healing-egypt-china-greece">Ancient Healing: Egypt, China, Greece</h2>
      <p>
        Egyptian papyri (1550 BCE) describe 800 remedies — honey for wounds, moldy bread (natural penicillin?) for infections. 
        Chinese medicine (Huangdi Neijing, 300 BCE) balanced “qi” with herbs, acupuncture, and diet. 
        Hippocrates (400 BCE) urged observation over superstition: “First, do no harm.”
      </p>

      <h2 id="middle-ages-plague-humors-and-barber-surgeons">Middle Ages: Plague, Humors, and Barber-Surgeons</h2>
      <p>
        Medieval Europe believed disease came from “imbalanced humors” (blood, phlegm, black bile, yellow bile). 
        Treatments: bloodletting, purging, prayer. Barber-surgeons pulled teeth, amputated limbs — with no anesthesia or sterilization. 
        The Black Death (1347) killed 1/3 of Europe — blamed on bad air, Jews, or God’s wrath.
      </p>

      <h2 id="renaissance-anatomy-and-the-scientific-method">Renaissance Anatomy and the Scientific Method</h2>
      <p>
        Andreas Vesalius’ “De Humani Corporis Fabrica” (1543) corrected 1,300 years of Galen’s errors — by dissecting human corpses (illegal at the time). 
        William Harvey described blood circulation (1628). Science, not dogma, became medicine’s foundation.
      </p>

      <h2 id="germ-theory-vaccines-and-antiseptics">Germ Theory, Vaccines, and Antiseptics</h2>
      <p>
        Louis Pasteur proved microbes cause disease (1861). Joseph Lister used carbolic acid to sterilize wounds (1867) — cutting death rates dramatically. 
        Edward Jenner’s smallpox vaccine (1796) — using cowpox — was the first true vaccine. Eradicated smallpox by 1980.
      </p>

      <h2 id="antibiotics-imaging-and-modern-hospitals">Antibiotics, Imaging, and Modern Hospitals</h2>
      <p>
        Alexander Fleming’s penicillin (1928) — accidentally discovered — launched the antibiotic era. 
        X-rays (1895), MRI (1977), CT scans (1971) let us see inside the living body. 
        Hospitals evolved from “places to die” to centers of healing, research, and technology.
      </p>

      <h2 id="genomics-crispr-and-personalized-medicine">Genomics, CRISPR, and Personalized Medicine</h2>
      <p>
        Human Genome Project (2003) mapped all 20,000 genes. CRISPR (2012) lets us edit DNA — curing sickle cell, targeting cancers. 
        “Personalized medicine” tailors drugs to your genes. AI diagnoses from scans faster than humans.
      </p>

      <h2 id="pandemics-1918-flu-to-covid-19">Pandemics: 1918 Flu to COVID-19</h2>
      <p>
        1918 flu killed 50 million — no vaccines, no ICUs. COVID-19 (2020) killed millions — but mRNA vaccines were developed in days, not years. 
        Global surveillance, ventilators, antivirals — medicine’s arsenal is stronger than ever. But inequality remains: billions lack basic care.
      </p>

      <h2 id="conclusion-the-never-ending-battle-for-health">Conclusion: The Never-Ending Battle for Health</h2>
      <p>
        Medicine’s history is one of trial, error, courage, and compassion. 
        We’ve conquered smallpox, polio, and HIV — but face superbugs, Alzheimer’s, and climate-driven diseases. 
        The next frontier? AI diagnostics, lab-grown organs, brain-computer interfaces. 
        The battle continues — but for the first time in history, we’re winning.
      </p>
    `,
  },

  // ARTICLE 11: History of Flight
  {
    id: "flight-history",
    title:
      "History of Flight: How Humans Conquered the Sky — From Icarus to SpaceX",
    date: "08 October 2025",
    time: "12:00 PM",
    category: "History",
    image: "/flight.jpg",
    description:
      "The dream of flight — from ancient myths to reusable rockets — and the pioneers who made it real.",
    toc: [
      "Myths and Early Attempts: Icarus, Da Vinci, Montgolfier",
      "Gliders and the Science of Lift",
      "Wright Brothers and the First Powered Flight",
      "World Wars and the Jet Age",
      "Commercial Aviation and the 747",
      "Space Shuttle, Drones, and Private Spaceflight",
      "Electric Planes, Supersonic Revival, Mars Helicopters",
      "Conclusion: The Sky Was Never the Limit",
    ],
    content: `
      <p>
        Humans dreamed of flight for millennia — then, in just 120 years, went from bicycles to orbiting Earth. 
        This <strong>history of flight</strong> celebrates the dreamers, daredevils, and engineers who turned myth into reality — 
        and reshaped war, travel, and our view of the planet.
      </p>

      <h2 id="myths-and-early-attempts-icarus-da-vinci-montgolfier">Myths and Early Attempts: Icarus, Da Vinci, Montgolfier</h2>
      <p>
        Greek myth warned of Icarus flying too close to the sun. Leonardo da Vinci sketched ornithopters (1485) — human-powered wings. 
        The Montgolfier brothers launched the first hot-air balloon (1783) — carrying a sheep, duck, and rooster. Humans followed weeks later.
      </p>

      <h2 id="gliders-and-the-science-of-lift">Gliders and the Science of Lift</h2>
      <p>
        George Cayley (1804) built the first modern glider — identifying lift, drag, thrust, and weight as key forces. 
        Otto Lilienthal (1890s) made 2,000+ glider flights — proving controlled flight was possible. He died in a crash — but inspired the Wrights.
      </p>

      <h2 id="wright-brothers-and-the-first-powered-flight">Wright Brothers and the First Powered Flight</h2>
      <p>
        Orville and Wilbur Wright solved the final puzzle: control. Their 1903 Flyer used wing-warping (like twisting a box) to bank and turn. 
        On December 17, 1903, at Kitty Hawk, Orville flew 12 seconds — 120 feet. The age of powered flight began.
      </p>

      <h2 id="world-wars-and-the-jet-age">World Wars and the Jet Age</h2>
      <p>
        WWI turned planes into weapons — dogfights, bombers, reconnaissance. WWII saw radar, pressurized cabins, and the first jets (Messerschmitt Me 262). 
        Post-war, commercial jets (Boeing 707, 1958) shrank the world. London to New York: 18 hours → 7 hours.
      </p>

      <h2 id="commercial-aviation-and-the-747">Commercial Aviation and the 747</h2>
      <p>
        Boeing 747 (1970) — the “Queen of the Skies” — carried 400+ passengers. Air travel became affordable. 
        Airport hubs, in-flight meals, frequent flyer miles — flying turned from luxury to routine. 4.5 billion passengers flew in 2019.
      </p>

      <h2 id="space-shuttle-drones-and-private-spaceflight">Space Shuttle, Drones, and Private Spaceflight</h2>
      <p>
        NASA’s Space Shuttle (1981) was a reusable spaceplane — launching satellites, building ISS. 
        Drones (2000s) revolutionized photography, delivery, warfare. SpaceX’s Falcon 9 (2015) landed vertically — slashing launch costs. 
        Tourists now orbit Earth. The sky is no longer the limit — it’s the starting line.
      </p>

      <h2 id="electric-planes-supersonic-revival-mars-helicopters">Electric Planes, Supersonic Revival, Mars Helicopters</h2>
      <p>
        Eviation Alice (2022) — all-electric commuter plane. Boom Overture — new supersonic jet (2029). 
        NASA’s Ingenuity (2021) — first powered flight on another planet (Mars). 
        The future? Electric VTOL air taxis, hypersonic travel, lunar bases.
      </p>

      <h2 id="conclusion-the-sky-was-never-the-limit">Conclusion: The Sky Was Never the Limit</h2>
      <p>
        Flight didn’t just change transportation — it changed perspective. From 30,000 feet, borders vanish. 
        From orbit, Earth is a fragile blue marble. The pioneers who dared to fly — and those who will fly to Mars — 
        remind us: human curiosity has no ceiling. The next horizon? Always farther.
      </p>
    `,
  },

  // ARTICLE 12: History of Computing
  {
    id: "computing-history",
    title: "History of Computing: From Counting Beads to Thinking Machines",
    date: "10 October 2025",
    time: "04:00 PM",
    category: "History",
    image: "/computing.jpg",
    description:
      "How calculation tools evolved into intelligent systems — and what that means for humanity’s future.",
    toc: [
      "Ancient Tools: Abacus, Astrolabe, Antikythera",
      "Mechanical Calculators: Pascal, Leibniz, Babbage",
      "WWII Codebreakers and the Birth of Modern Computing",
      "Transistors, Silicon Valley, and the PC Revolution",
      "Internet, Mobile, and the Cloud",
      "AI, Machine Learning, Neural Networks",
      "Quantum Computing and the Next Frontier",
      "Conclusion: Are We Building Tools — or New Minds?",
    ],
    content: `
      <p>
        Computing began with fingers and beads — now it predicts our desires and drives our cars. 
        This <strong>history of computing</strong> traces how humans built machines to calculate, then to think — 
        and how each leap reshaped science, war, business, and daily life.
      </p>

      <h2 id="ancient-tools-abacus-astrolabe-antikythera">Ancient Tools: Abacus, Astrolabe, Antikythera</h2>
      <p>
        Babylonians used counting boards (2700 BCE). Chinese abacus (200 BCE) — beads on rods — is still used today. 
        Greeks built the Antikythera Mechanism (100 BCE) — a 37-gear device predicting eclipses and Olympic games. 
        It was analog computing — 2,000 years ahead of its time.
      </p>

      <h2 id="mechanical-calculators-pascal-leibniz-babbage">Mechanical Calculators: Pascal, Leibniz, Babbage</h2>
      <p>
        Blaise Pascal’s calculator (1642) added/subtracted with gears. Gottfried Leibniz’s Stepped Reckoner (1673) multiplied/divided. 
        Charles Babbage designed the Analytical Engine (1837) — programmable with punch cards, memory, CPU. Ada Lovelace wrote the first algorithm — becoming the first programmer.
      </p>

      <h2 id="wwii-codebreakers-and-the-birth-of-modern-computing">WWII Codebreakers and the Birth of Modern Computing</h2>
      <p>
        Alan Turing’s Bombe (1940) cracked Nazi Enigma codes — shortening WWII by years. 
        ENIAC (1945) — first general-purpose electronic computer. Room-sized, vacuum-tube powered, programmed by rewiring. 
        Stored-program concept (von Neumann, 1945) let computers hold instructions in memory — the blueprint for all modern machines.
      </p>

      <h2 id="transistors-silicon-valley-and-the-pc-revolution">Transistors, Silicon Valley, and the PC Revolution</h2>
      <p>
        Transistors (1947) replaced vacuum tubes — smaller, cooler, more reliable. Integrated circuits (1958) packed thousands onto chips. 
        Intel (1968), Apple (1976), Microsoft (1975) — Silicon Valley was born. IBM PC (1981) + Windows (1985) brought computers to desks worldwide.
      </p>

      <h2 id="internet-mobile-and-the-cloud">Internet, Mobile, and the Cloud</h2>
      <p>
        ARPANET → Internet → World Wide Web (see Article 8). Laptops (1980s), smartphones (2007) — computing became personal and portable. 
        Cloud computing (2000s) — storage and processing moved online. Your photos, emails, apps — live on servers, not your device.
      </p>

      <h2 id="ai-machine-learning-neural-networks">AI, Machine Learning, Neural Networks</h2>
      <p>
        AI isn’t new — Turing proposed it in 1950. But data + computing power made it practical. 
        Machine learning (2010s) lets systems learn from examples — recognizing cats, translating languages, driving cars. 
        Neural networks mimic brains — powering ChatGPT, DALL-E, recommendation engines.
      </p>

      <h2 id="quantum-computing-and-the-next-frontier">Quantum Computing and the Next Frontier</h2>
      <p>
        Quantum computers (IBM, Google) use qubits — existing in multiple states at once. 
        They won’t replace laptops — but could break encryption, model molecules, optimize logistics in seconds. 
        We’re at the dawn of a new computing paradigm.
      </p>

      <h2 id="conclusion-are-we-building-tools-or-new-minds">Conclusion: Are We Building Tools — or New Minds?</h2>
      <p>
        From abacus to AI, computing has amplified human capability. But as machines generate art, hold conversations, and make decisions, 
        we face new questions: What is intelligence? Who’s responsible for AI’s actions? Can a machine be conscious? 
        The history of computing is the history of us — and its next chapter may redefine what “us” means.
      </p>
    `,
  },
];

export default blogs;
