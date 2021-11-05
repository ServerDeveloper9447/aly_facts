const list = `Wants to learn C++,Knows HTML a little,Has a PS5 with no games in it,Has a low end device which she always uses except high end which she never use,Used to hangout but now cannot,Always falls to the ground because medicine reactions,Found out Discord is a bit weird,Dies after she heard djsv13 is hard,Low brain memory, Cannot remember stuff,Cries all time,Takes medicinefull syringe all day,Doesn't eat much,Doesn't sleep at all until takes medicine,Lost a bf cuz he cheat,Sometimes goes mental,Always sad,Lives alone in a warehouse,Has nothing but a pet cat,She likes sex idk why,Always sad,Does not know how npms work,Noob at coding so working with aoi,Weak memory so can't remember anything,Always hungry but does not eat,Overdose on sleep medicines,Can't understand DJS,Uh sleep medicines are my life,Has no friends`.split(',');

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
