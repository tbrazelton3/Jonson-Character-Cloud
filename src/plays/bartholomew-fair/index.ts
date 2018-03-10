import { characters } from "app/bartholomew-faire";

export const PLAY = {
	title: 'Bartholomew Fair',
	description: 'Bartholomew Fair takes place on the feast day of St. Bartholomew, a holiday celebrated with a major late-summer festival. The comedy follows the activities of the citizens who make their way to the fair for a variety of reasons and the fair folk who entertain and take advantage of them. The play begins in the office of a proctor (ecclesiastical lawyer), John Littlewit. A series of London citizens come into Littlewit’s office for various reasons - to court his mother-in-law, to commiserate about hangovers, and to acquire a marriage license. They all decide to go to Bartholomew Fair. Meanwhile, at the Fair, a number of fairgoers prepare to receive the townfolk and Justice Overdo disguises as the madman, Arthur of Bradley, so that he can spy on the fairgoers and catch them breaking the law. After a series of pranks, thefts, and brawls, both the fairfolk and the townfolk gather to watch a puppet play (motion) written by John Littlewit and performed by the puppeteer, Lantern Leatherhead. The hypocritical Puritan, Zeal-of-the-Land Busy, engages in a debate (which he loses) with the puppets over the morality of the theater. Justice Overdo, newly compassionate and hospitable, invites people back to his house to continue the party.',
	characters: {
		littleWit: { name: 'Littlewit', description: 'character description' },
		winTheFight: { name: 'Win-the-Fight', description: 'character description' },
		winWife: { name: 'Winwife', description: 'character description' },
		quarlous: { name: 'Quarlous', description: 'character description' },
		wasp: { name: 'Wasp', description: 'character description' },
		cokes: { name: 'Cokes', description: 'character description' },
		grace: { name: 'Grace', description: 'character description' },
		dameOverdo: { name: 'Dame Overdo', description: 'character description' },
		solomon: { name: 'Solomon', description: 'character description' },
		damePurecraft: { name: 'Dame Purecraft', description: 'character description' },
		zealOfTheLand: { name: 'Zeal-of-the-Land', description: 'character description' },
		busy: { name: 'Busy', description: 'character description' },
		justiceOverdo: { name: 'Justice Overdo', description: 'character description' },
		leatherhead: { name: 'Leatherhead', description: 'character description' },
		trash: { name: 'Trash', description: 'character description' },
		ursula: { name: 'Ursula', description: 'character description' },
		mooncalf: { name: 'Mooncalf', description: 'character description' },
		costermonger: { name: 'Costermonger', description: 'character description' },
		knockem: { name: 'Knockem', description: 'character description' },
		edgeworth: { name: 'Edgeworth', description: 'character description' },
		nigtingale: { name: 'Nightingale', description: 'character description' },
		corncutter: { name: 'Corncutter', description: 'character description' },
		tinderboxMan: { name: 'Tinderbox Man', description: 'character description' },
		passengers: { name: 'Passengers', description: 'character description' },
		captWhit: { name: 'Capt Whit', description: 'character description' },
		haggis: { name: 'Haggis', description: 'character description' },
		bristle: { name: 'Bristle', description: 'character description' }
	},

	acts: [{
		title: 'Act I',
		description: 'The opening act takes place in John Littlewit’s law office. We are introduced to his pregnant wife, Win-the-Fight. She fakes a craving for roast pig, available only at the fair, so that she and her husband get approval from Win’s wealthy mother, Dame Purecraft, to go to the fair. We also meet John Littlewit’s drinking buddies, Quarlous and Winwife. Winwife is courting Dame Purecraft, but is not making much headway because Dame Purecraft has been told that she must marry a madman within the week by a fortune-teller. Littlewit completes a marraige license, made out for his client, Bartholomew Cokes. Cokes is a man-child whose every move is watched and critiqued by his irascible tutor, Wasp. Cokes’s sister, Mistress Overdo, has betrothed him to her ward, Grace Wellborn. Grace is much too good for Cokes, but must marry him or pay a fine that would take up most of her inheritance.',
		scenes: [
			{
				title: '1.1',
				characters: ['littleWit', 'winTheFight'],
				description: 'Littlewit announces Bartholomew Cokes’ marriage on St. Bartholomew’s Day and talks about the marriage license, Win enters and Littlewit compliments her hat',
				questions: ['Why does Jonson make Win’s character so submissive to Littlewit(she barely says a word when he’s complimenting her hat)']
			},
			{
				title: '1.2',
				characters: ['winTheFight', 'littleWit', 'winTheFight'],
				description: 'Winwife kisses Win, and talks about his desire to marry her mother, Dame Purecraft, a rich widow. They also mention another unnamed suitor for Dame Purecraft (who we eventually find out is Zeal-of-the-land).',
				questions: ['Why are women mostly referenced in terms of the men (wife, fiance, a person of romantic interest), as sorts of objects of conquest or points of contention/rivalry for the men? Will this kind of objectification be constant throughout, or will there be character development of female characters? ']
			},
			{
				title: '1.3',
				characters: ['quarlous', 'winWife', 'littleWit', 'winTheFight'],
				description: 'Quarlous enters and Littlewit asks him about the previous night, but Quarlous does not remember because they had been drinking. It becomes evident how dumb Littlewit is because Quarlous kisses his wife, and Littlewit lets him continue even though his wife is uncomfortable.',
				questions: []
			},
			{
				title: '1.4',
				characters: ['wasp', 'winTheFight', 'littleWit', 'quarlous'],
				description: 'Talk about how irritable Wasp is because he has to put up with Cokes. Wasp has a tirade about Cokes’ incompetence, that he has a “head full of bees.” Wasp insults Littlewit and Win, calling them both equally dumb.',
				questions: ['Why does Cokes refer to Wasp as Numps?']
			},
			{
				title: '1.5',
				characters: ['wasp', 'cokes', 'grace', 'dameOverdo', 'littleWit', 'winTheFight', 'quarlous', 'winWife'],
				description: 'They are headed towards the fair (all characters). Cokes gets the box with his marriage license. Cokes, Wasp, Dame Overdo, Grace exit to head to fair. Winwife decides to stop looking for a widow temporarily and head to the fair with Quaralous. Littlewit explains to Win how they can trick Purecraft into letting them go to the Fair. He says WIn should fake a pregnancy craving for pig, so that Purecraft will feel she must allow Win to go to the fair and get some. Littlewit exits to go get Purecraft',
				questions: ['Why does Littlewit feel so sure that a pregnancy craving will convince Purecraft to let them go to the fair?']
			},
			{
				title: '1.6',
				characters: ['solomon', 'littleWit', 'winTheFight', 'damePurecraft', 'zealOfTheLand', 'busy'],
				description: 'Dame Purecraft, the widowed mother of Win, arrives. Purecraft mentions that her upbringing was the purest and doesn’t understand Win’s desire for pig. She wants Win to fight the  urge for pig. Then Zeal-of-the-Land Busy, Purecraft’s boyfriend, arrives. Purecraft tells Busy that Win has a craving to eat pig at the fair. Busy explains how the longing is a carnal disease and at first doesn’t want to go. Littlewit convinces Purecraft and Busy to go to the fair by convincing them that  Win’s pregnancy is at stake if they don’t go to the fair. They are convinced to go to the fair. Win and Littlewit plan to leave Purecraft and Busy in the  booth at the Pig place so they can go enjoy the fair. Busy explains how eating pig aligns with his anti-semitic views as they leave for the fair.',
				questions: ['Why does Jonson make Zeal-of-the-Land Busy (the Puritan villain) such a strongly anti-Semitic character?',
					'Why do they still eat pig even though it was said that it shouldn’t be eaten?']
			}
		]
	}, {
		title: 'Act II',
		description: 'Act synopsis',
		scenes: [
			{
				title: '2.1',
				characters: ['justiceOverdo'],
				description: 'He reveals that he is going undercover to seek out criminals at the fair. Talks about the different sins at the fair and how he wants to stop them.  He also talks about how no one else is at the fair that will look for sins so he must do it himself.',
				questions: ['Why would Ben Johnson include a long speech like this at the beginning of the play?  He is trying to establish Justice Overdo as a character, practically this also gives the actors a chance to set up the stage and prepare.',
					'Why does the play’s structure feel so all over the place and hectic? Is there actually an order to it, or is it naturalistic? Does it observe Aristotelian unities?',
					'Why does Justice Overdo choose the disguise of Arthur of Bradley?'
				]
			},
			{
				title: '2.2',
				characters: ['leatherhead', 'trash', 'ursula', 'justiceOverdo', 'mooncalf', 'costermonger'],
				description: ' Vendors offer their products and conversate. Justice judges the nature of the vendors in a very pretentious manner based on their appearances.',
				questions: ['Why does Ben Jonson include the comments of Justice? How does this develop Justice’s personality towards other characters? The scenery introduces the tone of the fair as the characters interact with each other. Justice is better developed as a character that judges others.']
			},
			{
				title: '2.3',
				characters: ['knockem', 'ursula', 'justiceOverdo', 'mooncalf'],
				description: 'Ursula converses with Knockem. Justice starts to think that Knockem is a bad person based on where he comes from.',
				questions: ['Why does Ben Jonson include an aside with Justice Overdo and minor characters? Why is this aside important to the play?',
					'What can Bartholomew Fair’s depiction of the fair folk versus the wealthy widow (Dame Purecraft), the lawyer (Littlewite), and the gentry (Grace, Quarlous, Winwife)  tell us about social class in the period?'
				]
			},
			{
				title: '2.4',
				characters: ['edgeworth', 'nigtingale', 'corncutter', 'tinderboxMan', 'passengers',
					'leatherhead', 'trash', 'justiceOverdo', 'mooncalf', 'ursula', 'knockem'],
				description: 'The fair workers have gathered together and are setting up their booths. Overdo is there in disguise, trying to identify the cutpurses. Ursula is directing everyone to get set for the beginning of the fair as they all are laughing, drinking, and joking around. It is revealed that the fair workers share in the purses that are stolen. Overdo is assessing the situation and feels that the innocent youth are being corrupted by this event and the present company. Overdo decides that he wants to save Mooncalf from the corruption of the fair during an aside.',
				questions: ['Why does Justice feel this moral obligation to overstep his jurisdiction to seek out the morally depraved rather than take his cases as they are reported to him? Are the judgements made on the fair workers appropriate or are they warped by Overdo’s preconceived notions?']
			},
			{
				title: '2.5',
				characters: ['winWife', 'quarlous', 'ursula', 'knockem'],
				description: 'Quarlous and Winwinfe go to the fair and are approached by all of the different fair people. Eventually they start to get fed up with the agressive approaches and start picking fights with the fair people. The fight appears to be a fight between the two classes, and on the premise of class. The most prominent fight is between Ursula and Quarlous and Winwife. During this fight Knockem starts to insult Quarlous and Winwife and the fight escalates. Eventually, Ursula comes out with a hot pan and ends up burning her own leg when she falls.',
				questions: ['Why is this fight necessary to the overall drama/plot in the play? Why did Jonson include this fight scene, what does it symbolize?',
					'Do you think it is significant that it is between two men and a woman?',
					'Why do the characters use such personal and rude insults when fighting back and forth?'
				]
			},
			{
				title: '2.6',
				characters: ['cokes', 'wasp', 'dameOverdo', 'grace', 'edgeworth', 'nigtingale'],
				description: 'Overdo tells Cokes about the evil substances at the fair such as tawny weed tobacco, and liquor. Edgeworth steals Cokes’ purse, while Nightingale sings as a distraction. Edgeworth is caught stealing the purse by wasp. Everyone blames Overdo and he ends up getting beaten by wasp (dramatic irony because we know that is was not Overdo, but the characters are convinced it was). Cokes says it’s fine because it’s not even his best purse and he gets out his other one and waves it around pretentiously.',
				questions: ['The fight between Overdo and Wasp symbolize the personality of Wasp. Also adds to the drama and humor of the play.',
					'Also characterizes Overdo by his discussion of the sins of the fair.',
					'Shows how ostentatious and frivolous Cokes is.']
			},
		]
	}, {
		title: 'Act III',
		description: 'Act III synopsis',
		scenes: [
			{
				title: '3.1',
				characters: ['leatherhead', 'trash', 'captWhit', 'haggis', 'bristle'],
				description: '...',
				questions: ['How is this scene significant in the development of the plot of the play?']
			},
			{
				title: '3.2',
				characters: ['quarlous', 'winWife', 'busy', 'captWhit', 'knockem', 'littleWit', 'damePurecraft', 'ursula', 'mooncalf'],
				description: 'They go to get the pig, The Puritan Busy is the rival of Winwife for Purecraft.  Ursula and Mooncalf decide to give the more expensive ale to these people because they seem to be from the city. Quarolous is telling Winwife to go after Purecraft now since she is drinking and eating pigs and would be down.  Winwife does not pursue her now though.',
				questions: ['What does this scene show about Winwife’s Character?  What does this show about the difference between the fair people and the people of the city during this time?']
			},
			{
				title: '3.3',
				characters: ['justiceOverdo', 'winWife', 'quarlous'],
				description: 'Overdo monologues about how he deserves his punishment because he stood by while the theft took place.',
				questions: ['Why does Quarlous seem to be omniscient, but Justice Overdo tragically lacking in judicial ability? How is this scene a result of Overdo’s hypocrisy earlier in the play?']
			},
			{
				title: '3.4',
				characters: ['cokes', 'quarlous', 'wasp', 'leatherhead', 'trash'],
				description: '‘Master’ Cokes likes what he sees at the fair, and keeps on wanting to buy this thing or that from Leatherhead or Trash. Wasp sarcastically comments that Cokes might as well buy the entire shop,  but when Cokes wants to go through with it, protests. In the end, Cokes forked up the shillings for both shops.',
				questions: ['Cokes was hell bent on his made decision, which is why Wasp bent to his will.',
					'Why does Quarlous seem to get so much fun out of this whole situation?',
					'How could this all situation be traced to the incompetent protectorship of Wasp?'
				]
			},
			{
				title: '3.5',
				characters: ['dameOverdo', 'justiceOverdo', 'cokes', 'edgeworth', 'nigtingale', 'wasp', 'quarlous', 'winWife', 'grace'],
				description: 'Edgeworth keeps trying to pick Cokes’s pocket and then Justice Overdo gets blamed and is taken away. Winwife and Quarlous observe and ask Edgeworth to steal Cokes’s license which Wasp has.',
				questions: ['How does Justice Overdue getting blamed affect the other characters and their perceptions of him? What do Winwife and Quarlous think will happen when Edgworth steals Coke’s license?'
				]
			},
			{
				title: '3.6',
				characters: ['littleWit', 'winTheFight', 'trash', 'knockem', 'busy', 'damePurecraft', 'leatherhead'],
				description: 'Littlewit and Win discuss how to stay at the Fair longer. They decide to have Win desire to see more at the Fair. Busy describes the sinfulness of the Fair. He says its idolatry and “the seat of the Beast.” Leatherhead asks Busy to stop and leave. Busy destroys Trash’s stall of gingerbread. Busy is taken away by officers and Purecraft follows them out. Littlewit and Win leave to do more at the Fair.',
				questions: ['Why does Ben Jonson include Busy’s tirade about religious righteousness and the sinful nature of idolatry? What does Littlewit and Win’s trickery reveal about their character and how they feel about Busy?']
			},
		]
	}]

}
/*

1.2 article: Katherine Gillen, SEL: Studies in English Literature. “Female Chastity and Commoditized selfhood in Bartholomew Fair” 2015 Spring; 55 (2): 309-326
 This essay argues that female chastity figures centrally in BartholomewFair's exploration of early capitalist subjectivity. In the play, Jonson suggests that the market compromises masculinity and posits Grace Wellborn's self-conscious commoditization of her own sexual agency as a strategy for navigating commercial markets. Through Grace, Jonson revises dominant models of subject formation to account for the emergence of a bourgeois self in relation to early modern commercial forces that are often understood as compromising personal autonomy. Jonson then applies this model of commoditized subjectivity to the commercial playwright, linking his own agency as an author to his ability to negotiate the market.

2.1 article: “In Defense of the Marketplace: Spontaneous Order in Jonson’s Bartholomew Fair.” Paul A. Cantor, Ben Jonson Journal 8(1) pp 23-64. 
Argues that the play is more organized and neo-classical than it seems and that there are reasons behind the digressions.

2.1 article: Faber, Paul. “Overdo’s Mad Moniker: ‘Arthur of Bradley’ in Jonson’s Bartholomew Fair.” Ben Jonson Journal, 20.1 (2013): 126-13. 
History of the ballad of Arthur of Bradley 



Act III

3.2
Who? Quarlous, Winwife, Busy, Whit, Knockem, Littlewit, Purecraft, Ursula, Mooncalf
What? 
Why?   
3.3
Who? Overdo, Winwife, Quarelous
What?  
Why? 

3.4
Who? Cokes, Quarlous, Wasp, Letterhead, Trash 
What? 
Why?  

3.5
Who? Mistress Overdo, Justice Overdo, Cokes, Edgeworth, Nightingale, Wasp, Quarlous, Winwife, Grace
What? 
Why? 
3.6
Who? Littlewit, Win, Trash, Knockem, Busy, Purecraft, Leatherhead
What? 
Why?  
Act IV
Act V

*/