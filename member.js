function skillsMember()
{
    var skills = ['JavaScript', 'React', 'Node', 'Python', 'Django'];
    return skills;
}

// Path: admin.js
function skillsAdmin()
{
    var skills = ['JavaScript', 'React', 'Node', 'Python', 'Django', 'Angular', 'MongoDB'];
    return skills;
}

// Path: main.js
var memberSkills = skillsMember();
var adminSkills = skillsAdmin();
console.log(memberSkills);
console.log(adminSkills);

// Output:
// ["JavaScript", "React", "Node", "Python", "Django"]
// ["JavaScript", "React", "Node", "Python", "Django", "Angular", "MongoDB"]