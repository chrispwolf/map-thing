export default function filmingLocations(req,res){
    res.status(200).json({
        "type": "FeatureCollection",
        "name": "Filming locations LA",
        "features": [
            { "type": "Feature", "properties": { "Name": "Poltergeist", "description": "The terrifyingly haunted house on an Indian burial ground in Poltergeist is actually (appropriately?) in Simi Valley." }, "geometry": { "type": "Point", "coordinates": [ -118.7113044, 34.2996732 ] } },
            { "type": "Feature", "properties": { "Name": "The Craft (1996)", "description": "The picturesque Verdugo Hills High School tucked away in the North Valley has been a popular filming location for decades, but its use in 1996’s The Craft represents one of its most notable on-screen appearances. In real life, it’s not a private Catholic institution but part of the LAUSD public school system." }, "geometry": { "type": "Point", "coordinates": [ -118.2984759, 34.2615932 ] } },
            { "type": "Feature", "properties": { "Name": "Poltergeist II", "description": "After their Orange County tract home (actually in Simi Valley) literally imploded in the original Poltergeist, the Freelings relocated to this cozy Craftsman-style house “in Phoenix” for the sequel. Of course, the spooks didn't have to travel quite that far to re-terrorize Carol Anne, as the home is actually located in suburban Altadena." }, "geometry": { "type": "Point", "coordinates": [ -118.1180742, 34.1894247 ] } },
            { "type": "Feature", "properties": { "Name": "Invasion of the Body Snatchers", "description": "Fans of the original Invasion of the Body Snatchers can step into the fictional town of Santa Mira by taking a stroll along Sierra Madre’s Kersting Court, which becomes Grand Central for alien intruders in the 1956 classic. The cozy downtown’s “Everytown, America” feel offers a fitting backdrop for whatever Eisenhower-era metaphor you choose to ascribe to the film." }, "geometry": { "type": "Point", "coordinates": [ -118.0528845, 34.162871 ] } },
            { "type": "Feature", "properties": { "Name": "Christine", "description": "In the classic murderous car movie Christine, Arnie’s girlfriend Leigh lives in one of the oldest surviving Victorian homes in Monrovia, built in 1887." }, "geometry": { "type": "Point", "coordinates": [ -118.0048392, 34.1581677 ] } },
            { "type": "Feature", "properties": { "Name": "Friday the 13th: The Final Chapter", "description": "This private home in rural Topanga Canyon was made famous by Friday the 13th: The Final Chapter, the dishonestly-titled slasher sequel that saw Jason Voorhees stalking a new crop of teenagers (including a spasmodically-dancing Crispin Glover) at Camp Crystal Lake. Its remote location lent itself well to a number of subsequent horror films, including Pumpkinhead, Ed Gein, and Friday the 13th Part VII: The New Blood." }, "geometry": { "type": "Point", "coordinates": [ -118.5920163, 34.1187719 ] } },
            { "type": "Feature", "properties": { "Name": "Buffy the Vampire Slayer", "description": "Frank Lloyd Wright’s famous Ennis House has appeared in many, many productions, including the 1959 B-movie House on Haunted Hill and the television series Buffy the Vampire Slayer (as Spike, Dru, and Angel’s house)." }, "geometry": { "type": "Point", "coordinates": [ -118.2929406, 34.1162223 ] } },
            { "type": "Feature", "properties": { "Name": "'Halloween' Strode house", "description": "You don’t see much of it in the movie, but this is where Laurie Strode lives in Halloween." }, "geometry": { "type": "Point", "coordinates": [ -118.1555565, 34.1135356 ] } },
            { "type": "Feature", "properties": { "Name": "‘Nightmare on Elm Street’ \/ ‘Buffy the Vampire Slayer’", "description": "has appeared in many, many films, but notably played “the school” in both A Nightmare on Elm Street and the original film version of Buffy the Vampire Slayer." }, "geometry": { "type": "Point", "coordinates": [ -118.2771922, 34.1077961 ] } },
            { "type": "Feature", "properties": { "Name": "‘Halloween’ Wallace house", "description": "Laurie’s BFF Annie is babysitting at the Wallace’s house when she’s murdered; afterward, Michael Myers hangs out and peers creepily out the windows. The home has been altered dramatically since the movie was filmed." }, "geometry": { "type": "Point", "coordinates": [ -118.3607377, 34.0992738 ] } },
            { "type": "Feature", "properties": { "Name": "‘Halloween’ Doyle house", "description": "Laurie Strode is stalked through the Doyle’s house on North Orange Grove, which is actually across the street from the Wallace’s house, where her friend Annie was babysitting (until her murder)." }, "geometry": { "type": "Point", "coordinates": [ -118.3601878, 34.0990486 ] } },
            { "type": "Feature", "properties": { "Name": "Scream 2", "description": "While the exterior and lobby of Scream 2’s opening scene were filmed at South Pasadena’s now-shuttered Rialto Theatre, Jada Pinkett Smith’s Maureen Evans met her untimely end inside the Vista’s expansive Egyptian-themed auditorium. In a nod to this history, the theater hosted a revival screening of the first Scream in 2016." }, "geometry": { "type": "Point", "coordinates": [ -118.2869533, 34.0984672 ] } },
            { "type": "Feature", "properties": { "Name": "‘Nightmare on Elm Street’ Thompson house", "description": "The nightmare was on North Genesee is located on a tree-lined street in Hollywood, and a recent owner admits she used to be freaked out by the basement (for good reason!). She told Zillow she did a gut reno and then, property records show, sold the place in 2013 for $2.1 million." }, "geometry": { "type": "Point", "coordinates": [ -118.3578599, 34.0970733 ] } },
            { "type": "Feature", "properties": { "Name": "‘Scream 3’\/‘Halloween H20’", "description": "Silver Lake’s Canfield-Moreno Estate, aka The Paramour Mansion, aka The Crestmont, is big in horror sequels that were made too late—it played the Stab 3 movie producer’s house in Scream 3 and Hillcrest Academy High School in Halloween H20: 20 Years Later. Now, you can rent it for your wedding." }, "geometry": { "type": "Point", "coordinates": [ -118.2719359, 34.0947753 ] } },
            { "type": "Feature", "properties": { "Name": "The Ring", "description": "Katie (aka Amber Tamblyn) lived and died in this 1924 Hancock Park house in The Ring." }, "geometry": { "type": "Point", "coordinates": [ -118.3374973, 34.0788201 ] } },
            { "type": "Feature", "properties": { "Name": "‘Nightmare on Elm Street’ boiler room", "description": "The dark, steamy boiler room where the maniacal Freddy Krueger would take his youthful victims was shot in the old Lincoln Heights Jail, another Los Angeles city landmark. Plans to redevelop the jail are in the works." }, "geometry": { "type": "Point", "coordinates": [ -118.2250539, 34.0774518 ] } },
            { "type": "Feature", "properties": { "Name": "‘Nightmare on Elm Street: Dream Warriors’", "description": "The psychiatric institution where Freddy Krueger stalks his sleep-deprived teenage victims in Nightmare on Elm Street: Dream Warriors is actually Royce Hall, one of UCLA’s four original buildings. The red-brick structure’s Romanesque Revival architecture—modeled after the Sant’Ambrogio Church in Milan—offers an appropriately foreboding backdrop for what many consider the greatest of the Elm Street sequels." }, "geometry": { "type": "Point", "coordinates": [ -118.4420926, 34.0728244 ] } },
            { "type": "Feature", "properties": { "Name": "‘Thriller’", "description": "This Victorian used for exteriors in the John Landis-directed music video for Michael Jackson “Thriller” has made its historic Angelino Heights neighborhood very popular on Halloween." }, "geometry": { "type": "Point", "coordinates": [ -118.2544636, 34.069719 ] } },
            { "type": "Feature", "properties": { "Name": "‘Prince of Darkness’ church", "description": "John Carpenter’s 1987 cult classic was filmed at the former Japanese Union Church in Little Tokyo, whose Colonial architecture now houses the Union Center for the Arts and hosts performances by Asian-American theater company East West Players. In 2015, the film—whose action centers around a cylinder of Satanic green liquid—screened there over two nights to a packed house." }, "geometry": { "type": "Point", "coordinates": [ -118.2403161, 34.0508062 ] } },
            { "type": "Feature", "properties": { "Name": "American Horror Story", "description": "This Country Club Park house designed by Alfred Rosenheim around 1908 was home to some seriously creepy shit in the first season of American Horror Story. In real life, it’s a work of art, with stained glass windows, a set of Tiffany glass doors, and six Batchelder tile fireplaces." }, "geometry": { "type": "Point", "coordinates": [ -118.3172676, 34.0500842 ] } },
            { "type": "Feature", "properties": { "Name": "Ghostbusters", "description": "The Ghostbusters caught their very first ghost (Slimer) in the ballroom at the Sedgewick Hotel, a.k.a. the Millennium Biltmore Downtown. The hotel’s stairway also played the stairway in the insane Shandor building." }, "geometry": { "type": "Point", "coordinates": [ -118.2541501, 34.0497246 ] } },
            { "type": "Feature", "properties": { "Name": "Linda Vista Community Hospital", "description": "Before the Linda Vista Community Hospital, built in 1905, was turned into housing for seniors, it was featured in loads of horror films and shows. Very few are worth mentioning, but they include Dexter, The Cell, Children of the Corn 666: Isaac’s Return, Day of the Dead 2: Contagium, and Insidious: Chapter 2." }, "geometry": { "type": "Point", "coordinates": [ -118.2169686, 34.0382285 ] } },
            { "type": "Feature", "properties": { "Name": "The People Under the Stairs", "description": "The Thomas W. Phillips Residence is a Los Angeles Historic-Cultural Monument, and it played the funeral home in Wes Craven’s The People Under the Stairs." }, "geometry": { "type": "Point", "coordinates": [ -118.3069744, 34.035867 ] } },
            { "type": "Feature", "properties": { "Name": "Drag Me to Hell", "description": "The hodgepodge, vaguely Gothic architecture of the historic Doheny Mansion (part of Mount Saint Mary’s Downtown campus) gives it an eerie look that’s perfect for a horror movie. In Sam Raimi’s wicked 2009 spookfest Drag Me to Hell, it hosted the dual seances that unleash the demonic Lamia." }, "geometry": { "type": "Point", "coordinates": [ -118.2780143, 34.0308494 ] } },
            { "type": "Feature", "properties": { "Name": "‘Night of the Creeps’ sorority house\n", "description": "The action of Fred Dekker’s cult 1986 sci-fi\/zombie movie is centered around the Kappa Delta sorority house, which, in real life, most recently housed the fraternity FIJI, until it was suspended from campus." }, "geometry": { "type": "Point", "coordinates": [ -118.2802981, 34.0270773 ] } },
            { "type": "Feature", "properties": { "Name": "‘The Entity’ house", "description": "This unassuming El Segundo home played host to an extraordinary battle with the supernatural in the terrifying 1983 shocker, which was inspired by a real-life case of alleged paranormal activity in Culver City. The house of the real-life incident is located about seven miles north." }, "geometry": { "type": "Point", "coordinates": [ -118.4114953, 33.9229163 ] } },
            { "type": "Feature", "properties": { "Name": "Mulholland Drive", "description": "Some would argue Mulholland Drive isn’t a horror movie, but the infamous scene at Winkie’s Diner qualifies as a terrifying short film all on its own. In reality, the Sunset Boulevard greasy spoon—actually called Caesar's—is located far from Hollywood in the South Bay city of Gardena." }, "geometry": { "type": "Point", "coordinates": [ -118.2925538, 33.9162241 ] } },
            { "type": "Feature", "properties": { "Name": "Carrie", "description": "Most of the high school scenes for the original Carrie (e.g., Carrie covered in pig’s blood) were shot at the former campus of Hermosa Beach’s Pier Avenue Junior High. Today, it’s a community center." }, "geometry": { "type": "Point", "coordinates": [ -118.3939915, 33.8641931 ] } }
        ]
    })
}