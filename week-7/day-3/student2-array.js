function Student() {
  this.grades = [];

  this.addGrade = function(s, g) {
    this.grades.push({subject: s, num: g});
  };

  this.getCount = function() {
    var output = {};
    this.grades.forEach(function(grade) {
      if (!(grade.subject in output)) {
        output[grade.subject] = 0;
      }
      output[grade.subject]++
    });
    return output;
  };

// 2 reduce
//  this.getCount = function() {
//    return this.grades.reduce(function(output, grade) {
//      if (!(grade.subject in output)) {
//        output[grade.subject] = 0;
//      }
//      output[grade.subject]++;
//      return output;
//    });
//  };


  this.getAverage = function() {
    sum = 0;
    this.grades.forEach(function(grade) {
      sum += grade.num
    });
    return sum / this.grades.length;
  };
};

var dezso = new Student();
dezso.addGrade('matek', 5);
dezso.addGrade('matek', 4);
dezso.addGrade('matek', 4);;
dezso.addGrade('rajz', 1);
dezso.addGrade('rajz', 3);
dezso.addGrade('magyar', 4)
console.log(dezso.getCount());
console.log(dezso.getAverage());
