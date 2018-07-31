# Alec Glassford
![slightly silly photo of Alec Glassford wearing a fox scarf](assets/me.jpg)

Hi. I'm a student + technologist + journalist + human. You'll find some more details about me and stuff I've worked on below, but of course you're not going to get a complete picture. Please feel free to just get in touch!

## Me, elsewhere
* [Keybase](https://keybase.io/alecglassford) - Send me an encrypted message, or see that other accounts are verifiably linked to this identity.
* [Twitter](https://twitter.com/alecglassford) - Although I've been on the site since middle school (!), I don't tweet very often. My DMs are open.
* [GitHub](https://github.com/alecglassford) - Some code I've written is here! Some I've written (especially for class or work) is not.
* [LinkedIn](https://www.linkedin.com/in/alecglassford) - This communicates my educational and work experiences pretty effectively. My [resume](assets/alec-glassford-resume-2018-01-03.pdf) sums up much of it too.
* [MuckRock](https://www.muckrock.com/accounts/profile/alec/) - Really trying to get on that FOIA Friday grind!

## [My own damn house 🏡](https://psmag.com/social-justice/toast-story-latest-artisanal-food-craze-72676)
* [read](https://read.alec.casa) - I've been trying to keep track of what I read online, and you are welcome to take a peek. The technical setup here is lots of fun too: bookmarklets, [a teesny Glitch server](https://glitch.com/edit/#!/alec-reads), using D3 for templating, etc. I'll write more about this in the future.
* [blog](https://blog.alec.casa) - There is a blog here. It's pretty empty.
* [vere](https://vere.alec.casa) - A tiny podcast diary I made to (sort of) document the end of college.
* [roar](https://roar.alec.casa) - ? 🦁 ? 🌊 ?
* [ends](https://ends.alec.casa) - Pure silliness, feat. LCD Soundsystem.

## Things I've worked on

What appears here is definitely not comprehensive.

### Ongoing

* Getting my master's in journalism at Stanford - You should really look at my [resume](assets/alec-glassford-resume-2018-01-03.pdf) if you want to know more about this sort of thing.

* [The Stanford Storytelling Project](https://storytelling.stanford.edu) - I maintain the website and do other technical tasks (e.g. organize audio and build the podcast feed) for this truly incredible group that works with storytelling in many forms. I do some radio production too.

### Projects
In roughly reverse chronological order.
* [Twarc](https://twarc.glitch.me/) - A super simple service anyone can use to archive a Twitter user's timeline in about 5 seconds (no code to write, no API key necessary, just enter a simple URL). Made in Glitch, and designed/documented for remixing. [I wrote a bit more on it here.](https://twitter.com/alecglassford/status/937108649222139904)
* [Palo Alto evaluating regulations to improve safety of seismically vulnerable buildings](http://peninsulapress.com/2017/11/17/palo-alto-evaluating-regulations-to-improve-safety-of-seismically-vulnerable-buildings/) - I wrote about the risks some buildings in Palo Alto could face in an earthquake and some of the steps the city is considering taking to improve safety.
* [Nonprofit Explorer](https://projects.propublica.org/nonprofits/) - As a news application fellow during summer 2017, I made some significant updates to this news application, one of [ProPublica](https://propublica.org)'s most popular. (It helps you research nonprofit organizations, primarily by making their Form 990 IRS filings easy to browse). I made millions of filings that the IRS had recently released in XML format accessible in the app (in the raw machine-readable format and also styled by [XSLT](https://en.wikipedia.org/wiki/XSLT) into more human-friendly versions). [I wrote a blog post going into that work in some more detail.](https://www.propublica.org/nerds/nonprofit-explorer-update-full-text-of-nearly-two-million-records) I also added PDFs of audits for some organizations to the app, restyled it to better match ProPublica's more recent news applications, and did other maintenance. I learned a lot about Ruby and Rails! And got to practice writing SQL + doing data spot-checking and analysis with csvkit and other command line tools.
* [Documenting Hate News Index](https://projects.propublica.org/hate-news-index/) - Did a small amount of work on this news application while I was at ProPublica (just a bit: you can see my name is really small at the bottom). Basically just maintaining it briefly and debugging some issues with the data pipeline; it was a good experience working with some bits of Google Cloud Platform and collaborating with Google News Lab.
* [Data is the new](https://twitter.com/dataisthenew) - I made this little Twitter bot that searches Twitter for "data is the new \_" and it tells you how people are filling in that blank. "Data is the new oil" is popular, but I find "data is the new asbestos" a bit more interesting. [Here's the code on Glitch, and more on the backstory.](https://glitch.com/~dataisthenew)
* [Call Collect](https://hackdash.org/projects/5918b5994545fa01a8db176c) - At the wonderful [Come and Play](http://comeandplay.org/) audio hackathon, my team made this tool that helps radio/podcast producers source audio from their listeners: it's a super simple interface for building custom hotlines with the Twilio API. Not usable right now, but look out for something soon …
* Essays on Taylor Swift et al. - For a creative writing tutorial, I wrote a series of personal essays ostensibly about Taylor Swift, though they are also about a bunch of stuff that is not Taylor Swift. 🤷‍♀️ These are unpublished but I'd like to revisit them, and if you'd ever like to talk about them, I would probably be happy to.
* [Toast and Tea](https://github.com/alecglassford/facebook-poetry) - A project I worked on with friends at [Codex Hackathon 2017](http://codexhackathon.com/): It's a Chrome extension that inserts poetry into your Facebook news feed.
* [New Yorker Department Browser](https://alecglassford.github.io/new-yorker-sections/) - Another project I worked on at [Codex Hackathon 2017](http://codexhackathon.com/): Mainly, I scraped a dataset of all *New Yorker* magazine articles from the last 10 years or so with their authors and "departments" (which are the funnest thing in the world, because, you know, they usually aren't real departments as most of us think of the term). And then I made this pretty unsatisfying visualization, which I hope to improve when I have some time. I'd also love to combine gender analysis of author names (see below) to see who writes for which departments.
* [Breaking News Consumer Handbook Bot](http://bnch.glitch.me/) - Inspired by [On the Media](https://www.wnyc.org/shows/otm/) and [Paul Ford](https://twitter.com/ftrain/status/754046492177010688), I made a little Twitter bot that tweets out the invaluable [Breaking News Consumer's Handbooks](https://www.wnyc.org/series/breaking-news-consumers-handbook/). Most of the effort was data wrangling, and it doesn't work super robustly since it's deployed on Glitch, which is a gorgeous, fun platform that I was delighted to play with but is not particularly suited to production (the bot sleeps a lot). Maybe I'll redeploy it somewhere more appropriate at some point. But yay for media literacy!
* [Patterns in the Pulitzer Prize and National Book Award for Fiction and Poetry](https://alecglassford.github.io/literary-prizes/) - A wee visualization comparing nominees and winners of these prizes.
* [Visualizing Literary Influence in the Paris Review Interviews](https://stanford.edu/~gla/paris/) - A visualization tool for exploring the connections between some of modernity's greatest makers of literature. Check out [the accompanying paper](assets/visualizing-paris-review.pdf) I wrote too.
* [Too Many Slacks](https://github.com/alecglassford/too-many-slacks) - A tool for making deep links to Slack teams for your iOS homescreen.
* [Scroll percentage widget](https://github.com/alecglassford/percent-scroll-widget) - A tiny Chrome extension I made for myself so I could see how far down a webpage I had scrolled. Is this really a good idea for my attention span/mental wellbeing? I don't know! [It's in the Chrome Web Store though.](https://chrome.google.com/webstore/detail/percent-scroll-widget/cgchlengahipakmdkopgeheagmlcifep)
* ["Time Searcher"](https://alecglassford.github.io/time-searcher/) - My first major exploration with D3.js. I can't take any credit for the design here; the details of the class assignment this was built for are linked through from the app itself.
* [Bikopticon](https://bikopticon.surge.sh/) - A slightly rushed final project for my computational journalism class that allows you to explore bike counter data from around Seattle in a maybe not super user-friendly way. I loved working with the [Dark Sky](https://darksky.net) API though—it's awesome! And using Surge and Frozen Flask too.
* [Detecting Deceptive Opinion Spam](assets/detecting-deceptive-opinion-spam.pdf) - Final research paper on a text classification project for my natural language understanding class.
* [King County food inspections](https://safe-dawn-87291.herokuapp.com/) - A tool to quickly browse restaurant inspections in the Seattle area, made for my computational journalism class.
* ["Automated Gender Analysis of New Yorker Bylines"](https://github.com/alecglassford/compciv-2016/blob/master/projects/gender-detector-data/README.md) - An analysis of the gender breakdown of bylines from *The New Yorker*, my final project for "Computational Methods in the Civic Sphere." Did some fun web scraping and plotting. I still want to expand on this to look at particular sections!
