const list = `cries all time,Takes medicinefull syringe all day,Doesn't eat much,Doesn't sleep at all until takes medicine,Lost a bf cuz he cheat,Sometimes goes mental,Always sad,Lives alone in a warehouse,Has nothing but a pet cat,She likes sex idk why,always sad,does not know how npms work,noob at coding so working with aoi,Weak memory, so can't remember anything,that's my age (till oct-9),always hungry but does not eat,Overdose on sleep medicines,Can't understand DJS,uh sleep medicines are my life,have no friends`.split(',');

function fact(){
    const facts = [list], question_pack = facts[Math.floor(Math.random() * facts.length)], question = question_pack[Math.floor(Math.random() * question_pack.length)];
    return question;
  }

module.exports = {
    fact
}