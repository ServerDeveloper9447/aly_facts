const list = `Wants to learn C++
Knows HTML a little
Has a PS5 with no games in it
Used to hangout but now cannot
Found out Discord is a bit weird
Dies after she heard djsv13 is hard
Low brain memory
Cannot remember stuff
Cries all time
Doesn't eat much
Lost a bf cuz he cheat
Sometimes goes mental
Always sad
Lives alone in a warehouse
Has nothing but a pet cat
She likes sex idk why
Always sad
Does not know how npms work (she does sort of)
A Programmer girl
Weak memory so can't remember anything
Always hungry but does not eat
Can't understand DJS
Has no friends
Now uses VSC to code
Hates pinapple on pizza
Not good at JavaScript at all
Alyssa loves spotify <3
Huge fan of JSAB and Undertale musics
Likes doing pixelarts.. sort of
Uses rainmeter visualizers a lot
Omega Flowey gives her nightmares
Has a bot made in DJS
Not-the-best girl in college but everyone in college simps for her`.split('\n');

function getFact(){
    const facts = [list], question_pack = facts[Math.floor(Math.random() * facts.length)], question = question_pack[Math.floor(Math.random() * question_pack.length)];
    return question;
  }

function getAllFacts(){
  const facts = [list]
  return facts;
  }

function version(){
  const version = require(__dirname + '/package.json').version
  return version;
  }

function getAlyPics() {
  const pics = `https://cdn.discordapp.com/attachments/861820792769609779/885484400098312202/20210813_232101.jpg,https://cdn.discordapp.com/attachments/861820792769609779/885484400916168744/lonely-anime-girl-in-sunset.jpg,https://cdn.discordapp.com/attachments/861820792769609779/885484401541140491/en.png,https://cdn.discordapp.com/attachments/861820792769609779/885858749296803930/wp5519333.png,https://cdn.discordapp.com/attachments/861820792769609779/885858749628182570/340867.jpg,https://cdn.discordapp.com/attachments/861820792769609779/885858749980508160/3ca5aba7771f6d6221805ff0f8ff0b85.jpg,https://cdn.discordapp.com/attachments/861820792769609779/885858750416683058/wp5773794.jpg,https://cdn.discordapp.com/attachments/861820792769609779/885858750722887731/4ea276f680693524510bdb3821817a58.jpg`.split(',');
  const pictures = [pics], pack = pictures[Math.floor(Math.random() * pictures.length)], pic = pack[Math.floor(Math.random() * pack.length)];
    return pic;
}
module.exports = {
  getFact,
  getAllFacts,
  version,
  getAlyPics
}
