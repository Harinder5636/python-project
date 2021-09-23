const skills = [
    {id: 125223, skill: 'Typing', Completed: true},
    {id: 127904, skill: 'Checking', Completed: false},
    {id: 139608, skill: 'Looking Up', Completed: false}
    ];
    
    module.exports = {
      getAll,
      getOne,
      create,
      deleteOne
    };
    
    function deleteOne(id){
      const idx = skills.findIndex(skill => skill.id === parseInt(id));
      skills.splice(idx, 1);
    }
    function getAll() {
      return skills;
    }
    
    function getOne(id) {
        // Use the Array.prototype.find iterator method
        return skills.find(skill => skill.id === parseInt(id));
        }

        function create(skill) {
          // Add the id
          skill.id = Date.now() % 1000000;
          // New todos wouldn't be done :)
          skill.done = false;
          skills.push(skill);
        }
      // Add the id