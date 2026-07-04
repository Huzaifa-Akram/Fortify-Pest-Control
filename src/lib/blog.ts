export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  date: string;
  readTime: string;
  image: string;
  /** Paragraphs in order. Items prefixed with "## " render as <h2> section headings. */
  body: string[];
  featured?: boolean;
};

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/** Formats an ISO date ("2026-06-20") as "June 20, 2026" without relying on runtime locale. */
export function formatBlogDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  return `${MONTHS[month - 1]} ${day}, ${year}`;
}

export const blogCategories = [
  "Prevention Tips",
  "Seasonal Pests",
  "Rodent Control",
  "Bed Bug Control",
  "Cockroach Control",
  "Commercial Pest Control",
  "Pest Facts",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "manitoba-pest-control-guide",
    title: "The Manitoba Homeowner's Guide to Year-Round Pest Control",
    excerpt:
      "From spring ants to winter mice, Manitoba's extreme seasons drive pests indoors all year. Here's your season-by-season plan for a clean, healthy, pest-free home.",
    category: "Prevention Tips",
    tags: ["seasonal guide", "prevention", "manitoba homes"],
    date: "2026-07-03",
    readTime: "7 min read",
    image: "/blog/manitoba-pest-control-guide.jpg",
    body: [
      "Manitoba is a province of extremes, from minus-thirty January nights to hot, humid July afternoons, and every one of those swings changes how pests behave around your home. What works against ants in May does nothing against mice in November. That's why the most effective pest control in Manitoba isn't a one-time reaction to a problem; it's a year-round rhythm that matches the seasons. Here's what homeowners in Winnipeg, Brandon, Steinbach, and communities across Manitoba should be doing, season by season.",
      "## Spring: ants lead the charge",
      "As the ground thaws, dormant ant colonies wake up hungry, and scout ants start probing homes for food and moisture. Carpenter ants are the ones to take seriously: they nest in moisture-damaged wood around windows, decks, and rooflines, and left alone they'll move into structural framing. Spring is the season to walk your property: seal cracks in the foundation, trim branches away from the roofline, and fix any wood that stayed wet over winter. If you're seeing steady ant trails indoors by late April, the colony is already established and a targeted inspection will save you a summer of frustration.",
      "## Summer: wasps, hornets & spiders take over",
      "By midsummer, wasp and hornet colonies reach full size, and nests near doorways, decks, and play areas become genuinely dangerous: a disturbed nest can send dozens of stinging defenders after a single perceived threat. Never knock down an active nest yourself; professional removal handles it safely in one visit. Summer is also when spider activity climbs, with webs reappearing around porch lights and eaves within days of clearing them. Reducing exterior lighting near entrances and keeping vegetation off the siding takes away both the prey insects and the spiders that follow them.",
      "## Fall: maple bugs swarm and mice move in",
      "Fall in Manitoba means two things: maple bugs blanketing sun-warmed walls, and rodents looking for a heated place to spend the winter. Maple bugs (boxelder bugs) gather on south- and west-facing siding in September and slip through gaps to overwinter inside your walls. Mice do the same, and they only need a gap the size of a dime. September and October are the highest-value months of the year for exclusion work: sealing gaps around pipes, vents, doors, and the foundation before the first hard frost pushes everything indoors.",
      "## Winter: rodents settle into your walls",
      "Once snow is on the ground, any mice or rats that made it inside have no reason to leave: food, warmth, and nesting material are all within reach. Scratching in walls at night, droppings near food storage, and gnawed packaging are the classic signs. Winter infestations grow quietly because rodents breed indoors year-round, so a couple of mice in December can be a full infestation by March. If you hear or see the signs, act right away rather than waiting for spring.",
      "## Five habits that keep pests out all year",
      "The homes we see with the fewest pest problems share the same habits: they store food (including pet food) in sealed containers, fix plumbing leaks and standing moisture promptly, keep firewood and debris away from exterior walls, seal new gaps and cracks as they appear, and get a professional inspection before small signs become big problems. None of these are complicated. The difference is doing them consistently, in the right season.",
      "Fortify Pest Control provides residential and commercial pest control across Winnipeg, Brandon, Winkler, Morden, Selkirk, and Steinbach. If you'd rather have a certified technician build that seasonal plan for you, book a free inspection and we'll tailor it to your property.",
    ],
  },
  {
    slug: "mice-removal-winnipeg",
    title: "Mice Removal in Winnipeg: Fast, Safe & Effective Solutions",
    excerpt:
      "Hearing scratching in the walls of your Winnipeg home or business? Here's why mice get in, why traps alone rarely work, and how professional mice removal solves it for good.",
    category: "Rodent Control",
    tags: ["mice removal", "winnipeg", "rodent control"],
    date: "2026-07-01",
    readTime: "6 min read",
    image: "/blog/mice-removal-winnipeg.jpg",
    body: [
      "Few sounds are more unsettling than scratching inside a wall at night, and in Winnipeg, it's one of the most common calls we get. Our long, harsh winters make heated buildings irresistible to mice, and once a pair gets inside, the problem grows fast: a single female mouse can produce a new litter every three to four weeks, all year round, as long as she's warm and fed.",
      "## Why Winnipeg homes attract mice",
      "House mice and deer mice both thrive across Winnipeg and surrounding communities, and both treat the cold season as a signal to move indoors. Older neighbourhoods with stone or cracked foundations, homes with attached garages, and properties backing onto parks, riverbanks, or open fields see the heaviest pressure. Mice follow warmth and food odours to your exterior walls, then squeeze through gaps around utility lines, dryer vents, garage door seals, and foundation cracks: any opening the size of a dime is a doorway.",
      "## Signs you need mice removal",
      "The earliest indicators are small dark droppings in drawers, cupboards, or along baseboards; scratching or skittering sounds in walls and ceilings at night; gnaw marks on food packaging or wiring; and greasy rub marks along the routes mice travel repeatedly. A musty ammonia-like smell in enclosed spaces usually means the activity is well established. If you're seeing mice during the day, the population is already large enough that hidden nesting sites are full.",
      "## Why traps alone rarely solve the problem",
      "Store-bought traps catch the boldest mice, and leave the cautious ones to keep breeding. Worse, traps do nothing about the entry points, so even a successful trapping effort is quickly undone by the next wave moving in from outside. Poison baits used without tamper-resistant stations create risks for kids and pets, and mice that die inside wall voids create odour problems that are expensive to fix. Effective mice removal has to deal with the mice inside, the openings they used, and the conditions that attracted them, all three, or the problem comes back.",
      "## How professional mice removal works",
      "A professional service starts with a full inspection: mapping active runways, nesting areas, and every entry point on the building envelope. From there, safe tamper-resistant bait stations and strategically placed traps remove the existing population, while exclusion work, sealing gaps around pipes, vents, foundations, and doors, closes the building so replacements can't follow. Follow-up visits confirm activity has stopped rather than just slowed. It's the difference between catching mice and actually being done with mice.",
      "Fortify Pest Control provides fast, discreet mice removal for homes and businesses across Winnipeg and Manitoba, backed by a satisfaction guarantee. Book a free inspection and get a clear plan and a firm quote before any work begins.",
    ],
  },
  {
    slug: "how-to-check-for-bed-bugs",
    title: "How to Check for Bed Bugs: Detection Techniques That Work Fast",
    excerpt:
      "Bed bugs are easiest to eliminate when caught early. Learn the same inspection techniques professionals use to find infestations fast, and what to do if you find one.",
    category: "Bed Bug Control",
    tags: ["bed bugs", "inspection", "early detection"],
    date: "2026-06-29",
    readTime: "5 min read",
    image: "/blog/how-to-check-for-bed-bugs.jpg",
    body: [
      "The cost and stress of a bed bug problem depends almost entirely on one thing: how early you catch it. A few bugs on one mattress is a quick, contained treatment. The same infestation six months later can involve multiple rooms, furniture, and repeat visits. The good news is that a thorough check takes about ten minutes, and you can use the same techniques professional inspectors rely on.",
      "## Where bed bugs actually hide",
      "Bed bugs feed at night and spend the day hiding within a couple of metres of where people sleep. Their flattened bodies fit into spaces as thin as a credit card: mattress seams and piping, the joints and screw holes of bed frames, behind headboards, inside box spring dust covers, and along the edges of nearby baseboards. They are not a sign of a dirty home: they hitchhike in on luggage, used furniture, and clothing, which is why even spotless homes and hotels get them.",
      "## The 10-minute mattress inspection",
      "Strip the bedding and work with a bright flashlight. Run the edge of a credit card slowly along every mattress seam, lifting the piping as you go: you're looking for live bugs (apple-seed sized, reddish-brown), tiny pearl-white eggs, translucent shed skins, and the most reliable evidence of all: clusters of small rust-coloured or black spots, which are bed bug droppings. Check both sides of the mattress, then the box spring, paying special attention to corners and the underside fabric. Finally, inspect the bed frame joints and behind the headboard: in many infestations, that's where the majority of bugs actually rest.",
      "## Check beyond the bed",
      "If you find evidence on the mattress, or you're checking after travel or a used-furniture purchase, widen the search. Inspect nightstand drawers and undersides, couch seams and cushion zippers, the edge where carpet meets baseboard, and electrical outlet covers near the bed. After any trip, inspect luggage seams before bringing suitcases into the bedroom, and wash travel clothing in hot water. These few minutes of checking are how most early catches happen.",
      "## Found something? Do this, not that",
      "If you find signs, resist two common instincts: don't start sleeping in another room (bed bugs will follow you and spread the infestation), and don't blanket the room in store-bought sprays (they scatter bugs into walls and neighbouring rooms, making professional treatment harder). Instead, bag and hot-wash your bedding, leave the mattress where it is, and get a professional inspection to confirm the extent. Targeted treatment at every life stage (eggs, nymphs, and adults) is what actually ends an infestation.",
      "Fortify Pest Control provides discreet bed bug inspections and treatment across Winnipeg and Manitoba, with follow-up visits to confirm complete elimination. If your check turned up anything suspicious, call us before it spreads.",
    ],
  },
  {
    slug: "cockroach-control-winnipeg",
    title: "Cockroach Control in Winnipeg: The Complete Guide",
    excerpt:
      "Everything Winnipeg homeowners and businesses need to know about cockroach control: how roaches get in, why DIY sprays backfire, and what professional treatment involves.",
    category: "Cockroach Control",
    tags: ["cockroaches", "winnipeg", "pest control"],
    date: "2026-06-27",
    readTime: "6 min read",
    image: "/blog/cockroach-control-winnipeg.jpg",
    body: [
      "Manitoba winters kill a lot of pests, but not cockroaches. Living entirely indoors, roaches don't care whether it's minus thirty outside, which is why cockroach control is a year-round concern for Winnipeg homes, apartments, and businesses. The dominant species here is the German cockroach: small, fast-breeding, and capable of going from a few stowaways to a full infestation in a couple of months.",
      "## How cockroaches get into Winnipeg homes",
      "Cockroaches almost never walk in from the yard: they're carried in. The most common routes are cardboard delivery boxes, grocery bags, second-hand appliances and furniture (especially microwaves, fridges, and couches), and in multi-family buildings, movement between units through wall voids and shared plumbing lines. That last route matters: in apartments and condos, treating one unit while the neighbouring unit stays infested is a losing battle, which is why building-wide coordination is often part of a real solution.",
      "## Know the signs early",
      "Cockroaches are nocturnal, so seeing one during the day usually means the hidden population is significant. Other signs include pepper-like droppings in drawers and along shelf edges, egg cases (small brown capsules) tucked into cracks, a musty oily odour in kitchens or bathrooms, and smear marks in humid areas. The hotspots are always the same: behind and under fridges and stoves, inside cabinet hinges and corners, under sinks, and anywhere warm, dark, and close to water.",
      "## Why DIY sprays make it worse",
      "Store-bought aerosol sprays are repellents: roaches detect them and scatter, driving the infestation deeper into walls and into rooms that were previously clean. Bug bombs are worse still, pushing roaches into neighbouring units while leaving eggs untouched. German cockroaches have also developed resistance to many over-the-counter products. Professional-grade gel baits work on the opposite principle: roaches eat the bait, return to the harbourage, and poison the rest of the colony, including the ones you never see.",
      "## What professional cockroach control involves",
      "A professional treatment starts with an inspection to map harbourage areas, then combines targeted gel baiting, residual treatments in cracks and voids, and monitors to measure activity. You'll also get specific sanitation guidance: fixing the leak under the sink or sealing the gap behind the stove matters as much as the treatment itself. Follow-up visits confirm the population is collapsing rather than relocating. For restaurants and food businesses, a recurring program with documented monitoring is the standard health inspectors expect to see.",
      "Fortify Pest Control eliminates cockroach infestations in homes, apartments, and businesses across Winnipeg and Manitoba. Book a free inspection: the earlier a roach problem is confirmed, the faster and cheaper it is to end.",
    ],
  },
  {
    slug: "rodent-control-manitoba",
    title: "Rodent Control in Manitoba: Protect Your Home from Rats & Mice",
    excerpt:
      "Rats and mice cause fires, contaminate food, and spread disease, and Manitoba's climate drives them indoors hard. Here's how effective rodent control protects your home.",
    category: "Rodent Control",
    tags: ["rodent control", "mice & rats", "exclusion"],
    date: "2026-06-25",
    readTime: "6 min read",
    image: "/blog/rodent-control-manitoba.jpg",
    body: [
      "From Winnipeg apartment blocks to acreages outside Brandon, rodents are Manitoba's most persistent pest problem. House mice, deer mice, and Norway rats all do well here, and our climate works in their favour: a long, brutal winter that makes every heated building a target, and a short summer that lets populations explode outdoors before the fall push inside.",
      "## The real cost of a rodent problem",
      "Rodents aren't just unpleasant: they're expensive and genuinely hazardous. Their constant gnawing damages wiring (a known cause of house fires), plumbing, and structural wood. They shred insulation for nesting, contaminate far more food than they eat, and their droppings and urine carry health risks. Deer mice in particular can carry hantavirus, which is why droppings in sheds, garages, and cabins should never be swept up dry. For businesses, a single rodent sighting can mean a failed inspection or a lost customer.",
      "## Warning signs to catch early",
      "Droppings are usually the first evidence: small and dark, concentrated along walls, in cupboards, and near food. Listen for scratching or scurrying in walls and ceilings at night, and look for gnaw marks on packaging and wires, greasy rub marks along baseboards, and shredded paper or insulation in hidden corners. Outdoors, burrows along foundations and gnawed openings around vents or garage doors signal rats. The rule with rodents is simple: if you see one sign, assume there's more activity than you can see.",
      "## Exclusion: the heart of effective rodent control",
      "Traps and bait remove the rodents that are inside today. Exclusion is what stops the ones coming tomorrow. Mice pass through dime-sized gaps and rats through quarter-sized ones, so effective rodent control means a full audit of the building envelope: utility and gas line penetrations, dryer and attic vents, garage door seals, foundation cracks, and gaps under exterior doors. Professional exclusion seals these with rodent-proof materials like steel mesh and metal flashing, because determined rodents chew straight through foam and caulking alone.",
      "## Rural and small-town Manitoba: extra pressure",
      "Outside the city, rodent pressure runs even higher. Properties in and around Winkler, Morden, Steinbach, and Selkirk deal with field mice migrating in after harvest, plus outbuildings, grain storage, and firewood piles that shelter populations year-round. For these properties, keeping vegetation cut back from structures, storing feed in sealed metal containers, and maintaining permanent tamper-resistant bait stations around the perimeter makes the difference between the odd mouse and an annual infestation.",
      "Fortify Pest Control provides complete rodent control (inspection, removal, and exclusion) for homes, farms, and businesses across Manitoba. Book a free inspection and get a permanent plan, not just a box of traps.",
    ],
  },
  {
    slug: "bed-bug-treatment-winnipeg",
    title: "Bed Bug Treatment in Winnipeg: What Actually Works",
    excerpt:
      "Bed bugs won't leave on their own, and DIY sprays usually spread them. Here's what professional bed bug treatment in Winnipeg involves, and how to prepare for it.",
    category: "Bed Bug Control",
    tags: ["bed bugs", "treatment", "winnipeg"],
    date: "2026-06-23",
    readTime: "6 min read",
    image: "/blog/bed-bug-treatment-winnipeg.jpg",
    body: [
      "Bed bugs are one of the few pests that almost no one beats without help. They hide in spaces thinner than a credit card, survive months without feeding, and their eggs shrug off most store-bought products. Winnipeg sees steady bed bug activity year-round, in houses, apartments, hotels, and care facilities alike, and the pattern is always the same: the longer an infestation is left, the more rooms, furniture, and neighbouring units it reaches.",
      "## Why bed bugs are so hard to eliminate",
      "Three things make bed bugs uniquely stubborn. First, they're expert hiders: by day they tuck into mattress seams, bed frame joints, baseboard gaps, and outlet boxes, so surface sprays never touch most of the population. Second, their eggs are resistant to most consumer insecticides, meaning a treatment that kills every visible bug can be undone two weeks later when the next generation hatches. Third, they hitchhike, on luggage, clothing, and used furniture, so reintroduction is always a risk. Any treatment that doesn't account for all three fails.",
      "## What professional treatment involves",
      "Professional bed bug treatment starts with a detailed inspection of mattresses, furniture, and baseboards to map exactly where the infestation lives, not just the bed, but every harbourage in the room and adjacent spaces. Treatment then targets every life stage: eggs, nymphs, and adults, using products and application methods that reach into the cracks and voids where bed bugs actually rest. Because eggs laid before treatment can hatch afterward, follow-up visits are built in to catch and eliminate any survivors. That follow-through is the difference between suppressing an infestation and ending it.",
      "## How to prepare your home for treatment",
      "Good preparation makes treatment dramatically more effective. Wash bedding and clothing on hot and dry on high, then seal them in bags until treatment is done. Reduce clutter around sleeping areas so there are fewer places to hide, but don't move items to other rooms or homes, which spreads the bugs. Leave mattresses and furniture in place; moving them scatters the infestation. Your technician will give you a specific checklist before the visit.",
      "## Apartments, hotels & care facilities",
      "In multi-unit buildings, bed bugs travel between units through wall voids and along pipes, so treating a single suite often isn't enough: inspection of adjacent units is the professional standard. For hotels and care homes, discretion and speed matter as much as effectiveness, and a documented inspection-and-treatment protocol protects both residents and reputation. Fortify works with landlords, property managers, and business owners across Winnipeg to handle these situations quietly and thoroughly.",
      "If you've confirmed bed bugs, or even just suspect them, don't wait and don't spray. Book a discreet inspection with Fortify Pest Control and get a clear treatment plan with follow-up visits to confirm complete elimination.",
    ],
  },
  {
    slug: "signs-of-a-bed-bug-infestation",
    title: "5 Early Signs of a Bed Bug Infestation",
    excerpt:
      "Bed bugs are masters at staying hidden. Here's what to look for before a small problem turns into a full-blown infestation.",
    category: "Bed Bug Control",
    tags: ["bed bugs", "warning signs", "prevention"],
    date: "2026-06-20",
    readTime: "4 min read",
    image: "/services/bed-bug-control.png",
    featured: true,
    body: [
      "Bed bugs are experts at hiding in seams, joints, and dark corners, which is exactly why most homeowners don't notice them until the problem has already grown. Catching an infestation early makes treatment faster, less invasive, and considerably less stressful.",
      "The most reliable early sign is small rust-coloured or dark spots on mattress seams and sheets: these are bed bug droppings, not blood, and they tend to cluster near where the bugs rest during the day. A musty, sweetish odour in the bedroom is another common tell, especially in larger infestations.",
      "Waking up with itchy bites in a line or cluster, particularly on skin that was exposed while sleeping, is often the first thing people notice. Unfortunately, not everyone reacts to bites, so the absence of marks doesn't rule bed bugs out.",
      "If you spot any of these signs, resist the urge to treat it yourself with store-bought sprays: they often scatter the infestation into new areas of the home instead of eliminating it. A professional inspection confirms exactly what you're dealing with and where, so treatment can target the source.",
    ],
  },
  {
    slug: "how-to-get-rid-of-cockroaches",
    title: "How to Get Rid of Cockroaches for Good: Homes & Businesses",
    excerpt:
      "A practical, step-by-step plan for getting rid of cockroaches permanently (sanitation, baiting, sealing) and when professional cockroach control is the smarter call.",
    category: "Cockroach Control",
    tags: ["cockroaches", "diy tips", "sanitation"],
    date: "2026-06-17",
    readTime: "5 min read",
    image: "/blog/how-to-get-rid-of-cockroaches.jpg",
    body: [
      "Cockroaches are survivors: they've outlasted practically everything nature has thrown at them, and they'll outlast a can of spray too. Getting rid of roaches for good isn't about one dramatic attack; it's about removing what sustains them, hitting the colony where it lives, and closing the doors behind it. Here's the plan, in order.",
      "## Step 1: Cut off food and water",
      "A cockroach can live for weeks without food but only about a week without water, so moisture is your first target. Fix dripping taps and leaking pipes, dry sinks overnight, and empty pet water bowls before bed. Then remove the food supply: sealed containers for everything in the pantry, nightly wipe-downs of counters and stovetops, dishes done before bed, garbage in a lidded bin, and (the one everyone misses) degreasing the areas behind and beside the stove, where splatter feeds a colony indefinitely.",
      "## Step 2: Bait, don't spray",
      "This is where most DIY efforts go wrong. Repellent aerosol sprays scatter cockroaches into walls and new rooms, spreading the problem while leaving eggs untouched. Gel baits do the opposite: foraging roaches eat the bait and carry it back to the harbourage, killing the colony at its source. Place small dots of bait in corners under sinks, inside cabinet hinges, and near appliance motors: anywhere warm, dark, and near water. Be patient and don't spray near baits; you'll undo their work.",
      "## Step 3: Seal the harbourage",
      "Roaches spend most of their lives packed into cracks and voids. Caulk the gaps where pipes enter walls under your sinks, seal cracks along baseboards and backsplashes, and in apartments, pay special attention to shared plumbing walls: that's the highway between units. Breaking down and removing cardboard boxes quickly matters too: corrugated cardboard is both a favourite hiding spot and how many infestations arrive in the first place.",
      "## When professional control is the smarter call",
      "If you're still seeing roaches after two to three weeks of disciplined baiting and sanitation, or if you're seeing them during the day, which signals a large hidden population, the infestation has likely outgrown DIY methods. German cockroaches breed too quickly for half-measures. For businesses, the math is even simpler: one sighting by a customer or health inspector costs more than a year of professional service. A professional program combines commercial-grade baits, residual treatments in voids you can't reach, and monitoring that proves the problem is gone.",
      "Fortify Pest Control eliminates cockroach infestations for homes and businesses across Winnipeg and Manitoba, with prevention guidance so they don't come back. Book a free inspection today.",
    ],
  },
  {
    slug: "maple-bugs-manitoba",
    title: "Maple Bugs in Manitoba: How to Get Rid of Boxelder Bugs",
    excerpt:
      "Every fall, maple bugs swarm sun-warmed walls across Manitoba and slip inside to overwinter. Here's why your house attracts them, and how to keep them out for good.",
    category: "Seasonal Pests",
    tags: ["maple bugs", "boxelder bugs", "fall prevention"],
    date: "2026-06-12",
    readTime: "5 min read",
    image: "/blog/maple-bugs-manitoba.jpg",
    body: [
      "Few pests are more distinctly Manitoban than the maple bug. Every September, these black-and-red insects appear by the hundreds on sun-warmed siding across the province, and by October, they're finding their way into bedrooms and window sills. Known elsewhere as the boxelder bug, the maple bug is harmless to people and pets, but in the numbers Manitoba sees, 'harmless' doesn't mean 'welcome.'",
      "## What are maple bugs, exactly?",
      "Maple bugs are about half an inch long, charcoal black with distinctive red-orange markings along their backs. They feed on the seeds of Manitoba maple trees (also called boxelder), which are everywhere in our river valleys, shelterbelts, and older neighbourhoods: one big reason the province gets such heavy swarms. They don't bite, don't breed indoors, and don't eat anything in your house. Their offence is showing up in overwhelming numbers, and occasionally leaving stains when crushed.",
      "## Why they swarm your house every fall",
      "As days shorten, maple bugs start looking for a protected place to spend the winter, and a building beats a tree stump every time. They gather on the warmest surfaces available: south- and west-facing walls that soak up afternoon sun, especially light-coloured siding. From there, they work their way into gaps around window frames, siding edges, soffits, and door thresholds, settling into wall voids to wait out the cold. On warm winter days, some wake up confused and wander into your living space, which is why you find them on windows in February.",
      "## Do maple bugs cause damage?",
      "Structurally, no: they don't chew wood, wiring, or fabric. The practical problems are cosmetic and psychological: their droppings can spot curtains and walls, crushed bugs stain surfaces reddish-orange, and sharing a bedroom window with dozens of insects wears thin quickly. Because they release an odour when crushed, squishing them indoors is a bad plan; a vacuum (emptied outside) is the cleaner way to deal with the ones already in.",
      "## How to get rid of maple bugs and keep them out",
      "Timing is everything. The effective window is late summer and early fall, before the bugs get inside: sealing gaps around windows, doors, siding, and soffits, combined with a professional exterior treatment on the walls where they gather. Once maple bugs are inside your wall voids for the winter, treatment options shrink: spraying inside walls isn't practical, and you're mostly managing stragglers until spring. That's why an annual fall prevention treatment is the standard approach for homes that get hit hard year after year.",
      "Fortify Pest Control provides exterior maple bug treatments and entry-point sealing across Winnipeg and Manitoba. If your walls turn black and red every September, book your fall prevention treatment before the swarm starts.",
    ],
  },
  {
    slug: "how-to-get-rid-of-mice-in-your-house",
    title: "How to Get Rid of Mice in Your House: 7 Steps That Work",
    excerpt:
      "A practical 7-step plan to get rid of mice in your house: confirm the problem, seal entry points, trap effectively, and know when to call a professional.",
    category: "Rodent Control",
    tags: ["mice", "diy tips", "exclusion"],
    date: "2026-06-10",
    readTime: "6 min read",
    image: "/blog/how-to-get-rid-of-mice.jpg",
    body: [
      "Mice in the house is one of those problems that never fixes itself: a single breeding pair can turn into dozens of mice in a few months, all while chewing wiring and contaminating your kitchen. The internet is full of half-measures; here's the complete sequence that actually works, in the order that matters.",
      "## Step 1: Confirm what you're dealing with",
      "Before anything else, verify it's mice and find where they're active. Mouse droppings are rice-grain sized with pointed ends (rat droppings are much larger); you'll find them along baseboards, in cupboards, and under sinks. Fresh droppings are dark and soft, old ones grey and crumbly; that difference tells you whether activity is current. Note where you find droppings and gnawing; those locations guide everything that follows.",
      "## Steps 2 & 3: Find the entry points, then seal them",
      "Walk the outside of your house slowly and check everywhere a mouse could enter: gaps around gas and utility lines, dryer vents, garage door seals, foundation cracks, and under exterior doors. A mouse fits through anything the size of a dime. Seal what you find with steel wool packed tight and backed with caulking, or with metal flashing for bigger gaps, since mice chew through foam sealant alone. Sealing is the single highest-value step on this list: skip it, and every mouse you catch is replaced by a new one from outside.",
      "## Steps 4 & 5: Remove food and nesting material",
      "Move pantry staples, pet food, and birdseed into sealed glass or metal containers: a bag of dog food in the garage is a mouse buffet. Clean under appliances where crumbs collect, and don't leave dishes out overnight. Then remove shelter: declutter storage areas, get cardboard boxes off the floor, and keep firewood and debris away from exterior walls. Mice settle where food and cover sit close together; separate the two and your house gets much less inviting.",
      "## Steps 6 & 7: Trap strategically, then monitor",
      "Place snap traps perpendicular to walls, trigger-end against the baseboard, in the areas where you found droppings, since mice hug walls and rarely cross open floors. Bait with peanut butter, use more traps than feels necessary (a dozen is reasonable for a small infestation), and check them daily. After activity stops, keep a few traps out for two weeks and watch for new droppings. No new signs after two clean weeks usually means you got them.",
      "## When to call a professional",
      "If traps keep filling for more than a couple of weeks, if you hear activity inside walls or ceilings, if you smell dead mice you can't locate, or if droppings appear in a home with young kids or someone immunocompromised, bring in a professional. At that point the colony is established somewhere you can't reach, and a pro's inspection, tamper-resistant baiting, and exclusion work finishes the job faster and more safely than another round of hardware-store traps.",
      "Fortify Pest Control handles mice removal and exclusion for homes across Winnipeg and Manitoba, with a satisfaction guarantee. If the DIY route has stalled, book a free inspection and we'll find what was missed.",
    ],
  },
  {
    slug: "why-ants-invade-manitoba-homes-in-spring",
    title: "Why Ants Invade Manitoba Homes Every Spring",
    excerpt:
      "As the ground warms up, ant colonies wake up too, and your kitchen looks like a five-star buffet. Here's why it happens and how to stay ahead of it.",
    category: "Seasonal Pests",
    tags: ["ants", "spring pests", "prevention"],
    date: "2026-06-05",
    readTime: "5 min read",
    image: "/services/carpenter-ant-control.jpg",
    body: [
      "Every spring, as soil temperatures climb, dormant ant colonies across Manitoba become active again, and scouting ants start fanning out in search of food and moisture. Homes with easy entry points and reliable food sources become prime real estate almost overnight.",
      "Carpenter ants are especially active this time of year, often nesting in moisture-damaged wood around windows, decks, and rooflines before moving into structural framing. Argentine ants, by contrast, form massive interconnected colonies that can overwhelm a kitchen or bathroom in days once a single trail is established.",
      "Small cracks in foundations, gaps around utility lines, and overhanging tree branches that touch the roofline are the most common entry points. Trimming vegetation back from the house and sealing obvious gaps before the spring thaw goes a long way toward keeping colonies from ever finding a way in.",
      "If you're already seeing trails indoors, treating only the ants you can see rarely solves the problem: the colony and queen are almost always somewhere out of sight. A targeted inspection identifies the nest itself, not just the foraging trail leading to it.",
    ],
  },
  {
    slug: "keeping-mice-and-rats-out-this-winter",
    title: "Keeping Mice and Rats Out This Winter",
    excerpt:
      "Cold weather sends rodents looking for shelter, and your walls look pretty inviting. A few simple steps now can keep them out for good.",
    category: "Rodent Control",
    tags: ["rodents", "winter prevention", "exclusion"],
    date: "2026-05-22",
    readTime: "6 min read",
    image: "/services/rodent-control.jpg",
    body: [
      "As temperatures drop, mice and rats shift their focus from finding food to finding shelter, and a heated home or business is hard for them to resist. A mouse can squeeze through a gap the size of a dime, which means even a well-built home usually has more potential entry points than owners realize.",
      "The earliest signs of rodent activity are often small droppings near food storage, faint scratching sounds in walls or ceilings at night, and gnaw marks on food packaging or wiring. Rodents also leave greasy rub marks along baseboards and walls where they travel repeatedly.",
      "Sealing gaps around pipes, vents, and the foundation, keeping firewood and debris away from exterior walls, and storing food in sealed containers all reduce the odds of an infestation taking hold. Once rodents are inside, though, DIY traps rarely address the full scope of the problem.",
      "A thorough inspection maps out active entry points and nesting areas, so treatment and exclusion work together: removing the rodents that are already inside and sealing the building so new ones can't take their place.",
    ],
  },
  {
    slug: "wasp-nest-safety-what-homeowners-should-know",
    title: "Wasp Nest Safety: What Homeowners Should Know",
    excerpt:
      "Found a wasp nest near your door or deck? Here's what to know before you get anywhere near it.",
    category: "Pest Facts",
    tags: ["wasps", "nest safety", "homeowner tips"],
    date: "2026-05-10",
    readTime: "4 min read",
    image: "/services/wasp-control.jpg",
    body: [
      "Wasps become noticeably more aggressive in late summer as colonies reach their peak size and food sources become scarcer, making nests near doorways, decks, and playgrounds a real hazard for families and pets. Unlike bees, wasps can sting multiple times, and a disturbed nest can send dozens of wasps after a single perceived threat.",
      "Never attempt to knock down or spray a wasp nest yourself, especially if it's tucked into a wall void, soffit, or somewhere with limited escape room. Store-bought sprays often only agitate the colony without reaching the nest's core, leaving a bigger problem behind.",
      "If you notice wasps repeatedly entering a small gap in siding, a vent, or a hole in the ground, there's very likely a nest nearby even if you can't see it directly. Keep doors and windows closed, keep kids and pets away from the area, and avoid sudden movements near the entry point.",
      "Professional removal uses protective equipment and the right products to eliminate the nest safely in a single visit, along with treatment to discourage wasps from rebuilding in the same spot.",
    ],
  },
  {
    slug: "cockroach-prevention-for-restaurants",
    title: "Cockroach Prevention Tips for Restaurants & Commercial Kitchens",
    excerpt:
      "One cockroach sighting can cost a restaurant its reputation. Here's how commercial kitchens stay ahead of infestations year-round.",
    category: "Commercial Pest Control",
    tags: ["restaurants", "commercial pest control", "prevention"],
    date: "2026-04-28",
    readTime: "5 min read",
    image: "/services/cockroach-control.jpg",
    body: [
      "Commercial kitchens offer everything cockroaches need to thrive (consistent warmth, food debris, and moisture), which is why even well-run establishments can develop an infestation without regular preventative care. A single sighting by a customer or health inspector can do lasting damage to a restaurant's reputation.",
      "Cockroaches favour dark, humid harbourage areas: behind heavy equipment, inside wall voids near plumbing, and underneath dish stations where water pools. Nightly deep-cleaning of these hard-to-reach areas, not just visible surfaces, is one of the most effective prevention habits a kitchen can build.",
      "Sealing gaps around pipe penetrations, repairing leaking fixtures promptly, and storing dry goods in sealed containers all remove the conditions cockroaches depend on. Cardboard boxes from deliveries are a common way infestations enter a building in the first place, so breaking them down and removing them quickly matters more than most staff realize.",
      "A recurring commercial pest program combines routine inspections with targeted gel baiting and monitoring, catching activity early, well before it becomes visible to customers or shows up on a health inspection.",
    ],
  },
  {
    slug: "spider-season-in-southern-manitoba",
    title: "What to Expect During Spider Season in Manitoba",
    excerpt:
      "Late summer means more spider webs around the house. Here's why it happens and what actually helps.",
    category: "Seasonal Pests",
    tags: ["spiders", "seasonal pests", "manitoba"],
    date: "2026-04-14",
    readTime: "3 min read",
    image: "/services/spider-control.jpg",
    body: [
      "Spider activity around Manitoba homes tends to peak in late summer and early fall, as spiders reach full maturity and start looking for mates, and for many species, that means building webs in the most visible spots on your property. Porch lights, eaves, and doorways attract the flying insects spiders feed on, which in turn draws the spiders themselves.",
      "Most spiders found around homes in the region are harmless and are actually helping control other insect populations. Still, thick webbing across entryways and windows makes a property feel neglected, and a few species can deliver a painful bite if disturbed.",
      "Reducing outdoor lighting near entry points, clearing webs regularly before they re-establish, and sealing gaps around windows and siding all help reduce activity close to the house. Because spiders follow their food source, treating the insects they prey on is often just as important as treating the spiders directly.",
      "An exterior perimeter treatment combined with interior spot treatment knocks down both populations together, keeping webs from reappearing within days the way DIY sprays often allow.",
    ],
  },
];
