export const blogData = [
  {
    id: "0",
    date: "2/20/2022 1:32 AM",
    title: "New Template Haiku",
    subtitle: "Reaching Across Disciplines",
    text: ["Human & JS"],
  },
  {
    id: "1",
    date: "2/16/2022 10:31 PM",
    title: "Template",
    subtitle: "Subtitle Haiku",
    text: ["Sample Paragraph (first line)", "Sans the CSS"],
  },
  {
    id: "2",
    date: "2/15/2022",
    title: "Getting There",
    subtitle: "",
    text: [
      "I finally did it. I bombed an interview so completely it changed the way I am approaching my whole study plan.",
      "We're not talking imposter syndrome - we're talking literally forget how to write a for loop and a simple form. I was rustier than a shovel left out in a Seattle winter - and mortified to boot.",
      "Yeah, I know, I know, I've been telling everyone I'm going to fail interviews until I don't. That failure is the first step to being good. Blah, blah, blah. Still, the shame smarts. May as well use the heat productively. It's not like I'm going to give up. I've done worse spurred by spite, why not shame?",
      "So, as a form of self flagellation, I am forcing myself to pull data from 5 APIs in 5 days with a search form to filter results.",
      "I have until 2/19/2022 to complete at least these minimum requirements of the task. Anything I add - routing, blog, formatting is ancillary. Core goal/mvp is to simply have 5 of these by Friday",
      "So here we are - day 2 of this endeavor.",
      "Day 1 went not so swimmingly. I spent all day trying to get data from https://crashviewer.nhtsa.dot.gov/CrashAPI/. It worked on Postman. It worked in my browser. It did not work using fetch or an xml request. I spent all day looking into how to fix a CORS error as that was what it was throwing me. The best I got was an opaque response - which shows me that my syntax was correct but does not provide any data. Not exactly a win.",
      "That said, there is (theoretically - obv haven't tried this yet) a way to make it work but it involves creating a backend to this thing and making a proxy URL and request to make it work. So stretch goal.",
      "Luckily, day 2 is going far better than day 1.",
      "I not only was able to get the age guessing app using the agify api (there has to be a shorter description of this somewhere!) up and running but was able to get routing and start entering data for this blog as well as a rudimentary skeleton format for it. Pretty good day, even if my name is apparently approaching an age where it can collect social security.",
    ],
  },
  {
    id: "3",
    date: "2/16/2022 5:17 AM",
    title: "Sleepless in Maple Valley",
    subtitle: "",
    text: [
      "Before you ask, I haven't ever seen the movie. Still, those years thinking I was going to be a journalist have had a pretty lasting effect on my naming conventions. Groan all you want, I like puns.",
      "Ok, I know it is 5:07 in the morning. I did try to sleep, I swear. But I kept thinking in bed about how I wanted to get the blog working and with minimal effort, I did this morning.",
      "I should have known better - that a few minutes quickly turns into an hour when I'm working on something. Still, I'm not tired enough to warrant bed.",
      "So it turns out I was looking in the wrong place for my datasets on Monday. The government has been doing a pretty excellent facelift on their data and making it much more accessible. If you haven't yet, and are in need of an API, you may want to check out data.gov. There are a wealth of APIs and docs there for layman and developer alike. It's government, so it is hit or miss with how well the upkeep is on them.",
      "I think the one for today should be this: https://power.larc.nasa.gov/api/pages/. Seems to be a study of solar energy fluxes around the globe. I'm sure that's a gross oversimplification, so if you are interested in more about this, head over to https://power.larc.nasa.gov/docs/methodology/. Should be interesting.",
      "I did really have my heart set on the one that studied yeast infections in space, but the homepage for it wouldn't load and I can't have another crashdata on my hands. Especially not when I'm up at 5:07 in the morning.",
    ],
  },
  {
    id: "4",
    date: "2/16/2022 10:34 PM",
    title: "I Need JSON Data",
    subtitle: " (Or How I Learned To Love The Thrash)",
    text: [
      "I got some sleep. I didn't get enough sleep. I feel like I am just around the corner from a breakthrough but need to take a break for a moment.",
      "For two hours now I have been thrashing in front of Buffy the Vampire Slayer. After all, no one is paying me for my time on this. I'm doing it out of the kindness of my heart for myself.",
      "What is thrashing? https://practice.geeksforgeeks.org/problems/what-is-the-cause-of-thrashing. That's nto what I meant. Geez. Too tired to summarize or rubber duck. But I am proud of my template haiku.",
    ],
  },
  {
    id: "5",
    date: "2/17/2022 6:32 PM",
    title: "Well Rested",
    subtitle: "",
    text: [
      "Thank the code gods. I got the NASA albedo readings to render. A feat of hurclean might today - especially looking over garbage code from yesterday. As CJ says, I needed some sleep to sharpen my tools. Coming back to it, it looks like my code editor was suffering quite a bit from me working back and forth between laptop and desktop. Things all over - junk code in every direction. What a difference it made coming back and being ready to tackle it after that very late night tuesday.",
      "It's ugly, but it is functional. I'll call that a win. Gonna focus on some easier APIs because I am behind by two today. Will go look after I make this commit and maybe get some food.",
      "I'm happy to report that part of why I got started so late today was that I had an interview. And I have a few more calls scheduled soon, so that's good. Trying not to get hung up on any one opportunity as this is all a numbers game. Someone's gotta see I've got moxy though. Will keep sharpening my skills until they do. Stay hungry, choombatta.",
    ],
  },
  {
    id: "6",
    date: "2/17/2022 8:39 PM",
    title: "CORS",
    subtitle: "The dread response",
    text: [
      "Ugh. It was going so well. CORs policy blocking the shibe API. You gotta be kidding me. I really don't want to have to set up a backend in a day. I am two APIs behind schedule and the simple dog picture API isn't pulling. I might cry.",
      "One of my parameters when taking this on was that I need to do this with APIs I haven't used before. Just to be fair. I have principles, after all.",
      "I mean, if I did more translations from the Star Trek translator api (since they have more than just vulcan and klingon - actually have a bunch) I could probably have it fetch 20 something results per query. Technically would be all different API calls, right? Technically correct-the best kind of correct.",
      "Still - I'm not that desperate yet. But Friday is tomorrow.",
      "Clock is ticking.",
    ],
  },
  {
    id: "7",
    date: "2/17/2022 9:06 PM",
    title: "Easy Win",
    subtitle: "(Better Than Nothing)",
    text: [
      "Ok, it isn't much. And it doesn't take data. But I got the simple API accessed on the click of a button. Maybe later I can add maps so you can see it. But that's another API call and I just need to do 5 by Friday, then I can improve upon them and make things better.",
      "Thinking I'll convert this to a proper portfolio site next week. Aggregate all the little things I've done that actually work.",
      "Been a good show of architecture and speed so far as well as setbacks. Leaving a few of the modules that don't work yet in so that when I get around to doing that backend proxy I can come around to them.",
      "Been reading that react is set up to do Node out of the box. Does that mean that I can possibly host these if I do have a Node backend on something free? Will need to look into this.",
      "Of the stretch goals that I am really looking forward to is that blog editor. Really wishing I had a better interface than JSON. Don't get me wrong, I appreciate what it does, but not so easy on the eyes. Or the quotation marks.",
    ],
  },
  {
    id: "8",
    date: "2/17/2022 10:31 PM",
    title: "Thrashing, Part Deux",
    subtitle: "Electric Boogaloo(?)",
    text: [
      "Ok, thrashing. I'm tired but not too tired to write my thoughts coherently right now. And that's the key.",
      "Anyway, I forgot to tell you about thrashing. Thrashing is this thing you do when you have spent too long in front of a screen. It's technically the other thing I mentioned the other day. TODO: ADD LINK WHEN YOU HAVE MORE TIME. But I meant it colloquially. Like one thrashes wheat. To wildly flail with abandon.",
      "It's something my node teacher said when he could tell I was overwhelmed. And it's a hard habit to grow out of. To feel confident enough to move forward. But the more I put in the work the less I feel that. Of course there are some nerves and imposter syndrome. What dev doesn't feel the cards stacked against them at the beginning of their career change?.",
      "We're all terrified of being told that we can't make the cut. I think about it all of the time. My father was an electrical design engineer until around 1997. But when I was a child I saw him succumb to imposter syndrome. And he had a masters degree. It's easy to get really discouraged while looking for work. For a while I was, and I forgot about why I wanted to do this. The only thing that fixes that is touching code.",
      "And let's face it, I thrive on spite, and on being told no. I've climbed mountains because I was told I couldn't. I've learned things in record time because people told me it would be difficult. I thrive on that. I don't thrive on inactivity though. I wither there. It's been really freeing to get my mind back. And honestly to give my thoughts an outlet. JSON data, you're not so bad.",
    ],
  },
  {
    id: "9",
    date: "2/19/2022 1:19 AM",
    title: "Cascading Style Sleep",
    subtitle: "The Real MVP",
    text: [
      "Got it done. Skin of my teeth and not ideal, but got it done and with formatting. This was a few hours ago but I took a little time to watch 'Harvey' which appears to be a film made about the dangers of lobotomy without a clear idea of how it was enforced at all. I have thoughts, but I'm sure they're not coherent enough for film criticism.",
      "Lots to work on this next week to get this presentable. Need a back end. Ruby or Node? Got a neat dynamic navbar coming too but was too tired and too distracted to work on it tonight. Would like to build out the DND API into its own thing. (Separate repl or portfolio?) Perhaps both.",
      "They just re released Cyberpunk 2077. I'm gonna check it out. Did pretty much all of the missions when it came out but might be nice to go back there. Plus it fits with the theme this week.",
      "So sleep well my chooms - for tomorrow we ride at around 1 pm because I have some sleep debt to work off.",
      "And don't forget, dreamers, information is supposed to be free. Let's keep it that way.",
      "Zenith out.",
    ],
  },
  {
    id: "10",
    date: "2/20/2022 1:32 AM",
    title: "Information Should be Free",
    subtitle: "Transparency & Full Disclosure",
    text: [
      "Where do you draw the line? I guess I haven't made a comment button on this iteration of the blog. I'm using it as a notepad right now though. If you got here, you probably know me already. Or you can probably look me up on linkedin. I go by Roz Albrecht there",
      "You know, I used to be afraid to enter my shortened name. I used to be afraid of a lot of things. Too afraid to ask smart people about what they do because I was told it was rude. But in reality, the smart people who like what they do - they can really teach you a lot. I have learned many things by being curious and attentive when smart people are speaking. The key is learning when to listen. And learning that the time to listen is kind of always.",
      "This can be hard. I'm not discounting that.",
      "This can be really hard because you are told that is uncouth to ask about work. That doing a thing is locked behind a phd or a masters degree or another person's sign off.",
      "But it is not locked behind the degree if you know when to ask someone else about it and trust them. I've been really lucky lately. I know a lot of very intelligent people who have a myriad of skills. And I frequently ask them for help. And they offer it.",
      "What do we get out of it? (you may ask)",
      "That's the trouble. We forget why people do things. People want to feel needed. We often forget when we are trying to focus on survival that we need to reserve a sacred place for things we enjoy. You can't always be on. You may be able to be on all of the time for a week or two, but you must protect the balance. You must find things that refresh you and sharpen your tools - whatever that means for you.",
      "What have I been doing these last few months? Surviving. Treading water. Trying not to drown in a flood of responsibilities and the feeling like I didn't have agency of my own life.",
      "If you told me json data would be the reason I could begin to get that back two months ago, I would have laughed in your face.",
      "Thing is, I usually don't figure out what I need until after I have it. And I needed JSON data. But I found the real answers to a lot of things that have been troubling me in the comments.",
      "I suppose at the core of all of this is that if someone finds this and reads it one day I want them to know that they can do anything they please, and should do it anyway. Learn that thing they told you you couldn't. Challenge yourself. Give them the middle finger and do it anyway.",
      "We all love an underdog, don't we? Be the underdog. Prove them wrong.",
      "And as you pick things up, don't be afraid of the questions. The questions are always worth asking. There are no stupid questions - though we have been socialized to believe differently. There are people who are not there to provide answers, someitmes. And that is fine. So move on, ask the next guy. We want to help. Someone will want to help. It'll be ok. Put yourself out there.",
      "Nothing ventured - nothing gained.",
      "The thing I have learned from doing this and being in this world and being friendds with other devs is that everyone has a real level of imposter syndrome.",
      "Sometimes there are healthy wake up calls - like that interview I failed because I hadn't really touched code in quite some time and it showed - oof. But realistically I find that what more people need to hear is not the barriers to entry but the fact that they can do it too.",
      "I was watching Painting With John a few weeks back and he said '...not everyone can paint...' and very cleverly followed it up with a qualifier saying everyone could but loses their imagination or their ability to believe they can. (I hope I'm getting that right - this was a while ago I watched this.)",
      "I think this is true with code. But it's not something you can lose forever. Soemtimes it is something you forget from time to time. I think I forgot it for a while.",
    ],
  },
  {
    id: "11",
    date: "2/20/2022 2:42 AM",
    title: "You have hands",
    subtitle: "(a mantra)",
    text: [
      "This is what I tell myself when I want to fix something or want to find out how it is made.",
      "There's something really awesome about being able to begin to see the world this way. The opportunities are endless. Sadly, time is not. What to choose?",
      "I need to implement tags and filtering on here soon. And that editor. That is quickly becoming apparent as I am typing this. I need the site not to break but I will have to go through and review each of these posts for formatting and it is very quickly becoming apparent that I really really need an editor to submit these and a back end. I'm thinking of learning next.js. I like the level of obfuscation from React itself because honestly I'm sick of seeing the insane warnings every time I NPM and I'm going to level with you that when facebook says something isn't broken it's not exactly coming from a source that doesn't have some skin in the game.",
      "I'm no cyber security expert, mind you, and I'm probably wrong - but I really like digging into the packages when I hear of vulnerability. I finally bought hosting for a site, so I'll have to set that stuff up soon and put on my big girl pants and make a proper portfolio site.",
      "In the past, I've kind of started with this grand idea that needs to be perfect to execute, and so I've had a lot of code that just never got to be written. Because of this, I think I've missed the very valuable opportunity of being wrong. Being wrong is lovely, becuase once someone calls you out on it, you can get better and be better. And I think that's beautiful. If you don't yet, that's ok, but I thin you'll feel better once you learn to embrace the suck, the fail, the flail, the snap, and trust the process.",
      "Either way, hats off to you - choom! Go make something amazing today - regardless of the medium!",
      "Zenith out. :)",
    ],
  },
  {
    id: "12",
    date: "2/22/2022 2:18 PM",
    title: "cPanel",
    subtitle: "What very much not to do",
    text: [
      "After spending all day yesterday fighting with cpanel, I've decided taht I should probably give up and go live in the woods instead. I know what to forage. There's wood sorrel out here in abundance and in the summer, blackberries. I've even done that intro to mycology lecture. I know what chicken of the woods looks like. I'd be prepared for this. I could build a celtic roundhouse. I understand the concept of wattling. I can get a decent fire going. I'll be fine. And most important the amount of effort required to live in the woods is far less than the amount of effort I'm exerting trying to understand cpanel for the first time.",
      "Joking aside, jeez this is the hardest part of programming I've run into. I've done about everything but deployment and this is a nightmare. Unlike most things I can google, there are about a thousand tutorials for this but none of them seem to account for whatever stupid thing I did on the way to getting here.",
      "CJ even helped me and I still haven't been able to get it up and running. He thinks that when we started one fo the processes that it is still running in the background on the node server. I think he's on to something because I remember that being mentioned.",
      "I was able to find this tutorial: https://www.youtube.com/watch?v=F0ORxJWZ_D8 which covered the steps I hadn't known about for react specifically deployment specifically. I feel like maybe I'm missing something else here, but I want to start with that lead CJ had. I've found that though he doesn't share my stack, he is an excellent troubleshooter with very good instincts. Besides, cpanel is turning my brain to mush so I'm happy to take direction.",
      "Per CJ, he thinks I should start by looking into PuTTY and ssh in. Found where it was on Cpanel at the bottom and just got it installed.",
      "This video https://www.youtube.com/watch?v=Ci6WixP3YaE looks like it was a good place to start but at around 2:11 I run into a problem when PuTTY won't type. Saw someone said to restart the service via command line but I wasn't able to get this working, just got an error message so I'm probably typing something wrong. I tried looking in services and it said that it was stopped. I'm going to try restarting my computer - maybe that will shake it back into working. Plus my poor old Clippy probably needs a rest. (Don't act like y'all don't name your computers. Or that you didn't love that adorable paperclip at least a little bit! He just wanted to help!)",
      "Back. Tried to correct putty problem again - no dice. Tried to update setting for keyboard - program disappears and blips out of existence. Lovely. Saw someone fixed the problems I'm having by nuking cpanel altogehter. This seems like a good option to me since I don't have anything on there yet anyway and probably did a bunch more harm than good. Anything I set up was set up wrong anyway. Gonna go this route.",
      "Ok done, just like this says: https://www.pickaweb.co.uk/kb/factory-reset-your-cpanel-account/. Fingers crossed. Coffee ready.",
      "Got it up and running. I did a bunch of stuff I didn't need to, it turns out. https://davenewman.tech/blog/host-react-namecheap/. This will be helpful wehn I add the node server. Not sure that htaccess file I made does anything at all tbh. Will prob need to config when I get around to that.",
    ],
  },
  {
    id: "13",
    date: "2/20/2022 4:38 PM",
    title: "cPanel - React Application (no node server yet)",
    subtitle: "What to do",
    text: [
      "Don't do whatever I was doing in the last entry, that's for darn sure. Was way off.",
      "Ok, ok seriously. Here are the steps I took. If you are in my position from my last entry, may God have mercy on your soul and I hope you're able to do what I am here or figure it out somehow.",
      "Wiped everything I started in cpanel to start over.",
      "type npm run build in console",
      "In build folder, zip files so that they don't take up too much memory for cpanel to handle. It's a delicate flower. You can name it whatever but it must have a name or it won't show up in your folder when you go to move it and you'll have to delete that folder. Go on, ask me how I know.",
      "Go to file manager in cpanel. Open public_html.",
      "Unzip that file, baby!",
      "Say a hail mary and type in the domain.",
      "This worked for me and after two days of banging my head against this I sincerely hope I've been able to save you some of my pain points.",
      "If it didn't work and you're now considering a career making artisinal bread instead, let me know. (I really like sourdough.)",
    ],
  },
  {
    id: "14",
    date: "2/22/2022 8:18 PM",
    title: "Speaking in Tongues",
    subtitle: "Internationalizing and using the i18next library",
    text: [
      "https://blog.shahednasser.com/how-to-internationalize-a-react-app/ been trying to begin implementing i18next when I realized it doesn't quite do what I think it did. I thought it would provide the translations to me already but it does not. It's more a system of setting up the files so that you can then provide language support of converted documents. Basically, I would have to run this thing through a translator to provide this and save the JSON file. Gotta be an easier way though.",
      "So here is what I'm thinking. I found this API called yandex for translating. I'm trying to keep this cheap, and they seem to be pretty robust and offer a range of services from this. Gonna look more into this. But for right now I should probably reign it in. I've made a dynamic dropdown and began setting up for that kind of support but don't have the energy to run this thing through an API. Gonna start with the code I have for 1:18 though. If I wanted to do it without an API I could probably run this through google translate. But still, awful lot of work wehn I could just do it automated in the start. A little bit of upfront for a lot less work later on. Plus if I do end up trying to sling some shopify sites on the side, this will make qualifying for translation a ton easier.",
    ],
  },
  {
    id: "15",
    date: "2/22/2022 9:43 AM",
    title: "I fibbed",
    subtitle: "",
    text: [
      "Ok, I lied. I didn't quit. Didn't want to leave it half dead so I spent a little extra time getting this working. Got the i18next part working. When I set up my server, I think that I should make a process that runs this stuff through an API and then can save the translations. That alone should be enough to show off some skills I think. Plus, this stuff was complex to implement. I sure bet that someone out there can probably benefit from this.",
      "Also this is assuaging a little bit of my guilt for being an American who can't rub two sentences together in anythign other than javascript. I took French for four years. The only thing I know how to say in it is 'do you want to rollerblade with me' and I'm not even confident enough to type that in French here without a translator.",
    ],
  },
  {"id": "16", "date": "2/23/2022 2:13 AM", "title": "Getting Sassy", "subtitle":"", "text": ["https://www.youtube.com/watch?v=kpcjSaRngg8&t=932s", "As much as I would like to work on the language problem as that is interesting I'm reaching out to the dev community to find out a little more about that package and if it is even necessary if I am going to be writing in node. For right now I think I am going to focus on coding in English first so that I have something to show recruiters. I'll put the practice I made into a page a bit deeper in for now until I get the server set up. Right now my challenges are in implementing the wider architecture that is going to allow for this to be easier later on. Specifically SASS, redux, and getting that node server built out to communicate back and forth." ]},
];

// {"id": "0", "date": "2/20/2022 1:32 AM", "title": "New Template Haiku", "subtitle":"Reaching Across Disciplines", "text": ["Human & JS", ]},
